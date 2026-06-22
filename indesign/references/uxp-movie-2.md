# Movie (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Movie — Instance

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR code for Hyperlink data to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Accepted forms: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Movie; the preceding parameters may be supplied through this object too. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR code for Text Msg data to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number content for the QR code. (Optional) |
| String | textMessage | Text Message content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Accepted forms: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Movie; the preceding parameters may be supplied through this object too. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR code for Email data to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address content for the QR code. (Optional) |
| String | subject | Email Subject content for the QR code. (Optional) |
| String | body | Email Body Message content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Accepted forms: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Movie; the preceding parameters may be supplied through this object too. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Business Card QR Code on the page item, or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card First Name content for the QR code. (Optional) |
| String | lastName | Business Card Last Name content for the QR code. (Optional) |
| String | jobTitle | Business Card Title content for the QR code. (Optional) |
| String | cellPhone | Business Card Cell Phone Number content for the QR code. (Optional) |
| String | phone | Business Card Phone Number content for the QR code. (Optional) |
| String | email | Business Card Email Address content for the QR code. (Optional) |
| String | organisation | Business Card Organisation content for the QR code. (Optional) |
| String | streetAddress | Business Card Street Address content for the QR code. (Optional) |
| String | city | Business Card City content for the QR code. (Optional) |
| String | adrState | Business Card State content for the QR code. (Optional) |
| String | country | Business Card Country content for the QR code. (Optional) |
| String | postalCode | Business Card Postal Code content for the QR code. (Optional) |
| String | website | Business Card URL content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Accepted forms: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Movie; the preceding parameters may be supplied through this object too. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object or objects out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Chooses the export format, either by enumeration value or by an extension shown in Save as type or Format in the Export dialog. Accepted forms: ExportFormat enumerator or String. |
| File | to | Specifies the export file path. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Selects the export style. (Optional) |
| String | versionComments | Supplies the version comment. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous file export for the object or objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Chooses the export format, either by enumeration value or by an extension shown in Save as type or Format in the Export dialog. Accepted forms: ExportFormat enumerator or String. |
| File | to | Specifies the export file path. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Selects the export style. (Optional) |
| String | versionComments | Supplies the version comment. (Optional) |
| Boolean | forceSave | When true, saves a version forcibly. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and places the duplicate into the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Provides one or more page items to place or load. |
| Boolean | linkPageItems | Controls whether pageItems are linked in content placer; true overrides the link stories setting. (Optional) |
| Boolean | linkStories | Controls whether stories are linked in content placer; it applies only to a single story, and pageItem links are also produced when more than one item is present. (Optional) |
| Boolean | mapStyles | Controls style mapping in content placer. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears. (Optional) |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Specifies the key. |

> String **toSource**()
>
> Produces a string that can be executed to recreate the Movie.
> Movie **getElements**()
>
> Resolves the object specifier and returns object references as an array.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the event type. |
| Mixed | handler | Provides the event handler. Accepted forms: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Identifies the registered event type. |
| Mixed | handler | Provides the registered event handler. Accepted forms: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
