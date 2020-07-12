import React from "react"

import * as styles from "./styles"
import links from "./content"

const MenuLinks = () => {
  return (
    <styles.MenuLinksWrapper>
      <styles.MenuLinksList>
        {links.map((link, index) => (
          <styles.MenuLinksItem key={index}>
            <styles.MenuLinksLink to={link.url} activeClassName="active">
              {link.label}
            </styles.MenuLinksLink>
          </styles.MenuLinksItem>
        ))}
      </styles.MenuLinksList>
    </styles.MenuLinksWrapper>
  )
}
export default MenuLinks
