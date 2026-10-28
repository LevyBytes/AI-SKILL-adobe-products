# Saving SVG and choosing profiles

SVG is a vector format for high-quality interactive web graphics. The SVG formats include SVG and Compressed SVG (SVGZ). SVGZ can make files 50% to 80% smaller, but SVGZ files cannot be edited with a text editor.

When artwork is saved as SVG, mesh objects are rasterized. Images without an alpha channel become JPEG images, while images with an alpha channel become PNG images. If a multi-artboard document is saved to SVG, only the active artboard is preserved. Separate SVG files cannot be saved for individual artboards.

For artwork with SVG effects, select every item that has an SVG effect and move that effect to the bottom of the Appearance panel, immediately above Opacity. If another effect comes after an SVG effect, SVG output contains a raster object. For multi-artboard artwork, also select the artboard to export.

Choose File > Save As or File > Save a Copy.

Enter a filename and choose where the file should be stored.

Choose SVG (*.SVG) or SVG Compressed (*.SVGZ) as the file format, then click Save.

In the SVG Options dialog box, choose the settings you need, then click OK:

SVG Profiles

Sets the SVG XML Document Type Definition used for the exported file.

SVG 1.0 and SVG 1.1

Use these profiles for SVG files intended for viewing on a desktop computer. SVG 1.1 is the complete SVG specification; its subsets include SVG Basic 1.1, SVG Tiny 1.1, and SVG Tiny 1.1 Plus profiles.

SVG Basic 1.1

Use this profile for SVG files intended for medium-powered devices, including handheld devices. Not every handheld supports the SVG Basic profile, so this selection does not ensure viewing support on all handhelds. SVG Basic does not allow nonrectangular clipping and excludes certain SVG filter effects.

SVG Tiny 1.1 and SVG Tiny 1.1+

Use these profiles for SVG files intended for small devices, including mobile phones. Not every mobile phone supports the SVG Tiny and SVG Tiny Plus profiles, so either selection does not ensure viewing support on all small devices.

SVG Tiny 1.2

Use this profile for SVG files intended across many device types, from PDAs and mobile phones through laptops and desktop computers.

SVG Tiny excludes clipping, gradients, masks, patterns, strike through text, symbols, transparency, underline text, vertical text, and SVG filter effects. SVG Tiny Plus can display gradients and transparency, but it still excludes clipping, masks, symbols, and SVG filter effects.

Tip: For more profile information, see www.w3.org, the World Wide Web Consortium (W3C) site for the SVG specification.

Related references:

- [SVG fonts, images and editing data](svg-fonts-and-images.md)
- [SVG code and output options](svg-code-and-output-options.md)
