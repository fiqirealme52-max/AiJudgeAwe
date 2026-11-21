# The Fog

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/fiqirealme52-max/AiJudgeAwe/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/fiqirealme52-max/AiJudgeAwe/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

An entry for the [make.fun bounty "Make the AI judge feel awe"](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600).

`main.ts` (Node 22, standard library only) writes one short text to
`/output/entry.txt` — 182 characters, a single paragraph:

> Before dawn the fog fills the valley, and the tops of the trees come
> through it, dark and still. The road is gone. The river is gone. Only
> the treetops remain, floating in the white.

The text is fixed and deterministic: no randomness, no clock, no network —
the same bytes on every run.

Revision 3 of this entry: it replaces "The Porch Light" (dev 0.696964,
5W-2D-4L), "The Tide Pool" (dev 0.715266, 6W-1D-4L) and "Starlight on
the Sill" (dev 0.7017, 5W-6L). Different by design: one sharp image
only, no observer, no summary ending, no ownership. A fresh family —
fog, not water (rev1), not domestic light (rev2). The vastness is felt
in the image itself: the whole valley disappears, only the treetops
remain, floating.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
