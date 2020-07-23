import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'
import { Route, Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/orders' component={Orders}></Route>
          <Route path='/checkout' component={Checkout}></Route>
          <Route path='/' exact component={BurgerBuilder}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
