import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase';
import { hiddenSelector } from '../../redux/cart/selector';
import { currentUserSelector } from '../../redux/user/selector';
import { ReactComponent as Logo } from '../assets/crown.svg';
import CartDropdown from '../cartDropdown/CartDropdown';
import CartIcon from '../carticon/CartIcon';
// import './header.scss';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './hreader.style';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            <span>{currentUser.displayName}</span> SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: hiddenSelector,
});

export default connect(mapStatetoProps)(Header);
