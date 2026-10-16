# Blend modes

| Blend mode | Description |
| --- | --- |
| Pass through | Lets blend modes used by layers in a group continue through to lower layers without being altered. |
| Normal | Uses the source color as the result color, ignoring the color underneath. |
| Multiply | For every color channel, the source color value is multiplied by the underlying color value, then divided by the maximum value. The result cannot become brighter than the original. Black in either color produces black, while white in either color leaves the other color. |
| Darken | For each channel, the darker lower value between the source color channel and the matching underlying channel becomes the result. |
| Color Burn | Darkens the source color in response to the underlying color by increasing contrast. Pure white in the source leaves the image unchanged. |
| Lighten | For each channel, the lighter higher value between the source color channel and the matching underlying channel becomes the result. |
| Screen | Works by multiplying the complements of the channel values and then complementing that result. The output is never darker than either input color. |
| Color Dodge | Lightens the source color in response to the underlying color by decreasing contrast. When the source color is black, the underlying color is returned. |
| Overlay | Depending on whether the underlying color is lighter than 50% gray, channel values are multiplied or screened. Highlights and shadows are preserved in the result. |
| Soft Light | Uses the source color to darken or lighten the underlying color, producing an effect like a diffused spotlight. |
| Hard Light | Uses the source color to multiply or screen channel values, producing an effect like a harsh spotlight. |
| Difference | For each channel, the darker input value is subtracted from the lighter one. White paint inverts the underlying color, and black paint leaves it unchanged. |
| Exclusion | Produces an effect related to Difference with reduced contrast. White in the source produces the complement of the underlying color; black leaves it unchanged. |
| Hue | Combines the underlying color's luminosity and saturation with the hue from the source color. |
| Saturation | Combines the underlying color's luminosity and hue with the saturation from the source color. |
| Color | Combines the underlying color's luminosity with the source color's hue and saturation. Gray levels in the underlying color are preserved. |
| Luminosity | Combines the underlying color's hue and saturation with the source color's luminosity. This is the inverse of Color mode. |
