"use client"

import Image from "next/image";
import Header from "./Components/Header";
import ProjectHeadline from "./Components/ProjectHeadline";
import BulletList from "./Components/BulletList";
import HeroButton from "./Components/HeroButton";
import Introduction from "./Sections/Introduction/Introduction";
import TechnicalSkills from "./Sections/TechnicalSkills/TechnicalSkills";
import FeaturedProjects from "./Sections/FeaturedProjects/FeaturedProjects";

import { useRef } from "react";
import Topbar from "./Components/Topbar/Topbar";
import ProjectButtonLink from "./Components/ProjectButtonLink";

export default function Home() {

  const introRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);


  return (
    <div className=" font-dm-sans">
      <Topbar/>
      




      <section className=" h-100dvh w-full bg-gray-800 text-white">
        
        <div className="inset-0 absolute w-full h-full bg-cover bg-center brightness-75 z-10 bg-[url(/paris.webp)]"/>



        <div className="w-full h-screen inset-0 bg-black/30 relative z-20 flex flex-col justify-center items-center">
          <header className="w-full h-16 flex items-center p-6">

            <div className="flex-grow"/>
            <button></button>

          </header>

          <div className="flex-1"/>

          <div className="text-center text-shadow-md/50 select-none">
            <h1 className="text-7xl text-shadow-lg/50 mb-4 font-bold animate-[ease-in_0.5s_ease-out_1_forwards]">Aidan Tang</h1>
            <div className="w-full h-0.5 bg-white mb-2"/>
            <p className="mb-1">Software Development / Computer Science Student</p>

            <p>Toronto, Ontario, Canada</p>



            <div className="mb-12"/>

            <div className="flex flex-col gap-3">

              <button 
              onClick={() => {introRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}}
              className="border-2 rounded-2xl text-white px-9 py-px transition ease-in-out hover:bg-white hover:text-black hover:scale-102 hover:cursor-pointer">Introduction</button>

              <button 
              onClick={() => {projectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}}
              className="border-2 rounded-2xl text-white px-9 py-px transition ease-in-out hover:bg-white hover:text-black hover:scale-102 hover:cursor-pointer">Projects</button>
              
              <button 
              onClick={() => {techRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}}
              className="border-2 rounded-2xl text-white px-9 py-px transition ease-in-out hover:bg-white hover:text-black hover:scale-102 hover:cursor-pointer">Technical Skills</button>
              
   
              


            </div>

            

          </div>

          <div className="flex-1"/>

          <button onClick={() => {introRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}} className="h-8 w-8 bg-white text-black rounded-full select-none font-bold hover:scale-102 hover:brightness-75 transition ease-in-out hover:cursor-pointer">v</button>

          <div className="mt-18"/>

        </div>

      </section>

      


      <div ref={introRef}/>
      <main className="w-full flex items-center justify-center dark:bg-gray-900">
        
        
        <div className="w-300 bg-gray-100 dark:bg-gray-900 px-12 py-12 flex flex-col rounded-4xl">
          
          <div className="pb-6"/>
          <Introduction/>
          
          <div ref={projectRef}/>
          <div className="pb-18"/>
          <FeaturedProjects/>

          <div ref={techRef}/>
          <div className="pb-18"/>
          <TechnicalSkills/>

          <div>
            <div className=""><Header text="Social Media"/></div>
            <p className="mb-6 text-center">Feel free to follow my progress on these sites.</p>

            <div className="flex flex-col justify-center items-center gap-3 md:flex-row">
              <ProjectButtonLink text="LinkedIn" link="https://www.linkedin.com/in/aidantang-cs"/>
              <ProjectButtonLink text="GitHub" link="https://github.com/at-tang"/>

            </div>
          </div>


          


        </div>

      </main>








    </div>

  );
}
