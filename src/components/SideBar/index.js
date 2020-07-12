import React from "react"
import Profile from "../Profile"

import * as styles from "./styles"

import SocialLinks from "../SocialLinks/index"

const SideBar = () => {
  return (
    <styles.SideBarWrapper>
      <Profile />
      <SocialLinks />
    </styles.SideBarWrapper>
  )
}

export default SideBar
