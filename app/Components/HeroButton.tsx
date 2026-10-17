export default function HeroButton({text}: {text: string}) {
    return (
        <button className="border-2 rounded-2xl text-white px-9 py-px transition ease-in-out hover:bg-white hover:text-black hover:scale-102 hover:cursor-pointer">{text}</button>
        
    )

}