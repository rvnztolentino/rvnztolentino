"use client"

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "@/components/external-link";
import Selection from "./Selection";
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [ XIcon, setXIcon ] = useState(false);
  const handleClick = () => { 
    setShowMenu(!showMenu); 
    setXIcon(!XIcon);
  };
  const refreshMenu = () => {
    setShowMenu(false);
    setXIcon(false);
  };

  return (
    <nav className="bg-white lg:bg-transparent fixed lg:flex items-center top-0 left-0 xs:w-full lg:h-full lg:w-[300px] xl:w-[400px] 2xl:w-[480px] 3xl:w-[590px] 4xl:w-[1050px] xs:border-b border-slate-300 font-noto-sans text-gray">

      {/* Mobile View */}
      <div className="flex justify-between items-center w-full p-4 mb-[-14px] lg:hidden">
        <div className="text-dark-gray">
          <Link href="/" onClick={refreshMenu}><p className="text-left w-0 font-medium">renz</p></Link>
        </div>
        {XIcon ? <X className="mt-2 text-dark-gray hover:bg-light-gray-2 transition-all duration-300 ease-in-out" onClick={handleClick}/> : <Menu className="mt-2 text-dark-gray hover:bg-light-gray-2 transition-all duration-300 ease-in-out" onClick={handleClick}/> }
      </div>
      {showMenu ? <Selection handleClose={refreshMenu} /> : null}

      {/* Desktop View */}
      <div className="lg:flex lg:flex-col lg:items-end lg:space-y-4 xs:space-x-4 xs:justify-between xs:mx-[20px] lg:mx-[-180px] 2lg:mx-[-150px] 2xl:mx-[-245px] 3xl:w-[180px] 4xl:mx-[600px] xs:mt-4 lg:mt-[-50px] lg:block">
        <nav className="hidden lg:block">
          <ul className="flex lg:flex-col lg:items-end xs:space-x-4 lg:space-y-4 xs:justify-between xs:mx-[20px] lg:mx-[-350px] 2xl:mx-[-600px] xs:mt-16 lg:mt-[-140px] 2xl:mt-[-240px] text-right">
            <Link href="/">
              <p className="text-black mr-14 text-left w-0 mb-4 font-medium">renz</p>
            </Link>
            <Link href="/">
              <p className="text-left mr-14 lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">home</p>
            </Link>
            <Link href="/about">
              <p className="text-left mr-14 lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">about</p>
            </Link>
            <Link href="/store">
              <p className="text-left mr-14 lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">store</p>
            </Link>
            <Link href="/projects">
              <p className="text-left mr-14 lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">projects</p>
            </Link>
            <Link href="/blog">
              <p className="text-left mr-14 lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">blog</p>
            </Link>
            <Link href="/contact">
              <p className="text-left mr-14 lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">contact</p>
            </Link>
            <ExternalLink href="https://linktr.ee/rvnztolentino">
              <Button 
                variant="outline" 
                className="text-left mr-[-25px] mt-2 rounded-full bg-black hover:bg-white text-white hover:text-black transition-all duration-300 ease-in-out">
                linktree
              </Button>
            </ExternalLink>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;