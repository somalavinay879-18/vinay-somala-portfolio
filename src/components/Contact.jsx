export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-slate-800 text-white py-20 px-8"
        >
            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-5xl font-bold text-cyan-400 mb-6">
                    Contact
                </h2>

                <p className="text-xl text-gray-300 mb-12">
                    I'm currently looking for Working Student and Internship
                    opportunities in Data Science, Machine Learning, AI,
                    SAP S/4HANA MM, and Data Analytics.
                    Feel free to connect with me.
                </p>

                <div className="space-y-6 text-xl">

                    <p>
                        📧 <span className="font-semibold">Email:</span>{" "}
                        <a
                            href="mailto:somalavinay879@gmail.com"
                            className="text-cyan-400 hover:underline"
                        >
                            somalavinay879@gmail.com
                        </a>
                    </p>

                    <p>
                        💼 <span className="font-semibold">LinkedIn:</span>{" "}
                        <a
                            href="https://www.linkedin.com/in/vinaysomala/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-400 hover:underline"
                        >
                            linkedin.com/in/vinaysomala
                        </a>
                    </p>

                    <p>
                        🐙 <span className="font-semibold">GitHub:</span>{" "}
                        <a
                            href="https://github.com/somalavinay879-18"
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-400 hover:underline"
                        >
                            github.com/somalavinay879-18
                        </a>
                    </p>

                    <p>
                        📍 <span className="font-semibold">Location:</span> Hamburg, Germany
                    </p>

                </div>

            </div>
        </section>
    );
}