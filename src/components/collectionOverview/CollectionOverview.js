import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewPage from '../../pages/previewPage/PreviewPage';
import { selectCollectionOverview } from '../../redux/shop/shopSelector';
import './collectionOverview.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherProps }) => (
        <PreviewPage key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  collections: selectCollectionOverview,
});

export default connect(mapStatetoProps)(CollectionOverview);
