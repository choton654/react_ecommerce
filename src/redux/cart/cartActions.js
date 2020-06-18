import { cartTypes } from './cartTypes';

export const cartAction = () => ({
  type: cartTypes.TOGGLE_CART,
});

export const addItems = (item) => ({
  type: cartTypes.ADD_ITEMS,
  payload: item,
});
