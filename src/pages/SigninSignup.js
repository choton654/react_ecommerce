import React from 'react';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
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
