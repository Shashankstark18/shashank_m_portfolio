import { useState } from 'react';

interface DiagramNode {
  id: string; label: string; x: number; y: number; type: string; color: string;
}
interface DiagramEdge {
  from: string; to: string; label?: string;
}
interface Diagram {
  title: string; nodes: DiagramNode[]; edges: DiagramEdge[];
}

const DIAGRAMS: Diagram[] = [
  {
    title: 'General Request Flow',
    nodes: [
      { id: 'u',  label: 'User',           x: 50,  y: 5,  type: 'input',    color: '#22D3EE' },
      { id: 'fe', label: 'Frontend',        x: 50,  y: 22, type: 'process',  color: '#8B5CF6' },
      { id: 'api',label: 'API Layer',       x: 50,  y: 39, type: 'process',  color: '#8B5CF6' },
      { id: 'biz',label: 'Business Logic',  x: 25,  y: 56, type: 'ai',       color: '#A78BFA' },
      { id: 'ai', label: 'AI / ML',         x: 75,  y: 56, type: 'ai',       color: '#A78BFA' },
      { id: 'db', label: 'Database',        x: 50,  y: 73, type: 'database', color: '#34D399' },
      { id: 'res',label: 'Response',        x: 50,  y: 90, type: 'output',   color: '#FB923C' },
    ],
    edges: [
      { from: 'u',   to: 'fe',  label: 'request' },
      { from: 'fe',  to: 'api', label: 'HTTP' },
      { from: 'api', to: 'biz' },
      { from: 'api', to: 'ai' },
      { from: 'biz', to: 'db' },
      { from: 'ai',  to: 'db' },
      { from: 'db',  to: 'res' },
    ],
  },
  {
    title: 'RAG Pipeline Flow',
    nodes: [
      { id: 'doc',  label: 'Documents',     x: 50,  y: 5,  type: 'input',    color: '#22D3EE' },
      { id: 'ext',  label: 'Extraction',    x: 50,  y: 20, type: 'process',  color: '#8B5CF6' },
      { id: 'chu',  label: 'Chunking',      x: 25,  y: 35, type: 'process',  color: '#8B5CF6' },
      { id: 'emb',  label: 'Embeddings',    x: 75,  y: 35, type: 'ai',       color: '#A78BFA' },
      { id: 'vs',   label: 'Vector Store',  x: 50,  y: 52, type: 'database', color: '#34D399' },
      { id: 'ret',  label: 'Retrieval',     x: 50,  y: 67, type: 'ai',       color: '#A78BFA' },
      { id: 'llm',  label: 'LLM',           x: 50,  y: 80, type: 'ai',       color: '#A78BFA' },
      { id: 'out',  label: 'Grounded Response', x: 50, y: 93, type: 'output', color: '#FB923C' },
    ],
    edges: [
      { from: 'doc', to: 'ext' },
      { from: 'ext', to: 'chu' },
      { from: 'ext', to: 'emb' },
      { from: 'chu', to: 'vs' },
      { from: 'emb', to: 'vs' },
      { from: 'vs',  to: 'ret', label: 'query' },
      { from: 'ret', to: 'llm' },
      { from: 'llm', to: 'out' },
    ],
  },
];

function getNode(diagram: Diagram, id: string) {
  return diagram.nodes.find((n) => n.id === id)!;
}

function FlowSVG({ diagram }: { diagram: Diagram }) {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ overflow: 'visible' }}>
      {diagram.edges.map((e, i) => {
        const a = getNode(diagram, e.from);
        const b = getNode(diagram, e.to);
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        const len = Math.hypot(b.x - a.x, b.y - a.y);
        return (
          <g key={i}>
            <line
              x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke="rgba(124,58,237,0.4)"
              strokeWidth="0.5"
              strokeDasharray={len}
              strokeDashoffset={len}
              style={{ animation: `draw-edge 0.8s ease ${i * 0.12 + 0.2}s forwards` }}
            />
            {e.label && (
              <text x={mx} y={my - 1.5} textAnchor="middle" fontSize="2.5"
                fill="rgba(167,139,250,0.7)" fontFamily="DM Sans, sans-serif">
                {e.label}
              </text>
            )}
          </g>
        );
      })}
      {diagram.nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={8} fill={`${n.color}12`} stroke={n.color}
            strokeWidth="0.7" className="node-circle" data-color={n.color} />
          <text x={n.x} y={n.y} textAnchor="middle" dominantBaseline="central"
            fontSize="3.2" fill={n.color} fontFamily="DM Sans, sans-serif" fontWeight="600"
            style={{ pointerEvents: 'none' }}>
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function SystemDiagram() {
  const [active, setActive] = useState(0);
  const diagram = DIAGRAMS[active];

  return (
    <div className="glass-card hud-border p-8">
      {/* Tab toggles */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {DIAGRAMS.map((d, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border ${
              active === i
                ? 'border-violet-500 bg-violet-500/20 text-violet-200'
                : 'border-transparent text-slate-400 hover:border-violet-800 hover:text-slate-200'
            }`}
            aria-pressed={active === i}
            aria-label={`Show ${d.title}`}
            id={`diagram-tab-${i}`}
          >
            {d.title}
          </button>
        ))}
      </div>

      {/* Diagram */}
      <div
        key={active}
        className="mx-auto"
        style={{ maxWidth: '320px', height: '360px' }}
        role="img"
        aria-label={diagram.title}
      >
        <FlowSVG diagram={diagram} />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        {[
          { color: '#22D3EE', label: 'Input' },
          { color: '#8B5CF6', label: 'Process' },
          { color: '#A78BFA', label: 'AI / ML' },
          { color: '#34D399', label: 'Storage' },
          { color: '#FB923C', label: 'Output' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-xs"
            style={{ color: 'var(--text-secondary)' }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
