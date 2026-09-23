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
    id: "programming-languages",
    title: "PROGRAMMING LANGUAGES",
    tone: "purple",
    skills: ["Python", "Java", "C", "C++", "SQL"],
  },
  {
    id: "backend",
    title: "BACKEND TECHNOLOGIES",
    tone: "cyan",
    skills: ["Django", "Spring Boot", "REST APIs"],
  },
  {
    id: "frontend",
    title: "FRONTEND",
    tone: "amber",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
  },
  {
    id: "databases",
    title: "DATABASES",
    tone: "green",
    skills: ["MySQL", "MongoDB", "SQL Server", "Oracle"],
  },
  {
    id: "sap",
    title: "SAP ENTERPRISE",
    tone: "cyan",
    skills: [
      "SAP SD",
      "SAP MM",
      "SAP S/4HANA",
      "SAP Cloud ALM",
      "SAP BTP",
    ],
  },
  {
    id: "devops-tools",
    title: "DEVOPS & TOOLS",
    tone: "amber",
    skills: [
      "Git",
      "GitHub",
      "AWS",
      "Azure",
      "Linux",
      "Unix",
      "VS Code",
    ],
  },
  {
    id: "other",
    title: "METHODOLOGIES & ARCHITECTURE",
    tone: "purple",
    skills: [
      "Machine Learning",
      "ITIL",
      "DBMS",
      "Agile Development",
      "Cloud Networking",
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