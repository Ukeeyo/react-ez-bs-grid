import React from 'react'
import { Container } from 'react-bootstrap'
import GridRow from './GridRow'
import PropTypes from 'prop-types'

class EZBSG extends React.Component {
  render() {
    const { model } = this.props
    if (!model) {
      return null
    }

    return (
      <Container {...model.props} fluid>
        {getRows(model.rows)}
      </Container>
    )
  }
}

const getRows = (rows) => {
  if (!rows) {
    return null
  }
  return rows.map((row, i) => {
    return <GridRow rowModel={row} key={`row-${i}`} />
  })
}

EZBSG.propTypes = {
  model: PropTypes.shape({
    rows: PropTypes.array.isRequired
  }).isRequired
}

export default EZBSG
