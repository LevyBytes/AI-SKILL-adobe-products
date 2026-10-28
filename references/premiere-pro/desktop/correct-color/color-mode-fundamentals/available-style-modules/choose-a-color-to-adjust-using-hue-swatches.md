# Choose a color to adjust using Hue Swatches

To speed up work, this effect analyzes the first frame of the current clip at the playhead position and creates color swatches for the most important hues it finds.

Hover over a color swatch or a Shift control to preview, as a monitor overlay, which image regions overlap the selected hue. Selecting a swatch assigns it to the Saturation, Hue, or Lum Shift controls.

When no color patch matches the hue you need, use the eyedropper to sample that color in the monitor. As the eyedropper moves across the image, an overlay shows the colors being targeted for sampling. Clicking samples the color beneath the pointer. If that sampled color is distinct enough, a new swatch appears. If it is not distinct enough from an existing unused hue swatch, that swatch is updated to the new hue and selected. Otherwise, a swatch that overlaps the sampled color is selected in case the matching swatch was not obvious.

If the initially sampled first frame does not represent the rest of the clip well, move the playhead to another frame in the same clip. Then click the Plus (+) button and choose Extract Hues (Default); Premiere analyzes that frame again and generates new swatches.

Another option is to create a standard Full Spectrum swatch set containing primary colors (red, green, blue), secondary colors (yellow, cyan, magenta), and orange hues, or to create Memory Color swatches for common expected hues. Both choices are in the Plus (+) menu.

When you sample or load an entirely new hue set, any hue that has not yet been adjusted is replaced. Hues that already have changes, shown by a dot under the swatch, are kept so existing adjustments are not lost.
