# Create a new transparency flattener preset

Choose Edit > Transparency Flattener Presets.

Use New when you want to build a preset from nothing. To derive one from an existing preset, first select that preset, then select New.

Give the preset a clear name that identifies what it is for. A useful name can include the resolution, output type, or client name, such as 300ppi Client A Print or Low-Res Web Export.

Adjust Raster/Vector Balance to define how much artwork remains vector and how much is rasterized. Values closer to 100 keep more vector content, while values closer to 0 rasterize more artwork to improve processing speed.

For Line Art and Text Resolution, enter 600 to 1200 ppi when quality is the priority, or use a lower value for proofing and web output.

For Gradient and Mesh Resolution, enter 150 to 300 ppi. Increasing this value beyond the needed range makes files larger without making gradients look better.

Enable Convert All Text to Outlines when flattening should keep text width consistent. Small type can look a little heavier after this conversion.

Enable Convert All Strokes to Outlines when stroke widths need to remain consistent. Very thin strokes can appear slightly heavier.

Enable Clip Complex Regions to limit stitching artifacts where raster areas meet vector areas. This setting can produce paths that some printers cannot process easily.

Select OK, then select OK again. The preset is then available in flattener preset menus across InDesign, including Print (Advanced panel) and the Export dialog boxes for PDF 1.3, EPS, and PostScript formats.
