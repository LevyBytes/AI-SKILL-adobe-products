# Palette types

The palette determines the color set available to the Indexed Color image. Choose the palette type that matches the intended output:

- Exact: keeps the original image colors exactly when the image contains 256 colors or fewer. No dithering is generated.
- System (Mac OS/Windows): relies on the default 8-bit system palette, built from uniform RGB sampling.
- Web: limits the table to the 216 web-safe colors to prevent browser dithering on older 256-color displays.
- Uniform: draws evenly spaced samples across RGB space; six red levels, six green levels, and six blue levels produce 216 colors.
- Local (Perceptual, Selective, Adaptive): builds the palette from colors in the current image.
- Perceptual gives preference to colors that human vision notices more strongly.
- Selective emphasizes large color areas while retaining web colors.
- Adaptive samples the colors that appear most often in the image.
- Master (Perceptual, Selective, Adaptive) - works like local palette generation, except it evaluates all open documents rather than a single document.
- Custom - lets you work in the Color Table dialog box to edit a custom color table or load one.
- Previous - applies the palette used by the previous indexed-color conversion.

For Palette choices such as Uniform, Perceptual, Selective, or Adaptive, specify the exact color count up to 256. Photoshop still processes the image as 8-bit, but this value determines how the color table is constructed.
