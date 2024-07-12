'use client'
import { BackgroundBeams } from '@/components/ui/background-beams'
import React, { useState } from 'react'
import { cn } from "@/utils/cn";
import Hero from "@/components/Hero"
import Aboutus from '@/components/About us/Aboutus';
import { TracingBeam } from '@/components/ui/tracing-beam';
import Services from '@/components/services/Services';
import Testimonials from '@/components/testimonials/Testimonials';
import ContactUs from '@/components/contact us/ContactUs';
import Footer from '@/components/footer/Footer';


const HomePage = () => {
  return (
    <div>



      <Hero />
      <Aboutus />
      <Services />
      <Testimonials />
      <ContactUs />
      <Footer/>

    </div>
  )
}


export default HomePage