import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: "programming-languages",
    label: "Programming Languages",
    icon: "Code",
    color: "#A78BFA",
    skills: ["Python", "Java", "C", "C++", "SQL"],
  },
  {
    id: "backend-technologies",
    label: "Backend Technologies",
    icon: "Server",
    color: "#22D3EE",
    skills: ["Django", "Spring Boot", "REST APIs"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "Monitor",
    color: "#F59E0B",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "Database",
    color: "#34D399",
    skills: ["MySQL", "MongoDB", "SQL Server", "Oracle"],
  },
  {
    id: "sap",
    label: "SAP",
    icon: "Layers",
    color: "#38BDF8",
    skills: ["SAP SD", "SAP MM", "SAP S/4HANA", "SAP Cloud ALM", "SAP BTP"],
  },
  {
    id: "devops-tools",
    label: "DevOps & Tools",
    icon: "Wrench",
    color: "#FB923C",
    skills: ["Git", "GitHub", "AWS", "Azure", "Linux", "Unix", "VS Code"],
  },
  {
    id: "other",
    label: "Other Methodologies",
    icon: "Cpu",
    color: "#C084FC",
    skills: [
      "Machine Learning",
      "ITIL",
      "DBMS",
      "Agile Development",
      "Cloud Networking",
    ],
  },
];
