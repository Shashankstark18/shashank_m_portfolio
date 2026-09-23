import { useEffect, useRef, useState } from "react";
import "./css/SystemsSection.css";

/* ============================================================
   DATA
   ============================================================ */

const FLOWS = {
  django_ml: {
    key: "django_ml",
    label: "Django + ML Application Flow",
    badge: "ML Integration",
    badgeColor: "#A78BFA",
    desc: "End-to-end predictive pipeline integrating trained Machine Learning models into a Django web platform",
    cardDesc:
      "Core architecture used in the Asthma Prediction Web Application — handling user inputs, feature preprocessing, ML model inference, database persistence, and predictive reporting.",
    features: [
      "Django Backend",
      "Model Inference",
      "Predictive Analytics",
      "Secure Persistence",
    ],

    steps: [
      {
        id: "user",
        label: "User Input",
        sub: "Web Client Form",
        color: "#22D3EE",
        type: "input",
      },
      {
        id: "frontend",
        label: "Frontend UI",
        sub: "HTML / CSS / JS",
        color: "#8B5CF6",
        type: "process",
      },
      {
        id: "django",
        label: "Django App",
        sub: "Views & Routing",
        color: "#8B5CF6",
        type: "process",
      },
      {
        id: "logic",
        label: "Business Logic",
        sub: "Feature Preprocessing",
        color: "#A78BFA",
        type: "process",
      },
      {
        id: "model",
        label: "ML Model",
        sub: "Inference Engine",
        color: "#A78BFA",
        type: "ai",
      },
      {
        id: "prediction",
        label: "Prediction",
        sub: "Risk Scoring Output",
        color: "#22D3EE",
        type: "ai",
      },
      {
        id: "database",
        label: "Database",
        sub: "MySQL / Records",
        color: "#34D399",
        type: "database",
      },
      {
        id: "report",
        label: "Result / Report",
        sub: "Real-Time Health Analytics",
        color: "#FB923C",
        type: "output",
      },
    ],

    explanations: [
      {
        label: "User Input",
        color: "#22D3EE",
        desc: "User submits health indicators and symptom data through the responsive web form.",
      },
      {
        label: "Frontend UI",
        color: "#8B5CF6",
        desc: "Validates input client-side and transmits structured HTTP POST requests to Django.",
      },
      {
        label: "Django Application",
        color: "#8B5CF6",
        desc: "Routes incoming requests, manages sessions, and enforces application security.",
      },
      {
        label: "Business Logic",
        color: "#A78BFA",
        desc: "Extracts and pre-processes feature sets for model compatibility.",
      },
      {
        label: "ML Model",
        color: "#A78BFA",
        desc: "Executes inference using trained classification models to evaluate risk probability.",
      },
      {
        label: "Prediction",
        color: "#22D3EE",
        desc: "Generates risk classifications and predictive confidence scores.",
      },
      {
        label: "Database",
        color: "#34D399",
        desc: "Persists patient assessment logs, timestamps, and results for history tracking.",
      },
      {
        label: "Result / Report",
        color: "#FB923C",
        desc: "Renders user-friendly, real-time analytics reports with actionable guidance.",
      },
    ],
  },

  enterprise_web: {
    key: "enterprise_web",
    label: "Enterprise Web Application Flow",
    badge: "Web & API Systems",
    badgeColor: "#22D3EE",
    desc: "Robust n-tier enterprise web application architecture connecting clients with backend microservices and databases",
    cardDesc:
      "Architecture pattern applying clean separation of concerns across responsive frontend clients, RESTful APIs, modular application services, and relational persistence.",
    features: [
      "RESTful APIs",
      "Modular Services",
      "Relational DBMS",
      "Scalable Architecture",
    ],

    steps: [
      {
        id: "client",
        label: "Client Request",
        sub: "Web Browser",
        color: "#22D3EE",
        type: "input",
      },
      {
        id: "frontend",
        label: "Frontend",
        sub: "UI & Component Layer",
        color: "#8B5CF6",
        type: "process",
      },
      {
        id: "api",
        label: "REST API",
        sub: "HTTP Controllers & Auth",
        color: "#8B5CF6",
        type: "process",
      },
      {
        id: "services",
        label: "App Services",
        sub: "Business Rules & Logic",
        color: "#A78BFA",
        type: "process",
      },
      {
        id: "database",
        label: "Database",
        sub: "MySQL / SQL Server",
        color: "#34D399",
        type: "database",
      },
      {
        id: "response",
        label: "Response",
        sub: "JSON Data & State Update",
        color: "#FB923C",
        type: "output",
      },
    ],

    explanations: [
      {
        label: "Client Request",
        color: "#22D3EE",
        desc: "User initiates actions (browsing, session booking, reservations) in the browser.",
      },
      {
        label: "Frontend",
        color: "#8B5CF6",
        desc: "Handles UI state, user validation, and dispatches asynchronous API requests.",
      },
      {
        label: "REST API",
        color: "#8B5CF6",
        desc: "Processes endpoints, validates request payloads, and handles authorization.",
      },
      {
        label: "App Services",
        color: "#A78BFA",
        desc: "Implements business workflows, calculations, and transactional operations.",
      },
      {
        label: "Database",
        color: "#34D399",
        desc: "Stores normalized transactional data with ACID compliance and query indexing.",
      },
      {
        label: "Response",
        color: "#FB923C",
        desc: "Returns structured JSON data and status codes to update client state seamlessly.",
      },
    ],
  },

  sap_flow: {
    key: "sap_flow",
    label: "SAP Business Process Flow",
    badge: "Enterprise SAP",
    badgeColor: "#38BDF8",
    desc: "Integrated Order-to-Cash and Procure-to-Pay workflow across SAP SD, SAP MM, and S/4HANA",
    cardDesc:
      "Enterprise workflow pattern demonstrating sales order fulfillment, delivery logistics, invoice billing, and real-time inventory synchronization across SAP modules.",
    features: [
      "Order-to-Cash",
      "SAP SD & MM",
      "Master Data",
      "Automated Billing",
    ],

    steps: [
      {
        id: "customer_order",
        label: "Customer Order",
        sub: "Client Demand & Inquiry",
        color: "#22D3EE",
        type: "input",
      },
      {
        id: "sales_order",
        label: "Sales Order",
        sub: "SAP SD Processing",
        color: "#8B5CF6",
        type: "process",
      },
      {
        id: "delivery",
        label: "Delivery Workflow",
        sub: "Shipping & Goods Issue",
        color: "#A78BFA",
        type: "process",
      },
      {
        id: "billing",
        label: "Billing & Invoice",
        sub: "Automated Workflows",
        color: "#22D3EE",
        type: "process",
      },
      {
        id: "inventory",
        label: "Inventory Update",
        sub: "SAP MM & S/4HANA Sync",
        color: "#34D399",
        type: "database",
      },
    ],

    explanations: [
      {
        label: "Customer Order",
        color: "#22D3EE",
        desc: "Inbound demand received from customer, referencing verified customer master data.",
      },
      {
        label: "Sales Order",
        color: "#8B5CF6",
        desc: "Configured in SAP SD: pricing condition determination, credit checks, and order lines.",
      },
      {
        label: "Delivery Workflow",
        color: "#A78BFA",
        desc: "Outbound delivery creation, picking, packing, and posting of Goods Issue (PGI).",
      },
      {
        label: "Billing & Invoice",
        color: "#22D3EE",
        desc: "Automated billing document generation and accounting document posting.",
      },
      {
        label: "Inventory Update",
        color: "#34D399",
        desc: "Real-time stock ledger synchronization in SAP MM and S/4HANA ensuring inventory accuracy.",
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
   LINEAR FLOW DIAGRAM
   ============================================================ */

function LinearDiagram({ flow }: { flow: (typeof FLOWS)[FlowKey] }) {
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
    { color: "#A78BFA", label: "Logic / Inference" },
    { color: "#34D399", label: "Database / ERP" },
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
                flow.key === "sap_flow"
                  ? "database"
                  : flow.key === "django_ml"
                    ? "ai"
                    : "process"
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
    useState<FlowKey>("django_ml");

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
              Practical architecture patterns across web applications,
              ML-integrated systems, and enterprise workflows.
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
              — SHASHANK M
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
          className="systems-main systems-main--animated systems-main--rag"
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
              <LinearDiagram flow={flow} />
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
              Building Scalable &amp; Reliable Solutions.
            </span>
          </div>

          <div className="systems-footer-words">
            {[
              "DESIGN",
              "DEVELOP",
              "OPTIMIZE",
              "SCALE",
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