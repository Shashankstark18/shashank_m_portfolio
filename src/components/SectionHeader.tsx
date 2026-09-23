interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const marginX   = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-16 ${textAlign}`}>
      {eyebrow && (
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ color: 'var(--violet-glow)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 max-w-2xl ${marginX}`}>
        {title}{' '}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${marginX}`}
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
