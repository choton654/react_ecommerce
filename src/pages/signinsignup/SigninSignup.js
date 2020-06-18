import React from 'react';
import Signin from '../../components/signin/Signin';
import Signup from '../../components/signup/Signup';
import './signinsignup.scss';

const SigninSignup = () => {
  return (
    <div className='signin-signup'>
      <Signin />
      <Signup />
    </div>
  );
};

export default SigninSignup;
