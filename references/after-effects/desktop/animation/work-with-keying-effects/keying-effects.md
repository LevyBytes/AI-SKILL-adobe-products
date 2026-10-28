# Keying Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Note

The native color keying effects shipped with After Effects do have their uses, but reach for Keylight first before falling back on them. Several of the older ones have since been replaced by more capable tools such as Keylight.

What the Color Difference Key effect does is build transparency from two opposite directions at once, splitting an image into a pair of mattes, Matte Partial A and Matte Partial B.

Transparency in Matte Partial B keys off the chosen key color, whereas Matte Partial A keys off the image regions free of a second, distinct color. Folding those two together yields a third matte—the alpha matte—through which the Color Difference Key arrives at crisp, well-defined transparency values.

Across every well-lit clip shot on a bluescreen or greenscreen, the Color Difference Key turns out high-quality keys, and it shines in particular on imagery holding semitransparent or fully transparent passages—glass, shadows, and drifting smoke among them.

Supported color depths are 8-bpc and 16-bpc.

Original

Original Matte Partial A

Matte Partial A Matte Partial B

Matte Partial B Alpha matte

Alpha matte Tip

For information about keying in general, including links to tutorials and other resources, refer to Keying introduction and resources.
