import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'
import { Route, Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact component={BurgerBuilder}></Route>
          <Route path='/checkout' component={Checkout}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
