import React from 'react'
import styled from 'styled-components'

import { HTMLContent } from '../Content'
import { Card } from '../elements/Card'

export const TestimonialsListTemplate = ({ testimonialData }) => {
  //this is my video array data location
  const testimonialItems = [testimonialData.testimonials][0]
  const PageContent = HTMLContent

  console.log(testimonialItems)
  return (
    <div className="inner">
      <div
        className="grid-wrapper"
        style={{
          listStyle: 'none',
          margin: '2rem 0 1rem 0',
        }}
      >
        {testimonialItems.map((testimony, index) => (
          <div className="col-6">
            <Card key={testimony.testimonialName + index}>
              <div className="testimonyImage">{testimony.testimonialImage}</div>
              <div className="testimonyContent">
                <PageContent
                  className="testimonialQuote"
                  content={testimony.testimonialQuote}
                />
                <h4>{testimony.testimonialName} </h4>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

const TestimonialsList = ({ testimonialData }) => {
  return (
    <section>
      <TestimonialsListTemplate testimonialData={testimonialData} />
    </section>
  )
}

export { TestimonialsList }
