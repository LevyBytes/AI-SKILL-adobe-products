# About masks

Within After Effects, a mask is a path pressed into service as a parameter that alters layer attributes, effects, and properties. Most often a mask is used to alter a layer's alpha channel, which governs how transparent the layer is at each pixel. Another frequent role for a mask is serving as a path along which to animate text.

Dig deeper into how paths are handled in After Effects.

The default behavior for a drawn mask and the same mask inverted in After Effects.

A layer can gain transparent regions from closed-path masks. Open paths can't carve transparent regions into a layer, though they do serve well as parameters feeding an effect. Among the effects that accept either an open or a closed mask path as input are Stroke, Path Text, Audio Waveform, Audio Spectrum, and Vegas. Among those that take closed masks (but not open ones) as input are Fill, Smear, Reshape, Particle Playground, and Inner/Outer Key.

Every mask is tied to one particular layer. A single layer may hold any number of masks.

Common geometric shapes — polygons, ellipses, and stars among them — can be drawn as masks with the shape tools, or you can trace an arbitrary path using the Pen tool.

Drawing mask paths largely mirrors drawing shape paths on shape layers, though editing and interpolating mask paths brings a few extra capabilities. Expressions let you tie a mask path to a shape path, carrying the strengths of masks across into shape layers and the reverse as well. Read up on building shapes and masks, along with editing and animating both shape paths and mask paths.

Where a mask sits in the Timeline panel's stacking order shapes how it plays against other masks. You're free to drag a mask to a different spot inside the Masks property group in the Timeline panel.

How much sway a closed mask holds over the layer's alpha channel within the mask area is set by the Mask Opacity property for that mask. At a Mask Opacity value of 100%, the interior region is opaque. Beyond the mask, the area stays transparent at all times. To flip which side counts as inside and which as outside for a given mask, select Invert next to the mask name in the Timeline panel.
