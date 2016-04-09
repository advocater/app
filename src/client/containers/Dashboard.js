
import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

import { PollsTable } from '../components'

import './Dashboard.less'

function select(state){
  return { polls: state.polls, responses: state.responses }
}

class Dashboard extends React.Component {

  componentDidMount() {
    this.refreshPolls()
    this.refreshResponses()
    this.refreshUsers()
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
