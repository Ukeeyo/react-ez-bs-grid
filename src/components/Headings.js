import React from 'react'
import { Row } from 'react-bootstrap'

class Headings extends React.Component {
  render() {
    const { model } = this.props
    for (let i = 1; i <= 6; i++) {
      if (model[`h${i}`]) {
        return (
          <Row {...model[`h${i}`].containerProps}>
            {React.createElement(
              `h${i}`,
              model[`h${i}`].props,
              model[`h${i}`].content
            )}
          </Row>
        )
      }
    }
    return null
  }
}

export default Headings
