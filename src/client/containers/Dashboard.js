
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import * as actions from '../actions'

import './Dashboard.less'

// Seed data
// let surveys = require('../../../lib/data/surveys.json')

function select(state){
  return { surveys: state.surveys }
}

class Dashboard extends React.Component {

  componentDidMount() {
    this.refreshSurveys()
  }

  refreshSurveys() {
    let { dispatch } = this.props
    dispatch(actions.fetchSurveys())
  }

  render() {
    let i = 0;
    let { surveys } = this.props
    // console.log(surveys.map(survey => console.log(i++)))
    console.log(surveys.surveys)
    return (
      <div className="dashboard-container">
        <div className="breadcrumb container">
          Add a new survey
        </div>
        <div className="panel panel-default container">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Survey Questions</th>
                <th>Date</th>
                <th>Time</th>
                <th>Effectiveness</th>
              </tr>
            </thead>
            <tbody>
              {/*this.props.surveys.surveys.map((survey) => {
                <SurveySummary key={survey.id} survey={survey} />
              })*/}

              <tr key={1}>
                <td>{"How did I do in last night's debate?"}</td>
                <td>{Date.now()}</td>
                <td>{Date.now()}</td>
                <td>{10} / {100}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

class SurveySummary extends React.Component {

  render() {
    let survey = this.props.survey
    let effectiveness = survey.polls_responded / survey.polls_sent
    return (
      <tr key={this.props.id}>
        <td>{survey.question}</td>
        <td>{survey.start}</td>
        <td>{survey.end}</td>
        <td>{survey.polls_responded} / {survey.polls_sent}</td>
      </tr>
    )
  }

}

export default connect(select)(Dashboard)
