export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white pt-24 px-6 text-center"
        >
            <h1 className="text-6xl md:text-7xl font-bold text-cyan-400">
                Vinay Somala
            </h1>

            <h2 className="text-3xl md:text-4xl mt-4 font-semibold">
                Applied Data Science Student
            </h2>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl leading-8">
                Passionate about Data Science, Machine Learning, Artificial Intelligence,
                SAP S/4HANA Materials Management, and Data Analytics.
            </p>

            <p className="mt-4 text-lg text-gray-400">
                Python • SQL • Machine Learning • SAP S/4HANA MM
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

                <a
                    href="https://github.com/somalavinay879-18"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-lg font-semibold transition duration-300"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/vinaysomala/"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-cyan-500 hover:bg-cyan-500 px-7 py-3 rounded-lg font-semibold transition duration-300"
                >
                    LinkedIn
                </a>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-500 hover:bg-green-600 px-7 py-3 rounded-lg font-semibold transition duration-300"
                >
                    Resume
                </a>

            </div>

            <p className="mt-12 text-gray-500 text-sm">
                📍 Hamburg, Germany • Open to Working Student & Internship Opportunities
            </p>
        </section>
    );
}