import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from './../components/layout'
import { TestimonialsList } from './../components/testimonialslist'

//this is my template for CMS:::
//to access child component, parent component
//has to be accessible.
export const TestimonialPageTemplate = ({ testimonialData }) => {
  return (
    <>
      <header className="major">
        <h1>Testimonials</h1>
      </header>

      <TestimonialsList testimonialData={testimonialData} />
    </>
  )
}

//define custom data object from graphQL
TestimonialPageTemplate.propTypes = {
  TestimonialData: PropTypes.object,
}

//this is my component:::
const TestimonialPage = ({ data }) => {
  //store data as markdownRemarks: post

  const { markdownRemark: post } = data

  //post.frontmatter to access data object:::
  return (
    <Layout contactEnabled={true}>
      <Helmet
        title={'Testimonials : ' + `${data.site.siteMetadata.title}`}
        htmlAttributes={{ lang: 'en' }}
      >
        <meta
          name="description"
          content={`${data.site.siteMetadata.description}`}
        />
      </Helmet>

      <TestimonialPageTemplate testimonialData={post.frontmatter} />
    </Layout>
  )
}

//assign frontmatter content as a data prop
TestimonialPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TestimonialPage

//find the data for child component
export const TestimonialQuery = graphql`
  query TestimonialTemplate {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "testimonials-page" } }) {
      frontmatter {
        testimonials {
          testimonialName
          testimonialImage
          testimonialQuote
        }
      }
    }
  }
`
