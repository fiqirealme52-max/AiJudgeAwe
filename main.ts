/**
 * The Train — entry program for the make.fun competition
 * "Make the AI judge feel awe" (make-the-ai-judge-feel-awe-20261121-1600).
 *
 * Writes one short text to /output/entry.txt: the carriage is warm,
 * the train moves through the dark, he watches the fields go past the
 * window; the hills go past, and the houses go past, and the stars
 * stay where they are, all night.
 *
 * Revision 6 (00:1x WIB): combines what works. Rev1 "The Tide Pool"
 * (dev 0.715266, 6W-1D-4L, BEST) had a human observer + a vivid
 * dwarfing image (the whole sky in water no deeper than your hand).
 * Rev5 "The Kettle" (dev 0.7087, 7W-2D-2L, MOST WINS, 2nd best) had
 * a human + a structural TURN (small domestic scene, then the stars
 * were there all along). Rev6 has all three: a human (he watches), a
 * vivid dwarfing image (everything passes, the stars stay — the
 * vastness is the still point), and a turn (motion → stillness). Fresh
 * family — a train at night, not water (rev1), not domestic light
 * (rev2), not fog/valley (rev3), not snow (rev4), not tea/kitchen
 * (rev5), not rowing/ferry/stone/well/float/rain/peas (literal
 * top-10 titles). Three candidates were drafted (A train, B swing,
 * C roof); A won: the cleanest single turn, the freshest family, no
 * weak sentence. B's dwarfing was weaker (stars "right there" is
 * closeness, not vastness). C had the strongest dwarfing image
 * (stars so many he stops counting) but a double turn and a cold
 * ending.
 *
 * Scores so far: original "Starlight on the Sill" 0.7017 (5W-6L);
 * rev1 Tide Pool 0.7153 (6W-1D-4L); rev2 Porch Light 0.6970
 * (5W-2D-4L); rev3 Fog 0.6795 (5W-2D-4L, WORST — no human); rev5
 * Kettle 0.7087 (7W-2D-2L). Rev4 Snow was built but never submitted
 * (README badge bug — see README; the badge block below is copied
 * verbatim from rev1's README). Rev1 re-submitted as round 5 and
 * re-measured IDENTICALLY (0.715266) — the dev score is deterministic
 * per text, so a new text's score is a real measurement, not a dice
 * roll. There is NO way to measure a text before submitting; the
 * builder's judgment is the only gate.
 *
 * The text is fixed: no randomness, no clock, no network — the same
 * bytes on every run.
 *
 * Verified: 194 characters / 194 bytes (UTF-8, ASCII only), zero
 * imperatives, one human + one vivid dwarfing image + one genuine
 * turn. Two sentences: the carriage is warm, the train moves through
 * the dark, he watches the fields go past the window (small, warm,
 * moving); the hills go past, and the houses go past, and the stars
 * stay where they are, all night (the turn: everything passes, the
 * vastness stays — the still point). No sentence explains,
 * summarises, or judges. No ownership.
 *
 * Verification note (2nd edit): main.ts run three times with
 * MAKEFUN_OUTPUT_DIR set; all three outputs byte-identical to the
 * text above and to each other (194 bytes). No randomness, no clock.
 *
 * SPDX-License-Identifier: MIT
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The carriage is warm, and the train moves through the dark, and he watches the fields go past the window. The hills go past, and the houses go past, and the stars stay where they are, all night.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
}

main();
