export default function SAP() {
    const topics = [
        "Enterprise Structure",
        "Material Master",
        "Vendor Master",
        "Procurement Process",
        "Purchase Requisition",
        "Purchase Order",
        "Goods Receipt",
        "Invoice Verification",
        "Inventory Management",
        "Stock Transfer",
    ];

    return (
        <section
            id="sap"
            className="bg-slate-900 text-white py-20 px-8"
        >
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold text-cyan-400 mb-6">
                    SAP S/4HANA Materials Management (SAP MM)
                </h2>

                <p className="text-xl text-gray-300 leading-9 max-w-5xl">
                    Currently pursuing SAP S/4HANA Materials Management (SAP MM)
                    training at Brandenburg University of Applied Sciences,
                    Germany. The training focuses on procurement, inventory
                    management, and end-to-end business processes in SAP S/4HANA.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                    {topics.map((topic) => (
                        <div
                            key={topic}
                            className="bg-slate-800 rounded-xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/30 transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-cyan-400">
                                {topic}
                            </h3>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}