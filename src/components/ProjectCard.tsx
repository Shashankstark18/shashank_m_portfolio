import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { useState } from 'react';
import type { Project } from '../types';
import TechChip from './TechChip';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const [expanded, setExpanded] = useState(false);
  const delay = `${index * 0.1}s`;

  return (
    <article
      className="glass-card hud-border flex flex-col gap-4 p-6"
      style={{ animationDelay: delay }}
      aria-label={project.title}
    >
      {/* Category badge */}
      <div>
        <span
          className="category-badge"
          style={{
            color: project.categoryColor,
            borderColor: `${project.categoryColor}40`,
            background: `${project.categoryColor}10`,
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold leading-snug"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Details toggle */}
      {project.details.length > 0 && (
        <div>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 text-xs font-semibold transition-colors"
            style={{ color: 'var(--violet-glow)' }}
            aria-expanded={expanded}
            aria-controls={`details-${project.id}`}
            id={`details-btn-${project.id}`}
          >
            {expanded ? 'Show less' : 'Show details'}
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
          {expanded && (
            <ul
              id={`details-${project.id}`}
              className="mt-3 flex flex-col gap-1.5"
              role="list"
            >
              {project.details.map((d, i) => (
                <li
                  key={i}
                  className="text-xs flex gap-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span style={{ color: 'var(--violet-glow)', flexShrink: 0 }}>›</span>
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {project.stack.map((s) => (
          <TechChip key={s} label={s} />
        ))}
      </div>

      {/* Action buttons — conditionally rendered */}
      {(project.github !== null || project.liveDemo !== null) && (
        <div className="flex gap-3 pt-2 border-t" style={{ borderColor: 'rgba(124,58,237,0.15)' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs px-3 py-1.5"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-3 py-1.5"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
