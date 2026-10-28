# Noise effect

Pixel values across the image are shuffled at random by the Noise effect.

Supported color depths are 8-bpc, 16-bpc, and 32-bpc.

Original image

Image with Noise effect applied

- Amount of Noise: Sets how much noise gets added.
- Noise Type: Picking Use Color Noise feeds separate random values into the red, green, and blue channels; leave it off and every channel for a given pixel gets the same random value.
- Clipping: Caps the color channel values. Turn this off and the noise reads as stronger. In a 32-bpc project this control has no effect.
