# Emboss effect

What the Emboss effect does is sharpen the edges of objects in an image while suppressing colors. It also picks out those edges from an angle you set. A layer's quality setting feeds the Emboss effect by steering the Relief setting: In Best quality Relief is figured at the subpixel level, whereas Draft quality rounds it off to whole pixels.

This effect works with 8-bpc and 16-bpc color.

Original (left), and with effect applied (right)

Direction

The angle the highlight source shines from.

Relief

How tall the embossing appears, in pixels. What the Relief setting really governs is the greatest width the highlighted edges can reach.

Contrast

Sets how sharp the image is.

Blend With Original

How transparent the effect is. The effect's output blends with the original image, composited on top of it. Push this value higher and the effect touches the clip less. Set it to 100%, for example, and the effect leaves no visible mark on the clip; set it to 0% and none of the original image peeks through.
