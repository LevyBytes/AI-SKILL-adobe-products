# Gamma and tone response

For any color space, the tone response describes how light intensity relates to the signal that produces, records, or perceives that light.

Light does not register linearly in the human visual system. That is, doubling the photons reaching our eyes over a span of time does not double how bright we judge a light to be. In the same vein, a CRT monitor's display elements don't put out twice the brightness when fed twice the voltage. A power function captures the link between light intensity and signal intensity for a display device, and gamma is the name given to that power function's exponent. As a rule, an input device's light-to-signal relationship inverts an output device's, though the gamma values can vary between input and output devices to reconcile the gap between scene lighting and the lighting where the content is viewed.

Note

Shifting the midtone slider — the Gamma control on the Levels effect, for example — inside a color-correction histogram produces the same effect as altering gamma: it reshapes the tone response curve while leaving the white point in place. Adjusting the curve in the Curves effect reshapes tone response as well, though not always along a gamma curve.
