# Text Box (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> String **transformAgain**()
>
> Uses on the TextBox the latest transform applied to any object. Supported operations: move, rotate, shear, scale, and flip.
> String **transformSequenceAgain**()
>
> Reuses on the TextBox the latest transform-operation sequence from one object, or from a group transformed together. Supported operations: move, rotate, shear, scale, and flip.
> String **transformAgainIndividually**()
>
> Uses on the TextBox the latest transform applied to any TextBox. Supported operations: move, rotate, shear, scale, and flip.
> String **transformSequenceAgainIndividually**()
>
> Reuses on the TextBox the latest transform sequence from one object, or from a group transformed together. Supported operations: move, rotate, shear, scale, and flip.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Generated QR Code Graphic receives this swatch. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property initializer for the new TextBox; these parameters may be included there too. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Generated QR Code Graphic receives this swatch. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property initializer for the new TextBox; these parameters may be included there too. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number for the QR code. (Optional) |
| String | textMessage | Text Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Generated QR Code Graphic receives this swatch. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property initializer for the new TextBox; these parameters may be included there too. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address for the QR code. (Optional) |
| String | subject | Email Subject for the QR code. (Optional) |
| String | body | Email Body Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Generated QR Code Graphic receives this swatch. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property initializer for the new TextBox; these parameters may be included there too. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Business Card QR Code to the page item, or loads it on the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card First Name for the QR code. (Optional) |
| String | lastName | Business Card Last Name for the QR code. (Optional) |
| String | jobTitle | Business Card Title for the QR code. (Optional) |
| String | cellPhone | Business Card Cell Phone Number for the QR code. (Optional) |
| String | phone | Business Card Phone Number for the QR code. (Optional) |
| String | email | Business Card Email Address for the QR code. (Optional) |
| String | organisation | Business Card Organisation for the QR code. (Optional) |
| String | streetAddress | Business Card Street Address for the QR code. (Optional) |
| String | city | Business Card City for the QR code. (Optional) |
| String | adrState | Business Card State for the QR code. (Optional) |
| String | country | Business Card Country for the QR code. (Optional) |
| String | postalCode | Business Card Postal Code for the QR code. (Optional) |
| String | website | Business Card URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Generated QR Code Graphic receives this swatch. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property initializer for the new TextBox; these parameters may be included there too. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Supply an ExportFormat enumerator, or a String extension listed by the Export dialog under Save as type or Format. |
| File | to | Export file path. |
| Boolean | showingOptions | When true, the export options dialog is displayed. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment text for this version. (Optional) |
| Boolean | forceSave | When true, a version is forcibly saved. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Supply an ExportFormat enumerator, or a String extension listed by the Export dialog under Save as type or Format. |
| File | to | Export file path. |
| Boolean | showingOptions | When true, the export options dialog is displayed. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment text for this version. (Optional) |
| Boolean | forceSave | When true, a version is forcibly saved. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Clones an object into the destination PageItem.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Items to place or load; accepts one or more page items. |
| Boolean | linkPageItems | Controls whether pageItems are linked in the content placer; true overrides the link stories value. (Optional) |
| Boolean | linkStories | Controls story linking in the content placer; it applies to a single story, and pageItem links are also created when multiple items are involved. (Optional) |
| Boolean | mapStyles | Controls style mapping in the content placer. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Chooses this object as the active selection target.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Sets how this TextBox selection is combined with objects that were already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Lookup key. |

> String **toSource**()
>
> Builds source text that evaluates back to the TextBox.
> TextBox **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
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
