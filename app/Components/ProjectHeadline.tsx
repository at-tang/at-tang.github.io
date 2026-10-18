"use client"

import Image from "next/image"
import Button from "./Button"
import ProjectButtonLink from "./ProjectButtonLink"


export default function ProjectHeadline({title, subtitle, description, image, githubLink, techStack, banner, detailLink}: {
    title: string,
    subtitle: string,
    techStack?: string,
    description: string,
    image: string,
    banner?: string,
    githubLink: string,
    detailLink?: string
}) {

    const imageUrl = `/${image}`



    const handleRedirect = () => {
        if (typeof window !== 'undefined') {
            //window.open(githubLink, '_blank', 'noopener,noreferrer');
        }
    }
    return (
        <div className="bg-gray-200 p-6 w-full rounded-xl dark:bg-gray-700">
            <header className="mb-3 flex items-center justify-center max-w-full">
                <Image src={`${banner}`} width={1024} height={1024} alt={`${title}`} className="w-full overflow-clip rounded-2xl"/>
            </header>

            <div className="flex gap-3 items-center">


                
                
                <div className="leading-5">
                    <h1 className="text-xl font-bold md:text-4xl md:mb-1">{title}</h1>
                    <p className="mb-3">{subtitle}</p>
                    <hr className="mb-3"/>

                    <p className="mb-3"><b>Tech Stack: </b> {techStack || "TBD"}</p>
                    
                    <p className="md:mr-16 mb-6">{description}</p>

                    <div className="flex gap-3 justify-center md:justify-start">

                        <ProjectButtonLink link={githubLink} text="GitHub Repository"/>
                        {detailLink && <ProjectButtonLink link={detailLink} text="See More"/>}
                    </div>

                    

                </div>

                <div className="flex-1"/>

                <Image src={`/${image}`} alt="project image" width={1024} height={1024} className="w-20 h-20 md:w-40 md:h-40 rounded-2xl md:block hidden"/>

            </div>



        </div>
    )
}