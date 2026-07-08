export const USER = {
  name: "Preran Rai",
  role: "AI Researcher & Full-Stack Developer",
  tagline: "Building intelligent systems that bridge research and real-world impact.",
  email: "preranrai3@gmail.com",
  location: "Karnataka, India",
  education: {
    degree: "Bachelor of Engineering in Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
    college: "Sahyadri College of Engineering & Management",
    year: "Fourth Year",
  },
  socials: {
    github: "https://github.com/PreranRai",
    linkedin: "https://www.linkedin.com/in/preran-rai-92414b293/",
  }
};

export const SKILLS = {
  ai: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "NumPy", "Pandas", "Keras", "MediaPipe", "YOLO"],
  frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "FastAPI", "Firebase", "MySQL", "MongoDB"],
  tools: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman", "Figma"]
};

export const PROJECTS = [
  {
    id: "fedcare-ai",
    title: "FedCare AI",
    category: "Privacy-Preserving Healthcare AI",
    isTeamProject: true,
    myContributions: "[TODO: Update with my specific contributions]",
    overview: "A full-stack, production-grade Federated Learning (FL) platform purpose-built for the healthcare ecosystem, enabling multiple hospitals to collaboratively build AI models without sharing patient records.",
    problemStatement: "Centralizing healthcare data for machine learning is impossible due to strict regulations like HIPAA, GDPR, and patient confidentiality laws.",
    motivation: "To enable privacy-preserving, collaborative AI model training across healthcare institutions without sacrificing patient privacy.",
    solution: "A platform where each hospital trains XGBoost models locally, and only model weight updates are sent to a central server for FedAvg aggregation.",
    architecture: "Multi-tenant FastAPI asynchronous backend with PostgreSQL, connecting to a React/Vite Glassmorphism frontend. Employs local XGBoost training at hospital nodes with server-side FedAvg weight aggregation.",
    aiModels: [
      "XGBoost",
      "FedAvg (Federated Averaging)",
      "SHAP (Explainable AI)"
    ],
    technologies: ["FastAPI", "React", "PostgreSQL", "Python", "Flower (flwr)", "Chart.js"],
    keyFeatures: [
      "Zero raw data sharing (Weight-only federation)",
      "SHAP XAI explainability heatmaps and waterfall plots",
      "Live training curve visualizations via Chart.js",
      "Multi-tenant role system (Admin & Hospital)"
    ],
    challenges: "Handling class-imbalanced datasets, single-class splits, and tiny datasets gracefully during distributed federated training with automatic fallback injection.",
    results: "Achieved ~84–88% Accuracy, ~0.88–0.92 AUC-ROC, and ~0.82–0.84 F1 Score on the federated Pima Indians Diabetes dataset.",
    lessonsLearned: "Gained deep insights into distributed systems, Federated Learning paradigms (FedAvg), and implementing Explainable AI (SHAP) in production.",
    futureImprovements: "Adding differential privacy (DP-SGD), supporting DICOM medical imaging datasets, and migrating to WebSockets for real-time log streaming.",
    github: "https://github.com/Manvith-kumar16/FedCare-AI",
    demo: null
  },
  {
    id: "arecanut-multimodal",
    title: "Multimodal Arecanut Quality Classification",
    category: "Computer Vision & Multimodal Learning",
    isTeamProject: true,
    myContributions: "Engineered a multimodal RGB + X-ray learning pipeline and evaluated diverse fusion paradigms to optimize classification accuracy.",
    overview: "An engineering implementation of a multimodal deep learning framework for automated arecanut quality grading, combining RGB surface images with X-ray images for simultaneous analysis of external and internal defects.",
    problemStatement: "Traditional visual inspection of arecanuts fails to detect internal structural defects, while unimodal X-ray lacks surface detail, leading to inaccurate quality grading.",
    motivation: "To build a robust, scalable computer vision system that fuses surface-level and internal imaging modalities using state-of-the-art deep learning architectures.",
    solution: "Implemented and evaluated multiple multimodal fusion paradigms (Feature-Level Fusion, Domain Adaptation, Joint Multimodal Learning) to combine RGB and X-ray modalities for comprehensive quality assessment.",
    architecture: "Deep learning pipelines utilizing CNNs and Vision Transformers (MobileNetV3, EfficientNetV2, ConvNeXt, Swin Transformer) for feature extraction, followed by dense feature-level fusion networks.",
    aiModels: [
      "MobileNetV3",
      "EfficientNetV2",
      "ConvNeXt",
      "Swin Transformer",
      "Feature-Level Fusion Models"
    ],
    technologies: ["TensorFlow", "PyTorch", "Python", "OpenCV", "CUDA"],
    keyFeatures: [
      "Multimodal RGB + X-ray data pipeline",
      "Feature-Level Fusion implementation",
      "Stratified 5-Fold Cross Validation testing"
    ],
    challenges: "Engineering the data pipeline to perfectly synchronize and augment diverse imaging modalities (visible light vs. X-ray) without losing spatial resolution.",
    results: "The feature-level fusion models consistently outperformed unimodal baselines across key classification metrics, verified by Wilcoxon signed-rank tests.",
    lessonsLearned: "Gained significant engineering experience in designing custom PyTorch/TensorFlow data loaders for multimodal inputs and optimizing large vision models.",
    futureImprovements: "Optimizing the multimodal fusion architecture for real-time edge inference on agricultural sorting machines.",
    relatedPublication: "#research",
    github: null,
    demo: null
  },
  {
    id: "intelligent-book-learning",
    title: "Intelligent Book Learning Platform",
    category: "Generative AI • NLP • Educational AI",
    isTeamProject: false,
    overview: "A comprehensive Flask-based AI web application that helps users quickly understand books by generating summaries, mind maps, flashcards, and Q&A pairs.",
    problemStatement: "Students and readers often struggle to efficiently extract, synthesize, and review key concepts from lengthy textbooks or documents.",
    motivation: "To accelerate the learning process by automating the generation of high-quality study materials using state-of-the-art Generative AI.",
    solution: "Developed a Full-Stack application where users can upload PDFs or text to receive instant AI-generated summaries, interactive D3.js mind maps, and T5-generated study flashcards.",
    architecture: "A Flask backend utilizing SQLAlchemy for data persistence, integrated with Hugging Face models (distilbart and flan-t5) for inference, serving a responsive HTML/CSS/JS frontend.",
    aiModels: [
      "distilbart-cnn-12-6 (Summarization)",
      "google/flan-t5-small (Q&A Generation)",
      "Extractive NLP for Mind Maps"
    ],
    technologies: ["Flask", "Python", "Hugging Face Transformers", "PyTorch", "SQLite", "HTML", "CSS", "JavaScript", "Jinja2", "D3.js"],
    keyFeatures: [
      "Secure User Authentication",
      "AI-generated Book Summaries",
      "Automatic Flashcard Generation",
      "Question & Answer Generation",
      "Interactive D3.js Mind Maps",
      "Standalone CLI Summarizer"
    ],
    challenges: "Handling large document token limits for transformer models and maintaining context-aware generation during the Q&A synthesis phase.",
    results: "Successfully deployed a robust educational platform capable of processing large texts into actionable study material automatically.",
    lessonsLearned: "Gained deep practical experience in deploying and managing memory-intensive Hugging Face pipelines within a web application context.",
    futureImprovements: "Upgrading to larger LLMs for more nuanced generation and adding vector database support for RAG-based interactive book querying.",
    github: "https://github.com/PreranRai/Intelligent-Book-Learning",
    demo: null
  },
  {
    id: "tulu-kalpuga",
    title: "Tulu-Kalpuga",
    category: "Educational AI & Full-Stack",
    overview: "An AI-powered interactive educational platform designed to help users learn and preserve the indigenous Tulu language script.",
    problemStatement: "The specific challenge of preserving the Tulu script and the severe lack of digital learning resources for indigenous languages.",
    motivation: "A strong personal and cultural drive to digitize, preserve, and promote the Tulu language for future generations.",
    solution: "Developed an interactive web-based educational platform that leverages NLP and Computer Vision to teach the Tulu script efficiently.",
    architecture: "Vite-powered React Single Page Application frontend communicating with a Flask REST API hosting the CNN inference model.",
    aiModels: [
      "CNN-based handwritten character recognition model"
    ],
    technologies: ["React", "JavaScript", "Vite", "Bootstrap", "Python", "Flask", "CNN", "NLP"],
    keyFeatures: [
      "Interactive script tracing and validation",
      "AI-assisted handwriting evaluation",
      "Pronunciation assistance",
      "Learner progress tracking",
      "Interactive learning modules"
    ],
    challenges: "Technical hurdles faced during CNN model training for a low-resource language and the need for extensive manual data augmentation.",
    results: "Successfully expanded the handwritten Tulu dataset and achieved real-time handwriting recognition accuracy.",
    lessonsLearned: "Key takeaways from building a localized educational AI platform and managing custom, low-resource datasets.",
    futureImprovements: "Mobile app support and expanded vocabulary modules.",
    github: "https://github.com/Manvith-kumar16/Tulu-Kalpuga",
    demo: "https://tulukalpuga.vercel.app/"
  },
  {
    id: "agriseva",
    title: "AgriSeva - Smart Farming Companion",
    category: "Agricultural AI & Full-Stack",
    overview: "A comprehensive, AI-powered agricultural platform designed specifically for Indian farmers that bundles crop recommendations, disease detection, and marketplace access.",
    problemStatement: "Farmers face significant challenges regarding accurate crop disease diagnosis, access to best farming practices, and direct market access for their produce.",
    motivation: "To empower the agricultural sector using modern AI by providing accessible, offline-capable agricultural intelligence tailored for Indian farmers.",
    solution: "Built a Full-Stack application integrating Computer Vision models to analyze crop health and provide actionable insights, alongside a community marketplace.",
    architecture: "React.js Progressive Web App (PWA) frontend communicating with a FastAPI backend, utilizing standalone ML inference pipelines for TensorFlow and PyTorch models.",
    aiModels: [
      "Image-based Deep Learning for disease detection",
      "AI crop and fertilizer recommendations based on soil analysis"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    keyFeatures: [
      "Real-time offline disease inference using TensorFlow Lite",
      "Multilingual support for 7 Indian languages",
      "Progressive Web App (PWA) with offline sync",
      "Farmer B2C/B2B Marketplace",
      "Government Scheme Integration (NABARD, PM-KISAN)"
    ],
    challenges: "Sourcing diverse agricultural datasets and optimizing deep learning model sizes for offline edge inference on mobile devices.",
    results: "Successfully deployed lightweight inference models capable of running directly on mobile devices without internet access.",
    lessonsLearned: "Gained significant experience integrating complex ML models into a Full-Stack environment and architecting robust offline-first PWAs.",
    futureImprovements: "IoT sensor integration for real-time soil monitoring and extended multilingual voice support.",
    github: "https://github.com/PreranRai/Agri_Seva",
    demo: null
  },
  {
    id: "First-Aid-AR",
    title: "Automated Wound Detection & Augmented Treatment",
    category: "Computer Vision & Augmented Reality",
    overview: "A real-time Computer Vision application that detects skin wounds via webcam and digitally overlays an augmented reality first-aid bandage in the correct orientation.",
    problemStatement: "Traditional first aid instruction lacks real-time, context-aware visual guidance for proper wound treatment positioning.",
    motivation: "To create an accessible, AI-driven visual guidance system for immediate and accurate wound treatment.",
    solution: "Developed a Python-based real-time video processing pipeline utilizing OpenCV to detect wounds and geometrically align graphics.",
    architecture: "Live webcam frame extraction fed into an HSV color filtering pipeline, followed by contour analysis, scaling, rotation, and alpha blending.",
    aiModels: [],
    technologies: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    keyFeatures: [
      "Live webcam input for dynamic arm positioning",
      "HSV Color Detection (Red hue thresholds)",
      "Automated scaling & rotation via cv2.minAreaRect",
      "Alpha blending for seamless PNG overlays",
      "Debug visualizer mode"
    ],
    challenges: "Building an accurate detection system robust to varying environmental lighting conditions and different skin tones.",
    results: "Achieved real-time processing performance with accurate orientation matching and seamless alpha blending.",
    lessonsLearned: "Advanced matrix operations, alpha blending techniques, and real-time video stream processing optimization.",
    futureImprovements: "Deploying the vision pipeline to mobile devices and expanding detection to multiple injury types.",
    github: "https://github.com/PreranRai/Python-FirstAid-AR",
    demo: "https://drive.google.com/file/d/1sKFPbOd-7wxGxvvPEWg0vmmmSX86pCzb/view?usp=drive_link"
  }
];

export const RESEARCH_INTERESTS = [
  "Computer Vision",
  "Multimodal Learning",
  "Deep Learning",
  "Agricultural AI",
  "Language Technologies",
  "Explainable AI",
  "Machine Learning"
];

export const RESEARCH_METRICS = [
  { label: "Research Works", value: 3 },
  { label: "Publicly Available", value: 1 },
  { label: "Research Areas", value: 6, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Datasets", value: 2, suffix: "+" }
];

export const PUBLICATIONS = [
  {
    id: "pub-1",
    status: "SSRN Preprint",
    type: "Preprint",
    year: "2026",
    title: "Multimodal Deep Learning for Feature-Level Fusion in Automated Arecanut Quality Classification Using RGB and X-ray Imaging",
    authors: "Duddela Sai Prashanth, Rakshith Bhandary, Preran Rai, Shivasubrahmanya K C, and collaborators.",
    areas: ["Computer Vision", "Multimodal Learning", "Agricultural AI", "Deep Learning"],
    abstract: "Developed a multimodal deep learning framework for automated arecanut quality grading by combining RGB surface images with X-ray images, enabling simultaneous analysis of external appearance and internal structural defects. The work evaluates multiple multimodal fusion paradigms to improve agricultural quality assessment.",
    contributions: [
      "Built a multimodal RGB + X-ray learning pipeline.",
      "Evaluated: Feature-Level Fusion, Domain Adaptation, Joint Multimodal Learning, Ensemble Learning.",
      "Achieved strong classification performance using feature-level fusion.",
      "Performed extensive statistical validation using Stratified 5-Fold Cross Validation, paired t-tests, bootstrap testing, and Wilcoxon signed-rank tests."
    ],
    technologies: ["TensorFlow", "PyTorch", "MobileNetV3", "EfficientNetV2", "ConvNeXt", "Swin Transformer", "OpenCV", "CUDA", "Python"],
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6992593",
    actionText: "View Paper",
    relatedProject: "#projects"
  },
  {
    id: "pub-2",
    status: "Manuscript",
    type: "Manuscript",
    year: "2026",
    title: "An End-to-End Deep Learning Framework for Handwritten Tulu Lipi Recognition and AI-Assisted Script Learning",
    authors: "Manvith Kumar Ullal, Arshith, Preran Rai, Thushar",
    areas: ["Computer Vision", "Language Technologies", "Deep Learning", "Educational AI"],
    abstract: "Developed an AI-powered educational platform for preserving the Tulu script through handwritten character recognition and AI-assisted learning. The system combines a CNN-based recognition model with a Flask inference API and a React-based learning platform to deliver real-time handwriting evaluation, pronunciation assistance, learner progress tracking, and interactive feedback.",
    contributions: [
      "Expanded the handwritten Tulu dataset using extensive data augmentation.",
      "Developed a CNN-based handwritten character recognition model.",
      "Integrated the model with a Flask REST API.",
      "Built a React-based learning platform with AI-assisted evaluation."
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Flask", "React", "Node.js", "OpenCV", "NumPy", "Pillow", "CNN"],
    link: null,
    actionText: "Coming Soon"
  },
  {
    id: "pub-3",
    status: "In Progress",
    type: "Ongoing Research",
    year: "2026",
    title: "[Placeholder – I will provide the title later.]",
    authors: "Preran Rai and collaborators",
    areas: ["To be updated."],
    abstract: "This research project is currently under active development. Details will be added once the work reaches the manuscript stage.",
    contributions: [
      "To be updated",
      "To be updated",
      "To be updated"
    ],
    technologies: ["To be updated"],
    link: null,
    actionText: "Research in Progress"
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering - CSE (AIML)",
    institution: "Sahyadri College of Engineering and Management",
    duration: "2023 - 2027",
    description: "Specializing in Artificial Intelligence and Machine Learning. Focus: Practical applications & real-world problem solving.",
    status: "IN_PROGRESS",
    gpa: "9.17 / 10.0"
  },
  {
    degree: "Pre-University (PCMB)",
    institution: "HHSIBS Edneer",
    duration: "2021 - 2023",
    description: "Foundation in Physics, Chemistry, Mathematics, Biology. Focus: Analytical & problem-solving skills.",
    status: "COMPLETED",
    gpa: "96.83%"
  }
];

export const EXPERIENCE = [
  {
    role: "Mentor",
    company: "HackHarbour 3.0 // Internship",
    duration: "Summer 2024",
    description: "Mentored participants during a 10-day intensive bootcamp. Delivered technical sessions and guided project development."
  },
  {
    role: "Virtual Intern",
    company: "Infosys Springboard",
    duration: "2026",
    description: "Developed AI Predictive Maintenance models and gained hands-on experience with industrial AI applications."
  }
];

export const CERTIFICATIONS = [
  {
    title: "Python for Data Science",
    organization: "NPTEL (IIT Madras)",
    pdf: "/certificates/Python_for_Data_Science_NPTEL.pdf"
  },
  {
    title: "Artificial Intelligence Foundation Certification",
    organization: "Infosys Springboard",
    pdf: "/certificates/Artificial Intelligence Foundation Certification.pdf"
  },
  {
    title: "Master Computer Vision with OpenCV and Machine Learning",
    organization: "Infosys Springboard",
    pdf: "/certificates/Master Computer Vision™ OpenCV3 in Python and Machine Learning.pdf"
  },
  {
    title: "Applied AI Learning Challenge",
    organization: "Microsoft",
    pdf: "/certificates/Applied AI Learning Challenge.pdf"
  },
  {
    title: "Microsoft AI Learning Challenge",
    organization: "Microsoft",
    pdf: "/certificates/Microsoft AI Learning Challenge.pdf"
  },
  {
    title: "Infosys Springboard Virtual Internship",
    organization: "Infosys Springboard",
    pdf: "/certificates/Virtual_Internship.pdf"
  },
  {
    title: "Microsoft Azure Learning Challenge",
    organization: "Microsoft",
    pdf: "/certificates/Microsoft Azure Learning Challenge.pdf"
  },
  {
    title: "Gen-AI Camp",
    organization: "AlgoUniversity",
    pdf: "/certificates/Preran_Rai_Certificate_AlgoUniversity.png"
  },
  {
    title: "Gen AI Engineering Mastermind",
    organization: "Outskill",
    pdf: "/certificates/Preran_Rai_Certificate_OutSkill.pdf"
  },
  {
    title: "Database Management System – Part 1",
    organization: "Infosys Springboard",
    pdf: "/certificates/Database Management System Part - 1.pdf"
  },
  {
    title: "Database Management System – Part 2",
    organization: "Infosys Springboard",
    pdf: "/certificates/Database Management System Part - 2.pdf"
  },
  {
    title: "Software Engineering",
    organization: "Infosys Springboard",
    pdf: "/certificates/Software Engineering.pdf"
  },
  {
    title: "Software Testing Essentials and Fundamentals",
    organization: "Infosys Springboard",
    pdf: "/certificates/Software Testing Essentials and Fundamentals.pdf"
  },
  {
    title: "Python Foundation Certification",
    organization: "Infosys Springboard",
    pdf: "/certificates/Python Foundation Certification.pdf"
  },
  {
    title: "Certificate of Volunteership – Hackathon",
    organization: "SOSC, Sahyadri College of Engineering & Management",
    pdf: "/certificates/Preran Rai_Hackathon.pdf"
  },
  {
    title: "Certificate of Volunteership – Registration",
    organization: "SOSC, Sahyadri College of Engineering & Management",
    pdf: "/certificates/Preran Rai_Registration.pdf"
  },
  {
    title: "HackFest 2026 – Hackathon Participation",
    organization: "NMAM Institute of Technology (NMAMIT), Nitte (Deemed to be University)",
    pdf: "/certificates/Nitte_Hackathon.jpeg"
  }
];
