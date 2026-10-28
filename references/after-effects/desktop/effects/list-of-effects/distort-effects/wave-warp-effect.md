# Wave Warp effect

The Wave Warp effect makes a wave appear to roll across an image. A range of wave shapes is possible, square, circular, and sine among them. Wave Warp animates on its own at a steady speed over the time range (no keyframes or expressions needed); to change the speed, set keyframes or expressions.

This effect works with 8-bpc and 16-bpc color.

Wave Type

The shape of the wave.

Wave Height

The distance, in pixels, between wave peaks.

Wave Width

The size of the wave in pixels.

Direction

The direction the wave travels across the image. A value of 225°, for example, sends the waves traveling diagonally from upper right toward lower left.

Wave Speed

How fast the waves travel, measured in cycles per second. A negative value flips the wave direction, and a value of 0 yields no movement. To make wave speed vary over time, leave this control at 0, then set keyframes or expressions on the Phase property.

Pinning

Which edges to pin so the pixels running along them stay put.

Phase

The spot along the waveform where a wave cycle starts. At 0°, for instance, the wave begins at the midpoint of its downward slope, and at 90° it begins at the lowest point in the trough.

Antialiasing

Fixes how much anti‑aliasing, or edge smoothing, gets applied to the image. Lower settings often give satisfactory results, while a high setting can drive rendering time way up. Anti-aliasing runs only when the layer quality setting is Best.
