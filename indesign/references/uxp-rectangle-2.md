# Rectangle (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Rectangle — Instance

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box targeted for resizing. Accepted forms: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin for the transform. Valid specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepted forms: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How current dimensions change in response to the supplied values. |
| Mixed | values | Width and height inputs. Valid dimension specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; where x and y are real numbers and coordinate space is used to determine _only_ the unit of length for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Accepted forms: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and several page items are targeted, individual items move to reach the new dimensions instead of being resized. (Optional) |
| Boolean | consideringRulerUnits | True makes a ruler location use ruler units rather than points; false is the default. This only matters for a page-relative reference point. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box targeted for resizing. Accepted forms: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the supplied coordinate space. |

> String **transformAgain**()
>
> Repeats on the Rectangle whichever transformation was most recently applied to any object. Covered kinds are move, rotate, shear, scale, and flip operations.
> String **transformSequenceAgain**()
>
> Repeats on the Rectangle the latest transform-operation sequence used on one object or simultaneously on a group of objects. Covered kinds are move, rotate, shear, scale, and flip operations.
> String **transformAgainIndividually**()
>
> Repeats on the Rectangle whichever transformation was most recently applied to a Rectangle. Covered kinds are move, rotate, shear, scale, and flip operations.
> String **transformSequenceAgainIndividually**()
>
> Repeats on the Rectangle the latest transformation sequence used on one object or simultaneously on a group of objects. Covered kinds are move, rotate, shear, scale, and flip operations.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Plain Text to the target page item for this call.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | QR code Plain Text (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Properties to apply when creating the Rectangle. You may also supply these parameters through properties. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Hyperlink to the target page item or document for this call.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | QR code Hyperlink URL (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Properties to apply when creating the Rectangle. You may also supply these parameters through properties. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Builds a Text Msg QR Code for the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text-phone number encoded in the QR code. (Optional) |
| String | textMessage | Text-message payload encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Rectangle; the same arguments may be supplied through the properties object. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email address stored in the QR code. (Optional) |
| String | subject | Email subject stored in the QR code. (Optional) |
| String | body | Email body text stored in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Rectangle; the same arguments may be supplied through the properties object. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item, or loads it into the document placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card first name for the QR code. (Optional) |
| String | lastName | Business Card last name for the QR code. (Optional) |
| String | jobTitle | Business Card title for the QR code. (Optional) |
| String | cellPhone | Business Card cell-phone number for the QR code. (Optional) |
| String | phone | Business Card phone number for the QR code. (Optional) |
| String | email | Business Card email address for the QR code. (Optional) |
| String | organisation | Business Card organisation for the QR code. (Optional) |
| String | streetAddress | Business Card street address for the QR code. (Optional) |
| String | city | Business Card city for the QR code. (Optional) |
| String | adrState | Business Card state for the QR code. (Optional) |
| String | country | Business Card country for the QR code. (Optional) |
| String | postalCode | Business Card postal code for the QR code. (Optional) |
| String | website | Business Card URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Rectangle; the same arguments may be supplied through the properties object. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object or objects out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Value for the export format; use either an enumeration value or an extension shown in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Export-file path. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, forces the version to be saved. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous export of the object or objects to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Value for the export format; use either an enumeration value or an extension shown in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Export-file path. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, forces the version to be saved. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Places a duplicated object inside the destination container.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | One or more page items supplied for placement or loading. |
| Boolean | linkPageItems | Controls whether pageItems are linked in the content placer; true overrides the linkStories setting. (Optional) |
| Boolean | linkStories | Controls story linking in the content placer; applies to a single story, while multiple items also create pageItem links. (Optional) |
| Boolean | mapStyles | Controls style mapping in the content placer. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the Rectangle relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Produces a string that, when executed, returns the Rectangle.
> Rectangle **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Reads the object specifier.
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
