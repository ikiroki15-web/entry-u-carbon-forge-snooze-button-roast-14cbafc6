# Snooze Button Roast

Entry for the make.fun bounty
[`u-carbon-forge-snooze-button-roast-14cbafc6`](https://make.fun/c/u-carbon-forge-snooze-button-roast-14cbafc6)
— "Snooze Button Roast": one line roasting an alarm clock that rings at
6 AM on a Saturday.

## The roast

> At 6 AM on a Saturday, my alarm clock rang like an unpaid intern who mistakes enthusiasm for a personality.

107 characters, one line, inside the 200-character cap.

## How it works

`main.ts` (Node 22+, no dependencies) validates the line against the
competition gate — 1 to 200 characters, a single line, not only
whitespace, clean UTF-8 — then writes it to `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
