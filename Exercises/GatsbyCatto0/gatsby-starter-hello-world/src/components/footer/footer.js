import React from "react"
import styles from "./footer.module.scss"
import FooterSocial from "./footerSocial"
import FooterTop from "./footerTop"
import FooterRow from "./footerRow"
import FooterRowLegal from "./footerRowLegal"
import FooterRowBottom from "./footerRowBottom"

export default () => (
  <footer>
    <div >
      <div className={`${styles.footer}`}>
        <FooterTop/>
        <FooterSocial/>
        <FooterRowLegal/>
        <FooterRow/>
        <FooterRowBottom/>
      </div>
    </div>
  </footer>
)
