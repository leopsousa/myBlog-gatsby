import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              description
              title
            }
          }
        }
      }
    }
  `)

  const PostList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {PostList.map(
        ({
          node: {
            fields: { slug },
            frontmatter: { background, category, date, description, title },
            timeToRead,
          },
        }) => (
          <PostItem
            slug={slug}
            background={background}
            category={category}
            date={date}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
