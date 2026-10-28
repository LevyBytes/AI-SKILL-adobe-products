# Linearize working space and enable linear blending

Once color management is on (by way of a named working color space), linearizing the working color space lets every color operation run in linear light. The primaries and white point a linearized color space holds are identical to those of its nonlinear counterpart. For the linearized color space, the tone response curve is nothing more than a straight line.

Even without color management enabled, blending operations remain available to you at a gamma of 1.0.

Running operations inside a linear color space heads off certain edge and halo artifacts — the fringing that crops up where high-contrast, saturated colors blend, for one. Plenty of color operations gain from a linear color space, including those tied up in image resampling, blending across layers with blending modes, motion blur, and anti-aliasing.

If a linearized working color space is what you want, set it up as you start the project rather than swapping to it down the line. Otherwise the colors you pick in the color picker will shift the moment you move to a linear working color space, because After Effects reads colors as living in the working color space.

Note

A linearized working color space pairs best with deeper color — 16 bpc and 32 bpc — while 8-bpc color isn't a recommended fit.

Go to File > Project Settings > Color, then take one of these actions:

For a linearized working color space, tick the Linearize working color space option.

For linear-space color blending, pick Blend colors using 1.0 gamma. Blending across layers is all this option touches. As a result, opacity fades, motion blur, and other features leaning on blending modes are affected.
