import { facts, profile, sides } from "../content";

function ProfilePanel() {
    return (
        <aside className="rounded-lg border border-rule bg-paper p-6">
            <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width="112"
                height="112"
                className="h-28 w-28 rounded-full object-cover"
            />
            <p className="mt-4 text-lg font-semibold text-ink">{profile.name}</p>
            <p className="text-slate">{profile.location}</p>

            <dl className="mt-5 divide-y divide-rule border-t border-rule">
                {facts.map((fact) => (
                    <div key={fact.label} className="py-3">
                        <dt className="text-sm text-slate">{fact.label}</dt>
                        <dd className="mt-0.5 font-medium leading-snug text-ink">
                            {fact.href ? (
                                <a
                                    href={fact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="break-words text-pine underline underline-offset-4"
                                >
                                    {fact.value}
                                </a>
                            ) : (
                                fact.value
                            )}
                        </dd>
                    </div>
                ))}
            </dl>
        </aside>
    );
}

function Sides() {
    return (
        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2">
            {sides.map((side, i) => (
                <article
                    key={side.name}
                    className={`flex flex-col rounded-lg p-6 md:p-8 ${
                        i === 0 ? "bg-ink text-paper" : "bg-pine text-paper"
                    }`}
                >
                    <h2 className="font-display text-2xl font-semibold">{side.name}</h2>
                    <p className="mt-3 leading-relaxed text-paper/85">{side.text}</p>
                    <ul className="mt-5 space-y-2 border-t border-paper/20 pt-5">
                        {side.points.map((point) => (
                            <li key={point} className="flex gap-3 text-paper">
                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-paper/70" aria-hidden="true" />
                                {point}
                            </li>
                        ))}
                    </ul>
                    <a
                        href={side.link.href}
                        className="mt-6 self-start font-medium text-paper underline decoration-paper/40 underline-offset-4 hover:decoration-paper"
                    >
                        {side.link.label}
                    </a>
                </article>
            ))}
        </div>
    );
}

export default function Hero() {
    return (
        <section id="top" className="bg-mist px-5 pb-20 pt-28 md:px-8 md:pb-24 md:pt-36">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 md:grid-cols-[1fr_300px] md:items-start lg:grid-cols-[1fr_320px] lg:gap-16">
                    <div className="min-w-0">
                        <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
                            {profile.role}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
                            {profile.intro}
                        </p>
                        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">{profile.seeking}</p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#projects"
                                className="rounded-md bg-pine px-5 py-3 font-medium text-paper transition-colors hover:bg-pine-dark"
                            >
                                See my projects
                            </a>
                            {profile.cvs.map((cv) => (
                                <a
                                    key={cv.href}
                                    href={cv.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-md border border-ink px-5 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                                >
                                    {cv.label}
                                </a>
                            ))}
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md border border-ink px-5 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                            >
                                GitHub
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md border border-ink px-5 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                            >
                                LinkedIn
                            </a>
                            <a
                                href={`mailto:${profile.email}`}
                                className="rounded-md px-5 py-3 font-medium text-ink underline decoration-rule underline-offset-4 hover:decoration-ink"
                            >
                                Email me
                            </a>
                        </div>
                    </div>

                    <ProfilePanel />
                </div>

                <Sides />
            </div>
        </section>
    );
}
