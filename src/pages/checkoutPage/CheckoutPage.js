import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import {
  cartItemsSelector,
  cartItemTotalSelector,
} from '../../redux/cart/selector';
import './checkoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className='total'>TOTAL: ${total}</span>
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: cartItemTotalSelector,
});

export default connect(mapStatetoProps)(CheckoutPage);
