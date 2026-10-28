# Alpha channels and masks

Search Last updated on Nov 13, 2025

After Effects holds color data across three channels: red (R), green (G), and blue (B). On top of those, an image may carry a hidden fourth channel — the alpha channel — that stores transparency data. An image like that is sometimes called an RGBA image, signaling the presence of an alpha channel.

Channels at a glance.

A. Separated color channels B. Alpha channel represented as a grayscale image C. Composite using all four channels with a background showing through transparent areas

Channels at a glance.

Plenty of file formats accommodate an alpha channel, Adobe Photoshop, ElectricImage, FLV, TGA, TIFF, EPS, PDF, and Adobe Illustrator among them. An alpha channel can ride along in AVI and QuickTime too (saved at a bit depth of Millions Of Colors+), hinging on which codec (encoder) produced the images held in those containers. With Adobe Illustrator EPS and PDF files, empty areas get turned into an alpha channel by After Effects on their own.

While you set the color depth for an output image, that plus sign (as in Millions Of Colors+) flags an alpha channel. By the same token, opting to output at 32 bits per pixel works out to 8 bits per channel across each of four channels: RGBA.

Certain programs can tuck several alpha channels into a single image, yet After Effects reads only the fourth channel as an alpha channel.

Note

Strictly speaking, the term alpha channel points to the fourth (A) channel in an RGBA image file, whether or not that channel actually carries transparency data. Yet because that fourth channel so frequently carries transparency data, the words alpha and transparency have drifted into near-interchangeable use. Worth keeping in mind, though, is that the link is arbitrary. Certain formats may route transparency data through other channels, and others may put the fourth channel to some use unrelated to transparency.

To build an alpha channel out of a layer's dark regions, you can turn to the Knoll Unmult plug-in. That suits a layer carrying a light effect — a lens flare or fire, say — that you'd like composited over another layer. For information, see the Red Giant Software website.

Viewing an alpha channel in the Composition panel, you'll find white standing for full opacity, black for full transparency, and grays for partial transparency.

A matte is a layer — or any one of its channels — that marks out the transparent regions of itself or of another layer. Opaque regions are set by white, transparent ones by black. Though an alpha channel often serves as a matte, you can pick a different matte when some other channel or layer pins down the intended transparency better than the alpha channel does, or when the source image carries no alpha channel at all.
