import React from 'react'
import styles from './hero.module.css'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { GlareCard } from './ui/glare-card';
import { HoveredLink } from './ui/navbar-menu';
import { IoMdArrowDropright } from "react-icons/io";
import Bento from './bento grid/Bento';
import { FlipWords } from './ui/flip-words';


const Hero = () => {
    const words = ["Cybersecurity", "Threat Detection", "Data Encryption", "Endpoint Protection"];
    return (
        <div className={styles.container}>

            {/* <div className="max-w-2xl">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Unleashing the Future with AI
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    At QuantumLeap Innovations, we harness the power of AI and machine learning to drive transformative change across healthcare, finance, retail, and logistics. Our innovative solutions are designed to enhance efficiency, accuracy, and decision-making, propelling your business into the future.
                </p>
                <input
                    type="text"
                    placeholder="hi@manuarora.in"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                />
            </div> */}

            <div className={styles.hero_text}>
                <div className={styles.textContainer}>
                    <h1 className={styles.heading}>Defend Your Data with</h1>
                    <br />
                    <h1 className={styles.heading}>the Next Generation of</h1>
                    <br />

                    <FlipWords className='text-center z-[5] text-[rgb(66,113,231)] text-[55px] font-bold -mt-[25px]' words={words} />
                    <br />

                    <p className={styles.subheading}>Protecting Your Business from Evolving Threats with Advanced, Reliable, and Customized Security Measures</p>
                    <div className={styles.cta_btn}>
                        <div className={styles.primary_btn}>
                            Secure Your Business Now

                        </div>
                        <div className={styles.secondary_btn}>
                            Explore Our Services
                            <IoMdArrowDropright className={styles.arrow} />
                        </div>
                    </div>
                </div>
            </div>




            <BackgroundBeams />

        </div >
    )
}

export default Hero