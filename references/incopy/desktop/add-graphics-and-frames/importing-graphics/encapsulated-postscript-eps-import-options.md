# Importing graphics - Encapsulated PostScript (.eps) import options

For an EPS graphic, including a file saved with Illustrator 8.0 or earlier, enabling Show Import Options in the Place dialog box opens a dialog box with these choices:

Read Embedded OPI Image Links

This setting makes InCopy read image links from OPI comments for images that are included in, or nested inside, the graphic.

Leave the setting off when a proxy-based workflow will let service providers replace images with their OPI software. With the setting off, InDesign keeps the OPI links but does not read them. During print or export, both the proxy and its links are carried into the output file.

Turn the setting on in a proxy-based workflow when InDesign should handle image replacement at final output instead of the service provider. With the setting on, the OPI links show in the Links panel.

Also enable the setting for EPS files that contain OPI comments outside a proxy-based workflow. For example, when an EPS file includes OPI comments for an omitted TIFF or bitmap image, enabling the setting lets InDesign reach the TIFF information while outputting the file.

Apply Photoshop Clipping Path

A placed EPS file includes a clipping path in InDesign whether or not this setting is selected. Turning it off, however, can change the bounding box size.

Proxy Generation

This area creates a low-resolution bitmap proxy for drawing the image on-screen. These settings determine how that proxy is made:

Use TIFF Or PICT Preview

Some EPS images include an embedded preview. Choose this setting to build the proxy image from the existing preview. If no preview exists, the proxy is made by rasterizing the EPS into an offscreen bitmap.

Rasterize The PostScript

Choose this setting to ignore the embedded preview. It is usually slower, but it produces the highest-quality results.

Note

When multiple instances of the same imported file are added to one document, every instance uses the proxy setting from the first instance.
