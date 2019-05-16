import React from 'react'
import PropTypes from 'prop-types'

//this is the container used by the CMS:::

import { TestimonialsListTemplate } from './../../components/testimonialslist'

const TestimonialTemplate = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <div className="previewPanel">
      <TestimonialsListTemplate testimonialData={data} />
    </div>
  )
}

TestimonialTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default TestimonialTemplate
