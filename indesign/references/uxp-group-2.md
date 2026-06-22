# Group (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Group — Instance

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Business Card QR Code to the page item or loads it on the document's placegun.

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
| Mixed | qrCodeSwatch | Uses this swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property values for initializing the new Group; these arguments are also valid property entries. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, either an enumeration value or an extension shown in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Export-file path. |
| Boolean | showingOptions | When true, the export options dialog is displayed. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, a version is forcibly saved. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, either an enumeration value or an extension shown in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Export-file path. |
| Boolean | showingOptions | When true, the export options dialog is displayed. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, a version is forcibly saved. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object, then puts that copy in the destination page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item set to place or load. |
| Boolean | linkPageItems | Whether content placer links pageItems; when true, it overrides linkStories. (Optional) |
| Boolean | linkStories | Whether content placer links stories; this applies only to a single story, while pageItem links are created when multiple items are involved. (Optional) |
| Boolean | mapStyles | Whether content placer maps styles. (Optional) |
| Boolean | showingOptions | Whether the link options dialog is shown. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects the object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Group selection status relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Retrieves the label value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a source string that returns the Group when executed.
> Group **getElements**()
>
> Turns the object specifier into an object-reference array.
> String **toSpecifier**()
>
> Returns this object's specifier string.
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
