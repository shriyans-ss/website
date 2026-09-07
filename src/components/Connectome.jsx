// A small-world network, drawn the way functional-connectivity papers draw one.
//
// This is not decoration picked at random: the topology is Watts-Strogatz
// (ring lattice + rewiring), which is the model the graph-theory fMRI work on
// this site actually measures. Node radius scales with degree, exactly as hub
// nodes are rendered in a connectogram.
//
// The layout is seeded, so it is identical on every render and every visit —
// the site has a fixed signature graph rather than a different one each load.

const NODES = 34;
const NEIGHBOURS = 2; // each side of the ring, before rewiring
const REWIRE = 0.18;

// Mulberry32 — small deterministic PRNG so the graph never shifts between loads.
function rng(seed) {
  return function next() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildGraph() {
  const rand = rng(20260906);

  // Organic placement: a jittered ring with inward pull, so the field reads as
  // a network rather than a circle or an even scatter.
  const nodes = Array.from({ length: NODES }, (_, i) => {
    const angle = (i / NODES) * Math.PI * 2 + (rand() - 0.5) * 0.35;
    const radius = 0.34 + rand() * 0.62;
    return {
      id: i,
      x: 50 + Math.cos(angle) * radius * 46,
      y: 50 + Math.sin(angle) * radius * 40,
      degree: 0
    };
  });

  const seen = new Set();
  const edges = [];
  const add = (a, b) => {
    if (a === b) return;
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (seen.has(key)) return;
    seen.add(key);
    edges.push({ a, b });
    nodes[a].degree += 1;
    nodes[b].degree += 1;
  };

  for (let i = 0; i < NODES; i += 1) {
    for (let k = 1; k <= NEIGHBOURS; k += 1) {
      // Rewiring a lattice edge to a random target is what turns a regular
      // graph into a small-world one: high clustering, short path length.
      if (rand() < REWIRE) {
        add(i, Math.floor(rand() * NODES));
      } else {
        add(i, (i + k) % NODES);
      }
    }
  }

  return { nodes, edges };
}

const { nodes, edges } = buildGraph();
const maxDegree = Math.max(...nodes.map((n) => n.degree));

export default function Connectome() {
  return (
    <svg
      className="connectome"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g className="connectome-edges">
        {edges.map((edge, i) => {
          const a = nodes[edge.a];
          const b = nodes[edge.b];
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              style={{ "--i": i % 12 }}
            />
          );
        })}
      </g>
      <g className="connectome-nodes">
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={0.5 + (node.degree / maxDegree) * 1.15}
            className={node.degree >= maxDegree - 1 ? "is-hub" : undefined}
            style={{ "--i": node.id % 12 }}
          />
        ))}
      </g>
    </svg>
  );
}
