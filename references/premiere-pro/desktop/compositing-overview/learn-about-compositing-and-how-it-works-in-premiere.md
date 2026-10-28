# Learn about compositing and how it works in Premiere.

Compositing builds one combined image by stacking multiple video clips or still images. With this method, complex scenes can be assembled from layers, and transparent portions of an upper layer reveal the material underneath.

An image or video may include an alpha channel, which records transparency for different regions.

In an After Effects Composition panel or a Premiere Program Monitor panel, an alpha-channel view uses white for fully opaque pixels, black for fully transparent pixels, and gray values for partial transparency.

Files can store alpha-channel transparency in two forms: straight or premultiplied.

For straight (or unmatted) channels, transparency data is kept only in the alpha channel and not in visible color channels. The visual effect of that transparency appears only after the image is shown in software that supports straight channels.

For premultiplied (or matted) channels, transparency is present in the alpha channel and also in the visible RGB channels, where those color values have been multiplied against a background color. Semitransparent colors, including feathered edge pixels, move toward the background color according to how transparent they are.

Straight channels keep color data more accurately than premultiplied channels. Premultiplied channels work with more applications. In many workflows, the decision to use straight or premultiplied assets has already been made before the files arrive for editing and compositing.

Premiere and After Effects can interpret both straight and premultiplied channels, but if a file has more than one alpha channel, only the first one is recognized.

Alpha channels are supported by these file formats:

- Adobe Photoshop (.psd)
- ElectricImage,
- TGA
- TIFF
- EPS
- PDF
- Adobe Illustrator (.ai)

In addition, AVI and QuickTime files saved at a bit depth of Millions Of Colors+ may include alpha channels, depending on the codecs used to create those files.

Note

Often the most efficient workflow is to import source media that already includes an alpha channel defining the transparent areas. Since the transparency data travels with the file, Premiere keeps and displays the clip's transparency everywhere that source is used as a clip in sequences.

When the source file for a clip has no alpha channel, transparency must be applied manually to each clip instance where it is needed. In a sequence, transparency can be applied by adjusting clip opacity or by applying effects.

Premiere offers several ways to build composites:

- Effects such as Track matte, Garbage matte, or some Channel effects can make selected parts of an image transparent.
- Blending modes can also be used.
- Transparency can be based on a chosen color value, using a color key or chroma key, or on brightness, using a luminance key. This process is called keying.
