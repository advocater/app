
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'

import * as actions from '../actions'

import { PollsTable } from '../components'

import './Dashboard.less'

// Seed data
// let polls = require('../../../lib/data/polls.json')

function select(state){
  return { polls: state.polls }
}

class Dashboard extends React.Component {

  componentDidMount() {
    this.refreshPolls()
    this.refreshUsers()
    this.refreshResponses()
  }

  refreshPolls() {
    let { dispatch } = this.props
    dispatch(actions.fetchPolls())
  }

  refreshResponses() {
    let { dispatch } = this.props
    dispatch(actions.fetchResponses())
  }

  refreshUsers() {
    let { dispatch } = this.props
    dispatch(actions.fetchUsers())
  }

  renderRow(poll) {
    return (
      <tr key={poll.id}>
        <td>{poll.question}</td>
        <td>{poll.start}</td>
        <td>{poll.end}</td>
        <td>{poll.polls_responded} / {poll.polls_sent}</td>
      </tr>
    )
  }

  render() {
    let polls = this.props.polls.objects
    return (
      <div className="dashboard-container">
        <div className="breadcrumb container">
          Add a new poll
        </div>
        <div className="panel panel-default container">
          <div>
            There are currently {polls.length} polls.
          </div>
          <PollsTable polls={polls} />
        </div>
      </div>
    )
  }
}


export default connect(select)(Dashboard)
