# Basic Host Differences - Frame Dimensions

Differences between source footage and the project or composition are handled differently.

For example, in CS4, importing an NTSC clip into a PAL sequence gives `PF_InData`>width,height as (598,480) and `PF_InData`->pixel_aspect_ratio as (768,702).

In AE, width,height are (720,480) and pixel_aspect_ratio is (10,11).
