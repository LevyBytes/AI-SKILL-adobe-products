# Pixel Aspect Ratio

Footage with non-square pixels, plus downsampling that differs along each axis, has to be handled gracefully by an effect — and remember that individual layer parameters may each carry their own pixel aspect ratio. None of this is hard to get right once the underlying ideas click.

For straightforward effects, no special effort is needed to line point parameters up with the real output pixels. After Effects hands you point parameters already adjusted for downsample factor and pixel aspect ratio, expressed in the input buffer's coordinate frame. The upshot is an implicit "pixel coordinate system" that's both convenient and intuitive. The catch is reserved for effects relying on absolute pixel distances or geometry: those need to examine more closely how the input buffer maps onto the final rendered image.
