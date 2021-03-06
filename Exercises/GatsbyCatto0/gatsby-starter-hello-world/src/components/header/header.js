import React from 'react'
import styles from './header.module.scss'
import Navbar from "../header/navbar"

export default () => (
    <header>
        <div className={styles.cattoTest}>
            <span className={`${styles.cattoTopThinBar} d-flex`}></span>
            <p className="text-center">Header 2 top Catto</p>
            <Navbar/>
            <span className={`${styles.cattoTopThinBar} d-flex`}></span>
        </div>
    </header>
)
