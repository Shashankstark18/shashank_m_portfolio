import { useEffect, useRef, useState } from "react";
import "./css/SystemsSection.css";

/* ============================================================
   DATA
   ============================================================ */

const FLOWS = {
  general: {
    key: "general",
    label: "General Request Flow",
    badge: "Most Projects",
    badgeColor: "#22D3EE",
    desc: "End-to-end flow for most of my full-stack and AI applications",
    cardDesc:
      "Used in the Spring Boot e-commerce backend, NichIn-Soft PL Monitor, and Finance Dashboard — clean separation of frontend, API, business logic, and persistence layers.",
    features: ["Modular", "Scalable", "Secure", "Maintainable"],

    steps: [
      {
        id: "user",
        label: "User Request",
        sub: "Web / Mobile Client",
        color: "#22D3EE",
        type: "input",
      },
      {
        id: "frontend",
        label: "Frontend",
        sub: "React / Flutter (UI/UX)",
        color: "#8B5CF6",
        type: "process",
      },
      {
        id: "api",
        label: "API Layer",
        sub: "FastAPI / Node.js (HTTP / REST)",
        color: "#8B5CF6",
        type: "process",
      },
      {
        id: "services",
        label: null,
        sub: null,
        color: "#A78BFA",
        type: "group",
      },
      {
        id: "response",
        label: "Response",
        sub: "Structured Output (JSON)",
        color: "#FB923C",
        type: "output",
      },
    ],

    services: [
      {
        label: "Business Logic",
        sub: "Application Services",
        color: "#A78BFA",
        type: "process",
      },
      {
        label: "AI / ML",
        sub: "LLM / ML Models",
        color: "#A78BFA",
        type: "ai",
      },
      {
        label: "Database",
        sub: "PostgreSQL / ChromaDB",
        color: "#34D399",
        type: "database",
      },
    ],

    explanations: [
      {
        label: "User Request",
        color: "#22D3EE",
        desc: "User interacts through a web or mobile interface.",
      },
      {
        label: "Frontend",
        color: "#8B5CF6",
        desc: "Handles UI/UX and sends requests to the backend.",
      },
      {
        label: "API Layer",
        color: "#8B5CF6",
        desc: "Manages routing, authentication, and request processing.",
      },
      {
        label: "Business Logic",
        color: "#A78BFA",
        desc: "Core application logic and orchestration.",
      },
      {
        label: "AI / ML",
        color: "#A78BFA",
        desc: "Model inference, RAG, or other AI/ML processing when required.",
      },
      {
        label: "Database",
        color: "#34D399",
        desc: "Stores and retrieves data using PostgreSQL, ChromaDB, etc.",
      },
      {
        label: "Response",
        color: "#FB923C",
        desc: "Structured response returned to the user.",
      },
    ],
  },

  rag: {
    key: "rag",
    label: "RAG Pipeline Flow",
    badge: "AI / RAG Projects",
    badgeColor: "#A78BFA",
    desc: "Core architecture for retrieval-augmented generation systems",
    cardDesc:
      "Core architecture in the Internal Document RAG Chatbot and the Video-to-Bilingual Work Instruction Agent — ingest, chunk, embed, retrieve, ground, generate.",
    features: [
      "Ingestion",
      "Vector Search",
      "Grounded Generation",
      "Source Linking",
    ],

    steps: [
      {
        id: "docs",
        label: "Documents",
        sub: "PDF / Video / Text",
        color: "#22D3EE",
        type: "input",
      },
      {
        id: "ingest",
        label: "Ingest & Parse",
        sub: "Text / Frame Extraction",
        color: "#8B5CF6",
        type: "process",
      },
      {
        id: "chunk",
        label: "Chunk & Embed",
        sub: "Sentence-Transformers",
        color: "#8B5CF6",
        type: "process",
      },
      {
        id: "store",
        label: "Vector Store",
        sub: "ChromaDB / FAISS",
        color: "#34D399",
        type: "database",
      },
      {
        id: "retrieve",
        label: "Retrieve",
        sub: "BM25 + Vector Hybrid",
        color: "#A78BFA",
        type: "ai",
      },
      {
        id: "llm",
        label: "LLM Generate",
        sub: "Gemini / Groq",
        color: "#A78BFA",
        type: "ai",
      },
      {
        id: "output",
        label: "Grounded Answer",
        sub: "Structured Output + Sources",
        color: "#FB923C",
        type: "output",
      },
    ],

    services: [],

    explanations: [
      {
        label: "Documents",
        color: "#22D3EE",
        desc: "Raw source files: PDFs, videos, or plain text corpora.",
      },
      {
        label: "Ingest & Parse",
        color: "#8B5CF6",
        desc: "Extracts clean text or frames from raw documents.",
      },
      {
        label: "Chunk & Embed",
        color: "#8B5CF6",
        desc: "Splits text into semantic chunks and generates dense vector embeddings.",
      },
      {
        label: "Vector Store",
        color: "#34D399",
        desc: "Persists embeddings and supports fast similarity search.",
      },
      {
        label: "Retrieve",
        color: "#A78BFA",
        desc: "Hybrid BM25 + vector search fetches the most relevant chunks.",
      },
      {
        label: "LLM Generate",
        color: "#A78BFA",
        desc: "LLM synthesises a grounded answer using retrieved context.",
      },
      {
        label: "Grounded Answer",
        color: "#FB923C",
        desc: "Final response cites source chunks to reduce hallucination.",
      },
    ],
  },
};

type FlowKey = keyof typeof FLOWS;

type NodeType =
  | "input"
  | "process"
  | "ai"
  | "database"
  | "output";

type FlowStep = {
  id: string;
  label: string | null;
  sub: string | null;
  color: string;
  type: string;
};

/* ============================================================
   NODE ICON
   ============================================================ */

function NodeIcon({
  type,
  color,
}: {
  type: string;
  color: string;
}) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 20 20",
    fill: "none",
    "aria-hidden": true,
  };

  if (type === "input") {
    return (
      <svg {...props}>
        <circle
          cx="10"
          cy="10"
          r="7"
          fill={`${color}22`}
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M7 10h6M11 7l3 3-3 3"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "process") {
    return (
      <svg {...props}>
        <rect
          x="3"
          y="3"
          width="14"
          height="14"
          rx="3"
          fill={`${color}22`}
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M7 10h6M10 7v6"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg {...props}>
        <polygon
          points="10,2 18,7 18,13 10,18 2,13 2,7"
          fill={`${color}22`}
          stroke={color}
          strokeWidth="1.5"
        />
        <circle
          cx="10"
          cy="10"
          r="2.5"
          fill={color}
        />
      </svg>
    );
  }

  if (type === "database") {
    return (
      <svg {...props}>
        <ellipse
          cx="10"
          cy="6"
          rx="6"
          ry="3"
          fill={`${color}22`}
          stroke={color}
          strokeWidth="1.2"
        />
        <path
          d="M4 6v8c0 1.66 2.69 3 6 3s6-1.34 6-3V6"
          fill={`${color}08`}
          stroke={color}
          strokeWidth="1.2"
        />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <rect
        x="2"
        y="5"
        width="16"
        height="12"
        rx="2"
        fill={`${color}22`}
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M5 9h10M5 12h7"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ============================================================
   ARROW
   ============================================================ */

function Arrow({
  color = "rgba(124,58,237,0.5)",
}: {
  color?: string;
}) {
  return (
    <div className="system-arrow system-arrow--animated">
      <svg
        width="30"
        height="16"
        viewBox="0 0 30 16"
        aria-hidden="true"
      >
        <line
          x1="2"
          y1="8"
          x2="23"
          y2="8"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        <polygon
          points="23,4 29,8 23,12"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ============================================================
   FLOW NODE
   ============================================================ */

function FlowNode({
  node,
  index,
}: {
  node: FlowStep;
  index: number;
}) {
  if (!node.label) return null;

  return (
    <div
      className="system-node system-reveal-left"
      style={
        {
          "--node-color": node.color,
          "--node-delay": `${index * 100}ms`,
        } as React.CSSProperties
      }
    >
      <div className="system-node-icon">
        <NodeIcon
          type={node.type as NodeType}
          color={node.color}
        />
      </div>

      <div className="system-node-content">
        <div className="system-node-title">
          {node.label}
        </div>

        {node.sub && (
          <div className="system-node-sub">
            {node.sub}
          </div>
        )}
      </div>

      <div className="system-node-scan" />
    </div>
  );
}

/* ============================================================
   GENERAL FLOW
   ============================================================ */

function GeneralDiagram() {
  const flow = FLOWS.general;

  const mainNodes = [
    flow.steps[0],
    flow.steps[1],
    flow.steps[2],
  ];

  return (
    <div className="flow-diagram flow-diagram--general">
      {mainNodes.map((node, index) => (
        <div
          className="flow-node-wrapper"
          key={node.id}
        >
          <FlowNode
            node={node}
            index={index}
          />

          {index < mainNodes.length - 1 && (
            <Arrow
              color={`${node.color}88`}
            />
          )}
        </div>
      ))}

      <Arrow color="rgba(139,92,246,0.65)" />

      {/* Services */}
      <div className="services-group">
        <div className="services-group-label">
          APPLICATION CORE
        </div>

        {flow.services.map((service, index) => (
          <div
            key={service.label}
            className="service-node system-reveal-up"
            style={
              {
                "--service-color": service.color,
                "--service-delay": `${index * 100 + 200}ms`,
              } as React.CSSProperties
            }
          >
            <div className="service-node-icon">
              <NodeIcon
                type={service.type}
                color={service.color}
              />
            </div>

            <div>
              <div className="service-node-title">
                {service.label}
              </div>

              <div className="service-node-sub">
                {service.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Arrow color="rgba(251,146,60,0.65)" />

      <FlowNode
        node={flow.steps[4]}
        index={4}
      />
    </div>
  );
}

/* ============================================================
   RAG FLOW
   ============================================================ */

function RAGDiagram() {
  const flow = FLOWS.rag;

  return (
    <div className="flow-diagram flow-diagram--rag">
      {flow.steps.map((node, index) => (
        <div
          className="flow-node-wrapper"
          key={node.id}
        >
          <FlowNode
            node={node}
            index={index}
          />

          {index < flow.steps.length - 1 && (
            <Arrow
              color={`${node.color}85`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   LEGEND
   ============================================================ */

function Legend() {
  const items = [
    { color: "#22D3EE", label: "Input" },
    { color: "#8B5CF6", label: "Process" },
    { color: "#A78BFA", label: "AI / ML" },
    { color: "#34D399", label: "Storage" },
    { color: "#FB923C", label: "Output" },
  ];

  return (
    <div className="system-legend">
      {items.map((item) => (
        <div
          className="legend-item"
          key={item.label}
        >
          <span
            className="legend-dot"
            style={{
              background: item.color,
              boxShadow: `0 0 9px ${item.color}66`,
            }}
          />

          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   EXPLANATION PANEL
   ============================================================ */

function ExplanationPanel({
  flow,
}: {
  flow: (typeof FLOWS)[FlowKey];
}) {
  return (
    <aside className="flow-explanation system-reveal-right">
      <div className="explanation-heading">
        <span className="explanation-heading-dot" />

        <span>Flow Explanation</span>
      </div>

      <div className="explanation-list">
        {flow.explanations.map((item, index) => (
          <div
            className="explanation-item"
            key={item.label}
            style={
              {
                "--explanation-color": item.color,
                "--explanation-delay": `${index * 70}ms`,
              } as React.CSSProperties
            }
          >
            <div className="explanation-title">
              {item.label}
            </div>

            <div className="explanation-description">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

/* ============================================================
   BOTTOM FLOW CARD
   ============================================================ */

function FlowSummaryCard({
  flow,
  active,
  onClick,
}: {
  flow: (typeof FLOWS)[FlowKey];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`flow-summary-card ${active ? "flow-summary-card--active" : ""
        }`}
      style={
        {
          "--summary-color": flow.badgeColor,
        } as React.CSSProperties
      }
      onClick={onClick}
      aria-pressed={active}
    >
      <div className="summary-card-top">
        <div className="summary-card-title-group">
          <div className="summary-card-icon">
            <NodeIcon
              type={
                flow.key === "general"
                  ? "process"
                  : "database"
              }
              color={flow.badgeColor}
            />
          </div>

          <div>
            <div className="summary-card-title">
              {flow.label}
            </div>
          </div>
        </div>

        <span className="summary-card-badge">
          {flow.badge}
        </span>
      </div>

      <p className="summary-card-description">
        {flow.cardDesc}
      </p>

      <div className="summary-card-features">
        <span className="features-label">
          Key Features
        </span>

        {flow.features.map((feature) => (
          <span
            className="feature-pill"
            key={feature}
          >
            {feature}
          </span>
        ))}
      </div>

      <span className="summary-card-corner" />
    </button>
  );
}

/* ============================================================
   MAIN SECTION
   ============================================================ */

export default function SystemsSection() {
  const [activeKey, setActiveKey] =
    useState<FlowKey>("general");

  const [visible, setVisible] =
    useState(false);

  const sectionRef =
    useRef<HTMLElement | null>(null);

  const flow = FLOWS[activeKey];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(section);
          }
        },
        {
          threshold: 0.1,
        }
      );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleFlowChange = (
    key: FlowKey
  ) => {
    if (key === activeKey) return;

    setActiveKey(key);
  };

  return (
    <section
      ref={sectionRef}
      id="systems"
      className={`systems-section ${visible
        ? "systems-section--visible"
        : ""
        }`}
      aria-label="How I Build Systems"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="systems-background"
        aria-hidden="true"
      >
        <div className="systems-grid" />

        <div className="systems-glow systems-glow--one" />
        <div className="systems-glow systems-glow--two" />

        <span className="system-star star-1" />
        <span className="system-star star-2" />
        <span className="system-star star-3" />
        <span className="system-star star-4" />
        <span className="system-star star-5" />
        <span className="system-star star-6" />
        <span className="system-star star-7" />
        <span className="system-star star-8" />
        <span className="system-star star-9" />
        <span className="system-star star-10" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="systems-container">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="systems-header">

          <div className="systems-header-content">
            <div className="systems-eyebrow">
              <span className="systems-eyebrow-line" />
              ARCHITECTURE
            </div>

            <h2 className="systems-title">
              How I Build{" "}
              <span>Systems</span>
            </h2>

            <p className="systems-subtitle">
              Two recurring architectural patterns
              across my projects — toggle to explore
              each one.
            </p>
          </div>

          {/* Quote */}
          <div className="systems-quote">
            <span className="quote-corner quote-corner--top" />
            <span className="quote-corner quote-corner--bottom" />

            <div className="quote-mark">
              “
            </div>

            <blockquote>
              Well-structured architecture turns
              complex problems into scalable
              solutions.
            </blockquote>

            <cite>
              — VARSHINI
            </cite>
          </div>
        </div>

        {/* ===================================================
            TABS
        =================================================== */}

        <div
          className="systems-tabs"
          role="tablist"
          aria-label="Architecture patterns"
        >
          {(Object.keys(FLOWS) as FlowKey[]).map(
            (key) => {
              const active =
                key === activeKey;

              return (
                <button
                  type="button"
                  role="tab"
                  key={key}
                  aria-selected={active}
                  className={`system-tab ${active
                    ? "system-tab--active"
                    : ""
                    }`}
                  onClick={() =>
                    handleFlowChange(key)
                  }
                >
                  <span className="tab-dot" />
                  {FLOWS[key].label}
                </button>
              );
            }
          )}
        </div>

        {/* ===================================================
            MAIN ARCHITECTURE AREA
        =================================================== */}

        <div
          className={`systems-main systems-main--animated ${activeKey === "rag" ? "systems-main--rag" : ""}`}
          key={activeKey}
        >

          {/* Diagram */}
          <div className="architecture-card">

            <span className="hud-corner hud-corner--tl" />
            <span className="hud-corner hud-corner--br" />

            <div className="architecture-card-header">
              <div>
                <div className="architecture-title">
                  {flow.label}
                </div>

                <div className="architecture-description">
                  {flow.desc}
                </div>
              </div>

              <span className="architecture-badge">
                <span />
                System Architecture
              </span>
            </div>

            <div
              className="diagram-stage"
              role="img"
              aria-label={flow.label}
            >
              {activeKey === "general" ? (
                <GeneralDiagram />
              ) : (
                <RAGDiagram />
              )}
            </div>

            <Legend />
          </div>

          {/* Explanation */}
          <ExplanationPanel
            flow={flow}
          />
        </div>

        {/* ===================================================
            SUMMARY CARDS
        =================================================== */}

        <div className="flow-summary-grid">
          {(
            Object.values(FLOWS) as Array<
              (typeof FLOWS)[FlowKey]
            >
          ).map((item) => (
            <FlowSummaryCard
              key={item.key}
              flow={item}
              active={
                item.key === activeKey
              }
              onClick={() =>
                handleFlowChange(
                  item.key as FlowKey
                )
              }
            />
          ))}
        </div>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div className="systems-footer">
          <div className="systems-footer-left">
            <span className="footer-line" />

            <span>
              Building Intelligent Solutions.
            </span>
          </div>

          <div className="systems-footer-words">
            {[
              "DESIGN",
              "DEVELOP",
              "LEARN",
              "REPEAT",
            ].map((word, index) => (
              <span
                key={word}
                className={
                  index % 2 === 1
                    ? "footer-word--accent"
                    : ""
                }
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}