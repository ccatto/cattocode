import React from "react"
import { Helmet } from "react-helmet"
import { Link } from 'gatsby'
// import favicon from `../static/favicon.ico`
import Layout from "../components/layout"
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer/footer"

export default function Home() {
  return (
    <Layout>
      
        <Helmet>
          <meta charSet="utf-8" />
          <title>Catto Tomato Hello World Page Title</title>
          {/* <link rel="icon" href={favicon} /> */}
        </Helmet>
        <Header/>
        <div>Hello world!</div>
        <h3>Hello world! different font? </h3>
        <Link to='/about' >About </Link>
        <Main/>
        <Footer/>

    </Layout>
  )
}
