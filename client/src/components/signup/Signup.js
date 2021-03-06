import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../redux/user/userAction';
import CustomeButton from '../customeButton/CustomeButton';
import FormInput from '../formInput/FormInput';
import './signup.scss';

export class Signup extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    rePassword: '',
  };

  handelSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, rePassword } = this.state;

    if (password !== rePassword) {
      alert('password does not match!');
      return;
    }
    this.props.signUpUser(email, password, displayName);
  };

  handelChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='signin'>
        <h1>I dont have an account</h1>
        <p>Register with email and password</p>
        <form onSubmit={this.handelSubmit}>
          <FormInput
            type='text'
            name='displayName'
            label='display name'
            value={this.state.displayName}
            handelChange={this.handelChange}
          />
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
          <FormInput
            type='password'
            name='rePassword'
            label='re password'
            value={this.state.rePassword}
            handelChange={this.handelChange}
          />
          <CustomeButton type='submit'>Sign Up</CustomeButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (email, password, displayName) =>
    dispatch(signUpUser({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(Signup);
