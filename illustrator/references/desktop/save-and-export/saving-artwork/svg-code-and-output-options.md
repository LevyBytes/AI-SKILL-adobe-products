# SVG code and output options

CSS Properties

Controls how style attributes are written into SVG code. The default method, Presentation Attributes, applies properties at the highest hierarchy point, giving the most flexibility for specific edits and transformations. Style Attributes produces the most readable files, although it can increase file size. Choose Style Attributes when transformations will consume the SVG code, for example transformations using Extensible Stylesheet Language Transformation (XSLT). Style Attributes `<Entity References>` gives faster rendering times and smaller SVG files. Style Elements is intended for sharing files with HTML documents. When Style Elements is selected, you can modify the SVG file and move a style element into an external style sheet file that the HTML file also references; however, Style Elements also slows rendering.

Decimal Places

Sets SVG vector-data precision. Values can be 1-7 decimal places. Higher values increase both file size and image quality.

Encoding

Sets character encoding for the SVG file. UTF (UnicodeTransformation Format) encoding works with all XML processors. UTF-8 uses 8 bits, while UTF-16 uses 16 bits. File metadata is not preserved by ISO 8859-1 or UTF-16 encoding.

Optimize For Adobe SVG Viewer

Keeps the highest level of Illustrator data while still permitting manual SVG-file edits. Choose it when features such as SVG filter effects need faster rendering.

Include Adobe Graphics Server Data

Adds every item required for variable substitution in the SVG file.

Include Slicing Data

Adds slice positions and optimization settings.

Include XMP

Adds XMP metadata to the SVG file. Metadata can be entered through File > Info or the Bridge Browser.

Output Fewer `<tspan>` Elements

Lets Illustrator ignore auto-kerning settings during export so the file contains fewer `<tspan>` elements. Choose it for an SVG file that is more compact and easier to edit. Clear it when preserving auto-kerned text appearance is essential.

Use `<textPath>` Element For Text On Path

Exports path text as a `<textPath>` element. The text can appear differently in the SVG Viewer than in Illustrator because this export mode cannot always keep the same visual appearance. Overflow text, in particular, appears in the SVG Viewer.

Show SVG Code

Shows the SVG file code in a browser window.

Web Preview

Opens a browser window to preview the SVG file.

Device Central

Opens the file in Device Central for preview on a particular mobile phone or device.

Related: [Saving SVG and choosing profiles](save-in-svg-format.md).
