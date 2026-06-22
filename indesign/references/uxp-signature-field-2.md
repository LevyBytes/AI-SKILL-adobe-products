# Signature Field (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> String **transformAgain**()
>
> Applies to the SignatureField the most recent transformation used on any object, including translation, rotation, shear, scale, and flip changes.
> String **transformSequenceAgain**()
>
> Applies to the SignatureField the last transform-operation sequence used on one object or simultaneously on a group, including translation, rotation, shear, scale, and flip changes.
> String **transformAgainIndividually**()
>
> Applies to the SignatureField the latest transformation used on any SignatureField, including translation, rotation, shear, scale, and flip changes.
> String **transformSequenceAgainIndividually**()
>
> Applies to the SignatureField the last transformation sequence used on one object or simultaneously on a group, including translation, rotation, shear, scale, and flip changes.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code carrying plain text to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain text for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Coloring swatch for the QR Code graphic that is generated. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property values used when creating the new SignatureField; the preceding parameters may also be supplied as property assignments. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code hyperlink to a page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Coloring swatch for the QR Code graphic that is generated. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property values used when creating the new SignatureField; the preceding parameters may also be supplied as property assignments. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code text-message payload to a page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Phone number for the QR code text message. (Optional) |
| String | textMessage | Text message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Coloring swatch for the QR Code graphic that is generated. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property values used when creating the new SignatureField; the preceding parameters may also be supplied as property assignments. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code email payload to a page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email address for the QR code. (Optional) |
| String | subject | Email subject for the QR code. (Optional) |
| String | body | Email body message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Coloring swatch for the QR Code graphic that is generated. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property values used when creating the new SignatureField; the preceding parameters may also be supplied as property assignments. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a business-card QR Code to the page item, or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business-card first name for the QR code. (Optional) |
| String | lastName | Business-card last name for the QR code. (Optional) |
| String | jobTitle | Business-card title for the QR code. (Optional) |
| String | cellPhone | Business-card cell phone number for the QR code. (Optional) |
| String | phone | Business-card phone number for the QR code. (Optional) |
| String | email | Business-card email address for the QR code. (Optional) |
| String | organisation | Business-card organisation for the QR code. (Optional) |
| String | streetAddress | Business-card street address for the QR code. (Optional) |
| String | city | Business-card city for the QR code. (Optional) |
| String | adrState | Business-card state for the QR code. (Optional) |
| String | country | Business-card country for the QR code. (Optional) |
| String | postalCode | Business-card postal code for the QR code. (Optional) |
| String | website | Business-card URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Coloring swatch for the QR Code graphic that is generated. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property values used when creating the new SignatureField; the preceding parameters may also be supplied as property assignments. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the selected object data to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Use an ExportFormat enumerator or a String extension displayed in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the exported file. |
| Boolean | showingOptions | True displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Version comment. (Optional) |
| Boolean | forceSave | Set true for forced version saving. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous file export for the selected object data.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Use an ExportFormat enumerator or a String extension displayed in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Path for the exported file. |
| Boolean | showingOptions | True displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Version comment. (Optional) |
| Boolean | forceSave | Set true for forced version saving. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Duplicates an object and places it into the destination page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Input item or items to place or load. |
| Boolean | linkPageItems | Whether content placer links pageItems; if true, it overrides the link stories value. (Optional) |
| Boolean | linkStories | Whether content placer links stories; applies only to a single story, while pageItem links are also created when more than one item is present. (Optional) |
| Boolean | mapStyles | Whether content placer maps styles. (Optional) |
| Boolean | showingOptions | Whether the link options dialog is displayed. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Chooses this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | How this SignatureField joins or replaces objects that are already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Builds a string that returns the SignatureField when executed.
> SignatureField **getElements**()
>
> Converts the object specifier into an array of object references.
> String **toSpecifier**()
>
> Returns this object's specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
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
