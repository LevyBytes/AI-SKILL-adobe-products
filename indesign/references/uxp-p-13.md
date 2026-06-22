# Print Preference, Printer Preset Types, Printer Preset

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: PrintPreference — Instance; PrinterPresetTypes; PrinterPreset.

## PrintPreference — Instance

> _Read Only_
>
> Boolean **pdfPassthrough**
>
> PDF passthrough is active.
> _Read Only_
>
> String **printerList**
>
> Printers that are available.
> _Read Only_
>
> String **ppdList**
>
> PPDs that are available.
> _Read Only_
>
> String **paperSizeList**
>
> Available paper sizes.
> _Read Only_
>
> String **screeningList**
>
> Ink screenings listed in the PPD. Available for separations or in rip separations color output.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the PrintPreference (a Book or Document).
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listeners collection.
> Mixed **activePrinterPreset**
>
> Current printer preset type. Returns PrinterPresetTypes enumerator or PrinterPreset.
> Mixed **printer**
>
> Current printer. Returns Printer enumerator or String.
> Mixed **ppd**
>
> PPD specified by PPD name or enumeration. Returns PPDValues enumerator or String.
> File **printFile**
>
> PostScript file destination. Applies only when the current printer is defined as postscript file.
> Number **copies**
>
> Copy count for printing. Does not apply when printer is PostScript File.
> Boolean **collating**
>
> True collates the printed copies.
> Boolean **reverseOrder**
>
> True prints pages from last to first.
> Sequences **sequence**
>
> Page sequence to print.
> Boolean **printSpreads**
>
> True puts every spread's pages on one sheet. False outputs spread pages separately.
> Boolean **printMasterPages**
>
> True prints master pages.
> Boolean **printNonprinting**
>
> True prints non-printing objects. Applies only when trapping is off.
> Boolean **printBlankPages**
>
> True prints blank pages. Applies only when trapping is off.
> Boolean **printGuidesGrids**
>
> True prints visible guides and baseline grids. Applies only when trapping is off.
> Mixed **paperSize**
>
> Paper size, given as a string or an enumeration. For paper size names, see paper size list. Returns PaperSizes enumerator or String.
> Mixed **paperHeight**
>
> Paper height. Used with custom paper size or the scale width height scale mode. Returns PaperSize enumerator or Unit.
> Mixed **paperWidth**
>
> Paper width. Used with custom paper size or the scale width height scale mode. Returns PaperSize enumerator or Unit.
> Measurement Unit (Number or String)=any **paperOffset**
>
> Left-edge displacement between the page and the imageable area.
> Measurement Unit (Number or String)=any **paperGap**
>
> Space between document pages on the printing medium.
> Boolean **paperTransverse**
>
> True uses transverse orientation.
> PrintPageOrientation **printPageOrientation**
>
> Printed page orientation.
> PagePositions **pagePosition**
>
> Page position on the printing medium. Applies only when tile is false.
> ScaleModes **scaleMode**
>
> Page scaling policy. Applies only when printing from Layout view.
> Number **scaleWidth**
>
> Percentage used to scale page width during printing. (Range: 0 to 1000) Applies only when scale mode is scale width height.
> Number **scaleHeight**
>
> Percentage used to scale page height during printing. (Range: 0 to 1000) Applies only when scale mode is scale width height.
> Boolean **scaleProportional**
>
> True locks scaling proportions and uses the latest scale width or scale height value for both dimensions. Applies only when scale mode is scale width height.
> Boolean **thumbnails**
>
> True prints thumbnails. Applies only when trapping is off and tile is false.
> ThumbsPerPage **thumbnailsPerPage**
>
> Number of thumbnails on each page.
> Boolean **tile**
>
> True tiles pages.
> TilingTypes **tilingType**
>
> Tiling type. Applies only when tiling is true.
> Number **tilingOverlap**
>
> Amount of tiling overlap. Applies when tiling is true and the tiling type is anything except manual.
> Boolean **allPrinterMarks**
>
> True prints all printer marks. False prints only specified printer marks.
> Boolean **cropMarks**
>
> Prints crop marks showing where the page should be trimmed.
> Boolean **bleedMarks**
>
> True prints bleed marks.
> Boolean **registrationMarks**
>
> True prints small targets outside the page area to align color separations.
> Boolean **colorBars**
>
> True adds small color squares for the CMYK inks and gray tints in 10% increments.
> Boolean **pageInformationMarks**
>
> True adds the filename, page number, current date and time, and color separation name to the print.
> Mixed **markType**
>
> Printer mark type, supplied as an enum value or custom marks file name. Returns MarkTypes enumerator or String.
> MarkLineWeight **markLineWeight**
>
> Printer mark stroke weight in points.
> Measurement Unit (Number or String)=any **markOffset**
>
> Distance used to offset page marks from the page edge.
> Boolean **useDocumentBleedToPrint**
>
> True uses the document bleed area.
> Measurement Unit (Number or String)=any **bleedTop**
>
> Height of the bleed area at the page top. Requires use document bleed to print to be true.
> Measurement Unit (Number or String)=any **bleedBottom**
>
> Height of the bleed area at the page bottom. Requires use document bleed to print to be true.
> Measurement Unit (Number or String)=any **bleedInside**
>
> Width of the bleed area on the inside of the page. Requires use document bleed to print to be true.
> Measurement Unit (Number or String)=any **bleedOutside**
>
> Width of the bleed area on the outside of the page. Requires use document bleed to print to be true.
> Boolean **includeSlugToPrint**
>
> True includes the slug area in the printed document.
> ColorOutputModes **colorOutput**
>
> Color output mode for composites. Not valid when a device-independent PPD is specified.
> Boolean **textAsBlack**
>
> True prints all text as black unless it uses None, Paper, or a color value equal to white. False prints colored text, such as blue hyperlinks, in halftone patterns. Applies only when trapping is off.
> Trapping **trapping**
>
> Trapping type.
> Flip **flip**
>
> Direction used to flip the printed image.
> Boolean **negative**
>
> True prints the document as a negative.
> Mixed **screening**
>
> Ink screening settings for composite gray output in PostScript or PDF format. Returns Screeening enumerator or String.
> Number **compositeAngle**
>
> Screen angle for composite printing. (Range: 0 to 360) Applies only to PostScript or PDF files that use custom screening.
> Number **compositeFrequency**
>
> Screen frequency for composite printing. (Range: 1 to 500) Applies only to PostScript or PDF files that use custom screening.
> Boolean **simulateOverprint**
>
> True models spot-ink overprint effects for different neutral density values by converting spot colors to process colors during output. Unavailable if the color output mode leaves color profiles unchanged.
> Boolean **printCyan**
>
> True prints the cyan ink. Applies only when trapping is off.
> Number **cyanAngle**
>
> Cyan ink angle override. (Range: 0 to 360)
> Number **cyanFrequency**
>
> Cyan ink frequency override. (Range: 1 to 500)
> Boolean **printMagenta**
>
> True prints the magenta ink. Applies only when trapping is off.
> Number **magentaAngle**
>
> Magenta ink angle override. (Range: 0 to 360)
> Number **magentaFrequency**
>
> Magenta ink frequency override. (Range: 1 to 500)
> Boolean **printYellow**
>
> True prints the yellow ink. Applies only when trapping is off.
> Number **yellowAngle**
>
> Yellow ink angle override. (Range: 0 to 360)
> Number **yellowFrequency**
>
> Yellow ink frequency override. (Range: 1 to 500)
> Boolean **printBlack**
>
> True prints the black ink. Applies only when trapping is off.
> Number **blackAngle**
>
> Black ink angle override. (Range: 0 to 360)
> Number **blackFrequency**
>
> Black ink frequency override. (Range: 1 to 500)
> ImageDataTypes **sendImageData**
>
> Image data sent to the printer or file.
> FontDownloading **fontDownloading**
>
> Determines how fonts download to the printer.
> Boolean **downloadPPDFonts**
>
> True downloads all fonts listed in the selected PPD. Applies only when font downloading is complete or subset.
> PostScriptLevels **postscriptLevel**
>
> Printer PostScript level.
> DataFormat **dataFormat**
>
> Format used to send image data to the printer.
> SourceSpaces **sourceSpace**
>
> Color management system source. Applies only when use color management is true.
> Mixed **profile**
>
> Color profile. Returns Profile enumerator or String.
> Mixed **crd**
>
> Color-rendering dictionary (CRD), given as a CRD name or enumeration value. Applies only when use color management is true. Returns ColorRenderingDictionary enumerator or String.
> RenderingIntent **intent**
>
> Rendering intent. Applies only when use color management is true.
> Boolean **opiImageReplacement**
>
> True prints graphics stored as OPI comments in imported EPS files or linked with OPI comments. For linking files with OPI comments, see omit EPS, omit PDF, or omit bitmaps.
> Boolean **omitEPS**
>
> True replaces EPS images with OPI links.
> Boolean **omitPDF**
>
> True replaces PDF images with OPI links.
> Boolean **omitBitmaps**
>
> True replaces bitmap images with OPI links.
> String **flattenerPresetName**
>
> Transparency flattener preset name.
> Boolean **ignoreSpreadOverrides**
>
> True ignores flattener spread overrides.
> Mixed **pageRange**
>
> Pages to print, given as an enumeration or a string. Use a hyphen (-) between page numbers for a range. Use a comma (,) between separate pages. Returns PageRange enumerator or String.
> Boolean **bleedChain**
>
> True forces every bleed area setting to match by using the latest bleed measurement setting. False allows bleed top, bleed bottom, bleed inside, and bleed outside to use different measurements.
> Boolean **preserveColorNumbers**
>
> True preserves uncalibrated color numbers.
> Boolean **bitmapPrinting**
>
> True uses bitmap printing.
> Number **bitmapResolution**
>
> Bitmap printing resolution. (Range: 72 to 1200) Applies when bitmap printing is true.
> PrintLayerOptions **printLayers**
>
> Layers selected for printing.
> Object **properties**
>
> Lets several properties be assigned at once.

### Methods

> String **toSource**()
>
> Builds source text that can be run to produce the PrintPreference.
> PrintPreference **getElements**()
>
> Turns the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier text.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler value. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler value. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PrinterPresetTypes

Printer preset options.

### Class

> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Default printer preset.
> _Read Only_
>
> Number **CUSTOM** = 1131639917
>
> Custom printer preset.

## PrinterPreset

Preset containing the full set of print settings.

### Instance

> _Read Only_
>
> String **printerList**
>
> Printers that are available.
> _Read Only_
>
> String **ppdList**
>
> PPDs that are available.
> _Read Only_
>
> String **paperSizeList**
>
> Available paper sizes.
> _Read Only_
>
> String **screeningList**
>
> Ink screenings listed in the PPD. Available for separations or in rip separations color output.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent of the PrinterPreset (a Application).
> _Read Only_
>
> Number **index**
>
> Position of the PrinterPreset inside its containing object.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listeners collection.
> String **name**
>
> Name assigned to the PrinterPreset.
> Mixed **printer**
>
> Current printer. Returns Printer enumerator or String.
> Mixed **ppd**
>
> PPD specified by PPD name or enumeration. Returns PPDValues enumerator or String.
> File **printFile**
>
> PostScript file destination. Applies only when the current printer is defined as postscript file.
> Number **copies**
>
> Copy count for printing. Does not apply when printer is PostScript File.
> Boolean **collating**
>
> True collates the printed copies.
> Boolean **reverseOrder**
>
> True prints pages from last to first.
> Sequences **sequence**
>
> Page sequence to print.
> Boolean **printSpreads**
>
> True puts every spread's pages on one sheet. False outputs spread pages separately.
> Boolean **printMasterPages**
>
> True prints master pages.
> Boolean **printNonprinting**
>
> True prints non-printing objects. Applies only when trapping is off.
> Boolean **printBlankPages**
>
> True prints blank pages. Applies only when trapping is off.
> Boolean **printGuidesGrids**
>
> True prints visible guides and baseline grids. Applies only when trapping is off.
> Mixed **paperSize**
>
> Paper size, given as a string or an enumeration. For paper size names, see paper size list. Returns PaperSizes enumerator or String.
> Mixed **paperHeight**
>
> Paper height. Used with custom paper size or the scale width height scale mode. Returns PaperSize enumerator or Unit.
> Mixed **paperWidth**
>
> Paper width. Used with custom paper size or the scale width height scale mode. Returns PaperSize enumerator or Unit.
> Measurement Unit (Number or String)=any **paperOffset**
>
> Left-edge displacement between the page and the imageable area.
> Measurement Unit (Number or String)=any **paperGap**
>
> Space between document pages on the printing medium.
> Boolean **paperTransverse**
>
> True uses transverse orientation.
> PrintPageOrientation **printPageOrientation**
>
> Printed page orientation.
> PagePositions **pagePosition**
>
> Page position on the printing medium. Applies only when tile is false.
> ScaleModes **scaleMode**
>
> Page scaling policy. Applies only when printing from Layout view.
> Number **scaleWidth**
>
> Percentage used to scale page width during printing. (Range: 0 to 1000) Applies only when scale mode is scale width height.
> Number **scaleHeight**
>
> Percentage used to scale page height during printing. (Range: 0 to 1000) Applies only when scale mode is scale width height.
> Boolean **scaleProportional**
>
> True locks scaling proportions and uses the latest scale width or scale height value for both dimensions. Applies only when scale mode is scale width height.
> Boolean **thumbnails**
>
> True prints thumbnails. Applies only when trapping is off and tile is false.
> ThumbsPerPage **thumbnailsPerPage**
>
> Number of thumbnails on each page.
> Boolean **tile**
>
> True tiles pages.
> TilingTypes **tilingType**
>
> Tiling type. Applies only when tiling is true.
> Number **tilingOverlap**
>
> Amount of tiling overlap. Applies when tiling is true and the tiling type is anything except manual.
> Boolean **allPrinterMarks**
>
> True prints all printer marks. False prints only specified printer marks.
> Boolean **cropMarks**
>
> Prints crop marks showing where the page should be trimmed.
> Boolean **bleedMarks**
>
> True prints bleed marks.
> Boolean **registrationMarks**
>
> True prints small targets outside the page area to align color separations.
> Boolean **colorBars**
>
> True adds small color squares for the CMYK inks and gray tints in 10% increments.
> Boolean **pageInformationMarks**
>
> True adds the filename, page number, current date and time, and color separation name to the print.
> Mixed **markType**
>
> Printer mark type, supplied as an enum value or custom marks file name. Returns MarkTypes enumerator or String.
> MarkLineWeight **markLineWeight**
>
> Printer mark stroke weight in points.
> Measurement Unit (Number or String)=any **markOffset**
>
> Distance used to offset page marks from the page edge.
> Boolean **useDocumentBleedToPrint**
>
> True uses the document bleed area.
> Measurement Unit (Number or String)=any **bleedTop**
>
> Height of the bleed area at the page top. Requires use document bleed to print to be true.
> Measurement Unit (Number or String)=any **bleedBottom**
>
> Height of the bleed area at the page bottom. Requires use document bleed to print to be true.
> Measurement Unit (Number or String)=any **bleedInside**
>
> Width of the bleed area on the inside of the page. Requires use document bleed to print to be true.
> Measurement Unit (Number or String)=any **bleedOutside**
>
> Width of the bleed area on the outside of the page. Requires use document bleed to print to be true.
> Boolean **includeSlugToPrint**
>
> True includes the slug area in the printed document.
> ColorOutputModes **colorOutput**
>
> Color output mode for composites. Not valid when a device-independent PPD is specified.
> Boolean **textAsBlack**
>
> True prints all text as black unless it uses None, Paper, or a color value equal to white. False prints colored text, such as blue hyperlinks, in halftone patterns. Applies only when trapping is off.
> Trapping **trapping**
>
> Trapping type.
> Flip **flip**
>
> Direction used to flip the printed image.
> Boolean **negative**
>
> True prints the document as a negative.
> Mixed **screening**
>
> Ink screening settings for composite gray output in PostScript or PDF format. Returns Screeening enumerator or String.
> Number **compositeAngle**
>
> Screen angle for composite printing. (Range: 0 to 360) Applies only to PostScript or PDF files that use custom screening.
> Number **compositeFrequency**
>
> Screen frequency for composite printing. (Range: 1 to 500) Applies only to PostScript or PDF files that use custom screening.
> Boolean **simulateOverprint**
>
> True models spot-ink overprint effects for different neutral density values by converting spot colors to process colors during output. Unavailable if the color output mode leaves color profiles unchanged.
> Boolean **printCyan**
>
> True prints the cyan ink. Applies only when trapping is off.
> Number **cyanAngle**
>
> Cyan ink angle override. (Range: 0 to 360)
> Number **cyanFrequency**
>
> Cyan ink frequency override. (Range: 1 to 500)
> Boolean **printMagenta**
>
> True prints the magenta ink. Applies only when trapping is off.
> Number **magentaAngle**
>
> Magenta ink angle override. (Range: 0 to 360)
> Number **magentaFrequency**
>
> Magenta ink frequency override. (Range: 1 to 500)
> Boolean **printYellow**
>
> True prints the yellow ink. Applies only when trapping is off.
> Number **yellowAngle**
>
> Yellow ink angle override. (Range: 0 to 360)
> Number **yellowFrequency**
>
> Yellow ink frequency override. (Range: 1 to 500)
> Boolean **printBlack**
>
> True prints the black ink. Applies only when trapping is off.
> Number **blackAngle**
>
> Black ink angle override. (Range: 0 to 360)
> Number **blackFrequency**
>
> Black ink frequency override. (Range: 1 to 500)
> ImageDataTypes **sendImageData**
>
> Image data sent to the printer or file.
> FontDownloading **fontDownloading**
>
> Determines how fonts download to the printer.
> Boolean **downloadPPDFonts**
>
> True downloads all fonts listed in the selected PPD. Applies only when font downloading is complete or subset.
> PostScriptLevels **postscriptLevel**
>
> Printer PostScript level.
> DataFormat **dataFormat**
>
> Format used to send image data to the printer.
> SourceSpaces **sourceSpace**
>
> Color management system source. Applies only when use color management is true.
> Mixed **profile**
>
> Color profile. Returns Profile enumerator or String.
> Mixed **crd**
>
> Color-rendering dictionary (CRD), given as a CRD name or enumeration value. Applies only when use color management is true. Returns ColorRenderingDictionary enumerator or String.
> RenderingIntent **intent**
>
> Rendering intent. Applies only when use color management is true.
> Boolean **opiImageReplacement**
>
> True prints graphics stored as OPI comments in imported EPS files or linked with OPI comments. For linking files with OPI comments, see omit EPS, omit PDF, or omit bitmaps.
> Boolean **omitEPS**
>
> True replaces EPS images with OPI links.
> Boolean **omitPDF**
>
> True replaces PDF images with OPI links.
> Boolean **omitBitmaps**
>
> True replaces bitmap images with OPI links.
> String **flattenerPresetName**
>
> Transparency flattener preset name.
> Boolean **ignoreSpreadOverrides**
>
> True ignores flattener spread overrides.
> Boolean **bleedChain**
>
> True forces every bleed area setting to match by using the latest bleed measurement setting. False allows bleed top, bleed bottom, bleed inside, and bleed outside to use different measurements.
> Boolean **bitmapPrinting**
>
> True uses bitmap printing.
> Number **bitmapResolution**
>
> Bitmap printing resolution. (Range: 72 to 1200) Applies when bitmap printing is true.
> PrintLayerOptions **printLayers**
>
> Layers selected for printing.
> Object **properties**
>
> Lets several properties be assigned at once.

### Methods

> **remove**()
>
> Removes the PrinterPreset.
> PrinterPreset **duplicate**()
>
> Makes a duplicate of the PrinterPreset.
> String **toSource**()
>
> Builds source text that can be run to produce the PrinterPreset.
> PrinterPreset **getElements**()
>
> Turns the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier text.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler value. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler value. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
