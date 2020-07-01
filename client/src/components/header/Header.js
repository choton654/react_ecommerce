import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hiddenSelector } from '../../redux/cart/selector';
import { currentUserSelector } from '../../redux/user/selector';
import { signOutUser } from '../../redux/user/userAction';
import { ReactComponent as Logo } from '../assets/crown.svg';
import CartDropdown from '../cartDropdown/CartDropdown';
import CartIcon from '../carticon/CartIcon';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './hreader.style';

const Header = ({ currentUser, hidden, signOutUser }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => signOutUser()}>
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

const mapDispatchToProps = (dispatch) => ({
  signOutUser: () => dispatch(signOutUser()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
