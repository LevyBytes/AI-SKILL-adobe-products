# Combo Box (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## ComboBox — Instance

> String **transformAgain**()
>
> Applies to the ComboBox the most recent transformation performed on any object. Covered transformations include moving, flipping, rotating, shearing, and scaling.
> String **transformSequenceAgain**()
>
> Reapplies to the ComboBox the latest transform-operation sequence run on one object or at the same time on a group of objects. Covered transformations include moving, flipping, rotating, shearing, and scaling.
> String **transformAgainIndividually**()
>
> Applies to the ComboBox the most recent transformation performed on any ComboBox. Covered transformations include moving, flipping, rotating, shearing, and scaling.
> String **transformSequenceAgainIndividually**()
>
> Reapplies to the ComboBox the latest transformation sequence run on one object or at the same time on a group of objects. Covered transformations include moving, flipping, rotating, shearing, and scaling.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional starting property values for the new ComboBox; property form may carry the parameters above. |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional starting property values for the new ComboBox; property form may carry the parameters above. |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number encoded in the QR code. (Optional) |
| String | textMessage | Text Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional starting property values for the new ComboBox; property form may carry the parameters above. |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address encoded in the QR code. (Optional) |
| String | subject | Email Subject encoded in the QR code. (Optional) |
| String | body | Email Body Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional starting property values for the new ComboBox; property form may carry the parameters above. |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item or loads it onto the document's placegun.

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
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional starting property values for the new ComboBox; property form may carry the parameters above. |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, supplied either as an enumeration value or as an extension visible in the Save as type or Format menu of the Export dialog. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the export file. |
| Boolean | showingOptions | True displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, supplied either as an enumeration value or as an extension visible in the Save as type or Format menu of the Export dialog. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the export file. |
| Boolean | showingOptions | True displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object, then places the duplicate in the destination page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item set to place or load. |
| Boolean | linkPageItems | Whether content placer links pageItems; if true, it overrides the link stories value. (Optional) |
| Boolean | linkStories | Whether content placer links stories; applies only to a single story, and pageItem links are also created when more than one item is present. (Optional) |
| Boolean | mapStyles | Whether content placer maps styles. (Optional) |
| Boolean | showingOptions | Whether the link options dialog is displayed. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects the object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the ComboBox relative to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Retrieves the label value paired with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Generates a string that, when executed, returns the ComboBox.
> ComboBox **getElements**()
>
> Resolves the object specifier, producing an object-reference array.
> String **toSpecifier**()
>
> Returns that specifier string.
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
