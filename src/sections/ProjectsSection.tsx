import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import TechChip from '../components/TechChip';
import './css/ProjectsSection.css';
import { projects } from '../data/projects';
import type { Project } from '../types';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'SAP / Enterprise', value: 'SAP / Enterprise Systems' },
  { label: 'ML / Django', value: 'Machine Learning / Django' },
  { label: 'Web Applications', value: 'Web Application' },
  { label: 'Desktop / Database', value: 'Desktop / Database Application' },
];

function ThumbSAP() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#060f1f" rx="8" />
      <rect x="16" y="14" width="134" height="20" rx="4" fill="#38BDF818" stroke="#38BDF855" strokeWidth="0.8" />
      <text x="24" y="27" fill="#38BDF8" fontSize="8" fontWeight="bold" fontFamily="DM Sans,sans-serif">SAP S/4HANA &bull; SD &amp; MM</text>

      {/* Order to Cash Flow */}
      <rect x="16" y="42" width="70" height="26" rx="4" fill="#7C3AED18" stroke="#7C3AED44" strokeWidth="0.8" />
      <text x="22" y="54" fill="#E2E8F0" fontSize="7.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">Sales Order</text>
      <text x="22" y="63" fill="#A78BFA" fontSize="6.5" fontFamily="DM Sans,sans-serif">Order-to-Cash</text>

      <path d="M88 55 L102 55" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="2 2" />

      <rect x="104" y="42" width="72" height="26" rx="4" fill="#22D3EE18" stroke="#22D3EE44" strokeWidth="0.8" />
      <text x="110" y="54" fill="#E2E8F0" fontSize="7.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">Delivery / Billing</text>
      <text x="110" y="63" fill="#22D3EE" fontSize="6.5" fontFamily="DM Sans,sans-serif">Auto Workflows</text>

      <path d="M178 55 L192 55" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="2 2" />

      <rect x="194" y="42" width="70" height="26" rx="4" fill="#34D39918" stroke="#34D39944" strokeWidth="0.8" />
      <text x="200" y="54" fill="#E2E8F0" fontSize="7.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">Inventory Sync</text>
      <text x="200" y="63" fill="#34D399" fontSize="6.5" fontFamily="DM Sans,sans-serif">Stock Updated</text>

      {/* Procure to Pay and Master Data */}
      <rect x="16" y="78" width="118" height="48" rx="4" fill="#0B1A33" stroke="#38BDF833" strokeWidth="0.8" />
      <text x="24" y="92" fill="#38BDF8" fontSize="7" fontWeight="bold" fontFamily="DM Sans,sans-serif">Procure-to-Pay Workflow</text>
      <text x="24" y="103" fill="#94A3B8" fontSize="6.5" fontFamily="DM Sans,sans-serif">&bull; Purchase Req &rarr; Goods Receipt</text>
      <text x="24" y="114" fill="#94A3B8" fontSize="6.5" fontFamily="DM Sans,sans-serif">&bull; Automated MM Invoice Verification</text>

      <rect x="146" y="78" width="118" height="48" rx="4" fill="#0B1A33" stroke="#34D39933" strokeWidth="0.8" />
      <text x="154" y="92" fill="#34D399" fontSize="7" fontWeight="bold" fontFamily="DM Sans,sans-serif">Master Data Management</text>
      <text x="154" y="103" fill="#94A3B8" fontSize="6.5" fontFamily="DM Sans,sans-serif">&bull; Customer &amp; Vendor Records</text>
      <text x="154" y="114" fill="#94A3B8" fontSize="6.5" fontFamily="DM Sans,sans-serif">&bull; Real-time Material Master</text>
    </svg>
  );
}

function ThumbAsthma() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#070c1e" rx="8" />
      <rect x="16" y="14" width="134" height="20" rx="4" fill="#A78BFA18" stroke="#A78BFA55" strokeWidth="0.8" />
      <text x="24" y="27" fill="#A78BFA" fontSize="8" fontWeight="bold" fontFamily="DM Sans,sans-serif">DJANGO &bull; ML PREDICTION</text>
      <rect x="190" y="14" width="74" height="20" rx="4" fill="#34D39918" stroke="#34D39944" strokeWidth="0.8" />
      <text x="198" y="27" fill="#34D399" fontSize="7" fontWeight="bold" fontFamily="DM Sans,sans-serif">IRJMETS &bull; 2023</text>

      {/* Analytics Gauge / Curves */}
      <rect x="16" y="42" width="110" height="84" rx="5" fill="#0E1935" stroke="#A78BFA33" strokeWidth="0.8" />
      <text x="24" y="56" fill="#E2E8F0" fontSize="7.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">Risk Assessment</text>
      <polyline points="24,96 44,82 64,88 84,68 104,74" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="104" cy="74" r="3" fill="#22D3EE" />
      <text x="24" y="114" fill="#22D3EE" fontSize="7" fontFamily="DM Sans,sans-serif">Trained ML Model Score: 94%</text>

      {/* Reports and Real-Time Insights */}
      <rect x="136" y="42" width="128" height="84" rx="5" fill="#0E1935" stroke="#22D3EE33" strokeWidth="0.8" />
      <text x="144" y="56" fill="#22D3EE" fontSize="7.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">Predictive Analytics</text>
      {[
        { l: "Symptom Analysis", v: "Processed", c: "#34D399" },
        { l: "Risk Level", v: "Low - Monitored", c: "#38BDF8" },
        { l: "Patient Report", v: "Generated", c: "#A78BFA" },
      ].map((item, i) => (
        <g key={item.l}>
          <text x="144" y={72 + i * 16} fill="#94A3B8" fontSize="7" fontFamily="DM Sans,sans-serif">{item.l}</text>
          <text x="206" y={72 + i * 16} fill={item.c} fontSize="7" fontWeight="bold" fontFamily="DM Sans,sans-serif">{item.v}</text>
        </g>
      ))}
      <text x="144" y="118" fill="#64748B" fontSize="6.5" fontFamily="DM Sans,sans-serif">&bull; Real-Time Data Insights &bull; Django</text>
    </svg>
  );
}

function ThumbCyberCafe() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#060e20" rx="8" />
      <rect x="16" y="14" width="134" height="20" rx="4" fill="#22D3EE18" stroke="#22D3EE55" strokeWidth="0.8" />
      <text x="24" y="27" fill="#22D3EE" fontSize="8" fontWeight="bold" fontFamily="DM Sans,sans-serif">CYBER CAFE &bull; OPERATIONS</text>
      <text x="175" y="27" fill="#F59E0B" fontSize="7.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">Live Session Monitor</text>

      {/* Terminals Grid */}
      {[0, 1, 2].map((col) => (
        <g key={col}>
          <rect x={16 + col * 42} y="44" width="36" height="40" rx="4" fill="#132342" stroke="#22D3EE33" strokeWidth="0.8" />
          <text x={22 + col * 42} y="58" fill="#E2E8F0" fontSize="7" fontWeight="bold" fontFamily="DM Sans,sans-serif">PC-{col + 1}</text>
          <circle cx={42 + col * 42} cy="56" r="2.5" fill={col === 1 ? "#FB923C" : "#34D399"} />
          <text x={22 + col * 42} y="74" fill={col === 1 ? "#FB923C" : "#34D399"} fontSize="6.5" fontFamily="DM Sans,sans-serif">
            {col === 1 ? "Active" : "Open"}
          </text>
        </g>
      ))}

      {/* Billing & Search panel */}
      <rect x="150" y="44" width="114" height="82" rx="5" fill="#0A152E" stroke="#7C3AED33" strokeWidth="0.8" />
      <text x="158" y="58" fill="#A78BFA" fontSize="7.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">Automated Billing</text>
      <rect x="158" y="66" width="98" height="14" rx="3" fill="#22D3EE11" stroke="#22D3EE22" strokeWidth="0.6" />
      <text x="164" y="76" fill="#22D3EE" fontSize="6.5" fontFamily="DM Sans,sans-serif">Search Customer / ID...</text>
      <text x="158" y="94" fill="#94A3B8" fontSize="7" fontFamily="DM Sans,sans-serif">Time Elapsed: 01h 45m</text>
      <text x="158" y="106" fill="#34D399" fontSize="7" fontWeight="bold" fontFamily="DM Sans,sans-serif">Calculated: &#8377;70.00</text>
      <text x="158" y="118" fill="#64748B" fontSize="6.5" fontFamily="DM Sans,sans-serif">&bull; Client Validation &bull; JS Dynamic</text>

      <rect x="16" y="94" width="122" height="32" rx="4" fill="#0A152E" stroke="#34D39922" strokeWidth="0.8" />
      <text x="24" y="107" fill="#34D399" fontSize="7" fontWeight="bold" fontFamily="DM Sans,sans-serif">Customer DB Management</text>
      <text x="24" y="118" fill="#94A3B8" fontSize="6.5" fontFamily="DM Sans,sans-serif">Instant registration &amp; history logging</text>
    </svg>
  );
}

function ThumbFlight() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#050d1e" rx="8" />
      <rect x="16" y="14" width="134" height="20" rx="4" fill="#34D39918" stroke="#34D39955" strokeWidth="0.8" />
      <text x="24" y="27" fill="#34D399" fontSize="8" fontWeight="bold" fontFamily="DM Sans,sans-serif">FLIGHT MANAGEMENT SYSTEM</text>
      <text x="180" y="27" fill="#38BDF8" fontSize="7.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">SQL Server &bull; .NET</text>

      {/* Flight Schedule Table */}
      <rect x="16" y="44" width="154" height="82" rx="5" fill="#0C1833" stroke="#34D39933" strokeWidth="0.8" />
      <text x="24" y="58" fill="#34D399" fontSize="7.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">Flight Schedules &amp; Status</text>
      {[
        { code: "AI-502", dest: "DEL → BLR", time: "10:30", status: "On-Time", color: "#34D399" },
        { code: "6E-204", dest: "BOM → BLR", time: "12:15", status: "Boarding", color: "#F59E0B" },
        { code: "UK-811", dest: "CCU → BLR", time: "14:40", status: "Confirmed", color: "#38BDF8" },
      ].map((f, i) => (
        <g key={f.code}>
          <text x="24" y={74 + i * 16} fill="#E2E8F0" fontSize="7" fontWeight="bold" fontFamily="DM Sans,sans-serif">{f.code}</text>
          <text x="64" y={74 + i * 16} fill="#94A3B8" fontSize="6.5" fontFamily="DM Sans,sans-serif">{f.dest}</text>
          <text x="108" y={74 + i * 16} fill="#94A3B8" fontSize="6.5" fontFamily="DM Sans,sans-serif">{f.time}</text>
          <text x="134" y={74 + i * 16} fill={f.color} fontSize="6.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">{f.status}</text>
        </g>
      ))}

      {/* Reservation & Transactions */}
      <rect x="178" y="44" width="86" height="82" rx="5" fill="#0C1833" stroke="#38BDF833" strokeWidth="0.8" />
      <text x="186" y="58" fill="#38BDF8" fontSize="7.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">Reservation</text>
      <text x="186" y="72" fill="#94A3B8" fontSize="6.5" fontFamily="DM Sans,sans-serif">&bull; Seat Booking</text>
      <text x="186" y="84" fill="#94A3B8" fontSize="6.5" fontFamily="DM Sans,sans-serif">&bull; Passenger Info</text>
      <text x="186" y="96" fill="#94A3B8" fontSize="6.5" fontFamily="DM Sans,sans-serif">&bull; ACID Transact</text>
      <text x="186" y="114" fill="#34D399" fontSize="6.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">SQL Database</text>
    </svg>
  );
}

const THUMBNAILS: Record<string, ReactNode> = {
  'sap-management': <ThumbSAP />,
  'asthma-prediction': <ThumbAsthma />,
  'cyber-cafe': <ThumbCyberCafe />,
  'flight-management': <ThumbFlight />,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);

  const num = String(index + 1).padStart(2, '0');
  const total = String(projects.length).padStart(2, '0');

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
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`project-card ${visible ? 'project-card--visible' : ''}`}
      style={{
        '--project-accent': project.categoryColor,
        '--project-delay': `${index * 90}ms`,
      } as CSSProperties}
      aria-label={project.title}
    >
      <div className="project-card-glow" aria-hidden="true" />
      <div className="project-card-shine" aria-hidden="true" />

      {/* Corner HUD accents */}
      <div className="project-corner project-corner--tl" aria-hidden="true" />
      <div className="project-corner project-corner--br" aria-hidden="true" />

      {/* Header */}
      <div className="project-card-header">
        <span className="project-category">
          <span className="project-category-dot" />
          {project.category}
        </span>

        <span className="project-index">
          {num} / {total}
        </span>
      </div>

      {/* Body */}
      <div className="project-card-body">
        <div className="project-copy">
          <h3 className="project-title">{project.title}</h3>

          <p className="project-description">
            {project.description}
          </p>
        </div>

        <div className="project-thumbnail">
          {THUMBNAILS[project.id]}
        </div>
      </div>

      {/* Technology stack */}
      <div className="project-stack">
        {project.stack.slice(0, 6).map((technology) => (
          <TechChip key={technology} label={technology} />
        ))}

        {project.stack.length > 6 && (
          <span className="project-more-tech">
            +{project.stack.length - 6}
          </span>
        )}
      </div>

      {/* Expandable details */}
      <div className={`project-details ${expanded ? 'project-details--open' : ''}`}>
        <ul>
          {project.details.map((detail, detailIndex) => (
            <li key={`${project.id}-detail-${detailIndex}`}>
              <span>▸</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="project-card-footer">
        <button
          id={`view-details-btn-${project.id}`}
          className="project-details-button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
        >
          {expanded ? 'Hide Details' : 'View Details'}
          <ArrowRight
            size={13}
            className={`project-arrow ${expanded ? 'project-arrow--open' : ''}`}
          />
        </button>

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={14} />
            GitHub
            <ExternalLink size={10} />
          </a>
        ) : (
          <span className="project-github project-github--disabled" title="Repository link pending">
            <GithubIcon size={14} />
            Repo Pending
          </span>
        )}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="projects-section"
      aria-label="Featured Projects"
    >
      {/* Ambient background */}
      <div className="projects-background" aria-hidden="true">
        <div className="projects-orb projects-orb--one" />
        <div className="projects-orb projects-orb--two" />
        <div className="projects-grid" />

        <span className="projects-star projects-star--1" />
        <span className="projects-star projects-star--2" />
        <span className="projects-star projects-star--3" />
        <span className="projects-star projects-star--4" />
        <span className="projects-star projects-star--5" />
        <span className="projects-star projects-star--6" />
      </div>

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <div className="projects-heading">
            <p className="projects-eyebrow">
              <span className="projects-eyebrow-line" />
              PORTFOLIO
            </p>

            <h2 className="projects-title">
              Featured <span>Projects</span>
            </h2>

            <p className="projects-subtitle">
              Four verified projects spanning enterprise SAP workflows, full-stack Django &amp; ML,
              web platforms, and database applications.
              <br />
              Each project reflects real-world problems, practical solutions,
              and measurable impact.
            </p>
          </div>

          <div className="projects-quote">
            <span className="quote-corner quote-corner--tl" />
            <span className="quote-corner quote-corner--br" />

            <blockquote>
              "Building scalable web applications, ML-integrated solutions, and enterprise systems."
            </blockquote>

            <cite>— SHASHANK M</cite>

            <div className="quote-code" aria-hidden="true">
              <span>&lt;</span>
              <span>/&gt;</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="projects-toolbar">
          <div className="project-filters" role="tablist" aria-label="Project categories">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  id={`filter-btn-${category.value
                    .replace(/\s+/g, '-')
                    .replace(/\//g, '-')}`}
                  className={`project-filter ${isActive ? 'project-filter--active' : ''}`}
                  onClick={() => setActiveCategory(category.value)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          <span className="projects-count">
            <span className="projects-count-dot" />
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Project grid */}
        <div className="projects-grid-list">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="projects-footer">
          <div className="projects-footer-left">
            <span className="projects-footer-line" />
            <span>REAL PROJECTS · REAL IMPACT</span>
          </div>

          <span>CRAFTED WITH PASSION · ALWAYS LEARNING</span>
        </div>
      </div>
    </section>
  );
}
