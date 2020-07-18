import React from "react"
import { Helmet } from "react-helmet"
// import { Link } from 'gatsby'
// import favicon from `../static/favicon.ico`
import Layout from "../components/layout"
// import Header from "../components/header"
// import Main from "../components/main"
// import Footer from "../components/footer/footer"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Catto Tomato Hello World Page Title</title>
      </Helmet>
      <h2>Home Catto</h2>
    </Layout>
  )
}
