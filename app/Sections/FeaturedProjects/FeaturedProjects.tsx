import Header from "@/app/Components/Header";
import ProjectHeadline from "@/app/Components/ProjectHeadline";

export default function FeaturedProjects() {
    return (
        <section className="p-6">
        <Header text="My Projects"/>

        <div className="flex flex-col gap-6 justify-center items-center">

          <ProjectHeadline
          title="Lettertray"
          subtitle="Automatic File Sorting Desktop Application"
          techStack="JavaScript, TypeScript, SQL, SQLite, React, Electron.js, Tailwind CSS"
          description={`A desktop application allowing users to automatically sort both pre-existing and new files. Features a highly visual flowgraph interface, leveraging drag-and-drop mechanics enabling users to map out sorting rules intuitively.`}
          image="lettertrayicon.png"
          githubLink="sample"
          />

          <ProjectHeadline
          title="Project Manager"
          subtitle="Productivity Mobile Application for iOS"
          techStack="Swift, SwiftUI, XCode, MapKit"
          description="A productivity mobile application allowing users to modularly organize their projects via individual tasks placed into distinct categories. Users can append various iOS-native features onto said Tasks, including native photos and Apple Maps support. The app also features Notifications and a Widget."
          image="swiftappicon.png"
          githubLink="sample"
          />
        </div>



        

      </section>

    )
}