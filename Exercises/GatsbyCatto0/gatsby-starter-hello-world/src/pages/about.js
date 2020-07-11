import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'

export default function About() {
  return (
    <Layout>
      <div>
        <h1>About me</h1>
        <p>Chris "The Tomato" Catto USA</p>
        <Link to='/' >Home </Link>
      </div>
    </Layout>
  )
}
