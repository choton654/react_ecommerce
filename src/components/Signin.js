import React, { Component } from 'react';
import CustomeButton from './CustomeButton';
import FormInput from './FormInput';
import './signin.scss';

export class Signin extends Component {
  state = {
    email: '',
    password: '',
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handelChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='signin'>
        <h1>I have already have an account</h1>
        <p>Login with email and password</p>
        <form onSubmit={this.handelSubmit}>
          <FormInput
            type='email'
            name='email'
            label='email'
            value={this.state.email}
            handelChange={this.handelChange}
          />
          <FormInput
            type='password'
            name='password'
            label='password'
            value={this.state.password}
            handelChange={this.handelChange}
          />
          <CustomeButton type='submit'>Sign In</CustomeButton>
        </form>
      </div>
    );
  }
}

export default Signin;
