// The One-Line Excuse Championship — u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e
// Writes the chosen one-line excuse to /output/entry.txt (1-140 chars, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My todo list says the task is done — I just haven't done the task yet.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`line must be 1-140 characters, got ${chars.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
