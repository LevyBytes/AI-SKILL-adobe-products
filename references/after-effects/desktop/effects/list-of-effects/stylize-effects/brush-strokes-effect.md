# Brush Strokes effect

A coarse, hand-painted appearance is what the Brush Strokes effect lays over an image. You can also chase a pointillist look by dropping brush-stroke length to 0 and pushing stroke density up. Even though you set the strokes' direction, a small random scatter keeps the result looking more natural. This effect reworks the alpha channel alongside the color channels; if you've masked off part of the image, the brush strokes paint right over the mask's edges.

This effect works with 8-bpc color.

Original (left), and with effect applied (right)

Stroke Angle

The heading the strokes follow. The image effectively slides that way, which can clip things at the layer's edges. Run the Grow Bounds effect ahead of Brush Strokes to push the layer's edges outward and head off that clipping.

Brush Size

The brush's size, measured in pixels.

Stroke Length

Each stroke's longest possible reach, in pixels.

Stroke Density

The higher the density, the more the brush strokes overlap.

Stroke Randomness

Yields strokes that aren't uniform. The more randomness you add, the further the strokes stray from the brush and stroke settings you set.

Paint Surface

Sets where the brush strokes land:

Paint On Original Image

Lays the strokes over the untouched layer. This is the default.

Paint On Transparent

Leaves only the strokes visible, with the layer transparent in the gaps between them.

Paint On White/Paint On Black

Lays the strokes over a white or black backdrop.

Blend With Original

How transparent the effect is. The effect's output blends with the original image, composited on top of it. Push this value higher and the effect touches the layer less. Set it to 100%, for example, and the effect leaves no visible mark on the layer; set it to 0% and none of the original image peeks through.
