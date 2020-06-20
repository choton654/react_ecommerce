import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe/StripeButton';
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
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: cartItemTotalSelector,
});

export default connect(mapStatetoProps)(CheckoutPage);
