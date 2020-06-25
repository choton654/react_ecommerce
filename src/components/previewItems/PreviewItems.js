import React from 'react';
import { connect } from 'react-redux';
import { addItems } from '../../redux/cart/cartActions';
import CustomeButton from '../customeButton/CustomeButton';
import './previewItems.scss';

function PreviewItems({ item, addItems }) {
  const { name, imageUrl, price } = item;
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
      <CustomeButton inverted onClick={() => addItems(item)}>
        ADD TO CART
      </CustomeButton>
    </div>
  );
}

const mapDispatchtoProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
});

export default connect(null, mapDispatchtoProps)(PreviewItems);
