# Spline Item (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box being resized. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Transform origin. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | Method used to change the current dimensions with the supplied values. |
| Mixed | values | Width and height values. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; where x and y are real numbers and coordinate space is used to determine _only_ the unit of length for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | False, when multiple page items are targeted, reaches the new dimensions by moving individual items instead of resizing them. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units instead of points. Defaults to false. It only affects reference points specified relative to a page. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box being resized. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the supplied coordinate space. |

> String **transformAgain**()
>
> Repeats on the SplineItem the most recent object transformation, including move, rotate, shear, scale, or flip operations.
> String **transformSequenceAgain**()
>
> Replays on the SplineItem the most recent transform-operation sequence from one object or from a simultaneous group operation; allowed operations are move, rotate, shear, scale, and flip.
> String **transformAgainIndividually**()
>
> Repeats on the SplineItem the most recent transformation performed on any SplineItem, including move, rotate, shear, scale, or flip operations.
> String **transformSequenceAgainIndividually**()
>
> Replays on the SplineItem the most recent transformation sequence from one object or from a simultaneous group operation; allowed operations are move, rotate, shear, scale, and flip.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a Plain Text QR Code for this page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Property object used to initialize the new SplineItem; it may include the parameters listed above. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a Hyperlink QR Code for this page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Property object used to initialize the new SplineItem; it may include the parameters listed above. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a Text Msg QR Code for this page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number for the QR code. (Optional) |
| String | textMessage | Text Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Property object used to initialize the new SplineItem; it may include the parameters listed above. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates an Email QR Code for this page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address for the QR code. (Optional) |
| String | subject | Email Subject for the QR code. (Optional) |
| String | body | Email Body Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Property object used to initialize the new SplineItem; it may include the parameters listed above. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a Business Card QR Code for this page item, or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | First Name value for the Business Card QR code. (Optional) |
| String | lastName | Last Name value for the Business Card QR code. (Optional) |
| String | jobTitle | Title value for the Business Card QR code. (Optional) |
| String | cellPhone | Cell Phone Number value for the Business Card QR code. (Optional) |
| String | phone | Phone Number value for the Business Card QR code. (Optional) |
| String | email | Email Address value for the Business Card QR code. (Optional) |
| String | organisation | Organisation value for the Business Card QR code. (Optional) |
| String | streetAddress | Street Address value for the Business Card QR code. (Optional) |
| String | city | City value for the Business Card QR code. (Optional) |
| String | adrState | State value for the Business Card QR code. (Optional) |
| String | country | Country value for the Business Card QR code. (Optional) |
| String | postalCode | Postal Code value for the Business Card QR code. (Optional) |
| String | website | URL value for the Business Card QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Property object used to initialize the new SplineItem; it may include the parameters listed above. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object or objects to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Format for export. Supply an enumeration value or an extension shown by the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | True displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment text for this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object or objects to a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Format for export. Supply an enumeration value or an extension shown by the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | True displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment text for this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Creates a duplicate object inside the destination page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items to place or load. |
| Boolean | linkPageItems | Whether pageItems are linked in the content placer; if true, it overrides the link stories value. (Optional) |
| Boolean | linkStories | Whether stories are linked in the content placer; applies only to a single story, and pageItem links are also created when more than one item is involved. (Optional) |
| Boolean | mapStyles | Whether styles are mapped in the content placer. (Optional) |
| Boolean | showingOptions | Whether the link options dialog is shown. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status for the SplineItem relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Produces a string that, when executed, returns the SplineItem.
> SplineItem **getElements**()
>
> Resolves the object specifier into object-reference array entries.
> String **toSpecifier**()
>
> Returns this specifier string.
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
> Deletes the event listener registration.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
