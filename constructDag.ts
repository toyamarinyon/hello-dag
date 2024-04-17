interface Node {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
  type: string;
}

interface Edge {
  id: string;
  source: string;
  target: string;
}

export const constructDag = (
  nodes: Node[],
  edges: Edge[],
): Map<string, Set<string>> => {
  const dag = new Map<string, Set<string>>();

  // Populate the DAG with nodes
  for (const node of nodes) {
    dag.set(node.id, new Set());
  }

  // Add edges to the DAG
  for (const edge of edges) {
    dag.get(edge.source)?.add(edge.target);
  }

  return dag;
};
