# Scribble effect

By filling or stroking a closed mask, the Scribble effect mimics the look of hand-drawn artwork.

It can fake fills resembling marker, crosshatching, or textiles, for instance. The effect packs a mask with one zigzagging line that weaves back and forth across the path. Because of their geometry, some paths can't be filled by a single line; in those cases the Scribble effect splits the path into several simpler ones and fills each with a zigzagged stroke.

This effect works with 8-bpc color.

Masks (upper-left), Scribble applied to outside edges (lower-left), and Scribble applied to inside edges with Composite on Original (lower-right)

Scribble

Single Mask scribbles a specified mask on the layer; All Masks scribbles all masks on the layer; All Masks Using Modes combines the masks using their modes and then scribbles the resulting shape.

Mask

Which mask is used when Scribble is set to Single Mask.

Fill Type

Sets whether the fill draws inside the path or runs a scribble along it. Left Edge lays the fill along the path's left edge; Right Edge lays it along the right edge. Which edge is left and which is right depends on the direction the path was drawn. On masks with tight curves, the Left Edge or Right Edge fill types come out best when you keep the Edge Width below the curve's radius.

Edge Options

Settings for the scribble's edge when Fill Type is set to an edge.

Edge Width

Sets how wide the edge is.

End Cap

Sets how the scribble lines terminate. Round gives stroked lines semicircular ends; Butt gives them squared ends; Projecting gives them squared ends that reach half the line width past the line's end, so the line's weight spreads equally in every direction around it. This option becomes available only when Fill Type is set to Centered Edge.

Join

Sets how a scribble line's corners look. Round gives stroked lines rounded corners; Bevel gives them squared corners; Miter gives them pointed corners.

Miter Limit

Sets the point at which the effect trades a miter (pointed) join for a bevel (squared-off) join. Pick a value in the range from 1 to 500. At the default of 4, for instance, the effect drops from a miter to a bevel join once the point's length hits four times the stroke weight. A miter value of 1 yields a bevel join. This becomes available when Join is set to the Miter option.

Start/End Apply To

Sets how the effect's Start and End options in the Timeline panel take effect; Scribble Result acts on the scribble in its drawing order, while Mask Path traces the mask's path to make drawing in or out of the scribble flow more continuously.

Angle

Sets the angle of the scribbled stroke.

Stroke Width

Sets the stroke's width. Pick a value from 0.1 to 50.

Stroke Options

Set the scribbled line's curviness, spacing, and overlap.

Curviness

Sets how much curve appears at the end of each scribbled stroke. Pick a value between 0° and 100°.

Curviness Variation

Sets how much the curviness values may vary at each end point. Pick a value between 0% and 100%. At 0 the scribble gets sharp corners; at 100 the scribble turns loopy.

Spacing and Spacing Variation

How many pixels sit between lines and zigzags. Match this value to the stroke width and the lines land right beside one another.

Path Overlap

Sets whether the scribble stops at the path, inside it, or outside it. Use 0 to stop at the path, negative values to stop inside, and positive values to stop outside. Path Overlap Variation sets how far each stroke may stray from the Path Overlap value.

Start, End

Where the drawn stroke begins and ends, given as a percentage of the distance from the start of the whole stroke.

Fill Paths Sequentially

Becomes available when Scribble is set to All Masks. Selected, the start and end values cover the combined length of the scribbles across all masks. Cleared, the start and end values act on each mask's scribble on its own.

Wiggle Type

Sets an animation style: Static holds the scribble steady over time; Jumpy snaps from one scribble to the next; and Smooth eases from one scribble to the next.

Wiggles/Second

Sets how often a fresh scribble appears once you've set Wiggle Type to either Smooth or Jumpy.

Composite

On Transparent swaps the scribble in for the original image. On Original Image lays the scribble over the original image. Reveal Original Image lets the original image show through the scribble.
