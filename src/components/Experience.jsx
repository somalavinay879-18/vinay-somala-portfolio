import Section from "./Section";
import { experience } from "../content";

export default function Experience() {
    return (
        <Section id="experience" tone="mist" title="Experience">
            <ul className="divide-y divide-rule border-y border-rule">
                {experience.map((job) => (
                    <li key={job.role} className="grid gap-4 py-7 md:grid-cols-[1fr_2fr] md:gap-10">
                        <div>
                            <h3 className="text-xl font-semibold text-ink">{job.role}</h3>
                            <p className="mt-1 text-ink">{job.company}</p>
                            <p className="mt-0.5 text-slate">{job.dates}</p>
                        </div>
                        <ul className="space-y-2">
                            {job.points.map((point) => (
                                <li key={point} className="flex gap-3 leading-relaxed text-ink">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" aria-hidden="true" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
