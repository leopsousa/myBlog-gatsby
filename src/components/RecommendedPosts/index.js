import React from "react"
import propTypes from "prop-types"

import * as styles from "./styles"

function RecommendedPosts({ next, previous }) {
  return (
    <styles.RecommendedWrapper>
      {previous && (
        <styles.RecommendedLink to={previous.fields.slug} className="previous">
          {previous.frontmatter.title}
        </styles.RecommendedLink>
      )}
      {next && (
        <styles.RecommendedLink to={next.fields.slug} className="next">
          {next.frontmatter.title}
        </styles.RecommendedLink>
      )}
    </styles.RecommendedWrapper>
  )

  RecommendedPosts.propTypes = {
    next: propTypes.shape({
      frontmatter: propTypes.shape({
        title: propTypes.string.isRequired,
      }),
      fields: propTypes.shape({
        slug: propTypes.string.isRequired,
      }),
    }),
    previous: propTypes.shape({
      frontmatter: propTypes.shape({
        title: propTypes.string.isRequired,
      }),
      fields: propTypes.shape({
        slug: propTypes.string.isRequired,
      }),
    }),
  }
}

export default RecommendedPosts
