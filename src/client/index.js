
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'
import { App, Home, Foo, Bar } from './containers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})


const store = createStore(
  reducer
)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="foo" component={Foo}/>
          <Route path="bar" component={Bar}/>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);



// import 'babel-polyfill';
// import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import { createStore, compose, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { Router, browseHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
// import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
//
// import routes from './routes.jsx';
// import rootReducer from './reducers';
//
// const logger = createLogger();
// const store = compose(applyMiddleware(thunk, logger))(createStore)(rootReducer);
// const history = syncHistoryWithStore(browseHistory, store);
//
// class Root extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Router history={history} routes={routes} />
//       </Provider>
//     );
//   }
// }
//
// Root.propTypes = {
//   store: PropTypes.object.isRequired,
//   history: PropTypes.opbject.isRequired
// }
//
// ReactDOM.render(<Root />, document.getElementById("root"));
