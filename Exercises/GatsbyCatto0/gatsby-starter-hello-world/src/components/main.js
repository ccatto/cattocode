import React from "react"
import styles from "./main.module.scss"
import { Link } from 'gatsby'

export default () => (
  <main>
    <div className={styles.main}>
        <h2>MAIN</h2>
        <div>Hello world!</div>
        <h3>Hello world! different font? </h3>
        <Link to='/about' >About </Link> 
    </div>
  </main>
)
