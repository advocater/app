
import React from 'react';
import { Route } from 'react-router';

import App from './containers/App.jsx';
import HomePage from './containers/HomePage.jsx';
import AboutPage from './containers/AboutPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';

export default(
  <Route path="/" component={ App }>
  </Route>
);
