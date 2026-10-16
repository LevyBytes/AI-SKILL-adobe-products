# Generate a clipping path automatically

Detect Edges evaluates tonal values so the lightest or darkest image areas can be hidden, especially on graphics with solid white or solid black backgrounds.

Using the Selection tool, choose the imported graphic.

Open Object > Clipping Path > Clipping Path. Turn on Preview in the Clipping Path dialog box to inspect results live while changing settings.

Open the Type menu, then choose Detect Edges.

Set Threshold to determine which pixel lightness values become transparent, beginning with white at 0.

Change Tolerance to smooth the clipping path by controlling how much variation from Threshold is accepted.

Use Inset Frame to move the boundary inward with positive values or outward with negative values.

Turn on Include Inside Edges when interior image regions should also become transparent.

Click OK.

Raising Threshold makes more pixels transparent because a wider span of lightness values is hidden. Lowering Tolerance produces tighter and more detailed paths with more anchor points, which can affect printing performance.
