import React from 'react';
import { connect } from 'react-redux';
import { cartAction } from '../../redux/cart/cartActions';
import { ReactComponent as ShoppingBagIcon } from '../assets/shopping-bag.svg';
import './carticon.scss';

const CartIcon = ({ toggleCart }) => {
  return (
    <div onClick={() => toggleCart()} className='cart-icon'>
      <ShoppingBagIcon className='shopping-icon' />
      <span className='item-count'> 0 </span>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  toggleCart: () => dispatch(cartAction()),
});

export default connect(null, mapDispatchtoProps)(CartIcon);
