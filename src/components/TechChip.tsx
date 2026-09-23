interface TechChipProps {
  label: string;
  color?: string;
}

export default function TechChip({ label, color }: TechChipProps) {
  const style = color
    ? {
        background: `${color}18`,
        borderColor: `${color}40`,
        color,
      }
    : undefined;

  return (
    <span className="tech-chip" style={style}>
      {label}
    </span>
  );
}
