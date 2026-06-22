# Saving Artwork

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

Search Last updated on Feb 12, 2025

Saving or exporting artwork causes Illustrator to write the artwork data into a file. The file format you pick determines how that data is structured.

Artwork can be saved to five core formats: AI, PDF, EPS, FXG, and SVG. They are native formats because they can retain all Illustrator data, including multiple artboards. For PDF and SVG, preserving every Illustrator data item requires choosing Preserve Illustrator Editing Capabilities. EPS and FXG can store separate files for individual artboards. SVG keeps only the active artboard, although content from every artboard is shown.

Illustrator can also export artwork to many file formats intended for use outside Illustrator. These non-native formats may not let Illustrator reconstruct all data when the file is opened again. Because of that limitation, keep artwork in AI format until creation is finished, then export to the format you need.

Note

When artwork includes linked EPS files saved in binary format, such as Photoshop's default EPS format, saving can produce an error message. To resolve that case, resave the EPS files as ASCII, embed the linked files in the Illustrator artwork, or save as AI or PDF rather than EPS.

A saving-for-web video is available in Save artwork for the web.

## Save in Illustrator format

When a document has multiple artboards and must be saved for an earlier Illustrator version, either save each artboard as its own file or combine all artboard content into one file.

Choose File > Save As or File > Save A Copy.

Enter a filename and choose where the file should be stored.

Select Illustrator (\*.AI) as the file format, then click Save.

In the Illustrator Options dialog box, choose the settings you need, then click OK:

Version

Sets the Illustrator version that the file must remain compatible with. See Save the artwork in a legacy version for more details.

Subset Embedded Fonts When Percent Of Characters Used Is Less Than

Controls when Illustrator embeds the full font instead of only the document's used characters, based on the percentage of characters used. For example, a font with 1,000 characters and a document using only 10 of them may make full embedding unnecessary because of the added file size.

Embed permitted fonts for file preview

Adds the document fonts that allow embedding so collaborators can preview the file without installing those fonts.

Create PDF Compatible File

Stores a PDF representation inside the Illustrator file. Choose this option when the Illustrator file needs compatibility with other Adobe apps. Fonts are embedded by this option, although not necessarily every permitted font.

Include Linked Files

Places the artwork's linked files inside the saved file.

Embed ICC Profiles

Builds the document with color management information included.

Use Compression

Reduces the PDF data stored in the Illustrator file. Because compression can make saving take longer, clear this option if saves become extremely slow, such as 8 to 15 minutes.

Save Each Artboard To A Separate File

Writes each artboard to an individual file and also creates a master file containing all artboards. Content touching an artboard is included in that artboard's file. If artwork must move so it fits on one artboard, Illustrator displays a warning. Without this option, artboards are merged into one document and converted to object guides and, in Illustrator CS3, crop areas. The saved file uses an artboard size based on the default document startup profile.

Transparency options

Controls how transparent objects are handled when the chosen Illustrator format version is earlier than 9.0. Preserve Paths removes transparency effects and restores transparent artwork to 100% opacity with Normal blending mode. Preserve Appearance And Overprints keeps overprints that do not interact with transparent objects. Illustrator flattens overprints when they do interact with transparent objects.

If the artwork contains complex overlapping regions and high-resolution output is required, click Cancel and set rasterization settings before proceeding.

## Save the artwork in a legacy version

By default, newly saved Illustrator (.ai) and Illustrator EPS (.eps) documents use the latest Illustrator version. Saving the document to an older legacy version can discard some data because older formats do not support every feature from the current Illustrator version. After you select a non-current version, some save options become unavailable and certain data types are changed. Read all warnings before continuing.

For the smoothest workflow, save Illustrator documents in the latest version.

## Save in Background

When .ai files are saved, Illustrator can complete the save in the background. Work can continue while the save is still running. Small files may finish before you notice the background operation; with large files, background saving saves considerable time and improves productivity.

## Check progress

To view background save progress, click the progress icon in the menu bar.

When several files are saving in the background at the same time, Illustrator shows separate progress for each file.

To stop the save process for a file, click the Cancel (x) button in its progress bar.

By default, files are always saved in the background. To disable background save, choose Preferences > File Handling & Clipboard > Save in Background.

Note

- At present, background saving applies only to .ai files. The .svg, .eps, .pdf, and other supported file formats are saved through the regular process.
  - Save options dialog has Create PDF Compatible File cleared.
  - A third-party plugin group object or third-party live effect is present in the artwork.

Quick Tip Since work can continue while saving is underway, remember to save your newest changes back to the file.

## Save in EPS format

Note

The EPS file format was common historically, but it is not a good fit for current workflows.

Imported or placed encapsulated PostScript (EPS) files are accepted by nearly every page layout, word-processing, and graphics application. EPS keeps many graphic elements made in Adobe Illustrator, so EPS files can be opened again and edited as Illustrator files. Because EPS is built on the PostScript language, both vector graphics and bitmap graphics can be included. Multiple artboards are preserved when artwork is saved as EPS.

If transparency, including overprints, is present and high-resolution output is needed, choose Window > Flattener Preview to review flattening results.

Choose File > Save As or File > Save a Copy.

Enter a filename and choose where the file should be stored.

Choose Illustrator EPS (\*.EPS) as the file format, then choose Save.

To create an individual file for each artboard, choose Use Artboards. Then choose All, or choose Range and enter the artboard range. Illustrator produces separate EPS files plus one central EPS file that contains all artboards.

In the EPS Options dialog box, choose the settings you need, then choose OK:

Version

Sets the Illustrator version that the file must remain compatible with. Legacy formats cannot represent every feature available in the current Illustrator version. As a result, choosing any version other than the current one hides some save options and changes certain data types. Check the warnings at the bottom of the dialog box so you know which data will change.

Format

Sets the saved preview image characteristics. Applications that cannot display EPS artwork directly use this preview image. To avoid making a preview image, choose None from the Format menu. Otherwise, choose a black-and-white or color format.

If TIFF (8-bit Color) format is selected, choose a background option for the preview image:

Transparent

Creates a background with transparency.

Opaque

Creates a solid background. Choose Opaque when the EPS document is intended for Microsoft Office workflows.

Transparency options

Controls the treatment of transparent objects and overprints. Which options are available depends on the format version chosen at the top of the dialog box.

For a CS format, specify how overlapping colors set to overprint are saved, then choose a flattening preset or option set. Click Custom to adjust flattener settings.

For a Legacy format earlier than 8.0, Preserve Paths removes transparency effects and restores transparent artwork to 100% opacity with Normal blending mode. Preserve Appearance and Overprints keeps overprints that do not interact with transparent objects. Illustrator flattens overprints when they do interact with transparent objects.

Embed Fonts (For Other Applications)

Embeds all fonts whose font-vendor permissions allow embedding. With embedded fonts, the original font can display and print when the file is placed into another application, such as Adobe InDesign. If the file is opened in Illustrator on a computer without the font installed, however, the font is substituted or simulated. This restriction helps prevent unauthorized use of the embedded font.

Selecting the Embed Fonts option makes the saved file larger.

Include Linked Files

Places the artwork's linked files inside the saved file.

Include Document Thumbnails

Creates a thumbnail image of the artwork. Illustrator displays the thumbnail in the Open and Place dialog boxes.

Include CMYK PostScript In RGB Files

Lets applications without RGB output support print RGB color documents. When Illustrator reopens the EPS file, RGB colors are preserved.

Compatible Gradient And Gradient Mesh Printing

Converts gradient objects to JPEG format so older printers and PostScript devices can print gradients and gradient meshes. This setting can slow printing on printers that otherwise handle gradients without trouble.

Adobe PostScript

Sets the PostScript level used when saving the artwork. PostScript Language Level 2 handles color and grayscale vector and bitmap images; for both vector and bitmap graphics, it also supports RGB, CMYK, and CIE-based color models. PostScript Language Level 3 adds features beyond Language Level 2, including mesh-object printing on a PostScript 3 printer. Since PostScript Language Level 2 devices convert gradient mesh objects to bitmap images during printing, a PostScript 3 printer is preferred for artwork that contains gradient mesh objects.

## Save in SVG format

SVG is a vector format for high-quality interactive web graphics. The SVG formats include SVG and Compressed SVG (SVGZ). SVGZ can make files 50% to 80% smaller, but SVGZ files cannot be edited with a text editor.

When artwork is saved as SVG, mesh objects are rasterized. Images without an alpha channel become JPEG images, while images with an alpha channel become PNG images. If a multi-artboard document is saved to SVG, only the active artboard is preserved. Separate SVG files cannot be saved for individual artboards.

For artwork with SVG effects, select every item that has an SVG effect and move that effect to the bottom of the Appearance panel, immediately above Opacity. If another effect comes after an SVG effect, SVG output contains a raster object. For multi-artboard artwork, also select the artboard to export.

Choose File > Save As or File > Save a Copy.

Enter a filename and choose where the file should be stored.

Choose SVG (_.SVG) or SVG Compressed (_.SVGZ) as the file format, then click Save.

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

CSS Properties

Controls how style attributes are written into SVG code. The default method, Presentation Attributes, applies properties at the highest hierarchy point, giving the most flexibility for specific edits and transformations. Style Attributes produces the most readable files, although it can increase file size. Choose Style Attributes when transformations will consume the SVG code, for example transformations using Extensible Stylesheet Language Transformation (XSLT). Style Attributes <Entity References> gives faster rendering times and smaller SVG files. Style Elements is intended for sharing files with HTML documents. When Style Elements is selected, you can modify the SVG file and move a style element into an external style sheet file that the HTML file also references; however, Style Elements also slows rendering.

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

Output Fewer <tspan> Elements

Lets Illustrator ignore auto-kerning settings during export so the file contains fewer <tspan> elements. Choose it for an SVG file that is more compact and easier to edit. Clear it when preserving auto-kerned text appearance is essential.

Use <textPath> Element For Text On Path

Exports path text as a <textPath> element. The text can appear differently in the SVG Viewer than in Illustrator because this export mode cannot always keep the same visual appearance. Overflow text, in particular, appears in the SVG Viewer.

Show SVG Code

Shows the SVG file code in a browser window.

Web Preview

Opens a browser window to preview the SVG file.

Device Central

Opens the file in Device Central for preview on a particular mobile phone or device.

## Save artwork for Microsoft Office

Save For Microsoft Office can output a PNG file for use in Microsoft Office applications when needed.

Select File > Save For Microsoft Office.

When Save For Office appears, choose a file location, enter a filename, then click Save.

To customize PNG settings such as resolution, transparency, and background color, use Export rather than Save For Microsoft Office. The Save For Web & Devices command can also save artwork in PNG format.

## About rasterization

Rasterization turns vector artwork into a bitmap image. During that conversion, Illustrator translates the graphic's paths into pixels. The rasterization settings control the size and other properties of those resulting pixels.

Use Object > Rasterize or the Rasterize effect to rasterize selected vector objects. To rasterize a whole document, export it to a bitmap format such as JPEG, GIF, or TIFF.

## Rasterize a vector object

Select the target object or objects.

Use one of these methods:

To make rasterization permanent, choose Object > Rasterize.

To give the objects a rasterized appearance while keeping their underlying structure intact, choose Effect > Rasterize.

Set the rasterization options and confirm with the OK button.

### More like this

- Rasterization options
- Printing and saving transparent artwork
- About overprinting
- About SVG
- Using Adobe Device Central with Illustrator
- Data-driven graphics through templates and variables
- Aboutraster effects
- Rasterizationoptions
- Video tutorial - How to save a file for output
- Video tutorial - Save artwork for the web
- Exporting artwork
- Troubleshoot issues with saving files
