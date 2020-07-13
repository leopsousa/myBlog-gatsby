import React from "react"

import * as styles from "./styles"

import { Home } from "@styled-icons/boxicons-regular/Home"
import { Search } from "@styled-icons/evaicons-solid/Search"
import { Images } from "@styled-icons/entypo/Images"
import { LightBulb } from "@styled-icons/heroicons-outline/LightBulb"
import { Grid } from "@styled-icons/entypo/Grid"
import { ChevronSmallUp as Chevron } from "@styled-icons/entypo/ChevronSmallUp"

const MenuBar = () => {
  return (
    <styles.MenuBarWrapper>
      <styles.MenuBarGroup>
        <styles.MenuBarLink to="/" title="Voltar para a home">
          <styles.MenuBarItem>
            <Home />
          </styles.MenuBarItem>
        </styles.MenuBarLink>
        <styles.MenuBarLink to="/search" title="Pesquisar">
          <styles.MenuBarItem>
            <Search />
          </styles.MenuBarItem>
        </styles.MenuBarLink>
        <styles.MenuBarLink to="/Images" title="Portifolio">
          <styles.MenuBarItem>
            <Images />
          </styles.MenuBarItem>
        </styles.MenuBarLink>
      </styles.MenuBarGroup>
      <styles.MenuBarGroup>
        <styles.MenuBarItem title="Mudar o tema">
          <LightBulb />
        </styles.MenuBarItem>

        <styles.MenuBarItem title="Mudar visualização">
          <Grid />
        </styles.MenuBarItem>

        <styles.MenuBarItem title="Mudar visualização">
          <Chevron />
        </styles.MenuBarItem>
      </styles.MenuBarGroup>
    </styles.MenuBarWrapper>
  )
}

export default MenuBar
