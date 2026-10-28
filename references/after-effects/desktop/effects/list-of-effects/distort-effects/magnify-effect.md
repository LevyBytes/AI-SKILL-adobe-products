# Magnify effect

All or part of an image is enlarged by the Magnify effect. It can behave like a magnifying glass held over one spot of the picture, or you can push the whole image well past 100% and still hold onto resolution.

Color depth handled: 8-bpc.

Original (upper-left), and with variations of Magnify applied (lower-left and right)

Shape

The shape of the magnified area.

Center

The center point of the magnified area.

Magnification

Percentage by which to scale the magnified area.

Link

Sets how the Magnification setting drives the size and edge feathering of the magnified area. Any Link value other than None switches off the Resize Layer option.

None

Magnification has no bearing on the magnified area's size or edge feathering.

Size To Magnification

Multiplying the Magnification value (a percentage) by the Size value sets the magnified area's radius.

Size & Feather To Magnification

Here the magnified area's radius again comes from Magnification (a percentage) multiplied by Size, while the edge feather's thickness comes from Magnification multiplied by Feather.

Size

The magnified area's radius, given in pixels.

Feather

How much edge feather to apply, measured in pixels.

Opacity

How opaque the magnified area is, stated as a percentage of the underlying layer's own opacity.

Scaling

The type of scaling used to magnify the image:

Standard

Sharpness in the picture holds up under this method, though edges turn pixelated at higher values.

Soft

Leans on spline algorithms. Scale the picture past 100% and Soft tones down edge pixelation while keeping image quality intact. Soft does well at heavy magnification amounts.

Scatter

Introduces scatter or noise into the picture as it grows.

Blending Mode

Decides how the magnified area is merged with the layer beneath it. Pick None and transparent pixels surround the magnified area.

Resize Layer

With Resize Layer turned on, the magnified area is allowed to spill past the original layer's edges.
