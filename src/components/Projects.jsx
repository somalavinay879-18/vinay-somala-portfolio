
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
            github:
                "https://github.com/somalavinay879-18/CareerTrack",
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
            className="bg-slate-800 text-white py-20 px-6 md:px-8"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
                    Projects
                </h2>

                <p className="text-gray-300 text-lg mb-12 max-w-4xl">
                    Selected projects showcasing my practical
                    experience in Data Science, Machine Learning,
                    Data Engineering, and Full-Stack Development.
                    Click any project to explore its GitHub repository.
                </p>

                {/* Project Cards */}
                <div className="grid md:grid-cols-2 gap-8">

                    {projects.map((project) => (
                        <a
                            key={project.title}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="group block bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-lg hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 transition duration-300 cursor-pointer"
                        >

                            {/* Project Title */}
                            <div className="flex items-start justify-between gap-4 mb-4">

                                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition">
                                    {project.title}
                                </h3>

                                <span
                                    aria-hidden="true"
                                    className="text-cyan-400 text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                >
                                    ↗
                                </span>

                            </div>

                            {/* Project Description */}
                            <p className="text-gray-300 leading-8 mb-6">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-3 mb-8">

                                {project.tech.map((item) => (
                                    <span
                                        key={item}
                                        className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}

                            </div>

                            {/* Visual GitHub Button */}
                            <span className="inline-flex items-center gap-2 bg-cyan-500 group-hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition duration-300">
                                View GitHub Repository
                                <span aria-hidden="true">↗</span>
                            </span>

                        </a>
                    ))}

                </div>

            </div>
        </section>
    );
}
