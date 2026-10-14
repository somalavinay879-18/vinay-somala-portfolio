
export default function Skills() {
    const categories = [
        {
            title: "Programming & Data Analytics",
            skills: [
                "Python",
                "SQL",
                "Java",
                "JavaScript",
                "Pandas",
                "NumPy",
                "Microsoft Excel",
            ],
        },
        {
            title: "Machine Learning & AI",
            skills: [
                "Machine Learning",
                "Scikit-learn",
                "XGBoost",
                "Random Forest",
                "Statistical Modeling",
                "Feature Engineering",
                "Data Preprocessing",
            ],
        },
        {
            title: "Data Engineering & Visualization",
            skills: [
                "ETL Pipelines",
                "DuckDB",
                "Streamlit",
                "Power BI",
                "Matplotlib",
                "Data Visualization",
                "Dashboard Development",
            ],
        },
        {
            title: "SAP S/4HANA & Procurement",
            skills: [
                "SAP S/4HANA MM",
                "SAP Fiori",
                "SAP GUI",
                "Sourcing & Procurement",
                "Procure-to-Pay (P2P)",
                "Material Master Data",
                "Purchase Order Processing",
                "Goods Receipt",
                "Invoice Verification",
            ],
        },
        {
            title: "Supply Chain & Logistics",
            skills: [
                "Supply Chain Analytics",
                "Demand Forecasting",
                "Inventory Management",
                "Inventory Simulation",
                "Logistics & Transportation",
                "Distribution Networks",
                "AnyLogistix",
            ],
        },
        {
            title: "Databases & Development Tools",
            skills: [
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "SQLite",
                "Flask",
                "Docker",
                "Git & GitHub",
                "VS Code",
                "Jupyter Notebook",
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="bg-slate-900 text-white py-20 px-6"
        >
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-5">
                    Technical Skills
                </h2>

                <p className="text-lg text-gray-300 mb-12 max-w-4xl leading-8">
                    Technical skills developed through academic
                    coursework, practical projects, and SAP S/4HANA
                    training, with a focus on data analytics,
                    machine learning, enterprise systems, and
                    supply chain processes.
                </p>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/20 hover:-translate-y-1 transition duration-300"
                        >

                            {/* Category Title */}
                            <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6">
                                {category.title}
                            </h3>

                            {/* Skill Tags */}
                            <div className="flex flex-wrap gap-3">

                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-slate-900 border border-cyan-500/20 text-cyan-200 px-4 py-2 rounded-lg text-sm md:text-base hover:border-cyan-400 transition duration-300"
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
