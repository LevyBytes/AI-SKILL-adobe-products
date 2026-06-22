# Graphic (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> On the page item or document, builds a Text Msg QR Code.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Phone number for the Text QR code. (Optional) |
| String | textMessage | Message text for the Text QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Accepted values are Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Graphic; preceding parameters may be supplied as property entries. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> On the page item or document, builds an Email QR Code.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address encoded in the QR code. (Optional) |
| String | subject | Email Subject encoded in the QR code. (Optional) |
| String | body | Email Body Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Accepted values are Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Graphic; preceding parameters may be supplied as property entries. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Builds a Business Card QR Code on the page item or loads it onto the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card First Name for the QR code. (Optional) |
| String | lastName | Business Card Last Name for the QR code. (Optional) |
| String | jobTitle | Business Card Title for the QR code. (Optional) |
| String | cellPhone | Business Card Cell Phone Number for the QR code. (Optional) |
| String | phone | Business Card Phone Number for the QR code. (Optional) |
| String | email | Business Card Email Address for the QR code. (Optional) |
| String | organisation | Business Card Organisation for the QR code. (Optional) |
| String | streetAddress | Business Card Street Address for the QR code. (Optional) |
| String | city | Business Card City for the QR code. (Optional) |
| String | adrState | Business Card State for the QR code. (Optional) |
| String | country | Business Card Country for the QR code. (Optional) |
| String | postalCode | Business Card Postal Code for the QR code. (Optional) |
| String | website | Business Card URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Accepted values are Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Graphic; preceding parameters may be supplied as property entries. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object or objects out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format to use, either as an ExportFormat enumerator or a String extension shown in the Save as type or Format menu in the Export dialog. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment text attached to this version. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object or objects to a file in the background.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format to use, either as an ExportFormat enumerator or a String extension shown in the Save as type or Format menu in the Export dialog. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment text attached to this version. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and places the copy into the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items to place or load. |
| Boolean | linkPageItems | Controls whether pageItems are linked in the content placer; true overrides the link stories setting. (Optional) |
| Boolean | linkStories | Controls story linking in the content placer. It applies only to a single story; when more than one item is used, pageItem links are also created. (Optional) |
| Boolean | mapStyles | Controls style mapping in the content placer. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears. (Optional) |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Places the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the object. |
| Object | withProperties | Starting property values for the new Graphic. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns a label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key for the label entry. |
| String | value | Value stored for the label entry. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the Graphic into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape assigned to the Graphic. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Inset percentage applied when the resulting polygon is a star. (Optional; Range: 0.0 to 100.0) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius used for the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Removes transformations from the Graphic. Removable operations are rotate, scale, flip, fit, and shear transformations.
> **select**( SelectionOptions **existingSelection** )
>
> Selects the object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the Graphic relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value stored under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key for the label entry. |

> String **toSource**()
>
> Creates a string that, when executed, returns the Graphic.
> Graphic **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler, supplied as a File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
