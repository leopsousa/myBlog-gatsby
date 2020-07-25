import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as styles from "../components/Post/styles"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <styles.PostHeader>
        <styles.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura.
        </styles.PostDate>
        <styles.PostTitle>{post.frontmatter.title}</styles.PostTitle>
        <styles.PostDescription>
          {post.frontmatter.description}
        </styles.PostDescription>
      </styles.PostHeader>
      <styles.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </styles.MainContent>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
