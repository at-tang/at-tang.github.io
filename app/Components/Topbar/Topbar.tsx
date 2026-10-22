"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import TopbarButton from "./TopbarButton";

export default function Topbar() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // window.scrollY is 0 when the user is at the very top
      setIsAtTop(window.scrollY === 0);
    };



    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <header className={(isAtTop ? " text-white " : " bg-white shadow-sm/30 ") + " fixed w-full h-14 z-100 flex px-6 items-center justify-center transition ease-in-out gap-6"}>
            <h1 className="font-bold text-2xl">Aidan Tang</h1>
            <div className="flex-1"/>
 
            <TopbarButton text="HOME" isExternal={true}/>
            <TopbarButton text="GITHUB" isExternal={true} redirectLink="https://github.com/at-tang"/>
            <TopbarButton text="LINKEDIN" isExternal={true} redirectLink="https://www.linkedin.com/in/aidantang-cs"/>

          


        </header>
    )
}