# Svg (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a Text Msg QR Code for either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text-message phone number encoded in the QR code. (Optional) |
| String | textMessage | Message body encoded in the text QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used on the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property initialization for the new SVG; the preceding parameters may also be supplied as properties. |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates an Email QR Code for either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email address encoded in the QR code. (Optional) |
| String | subject | Email subject encoded in the QR code. (Optional) |
| String | body | Email body message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used on the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property initialization for the new SVG; the preceding parameters may also be supplied as properties. |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item or loads it onto the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | First name encoded in the Business Card QR code. (Optional) |
| String | lastName | Last name encoded in the Business Card QR code. (Optional) |
| String | jobTitle | Title encoded in the Business Card QR code. (Optional) |
| String | cellPhone | Cell-phone number encoded in the Business Card QR code. (Optional) |
| String | phone | Phone number encoded in the Business Card QR code. (Optional) |
| String | email | Email address encoded in the Business Card QR code. (Optional) |
| String | organisation | Organisation value encoded in the Business Card QR code. (Optional) |
| String | streetAddress | Street address encoded in the Business Card QR code. (Optional) |
| String | city | City value encoded in the Business Card QR code. (Optional) |
| String | adrState | State value encoded in the Business Card QR code. (Optional) |
| String | country | Country value encoded in the Business Card QR code. (Optional) |
| String | postalCode | Postal code encoded in the Business Card QR code. (Optional) |
| String | website | URL encoded in the Business Card QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used on the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property initialization for the new SVG; the preceding parameters may also be supplied as properties. |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object or objects to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Format for export, either an enumeration value or an extension shown in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | True shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object or objects to a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Format for export, either an enumeration value or an extension shown in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | True shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object, then places that copy within the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items to place or load. |
| Boolean | linkPageItems | Whether pageItems are linked in content placer; true overrides the link stories value. (Optional) |
| Boolean | linkStories | Whether stories are linked in content placer; applies only to a single story, while pageItem links are also created when more than one item is involved. (Optional) |
| Boolean | mapStyles | Whether styles are mapped in content placer. (Optional) |
| Boolean | showingOptions | Whether the link options dialog is shown. (Optional) |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Stores this object in the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that will receive the object. |
| Object | withProperties | Optional property initialization for the SVG being created. |

> **insertLabel**( String **key**, String **value** )
>
> Stores the value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to set. |
| String | value | Value to assign. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Converts the SVG into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the SVG. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Resulting polygon's star inset percentage. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Removes transformations from the SVG, including rotation, scaling, flipping, fitting, and shearing.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | How the SVG selection relates to objects that are already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value stored under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to query. |

> String **toSource**()
>
> Builds executable source text that would resolve back to the SVG.
> SVG **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Retrieves this object's specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Adds an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
