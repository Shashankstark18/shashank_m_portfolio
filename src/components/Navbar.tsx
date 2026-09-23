import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Systems',    href: '#systems' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkCls =
    'text-sm font-medium transition-colors duration-200 hover:text-white focus-visible:outline-violet-400';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group" aria-label="Back to top">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:scale-110">
            <circle cx="14" cy="14" r="11" stroke="#818CF8" strokeWidth="2" opacity="0.9" />
            <circle cx="14" cy="14" r="4" fill="#22D3EE" />
          </svg>
          <span
            className="font-bold text-base tracking-wide transition-colors"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
          >
            Varshini
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={linkCls}
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{ color: 'var(--text-secondary)' }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden nav-blur border-t"
          style={{ borderColor: 'rgba(124,58,237,0.15)' }}
        >
          <ul className="px-6 py-4 flex flex-col gap-4" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={linkCls}
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
