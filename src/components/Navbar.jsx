export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-950/95 backdrop-blur-md shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                    Vinay Somala
                </a>

                {/* Navigation */}
                <ul className="flex items-center gap-8 text-lg font-medium">

                    <li>
                        <a
                            href="#about"
                            className="text-white hover:text-cyan-400 transition duration-300"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#education"
                            className="text-white hover:text-cyan-400 transition duration-300"
                        >
                            Education
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            className="text-white hover:text-cyan-400 transition duration-300"
                        >
                            Skills
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className="text-white hover:text-cyan-400 transition duration-300"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#sap"
                            className="text-white hover:text-cyan-400 transition duration-300"
                        >
                            SAP MM
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="text-white hover:text-cyan-400 transition duration-300"
                        >
                            Contact
                        </a>
                    </li>

                </ul>

            </div>
        </nav>
    );
}