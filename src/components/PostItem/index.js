import React from "react"

import * as styles from "./styles"

const PostItem = () => {
  return (
    <styles.PostItemLink>
      <styles.PostItemWrapper>
        <styles.PostItemTag background="#333">Misc</styles.PostItemTag>
        <styles.PostItemInfo>
          <styles.PostItemDate>
            30 de julho de 2019 ° 4min de leitura
          </styles.PostItemDate>
          <styles.PostItemTitle>
            Diga não ao medium: tenha sua própria plataforma
          </styles.PostItemTitle>
          <styles.PostItemDescription>
            Algumas razões para você ter sua própria plataforma ao invés de
            soluções como o Medium
          </styles.PostItemDescription>
        </styles.PostItemInfo>
      </styles.PostItemWrapper>
    </styles.PostItemLink>
  )
}

export default PostItem
