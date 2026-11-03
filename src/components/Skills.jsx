import Section from "./Section";
import { skills } from "../content";

export default function Skills() {
    return (
        <Section id="skills" tone="mist" title="Skills">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
                {Object.entries(skills).map(([side, groups]) => (
                    <div key={side} className="min-w-0">
                        <h3 className="border-b-2 border-ink pb-3 text-xl font-semibold text-ink">{side}</h3>
                        <dl className="divide-y divide-rule border-b border-rule">
                            {groups.map((group) => (
                                <div key={group.group} className="grid gap-1 py-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                                    <dt className="font-semibold text-ink">{group.group}</dt>
                                    <dd className="leading-relaxed text-slate">{group.items.join(", ")}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                ))}
            </div>
        </Section>
    );
}
