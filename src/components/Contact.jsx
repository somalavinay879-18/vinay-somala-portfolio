
import {
    Mail,
    Linkedin,
    Github,
    Globe,
    MapPin,
    ExternalLink,
} from "lucide-react";

export default function Contact() {
    const contacts = [
        {
            title: "Email",
            detail: "vinay.doer@gmail.com",
            href: "mailto:vinay.doer@gmail.com",
            icon: Mail,
        },
        {
            title: "LinkedIn",
            detail: "linkedin.com/in/vinaysomala",
            href: "https://www.linkedin.com/in/vinaysomala/",
            icon: Linkedin,
        },
        {
            title: "GitHub",
            detail: "github.com/somalavinay879-18",
            href: "https://github.com/somalavinay879-18",
            icon: Github,
        },
        {
            title: "Portfolio",
            detail: "somalavinay.vercel.app",
            href: "https://somalavinay.vercel.app",
            icon: Globe,
        },
    ];

    return (
        <section
            id="contact"
            className="bg-slate-900 text-white py-20 px-6"
        >
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
                        Get in Touch
                    </h2>

                    <p className="text-lg text-gray-300 leading-8 max-w-3xl mx-auto">
                        I am open to Working Student and Internship
                        opportunities in Data Science, Data Analytics,
                        SAP MM, Procurement, and Supply Chain Analytics
                        in Germany.
                    </p>

                    <p className="text-gray-400 mt-5 flex items-center justify-center gap-2">
                        <MapPin
                            size={18}
                            className="text-cyan-400"
                        />
                        Hamburg, Germany
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-6">

                    {contacts.map((contact) => {
                        const Icon = contact.icon;

                        return (
                            <a
                                key={contact.title}
                                href={contact.href}
                                target={
                                    contact.title === "Email"
                                        ? undefined
                                        : "_blank"
                                }
                                rel={
                                    contact.title === "Email"
                                        ? undefined
                                        : "noopener noreferrer"
                                }
                                className="group block bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 transition duration-300"
                            >
                                <div className="flex items-start justify-between mb-5">
                                    <Icon
                                        size={30}
                                        className="text-cyan-400"
                                    />

                                    <ExternalLink
                                        size={18}
                                        className="text-gray-400 group-hover:text-cyan-400 transition"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {contact.title}
                                </h3>

                                <p className="text-gray-300 group-hover:text-cyan-300 text-sm md:text-base break-words transition">
                                    {contact.detail}
                                </p>
                            </a>
                        );
                    })}

                </div>

                {/* Email Call to Action */}
                <div className="text-center mt-12">

                    <p className="text-gray-300 text-lg mb-6">
                        Interested in connecting or discussing an opportunity?
                    </p>

                    <a
                        href="mailto:vinay.doer@gmail.com?subject=Portfolio%20Inquiry"
                        className="inline-flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold px-8 py-4 rounded-xl transition duration-300"
                    >
                        <Mail size={20} />
                        Send Me an Email
                    </a>

                </div>

            </div>
        </section>
    );
}
