# Exporting Artwork, Tool Techniques

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Export artwork; Create a gradual blend in colors using the Gradient tool; Create and edit meshes using the Mesh tool; Create complex shapes using the Shape Builder tool.

## Export artwork

Search Last updated on Jul 23, 2024

Use Illustrator export workflows to write artwork out, and review the export choices available for supported file formats.

Try it in the app Configure Export preferences in a few quick steps.

Open Illustrator

Choose File > Export > Export As.

Pick the file destination, then type a filename.

Choose the output file format with Save As Type (Windows) or Format (macOS).

For documents with several artboards, define how those artboards should be exported.

- For a separate output file per artboard, select Use Artboards in the Export dialog box.
- For one file containing every artboard, select All.
- For a subset of artboards, enter the Range.

Select Export.

### Background export

By default, Illustrator exports assets in the background when you use File > Export > Exports for Screens from a file. That background processing can save substantial time and keep work moving. To disable it, choose Preferences > File Handling & Clipboard > Export in Background. Because editing can continue while export runs, remember to save or export the file again if you make later changes.

### Check progress

To monitor a background export, click the progress icon on the menu bar.

When several files are exporting in the background at the same time, Illustrator shows progress for each one separately. After export finishes, a message appears.

To halt export for a file, select Cancel in the progress bar.

Note

- At this time, background export is available only for raster formats, .png and .jpg. The .svg and .pdf file formats use the standard export process.
- If the selected formats mix raster formats with .svg/.pdf file formats, the export process does not run in the background.

### File formats for exporting artwork

AutoCAD Drawing and AutoCAD Interchange File (DWG and DXF)

- AutoCAD Drawing is AutoCAD's standard save format for vector graphics created there.
- AutoCAD Interchange File supports drawing exchange by exporting AutoCAD drawings for other applications or importing drawings from them. Details: AutoCAD export options.

BMP

A standard Windows image format. Details: BMP export options.

Enhanced Metafile (EMF)

Windows applications commonly use EMF as an interchange format for vector graphics data. During EMF export, Illustrator may rasterize some vector data.

JPEG (Joint Photographic Experts Group)

JPEG is a standard format for web image display. It is commonly used for saving photographs. The format preserves image color data and lowers size by throwing away selected information. Details: JPEG export options.

Macintosh PICT

macOS graphics and page-layout applications use PICT to transfer images between applications. PICT compresses images especially well when they contain large areas of solid color.

Photoshop (PSD)

The standard Photoshop format. If Photoshop format cannot carry some artwork data, Illustrator maintains the visible result by merging document layers or rasterizing artwork. Details: Photoshop export options.

PNG (Portable Network Graphics)

Used for lossless compression and web display. In grayscale and RGB images, PNG can keep transparent areas. Details: PNG export options.

Targa (TGA)

Built for systems using the Truevision video board. Details: Targa export options.

Text Format (TXT)

Writes illustration text to a text file. Details: Export text.

SVG (Scalable Vector Graphics)

As an XML-based format, SVG offers many benefits to developers and users. Details: SVG export options.

TIFF (Tagged-Image File Format)

TIFF supports file exchange across applications and computer platforms. As a flexible bitmap image format, it is supported by most paint, image-editing, and page-layout applications. Many desktop scanners can create TIFF files. Details: TIFF export options.

Windows Metafile (WMF)

For 16-bit Windows applications, WMF serves as an intermediate exchange format. Almost all Windows drawing and layout programs support WMF format. Its vector graphics support is limited, so use EMF format instead of WMF format wherever possible.

WebP

WebP is a modern image format that provides strong lossless and lossy compression for images on the web. It keeps image quality high while reducing file sizes, helping pages load faster and improving user experiences across the internet. Details: WebP export options.

PDF

Portable Document Format (PDF) is universal: it preserves source-document fonts, images, and layout from many applications and platforms. Adobe PDF is the standard for secure, reliable distribution and exchange of electronic documents and forms worldwide. For more information, see Create Adobe PDF files.

| --- | --- |

Note

- Multiple-artboard export is available only for these formats: SWF, JPEG, PSD, PNG, and TIFF.
- Save For Web & Devices can also create PNG or JPEG files from an image.

### AutoCAD export options

For DXF or DWG artwork export, these options are available:

Auto CAD DXF/DWG export options

Auto CAD DXF/DWG export options

AutoCAD Version

Sets the AutoCAD version that can support the exported file.

Scale

Use Scale Units values to tell Illustrator how to interpret length data while writing the AutoCAD file.

Scale Lineweights

Applies export scaling to lineweights along with the rest of the drawing.

Number of Colors

Sets the color depth for the exported file.

Raster File Format

Chooses PNG or JPEG for images and objects rasterized during export. PNG is the only choice that supports transparency; use PNG when preserving the appearance as much as possible is required.

Preserve Appearance

Select this when maintaining visual appearance matters more than editing the exported file afterward. It can greatly reduce editability; for example, text may become outlines and effects may be rasterized. Preserve Appearance and Maximum Editability are mutually exclusive.

Maximum Editability

Select this when editing in AutoCAD matters more than retaining the Illustrator appearance. The exported result can lose substantial visual fidelity, especially for artwork with style effects. Maximum Editability and Preserve Appearance are mutually exclusive.

Export Selected Art Only

Exports only the artwork selected at export time. If nothing is selected, Illustrator exports a blank file.

Alter Paths For Appearance

Adjusts AutoCAD paths as needed so the original appearance is retained. For example, if an overlapping path would alter other objects during export, this setting changes the path to keep those objects looking the same.

Outline Text

Turns all text into paths before export so the appearance is preserved. Illustrator and AutoCAD can interpret text attributes in different ways. Select this for maximum visual fidelity, with editability reduced. Leave it unselected if the text must remain editable in AutoCAD.

Always Export Group as Block Reference

Select this to export a group of objects in artwork as a block in DWG/DXF file format.

| --- | --- |

Note

Default color handling is inverted for black and white: white strokes or fills from Illustrator become black strokes or fills in AutoCAD formats, while black strokes or fills export to AutoCAD as white.

### BMP and TARGA export options

For BMP or Targa artwork export, these options are available:

Color Model

Sets the color model for the exported file.

Resolution

Sets the resolution for the exported file.

Anti-aliasing

Smooths jagged artwork edges through supersampling. Turning this option off helps keep line-art edges hard after rasterization.

| --- | --- |

Rasterize options while exporting BMP or Targa file

Rasterize options while exporting BMP or Targa file

### JPEG export options

For JPEG artwork export, these options are available:

JPEG export options

JPEG export options

Color Model

Sets the color model for the JPEG file.

Quality

Controls JPEG file quality and size.

Compression Method

- Select Baseline (Standard) for a format most web browsers recognize.
- Select Baseline Optimized to improve color handling while trimming file size slightly.
- Select Progressive to show increasingly detailed scans as the image downloads; you specify how many scans are used.

Not every web browser supports Baseline Optimized and Progressive JPEG images.

Resolution

Sets the resolution for the JPEG file.

Anti-aliasing

Smooths jagged artwork edges through supersampling. Turning this option off helps keep line-art edges hard after rasterization.

Imagemap

Creates image-map code. Select Client-side (.html) or Server-side (.map) to choose the generated file type.

Embed ICC Profiles

Stores ICC profiles inside the JPEG file.

| --- | --- |

Note

Each time a file is saved as JPEG, artifacts such as wave-like patterns or blocky banding areas may be introduced. Save JPEG output from the original image rather than from a JPEG that was saved earlier.

### Photoshop export options

For PSD artwork export, these options are available:

Photoshop export options

Photoshop export options

Color Model

Sets the color model for the exported file. If a CMYK document is exported as RGB, or the reverse, transparent areas can change unexpectedly, particularly where blending modes are involved. After changing the color model, export the artwork as a Flat Image because Write Layers is unavailable.

Resolution

Sets the resolution for the exported file.

Flat Image

Combines every layer and outputs the Illustrator artwork as a rasterized image, preserving its visual appearance.

Write Layers

Outputs groups, compound shapes, nested layers, and slices as separate editable Photoshop layers. When nested layers go deeper than five levels, Illustrator merges them into one Photoshop layer. Choose Maximum Editability for transparent objects that use an opacity mask, constant opacity below 100%, or a blending mode other than Normal; those objects remain live and editable as Photoshop layers.

Preserve Text Editability

Keeps horizontal and vertical point type in layers editable as Photoshop type, including nested layers up to five levels deep. If this changes artwork appearance, deselect it to rasterize the text instead.

Maximum Editability

Top-level layers are written as Photoshop layer sets, and transparent objects stay editable. For each compound shape in a top-level layer, Illustrator can also write a Photoshop shape layer when visual appearance is unaffected. To output compound shapes that use solid strokes, set Join type to Round. Regardless of this setting, Illustrator merges all layers deeper than 5 levels into a single Photoshop layer.

Anti-aliasing

Smooths jagged artwork edges through supersampling. Turning this option off helps keep line-art edges hard after rasterization.

Embed ICC Profiles

Builds a document with color management.

| --- | --- |

### PNG export options

For PNG file export, these options are available:

Resolution

Sets the resolution of the rasterized image. Higher values improve image quality while increasing file size.

Anti-aliasing

Smooths jagged artwork edges through supersampling. Turning this option off helps keep line-art edges hard after rasterization.

Interlaced

Shows low-resolution image versions as the file downloads in a browser.

Background Color

Sets the fill color used for transparent areas.

- Transparent preserves transparency.
- White fills transparency with white.
- Black fills transparency with black.

| --- | --- |

PNG export options

PNG export options

### SVG export options

For SVG artwork export, these options are available:

SVG export options

SVG export options

Styling

Chooses the way visual styling information is written into SVG markup.

- Internal CSS: Uses one `<style>` tag plus CSS classes, so objects with matching styles share styling settings. This can reduce file size.
- Inline Style: Uses one `style` attribute on each SVG tag, with all of that tag's style properties combined as CSS.
- Presentation Attributes: Uses individual XML attributes for each style property on every SVG tag. Android Studio requires this format for SVG assets.

Font

Chooses how fonts are represented in the SVG file. Outlines keep path definitions and have broad compatibility.

Images

Chooses whether images are embedded in the document or saved as linked external files.

Object IDs

Sets how ID types (names) are assigned to SVG objects. Choose between Layer Names, Minimal, or Unique. This setting controls duplicate object-name handling and naming in the exported CSS.

Decimal

Sets how much object-location precision is retained. Higher Decimal values increase layout precision and visual fidelity in the rendered SVG, while also increasing exported SVG file size.

Minify

Reduces SVG file size by removing empty groups and blank spaces. It also makes the resulting SVG code harder to read.

Responsive

When enabled, browser scaling is used for the SVG-generated output, and no absolute size values are written.

Show Code

Launches the default text editor with the exported content.

Show in browser

Displays the image in the default web browser.

| --- | --- |

### TIFF export options

For TIFF file export, these options are available:

Color Model

Sets the color model for the exported file.

Resolution

Sets the resolution of the rasterized image.

Anti-aliasing

Smooths jagged artwork edges through supersampling. Turning this option off helps keep line-art edges hard after rasterization.

| --- | --- |

TIFF export options

TIFF export options

LZW Compression

This lossless compression method preserves image detail and can reduce file size when selected.

Embed ICC Profiles

Applies color management to the document.

| --- | --- |

### WebP export options

For webp file export, these options are available:

WebP export options

WebP export options

Lossless

Select this when all image details must be preserved. File size may increase.

Lossy

Select this to reduce file size, with some image detail lost.

Quality

With Lossy compression, use the Quality slider to set the trade-off between details and file size. Higher quality keeps more details and produces larger files.

Resolution

Sets the resolution of the rasterized image.

Anti-aliasing

Smooths jagged artwork edges through supersampling. Turning this option off helps keep line-art edges hard after rasterization.

Background Color

Sets the fill color used for transparent areas.

Embed ICC Profiles

Adds ICC profile information for color management.

| --- | --- |

### More like this

- About saving artwork
- How to save a file for output

- About colors in digital graphics
- Image resolution guidelines for final output

## Create a gradual blend in colors using the Gradient tool

Search Last updated on Jul 17, 2024

Use Linear, Radial, or Freeform gradients with the Gradient tool to create gradual color blends.

Try it in the app Create color blends with the Gradient tool in a few quick steps.

Open Illustrator

Select the object or area that should receive a gradient fill.

Open the Gradient panel by double-clicking the Gradient tool or pressing G.

Choose Linear, Radial, or Freeform as the gradient type. Linear is selected by default.

Edit the gradient by changing stroke, angle, aspect ratio, or opacity. To reposition the color blend, use the Gradient slider in the Gradient panel or on the object.

Drag points in the selected area and adjust them to change the color blending effect.

## Create and edit meshes using the Mesh tool

Search Last updated on May 24, 2023

Use the Mesh tool to blend colors and build surface contours on objects for depth and color transitions.

Select an object, then click the Mesh tool or press U.

Add mesh points by clicking inside the object.

To color the mesh patch, the area between mesh points, choose a fill color.

Move a mesh point by dragging it with the Mesh tool.

To delete a mesh point, hold Alt (Windows) or Option (macOS), then click the mesh point.

## Create complex shapes using the Shape Builder tool

Search Last updated on May 24, 2023

With the Shape Builder tool, simple objects can be merged or erased to build more complex artwork.

Select it by clicking the Shape Builder tool or pressing Shift+M.

Click the selected region to extract the shape parts you need to merge. Additional anchor points appear where the shapes are split.

To merge paths into a shape, drag through the region with the additional anchor points, then release the mouse.
