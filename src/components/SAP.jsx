
export default function SAP() {
    const procurementTopics = [
        "SAP S/4HANA MM",
        "SAP Fiori & SAP GUI",
        "Enterprise Structure",
        "Material Master Data",
        "Vendor Master Data",
        "Sourcing & Procurement",
        "Purchase Requisition",
        "RFQ & Quotation Processing",
        "Purchase Order Processing",
        "Goods Receipt",
        "Invoice Verification",
        "Procure-to-Pay (P2P)",
    ];

    const inventoryTopics = [
        "Inventory Management",
        "Stock Transfer",
        "Goods Movements",
        "Invoice Verification",
    ];

    return (
        <section
            id="sap"
            className="bg-slate-900 text-white py-20 px-6 md:px-8"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
                    SAP S/4HANA Materials Management
                </h2>

                {/* Professional Introduction */}
                <p className="text-lg text-gray-300 leading-8 max-w-5xl mb-12">
                    My SAP S/4HANA learning focuses on materials
                    management, sourcing, procurement and inventory
                    processes. Through the ERP4Students program at
                    Technische Hochschule Brandenburg (Brandenburg
                    University of Applied Sciences), Germany, I have
                    completed practical training in SAP MM Sourcing
                    & Procurement and am continuing my learning in
                    Inventory Management & Invoice Verification.
                </p>

                {/* University Information */}
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-7 mb-10">
                    <p className="text-sm uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                        Professional SAP Training
                    </p>

                    <h3 className="text-2xl font-bold text-white mb-2">
                        Technische Hochschule Brandenburg
                    </h3>

                    <p className="text-gray-300">
                        Brandenburg University of Applied Sciences,
                        Germany
                    </p>

                    <p className="text-gray-400 mt-2">
                        ERP4Students | SAP S/4HANA Practical Training
                    </p>
                </div>

                {/* Summer Semester Course */}
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-7 mb-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">

                        <div>
                            <p className="text-cyan-400 text-sm font-semibold mb-2">
                                Summer Semester 2026
                            </p>

                            <h3 className="text-2xl font-bold text-white">
                                SAP MM – Sourcing & Procurement
                                with SAP S/4HANA
                            </h3>
                        </div>

                        <span className="self-start bg-emerald-900/40 text-emerald-300 border border-emerald-700 px-4 py-2 rounded-lg text-sm font-semibold">
                            Completed
                        </span>
                    </div>

                    <p className="text-gray-300 leading-7 mb-6">
                        Completed hands-on SAP S/4HANA case studies
                        covering procurement processes, material and
                        vendor master data, and end-to-end
                        Procure-to-Pay (P2P) workflows.
                    </p>

                    <h4 className="text-xl font-semibold text-cyan-400 mb-5">
                        Key Learning Areas
                    </h4>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {procurementTopics.map((topic) => (
                            <div
                                key={topic}
                                className="bg-slate-900 border border-slate-700 rounded-lg p-4 hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
                            >
                                <p className="text-gray-200 font-medium">
                                    {topic}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Winter Semester Course */}
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-7">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">

                        <div>
                            <p className="text-cyan-400 text-sm font-semibold mb-2">
                                Winter Semester 2026/27
                            </p>

                            <h3 className="text-2xl font-bold text-white">
                                SAP MM – Inventory Management
                                & Invoice Verification
                            </h3>
                        </div>

                        <span className="self-start bg-cyan-900/40 text-cyan-300 border border-cyan-700 px-4 py-2 rounded-lg text-sm font-semibold">
                            In Progress
                        </span>
                    </div>

                    <p className="text-gray-300 leading-7 mb-6">
                        Currently expanding my knowledge of
                        inventory management, stock movements,
                        stock transfers and invoice verification
                        within SAP S/4HANA.
                    </p>

                    <h4 className="text-xl font-semibold text-cyan-400 mb-5">
                        Current Learning Focus
                    </h4>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {inventoryTopics.map((topic) => (
                            <div
                                key={topic}
                                className="bg-slate-900 border border-slate-700 rounded-lg p-4 hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
                            >
                                <p className="text-gray-200 font-medium">
                                    {topic}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SAP & Analytics Connection */}
                <div className="mt-12 border-t border-slate-700 pt-8">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                        SAP & Supply Chain Analytics
                    </h3>

                    <p className="text-gray-300 text-lg leading-8 max-w-5xl">
                        Alongside SAP MM training, I am pursuing
                        an M.Sc. in Applied Data Science & Artificial
                        Intelligence at SRH University, Hamburg,
                        with a focus on Supply Chain Analytics.
                        I am developing complementary skills in
                        Python, SQL, data analysis, demand forecasting
                        and inventory simulation.
                    </p>
                </div>

            </div>
        </section>
    );
}
