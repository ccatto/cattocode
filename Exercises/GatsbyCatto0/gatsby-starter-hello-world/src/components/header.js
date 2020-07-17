import React from 'react'
import styles from './header.module.scss'
import Navbar from "../components/navbar"

export default () => (
    <header>
        <div className={styles.cattoTest}>
            <span className={`${styles.cattoTopThinBar} row`}></span>
            <p className="text-center">Header top Catto</p>
            <Navbar/>
            <span className={`${styles.cattoTopThinBar} row`}></span>
        </div>
    </header>
)
