# Special considerations for working with high dynamic range color

When a layer's source is an HDR footage item, the HDR Compander effect lets you squeeze its dynamic range down. That makes room for tools with no HDR color support, like 8-bpc and 16-bit effects. Once finished, reapply the HDR Compander to reverse the dynamic range compression. To pull highlight values in an HDR image down into the value range of a low dynamic range image, turn to the HDR Highlight Compression effect.

A monitor shows only part of the luminance range present in a real-world scene captured as an HDR image, so working with an HDR image occasionally requires adjusting the exposure — how much light the image captured. Tweaking an HDR image's exposure mirrors adjusting exposure while photographing an actual scene, letting you draw detail out of either dark or bright areas. The Exposure effect can shift a layer's color values for final output, or you can change exposure within one particular viewer just for previewing.

To land predictable colors with HDR, color management is strongly advised and may even be mandatory. It enables After Effects to preview colors faithfully on your monitor by mapping the color working space into the display color space that the operating system defines. The best results come from using the monitor manufacturer's supplied color profile or from calibrating your monitor's colors.

Note

Certain operations — among them glows, blurs, and several blending modes — react differently under 32-bpc mode than under 8-bpc or 16-bpc mode, so flipping between high dynamic range and low dynamic range project settings can make your composition appear markedly different.
