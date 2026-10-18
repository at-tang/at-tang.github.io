export default function Button({text, callback}: {text: string, callback?: () => any}) {
    return (
        <button onClick={callback()} className="rounded-full bg-gray-300 dark:bg-gray-600 px-4 py-0.5 transition ease-in-out hover:cursor-pointer hover:brightness-75">
            {text}

        </button>
    )
}