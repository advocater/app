
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browseHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';


import App from './containers/App.jsx';
import HomePage from './containers/HomePage.jsx';
import AboutPage from './containers/AboutPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';

import reducers from './reducers';

const reducer = combineReducers({
  reducers,
  routing: routerReducer
});

const loggerMiddleware = createLogger();

const store = createStore(reducer);

const history = syncHistoryWithStore(browseHistory, store);


class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route component={ App }>
            <Route path="/" component={ HomePage } />
            <Route path="/about" component={ AboutPage } />
          </Route>
          <Route path="/login/" component={ LoginPage } />
          <Route path="/signup/" component={ SignUpPage } />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
