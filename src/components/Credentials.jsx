import { ExternalLink } from "lucide-react";
import Section from "./Section";
import { credentials } from "../content";

export default function Credentials() {
    return (
        <Section id="certifications" title="Certifications and badges">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                {credentials.map((group) => (
                    <div key={group.provider} className="min-w-0">
                        <h3 className="border-b-2 border-ink pb-3 text-xl font-semibold text-ink">
                            {group.provider}
                        </h3>
                        <ul className="divide-y divide-rule border-b border-rule">
                            {group.items.map((item) => (
                                <li key={item.title} className="py-5">
                                    <h4 className="text-lg font-semibold leading-snug text-ink">{item.title}</h4>
                                    <p className="mt-1 text-slate">{item.kind}</p>
                                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                                        {item.status === "preparing" ? (
                                            <span className="rounded border border-amber/50 px-2.5 py-1 text-sm font-medium text-amber">
                                                {item.date}
                                            </span>
                                        ) : (
                                            <span className="text-slate">{item.date}</span>
                                        )}
                                        {item.href && (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 font-medium text-pine underline-offset-4 hover:underline"
                                            >
                                                Verify
                                                <ExternalLink size={15} aria-hidden="true" />
                                            </a>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
