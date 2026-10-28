# Blend mode descriptions

The descriptions below use these terms:

- The source color means the color of the layer where the blend mode is applied.
- The underlying color refers to the composited color of Timeline panel layers beneath the source layer.
- The result color names the composite output produced by the blending operation.

| Blend mode | Description |
| --- | --- |
| Normal | Normal outputs the source color and disregards the underlying color. It is the default blend mode. |
| Dissolve | For every pixel, the result color is either the source color or the underlying color. The chance that the result uses the source color is controlled by source opacity. At 100% source opacity, the source color becomes the result color. At 0% source opacity, the underlying color becomes the result color. |
| Darken | For each channel in the result color, Premiere uses whichever value is lower, and therefore darker, between the source color channel and the matching underlying color channel. |
| Multiply | For each color channel, the source color channel value is multiplied by the underlying color channel value, then divided by the maximum value for 8-bpc, 16-bpc, or 32-bpc pixels, based on the project's color depth. The result color cannot be brighter than the original. Black in either input produces black in the result; white in either input leaves the other input color as the result. This mode resembles drawing with several marking pens on paper or stacking multiple gels in front of a light. When the blended color is not black or white, every layer or paint stroke using this mode makes the result darker. |
| Color Burn | The source color is darkened to account for the underlying layer color by raising contrast. Pure white in the original layer leaves the underlying color unchanged. |
| Linear Burn | The source color is darkened to reflect the underlying color. Pure white leaves the result unchanged. |
| Darker Color | Each result pixel takes the darker color between the source color value and the matching underlying color value. Darker Color resembles Darken, but it does not process individual color channels separately. |
| Lighten | For each result color channel, Premiere uses the higher, lighter value between the source color channel and the corresponding underlying color channel. |
| Screen | Premiere multiplies the complements of the channel values and then uses the complement of that product. The result color cannot be darker than either input color. Screen is comparable to projecting several photographic slides at the same time onto one screen. |
| Color Dodge | The source color is lightened to reflect the underlying layer color by lowering contrast. If the source color is pure black, the underlying color becomes the result color. |
| Linear Dodge (Add) | Each result color channel is the sum of the corresponding source color and underlying color channel values. The result color cannot be darker than either input color. |
| Lighter Color | Each result pixel uses the lighter color between the source color value and the matching underlying color value. Lighter Color resembles Lighten, but it does not work channel by channel. |
| Overlay | Input channel values are multiplied or screened according to whether the underlying color is lighter than 50% gray. The result keeps the underlying layer's highlights and shadows. |
| Soft Light | The underlying layer's channel values are darkened or lightened according to the source color. The result resembles lighting the underlying layer with a diffused spotlight. For each channel value, a source color lighter than 50% gray produces a result lighter than the underlying color, like dodging. A source color darker than 50% gray produces a darker result, like burning. Pure black or pure white on a layer makes it much darker or lighter, but not pure black or pure white. |
| Hard Light | Input color channel values are multiplied or screened according to the original source color. The effect resembles a hard spotlight aimed at the layer. For each channel value, underlying colors above 50% gray make the layer lighter, as with Screen. Underlying colors below 50% gray make the layer darker, as with Multiply. Use this mode to create the look of shadows on a layer. |
| Vivid Light | Color values are burned or dodged by changing contrast, based on the underlying color. Above 50% gray in the underlying color, reduced contrast lightens the layer. Below 50% gray in the underlying color, increased contrast darkens the layer. |
| Linear Light | Color values are burned or dodged by changing brightness, based on the underlying color. Above 50% gray in the underlying color, greater brightness lightens the layer. Below 50% gray in the underlying color, reduced brightness darkens the layer. |
| Pin Light | Colors are replaced according to the underlying color. With underlying values above 50% gray, pixels darker than the underlying color are replaced, while lighter pixels stay the same. With underlying values below 50% gray, pixels lighter than the underlying color are replaced, while darker pixels stay the same. |
| Hard Mix | The contrast is increased for the part of the underlying layer that appears below a mask on the source layer. The mask size sets the area of contrast, while the inverted source layer sets that area's center. |
| Difference | For every color channel, Premiere subtracts the darker input value from the lighter one. Painting with white inverts the backdrop color; painting with black leaves it unchanged.<br><br>To align two layers that contain the same visual element, place one above the other and set the upper layer's blend mode to Difference. Then move either layer until the pixels for the element being aligned become all black, which means the pixel differences are zero and the elements sit exactly on top of each other. |
| Exclusion | This produces an output like Difference, but with lower contrast. A white source color gives the complement of the underlying color as the result color. A black source color leaves the underlying color as the result color. |
| Subtract | The source file is subtracted from the underlying color. A black source color leaves the underlying color as the result color. In 32-bpc projects, result color values can fall below 0. |
| Divide | The underlying color is divided by the source color. A white source color leaves the underlying color as the result color. In 32-bpc projects, result color values can exceed 1.0. |
| Hue | The result color keeps the luminosity and saturation of the underlying color, while taking the hue from the source color. |
| Saturation | The result color keeps the luminosity and hue of the underlying color, while taking the saturation from the source color. |
| Color | The result color keeps the luminosity of the underlying color, while taking hue and saturation from the source color. This mode preserves gray levels in the underlying color. It is useful for coloring grayscale images and tinting color images. |
| Luminosity | The result color keeps the hue and saturation of the underlying color, while taking luminosity from the source color. This is the inverse of the Color mode. |
