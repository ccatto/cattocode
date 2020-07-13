import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Title from '../components/utilities/title'

export default function About() {
  return (
    <Layout>
      <div>
        <Title text='About' />
        <h1>About me</h1>
        <p>Chris "The Tomato" Catto USA</p>
        <Link to='/' >Home </Link>
      </div>
    </Layout>
  )
}
