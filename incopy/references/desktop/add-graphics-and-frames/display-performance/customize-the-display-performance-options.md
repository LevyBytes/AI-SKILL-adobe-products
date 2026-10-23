# Controlling graphics display - Customize the display performance options

You can redefine what Fast, Typical, and High Quality mean for display performance. Within each display option, raster (bitmap) images, vector graphics, and transparency effects have separate controls.

Managed (linked) InCopy stories carry low-resolution proxy image data, allowing checkout without downloading the full-resolution image from the server each time.

Choose Edit > Preferences > Display Performance (Windows) or InCopy > Preferences > Display Performance (Mac OS). Under Adjust View Settings, choose the display option you want to edit. For each display option, set Raster Images or Vector Graphics by moving its slider:

Gray Out

Shows the image as a gray box.

Proxy

Shows images at proxy resolution (72 dpi).

High Resolution

Shows images at the highest resolution supported by the monitor and the current view settings.

For each display option, set Transparency by moving its slider:

Off

Shows no transparency effects.

Low Quality

Shows basic transparency, including opacity and blend modes, while effects such as drop shadow and feather appear as low-resolution approximations.

Note

In this mode, page contents are not isolated from the background. As a result, objects whose blend modes are not Normal can look different in other applications and in final output.

Medium Quality

Shows drop shadows and feathers at low resolution. This mode fits most work unless the document has many transparency effects or is especially transparency-heavy.

High Quality

Uses (144 dpi) rendering for drop shadows and feathers, and also shows CMYK mattes plus spread isolation.

Note

If the document blending space is CMYK and overprint preview mode or soft proofing is enabled, opacity matting uses CMYK instead of RGB. Partially transparent CMYK colors therefore appear as tinted CMYK colors.

To see anti-aliasing on text, strokes, fills, and other page items, choose Enable Anti-aliasing. When text has been converted to outlines, the resulting outlines can be anti-aliased (Mac OS only). To choose the point size below which text is shown as a dimmed bar, enter a value for Greek Type Below. Click OK.

Note

Click Use Defaults to restore every control to its original default setting.
