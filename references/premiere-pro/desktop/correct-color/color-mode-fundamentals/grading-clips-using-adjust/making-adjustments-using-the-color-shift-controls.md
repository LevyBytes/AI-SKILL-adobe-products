# Making adjustments using the Color Shift controls

After the hue is selected, the three Shift controls can change Saturation, Hue, and Luminance for everything in the frame that contains that hue.

- Sat Shift: dragging up increases saturation, and dragging down decreases it. Dragging right widens the neighboring hue range affected by the control; dragging left narrows it toward only the selected hue. Sat Shift can stand in for Global Saturation when you want to target individual hues, boosting colors that need more strength and reducing distracting ones for more deliberate saturation shaping.

The Sat Shift HUD displays vectorscope chrominance analysis: hue maps to circular angle, and saturation maps to distance from the center. A pie-slice indicator marks the hue section being adjusted in the Vectorscope. It moves outward toward the edge when saturation is raised and inward toward the center when saturation is lowered. The slice widens or narrows as the affected hue range widens or narrows. The displayed control value spans 100 to -100.

- Color Shift: dragging up or down rotates the targeted hue on the HUD color wheel. Dragging right broadens the neighboring hues included in the adjustment, while dragging left limits the range closer to the chosen hue. Color Shift is helpful when a color is slightly wrong, such as an actor who looks too green, a red product logo that appears too orange, or a cyan sky that should be bluer.

The Color Shift HUD presents vectorscope chrominance analysis, mapping hue to circular angle and saturation to center distance. A blue pie-slice indicator shows the adjusted hue section as it rotates around the vectorscope, while a dotted-line pie slice marks the section's original position before rotation. The pie slices widen or narrow as you broaden or tighten the affected hue range. The displayed control value spans 100 to -100.

- Lum Shift: dragging up brightens the targeted hue, and dragging down darkens it. Dragging right expands the neighboring hue range changed by this control; dragging left narrows the range toward only the selected hue. Lum Shift requires care because stronger moves expose compression artifacts more readily than the other Shift tools. Used with restraint, it can brighten image areas that are hard to isolate otherwise, or add richness by darkening colors slightly.

The Lum Shift HUD shows waveform-monitor luminance analysis. Multiple overlapping waveforms show the luminance range occupied by pixels in each line of the image: darker pixels dip downward closer to the bottom, and lighter pixels rise as peaks toward the top. During an adjustment, waveform areas matching the selected color are highlighted so you can judge how much the targeted hue's pixels are being brightened or darkened.
