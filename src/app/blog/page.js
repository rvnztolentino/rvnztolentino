'use client'

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import BlogGrid from "../components/BlogCard"

const Blog = () => {
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

                <FileText width={70} height={70} className="" />
                <h1 className="text-4xl text-dark-gray">blog</h1>
                <p className="border-b border-light-gray-2"></p>

                <div className="text-md text-dark-gray space-y-2">
                    <p className="font-bold">Blog posts</p>
                    <p>Documenting my guides, tutorials, personal experiences, and reflections.</p>
                    {/* <p 
                        className="font-courier-prime text-sm text-red text-opacity-80 bg-light-gray-3 px-2" 
                        style={{ display: 'inline-block', padding: '2px 5px 0px 5px' }}
                    >
                        last update: feb. 16, 2025
                    </p> */}
                </div>
                <BlogGrid />
            </main>
        </div>
    </div>
    </>
    );
}

export default Blog;
  