
export default function About() {
    const highlights = [
        {
            title: "Data Science & AI",
            description: "Master's Degree",
        },
        {
            title: "SAP S/4HANA MM",
            description: "Procurement & Inventory",
        },
        {
            title: "Python & SQL",
            description: "Analytics & Development",
        },
        {
            title: "Open to Roles",
            description: "Working Student & Internship",
        },
    ];

    return (
        <section
            id="about"
            className="bg-slate-800 text-white py-20 px-6 md:px-8"
        >
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10">
                    About Me
                </h2>

                {/* Professional Introduction */}
                <div className="max-w-5xl space-y-6">

                    <p className="text-lg md:text-xl leading-8 md:leading-9 text-gray-300">
                        I am a Master's student in Applied Data Science
                        & Artificial Intelligence at SRH University,
                        Hamburg, specializing in Supply Chain &
                        Logistics Analytics. My interests lie in
                        connecting data analytics, enterprise systems,
                        and supply chain operations to solve practical
                        business problems.
                    </p>

                    <p className="text-lg md:text-xl leading-8 md:leading-9 text-gray-300">
                        Through academic and personal projects, I have
                        gained hands-on experience with Python, SQL,
                        machine learning, data pipelines, and data
                        visualization. My projects include predictive
                        modeling, sales analytics, and web-based
                        applications.
                    </p>

                    <p className="text-lg md:text-xl leading-8 md:leading-9 text-gray-300">
                        Alongside my Master's studies, I completed
                        SAP MM Sourcing & Procurement training through
                        ERP4Students at Technische Hochschule Brandenburg.
                        I am currently continuing my SAP S/4HANA
                        learning in Inventory Management & Invoice
                        Verification.
                    </p>

                    <p className="text-lg md:text-xl leading-8 md:leading-9 text-gray-300">
                        I am seeking Working Student and Internship
                        opportunities in Germany in Data Analytics,
                        Data Science, SAP MM, Procurement, and
                        Supply Chain Analytics, where I can apply
                        my technical knowledge and continue
                        developing practical industry experience.
                    </p>

                </div>

                {/* Professional Highlights */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

                    {highlights.map((item) => (
                        <div
                            key={item.title}
                            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center shadow-lg hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/20 transition duration-300"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-cyan-400">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-gray-300 text-sm md:text-base">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
