import React from 'react'
import { VscHeartFilled } from "react-icons/vsc";

const Footer = () => {
  return (
      <div className='h-[5rem] bg-[rgb(66,113,190)] flex justify-center items-center gap-3'>
          <p className='text-[1.5rem] font-bold'>Made with</p> 
          <VscHeartFilled size={30} color='red'/>
          <p className='text-[1.5rem] font-bold'>- by Tanishq Kashla</p>
  
    </div>
  )
}

export default Footer