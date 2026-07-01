export default function About() {
    return (
        <section
            id="about"
            className="bg-slate-800 text-white py-20 px-8"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold text-cyan-400 mb-10">
                    About Me
                </h2>

                <p className="text-xl leading-9 text-gray-300">
                    I am currently pursuing a Master's in Applied Data Science &
                    Artificial Intelligence at SRH University, Hamburg. Alongside
                    my studies, I am also pursuing SAP S/4HANA Materials Management
                    (SAP MM) training at Brandenburg University of Applied Sciences.
                </p>

                <p className="text-xl leading-9 text-gray-300 mt-8">
                    I enjoy building machine learning models, full-stack
                    applications, and data-driven solutions that solve
                    real-world business problems. I am currently looking for
                    Working Student opportunities and Internship roles in
                    Germany in the fields of Data Science, Machine Learning,
                    Artificial Intelligence, Data Analytics, and SAP.
                </p>

                <div className="grid md:grid-cols-4 gap-6 mt-14">

                    <div className="bg-slate-900 rounded-2xl p-6 text-center hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-cyan-500/20">
                        <h3 className="text-4xl font-bold text-cyan-400">
                            4+
                        </h3>
                        <p className="mt-3 text-gray-300">
                            Projects Completed
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6 text-center hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-cyan-500/20">
                        <h3 className="text-4xl font-bold text-cyan-400">
                            15+
                        </h3>
                        <p className="mt-3 text-gray-300">
                            Technical Skills
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6 text-center hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-cyan-500/20">
                        <h3 className="text-4xl font-bold text-cyan-400">
                            2
                        </h3>
                        <p className="mt-3 text-gray-300">
                            Academic Programs
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6 text-center hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-cyan-500/20">
                        <h3 className="text-2xl font-bold text-cyan-400">
                            Open
                        </h3>
                        <p className="mt-3 text-gray-300">
                            Working Student Roles & Internships
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}