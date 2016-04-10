
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'

import * as actions from '../actions'

import { ResponsesTable, ResponseResults } from '../components'

import './Poll.less'

function select(state) {
  return { polls: state.polls, responses: state.responses }
}

class Poll extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    this.refreshPolls()
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

  filterPoll(id, polls) {
    return _.filter(polls, {id: id})
  }

  filterResponses(id, responses) {
    return _.filter(responses, {pollId: id})
  }

  calculateAverageResponse(responses) {
    let average = responses.map((response) => {
      return parseInt(response.value)
    }).reduce((a, b) => { return a + b }) / responses.length
    return Math.round( average * 100 ) / 100
  }

  createNewResponse(i) {
    console.log('creating new response')
    let { dispatch, params } = this.props
    let newResponse = { pollId: params.id }
    dispatch(actions.createNewResponse(newResponse))
    return i++
  }

  generateMaxResponses(e, num) {
    e.preventDefault()
    console.log('Clicked generateMaxResponses', num)
    for (let i = 0; i < num; ) {
      // console.log('Clicked generateMaxResponses', i)
      this.createNewResponse()
      setTimeout(i++, 1000)
        // this.createNewResponse(i).bind(this),
        // Math.floor(Math.random() * 1000) + 1000
    }
  }

  render() {
    let { polls, responses, params } = this.props
    let poll = this.filterPoll(params.id, polls.objects)[0]
    let pollResponses = this.filterResponses(params.id, responses.objects)
    let remainingResponses = poll.polls_sent - pollResponses.length
    let pollEnded = Date.now() > new Date(poll.end) || remainingResponses === 0
    let averageResponse = 'N/A'
    if (pollResponses.length > 0) {
      averageResponse = this.calculateAverageResponse(pollResponses)
    }
    return (
      <div className="poll container">
        {!pollEnded && <div className="panel panel-warning panel-body">
          We can generate {remainingResponses} more responses.
          <button className="btn btn-warning pull-right" onClick={(e) => this.generateMaxResponses(e, remainingResponses)}>
            Generate Maximum Responses
          </button>
        </div>}
        <div className="panel panel-default panel-body">
          <h2>{poll.question}</h2>
          <p>Sent poll to {poll.polls_sent} and {poll.polls_responded} responded</p>
          <p>Average Score: {averageResponse}</p>
          <ResponseResults responses={pollResponses} />
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Responses</h3>
          </div>
          <div className="panel-body">
            <ResponsesTable metadata={'user'} responses={pollResponses} />
          </div>
        </div>
      </div>
    )
  }

}

export default connect(select)(Poll)
