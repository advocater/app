
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import * as reducers from './reducers'
import routes from './routes'

const reducer = combineReducers({ ...reducers, routing: routerReducer })
const logger = createLogger()
const store = compose(applyMiddleware(thunk, logger))(createStore)(reducer)
const history = syncHistoryWithStore(browserHistory, store)

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
