export default function Skills() {
    const categories = [
        {
            title: "Programming",
            skills: ["Python", "Java", "SQL", "JavaScript"],
        },
        {
            title: "Data Science",
            skills: [
                "Machine Learning",
                "Pandas",
                "NumPy",
                "Scikit-learn",
                "Matplotlib",
            ],
        },
        {
            title: "Database",
            skills: [
                "MySQL",
                "PostgreSQL",
                "DuckDB",
                "MongoDB",
            ],
        },
        {
            title: "Tools",
            skills: [
                "Git",
                "GitHub",
                "VS Code",
                "Jupyter Notebook",
                "Streamlit",
            ],
        },
        {
            title: "SAP & Supply Chain",
            skills: [
                "SAP S/4HANA MM",
                "Demand Forecasting",
                "Logistics",
                "Transportation",
                "Inventory Management",
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-5xl font-bold text-cyan-400 mb-12">
                    Skills
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-slate-800 rounded-2xl p-6 hover:shadow-cyan-500/20 hover:shadow-lg transition"
                        >
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-5">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-cyan-600/30 text-cyan-200 px-4 py-2 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}