# Eps Text (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## EPSText — Instance

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item, or loads it into the document's placegun.

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
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new EPSText; the listed parameters can be delivered through properties as well. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object(s) out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided either as an enumeration value or as an extension shown in the Save as type or Format menu in the Export dialog. Accepts: ExportFormat enumerator or String. |
| File | to | Destination path for the export file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Version comment text. (Optional) |
| Boolean | forceSave | When true, saving a version is forced. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous file export for the object(s).

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided either as an enumeration value or as an extension shown in the Save as type or Format menu in the Export dialog. Accepts: ExportFormat enumerator or String. |
| File | to | Destination path for the export file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Version comment text. (Optional) |
| Boolean | forceSave | When true, saving a version is forced. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and places the duplicate into the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items that should be placed or loaded. |
| Boolean | linkPageItems | Controls whether pageItems are linked in content placer; true overrides the link stories value. (Optional) |
| Boolean | linkStories | Controls story linking in content placer; this applies only to a single story, and pageItem links are also made when more than one item is involved. (Optional) |
| Boolean | mapStyles | Controls whether content placer maps styles. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the EPSText relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Produces a string that returns the EPSText when executed.
> EPSText **getElements**()
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
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
