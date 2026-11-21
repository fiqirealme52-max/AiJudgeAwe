# The Tide Pool

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/fiqirealme52-max/AiJudgeAwe/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/fiqirealme52-max/AiJudgeAwe/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

An entry for the [make.fun bounty "Make the AI judge feel awe"](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600).

`main.ts` (Node 22, standard library only) writes one short text to
`/output/entry.txt` — 258 characters, a single paragraph:

> At low tide the pool keeps a piece of the sky. It is no bigger than a
> table, and the stars are in it, whole. You stand there a while. The
> ocean will come back for it by morning. Until then it is here, quiet,
> holding the sky in water no deeper than your hand.

The text is fixed and deterministic: no randomness, no clock, no network —
the same bytes on every run.

Revision 1 of this entry: it replaces "Starlight on the Sill" (dev 0.7017,
5W-6L). The old text explained its vastness; this one shows it — whole
stars in a pool no bigger than a table.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
