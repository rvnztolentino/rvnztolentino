'use client'

import React from 'react';
import { useEffect } from 'react';
import { ExternalLink } from '@/components/external-link';
import Image from 'next/image';
import { Atom } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BlogPage = ({
    title = "5 better ways to create a React app",
    date = "February 16, 2025",
    badges = ["GUIDE"]
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

                    <Atom width={70} height={70} className="" />
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
                            </div>
                        </div>
                    </div>

                    <p className="border-b border-light-gray-2"></p>
                    
                    <p>I&apos;m working on adding more information. Please check back soon!</p>

                </main>
            </div>
        </div>
    </>
    );
}

export default BlogPage;