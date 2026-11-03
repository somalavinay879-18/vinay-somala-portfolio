import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../content";

const links = [
    { name: "Projects", href: "#projects" },
    { name: "SAP", href: "#sap" },
    { name: "Certifications", href: "#certifications" },
    { name: "Background", href: "#background" },
    { name: "Contact", href: "#contact" },
];

export default function Nav() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur">
            <nav
                className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
                aria-label="Main"
            >
                <a href="#top" onClick={close} className="font-display text-lg font-semibold text-ink">
                    {profile.name}
                </a>

                <div className="hidden items-center gap-7 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-[15px] text-slate transition-colors hover:text-ink"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={profile.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-ink px-4 py-2 text-[15px] font-medium text-paper transition-colors hover:bg-pine-dark"
                    >
                        Download CV
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="p-1 text-ink md:hidden"
                    aria-expanded={open}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {open && (
                <div className="border-t border-rule bg-paper px-5 pb-5 md:hidden">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={close}
                            className="block border-b border-rule py-3 text-ink"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={profile.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={close}
                        className="mt-4 block rounded-md bg-ink px-4 py-3 text-center font-medium text-paper"
                    >
                        Download CV
                    </a>
                </div>
            )}
        </header>
    );
}
