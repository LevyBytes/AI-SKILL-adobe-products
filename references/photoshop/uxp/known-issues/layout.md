# Layout

- For wrapped inline text, borders, outlines, and backgrounds are applied only to the first line. Put those visual treatments on elements that use block layout semantics.
- Combining inline text and UI controls generally produces awkward visual alignment. `vertical-align` exists, but baseline layout may not behave as expected, so aligning labels and widgets can be difficult. Use `flex` or `inline-flex` when UI elements are involved.
