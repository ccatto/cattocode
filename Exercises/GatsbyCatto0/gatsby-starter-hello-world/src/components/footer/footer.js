import React from "react"
import styles from "./footer.module.scss"
import FooterSocial from "./footerSocial"
import FooterTop from "./footerTop"

export default () => (
  <footer>
    <div >
      <div className={styles.footer}>
        Footer
        <FooterTop/>
        <FooterSocial/>
      </div>
    </div>
  </footer>
)
