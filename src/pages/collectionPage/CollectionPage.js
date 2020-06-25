import React from 'react';
import { connect } from 'react-redux';
import PreviewItems from '../../components/previewItems/PreviewItems';
import { selectCollection } from '../../redux/shop/shopSelector';
import './collectionPage.scss';

const CollectionPage = ({ collection }) => {
  console.log('collection', collection);
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <PreviewItems className='collection-item' key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStatetoProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStatetoProps)(CollectionPage);
