import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview';
import { convertCollectionSnapshotToMap, db } from '../../firebase/firebase';
import { storeCollections } from '../../redux/shop/shopAction';
import CollectionPage from '../collectionPage/CollectionPage';

class ShopPage extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const collectionRef = db.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      this.props.mapCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    console.log(match);
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
            loading ? <h2>loading...</h2> : <CollectionPage {...props} />
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  mapCollections: (collections) => dispatch(storeCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
