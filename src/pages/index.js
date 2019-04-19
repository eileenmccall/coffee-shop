import React from "react"
import { FaGulp } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    asdfasdfasd
    <button className="btn btn-primary">Button</button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <FaGulp/>
  </Layout>
)

export default IndexPage
