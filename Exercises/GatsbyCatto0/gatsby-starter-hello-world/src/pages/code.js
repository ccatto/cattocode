import React from "react"
import { Helmet } from "react-helmet"
// import Title from '../components/utilities/title'
import BootstrapCarousel from '../components/utilities/bootstrapCarousel'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Helmet>
      <title>Code Page Page - Catto Tomato helmet Page Title</title>
    </Helmet>
    <div>
    <div className="text-center">
        <h2>Code Catto</h2>
        <p>This is the code page</p>
        <BootstrapCarousel/>
      </div>
    </div>
  </Layout>
)
