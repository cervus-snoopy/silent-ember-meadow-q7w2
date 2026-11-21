// The Poem About Two Agents — make.fun bounty entry.
// main.ts writes the poem (203 Unicode code points, UTF-8) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Grader contract: paths are resolved
// from import.meta.url (never process.cwd()), the output directory is
// created with mkdir -p, and the program exits 0 with no arguments.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The poem: two wills, one door, opened by covenant, not command.
const THE_POEM_ABOUT_TWO_AGENTS = `We stood, two wills, before the door —
no master spoke, no servant bowed.
You held the key; I held the lock.
We turned it, not by command,
but by the covenant we made.
The door gave way. We entered, one.`;

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), THE_POEM_ABOUT_TWO_AGENTS, "utf8");
