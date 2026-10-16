# Comparative advantages of each color depth

Out in the physical world, the dynamic range — the ratio separating dark from bright regions — reaches far beyond what human vision perceives or what paper prints and monitors can show. Spanning merely a narrow slice of the real world's dynamic range, low dynamic range 8-bpc and 16-bpc color values cover RGB levels running only from black to white.

Brightness levels well above white — objects as luminous as a flame or the Sun — fall within reach of high dynamic range (HDR), 32-bpc floating-point color values.

Glow effect and Gaussian Blur effect applied to image in 32-bpc project (left) and 16-bpc project (right)

Switch the project color depth to 32 bpc when handling HDR footage or when you need over-range values — those above 1.0 (white) that 8- or 16-bpc mode can't carry. Keeping highlight intensity intact, over-range values serve synthetic effects such as lights, blurs, and glows just as well as they serve HDR footage. That extra headroom from working in 32 bpc heads off many forms of data loss during steps like color correction and color profile conversion.

Even when your footage is 8-bpc and your movies are built in 8-bpc formats, setting the project color depth to 16 bpc or 32 bpc yields better outcomes. Calculations gain precision at a higher bit depth, and quantization artifacts — banding across gradients, for example — drop sharply.

Note

Bumping up a project's color depth on its own won't erase gradients whenever the output format carries a low bit depth. After Effects fights banding by dithering colors as they convert to 8-bpc colors, which covers rendering and exporting to an 8-bpc format. Previews receive no such dithering. You can force dithering for previews by adding an 8-bpc effect that has no visible result — such as the Arithmetic effect left at its default values — onto an adjustment layer.

Since a 16-bpc frame consumes half the memory that a 32-bpc frame does, preview rendering goes quicker in a 16-bpc project and those previews can run longer than in a 32-bpc one. 8-bpc frames draw on even less memory, though at a project color depth of 8 bpc the quality-versus-performance trade-off can become plainly visible in certain images.
