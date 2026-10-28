# Turbulent Noise effect

Grayscale noise built from Perlin noise is what the Turbulent Noise effect produces, and it lends itself to natural-looking backdrops, displacement maps, and textures, or to faking things like clouds, fire, lava, steam, running water, or vapor.

At heart, the Turbulent Noise effect is a modern, faster build of the Fractal Noise effect. It renders in less time and makes smooth animations simpler to put together. The Turbulent Noise effect also models turbulent systems more faithfully, with fine noise detail traveling faster than coarse detail. What makes Fractal Noise worth choosing over Turbulent Noise is building looping animations, because Turbulent Noise lacks Cycle controls.

Note

The control sets for the two effects line up so closely that most guides and tutorials written for the Fractal Noise effect carry over directly to working with the Turbulent Noise effect.

Small shifts in the noise's shape come from the Evolution controls. Keyframing them yields gradual transformations of the noise across time, producing looks reminiscent of, say, drifting clouds or moving water.

Supported color depths are 8-bpc, 16-bpc, and 32-bpc.
