import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      //Reduce prend une fonction (1er argument) et une valeur initiale
      (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
      0
    ) 
)