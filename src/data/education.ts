import type { Education, Certification } from '../types';

export const education: Education[] = [
  {
    id: "mca-ssit",
    institution: "Sri Siddhartha Institute of Technology, Tumkur",
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Applications",
    period: "2023 – 2024",
    location: "Tumkur, Karnataka",
    coursework: [
      "Advanced Programming",
      "Software Engineering",
      "Machine Learning",
      "System Architecture",
    ],
  },
  {
    id: "bca-seshadripuram",
    institution: "Seshadripuram Degree College, Tumakuru",
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Applications",
    period: "2019 – 2022",
    location: "Tumakuru, Karnataka",
    coursework: [
      "Programming",
      "Data Structures",
      "DBMS",
      "Operating Systems",
      "Web Technologies",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-java-fullstack",
    title: "Java Full Stack Development",
    issuer: "Besant Technologies",
    year: "2023",
    status: "Certified",
    statusColor: "#34D399",
    chips: ["Java", "Spring Boot", "Full Stack", "REST APIs"],
  },
  {
    id: "cert-azure-openai",
    title: "Azure OpenAI Service",
    issuer: "Microsoft",
    year: "2024",
    status: "Completed",
    statusColor: "#38BDF8",
    chips: ["Microsoft", "Azure", "Cloud", "OpenAI"],
  },
  {
    id: "cert-django",
    title: "Django Web Development",
    issuer: "Online Course",
    year: "2023",
    status: "Completed",
    statusColor: "#A78BFA",
    chips: ["Python", "Django", "Web Development", "Backend"],
  },
  {
    id: "cert-sql-dbms",
    title: "SQL & DBMS",
    issuer: "Professional Certificate",
    year: "2023",
    status: "Certified",
    statusColor: "#F59E0B",
    chips: ["SQL", "DBMS", "Database Design", "Queries"],
  },
];
