import React from "react"
import PropTypes from "prop-types"
import SideBar from "../SideBar"
import MenuBar from "../MenuBar"

import * as styles from "./styles"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <styles.LayoutWrapper>
      <GlobalStyles />
      <SideBar />
      <styles.LayoutMain>{children}</styles.LayoutMain>
      <MenuBar />
    </styles.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
