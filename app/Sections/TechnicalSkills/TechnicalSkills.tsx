import BulletList from "@/app/Components/BulletList";
import Header from "@/app/Components/Header";

export default function TechnicalSkills() {
    return (
              <section className="">
                <Header text="Technical Skills"/>
                <p className="max-w-192 mb-6"> The following is my list of technical skills, or tools/frameworks I am familiar with. As an avid learner, I am always welcome to expanding my skillset with new, upcoming ideas!</p>

                <BulletList
                title="Paradigms"
                items={["Full-Stack Web Development", "Mobile Development"]}
                />
        
                <BulletList 
                title="Programming Languages"
                items={["HTML / CSS", "JavaScript / TypeScript", "Java", "SQL", "Python", "Swift", "Kotlin", "C", "C++", "RISC-V Assembly"]}
                />
        
                <BulletList
                title="Frameworks / Databases"
                items={["Spring Boot (Spring Security, Spring Data)", "React", "Next.js", "Electron.js", "Tailwind CSS", "SwiftUI", "PostgreSQL", "MongoDB"]}
                />
        
                <BulletList
                title="Tools"
                items={["Git (GitHub)", "Visual Studio Code", "XCode", "Microsoft Office"]}
                />
        
                <BulletList
                title="Concepts"
                items={["Agile/Scrum", "Object-Oriented Programming (OOP)"]}
                />

                <BulletList
                title="Relevant Coursework"
                items={["EECS 2031: Software Tools (Unix, C)", "EECS 2021: Computer Organization (Assembly)", "EECS 2101: Data Structures & Algorithms", "EECS 3221: Operating Systems", "EECS 3421: Database Systems"]}
                />
        
        
              </section>

    )
}