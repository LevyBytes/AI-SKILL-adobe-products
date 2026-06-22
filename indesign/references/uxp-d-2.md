# Data Merge Qrcode Placeholders, Data Merge Text Placeholder, Data Merge Text Placeholders, Data Merge ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: DataMergeQrcodePlaceholders; DataMergeTextPlaceholder; DataMergeTextPlaceholders; DataMerge; DateVariablePreference; DefaultRenderingIntent; DesignOptions; DiacriticPositionOptions — Class; DialogColumn; DialogColumns.

## DataMergeQrcodePlaceholders

Collection containing data merge QR code placeholders.

### Instance

> _Read Only_
>
> Number **length**
>
> Total object count.

### Methods

> DataMergeQrcodePlaceholder **add**( PageItem **placeholder**, DataMergeField **field**, Object **withProperties** )
>
> Adds a data merge QR code placeholder.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | placeholder | Page item that receives the placeholder. |
| DataMergeField | field | Data merge field used for insertion. |
| Object | withProperties | Starting property values for the new DataMergeQrcodePlaceholder. (Optional) |

> Number **count**()
>
> Reports how many DataMergeQrcodePlaceholder elements the collection contains.
> DataMergeQrcodePlaceholder **item**( Mixed **index** )
>
> Gets the DataMergeQrcodePlaceholder identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or object name. Accepts: Long Integer or String. |

> DataMergeQrcodePlaceholder **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the DataMergeQrcodePlaceholders included between the specified endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a DataMergeQrcodePlaceholder, index, or name. Accepts: DataMergeQrcodePlaceholder, Long Integer or String. |
| Mixed | to | Range end, supplied as a DataMergeQrcodePlaceholder, index, or name. Accepts: DataMergeQrcodePlaceholder, Long Integer or String. |

> DataMergeQrcodePlaceholder **firstItem**()
>
> Gets the collection's first DataMergeQrcodePlaceholder.
> DataMergeQrcodePlaceholder **lastItem**()
>
> Gets the collection's last DataMergeQrcodePlaceholder.
> DataMergeQrcodePlaceholder **middleItem**()
>
> Gets the DataMergeQrcodePlaceholder at the middle position of the collection.
> DataMergeQrcodePlaceholder **previousItem**( DataMergeQrcodePlaceholder **obj** )
>
> Gets the DataMergeQrcodePlaceholder positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DataMergeQrcodePlaceholder | obj | DataMergeQrcodePlaceholder index that comes after the wanted DataMergeQrcodePlaceholder. |

> DataMergeQrcodePlaceholder **nextItem**( DataMergeQrcodePlaceholder **obj** )
>
> Gets the DataMergeQrcodePlaceholder positioned immediately after the specified DataMergeQrcodePlaceholder in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DataMergeQrcodePlaceholder | obj | DataMergeQrcodePlaceholder whose index is directly before the wanted DataMergeQrcodePlaceholder. |

> DataMergeQrcodePlaceholder **anyItem**()
>
> Gets an arbitrary DataMergeQrcodePlaceholder from the collection.
> DataMergeQrcodePlaceholder **everyItem**()
>
> Gets all DataMergeQrcodePlaceholder objects in the collection.
> String **toSource**()
>
> Builds a source string that evaluates back to the DataMergeQrcodePlaceholder.
> DataMergeQrcodePlaceholder **[]**( Number **index** )
>
> Gets the DataMergeQrcodePlaceholder at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## DataMergeTextPlaceholder

Container object for a data merge text field.

### Instance

> _Read Only_
>
> DataMergeField **field**
>
> Placeholder insertion uses this data merge field. Related references: data merge text placeholder; data merge image placeholder.
> _Read Only_
>
> InsertionPoint **storyOffset**
>
> Insertion point before the table in the story that contains the table.
> _Read Only_
>
> Story **parentStory**
>
> Story containing the text.
> _Read Only_
>
> Number **length**
>
> Total object count.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the DataMergeTextPlaceholder (a Document).
> _Read Only_
>
> Number **index**
>
> Position of the DataMergeTextPlaceholder inside its containing object.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Object **properties**
>
> Property bundle used to set multiple values in one operation.

### Methods

> String **toSource**()
>
> Builds a source string that evaluates back to the DataMergeTextPlaceholder.
> DataMergeTextPlaceholder **getElements**()
>
> Turns the object specifier into an array containing object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
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
| Mixed | handler | Previously registered handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## DataMergeTextPlaceholders

Collection containing data merge text placeholders.

### Instance

> _Read Only_
>
> Number **length**
>
> Total object count.

### Methods

> DataMergeTextPlaceholder **add**( Story **parentStory**, Mixed **storyOffset**, DataMergeField **field**, Object **withProperties** )
>
> Adds a data merge text placeholder.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Story | parentStory | Story where the placeholder is inserted. |
| Mixed | storyOffset | Insertion position inside the story, supplied as an offset number or insertion point. Accepts: InsertionPoint or Long Integer. |
| DataMergeField | field | Field used for insertion. |
| Object | withProperties | Starting property values for the new DataMergeTextPlaceholder. (Optional) |

> Number **count**()
>
> Reports how many DataMergeTextPlaceholder elements the collection contains.
> DataMergeTextPlaceholder **item**( Mixed **index** )
>
> Gets the DataMergeTextPlaceholder identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or object name. Accepts: Long Integer or String. |

> DataMergeTextPlaceholder **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the DataMergeTextPlaceholders included between the specified endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a DataMergeTextPlaceholder, index, or name. Accepts: DataMergeTextPlaceholder, Long Integer or String. |
| Mixed | to | Range end, supplied as a DataMergeTextPlaceholder, index, or name. Accepts: DataMergeTextPlaceholder, Long Integer or String. |

> DataMergeTextPlaceholder **firstItem**()
>
> Gets the collection's first DataMergeTextPlaceholder.
> DataMergeTextPlaceholder **lastItem**()
>
> Gets the collection's last DataMergeTextPlaceholder.
> DataMergeTextPlaceholder **middleItem**()
>
> Gets the DataMergeTextPlaceholder at the middle position of the collection.
> DataMergeTextPlaceholder **previousItem**( DataMergeTextPlaceholder **obj** )
>
> Gets the DataMergeTextPlaceholder positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DataMergeTextPlaceholder | obj | DataMergeTextPlaceholder index that comes after the wanted DataMergeTextPlaceholder. |

> DataMergeTextPlaceholder **nextItem**( DataMergeTextPlaceholder **obj** )
>
> Gets the DataMergeTextPlaceholder positioned immediately after the specified DataMergeTextPlaceholder in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DataMergeTextPlaceholder | obj | DataMergeTextPlaceholder whose index is directly before the wanted DataMergeTextPlaceholder. |

> DataMergeTextPlaceholder **anyItem**()
>
> Gets an arbitrary DataMergeTextPlaceholder from the collection.
> DataMergeTextPlaceholder **everyItem**()
>
> Gets all DataMergeTextPlaceholder objects in the collection.
> String **toSource**()
>
> Builds a source string that evaluates back to the DataMergeTextPlaceholder.
> DataMergeTextPlaceholder **[]**( Number **index** )
>
> Gets the DataMergeTextPlaceholder at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## DataMerge

Data merge object.

### Instance

> _Read Only_
>
> DataMergePreference **dataMergePreferences**
>
> Data merge preference properties controlling target-page layout and content.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the DataMerge (a Document).
> _Read Only_
>
> Preferences **preferences**
>
> Preferences object collection.
> _Read Only_
>
> DataMergeFields **dataMergeFields**
>
> Data merge fields collection.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Object **properties**
>
> Property bundle used to set multiple values in one operation.

### Methods

> **selectDataSource**( File **dataSourceFile** )
>
> Sets the file used as the data source.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | dataSourceFile | Data source file path. |

> **updateDataSource**()
>
> Refreshes the data source file with the latest data.
> **removeDataSource**()
>
> Removes the data source.
> **mergeRecords**( File **outputOversetReportFile** )
>
> Merges records and can create an overset report.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | outputOversetReportFile | File path where the overset report is stored. (Optional) |

> **exportFile**( File **to**, PDFExportPreset **using**, File **outputOversetReportFile** )
>
> Merges records, then exports the result to PDF.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Exported PDF file path. |
| PDFExportPreset | using | PDF export style used for output. (Optional) |
| File | outputOversetReportFile | File path where the overset report is stored. (Optional) |

> String **toSource**()
>
> Builds a source string that evaluates back to the DataMerge.
> DataMerge **getElements**()
>
> Turns the object specifier into an array containing object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
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
| Mixed | handler | Previously registered handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## DateVariablePreference

Date variable preferences.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> TextVariable **parent**
>
> Parent object for DateVariablePreference; this value is a TextVariable.
> _Read Only_
>
> Events **events**
>
> Event collection exposed on this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection exposed on this object.
> String **textBefore**
>
> Text placed before the variable value. (Limit: 128 characters)
> String **format**
>
> Format string used for the date.
> String **textAfter**
>
> Text placed after the variable value. (Limit: 128 characters)
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that returns the DateVariablePreference when executed.
> DateVariablePreference **getElements**()
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
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## DefaultRenderingIntent

Default rendering intent setting.

### Class

> _Read Only_
>
> Number **PERCEPTUAL** = 1380544611
>
> Keeps color-to-color visual relationships looking natural to human perception, even when the underlying color values must change.
> _Read Only_
>
> Number **SATURATION** = 1380545377
>
> Favors strong, vivid image color instead of strict color accuracy.
> _Read Only_
>
> Number `RELATIVE_COLORIMETRIC` = 1380545123
>
> Checks the brightest point in the source color space against the destination color space highlight, then adjusts all colors from that comparison. Colors outside the destination gamut move to the nearest reproducible destination color. Note: Compared with perceptual rendering intent, this keeps more original image colors.
> _Read Only_
>
> Number `ABSOLUTE_COLORIMETRIC` = 1380540771
>
> Prioritizes accurate color over preserving color relationships, making it useful for proofing output from a particular device. Note: Colors already inside the destination gamut stay unchanged, while out-of-gamut colors are clipped.

## DesignOptions

Animation design option values.

### Class

> _Read Only_
>
> Number `FROM_CURRENT_APPEARANCE` = 1634551405
>
> At runtime, the animation starts from the current object's properties.
> _Read Only_
>
> Number `TO_CURRENT_APPEARANCE` = 1634554991
>
> At runtime, the animation ends at the current object's properties.
> _Read Only_
>
> Number `TO_CURRENT_LOCATION` = 1634553702
>
> At runtime, the animation uses the current object's properties for its starting appearance and the current position for its ending location.

## DiacriticPositionOptions — Class

> _Read Only_
>
> Number `DEFAULT_POSITION` = 1685090150
>
> Standard position
> _Read Only_
>
> Number `LOOSE_POSITION` = 1685089391
>
> Loose placement
> _Read Only_
>
> Number `MEDIUM_POSITION` = 1685089637
>
> Medium placement
> _Read Only_
>
> Number `TIGHT_POSITION` = 1685091433
>
> Tight placement
> _Read Only_
>
> Number `OPENTYPE_POSITION` = 1685090164
>
> OpenType placement
> _Read Only_
>
> Number `OPENTYPE_POSITION_FROM_BASELINE` = 1685090146
>
> OpenType placement measured from the baseline

## DialogColumn

Borderless dialog column used to hold controls.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the DialogColumn.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for DialogColumn; this can be a Dialog, DialogRow, EnablingGroup or BorderPanel.
> _Read Only_
>
> Number **index**
>
> Position of the DialogColumn inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection exposed on this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection exposed on this object.
> _Read Only_
>
> DialogRows **dialogRows**
>
> Dialog row collection for this object.
> _Read Only_
>
> Widgets **widgets**
>
> Widget collection for this object.
> _Read Only_
>
> TextEditboxes **textEditboxes**
>
> Text editbox collection for this object.
> _Read Only_
>
> IntegerEditboxes **integerEditboxes**
>
> Integer editbox collection for this object.
> _Read Only_
>
> MeasurementEditboxes **measurementEditboxes**
>
> Measurement editbox collection for this object.
> _Read Only_
>
> RealEditboxes **realEditboxes**
>
> Real number editbox collection for this object.
> _Read Only_
>
> AngleEditboxes **angleEditboxes**
>
> Angle editbox collection for this object.
> _Read Only_
>
> PercentEditboxes **percentEditboxes**
>
> Percent editbox collection for this object.
> _Read Only_
>
> IntegerComboboxes **integerComboboxes**
>
> Integer combobox collection for this object.
> _Read Only_
>
> MeasurementComboboxes **measurementComboboxes**
>
> Measurement combobox collection for this object.
> _Read Only_
>
> RealComboboxes **realComboboxes**
>
> Real number combobox collection for this object.
> _Read Only_
>
> AngleComboboxes **angleComboboxes**
>
> Angle combobox collection for this object.
> _Read Only_
>
> PercentComboboxes **percentComboboxes**
>
> Percent combobox collection for this object.
> _Read Only_
>
> CheckboxControls **checkboxControls**
>
> Checkbox control collection for this object.
> _Read Only_
>
> StaticTexts **staticTexts**
>
> Static text object collection for this object.
> _Read Only_
>
> Dropdowns **dropdowns**
>
> Dropdown collection for this object.
> _Read Only_
>
> BorderPanels **borderPanels**
>
> Border panel collection for this object.
> _Read Only_
>
> EnablingGroups **enablingGroups**
>
> Enabling group collection for this object.
> _Read Only_
>
> RadiobuttonGroups **radiobuttonGroups**
>
> Radiobutton group collection for this object.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that returns the DialogColumn when executed.
> DialogColumn **getElements**()
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
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## DialogColumns

Collection containing dialog columns.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> DialogColumn **add**( Object **withProperties** )
>
> Creates a DialogColumn.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new DialogColumn. (Optional) |

> Number **count**()
>
> Shows how many DialogColumn elements the collection contains.
> DialogColumn **item**( Mixed **index** )
>
> Gets the DialogColumn identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Accepts Long Integer or String. |

> DialogColumn **itemByID**( Number **id** )
>
> Gets the DialogColumn with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> DialogColumn **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the DialogColumns that fall inside the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | DialogColumn, index, or name at the range start. Can accept: DialogColumn, Long Integer or String. |
| Mixed | to | DialogColumn, index, or name at the range end. Can accept: DialogColumn, Long Integer or String. |

> DialogColumn **firstItem**()
>
> Gets the first DialogColumn in this collection.
> DialogColumn **lastItem**()
>
> Gets the last DialogColumn in this collection.
> DialogColumn **middleItem**()
>
> Gets the middle DialogColumn in this collection.
> DialogColumn **previousItem**( DialogColumn **obj** )
>
> Gets the DialogColumn whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DialogColumn | obj | Index of the DialogColumn after the wanted DialogColumn. |

> DialogColumn **nextItem**( DialogColumn **obj** )
>
> Gets the DialogColumn whose index comes immediately after the specified DialogColumn in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DialogColumn | obj | DialogColumn whose index is before the wanted DialogColumn. |

> DialogColumn **anyItem**()
>
> Gets any DialogColumn in this collection.
> DialogColumn **everyItem**()
>
> Gets every DialogColumn in this collection.
> String **toSource**()
>
> Builds a string that returns the DialogColumn when executed.
> DialogColumn **[]**( Number **index** )
>
> Gets the DialogColumn at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
