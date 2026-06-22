# Endnote Text Frame (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **insertLabel**( String **key**, String **value** )
>
> Sets the label to the value paired with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Stored value. |

> **placeXML**( XMLElement **using** )
>
> Places XML content into the specified object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose content should be placed. |

> **autoTag**()
>
> Tags either the object or its parent story by using default tags from XML preference.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML target element. |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place |
| Boolean | showingOptions | Whether the import options dialog is shown. (Optional) |
| Object | withProperties | Initial properties for objects produced by placement. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Overrides a master page item, creating a new object from it on the destination document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Removes the override from a master page item that was previously overridden.
> **detach**()
>
> Detaches an overridden master page item from the master-page source.
> **remove**()
>
> Removes the EndnoteTextFrame object.
> **fit**( FitOptions **given** )
>
> Applies a specified fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit choice applied. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip on the EndnoteTextFrame.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the EndnoteTextFrame. |
| Mixed | around | Point used as the EndnoteTextFrame flip center. Accepted forms: AnchorPoint enumerator or Array of 2 Units. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a copy of the EndnoteTextFrame at a specified location or by an offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Location of the new EndnoteTextFrame, specified as [x, y] coordinates. Accepted forms: Spread, Page, Layer, or Array of 2 Units. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset for the duplicate relative to the source EndnoteTextFrame. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the EndnoteTextFrame. Note: provide either the 'to' or 'by' parameter; when both are provided, only the to value is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New EndnoteTextFrame location in (x, y) format. Accepted forms: Spread, Page, Layer, or Array of 2 Units. (Optional) |
| Measurement Unit (Number or String)=any | by | Amount, in measurement units, used to move the EndnoteTextFrame relative to its current position, in (x, y) format. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies an object style that you specify.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | True clears existing EndnoteTextFrame attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | True clears EndnoteTextFrame attributes and formatting that are not defined in the object style. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> **clearTransformations**()
>
> Clears transformations from the EndnoteTextFrame, including shearing, fitting, flipping, rotation, and scaling.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use |
| Mixed | from | Temporary origin used during transformation. Accepted forms include AnchorPoint enumerator, CoordinateSpaces enumerators, BoundingBoxLimits enumerators, Array of 2 Reals, Array of Arrays of 2 Reals or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Accepts: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; supplying this optional parameter replaces the target's current transform components with new values. Without it, the given matrix is concatenated onto the target's existing transform, combining both effects. Accepts: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin with ruler units instead of points. Default: false. This matters only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Gets coordinates for the requested location in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepted forms include AnchorPoint enumerator, CoordinateSpaces enumerators, BoundingBoxLimits enumerators, Array of 2 Reals, Array of Arrays of 2 Reals or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units instead of points. Default: false. This matters only when the reference point is page-relative. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors left on the item. The default is \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Resize bounding box. Accepted forms: BoundingBoxLimits enumerator, CoordinateSpaces enumerator or Ordered array containing boundsKind:BoundingBoxLimits enumerator, coordinateSpace:CoordinateSpaces enumerator. |
| Mixed | from | Origin for the transform. Allowed specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepted forms include AnchorPoint enumerator, BoundingBoxLimits enumerators, CoordinateSpaces enumerators, Array of 2 Reals, Array of Arrays of 2 Reals or Long Integers. |
| ResizeMethods | by | How the provided values affect the current dimensions |
| Mixed | values | Dimensions supplied as width and height. Allowed dimension specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space only chooses the length unit for x and y; for the 'current dimensions times' resize method, coordinate space is ignored). Accepts: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | False, when multiple page items are targeted, makes the new dimensions happen only by moving individual items rather than resizing them. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units instead of points. Default: false. This matters only when the reference point is page-relative. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Resize bounding box. Accepted forms: CoordinateSpaces enumerator or Ordered array containing boundsKind:BoundingBoxLimits enumerator, coordinateSpace:CoordinateSpaces enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the given coordinate space |

> String **transformAgain**()
>
> Reapplies to the EndnoteTextFrame the most recent transformation used on any object. Included transformation kinds are flipping, moving, rotating, scaling, and shearing.
> String **transformSequenceAgain**()
>
> Reapplies to the EndnoteTextFrame the most recent transform sequence used on one object or used simultaneously on a group. Included transformation kinds are flipping, moving, rotating, scaling, and shearing.
> String **transformAgainIndividually**()
>
> Reapplies to the EndnoteTextFrame the most recent transformation used on an EndnoteTextFrame. Included transformation kinds are flipping, moving, rotating, scaling, and shearing.
> String **transformSequenceAgainIndividually**()
>
> Reapplies to the EndnoteTextFrame the most recent transformation sequence used on one object or used simultaneously on a group. Included transformation kinds are flipping, moving, rotating, scaling, and shearing.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code onto the item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial property values for the new EndnoteTextFrame. The preceding parameters may also be supplied as properties. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code onto the document or item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial property values for the new EndnoteTextFrame. The preceding parameters may also be supplied as properties. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Builds a Text Msg QR Code for the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text phone number encoded in the QR code. (Optional) |
| String | textMessage | Text message content encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Accepted types: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new EndnoteTextFrame; property-form input may include the same parameters. May be omitted. |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Builds an Email QR Code for the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email address encoded in the QR code. (Optional) |
| String | subject | Email subject encoded in the QR code. (Optional) |
| String | body | Email body message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Accepted types: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new EndnoteTextFrame; property-form input may include the same parameters. May be omitted. |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Builds a Business Card QR Code on the page item or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card first name for the QR code. (Optional) |
| String | lastName | Business Card last name for the QR code. (Optional) |
| String | jobTitle | Business Card title for the QR code. (Optional) |
| String | cellPhone | Business Card cell phone number for the QR code. (Optional) |
| String | phone | Business Card phone number for the QR code. (Optional) |
| String | email | Business Card email address for the QR code. (Optional) |
| String | organisation | Business Card organisation value for the QR code. (Optional) |
| String | streetAddress | Business Card street address for the QR code. (Optional) |
| String | city | Business Card city value for the QR code. (Optional) |
| String | adrState | Business Card state value for the QR code. (Optional) |
| String | country | Business Card country value for the QR code. (Optional) |
| String | postalCode | Business Card postal code for the QR code. (Optional) |
| String | website | Business Card URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Accepted types: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new EndnoteTextFrame; property-form input may include the same parameters. May be omitted. |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object(s) out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, supplied as an enumeration value or as an extension shown in the Save as type or Format menu in the Export dialog. Accepted types: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, forces saving of a version. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous export of the object(s) to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, supplied as an enumeration value or as an extension shown in the Save as type or Format menu in the Export dialog. Accepted types: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, forces saving of a version. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | How this EndnoteTextFrame should be selected relative to objects that are already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Builds source text that, when run, returns the EndnoteTextFrame.
> EndnoteTextFrame **getElements**()
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
| Mixed | handler | Event handler. Accepted types: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Accepted types: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
