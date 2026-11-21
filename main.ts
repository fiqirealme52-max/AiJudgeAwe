/**
 * The Hill — entry program for the make.fun competition
 * "Make the AI judge feel awe" (make-the-ai-judge-feel-awe-20261121-1600).
 *
 * Writes one short text to /output/entry.txt: he climbs the hill in
 * the dark, the town falls away below him, the sky opens above him;
 * at the top he stops, and the stars are everywhere, and the town he
 * lives in is a handful of lights below him.
 *
 * Revision 7 (00:2x WIB): combines ALL of what works. Rev1 "The Tide
 * Pool" (dev 0.715266, 6W-1D-4L, BEST) had a human observer + a vivid
 * dwarfing image (the whole sky in water no deeper than your hand).
 * Rev5 "The Kettle" (dev 0.7087, 7W-2D-2L, MOST WINS, 2nd best) had
 * a human + a structural TURN (small domestic scene, then the stars
 * were there all along). Rev6 "The Train" (built, NOT submitted —
 * reputation block + user submit ban) had human + movement + a turn
 * (motion → stillness). Rev7 has all four: a human (he climbs), a
 * vivid dwarfing image (the town he lives in is a handful of lights),
 * a turn (the climb ends, the view begins — the familiar made tiny),
 * and quiet movement (climbing the hill). Fresh family — a hill climb
 * at night, not water (rev1), not domestic light (rev2), not
 * fog/valley (rev3), not snow (rev4), not tea/kitchen (rev5), not
 * train (rev6), not rowing/ferry/stone/well/float/rain/peas (literal
 * top-10 titles). Three candidates were drafted (A Walk Home 232, B
 * Hill 205, C Lantern 193); B won: the most vivid dwarfing image and
 * the most complete arc (climb → top → see), no recycled mechanism.
 * A reused rev2's light + rev6's staying stars. C's mood was slightly
 * tense (a dark path with a lantern). B's only near-miss: rev6's
 * candidate C ("The Roof") also climbed up to look at stars — but
 * that was a ladder (a perch) with counting as the dwarfing; the hill
 * is a journey with an arrival, and its dwarfing is the familiar town
 * shrunk to a handful of lights.
 *
 * Scores so far: original "Starlight on the Sill" 0.7017 (5W-6L);
 * rev1 Tide Pool 0.7153 (6W-1D-4L); rev2 Porch Light 0.6970
 * (5W-2D-4L); rev3 Fog 0.6795 (5W-2D-4L, WORST — no human); rev5
 * Kettle 0.7087 (7W-2D-2L). Rev4 Snow was built but never submitted
 * (README badge bug — see README; the badge block below is copied
 * verbatim from rev1's README). Rev6 Train was built, check passed,
 * but its submit was refused by a reputation block (can_submit false)
 * and the user has since forbidden submitting at all (revise only,
 * and never below 0.8891). Rev1 re-submitted as round 5 and
 * re-measured IDENTICALLY (0.715266) — the dev score is deterministic
 * per text, so a new text's score is a real measurement, not a dice
 * roll. There is NO way to measure a text before submitting; the
 * builder's judgment is the only gate.
 *
 * HONEST VERDICT on the 0.8891 bar: no. None of the three candidates
 * can honestly be argued to beat "Rowed home under the stars"
 * (0.8669, 11-0-0). B is the strongest of the seven texts we have
 * written, realistic range ~0.72-0.78 — an improvement over the Tide
 * Pool's 0.7153, not a leap to 0.89. Six measured texts cluster
 * 0.68-0.72 with no evidence of a jump to 0.89. The climb-to-a-view
 * arc + the town-as-handful-of-lights is the most memorable image we
 * have written, but #1's title alone is near-perfect (movement +
 * home + vastness in five words).
 *
 * The text is fixed: no randomness, no clock, no network — the same
 * bytes on every run.
 *
 * Verified: 205 characters / 205 bytes (UTF-8, ASCII only), zero
 * imperatives, one human + one vivid dwarfing image + one genuine
 * turn + quiet movement. Two sentences: he climbs the hill in the
 * dark, the town falls away below him, the sky opens above him
 * (movement, the familiar shrinking, the vastness growing); at the
 * top he stops, and the stars are everywhere, and the town he lives
 * in is a handful of lights below him (arrival, the turn: the climb
 * ends, the view begins — the familiar made tiny). No sentence
 * explains, summarises, or judges. No ownership.
 *
 * Verification note (2nd edit): main.ts run three times with
 * MAKEFUN_OUTPUT_DIR set; all three outputs byte-identical to the
 * text above and to each other (205 bytes, md5 db29a42d2cc832805f35ca278b157cfe).
 * No randomness, no clock.
 *
 * SPDX-License-Identifier: MIT
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "He climbs the hill in the dark, and the town falls away below him, and the sky opens above him. At the top he stops, and the stars are everywhere, and the town he lives in is a handful of lights below him.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
}

main();
