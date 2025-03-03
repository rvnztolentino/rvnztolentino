'use client'

import React from 'react';
import { useEffect } from 'react';
import { ExternalLink } from '@/components/external-link';
import Image from 'next/image';
import { Cat } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectPage = ({
    title = "Camlin Arts & Crafts (Vanilla)",
    date = "October 14, 2024",
    badges = ["CSS", "HTML"],
    isGithub = true,
    githubRef = "https://github.com/rvnztolentino/camlin-vanilla",
    href = "https://camlin-arts-crafts.vercel.app/"
}) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
    <>
        <div className="min-h-screen flex justify-center"> 
            <div className="w-full px-4 md:px-16">
                <main className="flex flex-col space-y-5 py-8 font-noto-sans">

                    <Cat width={70} height={70} className="" />
                    <h1 className="text-4xl text-dark-gray">{title}</h1>
                    <p className="border-b border-light-gray-2"></p>

                    <div className="grid grid-cols-2">
                        <div className="flex-col text-md text-dark-gray space-y-4">
                            <p>Published on</p>
                            <p>Tags</p>
                        </div>
                        <div className="flex-col text-light-gray text-md text-dark-gray space-y-4">
                            <p>{date}</p>
                            <div className="flex flex-wrap gap-2">
                                {badges.map((badge, index) => (
                                    <Badge 
                                    key={index} 
                                    variant="secondary" 
                                    className="bg-light-gray-3 hover:bg-light-gray-2 rounded-full"
                                    >
                                    {badge}
                                    </Badge>
                                ))}
                                {isGithub && (
                                    <Badge
                                        variant="secondary"
                                        className="bg-black hover:bg-light-gray-3 text-white hover:text-black rounded-full"
                                    >
                                        GITHUB
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>

                    <p className="border-b border-light-gray-2"></p>

                    <div className="text-md text-dark-gray space-y-2">
                        <div className="flex flex-wrap gap-2">
                            {isGithub && (
                            <ExternalLink href={githubRef}>
                                <Button variant="outline" className="bg-black rounded-full mb-2 text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                        >
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                    Open Github Repository
                                </Button>
                            </ExternalLink> )}
                            <ExternalLink href={href}>
                                <Button variant="outline" className="bg-light-gray-3 rounded-full mb-2 text-black hover:bg-light-gray-2 hover:text-black transition-all duration-300 ease-in-out">Preview</Button>
                            </ExternalLink>
                        </div>
                    </div>
                    
                    <p className="text-dark-gray">I&apos;m working on adding more information. Please check back soon!</p>

                </main>
            </div>
        </div>
    </>
    );
}

export default ProjectPage;