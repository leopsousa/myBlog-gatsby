import React from "react"
import PropTypes from "prop-types"

import * as styles from "./styles"

const PostItem = ({
  slug,
  category,
  date,
  timeToRead,
  title,
  description,
  background,
}) => {
  return (
    <styles.PostItemLink to={slug}>
      <styles.PostItemWrapper>
        <styles.PostItemTag background={background}>
          {category}
        </styles.PostItemTag>
        <styles.PostItemInfo>
          <styles.PostItemDate>
            {date} {timeToRead}
          </styles.PostItemDate>
          <styles.PostItemTitle>{title}</styles.PostItemTitle>
          <styles.PostItemDescription>{description}</styles.PostItemDescription>
        </styles.PostItemInfo>
      </styles.PostItemWrapper>
    </styles.PostItemLink>
  )
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
