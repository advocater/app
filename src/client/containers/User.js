
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'

import * as actions from '../actions'

import { ResponsesTable, ResponseResults } from '../components'

import './User.less'

function select(state) {
  return { responses: state.responses, users: state.users, polls: state.polls }
}

class User extends React.Component {

  componentDidMount() {
    this.refreshResponses()
    this.refreshUsers()
  }

  refreshResponses() {
    let { dispatch } = this.props
    dispatch(actions.fetchResponses())
  }

  refreshUsers() {
    let { dispatch } = this.props
    dispatch(actions.fetchUsers())
  }

  filterUser(id, users) {
    return _.filter(users, {id: id})
  }

  filterResponses(id, responses) {
    return _.filter(responses, {userId: id})
  }

  render() {
    let { users, responses, polls, params } = this.props
    let user = this.filterUser(params.id, users.objects)[0]
    let userResponses = this.filterResponses(params.id, responses.objects)
    return (
      <div className="user container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">{user.first_name + ' ' + user.last_name}</h2>
          </div>
          <div className="panel-body">
            <h4>Gender: {user.gender} Zip: {user.zip} Political Party: {user.party}</h4>
            <ResponseResults responses={userResponses} />
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Response History</h3>
          </div>
          <div className="panel-body">
            <ResponsesTable metadata={'poll'} responses={userResponses} polls={polls} />
          </div>
        </div>
      </div>
    )
  }

}

export default connect(select)(User)
