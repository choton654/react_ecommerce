import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import CollectionPage from './pages/collectionPage/CollectionPage';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import SigninSignup from './pages/signinsignup/SigninSignup';
import { currentUserSelector } from './redux/user/selector';
import { userAction } from './redux/user/userAction';

class App extends React.Component {
  unSuscribefromAuth = null;

  componentDidMount() {
    this.unSuscribefromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // console.log('user Auth', user);

        const userRef = await createUserProfileDocument(user);
        // console.log('user ref', userRef);

        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data(),
            },
            () => console.log(this.state.currentUser),
          );
        });
      }
      this.props.setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unSuscribefromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/shop/:collectionId' component={CollectionPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SigninSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = createStructuredSelector({
  currentUser: currentUserSelector,
});

const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(userAction(user)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
