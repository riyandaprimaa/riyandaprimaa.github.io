export const personal = {
  name: "Riyanda Prima Anugerah",
  roles: ["AI Engineer", "Data Engineer", "ML Practitioner"],
  tagline: "Building intelligent systems from data pipelines to production AI",
  email: "riyandaprimaa@gmail.com",
  linkedin: "https://www.linkedin.com/in/riyanda-prima-anugerah-841167257",
  github: "https://github.com/riyandaprimaa",
  location: "East Java, Indonesia",
  summary:
    "AI & Data Engineering professional with hands-on experience across the full AI stack — from building production-grade ETL pipelines and data lakehouses to training machine learning models and developing LLM/RAG-powered applications. Experienced in developing ingestion & transformation pipelines and maintaining production ML systems.",
};

export const stats = [
  { value: "1+", label: "Year in AI & Data" },
  { value: "5+", label: "Production Projects" },
  { value: "🌍", label: "International Exposure" },
  { value: "5+", label: "Companies Collaborated" },
];

export const skills = [
  {
    category: "AI / ML",
    icon: "Brain",
    tags: [
      "LLMs", "RAG", "LangChain", "PyTorch", "TensorFlow",
      "Scikit-Learn", "LightGBM", "YOLOv8", "YOLOv11", "DETR",
      "Transformers", "OpenCV", "DeepSeek-VL", "PyCaret",
    ],
  },
  {
    category: "Data Engineering",
    icon: "Database",
    tags: [
      "Python", "SQL", "Apache Spark", "Prefect", "Airbyte",
      "Hadoop", "S3 / MinIO", "Lakekeeper", "DataHub", "Seeknal", "DuckDB",
    ],
  },
  {
    category: "Dev & MLOps",
    icon: "Code2",
    tags: [
      "Docker", "FastAPI", "Git", "PostgreSQL", "n8n", "Streamlit",
    ],
  },
  {
    category: "Visualization",
    icon: "BarChart3",
    tags: ["Power BI", "Tableau", "Looker Studio", "Streamlit"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Organic Waste Detection & RAG Chatbot",
    year: "2024",
    description:
      "A Streamlit web app combining YOLOv8/YOLOv11 object detection with a LangChain-powered RAG chatbot. Users upload images of organic waste → detected with bounding boxes → chatbot provides actionable waste management and recycling recommendations.",
    longDescription:
      "Built as a research initiative at Asia AI Institute (Musashino University, Japan), this application addresses urban organic waste classification. The vision model was trained on a custom 4,000-image dataset using YOLOv8, YOLOv11, and DETR architectures. Upon detecting waste items, the output feeds into a Retrieval-Augmented Generation (RAG) system built with LangChain and OpenAI, serving tailored disposal and compost guidelines.",
    highlights: [
      "Curated and annotated a 4,000-image dataset with Mixup & mosaic data augmentation.",
      "Fine-tuned YOLOv8, YOLOv11, and DETR models achieving solid mAP scores.",
      "Integrated LangChain RAG pipeline with Streamlit for interactive real-time visual chat.",
    ],
    tags: ["YOLOv8", "YOLOv11", "DETR", "LangChain", "OpenAI", "Streamlit", "Python"],
    images: [
      { src: "/images/projects/waste_detection.png", alt: "Waste detection bounding box output" },
      { src: "/images/projects/waste_chatbot.png", alt: "RAG chatbot response" },
      { src: "/images/projects/waste_upload.png", alt: "Upload interface page" },
      { src: "/images/projects/waste_chatbot_page.png", alt: "Full chatbot conversation UI" },
    ],
    github: "https://github.com/riyandaprimaa/organic_waste_detection",
    demoUrl: null,
    confidential: false,
  },
  {
    id: 2,
    title: "n8n LLM Automation — Invoice & Social Media",
    year: "2025",
    description:
      "Two production n8n automation workflows: (1) Invoice extraction pipeline — Google Drive trigger → PDF parsing → AI Agent (OpenAI) → structured data to Google Sheets; (2) Automated social media content generation with LLM Chain → image generation API → Telegram bot with human-in-the-loop approve/decline flow. Reduced manual workload by 70%.",
    longDescription:
      "Engineered automated workflow infrastructure using Dockerized n8n and LLM agents at PT. Ada Ide Indonesia. The invoice pipeline extracts un-structured PDF data, runs validation via OpenAI function calling, and populates enterprise accounting sheets. The social media pipeline automates content drafting, visual asset synthesis via API, and posts interactive Telegram approval messages to content leads.",
    highlights: [
      "Slashed manual document processing time by 70% with automatic PDF ingestion & AI extraction.",
      "Created human-in-the-loop Telegram bot flow for social media post approval.",
      "Self-hosted Dockerized n8n environment with persistent SQLite database and binary storage.",
    ],
    tags: ["n8n", "OpenAI", "LLM Chain", "Google Drive API", "Telegram Bot", "Docker", "JavaScript"],
    images: [
      { src: "/images/projects/n8n_invoice.png", alt: "Invoice extraction workflow in n8n" },
      { src: "/images/projects/n8n_socialmedia.png", alt: "Social media automation workflow" },
      { src: "/images/projects/n8n_telegram.jpeg", alt: "Telegram bot output with approve/decline" },
    ],
    github: null,
    demoUrl: null,
    confidential: false,
  },
  {
    id: 3,
    title: "VLM-Based ID Card (KTP) Extraction",
    year: "2025",
    description:
      "End-to-end Vision-Language Model OCR pipeline for Indonesian national ID card (KTP) data extraction. Uses DeepSeek-OCR with BFloat16 precision on GPU, replacing legacy YOLOv8 detection. Includes OpenCV image preprocessing, custom regex parsers with contextual look-ahead logic, and a deployed FastAPI REST API with Docker + PostgreSQL.",
    longDescription:
      "Developed at PT. Ada Ide Indonesia to revolutionize KTP document verification. Rather than relying on traditional bounding-box detection (YOLOv8 + Tesseract), this pipeline leverages DeepSeek-OCR (Vision-Language Model) for direct zero-shot structured text understanding. Combined with OpenCV contrast enhancement and custom regex contextual parsers, it outputs high-precision JSON payload served via FastAPI.",
    highlights: [
      "Replaced legacy YOLOv8 + OCR with BFloat16 GPU-accelerated DeepSeek Vision-Language Model.",
      "Created robust regex & fuzzy matching parsers for NIK, Nama, Tanggal Lahir, and Alamat fields.",
      "Packaged end-to-end service with FastAPI REST endpoints, Docker containerization, and PostgreSQL storage.",
    ],
    tags: ["DeepSeek-OCR", "PyTorch", "Transformers", "OpenCV", "FastAPI", "Docker", "PostgreSQL"],
    images: [
      { src: "/images/projects/ktp_result.png", alt: "KTP input and JSON extraction result" },
      { src: "/images/projects/ktp_sample.png", alt: "Sample OCR output comparison" },
    ],
    github: "https://github.com/riyandaprimaa/KTP_extraction",
    demoUrl: null,
    confidential: false,
  },
  {
    id: 4,
    title: "Stunting Analysis Dashboard",
    year: "2023",
    description:
      "Interactive data analytics dashboard for stunting and child nutrition analysis across Wates district villages. Built with Streamlit & Looker Studio, featuring KPI metrics (4,500+ toddlers tracked), donut charts, bar charts, and heatmaps. Supports dynamic filtering by year, village, and Posyandu.",
    longDescription:
      "Developed as part of a community health data analytics initiative in Wates District, Blitar Regency. Analyzed multi-village toddler growth data (POSYANDU records), sanitation data (SAB Komunal), and healthcare center metrics to provide regional health authorities with actionable insight into stunting prevalence and nutritional deficiencies.",
    highlights: [
      "Tracked and visualized growth metrics for 4,500+ toddlers across 8 villages in Wates District.",
      "Integrated regional health data (Posyandu, Puskesmas, Water & Sanitation access).",
      "Published interactive Looker Studio dashboard for public health decision makers.",
    ],
    tags: ["Streamlit", "Looker Studio", "Python", "Pandas", "Plost", "Data Visualization"],
    images: [
      { src: "/images/projects/stunting_page1.png", alt: "Dashboard KPIs and statistical charts" },
      { src: "/images/projects/stunting_page2.png", alt: "Nutrition analysis charts" },
      { src: "/images/projects/stunting_page3.png", alt: "Village health breakdown" },
      { src: "/images/projects/stunting_page4.png", alt: "Healthcare center Posyandu metrics" },
    ],
    github: "https://github.com/riyandaprimaa/Rice_Plant_Analysis_Dashboard",
    demoUrl: "https://lookerstudio.google.com/reporting/1dc11261-60ae-47c8-bf3a-ff4f82fb6433",
    confidential: false,
  },
  {
    id: 5,
    title: "Data Management Platform & AI Churn Maintenance (MTA)",
    year: "2026",
    description:
      "Contributed as Data Engineer & AI Engineer on two ongoing enterprise initiatives at PT. MTA: (1) Data Management Platform (DMP) — Developed data ingestion and transformation pipelines within an existing Apache Iceberg, MinIO S3, and Seeknal/DuckDB Lakehouse architecture; (2) AI Churn Prediction — Retrained prediction models (LightGBM/XGBoost, 95% recall) and maintained pipeline data ingestion from Source DBs and PRTG network usage telemetry.",
    longDescription:
      "Joined an ongoing enterprise data engineering project at PT. MTA to implement pipeline modules and maintain machine learning services following the team's established architecture. In the Data Management Platform (DMP), focused on developing automated data ingestion (Airbyte) and Medallion (Bronze → Silver → Gold) data transformation scripts (Seeknal/DuckDB). In the AI Churn Prediction system, maintained data flow pipelines from operational Source DBs and PRTG network metrics, and retrained the churn classification models.",
    highlights: [
      "Developed and optimized batch ingestion and transformation pipelines following the established Medallion Architecture on MinIO S3 and Apache Iceberg.",
      "Leveraged Seeknal (DuckDB) in-process SIMD transformation scripts, helping process batch data under established 2-hour execution windows.",
      "Retrained AI Churn Prediction models (LightGBM/XGBoost) achieving 95% recall on customer retention datasets.",
      "Maintained data ingestion pipelines from operational Source DBs and PRTG monitoring sensors to support production inference APIs.",
    ],
    tags: [
      "Airbyte", "Seeknal", "DuckDB", "Apache Iceberg", "MinIO S3",
      "Prefect", "StarRocks", "LightGBM", "XGBoost", "Python",
    ],
    images: [],
    github: null,
    demoUrl: null,
    confidential: true,
    pipelines: [
      {
        name: "1. Data Management Platform (Ingestion & Transformation Pipeline)",
        desc: "Developing ingestion and transformation modules following established Medallion Architecture",
        steps: [
          { step: "Source DBs", desc: "Operational data sources" },
          { step: "Airbyte EL", desc: "Ingestion to MinIO Bronze" },
          { step: "Seeknal + DuckDB", desc: "In-memory Medallion transforms" },
          { step: "Apache Iceberg", desc: "S3 Table format (Lakekeeper)" },
          { step: "StarRocks + CubeJS", desc: "OLAP & Semantic Layer" },
          { step: "Prefect", desc: "Pipeline Orchestration" },
        ],
      },
      {
        name: "2. AI Churn Prediction System (Model Retraining & Pipeline Maintenance)",
        desc: "Retraining churn models and maintaining ingestion from Source DBs & PRTG sensors",
        steps: [
          { step: "Source DBs", desc: "Raw customer tables" },
          { step: "PRTG Monitoring API", desc: "Network traffic & sensor calls" },
          { step: "Feature Pipelines", desc: "Maintained 108 engineered features" },
          { step: "Model Retraining", desc: "LightGBM / XGBoost tuning (95% recall)" },
          { step: "FastAPI REST", desc: "Inference API maintenance" },
        ],
      },
    ],
  },
];

export const experience = [
  {
    period: "Mar 2026 – Present",
    role: "AI Engineer & Data Engineer",
    company: "PT. MTA (Technology Startup)",
    location: "East Java, Indonesia",
    bullets: [
      "Contributed to an ongoing Data Management Platform project, developing data ingestion (Airbyte) and transformation (Seeknal/DuckDB) pipelines on an Apache Iceberg & MinIO S3 Lakehouse.",
      "Retrained AI Churn Prediction models (LightGBM, 95% recall) and maintained feature engineering pipelines across customer account profiles and PRTG network usage metrics.",
      "Maintained production ETL execution and data quality assertions orchestrated via Prefect.",
    ],
    images: [],
  },
  {
    period: "Dec 2025 – Feb 2026",
    role: "AI Engineer Intern",
    company: "PT. Ada Ide Indonesia",
    location: "Bandung, Indonesia",
    bullets: [
      "Engineered automated invoice processing and social-media workflows using Dockerized n8n and LLM Agents, reducing manual workload by 70%.",
      "Developed an end-to-end Vision-Language Model OCR pipeline for Indonesian ID card (KTP) extraction using DeepSeek-OCR, PyTorch, and Transformers.",
      "Deployed REST API with FastAPI & Docker, integrated with PostgreSQL for real-time customer data verification.",
    ],
    images: [],
  },
  {
    period: "Nov 2023 – Jun 2025",
    role: "Research Assistant — AI & Computer Vision",
    company: "Asia AI Institute, Musashino University",
    location: "Japan (Remote)",
    bullets: [
      "Built a web platform for organic food-waste detection integrated with a RAG chatbot using LangChain, OpenAI, Streamlit, and TensorFlow.",
      "Curated a 4,000-image dataset and fine-tuned YOLOv8, YOLOv11, and DETR models with Mixup data augmentation.",
      "Presented research findings to an international academic audience.",
    ],
    images: [
      { src: "/images/experience/research1.jpeg", alt: "Research presentation & certificate" },
      { src: "/images/experience/research2.jpeg", alt: "Asia AI Institute research team" },
      { src: "/images/experience/research3.jpeg", alt: "Research award ceremony" },
      { src: "/images/experience/research4.jpeg", alt: "Research Assistant diploma" },
    ],
  },
  {
    period: "Feb 2024 – Jun 2024",
    role: "Data Science Intern",
    company: "PT. United Tractors Tbk",
    location: "Jakarta, Indonesia",
    bullets: [
      "Collaborated on feature engineering for oil & fuel efficiency analysis on heavy equipment, producing operational analytics dashboards.",
      "Built modular data pipelines using Python Kedro and converted ETL logic from Python to R.",
    ],
    images: [
      { src: "/images/experience/united_tractors.jpeg", alt: "Internship at United Tractors" },
    ],
  },
];

export const education = [
  {
    degree: "B.App. Data Science",
    institution: "PENS — Politeknik Elektronika Negeri Surabaya",
    period: "Aug 2021 – Oct 2025",
    gpa: "GPA 3.79 / 4.00",
    flag: "🇮🇩",
  },
  {
    degree: "Exchange Student — AI, Quantum Computing & Blockchain",
    institution: "The Hague University of Applied Sciences",
    period: "Aug 2024 – Feb 2025",
    gpa: "GPA 8.60 / 10.00",
    flag: "🇳🇱",
    images: [
      { src: "/images/exchange1.jpeg", alt: "At THUAS with classmates" },
      { src: "/images/exchange2.jpg", alt: "At Indonesian Embassy in The Hague" },
      { src: "/images/exchange3.jpg", alt: "With THUAS classmates and professors" },
    ],
    badge: "IISMA 2024 Awardee",
  },
];

export const awards = [
  { icon: "⭐", title: "IISMA 2024 Awardee", desc: "Fully funded exchange to The Hague University, Netherlands — a highly competitive national scholarship program." },
  { icon: "🏆", title: "Top 10 Finalist", desc: "UTalk Active Innovation Competition 2024 by PT. United Tractors." },
];

export const certifications = [
  "TOEIC — Score 870 (English Proficiency)",
  "BNSP — Indonesian National Data Scientist Certification",
  "Dicoding — Machine Learning (Beginner → Intermediate)",
  "Dicoding — Python (Beginner → Intermediate)",
];

export const interests = [
  { icon: "🎸", label: "Playing Music" },
  { icon: "🎙️", label: "Watching Podcasts" },
  { icon: "🎮", label: "Gaming" },
  { icon: "🏸", label: "Badminton" },
  { icon: "🍳", label: "Cooking" },
];

export const intellectualInterests = [
  { icon: "₿", label: "Crypto & Web3" },
  { icon: "📈", label: "Finance & Economics" },
  { icon: "🤖", label: "Technology & AI" },
  { icon: "🧠", label: "Psychology" },
  { icon: "🧩", label: "Human Behavior" },
];
