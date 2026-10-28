# AutoCAD export options

For DXF or DWG artwork export, these options are available:

Auto CAD DXF/DWG export options

Auto CAD DXF/DWG export options

| Option | Description |
| --- | --- |
| AutoCAD Version | Sets the AutoCAD version that can support the exported file. |
| Scale | Use Scale Units values to tell Illustrator how to interpret length data while writing the AutoCAD file. |
| Scale Lineweights | Applies export scaling to lineweights along with the rest of the drawing. |
| Number of Colors | Sets the color depth for the exported file. |
| Raster File Format | Chooses PNG or JPEG for images and objects rasterized during export. PNG is the only choice that supports transparency; use PNG when preserving the appearance as much as possible is required. |
| Preserve Appearance | Select this when maintaining visual appearance matters more than editing the exported file afterward. It can greatly reduce editability; for example, text may become outlines and effects may be rasterized. Preserve Appearance and Maximum Editability are mutually exclusive. |
| Maximum Editability | Select this when editing in AutoCAD matters more than retaining the Illustrator appearance. The exported result can lose substantial visual fidelity, especially for artwork with style effects. Maximum Editability and Preserve Appearance are mutually exclusive. |
| Export Selected Art Only | Exports only the artwork selected at export time. If nothing is selected, Illustrator exports a blank file. |
| Alter Paths For Appearance | Adjusts AutoCAD paths as needed so the original appearance is retained. For example, if an overlapping path would alter other objects during export, this setting changes the path to keep those objects looking the same. |
| Outline Text | Turns all text into paths before export so the appearance is preserved. Illustrator and AutoCAD can interpret text attributes in different ways. Select this for maximum visual fidelity, with editability reduced. Leave it unselected if the text must remain editable in AutoCAD. |
| Always Export Group as Block Reference | Select this to export a group of objects in artwork as a block in DWG/DXF file format. |

Note

Default color handling is inverted for black and white: white strokes or fills from Illustrator become black strokes or fills in AutoCAD formats, while black strokes or fills export to AutoCAD as white.
