
import React from 'react'
import { Link } from 'react-router'

export default class ResponsesTable extends React.Component {

  constructor(){
    super()
  }

  componentWillReceiveProps() {

  }

  renderRow(response, metadata) {
    let link = '/' + metadata + '/' + response[metadata].id
    let metadataValue = ''
    if (metadata === 'user') {
      metadataValue = response.user.last_name + ', ' + response.user.first_name
    } else {
      metadataValue = response.poll.question
    }

    return (
      <tr key={response.id}>
        <td>{response.value}</td>
        <td><Link to={link}>{metadataValue}</Link></td>
        <td>{response.time}</td>
        <td>{response.message}</td>
      </tr>
    )
  }

  render() {
    let { responses, metadata } = this.props
    let tableBody = responses.map((response) => {
      return this.renderRow(response, metadata)
    })
    let metadataHeader = metadata === 'user' ? 'User' : 'Poll'
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Response</th>
            <th>{metadataHeader}</th>
            <th>Time</th>
            <th>Original Message</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    )
  }

}
