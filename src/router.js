import React from 'react';
// import { Route,BrowserRouter } from 'react-router-dom';
import { Router,Route } from 'react-router';
import browserHistory from 'react-router/lib/browserHistory';

import Home from './Home.js'
import product_details from './pro_dec.js'

export const App = (props) => (
    <Router {...props} history={browserHistory} >
      <Route path="/" component={Home} />
      <Route path="/product_details" component={product_details} />
    </Router>
)