import React from "react"
import styles from "./layout.module.scss"
import Header from "../components/header"
// import Main from "../components/main"
import Footer from "../components/footer/footer"

export default ({ children }) => (
  <div id="layout" className={"container-fluid px-0 mx-0"}>
    <Header />
    <main className={styles.minHeight}>
        {children}
    </main>
    <Footer />
  </div>
)
