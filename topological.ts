export const topologicalSort = (dag: Map<string, Set<string>>): string[] => {
  const sorted: string[] = [];
  const visited = new Set<string>();
  const visiting = new Set<string>();

  const dfs = (node: string): boolean => {
    visiting.add(node);

    for (const neighbor of dag.get(node) || []) {
      if (visiting.has(neighbor)) {
        return false; // Cycle detected
      }
      if (!visited.has(neighbor) && !dfs(neighbor)) {
        return false;
      }
    }

    visiting.delete(node);
    visited.add(node);
    sorted.unshift(node);
    return true;
  };

  for (const node of dag.keys()) {
    if (!visited.has(node) && !dfs(node)) {
      return []; // Cycle detected, return empty array
    }
  }

  return sorted;
};
