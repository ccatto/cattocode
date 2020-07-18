import React from "react"
import styles from "./footerRow.module.scss"

export default () => (
  <div className={`${styles.cattoFooterRow} d-flex justify-content-center`}>
    <span>&copy; Copyright 2006-{new Date().getFullYear()} ChrisCatto.com - All Rights Reserve
    </span>
  </div>
)
