export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-5xl mx-auto px-6 text-center">

                <h2 className="text-5xl font-bold text-cyan-400 mb-6">
                    Contact Me
                </h2>

                <p className="text-gray-300 text-lg mb-12">
                    I'm currently looking for Working Student roles, Internships,
                    and opportunities in Data Science, Machine Learning, and SAP MM.
                    Feel free to reach out!
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Email */}
                    <div className="bg-slate-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition">
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                            Email
                        </h3>

                        <a
                            href="mailto:somalavinay879@gmail.com"
                            className="text-gray-300 hover:text-cyan-400"
                        >
                            somalavinay879@gmail.com
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="bg-slate-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition">
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                            LinkedIn
                        </h3>

                        <a
                            href="https://linkedin.com/in/vinay-somala"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-300 hover:text-cyan-400"
                        >
                            linkedin.com/in/vinay-somala
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="bg-slate-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition">
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                            GitHub
                        </h3>

                        <a
                            href="https://github.com/somalavinay879-18"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-300 hover:text-cyan-400"
                        >
                            github.com/somalavinay879-18
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}