import React from "react"
import { Helmet } from "react-helmet"
import Title from '../components/utilities/title'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Helmet>
      <title>Code Page Page - Catto Tomato helmet Page Title</title>
    </Helmet>
    <div>
      <Title text="Code" />
      <h1>Code Page </h1>
    </div>
  </Layout>
)
