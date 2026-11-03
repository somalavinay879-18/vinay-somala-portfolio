import Section from "./Section";
import { sap } from "../content";

export default function Sap() {
    return (
        <Section
            id="sap"
            tone="mist"
            title="SAP S/4HANA procurement"
            intro="Knowing how purchasing works inside SAP tells me what the data means and where it comes from."
        >
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
                <div>
                    <h3 className="text-xl font-semibold text-ink">{sap.program}</h3>
                    <p className="mt-1 text-slate">{sap.provider}</p>
                    <p className="mt-1 text-slate">{sap.when}</p>
                    <p className="mt-5 leading-relaxed text-ink">{sap.summary}</p>
                </div>

                <div>
                    <h3 className="font-semibold text-ink">What I worked through</h3>
                    <ul className="mt-4 divide-y divide-rule border-y border-rule">
                        {sap.topics.map((topic) => (
                            <li key={topic} className="py-2.5 text-ink">
                                {topic}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
