import { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, Users, Globe, CheckCircle2 } from 'lucide-react';
import { achievements, languages } from '../data/achievements';

export default function AchievementsSection() {
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
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const icons: Record<string, React.ReactNode> = {
    'research-publication': <BookOpen size={20} color="#A78BFA" />,
    'academic-excellence': <Award size={20} color="#22D3EE" />,
    'leadership-ssit': <Users size={20} color="#34D399" />,
  };

  const badgeColors: Record<string, string> = {
    'research-publication': '#A78BFA',
    'academic-excellence': '#22D3EE',
    'leadership-ssit': '#34D399',
  };

  return (
    <section
      ref={sectionRef}
      id="achievements"
      aria-label="Achievements and Leadership"
      style={{
        position: 'relative',
        padding: '5.5rem 0 4rem',
        background: 'linear-gradient(180deg, #050B18 0%, #030816 50%, #050B18 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Starfield / Matrix Grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(124, 58, 237, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.035) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3.25rem' }}>
          <p
            style={{
              color: '#818CF8',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '0.55rem',
            }}
          >
            HONORS &amp; INITIATIVE
          </p>
          <h2
            style={{
              fontFamily: 'Courier New, Courier, monospace',
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              margin: '0 0 0.85rem',
            }}
          >
            Achievements &amp;{' '}
            <span
              style={{
                display: 'inline-block',
                color: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #A78BFA 0%, #818CF8 48%, #38BDF8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Leadership
            </span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.94rem',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: '620px',
            }}
          >
            Academic research publication, competitive excellence, and active student representation.
          </p>
        </div>

        {/* 2-Column Grid: Achievements (Left) + Languages & Highlights (Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.6rem',
          }}
        >
          {/* Achievements Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {achievements.map((item) => (
              <article
                key={item.id}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  position: 'relative',
                  border: '1px solid rgba(124, 58, 237, 0.25)',
                  borderRadius: '14px',
                  background: 'linear-gradient(145deg, rgba(13, 26, 54, 0.88) 0%, rgba(5, 11, 25, 0.95) 100%)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                }}
              >
                {/* HUD Accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '-1px',
                    width: '12px',
                    height: '12px',
                    borderTop: `2px solid ${badgeColors[item.id] || '#818CF8'}`,
                    borderLeft: `2px solid ${badgeColors[item.id] || '#818CF8'}`,
                    borderRadius: '2px 0 0 0',
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {icons[item.id]}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          color: badgeColors[item.id] || '#818CF8',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {item.badge && (
                    <span
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: '12px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        background: `${badgeColors[item.id] || '#818CF8'}18`,
                        border: `1px solid ${badgeColors[item.id] || '#818CF8'}40`,
                        color: badgeColors[item.id] || '#818CF8',
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.45rem',
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>

                {item.organization && (
                  <p
                    style={{
                      color: 'var(--violet-glow)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      marginBottom: '0.65rem',
                    }}
                  >
                    {item.organization}
                  </p>
                )}

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.84rem',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          {/* Languages & Professional Highlights (Right Column) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {/* Languages Card */}
            <article
              className="glass-card"
              style={{
                padding: '1.5rem',
                position: 'relative',
                border: '1px solid rgba(124, 58, 237, 0.25)',
                borderRadius: '14px',
                background: 'linear-gradient(145deg, rgba(13, 26, 54, 0.88) 0%, rgba(5, 11, 25, 0.95) 100%)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                  }}
                >
                  <Globe size={20} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: '#38BDF8',
                      textTransform: 'uppercase',
                    }}
                  >
                    COMMUNICATION
                  </span>
                  <h3
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}
                  >
                    Languages
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {languages.map((lang) => (
                  <div
                    key={lang.language}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(6, 14, 32, 0.6)',
                      border: '1px solid rgba(76, 84, 145, 0.25)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <CheckCircle2 size={16} color="#34D399" />
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                        {lang.language}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        fontFamily: 'Courier New, monospace',
                      }}
                    >
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            {/* Leadership & Value Summary Card */}
            <article
              className="glass-card"
              style={{
                padding: '1.5rem',
                position: 'relative',
                border: '1px solid rgba(124, 58, 237, 0.25)',
                borderRadius: '14px',
                background: 'linear-gradient(145deg, rgba(13, 26, 54, 0.88) 0%, rgba(5, 11, 25, 0.95) 100%)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: '#C084FC',
                    textTransform: 'uppercase',
                    marginBottom: '0.45rem',
                  }}
                >
                  COLLABORATION
                </p>
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Teamwork &amp; Student Representation
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.84rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Demonstrated ability to balance rigorous technical development with community leadership, cross-departmental coordination, and academic event management at Sri Siddhartha Institute of Technology.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid rgba(124, 58, 237, 0.15)',
                  marginTop: '1.2rem',
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#34D399',
                    boxShadow: '0 0 8px #34D399',
                    display: 'inline-block',
                  }}
                />
                <span style={{ color: '#34D399', fontSize: '0.78rem', fontWeight: 600 }}>
                  Active Contributor &amp; Technical Problem Solver
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
