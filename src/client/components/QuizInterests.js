
import React from 'react'

export default class QuizInterests extends React.Component {

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Interests</h3>
        </div>
        <div className="panel-body">
          <form ref="interests">
            <div className="form-group">
              <label>My biggest concern for the future of the United States</label>
              <select className="form-control" name="biggest_concern">
                <option>Everything is perfect</option>
                <option>Who we elect for President</option>
                <option>Threats from foreign governments and/or terrorists</option>
                <option>Internal threats to society: racism, sexism, etc.</option>
                <option>Investment (or lack thereof) in the future with respect to education, environment, healthcare, infrastructure, etc.</option>
                <option>My personal tax rate</option>
              </select>
            </div>
            <div className="form-group">
              <label>I am most interested in the current issue</label>
              <select className="form-control" name="current_issue_positive">
                <option>Education</option>
                <option>Healthcare</option>
                <option>Taxes</option>
                <option>Gun Rights</option>
                <option>Immigration Policy</option>
                <option>Economic Stability</option>
                <option>Terrorism</option>
              </select>
            </div>
            <div className="form-group">
              <label>I am tired of hearing about</label>
              <select className="form-control" name="current_issue_negative">
                <option>Education</option>
                <option>Healthcare</option>
                <option>Taxes</option>
                <option>Gun Rights</option>
                <option>Immigration Policy</option>
                <option>Economic Stability</option>
                <option>Terrorism</option>
              </select>
            </div>

          </form>
        </div>
      </div>
    )
  }


}
