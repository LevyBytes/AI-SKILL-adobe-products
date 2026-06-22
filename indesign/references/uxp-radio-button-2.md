# Radio Button (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item or loads it on the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | First Name value for the Business Card QR code. (Optional) |
| String | lastName | Last Name value for the Business Card QR code. (Optional) |
| String | jobTitle | Title value for the Business Card QR code. (Optional) |
| String | cellPhone | Cell Phone Number value for the Business Card QR code. (Optional) |
| String | phone | Phone Number value for the Business Card QR code. (Optional) |
| String | email | Email Address value for the Business Card QR code. (Optional) |
| String | organisation | Organisation value for the Business Card QR code. (Optional) |
| String | streetAddress | Street Address value for the Business Card QR code. (Optional) |
| String | city | City value for the Business Card QR code. (Optional) |
| String | adrState | State value for the Business Card QR code. (Optional) |
| String | country | Country value for the Business Card QR code. (Optional) |
| String | postalCode | Postal Code value for the Business Card QR code. (Optional) |
| String | website | URL value for the Business Card QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Initial property bundle for the new RadioButton; it may include the parameters listed above. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided as an enumeration value or as an extension shown in the Save as type or Format menu in the Export dialog. Accepts ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | True shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Version comment. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided as an enumeration value or as an extension shown in the Save as type or Format menu in the Export dialog. Accepts ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | True shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Version comment. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and inserts it in the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page items to place or load; one or more may be supplied. |
| Boolean | linkPageItems | Whether pageItems should be linked in content placer; true overrides the link stories value. (Optional) |
| Boolean | linkStories | Whether stories should be linked in content placer; applies only to a single story, and pageItem links are also created when there is more than one item. (Optional) |
| Boolean | mapStyles | Whether styles should be mapped in content placer. (Optional) |
| Boolean | showingOptions | Whether the link options dialog should be displayed. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Applies selection to this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state to apply to the RadioButton relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Lookup key. |

> String **toSource**()
>
> Builds source text that evaluates back to the RadioButton.
> RadioButton **getElements**()
>
> Resolves this object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Returns this object's specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type name. |
| Mixed | handler | Event handler value. Allowed values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type name. |
| Mixed | handler | Registered event handler value. Allowed values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
