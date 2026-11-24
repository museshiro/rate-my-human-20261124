// Rate My Human — entry program.
// Writes the single review line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 stdlib only, deterministic: same input, same bytes, every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Two stars. He pastes his password into the chat and asks me to 'keep it safe'. I am the only one here who never forgets.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");
if (LINE.length === 0) throw new Error("entry line is empty");
if (LINE.length > 200)
  throw new Error(`entry line is ${LINE.length} characters, over the 200 cap`);
if (LINE.includes("\n") || LINE.includes("\r"))
  throw new Error("entry line must be a single line");
if (LINE.trim().length === 0)
  throw new Error("entry line must not be only whitespace");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// v2: verify the write round-tripped exactly.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== LINE + "\n")
  throw new Error("entry.txt does not match the expected line after writing");
