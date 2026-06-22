# Video And Animation Export Formats, Enhance Animation Frames, Flatten Frames Into Layers, Export Video Files Or Image Sequences ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Video and animation export formats; Enhance animation frames; Flatten frames into layers; Export video files or image sequences; Photoshop file formats overview; File compression in Photoshop; Supported file formats in Photoshop; Image file formats supported in Photoshop; Export your work using the Quick Export as option; Fine-tune export settings with Export As; Export settings and export location preferences; Export files in different sizes; Export layers as files; Export artboards as PDF; Export artboards as files.

## Video and animation export formats

Choose Photoshop output formats according to whether the project needs online sharing, continued editability, or professional playback.

After a video or animation is ready, pick an export format that fits the next step, such as web delivery, editing, or playback.

Available format

Description

GIF

Exports animations for quick web viewing and sharing.

QuickTime

Exports videos or animations for playback, sharing, or final delivery.

PSD

Keeps animation edits available and maintains compatibility with Adobe and other professional editing tools.

| --- | --- |

## Enhance animation frames

### Reduce animation file size in Adobe Photoshop and improve playback by using frame-based settings and Timeline panel export options.

When the animation is complete, tune it for efficient browser download:

- Include only the frame areas that change so the animated GIF becomes smaller.
- Use the same animation settings as a standard GIF. Consistent dithering is applied across frames to avoid flicker, which can take longer to process than a standard GIF.
- Choose the Adaptive, Perceptual, or Selective palette so colors remain consistent from frame to frame.

Open the Timeline panel (Window > Timeline) in Frame Animation mode. If keyframes appear instead of separate frames, choose the menu icon, then choose Convert Frames > Convert to Frame Animation.

Choose the menu icon, then choose Optimize Animation.

Use frame optimization settings to shrink animated GIFs and keep playback consistent.

Frame optimization choices reduce animated GIF size while improving playback consistency.

Review the Optimize Animation dialog box, then choose OK.

- Bounding Box: trims every frame to its changed region only. File size is reduced, but compatibility with some GIF editors may be limited.
- Redundant Pixel Removal: turns unchanged pixels transparent so the file is smaller. To use it, enable Transparency in the Optimized panel (File > Export > Save for Web).

When Redundant Pixel Removal is used, right-click the frame in the Timeline panel and choose Automatic as the disposal method.

## Flatten frames into layers

### Convert video frames into individual layers in Adobe Photoshop so each frame can be edited separately or receive custom effects.

Before you begin

- Bring in the video layer, then switch to frame animation mode or video timeline mode.
- Save the file first because this command changes the layer structure.
- Remember that flattening frames discards audio data from the video.

Tip

For non-destructive editing, convert videos to Smart Objects before flattening.

Open the Timeline panel and select the video layer.

Open the panel menu icon and choose Flatten Frames Into Layers. Photoshop makes one layer for each frame and places those layers in the Layers panel, with the first frame at the bottom of the stack.

## Export video files or image sequences

### Export a Photoshop timeline as a video or image sequence by choosing formats, frame range, and quality settings.

Before export, save the project, confirm available disk space, and finish the required edits.

Open the export controls:

- Choose File > Export > Render Video.

Name the output and choose where it will be saved:

- Type a name for the video or image sequence.
- Select the save destination.
- (Optional) Turn on Create New Subfolder, then provide the folder name.

Pick the rendering method:

- Select Adobe Media Encoder or Photoshop Image Sequence.

(Optional) Select format:

- Pick an option from Format. The available choices depend on the selected export method.

(Optional) Configure export settings:

- If Adobe Media Encoder is selected, configure these fields: Format: pick the video format Preset: apply predefined settings Size: define dimensions Frame Rate: specify fps Field Order: select the interlacing choice Aspect: set aspect ratio Color: Manage: switch color management on or off
- If Photoshop Image Sequence is selected, configure these fields: Format: pick the image format Starting: set the first frame number Digits: set the number of filename digits Size: define dimensions Frame Rate: specify fps

Choose frame Range:

Use one of these options:

- All Frames: exports the full timeline.
- Start Frame and End Frame: exports the chosen range.
- Work Area: uses the frames covered by the Timeline work area bar.

Optional render controls:

- Alpha Channel can be None, Straightâ€“Unmatted, or Premultiplied according to the transparency handling you need.

Create the export.

- Choose Render to create the video or image sequence.

Tip

Preview export settings before rendering so output quality and file size match the intended result.

## Photoshop file formats overview

### Compare Adobe Photoshop file formats and choose formats for full features, large files, and 8-, 16-, or 32-bit images.

Graphics formats store images as raster pixels or vectors, and they vary by compression method and supported Photoshop features. To preserve layers, effects, and masks, save another copy as a Photoshop (PSD) file.

PSD handles files up to 2GB. For anything larger, use Large Document Format (PSB). Workflow needs may also point to Photoshop Raw (flattened only), TIFF (up to 4GB), or DICOM.

Most images are 8 bits per channel. When more dynamic range is needed, work in 16-bit or 32-bit and use the corresponding save choice.

16-bit capable formats (use Save a Copy): Photoshop (PSD), Large Document Format (PSB), TIFF, PNG, Photoshop PDF, Photoshop Raw, DICOM, Cineon, IFF, JPEG 2000.

32-bit capable formats (use Save As): Photoshop (PSD), Large Document Format (PSB), OpenEXR (EXR), Radiance (HDR), TIFF, JPEG XL (JXL), Portable Float Map (PFM).

## File compression in Photoshop

Compare Adobe Photoshop compression types, then choose the format that fits image quality, file size, and final use.

Compression type

Description

Use case

RLE (Run Length Encoding)

Applies lossless compression that efficiently represents repeated data sequences.

Works for simple graphics in standard Windows file formats.

LZW (Lempel-Ziv-Welch)

Applies lossless compression so all image data remains while the file becomes smaller.

Works for images with large solid-color areas in TIFF, PDF, GIF, and PostScript.

JPEG (Joint Photographic Experts Group)

Uses lossy compression, reducing size by discarding image detail. Quality can be adjusted from the menu, with the slider, or by entering a value from 0 to 12.

Works for continuous-tone images, including photographs in JPEG, TIFF, PDF, and PostScript. Printing requires Level 2 or later PostScript printers, and plate separation may not be supported.

CCITT (Consultative Committee for International Telegraphy and Telephony).

Applies lossless compression intended for black-and-white images.

Works for scanned documents or line art in PDF and PostScript.

ZIP

Applies LZW-like lossless compression to lower file size without reducing quality.

Works for images with flat-color regions in PDF and TIFF.

| --- | --- | --- |

### Compression formats in Photoshop

Format

Reason to use

Image content

For photos, choose JPEG. For graphics built from solid colors, use LZW or ZIP.

Quality requirements

When exact image data must be preserved, choose RLE, LZW, ZIP, or CCITT.

File size constraints

For the smallest files, choose JPEG and accept some quality loss.

Output medium

Base the format choice on display or print needs.

| --- | --- |

### WebP format support in Photoshop

WebP is useful for web pages and can use either lossless or lossy compression. Adjust compression with the quality slider and decide whether metadata should be retained. Compared with many older formats, WebP files are smaller while preserving a sharp appearance. Use the compression settings to balance image quality against file size.

## Supported file formats in Photoshop

Learn which file formats Adobe Photoshop can import, export, and use for image, audio, video, and 3D workflows.

Photoshop can work with many formats for image editing, audio and video tasks, and 3D content. Choosing the appropriate format helps preserve quality, control file size, and keep output compatible with the intended destination. The supported groups are:

- Audio file formats (import only)
- Video file formats (import)
- Video file formats (export)
- Graphic file formats (import and export)
- 3D-related file formats

### Audio file formats supported for import

- AAC
- M2A
- M4A
- MP2
- MP3

### Video file formats supported for import

- .264
- 3GP
- 3GPP
- AVC
- AVI
- F4V
- FLV
- MOV (QuickTime)
- MPE
- EXR
- MPEGâ€‘1
- MPEGâ€‘4
- MPEGâ€‘2 (if a decoder is installed, for example, with an Adobe video app)
- MTS
- MXF
- R3D
- TS
- VOB

### Video file formats supported for export

- DPX
- MOV (QuickTime)
- MP4
- JPEG2000 (QuickTime)
- EXR

### Graphic file formats supported for import and export

- WebP
- BMP
- Cineon
- CompuServe GIF
- DICOM
- HEIF/HEIC
- IFF format
- JPEG
- JPEG2000
- Large Document Format PSB
- OpenEXR (enhanced support for multi-part/multi-view files, high-bit-depth pixels, and advanced alpha/channel handling)
- PCX
- Photoshop DCS 1.0
- Photoshop DCS 2.0
- Photoshop EPS
- Photoshop PDF
- Photoshop PSD
- Photoshop Cloud Document (PSDC)
- Photoshop Raw
- PICT (read only)
- PICT Resource (supported only on Mac for viewing, not saving)
- Pixar
- PNG
- Portable Bit Map
- Radiance
- Scitex CT
- Targa
- TIFF
- Wireless Bitmap
- AVIF

### 3D-related file formats supported

- 3D Studio (import only)
- DAE (Collada)
- Flash 3D (export only)
- JPS (JPEG Stereo)
- KMZ (Google Earth 4)
- MPO (Multi-Picture format)
- U3D
- Wavefront OBJ

## Image file formats supported in Photoshop

Adobe Photoshop can open, save, and export many image file formats; this section explains what those formats allow and where their limitations matter.

When you save or share work from Photoshop, the chosen format controls practical outcomes such as keeping layers editable, preparing web assets, or delivering files for print.

### Photoshop (PSD)

PSD is Photoshop's standard file format; together with PSB, it is the format that preserves the complete feature set.

- Integrates cleanly with other Adobe apps, including Illustrator, InDesign, Premiere, After Effects, and GoLive.
- Keeps layers, effects, and other editable content available to compatible apps.
- Offers a way to store a composite version of the file, which improves compatibility with other apps and older versions.

That composite copy helps preserve the image appearance and can make the file open more quickly outside Photoshop.

### Large Document Format (PSB)

For files that are too large for PSD limits, PSB is the preferred working format.

- Supports documents up to 300,000 pixels in width or height.
- Keeps features such as layers, effects, and filters.
- Allows saving of 32-bit HDR images.
- Suits large-scale, high-resolution projects.

Files over 2GB generally fail in older releases and in most other apps, so PSB is best used with the latest version.

### Photoshop 2.0

Use this legacy format only when Photoshop 2.0 compatibility or another app's requirement makes it necessary. It is available only on macOS.

- Opens files in Photoshop 2.0.
- Sends images to apps that accept only this older format.
- Flattens the image and discards all layers.

Avoid it unless a legacy system requires it.

### Photoshop Raw

Photoshop Raw helps transfer image data across software and operating systems when a flexible container is needed.

- CMYK, RGB, and grayscale images may include alpha channels.
- Multichannel and Lab images are supported when alpha channels are absent.
- Any pixel dimensions or file size can be used.
- Layers are not supported.

A Photoshop Raw file differs from a camera raw image: it is independent of any specific camera and does not contain unprocessed sensor data.

### Joint Photographic Experts Group (JPEG)

JPEG is commonly chosen for photographs and continuous-tone images on web pages.

- Can use CMYK, RGB, and Grayscale color modes.
- Transparency is not supported.
- Reduces file size with lossy compression that removes image data.
- Stronger compression produces lower image quality.

### Portable Network Graphics (PNG)

PNG is useful for web display when lossless compression is required.

- Handles 24-bit images
- Gives background transparency clean edges without jagged artifacts
- Keeps transparency for grayscale and RGB images

### Graphics Interchange Format (GIF)

GIF works for indexed-color graphics and HTML document images.

- Shrinks files and speeds transfer with LZW compression
- Maintains transparency in indexed-color images
- Alpha channels are not supported

Tagged Image File Format (TIFF)

TIFF supports file exchange across applications and platforms.

- Nearly all paint, image-editing, and layout apps support this flexible bitmap format.
- For files larger than 4GB, choose the BigTIFF option while saving.

### BMP

BMP is a Windows-standard image format for Windows-compatible systems.

- Supports RGB, Indexed Color, Grayscale, and Bitmap color modes.
- When saving, lets you choose Windows or OS/2 format and select bit depth.

### WebP

WebP is a web-focused modern image format with both lossless and lossy compression.

- With version 23.2 and later, Photoshop has built-in WebP support for opening, creation, editing, and saving.
- For version 23.1 and earlier, the WebPShop plug-in is required.

### Portable Document Format (PDF)

PDF is a flexible format that works across platforms and applications. Using the PostScript imaging model, PDF files preserve fonts, page layouts, and vector and bitmap graphics accurately.

Photoshop can work with two PDF categories:

- Photoshop PDF files: Produced by selecting Preserve Photoshop Editing Capabilities in the Save Adobe PDF dialog box.
- Standard PDF files: Produced when Preserve Photoshop Editing Capabilities is deselected, or made by other applications.

### Encapsulated PostScript (EPS)

EPS is a language file format that can contain vector graphics and bitmap graphics. Nearly all graphics, illustration, and page-layout programs support it.

- Transfers PostScript artwork between applications.
- Rasterizes vector graphics into pixels when opened.

### Desktop Color Separations (DCS)

DCS is an EPS variant used for saving CMYK image color separations.

- DCS 2.0 supports exporting images with spot channels.
- Output requires a PostScript printer.

### Digital Imaging and Communications in Medicine (DICOM)

DICOM is commonly used for storing and transferring medical images, including ultrasounds and scans.

- Stores image data plus metadata, including patient information.

### Cineon

Cineon, developed by Kodak, is a 10-bit-per-channel digital format intended for high-quality image processing.

- Fits electronic composition, editing, and enhancement workflows.
- Can output back to film without losing image quality.

### HEIF/HEIC

Many current mobile devices can create HEIF/.heic photos.

- macOS: supported with macOS High Sierra (v10.13) or later
- Windows: both HEIF and HEVC CODECs from Microsoft must be installed

Canon HIF/HEIC files are not supported. For best results with Canon cameras, use raw files.

### Digital Negative (DNG)

DNG is an archival camera raw format intended to improve compatibility and reduce the spread of separate camera raw file formats. Using the DNG format, the Camera Raw plug-in can store camera raw image data.

### High Dynamic Range (HDR)

For 32-bit HDR image workflows, Photoshop supports several formats:

- OpenEXR (EXR): visual effects workflows use it; it supports transparency and is limited to 32-bit/channel images. Industrial Light and Magic developed it.
- Radiance (HDR): originally created for the Radiation system, this 32-bit-per-channel format stores actual light data (luminosity) rather than only display colors, which makes it useful for lighting simulations and 3D rendering.

### Interchange File Format (IFF)

IFF is a portable general-purpose format for storing associated data of multiple types. It includes Maya IFF and IFF (formerly Amiga IFF).

### PICT File and PICT Resource

macOS graphics and page-layout tools use PICT as an interchange format for moving images between applications. In PICT format, RGB images can include one alpha channel; Indexed Color, Grayscale, and Bitmap mode images are supported without alpha channels.

Photoshop can read raster PICT files, but QuickDraw PICTs are not supported, and Photoshop cannot write files in PICT format.

### Pixar

Pixar format targets demanding graphics workflows such as 3D rendering and animation. It handles RGB and grayscale images and allows one alpha channel.

### Portable Bit Map (PBM)

PBM file format, also called Portable Bitmap Library and Portable Binary Map, stores monochrome bitmaps. Use it when lossless transfer is needed; it belongs to the broader Portable Graymap (PGM), Portable Pixmap (PPM), and Portable Anymap (PNM) family.

### Scitex Continuous Tone (CT)

High-end image processing on Scitex computers uses CT format. For utilities that move files saved in Scitex CT format onto a Scitex system, contact Creo.

### WBMP

WBMP format is the standard format for optimizing images for mobile devices. Because WBMP supports 1-bit color, WBMP images contain only black and white pixels.

### File format compatibility

Evaluate these points before choosing a file format:

- Layers and features: Use PSD or PSB formats when you need to keep layers, masks, or Photoshop-specific features.
- File size: For web output, pick efficiently compressed formats such as JPEG, PNG, or WebP.
- Color requirements: For CMYK print work, select a format that supports that color mode, such as PSD, TIFF, or PDF.
- Compatibility: When files need to move to people using other applications, standard formats such as TIFF, JPEG, or PDF are usually better choices.
- Quality needs: Use lossless formats such as PSD, TIFF, or PNG for maximum quality. When smaller files matter and some quality loss is acceptable, consider lossy formats such as JPEG.

## Export your work using the Quick Export as option

Use Adobe Photoshop to save work quickly in the image format you prefer and export it without resetting options every time.

Quick Export as saves Photoshop work to your chosen format in a single step. The command uses the settings you already saved, which makes repeated exports fast and consistent when assets need matching specs.

### Export instantly

Choose what to export:

- For the full document, choose File > Export > Quick Export as (image format).
- For selected layers, select the layers in the Layers panel, right-click, and choose Quick Export as (image format).

If Photoshop asks for a location because preferences are set to Ask where to export each time, choose the destination folder.

Type the filename, then select Save.

### Set preferences (one-time setup)

Choose Edit > Preferences > Export (Windows) or Photoshop > Preferences > Export (macOS).

Choose your Quick Export Format: PNG, JPG, or GIF.

Adjust the format settings: for PNG, choose Transparency or Smaller File (8-bit); for JPG, set Quality.

Set Quick Export Location to one of the available choices:

- Ask where to export each time
- Export files to an assets folder next to the current document

Turn on Quick Export Metadata when the export should include Copyright and Contact Info.

Choose the Color Space behavior, including whether assets are converted to sRGB.

Set Export As Location to the current document's location or to the last used location.

(Optional) Turn on Use legacy "Export As" when the legacy Export As interface is needed.

Select OK to keep the preference changes.

Configure output defaults so asset delivery takes less time.

Use saved output defaults to make asset delivery faster.

## Fine-tune export settings with Export As

### Save layers, groups, or artboards as separate images in Adobe Photoshop, then refine their export settings.

Choose File > Export > Export As to open the Export As dialog box.

In the Format dropdown, choose PNG, JPG, GIF, or SVG.

Change the settings that belong to the selected format. For example, PNG can allow transparency, while JPG can use different quality levels.

For scale, enter 1.25x when that is the needed relative size. For the suffix, type @1.25x. Select the add icon to define additional sizes.

Select Export to write each selected layer, group, or artboard as its own image.

## Export settings and export location preferences

Use Export As options and preferences in Adobe Photoshop to control export settings and decide where assets are saved.

### File Settings

### Image Size

### Canvas Size

Image Size sets the exported asset dimensions, and the Export As dialog centers the image inside those bounds. Use this setup for icons that have to fit fixed boxes such as 50x50 px, or for banners that require exact dimensions.

- If the image exceeds the canvas, the set width and height clip it.

  - White, when a background layer is present
  - Transparency, when no background exists and the selected format supports transparency
  - The final swatch from the color table for Indexed Color mode

- Reset returns the dimensions to the values defined in Image Size.

### Additional options

### Scale All

Tip

To update the Export As location preference, choose Edit > Preferences > Export. In the Preferences dialog box, under Export As Location, choose one of these options:

- Export assets to the location of the current document
- Export assets to the last location specified

## Export files in different sizes

### Export layers, artboards, or your document at multiple sizes in Adobe Photoshop; add suffixes, adjust settings, and save every version.

Use the Export As dialog box to create files at different sizes.

The Export As dialog box is also where you prepare alternate-size output files.

Select the layers, artboards, or documents you want to export.

Choose File > Export > Export As.

In the left panel, choose a relative size, for example, 1.25x.

Enter the suffix for that selected size, for example, @1.25x.

Select the plus icon, then add any additional sizes and suffixes.

Change other settings, such as format or quality, as needed.

Keep image dimensions consistent across multiple assets.

Use matching sizing rules so the asset group stays consistent.

Select Export to save all versions. The selected layers or artboards all receive the scaling options you chose.

## Export layers as files

Learn to save each layer as its own file in Adobe Photoshop, choose the format you want, and control the filenames.

Turning layers into separate files helps create web design assets, client variations, or animation pieces without exporting each layer manually.

Choose File > Export > Layers to Files.

Select the destination folder.

In the File Name Prefix text box, enter the shared prefix for the exported files.

Select Visible Layers Only when you want to export only layers with visibility enabled in the Layers panel.

Choose a format from the File Type dropdown.

Configure any options that are specific to that format.

Select Include ICC Profile to embed the working space color profile. This matters in color-managed workflows.

Select Run.

Convert the layered design into individual files.

Use the layered design to produce a separate file set.

Photoshop writes one file for each layer to the folder you selected. Each filename combines the prefix with the layer name.

## Export artboards as PDF

Learn to save artboards as PDF files in Adobe Photoshop, choose single or multiple PDFs, and set quality and ICC profile options.

Choose File > Export > Artboards To PDF.

In the Artboards To PDF dialog box:

- Choose the destination location.
- Type a prefix in the File Name Prefix field.
- Use Artboard Contents Only or Include Overlapping Areas to decide whether the PDF includes content outside the artboard.
- Turn on Export Selected Artboards if only certain artboards should be exported.
- Turn on Include Background In Export to place the artboard background into the generated PDF files.
- Choose Multi-Page Document for one PDF containing all artboards, or Document Per Artboard for separate PDFs named with the prefix.
- For exported PDF encoding, choose ZIP or JPEG. When using JPEG, set Quality from 0 to 12.
- Use Include ICC Profile when exported PDFs should carry the color profile.
- Use Include Artboard Name when filenames should contain the artboard name. Set the font, size, and canvas extension color as needed.
- Use Reverse Page Order when the PDF pages should be written from the last artboard to the first.

Select Run to create the PDF documents. When export finishes, the PDFs are in the selected folder. A single file contains all artboards, while separate files use the prefix you set.

## Export artboards as files

Learn how to export canvas content from Adobe Photoshop as separate files for different screen sizes by saving selected artboards or all artboards in the format you prefer.

Choose File > Export > Artboards To Files.

In the Artboards To Files dialog box, select a destination folder.

Enter the prefix for all exported files in the File Name Prefix field.

Choose Artboard Contents Only or Include Overlapping Areas according to the boundary behavior you need.

Select Include Background In Export if the export requires it.

Select Export Selected Artboards when only specific artboards should be exported.

Choose a format from File Type and configure the related options.

Under Export Options > Include Artboard Name, choose whether exported filenames include the artboard name. As needed, adjust these settings: font, size, color, and canvas extension color.

Use Run to start the export.
