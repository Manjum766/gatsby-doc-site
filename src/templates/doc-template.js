import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function DocTemplate({ data }) {

  const post = data.markdownRemark

  return (
    <Layout>

      <h1>{post.frontmatter.title}</h1>

      {/* eslint-disable-next-line react/no-danger -- content is sanitised Markdown from gatsby-transformer-remark */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />

    </Layout>
  )
}

DocTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`