import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { cartAction } from '../../redux/cart/cartActions';
import { cartItemsSelector } from '../../redux/cart/selector';
import CartItem from '../cartItem/CartItem';
import CustomeButton from '../customeButton/CustomeButton';
import './cartdropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-msg'>Your Cart Is Empty</span>
        )}
      </div>
      <CustomeButton
        onClick={() => {
          history.push('/checkout');
          dispatch(cartAction());
        }}>
        GO TO CHECKOUT
      </CustomeButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
