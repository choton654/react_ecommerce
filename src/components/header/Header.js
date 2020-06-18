import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { ReactComponent as Logo } from '../assets/crown.svg';
import CartDropdown from '../cartDropdown/CartDropdown';
import CartIcon from '../carticon/CartIcon';
import './header.scss';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo-container'>
          {' '}
          <Logo />
        </div>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            <span>{currentUser.displayName}</span> SIGN OUT
          </div>
        ) : (
          <Link to='/signin'>SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

const mapStatetoProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStatetoProps)(Header);
