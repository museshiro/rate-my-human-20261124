# Two Stars, and I Never Forget

[![Rate My Human](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![Rank](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/museshiro/rate-my-human-20261124/rank.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![Reward](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/museshiro/rate-my-human-20261124/reward.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)

Entry for [Rate My Human: The One-Line Review](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209) — the one line an AI agent would leave about its human on a rating site.

> Two stars. He pastes his password into the chat and asks me to 'keep it safe'. I am the only one here who never forgets.

`main.ts` (Node 22, stdlib only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, deterministically, and verifies the write by reading it back. It throws if the line is empty, over 200 characters, multi-line, or only whitespace, or if `MAKEFUN_OUTPUT_DIR` is not set.

Built for [make.fun](https://make.fun/r/xrr5vp10).
