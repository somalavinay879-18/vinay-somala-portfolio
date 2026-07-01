import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section
            id="education"
            className="bg-slate-900 text-white py-24 px-6"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold text-cyan-400 mb-14">
                    Education
                </h2>

                {/* Master's */}

                <div className="bg-slate-800 rounded-2xl p-10 shadow-xl shadow-cyan-500/20 mb-12">

                    <div className="flex items-center gap-4 mb-4">

                        <GraduationCap size={40} className="text-cyan-400" />

                        <h3 className="text-4xl font-bold">
                            M.Sc. Applied Data Science & Artificial Intelligence
                        </h3>

                    </div>

                    <h4 className="text-2xl text-cyan-400 font-semibold">
                        SRH University, Hamburg, Germany
                    </h4>

                    <div className="inline-block mt-5 bg-cyan-900 text-cyan-300 px-5 py-2 rounded-full">
                        Oct 2025 – Sep 2027
                    </div>

                    <p className="mt-8 text-lg leading-8 text-gray-300">
                        Currently pursuing a Master's degree focused on Artificial Intelligence,
                        Machine Learning, Statistical Modeling, Data Analytics,
                        Database Systems, and Supply Chain & Logistics Analytics.
                    </p>

                    <p className="mt-6 text-xl">
                        <span className="text-cyan-400 font-bold">
                            Specialization:
                        </span>{" "}
                        Supply Chain & Logistics Analytics
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">

                        {[
                            "Machine Learning",
                            "Artificial Intelligence",
                            "Statistical Modeling",
                            "Database Systems",
                            "Internship",
                        ].map((item) => (
                            <span
                                key={item}
                                className="bg-cyan-900 text-white px-6 py-3 rounded-full"
                            >
                                {item}
                            </span>
                        ))}

                    </div>

                </div>

                {/* Bachelor's */}

                <div className="bg-slate-800 rounded-2xl p-10 shadow-xl">

                    <div className="flex items-center gap-4 mb-4">

                        <GraduationCap size={40} className="text-cyan-400" />

                        <h3 className="text-4xl font-bold">
                            B.Sc. Computer Science
                        </h3>

                    </div>

                    <h4 className="text-2xl text-cyan-400 font-semibold">
                        Vedavyasa Degree College, Kalyanapuram, India
                    </h4>

                    <div className="inline-block mt-5 bg-cyan-900 text-cyan-300 px-5 py-2 rounded-full">
                        Mar 2022 – Jun 2024
                    </div>

                    <p className="mt-8 text-lg leading-8 text-gray-300">
                        Completed a Bachelor's degree in Computer Science with a strong
                        foundation in Programming, Data Structures, Algorithms,
                        Database Management Systems, and Software Development through
                        academic coursework and practical projects.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">

                        {[
                            "Programming",
                            "Data Structures",
                            "Algorithms",
                            "DBMS",
                            "Software Development",
                        ].map((item) => (
                            <span
                                key={item}
                                className="bg-cyan-900 text-white px-6 py-3 rounded-full"
                            >
                                {item}
                            </span>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}