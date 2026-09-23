# Varshini — Full-Stack & AI/ML Engineer Portfolio

> A production-focused developer portfolio showcasing AI/ML systems, full-stack applications, backend engineering, system architecture, and continuous technical learning.

## Overview

This portfolio presents the engineering work behind my projects across:

- AI/ML and Generative AI
- Retrieval-Augmented Generation (RAG)
- Full-stack web applications
- Backend APIs and service architecture
- Computer vision
- Frontend and UI engineering
- System architecture
- Education and professional certifications

The interface uses a dark technical visual system, responsive layouts, interactive project sections, architecture visualizations, and project-focused storytelling.

## Featured Projects

### Video-to-Bilingual Work Instruction Agent

Transforms technical demonstration videos into structured bilingual English/Japanese work instructions.

**Pipeline:** Video → transcription → step detection → key-frame extraction → bilingual processing → document grounding → structured instructions.

**Technologies:** Python, FastAPI, Whisper, PyTorch, OpenCV, FFmpeg, ChromaDB.

### Internal Document RAG Chatbot

An internal document Q&A system that retrieves relevant information from private documents before generating grounded responses.

**Pipeline:** Documents → extraction → chunking → embeddings → vector storage → semantic retrieval → context grounding → LLM response.

**Technologies:** Python, Streamlit, LangChain, ChromaDB, Sentence Transformers, Gemini.

### StudyEye

Computer-vision application for monitoring student engagement using facial-expression classification and live camera input.

**Technologies:** Python, PyTorch, TensorFlow.js, OpenCV, Flask, React.

### Spring Boot E-Commerce Backend

Backend engineering project focused on REST APIs, authentication, modular services, and maintainable backend architecture.

**Technologies:** Java, Spring Boot, MySQL, JWT, REST APIs.

### Nichi-In Soft PL Monitor

Full-stack market monitoring application for NSE Nifty-50 data with interactive financial dashboards.

**Technologies:** MongoDB, Express.js, React, Node.js, Chart.js.

### NexaCore Technologies Site

Modern frontend experience demonstrating responsive UI engineering, animation, and interactive visual presentation.

**Technologies:** React, Three.js, Tailwind CSS, Framer Motion.

## System Architecture

The portfolio includes a dedicated architecture section explaining recurring patterns used across my applications.

### General Request Flow

```text
Client
  ↓
Frontend
  ↓
API Layer
  ↓
Business Logic
  ├── AI / ML Services
  └── Data Services
        ↓
     Database
        ↓
    Structured Response
```

### RAG Pipeline

```text
Documents
   ↓
Ingestion
   ↓
Text Extraction
   ↓
Chunking
   ↓
Embedding Generation
   ↓
Vector Database
   ↓
Similarity Retrieval
   ↓
Context Construction
   ↓
LLM Generation
   ↓
Grounded Response
```

## Technology Stack

| Area | Technologies |
| --- | --- |
| Frontend | React, TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Build | Vite |
| AI / ML | Python, PyTorch, OpenCV, Whisper |
| GenAI / RAG | LangChain, ChromaDB, Sentence Transformers, Gemini |
| Backend | Node.js, Express.js, FastAPI, Spring Boot |
| Databases | PostgreSQL, MongoDB, MySQL, ChromaDB |
| Salesforce | Apex, Trailhead, Apex Callouts |
| Tools | Git, GitHub, Postman, VS Code |

## Design & UX

The portfolio follows a consistent high-end engineering visual language:

- Dark navy foundation
- Purple, blue, and cyan accent gradients
- Subtle technical grid and particle effects
- High-contrast typography
- Glass-inspired panels
- Restrained glow and borders
- Responsive layouts
- Purposeful motion
- Clear information hierarchy
- Project-first storytelling

The goal is to communicate engineering depth without sacrificing usability.

## Core Features

- Responsive portfolio layout
- Sticky navigation
- Section-based navigation
- Project filtering
- Project detail interactions
- Architecture visualization
- RAG pipeline visualization
- Technology categorization
- Education and certification showcase
- Contact form
- GitHub and LinkedIn integration
- Smooth UI transitions
- Mobile-friendly layout
- Component-based React architecture

## Project Structure

```text
portfolio/
├── public/
│   ├── images/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Systems/
│   │   ├── Education/
│   │   └── Contact/
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   └── education.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn
- Git

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
npm install
```

### Development

```bash
npm run dev
```

The development server runs at:

```text
http://localhost:5173
```

### Production

```bash
npm run build
npm run preview
```

## Engineering Principles

### Separation of Concerns

Frontend presentation, API communication, business logic, AI/ML processing, and persistence are treated as separate responsibilities.

### Grounded AI

RAG applications retrieve relevant source context before generation to reduce unsupported responses.

### Reusable Components

Repeated UI patterns are implemented as reusable React components.

### Maintainability

Project, skill, experience, and education data are kept separate from presentation wherever practical.

### Responsive by Default

The interface is designed for desktop, tablet, and mobile experiences.

### Purposeful Motion

Animation is used to communicate hierarchy and interaction rather than visual noise.

## Credentials

The portfolio includes academic and professional learning milestones including:

- B.E. / B.Tech — Computer Science & Engineering
- Salesforce Trailhead achievements
- Apex Callouts Superbadge
- AI/ML and software engineering learning

Where possible, credentials should link to their official verification pages.

## Contact

I’m open to conversations around:

- AI/ML Engineering
- Generative AI
- RAG systems
- Full-stack development
- Backend engineering
- Salesforce development
- Software engineering opportunities
- Technical collaboration

Replace the following placeholders with your actual links:

```text
Portfolio: https://your-domain.com
GitHub:    https://github.com/YOUR_USERNAME
LinkedIn:  https://www.linkedin.com/in/YOUR_USERNAME
Email:     your.email@example.com
```

## Roadmap

- Responsive portfolio foundation
- Project showcase
- Technology stack section
- Experience section
- System architecture section
- Education & certifications section
- Contact section
- Add verified live project demos
- Add detailed project case studies
- Accessibility audit
- Performance optimization
- Automated deployment workflow

## License

This repository is primarily a personal portfolio. Source code may be referenced for learning and inspiration, but personal information, branding, assets, project descriptions, and original work should not be reused without permission.

---

<p align="center">
  <strong>Built with React, TypeScript, Tailwind CSS & Framer Motion.</strong><br/>
  <sub>Design • Develop • Learn • Repeat</sub>
</p>
