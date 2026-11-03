import { ExternalLink } from "lucide-react";
import Section from "./Section";
import { credentials } from "../content";

export default function Credentials() {
    return (
        <Section id="certifications" title="Certifications and badges">
            <ul className="divide-y divide-rule border-y border-rule">
                {credentials.map((item) => (
                    <li
                        key={item.title}
                        className="flex flex-col gap-2 py-5 md:flex-row md:items-center md:justify-between md:gap-8"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                            <p className="mt-0.5 text-slate">{item.issuer}</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 md:justify-end">
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
        </Section>
    );
}
