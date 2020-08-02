import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import * as styles from "./styles"

const Comments = ({ url, title }) => {
  const completeURL = `https://willianjusten.com.br${url}`

  return (
    <styles.CommentsWrapper>
      <styles.CommentsTitle>Comentários</styles.CommentsTitle>
      <ReactDisqusComments
        shortname="willianjusten"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </styles.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
