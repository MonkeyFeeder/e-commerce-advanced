import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import Logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} className="logo" alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {
          currentUser ? 
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
// // AU LIEU DE 
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// })

export default connect(mapStateToProps)(Header);