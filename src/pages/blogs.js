import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const Blogs = ({ data }) => (
  <Layout title="blogs">
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h2>
              {node.frontmatter.title} - <small>{node.frontmatter.date}</small>
            </h2>
            <div>{node.frontmatter.description}</div>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
)

export default Blogs
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM. DD, YYYY")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
