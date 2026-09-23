import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "sap-management",
    title: "SAP Sales and Inventory Management System",
    category: "SAP / Enterprise Systems",
    categoryColor: "#38BDF8",
    description:
      "Enterprise sales and inventory management implementation using SAP SD and SAP MM modules to streamline supply chain and sales fulfillment.",
    details: [
      "Configured end-to-end Order-to-Cash and Procure-to-Pay processes",
      "Created and maintained customer, vendor, and material master data",
      "Integrated SD and MM for automated inventory updates and goods receipt workflows",
      "Automated sales order processing, delivery, and billing workflows",
      "Utilized SAP standard reports to reduce manual processing and improve inventory accuracy",
    ],
    stack: ["SAP SD", "SAP MM", "SAP S/4HANA", "Master Data", "Order-to-Cash", "Procure-to-Pay"],
    github: null,
    liveDemo: null,
    featured: true,
    date: "January 2024",
  },
  {
    id: "asthma-prediction",
    title: "Asthma Prediction Web Application",
    category: "Machine Learning / Django",
    categoryColor: "#A78BFA",
    description:
      "ML-integrated Django web application for asthma risk prediction and real-time predictive reporting, validated through published academic research.",
    details: [
      "Designed an ML-integrated Django web application with responsive UI",
      "Integrated trained Machine Learning models with a web frontend",
      "Provided real-time predictive analytics and risk scoring",
      "Generated user-friendly health risk reports for assessments",
      "Research published in IRJMETS (International Research Journal of Modernization in Engineering Technology and Science)",
    ],
    stack: ["Python", "Django", "Machine Learning", "Predictive Analytics", "IRJMETS"],
    github: null,
    liveDemo: null,
    featured: true,
    date: "2023",
  },
  {
    id: "cyber-cafe",
    title: "Cyber Cafe Management System",
    category: "Web Application",
    categoryColor: "#22D3EE",
    description:
      "Responsive web application engineered for managing cyber cafe operations, real-time computer session monitoring, and automated billing workflows.",
    details: [
      "Implemented comprehensive customer database management and dynamic search functionality",
      "Automated billing system calculated dynamically based on session durations",
      "Engineered real-time session monitoring with interactive terminal booking status",
      "Built client-side input validation and error handling for reliable record updates",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Session Management", "Client Validation"],
    github: null,
    liveDemo: null,
    featured: true,
    date: "August 2023",
  },
  {
    id: "flight-management",
    title: "Flight Management System",
    category: "Desktop / Database Application",
    categoryColor: "#34D399",
    description:
      "Flight scheduling and passenger reservation system featuring transactional booking management and real-time flight status tracking.",
    details: [
      "Engineered flight scheduling and passenger reservation management modules",
      "Implemented real-time flight status updates and booking lifecycle management",
      "Designed SQL Server backend architecture with ACID transaction processing",
      "Built comprehensive input validation and robust error handling routines",
    ],
    stack: ["Visual Basic", ".NET", "SQL Server", "Transaction Processing", "Database Design"],
    github: null,
    liveDemo: null,
    featured: true,
    date: "May 2021",
  },
];
