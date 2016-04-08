
import React from 'react'
import _ from 'lodash'

import './Dashboard.less'

// Seed data
// let surveys = require('../../../lib/data/surveys.json')


export default class Dashboard extends React.Component {
  render() {
    surveys = JSON.parse(JSON.stringify(surveys))
    console.log(surveys)
    let i = 0;
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
              {_.map(surveys, (survey) => {
                <SurveySummary key={survey.id} survey={survey} />
              })}
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
