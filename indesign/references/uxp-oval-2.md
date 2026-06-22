# Oval (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Oval — Instance

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box that should be resized. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin for the transform. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | ResizeMethods choice controlling how the supplied values alter current dimensions |
| Mixed | values | Width and height input. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space supplies just their length unit; the 'current dimensions times' resize method does not use coordinate space). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false with multiple target page items, InDesign reaches the requested dimensions by moving individual items instead of resizing each item. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location is evaluated with ruler units rather than points. The default value is false. Only page-relative reference points use this setting. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Repositions the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box to adjust. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | New bounding-box opposing corners in the supplied coordinate space |

> String **transformAgain**()
>
> Reapplies to the Oval the most recent transformation made to any object. Transformations include moving, rotating, shearing, scaling, and flipping.
> String **transformSequenceAgain**()
>
> Replays on the Oval the latest transform-operation sequence from one object or a simultaneous group operation. Covered transformations are flipping, scaling, shearing, rotating, and moving.
> String **transformAgainIndividually**()
>
> Reapplies to the Oval the latest transformation made to any Oval. Transformations include moving, rotating, shearing, scaling, and flipping.
> String **transformSequenceAgainIndividually**()
>
> Runs again on the Oval the latest transform sequence from one object or a simultaneous group operation. Covered transformations are flipping, scaling, shearing, rotating, and moving.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to this page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text value encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | (Optional) Starting property values for the new Oval; the same arguments may be supplied through property values instead. |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Hyperlink QR Code on either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | (Optional) Starting property values for the new Oval; the same arguments may be supplied through property values instead. |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code; the target may be the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number encoded in the QR code. (Optional) |
| String | textMessage | Text Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | (Optional) Starting property values for the new Oval; the same arguments may be supplied through property values instead. |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address encoded in the QR code. (Optional) |
| String | subject | Email Subject encoded in the QR code. (Optional) |
| String | body | Email Body Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | (Optional) Starting property values for the new Oval; the same arguments may be supplied through property values instead. |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item, or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card First Name encoded in the QR code. (Optional) |
| String | lastName | Business Card Last Name encoded in the QR code. (Optional) |
| String | jobTitle | Business Card Title encoded in the QR code. (Optional) |
| String | cellPhone | Business Card Cell Phone Number encoded in the QR code. (Optional) |
| String | phone | Business Card Phone Number encoded in the QR code. (Optional) |
| String | email | Business Card Email Address encoded in the QR code. (Optional) |
| String | organisation | Business Card Organisation encoded in the QR code. (Optional) |
| String | streetAddress | Business Card Street Address encoded in the QR code. (Optional) |
| String | city | Business Card City encoded in the QR code. (Optional) |
| String | adrState | Business Card State encoded in the QR code. (Optional) |
| String | country | Business Card Country encoded in the QR code. (Optional) |
| String | postalCode | Business Card Postal Code encoded in the QR code. (Optional) |
| String | website | Business Card URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | (Optional) Starting property values for the new Oval; the same arguments may be supplied through property values instead. |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object or objects out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided as an enumeration value or as an extension shown by the Export dialog under Save as type or Format. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, the export options dialog is displayed. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Version comment text. (Optional) |
| Boolean | forceSave | (Optional) When true, a version save is forced. |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous export of the object or objects to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided as an enumeration value or as an extension shown by the Export dialog under Save as type or Format. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, the export options dialog is displayed. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Version comment text. (Optional) |
| Boolean | forceSave | (Optional) When true, a version save is forced. |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and places the duplicate into the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items to place or load |
| Boolean | linkPageItems | Controls linking for pageItems in the content placer; true takes precedence over the link stories value. (Optional) |
| Boolean | linkStories | Controls story linking in the content placer; applies only to one story, while pageItem links are also created when more than one item is involved. (Optional) |
| Boolean | mapStyles | Controls style mapping in the content placer. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | How the Oval selection relates to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Returns the label value tied to the given key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Builds a string that can be executed to return the Oval.
> Oval **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
| Mixed | handler | Event handler callback or file. Can accept: File or JavaScript Function. |
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
