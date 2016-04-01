
import React from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import LandingPage from '../components/LandingPage.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'loggedIn': false
    };
  }

  render() {
    return (
      <div>
        <Header />
        {!this.state.loggedIn && <LandingPage />}
        <Footer />
      </div>
    );
  }
}
