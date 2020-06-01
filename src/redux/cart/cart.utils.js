export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItems) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
      )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // Finding items which ID is equal to the removed item
  const existingCartItems = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItems.quantity === 1) {
    // Filter only keeps when condition is true. So here, we return all the items which ID don't match the removed one, so we exlude the selected item
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => 
    // For each cartItem, is the ID equal to the removed item ID ?
    cartItem.id === cartItemToRemove.id 
    // If so, we keep all of cartItem object properties, and we only change the quantity, removing one
    ? {...cartItem, quantity: cartItem.quantity - 1}
    // If not, then we keep it as is
    : cartItem
    )
}

