import React from 'react';
import { connect } from 'react-redux';
import { cartAction } from '../../redux/cart/cartActions';
import { cartItemCountSelector } from '../../redux/cart/selector';
import { ReactComponent as ShoppingBagIcon } from '../assets/shopping-bag.svg';
import './carticon.scss';

const CartIcon = ({ toggleCart, itemcount }) => {
  return (
    <div onClick={() => toggleCart()} className='cart-icon'>
      <ShoppingBagIcon className='shopping-icon' />
      <span className='item-count'>{itemcount}</span>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  itemcount: cartItemCountSelector(state),
});

const mapDispatchtoProps = (dispatch) => ({
  toggleCart: () => dispatch(cartAction()),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(CartIcon);
