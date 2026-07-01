export default function Skills() {
    const skillCategories = [
        {
            title: "Programming",
            skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
        },
        {
            title: "Data Science & AI",
            skills: [
                "Machine Learning",
                "Deep Learning",
                "Data Analysis",
                "Pandas",
                "NumPy",
                "Scikit-learn",
            ],
        },
        {
            title: "Databases",
            skills: [
                "MySQL",
                "PostgreSQL",
                "DuckDB",
                "Database Management Systems",
            ],
        },
        {
            title: "SAP & Supply Chain",
            skills: [
                "SAP S/4HANA MM",
                "Demand Forecasting",
                "Inventory Management",
                "Logistics",
                "Transportation",
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
    ];

    return (
        <section
            id="skills"
            className="bg-slate-900 text-white py-20 px-8"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-cyan-400 mb-12">
                    Skills
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition duration-300"
                        >
                            <h3 className="text-2xl font-bold text-cyan-300 mb-6">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-cyan-900/60 text-white px-4 py-2 rounded-full"
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