# Multi State Object (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Business Card QR Code to the page item, or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card First Name value encoded in the QR code. (Optional) |
| String | lastName | Business Card Last Name value encoded in the QR code. (Optional) |
| String | jobTitle | Business Card Title value encoded in the QR code. (Optional) |
| String | cellPhone | Business Card Cell Phone Number value encoded in the QR code. (Optional) |
| String | phone | Business Card Phone Number value encoded in the QR code. (Optional) |
| String | email | Business Card Email Address value encoded in the QR code. (Optional) |
| String | organisation | Business Card Organisation value encoded in the QR code. (Optional) |
| String | streetAddress | Business Card Street Address value encoded in the QR code. (Optional) |
| String | city | Business Card City value encoded in the QR code. (Optional) |
| String | adrState | Business Card State value encoded in the QR code. (Optional) |
| String | country | Business Card Country value encoded in the QR code. (Optional) |
| String | postalCode | Business Card Postal Code value encoded in the QR code. (Optional) |
| String | website | Business Card URL value encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Generated QR Code Graphic uses this swatch. Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial property bag for the new MultiStateObject; it may include the same parameter values. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object(s) out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format to use; pass an ExportFormat enumerator or a String extension shown in the Save as type or Format menu in the Export dialog. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Version comment text. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous export of the object(s) to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format to use; pass an ExportFormat enumerator or a String extension shown in the Save as type or Format menu in the Export dialog. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Version comment text. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and places the copy into the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items to place or load. |
| Boolean | linkPageItems | Controls whether content placer links pageItems; when true, it overrides the linkStories setting. (Optional) |
| Boolean | linkStories | Controls whether content placer links stories; for more than one item, pageItem links are also created, and the setting applies only to a single story. (Optional) |
| Boolean | mapStyles | Controls whether content placer maps styles. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | How the MultiStateObject selection combines with objects selected earlier. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Builds a string that, when executed, returns the MultiStateObject.
> MultiStateObject **getElements**()
>
> Resolves the object specifier and produces an array of object references.
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
| Mixed | handler | Event handler to invoke. Can accept: File or JavaScript Function. |
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
