
import React from 'react'

export default class QuizPhilosophy extends React.Component {

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Philosophy</h3>
        </div>
        <div className="panel-body">
          <form ref="philosophy">
            <label>What is the primary role of the Federal Government?</label>
            <select className="form-control" name="role_federal_government">
              <option>I don't know?</option>
              <option>Protect my rights</option>
              <option>Protect all citizens rights</option>
              <option>Protect all residents rights</option>
              <option>Protect everyone's rights</option>
            </select>
            <label>What is the primary role of the State Government?</label>
            <select className="form-control" name="role_state_government">
              <option>I don't know?</option>
              <option>The same as the Federal Government, but for States</option>
              <option>Republican</option>
              <option>Independent</option>
              <option>Other</option>
            </select>
          </form>
        </div>
      </div>
    )
  }


}
