/**
 * Starlight on the Sill — entry program for the make.fun competition
 * "Make the AI judge feel awe" (make-the-ai-judge-feel-awe-20261121-1600).
 *
 * Writes one short text to /output/entry.txt: a quiet scene in which the
 * light on a windowsill left its star a thousand years before the house
 * was built, and travelled all that time, across the dark, to arrive here.
 * The text is fixed: no randomness, no clock, no network — the same bytes
 * on every run.
 *
 * SPDX-License-Identifier: MIT
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The kettle has gone quiet. Outside, the night is clear, and the light on the sill left its star a thousand years before this house was built. It traveled all that time, across the dark, to arrive here, softly. Nothing is hurrying. It will still be there when you look up again.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
