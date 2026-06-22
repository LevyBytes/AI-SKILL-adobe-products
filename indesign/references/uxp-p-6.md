# Pdf Comments, Pdf Compression Type, Pdf Crop, Pdf Display Title Options ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: PDFComments; PDFCompressionType; PDFCrop; PdfDisplayTitleOptions; PDFExportPreference.

## PDFComments

Collection containing PDF comment objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Reports how many elements the PDFComment collection contains.
> PDFComment **item**( Mixed **index** )
>
> Fetches the PDFComment identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Can accept: Long Integer or String. |

> PDFComment **itemByName**( String **name** )
>
> Fetches the PDFComment that matches the provided name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> PDFComment **itemByID**( Number **id** )
>
> Fetches the PDFComment that matches the provided ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> PDFComment **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the PDFComments included between the supplied range endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting PDFComment, index, or name for the range. Can accept: PDFComment, Long Integer or String. |
| Mixed | to | Ending PDFComment, index, or name for the range. Can accept: PDFComment, Long Integer or String. |

> PDFComment **firstItem**()
>
> Fetches the collection's first PDFComment.
> PDFComment **lastItem**()
>
> Fetches the collection's final PDFComment.
> PDFComment **middleItem**()
>
> Fetches the PDFComment at the collection's midpoint.
> PDFComment **previousItem**( PDFComment **obj** )
>
> Fetches the PDFComment positioned immediately before the supplied PDFComment.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PDFComment | obj | PDFComment whose preceding item is requested. |

> PDFComment **nextItem**( PDFComment **obj** )
>
> Fetches the PDFComment positioned immediately after the supplied PDFComment.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PDFComment | obj | PDFComment whose following item is requested. |

> PDFComment **anyItem**()
>
> Fetches one PDFComment from the collection without specifying which one.
> PDFComment **everyItem**()
>
> Fetches all PDFComments in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the PDFComment.
> PDFComment **[]**( Number **index** )
>
> Fetches the PDFComment at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to resolve. |

## PDFCompressionType

PDF document object categories selected for compression.

### Class

> _Read Only_
>
> Number `COMPRESS_NONE` = 1131368047
>
> Applies no compression.
> _Read Only_
>
> Number `COMPRESS_STRUCTURE` = 1131369332
>
> Compresses just the objects tied to PDF structure.
> _Read Only_
>
> Number `COMPRESS_OBJECTS` = 1131368290
>
> Compresses every object.

## PDFCrop

Amount of the PDF document used during placement.

### Class

> _Read Only_
>
> Number `CROP_ART` = 1131573313
>
> Places only the region the PDF author marked as placeable artwork.
> _Read Only_
>
> Number `CROP_PDF` = 1131573328
>
> Places only the region shown by Acrobat.
> _Read Only_
>
> Number `CROP_TRIM` = 1131573332
>
> Places only the region corresponding to the document's final trim size.
> _Read Only_
>
> Number `CROP_BLEED` = 1131573314
>
> Places only the region representing clipped content.
> _Read Only_
>
> Number `CROP_MEDIA` = 1131573325
>
> Places the region corresponding to the source PDF document's physical paper size.
> _Read Only_
>
> Number `CROP_CONTENT_VISIBLE_LAYERS` = 1131566703
>
> Places the page bounding box calculated from visible layers only.
> _Read Only_
>
> Number `CROP_CONTENT_ALL_LAYERS` = 1131561324
>
> Places the page bounding box calculated from all layers.

## PdfDisplayTitleOptions

Options for the display title used during PDF export.

### Class

> _Read Only_
>
> Number `DISPLAY_FILE_NAME` = 1148413550
>
> Shows the file name.
> _Read Only_
>
> Number `DISPLAY_DOCUMENT_TITLE` = 1148413044
>
> Shows the document title.

## PDFExportPreference

Application-level settings used for PDF export.

### Instance

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
> Parent object for the PDFExportPreference, which is an Application.
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
> Mixed **pageRange**
>
> Pages selected for printing, provided as either an enumeration or a string. Use a hyphen (-) between page numbers for a range. Use a comma (,) between page numbers for noncontiguous pages. Can return: PageRange enumerator or String.
> Boolean **useSecurity**
>
> When true, security controls are enabled for the PDF document.
> String **openDocumentPassword**
>
> Password required to open the PDF document. Valid only while use security is true. Note: Scripts can set this value but cannot retrieve it.
> String **changeSecurityPassword**
>
> Replaces the open document password with the specified string. Valid only while use security is true. Note: Scripts can set this value but cannot retrieve it.
> Boolean **disallowPrinting**
>
> When true, PDF document printing is blocked. Valid only while use security is true.
> Boolean **disallowChanging**
>
> When true, the PDF document blocks form filling, signing, page extraction, and comment creation. Valid only while use security is true.
> Boolean **disallowCopying**
>
> When true, copying and pasting text, images, or other PDF document content is blocked. Valid only while use security is true.
> Boolean **disallowNotes**
>
> When true, the PDF document blocks note changes, text edits, and form-field entry. Valid only while use security is true.
> Boolean **disallowFormFillIn**
>
> When true, form field changes are blocked in the PDF document. Valid only while use security is true.
> Boolean **disallowExtractionForAccessibility**
>
> When true, assistive software tools for visually impaired users cannot extract PDF document content. Valid only while use security is true.
> Boolean **disallowDocumentAssembly**
>
> When true, inserting, deleting, and rotating PDF document pages are blocked. Valid only while use security is true.
> Boolean **disallowHiResPrinting**
>
> When true, high-resolution printing of the PDF document is blocked. Valid only while use security is true.
> Boolean **disallowPlaintextMetadata**
>
> With acrobat compatibility at Acrobat 6 or higher, true blocks storage systems and search engines from reading PDF document metadata. With acrobat compatibility at acrobat 5 or higher, true blocks copying and content extraction. Valid only while use security is true.
> Boolean **viewPDF**
>
> When true, the PDF file opens automatically after export completes.
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

> String **toSource**()
>
> Builds source text that evaluates back to the PDFExportPreference.
> PDFExportPreference **getElements**()
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
