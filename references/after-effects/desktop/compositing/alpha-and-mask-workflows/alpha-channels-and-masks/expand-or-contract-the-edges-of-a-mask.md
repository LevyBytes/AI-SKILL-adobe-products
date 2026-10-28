# Expand or contract the edges of a mask

The Mask Expansion property is what you reach for to grow or shrink the region a mask influences.

Rather than altering the actual mask path, mask expansion acts on the alpha channel alone; think of it as an offset, measured in pixels, setting the distance out from the mask path that the mask's effect on the alpha channel reaches.

Mask expansion values can be scrubbed as high as 32,000 and as low as -32,000. In older releases of After Effects, scrubbing capped out at 1,000, and reaching past 1000 meant typing the figure in by hand.

Within the Timeline panel, open up the Mask properties belonging to the layer you intend to change.

Drag the underlined value for Mask Expansion.
