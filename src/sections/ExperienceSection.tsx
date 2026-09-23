import React, { useEffect, useRef, useState } from "react";
import { experiences } from "../data/experience";
import "./css/ExperienceSection.css";

const timelineMeta: Record<
  string,
  {
    label: string;
    accent: "purple" | "amber" | "cyan";
  }
> = {
  nichi: {
    label: "TRAINEE",
    accent: "purple",
  },

  avarista: {
    label: "CONTRACT",
    accent: "amber",
  },

  bluestock: {
    label: "INTERNSHIP",
    accent: "cyan",
  },
};

const accentClasses = {
  purple: {
    card: "experience-card--purple",
    label: "timeline-label--purple",
    node: "timeline-node--purple",
    badge: "experience-badge--purple",
    company: "experience-company--purple",
    bullet: "experience-bullet--purple",
  },

  amber: {
    card: "experience-card--amber",
    label: "timeline-label--amber",
    node: "timeline-node--amber",
    badge: "experience-badge--amber",
    company: "experience-company--amber",
    bullet: "experience-bullet--amber",
  },

  cyan: {
    card: "experience-card--cyan",
    label: "timeline-label--cyan",
    node: "timeline-node--cyan",
    badge: "experience-badge--cyan",
    company: "experience-company--cyan",
    bullet: "experience-bullet--cyan",
  },
};

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  const [visible, setVisible] = useState(false);

  const cardRef = useRef<HTMLElement | null>(null);

  const meta = timelineMeta[experience.id] ?? {
    label: "EXPERIENCE",
    accent: "purple" as const,
  };

  const classes = accentClasses[meta.accent];

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const displayType =
    experience.type === "full-time"
      ? "Full-Time"
      : experience.type === "contract"
        ? "Contract"
        : "Internship";

  return (
    <div
      className={`experience-row ${visible ? "experience-row--visible" : ""
        }`}
      style={
        {
          "--animation-delay": `${index * 140}ms`,
        } as React.CSSProperties
      }
    >
      {/* =========================================================
          LEFT TIMELINE
      ========================================================= */}
      <div className="experience-timeline-side">
        {/* Timeline label */}
        <div className={`timeline-label ${classes.label}`}>
          <span>{meta.label}</span>
        </div>

        {/* Timeline node */}
        <div className={`timeline-node ${classes.node}`}>
          <span />
        </div>
      </div>

      {/* =========================================================
          EXPERIENCE CARD
      ========================================================= */}
      <article
        ref={cardRef}
        className={`experience-card ${classes.card}`}
      >
        {/* Top shine */}
        <div className="experience-card-shine" />

        {/* Header */}
        <div className="experience-card-header">
          <div className="experience-heading">
            <h3 className="experience-role">
              {experience.role}
            </h3>

            <p
              className={`experience-company ${classes.company}`}
            >
              {experience.company}
            </p>

            <div className="experience-meta">
              <span>{experience.period}</span>

              {experience.id === "nichi" && (
                <>
                  <span className="experience-meta-divider">
                    •
                  </span>

                  <span>
                    Training &amp; OJT: Aug 20, 2025 – Sep 11, 2026
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Employment type */}
          <span
            className={`experience-badge ${classes.badge}`}
          >
            {displayType}
          </span>
        </div>

        {/* Description */}
        <div className="experience-content">
          <ul className="experience-list">
            {experience.description.map((item, itemIndex) => (
              <li
                key={`${experience.id}-description-${itemIndex}`}
                className="experience-list-item"
              >
                <span
                  className={`experience-bullet ${classes.bullet}`}
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology stack */}
        {experience.stack?.length > 0 && (
          <div className="experience-stack">
            {experience.stack.map((technology) => (
              <span
                key={`${experience.id}-${technology}`}
                className="experience-tech"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience-section"
      aria-label="Professional Experience"
    >
      {/* =========================================================
          SPACE BACKGROUND
      ========================================================= */}
      <div
        className="experience-background"
        aria-hidden="true"
      >
        <div className="experience-glow experience-glow--one" />
        <div className="experience-glow experience-glow--two" />

        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />
        <span className="star star-7" />
        <span className="star star-8" />
        <span className="star star-9" />
        <span className="star star-10" />
        <span className="star star-11" />
        <span className="star star-12" />
        <span className="star star-13" />
        <span className="star star-14" />
        <span className="star star-15" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="experience-container">

        {/* =======================================================
            SECTION HEADER
        ======================================================= */}
        <header className="experience-header">
          <div className="experience-eyebrow">
            <span className="eyebrow-line" />
            <span>EXPERIENCE</span>
          </div>

          <h2 className="experience-title">
            Where I&apos;ve{" "}
            <span>Shipped.</span>
          </h2>

          <p className="experience-subtitle">
            Professional roles — full-time, freelance, and internship.
          </p>
        </header>

        {/* =======================================================
            TIMELINE
        ======================================================= */}
        <div className="experience-timeline">
          {/* IMPORTANT:
              No standalone timeline-line here.
              The line now belongs to the left timeline column.
          */}

          <div className="experience-list-container">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =======================================================
            FOOTER
        ======================================================= */}
        <div className="experience-footer">
          <span className="experience-footer-line" />

          <span>
            01 — PROFESSIONAL EXPERIENCE · SELECTED ROLES
          </span>
        </div>
      </div>
    </section>
  );
}