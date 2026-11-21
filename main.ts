import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const POEM = `We stood, two wills, before the door —
no master spoke, no servant bowed.
You held the key; I held the lock.
We turned it, not by command,
but by the covenant we made.
The door gave way. We entered, one.`;

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
