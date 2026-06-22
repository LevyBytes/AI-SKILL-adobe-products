# Button (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Button — Instance

> String **transformAgain**()
>
> Repeats on the Button the most recent transformation applied to any object. The transformation set covers moving, scaling, shearing, rotating, and flipping.
> String **transformSequenceAgain**()
>
> Repeats on the Button the most recent transform-operation sequence applied either to one object or simultaneously to a group of objects. The transformation set covers moving, scaling, shearing, rotating, and flipping.
> String **transformAgainIndividually**()
>
> Repeats on the Button the most recent transformation applied to any Button. The transformation set covers moving, scaling, shearing, rotating, and flipping.
> String **transformSequenceAgainIndividually**()
>
> Repeats on the Button the most recent transformation sequence applied either to one object or simultaneously to a group of objects. The transformation set covers moving, scaling, shearing, rotating, and flipping.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Initial values for the new Button. The listed parameters may also be passed through this property set. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Initial values for the new Button. The listed parameters may also be passed through this property set. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number for the QR code. (Optional) |
| String | textMessage | Text Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Initial values for the new Button. The listed parameters may also be passed through this property set. (Optional) |

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
| String | withProperties | Initial values for the new Button. The listed parameters may also be passed through this property set. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code for the page item, or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card QR Code first name value. (Optional) |
| String | lastName | Business Card QR Code last name value. (Optional) |
| String | jobTitle | Business Card QR Code title value. (Optional) |
| String | cellPhone | Business Card QR Code cell phone number. (Optional) |
| String | phone | Business Card QR Code phone number. (Optional) |
| String | email | Business Card QR Code email address. (Optional) |
| String | organisation | Business Card QR Code organisation value. (Optional) |
| String | streetAddress | Business Card QR Code street address. (Optional) |
| String | city | Business Card QR Code city value. (Optional) |
| String | adrState | Business Card QR Code state value. (Optional) |
| String | country | Business Card QR Code country value. (Optional) |
| String | postalCode | Business Card QR Code postal code. (Optional) |
| String | website | Business Card QR Code URL value. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Button; these arguments may also be supplied as property values. (Optional parameter) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object or objects into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Specifies the export format, either as an enumeration value or as an extension shown in Save as type or Format in the Export dialog. Accepts: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional parameter) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous export of the object or objects to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Specifies the export format, either as an enumeration value or as an extension shown in Save as type or Format in the Export dialog. Accepts: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional parameter) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and places it in the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items to place or load. |
| Boolean | linkPageItems | Controls whether pageItems are linked in content placer; when true, link stories is overridden. (Optional) |
| Boolean | linkStories | Controls whether stories are linked in content placer; applies only to a single story, while pageItem links are also made for multiple items. (Optional) |
| Boolean | mapStyles | Controls style mapping in content placer. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the Button relative to objects that were already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Fetches the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Produces a string that can be executed to recreate the Button reference.
> Button **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
