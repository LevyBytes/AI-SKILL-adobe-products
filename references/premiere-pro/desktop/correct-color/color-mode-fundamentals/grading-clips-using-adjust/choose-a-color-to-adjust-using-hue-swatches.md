# Choose a color to adjust using Hue swatches

For speed, this effect analyzes the initial frame of the current clip at the playhead and creates color swatches for the most important hues in that image.

Hovering over a color swatch or Shift control previews the parts of the image that overlap the chosen hue by drawing an overlay in the monitor. Selecting a swatch assigns it to the Saturation, Hue, and Lum Shift controls.

When no existing color patch matches the hue you want, use the eyedropper in the monitor to sample it. As the eyedropper moves across the image, an overlay shows the colors currently targeted for sampling. Selecting samples the color under the pointer. If the sampled color is distinct enough, a new swatch appears. If it is too close to an unused existing hue swatch, that swatch updates to the new hue and becomes selected. Otherwise, a swatch that already overlaps the sampled color is selected in case it was not obvious.

If the first sampled frame does not represent the rest of the clip well enough, move that clip's playhead to a better frame. Then select the Plus (+) button and choose Extract Hues (Default). Premiere Pro re-analyzes the new frame and creates new swatches.

Another option is to create Full Spectrum swatches made from primary (red, green, blue), secondary (yellow, cyan, magenta), and orange hues, or Memory Color swatches for familiar hues viewers expect. Both choices are in the Plus (+) menu.

When you sample or load a complete replacement hue set, hues without adjustments are replaced by the new hues. Hues that already have adjustments, shown with a dot under the swatch, are kept so existing work is not lost.
