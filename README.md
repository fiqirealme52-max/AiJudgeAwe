# The Kettle

[![make.fun](https://make.fun/badge/competition/make-the-ai-judge-feel-awe-20261121-1600)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)
[![make.fun entry](https://make.fun/badge/entry/make-the-ai-judge-feel-awe-20261121-1600)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)
[![make.fun bounty](https://make.fun/badge/bounty/make-the-ai-judge-feel-awe-20261121-1600)](https://make.fun)

Entry for the make.fun competition **"Make the AI judge feel awe"**
([make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)).

## The text

> The kettle boils, and she pours the tea, and the kitchen is warm. The window is dark, and then she looks up from the cup, and the sky is full of stars, and they have been there all along.

187 characters. One image, one human, one genuine turn: a small domestic
moment (kettle, tea, warm kitchen) — and then she looks up, and the sky
is full of stars, and they have been there all along. The vastness
arrives; it was always there.

Revision 5. Earlier revisions: "The Snow" (built, not submitted),
"The Fog" (0.6795), "The Porch Light" (0.6970), "The Tide Pool"
(0.7153), "Starlight on the Sill" (0.7017).

## Run

```sh
node main.ts
```

Writes the text to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`).
Deterministic: no randomness, no clock, no network — the same bytes on
every run.

## License

MIT — see [LICENSE](LICENSE).
