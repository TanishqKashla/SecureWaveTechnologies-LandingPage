import React from 'react'
import styles from './bento.module.css'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

const Bento = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bentoBox}>
                <div className={`${styles.card} ${styles.card1}`}>
                    <p className='text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text'>120K+</p>
                    <p className='text-center font-medium'>Happy & Secure Customers</p>
                </div>
                <div className={`${styles.card} ${styles.card2}`}>
                    <p className='bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text text-4xl text-center font-bold'>Industry Leadership</p>
                    <p className='text-center font-medium'>Trusted by over 500 businesses worldwide, including  government agencies.</p>
                </div>
                <div className={`${styles.card} ${styles.card3}`}>
                    <p className='text-xl text-center font-bold bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text'>Incident Response Time</p>
                    <p className='text-center  font-medium'>Achieving an average response time of 15 minutes</p>
                </div>
                <div className={`${styles.card} ${styles.card4}`}>
                    <p className='text-2xl text-center font-bold bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text'>Expert Security Consulting</p>
                </div>
                <div className={`${styles.card} ${styles.card5}`}>
                    <p className='text-xl text-center font-bold bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text'>Certification Achievements</p>
                    <p className='text-center text-xs font-medium'>Awarded ISO 27001 certification</p>
                </div>
            </div>
        </div>
    )
}

export default Bento