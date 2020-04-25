import React from 'react'
import { Col, Image } from 'react-bootstrap'
import Grid from './Grid'
import PropTypes from 'prop-types'
const HEADING_REGEX = /h[123456]$/

const GridColumn = (props) => {
  const { colModel } = props

  if (HEADING_REGEX.test(colModel.type)) {
    return (
      <Col {...colModel.colProps}>
        {React.createElement(colModel.type, colModel.props, colModel.content)}
      </Col>
    )
  }

  switch (colModel.type) {
    case 'grid':
      return (
        <Col {...colModel.colProps}>
          <Grid {...colModel.props} />
        </Col>
      )
    case 'text':
      return <Col {...colModel.colProps}>{colModel.content}</Col>
    case 'image':
      return (
        <Col {...colModel.colProps}>
          <Image src={colModel.src} {...colModel.props} />
        </Col>
      )
    case 'paragraph':
      return (
        <Col {...colModel.colProps}>
          <p {...colModel.props}>{colModel.content}</p>
        </Col>
      )
    default:
      return null
  }
}

GridColumn.propTypes = {
  colModel: PropTypes.shape({
    type: PropTypes.oneOf([
      'grid',
      'text',
      'image',
      'paragraph',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6'
    ])
  }).isRequired
}

export default GridColumn
