const { default: SHOP_DATA } = require('./shopData');

const initState = {
  collections: SHOP_DATA,
};

export const shopReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
