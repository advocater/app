
import React from 'react'
import ReactDOM from 'react-dom'

import _ from 'lodash'

import './Quiz.less'

import { QuizPersonal, QuizInterests, QuizPhilosophy, QuizPolitical } from '../components'

const personalInfoFields = ['first_name', 'last_name', 'gender', 'email', 'mobile', 'zip', 'political_party']
const interestsInfoFields = ['biggest_concern', 'current_issue_positive', 'current_issue_negative']
const philosophyInfoFields = ['role_federal_government','role_state_government']
const politicalInfoFields = ['presidential_candidate' ]

export default class Quiz extends React.Component {

  mapFormFields(fields, domNode) {
    let result = {}
    fields.forEach((field) => {
      result[field] = domNode[field].value || null
    })
    return result
  }

  handleSubmit(e) {
    e.preventDefault()
    let personalInfo = ReactDOM.findDOMNode(this.refs.personal.refs.personal)
    let interestsInfo = ReactDOM.findDOMNode(this.refs.interests.refs.interests)
    let philosophyInfo = ReactDOM.findDOMNode(this.refs.philosophy.refs.philosophy)
    let politicalInfo = ReactDOM.findDOMNode(this.refs.political.refs.political)
    let user = this.mapFormFields(personalInfoFields, personalInfo)
    user.interests = this.mapFormFields(interestsInfoFields, interestsInfo)
    user.philosophy = this.mapFormFields(philosophyInfoFields, philosophyInfo)
    user.support = this.mapFormFields(politicalInfoFields, politicalInfo)

    this.props.onSubmit && this.props.onSubmit(user)

  }

  render(){
    return(
      <div className="quiz container">
        <h3>Sign up to receive personal news notifications.</h3>
        <QuizPersonal ref="personal" />
        <QuizInterests ref="interests" />
        <QuizPhilosophy ref="philosophy" />
        <QuizPolitical ref="political" />

        <form onSubmit={this.handleSubmit.bind(this)}>
          <button className="btn btn-primary pull-center" type="submit">Join</button>
        </form>

      </div>
    )
  }

}
