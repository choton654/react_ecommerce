import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCollectionOverview } from '../src/redux/shop/shopSelector.js';
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
        const userRef = await createUserProfileDocument(user);

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
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/shop/:id' component={CollectionPage} />
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
  collectionsArray: selectCollectionOverview,
});

const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(userAction(user)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
