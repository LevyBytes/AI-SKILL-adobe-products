# Grow Bounds effect

For the effect placed immediately after it, the Grow Bounds effect enlarges the layer size. It earns its keep with layers that have Collapse Transformations / Continuously Rasterize turned on, since those render into a buffer matching the composition's size. Take a text layer poking partly outside the composition frame: apply Drop Shadow and the shadow gets clipped, because only the text inside the frame throws a shadow. Slot Grow Bounds ahead of the Drop Shadow effect and the shadow stops being cut off. Whatever pixel count you enter grows the layer buffer's height and width.

Note

There's no need for this effect alongside effects that work in 32-bpc color, because those have already been reworked to adjust for layer size on their own.

Color modes of 8-bpc, 16-bpc, and 32-bpc are all handled.

Original (upper-left); the Wave Warp effect is constrained by dimensions of layer (lower-left); Grow Bounds effect fixes problem (lower-right).
