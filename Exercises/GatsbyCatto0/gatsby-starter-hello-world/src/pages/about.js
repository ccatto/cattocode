import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
// import { Link } from 'gatsby'
// import Title from "../components/utilities/title"

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About Page - Catto Tomato helmet Page Title</title>
      </Helmet>
      <div className="text-center">
        <h1>About me</h1>
        <p> About Chris "The Tomato" Catto USA</p>
      </div>
    </Layout>
  )
}
