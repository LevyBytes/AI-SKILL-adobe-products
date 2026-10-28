# Blending and adjusting color of added or matched grain

The color, saturation, and blending behavior of the grain that the Add Grain or Match Grain effect produces are all yours to adjust.

A handful of factors can sway the apparent color of the grain these effects generate, among them:

- The color value carried by the underlying pixel in the source image.
- The noise's Saturation value.
- The Tint Color and Tint Amount values, if you've shifted them off their defaults.
- The Blending Mode value over in the Application controls group.
- However much noise, if any, you've applied to each channel one at a time through the Channel Intensities controls group.

Over in the Effect Controls panel, the Color controls group opens up any of these for adjustment:

- Monochromatic: hands the added noise a single tint. The tones default to black and white, though you can shift the Tint Color to turn it into a gradient of any color. (When Monochromatic is on, the Saturation and Channel Intensities controls go unavailable.)
- Tint Amount: governs how deep and intense the color shift runs.
- Tint Color: governs the color the added noise leans toward.
- Saturation: governs how much color there is and how vivid it reads.

How the color value of the generated noise merges with the color value of the underlying source layer at each pixel is decided by the Blending Mode in the Application controls:

- Film: makes the generated grain look baked into the image. Darker colors take more of a hit than lighter ones, mirroring how grain shows up in a film negative.
- Multiply: multiplies the color values of the noise and the source. The outcome can land either lighter or darker than the original, though, since the noise may carry a positive or a negative value.
- Add: merges the source color values of the pixel with the noise. Even so, the result isn't always lighter than the original, because the noise grain effects make can hold a positive or a negative value.
- Screen: takes the noise and the source, inverts their brightness, and multiplies those. It plays out like printing from a multiple exposure on a negative. The result always comes out brighter than the original.
- Overlay: marries the behavior of Film and Multiply. Shadows and highlights both pick up less grain, while midtones take a full dose.

## See also

- [Application](../../../../scripting/application-object.md)
