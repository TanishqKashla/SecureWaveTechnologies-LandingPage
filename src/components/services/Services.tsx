import React from 'react'
import styles from './services.module.css'
import { ServiceCards } from './ServiceCards'


const Services = () => {
    return (
        <div className=' flex justify-center items-center mt-[70px]'>
            <div className='flex flex-col justify-center items-center w-[70vw]'>
                <h2 className='mb-1 text-[rgb(66,113,231)] font-bold text-4xl '>Our Services</h2>
                <p className='w-[70%] text-center text-xl mt-2'>At SecureWave Technologies, we offer a comprehensive suite of cybersecurity solutions designed to protect your business from evolving threats. Here’s an overview of our key services and their features:</p>
                <ServiceCards />
            </div>
        </div>
    )
}

export default Services