import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInWithEmail } from '../../redux/user/userAction';
import CustomeButton from '../customeButton/CustomeButton';
import FormInput from '../formInput/FormInput';
import './signin.scss';

export class Signin extends Component {
  state = {
    email: '',
    password: '',
  };

  handelSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.signInWithEmail(email, password);
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
          {/* <CustomeButton type='submit' onClick={signinWithGoogle}>
            Sign In With Google
          </CustomeButton> */}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInWithEmail: (email, password) =>
    dispatch(signInWithEmail({ email, password })),
});

export default connect(null, mapDispatchToProps)(Signin);
