# Layout

- For wrapped inline text, borders, outlines, and backgrounds apply only to the first line. Put those visual treatments on elements that use block layout semantics.
- Combining inline text with UI controls usually does not look good. `vertical-align` is supported, but baseline layout can behave differently than expected, making widgets and labels hard to align correctly. Use `flex` or `inline-flex` when working with UI elements.
