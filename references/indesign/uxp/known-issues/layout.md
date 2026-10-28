# Layout

- For wrapped inline text, borders, outlines, and backgrounds are applied only to the first line. Put those visual treatments on block-layout elements instead.
- UI controls mixed with inline text usually produce poor visual alignment. Although `vertical-align` exists, baseline layout can behave differently than expected, making widgets and labels hard to line up. Use `flex` or `inline-flex` when UI elements are involved.
