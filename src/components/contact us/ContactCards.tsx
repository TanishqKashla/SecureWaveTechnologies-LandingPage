import React from 'react'
import styles from './ContactCards.module.css'
import { MdLocationOn } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const ContactCards = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.card} ${styles.card2}`}>
                <MdPhone size={50} color='grey' />

                <p className='text-center text-.5xl mt-[30px]'>+91-11-23456789</p>
            </div>
            <div className={`${styles.card} ${styles.card1}`}>
                <MdLocationOn size={50} color='grey' />

                <p className='text-center text-sm mt-[30px]'>SecureWave Technologies Pvt. Ltd. <br />
                    7th Floor, ABC Towers,<br />
                    Connaught Place,<br />
                    New Delhi, Delhi 110001,<br />
                    India
                </p>
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
                <MdEmail size={50} color='grey' />

                <p className='text-center text-.5xl mt-[30px]'>info@securewave.in</p>
                <p className='text-center text-.5xl'>support@securewave.in</p>
            </div>
        </div>
    )
}

export default ContactCards