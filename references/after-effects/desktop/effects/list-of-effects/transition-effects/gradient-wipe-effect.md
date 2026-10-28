# Gradient Wipe effect

What the Gradient Wipe effect does is turn pixels in the layer transparent according to the luminance of the matching pixels in a second layer, the gradient layer. Where the gradient layer is dark, the corresponding pixels go transparent at a lower Transition Completion value. Take a plain grayscale gradient running black on the left to white on the right: as Transition Completion climbs, it uncovers the layer below from left to right.

Both 8-bpc and 16-bpc color are handled.

Original (upper-left), and with effect applied (lower-left and right)

A still image or a moving one can serve as the gradient layer, and it has to live in the same composition as the layer you apply Gradient Wipe to.

There are plenty of routes to making gradient layers — the Ramp effect, for one, or building them in Photoshop or Illustrator.

Transition Softness

How gradual the transition is for each pixel. At 0%, pixels in the layer carrying the effect are either fully opaque or fully transparent. Above 0%, pixels turn semitransparent through the middle stages of the transition.

Gradient Placement

How the gradient layer's pixels map onto the pixels of the layer carrying the effect:

Tile Gradient

Lays down several tiled copies of the gradient layer.

Center Gradient

Drops one copy of the gradient layer at the layer's center.

Stretch Gradient To Fit

Stretches the gradient layer in both dimensions so it spans the layer's whole area.

Invert Gradient

Flips the gradient layer's influence: now its lighter pixels produce transparency at a lower Transition Completion value than its darker ones do.
