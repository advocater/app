
import React from 'react'

export default class PollsTable extends React.Component {

  componentWillReceiveProps() {

  }

  renderRow(poll) {
    return (
      <tr key={poll.id}>
        <td>{poll.question}</td>
        <td>{poll.start}</td>
        <td>{poll.end}</td>
        <td>{poll.polls_responded} / {poll.polls_sent}</td>
      </tr>
    )
  }

  render() {
    let { polls } = this.props
    let tableBody = polls.map((poll) => { return this.renderRow(poll) })
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Poll Questions</th>
            <th>Date</th>
            <th>Time</th>
            <th>Effectiveness</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    )
  }

}
