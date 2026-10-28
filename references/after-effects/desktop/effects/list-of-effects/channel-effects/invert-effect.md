# Invert effect

The Invert effect flips an image's color information. GPU-acceleration gives it faster performance. This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Original (left), and with effect applied (right)

Channel

Which channel or channels get inverted. Every group of items works within one particular color space, flipping either the whole image in that color space or just one channel.

RGB/Red/Green/Blue

RGB flips all three additive color channels. Red, Green, and Blue each flip a single color channel.

HLS/Hue/Lightness/Saturation

HLS flips all three calculated color channels. Hue, Lightness, and Saturation each flip a single color channel.

YIQ/Luminance/In Phase Chrominance/Quadrature Chrominance

YIQ flips the trio of NTSC luminance-and-chrominance channels all at once. Y (luminance), I (in-phase chrominance), and Q (quadrature chrominance) each flip a single channel.

Alpha

Flips the image's alpha channel. Being no color channel, the alpha channel sets transparency instead.

Blend With Original

The transparency of the effect. The effect's result gets blended into the original image, with the effect result laid on top. Raise this value and the effect touches the layer less. As an example, the effect leaves no visible result on the layer at 100%; at 0% the original image stays hidden.

For faster rendering, the Invert effect leans on GPU acceleration.
