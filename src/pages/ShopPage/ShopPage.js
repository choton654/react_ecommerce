import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview';
import { fetchCollections } from '../../redux/shop/shopAction';
import {
  collectionLoadedSelector,
  loadingSelector,
} from '../../redux/shop/shopSelector';
import CollectionPage from '../collectionPage/CollectionPage';

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { loading, collectionLoaded } = this.props;
    return (
      <div className='shop-page'>
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
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: loadingSelector,
  collectionLoaded: collectionLoadedSelector,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
