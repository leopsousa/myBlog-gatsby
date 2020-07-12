import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const { AvatarImage } = useStaticQuery(
    graphql`
      {
        AvatarImage: file(relativePath: { eq: "Avatar.png" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <Img fixed={AvatarImage.childImageSharp.fixed} />
}

export default Avatar
