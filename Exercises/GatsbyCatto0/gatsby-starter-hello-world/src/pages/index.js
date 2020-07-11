import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Link } from 'gatsby'

export default function Home() {
  return (
    <Layout>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Catto Tomato Hello World Page Title</title>
        </Helmet>
        <div>Hello world!</div>
        <h3>Hello world! different font? </h3>
        <Link to='/about' >About </Link>
      </div>
    </Layout>
  )
}
