import React from "react"
import styles from "./footerRowLegal.module.scss"

export default () => (
  <div className={`${styles.cattoFooterRowLegal} d-flex justify-content-center`}>
    <div className="col">
        Legal
    </div>
    <div className="col text-center">
        Terms of Use
    </div>
    <div className="col text-right">
        Privacy Policy
    </div>
  </div>
)
