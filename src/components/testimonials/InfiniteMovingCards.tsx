"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "SecureWave Technologies has transformed our security infrastructure. Their real-time threat detection has significantly reduced our vulnerability to cyber attacks. We are truly impressed with their expertise and dedication.",
        name: "Rahul Sharma",
        title: "CTO, FinSecure Bank",
    },
    {
        quote:
            "The advanced data encryption services provided by SecureWave have been a game-changer for us. We now have peace of mind knowing that our patient data is protected at all times. Highly recommended!",
        name: "Priya Mehta",
        title: "Head of IT, HealthGuard Hospital",
    },
    {
        quote: "With SecureWave's endpoint protection, we have seen a drastic reduction in malware incidents. Their proactive approach and continuous support make them a reliable partner in our cybersecurity efforts.",
        name: "Neha Gupta",
        title: "IT Manager, EduSmart Solutions",
    },
    {
        quote:
            "The team at SecureWave Technologies is exceptional. Their comprehensive network security solutions have fortified our defenses, allowing us to focus on innovation without worrying about cyber threats.",
        name: "Arjun Verma",
        title: "CEO, Tech Innovations Pvt. Ltd.",
    },
    {
        quote:
            "The security consulting services from SecureWave Technologies have been invaluable. Their experts helped us identify vulnerabilities and implement effective strategies to strengthen our overall security posture.",
        name: "Vikram Desai",
        title: "COO, Global Enterprises Ltd.",
    },
];
