import React from 'react';
import './previewItems.scss';

function PreviewItems({ id, name, imageUrl, price }) {
  return (
    <div className='collection-item'>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className='image'
      />
      <div className='collection-footer'>
        <div className='name'>{name}</div>
        <div className='price'>${price}</div>
      </div>
    </div>
  );
}

export default PreviewItems;
