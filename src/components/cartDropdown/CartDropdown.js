import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartItemsSelector } from '../../redux/cart/selector';
import CartItem from '../cartItem/CartItem';
import CustomeButton from '../customeButton/CustomeButton';
import './cartdropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <CustomeButton>GO TO CHECKOUT</CustomeButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});

export default connect(mapStateToProps)(CartDropdown);
