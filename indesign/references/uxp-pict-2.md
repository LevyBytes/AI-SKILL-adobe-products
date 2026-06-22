# Pict (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Text Msg to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number value for the QR code. (Optional) |
| String | textMessage | Text Message value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Output QR Code Graphic swatch. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial values for the new PICT; these arguments are also allowed in the property object. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Email to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address value for the QR code. (Optional) |
| String | subject | Email Subject value for the QR code. (Optional) |
| String | body | Email Body Message value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Output QR Code Graphic swatch. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial values for the new PICT; these arguments are also allowed in the property object. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Business Card to the page item or loads it on the document's placegun.

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
| Mixed | qrCodeSwatch | Output QR Code Graphic swatch. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial values for the new PICT; these arguments are also allowed in the property object. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, supplied as an enumeration value or as an extension shown in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | True displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | True forcibly saves a version. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Runs an asynchronous file export for the object(s).

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, supplied as an enumeration value or as an extension shown in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | True displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Duplicates an object and places it into the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or page items to place or load. |
| Boolean | linkPageItems | Whether pageItems are linked in content placer; true overrides link stories. (Optional) |
| Boolean | linkStories | Whether stories are linked in content placer; applies only to a single story, and pageItem links are also created when there is more than one item. (Optional) |
| Boolean | mapStyles | Whether styles are mapped in content placer. (Optional) |
| Boolean | showingOptions | Whether the link options dialog is displayed. (Optional) |

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
> Converts the PICT into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the PICT. |
| Number | numberOfSides | Polygon side count in the result. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Inset percent for star-shaped polygon output. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Clears PICT transformations, including fitting, rotation, flipping, shearing, and scaling.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the PICT relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Gets the label value paired with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to query. |

> String **toSource**()
>
> Generates a string that returns the PICT when executed.
> PICT **getElements**()
>
> Turns the object specifier into object-reference array entries.
> String **toSpecifier**()
>
> Returns the specifier string.
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
> Deletes the registered event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
