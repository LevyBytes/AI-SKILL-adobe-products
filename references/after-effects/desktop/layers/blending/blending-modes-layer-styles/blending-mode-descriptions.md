# Normal and dissolve blending modes

Note

A few of the color values cited in the descriptions below are expressed on the 0.0-1.0 scale running from black to white.

Normal

Here the result color equals the source color, and the underlying color is disregarded entirely. Normal is the mode applied by default.

Dissolve

For any pixel, the result color comes out as either the source color or the underlying color. Which one wins is a matter of probability tied to the source's opacity. At 100% source opacity the result is the source color; at 0% it's the underlying color. Neither Dissolve nor Dancing Dissolve functions on 3D layers.

Dancing Dissolve

This behaves like Dissolve, with one twist: the probability function gets recomputed every frame, so the outcome shifts as time passes.

Related references:

- [Darkening blend modes](darkening-blend-modes.md)
- [Lightening blend modes](lightening-blend-modes.md)
- [Contrast blend modes](contrast-blend-modes.md)
- [Difference and arithmetic blend modes](difference-and-arithmetic-blends.md)
- [Hue, saturation, color and luminosity blend modes](component-blend-modes.md)
- [Alpha, stencil and silhouette blend modes](alpha-stencil-and-silhouette-blends.md)
