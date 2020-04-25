import React from 'react'
import { Row } from 'react-bootstrap'
import GridColumn from './GridColumn'
import PropTypes from 'prop-types'

const GridRow = (props) => {
  const { rowModel } = props
  const cols = rowModel.columns.map((colModel, i) => {
    return <GridColumn colModel={colModel} key={i} />
  })

  return <Row {...rowModel.props}>{cols}</Row>
}

GridRow.propTypes = {
  rowModel: PropTypes.shape({
    columns: PropTypes.array.isRequired
  }).isRequired
}

export default GridRow
