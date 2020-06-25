import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionOverview } from '../../redux/shop/shopSelector';
import Preview from '../preview/Preview';
import './collectionOverview.scss';

const CollectionOverview = ({ collections }) => {
  console.log(collections);

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherProps }) => (
        <Preview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  collections: selectCollectionOverview,
});

export default connect(mapStatetoProps)(CollectionOverview);
