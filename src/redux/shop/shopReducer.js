const initState = {
  collections: null,
};

export const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case 'STORE_COLLECTIONS':
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
