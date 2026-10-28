# Resolution

Whenever output goes to print or any medium whose physical size is fixed, resolution describes how densely pixels are packed across a linear span — a count of pixels or dots per unit of length, given in units like ppi (pixels per inch) and dpi (dots per inch).

That framing breaks down for video, film, and computer graphics, because the physical size an image occupies isn't fixed, so counting pixels per inch (or per any other length) tells you nothing useful. Take a single 640x480 movie: it might play on a phone's small screen, on a desktop monitor, and on an enormous outdoor billboard. Although the pixel count can stay identical across all three, the pixels-per-inch figure lands differently on every device.

Here, resolution becomes a relative figure instead — the proportion between how many pixels actually get rendered and how many sit in the source image. Every view carries two of these proportions, one running horizontally and one running vertically.

The Resolution setting belongs to each composition individually, and it governs how good the image looks when that composition is rendered for previews and for final output. How long a frame takes to render, and how much memory it consumes, scale roughly with the count of pixels being rendered.

For final output, a composition can be rendered either at its existing Resolution settings or at a resolution value you enter in the Render Settings dialog box, which supersedes whatever the composition specifies.
