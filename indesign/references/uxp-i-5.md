# Insertion Points, Integer Combobox, Integer Comboboxes, Integer Editbox ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: InsertionPoints; IntegerCombobox; IntegerComboboxes; IntegerEditbox; IntegerEditboxes; InteractiveElementsOptions; InteractivePDFExportPreference.

## InsertionPoints

Collection containing insertion points.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Shows the element count for the InsertionPoint collection.
> InsertionPoint **item**( Mixed **index** )
>
> Gets the InsertionPoint identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts Long Integer or String. |

> InsertionPoint **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the InsertionPoints inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting InsertionPoint, index, or name for the range. Accepts InsertionPoint, Long Integer or String. |
| Mixed | to | Ending InsertionPoint, index, or name for the range. Accepts InsertionPoint, Long Integer or String. |

> InsertionPoint **firstItem**()
>
> Gets the first InsertionPoint in the collection.
> InsertionPoint **lastItem**()
>
> Gets the last InsertionPoint in the collection.
> InsertionPoint **middleItem**()
>
> Gets the middle InsertionPoint in the collection.
> InsertionPoint **previousItem**( InsertionPoint **obj** )
>
> Gets the InsertionPoint whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| InsertionPoint | obj | InsertionPoint index that follows the desired InsertionPoint. |

> InsertionPoint **nextItem**( InsertionPoint **obj** )
>
> Gets the InsertionPoint whose index comes immediately after the specified InsertionPoint in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| InsertionPoint | obj | InsertionPoint whose index precedes the desired InsertionPoint. |

> InsertionPoint **anyItem**()
>
> Gets any InsertionPoint from the collection.
> InsertionPoint **everyItem**()
>
> Gets every InsertionPoint in the collection.
> String **toSource**()
>
> Produces a string that returns the InsertionPoint when executed.
> InsertionPoint **[]**( Number **index** )
>
> Gets the InsertionPoint at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## IntegerCombobox

Integer entry control with both a pop-up menu and an entry field. Note: values of .5 round up.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the IntegerCombobox.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the IntegerCombobox (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
> _Read Only_
>
> Number **index**
>
> Position of the IntegerCombobox inside its containing object.
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
> String **stringList**
>
> Array of strings used as menu items on a dropdown or combobox control.
> Number **minimumValue**
>
> Lowest value a user may enter in a numeric editbox or combobox. Note: for a measurement editbox or combobox, the value is treated as points no matter which edit units the control uses. When the dialog opens, the points value is automatically converted to the edit unit.
> Number **maximumValue**
>
> Highest value a user may enter in a numeric editbox or combobox. Note: for a measurement editbox or combobox, the value is treated as points no matter which edit units the control uses. When the dialog opens, the points value is automatically converted to the edit unit.
> Number **smallNudge**
>
> Increment or decrement applied when the selected control receives a keyboard arrow press.
> Number **largeNudge**
>
> Increment or decrement applied when the selected control receives a Shift plus keyboard arrow press.
> String **editContents**
>
> Default contents for the editbox control. Note: do not set both edit contents and edit value. If both are set, the later one in the script takes effect.
> Number **editValue**
>
> Real-number default for the editbox or combobox. Note: measurement controls treat the value as points, then convert that points value to edit units as the dialog opens. Note: do not set both edit value and edit contents. If both are set, the later one in the script takes effect.
> Number **minWidth**
>
> Control width. For an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Property used to set multiple properties together.

### Methods

> String **toSource**()
>
> Produces a string that returns the IntegerCombobox when executed.
> IntegerCombobox **getElements**()
>
> Resolves the object specifier into an array of object references.
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
| Mixed | handler | Event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## IntegerComboboxes

Collection containing integer comboboxes.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> IntegerCombobox **add**( Object **withProperties** )
>
> Creates an IntegerCombobox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new IntegerCombobox. (Optional) |

> Number **count**()
>
> Shows the element count for the IntegerCombobox collection.
> IntegerCombobox **item**( Mixed **index** )
>
> Gets the IntegerCombobox identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts Long Integer or String. |

> IntegerCombobox **itemByID**( Number **id** )
>
> Gets the IntegerCombobox identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> IntegerCombobox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the IntegerComboboxes inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting IntegerCombobox, index, or name for the range. Accepts IntegerCombobox, Long Integer or String. |
| Mixed | to | Ending IntegerCombobox, index, or name for the range. Accepts IntegerCombobox, Long Integer or String. |

> IntegerCombobox **firstItem**()
>
> Gets the first IntegerCombobox in the collection.
> IntegerCombobox **lastItem**()
>
> Gets the last IntegerCombobox in the collection.
> IntegerCombobox **middleItem**()
>
> Gets the middle IntegerCombobox in the collection.
> IntegerCombobox **previousItem**( IntegerCombobox **obj** )
>
> Gets the IntegerCombobox whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IntegerCombobox | obj | IntegerCombobox index that follows the desired IntegerCombobox. |

> IntegerCombobox **nextItem**( IntegerCombobox **obj** )
>
> Gets the IntegerCombobox whose index comes immediately after the specified IntegerCombobox in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IntegerCombobox | obj | IntegerCombobox whose index precedes the desired IntegerCombobox. |

> IntegerCombobox **anyItem**()
>
> Gets any IntegerCombobox from the collection.
> IntegerCombobox **everyItem**()
>
> Gets every IntegerCombobox in the collection.
> String **toSource**()
>
> Produces a string that returns the IntegerCombobox when executed.
> IntegerCombobox **[]**( Number **index** )
>
> Gets the IntegerCombobox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## IntegerEditbox

Numeric entry field that rounds to the nearest whole number. Note: values of .5 round up.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the IntegerEditbox.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the IntegerEditbox (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
> _Read Only_
>
> Number **index**
>
> Position of the IntegerEditbox inside its containing object.
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
> Number **minimumValue**
>
> Lowest value a user may enter in a numeric editbox or combobox. Note: for a measurement editbox or combobox, the value is treated as points no matter which edit units the control uses. When the dialog opens, the points value is automatically converted to the edit unit.
> Number **maximumValue**
>
> Highest value a user may enter in a numeric editbox or combobox. Note: for a measurement editbox or combobox, the value is treated as points no matter which edit units the control uses. When the dialog opens, the points value is automatically converted to the edit unit.
> Number **smallNudge**
>
> Increment or decrement applied when the selected control receives a keyboard arrow press.
> Number **largeNudge**
>
> Increment or decrement applied when the selected control receives a Shift plus keyboard arrow press.
> String **editContents**
>
> Default contents for the editbox control. Note: do not set both edit contents and edit value. If both are set, the later one in the script takes effect.
> Number **editValue**
>
> Real-number default for the editbox or combobox. Note: measurement controls treat the value as points, then convert that points value to edit units as the dialog opens. Note: do not set both edit value and edit contents. If both are set, the later one in the script takes effect.
> Number **minWidth**
>
> Control width. For an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Property used to set multiple properties together.

### Methods

> String **toSource**()
>
> Produces a string that returns the IntegerEditbox when executed.
> IntegerEditbox **getElements**()
>
> Resolves the object specifier into an array of object references.
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
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## IntegerEditboxes

Collection containing integer editboxes.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> IntegerEditbox **add**( Object **withProperties** )
>
> Creates an IntegerEditbox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new IntegerEditbox. (Optional) |

> Number **count**()
>
> Shows the element count for the IntegerEditbox collection.
> IntegerEditbox **item**( Mixed **index** )
>
> Gets the IntegerEditbox identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts Long Integer or String. |

> IntegerEditbox **itemByID**( Number **id** )
>
> Gets the IntegerEditbox identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> IntegerEditbox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the IntegerEditboxes inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting IntegerEditbox, index, or name for the range. Accepts IntegerEditbox, Long Integer or String. |
| Mixed | to | Ending IntegerEditbox, index, or name for the range. Accepts IntegerEditbox, Long Integer or String. |

> IntegerEditbox **firstItem**()
>
> Gets the first IntegerEditbox in the collection.
> IntegerEditbox **lastItem**()
>
> Gets the last IntegerEditbox in the collection.
> IntegerEditbox **middleItem**()
>
> Gets the middle IntegerEditbox in the collection.
> IntegerEditbox **previousItem**( IntegerEditbox **obj** )
>
> Gets the IntegerEditbox whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IntegerEditbox | obj | IntegerEditbox index that follows the desired IntegerEditbox. |

> IntegerEditbox **nextItem**( IntegerEditbox **obj** )
>
> Gets the IntegerEditbox whose index comes immediately after the specified IntegerEditbox in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IntegerEditbox | obj | IntegerEditbox whose index precedes the desired IntegerEditbox. |

> IntegerEditbox **anyItem**()
>
> Gets any IntegerEditbox from the collection.
> IntegerEditbox **everyItem**()
>
> Gets every IntegerEditbox in the collection.
> String **toSource**()
>
> Produces a string that returns the IntegerEditbox when executed.
> IntegerEditbox **[]**( Number **index** )
>
> Gets the IntegerEditbox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## InteractiveElementsOptions

Settings that control drawing of interactive elements.

### Class

> _Read Only_
>
> Number `DO_NOT_INCLUDE` = 1145981283
>
> Excludes interactive elements.
> _Read Only_
>
> Number `APPEARANCE_ONLY` = 1097887823
>
> Draws only the appearance of interactive elements.

## InteractivePDFExportPreference

Settings for exporting interactive PDF content from the application object.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for InteractivePDFExportPreference (a Application).
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
> PdfDisplayTitleOptions **pdfDisplayTitle**
>
> Display title setting for the exported PDF.
> String **defaultDocumentLanguage**
>
> Sets the exported PDF's default document language; provide the correct ISO language code.
> Boolean **exportAsSinglePages**
>
> Exports each page or spread to its own PDF file.
> String **singlePagesPDFSuffix**
>
> Suffix appended to each file name when pages export as separate PDF files.
> Mixed **pageRange**
>
> Pages to print, supplied either as an enumeration or as a string. For a string range, place a hyphen (-) between page numbers. For individual pages, separate page numbers with a comma (,). Returns PageRange enumerator or String.
> Boolean **exportReaderSpreads**
>
> When true, combines each exported spread into one page using the spread's original width.
> Boolean **viewPDF**
>
> When true, opens the PDF file automatically after export completes.
> Boolean **generateThumbnails**
>
> When true, creates thumbnail images for every page or spread.
> Boolean **exportLayers**
>
> When true, writes each layer as an Acrobat layer in the PDF document.
> Boolean **includeStructure**
>
> When true, creates a tagged PDF file. Note: with acrobat compatibility set to acrobat 6 or later, tags appear only when the PDF is opened in Acrobat 6 or later.
> PdfMagnificationOptions **pdfMagnification**
>
> Magnification options for the exported PDF.
> PageLayoutOptions **pdfPageLayout**
>
> Page layout for the exported PDF.
> Boolean **openInFullScreen**
>
> Opens the PDF in full screen mode.
> Boolean **flipPages**
>
> Flips pages automatically in the exported PDF.
> Number **flipPagesSpeed**
>
> Speed used when flipping pages.
> PageTransitionOverrideOptions **pageTransitionOverride**
>
> Page transition name applied to all pages.
> InteractivePDFInteractiveElementsOptions **interactivePDFInteractiveElementsOption**
>
> Controls drawing of interactive elements.
> PDFRasterCompressionOptions **pdfRasterCompression**
>
> Raster compression options for the PDF.
> PDFJPEGQualityOptions **pdfJPEGQuality**
>
> JPEG quality options for the PDF.
> Mixed **rasterResolution**
>
> Raster resolution. Returns RasterResolutionOptions enumerator or Long Integer (72 - 300).
> Boolean **usePDFStructureForTabOrder**
>
> Uses tagged PDF structure to determine tab order for interactive elements.
> Object **properties**
>
> Property used to set multiple properties together.

### Methods

> String **toSource**()
>
> Produces a string that returns the InteractivePDFExportPreference when executed.
> InteractivePDFExportPreference **getElements**()
>
> Resolves the object specifier into an array of object references.
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
| Mixed | handler | Event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
