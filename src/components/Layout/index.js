import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"

import * as styles from "./styles"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <styles.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <styles.LayoutMain>{children}</styles.LayoutMain>
    </styles.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
