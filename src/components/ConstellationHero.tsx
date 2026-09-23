import React, { useEffect, useRef, useState } from 'react';
import './ConstellationHero.css';

type NodeType = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  color: 'cyan' | 'violet' | 'purple' | 'green' | 'orange';
  angle: number;
  radius: number;
  speed: number;
};

const nodes: NodeType[] = [
  {
    id: 'sap',
    label: 'Enterprise / SAP',
    shortLabel: 'SAP',
    description: 'SAP SD, MM, S/4HANA and enterprise workflow configurations.',
    color: 'cyan',
    angle: -90,
    radius: 185,
    speed: 0.18,
  },
  {
    id: 'frontend',
    label: 'Frontend',
    shortLabel: 'Frontend',
    description: 'HTML5, CSS3, Bootstrap, and JavaScript interfaces.',
    color: 'violet',
    angle: -28,
    radius: 185,
    speed: 0.18,
  },
  {
    id: 'database',
    label: 'Databases',
    shortLabel: 'Database',
    description: 'MySQL, MongoDB, SQL Server, and Oracle data persistence.',
    color: 'green',
    angle: 32,
    radius: 185,
    speed: 0.18,
  },
  {
    id: 'backend',
    label: 'Backend',
    shortLabel: 'Backend',
    description: 'Python Django, Java, Spring Boot, and REST APIs.',
    color: 'orange',
    angle: 90,
    radius: 185,
    speed: 0.18,
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    shortLabel: 'ML',
    description: 'Predictive analytics and ML model integration into web apps.',
    color: 'purple',
    angle: 148,
    radius: 185,
    speed: 0.18,
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    shortLabel: 'Cloud',
    description: 'AWS, Azure, Git, Linux, and system tooling.',
    color: 'cyan',
    angle: 210,
    radius: 185,
    speed: 0.18,
  },
];

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  x: 20 + Math.random() * 60,
  y: 20 + Math.random() * 60,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 5,
}));

export default function ConstellationHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const [rotation, setRotation] = useState(0);

  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      setRotation((prev) => prev + delta * 0.004);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const element = containerRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setPointer({
      x,
      y,
    });
  };

  const handlePointerLeave = () => {
    setPointer({
      x: 0,
      y: 0,
    });

    setActiveNode(null);
  };

  const getNodePosition = (node: NodeType) => {
    const angle =
      ((node.angle + rotation * node.speed) * Math.PI) / 180;

    const x = Math.cos(angle) * node.radius;
    const y = Math.sin(angle) * node.radius;

    return {
      x,
      y,
    };
  };

  const currentNode =
    nodes.find((node) => node.id === (activeNode || selectedNode)) ??
    null;

  return (
    <div
      ref={containerRef}
      className="constellation-wrapper"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        {
          '--mouse-x': pointer.x,
          '--mouse-y': pointer.y,
        } as React.CSSProperties
      }
    >
      {/* Ambient glow */}
      <div className="constellation-ambient-glow" />

      {/* Main 3D scene */}
      <div
        className="constellation-scene"
        style={{
          transform: `
            perspective(1000px)
            rotateX(${pointer.y * -8}deg)
            rotateY(${pointer.x * 10}deg)
            translate3d(${pointer.x * 8}px, ${pointer.y * 8}px, 0)
          `,
        }}
      >
        {/* Background grid */}
        <div className="constellation-grid" />

        {/* Moving particles */}
        <div className="constellation-particles">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="constellation-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Orbit rings */}
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-middle" />
        <div className="orbit orbit-inner" />

        {/* Tilted orbital rings */}
        <div className="orbit orbit-tilted orbit-tilted-one" />
        <div className="orbit orbit-tilted orbit-tilted-two" />

        {/* SVG connection architecture */}
        <svg
          className="constellation-lines"
          viewBox="-260 -260 520 520"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="constellationLineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" />
              <stop offset="50%" />
              <stop offset="100%" />
            </linearGradient>

            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {nodes.map((node) => {
            const position = getNodePosition(node);

            const isActive =
              activeNode === node.id || selectedNode === node.id;

            return (
              <line
                key={node.id}
                x1="0"
                y1="0"
                x2={position.x}
                y2={position.y}
                className={`constellation-line ${isActive ? 'line-active' : ''
                  }`}
                filter={isActive ? 'url(#lineGlow)' : undefined}
              />
            );
          })}

          {/* Cross connections */}
          {nodes.map((node, index) => {
            const nextNode = nodes[(index + 1) % nodes.length];

            const first = getNodePosition(node);
            const second = getNodePosition(nextNode);

            const isRelated =
              activeNode === node.id ||
              activeNode === nextNode.id ||
              selectedNode === node.id ||
              selectedNode === nextNode.id;

            return (
              <line
                key={`${node.id}-${nextNode.id}`}
                x1={first.x}
                y1={first.y}
                x2={second.x}
                y2={second.y}
                className={`constellation-cross-line ${isRelated ? 'cross-active' : ''
                  }`}
              />
            );
          })}
        </svg>

        {/* Central AI Core */}
        <div className="ai-core">
          <div className="ai-core-halo" />

          <div className="ai-core-ring ai-core-ring-one" />
          <div className="ai-core-ring ai-core-ring-two" />

          <div className="ai-core-inner">
            <div className="ai-core-orbit" />
            <span className="ai-core-symbol">FS</span>
          </div>

          <div className="core-pulse core-pulse-one" />
          <div className="core-pulse core-pulse-two" />
        </div>

        {/* Floating Nodes */}
        <div className="constellation-nodes">
          {nodes.map((node) => {
            const position = getNodePosition(node);

            const isActive =
              activeNode === node.id || selectedNode === node.id;

            return (
              <button
                key={node.id}
                type="button"
                className={`
                  constellation-node
                  node-${node.color}
                  ${isActive ? 'node-active' : ''}
                `}
                style={{
                  transform: `
                    translate3d(
                      calc(-50% + ${position.x}px),
                      calc(-50% + ${position.y}px),
                      0
                    )
                  `,
                }}
                onPointerEnter={() => setActiveNode(node.id)}
                onFocus={() => setActiveNode(node.id)}
                onClick={() =>
                  setSelectedNode((current) =>
                    current === node.id ? null : node.id
                  )
                }
                aria-label={`Inspect ${node.label}`}
              >
                <span className="node-glow" />

                <span className="node-orbit-ring" />

                <span className="node-content">
                  <span className="node-icon">
                    {node.shortLabel === 'SAP' && '✦'}
                    {node.shortLabel === 'Frontend' && '◇'}
                    {node.shortLabel === 'Database' && '◉'}
                    {node.shortLabel === 'Backend' && '⌘'}
                    {node.shortLabel === 'ML' && '⬡'}
                    {node.shortLabel === 'Cloud' && '↗'}
                  </span>

                  <span className="node-label">
                    {node.shortLabel}
                  </span>
                </span>

                {isActive && (
                  <span className="node-active-indicator" />
                )}
              </button>
            );
          })}
        </div>

        {/* Status panel */}
        <div className="constellation-status">
          <span className="status-dot" />

          <span className="status-text">
            {currentNode
              ? `Inspecting ${currentNode.label}`
              : 'Interactive system map'}
          </span>

          <span className="status-signal">LIVE</span>
        </div>

        {/* Tooltip */}
        {currentNode && (
          <div className="constellation-tooltip">
            <div className={`tooltip-accent ${currentNode.color}`} />

            <div>
              <div className="tooltip-eyebrow">
                SYSTEM NODE
              </div>

              <div className="tooltip-title">
                {currentNode.label}
              </div>

              <div className="tooltip-description">
                {currentNode.description}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom hint */}
      <div className="constellation-hint">
        <span className="hint-cursor">✦</span>
        <span>Hover nodes to inspect architecture</span>
      </div>
    </div>
  );
}