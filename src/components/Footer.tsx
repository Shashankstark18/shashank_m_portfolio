/* ─────────────────────────────────────────────────────────────
   Footer Component
   Matches reference design:
   - Left: Copyright with full technologies
   - Right: IDEAS × CODE × COLLABORATE × GROW
───────────────────────────────────────────────────────────── */

import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 py-6"
      style={{
        borderTop: '1px solid rgba(124, 58, 237, 0.16)',
        background: 'rgba(3, 8, 22, 0.98)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p style={{ color: 'var(--text-muted)', fontSize: '0.76rem', margin: 0 }}>
          &copy; 2026 Shashank M. All rights reserved. Built with React, TypeScript and modern web technologies.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {['IDEAS', 'CODE', 'COLLABORATE', 'GROW'].map((word, i) => (
            <React.Fragment key={word}>
              <span
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  fontFamily: 'mono, monospace',
                }}
              >
                {word}
              </span>
              {i < 3 && (
                <span style={{ color: 'var(--violet-glow)', fontSize: '0.65rem' }}>
                  &times;
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
