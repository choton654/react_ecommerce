import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import Homepage from './pages/homepage/Homepage';
import { CollectionOverviewPageContainer } from './pages/ShopPage/CollectionOverviewPageContainer';
import { CollectionPageContainer } from './pages/ShopPage/CollectionPageContainer';
import SigninSignup from './pages/signinsignup/SigninSignup';
import { fetchCollections } from './redux/shop/shopAction';
import { selectCollectionOverview } from './redux/shop/shopSelector';
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
      this.props.fetchCollections();
      console.log('componentDidmount run');
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
          <Route
            exact
            path='/shop'
            component={CollectionOverviewPageContainer}
          />
          <Route exact path='/shop/:id' component={CollectionPageContainer} />
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
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
