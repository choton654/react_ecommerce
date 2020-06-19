import React from 'react';
import { connect } from 'react-redux';
import {
  addItems,
  decreaseCartItem,
  removeItemsfromCart,
} from '../../redux/cart/cartActions';
import './checkItem.scss';

const CheckoutItem = ({
  cartItem,
  removeItemsfromCart,
  decreaseCartItem,
  addItems,
}) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseCartItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItems(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => removeItemsfromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  removeItemsfromCart: (cartItem) => dispatch(removeItemsfromCart(cartItem)),
  decreaseCartItem: (cartItem) => dispatch(decreaseCartItem(cartItem)),
  addItems: (cartItem) => dispatch(addItems(cartItem)),
});

export default connect(null, mapDispatchtoProps)(CheckoutItem);
