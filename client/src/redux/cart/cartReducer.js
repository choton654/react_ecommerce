import { cartTypes } from './cartTypes';
import { addToCartItem, removeItem } from './utils';

const initState = {
  hidden: false,
  cartItems: [],
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addToCartItem(state.cartItems, action.payload),
      };
    case cartTypes.REMOVE_CART_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
    case cartTypes.REMOVE_ITEMS:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
