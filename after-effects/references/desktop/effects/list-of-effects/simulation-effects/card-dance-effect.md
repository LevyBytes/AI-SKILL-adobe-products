# Card Dance effect

Note

For the properties that several Simulation effects have in common, see Common Lighting controls and Material controls.

What this effect does is slice a layer into a host of individual cards and then drive every geometric trait of those cards from a second layer, producing card-choreography visuals. Card Dance can, for instance, conjure an extruded pin sculpture, a crowd performing the wave, or letters drifting across a pond's surface.

Color support for this effect is 8-bpc.

Original (upper-left), and with rotation adjusted using Camera Position controls (lower-left) and Corner Pin controls (lower-right)

Original (upper-left), and with rotation adjusted using Camera Position controls (lower-left) and Corner Pin controls (lower-right) Original (left), gradient layer (center), and with Card Dance applied (right)

Original (left), gradient layer (center), and with Card Dance applied (right)

Put Card Dance on whichever layer you want fronting the cards. Establish the viewpoint through the rotation or perspective controls, or corner-pin to line the effect up with the perspective of any given scene.

As an illustration, choose a vertical grayscale gradient layer (black at the top, white at the bottom) under Gradient Layer 1, then pick Intensity 1 from the X Rotation Source menu. Card Dance reads that gradient's intensity to drive each card's rotation about the x-axis. Each card's center pixel on the gradient layer earns a numeric value tied to its intensity, where pure white maps to 1, pure black to –1, and 50% gray to 0. That value is then scaled by the X Rotation Multiplier and each card turns by the result. Set X Rotation Multiplier to 90 and the top-row cards tip nearly 90° backward while the bottom-row cards tip nearly 90° forward, with the middle rows turning proportionally less. Cards landing in the 50% gray zone stay put.

Say you want one half of a layer's cards entering from the right and the other half from the left: build a gradient layer that's half black, half white. Make that gradient the X Position source, set X Position Multiplier to 5, and animate it down to 0. Cards over the black region start out at the left, and cards over the white region start out at the right.
