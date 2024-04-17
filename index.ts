import { constructDag } from "./constructDag";
import { topologicalSort } from "./topological";

const initialNodes = [
  {
    id: "ttt",
    position: { x: 0, y: 200 },
    data: { label: "2" },
    type: "translate",
  },
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1" },
    type: "webScraper",
  },
  {
    id: "b",
    position: { x: 0, y: 0 },
    data: { label: "1" },
    type: "webScraper2",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "2" },
    type: "summarize",
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-2", source: "b", target: "2" },
  {
    id: "e2-3",
    source: "2",
    target: "ttt",
  },
];

const dag = constructDag(initialNodes, initialEdges);
console.log(dag);
const sortedNodes = topologicalSort(dag);

console.log(sortedNodes); // Output: ["1", "2", "3"]
