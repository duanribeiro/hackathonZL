import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Intro } from './components/intro/intro'

import Home from './views/Home/Home';
import SelectOption from './views/SelectOption/SelectOption';
import Buyer from './views/Buyer/Buyer';
import BuyerInfo from './views/BuyerInfo/BuyerInfo';
import Profile from './views/Profile/Profile';
import Profile2 from './views/Profile2/Profile2';
import Seller from './views/Seller/Seller';


// Aqui acontece o redirecionamento caso o caminho seja digitado na URL
const Routes = () => {
  return (
    <Switch>
      {/* Rotas Públicas */}

      <Route
        component={Home}
        exact
        path="/"
      />

      <Route
        component={SelectOption}
        exact
        path="/select_option"
      />
      <Route
        component={Buyer}
        exact
        path="/buyer"
      />
       <Route
        component={Profile2}
        exact
        path="/profile"
      />
      <Route
        component={Profile}
        exact
        path="/chat"
      />
      <Route
        component={Seller}
        exact
        path="/seller"
      />
      <Route
      component={BuyerInfo}
      path="/buyer_info"
      />

      {/* As rotas abaixo são genéricas, ou seja, não utilizam o parâmetro "exact" */}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;