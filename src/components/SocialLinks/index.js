import React from "react"

import Icons from "./Icons"
import links from "./content"

import * as styles from "./styles"

const SocialLinks = () => (
  <styles.SocialLinksWrapper>
    <styles.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <styles.SocialLinksItem key={i}>
            <styles.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <styles.IconWrapper>
                <Icon />
              </styles.IconWrapper>
            </styles.SocialLinksLink>
          </styles.SocialLinksItem>
        )
      })}
    </styles.SocialLinksList>
  </styles.SocialLinksWrapper>
)

export default SocialLinks
