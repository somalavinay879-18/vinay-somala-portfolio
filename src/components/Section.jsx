export default function Section({ id, title, intro, tone = "paper", children }) {
    const background = tone === "mist" ? "bg-mist" : "bg-paper";

    return (
        <section id={id} className={`${background} px-5 py-20 md:px-8 md:py-24`}>
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 max-w-2xl md:mb-12">
                    <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                        {title}
                    </h2>
                    {intro && (
                        <p className="mt-3 text-lg leading-relaxed text-slate">{intro}</p>
                    )}
                </div>
                {children}
            </div>
        </section>
    );
}

export function Tags({ items }) {
    return (
        <ul className="flex flex-wrap gap-2" aria-label="Tools used">
            {items.map((item) => (
                <li
                    key={item}
                    className="rounded border border-rule bg-paper px-2.5 py-1 text-sm text-slate"
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}
