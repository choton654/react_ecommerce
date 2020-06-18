import React from 'react';
import CustomeButton from '../customeButton/CustomeButton';
import './cartdropdown.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomeButton>GO TO CHECKOUT</CustomeButton>
    </div>
  );
};

export default CartDropdown;
