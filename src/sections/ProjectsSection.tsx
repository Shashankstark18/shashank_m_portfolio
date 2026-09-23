import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import TechChip from '../components/TechChip';
import './css/ProjectsSection.css';
import { projects } from '../data/projects';
import type { Project } from '../types';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'AI / RAG', value: 'GenAI / RAG' },
  { label: 'Computer Vision', value: 'Computer Vision / AI' },
  { label: 'Backend', value: 'Backend' },
  { label: 'Full Stack', value: 'Full Stack' },
  { label: 'Frontend / UI-UX', value: 'Frontend / UI-UX' },
];

function ThumbBilingual() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#0a0f22" rx="8" />
      <rect x="20" y="20" width="90" height="22" rx="4" fill="#22D3EE22" stroke="#22D3EE" strokeWidth="0.8" />
      <text x="28" y="34" fill="#22D3EE" fontSize="9" fontFamily="DM Sans,sans-serif">English</text>
      <rect x="20" y="55" width="90" height="22" rx="4" fill="#A78BFA22" stroke="#A78BFA" strokeWidth="0.8" />
      <text x="28" y="69" fill="#A78BFA" fontSize="9" fontFamily="DM Sans,sans-serif">Japanese</text>
      {["Transcribe", "Detect Steps", "Extract Frames", "Generate SOP"].map((s, i) => (
        <g key={s}>
          <circle cx="145" cy={22 + i * 28} r="3" fill="#A78BFA" />
          <text x="152" y={22 + i * 28 + 4} fill="#94A3B8" fontSize="9" fontFamily="DM Sans,sans-serif">{s}</text>
        </g>
      ))}
      <rect x="195" y="15" width="75" height="105" rx="6" fill="#7C3AED18" stroke="#7C3AED44" strokeWidth="1" />
      <text x="206" y="32" fill="#A78BFA" fontSize="8" fontFamily="DM Sans,sans-serif">SOP Output</text>
      {[0, 1, 2, 3, 4].map(i => <rect key={i} x="205" y={38 + i * 16} width="56" height="9" rx="2" fill="#A78BFA18" />)}
      <text x="205" y="118" fill="#22D3EE" fontSize="7" fontFamily="DM Sans,sans-serif">Bilingual EN/JA</text>
    </svg>
  );
}

function ThumbRAG() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#0a0f22" rx="8" />
      <rect x="10" y="10" width="160" height="120" rx="6" fill="#0D1F3C" stroke="#A78BFA44" strokeWidth="1" />
      <text x="20" y="26" fill="#A78BFA" fontSize="9" fontWeight="bold" fontFamily="DM Sans,sans-serif">NichIn Assistant</text>
      <line x1="10" y1="32" x2="170" y2="32" stroke="#A78BFA22" />
      <rect x="18" y="38" width="100" height="18" rx="4" fill="#7C3AED33" />
      <text x="26" y="50" fill="#F0F4FF" fontSize="8" fontFamily="DM Sans,sans-serif">How can I help you?</text>
      {["Project_Manual.pdf", "SOP_Guidelines.pdf", "Technical_Docs.pdf"].map((d, i) => (
        <g key={d}>
          <rect x="18" y={65 + i * 17} width="140" height="13" rx="3" fill="#22D3EE11" stroke="#22D3EE33" strokeWidth="0.6" />
          <text x="25" y={65 + i * 17 + 9} fill="#22D3EE" fontSize="7.5" fontFamily="DM Sans,sans-serif">{d}</text>
        </g>
      ))}
      <rect x="180" y="10" width="90" height="120" rx="6" fill="#0D1F3C" stroke="#34D39944" strokeWidth="1" />
      <text x="190" y="26" fill="#34D399" fontSize="8" fontFamily="DM Sans,sans-serif">RAG Pipeline</text>
      {["Embed", "Retrieve", "Rerank", "Generate"].map((s, i) => (
        <g key={s}>
          <rect x="188" y={33 + i * 22} width="74" height="15" rx="3" fill="#34D39918" stroke="#34D39933" strokeWidth="0.6" />
          <text x="196" y={33 + i * 22 + 10} fill="#94A3B8" fontSize="8" fontFamily="DM Sans,sans-serif">{s}</text>
        </g>
      ))}
    </svg>
  );
}

function ThumbStudyEye() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#0a0f22" rx="8" />
      <ellipse cx="80" cy="70" rx="45" ry="55" fill="#22D3EE0A" stroke="#22D3EE44" strokeWidth="1" />
      <ellipse cx="65" cy="60" rx="8" ry="6" fill="none" stroke="#22D3EE" strokeWidth="1.2" />
      <ellipse cx="95" cy="60" rx="8" ry="6" fill="none" stroke="#22D3EE" strokeWidth="1.2" />
      <path d="M68 85 Q80 95 92 85" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="35" y="15" width="90" height="110" rx="4" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x="175" y="10" width="95" height="120" rx="6" fill="#0D1F3C" stroke="#A78BFA44" strokeWidth="1" />
      <text x="185" y="26" fill="#A78BFA" fontSize="8.5" fontWeight="bold" fontFamily="DM Sans,sans-serif">Engagement</text>
      {[{ l: "Focused", v: 2, c: "#34D399" }, { l: "Distracted", v: 1, c: "#FB923C" }, { l: "Engaged", v: 3, c: "#22D3EE" }, { l: "Others", v: 0, c: "#64748B" }].map(({ l, v, c }, i) => (
        <g key={l}>
          <text x="185" y={38 + i * 22} fill="#94A3B8" fontSize="8" fontFamily="DM Sans,sans-serif">{l}</text>
          <text x="252" y={38 + i * 22} fill={c} fontSize="10" fontWeight="bold" fontFamily="DM Sans,sans-serif">{v}</text>
          <rect x="185" y={42 + i * 22} width={v * 18} height="5" rx="2" fill={c + "88"} />
        </g>
      ))}
    </svg>
  );
}

function ThumbSpringBoot() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#0a0f22" rx="8" />
      <circle cx="48" cy="30" r="16" fill="#34D39922" stroke="#34D399" strokeWidth="1.5" />
      <text x="40" y="35" fill="#34D399" fontSize="12" fontFamily="sans-serif">S</text>
      <text x="68" y="35" fill="#34D399" fontSize="10" fontWeight="bold" fontFamily="DM Sans,sans-serif">Spring Boot</text>
      {["Product Service", "Order Service", "Payment Service", "User Service"].map((s, i) => (
        <g key={s}>
          <rect x="18" y={52 + i * 20} width="130" height="15" rx="3" fill="#34D39912" stroke="#34D39940" strokeWidth="0.8" />
          <text x="26" y={52 + i * 20 + 10} fill="#94A3B8" fontSize="8.5" fontFamily="DM Sans,sans-serif">{s}</text>
        </g>
      ))}
      <ellipse cx="220" cy="55" rx="35" ry="14" fill="#A78BFA18" stroke="#A78BFA55" strokeWidth="1" />
      <rect x="185" y="55" width="70" height="40" fill="#A78BFA08" stroke="#A78BFA44" strokeWidth="1" />
      <ellipse cx="220" cy="95" rx="35" ry="14" fill="#A78BFA18" stroke="#A78BFA55" strokeWidth="1" />
      <text x="202" y="78" fill="#A78BFA" fontSize="9" fontFamily="DM Sans,sans-serif">PostgreSQL</text>
      <text x="198" y="120" fill="#22D3EE" fontSize="7.5" fontFamily="DM Sans,sans-serif">JWT + Redis + Docker</text>
    </svg>
  );
}

function ThumbPLMonitor() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#0a0f22" rx="8" />
      <text x="16" y="20" fill="#F0F4FF" fontSize="10" fontWeight="bold" fontFamily="DM Sans,sans-serif">Nifty 50</text>
      <text x="110" y="20" fill="#34D399" fontSize="9" fontFamily="DM Sans,sans-serif">+0.84%</text>
      <defs>
        <linearGradient id="plGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#34D39900" />
        </linearGradient>
      </defs>
      <polyline points="16,100 45,85 70,92 100,68 130,75 160,55 195,62 230,45 260,52" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="16,100 45,85 70,92 100,68 130,75 160,55 195,62 230,45 260,52 260,115 16,115" fill="url(#plGrad)" opacity="0.25" />
      {["Live Data", "P&L Tracking", "Insights"].map((l, i) => (
        <g key={l}>
          <rect x={16 + i * 85} y="118" width="78" height="16" rx="3" fill="#F59E0B18" stroke="#F59E0B33" strokeWidth="0.8" />
          <text x={20 + i * 85} y="130" fill="#F59E0B" fontSize="8" fontFamily="DM Sans,sans-serif">{l}</text>
        </g>
      ))}
    </svg>
  );
}


function ThumbMeetingRoom() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#060e20" rx="8" />
      <rect x="18" y="14" width="112" height="20" rx="4" fill="#22D3EE18" stroke="#22D3EE55" strokeWidth="0.8" />
      <text x="26" y="27" fill="#22D3EE" fontSize="8" fontWeight="bold" fontFamily="DM Sans,sans-serif">TOYOTA DEMO &bull; SCHEDULER</text>
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <rect x="18" y={42 + r * 28} width="65" height="22" rx="4" fill="#7C3AED15" stroke="#7C3AED40" strokeWidth="0.8" />
          <text x="24" y={56 + r * 28} fill="#E2E8F0" fontSize="7.5" fontFamily="DM Sans,sans-serif">Room {String.fromCharCode(65 + r)}</text>
          <rect x="90" y={42 + r * 28} width="52" height="22" rx="3" fill="#34D39918" stroke="#34D39944" strokeWidth="0.8" />
          <text x="96" y={56 + r * 28} fill="#34D399" fontSize="7" fontFamily="DM Sans,sans-serif">09:00 - 11:00</text>
          <rect x="148" y={42 + r * 28} width="52" height="22" rx="3" fill="#38BDF818" stroke="#38BDF844" strokeWidth="0.8" />
          <text x="154" y={56 + r * 28} fill="#38BDF8" fontSize="7" fontFamily="DM Sans,sans-serif">11:30 - 13:00</text>
          <rect x="206" y={42 + r * 28} width="58" height="22" rx="3" fill="#F59E0B18" stroke="#F59E0B44" strokeWidth="0.8" />
          <text x="212" y={56 + r * 28} fill="#F59E0B" fontSize="7" fontFamily="DM Sans,sans-serif">Reserved</text>
        </g>
      ))}
      <text x="18" y="132" fill="#22D3EE" fontSize="7.5" fontFamily="DM Sans,sans-serif">&bull; Real-Time Sync &bull; Role-Based Access</text>
    </svg>
  );
}

function ThumbEcommerce() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#080e1c" rx="8" />
      <rect x="18" y="14" width="85" height="20" rx="4" fill="#34D39918" stroke="#34D39955" strokeWidth="0.8" />
      <text x="25" y="27" fill="#34D399" fontSize="8" fontWeight="bold" fontFamily="DM Sans,sans-serif">STOREFRONT &bull; CART</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={18 + i * 82} y="42" width="74" height="66" rx="5" fill="#1e293b33" stroke="#34D39933" strokeWidth="0.8" />
          <rect x={26 + i * 82} y="48" width="58" height="30" rx="3" fill="#34D39912" />
          <circle cx={55 + i * 82} cy="63" r="8" fill="#34D39933" />
          <rect x={26 + i * 82} y="84" width="40" height="6" rx="2" fill="#94A3B833" />
          <rect x={26 + i * 82} y="94" width="24" height="8" rx="2" fill="#34D399" />
          <text x={31 + i * 82} y="100" fill="#04121E" fontSize="6" fontWeight="bold" fontFamily="DM Sans,sans-serif">BUY</text>
        </g>
      ))}
      <text x="18" y="128" fill="#34D399" fontSize="7.5" fontFamily="DM Sans,sans-serif">&bull; Secure Checkout &bull; Live on Vercel</text>
    </svg>
  );
}

function ThumbFinance() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="finGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <rect width="280" height="140" fill="#080e1c" rx="8" />
      <rect x="18" y="14" width="90" height="20" rx="4" fill="#F59E0B18" stroke="#F59E0B55" strokeWidth="0.8" />
      <text x="25" y="27" fill="#F59E0B" fontSize="8" fontWeight="bold" fontFamily="DM Sans,sans-serif">FINANCE &bull; METRICS</text>
      <polyline points="18,102 52,86 86,94 120,68 156,76 190,52 225,58 262,38" fill="none" stroke="#F59E0B" strokeWidth="2" />
      <polygon points="18,102 52,86 86,94 120,68 156,76 190,52 225,58 262,38 262,114 18,114" fill="url(#finGrad)" />
      <text x="18" y="130" fill="#F59E0B" fontSize="7.5" fontFamily="DM Sans,sans-serif">&bull; Cash Flow &bull; Asset Telemetry &bull; Vercel</text>
    </svg>
  );
}

function ThumbNexaCore() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="140" fill="#050816" rx="8" />
      {[[140, 70], [100, 40], [180, 40], [80, 90], [200, 90], [120, 115], [160, 115]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="#7C3AED33" stroke="#A78BFA" strokeWidth="1.2" />
      ))}
      {[[140, 70, 100, 40], [140, 70, 180, 40], [140, 70, 80, 90], [140, 70, 200, 90], [100, 40, 80, 90], [180, 40, 200, 90], [80, 90, 120, 115], [200, 90, 160, 115]].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7C3AED55" strokeWidth="1" />
      ))}
      <circle cx="140" cy="70" r="10" fill="#7C3AED55" stroke="#A78BFA" strokeWidth="1.5" />
      <rect x="16" y="10" width="72" height="18" rx="3" fill="#7C3AED" />
      <text x="24" y="22" fill="white" fontSize="8" fontFamily="DM Sans,sans-serif">Get Started</text>
      <text x="16" y="132" fill="#A78BFA" fontSize="7.5" fontFamily="DM Sans,sans-serif">Innovative Solutions for a Smarter Tomorrow</text>
    </svg>
  );
}

const THUMBNAILS: Record<string, ReactNode> = {
  'rag-chatbot': <ThumbRAG />,
  'meeting-room': <ThumbMeetingRoom />,
  'e-commerce': <ThumbEcommerce />,
  'finance-dashboard': <ThumbFinance />,
  'studyeye': <ThumbStudyEye />,
  'bilingual-agent': <ThumbBilingual />,
  'spring-ecommerce': <ThumbSpringBoot />,
  'pl-monitor': <ThumbPLMonitor />,
  'nexacore': <ThumbNexaCore />,
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
          <span className="project-github project-github--disabled">
            GitHub ↗
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
              Six verified projects spanning AI/ML, full-stack engineering,
              and UI craft.
              <br />
              Each project reflects real-world problems, practical solutions,
              and measurable impact.
            </p>
          </div>

          <div className="projects-quote">
            <span className="quote-corner quote-corner--tl" />
            <span className="quote-corner quote-corner--br" />

            <blockquote>
              "Building practical AI solutions that solve real problems."
            </blockquote>

            <cite>— VARSHINI</cite>

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
