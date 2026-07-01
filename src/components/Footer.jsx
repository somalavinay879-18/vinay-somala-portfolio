export default function Footer() {
    return (
        <footer className="bg-slate-950 text-gray-400 py-8">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-cyan-400">
                        Vinay Somala
                    </h3>
                    <p className="mt-2 text-sm">
                        Applied Data Science Student
                    </p>
                </div>

                <div className="flex gap-6 mt-6 md:mt-0">

                    <a
                        href="https://github.com/somalavinay879-18"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vinaysomala/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:somalavinay879@gmail.com"
                        className="hover:text-cyan-400 transition"
                    >
                        Email
                    </a>

                </div>

            </div>

            <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm">
                © {new Date().getFullYear()} Vinay Somala. Built with React, Tailwind CSS & Vite.
            </div>
        </footer>
    );
}