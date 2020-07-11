import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Meu blog</h1>
    <li>
      <Link to="/about">About</Link>
    </li>
  </Layout>
)

export default IndexPage
