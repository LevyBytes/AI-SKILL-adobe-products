# Blur and Sharpen effects - Camera Lens Blur effect

Think of this as the successor to the Lens Blur effect. It carries a wider blur radius (500) and runs far quicker than Lens Blur did. Unlike its predecessor, the Camera Lens Blur effect leaves Render Multiple Frames Simultaneously multiprocessing switched on.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Note

The same descriptions given here for the Camera Lens Blur effect's properties carry over to the camera layer's Camera Options properties group, where the names match or come close.

Iris Properties

Under Iris properties you'll find Shape, Roundness, Aspect Ratio, Rotation, and Diffraction Fringe.

Diffraction Fringe

Wraps a halo around an iris edge to mimic light bending and pooling along the rim of the iris blades. At a setting of 100, you see a natural, ordinary halo scaled to the region the blur shape covers. Push it to 500 and every bit of the blur's energy gets driven out from the interior toward the ring or halo. The net effect essentially imitates a catadioptric lens.

Blur Map

You can press a control layer into service as a blur map that drives Camera Lens Blur effect properties.

Layer

The layer you assign as the blur map.

Channel

Which channel—luminance, color, or alpha—feeds the blur map.

Blur Focal Distance

A control-layer value here maps to no blurring at all. How blurry a given region on the effect's layer turns out depends on the gap between the Blur Focal Distance value and the value coming from the control layer.

Highlight

Adjusts color values for any pixel sitting above the threshold. Lean on higher highlight values to land a strong blooming blur or glow.

Gain

How much energy gets pumped into pixels above the threshold. The brighter a pixel already is past that threshold, the more its value is lifted by this proportional amount.

Threshold

The brightness ceiling that decides what Gain lifts. Pixels far brighter than the threshold get pushed harder than ones only a little above it. Drop the threshold to 0 and any pixel brighter than 0 gets boosted; raise it to 1 and highlights are all but wiped out, unless the image carries overbrights.

Saturation

How much color the boosted pixel hangs onto. At 0, boosted colors are driven toward white—the behavior of the old Lens Blur effect. At 100, the effect works to hold as much color as it can. This highlight saturation really shows itself when colored lights are in play (think of a city skyline after dark), where the hues weave a many-colored tapestry of bokeh.

Edge Behavior

Read up on Blur & Sharpen effects to grasp how the Repeat Edge Pixels options behave within blur effects.

Use Linear Working Space

Delivers output much like a project configured for a linearized working color space. Turn this property on (or set it through the project settings) so your images show off realistic bokeh.

Note

Beyond ticking the Use Linear Working Space checkbox, make sure you're working in 32-bpc color. A lower color bit depth brings on quantization.
