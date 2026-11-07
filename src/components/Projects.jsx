import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import Section, { Tags } from "./Section";
import LateChart from "./LateChart";
import { featured, projects } from "../content";

function Pipeline() {
    return (
        <div className="mt-8">
            <h4 className="font-semibold text-ink">How the pipeline works</h4>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
                {featured.pipeline.map((stage, i) => (
                    <li
                        key={stage.step}
                        className="relative flex items-start gap-3 rounded-md bg-mist px-4 py-3 lg:flex-col lg:gap-1 lg:rounded-none lg:border-l lg:border-paper lg:first:rounded-l-md lg:first:border-l-0 lg:last:rounded-r-md"
                    >
                        <span className="text-sm font-semibold tabular-nums text-pine">{i + 1}</span>
                        <span>
                            <span className="block font-medium text-ink">{stage.step}</span>
                            <span className="block text-sm leading-snug text-slate">{stage.detail}</span>
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

function CaseStudy() {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-8 border-t border-rule pt-6">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="olist-case-study"
                className="inline-flex items-center gap-2 font-semibold text-pine underline-offset-4 hover:underline"
            >
                {open ? "Hide the case study" : "Read the full case study"}
                <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
                />
            </button>

            <div id="olist-case-study" hidden={!open} className="mt-6 grid gap-x-12 gap-y-7 md:grid-cols-2">
                {featured.caseStudy.map((part) => (
                    <section key={part.heading} className="min-w-0">
                        <h4 className="font-semibold text-ink">{part.heading}</h4>
                        <p className="mt-2 max-w-prose leading-relaxed text-slate">{part.text}</p>
                    </section>
                ))}

                <section className="min-w-0 md:col-span-2">
                    <h4 className="font-semibold text-ink">Safety stock and reorder points, five largest categories</h4>
                    <div className="mt-3 overflow-x-auto">
                        <table className="w-full min-w-[480px] text-left tabular-nums">
                            <thead>
                                <tr className="border-b-2 border-ink text-sm text-slate">
                                    <th className="py-2 pr-4 font-medium">Category</th>
                                    <th className="py-2 pr-4 text-right font-medium">Forecast per week</th>
                                    <th className="py-2 pr-4 text-right font-medium">Safety stock</th>
                                    <th className="py-2 text-right font-medium">Reorder point</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-rule">
                                {featured.inventory.map((row) => (
                                    <tr key={row.category} className="text-ink">
                                        <td className="py-2.5 pr-4 capitalize">{row.category}</td>
                                        <td className="py-2.5 pr-4 text-right">{row.weekly}</td>
                                        <td className="py-2.5 pr-4 text-right">{row.safety}</td>
                                        <td className="py-2.5 text-right font-semibold">{row.reorder}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-2 text-sm text-slate">
                        Units. Assumes a 2-week lead time and a 95% service level. Olist sellers hold the stock, so this
                        shows the method, not a real policy.
                    </p>
                </section>
            </div>
        </div>
    );
}

function Featured() {
    return (
        <article className="rounded-lg border border-rule bg-paper p-6 md:p-10">
            <p className="font-medium text-pine">Main project</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
                {featured.title}
            </h3>
            <p className="mt-1 text-lg text-slate">{featured.subtitle}</p>

            <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-ink">{featured.summary}</p>

            <dl className="mt-8 grid gap-6 border-y border-rule py-7 md:grid-cols-3 md:gap-8">
                {featured.findings.map((finding) => (
                    <div key={finding.label}>
                        <dt className="font-display text-3xl font-semibold tabular-nums text-amber">{finding.value}</dt>
                        <dd className="mt-1 leading-snug text-slate">{finding.label}</dd>
                    </div>
                ))}
            </dl>

            <LateChart />

            <Pipeline />

            <h4 className="mt-8 font-semibold text-ink">Demand forecast and reorder points</h4>
            <p className="mt-2 max-w-3xl leading-relaxed text-slate">{featured.forecast}</p>

            <div className="mt-7">
                <Tags items={featured.tech} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
                {featured.links.map((link, i) => (
                    <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                            i === 0
                                ? "inline-flex items-center gap-2 rounded-md bg-pine px-5 py-3 font-medium text-paper transition-colors hover:bg-pine-dark"
                                : "inline-flex items-center gap-2 rounded-md border border-ink px-5 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                        }
                    >
                        {link.label}
                        <ExternalLink size={16} aria-hidden="true" />
                    </a>
                ))}
            </div>

            <CaseStudy />
        </article>
    );
}

export default function Projects() {
    return (
        <Section
            id="projects"
            title="Projects"
            intro="Real datasets, working code and results I can explain in an interview."
        >
            <Featured />

            <ul className="mt-12 divide-y divide-rule border-t border-rule">
                {projects.map((project) => (
                    <li key={project.title} className="grid gap-4 py-8 md:grid-cols-[1fr_2fr] md:gap-10">
                        <div>
                            <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
                            <p className="mt-1 text-slate">{project.kind}</p>
                        </div>
                        <div>
                            <p className="leading-relaxed text-ink">{project.summary}</p>
                            <div className="mt-4">
                                <Tags items={project.tech} />
                            </div>
                            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 font-medium text-pine underline-offset-4 hover:underline"
                                    >
                                        Open the live dashboard
                                        <ExternalLink size={15} aria-hidden="true" />
                                    </a>
                                )}
                                {project.href && (
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 font-medium text-pine underline-offset-4 hover:underline"
                                    >
                                        View the code on GitHub
                                        <ExternalLink size={15} aria-hidden="true" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
