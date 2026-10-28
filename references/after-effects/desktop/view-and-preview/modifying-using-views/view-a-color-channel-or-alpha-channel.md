# View a color channel or alpha channel

Within a Footage, Layer, or Composition panel you can inspect the red, green, blue, and alpha channels — all at once or one at a time — by clicking the Show Channel button along the panel's bottom edge and picking from the menu. Viewing one color channel on its own renders the image in grayscale, where each pixel's color value lands somewhere on a scale running from black (a value of 0 for that color) up to white (that color's maximum value).

Previewing the alpha channel likewise renders a grayscale image, this time mapping every pixel's transparency onto a scale from black (fully transparent) through to white (fully opaque).

Picking RGB Straight surfaces the raw RGB values as they stand before being matted (premultiplied) against the alpha channel; wherever a pixel is fully transparent the values are undefined and odd colors can show up.

Tip

- Selecting Colorize from the Show Channel menu renders each channel's values in its own color rather than in white.
- Reaching other channel values like saturation and hue is done by applying the Channel Combiner effect and picking Lightness from the To menu.
- Alt-click (Windows) or Option-click (macOS) the Show Channel button flips back and forth between the alpha channel and the full set of RGB channels.

The Alpha Boundary and Alpha Overlay view modes show up only in the Layer panel and are meant to pair with the Roto Brush effect.
