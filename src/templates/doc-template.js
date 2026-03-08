import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function DocTemplate({ data }) {

  const post = data.markdownRemark

  return (
    <Layout>

      <h1>{post.frontmatter.title}</h1>

      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

    </Layout>
  )
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