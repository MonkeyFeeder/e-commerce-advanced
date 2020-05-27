import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

// History is of Routine
// Dispatch in props is for when you don't want to write a whole other mapDispatchToProps. If there's only one argument passed in the first brackets,
// the dispatch is automatically in the props, so you can destructure it in the props, and call dispatch(functionName) 
  const Cart = ({ cartItems, history, dispatch }) => {
  return(
    <div className="cart-dropdown">
      <div className="cart-items" />
      {cartItems.length ?
      ( cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      ) : (
      <span className="empty-message">Your cart is empty</span>
      )
    }
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));