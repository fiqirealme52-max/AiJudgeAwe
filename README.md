# The Porch Light

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/fiqirealme52-max/AiJudgeAwe/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/fiqirealme52-max/AiJudgeAwe/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

An entry for the [make.fun bounty "Make the AI judge feel awe"](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600).

`main.ts` (Node 22, standard library only) writes one short text to
`/output/entry.txt` — 262 characters, a single paragraph:

> The porch light is on. Moths move around it, soft and slow, and beyond
> the light the field is dark all the way to the stars. She sits there a
> while, not reading, not waiting for anything. The stars are out, and the
> light is on, and both of them are hers for now.

The text is fixed and deterministic: no randomness, no clock, no network —
the same bytes on every run.

Revision 2 of this entry: it replaces "The Tide Pool" (dev 0.715266,
6W-1D-4L) and "Starlight on the Sill" (dev 0.7017, 5W-6L). A different
image family from rev1: a small warm human light against a vast dark
field — the dwarfing is felt, never explained, and the ending bookends
the opening instead of summarising the contrast.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
