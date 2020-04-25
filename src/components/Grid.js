import React from 'react'
import { Container } from 'react-bootstrap'
import GridRow from './GridRow'
import PropTypes from 'prop-types'

class EZBSG extends React.Component {
  render() {
    const { model } = this.props
    const rows = []
    model.rows.forEach((row, i) => {
      rows.push(<GridRow rowModel={row} key={`row-${i}`} />)
    })

    return (
      <Container
        style={{
          ...model.style
        }}
        fluid
      >
        {rows}
      </Container>
    )
  }
}

EZBSG.propTypes = {
  model: PropTypes.shape({
    rows: PropTypes.array
  }).isRequired
}

export default EZBSG
