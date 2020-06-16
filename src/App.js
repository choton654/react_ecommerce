import React from 'react';
import Homepage from './pages/Homepage';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const HatComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={HatComponent} />
      </Switch>
    </div>
  );
}

export default App;
