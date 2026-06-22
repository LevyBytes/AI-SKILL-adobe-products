# Graphic Line (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box targeted for resizing. Accepts a CoordinateSpaces enumerator, a BoundingBoxLimits enumerator, or an ordered array with coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin point for the transform. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepted forms include Long Integers, BoundingBoxLimits enumerators, AnchorPoint enumerators, CoordinateSpaces enumerators, Array of Arrays of 2 Reals, an AnchorPoint enumerator, or an Array of 2 Reals. |
| ResizeMethods | by | How the supplied values alter the current dimensions. |
| Mixed | values | Width and height data. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, coordinate space supplies only their length unit, and the 'current dimensions times' resize method ignores coordinate space). Accepted values can be Array of Reals, ResizeConstraints enumerators, or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false with multiple targeted page items, the new dimensions are achieved by moving individual items instead of resizing them. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. Default value: false. This matters only when the reference point is page-relative. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box to reframe. Accepts a CoordinateSpaces enumerator or an ordered array with coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the supplied coordinate space. |

> String **transformAgain**()
>
> Runs the most recent object transformation again on the GraphicLine. The transform set includes moving, rotating, scaling, shearing, and flipping.
> String **transformSequenceAgain**()
>
> Runs the latest sequence of transform operations again on the GraphicLine; that prior sequence may have acted on one object or on a group at once. The transform set includes moving, rotating, scaling, shearing, and flipping.
> String **transformAgainIndividually**()
>
> Runs again on the GraphicLine the latest transformation previously applied to a GraphicLine. The transform set includes moving, rotating, scaling, shearing, and flipping.
> String **transformSequenceAgainIndividually**()
>
> Runs again on the GraphicLine the latest transform sequence previously applied to one object or to a group in a single operation. The transform set includes moving, rotating, scaling, shearing, and flipping.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code whose payload is Plain Text to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used on the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Property initializer for the new GraphicLine; these same parameter values can be provided through property entries. (Optional parameter) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code carrying a Hyperlink URL to the target page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used on the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Property initializer for the new GraphicLine; these same parameter values can be provided through property entries. (Optional parameter) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code containing Text Msg data to the target page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number value for the QR code. (Optional) |
| String | textMessage | Text Message value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used on the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Property initializer for the new GraphicLine; these same parameter values can be provided through property entries. (Optional parameter) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Builds a QR Code for Email data and attaches it to the target page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address value for the QR code. (Optional) |
| String | subject | Email Subject value for the QR code. (Optional) |
| String | body | Email Body Message value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used on the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Property initializer for the new GraphicLine; these same parameter values can be provided through property entries. (Optional parameter) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Builds a Business Card QR Code for the page item, or loads one into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card First Name value for the QR code. (Optional) |
| String | lastName | Business Card Last Name value for the QR code. (Optional) |
| String | jobTitle | Business Card Title value for the QR code. (Optional) |
| String | cellPhone | Business Card Cell Phone Number value for the QR code. (Optional) |
| String | phone | Business Card Phone Number value for the QR code. (Optional) |
| String | email | Business Card Email Address value for the QR code. (Optional) |
| String | organisation | Business Card Organisation value for the QR code. (Optional) |
| String | streetAddress | Business Card Street Address value for the QR code. (Optional) |
| String | city | Business Card City value for the QR code. (Optional) |
| String | adrState | Business Card State value for the QR code. (Optional) |
| String | country | Business Card Country value for the QR code. (Optional) |
| String | postalCode | Business Card Postal Code value for the QR code. (Optional) |
| String | website | Business Card URL value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used on the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Property initializer for the new GraphicLine; these same parameter values can be provided through property entries. (Optional parameter) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object(s) out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given as an enumeration value or as an extension shown in the Save as type or Format menu of the Export dialog. Accepts an ExportFormat enumerator or String. |
| File | to | Path for the exported file. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment text for this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional parameter) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file as an asynchronous task.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given as an enumeration value or as an extension shown in the Save as type or Format menu of the Export dialog. Accepts an ExportFormat enumerator or String. |
| File | to | Path for the exported file. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment text for this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional parameter) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Duplicates an object and places it in the page item used as the target.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page items, one or more, for placing or loading. |
| Boolean | linkPageItems | Whether content placer should link pageItems; true overrides the link stories value. (Optional) |
| Boolean | linkStories | Whether content placer should link stories; applies only to a single story, while pageItem links are also created when more than one item is present. (Optional) |
| Boolean | mapStyles | Whether content placer should map styles. (Optional) |
| Boolean | showingOptions | Whether the link options dialog is displayed. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Makes the object the current selection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the GraphicLine relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Returns the label value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Generates executable source text that returns the GraphicLine.
> GraphicLine **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Provides this object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler to invoke. Accepts File or JavaScript Function. |
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
