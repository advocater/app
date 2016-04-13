
import React from 'react'

export default class QuizPersonal extends React.Component {

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Personal Information</h3>
        </div>
        <div className="panel-body">
          <form ref="personal" className="form-inline">
            <div className="form-group">
              <label>First Name</label>
              <input className="form-control" type="text" name="first_name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input className="form-control" type="text" name="last_name" />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select className="form-control" name="gender">
                <option>--</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="email" name="email" />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input className="form-control" type="text" name="mobile" />
            </div>
            <div className="form-group">
              <label>Zip</label>
              <input className="form-control" type="text" name="zip" />
            </div>
            <div className="form-group">
              <label>Political Affiliation</label>
              <select className="form-control" name="political_party">
                <option>--</option>
                <option>Democrat</option>
                <option>Republican</option>
                <option>Independent</option>
                <option>Other</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    )
  }


}
