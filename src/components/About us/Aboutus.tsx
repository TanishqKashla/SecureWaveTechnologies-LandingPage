'use client'
import React from 'react'
import styles from './aboutus.module.css'
import Bento from '../bento grid/Bento'
import { TextGenerateEffect } from '../ui/text-generate-effect'
import { AnimatedTooltipPreview } from './team'


const Aboutus = () => {

    return (
        <div className={styles.container}>
            <div className="w-[90vw] flex justify-between items-start px-[90px]">

                <div className={styles.aboutus}>
                    <h2 className='mb-1 text-[rgb(66,113,231)] font-bold text-3xl '>About Us</h2>
                    <hr />
                    <p className="mt-7 font-[' IBM_Plex_Mono'] text-xl" >At SecureWave Technologies, we are dedicated to protecting your digital
                        assets with advanced and reliable cybersecurity solutions. Our mission
                        is to stay ahead of evolving cyber threats by combining cutting-edge
                        technology with unparalleled expertise, ensuring your business remains
                        secure and resilient.
                    </p>
                    <AnimatedTooltipPreview />
                </div>
                <div>
                    <Bento />
                </div>
            </div>
        </div>
    )
}

export default Aboutus