# Noise HLS effect and Noise HLS Auto effect

The hue, lightness, and saturation parts of an image pick up noise from the Noise HLS and Noise HLS Auto effects. With Noise HLS Auto, the noise animates by itself and you set the animation speed; with Noise HLS, you animate via keyframes or expressions. The two effects share every control apart from the Noise Phase or Noise Animation Speed control that drives the noise animation.

Supported color depth is 8-bpc.

Original image

Image with Noise HLS effect applied

- Uniform yields uniform noise.
- Squared yields high-contrast noise.
- Grain yields grainlike noise akin to film grain.

- Hue: How much noise gets added to hue values.
- Lightness: How much noise gets added to lightness values.
- Saturation: How much noise gets added to saturation values.
- Grain Size: This control is live only under the Grain noise type.
- Noise Phase (Noise HLS only): Feeds a value into the noise's random number generator. Keyframing Noise Phase cycles the effect through the phases to build animated noise, and wider value gaps between keyframes speed the animation up.
- Noise Animation Speed (Noise HLS Auto only): Governs the pace of the noise animation. Keyframe this property to speed the animation up or slow it down.
