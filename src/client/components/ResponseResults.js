
import React from 'react'


export default class ResponseResults extends React.Component {

  componentDidMount() {
  }

  countResponseValues(responses) {
    let result = {}
    responses.forEach((response) => {
      let value = response.value
      if (!result.hasOwnProperty(value)) {
        result[value] = 0
      }
      result[value]++
    })
    return result
  }

  renderValues(responseCounts) {
    let keys = _.range(0,11).map((num) => { return num.toString() })
    return keys.map((key) => {
      return (
        <li key={parseInt(key)}><b>{key}:</b> <i>{responseCounts[key] || 0}</i></li>
      )
    })
  }

  render() {
    let { responses } = this.props
    let responseCounts = this.countResponseValues(responses)
    let renderedValues = this.renderValues(responseCounts)
    return (
      <div>
        <ul className="list list-inline">
          {renderedValues}
        </ul>
      </div>
    )
  }

}
