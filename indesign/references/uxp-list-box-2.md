# List Box (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## ListBox — Instance

> String **transformAgain**()
>
> Applies again to the ListBox the latest transform used on any object. The operation may move, rotate, shear, scale, or flip.
> String **transformSequenceAgain**()
>
> Runs again on the ListBox the latest transform sequence used on one object or simultaneously on a group. The sequence may move, rotate, shear, scale, or flip.
> String **transformAgainIndividually**()
>
> Applies again to this ListBox the latest transform used on any ListBox. The operation may move, rotate, shear, scale, or flip.
> String **transformSequenceAgainIndividually**()
>
> Runs again on this ListBox the latest transform sequence used on one object or simultaneously on a group. The sequence may move, rotate, shear, scale, or flip.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new ListBox. Property form is also allowed for the preceding parameters. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new ListBox. Property form is also allowed for the preceding parameters. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number for the QR code. (Optional) |
| String | textMessage | Text Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new ListBox. Property form is also allowed for the preceding parameters. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address for the QR code. (Optional) |
| String | subject | Email Subject for the QR code. (Optional) |
| String | body | Email Body Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new ListBox. Property form is also allowed for the preceding parameters. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Builds a Business Card QR Code for the page item, or places it on the document place gun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | First-name field for the Business Card QR Code. (Optional) |
| String | lastName | Last-name field for the Business Card QR Code. (Optional) |
| String | jobTitle | Title field for the Business Card QR Code. (Optional) |
| String | cellPhone | Cell-phone number field for the Business Card QR Code. (Optional) |
| String | phone | Phone-number field for the Business Card QR Code. (Optional) |
| String | email | Email-address field for the Business Card QR Code. (Optional) |
| String | organisation | Organisation field for the Business Card QR Code. (Optional) |
| String | streetAddress | Street-address field for the Business Card QR Code. (Optional) |
| String | city | City field for the Business Card QR Code. (Optional) |
| String | adrState | State field for the Business Card QR Code. (Optional) |
| String | country | Country field for the Business Card QR Code. (Optional) |
| String | postalCode | Postal-code field for the Business Card QR Code. (Optional) |
| String | website | URL field for the Business Card QR Code. (Optional) |
| Mixed | qrCodeSwatch | Can accept: Swatch or String. Used as the swatch for the created QR Code Graphic. (Optional) |
| String | withProperties | Initial property map for the new ListBox; it can carry values matching the preceding arguments. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object(s) out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given as either an enum value or a filename extension listed in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment text stored with this version. (Optional) |
| Boolean | forceSave | True forces version saving. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Sends the object(s) to a file through an asynchronous export.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given as either an enum value or a filename extension listed in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment text stored with this version. (Optional) |
| Boolean | forceSave | True forces version saving. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object, then puts the duplicate inside the destination PageItem.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items that should be placed or loaded. |
| Boolean | linkPageItems | Controls whether pageItems are linked in the content placer; true overrides the linkStories setting. (Optional) |
| Boolean | linkStories | Controls story linking in the content placer; it applies only to a single story, while pageItem links are also made when multiple items are present. (Optional) |
| Boolean | mapStyles | Controls style mapping in the content placer. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Makes this object part of the active selection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection handling for the ListBox relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Lookup key. |

> String **toSource**()
>
> Produces executable string text that recreates the ListBox when run.
> ListBox **getElements**()
>
> Resolves the object specifier and returns an array of object references.
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
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type that was registered. |
| Mixed | handler | Event handler that was registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
