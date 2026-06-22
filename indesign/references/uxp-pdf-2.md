# Pdf (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to either a document or page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | QR code Text Phone Number (Optional) |
| String | textMessage | QR code Text Message (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new PDF. You may also pass the parameters above through this properties object. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to either a document or page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | QR code Email Address (Optional) |
| String | subject | QR code Email Subject (Optional) |
| String | body | QR code Email Body Message (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new PDF. You may also pass the parameters above through this properties object. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Business Card QR Code to a page item, or loads it into the placegun for the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | QR code Business Card First Name (Optional) |
| String | lastName | QR code Business Card Last Name (Optional) |
| String | jobTitle | QR code Business Card Title (Optional) |
| String | cellPhone | QR code Business Card Cell Phone Number (Optional) |
| String | phone | QR code Business Card Phone Number (Optional) |
| String | email | QR code Business Card Email Address (Optional) |
| String | organisation | QR code Business Card Organisation (Optional) |
| String | streetAddress | QR code Business Card Street Address (Optional) |
| String | city | QR code Business Card City (Optional) |
| String | adrState | QR code Business Card State (Optional) |
| String | country | QR code Business Card Country (Optional) |
| String | postalCode | QR code Business Card Postal Code (Optional) |
| String | website | QR code Business Card URL (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new PDF. You may also pass the parameters above through this properties object. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object(s) out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, supplied either as an enumeration value or as an extension listed by the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Path to the export file. |
| Boolean | showingOptions | When true, displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Version comment. (Optional) |
| Boolean | forceSave | When true, forcibly saves a version. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object or objects to a file through an asynchronous export.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | The export format, provided either as an ExportFormat enumerator or as a String extension shown in the Export dialog's Save as type or Format menu. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Preset style applied for the export. (Optional) |
| String | versionComments | Text comment attached to this version. (Optional) |
| Boolean | forceSave | When true, a version save is forced. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and puts the duplicate into the destination PageItem.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page items supplied for loading or placement. |
| Boolean | linkPageItems | Controls whether pageItems are linked in the content placer; true takes precedence over the linkStories setting. (Optional) |
| Boolean | linkStories | Controls story linking in the content placer; it applies only to one story, while multiple items also create pageItem links. (Optional) |
| Boolean | mapStyles | Controls whether styles are mapped in the content placer. (Optional) |
| Boolean | showingOptions | Controls display of the link options dialog. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores value as the label entry for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label lookup key. |
| String | value | Label value to store. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the PDF into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | Shape to apply to the PDF. |
| Number | numberOfSides | Resulting polygon side count. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Star inset percentage for the polygon that is produced. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Radius used for corners on the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Removes the PDF's transformations, including rotation, scale changes, flips, fitting operations, and shearing.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the PDF relative to objects that were already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label lookup key. |

> String **toSource**()
>
> Builds a string that returns the PDF when evaluated.
> PDF **getElements**()
>
> Resolves the object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type that was registered. |
| Mixed | handler | Handler that was registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
