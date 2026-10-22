import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TopbarButton({text, isExternal, redirectLink}: {text: string, isExternal: boolean, redirectLink?: string}) {

    const router = useRouter();
    if (isExternal) {
        return (
            <Link href={redirectLink || ""} target="_blank"  className="h-full flex justify-center items-center">
                <button className="tracking-wider text-sm hover:cursor-pointer transition ease-in-out hover:brightness-90 duration-50">{text}</button>
            </Link>
        )
    }

    return (
        <button onClick={() => {router.push(redirectLink || "/")}} className="tracking-wider text-sm hover:cursor-pointer transition ease-in-out hover:brightness-90 duration-50">{text}</button>

    )
}