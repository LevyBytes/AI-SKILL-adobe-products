# Eyedropper Fill effect

A sampled color gets laid onto the source layer by the Eyedropper Fill effect (which used to be called the Color Picker effect). It comes in handy for grabbing a solid color fast from a sample point on the original layer, or for lifting a color value off one layer and using blending modes to push that color onto a second layer.

Color depth of 8-bpc is supported by this effect.

Sample Point

The middle of the area being sampled.

Sample Radius

The radius of the area being sampled.

Average Pixel Color

Which color values get sampled:

Skip Empty

Averages the RGB color values while leaving out the color values of transparent pixels.

All

Averages every RGB color value, transparent pixels' values included.

All Premultiplied

Averages every RGB color value, premultiplied against the alpha channel.

Including Alpha

Averages every RGB color and alpha channel value. With this on, the sampled color also carries the average transparency of the pixels sampled.

Maintain Original Alpha

Holds onto the original layer's alpha channel. Pick Including Alpha from the Average Pixel Color menu and the sampled color gets the original alpha stenciled across it.

Blend With Original

How transparent the effect is. The effect's result is blended over the original image, sitting on top. Raise this value and the effect bites less into the layer: at 100% the effect leaves no visible mark on the layer, while at 0% none of the original image comes through.
