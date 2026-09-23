import React, { useEffect, useRef, useState } from "react";
import "./css/AboutSection.css";
const buildItems = [
  {
    number: "01",
    title: "Intelligent systems",
    description: "RAG · GenAI · computer vision",
  },
  {
    number: "02",
    title: "Production software",
    description: "APIs · databases · React · backend",
  },
  {
    number: "03",
    title: "End-to-end products",
    description: "Architecture → data → interface",
  },
];

const dossierItems = [
  {
    number: "01",
    label: "CORE",
    value: "Applied AI / ML + Software Engineering",
  },
  {
    number: "02",
    label: "SYSTEMS",
    value: "RAG · APIs · Databases · AI workflows",
  },
  {
    number: "03",
    label: "BUILD STYLE",
    value: "Practical · modular · production-minded",
  },
  {
    number: "04",
    label: "CURIOSITY",
    value: "Where engineering craft meets applied ML",
  },
];

export default function AboutSection() {
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
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About Varshini"
      className={`about-section ${visible ? "about-section--visible" : ""
        }`}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div
        className="about-background"
        aria-hidden="true"
      >
        <div className="about-grid" />

        <div className="about-glow about-glow--left" />
        <div className="about-glow about-glow--right" />

        {/* Stars */}
        <span className="about-star about-star-1" />
        <span className="about-star about-star-2" />
        <span className="about-star about-star-3" />
        <span className="about-star about-star-4" />
        <span className="about-star about-star-5" />
        <span className="about-star about-star-6" />
        <span className="about-star about-star-7" />
        <span className="about-star about-star-8" />
        <span className="about-star about-star-9" />
        <span className="about-star about-star-10" />
        <span className="about-star about-star-11" />
        <span className="about-star about-star-12" />
        <span className="about-star about-star-13" />
        <span className="about-star about-star-14" />
        <span className="about-star about-star-15" />
        <span className="about-star about-star-16" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="about-container">

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}
        <div className="about-left">

          {/* Section label */}
          <div className="about-eyebrow">
            <span>ABOUT</span>
          </div>

          {/* Main heading */}
          <h2 className="about-title">
            Engineered from
            <br />
            <span>Both Worlds.</span>
          </h2>

          {/* Intro */}
          <p className="about-description">
            I build software where reliable engineering meets
            practical AI — from production APIs and interfaces
            to RAG and computer vision.
          </p>

          {/* Divider */}
          <div className="about-divider" />

          {/* What I build */}
          <div className="build-section">
            <div className="build-heading">
              WHAT I BUILD
            </div>

            <div className="build-list">
              {buildItems.map((item, index) => (
                <div
                  key={item.number}
                  className="build-item"
                  style={
                    {
                      "--item-delay": `${index * 120 + 250}ms`,
                    } as React.CSSProperties
                  }
                >
                  <span className="build-number">
                    {item.number}
                  </span>

                  <div className="build-content">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =======================================================
            RIGHT ENGINEERING DOSSIER
        ======================================================= */}
        <div className="about-right">
          <div className="dossier-card">

            {/* Card top */}
            <div className="dossier-top">
              <span className="dossier-label">
                ENGINEERING DOSSIER
              </span>

              <span className="dossier-page">
                02 / 04
              </span>
            </div>

            {/* Identity */}
            <div className="dossier-identity">
              <div className="dossier-monogram">
                VM
              </div>

              <div className="dossier-role">
                <h3>AI / ML</h3>

                <p>FULL-STACK ENGINEERING</p>
              </div>
            </div>

            {/* Dossier vertical accent */}
            <div className="dossier-body">

              <div className="dossier-accent-line">
                <span />
              </div>

              <div className="dossier-items">
                {dossierItems.map((item, index) => (
                  <div
                    key={item.number}
                    className="dossier-item"
                    style={
                      {
                        "--item-delay": `${index * 100 + 400}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <span className="dossier-number">
                      {item.number}
                    </span>

                    <div>
                      <span className="dossier-item-label">
                        {item.label}
                      </span>

                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom divider */}
            <div className="dossier-divider" />

            {/* Bottom statement */}
            <div className="dossier-bottom">
              <div>
                <span className="dossier-bottom-label">
                  BUILD THE SYSTEM.
                </span>

                <h4>
                  Make the intelligence useful.
                </h4>

                <p>
                  APPLIED · ENGINEERING · 2026
                </p>
              </div>

              <span className="dossier-status">
                ONLINE
              </span>
            </div>

            {/* Decorative arcs */}
            <div
              className="dossier-arcs"
              aria-hidden="true"
            >
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}