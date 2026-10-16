# Bigger Differences — Pixel Formats

Premiere Pro supplies function suites that let effects declare support for pixel formats beyond After Effects' 8-bit RGB format, `ARGB_8u`. Those formats include Premiere Pro's native 8-bit RGB format, `BGRA_8u`, plus YUV, 32-bit formats, and others. For a fuller discussion of pixel formats, see "Pixel Formats and Colorspaces" in the Premiere Pro SDK Guide.

Register `PF_EffectWorld` / `PF_LayerDef` for other pixel formats through the PF Pixel Format Suite defined in PrAESDKSupport.h. Get black and white values for those formats through the Premiere Pixel Format Suite defined in PrSDKPixelFormatSuite.h.

After Effects functions such as `PF_BLEND`() have not been expanded to handle formats beyond 8-bit RGB.

## See also

- [Application](../../scripting/application-object.md)
