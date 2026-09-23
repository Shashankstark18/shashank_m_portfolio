import { useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  dur: number;
  delay: number;
  minOpacity: number;
  maxOpacity: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    dur: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    minOpacity: Math.random() * 0.15 + 0.05,
    maxOpacity: Math.random() * 0.5 + 0.4,
  }));
}

export default function StarField() {
  const stars = useMemo(() => generateStars(80), []);

  return (
    <div className="star-field" aria-hidden="true">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            '--dur': `${s.dur}s`,
            '--delay': `${s.delay}s`,
            '--min-opacity': s.minOpacity,
            '--max-opacity': s.maxOpacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
