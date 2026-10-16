# Exposure effect

Reach for the Exposure effect when footage needs tonal work, whether on a single channel or across the lot at once. It mimics what happens when you change a camera's exposure setting (measured in f-stops) at the moment of capture. Rather than running its math in the project's active color space, the effect computes in a linear one. Its sweet spot is tonal work on high–dynamic range (HDR) imagery at 32-bpc color, though 8-bpc and 16-bpc material is fair game too.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Master

Drive every channel together.

Individual Channels

Drive each channel on its own.

Exposure

Mirrors a camera's exposure dial during capture, scaling every light-intensity value by a fixed factor. Exposure is graduated in f-stops.

Offset

Pulls shadows and midtones up or down while barely touching the highlights.

Gamma Correction

Sets how strong an extra power-curve bend gets layered onto the image. Crank it up and the image brightens; ease it down and the image darkens. A negative entry is mirrored about zero — it stays negative yet is applied as though positive. Its default sits at 1.0, meaning no extra bend at all.

Bypass Linear Light Conversion

Tick this to run Exposure against the raw pixel values instead. It comes in handy when you're handling color by hand through the Color Profile Converter effect.
