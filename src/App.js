import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import CollectionOverview from './components/collectionOverview/CollectionOverview';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import CollectionPage from './pages/collectionPage/CollectionPage.js';
import Homepage from './pages/homepage/Homepage';
import SigninSignup from './pages/signinsignup/SigninSignup';
import { fetchCollections } from './redux/shop/shopAction';
import {
  collectionLoadedSelector,
  loadingSelector,
  selectCollectionOverview,
} from './redux/shop/shopSelector';
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
    const { collectionLoaded, loading } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          {/* <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/shop/:id' component={CollectionPage} /> */}
          <Route
            exact
            path='/shop'
            render={(props) =>
              loading ? <h2>loading...</h2> : <CollectionOverview {...props} />
            }
          />
          <Route
            exact
            path='/shop/:id'
            render={(props) =>
              !collectionLoaded ? (
                <h2>loading...</h2>
              ) : (
                <CollectionPage {...props} />
              )
            }
          />
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
  collectionLoaded: collectionLoadedSelector,
  loading: loadingSelector,
});

const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(userAction(user)),
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
