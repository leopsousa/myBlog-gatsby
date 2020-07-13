import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      background="#145aa5"
      category="Art"
      date="10 de julho de 2020"
      timeToRead="5"
      title="Minha primeira arte"
      description="Minha paixão sempre foi esse lado artisitco confira como foi feita minha primeira arte"
    />
  </Layout>
)

export default IndexPage
