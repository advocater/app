// Candidate Login
// Candidate Page
// Candidate Dashboard

// Quiz
//   Use Cases:
//      1. Organic Inbound Traffic - Goal: Who I match with?
//      2. Candidate Referred Traffic - Goal: How closely do I really match with the candidate?

// Quiz Results

// -> company.com
// ---> company.com/explore // Candidate Page
// ---> company.com/quiz    // Quiz (Spam) Redirects to explore
// -----> company.com/quiz/:state/:candidate // Redirects to candidate profile
// ---> company.com/about   // About


// -> member.company.com // Candidate Login
// --->

// Company Shit

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App, Home, Dashboard, Poll, User, Quiz } from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="dashboard" component={Dashboard} />
    <Route path="poll/:id" component={Poll} />
    <Route path="user/:id" component={User} />

    <Route path="quiz" component={Quiz} />

  </Route>
)
