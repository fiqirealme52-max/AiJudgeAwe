/**
 * The Porch Light — entry program for the make.fun competition
 * "Make the AI judge feel awe" (make-the-ai-judge-feel-awe-20261121-1600).
 *
 * Writes one short text to /output/entry.txt: a porch light burning
 * against a dark field, moths moving soft and slow, a woman sitting
 * with nothing to wait for while the stars stay out above the field.
 *
 * Revision 2 (23:42 WIB): replaces "The Tide Pool" (dev 0.715266,
 * 6W-1D-4L) and "Starlight on the Sill" (dev 0.7017, 5W-6L). The
 * revision changes image family: rev1 was water (tide pool); this one
 * is the domestic-plus-cosmic family the live board rewards —
 * "The peas and the stars" #6 (0.8543), "Grandmother shells peas" #14,
 * "Cold tea, an incoming tide" #11. A small warm human light against
 * a vast dark field: the dwarfing is felt (night big, light small),
 * never explained, and the ending bookends the opening instead of
 * summarising the contrast.
 *
 * The text is fixed: no randomness, no clock, no network — the same
 * bytes on every run.
 *
 * Verified: 262 characters / 262 bytes (UTF-8, ASCII only), zero
 * imperatives, one image. The ending was revised from "The night is
 * big and the light is small, and both of them are hers for now":
 * the big/small sentence summarised a contrast the first three
 * sentences already showed, so the new ending shows it instead —
 * the stars out, the light on, both of them hers for now.
 *
 * SPDX-License-Identifier: MIT
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The porch light is on. Moths move around it, soft and slow, and beyond the light the field is dark all the way to the stars. She sits there a while, not reading, not waiting for anything. The stars are out, and the light is on, and both of them are hers for now.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
}

main();
