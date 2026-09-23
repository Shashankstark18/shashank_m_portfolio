import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "rag-chatbot",
    title: "Internal Document RAG Chatbot",
    category: "GenAI / RAG",
    categoryColor: "#A78BFA",
    description:
      "Enterprise Retrieval-Augmented Generation (RAG) conversational agent that indexes internal manuals and documents to provide accurate, source-grounded answers with citations.",
    details: [
      "Hybrid retrieval combining dense semantic embeddings and BM25 keyword matching",
      "Chunking pipeline with metadata preservation for precise document attribution",
      "Low-latency response generation with source verification and hallucination guards",
    ],
    stack: ["Python", "RAG", "LangChain", "Sentence-Transformers", "ChromaDB", "FastAPI"],
    github: "https://github.com/varshini2304/RAG_Chatbot",
    liveDemo: null,
    featured: true,
  },
  {
    id: "meeting-room",
    title: "Meeting Room Booking & Employee Management System – Toyota Demo",
    category: "Full Stack",
    categoryColor: "#22D3EE",
    description:
      "Enterprise workspace booking and employee management platform built for Toyota demo workflows, featuring real-time room scheduling, conflict resolution, and employee directory management.",
    details: [
      "Interactive calendar and timeline view for automated meeting room reservation",
      "Role-based access control (Admin, Employee, Facilities) and approval workflows",
      "Deployed on Vercel with high-performance responsive UI and instant state synchronization",
    ],
    stack: ["React", "TypeScript", "Node.js", "Tailwind CSS", "REST APIs", "Vercel"],
    github: "https://github.com/varshini2304/Meeting_Room__Booking_and_employee_management_system",
    liveDemo: "https://meeting-room-booking-and-employee-m.vercel.app/",
    featured: true,
  },
  {
    id: "e-commerce",
    title: "E-Commerce Full Stack",
    category: "Full Stack",
    categoryColor: "#34D399",
    description:
      "Production-grade e-commerce application featuring comprehensive catalog browsing, cart management, checkout workflows, user authentication, and order tracking.",
    details: [
      "End-to-end full stack architecture with secure session management and database storage",
      "Real-time cart state persistence, discount handling, and responsive checkout flow",
      "Live deployment on Vercel with optimized asset delivery and fluid animations",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
    github: "https://github.com/varshini2304/E_Commerce_Full_Stack",
    liveDemo: "https://e-commerce-full-stack-indol.vercel.app/",
    featured: true,
  },
  {
    id: "finance-dashboard",
    title: "Finance Dashboard",
    category: "Frontend / UI-UX",
    categoryColor: "#F59E0B",
    description:
      "High-performance financial analytics and portfolio tracking dashboard offering interactive charts, cash flow breakdowns, asset distributions, and dark-mode visualization.",
    details: [
      "Real-time metric updates and interactive financial charts (P&L, spending trends)",
      "HUD-inspired data telemetry, transaction filtering, and modern glassmorphic UI",
      "Live production deployment on Vercel with sub-second page transitions",
    ],
    stack: ["React", "TypeScript", "Recharts", "Tailwind CSS", "Vercel"],
    github: "https://github.com/varshini2304/Financial_dashboard",
    liveDemo: "https://zoryvn-blush.vercel.app/",
    featured: true,
  },
  {
    id: "studyeye",
    title: "StudyEye / Focus Detection",
    category: "Computer Vision / AI",
    categoryColor: "#00E5FF",
    description:
      "Real-time computer vision system that monitors user attentiveness and study engagement using webcam facial landmark detection, gaze tracking, and head pose estimation.",
    details: [
      "Face mesh analysis and gaze angle estimation to detect distraction vs. focused study states",
      "Real-time engagement telemetry dashboard showing session focus scores and break reminders",
      "Lightweight on-device processing optimized for continuous webcam streams",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "TensorFlow / PyTorch", "Streamlit"],
    github: "https://github.com/varshini2304/Focus_detection",
    liveDemo: null,
    featured: true,
  },
];
