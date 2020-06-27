import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/Header';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import Homepage from './pages/homepage/Homepage';
import { CollectionOverviewPageContainer } from './pages/ShopPage/CollectionOverviewPageContainer';
import { CollectionPageContainer } from './pages/ShopPage/CollectionPageContainer';
import SigninSignup from './pages/signinsignup/SigninSignup';
import { fetchCollections } from './redux/shop/shopAction';
import { selectCollectionOverview } from './redux/shop/shopSelector';
import { currentUserSelector } from './redux/user/selector';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCollections();
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
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
