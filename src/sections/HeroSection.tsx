import { ArrowDown, Mail, Briefcase } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socials';
import ConstellationHero from '../components/ConstellationHero';
import TechChip from '../components/TechChip';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
      style={{
        backgroundColor: '#030814',
        backgroundImage: `
          radial-gradient(ellipse 65% 55% at 75% 50%, rgba(60, 130, 255, 0.16) 0%, transparent 70%),
          radial-gradient(ellipse 55% 45% at 85% 20%, rgba(120, 85, 255, 0.14) 0%, transparent 60%),
          linear-gradient(rgba(74, 76, 135, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(74, 76, 135, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 64px 64px, 64px 64px',
      }}
    >
      {/* Ambient background glow matching user specification */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 80% 50%, rgba(96, 75, 255, 0.12) 0%, transparent 50%)',
        }}
      />

      <div className="section-base w-full pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Website Content & Bio (Takes 7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: 'var(--violet-glow)' }}
              >
                Full Stack Developer
              </p>
            </div>

            {/* Name */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] animate-slide-up"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Hi, I'm{' '}
              <span className="gradient-text1">Shashank M</span>
            </h1>

            {/* Tagline */}
            <p
              className="text-lg md:text-xl font-medium animate-slide-up"
              style={{ color: 'var(--text-primary)', animationDelay: '0.15s' }}
            >
              {profile.tagline}
            </p>

            {/* Sub-tagline */}
            <p
              className="text-sm md:text-base leading-relaxed max-w-xl animate-slide-up"
              style={{ color: 'var(--text-secondary)', animationDelay: '0.25s' }}
            >
              {profile.subTagline}
            </p>

            {/* Primary tech chips */}
            <div
              className="flex flex-wrap gap-2 animate-slide-up"
              style={{ animationDelay: '0.35s' }}
              aria-label="Primary technologies"
            >
              {(profile.primaryChips ?? []).map((chip) => (
                <TechChip key={chip} label={chip} />
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-3 mt-3 animate-slide-up"
              style={{ animationDelay: '0.45s' }}
            >
              <a href="#projects" className="btn-primary" id="hero-view-projects">
                <Briefcase size={16} />
                View Projects
              </a>
              <a href="#contact" className="btn-ghost" id="hero-contact">
                <Mail size={16} />
                Get in Touch
              </a>
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  id="hero-github"
                  aria-label="GitHub profile"
                >
                  GitHub
                </a>
              )}
              {socialLinks.resume && (
                <a
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  id="hero-resume"
                  aria-label="Download resume"
                >
                  Resume
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Holographic Celestial Architecture (Takes 5 cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <ConstellationHero />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs transition-opacity hover:opacity-100 opacity-50"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Scroll to About section"
          >
            <span>Explore Systems</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
