'use client'

import { useEffect } from 'react';
import { CodeXml } from 'lucide-react'
import ProjectGrid from '../components/ProjectCard';
  
const Projects = () => {
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

                    <CodeXml width={70} height={70} className="" />
                    <h1 className="text-4xl text-dark-gray">projects</h1>
                    <p className="border-b border-light-gray-2"></p>

                    <div className="text-md text-dark-gray space-y-2">
                        <p className="text-xl">Completed tasks</p>
                        <p>Highlighting my personal and collaborative projects, and experiments.</p>
                    </div>
                    <ProjectGrid />
                </main>
            </div>
        </div>
    </>
    );
}

export default Projects;