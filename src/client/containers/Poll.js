
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
    let poll = this.filterPoll(params.id, polls.objects)
    let pollResponses = this.filterResponses(params.id, responses.objects)
    return (
      <div className="poll container">
        <div className="panel panel-default container">
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
