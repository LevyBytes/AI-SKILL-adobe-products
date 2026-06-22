# Polygon (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Places the Polygon at another location. Note: Either the 'to' or 'by' parameter is required; when both are present, only the to value is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Polygon destination, formatted as (x, y). Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Relative movement amount for the Polygon, in measurement units and formatted as (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | When true, current Polygon attributes are cleared before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, Polygon attributes and formatting not defined in the object style are cleared. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> **clearTransformations**()
>
> Clears Polygon transformations such as rotate, scale, flip, fit, and shear operations.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Optional selector for transform components. Supplying it replaces those target components with new values; omitting it concatenates the given matrix with the target's current transform so the effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, ruler units rather than points interpret a ruler-based origin. Default: false. Applies only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Returns coordinates for the given location within the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | When true, ruler units rather than points interpret a ruler location. Default: false. Applies only when the reference point is page-relative. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors that remain on the item. The default is \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes page item size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Target bounding box for resizing. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin for the transform. Valid forms include: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the given values affect the current dimensions. |
| Mixed | values | Provides dimensions for width and height. Valid forms include: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space determines _only_ the unit of length for x and y. The 'current dimensions times' resize method ignores coordinate space. Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and multiple page items are targeted, individual items are moved to reach the new dimensions instead of being resized. (Optional) |
| Boolean | consideringRulerUnits | When true, ruler units rather than points interpret a ruler location. Default: false. Applies only when the reference point is page-relative. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Target bounding box for resizing. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the given coordinate space. |

> String **transformAgain**()
>
> Uses on the Polygon the latest transform previously applied to any object, including move, rotate, shear, scale, and flip operations.
> String **transformSequenceAgain**()
>
> Uses on the Polygon the latest ordered transform sequence from one object or a simultaneous group operation, including move, rotate, shear, scale, and flip operations.
> String **transformAgainIndividually**()
>
> Uses on the Polygon the latest transform previously applied to any Polygon, including move, rotate, shear, scale, and flip operations.
> String **transformSequenceAgainIndividually**()
>
> Uses on the Polygon the latest transform sequence from one object or a simultaneous group operation, including move, rotate, shear, scale, and flip operations.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the selected target.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | QR code Plain Text (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting properties for the new Polygon. The preceding parameters are also valid as properties. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the selected target or to the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | QR code Hyperlink URL (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting properties for the new Polygon. The preceding parameters are also valid as properties. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to a document or page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Phone number content for the QR code Text message. (Optional) |
| String | textMessage | Text message content stored in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Polygon; those earlier parameters may be provided through properties too. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to a document or page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email address content for the QR code. (Optional) |
| String | subject | Email subject content for the QR code. (Optional) |
| String | body | Email body message stored in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Polygon; those earlier parameters may be provided through properties too. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Builds a Business Card QR Code on the page item, or loads it onto the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | First name value for the QR code Business Card. (Optional) |
| String | lastName | Last name value for the QR code Business Card. (Optional) |
| String | jobTitle | Title value for the QR code Business Card. (Optional) |
| String | cellPhone | Cell phone number value for the QR code Business Card. (Optional) |
| String | phone | Phone number value for the QR code Business Card. (Optional) |
| String | email | Email address value for the QR code Business Card. (Optional) |
| String | organisation | Organisation value for the QR code Business Card. (Optional) |
| String | streetAddress | Street address value for the QR code Business Card. (Optional) |
| String | city | City value for the QR code Business Card. (Optional) |
| String | adrState | State value for the QR code Business Card. (Optional) |
| String | country | Country value for the QR code Business Card. (Optional) |
| String | postalCode | Postal code value for the QR code Business Card. (Optional) |
| String | website | URL value for the QR code Business Card. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Polygon; those earlier parameters may be provided through properties too. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Sends the object(s) out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export output format, provided either as an enumeration value or as an extension shown in the Export dialog's Save as type menu or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Export preset style to apply. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, the version is saved forcibly. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Sends the object(s) to a file through an asynchronous export.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export output format, provided either as an enumeration value or as an extension shown in the Export dialog's Save as type menu or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Export preset style to apply. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, the version is saved forcibly. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and inserts it into the destination page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | One or multiple page items to load or place. |
| Boolean | linkPageItems | Controls whether pageItems are linked in the content placer; true overrides the linkStories setting. (Optional) |
| Boolean | linkStories | Controls whether stories are linked in the content placer; this applies only to one story, and pageItem links are also made when more than one item is present. (Optional) |
| Boolean | mapStyles | Controls style mapping in the content placer. (Optional) |
| Boolean | showingOptions | Controls display of the link options dialog. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Makes the object selected.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state to use for the Polygon relative to objects that were already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Creates a string that, when executed, returns the Polygon.
> Polygon **getElements**()
>
> Resolves the object specifier and creates an array containing object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
