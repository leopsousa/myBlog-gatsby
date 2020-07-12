import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"

import * as styles from "./styles"

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
          position
        }
      }
    }
  `)

  return (
    <styles.ProfileWrapper>
      <styles.ProfileLink>
        <Avatar />
        <styles.ProfileAuthor>{author}</styles.ProfileAuthor>
        <styles.ProfilePosition>{position}</styles.ProfilePosition>
      </styles.ProfileLink>
      <styles.ProfileDescription>{description}</styles.ProfileDescription>
    </styles.ProfileWrapper>
  )
}

export default Profile
