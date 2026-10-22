import Header from "@/app/Components/Header";
import ProjectHeadline from "@/app/Components/ProjectHeadline";

export default function FeaturedProjects() {
    return (
        <section className="">
        <Header text="My Projects"/>

        <div className="flex flex-col gap-6 justify-center items-center">

          <ProjectHeadline
          title="Lettertray"
          subtitle="Automatic File Sorting Desktop Application"
          techStack="JavaScript, TypeScript, Node.js, React, Electron.js, Tailwind CSS, SQL, SQLite"
          description={`A desktop application allowing users to automatically sort both pre-existing and new files. Features a highly visual flowgraph interface, leveraging drag-and-drop mechanics enabling users to map out sorting rules intuitively.`}
          image="lettertrayicon.png"
          githubLink="https://github.com/at-tang/Lettertray"
          banner="LettertrayBanner.jpg"
          />

          <ProjectHeadline
          title="Project Manager"
          subtitle="Productivity Mobile Application for iOS"
          techStack="Swift, SwiftUI, XCode, MapKit"
          description="A productivity mobile application allowing users to modularly organize their projects via individual tasks placed into distinct categories. Users can append various iOS-native features onto said Tasks, including native photos and Apple Maps support. The app also features Notifications and a Widget."
          image="swiftappicon.png"
          banner="ProjectManagerBanner.jpg"
          githubLink="https://github.com/at-tang/project-manager"
          />

          <ProjectHeadline
          title="Testmaker"
          subtitle="Quiz-themed Social Media Platform, Full-Stack Web Application"
          techStack="JavaScript / TypeScript, React, Next.js, Spring Boot, SQL, PostgreSQL, Spring Security"
          description="A full-stack web application enablings users to create, edit, share, and play user-generated quizzes."
          image="WebTestmakerLogoBlack.png"
          banner="WebTestmakerBanner.jpg"
          githubLink="https://github.com/at-tang/web-testmaker"
          />          
        </div>



        

      </section>

    )
}