export default function Header({text}: {text: string}) {
    return (
        <div className=" flex items-center justify-center md:justify-left rounded-lg">
            <div>
                <h1 className="md:text-5xl text-4xl mb-3 md:mb-5 font-semibold">{text}</h1>
                <div className="flex mb-9 items-center justify-center">
                    <div className="bg-foreground h-0.5 w-16"/>
                    <div className="md:visible hidden flex-1"/>

                </div>
            </div>
        </div>
    )
}