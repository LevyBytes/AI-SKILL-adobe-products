# Eps (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds Text Msg QR Code data to either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number encoded in the QR code. (Optional) |
| String | textMessage | Text Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property seed values for the new EPS, including values otherwise provided through the listed arguments. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds Email QR Code data to either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address encoded in the QR code. (Optional) |
| String | subject | Email Subject encoded in the QR code. (Optional) |
| String | body | Email Body Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property seed values for the new EPS, including values otherwise provided through the listed arguments. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item or loads it into the document's placegun.

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
| String | withProperties | Property seed values for the new EPS, including values otherwise provided through the listed arguments. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object or objects into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given either as an enumeration value or as an extension shown in the Save as type or Format menu of the Export dialog. Can accept: ExportFormat enumerator or String. |
| File | to | Path of the export file. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment associated with this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous export of the object or objects to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given either as an enumeration value or as an extension shown in the Save as type or Format menu of the Export dialog. Can accept: ExportFormat enumerator or String. |
| File | to | Path of the export file. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment associated with this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Duplicates an object and places the duplicate inside the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items to place or load. |
| Boolean | linkPageItems | Controls whether pageItems are linked in content placer; when true, it overrides the link stories setting. (Optional) |
| Boolean | linkStories | Controls story linking in content placer; valid for a single story, while pageItem links are also made when more than one item is involved. (Optional) |
| Boolean | mapStyles | Controls whether content placer maps styles. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog is shown. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to store under. |
| String | value | Value to associate with the key. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the EPS into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the EPS. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Star inset percentage for the polygon result. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius assigned to the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Removes transformations from the EPS. Transformations cover rotation, scaling, flipping, fitting, and shearing.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection relationship between the EPS and objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Produces a string that, when executed, returns the EPS.
> EPS **getElements**()
>
> Resolves the object specifier and returns an array of object references.
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
| Mixed | handler | Event handler to call. Can accept: File or JavaScript Function. |
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
