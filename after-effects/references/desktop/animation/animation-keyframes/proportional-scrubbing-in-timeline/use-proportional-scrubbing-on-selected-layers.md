# Use Proportional Scrubbing on selected layers

Pick several layers in whatever order you want the distribution to honor.

Hold Cmd+Opt for macOS and Ctrl+Alt for Windows.

Drag the hot text of any selected property — Position, Scale, Rotation, Opacity, Effects, Shape Layer properties, and so on.

Values spread across the chosen properties and layers like this:

- Because it gets 0% of the scrub amount, the first selected layer holds still.
- Receiving the entire 100% of the adjustment, the last selected layer moves by the full scrub amount.
- Every layer between them lands a proportional value, scaled to where it falls in the selection order.

For proportional scrubbing of Scale values, all layers borrow the Constrain Proportions setting belonging to the last selected layer.

A. The last selected layer takes the full scrub amount. B. All in‑between layers get proportionally distributed values by selection order. C. The first selected layer stays unchanged, receiving 0% of the scrub.

Take the example above, where every shape layer sits at a different X‑position. Holding firm at its starting Position value of 1082, the first selected layer doesn't budge throughout Proportional Scrubbing. Scrubbing carries the last selected layer all the way to 1519. After Effects then spreads the motion proportionally across the layers in between, yielding a spacing difference value of 437 pixels. That 437 pixels stands for the full horizontal gap opened up between the first and last selected layers, which After Effects uses as the basis for evenly parceling out the incremental shifts to every layer in the selection.
