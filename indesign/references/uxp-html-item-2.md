# Html Item (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## HtmlItem — Instance

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a QR Code of type Text Msg for the page item or document

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number value for the QR code (Optional) |
| String | textMessage | Text Message value for the QR code (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new HtmlItem; this property map can include the preceding parameters (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a QR Code of type Email for the page item or document

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address value for the QR code (Optional) |
| String | subject | Email Subject value for the QR code (Optional) |
| String | body | Email Body Message value for the QR code (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new HtmlItem; this property map can include the preceding parameters (Optional) |

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
| String | withProperties | Starting property values for the new HtmlItem; this property map can include the preceding parameters (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object or objects out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided either by enumeration value or by an extension from the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | When true, the export options dialog is displayed. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, a version is forcibly saved. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object or objects to a file in the background.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, provided either by enumeration value or by an extension from the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | When true, the export options dialog is displayed. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, a version is forcibly saved. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and places that copy into the destination page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items to place or load |
| Boolean | linkPageItems | Controls whether pageItems are linked in content placer; if true, it overrides the link stories value (Optional) |
| Boolean | linkStories | Controls whether stories are linked in content placer; applies only to a single story, though pageItem links are also created when more than one item is involved (Optional) |
| Boolean | mapStyles | Controls whether content placer maps styles (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog is shown (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the HtmlItem relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the provided key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Builds a string that can be executed to return the HtmlItem.
> HtmlItem **getElements**()
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
