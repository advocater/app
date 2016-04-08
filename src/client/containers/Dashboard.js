
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import * as actions from '../actions'

import './Dashboard.less'

// Seed data
// let polls = require('../../../lib/data/polls.json')

function select(state){
  return { polls: state.polls }
}

class PollSummary extends React.Component {

  render() {
    let poll = this.props.poll
    let effectiveness = poll.polls_responded / poll.polls_sent
    return (
      <tr key={this.props.id}>
        <td>{poll.question}</td>
        <td>{poll.start}</td>
        <td>{poll.end}</td>
        <td>{poll.polls_responded} / {poll.polls_sent}</td>
      </tr>
    )
  }

}

class Dashboard extends React.Component {

  componentDidMount() {
    this.refreshPolls()
  }

  refreshPolls() {
    let { dispatch } = this.props
    dispatch(actions.fetchPolls())
  }

  render() {
    let i = 0;
    let { polls } = this.props
    // console.log(polls.map(poll => console.log(i++)))
    console.log(polls.polls)
    return (
      <div className="dashboard-container">
        <div className="breadcrumb container">
          Add a new poll
        </div>
        <div className="panel panel-default container">
          <div>
            There are currently {polls.polls.length} polls.
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Poll Questions</th>
                <th>Date</th>
                <th>Time</th>
                <th>Effectiveness</th>
              </tr>
            </thead>
            <tbody>
              {polls.polls.map((poll) => {
                <PollSummary key={poll.id} poll={poll} />
              })}

              <tr key={1}>
                <td>{"How did I do in last night's debate?"}</td>
                <td>{Date.now()}</td>
                <td>{Date.now()}</td>
                <td>{10} / {100}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


export default connect(select)(Dashboard)
