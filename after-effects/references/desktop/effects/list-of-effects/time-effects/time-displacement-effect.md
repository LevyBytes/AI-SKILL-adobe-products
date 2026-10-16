# Time Displacement effect

Time Displacement effect

Time Displacement effect Displacement map layer

Displacement map layer

By sliding pixels across time, the Time Displacement effect warps the image and yields a broad range of results. The classic slit-scan technique, for example — which records the successive stages of a moving image across time — can be reproduced with the Time Displacement effect.

This effect works with 8-bpc and 16-bpc color.

Note

Once the Time Displacement effect is applied, any masks on that same layer are disregarded. Should you need to mask the layer, apply the effect first and then precompose it with the Move All Attributes into the New Composition option.

Much like the Displacement Map effect, the Time Displacement effect relies on a displacement map, but it ties the movement of the layer's pixels to luminance values in that map. Layer pixels matching bright regions of the displacement map are swapped for pixels at the same spot but a set number of seconds ahead in time. In the same way, layer pixels matching dark regions of the displacement map are swapped for pixels a set number of seconds behind in time. Any layer can serve as a displacement map, though a grayscale image makes brightness levels easier to see and pixel displacement easier to anticipate.

Without keyframes or expressions, the Time Displacement effect swaps pixels across time on its own. You can still animate other properties to vary the effect over time, though.

Picturing the displacement as a series of steps helps clarify how pixels get displaced in time.

After Effects lays the displacement map layer over the effect layer (the one you're distorting). When the displacement map's dimensions differ from the effect layer's, it's up to you whether the map gets centered or scaled to fit.

You name a maximum displacement amount, measured in seconds.

Working from the maximum displacement amount, After Effect reads each displacement-map pixel's luminance value and from it computes how far the matching pixel in the effect layer shifts.

In grayscale images the luminance value range runs from 0 to 255, which is remapped to a scale from -1 to 1. A luminance value of 0 yields maximum backward displacement, so pixels at the current time are replaced by pixels from an earlier time. A luminance value of 255 yields maximum positive displacement, so pixels at the current time are replaced by pixels from a later time. A luminance value of 128 yields no displacement. For the remaining values in grayscale displacement maps, the displacement amount, in seconds, comes from this equation:

Displacement amount in seconds = maximum_displacement_time _ (2 _ (luminance_value – 128) / 256)

After Effects displaces each pixel in the image by replacing a pixel in the image at the current time with the pixel in the same position at another time. The other time is the displacement amount in seconds for the pixel, calculated in step 3.

Say you set 2 seconds as the maximum time displacement. After Effects reads each pixel's luminance value in the displacement map, then swaps the matching pixels at the current time for pixels from another time keyed to that 2-second maximum. Within the displacement map, a luminance value of 255 pulls in, for that pixel's slot, the pixel located 2 seconds ahead. A luminance value of 42 pulls in, for that same slot, the pixel sitting 1.34 seconds behind.

Time Displacement Layer

Picks which layer serves as the displacement map.

Max Displacement Time (sec)

Sets the farthest reach, in seconds, ahead of or behind the current time from which pixels get pulled. The maximum time displacement comes only from luminance values of 0 or 255 — that is, maximum darkness and maximum brightness. Every other luminance value yields a time displacement under the maximum.

Time Resolution (fps)

Sets how many frames per second pixels are replaced at. As a rule, keep this value at or below the affected layer's frame rate. Pushing Time Resolution up can drive render time way up.

Stretch Map To Fit

Resizes the Time Displacement Layer so it matches the dimensions of whatever layer you're distorting. With this option off, the time displacement layer instead stays centered within the composition.
