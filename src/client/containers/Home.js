import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './Home.less'

import { COMPANY_NAME, COMPANY_MISSION } from '../constants'
import { increase, decrease } from '../actions/count'

function select(state) {
  return  { number: state.count.number }
}

class Home extends React.Component {

  render() {
    return (
      <div className="home-container">
        <div className="container">
          <div className="jumbotron">
            <h1>{ COMPANY_NAME }</h1>
            <h2><small>{ COMPANY_MISSION }</small></h2>
            <Link to="/dashboard">
              <button className="btn btn-primary">
                Login
              </button>
            </Link>
          </div>
        </div>
          {/*
          <div className="container">
          Some state changes:
          {number}
          <button onClick={() => increase(1)}>Increase</button>
          <button onClick={() => decrease(1)}>Decrease</button>
          </div>
          */}
      </div>
    )
  }
}

export default connect(select)(Home)
