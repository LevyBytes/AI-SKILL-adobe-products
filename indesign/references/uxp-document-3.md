# Document (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Document — Instance

> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Places a QR Code carrying Business Card data on the page item or loads it into the document's placegun.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | firstName | Business Card First Name encoded by the QR code. (Optional) |
| String | lastName | Business Card Last Name encoded by the QR code. (Optional) |
| String | jobTitle | Business Card Title encoded by the QR code. (Optional) |
| String | cellPhone | Business Card Cell Phone Number encoded by the QR code. (Optional) |
| String | phone | Business Card Phone Number encoded by the QR code. (Optional) |
| String | email | Business Card Email Address encoded by the QR code. (Optional) |
| String | organisation | Business Card Organisation encoded by the QR code. (Optional) |
| String | streetAddress | Business Card Street Address encoded by the QR code. (Optional) |
| String | city | Business Card City encoded by the QR code. (Optional) |
| String | adrState | Business Card State encoded by the QR code. (Optional) |
| String | country | Business Card Country encoded by the QR code. (Optional) |
| String | postalCode | Business Card Postal Code encoded by the QR code. (Optional) |
| String | website | Business Card URL encoded by the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Document; earlier parameter values may be included in this property set. (Optional) |

> **close**( SaveOptions **saving**, File **savingIn**, String **versionComments**, Boolean **forceSave** )
>
> Closes the Document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SaveOptions | saving | Save-changes choice applied before the Document closes. (Optional) |
| File | savingIn | File target where the Document is saved. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | Forces a version save. (Optional) |

> Document **save**( File **to**, Boolean **stationery**, String **versionComments**, Boolean **forceSave** )
>
> Saves the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Destination for saving the document. If it has already been saved, a copy is written at this path, the original file closes, and the new copy opens. (Optional) |
| Boolean | stationery | Controls whether the file is saved as stationery. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | Forces a version save. (Optional) |

> String **extractLabel**( String **key** )
>
> Reads the label value tied to the given key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> **exportPageItemsSelectionToSnippet**( File **to** )
>
> Writes the selected page items as a snippet at the destination file path.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Export file path. |

> **exportPageItemsToSnippet**( File **to**, Number **pageItemIds** )
>
> Writes supplied page item ids as a snippet at the destination file path.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Export file path. |
| Number | pageItemIds | Array containing the page item ids. |

> Document **saveAsCloud**( String **cloudPath** )
>
> Saves as a cloud document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cloudPath | Cloud path used for a cloud document. |

> Document **saveACopyCloud**( String **cloudPath** )
>
> Saves a copy as a cloud document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cloudPath | Cloud path used for a cloud document. |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> Number **colorTransform**( Number **colorValue**, ColorSpace **sourceColorSpace**, ColorSpace **destinationColorSpace** )
>
> Converts color values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | colorValue | Original color value. |
| ColorSpace | sourceColorSpace | Color space used by the input value. |
| ColorSpace | destinationColorSpace | Color space requested for the output value. |

> **loadSwatches**( File **from** )
>
> Loads swatches from the chosen file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | File containing swatches, or an InDesign document. |

> **saveSwatches**( File **to**, Swatch **swatchList**, String **versionComments**, Boolean **forceSave** )
>
> Stores selected swatch(es) in a swatchbook file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Swatchbook file destination. |
| Swatch | swatchList | Swatch(es) selected for saving. |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, a version save is forced. (Optional) |

> Color **importAdobeSwatchbookSpotColor**( String **name** )
>
> Brings in an Adobe color book spot-color swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Spot color selected for loading. |

> Color **importAdobeSwatchbookProcessColor**( String **name** )
>
> From a preloaded Adobe color book, brings in the named process-color swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Process color selected for loading. |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format supplied as an enumeration value or as an extension shown in the Save as type or Format menu in the Export dialog. Accepts: ExportFormat enumerator or String. |
| File | to | Export file path. |
| Boolean | showingOptions | When true, the export options dialog is displayed. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, a version save is forced. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous export of the object(s) into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format supplied as an enumeration value or as an extension shown in the Save as type or Format menu in the Export dialog. Accepts: ExportFormat enumerator or String. |
| File | to | Export file path. |
| Boolean | showingOptions | When true, the export options dialog is displayed. (Optional) |
| PDFExportPreset | using | Export style to apply. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, a version save is forced. (Optional) |

> Boolean **revert**()
>
> Restores the document to the condition recorded by the last save.
> **saveACopy**( File **to**, Boolean **stationery** )
>
> Saves a document copy.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | File path used for the copy. Note: The original document remains open, and the copy is not opened. (Optional) |
| Boolean | stationery | When true, the file is saved as stationery (Mac OS) or as a template (Windows). Note: Stationery and template files use a different extension than regular files. (Optional) |

> **loadConditions**( File **from**, Boolean **loadConditionSets** )
>
> Loads conditions from the chosen file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | File path containing the conditions. |
| Boolean | loadConditionSets | When true, the condition sets are loaded too. (Optional) |

> **select**( Mixed **selectableItems**, SelectionOptions **existingSelection** )
>
> Selects the requested object(s).

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | selectableItems | Objects targeted for selection. Accepts: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator. |
| SelectionOptions | existingSelection | Selection state for the Document relative to objects already selected. (Optional) |

> String **internalMethod**( String **internalParameter1**, String **internalParameter2** )
>
> Internal use only: opaque method reserved for the InDesign Engineering team.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | internalParameter1 | First internal parameter. |
| String | internalParameter2 | Second internal parameter. |

> **undo**()
>
> Reverses the most recent action.
> **redo**()
>
> Reapplies the most recently undone action.
> String **toSource**()
>
> Produces a string which, when executed, returns the Document.
> Document **getElements**()
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
