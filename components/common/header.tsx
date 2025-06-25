"use client";

import { useEffect, useState } from "react";
import Logo from "./logo";
import Menu from "./menu";
import SocialBar from "./social-bar";

type HeaderProps = {
  className?: string;
};

export default function Header({ className = "" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); 

  useEffect(() => {
    setHasMounted(true); 
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const computedClass = `
    ${className} 
    flex justify-between md:justify-center p-4 fixed top-0 left-0 w-full z-50
    ${hasMounted && isScrolled ? "bg-black" : "bg-transparent"}
    transition-all duration-300
  `;

  return (
    <header className={computedClass.trim()}>
      <div className="flex justify-between w-5/6 flex-row-reverse md:flex-row">
        <Logo className="w-4/6 md:w-1/6" dataColor="invert" />
        <Menu className="w-1/6 md:w-4/6 flex justify-center items-center text-white" />
        <SocialBar className="hidden w-1/6 md:flex justify-end items-center text-white" />
      </div>
    </header>
  );
}
