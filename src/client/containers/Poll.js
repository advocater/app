
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'

import * as actions from '../actions'

import { ResponsesTable } from '../components'

import './Poll.less'

function select(state) {
  return { polls: state.polls, responses: state.responses }
}

class Poll extends React.Component {

  componentDidMount() {
    this.refreshResponses()
  }

  refreshResponses() {
    let { dispatch } = this.props
    dispatch(actions.fetchResponses())
  }

  filterPoll(id, polls) {
    return _.filter(polls, {id: id})
  }

  filterResponses(id, responses) {
    return _.filter(responses, {pollId: id})
  }

  render() {
    let { polls, responses, params } = this.props
    let poll = this.filterPoll(params.id, polls.objects)[0]
    let pollResponses = this.filterResponses(params.id, responses.objects)
    let averageResponse = pollResponses.map((response) => {
      return parseInt(response.value)
    }).reduce((a, b) => {
      return a + b
    }) / pollResponses.length

    return (
      <div className="poll container">
        <div className="panel panel-default container">
          <h2>{poll.question}</h2>
          <h4>Sent poll to {poll.polls_sent} and {poll.polls_responded} responded</h4>
          <h4>Average Score: {averageResponse}</h4>
          {JSON.stringify(poll)}
        </div>
        <div className="panel panel-default container">
          <ResponsesTable metadata={'user'} responses={pollResponses} />
        </div>
      </div>
    )
  }

}

export default connect(select)(Poll)
