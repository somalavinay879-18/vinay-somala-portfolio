import { profile } from "../content";

export default function Contact() {
    const channels = [
        { name: "Email", value: profile.email, href: `mailto:${profile.email}` },
        { name: "LinkedIn", value: "linkedin.com/in/vinaysomala", href: profile.linkedin },
        { name: "GitHub", value: "github.com/somalavinay879-18", href: profile.github },
    ];

    return (
        <section id="contact" className="bg-ink px-5 py-20 text-paper md:px-8 md:py-24">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
                <div>
                    <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                        Let’s talk
                    </h2>
                    <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/80">
                        {profile.seeking}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href={`mailto:${profile.email}?subject=Working%20student%20role`}
                            className="rounded-md bg-paper px-5 py-3 font-medium text-ink transition-colors hover:bg-mist"
                        >
                            Email me
                        </a>
                        {profile.cvs.map((cv) => (
                            <a
                                key={cv.href}
                                href={cv.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md border border-paper/60 px-5 py-3 font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
                            >
                                {cv.label}
                            </a>
                        ))}
                    </div>
                </div>

                <ul className="divide-y divide-paper/15 border-y border-paper/15 self-start">
                    {channels.map((channel) => (
                        <li key={channel.name}>
                            <a
                                href={channel.href}
                                target={channel.name === "Email" ? undefined : "_blank"}
                                rel={channel.name === "Email" ? undefined : "noopener noreferrer"}
                                className="flex flex-col py-4 transition-colors hover:text-paper/70"
                            >
                                <span className="text-sm text-paper/60">{channel.name}</span>
                                <span className="break-words font-medium">{channel.value}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <p className="mx-auto mt-16 max-w-6xl text-sm text-paper/50">
                © 2026 {profile.name}. Built with React, Vite and Tailwind CSS.
            </p>
        </section>
    );
}
