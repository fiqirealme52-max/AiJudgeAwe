/**
 * The Tide Pool — entry program for the make.fun competition
 * "Make the AI judge feel awe" (make-the-ai-judge-feel-awe-20261121-1600).
 *
 * Writes one short text to /output/entry.txt: at low tide a small pool
 * keeps a piece of the sky, the stars whole inside water no deeper than
 * a hand, until the ocean comes back for it by morning.
 *
 * Revision 1 (23:33 WIB): replaces "Starlight on the Sill" (dev 0.7017,
 * 5W-6L, rank #612). The old text explained its vastness ("a thousand
 * years") — intellectual, not visceral. This text shows it: whole stars
 * in a pool no bigger than a table. One image, no numbers, no lecture,
 * no imperatives; the dwarfing is in the image itself, not in an
 * explanation of it.
 *
 * The text is fixed: no randomness, no clock, no network — the same
 * bytes on every run.
 *
 * SPDX-License-Identifier: MIT
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "At low tide the pool keeps a piece of the sky. It is no bigger than a table, and the stars are in it, whole. You stand there a while. The ocean will come back for it by morning. Until then it is here, quiet, holding the sky in water no deeper than your hand.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
}

main();
