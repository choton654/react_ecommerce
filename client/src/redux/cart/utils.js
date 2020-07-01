export const addToCartItem = (cartItems, cartItemToAdd) => {
  const existingItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  );

  if (existingItems) {
    return cartItems.map((cartitem) =>
      cartitem.id === cartItemToAdd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  );

  if (existingItems.quantity === 1) {
    return cartItems.filter((cartitem) => cartitem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartitem) =>
    cartitem.id === cartItemToRemove.id
      ? { ...cartitem, quantity: cartitem.quantity - 1 }
      : cartitem,
  );
};
