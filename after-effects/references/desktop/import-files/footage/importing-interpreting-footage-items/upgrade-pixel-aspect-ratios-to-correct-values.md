# Importing and interpreting footage items — Upgrade pixel aspect ratios to correct values

For standard-definition video formats, the pixel aspect ratios baked into After Effects CS3 and earlier left the notion of clean aperture out of the picture. Overlooking the gap between clean aperture and production aperture in standard-definition video left those CS3-and-earlier ratios a little bit off. Because the ratios were wrong, certain images came out faintly distorted.

Note

That stretch of the image staying clear of the edge artifacts and distortions is the clean aperture. The production aperture covers the image in full.

Pixel aspect ratio values across After Effects versions are laid out in the table below:

| Format | Value in After Effects CS4 and later | Previous value |
| --- | --- | --- |
| D1/DV NTSC | 0.91 | 0.9 |
| D1/DV NTSC Widescreen | 1.21 | 1.2 |
| D1/DV PAL | 1.09 | 1.07 |
| D1/DV PAL Widescreen | 1.46 | 1.42 |

Only those older standard-definition formats—the ones where clean aperture parts ways with production aperture—run into this gap. Newer formats are free of it.

By default, fresh projects and compositions built in After Effects already use the right pixel aspect ratio values.

Anything authored in After Effects CS3 or earlier gets bumped up to the correct pixel aspect ratios the moment those projects are opened in After Effects CS4 and later.

Note

Keep a custom interpretation rules file? Then refresh it with the corrected pixel aspect ratio values.

Lean on square-pixel footage items meant to fill the frame within a non-square-pixel composition and the shift in pixel aspect ratios may throw off how they behave. If, for instance, you once built 768x576 square-pixel footage items for a PAL D1/DV composition, the build target now becomes square-pixel dimensions of 788x576.

Square-pixel equivalents of standard definition formats have had their composition settings presets revised this way:

| Format | Pixel dimensions in After Effects CS4 and later | Previous pixel dimensions |
| --- | --- | --- |
| NTSC D1 square-pixel equivalent | 720x534 | 720x540 |
| NTSC D1 Widescreen square-pixel equivalent | 872x486 | 864x486 |
| PAL D1/DV square-pixel equivalent | 788x576 | 768x576 |
| PAL D1/DV Widescreen square-pixel equivalent | 1050x576 | 1024x576 |
