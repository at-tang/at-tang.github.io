import Image from "next/image"
import Button from "./Button"

export default function ProjectHeadline({title, subtitle, description, image, githubLink, techStack}: {
    title: string,
    subtitle: string,
    techStack?: string,
    description: string,
    image: string,
    githubLink: string
}) {

    const imageUrl = `/${image}`
    return (
        <div className="bg-gray-200 p-6 w-full rounded-xl dark:bg-gray-700">
            <div className="flex gap-3 items-center">
                
                
                <div className="leading-5">
                    <h1 className="text-2xl font-bold md:text-4xl mb-1">{title}</h1>
                    <p className="mb-3">{subtitle}</p>
                    <hr className="mb-3"/>

                    <p className="mb-3"><b>Tech Stack: </b> {techStack || "TBD"}</p>
                    
                    <p className="md:mr-16 mb-6">{description}</p>

                    <div className="flex gap-3">
                        <Button text="GitHub Repository"/>
                        <Button text="See More"/>
                    </div>

                    

                </div>

                <div className="flex-1"/>

                <Image src={`/${image}`} alt="project image" width={1024} height={1024} className="w-20 h-20 md:w-40 md:h-40 rounded-2xl"/>

            </div>

        </div>
    )
}