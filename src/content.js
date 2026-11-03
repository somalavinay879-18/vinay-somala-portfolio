// All text on the site lives in this file.
// To update the portfolio, edit the values here and commit.

export const profile = {
    name: "Vinay Somala",
    role: "Data analytics for SAP procurement and supply chain",
    intro:
        "M.Sc. student in Applied Data Science & AI at SRH University Hamburg. I build data pipelines, dashboards and forecasts in Python and SQL, and I have hands-on training in SAP S/4HANA MM procurement.",
    seeking:
        "Looking for a working-student role or internship in data analytics, supply chain analytics or SAP MM in Hamburg or remote.",
    location: "Hamburg, Germany",
    email: "vinay.doer@gmail.com",
    linkedin: "https://www.linkedin.com/in/vinaysomala/",
    github: "https://github.com/somalavinay879-18",
    cv: "/VINAY.pdf",
    photo: "/vinay-portrait.jpg",
};

// The two rows of the diagram at the top of the page.
export const processLane = {
    sap: ["Purchase requisition", "Purchase order", "Goods receipt", "Invoice verification"],
    data: ["Extract the records", "Clean and model in SQL", "KPIs and forecasts", "Better purchasing decisions"],
};

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
    links: [
        { label: "Open the live dashboard", href: "https://olist-retail-analytics-m4gmzrukba258sgprrpdke.streamlit.app" },
        { label: "View the code on GitHub", href: "https://github.com/somalavinay879-18/olist-retail-analytics" },
    ],
};

export const projects = [
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
            "Predicts the next 15-minute price direction for five crypto pairs from engineered time-series features, comparing Logistic Regression, Random Forest and XGBoost on a time-based split to avoid leakage.",
        tech: ["Python", "scikit-learn", "XGBoost", "Pandas"],
        href: "https://github.com/somalavinay879-18/crypto-price-prediction-ml",
    },
    {
        title: "CareerTrack",
        kind: "Web application",
        summary:
            "A Flask app for tracking job applications, with SQLite storage, status tracking, dashboard metrics and a Docker setup.",
        tech: ["Python", "Flask", "SQLite", "Docker"],
        href: "https://github.com/somalavinay879-18/CareerTrack",
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
        title: "SAP Joule Studio certification",
        issuer: "SAP",
        date: "Exam planned for December 2026",
        status: "preparing",
    },
    {
        title: "Introducing Joule Studio",
        issuer: "SAP, course completion badge",
        date: "November 2026",
        href: "https://badger.learning.sap.com/verify/xevap-mefem-dukig-vafer-babil",
    },
    {
        title: "SAP MM – Sourcing & Procurement",
        issuer: "ERP4Students, TH Brandenburg",
        date: "2026",
    },
    {
        title: "AWS Academy Graduate – Machine Learning Foundations",
        issuer: "Amazon Web Services, training badge",
        date: "November 2022",
        href: "https://www.credly.com/users/vinay-somala",
    },
    {
        title: "AWS Academy Graduate – Cloud Foundations",
        issuer: "Amazon Web Services, training badge",
        date: "October 2022",
        href: "https://www.credly.com/badges/d627f672-0aaa-4665-b8cc-a2627d978aee",
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

export const skills = [
    { group: "Analysis", items: ["Python", "SQL", "Pandas", "NumPy", "Statistical modelling", "Excel"] },
    { group: "Machine learning", items: ["scikit-learn", "XGBoost", "Feature engineering", "Time-series forecasting", "Model evaluation"] },
    { group: "Data engineering", items: ["ETL pipelines", "DuckDB", "MySQL", "SQLite", "MongoDB", "pytest", "GitHub Actions"] },
    { group: "Dashboards", items: ["Power BI", "Tableau", "Streamlit", "Plotly", "Matplotlib"] },
    { group: "SAP and supply chain", items: ["SAP S/4HANA MM", "SAP Fiori", "SAP GUI", "Procure-to-Pay", "Master data", "Demand forecasting", "AnyLogistix"] },
    { group: "Tools", items: ["Git", "Docker", "Flask", "Jupyter", "VS Code"] },
    { group: "Languages", items: ["English", "German (A2, learning)"] },
];
