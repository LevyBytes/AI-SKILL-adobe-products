# rgbToHsl(rgbaArray)

Return type: Array [4].

Argument type: rgbaArray is an Array [4].

Takes a color expressed in RGBA space and recasts it into HSLA space. You feed it an Array of normalized red, green, blue, and alpha channel values, each spanning 0.0 through 1.0. Back comes an Array of hue, saturation, lightness, and alpha channel values, likewise spanning 0.0 through 1.0. Example:

rgbToHsl.effect("Change Color")("Color To Change")
