
import { GraduationCap, BookOpen, CheckCircle, Clock } from "lucide-react";

export default function Education() {
    const mastersSubjects = [
        "Machine Learning",
        "Artificial Intelligence",
        "Statistical Modeling",
        "Database Systems",
        "Supply Chain Analytics",
        "Demand Forecasting",
    ];

    const bachelorSubjects = [
        "Mathematics",
        "Statistics",
        "Computer Science",
        "Programming",
        "Database Management",
    ];

    return (
        <section
            id="education"
            className="bg-slate-900 text-white py-20 px-6"
        >
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">
                    Education & Professional Training
                </h2>

                {/* Master's Degree */}
                <div className="bg-slate-800 rounded-2xl p-6 md:p-10 shadow-xl shadow-cyan-500/10 mb-10">

                    <div className="flex items-start gap-4 mb-5">
                        <GraduationCap
                            size={38}
                            className="text-cyan-400 shrink-0"
                        />

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                                M.Sc. Applied Data Science & Artificial Intelligence
                            </h3>

                            <p className="text-cyan-400 text-xl font-semibold mt-3">
                                SRH University
                            </p>

                            <p className="text-gray-400 mt-1">
                                Hamburg, Germany
                            </p>
                        </div>
                    </div>

                    <span className="inline-block bg-cyan-900/60 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium">
                        October 2025 – September 2027 (Expected)
                    </span>

                    <p className="text-gray-300 text-lg leading-8 mt-6">
                        Pursuing a Master's degree in Applied Data Science
                        and Artificial Intelligence, with a focus on
                        data-driven problem solving, machine learning,
                        statistical analysis and business analytics.
                    </p>

                    <p className="text-lg mt-5">
                        <span className="text-cyan-400 font-semibold">
                            Specialization:
                        </span>{" "}
                        Supply Chain & Logistics Analytics
                    </p>

                    <h4 className="text-white font-semibold text-lg mt-7 mb-4">
                        Relevant Coursework
                    </h4>

                    <div className="flex flex-wrap gap-3">
                        {mastersSubjects.map((subject) => (
                            <span
                                key={subject}
                                className="bg-slate-900 border border-slate-700 text-gray-200 px-4 py-2 rounded-lg text-sm"
                            >
                                {subject}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Brandenburg University - Professional Training */}
                <div className="bg-slate-800 rounded-2xl p-6 md:p-10 shadow-xl shadow-cyan-500/10 mb-10">

                    <div className="flex items-start gap-4 mb-5">
                        <BookOpen
                            size={38}
                            className="text-cyan-400 shrink-0"
                        />

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold">
                                SAP S/4HANA Materials Management
                            </h3>

                            <p className="text-cyan-400 text-xl font-semibold mt-3">
                                Technische Hochschule Brandenburg
                            </p>

                            <p className="text-gray-400 mt-1">
                                Brandenburg University of Applied Sciences, Germany
                            </p>

                            <p className="text-gray-400 mt-2">
                                ERP4Students | Non-Degree Professional Training
                            </p>
                        </div>
                    </div>

                    {/* Summer SAP Course */}
                    <div className="mt-8 border-l-2 border-cyan-400 pl-5">

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">

                            <div>
                                <h4 className="text-xl font-bold text-white">
                                    SAP MM – Sourcing & Procurement
                                    with SAP S/4HANA
                                </h4>

                                <p className="text-gray-400 mt-2">
                                    Summer Semester 2026
                                </p>
                            </div>

                            <span className="inline-flex items-center gap-2 self-start bg-emerald-900/30 text-emerald-300 border border-emerald-800 px-3 py-2 rounded-lg text-sm">
                                <CheckCircle size={16} />
                                Completed
                            </span>
                        </div>

                        <p className="text-gray-300 leading-7 mt-4">
                            Completed practical case studies in SAP S/4HANA,
                            covering sourcing, procurement, master data
                            management and integrated purchasing processes.
                        </p>

                        <ul className="list-disc list-outside pl-5 mt-4 space-y-2 text-gray-300">
                            <li>
                                Material and vendor master data management
                            </li>
                            <li>
                                Purchase requisitions, RFQs and purchase orders
                            </li>
                            <li>
                                Procure-to-Pay (P2P), goods receipt
                                and invoice verification
                            </li>
                            <li>
                                Practical exercises with SAP Fiori and SAP GUI
                            </li>
                        </ul>

                    </div>

                    {/* Winter SAP Course */}
                    <div className="mt-9 border-l-2 border-cyan-400 pl-5">

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">

                            <div>
                                <h4 className="text-xl font-bold text-white">
                                    SAP MM – Inventory Management
                                    & Invoice Verification
                                </h4>

                                <p className="text-gray-400 mt-2">
                                    Winter Semester 2026/27
                                </p>
                            </div>

                            <span className="inline-flex items-center gap-2 self-start bg-cyan-900/40 text-cyan-300 border border-cyan-800 px-3 py-2 rounded-lg text-sm">
                                <Clock size={16} />
                                In Progress
                            </span>
                        </div>

                        <p className="text-gray-300 leading-7 mt-4">
                            Currently studying inventory management,
                            goods movements, stock transfers and
                            invoice verification processes in SAP S/4HANA.
                        </p>

                    </div>
                </div>

                {/* Bachelor's Degree */}
                <div className="bg-slate-800 rounded-2xl p-6 md:p-10 shadow-xl shadow-cyan-500/10">

                    <div className="flex items-start gap-4 mb-5">
                        <GraduationCap
                            size={38}
                            className="text-cyan-400 shrink-0"
                        />

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                                B.Sc. Mathematics, Statistics & Computer Science
                            </h3>

                            <p className="text-cyan-400 text-xl font-semibold mt-3">
                                Vedavyasa Degree College
                            </p>

                            <p className="text-gray-400 mt-1">
                                Sri Venkateswara University, India
                            </p>
                        </div>
                    </div>

                    <span className="inline-block bg-cyan-900/60 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium">
                        March 2022 – June 2024
                    </span>

                    <p className="text-gray-300 text-lg leading-8 mt-6">
                        Completed undergraduate studies in Mathematics,
                        Statistics and Computer Science, building a
                        foundation in analytical thinking, programming,
                        statistical methods and database systems.
                    </p>

                    <h4 className="text-white font-semibold text-lg mt-7 mb-4">
                        Core Subjects
                    </h4>

                    <div className="flex flex-wrap gap-3">
                        {bachelorSubjects.map((subject) => (
                            <span
                                key={subject}
                                className="bg-slate-900 border border-slate-700 text-gray-200 px-4 py-2 rounded-lg text-sm"
                            >
                                {subject}
                            </span>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
