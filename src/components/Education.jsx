import Section from "./Section";
import { education } from "../content";

export default function Education() {
    return (
        <Section id="education" tone="mist" title="Education">
            <ul className="grid gap-5 md:grid-cols-2">
                {education.map((item) => (
                    <li key={item.degree} className="rounded-lg border border-rule p-6">
                        <p className="text-slate">{item.dates}</p>
                        <h3 className="mt-1 text-lg font-semibold leading-snug text-ink">{item.degree}</h3>
                        <p className="mt-1 text-ink">{item.school}</p>
                        <p className="mt-4 leading-relaxed text-slate">{item.detail}</p>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
