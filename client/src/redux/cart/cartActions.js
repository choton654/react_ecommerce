import { cartTypes } from './cartTypes';

export const cartAction = () => ({
  type: cartTypes.TOGGLE_CART,
});

export const addItems = (item) => ({
  type: cartTypes.ADD_ITEMS,
  payload: item,
});

export const removeItemsfromCart = (item) => ({
  type: cartTypes.REMOVE_CART_ITEMS,
  payload: item,
});

export const decreaseCartItem = (item) => ({
  type: cartTypes.REMOVE_ITEMS,
  payload: item,
});
