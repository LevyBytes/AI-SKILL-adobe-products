# Wmf (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a Text Msg QR Code for the page item or document

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number value for the QR code (Optional) |
| String | textMessage | Text Message value for the QR code (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new WMF. Property-based input may include the parameters above (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates an Email QR Code for the page item or document

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address value for the QR code (Optional) |
| String | subject | Email Subject value for the QR code (Optional) |
| String | body | Email Body Message value for the QR code (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new WMF. Property-based input may include the parameters above (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item or loads it on the document's placegun

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card First Name value for the QR code (Optional) |
| String | lastName | Business Card Last Name value for the QR code (Optional) |
| String | jobTitle | Business Card Title value for the QR code (Optional) |
| String | cellPhone | Business Card Cell Phone Number value for the QR code (Optional) |
| String | phone | Business Card Phone Number value for the QR code (Optional) |
| String | email | Business Card Email Address value for the QR code (Optional) |
| String | organisation | Business Card Organisation value for the QR code (Optional) |
| String | streetAddress | Business Card Street Address value for the QR code (Optional) |
| String | city | Business Card City value for the QR code (Optional) |
| String | adrState | Business Card State value for the QR code (Optional) |
| String | country | Business Card Country value for the QR code (Optional) |
| String | postalCode | Business Card Postal Code value for the QR code (Optional) |
| String | website | Business Card URL value for the QR code (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new WMF. Property-based input may include the parameters above (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object(s) out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided either as an enumeration value or as an extension shown in the Export dialog's Save as type or Format menu. Accepted values: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment text recorded for this version. (Optional) |
| Boolean | forceSave | When true, a version is saved forcibly. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file as an asynchronous operation.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided either as an enumeration value or as an extension shown in the Export dialog's Save as type or Format menu. Accepted values: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment text recorded for this version. (Optional) |
| Boolean | forceSave | When true, a version is saved forcibly. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Creates an object duplicate, then inserts it into the destination PageItem.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item set to place or load |
| Boolean | linkPageItems | Controls linking of pageItems in content placer; when true, it overrides the link stories value (Optional) |
| Boolean | linkStories | Controls story linking in content placer; applies only for a single story, while pageItem links are also created when more than one item is present (Optional) |
| Boolean | mapStyles | Controls style mapping in content placer (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Sets the label to the value paired with the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to write. |
| String | value | Value to associate with the key. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the WMF into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the WMF. |
| Number | numberOfSides | Number of sides in the output polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Inset percentage used for the generated star shape. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Clears the WMF's transformation state, covering rotation, scaling, flipping, fitting, and shearing.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | WMF selection state relative to objects that are already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Gets the label value paired with the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Produces a string that, when executed, returns the WMF.
> WMF **getElements**()
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
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler for the event. Can accept: File or JavaScript Function. |
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
