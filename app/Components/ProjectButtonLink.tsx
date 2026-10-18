import Link from "next/link";

export default function ProjectButtonLink({link, text}: {link: string, text: string}) {
    return (
        <>
            <Link href={link} target="_blank">
                <button className="rounded-lg bg-gray-300 dark:bg-gray-600 px-8 py-1.5 font-bold shadow-md/10 transition hover:scale-102 ease-in-out hover:cursor-pointer hover:brightness-90">
                    {text}
                </button>
            </Link>
        </>
    )
}