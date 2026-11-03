import { profile, processLane } from "../content";

function Lane() {
    const { sap, data } = processLane;

    return (
        <figure className="mt-14 md:mt-16">
            {/* Desktop: two rows linked by short connectors */}
            <div className="hidden md:grid md:grid-cols-[140px_repeat(4,1fr)] md:gap-x-3">
                <span className="self-center text-sm font-medium text-slate">In SAP S/4HANA</span>
                {sap.map((step) => (
                    <div
                        key={step}
                        className="rounded-md border border-ink/80 bg-paper px-3 py-3 text-center text-[15px] font-medium text-ink"
                    >
                        {step}
                    </div>
                ))}

                <span />
                {sap.map((step) => (
                    <div key={`${step}-link`} className="flex justify-center" aria-hidden="true">
                        <span className="lane-link block h-9 w-px bg-pine" />
                    </div>
                ))}

                <span className="self-center text-sm font-medium text-pine">In the data</span>
                {data.map((step) => (
                    <div
                        key={step}
                        className="rounded-md bg-pine px-3 py-3 text-center text-[15px] font-medium text-paper"
                    >
                        {step}
                    </div>
                ))}
            </div>

            {/* Mobile: one row per stage */}
            <ol className="space-y-2 md:hidden">
                {sap.map((step, i) => (
                    <li key={step} className="grid grid-cols-2 overflow-hidden rounded-md border border-rule text-sm">
                        <span className="bg-paper px-3 py-2.5 font-medium text-ink">{step}</span>
                        <span className="bg-pine px-3 py-2.5 font-medium text-paper">{data[i]}</span>
                    </li>
                ))}
            </ol>

            <figcaption className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate">
                Every step of the procurement process in SAP leaves records behind. I work on the
                data side: turning those records into numbers people can plan with.
            </figcaption>
        </figure>
    );
}

export default function Hero() {
    return (
        <section id="top" className="bg-mist px-5 pb-20 pt-32 md:px-8 md:pb-24 md:pt-40">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-3xl">
                        <p className="text-lg font-medium text-pine">{profile.name}</p>
                        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
                            {profile.role}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
                            {profile.intro}
                        </p>
                        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">
                            {profile.seeking}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#projects"
                                className="rounded-md bg-pine px-5 py-3 font-medium text-paper transition-colors hover:bg-pine-dark"
                            >
                                See my projects
                            </a>
                            <a
                                href={`mailto:${profile.email}`}
                                className="rounded-md border border-ink px-5 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                            >
                                Email me
                            </a>
                        </div>
                    </div>

                    <img
                        src={profile.photo}
                        alt={`Portrait of ${profile.name}`}
                        width="176"
                        height="176"
                        className="h-32 w-32 shrink-0 rounded-full object-cover md:h-44 md:w-44"
                    />
                </div>

                <Lane />
            </div>
        </section>
    );
}
