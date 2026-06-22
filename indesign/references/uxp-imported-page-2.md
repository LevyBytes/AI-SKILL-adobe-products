# Imported Page (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Text Msg for this target or a document context.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number encoded in the QR code. (Optional) |
| String | textMessage | Text Message payload for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Color swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | New ImportedPage setup values; property arguments may include the parameters above. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Email for this target or a document context.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address encoded in the QR code. (Optional) |
| String | subject | Email Subject encoded in the QR code. (Optional) |
| String | body | Email Body Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Color swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | New ImportedPage setup values; property arguments may include the parameters above. (Optional) |

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Business Card to the page item, or sends it into the document placegun queue.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card first-name value for the QR code. (Optional) |
| String | lastName | Business Card last-name value for the QR code. (Optional) |
| String | jobTitle | Business Card title value for the QR code. (Optional) |
| String | cellPhone | Business Card cell-phone number for the QR code. (Optional) |
| String | phone | Business Card phone number for the QR code. (Optional) |
| String | email | Business Card email address for the QR code. (Optional) |
| String | organisation | Business Card organisation value for the QR code. (Optional) |
| String | streetAddress | Business Card street address for the QR code. (Optional) |
| String | city | Business Card city value for the QR code. (Optional) |
| String | adrState | Business Card state value for the QR code. (Optional) |
| String | country | Business Card country value for the QR code. (Optional) |
| String | postalCode | Business Card postal code for the QR code. (Optional) |
| String | website | Business Card URL value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Color swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | New ImportedPage setup values; property arguments may include the parameters above. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format supplied as an enumeration value or as an extension shown by the Export dialog under Save as type or Format. Can accept: ExportFormat enumerator or String. |
| File | to | Path to the export file. |
| Boolean | showingOptions | When true, displays the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment for this version. (Optional) |
| Boolean | forceSave | When true, forcibly saves a version. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file in the background.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, supplied as an ExportFormat enumerator or as a String file extension listed by the Export dialog under Save as type or Format. Can accept: ExportFormat enumerator or String. |
| File | to | File path for the exported output. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment text stored for this version. (Optional) |
| Boolean | forceSave | When true, saves a version by force. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object and puts the duplicate on the destination PageItem.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page items supplied for placement or loading. |
| Boolean | linkPageItems | Controls whether pageItems are linked in content placer; when true, this overrides linkStories. (Optional) |
| Boolean | linkStories | Controls story linking in content placer for a single story; when several items are supplied, pageItem links are also created. (Optional) |
| Boolean | mapStyles | Controls whether styles are mapped in content placer. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog is shown. (Optional) |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the stored object. |
| Object | withProperties | Initial property values for the new ImportedPage. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Writes value as the label entry for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key string. |
| String | value | Value string. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the ImportedPage into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the ImportedPage. |
| Number | numberOfSides | Side count for the polygon that results. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Inset percentage used for the star-shaped polygon that results. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the rectangle that results. (Optional) |

> **clearTransformations**()
>
> Removes rotation, scaling, flipping, fitting, and shearing transformations from the ImportedPage.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | How the ImportedPage selection relates to objects already selected. (Optional) |

> String **extractLabel**( String **key** )
>
> Retrieves the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key string. |

> String **toSource**()
>
> Builds a string that returns the ImportedPage when executed.
> ImportedPage **getElements**()
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
