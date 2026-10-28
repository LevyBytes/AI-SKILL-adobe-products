# Making adjustments using the Color Shift controls

After selecting the hue to change, the three Shift controls adjust Saturation, Hue, and Luminance for everything in the frame that contains that hue.

- Sat Shift: Drag upward to increase saturation or downward to reduce it. Drag right to include a wider range of neighboring hues in the adjustment, or drag left to narrow the effect closer to the selected hue. Sat Shift can replace Global Saturation when you need hue-specific control, letting you boost colors that need strength and reduce colors that distract so saturation can be shaped in more sophisticated creative ways.

The Sat Shift HUD uses a vectorscope analysis of chrominance, where hue is shown by angle around the circle and saturation by distance from the center. A single pie-slice indicator marks the hue section being modified in the Vectorscope; it moves outward when saturation is raised and inward when saturation is lowered. The slice grows or shrinks as the affected hue range is widened or narrowed. This control shows a simple value from 100 to -100.

- Color Shift: Drag vertically to rotate the targeted color around the color wheel shown in the HUD, changing its hue. Drag right to broaden the neighboring hue range that this control changes, or drag left to tighten the range around only the selected hue. Color Shift is useful for colors that feel wrong, such as an actor looking too green, a red product logo drifting orange, or a cyan sky that should lean more blue.

The Color Shift HUD presents chrominance in a vectorscope, with circular angle representing hue and distance from center representing saturation. A blue pie-slice indicator shows the adjusted hue section as it rotates around the vectorscope, while a dotted pie slice marks its original position before rotation. The pie slices expand and contract as you widen or narrow the affected hue range. This control shows a simple value from 100 to -100.

- Lum Shift: Drag upward to brighten the targeted hue, or downward to darken it. Drag right to include more neighboring hues in the adjustment, or drag left to limit the change to the selected hue. Lum Shift requires care because large changes can expose image compression artifacts more easily than the other Shift tools. Used with restraint, it can brighten image areas that are hard to isolate otherwise, or add richness by darkening colors just enough.

The Lum Shift HUD shows a waveform monitor view of image luminance. Multiple overlapping waveforms indicate the luminance range occupied by pixels in each image line: darker pixels dip lower, and lighter pixels rise higher. While an adjustment is being made, waveform areas tied to the targeted color are highlighted, showing how much the selected hue's pixels are being brightened or darkened.
