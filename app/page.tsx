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

export default function Home() {

  const introRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);


  return (
    <div className=" font-dm-sans">




      <section className=" h-dvh w-full bg-gray-800 text-white">
        <div className="inset-0 absolute w-full h-dvh bg-fixed bg-cover bg-center brightness-75 z-10 bg-[url(/paris.jpg)]"/>



        <div className="w-full h-dvh inset-0 bg-black/30 relative z-20 flex flex-col justify-center items-center">
          <header className="w-full h-16 flex items-center p-6">
            <p className="font-bold select-none text-2xl">Aidan Tang</p>
            <div className="flex-grow"/>
            <button></button>

          </header>

          <div className="flex-1"/>

          <div className="text-center text-shadow-md/50 select-none">
            <h1 className="text-7xl text-shadow-lg/50 mb-4 font-bold animate-[ease-in_0.5s_ease-out_1_forwards]">Aidan Tang</h1>
            <div className="w-full h-0.5 bg-white mb-2"/>
            <p>Software Development / Computer Science Student</p>



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

          <button className="h-8 w-8 bg-white text-black rounded-full select-none">v</button>

          <div className="mt-18"/>

        </div>

      </section>


      <main className="w-full flex items-center justify-center dark:bg-gray-900">
        <div className="w-300 bg-gray-100 dark:bg-gray-900 p-12 flex flex-col gap-12 rounded-4xl">

          <div ref={introRef}/>
          <Introduction/>
          
          <div ref={projectRef}/>
          <FeaturedProjects/>

          <div ref={techRef}/>
          <TechnicalSkills/>
          


        </div>

      </main>








    </div>

  );
}
