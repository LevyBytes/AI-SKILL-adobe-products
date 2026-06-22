# Print Booklet Option, Print Booklet Print Preference, Print Event, Print Form Behavior ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: PrintBookletOption; PrintBookletPrintPreference; PrintEvent; PrintFormBehavior; PrintFormBehaviors; PrintLayerOptions; PrintPageOrientation — Class.

## PrintBookletOption

PrintBookletOption contains options for booklet printing.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> true when this object's specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the PrintBookletOption, a Document.
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
> Mixed **pageRange**
>
> Pages selected for printing, supplied as an enumeration or string. Use a hyphen (-) between page numbers for a range. Use a comma (,) between noncontiguous pages. Can return: PageRange enumerator or String.
> BookletTypeOptions **bookletType**
>
> Booklet type.
> Measurement Unit (Number or String)=any **spaceBetweenPages**
>
> Space inserted between pages.
> Measurement Unit (Number or String)=any **bleedBetweenPages**
>
> Bleed amount between pages.
> Measurement Unit (Number or String)=any **creep**
>
> Added creep amount, the binding adjustment based on paper thickness.
> SignatureSizeOptions **signatureSize**
>
> Booklet signature size for perfect binding.
> Measurement Unit (Number or String)=any **topMargin**
>
> Printed booklet top margin.
> Measurement Unit (Number or String)=any **bottomMargin**
>
> Printed booklet bottom margin.
> Measurement Unit (Number or String)=any **leftMargin**
>
> Printed booklet left margin.
> Measurement Unit (Number or String)=any **rightMargin**
>
> Printed booklet right margin.
> Boolean **autoAdjustMargins**
>
> true automatically adjusts margins for the specified printer's marks and bleed area.
> Boolean **marginsUniformSize**
>
> true makes every margin match the top margin.
> Boolean **printBlankPrinterSpreads**
>
> true prints blank spreads.
> Object **properties**
>
> Allows several properties to be assigned together.

### Methods

> String **toSource**()
>
> Builds source text that returns the PrintBookletOption when executed.
> PrintBookletOption **getElements**()
>
> Resolves the object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PrintBookletPrintPreference

PrintBookletPrintPreference stores print preferences for booklet output.

### Instance

> _Read Only_
>
> Boolean **pdfPassthrough**
>
> true enables PDF passthrough behavior.
> _Read Only_
>
> String **printerList**
>
> Available printer names.
> _Read Only_
>
> String **ppdList**
>
> Available PPD names.
> _Read Only_
>
> String **paperSizeList**
>
> Available paper-size names.
> _Read Only_
>
> String **screeningList**
>
> Lists ink screenings supplied by the PPD. Restriction: color output must be separations or in rip separations.
> _Read Only_
>
> Boolean **isValid**
>
> true when this object's specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the PrintBookletPrintPreference, a Document.
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
> Mixed **printer**
>
> Current printer. Can return: Printer enumerator or String.
> Mixed **ppd**
>
> PPD selection, supplied as a PPD name or enumeration. Can return: PPDValues enumerator or String.
> File **printFile**
>
> PostScript output file. Note: Applies only when the current printer is defined as postscript file.
> Number **copies**
>
> Copy count for printing. Note: Not valid when printer is PostScript File.
> Boolean **collating**
>
> true collates the printed copies.
> Boolean **reverseOrder**
>
> true prints pages from last to first.
> Boolean **printNonprinting**
>
> true includes non-printing objects in output. Note: Applies only when trapping is off.
> Boolean **printBlankPages**
>
> true includes blank pages in output. Note: Applies only when trapping is off.
> Boolean **printGuidesGrids**
>
> true includes visible guides and baseline grids in output. Note: Applies only when trapping is off.
> Mixed **paperSize**
>
> Paper size, provided as a string or enumeration. The paper size list documents the names. Can return: PaperSizes enumerator or String.
> Mixed **paperHeight**
>
> Paper height. Can return: PaperSize enumerator or Unit. Restriction: paper size must be custom, or scale mode must be scale width height.
> Mixed **paperWidth**
>
> Paper width. Can return: PaperSize enumerator or Unit. Restriction: paper size must be custom, or scale mode must be scale width height.
> Measurement Unit (Number or String)=any **paperOffset**
>
> Offset distance from the left edge of the imageable area to the page.
> Measurement Unit (Number or String)=any **paperGap**
>
> Spacing between document pages on the print medium.
> Boolean **paperTransverse**
>
> true uses transverse orientation.
> PrintPageOrientation **printPageOrientation**
>
> Printed page orientation.
> PagePositions **pagePosition**
>
> Page placement on the printing medium. Note: Applies only when tile is false.
> ScaleModes **scaleMode**
>
> Page-scaling policy. Note: Applies only when printing from Layout view.
> Number **scaleWidth**
>
> Page width scaling percentage used during printing. (Range: 0 to 1000) Note: Applies only when scale mode is scale width height.
> Number **scaleHeight**
>
> Page height scaling percentage used during printing. (Range: 0 to 1000) Note: Applies only when scale mode is scale width height.
> Boolean **scaleProportional**
>
> true preserves scaling proportions and uses the latest scale width or scale height value for both dimensions. Note: Applies only when scale mode is scale width height.
> PrintLayerOptions **printLayers**
>
> Layers selected for printing.
> Boolean **allPrinterMarks**
>
> true prints every printer mark; false prints only selected printer marks.
> Boolean **cropMarks**
>
> Prints crop marks showing trim locations on the page.
> Boolean **bleedMarks**
>
> true prints bleed marks.
> Boolean **registrationMarks**
>
> true prints small targets outside the page area to align color separations.
> Boolean **colorBars**
>
> true adds small color squares for CMYK inks and 10% gray tint increments.
> Boolean **pageInformationMarks**
>
> true outputs page-information marks containing current date and time, filename, page number, and color separation name.
> Mixed **markType**
>
> Printer mark type. Supply an enum value or a custom marks file name. Can return: MarkTypes enumerator or String.
> MarkLineWeight **markLineWeight**
>
> Printer-mark stroke weight, in points.
> Measurement Unit (Number or String)=any **markOffset**
>
> Offset distance from the page edge to the page marks.
> Boolean **useDocumentBleedToPrint**
>
> true uses the document's configured bleed area.
> Measurement Unit (Number or String)=any **bleedTop**
>
> Top bleed area height. Restriction: useDocumentBleedToPrint must be true.
> Measurement Unit (Number or String)=any **bleedBottom**
>
> Bottom bleed area height. Restriction: useDocumentBleedToPrint must be true.
> Measurement Unit (Number or String)=any **bleedInside**
>
> Inside bleed area width. Restriction: useDocumentBleedToPrint must be true.
> Measurement Unit (Number or String)=any **bleedOutside**
>
> Outside bleed area width. Restriction: useDocumentBleedToPrint must be true.
> Boolean **bleedChain**
>
> true links all bleed settings to the latest bleed measurement; false lets bleed top, bleed bottom, bleed inside, and bleed outside use separate values.
> ColorOutputModes **colorOutput**
>
> Composite color output mode. Note: Not valid when a device-independent PPD is specified.
> Boolean **textAsBlack**
>
> true prints all text as black except text with color None or Paper, or with a color value equal to white. false prints colored text, such as blue hyperlinks, with halftone patterns. Note: Applies only when trapping is off.
> Trapping **trapping**
>
> Trapping type.
> Flip **flip**
>
> Direction used to flip the printed image.
> Boolean **negative**
>
> true prints the document as a negative.
> Mixed **screening**
>
> Composite gray output ink-screening settings for PostScript or PDF format. Can return: Screeening enumerator or String.
> Number **compositeAngle**
>
> Screen angle for composite printing. (Range: 0 to 360) Note: Applies only to PostScript or PDF files using custom screening.
> Number **compositeFrequency**
>
> Screen frequency for composite printing. (Range: 1 to 500) Note: Applies only to PostScript or PDF files using custom screening.
> Boolean **simulateOverprint**
>
> true models overprint behavior by converting spot colors with differing neutral density values into process colors for print output. Restriction: unavailable when color output is set to leave color profiles unchanged.
> Boolean **printCyan**
>
> true prints the cyan ink. Note: Applies only when trapping is off.
> Number **cyanAngle**
>
> Cyan ink angle override. (Range: 0 to 360)
> Number **cyanFrequency**
>
> Cyan ink frequency override. (Range: 1 to 500)
> Boolean **printMagenta**
>
> true prints the magenta ink. Note: Applies only when trapping is off.
> Number **magentaAngle**
>
> Magenta ink angle override. (Range: 0 to 360)
> Number **magentaFrequency**
>
> Magenta ink frequency override. (Range: 1 to 500)
> Boolean **printYellow**
>
> true prints the yellow ink. Note: Applies only when trapping is off.
> Number **yellowAngle**
>
> Yellow ink angle override. (Range: 0 to 360)
> Number **yellowFrequency**
>
> Yellow ink frequency override. (Range: 1 to 500)
> Boolean **printBlack**
>
> true prints the black ink. Note: Applies only when trapping is off.
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
> Controls font downloading to the printer.
> Boolean **downloadPPDFonts**
>
> true downloads every font from the selected PPD. Restriction: font downloading must be complete or subset.
> PostScriptLevels **postscriptLevel**
>
> Printer PostScript level.
> DataFormat **dataFormat**
>
> Image-data format sent to the printer.
> SourceSpaces **sourceSpace**
>
> Color management system source. Note: Applies only when use color management is true.
> Mixed **profile**
>
> Color profile. Can return: Profile enumerator or String.
> Mixed **crd**
>
> Color-rendering dictionary (CRD), supplied as a CRD name or enumeration value. Restriction: use color management must be true. Can return: ColorRenderingDictionary enumerator or String.
> RenderingIntent **intent**
>
> Rendering intent. Note: Applies only when use color management is true.
> Boolean **preserveColorNumbers**
>
> true preserves uncalibrated color numbers.
> Boolean **opiImageReplacement**
>
> true prints graphics that are stored as OPI comments in imported EPS files or linked through OPI comments. For details about linking files with OPI comments, see omit EPS, omit PDF, or omit bitmaps.
> Boolean **omitEPS**
>
> true substitutes OPI links for EPS images.
> Boolean **omitPDF**
>
> true substitutes OPI links for PDF images.
> Boolean **omitBitmaps**
>
> true substitutes OPI links for bitmap images.
> String **flattenerPresetName**
>
> Transparency flattener preset name.
> Boolean **ignoreSpreadOverrides**
>
> true ignores flattener spread overrides.
> Boolean **bitmapPrinting**
>
> true uses bitmap printing.
> Number **bitmapResolution**
>
> Bitmap printing resolution. (Range: 72 to 1200) Restriction: bitmapPrinting must be true.
> Mixed **activePrinterPreset**
>
> Current printer preset type. Can return: PrinterPresetTypes enumerator or PrinterPreset.
> Object **properties**
>
> Allows several properties to be assigned together.

### Methods

> String **toSource**()
>
> Builds source text that can be run to produce the PrintBookletPrintPreference.
> PrintBookletPrintPreference **getElements**()
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

## PrintEvent

Print event.

### Class

> _Read Only_
>
> String `BEFORE_PRINT` = beforePrint
>
> Sent before a PrintEvent is printed. This event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PRINT` = afterPrint
>
> Sent after a PrintEvent is printed. This event bubbles and cannot be canceled.

### Instance

> _Read Only_
>
> String **eventType**
>
> Event name.
> _Read Only_
>
> Object **target**
>
> Event target.
> _Read Only_
>
> Object **currentTarget**
>
> Current target for propagation.
> _Read Only_
>
> EventPhases **eventPhase**
>
> Current propagation phase.
> _Read Only_
>
> Boolean **bubbles**
>
> True means the event can use the bubbling propagation phase.
> _Read Only_
>
> Boolean **cancelable**
>
> True means the target's default event behavior can be canceled.
> _Read Only_
>
> Date **timeStamp**
>
> Time at which the event was initialized.
> _Read Only_
>
> Boolean **propagationStopped**
>
> True means propagation past the current target has stopped.
> _Read Only_
>
> Boolean **defaultPrevented**
>
> True means the target's default event behavior has been canceled.
> _Read Only_
>
> Number **id**
>
> Unique ID for the PrintEvent.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent of the PrintEvent (a Document).
> _Read Only_
>
> Number **index**
>
> Position of the PrintEvent inside its containing object.
> DocumentPrintUiOptions **documentPrintUiOption**
>
> Print document UI options.
> Object **properties**
>
> Lets several properties be assigned at once.

### Methods

> **stopPropagation**()
>
> Prevents propagation past the current target.
> **preventDefault**()
>
> Prevents the target's default event behavior.
> String **toSource**()
>
> Builds source text that can be run to produce the PrintEvent.
> PrintEvent **getElements**()
>
> Turns the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier text.

## PrintFormBehavior

Behavior object used to trigger document printing.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the PrintFormBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID for the PrintFormBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Containing object for the PrintFormBehavior (Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField).
> _Read Only_
>
> Number **index**
>
> Position of the PrintFormBehavior inside its containing object.
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
> Boolean **enableBehavior**
>
> True enables the behavior.
> BehaviorEvents **behaviorEvent**
>
> Event that starts the behavior.
> String **label**
>
> String-valued label property.
> Object **properties**
>
> Lets several properties be assigned at once.

### Methods

> **remove**()
>
> Removes the PrintFormBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Assigns the label to the value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Returns the label value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds source text that can be run to produce the PrintFormBehavior.
> PrintFormBehavior **getElements**()
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

## PrintFormBehaviors

Collection of print form behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Shows how many elements the PrintFormBehavior contains.
> PrintFormBehavior **add**( Object **withProperties** )
>
> Makes a new PrintFormBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new PrintFormBehavior. (Optional) |

> PrintFormBehavior **item**( Mixed **index** )
>
> Gets the PrintFormBehavior at the specified index or with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> PrintFormBehavior **itemByName**( String **name** )
>
> Gets the PrintFormBehavior with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> PrintFormBehavior **itemByID**( Number **id** )
>
> Gets the PrintFormBehavior with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> PrintFormBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PrintFormBehaviors inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | PrintFormBehavior, index, or name at the range start. Accepts: PrintFormBehavior, Long Integer or String. |
| Mixed | to | PrintFormBehavior, index, or name at the range end. Accepts: PrintFormBehavior, Long Integer or String. |

> PrintFormBehavior **firstItem**()
>
> Gets the first PrintFormBehavior in the collection.
> PrintFormBehavior **lastItem**()
>
> Gets the last PrintFormBehavior in the collection.
> PrintFormBehavior **middleItem**()
>
> Gets the middle PrintFormBehavior in the collection.
> PrintFormBehavior **previousItem**( PrintFormBehavior **obj** )
>
> Gets the PrintFormBehavior immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PrintFormBehavior | obj | Index of the PrintFormBehavior after the wanted PrintFormBehavior. |

> PrintFormBehavior **nextItem**( PrintFormBehavior **obj** )
>
> Gets the PrintFormBehavior immediately after the specified PrintFormBehavior in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PrintFormBehavior | obj | PrintFormBehavior whose index precedes the wanted PrintFormBehavior. |

> PrintFormBehavior **anyItem**()
>
> Gets any PrintFormBehavior in the collection.
> PrintFormBehavior **everyItem**()
>
> Gets every PrintFormBehavior in the collection.
> String **toSource**()
>
> Builds source text that can be run to produce the PrintFormBehavior.
> PrintFormBehavior **[]**( Number **index** )
>
> Gets the PrintFormBehavior at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## PrintLayerOptions

Print layer options.

### Class

> _Read Only_
>
> Number `ALL_LAYERS` = 1634495564
>
> Prints every layer.
> _Read Only_
>
> Number `VISIBLE_LAYERS` = 1986622284
>
> Prints every visible layer.
> _Read Only_
>
> Number `VISIBLE_PRINTABLE_LAYERS` = 1987080780
>
> Prints only layers that are visible and printable.

## PrintPageOrientation — Class

> _Read Only_
>
> Number **PORTRAIT** = 1751738216
>
> Portrait.
> _Read Only_
>
> Number **LANDSCAPE** = 2003395685
>
> Landscape.
> _Read Only_
>
> Number `REVERSE_PORTRAIT` = 1869771376
>
> Reverse portrait.
> _Read Only_
>
> Number `REVERSE_LANDSCAPE` = 1869771372
>
> Reverse landscape.
