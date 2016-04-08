

import React from 'react'

export default class Table extends React.Component {

  render() {
    let headers = this.props.headers
    let rows = this.props.body
    return (
      <table>
        <thead>
          <tr>
            {headers.map((heading) => {
              <th>{heading}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            <tr>
              {row.map}
            </tr>
          })}
        </tbody>
      </table>
    )
  }

}

class Row extends React.Component {
  render () {
    return (
      <tr>
      </tr>
    )
  }
}
