# Color depth and high dynamic range color

The count of bits per channel (bpc) devoted to a pixel's color is what defines color depth, also called bit depth. As you assign more bits to each RGB channel (red, green, and blue), every pixel gains the ability to express a wider palette of colors.

After Effects lets you operate at 8-bpc, 16-bpc, or 32-bpc color.

Beyond the bit depth itself, the figures that hold pixel values carry another trait: whether they are integers or floating-point numbers. Given the same bit count, floating-point numbers stretch across a far broader span of values. Pixel values at 32-bpc in After Effects are floating-point values.

For each color channel, 8-bpc pixels span from 0 (black) up to 255 (pure, saturated color), while 16-bpc pixels span from 0 (black) up to 32,768 (pure, saturated color). White results when all three color channels reach their maximum pure-color value. Because 32-bpc pixels accept values below 0.0 and above 1.0 (pure, saturated color), 32-bpc color in After Effects doubles as high dynamic range (HDR) color. Brightness in HDR values can climb well past white.
