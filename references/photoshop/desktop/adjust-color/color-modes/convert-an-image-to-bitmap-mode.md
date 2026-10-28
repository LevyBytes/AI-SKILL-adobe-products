# Convert an image to Bitmap mode

Convert an image to Bitmap mode in Adobe Photoshop when you need pure black-and-white output and a smaller file.

Bitmap mode limits the image to black and white. That two-color result can produce high-contrast artwork or satisfy specific print workflows. Because editing choices are narrow in Bitmap mode, make most corrections in Grayscale before conversion.

For a color image, choose Image > Mode > Grayscale, then choose Image > Mode > Bitmap. For an image already in grayscale, choose Image > Mode > Bitmap.

In the Bitmap dialog box, enter the Output resolution value and choose a measurement unit. The current resolution is used by default.

Choose a conversion method from the Use menu:

- 50% Threshold: changes pixels lighter than middle gray to white and pixels darker than middle gray to black.
- Pattern Dither: organizes gray values as geometric dot patterns.
- Diffusion Dither: distributes tonal differences through pixels with error diffusion, producing a grainy, film-like appearance.

  - Frequency: lines per inch (lpi) or centimeters, based on the paper and press.
  - Angle: halftone screen direction, measured in degrees. For black-and-white prints, 45° is common.
  - Shape: dot shape chosen for the halftone.

- Custom Pattern: gives the converted image the look of a custom halftone screen. Select a custom pattern, usually one that contains multiple gray shades. Before using this option, define a pattern, then screen the grayscale image so the texture is applied. The pattern must match the full image size to cover everything; otherwise Photoshop tiles it. Photoshop includes several self-tiling patterns suitable for halftone screen patterns.

Tip

For better results, convert to grayscale first, then run the Blur More filter several times to soften the pattern.
