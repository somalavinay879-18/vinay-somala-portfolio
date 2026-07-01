export default function Projects() {
    const projects = [
        {
            title: "CareerTrack – Job Application Tracking System",
            description:
                "Developed a full-stack web application to manage and track job applications through an interactive dashboard. Features include CRUD operations, application status tracking, and Docker containerization.",
            tech: [
                "Python",
                "Flask",
                "SQLite",
                "HTML",
                "CSS",
                "Docker",
            ],
            github: "https://github.com/somalavinay879-18/CareerTrack",
        },

        {
            title: "Cryptocurrency Price Direction Prediction",
            description:
                "Built a machine learning model to predict cryptocurrency price direction using historical market data. Applied feature engineering, data preprocessing, and model evaluation techniques.",
            tech: [
                "Python",
                "Pandas",
                "NumPy",
                "Scikit-learn",
                "Machine Learning",
            ],
            github:
                "https://github.com/somalavinay879-18/crypto-price-prediction-ml",
        },

        {
            title: "Supermarket Sales Data Pipeline",
            description:
                "Designed a local data engineering pipeline using Python, DuckDB, SQL, and Streamlit to analyze supermarket sales data and generate interactive business insights.",
            tech: [
                "Python",
                "DuckDB",
                "SQL",
                "Streamlit",
            ],
            github:
                "https://github.com/somalavinay879-18/supermarket-data-pipeline",
        },
    ];

    return (
        <section
            id="projects"
            className="bg-slate-800 text-white py-20 px-8"
        >
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold text-cyan-400 mb-4">
                    Projects
                </h2>

                <p className="text-gray-400 text-lg mb-12">
                    Selected projects showcasing my experience in Data Science,
                    Machine Learning, Data Engineering, and Full-Stack Development.
                </p>

                <div className="grid md:grid-cols-2 gap-8">

                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/30 transition duration-300"
                        >
                            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 leading-8 mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-6">
                                {project.tech.map((item) => (
                                    <span
                                        key={item}
                                        className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg transition"
                            >
                                View on GitHub →
                            </a>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}