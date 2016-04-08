
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'

import * as actions from '../actions'

import './Poll.less'

function select(state) {
  return { polls: state.polls }
}

class Poll extends React.Component {


  render() {
    return (
      <div className="poll container">

      </div>
    )
  }

}

export default connect(select)(Poll)
