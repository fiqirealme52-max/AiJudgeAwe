/**
 * The Kettle — entry program for the make.fun competition
 * "Make the AI judge feel awe" (make-the-ai-judge-feel-awe-20261121-1600).
 *
 * Writes one short text to /output/entry.txt: the kettle boils, she
 * pours the tea, the kitchen is warm; the window is dark, and then she
 * looks up from the cup, and the sky is full of stars, and they have
 * been there all along.
 *
 * Revision 5 (00:0x WIB): replaces "The Snow" (rev4, built, NOT
 * submitted — the user set a hard bar: do not submit unless the text
 * can honestly be argued to score above 0.8891, i.e. above the current
 * #1 "Rowed home under the stars" 0.8669), "The Fog" (dev 0.6795,
 * 5W-2D-4L, WORST — no human, pure image, static), "The Porch Light"
 * (dev 0.696964, 5W-2D-4L), "The Tide Pool" (dev 0.715266, 6W-1D-4L,
 * BEST) and "Starlight on the Sill" (dev 0.7017, 5W-6L). Scores so
 * far: 0.7017 / 0.7153 / 0.6970 / 0.6795. Rev1 re-submitted as round 5
 * and re-measured IDENTICALLY (0.715266) — the dev score is
 * deterministic per text, so a new text's score is a real measurement,
 * not a dice roll. There is NO way to measure a text before
 * submitting; the builder's judgment is the only gate.
 *
 * Data lessons: (1) rev3 with NO human scored worst — human presence
 * helps, so rev5 has a woman making tea; (2) ALL four texts were
 * linear (image → image → image) with the vastness present from the
 * start — rev5 has a genuine TURN: the text starts small and domestic
 * (kettle, tea, warm kitchen) and the vastness ARRIVES in the last
 * sentence (the stars were there all along); (3) the dwarfing in
 * rev1-4 was gentle — rev5's vastness is permanent (always there)
 * against a small, temporary domestic moment. Three candidates were
 * drafted from different angles (A extreme dwarfing: desert + Milky
 * Way; B surprise/turn: tea → stars; C fresh specific image: eclipse
 * shadow). B won: the turn is a structural feature no previous text
 * had, and it is in the proven domestic+cosmic family. Fresh family
 * — tea/kitchen, not water (rev1), not domestic light (rev2), not
 * fog/valley (rev3), not snow (rev4), not rowing/ferry/stone/well/
 * float/rain/peas (literal top-10 titles).
 *
 * HONEST VERDICT (see build log): B is the strongest of the three,
 * realistic range ~0.72-0.78 — an improvement over the Tide Pool's
 * 0.7153, but it does NOT honestly clear the user's 0.8891 bar. The
 * #1 text ("Rowed home under the stars", 11-0-0) is near-perfect:
 * movement + home + vastness in five words. B's turn is memorable,
 * but its vastness is the same register as #1's, and #1 does it with
 * a journey. No candidate in this revision can honestly be argued to
 * beat #1. The parent must decide whether to submit.
 *
 * The text is fixed: no randomness, no clock, no network — the same
 * bytes on every run.
 *
 * Verified: 187 characters / 187 bytes (UTF-8, ASCII only), zero
 * imperatives, one image + one human + one genuine turn. Two
 * sentences: the kettle boils, she pours the tea, the kitchen is warm
 * (small, domestic, calm); the window is dark, she looks up from the
 * cup, and the sky is full of stars, and they have been there all
 * along (the vastness arriving, reframing everything before it). No
 * sentence explains, summarises, or judges — "they have been there
 * all along" is a reframe of attention, not an evaluation. No
 * ownership.
 *
 * Verification note (2nd edit): main.ts run twice with
 * MAKEFUN_OUTPUT_DIR set; both outputs byte-identical to the text
 * above and to each other (187 bytes). No randomness, no clock.
 *
 * SPDX-License-Identifier: MIT
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The kettle boils, and she pours the tea, and the kitchen is warm. The window is dark, and then she looks up from the cup, and the sky is full of stars, and they have been there all along.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
}

main();
