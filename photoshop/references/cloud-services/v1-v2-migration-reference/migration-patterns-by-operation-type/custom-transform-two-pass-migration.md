# Two-pass execution for `transformMode: "custom"` with dimension / angle / skew migration

**Two-pass execution for `transformMode: "custom"` with dimension / angle / skew:**

If `transform` contains `dimension`, `angle`, or `skew`, pie-worker uses two passes:

- **Pass 1**: `dimension` + `angle` + `skew` + `anchor` (when supplied) are combined into one geometry transform. `anchor` sets the pivot point; without it, PIE uses `(0, 0)`.
- **Pass 2**: `setOffset` repositions the layer with this precedence:
  1. **`offset` provided**: move the layer to the requested absolute location (`targetOffset - postTransformBounds`)
  2. **`horizontalAlign` / `verticalAlign` provided**: move the layer to the computed alignment position
  3. **Fallback (neither offset nor alignment)**: restore the original `x, y` (`priorBounds - postTransformBounds`) so geometry-only edits do not cause drift and V1 parity is kept

> **Geometry-only case** (dimension/angle/skew without offset or alignment): the fallback path preserves the starting position. This mirrors V1, where dimension-only edits still called `setOffset` using original coordinates.

> **offset + alignment both provided**: `offset` takes precedence and alignment is skipped.

**Single-pass case**: when `transform` has only `offset` and/or `anchor`, with no `dimension`, `angle`, or `skew`, one `transform()` call is sufficient and no follow-up pass runs.
