export type ToolFunctionArgs = { input: string };
export type Tool = {
  name: string;
  function: (data: ToolFunctionArgs) => string;
};
type InferToolName<T extends Tool[]> = T[number]["name"];
type Job<TTools extends Tool[]> = {
  name: string;
  tool: InferToolName<TTools>;
};

type WorkFlow<TTools extends Tool[]> = {
  tools: TTools;
  jobs: Job<TTools>[];
};
type WorkFlowCreator<TTools extends Tool[]> = WorkFlow<TTools> & {
  addJob: (job: Job<TTools>) => WorkFlowCreator<TTools>;
  run: (input: string) => string;
};

type CreateWorkflowArgs<TTools extends Tool[]> = {
  tools: TTools;
  jobs?: Job<TTools>[];
};

export const createWorkflow = <TTools extends Tool[]>({
  tools,
  jobs = [],
}: CreateWorkflowArgs<TTools>): WorkFlowCreator<TTools> => {
  return {
    tools,
    jobs,
    addJob: (job: Job<TTools>) =>
      createWorkflow({ tools, jobs: [...jobs, job] }),
    run: (input: string) => runWorkflow({ input, workflow: { tools, jobs } }),
  };
};

type RunWorkflowArgs<TTools extends Tool[]> = {
  input: string;
  workflow: WorkFlow<TTools>;
};
export const runWorkflow = <TTools extends Tool[]>({
  input,
  workflow,
}: RunWorkflowArgs<TTools>): string => {
  workflow.jobs.reduce((acc, job) => {
    const jobTool = workflow.tools.find((tool) => tool.name === job.tool);
    if (jobTool == null) {
      throw new Error(`Unknown tool: ${job.tool}`);
    }
    return jobTool.function({ input: acc });
  }, input);
  return "";
};
