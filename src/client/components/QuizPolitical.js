
import React from 'react'

export default class QuizPolitical extends React.Component {

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Support</h3>
        </div>
        <div className="panel-body">
          <form ref="political">
            <div className="form-group">
              <label>Do you currently support anyone for President?</label>
              <select className="form-control" name="presidential_candidate">
                <option>No</option>
                <option>Donald Trump</option>
                <option>Hillary Clinton</option>
                <option>Bernie Sanders</option>
                <option>Other</option>
              </select>
            </div>

          </form>
        </div>
      </div>
    )
  }


}
