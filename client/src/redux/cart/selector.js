import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  cartSelector,
  (cart) => cart.cartItems,
);

export const hiddenSelector = createSelector(
  cartSelector,
  (cart) => cart.hidden,
);

export const cartItemCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((accu, current) => accu + current.quantity, 0),
);

export const cartItemTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce(
      (accu, current) => accu + current.quantity * current.price,
      0,
    ),
);
