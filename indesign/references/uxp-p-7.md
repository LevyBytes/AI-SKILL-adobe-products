# Pdf Export Preset, Pdf Export Presets, Pdf Magnification Options, Pdf Mark Weight ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: PDFExportPreset; PDFExportPresets; PdfMagnificationOptions; PDFMarkWeight; PDFPlacePreference; PDFProfileSelector; PDFRasterCompressionOptions.

## PDFExportPreset

Document-level settings used for PDF export.

### Instance

> _Read Only_
>
> File **fullName**
>
> Full path to the PDFExportPreset, including the PDFExportPreset name.
> _Read Only_
>
> Mixed **effectivePDFDestinationProfile**
>
> Effective destination color profile value; may resolve as either String or PDFProfileSelector enumerator.
> _Read Only_
>
> String **effectiveOCRegistry**
>
> Effective PDF/X OC Registry value.
> _Read Only_
>
> String **effectiveOutputCondition**
>
> Effective PDF/X output condition value.
> _Read Only_
>
> Mixed **effectivePDFXProfile**
>
> Effective PDF X color profile value; may resolve as either String or PDFProfileSelector enumerator.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the PDFExportPreset, which is an Application.
> _Read Only_
>
> Number **index**
>
> Position of the PDFExportPreset inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection attached to this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection attached to this object.
> PdfMagnificationOptions **pdfMagnification**
>
> Magnification setting used by exported PDFs.
> PageLayoutOptions **pdfPageLayout**
>
> Page layout setting used by exported PDFs.
> Boolean **openInFullScreen**
>
> Opens the PDF in full-screen mode.
> PdfDisplayTitleOptions **pdfDisplayTitle**
>
> Display-title setting used by exported PDFs.
> String **defaultDocumentLanguage**
>
> Assigns the exported PDF's default document language. Provide the correct ISO code for the language.
> Boolean **exportAsSinglePages**
>
> Exports each page or spread into its own PDF file.
> String **singlePagesPDFSuffix**
>
> Suffix appended to each file when pages are exported into separate PDF files.
> String **name**
>
> Name of the PDFExportPreset.
> Number **subsetFontsBelow**
>
> Sets the complete-font embedding threshold according to the percentage of a font's characters used in the document. When usage for a given font is above the specified value, the entire font is embedded; otherwise, only a subset is embedded. (Range: 0 to 100) Notes: Complete font embedding increases file size. Use 0 (zero) to fully embed all fonts.
> PDFColorSpace **pdfColorSpace**
>
> Color space used for representing color information in the exported PDF document.
> ICCProfiles **includeICCProfiles**
>
> ICC Profiles included in the exported PDF document. Can also accept: Boolean.
> Boolean **omitEPS**
>
> When true, EPS images are replaced with OPI links.
> Boolean **omitPDF**
>
> When true, PDF images are replaced with OPI links.
> Boolean **omitBitmaps**
>
> When true, bitmap images are replaced with OPI links.
> Boolean **cropImagesToFrames**
>
> When true, image data outside the visible area of an image frame is excluded from PDF export.
> Boolean **generateThumbnails**
>
> When true, thumbnail images are generated for each page or spread.
> Boolean **optimizePDF**
>
> When true, the exported PDF document is optimized for faster web browser viewing. Note: Text and line art are compressed regardless of the selected compression settings.
> Boolean **includeStructure**
>
> When true, export writes a tagged PDF file. Note: With acrobat compatibility at acrobat 6 or higher, Acrobat 6 or higher must open the PDF before tags are visible.
> AcrobatCompatibility **acrobatCompatibility**
>
> Acrobat compatibility target for the exported PDF document.
> Boolean **simulateOverprint**
>
> When true, the simulation for spot-ink overprinting with different neutral density values converts spot colors into process-color output for printing. Note: Invalid when the color output mode leaves color profiles unchanged.
> Mixed **pdfDestinationProfile**
>
> Final RGB or CMYK device gamut; possible values are PDFProfileSelector enumerator or String.
> Mixed **pdfXProfile**
>
> PDF X color profile assigned to the PDF document; possible values are PDFProfileSelector enumerator or String.
> Boolean **includeHyperlinks**
>
> When true, hyperlinks are included during document export.
> Boolean **includeBookmarks**
>
> When true, bookmarks and table of contents entries appear as links in the PDF document's bookmarks pane. When false, bookmark export is skipped.
> Boolean **exportNonprintingObjects**
>
> When true, non-printing objects are made visible in the PDF document.
> Boolean **exportGuidesAndGrids**
>
> When true, visible guides and baseline grids are included in the PDF document.
> Boolean **exportLayers**
>
> When true, each layer is saved as an Acrobat layer inside the PDF document.
> PDFXStandards **standardsCompliance**
>
> PDF/X standards compliance target to check against.
> String **outputCondition**
>
> Name of the target printing condition. Use it only when the document has a defined PDF/X compliance standard. PDF/X-3 cannot be the compliance standard or PDF export preset for this property. For compliance-standard details, see standards compliance and PDF X standards.
> Sampling **colorBitmapSampling**
>
> Sampling option applied to color bitmap images in the PDF document.
> Number **colorBitmapSamplingDPI**
>
> Ppi value for the resampled image. (Range: 9 to 2400)
> BitmapCompression **colorBitmapCompression**
>
> Bitmap compression amount to use.
> CompressionQuality **colorBitmapQuality**
>
> Compression option applied to color images.
> Sampling **grayscaleBitmapSampling**
>
> Sampling option applied to grayscale bitmap images.
> Number **grayscaleBitmapSamplingDPI**
>
> Ppi value for the resampled image. (Range: 9 to 2400)
> BitmapCompression **grayscaleBitmapCompression**
>
> Bitmap compression option applied to grayscale bitmap images.
> CompressionQuality **grayscaleBitmapQuality**
>
> Compression option applied to grayscale bitmap images.
> Sampling **monochromeBitmapSampling**
>
> Sampling option applied to monochrome bitmap images.
> Number **monochromeBitmapSamplingDPI**
>
> Ppi value for the resampled image. (Range: 9 to 2400)
> MonoBitmapCompression **monochromeBitmapCompression**
>
> Bitmap compression option applied to monochrome bitmap images.
> Boolean **compressTextAndLineArt**
>
> When true, ZIP compression is used for text and line art.
> Number **thresholdToCompressColor**
>
> Minimum dpi at which color compression starts. (Range: 1x to 10x the color bitmap sampling DPI value.)
> Number **thresholdToCompressGray**
>
> Minimum dpi at which grayscale compression starts. (Range: 1x to 10x the grayscale bitmap sampling DPI value.)
> Number **thresholdToCompressMonochrome**
>
> Minimum dpi at which monochrome compression starts. (Range: 1x to 10x the monochrome bitmap sampling DPI value.)
> Number **colorTileSize**
>
> Tile size used for color image processing. Requires color bitmap compression set to JPEG 2000. (Range: 128 to 2048)
> Number **grayTileSize**
>
> Tile size used for grayscale image processing. Requires grayscale bitmap compression set to JPEG 2000. (Range: 128 to 2048)
> PDFCompressionType **compressionType**
>
> PDF document objects selected for compression.
> Boolean **exportReaderSpreads**
>
> When true, each spread in the exported document becomes one page using the spread's original width.
> Measurement Unit (Number or String)=any **pageMarksOffset**
>
> Distance from the page edge to the page marks.
> Boolean **cropMarks**
>
> Prints crop marks that identify the page trim location.
> Boolean **pageInformationMarks**
>
> When true, the filename, page number, current date and time, and color separation name are printed.
> Boolean **bleedMarks**
>
> When true, bleed marks are printed.
> Boolean **colorBars**
>
> When true, small color squares are added for CMYK inks and gray tints in 10% increments.
> Boolean **registrationMarks**
>
> When true, small targets are printed outside the page area to align color separations.
> PDFMarkWeight **printerMarkWeight**
>
> Stroke weight used for printer's marks.
> Measurement Unit (Number or String)=any **bleedTop**
>
> Height of the bleed area at the page top. Note: Requires use document bleed to print set to true.
> Measurement Unit (Number or String)=any **bleedInside**
>
> Width of the bleed area at the page inside. Note: Requires use document bleed to print set to true.
> Measurement Unit (Number or String)=any **bleedBottom**
>
> Height of the bleed area at the page bottom. Note: Requires use document bleed to print set to true.
> Measurement Unit (Number or String)=any **bleedOutside**
>
> Width of the bleed area at the page outside. Note: Requires use document bleed to print set to true.
> Mixed **pdfMarkType**
>
> Printer mark type, supplied as either an enum value or a custom marks file name; possible values are MarkTypes enumerator or String.
> Boolean **useDocumentBleedWithPDF**
>
> When true, the document's bleed settings are used in the PDF document.
> Boolean **includeSlugWithPDF**
>
> When true, the document's slug area is included in the PDF document.
> Boolean **ignoreSpreadOverrides**
>
> When true, flattener spread overrides are ignored.
> FlattenerPreset **appliedFlattenerPreset**
>
> Transparency flattener preset to apply.
> String **outputConditionName**
>
> Output condition name. Valid only when the document has a defined PDF/X standard.
> String **ocRegistry**
>
> Output condition registry web address. Does not apply for PDF/X-3 compliance standard or PDF export preset.
> InteractiveElementsOptions **interactiveElementsOption**
>
> Controls drawing of interactive elements.
> ExportLayerOptions **exportWhichLayers**
>
> Selects which layers are exported.
> Object **properties**
>
> Property bag used to set multiple properties in one operation.

### Methods

> **remove**()
>
> Deletes the PDFExportPreset.
> PDFExportPreset **duplicate**()
>
> Duplicates the PDFExportPreset.
> String **toSource**()
>
> Builds source text that evaluates back to the PDFExportPreset.
> PDFExportPreset **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to invoke. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type to remove. |
| Mixed | handler | Registered event handler to remove. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PDFExportPresets

Collection container for PDF export presets.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> PDFExportPreset **add**( Object **withProperties** )
>
> Creates a PDFExportPreset object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new PDFExportPreset. (Optional) |

> Number **count**()
>
> Reports how many elements the PDFExportPreset collection contains.
> PDFExportPreset **item**( Mixed **index** )
>
> Gets the PDFExportPreset identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Can accept: Long Integer or String. |

> PDFExportPreset **itemByName**( String **name** )
>
> Gets the PDFExportPreset matching the provided name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> PDFExportPreset **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PDFExportPresets included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | PDFExportPreset, index, or name that starts the range. Can accept: PDFExportPreset, Long Integer or String. |
| Mixed | to | PDFExportPreset, index, or name that ends the range. Can accept: PDFExportPreset, Long Integer or String. |

> PDFExportPreset **firstItem**()
>
> Gets the first PDFExportPreset in this collection.
> PDFExportPreset **lastItem**()
>
> Gets the final PDFExportPreset in this collection.
> PDFExportPreset **middleItem**()
>
> Gets the middle PDFExportPreset from this collection.
> PDFExportPreset **previousItem**( PDFExportPreset **obj** )
>
> Gets the PDFExportPreset whose index comes immediately before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PDFExportPreset | obj | PDFExportPreset index that follows the wanted PDFExportPreset. |

> PDFExportPreset **nextItem**( PDFExportPreset **obj** )
>
> Gets the PDFExportPreset whose index comes immediately after the specified PDFExportPreset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PDFExportPreset | obj | PDFExportPreset whose index precedes the wanted PDFExportPreset. |

> PDFExportPreset **anyItem**()
>
> Gets any PDFExportPreset from this collection.
> PDFExportPreset **everyItem**()
>
> Gets every PDFExportPreset in this collection.
> String **toSource**()
>
> Builds executable source text that returns the PDFExportPreset.
> PDFExportPreset **[]**( Number **index** )
>
> Gets the PDFExportPreset at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to resolve. |

## PdfMagnificationOptions

Options that control PDF export magnification.

### Class

> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Selects the default magnification.
> _Read Only_
>
> Number `ACTUAL_SIZE` = 2053206906
>
> Shows content at actual size.
> _Read Only_
>
> Number `FIT_PAGE` = 2053534832
>
> Applies the fit page magnification setting.
> _Read Only_
>
> Number `FIT_WIDTH` = 1212437335
>
> Applies the fit width magnification setting.
> _Read Only_
>
> Number `FIT_HEIGHT` = 1212437352
>
> Applies the fit height magnification setting.
> _Read Only_
>
> Number `FIT_VISIBLE` = 1212437334
>
> Applies the fit visible magnification setting.
> _Read Only_
>
> Number `TWENTY_FIVE_PERCENT` = 2053534822
>
> Sets magnification to 25 percent.
> _Read Only_
>
> Number `FIFTY_PERCENT` = 2053531248
>
> Sets magnification to 50 percent.
> _Read Only_
>
> Number `SEVENTY_FIVE_PERCENT` = 2053534566
>
> Sets magnification to 75 percent.
> _Read Only_
>
> Number `ONE_HUNDRED_PERCENT` = 2053533544
>
> Sets magnification to 100 percent.

## PDFMarkWeight

PDF mark weight.

### Class

> _Read Only_
>
> Number **P125PT** = 825374064
>
> Uses 0.125 points for the printer mark line weight.
> _Read Only_
>
> Number **P25PT** = 842346608
>
> Uses 0.25 points for the printer mark line weight.
> _Read Only_
>
> Number **P50PT** = 892350576
>
> Uses 0.50 points for the printer mark line weight.

## PDFPlacePreference

Preferences for placing PDFs.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Containing object for the PDFPlacePreference (a Application).
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Number **pageNumber**
>
> PDF document page number that will be placed.
> PDFCrop **pdfCrop**
>
> Cropping mode to apply.
> Boolean **transparentBackground**
>
> When true, the PDF background is transparent.
> String **openDocumentPassword**
>
> Password supplied when opening the PDF document. This applies only while use security is true. Note: scripts may write this value, but cannot read it back.
> Object **properties**
>
> Object used to set several properties in one operation.

### Methods

> String **toSource**()
>
> Builds executable source text that returns the PDFPlacePreference.
> PDFPlacePreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Adds an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Removes the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type that was registered. |
| Mixed | handler | Event handler that was registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PDFProfileSelector

Color profile selector.

### Class

> _Read Only_
>
> Number `USE_NO_PROFILE` = 1851868240
>
> Applies no profile.
> _Read Only_
>
> Number `USE_MONITOR_PROFILE` = 1836008528
>
> Applies the monitor color profile.
> _Read Only_
>
> Number `USE_DOCUMENT` = 1967419235
>
> Applies the document CMYK profile.
> _Read Only_
>
> Number **WORKING** = 1466921579
>
> Applies the working CMYK profile.

## PDFRasterCompressionOptions

Options for PDF raster compression.

### Class

> _Read Only_
>
> Number `JPEG_COMPRESSION` = 1936878179
>
> Applies JPEG compression.
> _Read Only_
>
> Number `LOSSLESS_COMPRESSION` = 1936878691
>
> Uses the highest-quality compression type.
> _Read Only_
>
> Number `AUTOMATIC_COMPRESSION` = 1936875875
>
> Uses JPEG compression and selects the highest-quality type automatically.
