// import { constructDag } from "./constructDag";
// import { topologicalSort } from "./topological";
// // import { tools } from "./ayre";

// const nodes = [
//   {
//     id: "ttt",
//     position: { x: 0, y: 200 },
//     data: { label: "2" },
//     type: "translate",
//   },
//   {
//     id: "1",
//     position: { x: 0, y: 0 },
//     data: { label: "1" },
//     type: "scrape",
//   },
//   {
//     id: "b",
//     position: { x: 0, y: 0 },
//     data: { label: "1" },
//     type: "scrape",
//   },
//   {
//     id: "2",
//     position: { x: 0, y: 100 },
//     data: { label: "2" },
//     type: "summarize",
//   },
// ];

// const edges = [
//   { id: "e1-2", source: "1", target: "2" },
//   { id: "e1-2", source: "b", target: "2" },
//   {
//     id: "e2-3",
//     source: "2",
//     target: "ttt",
//   },
// ];

// const nodes = [/** ReactFlowのnodes */]
// const edges = [/** ReactFlowのedges */]
// const dag = constructDag(nodes, edges);
// const sortedNodes = topologicalSort(dag);

// sortedNodes.reduce((acc, sortedNode) => {
//   const stepNode = nodes.find((node) => node.id === sortedNode);
//   if (stepNode == null) {
//     throw new Error(`Node not found: ${sortedNode}`);
//   }

//   const taskTool = tools.find((tool) => tool.name === stepNode.type);
//   if (taskTool == null) {
//     throw new Error(`Unknown tool: ${stepNode.type}`);
//   }
//   console.log(`Running tool: id: ${stepNode.id}, ${taskTool.name}`);
//   return taskTool.tool(acc);
// }, "https://example.com");
