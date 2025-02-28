'use client'

import { useEffect } from 'react';
import { ExternalLink } from '@/components/external-link';
import Image from 'next/image';
import { MousePointerClick } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
  
const ProjectPage = ({
    title = "NitroClicker",
    date = "October 13, 2024",
    badges = ["C++"],
    isGithub = true,
    githubRef = "https://github.com/rvnztolentino/nitroclicker",
    href = "https://github.com/rvnztolentino/nitroclicker/releases/download/v1.2.0/NitroClicker.exe"
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
                <main className="flex flex-col space-y-7 py-8 font-noto-sans">

                    <MousePointerClick width={70} height={70} className="" />
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
                            <ExternalLink href={githubRef}>
                                <Button variant="outline" className="bg-black text-white hover:bg-white hover:text-black rounded-full mb-2">
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
                            </ExternalLink>
                            <ExternalLink href={href}>
                                <Button variant="outline" className="bg-light-gray-3 text-black hover:bg-white hover:text-black rounded-full mb-2">Download</Button>
                            </ExternalLink>
                        </div>
                        
                        <p>NitroClicker is an open-source console-based autoclicker built in C++ with customizable clicks per second (CPS). Ideal for tasks that require rapid and continuous clicking, it activates when you hold a key.</p>
                        
                        <p className="text-xl pt-4">CPS Counter Display</p>
                        <Image src="/projects/nitro001.png" height={720} width={720} alt="CPS Counter Display" className="w-full h-full rounded-lg shadow-md" />
                        <p className="pt-2">You can set your desired Clicks Per Second (CPS) value. Take note that the actual clicking speed may not always match your input. To ensure you get a closer clicking speed to your desired CPS, consider setting your desired CPS value slightly higher than your intended rate. For example, if you want 20 CPS but experience lower CPS, you might try setting it to 24 or 28 CPS.</p>
                    
                        <p className="text-xl pt-4">Mouse Button Selection</p>
                        <Image src="/projects/nitro002.png" height={720} width={720} alt="Mouse Button Selection" className="w-full h-full rounded-lg shadow-md" />
                        <p>You can choose between the left, right, or middle mouse button for autoclicking. Simply click the button you want to use and it will be set as your selection for the autoclick function.</p>

                        <p className="text-xl pt-4">Key Selection & Activation</p>
                        <Image src="/projects/nitro003.png" height={720} width={720} alt="Mouse Button Selection" className="w-full h-full rounded-lg shadow-md" />
                        <p>This section of the autoclicker allows you to select their desired activation key. After pressing a key, the program confirms the selection and instructs you to hold down the chosen key to start the autoclicker. The autoclicker will remain active as long as the key is held, automatically clicking at the configured clicks per second (CPS) rate.</p>

                    </div>
                </main>
            </div>
        </div>
    </>
    );
}

export default ProjectPage;