import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import ContactPage from '../pages/ContactPage';
import ProductListPage from '../pages/ProductListPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';


const Page = () => {

    return (
       <>
       <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/products" component={ProductListPage} />
      <Route path="/product/:id" component={ProductPage} /> 
      {/* id oznacza dowolny element wybrany przez kliknięcie w link*/}
      <Route path="/admin" component={AdminPage} />
      <Route path="/login" component={LoginPage} />
      <Route component={ErrorPage} />
      </Switch>
      </>
    );
}

export default Page;