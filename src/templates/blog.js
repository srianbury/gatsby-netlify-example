import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout title={frontmatter.title}>
      <h1>
        {frontmatter.title} - {frontmatter.date}
      </h1>
      <p>{frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default BlogTemplate
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM. DD, YYYY")
        description
      }
    }
  }
`
