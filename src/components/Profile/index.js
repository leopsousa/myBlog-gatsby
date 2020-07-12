import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, author, description },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          title
          position
        }
      }
    }
  `)

  return (
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{author}</p>
      <p>{description}</p>
    </div>
  )
}

export default Profile