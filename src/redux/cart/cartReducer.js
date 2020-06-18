import { cartTypes } from './cartTypes';

const initState = {
  hidden: false,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export { cartReducer };
