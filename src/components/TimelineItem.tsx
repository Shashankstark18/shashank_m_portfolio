import type { Experience } from '../types';
import TechChip from './TechChip';

const TYPE_LABELS: Record<Experience['type'], string> = {
  'full-time': 'Full-Time',
  'internship': 'Internship',
  'freelance': 'Freelance',
  'contract': 'Contract',
};

const TYPE_COLORS: Record<Experience['type'], string> = {
  'full-time': '#A78BFA',
  'internship': '#22D3EE',
  'freelance': '#F59E0B',
  'contract': '#F59E0B',
};

interface Props {
  exp: Experience;
  isLast: boolean;
}

export default function TimelineItem({ exp, isLast }: Props) {
  const color = TYPE_COLORS[exp.type];

  return (
    <div className="flex gap-6 relative">
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ring-4"
          style={{ background: color, boxShadow: `0 0 0 4px ${color}30` }}
        />
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: 'rgba(124,58,237,0.2)', minHeight: '40px' }}
          />
        )}
      </div>

      {/* Card */}
      <div className="glass-card hud-border p-5 mb-8 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3
              className="text-base font-bold"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {exp.role}
            </h3>
            <p className="text-sm font-semibold mt-0.5" style={{ color }}>
              {exp.company}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            <span
              className="category-badge text-xs"
              style={{
                color,
                borderColor: `${color}40`,
                background: `${color}10`,
              }}
            >
              {TYPE_LABELS[exp.type]}
            </span>
            <span className="text-xs italic" style={{ color: 'var(--text-muted)' }}>
              {exp.period ?? 'Details on request'}
            </span>
          </div>
        </div>

        {exp.description.length > 0 && (
          <ul className="flex flex-col gap-1.5 mb-4" role="list">
            {exp.description.map((d, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--violet-glow)', flexShrink: 0 }}>›</span>
                {d}
              </li>
            ))}
          </ul>
        )}

        {exp.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {exp.stack.map((s) => (
              <TechChip key={s} label={s} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
