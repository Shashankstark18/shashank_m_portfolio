
import React, { useState } from 'react';
import './css/ContactSection.css';

/* ── Crisp Vector Icons ── */

function IconMail({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconUser({ size = 16, color = '#64748B' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconFileText({ size = 16, color = '#64748B' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function IconSend({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function IconChatBubbles({ size = 20, color = '#C084FC' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconCopy({ size = 15, color = '#94A3B8' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function IconCheck({ size = 15, color = '#34D399' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconLightbulb({ size = 18, color = '#C084FC' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function IconLinkedIn({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function IconGitHub({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconCodeBrackets({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/* ── Premium 3D Holographic Globe + Orbit Animation ── */
function HologramOrbitVisual() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const nodes = [
    {
      id: 1,
      title: 'Email',
      sub: 'varshini0235@gmail.com',
      icon: <IconMail size={18} color="#FFFFFF" />,
      className: 'holo-node-email',
      action: () => {
        window.location.href = 'mailto:varshini0235@gmail.com';
      },
    },
    {
      id: 2,
      title: 'LinkedIn',
      sub: 'linkedin.com/in/varshini-m-25349527b',
      icon: <IconLinkedIn size={17} />,
      className: 'holo-node-linkedin',
      action: () => {
        window.open('https://www.linkedin.com/in/varshini-m-25349527b', '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 3,
      title: 'GitHub',
      sub: 'github.com/varshini2304',
      icon: <IconGitHub size={17} />,
      className: 'holo-node-github',
      action: () => {
        window.open('https://github.com/varshini2304', '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 4,
      title: 'Code & Projects',
      sub: 'Interactive Repos',
      icon: <IconCodeBrackets size={18} />,
      className: 'holo-node-code',
      action: () => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: Number((y * -7).toFixed(2)),
      y: Number((x * 9).toFixed(2)),
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="holo-visual-shell">
      <style>{`
        .holo-visual-shell {
          position: relative;
          width: 100%;
          height: 440px;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1100px;
          isolation: isolate;
          overflow: visible;
        }

        .holo-visual-shell::before {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          left: 24%;
          top: 42%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background:
            radial-gradient(circle, rgba(0, 229, 255, 0.14), rgba(59, 130, 246, 0.06) 38%, transparent 72%);
          filter: blur(8px);
          pointer-events: none;
          z-index: -2;
          animation: holo-ambient-pulse 5s ease-in-out infinite;
        }

        .holo-visual-shell::after {
          content: "";
          position: absolute;
          inset: 12% 3% 7%;
          border: 1px solid rgba(56, 189, 248, 0.08);
          border-radius: 50%;
          transform: rotate(-13deg);
          box-shadow:
            0 0 55px rgba(14, 165, 233, 0.06),
            inset 0 0 45px rgba(124, 58, 237, 0.04);
          pointer-events: none;
          z-index: -1;
        }

        .holo-scene {
          position: relative;
          width: 100%;
          max-width: 410px;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .holo-depth-plane {
          position: absolute;
          left: 8%;
          top: 10%;
          width: 84%;
          height: 78%;
          border-radius: 50%;
          border: 1px solid rgba(56, 189, 248, 0.07);
          transform: translateZ(-55px) rotateX(66deg) rotateZ(-8deg);
          box-shadow: 0 0 45px rgba(14, 165, 233, 0.04);
          animation: holo-depth-drift 8s ease-in-out infinite;
        }

        .holo-globe-wrap {
          position: absolute;
          left: 1%;
          top: 4%;
          width: 58%;
          height: 86%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          transform: translateZ(10px);
        }

        .holo-globe-wrap::before,
        .holo-globe-wrap::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .holo-globe-wrap::before {
          width: 78%;
          aspect-ratio: 1;
          border: 1px solid rgba(0, 229, 255, 0.16);
          box-shadow:
            0 0 24px rgba(0, 229, 255, 0.12),
            inset 0 0 24px rgba(0, 229, 255, 0.08);
          animation: holo-ring-breathe 4s ease-in-out infinite;
        }

        .holo-globe-wrap::after {
          width: 88%;
          aspect-ratio: 1;
          border: 1px dashed rgba(129, 140, 248, 0.18);
          animation: holo-spin-slow 18s linear infinite;
        }

        .holo-svg {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: visible;
          filter:
            drop-shadow(0 0 18px rgba(0, 229, 255, 0.13))
            drop-shadow(0 15px 30px rgba(0, 0, 0, 0.25));
          transform: translateZ(24px);
        }

        .globe-core {
          transform-origin: 116px 205px;
          animation: globe-float 5s ease-in-out infinite;
        }

        .globe-wire {
          transform-origin: 116px 205px;
          animation: globe-spin 14s linear infinite;
        }

        .globe-scan {
          stroke-dasharray: 2 10;
          animation: globe-scan 5s linear infinite;
        }

        .orbit-track {
          transform-origin: 50% 50%;
          animation: orbit-breathe 4s ease-in-out infinite;
        }

        .orbit-dash {
          stroke-dasharray: 5 8;
          animation: orbit-dash 8s linear infinite;
        }

        .orbit-particle {
          animation: orbit-particle 5s linear infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .holo-node {
          position: absolute;
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          cursor: pointer;
          z-index: 10;
          animation: node-float 4.8s ease-in-out infinite;
        }

        .holo-node-email {
          left: 72%;
          top: 17%;
          animation-delay: -0.7s;
        }

        .holo-node-linkedin {
          left: 82%;
          top: 38%;
          animation-delay: -1.8s;
        }

        .holo-node-github {
          left: 76%;
          top: 61%;
          animation-delay: -2.6s;
        }

        .holo-node-code {
          left: 60%;
          top: 79%;
          animation-delay: -3.5s;
        }

        .holo-node::before {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: 15px;
          border: 1px solid rgba(0, 229, 255, 0.22);
          box-shadow:
            0 0 18px rgba(0, 229, 255, 0.08),
            inset 0 0 12px rgba(0, 229, 255, 0.04);
          animation: node-beacon 3.2s ease-out infinite;
          pointer-events: none;
        }

        .holo-node::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          left: -5px;
          top: 50%;
          border-radius: 50%;
          background: #00e5ff;
          box-shadow: 0 0 14px rgba(0, 229, 255, 0.9);
          transform: translateY(-50%) translateZ(-4px);
          opacity: 0.65;
        }

        .holo-node-card {
          position: relative;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          color: #38bdf8;
          background:
            linear-gradient(145deg, rgba(16, 42, 76, 0.96), rgba(2, 12, 28, 0.98));
          border: 1px solid rgba(56, 189, 248, 0.62);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.09),
            inset 0 -10px 20px rgba(0, 0, 0, 0.22),
            0 10px 24px rgba(0, 0, 0, 0.35),
            0 0 16px rgba(56, 189, 248, 0.18);
          transform: translateZ(34px) rotateX(2deg) rotateY(-5deg);
          transition:
            transform 0.35s cubic-bezier(0.2, 1.4, 0.3, 1),
            box-shadow 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
        }

        .holo-node-card::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: 12px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.11), transparent 28%, transparent 70%, rgba(0,229,255,0.08));
          pointer-events: none;
        }

        .holo-node:hover .holo-node-card {
          transform: translateZ(70px) translateY(-5px) rotateX(-7deg) rotateY(10deg) scale(1.16);
          border-color: #00e5ff;
          color: #ffffff;
          background:
            linear-gradient(145deg, rgba(19, 71, 111, 0.98), rgba(3, 17, 38, 0.98));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.16),
            0 18px 42px rgba(0, 0, 0, 0.38),
            0 0 34px rgba(0, 229, 255, 0.48),
            0 0 70px rgba(59, 130, 246, 0.14);
        }

        .holo-tooltip {
          position: absolute;
          left: 54px;
          top: 50%;
          min-width: max-content;
          padding: 0.42rem 0.72rem;
          border-radius: 8px;
          color: #ffffff;
          background: rgba(2, 10, 25, 0.94);
          border: 1px solid rgba(0, 229, 255, 0.5);
          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.38),
            0 0 18px rgba(0, 229, 255, 0.12);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          transform: translateY(-50%) translateZ(80px);
          animation: tooltip-in 0.22s ease-out both;
          pointer-events: none;
          z-index: 30;
        }

        .holo-connection {
          position: absolute;
          height: 1px;
          transform-origin: left center;
          background: linear-gradient(90deg, rgba(0,229,255,0), rgba(0,229,255,0.4), rgba(129,140,248,0));
          opacity: 0.35;
          filter: drop-shadow(0 0 5px rgba(0,229,255,0.35));
          pointer-events: none;
        }

        .holo-connection.one {
          width: 145px;
          left: 38%;
          top: 34%;
          transform: rotate(-13deg) translateZ(15px);
        }

        .holo-connection.two {
          width: 118px;
          left: 46%;
          top: 52%;
          transform: rotate(-5deg) translateZ(15px);
        }

        .holo-connection.three {
          width: 98px;
          left: 43%;
          top: 68%;
          transform: rotate(17deg) translateZ(15px);
        }

        .holo-status {
          position: absolute;
          left: 8%;
          bottom: 2%;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.42rem 0.7rem;
          border: 1px solid rgba(56, 189, 248, 0.14);
          border-radius: 999px;
          background: rgba(3, 12, 28, 0.52);
          backdrop-filter: blur(8px);
          color: rgba(148, 163, 184, 0.82);
          font-size: 0.63rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 8px 24px rgba(0,0,0,0.16);
        }

        .holo-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px #34d399;
          animation: status-blink 1.8s ease-in-out infinite;
        }

        @keyframes holo-ambient-pulse {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(0.92); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
        }

        @keyframes holo-depth-drift {
          0%, 100% { transform: translateZ(-55px) rotateX(66deg) rotateZ(-8deg) scale(0.96); opacity: 0.65; }
          50% { transform: translateZ(-40px) rotateX(66deg) rotateZ(-3deg) scale(1.02); opacity: 1; }
        }

        @keyframes holo-ring-breathe {
          0%, 100% { transform: scale(0.96); opacity: 0.45; }
          50% { transform: scale(1.06); opacity: 0.85; }
        }

        @keyframes holo-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes globe-float {
          0%, 100% { transform: translateY(0) translateZ(24px); }
          50% { transform: translateY(-7px) translateZ(36px); }
        }

        @keyframes globe-spin {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes globe-scan {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -120; }
        }

        @keyframes orbit-breathe {
          0%, 100% { opacity: 0.58; transform: rotate(0deg) scale(0.98); }
          50% { opacity: 1; transform: rotate(1deg) scale(1.015); }
        }

        @keyframes orbit-dash {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -120; }
        }

        @keyframes orbit-particle {
          0% { transform: rotate(0deg) translateX(0); opacity: 0.2; }
          45% { opacity: 1; }
          100% { transform: rotate(360deg) translateX(0); opacity: 0.2; }
        }

        @keyframes node-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(4px, -8px, 18px); }
        }

        @keyframes node-beacon {
          0% { transform: scale(0.85); opacity: 0.65; }
          70% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        @keyframes tooltip-in {
          from { opacity: 0; transform: translateY(-50%) translateX(-6px) translateZ(80px); }
          to { opacity: 1; transform: translateY(-50%) translateX(0) translateZ(80px); }
        }

        @keyframes status-blink {
          0%, 100% { opacity: 0.55; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @media (max-width: 900px) {
          .holo-visual-shell {
            height: 390px;
            min-height: 390px;
          }

          .holo-scene {
            max-width: 390px;
          }
        }

        @media (max-width: 560px) {
          .holo-visual-shell {
            height: 350px;
            min-height: 350px;
          }

          .holo-scene {
            max-width: 350px;
            transform: scale(0.9);
          }

          .holo-node-card {
            width: 40px;
            height: 40px;
          }

          .holo-tooltip {
            left: 47px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .holo-visual-shell *,
          .holo-visual-shell::before,
          .holo-visual-shell::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div
        className="holo-scene"
        onMouseMove={handlePointerMove}
        onMouseLeave={resetTilt}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="holo-depth-plane" />

        <div className="holo-globe-wrap">
          <svg
            className="holo-svg"
            viewBox="0 0 420 440"
            aria-label="Interactive holographic contact globe"
          >
            <defs>
              <radialGradient id="contactPlanetGradient" cx="36%" cy="32%" r="68%">
                <stop offset="0%" stopColor="#164B76" stopOpacity="0.98" />
                <stop offset="42%" stopColor="#092C4E" stopOpacity="0.96" />
                <stop offset="78%" stopColor="#041426" stopOpacity="0.99" />
                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.38" />
              </radialGradient>

              <linearGradient id="contactOrbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.1" />
                <stop offset="28%" stopColor="#00E5FF" stopOpacity="0.92" />
                <stop offset="62%" stopColor="#3B82F6" stopOpacity="0.88" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.22" />
              </linearGradient>

              <linearGradient id="contactOrbitHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
              </linearGradient>

              <filter id="contactNeonGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="contactSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            {/* Ambient 3D rings behind the globe */}
            <g opacity="0.48">
              <ellipse
                cx="150"
                cy="220"
                rx="112"
                ry="42"
                fill="none"
                stroke="#00E5FF"
                strokeWidth="1"
                strokeDasharray="3 8"
                className="orbit-dash"
              />
              <ellipse
                cx="150"
                cy="220"
                rx="98"
                ry="132"
                fill="none"
                stroke="#818CF8"
                strokeWidth="0.8"
                strokeDasharray="2 10"
                transform="rotate(28 150 220)"
                className="orbit-dash"
              />
            </g>

            {/* Main globe */}
            <g className="globe-core">
              <circle cx="150" cy="220" r="91" fill="#00E5FF" opacity="0.07" filter="url(#contactSoftGlow)" />
              <circle
                cx="150"
                cy="220"
                r="82"
                fill="url(#contactPlanetGradient)"
                stroke="#00E5FF"
                strokeWidth="1.4"
                strokeOpacity="0.64"
              />

              {/* latitude mesh */}
              <g className="globe-wire">
                <ellipse cx="150" cy="220" rx="82" ry="25" fill="none" stroke="#00E5FF" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.52" />
                <ellipse cx="150" cy="220" rx="82" ry="49" fill="none" stroke="#38BDF8" strokeWidth="0.7" strokeDasharray="2 5" opacity="0.34" />
                <ellipse cx="150" cy="188" rx="72" ry="17" fill="none" stroke="#00E5FF" strokeWidth="0.7" opacity="0.28" />
                <ellipse cx="150" cy="252" rx="72" ry="17" fill="none" stroke="#00E5FF" strokeWidth="0.7" opacity="0.28" />

                {/* longitude mesh */}
                <ellipse cx="150" cy="220" rx="28" ry="82" fill="none" stroke="#00E5FF" strokeWidth="0.9" opacity="0.48" />
                <ellipse cx="150" cy="220" rx="54" ry="82" fill="none" stroke="#38BDF8" strokeWidth="0.7" strokeDasharray="3 4" opacity="0.34" />
                <ellipse cx="150" cy="220" rx="72" ry="82" fill="none" stroke="#00E5FF" strokeWidth="0.6" opacity="0.2" />
              </g>

              {/* scan sweep */}
              <ellipse
                cx="150"
                cy="220"
                rx="79"
                ry="76"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="0.65"
                opacity="0.2"
                className="globe-scan"
              />

              {/* constellation points */}
              <g filter="url(#contactNeonGlow)">
                <circle cx="115" cy="196" r="2.2" fill="#00E5FF" />
                <circle cx="170" cy="187" r="1.6" fill="#38BDF8" />
                <circle cx="135" cy="260" r="2" fill="#00E5FF" />
                <circle cx="193" cy="231" r="2" fill="#818CF8" />
                <circle cx="103" cy="235" r="1.5" fill="#38BDF8" />
                <circle cx="158" cy="221" r="2.5" fill="#00E5FF" />
                <circle cx="178" cy="269" r="1.4" fill="#38BDF8" />
                <circle cx="127" cy="174" r="1.3" fill="#A78BFA" />
              </g>

              {/* tiny network connections */}
              <g stroke="#00E5FF" strokeWidth="0.55" opacity="0.32">
                <line x1="115" y1="196" x2="158" y2="221" />
                <line x1="158" y1="221" x2="193" y2="231" />
                <line x1="135" y1="260" x2="178" y2="269" />
                <line x1="103" y1="235" x2="135" y2="260" />
              </g>
            </g>

            {/* Main orbital ring */}
            <g className="orbit-track">
              <ellipse
                cx="150"
                cy="220"
                rx="128"
                ry="68"
                fill="none"
                stroke="url(#contactOrbitGradient)"
                strokeWidth="2.2"
                filter="url(#contactNeonGlow)"
                transform="rotate(-18 150 220)"
              />

              <ellipse
                cx="150"
                cy="220"
                rx="132"
                ry="72"
                fill="none"
                stroke="#00E5FF"
                strokeWidth="0.65"
                strokeDasharray="4 9"
                opacity="0.34"
                transform="rotate(-18 150 220)"
                className="orbit-dash"
              />

              <ellipse
                cx="150"
                cy="220"
                rx="128"
                ry="68"
                fill="none"
                stroke="url(#contactOrbitHighlight)"
                strokeWidth="1"
                strokeDasharray="22 150"
                opacity="0.85"
                transform="rotate(-18 150 220)"
              />

              <circle
                cx="274"
                cy="179"
                r="3.2"
                fill="#FFFFFF"
                filter="url(#contactNeonGlow)"
                className="orbit-particle"
              />
            </g>

            {/* Secondary orbit */}
            <ellipse
              cx="150"
              cy="220"
              rx="112"
              ry="150"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="0.65"
              strokeDasharray="2 8"
              opacity="0.18"
              transform="rotate(24 150 220)"
              className="orbit-dash"
            />

            {/* Holographic floor shadow */}
            <ellipse
              cx="150"
              cy="315"
              rx="76"
              ry="13"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="1"
              opacity="0.16"
              filter="url(#contactSoftGlow)"
            />
          </svg>
        </div>

        <div className="holo-connection one" />
        <div className="holo-connection two" />
        <div className="holo-connection three" />

        {nodes.map((node) => {
          const isHovered = activeNode === node.id;

          return (
            <div
              key={node.id}
              className={`holo-node ${node.className}`}
              onClick={node.action}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              role="button"
              tabIndex={0}
              aria-label={node.title}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  node.action();
                }
              }}
            >
              <div
                className="holo-node-card"
                style={{
                  boxShadow: isHovered
                    ? 'inset 0 1px 0 rgba(255,255,255,0.16), 0 18px 42px rgba(0,0,0,0.38), 0 0 34px rgba(0,229,255,0.48), 0 0 70px rgba(59,130,246,0.14)'
                    : undefined,
                }}
              >
                {node.icon}
              </div>

              {isHovered && (
                <div className="holo-tooltip">
                  {node.title}
                </div>
              )}
            </div>
          );
        })}

        <div className="holo-status">
          <span className="holo-status-dot" />
          <span>Connected • Interactive</span>
        </div>
      </div>
    </div>
  );
}

/* ── Main Contact Section ── */
export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', subject: 'Portfolio Inquiry', message: '' });
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:varshini0235@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}

Message:
${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      style={{
        background: 'linear-gradient(180deg, #030816 0%, #050B18 50%, #030816 100%)',
        padding: '5.5rem 0 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        #contact .contact-card {
          transform-style: preserve-3d;
          transition:
            transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1),
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        #contact .contact-card:hover {
          transform: translateY(-6px) rotateX(1.2deg);
          border-color: rgba(129, 140, 248, 0.42);
          box-shadow:
            0 20px 45px rgba(0, 0, 0, 0.34),
            0 0 34px rgba(124, 58, 237, 0.08);
        }

        #contact .contact-channel {
          transition:
            transform 0.3s cubic-bezier(0.2, 0.9, 0.3, 1),
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        #contact .contact-channel:hover {
          transform: translateX(5px) translateZ(12px);
          background: rgba(124, 58, 237, 0.06);
          box-shadow: inset 3px 0 0 rgba(56, 189, 248, 0.45);
        }

        #contact .contact-icon {
          transition:
            transform 0.35s cubic-bezier(0.2, 1.4, 0.3, 1),
            box-shadow 0.35s ease;
        }

        #contact .contact-channel:hover .contact-icon {
          transform: translateZ(18px) rotateY(-8deg) scale(1.08);
          box-shadow:
            0 10px 22px rgba(0,0,0,0.25),
            0 0 22px rgba(56, 189, 248, 0.2);
        }

        #contact .contact-status {
          position: relative;
          overflow: hidden;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        #contact .contact-status::before {
          content: "";
          position: absolute;
          inset: -80% 35% -80% -35%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(192, 132, 252, 0.13),
            rgba(56, 189, 248, 0.16),
            transparent
          );
          transform: translateX(-120%) rotate(18deg);
          animation: contact-status-sweep 5s ease-in-out infinite;
          pointer-events: none;
        }

        #contact .contact-status:hover {
          transform: translateY(-3px);
          border-color: rgba(192, 132, 252, 0.46);
          box-shadow: 0 14px 30px rgba(0,0,0,0.2);
        }

        @keyframes contact-status-sweep {
          0%, 55% { transform: translateX(-120%) rotate(18deg); }
          78%, 100% { transform: translateX(240%) rotate(18deg); }
        }

        @media (max-width: 1100px) {
          #contact .contact-grid {
            grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr) !important;
          }

          #contact .contact-orbit-column {
            grid-column: 1 / -1;
            min-height: 520px;
          }
        }

        @media (max-width: 700px) {
          #contact .contact-grid {
            grid-template-columns: 1fr !important;
          }

          #contact .contact-orbit-column {
            grid-column: auto;
            min-height: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #contact .contact-card,
          #contact .contact-channel,
          #contact .contact-icon,
          #contact .contact-status {
            transition: none !important;
          }

          #contact .contact-status::before {
            animation: none !important;
          }
        }
      `}</style>

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

        {/* ── Top Header ── */}
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
            LET&apos;S CONNECT
          </p>
          <h2
            style={{
              fontFamily: 'Courier New, Courier, monospace',
              fontSize: 'clamp(3.2rem, 4.5vw, 5.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              margin: '0 0 0.85rem',
            }}
          >
            Get in{' '}
            <span
              style={{
                display: 'inline-block',
                color: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #A78BFA 0%, #818CF8 48%, #38BDF8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                zIndex: 2,
              }}
            >
              Touch
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
            Reach out for engineering roles, collaboration, or just to talk about RAG pipelines<br />
            and Salesforce.
          </p>
        </div>

        {/* ── 3-Column Layout: Send a Message + Other Ways + Holographic Orbit Visual ── */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.16fr) minmax(300px, 0.98fr) minmax(330px, 1.06fr)',
            gap: '1.6rem',
            alignItems: 'stretch',
          }}
        >

          {/* ── COLUMN 1: "Send a Message" Form Card ── */}
          <div
            className="contact-card"
            style={{
              background: 'linear-gradient(145deg, rgba(13, 26, 54, 0.88) 0%, rgba(5, 11, 25, 0.95) 100%)',
              border: '1px solid rgba(124, 58, 237, 0.28)',
              borderRadius: '14px',
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* HUD Corner Accent */}
            <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '12px', height: '12px', borderTop: '2px solid #818CF8', borderLeft: '2px solid #818CF8', borderRadius: '2px 0 0 0' }} />

            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.6rem' }}>
                <IconMail size={22} color="#C084FC" />
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}
                >
                  Send a Message
                </h3>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* 2 Inputs Row: Name & Subject */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {/* Name Input */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.45rem',
                      }}
                    >
                      Name
                    </label>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        background: 'rgba(6, 14, 32, 0.7)',
                        border: '1px solid rgba(76, 84, 145, 0.35)',
                        borderRadius: '8px',
                        padding: '0.65rem 0.85rem',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <IconUser size={16} color="#64748B" />
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={{
                          background: 'transparent',
                          border: 'none',
                          outline: 'none',
                          color: 'var(--text-primary)',
                          fontSize: '0.82rem',
                          width: '100%',
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.45rem',
                      }}
                    >
                      Subject
                    </label>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        background: 'rgba(6, 14, 32, 0.7)',
                        border: '1px solid rgba(76, 84, 145, 0.35)',
                        borderRadius: '8px',
                        padding: '0.65rem 0.85rem',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <IconFileText size={16} color="#64748B" />
                      <input
                        type="text"
                        placeholder="Portfolio Inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          outline: 'none',
                          color: 'var(--text-primary)',
                          fontSize: '0.82rem',
                          width: '100%',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.45rem',
                    }}
                  >
                    Message
                  </label>
                  <div
                    style={{
                      background: 'rgba(6, 14, 32, 0.7)',
                      border: '1px solid rgba(76, 84, 145, 0.35)',
                      borderRadius: '8px',
                      padding: '0.75rem 0.85rem',
                    }}
                  >
                    <textarea
                      placeholder="What would you like to discuss?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      style={{
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '0.82rem',
                        width: '100%',
                        resize: 'vertical',
                        lineHeight: 1.5,
                      }}
                    />
                  </div>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    background: 'linear-gradient(90deg, #7C3AED 0%, #3B82F6 50%, #06B6D4 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.85rem 1.4rem',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 18px rgba(124, 58, 237, 0.35)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(6, 182, 212, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(124, 58, 237, 0.35)';
                  }}
                >
                  <IconSend size={16} />
                  <span>Send Message &rarr;</span>
                </button>

                {submitted && (
                  <p style={{ color: '#34D399', fontSize: '0.78rem', textAlign: 'center', margin: 0 }}>
                    Opening your mail client...
                  </p>
                )}
              </form>
            </div>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.78rem',
                textAlign: 'center',
                margin: '1.25rem 0 0',
              }}
            >
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {/* ── COLUMN 2: "Other Ways to Connect" Card ── */}
          <div
            className="contact-card"
            style={{
              background: 'linear-gradient(145deg, rgba(13, 26, 54, 0.88) 0%, rgba(5, 11, 25, 0.95) 100%)',
              border: '1px solid rgba(124, 58, 237, 0.28)',
              borderRadius: '14px',
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.6rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.6rem' }}>
                <IconChatBubbles size={22} color="#C084FC" />
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}
                >
                  Other Ways to Connect
                </h3>
              </div>

              {/* 3 Contact Channels */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {/* 1. Email */}
                <div
                  className="contact-channel"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.5rem',
                    borderRadius: '8px',
                    transition: 'background 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      className="contact-icon"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '9px',
                        background: '#2563EB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        flexShrink: 0,
                      }}
                    >
                      <IconMail size={19} color="#FFFFFF" />
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.86rem' }}>
                        Email
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
                        varshini0235@gmail.com
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard('varshini0235@gmail.com', 'email')}
                    title="Copy email"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.4rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {copiedKey === 'email' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                  </button>
                </div>

                {/* 2. LinkedIn */}
                <div
                  className="contact-channel"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.5rem',
                    borderRadius: '8px',
                    transition: 'background 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      className="contact-icon"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '9px',
                        background: '#0A66C2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        flexShrink: 0,
                      }}
                    >
                      <IconLinkedIn size={18} />
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.86rem' }}>
                        LinkedIn
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
                        linkedin.com/in/varshini-m-25349527b
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard('https://www.linkedin.com/in/varshini-m-25349527b', 'linkedin')}
                    title="Copy LinkedIn profile URL"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.4rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {copiedKey === 'linkedin' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                  </button>
                </div>

                {/* 3. GitHub */}
                <div
                  className="contact-channel"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.5rem',
                    borderRadius: '8px',
                    transition: 'background 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      className="contact-icon"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '9px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        flexShrink: 0,
                      }}
                    >
                      <IconGitHub size={18} />
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.86rem' }}>
                        GitHub
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
                        github.com/varshini2304
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard('https://github.com/varshini2304', 'github')}
                    title="Copy GitHub URL"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.4rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {copiedKey === 'github' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* "Open to Opportunities" Status Box */}
            <div
              className="contact-status"
              style={{
                background: 'rgba(124, 58, 237, 0.08)',
                border: '1px solid rgba(124, 58, 237, 0.28)',
                borderRadius: '10px',
                padding: '1.15rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.55rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconLightbulb size={17} color="#C084FC" />
                <span
                  style={{
                    color: '#C084FC',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                  }}
                >
                  Open to Opportunities
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', lineHeight: 1.55, margin: 0 }}>
                Actively looking for roles in AI/ML, Full-Stack Development, and Salesforce.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.2rem' }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#34D399',
                    boxShadow: '0 0 8px #34D399',
                    display: 'inline-block',
                  }}
                />
                <span style={{ color: '#34D399', fontSize: '0.76rem', fontWeight: 600 }}>
                  Available for new opportunities
                </span>
              </div>
            </div>
          </div>

          {/* ── COLUMN 3: Holographic Globe, Orbital Interactive Nodes & Quote ── */}
          <div
            className="contact-orbit-column"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minWidth: 0,
              position: 'relative',
              padding: '0.25rem 0 0',
            }}
          >
            {/* Top: Varshini Handwritten Quote */}
            <div style={{ textAlign: 'right', paddingRight: '0.5rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  fontFamily: "'Caveat', 'Dancing Script', 'Brush Script MT', cursive, Georgia, serif",
                  fontSize: '1.35rem',
                  fontStyle: 'italic',
                  color: '#CBD5E1',
                  lineHeight: 1.35,
                }}
              >
                &ldquo;Great conversations<br />build greater opportunities.&rdquo;
              </div>
              <div
                style={{
                  color: '#818CF8',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginTop: '0.35rem',
                }}
              >
                &mdash; VARSHINI
              </div>
            </div>

            {/* Center: Animated Celestial Hologram Globe & Orbit Nodes */}
            <HologramOrbitVisual />

            {/* Bottom: "Let's Build Something Meaningful" */}
            <div style={{ textAlign: 'right', paddingRight: '0.5rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'inline-block', textAlign: 'left' }}>
                <div
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  Let&apos;s Build
                </div>
                <div
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.02rem',
                    color: '#38BDF8',
                    lineHeight: 1.3,
                  }}
                >
                  Something Meaningful
                </div>
                <div
                  style={{
                    width: '36px',
                    height: '2.5px',
                    background: 'linear-gradient(90deg, #A855F7, #38BDF8)',
                    borderRadius: '2px',
                    marginTop: '0.4rem',
                  }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
