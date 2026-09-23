import React, { useEffect, useRef, useState } from "react";
import "./css/SkillsSection.css";

type SkillGroup = {
  id: string;
  title: string;
  tone: "purple" | "cyan" | "amber" | "green";
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    id: "ai-ml",
    title: "AI / ML",
    tone: "purple",
    skills: [
      "PyTorch",
      "TensorFlow.js",
      "OpenCV",
      "Flask",
      "Sentence-Transformers",
      "ChromaDB",
      "Gemini",
      "Groq",
      "BM25 / Hybrid Retrieval",
      "faster-whisper",
      "Pydantic",
      "FFmpeg",
    ],
  },
  {
    id: "backend",
    title: "BACKEND",
    tone: "cyan",
    skills: [
      "Java Spring Boot",
      "Node.js / Express",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "JWT Auth",
      "Docker",
    ],
  },
  {
    id: "frontend",
    title: "FRONTEND",
    tone: "amber",
    skills: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
      "Framer Motion",
      "React Three Fiber",
      "Flutter",
    ],
  },
  {
    id: "salesforce",
    title: "SALESFORCE",
    tone: "green",
    skills: [
      "Apex",
      "LWC",
      "SOQL",
      "Flow Builder",
    ],
  },
  {
    id: "tooling",
    title: "TOOLING",
    tone: "amber",
    skills: [
      "Git / GitHub",
      "Streamlit",
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`skills-section ${visible ? "skills-section--visible" : ""
        }`}
      aria-label="Technology Stack"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="skills-background"
        aria-hidden="true"
      >
        <div className="skills-grid" />

        <div className="skills-glow skills-glow--left" />
        <div className="skills-glow skills-glow--right" />

        <span className="skills-star skills-star-1" />
        <span className="skills-star skills-star-2" />
        <span className="skills-star skills-star-3" />
        <span className="skills-star skills-star-4" />
        <span className="skills-star skills-star-5" />
        <span className="skills-star skills-star-6" />
        <span className="skills-star skills-star-7" />
        <span className="skills-star skills-star-8" />
        <span className="skills-star skills-star-9" />
        <span className="skills-star skills-star-10" />
        <span className="skills-star skills-star-11" />
        <span className="skills-star skills-star-12" />
        <span className="skills-star skills-star-13" />
        <span className="skills-star skills-star-14" />
        <span className="skills-star skills-star-15" />
        <span className="skills-star skills-star-16" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="skills-container">

        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="skills-header">
          <div className="skills-eyebrow">
            <span className="skills-eyebrow-line" />
            <span>CAPABILITIES</span>
          </div>

          <h2 className="skills-title">
            Technology <span>Stack</span>
          </h2>

          <p className="skills-subtitle">
            Grouped by discipline — every item here maps directly
            to a verified project or role.
          </p>
        </header>

        {/* ===================================================
            SKILL GRID
        =================================================== */}

        <div className="skills-grid-layout">
          {skillGroups.map((group, groupIndex) => (
            <article
              key={group.id}
              className={`skill-card skill-card--${group.tone} skill-card--${group.id}`}
              style={
                {
                  "--card-delay": `${groupIndex * 120 + 150}ms`,
                } as React.CSSProperties
              }
            >
              {/* Top accent */}
              <div className="skill-card-accent" />

              {/* Card header */}
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  <span />
                </div>

                <h3>{group.title}</h3>
              </div>

              {/* Skills */}
              <div className="skill-list">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={
                      {
                        "--pill-delay": `${groupIndex * 120 +
                          skillIndex * 35 +
                          300
                          }ms`,
                      } as React.CSSProperties
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div className="skills-footer">
          <span className="skills-footer-line" />

          <span>
            TECHNOLOGIES · VERIFIED THROUGH PROJECT WORK
          </span>
        </div>
      </div>
    </section>
  );
}