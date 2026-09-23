import type { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: "research-publication",
    category: "RESEARCH PUBLICATION",
    title: 'Published "Asthma Prediction App Using Django" in IRJMETS',
    organization: "International Research Journal of Modernization in Engineering Technology and Science",
    description:
      "Authored and published research detailing an ML-integrated Django web architecture providing real-time asthma risk prediction, health telemetry, and risk assessment reporting.",
    badge: "Published Paper",
  },
  {
    id: "academic-excellence",
    category: "ACADEMIC EXCELLENCE",
    title: "Winner of Technical Aptitude Competition",
    organization: "Sri Siddhartha Institute of Technology",
    description:
      "Awarded 1st place in the college-wide Technical Aptitude Competition evaluating algorithmic reasoning, programming logic, data structures, and core CS fundamentals.",
    badge: "First Place",
  },
  {
    id: "leadership-ssit",
    category: "LEADERSHIP & SERVICE",
    title: "Branch Representative & Cultural Committee Member",
    organization: "Sri Siddhartha Institute of Technology",
    description:
      "Elected student Branch Representative coordinating between academic faculty and student cohorts. Active member of the institute cultural committee organizing large-scale events.",
    badge: "Leadership",
  },
];

export const languages = [
  { language: "English", proficiency: "Professional" },
  { language: "Hindi", proficiency: "Fluent" },
  { language: "Kannada", proficiency: "Native" },
];

