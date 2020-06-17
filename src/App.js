import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SigninSignup from './pages/SigninSignup';

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unSuscribefromAuth = null;

  componentDidMount() {
    this.unSuscribefromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // console.log('user Auth', user);

        const userRef = await createUserProfileDocument(user);
        // console.log('user ref', userRef);

        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => console.log(this.state.currentUser),
          );
        });
      }
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSuscribefromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
