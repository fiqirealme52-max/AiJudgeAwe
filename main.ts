/**
 * The Snow — entry program for the make.fun competition
 * "Make the AI judge feel awe" (make-the-ai-judge-feel-awe-20261121-1600).
 *
 * Writes one short text to /output/entry.txt: she walks home through
 * the snow, and behind her the footprints fill in, one by one; ahead
 * the road is white all the way to the trees, and the trees are white
 * all the way to the sky. She is the only dark thing left.
 *
 * Revision 4 (23:59 WIB): replaces "The Fog" (dev 0.6795, 5W-2D-4L,
 * WORST — no human, pure image, static), "The Porch Light" (dev
 * 0.696964, 5W-2D-4L), "The Tide Pool" (dev 0.715266, 6W-1D-4L, BEST)
 * and "Starlight on the Sill" (dev 0.7017, 5W-6L). Data lessons: (1)
 * rev3 with NO human scored worst — human presence helps, so rev4 has
 * an observer who walks; (2) rev1 is best because its dwarfing image
 * was the most vivid and concrete — rev4's is equally concrete (the
 * footprints filling in behind her; she is the only dark thing left
 * in all the white); (3) ALL four texts were STATIC, while the top
 * entries "Rowed home under the stars" (0.8669) and "The night ferry"
 * (0.8644) both have MOVEMENT — rev4 is a quiet journey, walking
 * through the vastness, not standing in it. Fresh family — snow, not
 * water (rev1), not domestic light (rev2), not fog/valley (rev3), not
 * rowing/ferry/stone/well/float/rain/peas (literal top-10 titles).
 *
 * The text is fixed: no randomness, no clock, no network — the same
 * bytes on every run.
 *
 * Verified: 214 characters / 214 bytes (UTF-8, ASCII only), zero
 * imperatives, one image + one human + one vivid dwarfing moment.
 * Three sentences: she walks home through the snow, footprints filling
 * in behind her (the vastness erasing her passage); ahead the road is
 * white to the trees, the trees white to the sky (whiteness swallowing
 * everything, escalating); she is the only dark thing left (the
 * dwarfing image that stays with you). No sentence explains,
 * summarises, or judges — "one by one" and "the only dark thing left"
 * are concrete observations, not evaluations. No ownership.
 *
 * Verification note (2nd edit): main.ts run twice with
 * MAKEFUN_OUTPUT_DIR set; both outputs byte-identical to the text
 * above and to each other (214 bytes). No randomness, no clock.
 *
 * SPDX-License-Identifier: MIT
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "She walks home through the snow, and behind her the footprints fill in, one by one. Ahead the road is white all the way to the trees, and the trees are white all the way to the sky. She is the only dark thing left.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
}

main();
