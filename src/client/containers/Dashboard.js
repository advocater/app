
import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

import { PollsTable, PollForm } from '../components'

import './Dashboard.less'

function select(state){
  return { polls: state.polls, responses: state.responses }
}

class Dashboard extends React.Component {

  constructor() {
    super()
    this.state = {
      showAddPollForm: false
    }
  }

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

  showAddPollForm() {
    this.setState({ showAddPollForm: !this.state.showAddPollForm })
  }

  handleSubmit(newPoll) {
    let { dispatch } = this.props
    dispatch(actions.createPoll(newPoll))
  }

  render() {
    let { showAddPollForm } = this.state
    let polls = this.props.polls.objects
    return (
      <div className="dashboard-container container">
        {showAddPollForm && <PollForm onSubmit={this.handleSubmit.bind(this)}/>}
        <div className="panel panel-default">
          <div className="panel-heading">
            <h1 className="panel-title">
              {!showAddPollForm && <button className="btn btn-primary pull-right panel-heading-button" onClick={this.showAddPollForm.bind(this)}>Add Poll</button>}
              {showAddPollForm && <button className="btn btn-danger pull-right panel-heading-button" onClick={this.showAddPollForm.bind(this)}>Cancel Poll</button>}
              Latest Polls
            </h1>
          </div>
          <div className="panel-body">
            <PollsTable polls={polls} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(select)(Dashboard)
