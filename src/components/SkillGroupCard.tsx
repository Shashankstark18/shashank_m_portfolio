import { Brain, Server, Monitor, Cloud, Wrench } from 'lucide-react';
import type { SkillGroup } from '../types';
import TechChip from './TechChip';

const ICON_MAP: Record<string, React.ReactNode> = {
  Brain:  <Brain size={18} />,
  Server: <Server size={18} />,
  Monitor:<Monitor size={18} />,
  Cloud:  <Cloud size={18} />,
  Wrench: <Wrench size={18} />,
};

interface Props {
  group: SkillGroup;
}

export default function SkillGroupCard({ group }: Props) {
  return (
    <div className="glass-card hud-border p-6" role="region" aria-label={`${group.label} skills`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="p-2 rounded-lg flex items-center justify-center"
          style={{ background: `${group.color}18`, color: group.color }}
        >
          {ICON_MAP[group.icon] ?? null}
        </div>
        <h3
          className="text-sm font-bold tracking-wider uppercase"
          style={{ fontFamily: 'Syne, sans-serif', color: group.color }}
        >
          {group.label}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <TechChip key={skill} label={skill} color={group.color} />
        ))}
      </div>
    </div>
  );
}
