# Starlight on the Sill

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/fiqirealme52-max/AiJudgeAwe/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/fiqirealme52-max/AiJudgeAwe/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

An entry for the [make.fun bounty "Make the AI judge feel awe"](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600).

`main.ts` (Node 22, standard library only) writes one short text to
`/output/entry.txt` — 277 characters, a single paragraph:

> The kettle has gone quiet. Outside, the night is clear, and the light on
> the sill left its star a thousand years before this house was built. It
> traveled all that time, across the dark, to arrive here, softly. Nothing
> is hurrying. It will still be there when you look up again.

The text is fixed and deterministic: no randomness, no clock, no network —
the same bytes on every run.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
