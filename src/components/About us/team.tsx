"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
            "/assets/1.png",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "/assets/2.png",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "/assets/3.png",
    },
    {
        id: 4,
        name: "Tanishq Kashla",
        designation: "Web Designer",
        image: "/assets/pfp2.jpeg",
    },

];

export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-center justify-start mb-10 w-full mt-10">
            <AnimatedTooltip items={people} />
        </div>
    );
}
