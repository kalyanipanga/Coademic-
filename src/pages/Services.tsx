import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, Bot, Code, GraduationCap, Briefcase, 
  Trophy, FolderGit2, ChevronRight, ArrowRight,
  Layout, Server, Smartphone, Cpu, Workflow, Cloud,
  Terminal, Users, Award, Rocket, CheckCircle2,
  X, Info, Calendar, Settings, Coffee, BrainCircuit,
  ShieldCheck, Microchip, CircuitBoard, Wifi, Layers,
  Zap, BarChart3, ClipboardList, Share2, Link, Palette,
  Database, Activity, CreditCard, Sparkles, TrendingUp, ShoppingCart, Lock, Shield
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { enquireNow } from "../utils/whatsapp";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";

const internshipPrograms = [
  {
    id: "robotics",
    title: "Robotics & Autonomous Systems",
    icon: Cpu,
    description: "Dive into the future of automation with our advanced Robotics program. Master the integration of hardware and software to build intelligent, autonomous machines capable of solving complex real-world challenges.",
    category: "Automation Technologies",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Fundamentals of Kinematics and Robot Dynamics",
        "Sensor Integration (LiDAR, Ultrasonic, IMU) and Data Fusion",
        "Introduction to ROS (Robot Operating System) and Gazebo Simulation",
        "Control Systems Design and PID Tuning for Precision",
        "Autonomous Navigation and Path Planning Algorithms",
        "Hands-on Project: Building a Self-Navigating Prototype"
      ]
    }
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation & Industry 4.0",
    icon: Settings,
    description: "Prepare for the smart manufacturing revolution. Learn to design, program, and maintain sophisticated industrial control systems that power modern factories and production lines.",
    category: "Automation Technologies",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "PLC Programming (Ladder Logic, FBD) using Industry Standards",
        "SCADA Systems Design and HMI Interfacing",
        "Industrial Communication Protocols (Modbus, Profibus, MQTT)",
        "Integration of VFDs and Servo Motors in Automation",
        "Introduction to IIoT (Industrial Internet of Things) and Smart Sensors",
        "Case Study: Optimizing a Production Line for Efficiency"
      ]
    }
  },
  {
    id: "c-programming",
    title: "Advanced C & System Programming",
    icon: Code,
    description: "Master the language that powers operating systems and high-performance applications. Develop a deep understanding of memory management, pointers, and low-level system interactions.",
    category: "Software & Development",
    details: {
      duration: "4 Weeks",
      level: "Beginner to Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Deep Dive into Pointers, Memory Allocation, and Dynamic Structures",
        "File I/O Operations and System-Level Programming",
        "Implementation of Complex Data Structures (Trees, Graphs, Hash Maps)",
        "Multi-threading and Process Synchronization in C",
        "Optimization Techniques for Embedded and High-Performance Code",
        "Project: Developing a Custom Memory Allocator or Shell"
      ]
    }
  },
  {
    id: "java-development",
    title: "Enterprise Java & Spring Framework",
    icon: Coffee,
    description: "Build scalable, robust, and secure enterprise applications. Master the Java ecosystem, from core concepts to modern microservices architecture using the Spring Boot framework.",
    category: "Software & Development",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Advanced OOP Principles and Design Patterns in Java",
        "Building RESTful APIs with Spring Boot and Spring MVC",
        "Database Integration using Hibernate and Spring Data JPA",
        "Introduction to Microservices Architecture and Service Discovery",
        "Unit Testing with JUnit and Mockito for Quality Assurance",
        "Project: Developing a Full-Scale E-commerce Backend"
      ]
    }
  },
  {
    id: "python-programming",
    title: "Python for Data Science & Automation",
    icon: Terminal,
    description: "Harness the power of Python for diverse applications. From automating repetitive tasks to performing complex data analysis, learn why Python is the most versatile language in tech.",
    category: "Software & Development",
    details: {
      duration: "4 Weeks",
      level: "Beginner to Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Advanced Python Scripting and Functional Programming",
        "Data Analysis with Pandas, NumPy, and Matplotlib",
        "Web Scraping and API Integration for Data Collection",
        "Automation of System Tasks and Workflow Optimization",
        "Introduction to Web Frameworks (Django or Flask)",
        "Project: Building an Automated Data Analysis Dashboard"
      ]
    }
  },
  {
    id: "web-development",
    title: "Full-Stack Web Engineering (MERN)",
    icon: Globe,
    description: "Become a versatile web engineer. Master the end-to-end process of building modern, responsive, and high-performance web applications using the popular MERN stack.",
    category: "Software & Development",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Modern Frontend Development with React and Tailwind CSS",
        "Backend Engineering with Node.js and Express.js",
        "NoSQL Database Design and Management with MongoDB",
        "State Management using Redux Toolkit or Context API",
        "Authentication and Security (JWT, OAuth, Secure Cookies)",
        "Project: Deploying a Real-time Collaborative Web App"
      ]
    }
  },
  {
    id: "mobile-app-development",
    title: "Cross-Platform Mobile Engineering",
    icon: Smartphone,
    description: "Build stunning mobile experiences for both iOS and Android. Learn to develop high-performance apps using modern cross-platform frameworks like React Native or Flutter.",
    category: "Software & Development",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Mobile UI/UX Design Principles and Component Architecture",
        "Native Device Feature Integration (Camera, GPS, Push Notifications)",
        "State Management and Offline Data Persistence",
        "API Integration and Real-time Data Syncing",
        "App Store and Play Store Deployment Workflows",
        "Project: Building a Feature-Rich Social Media or Utility App"
      ]
    }
  },
  {
    id: "cloud-computing",
    title: "Cloud Infrastructure & DevOps",
    icon: Cloud,
    description: "Master the backbone of modern tech. Learn to design, deploy, and manage scalable cloud infrastructures while implementing DevOps practices for continuous delivery.",
    category: "Software & Development",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Core Cloud Services (Compute, Storage, Networking) on AWS/Azure",
        "Infrastructure as Code (IaC) using Terraform or CloudFormation",
        "Containerization with Docker and Orchestration with Kubernetes",
        "CI/CD Pipeline Design and Implementation (GitHub Actions/Jenkins)",
        "Cloud Security Best Practices and Monitoring Tools",
        "Project: Architecting a Scalable, Auto-Scaling Web Cluster"
      ]
    }
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence & Cognitive Systems",
    icon: Bot,
    description: "Explore the frontiers of intelligence. Learn the mathematical foundations and algorithmic implementations that allow machines to perceive, reason, and learn.",
    category: "Software & Development",
    details: {
      duration: "4 Weeks",
      level: "Advanced",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Foundations of Search Algorithms and Heuristics",
        "Knowledge Representation and Logic-Based Reasoning",
        "Introduction to Natural Language Processing (NLP)",
        "Computer Vision Fundamentals and Image Recognition",
        "Ethical AI Frameworks and Bias Mitigation",
        "Project: Developing an Intelligent Conversational Agent"
      ]
    }
  },
  {
    id: "machine-learning",
    title: "Machine Learning & Predictive Analytics",
    icon: BrainCircuit,
    description: "Turn data into actionable insights. Master the algorithms and statistical models that enable predictive analytics and data-driven decision-making in modern business.",
    category: "Software & Development",
    details: {
      duration: "4 Weeks",
      level: "Advanced",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Supervised and Unsupervised Learning Algorithms",
        "Regression, Classification, and Clustering Techniques",
        "Feature Engineering and Dimensionality Reduction",
        "Model Evaluation, Cross-Validation, and Hyperparameter Tuning",
        "Introduction to Deep Learning and Neural Networks",
        "Project: Building a Predictive Model for Real-World Datasets"
      ]
    }
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Ethical Hacking",
    icon: ShieldCheck,
    description: "Become a guardian of the digital realm. Learn to identify vulnerabilities, defend against sophisticated attacks, and implement robust security architectures for organizations.",
    category: "Software & Development",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Network Security Fundamentals and Protocol Analysis",
        "Vulnerability Assessment and Penetration Testing (VAPT)",
        "Web Application Security (OWASP Top 10)",
        "Cryptography and Secure Communication Protocols",
        "Incident Response and Digital Forensics Basics",
        "Project: Conducting a Controlled Security Audit of a System"
      ]
    }
  },
  {
    id: "vlsi-design",
    title: "VLSI Design & Chip Architecture",
    icon: Microchip,
    description: "Design the hardware of tomorrow. Master the principles of Very Large Scale Integration, from transistor-level design to complex system-on-chip (SoC) architectures.",
    category: "Electronics & Hardware",
    details: {
      duration: "4 Weeks",
      level: "Advanced",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "CMOS Technology and Digital Logic Design",
        "ASIC and FPGA Design Flows and Methodologies",
        "Physical Design (Floorplanning, Placement, Routing)",
        "Static Timing Analysis (STA) and Power Optimization",
        "Verification Techniques and SystemVerilog Basics",
        "Project: Designing and Simulating a Custom Digital Module"
      ]
    }
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems & Firmware Engineering",
    icon: CircuitBoard,
    description: "Bridge the gap between code and silicon. Learn to develop high-performance firmware and design embedded systems that power everything from medical devices to automotive tech.",
    category: "Electronics & Hardware",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Microcontroller Architecture (ARM Cortex-M, AVR, PIC)",
        "Embedded C Programming and Hardware Interfacing (I2C, SPI, UART)",
        "Real-Time Operating Systems (RTOS) Fundamentals",
        "Interrupt Handling and Low-Power Optimization Techniques",
        "Device Driver Development and Hardware Abstraction Layers",
        "Project: Building a Smart Monitoring System with RTOS"
      ]
    }
  },
  {
    id: "iot",
    title: "Internet of Things (IoT) Engineering",
    icon: Wifi,
    description: "Connect the physical world to the digital one. Master the end-to-end IoT stack, from smart sensors and edge computing to cloud integration and data visualization.",
    category: "Electronics & Hardware",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "IoT Architecture and Communication Protocols (MQTT, CoAP, HTTP)",
        "Sensor Interfacing and Edge Data Processing",
        "Wireless Connectivity (Wi-Fi, Bluetooth, LoRaWAN, Zigbee)",
        "Cloud Integration for IoT (AWS IoT, Azure IoT Hub)",
        "IoT Security and Device Management at Scale",
        "Project: Developing an End-to-End Smart Home or Industrial IoT Solution"
      ]
    }
  },
  {
    id: "pcb-design",
    title: "Advanced PCB Design & Hardware Prototyping",
    icon: Layers,
    description: "Master the art of professional hardware design. Learn to create high-quality, industry-standard printed circuit boards using professional EDA tools and manufacturing guidelines.",
    category: "Electronics & Hardware",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Schematic Capture and Component Library Management",
        "Multi-layer PCB Layout and Signal Integrity Principles",
        "Design for Manufacturing (DFM) and Assembly (DFA)",
        "High-Speed Design Techniques and EMI/EMC Considerations",
        "Prototyping, Soldering, and Hardware Debugging Skills",
        "Project: Designing and Ordering a Custom Functional PCB"
      ]
    }
  },
  {
    id: "verilog-hdl",
    title: "Digital System Design with Verilog",
    icon: Zap,
    description: "Master hardware modeling with Verilog HDL. Learn to describe complex digital systems and implement them on modern FPGA platforms for high-speed processing.",
    category: "Electronics & Hardware",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Verilog Syntax, Modeling Styles, and Dataflow Descriptions",
        "Finite State Machine (FSM) Design and Optimization",
        "Testbench Development and Functional Verification",
        "FPGA Architecture and Implementation Workflows",
        "Synthesis Constraints and Timing Closure Basics",
        "Project: Implementing a Custom Processor or Crypto-Engine on FPGA"
      ]
    }
  },
  {
    id: "digital-marketing",
    title: "Digital Strategy & Growth Marketing",
    icon: BarChart3,
    description: "Master the art and science of digital growth. Learn to design data-driven marketing strategies that build brands, engage audiences, and drive measurable business results.",
    category: "Business & Management",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Search Engine Optimization (SEO) and Content Strategy",
        "Performance Marketing (PPC, Social Ads, Retargeting)",
        "Marketing Analytics and Data-Driven Decision Making",
        "Conversion Rate Optimization (CRO) and A/B Testing",
        "Email Marketing Automation and Customer Lifecycle Management",
        "Project: Designing a Comprehensive Growth Strategy for a Startup"
      ]
    }
  },
  {
    id: "hr-management",
    title: "Strategic Human Resource Management",
    icon: Users,
    description: "Develop the leadership skills to manage modern workforces. Master the strategic role of HR in organizational development, talent acquisition, and employee engagement.",
    category: "Business & Management",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Strategic Talent Acquisition and Recruitment Methodologies",
        "Employee Performance Management and Appraisal Systems",
        "Organizational Culture and Employee Engagement Strategies",
        "HR Analytics and Data-Driven Workforce Planning",
        "Labor Laws, Compliance, and Ethical HR Practices",
        "Project: Developing a Modern HR Policy Framework for a Tech Company"
      ]
    }
  },
  {
    id: "business-dev",
    title: "Business Development & Strategic Partnerships",
    icon: Briefcase,
    description: "Learn to drive revenue and expand market presence. Master the techniques of identifying opportunities, building strategic relationships, and closing high-value deals.",
    category: "Business & Management",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Market Research, Lead Generation, and Prospecting Techniques",
        "Consultative Selling and Advanced Negotiation Skills",
        "Strategic Partnership Development and Management",
        "Financial Modeling and ROI Analysis for Business Deals",
        "CRM Tools and Sales Pipeline Management",
        "Project: Creating a Market Entry Strategy for a New Product"
      ]
    }
  },
  {
    id: "project-management",
    title: "Agile Project Management & Leadership",
    icon: ClipboardList,
    description: "Master the methodologies used by top tech companies to deliver successful projects. Learn to lead teams, manage resources, and navigate complex project lifecycles with agility.",
    category: "Business & Management",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Agile Methodologies (Scrum, Kanban) and Lean Principles",
        "Project Planning, Scheduling, and Resource Allocation",
        "Risk Management and Stakeholder Communication Strategies",
        "Project Management Tools (Jira, Trello, Asana) Mastery",
        "Budgeting, Cost Control, and Quality Assurance",
        "Project: Leading a Simulated Cross-Functional Project Team"
      ]
    }
  },
  {
    id: "social-media-marketing",
    title: "Social Media Strategy & Brand Building",
    icon: Share2,
    description: "Master the platforms that shape public opinion. Learn to build powerful brand identities and engage communities through creative content and strategic social media management.",
    category: "Business & Management",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Platform-Specific Content Strategy (Instagram, LinkedIn, X, TikTok)",
        "Community Management and Influencer Marketing Strategies",
        "Social Media Analytics, Reporting, and ROI Tracking",
        "Viral Marketing Techniques and Creative Storytelling",
        "Crisis Management and Online Reputation Management",
        "Project: Executing a Multi-Platform Brand Awareness Campaign"
      ]
    }
  },
  {
    id: "blockchain-dev",
    title: "Blockchain & Web3 Engineering",
    icon: Link,
    description: "Build the decentralized future. Master the principles of blockchain technology, smart contract development, and decentralized application (dApp) architecture.",
    category: "Software & Development",
    details: {
      duration: "4 Weeks",
      level: "Advanced",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "Fundamentals of Distributed Ledgers and Consensus Mechanisms",
        "Smart Contract Development with Solidity and Hardhat",
        "Web3.js and Ethers.js for Frontend Integration",
        "DeFi Protocols, Tokenomics, and NFT Standards",
        "Blockchain Security Auditing and Gas Optimization",
        "Project: Developing and Deploying a Decentralized Voting App"
      ]
    }
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Product Strategy",
    icon: Palette,
    description: "Design products that users love. Master the end-to-end design process, from user research and wireframing to high-fidelity prototyping and design system management.",
    category: "Software & Development",
    details: {
      duration: "4 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Internship Certificate",
      learning: [
        "User Research Methodologies and Persona Development",
        "Information Architecture and User Flow Mapping",
        "Wireframing and High-Fidelity Prototyping in Figma",
        "Design Systems, Style Guides, and Component Libraries",
        "Usability Testing and Iterative Design Processes",
        "Project: Designing a Complete Mobile App Interface from Scratch"
      ]
    }
  }
];

const internshipFAQs = [
  {
    quote: "Yes, all our internship programs come with a certificate of completion and a letter of recommendation for top performers.",
    name: "Will I get a certificate?",
    title: "Internship FAQ"
  },
  {
    quote: "Our internships are 4 weeks long, providing a focused and intensive learning experience.",
    name: "What is the duration?",
    title: "Internship FAQ"
  },
  {
    quote: "We offer both online and offline formats depending on the specific program and location.",
    name: "Is it online or offline?",
    title: "Internship FAQ"
  },
  {
    quote: "Yes, you will work on real-world projects and case studies to gain practical industry experience.",
    name: "Will I work on live projects?",
    title: "Internship FAQ"
  },
  {
    quote: "We provide placement assistance and career guidance to all our successful interns.",
    name: "Do you provide placement support?",
    title: "Internship FAQ"
  }
];

const hackathonPrograms = [
  // Web Development
  {
    id: "web-hackathon",
    title: "Web Innovation & Scalability Hack",
    icon: Globe,
    description: "Architect and build high-performance web applications. This challenge focuses on creating responsive, accessible, and scalable digital solutions using modern frontend and backend paradigms.",
    category: "Web Development",
    details: {
      duration: "48 Hours",
      level: "All Levels",
      format: "Hybrid",
      certificate: "Participation & Winner Certificates",
      learning: [
        "Rapid Prototyping with Modern Frameworks (React/Next.js)",
        "Performance Optimization and Core Web Vitals",
        "Responsive Design and Accessibility (a11y) Standards",
        "Effective Team Collaboration and Git Workflows",
        "Business Pitching and Product Demonstration Skills"
      ]
    }
  },
  {
    id: "frontend-perf",
    title: "Frontend Performance Challenge",
    icon: Zap,
    description: "Optimize the user experience by building lightning-fast web interfaces. Focus on rendering performance, asset optimization, and smooth animations.",
    category: "Web Development",
    details: {
      duration: "24 Hours",
      level: "Intermediate",
      format: "Online",
      certificate: "Performance Excellence Certificate",
      learning: [
        "Advanced Chrome DevTools for profiling",
        "Code splitting and lazy loading strategies",
        "Optimizing critical rendering path",
        "Efficient state management and re-render prevention",
        "Web Workers for off-main-thread processing"
      ]
    }
  },
  {
    id: "ecommerce-hack",
    title: "E-commerce Revolution Hack",
    icon: ShoppingCart,
    description: "Reimagine the online shopping experience. Build innovative features like AR product previews, smart recommendations, or seamless checkout flows.",
    category: "Web Development",
    details: {
      duration: "48 Hours",
      level: "Intermediate",
      format: "Offline",
      certificate: "Innovation in E-commerce Award",
      learning: [
        "Integrating payment gateways (Stripe/PayPal)",
        "Building complex product filtering systems",
        "Implementing real-time inventory tracking",
        "Creating immersive UI with 3D/AR elements",
        "Conversion rate optimization (CRO) techniques"
      ]
    }
  },

  // Full Stack
  {
    id: "fullstack-challenge",
    title: "Full Stack Architecture Sprint",
    icon: Layers,
    description: "Design and implement end-to-end enterprise solutions. From database normalization to intuitive user interfaces, test your ability to build complete, production-ready systems.",
    category: "Full Stack",
    details: {
      duration: "72 Hours",
      level: "Intermediate",
      format: "Offline",
      certificate: "Participation & Winner Certificates",
      learning: [
        "System Architecture and Database Schema Design",
        "RESTful and GraphQL API Development",
        "State Management and Real-time Data Synchronization",
        "Cloud Deployment and Infrastructure Management",
        "End-to-End Testing and Quality Assurance"
      ]
    }
  },
  {
    id: "saas-builder",
    title: "SaaS Product Builder",
    icon: Cloud,
    description: "Build a scalable Software-as-a-Service platform from scratch. Focus on multi-tenancy, subscription management, and robust user authentication.",
    category: "Full Stack",
    details: {
      duration: "48 Hours",
      level: "Advanced",
      format: "Hybrid",
      certificate: "SaaS Architect Certificate",
      learning: [
        "Multi-tenant database architecture",
        "Implementing subscription billing (Stripe Billing)",
        "Role-based access control (RBAC) systems",
        "Building comprehensive admin dashboards",
        "Automated deployment pipelines (CI/CD)"
      ]
    }
  },
  {
    id: "collab-hack",
    title: "Real-time Collaboration Hack",
    icon: Users,
    description: "Create tools that bring people together. Build real-time collaborative editors, whiteboards, or communication platforms using WebSockets and CRDTs.",
    category: "Full Stack",
    details: {
      duration: "36 Hours",
      level: "Advanced",
      format: "Online",
      certificate: "Collaboration Tech Award",
      learning: [
        "Real-time communication with Socket.io/WebSockets",
        "Conflict resolution with CRDTs or Operational Transform",
        "Building low-latency synchronization engines",
        "Implementing presence awareness and typing indicators",
        "Scaling WebSocket servers with Redis"
      ]
    }
  },

  // AI & Data Science
  {
    id: "ai-ml-hack",
    title: "AI & ML Solutions for Global Impact",
    icon: BrainCircuit,
    description: "Leverage the power of artificial intelligence to solve critical real-world problems. This hackathon focuses on practical applications of machine learning, from computer vision to predictive modeling.",
    category: "AI & Data Science",
    details: {
      duration: "48 Hours",
      level: "Advanced",
      format: "Online",
      certificate: "Participation & Winner Certificates",
      learning: [
        "Data Engineering and Feature Selection Pipelines",
        "Model Selection, Training, and Validation Strategies",
        "Integrating ML Models into Production Environments",
        "Natural Language Processing and Computer Vision Applications",
        "Ethical AI Considerations and Model Interpretability"
      ]
    }
  },
  {
    id: "gen-ai-creative",
    title: "Generative AI Creative Hack",
    icon: Sparkles,
    description: "Push the boundaries of creativity with Generative AI. Build applications that generate art, music, or text using LLMs and Diffusion models.",
    category: "AI & Data Science",
    details: {
      duration: "24 Hours",
      level: "Intermediate",
      format: "Hybrid",
      certificate: "Creative AI Innovation Award",
      learning: [
        "Prompt engineering and fine-tuning LLMs",
        "Working with OpenAI, Anthropic, or Hugging Face APIs",
        "Building RAG (Retrieval-Augmented Generation) systems",
        "Integrating AI-generated content into web apps",
        "Managing AI model costs and latency"
      ]
    }
  },
  {
    id: "predictive-biz",
    title: "Predictive Analytics for Business",
    icon: TrendingUp,
    description: "Turn data into actionable insights. Build predictive models to forecast sales, detect churn, or optimize supply chains for modern enterprises.",
    category: "AI & Data Science",
    details: {
      duration: "48 Hours",
      level: "Intermediate",
      format: "Offline",
      certificate: "Data Scientist Excellence Award",
      learning: [
        "Time-series forecasting techniques",
        "Customer churn prediction models",
        "Data visualization for business intelligence",
        "Working with large-scale datasets (BigQuery/Snowflake)",
        "A/B testing and experimental design"
      ]
    }
  },

  // Mobile App Development
  {
    id: "mobile-hack",
    title: "Mobile Experience & Engagement Hack",
    icon: Rocket,
    description: "Create the next generation of mobile experiences. Focus on building high-engagement, performant mobile applications that leverage native device capabilities to solve user needs.",
    category: "Mobile App Development",
    details: {
      duration: "48 Hours",
      level: "All Levels",
      format: "Hybrid",
      certificate: "Participation & Winner Certificates",
      learning: [
        "Cross-Platform Development with React Native or Flutter",
        "Mobile-First UI/UX Design and Micro-interactions",
        "Integrating Native APIs (Biometrics, Sensors, AR)",
        "App Store Optimization and Deployment Strategies",
        "User Retention and Engagement Analytics"
      ]
    }
  },
  {
    id: "fintech-mobile",
    title: "Fintech Mobile Solutions",
    icon: CreditCard,
    description: "Build secure and intuitive financial applications. Focus on digital wallets, investment trackers, or peer-to-peer payment systems.",
    category: "Mobile App Development",
    details: {
      duration: "48 Hours",
      level: "Advanced",
      format: "Offline",
      certificate: "Fintech Innovator Certificate",
      learning: [
        "Implementing secure mobile authentication (Biometrics)",
        "Integrating with financial APIs (Plaid/Yodlee)",
        "Building real-time transaction tracking",
        "Designing for financial data security and privacy",
        "Mobile payment processing flows"
      ]
    }
  },
  {
    id: "health-wellness-app",
    title: "Health & Wellness App Sprint",
    icon: Activity,
    description: "Design apps that improve lives. Build fitness trackers, mental health companions, or nutrition assistants that keep users motivated and healthy.",
    category: "Mobile App Development",
    details: {
      duration: "36 Hours",
      level: "Intermediate",
      format: "Online",
      certificate: "HealthTech Impact Award",
      learning: [
        "Integrating with HealthKit/Google Fit",
        "Building habit-tracking and notification systems",
        "Designing accessible health interfaces",
        "Managing sensitive health data (HIPAA considerations)",
        "Gamification strategies for user engagement"
      ]
    }
  },

  // Cybersecurity
  {
    id: "cyber-hack",
    title: "Cyber Defense & Infrastructure Security",
    icon: ShieldCheck,
    description: "Test your defensive and offensive security skills. This challenge involves identifying vulnerabilities, hardening systems, and building resilient infrastructures against modern cyber threats.",
    category: "Cybersecurity",
    details: {
      duration: "24 Hours",
      level: "Advanced",
      format: "Offline",
      certificate: "Participation & Winner Certificates",
      learning: [
        "Advanced Penetration Testing and Threat Hunting",
        "Secure Software Development Lifecycle (SSDLC)",
        "Network Traffic Analysis and Intrusion Detection",
        "Cloud Security and Identity Access Management (IAM)",
        "Security Compliance Frameworks and Risk Mitigation"
      ]
    }
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking & Bug Bounty",
    icon: Lock,
    description: "Think like a hacker to protect like a pro. Identify and exploit vulnerabilities in a controlled environment to help organizations improve their security posture.",
    category: "Cybersecurity",
    details: {
      duration: "12 Hours",
      level: "Intermediate",
      format: "Online",
      certificate: "Certified Ethical Hacker (Hackathon Edition)",
      learning: [
        "Web application vulnerability research (OWASP Top 10)",
        "Exploit development and proof-of-concept creation",
        "Reporting vulnerabilities effectively",
        "Using automated security scanning tools",
        "Understanding bug bounty platform workflows"
      ]
    }
  },
  {
    id: "blockchain-security",
    title: "Blockchain Security Audit",
    icon: Shield,
    description: "Secure the decentralized world. Audit smart contracts for vulnerabilities like reentrancy, overflow, and logic errors to prevent multi-million dollar exploits.",
    category: "Cybersecurity",
    details: {
      duration: "48 Hours",
      level: "Advanced",
      format: "Hybrid",
      certificate: "Blockchain Security Auditor Award",
      learning: [
        "Smart contract vulnerability patterns (Solidity)",
        "Using static analysis tools (Slither/Mythril)",
        "Formal verification of smart contracts",
        "Analyzing DeFi protocol logic for exploits",
        "Best practices for secure smart contract development"
      ]
    }
  }
];

const projectPrograms = [
  // Software Development
  {
    id: "web-app-dev",
    title: "Full-Stack Web Application",
    icon: Globe,
    description: "End-to-end development of scalable web applications using modern frameworks like React, Node.js, and cloud databases.",
    category: "Software Development",
    details: {
      duration: "Flexible",
      level: "All Levels",
      format: "Hybrid",
      certificate: "Project Completion Certificate",
      learning: [
        "Requirements Gathering & System Architecture",
        "Frontend & Backend Development",
        "Database Design & Optimization",
        "Testing, Deployment & Maintenance",
        "Agile Project Management"
      ]
    }
  },
  {
    id: "mobile-app-dev",
    title: "Cross-Platform Mobile App",
    icon: Smartphone,
    description: "Design and build native-like mobile experiences for iOS and Android using React Native or Flutter.",
    category: "Software Development",
    details: {
      duration: "Flexible",
      level: "All Levels",
      format: "Hybrid",
      certificate: "Project Completion Certificate",
      learning: [
        "Mobile UI/UX Design",
        "Cross-Platform Development",
        "Native API Integration",
        "App Store Deployment",
        "Performance Optimization"
      ]
    }
  },
  // Hardware & IoT
  {
    id: "iot-smart-system",
    title: "IoT Smart System",
    icon: Wifi,
    description: "Develop connected devices and smart systems integrating sensors, microcontrollers, and cloud platforms.",
    category: "Hardware & IoT",
    details: {
      duration: "Flexible",
      level: "Intermediate to Advanced",
      format: "Hybrid",
      certificate: "Project Completion Certificate",
      learning: [
        "Sensor Integration & Data Acquisition",
        "Microcontroller Programming (Arduino/ESP32)",
        "IoT Communication Protocols (MQTT/HTTP)",
        "Cloud Dashboard Development",
        "Hardware Prototyping"
      ]
    }
  },
  {
    id: "robotics-automation",
    title: "Robotics & Automation",
    icon: Cpu,
    description: "Design and build autonomous robots or automated systems for industrial or consumer applications.",
    category: "Hardware & IoT",
    details: {
      duration: "Flexible",
      level: "Advanced",
      format: "Hybrid",
      certificate: "Project Completion Certificate",
      learning: [
        "Kinematics & Motor Control",
        "Computer Vision Integration",
        "Path Planning & Navigation",
        "ROS (Robot Operating System)",
        "System Integration & Testing"
      ]
    }
  },
  {
    id: "pcb-design-project",
    title: "Custom PCB Design",
    icon: Layers,
    description: "Design, route, and manufacture custom Printed Circuit Boards for specific hardware requirements.",
    category: "Hardware & IoT",
    details: {
      duration: "Flexible",
      level: "Intermediate",
      format: "Hybrid",
      certificate: "Project Completion Certificate",
      learning: [
        "Schematic Capture",
        "PCB Layout & Routing",
        "Design for Manufacturing (DFM)",
        "Component Selection & Sourcing",
        "Hardware Testing & Debugging"
      ]
    }
  },
  // AI & Data Science
  {
    id: "ai-ml-model",
    title: "Custom AI/ML Model",
    icon: BrainCircuit,
    description: "Develop and deploy custom machine learning models for predictive analytics, computer vision, or NLP.",
    category: "AI & Data Science",
    details: {
      duration: "Flexible",
      level: "Advanced",
      format: "Hybrid",
      certificate: "Project Completion Certificate",
      learning: [
        "Data Collection & Preprocessing",
        "Model Selection & Training",
        "Hyperparameter Tuning",
        "Model Deployment & API Creation",
        "Performance Monitoring"
      ]
    }
  },
  {
    id: "data-analytics-dashboard",
    title: "Data Analytics Dashboard",
    icon: BarChart3,
    description: "Build interactive dashboards to visualize complex datasets and extract actionable business insights.",
    category: "AI & Data Science",
    details: {
      duration: "Flexible",
      level: "Intermediate",
      format: "Hybrid",
      certificate: "Project Completion Certificate",
      learning: [
        "Data Pipeline Engineering",
        "Data Visualization Techniques",
        "Dashboard Development (React/D3.js)",
        "Real-time Data Processing",
        "Business Intelligence Integration"
      ]
    }
  },
  // Enterprise Solutions
  {
    id: "enterprise-erp",
    title: "Enterprise ERP System",
    icon: Database,
    description: "Develop comprehensive Enterprise Resource Planning systems tailored to specific business workflows.",
    category: "Enterprise Solutions",
    details: {
      duration: "Flexible",
      level: "Advanced",
      format: "Hybrid",
      certificate: "Project Completion Certificate",
      learning: [
        "Business Process Mapping",
        "Microservices Architecture",
        "Secure Authentication & Authorization",
        "Scalable Database Design",
        "System Integration & API Development"
      ]
    }
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Setup",
    icon: Cloud,
    description: "Design and implement scalable, secure, and highly available cloud architectures on AWS, Azure, or GCP.",
    category: "Enterprise Solutions",
    details: {
      duration: "Flexible",
      level: "Advanced",
      format: "Hybrid",
      certificate: "Project Completion Certificate",
      learning: [
        "Cloud Architecture Design",
        "Infrastructure as Code (Terraform)",
        "CI/CD Pipeline Setup",
        "Security & Compliance Implementation",
        "Cost Optimization Strategies"
      ]
    }
  }
];

const webSolutionCategories = [
  "Corporate & Business",
  "E-commerce & Retail",
  "SaaS & Web Apps",
  "Portfolios & Personal"
];

const webSolutionPrograms = [
  // Corporate & Business
  {
    id: "corp-website",
    title: "Professional Corporate Website",
    icon: Layout,
    description: "High-performance corporate websites tailored to your brand identity. Focus on speed, SEO, and professional aesthetics.",
    category: "Corporate & Business",
    details: {
      duration: "2-4 Weeks",
      level: "Enterprise",
      format: "Custom Build",
      certificate: "Project Completion Certificate",
      learning: [
        "Brand Identity Integration",
        "SEO Optimization & Analytics",
        "Responsive Architecture",
        "Content Management System (CMS)",
        "Security & SSL Implementation"
      ]
    }
  },
  {
    id: "biz-portal",
    title: "Enterprise Business Portal",
    icon: Server,
    description: "Complex portals for internal or external business operations. Includes user management, document handling, and secure access.",
    category: "Corporate & Business",
    details: {
      duration: "4-8 Weeks",
      level: "Enterprise",
      format: "Custom Build",
      certificate: "Project Completion Certificate",
      learning: [
        "User Role & Permission Systems",
        "Document Management Integration",
        "Third-party API Connectivity",
        "Custom Dashboard Development",
        "Enterprise-grade Security"
      ]
    }
  },
  // E-commerce & Retail
  {
    id: "custom-ecommerce",
    title: "Custom E-commerce Store",
    icon: ShoppingCart,
    description: "Full-featured online stores designed for conversion. Includes inventory management, payment gateways, and order tracking.",
    category: "E-commerce & Retail",
    details: {
      duration: "4-6 Weeks",
      level: "Commercial",
      format: "Custom Build",
      certificate: "Project Completion Certificate",
      learning: [
        "Payment Gateway Integration (Stripe/PayPal)",
        "Inventory & Order Management",
        "Product Catalog & Filtering",
        "Customer Account Systems",
        "Marketing & Discount Tools"
      ]
    }
  },
  {
    id: "marketplace-platform",
    title: "Multi-Vendor Marketplace",
    icon: Layers,
    description: "Scalable platforms for multiple sellers. Includes vendor dashboards, commission management, and complex logistics.",
    category: "E-commerce & Retail",
    details: {
      duration: "8-12 Weeks",
      level: "Enterprise",
      format: "Custom Build",
      certificate: "Project Completion Certificate",
      learning: [
        "Multi-vendor Architecture",
        "Commission & Payout Systems",
        "Vendor Management Dashboards",
        "Review & Rating Systems",
        "Advanced Search & Discovery"
      ]
    }
  },
  // SaaS & Web Apps
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard & UI",
    icon: BarChart3,
    description: "Intuitive and powerful dashboards for SaaS products. Focus on data visualization and user experience.",
    category: "SaaS & Web Apps",
    details: {
      duration: "4-8 Weeks",
      level: "Advanced",
      format: "Custom Build",
      certificate: "Project Completion Certificate",
      learning: [
        "Real-time Data Visualization",
        "Complex State Management",
        "User Onboarding Flows",
        "Subscription Management UI",
        "Performance Monitoring"
      ]
    }
  },
  {
    id: "custom-webapp",
    title: "Custom Web Application",
    icon: Code,
    description: "Tailor-made web applications to solve specific business problems. Built with modern tech stacks like MERN or Next.js.",
    category: "SaaS & Web Apps",
    details: {
      duration: "6-12 Weeks",
      level: "Advanced",
      format: "Custom Build",
      certificate: "Project Completion Certificate",
      learning: [
        "Full Stack Architecture",
        "Database Design & Optimization",
        "Real-time Features (WebSockets)",
        "Automated Testing & QA",
        "Scalable Cloud Deployment"
      ]
    }
  },
  // Portfolios & Personal
  {
    id: "creative-portfolio",
    title: "Creative Portfolio",
    icon: Palette,
    description: "Stunning personal portfolios to showcase your work and skills. Focus on unique design and interactive elements.",
    category: "Portfolios & Personal",
    details: {
      duration: "1-2 Weeks",
      level: "Professional",
      format: "Custom Build",
      certificate: "Project Completion Certificate",
      learning: [
        "Interactive UI/UX Design",
        "Animation & Motion Graphics",
        "Project Showcasing Layouts",
        "Personal Branding Integration",
        "Contact & Lead Generation"
      ]
    }
  },
  {
    id: "personal-brand",
    title: "Personal Branding Site",
    icon: Users,
    description: "Build your online presence with a professional personal brand site. Ideal for speakers, authors, and consultants.",
    category: "Portfolios & Personal",
    details: {
      duration: "2-3 Weeks",
      level: "Professional",
      format: "Custom Build",
      certificate: "Project Completion Certificate",
      learning: [
        "Content Strategy & Blogging",
        "Social Media Integration",
        "Email List Building",
        "Speaker/Author Media Kits",
        "SEO for Personal Names"
      ]
    }
  }
];

const trainingCategories = [
  "Programming Languages",
  "Web Technologies",
  "Database Technologies",
  "Data Science & Analytics",
  "Machine Learning",
  "Artificial Intelligence",
  "Cloud Computing",
  "Embedded Systems",
  "Internet of Things (IoT)",
  "Robotics & Automation"
];

const trainingPrograms = [
  // Programming Languages
  {
    id: "python-training",
    title: "Python Programming",
    icon: Code,
    description: "Master Python from basics to advanced concepts. Learn data structures, algorithms, and object-oriented programming.",
    category: "Programming Languages",
    details: {
      duration: "6 Weeks",
      level: "Beginner to Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Python Syntax and Core Concepts",
        "Data Structures and Algorithms",
        "Object-Oriented Programming (OOP)",
        "File Handling and Exception Management",
        "Introduction to Python Libraries"
      ]
    }
  },
  {
    id: "c-training",
    title: "C Programming",
    icon: Terminal,
    description: "Build a strong foundation in computer science with C. Learn memory management, pointers, and system-level programming.",
    category: "Programming Languages",
    details: {
      duration: "6 Weeks",
      level: "Beginner",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "C Syntax and Data Types",
        "Control Structures and Functions",
        "Pointers and Memory Management",
        "Arrays and Strings",
        "File I/O and Preprocessor Directives"
      ]
    }
  },
  {
    id: "java-training",
    title: "Java Programming",
    icon: Coffee,
    description: "Learn one of the most popular enterprise languages. Master Java's robust features for building scalable applications.",
    category: "Programming Languages",
    details: {
      duration: "8 Weeks",
      level: "Beginner to Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Java Basics and JVM Architecture",
        "Object-Oriented Programming in Java",
        "Exception Handling and Multithreading",
        "Java Collections Framework",
        "Introduction to Spring Boot"
      ]
    }
  },
  // Web Technologies
  {
    id: "html-css-training",
    title: "HTML & CSS Fundamentals",
    icon: Layout,
    description: "The building blocks of the web. Learn to create beautiful, responsive websites from scratch.",
    category: "Web Technologies",
    details: {
      duration: "4 Weeks",
      level: "Beginner",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Semantic HTML5 Tags",
        "CSS3 Styling and Flexbox/Grid",
        "Responsive Web Design",
        "CSS Animations and Transitions",
        "Web Accessibility Standards"
      ]
    }
  },
  {
    id: "javascript-training",
    title: "Modern JavaScript",
    icon: Code,
    description: "Master the language of the web. Learn ES6+ features, asynchronous programming, and DOM manipulation.",
    category: "Web Technologies",
    details: {
      duration: "6 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "ES6+ Syntax and Features",
        "Asynchronous JS (Promises, Async/Await)",
        "DOM Manipulation and Events",
        "Functional Programming Concepts",
        "Working with APIs (Fetch/Axios)"
      ]
    }
  },
  {
    id: "react-training",
    title: "React.js Development",
    icon: Globe,
    description: "Build modern, component-based user interfaces with React. Learn hooks, state management, and routing.",
    category: "Web Technologies",
    details: {
      duration: "8 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "React Components and Props",
        "State Management with Hooks",
        "React Router for Navigation",
        "Context API and Redux Basics",
        "Building and Deploying React Apps"
      ]
    }
  },
  // Database Technologies
  {
    id: "sql-training",
    title: "SQL Fundamentals",
    icon: Database,
    description: "Learn to manage and query relational databases. Master SQL for data analysis and application development.",
    category: "Database Technologies",
    details: {
      duration: "4 Weeks",
      level: "Beginner",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Relational Database Concepts",
        "Writing Complex SQL Queries",
        "Data Normalization and Schema Design",
        "Joins, Subqueries, and Aggregations",
        "Database Indexing and Performance"
      ]
    }
  },
  {
    id: "mysql-training",
    title: "MySQL Administration",
    icon: Database,
    description: "Deep dive into MySQL, the world's most popular open-source database. Learn administration and optimization.",
    category: "Database Technologies",
    details: {
      duration: "6 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "MySQL Installation and Configuration",
        "User Management and Security",
        "Stored Procedures and Triggers",
        "Backup and Recovery Strategies",
        "MySQL Query Optimization"
      ]
    }
  },
  {
    id: "mongodb-training",
    title: "MongoDB & NoSQL",
    icon: Database,
    description: "Master NoSQL databases with MongoDB. Learn document-based storage for modern, scalable applications.",
    category: "Database Technologies",
    details: {
      duration: "6 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "NoSQL vs SQL Architecture",
        "MongoDB CRUD Operations",
        "Aggregation Framework",
        "Data Modeling in MongoDB",
        "Scaling with Sharding and Replication"
      ]
    }
  },
  // Data Science & Analytics
  {
    id: "python-libraries-training",
    title: "Python for Data Science",
    icon: BarChart3,
    description: "Learn the essential libraries for data science: NumPy, Pandas, and Matplotlib.",
    category: "Data Science & Analytics",
    details: {
      duration: "8 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Data Manipulation with Pandas",
        "Numerical Computing with NumPy",
        "Data Visualization with Matplotlib/Seaborn",
        "Exploratory Data Analysis (EDA)",
        "Statistical Analysis with Python"
      ]
    }
  },
  {
    id: "power-bi-training",
    title: "Power BI Analytics",
    icon: TrendingUp,
    description: "Master business intelligence with Power BI. Learn to create stunning dashboards and data stories.",
    category: "Data Science & Analytics",
    details: {
      duration: "6 Weeks",
      level: "Beginner to Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Data Connection and Transformation",
        "DAX (Data Analysis Expressions)",
        "Creating Interactive Dashboards",
        "Power BI Service and Collaboration",
        "Advanced Data Modeling"
      ]
    }
  },
  // Machine Learning
  {
    id: "ml-training",
    title: "Machine Learning Foundations",
    icon: BrainCircuit,
    description: "Master the algorithms that power modern AI. Learn supervised, unsupervised, and reinforcement learning.",
    category: "Machine Learning",
    details: {
      duration: "12 Weeks",
      level: "Advanced",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Linear and Logistic Regression",
        "Decision Trees and Random Forests",
        "Clustering and Dimensionality Reduction",
        "Neural Networks and Deep Learning Basics",
        "Model Deployment and Monitoring"
      ]
    }
  },
  // Artificial Intelligence
  {
    id: "gen-ai-training",
    title: "Generative AI & LLMs",
    icon: Sparkles,
    description: "Learn to build applications with Large Language Models. Master prompt engineering and RAG.",
    category: "Artificial Intelligence",
    details: {
      duration: "8 Weeks",
      level: "Advanced",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Transformer Architecture and LLMs",
        "Prompt Engineering Best Practices",
        "Retrieval-Augmented Generation (RAG)",
        "Fine-tuning Models for Specific Tasks",
        "Building AI Agents with LangChain"
      ]
    }
  },
  {
    id: "ai-agents-training",
    title: "AI Agents & Agentic AI",
    icon: Bot,
    description: "Build autonomous AI agents that can reason and act. Learn the future of AI interaction.",
    category: "Artificial Intelligence",
    details: {
      duration: "8 Weeks",
      level: "Advanced",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Agentic Workflows and Reasoning",
        "Tool Use and Function Calling",
        "Multi-Agent Systems and Collaboration",
        "Memory and State Management in Agents",
        "Deploying Autonomous AI Systems"
      ]
    }
  },
  // Cloud Computing
  {
    id: "aws-training",
    title: "AWS Cloud Practitioner",
    icon: Cloud,
    description: "Master the world's leading cloud platform. Learn AWS core services, security, and architecture.",
    category: "Cloud Computing",
    details: {
      duration: "8 Weeks",
      level: "Beginner to Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "AWS Global Infrastructure",
        "Compute (EC2, Lambda) and Storage (S3)",
        "Networking (VPC) and Security (IAM)",
        "Database Services (RDS, DynamoDB)",
        "Cloud Cost Management and Optimization"
      ]
    }
  },
  {
    id: "azure-training",
    title: "Microsoft Azure Fundamentals",
    icon: Cloud,
    description: "Learn the essentials of Microsoft Azure. Master cloud concepts and Azure core services.",
    category: "Cloud Computing",
    details: {
      duration: "8 Weeks",
      level: "Beginner to Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Azure Architecture and Services",
        "Azure Management and Governance",
        "Security and Compliance in Azure",
        "Azure Virtual Machines and Storage",
        "Introduction to Azure DevOps"
      ]
    }
  },
  {
    id: "gcp-training",
    title: "Google Cloud Platform",
    icon: Cloud,
    description: "Master GCP's data and machine learning capabilities. Learn to build and scale on Google's infrastructure.",
    category: "Cloud Computing",
    details: {
      duration: "8 Weeks",
      level: "Beginner to Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "GCP Resource Hierarchy and IAM",
        "Compute Engine and App Engine",
        "BigQuery and Dataflow for Analytics",
        "Google Kubernetes Engine (GKE)",
        "Cloud Storage and Cloud SQL"
      ]
    }
  },
  // Embedded Systems
  {
    id: "arduino-training",
    title: "Arduino Embedded Systems",
    icon: Microchip,
    description: "Learn to build hardware projects with Arduino. Master electronics and C++ for microcontrollers.",
    category: "Embedded Systems",
    details: {
      duration: "6 Weeks",
      level: "Beginner",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Arduino Hardware and IDE",
        "Digital and Analog I/O",
        "Working with Sensors and Actuators",
        "Serial Communication (I2C, SPI)",
        "Building Interactive Hardware Projects"
      ]
    }
  },
  {
    id: "raspberry-pi-training",
    title: "Raspberry Pi & Linux",
    icon: Cpu,
    description: "Master the powerful Raspberry Pi single-board computer. Learn Linux, Python, and hardware interfacing.",
    category: "Embedded Systems",
    details: {
      duration: "8 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Raspberry Pi Setup and Linux Basics",
        "GPIO Programming with Python",
        "Camera and Multimedia Interfacing",
        "Building a Media Server or Home Lab",
        "Introduction to IoT with Raspberry Pi"
      ]
    }
  },
  // Internet of Things (IoT)
  {
    id: "iot-sensors-training",
    title: "IoT Sensors & Microcontrollers",
    icon: Wifi,
    description: "Learn the hardware side of IoT. Master sensor integration and microcontroller programming.",
    category: "Internet of Things (IoT)",
    details: {
      duration: "8 Weeks",
      level: "Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Types of IoT Sensors and Protocols",
        "ESP32 and ESP8266 Programming",
        "Low Power Design for IoT Devices",
        "Wireless Communication (Wi-Fi, Bluetooth, LoRa)",
        "Data Acquisition and Preprocessing"
      ]
    }
  },
  {
    id: "cloud-iot-training",
    title: "Cloud IoT Integration",
    icon: Cloud,
    description: "Connect your devices to the cloud. Learn to manage IoT data and build remote monitoring systems.",
    category: "Internet of Things (IoT)",
    details: {
      duration: "8 Weeks",
      level: "Advanced",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "MQTT and HTTP Protocols for IoT",
        "Connecting to AWS IoT Core / Azure IoT Hub",
        "Real-time Data Visualization Dashboards",
        "Remote Device Management and OTA Updates",
        "IoT Security and Encryption"
      ]
    }
  },
  // Robotics & Automation
  {
    id: "basic-robotics-training",
    title: "Basic Robotics Foundations",
    icon: CircuitBoard,
    description: "Learn the fundamentals of robotics. Master mechanics, electronics, and control systems.",
    category: "Robotics & Automation",
    details: {
      duration: "8 Weeks",
      level: "Beginner to Intermediate",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "Robotic Mechanics and Kinematics",
        "Motor Control and Drive Systems",
        "Feedback Control and PID Loops",
        "Obstacle Avoidance and Path Planning",
        "Building a Mobile Robot from Scratch"
      ]
    }
  },
  {
    id: "ros-fundamentals-training",
    title: "ROS Fundamentals",
    icon: Settings,
    description: "Master the Robot Operating System (ROS). Learn to build complex robotic software systems.",
    category: "Robotics & Automation",
    details: {
      duration: "10 Weeks",
      level: "Advanced",
      format: "Online & Offline",
      certificate: "Professional Training Certificate",
      learning: [
        "ROS Architecture (Nodes, Topics, Services)",
        "URDF and Robot Modeling",
        "Gazebo Simulation and Visualization",
        "Navigation Stack and SLAM",
        "ROS2 Migration and Best Practices"
      ]
    }
  }
];

const aiAutomationCategories = [
  "Intelligent Workflows",
  "Custom AI Agents",
  "LLM & RAG Solutions",
  "AI Integration"
];

const aiAutomationPrograms = [
  // Intelligent Workflows
  {
    id: "smart-workflows",
    title: "Smart Business Workflows",
    icon: Workflow,
    description: "Automate repetitive tasks and streamline business processes using intelligent logic and automation tools.",
    category: "Intelligent Workflows",
    details: {
      duration: "2-4 Weeks",
      level: "Professional",
      format: "Custom Solution",
      certificate: "Automation Completion Certificate",
      learning: [
        "Business Process Mapping",
        "No-code/Low-code Automation",
        "API-driven Task Integration",
        "Error Handling & Monitoring",
        "Workflow Optimization Strategies"
      ]
    }
  },
  {
    id: "data-automation",
    title: "Automated Data Processing",
    icon: Database,
    description: "Intelligent data extraction, transformation, and loading (ETL) pipelines powered by AI.",
    category: "Intelligent Workflows",
    details: {
      duration: "3-5 Weeks",
      level: "Advanced",
      format: "Custom Solution",
      certificate: "Data Automation Certificate",
      learning: [
        "Automated Data Extraction",
        "AI-powered Data Cleaning",
        "Real-time Pipeline Monitoring",
        "Database Sync & Integration",
        "Custom ETL Logic Development"
      ]
    }
  },
  // Custom AI Agents
  {
    id: "customer-support-agent",
    title: "AI Customer Support Agents",
    icon: Bot,
    description: "Tailored AI assistants trained on your specific business data to provide 24/7 intelligent support.",
    category: "Custom AI Agents",
    details: {
      duration: "3-6 Weeks",
      level: "Enterprise",
      format: "Custom Solution",
      certificate: "AI Agent Deployment Award",
      learning: [
        "Knowledge Base Integration",
        "Conversational UI/UX Design",
        "Multi-channel Deployment",
        "Human-in-the-loop Systems",
        "Sentiment Analysis & Routing"
      ]
    }
  },
  {
    id: "sales-assistant-agent",
    title: "AI Sales & Lead Assistants",
    icon: Users,
    description: "Intelligent agents designed to qualify leads, book meetings, and assist your sales team.",
    category: "Custom AI Agents",
    details: {
      duration: "4-6 Weeks",
      level: "Professional",
      format: "Custom Solution",
      certificate: "Sales AI Specialist Award",
      learning: [
        "Lead Scoring Algorithms",
        "Automated Meeting Scheduling",
        "CRM Integration (HubSpot/Salesforce)",
        "Personalized Outreach Logic",
        "Conversion Tracking & Analytics"
      ]
    }
  },
  // LLM & RAG Solutions
  {
    id: "rag-implementation",
    title: "Enterprise RAG Solutions",
    icon: Layers,
    description: "Retrieval-Augmented Generation systems that allow LLMs to securely access and query your private data.",
    category: "LLM & RAG Solutions",
    details: {
      duration: "4-8 Weeks",
      level: "Advanced",
      format: "Custom Solution",
      certificate: "RAG Implementation Expert",
      learning: [
        "Vector Database Setup (Pinecone/Chroma)",
        "Document Chunking & Embedding",
        "Semantic Search Optimization",
        "LLM Context Management",
        "Data Privacy & Security Protocols"
      ]
    }
  },
  {
    id: "custom-llm-tuning",
    title: "Custom LLM Fine-tuning",
    icon: Cpu,
    description: "Specialized fine-tuning of Large Language Models for specific industry domains and tasks.",
    category: "LLM & RAG Solutions",
    details: {
      duration: "6-10 Weeks",
      level: "Expert",
      format: "Custom Solution",
      certificate: "LLM Specialist Award",
      learning: [
        "Dataset Preparation & Cleaning",
        "Model Selection & Evaluation",
        "Fine-tuning Methodologies (LoRA/QLoRA)",
        "Performance Benchmarking",
        "Inference Optimization"
      ]
    }
  },
  // AI Integration
  {
    id: "ai-api-integration",
    title: "Seamless AI API Integration",
    icon: Link,
    description: "Integrate powerful AI capabilities (OpenAI, Anthropic, Gemini) directly into your existing applications.",
    category: "AI Integration",
    details: {
      duration: "2-4 Weeks",
      level: "Professional",
      format: "Custom Solution",
      certificate: "AI Integration Certificate",
      learning: [
        "API Key Management & Security",
        "Prompt Engineering for APIs",
        "Streaming Response Handling",
        "Cost Monitoring & Optimization",
        "Fallback & Error Strategies"
      ]
    }
  },
  {
    id: "ai-vision-integration",
    title: "Computer Vision Integration",
    icon: Activity,
    description: "Add intelligent image and video analysis capabilities to your digital products.",
    category: "AI Integration",
    details: {
      duration: "4-6 Weeks",
      level: "Advanced",
      format: "Custom Solution",
      certificate: "AI Vision Specialist Award",
      learning: [
        "Object Detection & Recognition",
        "Image Classification Models",
        "Video Stream Analysis",
        "OCR & Document Processing",
        "Edge Deployment Strategies"
      ]
    }
  }
];

const workshopCategories = [
  "Software",
  "Hardware",
  "Career & Placement",
  "Industry & Innovation"
];

const workshopPrograms = [
  {
    id: "js-mastery-workshop",
    title: "JavaScript Mastery",
    icon: Code,
    description: "Master the language of the web. From basics to advanced concepts like closures, async/await, and DOM manipulation.",
    category: "Software",
    details: {
      duration: "2 Days",
      level: "Intermediate",
      format: "Intensive Bootcamp",
      certificate: "Workshop Mastery Certificate",
      learning: [
        "ES6+ Features (Destructuring, Spread, Modules)",
        "Asynchronous JS (Promises, Async/Await, Event Loop)",
        "DOM Manipulation & Event Handling",
        "Closures, Scopes & Hoisting",
        "Functional Programming Patterns"
      ]
    }
  },
  {
    id: "html-css-workshop",
    title: "HTML & CSS Training",
    icon: Layout,
    description: "Master the building blocks of the web. Learn to create beautiful, responsive, and modern websites from scratch.",
    category: "Software",
    details: {
      duration: "3 Days",
      level: "Beginner",
      format: "Hands-on Workshop",
      certificate: "Web Foundation Certificate",
      learning: [
        "Semantic HTML5 Structure",
        "Modern CSS Layouts (Flexbox & Grid)",
        "Responsive Web Design (Mobile First)",
        "CSS Animations & Transitions",
        "Web Accessibility Best Practices"
      ]
    }
  },
  {
    id: "sql-workshop",
    title: "SQL & Database Mastery",
    icon: Database,
    description: "Master the language of data. Learn to design, query, and manage relational databases effectively.",
    category: "Software",
    details: {
      duration: "2 Days",
      level: "Beginner to Intermediate",
      format: "Interactive Session",
      certificate: "Database Specialist Certificate",
      learning: [
        "Relational Database Design (ERD)",
        "Advanced SQL Queries (Joins, Subqueries)",
        "Data Aggregation & Grouping",
        "Database Optimization & Indexing",
        "ACID Properties & Transactions"
      ]
    }
  },
  {
    id: "full-stack-workshop",
    title: "Full Stack Development",
    icon: Layers,
    description: "Bridge the gap between frontend and backend. Learn to build complete, end-to-end web applications.",
    category: "Software",
    details: {
      duration: "2 Weeks",
      level: "Intermediate",
      format: "Project-based Bootcamp",
      certificate: "Full Stack Developer Award",
      learning: [
        "Frontend Frameworks (React/Next.js)",
        "Backend API Development (Node.js/Express)",
        "Authentication & Authorization",
        "Database Integration (SQL/NoSQL)",
        "Deployment & CI/CD Pipelines"
      ]
    }
  },
  {
    id: "app-dev-workshop",
    title: "App Development",
    icon: Smartphone,
    description: "Build powerful mobile applications for iOS and Android using modern cross-platform frameworks.",
    category: "Software",
    details: {
      duration: "1 Week",
      level: "Intermediate",
      format: "Hands-on Bootcamp",
      certificate: "App Developer Certificate",
      learning: [
        "Cross-platform Development (React Native/Flutter)",
        "Mobile UI/UX Principles",
        "Native Device Feature Integration",
        "State Management in Mobile Apps",
        "App Store & Play Store Deployment"
      ]
    }
  },
  {
    id: "git-github-workshop",
    title: "Git & GitHub Training",
    icon: FolderGit2,
    description: "Master version control and collaborative development workflows for modern software teams.",
    category: "Software",
    details: {
      duration: "1 Day",
      level: "Beginner",
      format: "Interactive Session",
      certificate: "Git Pro Certificate",
      learning: [
        "Git Core Concepts (Init, Add, Commit)",
        "Branching & Merging Strategies",
        "Resolving Merge Conflicts",
        "GitHub Collaboration (PRs, Issues, Actions)",
        "Open Source Contribution Workflow"
      ]
    }
  },
  {
    id: "ai-ml-workshop",
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    description: "Master the fundamentals of Artificial Intelligence and Machine Learning. Learn to build predictive models and neural networks.",
    category: "Software",
    details: {
      duration: "3 Days",
      level: "Intermediate",
      format: "Innovation Sprint",
      certificate: "AI & ML Specialist Certificate",
      learning: [
        "Supervised & Unsupervised Learning",
        "Neural Networks & Deep Learning",
        "Model Evaluation & Optimization",
        "Computer Vision Foundations",
        "Natural Language Processing Basics"
      ]
    }
  },
  {
    id: "gen-ai-workshop",
    title: "Generative AI",
    icon: Sparkles,
    description: "Explore the cutting edge of AI. Learn to work with Large Language Models, Prompt Engineering, and AI content generation.",
    category: "Software",
    details: {
      duration: "2 Days",
      level: "Intermediate to Advanced",
      format: "Hands-on Workshop",
      certificate: "Generative AI Expert",
      learning: [
        "LLM Architecture & Fine-tuning",
        "Advanced Prompt Engineering",
        "AI Image & Video Generation",
        "Building RAG (Retrieval-Augmented Generation) Systems",
        "Ethical AI & Future Trends"
      ]
    }
  },
  {
    id: "data-science-workshop",
    title: "Data Science",
    icon: BarChart3,
    description: "Master the data science lifecycle. Learn to extract meaningful insights from complex datasets.",
    category: "Software",
    details: {
      duration: "1 Week",
      level: "Intermediate",
      format: "Data Bootcamp",
      certificate: "Data Science Professional",
      learning: [
        "Exploratory Data Analysis (EDA)",
        "Statistical Inference & Hypothesis Testing",
        "Data Wrangling & Feature Engineering",
        "Predictive Analytics & Forecasting",
        "Data Storytelling & Communication"
      ]
    }
  },
  {
    id: "python-workshop",
    title: "Python for Data & Automation",
    icon: Terminal,
    description: "Master Python programming for technical applications. Focus on data manipulation, automation, and scripting.",
    category: "Software",
    details: {
      duration: "3 Days",
      level: "Beginner to Intermediate",
      format: "Interactive Session",
      certificate: "Python Technical Certificate",
      learning: [
        "Advanced Python Data Structures",
        "Automation Scripting & Web Scraping",
        "Numerical Computing with NumPy",
        "Data Manipulation with Pandas",
        "API Integration with Python"
      ]
    }
  },
  {
    id: "power-bi-workshop",
    title: "Power BI Mastery",
    icon: TrendingUp,
    description: "Transform raw data into stunning interactive dashboards. Master business intelligence and data visualization.",
    category: "Software",
    details: {
      duration: "2 Days",
      level: "Beginner to Intermediate",
      format: "Visual Workshop",
      certificate: "Power BI Specialist",
      learning: [
        "Data Modeling & Relationships",
        "DAX (Data Analysis Expressions) Basics",
        "Creating Interactive Dashboards",
        "Power Query for Data Transformation",
        "Publishing & Sharing BI Reports"
      ]
    }
  },
  {
    id: "embedded-systems-workshop",
    title: "Embedded Systems Mastery",
    icon: Microchip,
    description: "Deep dive into embedded systems design and firmware development. Focus on low-level programming and hardware interfacing.",
    category: "Hardware",
    details: {
      duration: "1 Week",
      level: "Intermediate",
      format: "Hardware Lab",
      certificate: "Embedded Systems Specialist",
      learning: [
        "Microcontroller Architecture (ARM/AVR)",
        "Bare-metal C Programming",
        "Peripheral Interfacing (UART, SPI, I2C)",
        "Real-time Operating Systems (RTOS) Basics",
        "Hardware Debugging & Oscilloscope Use"
      ]
    }
  },
  {
    id: "iot-workshop",
    title: "IoT Solutions & Connectivity",
    icon: Wifi,
    description: "Learn to build end-to-end IoT solutions. Master sensor integration, wireless protocols, and cloud connectivity.",
    category: "Hardware",
    details: {
      duration: "1 Week",
      level: "Intermediate",
      format: "Hardware Lab",
      certificate: "IoT Solutions Specialist",
      learning: [
        "ESP32 & NodeMCU Programming",
        "IoT Protocols (MQTT, HTTP, CoAP)",
        "Cloud Integration (AWS IoT/Azure IoT)",
        "Sensor Data Acquisition & Preprocessing",
        "Building Real-time IoT Dashboards"
      ]
    }
  },
  {
    id: "robotics-workshop",
    title: "Robotics & Automation",
    icon: Bot,
    description: "Master the fundamentals of robotics. Learn about kinematics, control systems, and autonomous navigation.",
    category: "Hardware",
    details: {
      duration: "1 Week",
      level: "Intermediate",
      format: "Hardware Lab",
      certificate: "Robotics & Automation Specialist",
      learning: [
        "Robotic Kinematics & Dynamics",
        "Motor Control & PID Loops",
        "Autonomous Navigation & Path Planning",
        "Sensor Fusion (IMU, Ultrasonic, Lidar)",
        "Building a Smart Autonomous Mobile Robot"
      ]
    }
  },
  {
    id: "vlsi-workshop",
    title: "VLSI Design & Verification",
    icon: Cpu,
    description: "Master the art of Very Large Scale Integration. Learn digital logic design, Verilog/VHDL, and chip fabrication processes.",
    category: "Hardware",
    details: {
      duration: "2 Weeks",
      level: "Advanced",
      format: "Technical Workshop",
      certificate: "VLSI Design Professional",
      learning: [
        "Digital System Design & Logic Synthesis",
        "Verilog HDL Programming & Simulation",
        "CMOS Technology & Layout Design",
        "ASIC & FPGA Implementation Flow",
        "Verification Methodologies (UVM/OVM)"
      ]
    }
  },
  {
    id: "pcb-design-workshop",
    title: "PCB Design & Fabrication",
    icon: CircuitBoard,
    description: "Learn to design professional-grade Printed Circuit Boards. Master schematic capture, board layout, and manufacturing files.",
    category: "Hardware",
    details: {
      duration: "1 Week",
      level: "Intermediate",
      format: "Hands-on Lab",
      certificate: "PCB Design Specialist",
      learning: [
        "Schematic Capture & Component Library Creation",
        "Multi-layer PCB Layout Techniques",
        "Signal Integrity & EMI/EMC Considerations",
        "Design for Manufacturing (DFM) Rules",
        "Generating Gerber Files & Fabrication Process"
      ]
    }
  },
  {
    id: "cyber-cloud-workshop",
    title: "Cybersecurity & Cloud Certifications",
    icon: ShieldCheck,
    description: "Secure digital assets and master cloud infrastructure with professional certification tracks.",
    category: "Software",
    details: {
      duration: "2 Weeks",
      level: "Advanced",
      format: "Certification Prep",
      certificate: "Cloud Security Professional",
      learning: [
        "Network Security & Ethical Hacking",
        "Cloud Infrastructure Management (AWS/Azure)",
        "Identity & Access Management (IAM)",
        "Threat Detection & Incident Response",
        "Compliance & Security Best Practices"
      ]
    }
  },
  {
    id: "portfolio-linkedin-workshop",
    title: "Portfolio Building & LinkedIn Optimization",
    icon: Users,
    description: "Craft a compelling professional presence and showcase your projects to top recruiters.",
    category: "Career & Placement",
    details: {
      duration: "2 Days",
      level: "All Levels",
      format: "Career Bootcamp",
      certificate: "Career Readiness Certificate",
      learning: [
        "Building a High-Impact Project Portfolio",
        "LinkedIn Profile SEO & Networking",
        "Personal Branding for Tech Professionals",
        "Showcasing Skills on GitHub",
        "Content Strategy for Professional Growth"
      ]
    }
  },
  {
    id: "ats-resume-placement-workshop",
    title: "ATS-Friendly Resume & Placement Support",
    icon: ClipboardList,
    description: "Strategic career guidance, resume optimization, and interview preparation sessions.",
    category: "Career & Placement",
    details: {
      duration: "3 Days",
      level: "All Levels",
      format: "Placement Drive",
      certificate: "Placement Ready Award",
      learning: [
        "ATS-Optimized Resume Crafting",
        "Technical Interview Preparation",
        "Mock Interviews & Feedback",
        "Job Search Strategies & Referrals",
        "Salary Negotiation Techniques"
      ]
    }
  },
  {
    id: "hr-interview-workshop",
    title: "HR Interview Questions & Preparation",
    icon: Users,
    description: "Master the art of behavioral interviews. Learn to answer common and tricky HR questions with confidence.",
    category: "Career & Placement",
    details: {
      duration: "1 Day",
      level: "All Levels",
      format: "Interactive Workshop",
      certificate: "HR Interview Readiness Certificate",
      learning: [
        "Answering 'Tell me about yourself' effectively",
        "Handling behavioral questions (STAR method)",
        "Discussing strengths and weaknesses",
        "Salary negotiation and HR expectations",
        "Body language and professional etiquette"
      ]
    }
  },
  {
    id: "technical-interview-prep-workshop",
    title: "Technical Interview Preparation",
    icon: Code,
    description: "Deep dive into technical interview patterns. Master DSA, system design, and role-specific technical assessments.",
    category: "Career & Placement",
    details: {
      duration: "3 Days",
      level: "Intermediate",
      format: "Intensive Training",
      certificate: "Technical Interview Mastery",
      learning: [
        "Data Structures & Algorithms (DSA) Patterns",
        "System Design Fundamentals",
        "Live Coding Challenge Strategies",
        "Role-specific Technical Deep Dives",
        "Explaining Complex Logic Clearly"
      ]
    }
  },
  {
    id: "interview-tips-workshop",
    title: "Tips to Crack Interviews",
    icon: Zap,
    description: "Insider strategies and psychological tips to stand out and succeed in high-pressure interview environments.",
    category: "Career & Placement",
    details: {
      duration: "1 Day",
      level: "All Levels",
      format: "Masterclass",
      certificate: "Interview Strategy Certificate",
      learning: [
        "Researching the company and role",
        "Asking insightful questions to interviewers",
        "Managing interview anxiety and stress",
        "First impressions and lasting impact",
        "Post-interview follow-up strategies"
      ]
    }
  },
  {
    id: "communication-training-workshop",
    title: "Communication Training",
    icon: Coffee,
    description: "Enhance your verbal and non-verbal communication skills for professional success and effective networking.",
    category: "Career & Placement",
    details: {
      duration: "2 Days",
      level: "All Levels",
      format: "Interactive Bootcamp",
      certificate: "Professional Communication Award",
      learning: [
        "Effective Verbal Communication & Clarity",
        "Active Listening & Empathy in Tech",
        "Public Speaking & Presentation Skills",
        "Professional Email & Slack Etiquette",
        "Conflict Resolution & Team Collaboration"
      ]
    }
  },
  {
    id: "internship-hands-on-workshop",
    title: "Internships & Hands-on Training",
    icon: GraduationCap,
    description: "Practical industry experience through guided internship programs and hands-on technical training.",
    category: "Industry & Innovation",
    details: {
      duration: "4-8 Weeks",
      level: "Beginner to Intermediate",
      format: "Industry Immersion",
      certificate: "Industry Experience Certificate",
      learning: [
        "Working on Real-world Industry Projects",
        "Agile & Scrum Methodologies",
        "Professional Communication & Soft Skills",
        "Mentorship from Industry Experts",
        "Project Lifecycle Management"
      ]
    }
  },
  {
    id: "fdp-bootcamps-workshop",
    title: "FDPs, Bootcamps & Workshops",
    icon: Coffee,
    description: "Intensive faculty development programs and rapid-upskilling bootcamps for all levels.",
    category: "Industry & Innovation",
    details: {
      duration: "3-5 Days",
      level: "Professional",
      format: "Faculty/Student Bootcamp",
      certificate: "Professional Development Award",
      learning: [
        "Advanced Pedagogical Techniques",
        "Emerging Tech Trends & Integration",
        "Hands-on Lab Session Management",
        "Curriculum Design & Alignment",
        "Research & Innovation in Tech"
      ]
    }
  },
  {
    id: "live-projects-incubation-workshop",
    title: "Live Projects & Startup Incubation",
    icon: Rocket,
    description: "Turn ideas into reality with real-world projects and entrepreneurial support.",
    category: "Industry & Innovation",
    details: {
      duration: "12 Weeks",
      level: "Advanced",
      format: "Startup Lab",
      certificate: "Innovation & Startup Award",
      learning: [
        "Product Ideation & Validation",
        "Building a Minimum Viable Product (MVP)",
        "Business Model Canvas & Pitching",
        "Fundraising & Scaling Strategies",
        "Legal & Operational Foundations"
      ]
    }
  }
];

const categories = [
  "Software & Development",
  "Electronics & Hardware",
  "Automation Technologies",
  "Business & Management"
];

const hackathonCategories = [
  "Web Development",
  "Full Stack",
  "AI & Data Science",
  "Mobile App Development",
  "Cybersecurity"
];

const projectCategories = [
  "Software Development",
  "Hardware & IoT",
  "AI & Data Science",
  "Enterprise Solutions"
];

const serviceSegments = [
  {
    id: "web-solutions",
    title: "Web Solutions",
    subtitle: "Crafting digital experiences that drive growth",
    icon: Globe,
    color: "text-brand-red",
    bg: "bg-brand-red/5",
    isWebSolution: true,
    items: webSolutionPrograms
  },
  {
    id: "ai-automations",
    title: "AI Automations",
    subtitle: "Intelligent solutions for the modern enterprise",
    icon: Bot,
    color: "text-brand-red",
    bg: "bg-brand-red/5",
    isAIAutomation: true,
    items: aiAutomationPrograms
  },
  {
    id: "workshops",
    title: "Workshops",
    subtitle: "Hands-on technical sessions for rapid upskilling",
    icon: Code,
    color: "text-brand-red",
    bg: "bg-brand-red/5",
    isWorkshop: true,
    items: workshopPrograms
  },
  {
    id: "trainings",
    title: "Trainings",
    subtitle: "Comprehensive programs for career transformation",
    icon: GraduationCap,
    color: "text-brand-red",
    bg: "bg-brand-red/5",
    isTraining: true,
    items: trainingPrograms
  },
  {
    id: "internships",
    title: "Internships",
    subtitle: "Bridge the gap between learning and working",
    icon: Briefcase,
    color: "text-brand-red",
    bg: "bg-brand-red/5",
    isInternship: true,
    items: internshipPrograms
  },
  {
    id: "hackathons",
    title: "Hackathons",
    subtitle: "Innovation sprints to test your limits",
    icon: Trophy,
    color: "text-brand-red",
    bg: "bg-brand-red/5",
    isHackathon: true,
    items: hackathonPrograms
  },
  {
    id: "projects",
    title: "Projects",
    subtitle: "Build your legacy with tangible results across all domains",
    icon: FolderGit2,
    color: "text-brand-red",
    bg: "bg-brand-red/5",
    isProject: true,
    items: projectPrograms
  }
];

export default function Services() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeHackathonCategory, setActiveHackathonCategory] = useState(hackathonCategories[0]);
  const [activeTrainingCategory, setActiveTrainingCategory] = useState(trainingCategories[0]);
  const [activeWebSolutionCategory, setActiveWebSolutionCategory] = useState(webSolutionCategories[0]);
  const [activeWorkshopCategory, setActiveWorkshopCategory] = useState(workshopCategories[0]);
  const [activeAIAutomationCategory, setActiveAIAutomationCategory] = useState(aiAutomationCategories[0]);
  const [activeProjectCategory, setActiveProjectCategory] = useState(projectCategories[0]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-[95%] mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-sm font-semibold mb-6"
        >
          OUR SERVICES
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-display font-bold mb-6 text-slate-900"
        >
          Comprehensive <span className="text-brand-red">Solutions</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-600 max-w-2xl mx-auto"
        >
          From professional web development to career-transforming training, we provide the tools and expertise you need to succeed.
        </motion.p>
      </div>

      {/* Service Segments */}
      <div className="max-w-[95%] mx-auto px-6 space-y-24">
        {serviceSegments.map((segment, index) => (
          <motion.div
            key={segment.id}
            id={segment.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-4">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-14 h-14 rounded-2xl ${segment.bg} flex items-center justify-center ${segment.color}`}
                >
                  <segment.icon size={28} />
                </motion.div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-slate-900">{segment.title}</h2>
                  <p className="text-slate-500 mt-1">{segment.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Special handling for Web Solutions, Internships, Hackathons, Trainings, Workshops, AI Automations and Projects */}
            {segment.isWebSolution || segment.isInternship || segment.isHackathon || segment.isTraining || segment.isWorkshop || segment.isAIAutomation || segment.isProject ? (
              <div className="space-y-12">
                {/* Category Navigation */}
                <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
                  {(segment.isWebSolution ? webSolutionCategories : segment.isInternship ? categories : segment.isHackathon ? hackathonCategories : segment.isTraining ? trainingCategories : segment.isWorkshop ? workshopCategories : segment.isAIAutomation ? aiAutomationCategories : projectCategories).map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        if (segment.isWebSolution) setActiveWebSolutionCategory(category);
                        else if (segment.isInternship) setActiveCategory(category);
                        else if (segment.isHackathon) setActiveHackathonCategory(category);
                        else if (segment.isTraining) setActiveTrainingCategory(category);
                        else if (segment.isWorkshop) setActiveWorkshopCategory(category);
                        else if (segment.isAIAutomation) setActiveAIAutomationCategory(category);
                        else setActiveProjectCategory(category);
                      }}
                      className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                        (segment.isWebSolution ? activeWebSolutionCategory : segment.isInternship ? activeCategory : segment.isHackathon ? activeHackathonCategory : segment.isTraining ? activeTrainingCategory : segment.isWorkshop ? activeWorkshopCategory : segment.isAIAutomation ? activeAIAutomationCategory : activeProjectCategory) === category 
                        ? "bg-brand-red text-white border-brand-red shadow-lg shadow-brand-red/20" 
                        : "bg-white text-slate-600 border-slate-200 hover:border-brand-red/40 hover:text-brand-red"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Grid Items */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode="wait">
                    {segment.items
                      .filter((p: any) => p.category === (segment.isWebSolution ? activeWebSolutionCategory : segment.isInternship ? activeCategory : segment.isHackathon ? activeHackathonCategory : segment.isTraining ? activeTrainingCategory : segment.isWorkshop ? activeWorkshopCategory : segment.isAIAutomation ? activeAIAutomationCategory : activeProjectCategory))
                      .map((program: any, i: number) => (
                        <motion.div
                          key={program.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ y: -5 }}
                          className="group relative bg-white rounded-xl border border-slate-100 p-6 hover:border-brand-red/20 hover:shadow-xl transition-all duration-500"
                        >
                          <div className="w-12 h-12 rounded-xl bg-brand-red/5 flex items-center justify-center text-brand-red mb-5 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                            <program.icon size={24} />
                          </div>
                          
                          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-red transition-colors">
                            {program.title}
                          </h3>
                          
                          <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-2">
                            {program.description}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                            <button 
                              onClick={() => setSelectedProgram(program)}
                              className="text-brand-red text-sm font-bold flex items-center gap-1.5 group/link hover:underline"
                            >
                              Learn More <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                              <CheckCircle2 size={10} className="text-brand-red" />
                              {segment.isInternship ? "Live Project" : segment.isAIAutomation ? "AI Solution" : segment.isWebSolution ? "Web Solution" : segment.isWorkshop ? "Workshop" : segment.isTraining ? "Training" : segment.isProject ? "Project" : "Competition"}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>

                {/* Internship FAQ Section (Only for internships) */}
                {segment.isInternship && (
                  <div className="pt-12 border-t border-slate-50">
                    <div className="text-center mb-8">
                      <h4 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-2">Frequently Asked Questions</h4>
                      <p className="text-slate-500 text-xs">Everything you need to know about our internship programs</p>
                    </div>
                    <InfiniteMovingCards
                      items={internshipFAQs}
                      direction="left"
                      speed="normal"
                      className="max-w-full"
                    />
                  </div>
                )}
              </div>
            ) : (
              /* Standard Service Items Grid */
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {segment.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: i * 0.1 }
                    }}
                    viewport={{ once: true }}
                    whileHover="hover"
                    variants={{
                      hover: { y: -5 }
                    }}
                    className="group p-6 rounded-xl bg-white border border-slate-100 hover:border-brand-red/20 hover:shadow-lg transition-all cursor-default"
                  >
                    <div className={`w-10 h-10 rounded-lg ${segment.bg} flex items-center justify-center ${segment.color} mb-4`}>
                      <motion.div
                        variants={{
                          hover: { rotate: 360 }
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <item.icon size={20} />
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-brand-red p-8 text-white relative">
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <selectedProgram.icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-display font-bold">{selectedProgram.title}</h2>
                    <p className="text-white/70 text-sm font-medium">{selectedProgram.category}</p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-10 max-h-[70vh] overflow-y-auto no-scrollbar">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Info size={16} className="text-brand-red" />
                        {hackathonCategories.includes(selectedProgram.category) ? "Hackathon Overview" : trainingCategories.includes(selectedProgram.category) ? "Program Overview" : webSolutionCategories.includes(selectedProgram.category) ? "Solution Overview" : workshopCategories.includes(selectedProgram.category) ? "Workshop Overview" : aiAutomationCategories.includes(selectedProgram.category) ? "Automation Overview" : "Course Description"}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {selectedProgram.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-brand-red" />
                        {hackathonCategories.includes(selectedProgram.category) ? "Challenge Objectives" : trainingCategories.includes(selectedProgram.category) ? "Curriculum Highlights" : webSolutionCategories.includes(selectedProgram.category) ? "Key Features & Deliverables" : workshopCategories.includes(selectedProgram.category) ? "Workshop Highlights" : aiAutomationCategories.includes(selectedProgram.category) ? "Key Features & Capabilities" : "What You'll Learn"}
                      </h4>
                      <ul className="space-y-3">
                        {selectedProgram.details.learning.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {!webSolutionCategories.includes(selectedProgram.category) && !projectCategories.includes(selectedProgram.category) && (
                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <h4 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-2">
                          {hackathonCategories.includes(selectedProgram.category) ? "Hackathon Details" : trainingCategories.includes(selectedProgram.category) ? "Training Details" : workshopCategories.includes(selectedProgram.category) ? "Workshop Details" : aiAutomationCategories.includes(selectedProgram.category) ? "Automation Details" : "Course Details"}
                        </h4>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-1">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Duration</p>
                            <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                              <Calendar size={14} className="text-brand-red" />
                              {selectedProgram.details.duration}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Level</p>
                            <p className="text-sm font-bold text-slate-900">{selectedProgram.details.level}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Format</p>
                            <p className="text-sm font-bold text-slate-900">{selectedProgram.details.format}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Certificate</p>
                            <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                              <Award size={14} className="text-brand-red" />
                              {selectedProgram.details.certificate}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <button 
                      onClick={() => enquireNow(selectedProgram.title, 'service')}
                      className="w-full bg-brand-red text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-red/20 hover:bg-brand-red/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      Enquire Now <WhatsAppIcon size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Custom Solution CTA */}
      <div className="max-w-[95%] mx-auto px-6 mt-32">
        <div className="bg-brand-red rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-white/90 text-lg mb-10">
              We understand that every challenge is unique. Reach out to us for specialized requests, custom development, or tailored training programs.
            </p>
            <button 
              onClick={() => navigate("/contact")}
              className="bg-white text-brand-red hover:bg-white/90 font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center gap-2"
            >
              Contact Us <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
