# Sound (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded into the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Sound; callers may pass the preceding arguments through this object. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Phone number encoded for the text-message QR code. (Optional) |
| String | textMessage | Message body encoded for the text-message QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Sound; callers may pass the preceding arguments through this object. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email address encoded into the QR code. (Optional) |
| String | subject | Email subject encoded into the QR code. (Optional) |
| String | body | Email body text encoded into the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Sound; callers may pass the preceding arguments through this object. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Business Card QR Code to the page item or loads it onto the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | First name for the Business Card QR code. (Optional) |
| String | lastName | Last name for the Business Card QR code. (Optional) |
| String | jobTitle | Title for the Business Card QR code. (Optional) |
| String | cellPhone | Cell phone number for the Business Card QR code. (Optional) |
| String | phone | Phone number for the Business Card QR code. (Optional) |
| String | email | Email address for the Business Card QR code. (Optional) |
| String | organisation | Organisation value for the Business Card QR code. (Optional) |
| String | streetAddress | Street address for the Business Card QR code. (Optional) |
| String | city | City value for the Business Card QR code. (Optional) |
| String | adrState | State value for the Business Card QR code. (Optional) |
| String | country | Country value for the Business Card QR code. (Optional) |
| String | postalCode | Postal code for the Business Card QR code. (Optional) |
| String | website | URL for the Business Card QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Sound; callers may pass the preceding arguments through this object. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object or objects out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export target format, given as an enumeration value or an extension listed by the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment text attached to this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous file export for the object or objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export target format, given as an enumeration value or an extension listed by the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment text attached to this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and inserts that duplicate into the destination page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item set supplied for placement or loading. |
| Boolean | linkPageItems | Controls whether pageItems are linked in content placer; a true value overrides link stories. (Optional) |
| Boolean | linkStories | Controls whether stories are linked in content placer; this applies only to a single story, while pageItem links are also made when multiple items are involved. (Optional) |
| Boolean | mapStyles | Controls whether content placer maps styles. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog is shown. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Lookup key. |

> String **toSource**()
>
> Builds source text that returns the Sound when run.
> Sound **getElements**()
>
> Resolves the object specifier and produces object-reference array entries.
> String **toSpecifier**()
>
> Reads back the object specifier.
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
