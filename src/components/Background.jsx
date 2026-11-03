import Section from "./Section";
import { education, skills } from "../content";

export default function Background() {
    return (
        <Section id="background" tone="mist" title="Education and skills">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <div>
                    <h3 className="mb-2 font-semibold text-slate">Education</h3>
                    <ul className="divide-y divide-rule border-y border-rule">
                        {education.map((item) => (
                            <li key={item.degree} className="py-6">
                                <h4 className="text-lg font-semibold text-ink">{item.degree}</h4>
                                <p className="mt-1 text-ink">{item.school}</p>
                                <p className="mt-0.5 text-slate">{item.dates}</p>
                                <p className="mt-3 leading-relaxed text-slate">{item.detail}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="mb-2 font-semibold text-slate">Skills</h3>
                    <dl className="divide-y divide-rule border-y border-rule">
                        {skills.map((group) => (
                            <div key={group.group} className="grid gap-1 py-4 sm:grid-cols-[150px_1fr] sm:gap-4">
                                <dt className="font-semibold text-ink">{group.group}</dt>
                                <dd className="leading-relaxed text-slate">{group.items.join(", ")}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Section>
    );
}
