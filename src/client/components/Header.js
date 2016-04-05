

import React from 'react';
import { Link } from 'react-router'

export default class Header extends React.Component {

  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <header >
            </header>
            <a className="navbar-brand" href="/">DonorContact</a>
            <Link to="/quiz">Quiz</Link>
            <Link to="/explore">Explore</Link>
          </div>
        </div>
      </div>
    )
  }

}
