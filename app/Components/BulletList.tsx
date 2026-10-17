export default function BulletList(
    {title, items}:
    {
        title: string,
        items: string[]
    }
) {
    return (
                <div className="leading-8 mb-6">
                  <p className="font-bold">{title}</p>
                  <ul className="list-disc pl-10 leading-8">
                    {items.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}

                  </ul>
                </div>

    )
}