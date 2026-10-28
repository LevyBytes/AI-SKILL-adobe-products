# Gradient controls

Which gradient layer governs an explosion's timing, and which fragments the blast hits, is set through the Gradient controls.

Shatter Threshold

Sets which fragments inside the force sphere break apart, keyed to the matching luminance on the chosen gradient layer. At a Shatter Threshold of 0%, nothing in the force sphere shatters. At 1%, only the fragments matching white (or nearly white) regions of the gradient layer break. At 50%, every fragment matching the white-through-50%-gray regions shatters. At 100%, the whole force sphere shatters. With 256 gray shades in play (black and white counted), roughly 2.5 shades map to each percentage point.

Keyframing Shatter Threshold steers when the explosion happens. Held at 0%, the layer never blows apart. Set a Shatter Threshold keyframe at 50%, though, and the force-field fragments matching gradient-layer regions running from white to 50% gray explode. Push Shatter Threshold on up to 100% and the rest of the force sphere's fragments follow.

Gradient Layer

Sets which layer decides the moment particular regions of the target layer break apart. Regions that are white go first; black ones go last. Shatter maps pixels to fragments by carving the layer into pieces, each carrying a center or balance point. Overlay the shatter map onto the gradient layer, and the gradient-layer pixels lying exactly beneath each balance point drive the explosion.

Note

A handful of shapes — the letters C and U, say — carry a balance point that lands outside the shape's real boundaries. In that case, steer clear of grayscale renderings of letters when building a gradient layer. Reach instead for larger shapes that span each character's balance point.

Invert Gradient

Flips the gradient's pixel values: white turns to black and black turns to white.
