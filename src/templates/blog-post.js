import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  const blogPost = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{blogPost.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blogPost.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
      frontmatter {
        date
        title
        description
      }
      html
    }
  }
`
