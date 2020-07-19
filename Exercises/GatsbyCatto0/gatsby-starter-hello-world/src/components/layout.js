import React from "react"
import styles from "./layout.module.scss"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default ({ children }) => (
  <div id="layout" className={"container-fluid px-0 mx-0"}>
    <Header />
    <main className={`${styles.cattoMinHeight} d-flex`}>
      <div class={`${styles.cattoWidth2Per} ${styles.cattoHorizontalOrangeToBlack}`}></div>
      <div class={styles.cattoWidth98per}>
        {children}
      </div>
      <div class={`${styles.cattoWidth2Per} ${styles.cattoHorizontalBlackToOrange}`}></div>
    </main>
    <Footer />
  </div>
)
