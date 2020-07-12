import React from "react"
import Profile from "../Profile"

import * as styles from "./styles"

import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

const SideBar = () => {
  return (
    <styles.SideBarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </styles.SideBarWrapper>
  )
}

export default SideBar
