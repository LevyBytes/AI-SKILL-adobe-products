# Look LUT behavior across color spaces

In the Lumetri panel's Creative section, the Look drop-down menu now accounts for color space. A LUT is authored for image data that starts in a specific color space. For example, many look LUTs style Rec.709 images, such as giving them a film look, while other LUTs convert imagery from one color space to another. Because the default working color space is now wide gamut, you must identify the color space each LUT expects. The default LUTs shown in the Look drop-down were designed for Rec.709, so choose Rec.709 (scene) from the Color Space menu to display those LUTs correctly.

Pick a Look in the Lumetri Color panel that fits the clip's visual character. LUT processing follows the color space settings for the sequence.

Caution

The preview thumbnail that illustrates the LUT result is not color-managed yet, so it can show an inaccurate preview. The rendered or monitored output is still correct.
