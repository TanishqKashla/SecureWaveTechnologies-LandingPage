import React from 'react'
import ContactCards from './ContactCards'

const ContactUs = () => {
    return (
        <div className='h-[30rem] flex flex-col justify-center items-center'>
            <h2 className='text-[rgb(66,113,231)] font-bold text-4xl mb-10 '>Contact Us</h2>
            <hr />
            <ContactCards />
        </div>
    )
}

export default ContactUs