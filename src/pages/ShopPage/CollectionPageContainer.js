import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { collectionLoadedSelector } from '../../redux/shop/shopSelector';
import CollectionPage from '../collectionPage/CollectionPage';
import WithSpinner from './loadingHOC';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !collectionLoadedSelector(state),
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionPage);
