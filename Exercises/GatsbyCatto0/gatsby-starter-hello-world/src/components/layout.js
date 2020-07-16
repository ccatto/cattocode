import React from 'react'
import styles from './layout.module.scss'
// import Header from './header.js'
// import Footer from './footer/footer.js'

export default ({children}) => (
    <div id="layout" className={styles.container}>
        {children}
    </div>
)