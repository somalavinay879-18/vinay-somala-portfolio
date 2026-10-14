
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigation = [
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "SAP MM", href: "#sap" },
        { name: "Contact", href: "#contact" },
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-5 md:px-8 py-4">

                {/* Portfolio Name */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="text-xl md:text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition whitespace-nowrap"
                >
                    Vinay Somala
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6">

                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-200 hover:text-cyan-400 text-base font-medium transition duration-300"
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Resume Button */}
                    <a
                        href="/VINAY.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-5 py-2.5 rounded-lg font-semibold transition duration-300 whitespace-nowrap"
                    >
                        Resume
                        <span aria-hidden="true">↗</span>
                    </a>

                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={
                        menuOpen ? "Close navigation menu" : "Open navigation menu"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    className="lg:hidden text-cyan-400 text-3xl flex items-center justify-center w-11 h-11 rounded-lg border border-slate-700 hover:bg-slate-800 transition"
                >
                    <span aria-hidden="true">
                        {menuOpen ? "×" : "☰"}
                    </span>
                </button>

            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div
                    id="mobile-navigation"
                    className="lg:hidden bg-slate-950 border-t border-slate-800 shadow-xl"
                >
                    <div className="flex flex-col px-6 py-5 gap-2">

                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={closeMenu}
                                className="text-gray-200 hover:text-cyan-400 hover:bg-slate-800 rounded-lg px-4 py-3 font-medium transition"
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Mobile Resume Button */}
                        <a
                            href="/VINAY.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="mt-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-5 py-3 rounded-lg font-semibold text-center transition"
                        >
                            View Resume ↗
                        </a>

                    </div>
                </div>
            )}

        </nav>
    );
}

