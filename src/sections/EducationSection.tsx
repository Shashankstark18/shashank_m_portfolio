import React, { useEffect, useRef, useState } from 'react';
import './css/EducationSection.css';

/* =========================================================
   ICONS
========================================================= */

function IconGradCap({
  color = '#22D3EE',
  size = 22,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

function IconBookOpen({
  color = '#C084FC',
  size = 20,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function IconAwardRibbon({
  color = '#C084FC',
  size = 20,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M8.56 14.89L7 22l5-3 5 3-1.56-7.12" />
    </svg>
  );
}

function IconBarChart({
  color = '#22D3EE',
  size = 18,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IconCalendar({
  color = '#A78BFA',
  size = 18,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconLayers({
  color = '#22D3EE',
  size = 18,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconUniversity({
  color = '#A78BFA',
  size = 18,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18M9 8h1m4 0h1M12 2L3 7h18L12 2z" />
      <path d="M5 10v7M9 10v7M15 10v7M19 10v7" />
    </svg>
  );
}

function IconFlag({
  color = '#FB923C',
  size = 18,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

function IconExternal({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* =========================================================
   SALESFORCE LOGO
========================================================= */

function SalesforceCloudLogo({
  width = 50,
  height = 34,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <div className="salesforce-logo-wrap">
      <svg
        width={width}
        height={height}
        viewBox="0 0 85 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.1 11.2C39.8 4.3 47.1 0 55.2 0C66.8 0 76.5 8.9 77.8 20.3C82 21.8 85 25.8 85 30.5C85 36.6 80.1 41.5 74 41.5H16C7.2 41.5 0 34.3 0 25.5C0 17 6.6 9.9 15.1 9.5C18.8 3.7 25.1 0 32.2 0C33.5 0 34.8 0.2 36.1 0.5V11.2Z"
          fill="#00A1E0"
        />
        <text
          x="42"
          y="26"
          fill="white"
          fontSize="10"
          fontWeight="800"
          fontStyle="italic"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          textAnchor="middle"
        >
          salesforce
        </text>
      </svg>
    </div>
  );
}

/* =========================================================
   ISOMETRIC GRADUATION CAP
========================================================= */

function IsometricGradCap() {
  return (
    <div className="grad-cap-animation">
      <svg
        width="110"
        height="80"
        viewBox="0 0 140 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="70,12 128,38 70,64 12,38"
          stroke="#818CF8"
          strokeWidth="1.6"
          fill="rgba(99,102,241,0.08)"
        />

        <polygon
          points="70,22 114,40 70,54 26,40"
          stroke="#22D3EE"
          strokeWidth="0.9"
          strokeDasharray="3 3"
          fill="none"
          opacity="0.6"
        />

        <ellipse
          cx="70"
          cy="38"
          rx="3"
          ry="1.8"
          fill="#22D3EE"
        />

        <path
          d="M38 48 C38 74, 102 74, 102 48"
          stroke="#818CF8"
          strokeWidth="1.5"
          fill="none"
        />

        <path
          d="M44 54 C44 76, 96 76, 96 54"
          stroke="#22D3EE"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          fill="none"
          opacity="0.4"
        />

        <path
          d="M70 38 Q104 44,116 56"
          stroke="#22D3EE"
          strokeWidth="1.4"
          fill="none"
        />

        <circle
          cx="116"
          cy="56"
          r="2"
          stroke="#22D3EE"
          strokeWidth="1"
          fill="#030816"
        />

        <path
          d="M116 58 L113 78 M116 58 L116 80 M116 58 L119 78"
          stroke="#22D3EE"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   CHIP
========================================================= */

function Chip({ label }: { label: string }) {
  return (
    <span className="education-chip">
      {label}
    </span>
  );
}

/* =========================================================
   SNAPSHOT CELL
========================================================= */

function SnapCell({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="snapshot-cell">
      <div className="snapshot-icon">{icon}</div>

      <div>
        <div className="snapshot-value">{value}</div>
        <div className="snapshot-label">{label}</div>
      </div>
    </div>
  );
}

/* =========================================================
   CERTIFICATION CARD
========================================================= */

interface CertCardProps {
  logo: React.ReactNode;
  issuer: string;
  title: string;
  desc: string;
  chips: string[];
  status: string;
  statusColor: string;
  hasExternalLink?: boolean;
  wide?: boolean;
}

function CertCard({
  logo,
  issuer,
  title,
  desc,
  chips,
  status,
  statusColor,
  hasExternalLink = false,
  wide = false,
}: CertCardProps) {
  return (
    <article className={`cert-card ${wide ? 'cert-card-wide' : ''}`}>
      <div className="cert-card-shine" />

      <div className="hud-corner hud-top-left" />
      <div className="hud-corner hud-bottom-right" />

      <div className="cert-top">
        <div className="cert-identity">
          <div className="cert-logo">
            {logo}
          </div>

          <div>
            <div className="cert-issuer">
              {issuer}
            </div>

            <h3 className="cert-title">
              {title}
            </h3>
          </div>
        </div>

        <span
          className="cert-status"
          style={{
            '--status-color': statusColor,
          } as React.CSSProperties}
        >
          <span className="cert-status-dot" />
          {status}
        </span>
      </div>

      <p className="cert-description">
        {desc}
      </p>

      <div className="cert-bottom">
        <div className="cert-chips">
          {chips.map((chip) => (
            <Chip
              key={chip}
              label={chip}
            />
          ))}
        </div>

        {hasExternalLink && (
          <a
            href="https://www.salesforce.com/trailblazer/varshinimu85ucblkvtns"
            target="_blank"
            rel="noopener noreferrer"
            className="credential-link"
            aria-label={`Verify ${title}`}
          >
            <IconExternal size={15} />
          </a>
        )}
      </div>
    </article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const eduCourses = [
    'Data Structures',
    'Algorithms',
    'Operating Systems',
    'DBMS',
    'AI / ML',
    'Web Development',
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      aria-label="Education and Certifications"
      className={`education-section ${visible ? 'education-visible' : ''
        }`}
    >
      {/* Ambient background */}
      <div className="education-ambient education-ambient-one" />
      <div className="education-ambient education-ambient-two" />

      <div className="education-grid" />

      <div className="education-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="education-header">

          <div className="education-heading reveal reveal-1">

            <p className="section-eyebrow">
              CREDENTIALS
            </p>

            <h2 className="education-title">
              Education &amp;{' '}
              <span className="gradient-text1">
                Certifications
              </span>
            </h2>

            <p className="education-subtitle">
              Continuous learning to build meaningful solutions.
              <br />
              My academic background and certifications that have
              shaped my technical journey.
            </p>

          </div>

          {/* Quote panel */}

          <div className="quote-panel reveal reveal-2">

            <div className="quote-corner quote-corner-tl" />
            <div className="quote-corner quote-corner-br" />

            <div className="quote-content">
              <blockquote>
                “Learning never exhausts the mind.”
              </blockquote>

              <cite>
                — LEONARDO DA VINCI
              </cite>
            </div>

            <IsometricGradCap />

          </div>

        </header>

        {/* =================================================
            EDUCATION BAR
        ================================================= */}

        <div className="subsection-heading reveal reveal-2">

          <div className="subsection-title">
            <IconBookOpen
              color="#C084FC"
              size={21}
            />

            <span>
              Education
            </span>
          </div>

          <div className="subsection-line" />

          <span className="subsection-badge">
            Academic Background
          </span>

        </div>

        {/* =================================================
            EDUCATION GRID
        ================================================= */}

        <div className="education-row">

          {/* EDUCATION CARD */}

          <article className="education-card reveal reveal-3" data-card-type="education">

            <div className="education-card-glow" />

            <div className="card-hud card-hud-tl" />
            <div className="card-hud card-hud-br" />

            {/* Timeline */}

            <div className="education-timeline">

              <div className="timeline-icon">
                <IconGradCap
                  color="#22D3EE"
                  size={23}
                />
              </div>

              <div className="timeline-line" />

            </div>

            {/* Content */}

            <div className="education-content">

              <div className="education-meta">

                <span className="education-period">
                  2022 – May 2026
                </span>

                <span className="education-status">
                  <span />
                  Ongoing
                </span>

              </div>

              <h3>
                B.E. / B.Tech – Computer Science &amp;
                Engineering
              </h3>

              <div className="education-institution">
                Cambridge Institute of Technology North Campus
              </div>

              <div className="education-location">
                Bengaluru, Karnataka (VTU)
              </div>

              <p className="education-description">
                Pursuing a strong foundation in software
                engineering, data structures, AI/ML, and
                full-stack development.
              </p>

              <div className="education-chips">
                {eduCourses.map((course) => (
                  <Chip
                    key={course}
                    label={course}
                  />
                ))}
              </div>

            </div>

          </article>

          {/* ACADEMIC SNAPSHOT */}

          <aside className="snapshot-card reveal reveal-4" data-card-type="snapshot">

            <div className="snapshot-heading">

              <IconBarChart
                color="#22D3EE"
                size={19}
              />

              <span>
                Academic Snapshot
              </span>

            </div>

            <div className="snapshot-grid">

              <SnapCell
                icon={
                  <IconCalendar
                    color="#A78BFA"
                    size={18}
                  />
                }
                value="8.34"
                label="CGPA (out of 10)"
              />

              <SnapCell
                icon={
                  <IconLayers
                    color="#22D3EE"
                    size={18}
                  />
                }
                value="CSE"
                label="Specialization"
              />

              <SnapCell
                icon={
                  <IconUniversity
                    color="#A78BFA"
                    size={18}
                  />
                }
                value="VTU"
                label="University"
              />

              <SnapCell
                icon={
                  <IconFlag
                    color="#FB923C"
                    size={18}
                  />
                }
                value="May 2026"
                label="Expected Graduation"
              />

            </div>

            <div className="snapshot-footer">
              USN: 1CD22CS174
              <span>•</span>
              CAMBRIDGE NORTH
              <span>•</span>
              CGPA: 8.34/10
            </div>

          </aside>

        </div>

        {/* =================================================
            CERTIFICATION HEADER
        ================================================= */}

        <div className="subsection-heading certification-heading reveal reveal-5">

          <div className="subsection-title">

            <IconAwardRibbon
              color="#C084FC"
              size={21}
            />

            <span>
              Certifications
            </span>

          </div>

          <div className="subsection-line" />

          <span className="subsection-badge certification-badge">
            Verified Credentials
          </span>

        </div>

        {/* =================================================
            CERTIFICATION CARDS
        ================================================= */}

        <div className="certification-grid" aria-label="Professional certifications">

          <div className="reveal reveal-6">

            <CertCard
              logo={
                <SalesforceCloudLogo
                  width={50}
                  height={34}
                />
              }
              issuer="SALESFORCE TRAILHEAD"
              title="Apex Callouts Superbadge"
              desc="Demonstrated skills in making external API callouts from Apex and handling responses securely."
              chips={[
                'Salesforce',
                '2025',
              ]}
              status="Completed"
              statusColor="#34D399"
              hasExternalLink
            />

          </div>

          <div className="reveal reveal-7">

            <CertCard
              logo={
                <SalesforceCloudLogo
                  width={50}
                  height={34}
                />
              }
              issuer="SALESFORCE TRAILHEAD"
              title="Salesforce Trailhead Ranger"
              desc="Achieved Ranger rank on Trailhead with 100+ badges and 50K+ points, completing hands-on superbadges and modules."
              chips={[
                'Salesforce',
                'Ranger',
                '100+ Badges',
                '50K+ Pts',
              ]}
              status="Completed"
              statusColor="#34D399"
              hasExternalLink
            />

          </div>

        </div>

        {/* =================================================
            ADDITIONAL CERTIFICATIONS
        ================================================= */}

        <div className="additional-cert reveal reveal-8" data-card-type="additional-cert">

          <CertCard
            logo={
              <div className="award-logo">
                <IconAwardRibbon
                  color="#A78BFA"
                  size={22}
                />
              </div>
            }
            issuer="OTHER CERTIFICATIONS"
            title="Agentblazer Champion 2026 & Expeditioner Rank"
            desc="Recognized as Agentblazer Champion 2026 for AI Agents & Salesforce expertise; continuous learning in RAG, backend, and cloud architectures."
            chips={[
              'Agentblazer 2026',
              'Expeditioner',
              'Generative AI',
              'RAG Pipelines',
              'Python / ML',
              'Full Stack',
            ]}
            status="In Progress"
            statusColor="#38BDF8"
            wide
          />

        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="education-footer reveal reveal-9">

          <div className="footer-learning">

            <div className="footer-gradient-line" />

            <span>
              LEARN
            </span>

            <b>×</b>

            <span>
              BUILD
            </span>

            <b>×</b>

            <span>
              GROW
            </span>

          </div>

          <span className="footer-motto">
            KNOWLEDGE FUELS BETTER SOLUTIONS.
          </span>

        </footer>

      </div>
    </section>
  );
}