export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white pt-24 px-6"
        >
            {/* Profile Photo */}
            <img
                src="/profile.jpg"
                alt="Vinay Somala"
                className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/40 mb-8"
            />

            <h1 className="text-6xl md:text-7xl font-bold text-cyan-400 text-center">
                Vinay Somala
            </h1>

            <h2 className="text-3xl mt-4 text-center">
                Applied Data Science Student
            </h2>

            <p className="mt-4 text-xl text-gray-300 text-center">
                Python • Machine Learning • SQL • SAP S/4HANA MM
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-5">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
                >
                    Resume
                </a>

                <a
                    href="https://github.com/somalavinay879-18"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-800 border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 transition"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/vinay-somala"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-800 border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 transition"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
}