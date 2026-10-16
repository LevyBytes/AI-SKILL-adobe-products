# Photoshop export options

For PSD artwork export, these options are available:

Photoshop export options

Photoshop export options

| Option | Description |
| --- | --- |
| Color Model | Sets the color model for the exported file. If a CMYK document is exported as RGB, or the reverse, transparent areas can change unexpectedly, particularly where blending modes are involved. After changing the color model, export the artwork as a Flat Image because Write Layers is unavailable. |
| Resolution | Sets the resolution for the exported file. |
| Flat Image | Combines every layer and outputs the Illustrator artwork as a rasterized image, preserving its visual appearance. |
| Write Layers | Outputs groups, compound shapes, nested layers, and slices as separate editable Photoshop layers. When nested layers go deeper than five levels, Illustrator merges them into one Photoshop layer. Choose Maximum Editability for transparent objects that use an opacity mask, constant opacity below 100%, or a blending mode other than Normal; those objects remain live and editable as Photoshop layers. |
| Preserve Text Editability | Keeps horizontal and vertical point type in layers editable as Photoshop type, including nested layers up to five levels deep. If this changes artwork appearance, deselect it to rasterize the text instead. |
| Maximum Editability | Top-level layers are written as Photoshop layer sets, and transparent objects stay editable. For each compound shape in a top-level layer, Illustrator can also write a Photoshop shape layer when visual appearance is unaffected. To output compound shapes that use solid strokes, set Join type to Round. Regardless of this setting, Illustrator merges all layers deeper than 5 levels into a single Photoshop layer. |
| Anti-aliasing | Smooths jagged artwork edges through supersampling. Turning this option off helps keep line-art edges hard after rasterization. |
| Embed ICC Profiles | Builds a document with color management. |
