import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <h4>Welcome to Waraphon Roonnapi new Gatsby-blog site.</h4>
      <h4>Now let see my {totalCount} blog.</h4>
      <div>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <span>
              {node.frontmatter.title} - {node.frontmatter.date}
            </span>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            description
            date
            title
          }
          excerpt
        }
      }
      totalCount
    }
  }
`
