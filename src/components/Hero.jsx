import React from "react";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-[#0F172A] flex items-center justify-center pt-24"
        >
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Profile Image */}
                <div className="flex justify-center mb-10">
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30 animate-pulse"></div>

                        <div className="relative w-60 h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-[5px] border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.45)]">
                            <img
                                src="/profile.jpg"
                                alt="Vinay Somala"
                                className="w-full h-full object-cover object-top scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400">
                    Vinay Somala
                </h1>

                {/* Subtitle */}
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
                    Applied Data Science Student
                </h2>

                {/* Skills */}
                <p className="mt-5 text-lg text-slate-300">
                    Python • Machine Learning • SQL • SAP S/4HANA MM
                </p>

                {/* Buttons */}
                <div className="mt-10 flex justify-center gap-5 flex-wrap">
                    {/* Resume Button */}
                    <a
                        href="/VINAY.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-8 py-3 rounded-lg transition duration-300"
                    >
                        Resume
                    </a>

                    {/* GitHub Button */}
                    <a
                        href="https://github.com/somalavinay879-18"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-lg font-semibold transition duration-300"
                    >
                        GitHub
                    </a>

                    {/* LinkedIn Button */}
                    <a
                        href="https://www.linkedin.com/in/vinaysomala/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-lg font-semibold transition duration-300"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;