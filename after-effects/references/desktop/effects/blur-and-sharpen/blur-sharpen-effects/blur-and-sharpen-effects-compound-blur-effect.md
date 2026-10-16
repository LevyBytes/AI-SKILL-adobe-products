# Blur and Sharpen effects — Compound Blur effect

The Compound Blur effect softens pixels in the effect layer according to the luminance of a control layer, which also goes by the name blur layer or blurring map. Out of the box, brighter spots in the blur layer drive heavier blurring of the effect layer and darker spots drive lighter blurring—tick Invert Blur to flip that so light values mean less blurring.

It comes in handy for faking smudges and fingerprints, or shifts in visibility from atmospheric conditions like smoke or heat, and it shines with animated blur layers such as the ones the Turbulent Noise effect produces.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Maximum Blur

The ceiling, measured in pixels, on how much any region of the affected layer may be blurred.

Stretch Map To Fit

Scales the control layer out to match the dimensions of the layer it's applied to—leave it off and the control layer just sits centered on the effect layer instead.
