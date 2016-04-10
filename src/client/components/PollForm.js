

import React from 'react'
import ReactDOM from 'react-dom'

import './PollForm.less'

export default class PollForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    let form = ReactDOM.findDOMNode(this.refs.form)
    let poll = {}
    let fields = ['question']
    fields.forEach((field) => {
      poll[field] = form[field].value || ''
    })
    this.props.onSubmit && this.props.onSubmit(poll)
  }

  render() {
    return (
      <div className="panel panel-primary panel-body">
        <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Question</label>
            <input className="form-control" type="text" name="question" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary pull-right" type="submit">Create Poll</button>
          </div>
        </form>
      </div>
    )
  }

}
