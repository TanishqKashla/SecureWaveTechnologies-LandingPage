import React from 'react'
import { InfiniteMovingCardsDemo } from './InfiniteMovingCards'

const Testimonials = () => {
  return (
      <div className='flex flex-col justify-center items-start h-[35rem]'>
          <h2 className='mb-1 text-[rgb(66,113,231)] font-bold text-3xl '>Hear from Our Clients</h2>
          <InfiniteMovingCardsDemo/>
    </div>
  )
}

export default Testimonials