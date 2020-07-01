import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview';
import { loadingSelector } from '../../redux/shop/shopSelector';
import WithSpinner from './loadingHOC';

const mapStateToProps = createStructuredSelector({
  isLoading: loadingSelector,
});

export const CollectionOverviewPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionOverview);
