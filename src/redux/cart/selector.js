import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

const cartItemsSelector = createSelector(
  cartSelector,
  (cart) => cart.cartItems,
);

export const cartItemCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((accu, current) => accu + current.quantity, 0),
);
