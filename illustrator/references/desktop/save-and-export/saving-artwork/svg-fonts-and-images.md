# SVG fonts, images and editing data

Font Type

Controls how fonts are exported:

Adobe CEF

Applies font hinting so small fonts render better. Adobe SVG Viewer supports this font type, but other SVG viewers may not.

SVG

Uses no font hinting. All SVG viewers support this font type.

Convert To Outlines

Turns type into vector paths. Use it to maintain type appearance across all SVG Viewers.

Font Subsetting

Controls glyph embedding for the exported SVG file; a glyph is a character from a specific font. Choose None from the Subsetting menu when required fonts can be expected on end-user systems. Choose Only Glyphs Used to embed only glyphs for text present in the current artwork. Other values, including Common English, Common English + Glyphs Used, Common Roman, Common Roman+ Glyphs Used, and All Glyphs, are useful when the SVG file contains dynamic text, such as server-generated or user-interactive text.

Image Location

Sets whether raster images are embedded directly in the file or linked to exported JPEG or PNG images from the original Illustrator file. Embedding raises file size, but it keeps rasterized images available.

Preserve Illustrator Editing Capabilities

Keeps Illustrator-specific data by embedding an AI file in the SVG file, which increases file size. Choose this option when the SVG file will later be reopened and edited in Illustrator. Manual edits to SVG data are not reflected when the file is reopened, because Illustrator reads the file's AI portion rather than its SVG portion.

Related: [Saving SVG and choosing profiles](save-in-svg-format.md).
