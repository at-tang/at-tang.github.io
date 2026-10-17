export default function Paragraph({text}: {text: string}) {
    return (
        <p className="max-w-md md:text-left text-center">{text}</p>
    )
}