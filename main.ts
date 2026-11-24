// u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232
// Entry program: writes one single-line office joke to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
// Deterministic: the joke is a constant, no file reads, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our printer only jams on urgent documents, which is how I found out it reads my calendar better than my manager does.";

function main(): void {
  const chars = [...JOKE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} chars, gate requires 1-200`);
  }
  if (JOKE.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, JOKE, "utf8");
  console.log(`wrote entry.txt: ${chars} chars`);
}

main();
