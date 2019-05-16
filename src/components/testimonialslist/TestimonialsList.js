import React from 'react'
import styled from 'styled-components'

import { HTMLContent } from '../Content'

const TestimonialStyle = styled.div`
  border: 2px dashed #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  min-height: 100%;
  margin-bottom: 25px;
  transition: all 300ms ease-out;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-flow: row nowrap;
  margin: '1rem';

  @media screen and (max-width: 980px) {
    height: calc(100% + 250px);
    margin-top: 25px;
  }

  .testimony-left {
    margin: 1rem;
  }

  .testimony-right {
    padding: 1rem;

    & h4 {
      margin: 1rem 0;
    }
  }
`

export const TestimonialsListTemplate = ({ testimonialData }) => {
  //this is my video array data location
  const testimonialItems = [testimonialData.testimonials][0]
  const PageContent = HTMLContent

  //console.log(testimonialItems)
  return (
    <div className="inner">
      <div
        className="grid-wrapper"
        style={{
          listStyle: 'none',
          margin: '1rem',
        }}
      >
        {testimonialItems.map((testimony, index) => (
          <div
            className="col-6"
            key={testimony.testimonialName + index}
            style={{
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'center',
              margin: '2rem 0',
            }}
          >
            <TestimonialStyle key={testimony.testimonialName + index}>
              <div className="testimony-left">
                {testimony.testimonialImage === '' ? (
                  <i
                    className="fas fa-user-circle"
                    style={{
                      fontSize: '5rem',
                      margin: '1rem auto',
                      color: '#cfcfcf',
                    }}
                  />
                ) : (
                  <img
                    src={testimony.testimonialImage}
                    alt={`${testimony.testimonialName} image`}
                  />
                )}
              </div>
              <div className="testimony-right">
                <PageContent
                  className="testimonialQuote"
                  content={testimony.testimonialQuote}
                />
                <h4>
                  - <i>{testimony.testimonialName}</i>{' '}
                </h4>
              </div>
            </TestimonialStyle>
          </div>
        ))}
      </div>
    </div>
  )
}

const TestimonialsList = ({ testimonialData }) => {
  return <TestimonialsListTemplate testimonialData={testimonialData} />
}

export { TestimonialsList }
