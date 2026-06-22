# Image (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a QR Code of type Text Msg for the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Phone number encoded for Text Msg. (Optional) |
| String | textMessage | Message body encoded for Text Msg. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property bag for the new Image; it may include the parameters listed above. |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a QR Code of type Email for the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address encoded for the QR code. (Optional) |
| String | subject | Email Subject encoded for the QR code. (Optional) |
| String | body | Email Body Message encoded for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property bag for the new Image; it may include the parameters listed above. |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item or loads it on the document's placegun.

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
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property bag for the new Image; it may include the parameters listed above. |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, supplied as an enumeration value or as an extension listed under Save as type or Format in the Export dialog. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | true displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment for this version. (Optional) |
| Boolean | forceSave | true forcibly saves a version. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, supplied as an enumeration value or as an extension listed under Save as type or Format in the Export dialog. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | true displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment for this version. (Optional) |
| Boolean | forceSave | Optional; true force-saves the version. |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Duplicates an object and places it into the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items to place or load. |
| Boolean | linkPageItems | Whether content placer links pageItems; true overrides the link stories value. (Optional) |
| Boolean | linkStories | Whether content placer links stories; applies only to a single story, while pageItem links are also created when more than one item is used. (Optional) |
| Boolean | mapStyles | Whether content placer maps styles. (Optional) |
| Boolean | showingOptions | Whether the link options dialog appears. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Sets the label to the value paired with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to use. |
| String | value | Value to store. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Converts the Image into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the Image. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Inset percentage for the polygon star. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Removes Image transformations such as rotate, scale, flip, fit, and shear.
> **select**( SelectionOptions **existingSelection** )
>
> Selects the object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status for the Image relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Gets the label value paired with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to query. |

> String **toSource**()
>
> Generates a string that, when executed, returns the Image.
> Image **getElements**()
>
> Turns the object specifier into an object-reference array.
> String **toSpecifier**()
>
> Returns the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Optional legacy captures flag. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Optional legacy captures flag. |
