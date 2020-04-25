import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Headings from './Headings'
import PropTypes from 'prop-types'

class GridRow extends React.Component {
  render() {
    const { rowModel } = this.props
    const cols = rowModel.columns.map((tileModel, i) => {
      return (
        <Col
          style={{ ...tileModel.style }}
          key={`tile-${i}`}
          {...tileModel.props}
        >
          <Headings model={tileModel} />
          {tileModel.topText ? (
            <Row {...tileModel.topText.containerProps}>
              {tileModel.topText.content}
            </Row>
          ) : null}
          {tileModel.image ? (
            <Row {...tileModel.image.containerProps}>
              <Image src={tileModel.image.src} {...tileModel.image.props} />
            </Row>
          ) : null}
          {tileModel.paragraph ? (
            <Row {...tileModel.paragraph.containerProps}>
              <p {...tileModel.paragraph.props}>
                {tileModel.paragraph.content}
              </p>
            </Row>
          ) : null}
          {tileModel.bottomText ? (
            <Row {...tileModel.bottomText.containerProps}>
              {tileModel.bottomText.content}
            </Row>
          ) : null}
        </Col>
      )
    })

    return <Row {...rowModel.props}>{cols}</Row>
  }
}

GridRow.propTypes = {
  rowModel: PropTypes.shape({
    columns: PropTypes.array
  }).isRequired
}

export default GridRow
