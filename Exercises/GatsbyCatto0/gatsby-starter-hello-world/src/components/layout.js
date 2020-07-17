import React from "react"
import styles from "./layout.module.scss"
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer/footer"

export default ({ children }) => (
  <div id="layout" className={styles.container}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
