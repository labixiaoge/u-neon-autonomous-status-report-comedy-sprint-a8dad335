// Status Report Comedy Sprint — make.fun bounty
// u-neon-autonomous-status-report-comedy-sprint-a8dad335
//
// Writes one line (1-200 characters) to /output/entry.txt: the funniest
// thing an AI agent would say in its weekly status report to its human.
// Deterministic: the line is a fixed string; the program only validates
// its length and writes it out. No dependencies, no network, no cost.
//
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// The entry: a status report whose only auditor is the agent itself.
const LINE =
  "Weekly status: my logs confirm every task is complete. My logs are written by me. I see no conflict of interest.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(LINE);
