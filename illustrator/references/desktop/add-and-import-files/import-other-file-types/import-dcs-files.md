# Import DCS files

Use DCS files in print layouts when high-end, pre-separated raster images with spot colors or CMYK separations are required.

Desktop Color Separation (DCS) is one variant of the standard EPS format.

- DCS 1.0 handles only CMYK images.
- DCS 2.0 can include multiple spot colors and multichannel CMYK; linked files show those spot colors in the Swatches panel.
- Illustrator detects Photoshop-created clipping paths in DCS 1.0 and 2.0 files.

In Adobe Illustrator, choose File > Open, then pick the local DCS file.

Caution

DCS files can be linked in Illustrator, but they cannot be opened or embedded. For reliable output, use DCS only in workflows where the file stays linked and is sent through a print Raster Image Processor (RIP) that supports separations.

To inspect DCS transparency interactions, choose Window > Links. In the Links panel, open Panel Options from the Links panel menu, then enable Show DCS Transparency Interactions.
