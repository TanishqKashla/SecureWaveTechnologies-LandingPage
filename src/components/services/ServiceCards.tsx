import { HoverEffect } from "../ui/card-hover-effect";

export function ServiceCards() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Real-Time Threat Detection",
        description:
            "Continuous monitoring that identifies and neutralizes threats as they emerge, ensuring your systems remain secure.",
        link: "https://stripe.com",
    },
    {
        title: "Advanced Data Encryption",
        description:
            "Secures your network infrastructure with advanced firewalls and intrusion detection systems, mitigating potential vulnerabilities.",
        link: "https://netflix.com",
    },
    {
        title: "Comprehensive Network Security",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Endpoint Protection",
        description:
            "Provides security for all connected devices, preventing malware and unauthorized access while ensuring device compliance.",
        link: "https://meta.com",
    },
    {
        title: "Incident Response and Recovery",
        description:
            "Delivers rapid response to security incidents, including forensic analysis and recovery strategies to minimize impact.",
        link: "https://amazon.com",
    },
    {
        title: "Identity and Access Management (IAM)",
        description:
            "Manages user identities and access rights, enhancing security through multi-factor authentication and role-based access.",
        link: "https://microsoft.com",
    },
];
