import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/Header';
import { GlobalStyle } from './global.style';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import Homepage from './pages/homepage/Homepage';
import { CollectionOverviewPageContainer } from './pages/ShopPage/CollectionOverviewPageContainer';
import { CollectionPageContainer } from './pages/ShopPage/CollectionPageContainer';
import SigninSignup from './pages/signinsignup/SigninSignup';
import { fetchCollections } from './redux/shop/shopAction';
import { selectCollectionOverview } from './redux/shop/shopSelector';
import { currentUserSelector } from './redux/user/selector';
import { checkUserSession } from './redux/user/userAction';

const App = ({ checkUserSession, fetchCollections, currentUser }) => {
  useEffect(() => {
    checkUserSession();
    fetchCollections();
  }, [checkUserSession, fetchCollections]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={CollectionOverviewPageContainer} />
        <Route exact path='/shop/:id' component={CollectionPageContainer} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SigninSignup />)}
        />
      </Switch>
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: currentUserSelector,
  collectionsArray: selectCollectionOverview,
});

const mapDispatchtoProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
