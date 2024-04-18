import { createWorkflow } from "./ayre";
import { scrape, summarize, translate } from "./tools";

const workflow = createWorkflow({
  tools: [
    { name: "scrape", function: scrape },
    { name: "summarize", function: summarize },
    { name: "translate", function: translate },
  ] as const,
});

workflow
  .addJob({ name: "scrape", tool: "scrape" })
  .addJob({ name: "summarize", tool: "summarize" })
  .addJob({ name: "translate", tool: "translate" })
  .run("https://example.com");
