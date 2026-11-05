// All text on the site lives in this file.
// To update the portfolio, edit the values here and commit.

export const profile = {
    name: "Vinay Somala",
    role: "Data science and SAP supply chain analytics",
    intro:
        "M.Sc. student in Applied Data Science & AI at SRH University Hamburg. I build machine-learning models, data pipelines and dashboards in Python and SQL, and I understand the business processes behind the data through hands-on SAP S/4HANA MM training.",
    seeking:
        "Looking for a working-student role or internship in data science, data analytics, supply chain analytics or SAP MM, in Hamburg or remote.",
    location: "Hamburg, Germany",
    email: "vinay.doer@gmail.com",
    linkedin: "https://www.linkedin.com/in/vinaysomala/",
    github: "https://github.com/somalavinay879-18",
           cv: "/Vinay_Somala.pdf",
       cvs: [{ label: "Download CV", href: "/Vinay_Somala.pdf" }],
    photo: "/vinay-portrait.jpg",
};

// Quick facts in the panel next to the introduction.
export const facts = [
    { label: "Studying", value: "M.Sc. Applied Data Science & AI, SRH University Hamburg" },
    { label: "Graduating", value: "September 2027" },
    { label: "Open to", value: "Working student and internship roles" },
    { label: "Languages", value: "English (professional), German (A2), Telugu, Hindi" },
    { label: "Code", value: "github.com/somalavinay879-18", href: "https://github.com/somalavinay879-18" },
];

// The two sides of the profile, shown under the introduction.
export const sides = [
    {
        name: "Data science & AI",
        text: "Machine learning, LLM applications, forecasting and data engineering on real datasets, from raw files to a tested pipeline and a live dashboard.",
        points: ["Python, SQL, Pandas", "LLMs and RAG: hybrid search, reranking, cited answers",
                 "scikit-learn, XGBoost, time-series forecasting", "ETL pipelines in DuckDB, tested in CI", "Power BI, Tableau, Streamlit"],
        link: { label: "See the data science projects", href: "#projects" },
    },
    {
        name: "SAP & supply chain",
        text: "Hands-on SAP S/4HANA MM training covering the full Procure-to-Pay process, plus supply chain analytics from my Master’s specialisation.",
        points: ["SAP S/4HANA MM in SAP Fiori and SAP GUI", "Procure-to-Pay, master data, purchase orders", "Demand forecasting, safety stock, reorder points", "Supply chain simulation in AnyLogistix"],
        link: { label: "See the SAP training", href: "#sap" },
    },
];

export const featured = {
    title: "Olist Retail Analytics",
    subtitle: "Sales and delivery performance of a real e-commerce marketplace",
    summary:
        "An end-to-end pipeline on 99,441 Brazilian e-commerce orders (2016–2018). Raw CSV files are loaded into DuckDB, cleaned, modelled as a star schema, checked by 20 automated data quality tests and turned into sales, delivery and demand KPIs.",
    findings: [
        { value: "2.27 vs 4.29", label: "average review score of late vs on-time orders" },
        { value: "19.0%", label: "late-delivery rate in March 2018, against 3–6% in most months" },
        { value: "12.1% vs 4.5%", label: "late rate in Rio de Janeiro vs São Paulo" },
    ],
    forecast:
        "A weekly demand forecast for the 10 largest product categories compares gradient boosting with two simple baselines, then turns the forecast error into safety stock and a reorder point per category. The simple “same as last week” baseline won (22.6% WAPE), so the reorder points use it.",
    tech: ["Python", "SQL", "DuckDB", "scikit-learn", "Streamlit", "pytest", "GitHub Actions"],
    // The pipeline, in order, shown as a flow on the project card.
    pipeline: [
        { step: "Raw CSV files", detail: "8 tables, loaded as text" },
        { step: "Staging", detail: "Types, trimming, names" },
        { step: "Star schema", detail: "2 facts, 4 dimensions" },
        { step: "Quality checks", detail: "15 errors, 5 warnings" },
        { step: "KPI views", detail: "Monthly, category, region, seller" },
        { step: "Dashboard", detail: "Streamlit, live online" },
    ],
    // The case study that opens under the card.
    caseStudy: [
        {
            heading: "The question",
            text: "Which product categories and regions drive revenue, how reliable is delivery, and does late delivery hurt customer reviews?",
        },
        {
            heading: "How I built it",
            text: "Each CSV becomes a raw table, then SQL staging adds types and consistent names. A star schema with one row per order and one row per order item feeds the KPI views. Every KPI has a written definition, for example a late order is one delivered on a later calendar day than the estimated date.",
        },
        {
            heading: "How I made sure the numbers are right",
            text: "Twenty checks run on every build. Errors such as duplicate keys, orphan foreign keys, impossible dates or revenue that doesn’t reconcile stop the run. Automated tests run the whole pipeline on a small synthetic dataset with hand-calculated expected values, in GitHub Actions on every push.",
        },
        {
            heading: "What I found",
            text: "6.8% of 96,470 delivered orders arrived late, and late orders score 2.27 on average against 4.29 for on-time ones. February and March 2018 were the worst months, with late rates of 14.1% and 19.0%. Rio de Janeiro has the second-most orders but nearly three times São Paulo’s late rate.",
        },
        {
            heading: "From forecast to stock levels",
            text: "For the 10 largest categories I forecast weekly units one week ahead and tested on the last 12 weeks. Gradient boosting did not beat the simple “same as last week” baseline with 65 weeks of history, so I used the baseline’s error to calculate safety stock and a reorder point per category, assuming a 2-week lead time and a 95% service level.",
        },
        {
            heading: "What I would do next",
            text: "Add promotion and holiday effects to the forecast, and try hierarchical or probabilistic forecasts once more history is available.",
        },
    ],
    // Monthly KPIs from the pipeline output (Jan 2017 – Aug 2018, months with full data).
    monthly: [
        { month: "2017-01", orders: 787, lateRate: 2.9, review: 4.09 },
        { month: "2017-02", orders: 1718, lateRate: 3.0, review: 4.1 },
        { month: "2017-03", orders: 2617, lateRate: 4.6, review: 4.13 },
        { month: "2017-04", orders: 2377, lateRate: 6.6, review: 4.07 },
        { month: "2017-05", orders: 3640, lateRate: 3.0, review: 4.18 },
        { month: "2017-06", orders: 3205, lateRate: 3.0, review: 4.18 },
        { month: "2017-07", orders: 3946, lateRate: 2.8, review: 4.23 },
        { month: "2017-08", orders: 4272, lateRate: 2.9, review: 4.27 },
        { month: "2017-09", orders: 4227, lateRate: 4.4, review: 4.22 },
        { month: "2017-10", orders: 4547, lateRate: 4.2, review: 4.17 },
        { month: "2017-11", orders: 7423, lateRate: 12.4, review: 3.95 },
        { month: "2017-12", orders: 5620, lateRate: 7.5, review: 4.04 },
        { month: "2018-01", orders: 7187, lateRate: 5.7, review: 4.07 },
        { month: "2018-02", orders: 6625, lateRate: 14.1, review: 3.86 },
        { month: "2018-03", orders: 7168, lateRate: 19.0, review: 3.76 },
        { month: "2018-04", orders: 6919, lateRate: 4.5, review: 4.17 },
        { month: "2018-05", orders: 6833, lateRate: 6.6, review: 4.21 },
        { month: "2018-06", orders: 6145, lateRate: 1.2, review: 4.29 },
        { month: "2018-07", orders: 6233, lateRate: 3.4, review: 4.29 },
        { month: "2018-08", orders: 6421, lateRate: 6.2, review: 4.29 },
    ],
    // Inventory policy for the five largest categories (units per week, 2-week lead time, 95% service level).
    inventory: [
        { category: "health beauty", weekly: 188, safety: 105, reorder: 482 },
        { category: "bed bath table", weekly: 161, safety: 106, reorder: 427 },
        { category: "housewares", weekly: 133, safety: 84, reorder: 351 },
        { category: "watches gifts", weekly: 113, safety: 67, reorder: 293 },
        { category: "sports leisure", weekly: 102, safety: 63, reorder: 267 },
    ],
    links: [
        { label: "Open the live dashboard", href: "https://olist-retail-analytics-m4gmzrukba258sgprrpdke.streamlit.app" },
        { label: "View the code on GitHub", href: "https://github.com/somalavinay879-18/olist-retail-analytics" },
    ],
};

export const projects = [
    {
        title: "LexiSyncAI: Evidence-Grounded Legal Q&A",
        kind: "LLM & RAG",
        summary:
            "Answers questions about legal PDFs (GDPR, ePrivacy) with a local LLM. Hybrid BM25 + embedding search with a cross-encoder reranker finds the right paragraph, every claim is checked against its quote, and the cited page is shown highlighted. On 22 test questions it raised correctness from 56% to 78% over the LLM alone and refused all unanswerable questions, which the LLM alone answered with invented facts.",
        tech: ["Python", "RAG", "Ollama (Qwen 2.5)", "sentence-transformers", "BM25", "Streamlit", "pytest", "GitHub Actions"],
        href: "https://github.com/somalavinay879-18/lexisync-ai",
    },
    {
        title: "Supermarket Sales Data Pipeline",
        kind: "Data engineering",
        summary:
            "Combines 1,000 sales transactions with product costs, calculates revenue and profit in DuckDB and shows the KPIs in a Streamlit dashboard.",
        tech: ["Python", "SQL", "DuckDB", "Pandas", "Streamlit"],
        href: "https://github.com/somalavinay879-18/supermarket-data-pipeline",
    },
    {
        title: "Demand Forecasting & Inventory Simulation",
        kind: "University project",
        summary:
            "Modelled an end-to-end supply chain in AnyLogistix with customers, factories, distribution centres and demand, and compared inventory and distribution scenarios.",
        tech: ["AnyLogistix", "Supply chain analytics"],
    },
    {
        title: "Cryptocurrency Price Direction Prediction",
        kind: "Machine learning",
        summary:
            "Predicts the next 15-minute price direction for five crypto pairs from 851,505 candles. On a strict time-based split, Random Forest and XGBoost reach 52.5% accuracy against 50.2% for a majority-class baseline. Refactored from a notebook into a tested Python package, with 12 tests that check for look-ahead leakage.",
        tech: ["Python", "scikit-learn", "XGBoost", "pandas", "pytest", "GitHub Actions"],
        href: "https://github.com/somalavinay879-18/crypto-price-prediction-ml",
    },
    {
        title: "ODI Cricket Analytics Dashboard",
        kind: "Data visualisation",
        summary:
            "An interactive dashboard for exploring and comparing ODI cricket statistics, with the data stored in MongoDB Atlas.",
        tech: ["Python", "MongoDB Atlas", "Streamlit", "Plotly"],
    },
    {
        title: "CareerTrack",
        kind: "Web application",
        summary:
            "A Flask app for tracking job applications with search, status tracking, CSV import and export and an analytics page. Covered by 22 automated tests, continuous integration and a Docker setup.",
        tech: ["Python", "Flask", "SQLite", "pytest", "Docker"],
        href: "https://github.com/somalavinay879-18/CareerTrack",
    },
];

export const sapNext = {
    program: "SAP MM – Inventory Management & Invoice Verification",
    provider: "ERP4Students, Technische Hochschule Brandenburg",
    when: "Winter semester 2026/27, in progress",
};

export const experience = [
    {
        role: "Full Stack Engineer Intern",
        company: "Karthikeyan Software Solutions Pvt. Ltd., India",
        dates: "Jan 2023 – Jul 2023",
        points: [
            "Built responsive web components with HTML, CSS, JavaScript and PHP.",
            "Worked with MySQL data storage and retrieval.",
            "Supported debugging, testing and Git-based code changes.",
        ],
    },
];

export const sap = {
    program: "SAP MM – Sourcing & Procurement with SAP S/4HANA",
    provider: "ERP4Students, Technische Hochschule Brandenburg",
    when: "Summer semester 2026, completed",
    summary:
        "Hands-on case studies in a live SAP S/4HANA system, covering the full Procure-to-Pay process in SAP Fiori and SAP GUI.",
    topics: [
        "Enterprise structure",
        "Material and vendor master data",
        "Purchase requisitions",
        "RFQs and quotations",
        "Purchase orders",
        "Goods receipt",
        "Invoice verification",
    ],
};

export const credentials = [
    {
        provider: "SAP",
        items: [
            {
                title: "SAP Joule Studio certification",
                kind: "Official SAP certification",
                date: "Exam planned for December 2026",
                status: "preparing",
            },
            {
                title: "Introducing Joule Studio",
                kind: "Course completion badge, SAP Learning",
                date: "November 2026",
                href: "https://badger.learning.sap.com/verify/xevap-mefem-dukig-vafer-babil",
            },
            {
                title: "SAP MM – Sourcing & Procurement with SAP S/4HANA",
                kind: "ERP4Students, Technische Hochschule Brandenburg",
                date: "Summer semester 2026",
            },
        ],
    },
    {
        provider: "Amazon Web Services (AWS)",
        items: [
            {
                title: "AWS Academy Graduate – Machine Learning Foundations",
                kind: "Training badge, AWS Academy",
                date: "November 2022",
                href: "https://www.credly.com/users/vinay-somala",
            },
            {
                title: "AWS Academy Graduate – Cloud Foundations",
                kind: "Training badge, AWS Academy",
                date: "October 2022",
                href: "https://www.credly.com/badges/d627f672-0aaa-4665-b8cc-a2627d978aee",
            },
        ],
    },
    {
        provider: "DataCamp",
        items: [
            { title: "Data Analyst with Python", kind: "Career track", date: "Completed" },
            { title: "SQL Certification track", kind: "Skill track", date: "Completed" },
        ],
    },
];

export const education = [
    {
        degree: "M.Sc. Applied Data Science & Artificial Intelligence",
        school: "SRH University, Hamburg",
        dates: "Oct 2025 – Sep 2027 (expected)",
        detail: "Specialisation in Supply Chain Analytics. Machine learning, statistical modelling, databases, demand forecasting and inventory management.",
    },
    {
        degree: "B.Sc. Mathematics, Statistics & Computer Science",
        school: "Vedavyasa Degree College, Sri Venkateswara University, India",
        dates: "2021 – 2024",
        detail: "Mathematics, statistics, programming and database systems.",
    },
];

export const skills = {
    "Data science & AI": [
        { group: "Analysis", items: ["Python", "SQL", "Pandas", "NumPy", "Statistical modelling", "Excel"] },
        { group: "Machine learning", items: ["scikit-learn", "XGBoost", "Feature engineering", "Time-series forecasting", "Model evaluation"] },
        { group: "Data engineering", items: ["ETL pipelines", "DuckDB", "MySQL", "SQLite", "MongoDB", "pytest", "GitHub Actions"] },
        { group: "Dashboards", items: ["Power BI", "Tableau", "Streamlit", "Plotly", "Matplotlib"] },
        { group: "Tools", items: ["Git", "GitHub", "Docker", "Flask", "Jupyter", "VS Code"] },
    ],
    "SAP & supply chain": [
        { group: "SAP S/4HANA MM", items: ["SAP Fiori", "SAP GUI", "Enterprise structure", "Material and vendor master data"] },
        { group: "Procurement", items: ["Procure-to-Pay", "Purchase requisitions", "RFQs", "Purchase orders", "Goods receipt", "Invoice verification"] },
        { group: "Supply chain", items: ["Demand forecasting", "Safety stock and reorder points", "AnyLogistix"] },
    ],
};
