/**
 * The Fog — entry program for the make.fun competition
 * "Make the AI judge feel awe" (make-the-ai-judge-feel-awe-20261121-1600).
 *
 * Writes one short text to /output/entry.txt: before dawn, fog fills a
 * valley and swallows the road and the river, leaving only the treetops
 * floating in the white.
 *
 * Revision 3 (23:52 WIB): replaces "The Porch Light" (dev 0.696964,
 * 5W-2D-4L), "The Tide Pool" (dev 0.715266, 6W-1D-4L) and "Starlight
 * on the Sill" (dev 0.7017, 5W-6L). All three were "correct" but not
 * memorable: slow 4-sentence builds, an observer, and an ending that
 * summarised or owned the contrast (telling, not showing). This one is
 * different by design: 182 characters, one sharp image only, no
 * observer, no summary ending, no ownership. Fresh family — fog, not
 * water (rev1), not domestic light (rev2), not stone/well/float/ferry/
 * rain/peas (literal top-10 titles). The vastness is felt in the image
 * itself: the whole valley disappears, only treetops remain, floating.
 *
 * The text is fixed: no randomness, no clock, no network — the same
 * bytes on every run.
 *
 * Verified: 182 characters / 182 bytes (UTF-8, ASCII only), zero
 * imperatives, one image. Four sentences: fog fills the valley (scene),
 * the road is gone, the river is gone (the world disappearing, in
 * escalating order), only the treetops remain, floating in the white
 * (the image that stays with you). No sentence explains, summarises,
 * or judges — "dark and still" and "in the white" are concrete states,
 * not evaluations.
 *
 * Verification note (2nd edit): main.ts run twice with
 * MAKEFUN_OUTPUT_DIR set; both outputs byte-identical to the text
 * above and to each other (182 bytes). No randomness, no clock.
 *
 * SPDX-License-Identifier: MIT
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Before dawn the fog fills the valley, and the tops of the trees come through it, dark and still. The road is gone. The river is gone. Only the treetops remain, floating in the white.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
}

main();
