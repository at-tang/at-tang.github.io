import Header from "@/app/Components/Header";
import Paragraph from "@/app/Components/Paragraph";

export default function Introduction() {
    return (
        <section className="w-full">
            <Header text="Introduction"/>
            <div className="flex justify-center">
                <p className="max-w-150 text-center">Hello! My name is Aidan Tang, and I am currently a third-year Computer Science student based in Toronto, currently attending York University. I enjoy engaging in Software Development, though I am always interested in learning new paradigms of Computer Science. In particular, I am interested in applying my knowledge to create technical solutions to my everyday inconvenicences. When I am not exploring new ideas or exploring the everyday potential of technology, I also enjoy photography, biking, and reading about history, particularly Byzantine and Ancient Iranian history.</p>
            </div>

          </section>

    )
}