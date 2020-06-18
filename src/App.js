import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SigninSignup from './pages/SigninSignup';
import { userAction } from './redux/user/userAction';

class App extends React.Component {
  unSuscribefromAuth = null;

  componentDidMount() {
    this.unSuscribefromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // console.log('user Auth', user);

        const userRef = await createUserProfileDocument(user);
        // console.log('user ref', userRef);

        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data(),
            },
            () => console.log(this.state.currentUser),
          );
        });
      }
      this.props.setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unSuscribefromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SigninSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(userAction(user)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
