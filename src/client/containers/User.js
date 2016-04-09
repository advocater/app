
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'

import * as actions from '../actions'

import { ResponsesTable, ResponseResults } from '../components'

import './User.less'

function select(state) {
  return { responses: state.responses, users: state.users }
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
    let { users, responses, params } = this.props
    let user = this.filterUser(params.id, users.objects)[0]
    let userResponses = this.filterResponses(params.id, responses.objects)
    return (
      <div className="user container">
        <div className="panel panel-default container">
          <h2>{user.first_name + ' ' + user.last_name}</h2>
          <h4>Gender: {user.gender} Zip: {user.zip} Political Party: {user.party}</h4>
          <ResponseResults responses={userResponses} />
        </div>
        <div className="panel panel-default container">
          <ResponsesTable metadata={'poll'} responses={userResponses} />
        </div>
      </div>
    )
  }

}

export default connect(select)(User)
