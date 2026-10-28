# Keying effects - Use the Extract effect

Inside the Effect Controls panel, the Extract effect lays out a histogram for whichever channel is set in the Channel menu. That histogram is a picture of the layer's brightness levels, charting how many pixels fall at each one. Read left to right, the darkest point anchors one end at 0 while the brightest caps the other at 255.

The histogram spans from the darkest tones on the left (value 0) to the lightest tones on the right (value 255).

The transparency control bar sitting under the histogram is what you use to set which pixels turn transparent. Transparency follows from where the bar sits and how it's shaped against the histogram: pixels under the bar's coverage stay opaque, while those left uncovered are made transparent.

Pick the layer you mean to render partly transparent, then choose Effect > Keying > Extract.

When the goal is keying out bright or dark regions, set the Channel menu to Luminance. For visual effects, set it instead to Red, Green, Blue, or Alpha.

Pulling on the bar's top corner handles, upper right or upper left, stretches or shrinks it and so widens or tightens the transparency range. That same length also responds to the White Point and Black Point sliders, beyond which (above the white point, below the black point) pixels turn transparent.

The bottom corner handles, lower right and lower left, taper the bar when dragged. Taper its left side and you adjust how softly transparency falls across the darker parts of the image; taper its right side and the same goes for the lighter parts. Those softness amounts can equally be dialed through White Softness (lighter areas) and Black Softness (darker areas).

Tapering the control bar's edges calls for shortening the transparency bar beforehand.

- Slide the whole bar sideways, left or right, until it sits where you want beneath the histogram.
