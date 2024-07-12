import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.links}>
                <ul className={styles.optionsList}>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar