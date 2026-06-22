# Dashed Stroke Style, Dashed Stroke Styles, Data Format, Data Merge Field ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: DashedStrokeStyle; DashedStrokeStyles; DataFormat; DataMergeField; DataMergeFields; DataMergeImagePlaceholder; DataMergeImagePlaceholders; DataMergeOption; DataMergePreference; DataMergeQrcodePlaceholder.

## DashedStrokeStyle

Stroke style that renders with dashes.

### Instance

> _Read Only_
>
> String **strokeStyleType**
>
> Stroke style category.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the DashedStrokeStyle.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for this DashedStrokeStyle, a Document or Application.
> _Read Only_
>
> Number **index**
>
> Position of the DashedStrokeStyle inside its container.
> _Read Only_
>
> Events **events**
>
> Event objects associated with this item.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this item.
> Measurement Unit (Number or String)=any **dashArray**
>
> Dash and gap sequence, written as [dash length1, gap length1, dash length2, gap length2]. Supports up to ten values.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the DashedStrokeStyle.
> EndCap **endCap**
>
> Shape applied to the end of an open path.
> String **name**
>
> DashedStrokeStyle name.
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> DashedStrokeStyle **duplicate**()
>
> Creates a copy of the DashedStrokeStyle.
> **remove**( Mixed **replacingWith** )
>
> Removes this stroke style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | replacingWith | Replacement stroke style used after deletion. Accepts StrokeStyle or String. (Optional) |

> String **toSource**()
>
> Creates executable source text that would return the DashedStrokeStyle.
> DashedStrokeStyle **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Returns the object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type name. |
| Mixed | handler | Event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Removes an event listener registration.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type name. |
| Mixed | handler | Registered event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## DashedStrokeStyles

Collection containing dashed stroke styles.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size.

### Methods

> DashedStrokeStyle **add**( Object **withProperties** )
>
> Builds a new DashedStrokeStyle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Property values applied while creating the new DashedStrokeStyle. (Optional) |

> Number **count**()
>
> Reports how many elements are in the DashedStrokeStyle collection.
> DashedStrokeStyle **item**( Mixed **index** )
>
> Fetches the DashedStrokeStyle identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value; accepts Long Integer or String. |

> DashedStrokeStyle **itemByName**( String **name** )
>
> Fetches the DashedStrokeStyle matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> DashedStrokeStyle **itemByID**( Number **id** )
>
> Fetches the DashedStrokeStyle matching the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> DashedStrokeStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the DashedStrokeStyles spanning the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting DashedStrokeStyle, index, or name for the range. Accepts DashedStrokeStyle, Long Integer or String. |
| Mixed | to | Ending DashedStrokeStyle, index, or name for the range. Accepts DashedStrokeStyle, Long Integer or String. |

> DashedStrokeStyle **firstItem**()
>
> Fetches the first DashedStrokeStyle in the collection.
> DashedStrokeStyle **lastItem**()
>
> Fetches the last DashedStrokeStyle in the collection.
> DashedStrokeStyle **middleItem**()
>
> Fetches the middle DashedStrokeStyle in the collection.
> DashedStrokeStyle **previousItem**( DashedStrokeStyle **obj** )
>
> Fetches the DashedStrokeStyle immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DashedStrokeStyle | obj | Index-bearing DashedStrokeStyle that follows the desired DashedStrokeStyle. |

> DashedStrokeStyle **nextItem**( DashedStrokeStyle **obj** )
>
> Fetches the collection neighbor after the specified DashedStrokeStyle by index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DashedStrokeStyle | obj | DashedStrokeStyle positioned before the desired DashedStrokeStyle. |

> DashedStrokeStyle **anyItem**()
>
> Fetches an arbitrary DashedStrokeStyle from the collection.
> DashedStrokeStyle **everyItem**()
>
> Fetches every DashedStrokeStyle in the collection.
> String **toSource**()
>
> Creates executable source text that would return the DashedStrokeStyle.
> DashedStrokeStyle **[]**( Number **index** )
>
> Fetches the DashedStrokeStyle at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## DataFormat

Options that set the image data format.

### Class

> _Read Only_
>
> Number **ASCII** = 1095975753
>
> Selects ASCII format.
> _Read Only_
>
> Number **BINARY** = 1114534521
>
> Selects binary format.

## DataMergeField

Represents a field used for data merge.

### Instance

> _Read Only_
>
> String **fieldName**
>
> Field name.
> _Read Only_
>
> SourceFieldType **fieldType**
>
> Source field type.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> DataMerge **parent**
>
> Parent object for this DataMergeField, a DataMerge.
> _Read Only_
>
> Number **index**
>
> Position of the DataMergeField inside its container.
> _Read Only_
>
> Events **events**
>
> Event objects associated with this item.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this item.
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Creates executable source text that would return the DataMergeField.
> DataMergeField **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Returns the object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type name. |
| Mixed | handler | Event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Removes an event listener registration.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type name. |
| Mixed | handler | Registered event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## DataMergeFields

Collection containing data merge fields.

### Instance

> _Read Only_
>
> Number **length**
>
> Total object count.

### Methods

> Number **count**()
>
> Reports how many DataMergeField elements the collection contains.
> DataMergeField **item**( Mixed **index** )
>
> Gets the DataMergeField identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or object name. Accepts: Long Integer or String. |

> DataMergeField **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the DataMergeFields included between the specified endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a DataMergeField, index, or name. Accepts: DataMergeField, Long Integer or String. |
| Mixed | to | Range end, supplied as a DataMergeField, index, or name. Accepts: DataMergeField, Long Integer or String. |

> DataMergeField **firstItem**()
>
> Gets the collection's first DataMergeField.
> DataMergeField **lastItem**()
>
> Gets the collection's last DataMergeField.
> DataMergeField **middleItem**()
>
> Gets the DataMergeField at the middle position of the collection.
> DataMergeField **previousItem**( DataMergeField **obj** )
>
> Gets the DataMergeField positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DataMergeField | obj | DataMergeField index that comes after the wanted DataMergeField. |

> DataMergeField **nextItem**( DataMergeField **obj** )
>
> Gets the DataMergeField positioned immediately after the specified DataMergeField in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DataMergeField | obj | DataMergeField whose index is directly before the wanted DataMergeField. |

> DataMergeField **anyItem**()
>
> Gets an arbitrary DataMergeField from the collection.
> DataMergeField **everyItem**()
>
> Gets all DataMergeField objects in the collection.
> String **toSource**()
>
> Builds a source string that evaluates back to the DataMergeField.
> DataMergeField **[]**( Number **index** )
>
> Gets the DataMergeField at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## DataMergeImagePlaceholder

Container object for a date merge image field.

### Instance

> _Read Only_
>
> DataMergeField **field**
>
> Placeholder insertion uses this data merge field. Related references: data merge text placeholder; data merge image placeholder.
> _Read Only_
>
> PageItem **placeholderPageItem**
>
> Page item that receives the placeholder.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the DataMergeImagePlaceholder (a Document).
> _Read Only_
>
> Number **index**
>
> Position of the DataMergeImagePlaceholder inside its containing object.
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
> Builds a source string that evaluates back to the DataMergeImagePlaceholder.
> DataMergeImagePlaceholder **getElements**()
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

## DataMergeImagePlaceholders

Collection containing data merge image placeholders.

### Instance

> _Read Only_
>
> Number **length**
>
> Total object count.

### Methods

> DataMergeImagePlaceholder **add**( PageItem **placeholder**, DataMergeField **field**, Object **withProperties** )
>
> Adds a data merge image placeholder.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | placeholder | Page item that receives the placeholder. |
| DataMergeField | field | Data merge field used for insertion. |
| Object | withProperties | Starting property values for the new DataMergeImagePlaceholder. (Optional) |

> Number **count**()
>
> Reports how many DataMergeImagePlaceholder elements the collection contains.
> DataMergeImagePlaceholder **item**( Mixed **index** )
>
> Gets the DataMergeImagePlaceholder identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or object name. Accepts: Long Integer or String. |

> DataMergeImagePlaceholder **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the DataMergeImagePlaceholders included between the specified endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a DataMergeImagePlaceholder, index, or name. Accepts: DataMergeImagePlaceholder, Long Integer or String. |
| Mixed | to | Range end, supplied as a DataMergeImagePlaceholder, index, or name. Accepts: DataMergeImagePlaceholder, Long Integer or String. |

> DataMergeImagePlaceholder **firstItem**()
>
> Gets the collection's first DataMergeImagePlaceholder.
> DataMergeImagePlaceholder **lastItem**()
>
> Gets the collection's last DataMergeImagePlaceholder.
> DataMergeImagePlaceholder **middleItem**()
>
> Gets the DataMergeImagePlaceholder at the middle position of the collection.
> DataMergeImagePlaceholder **previousItem**( DataMergeImagePlaceholder **obj** )
>
> Gets the DataMergeImagePlaceholder positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DataMergeImagePlaceholder | obj | DataMergeImagePlaceholder index that comes after the wanted DataMergeImagePlaceholder. |

> DataMergeImagePlaceholder **nextItem**( DataMergeImagePlaceholder **obj** )
>
> Gets the DataMergeImagePlaceholder positioned immediately after the specified DataMergeImagePlaceholder in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DataMergeImagePlaceholder | obj | DataMergeImagePlaceholder whose index is directly before the wanted DataMergeImagePlaceholder. |

> DataMergeImagePlaceholder **anyItem**()
>
> Gets an arbitrary DataMergeImagePlaceholder from the collection.
> DataMergeImagePlaceholder **everyItem**()
>
> Gets all DataMergeImagePlaceholder objects in the collection.
> String **toSource**()
>
> Builds a source string that evaluates back to the DataMergeImagePlaceholder.
> DataMergeImagePlaceholder **[]**( Number **index** )
>
> Gets the DataMergeImagePlaceholder at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## DataMergeOption

Settings for data merge options.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the DataMergeOption (a Application or Document).
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
> Fitting **fittingOption**
>
> Fitting instructions applied to content inside a frame.
> Boolean **centerImage**
>
> When true, places the image at the frame center while retaining both the frame dimensions and the content size and proportions. Note: content larger than the frame is clipped at the frame bounding box edges. This setting is not compatible with fittingOption `CONTENT_AWARE_FIT`
> Boolean **linkImages**
>
> When true, image files remain linked to the target document. When false, images are embedded in the target document.
> Boolean **removeBlankLines**
>
> When true, blank lines produced by empty fields are removed.
> Boolean **createNewDocument**
>
> When true, merged records are written into a new document.
> Number **documentSize**
>
> Maximum page count allowed for each document.
> Object **properties**
>
> Property bundle used to set multiple values in one operation.

### Methods

> String **toSource**()
>
> Builds a source string that evaluates back to the DataMergeOption.
> DataMergeOption **getElements**()
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

## DataMergePreference

Preferences used by data merge.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> DataMerge **parent**
>
> Parent object for the DataMergePreference (a DataMerge).
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
> RecordSelection **recordSelection**
>
> Records selected for merging.
> Measurement Unit (Number or String)=any **leftMargin**
>
> Left margin offset value in the target document.
> Measurement Unit (Number or String)=any **topMargin**
>
> Top margin offset value in the target document.
> Measurement Unit (Number or String)=any **rightMargin**
>
> Right margin offset value in the target document.
> Measurement Unit (Number or String)=any **bottomMargin**
>
> Bottom margin offset value in the target document.
> ArrangeBy **arrangeBy**
>
> Ordering used when placing multiple records on the target document page.
> Measurement Unit (Number or String)=any **rowSpacing**
>
> Space inserted between record rows in the target document.
> Measurement Unit (Number or String)=any **columnSpacing**
>
> Space inserted between record columns in the target document.
> Number **recordNumber**
>
> Record number selected for merge. Note: valid only when record selection is one record.
> String **recordRange**
>
> Record range selected for merge. Note: valid only when record selection is range.
> RecordsPerPage **recordsPerPage**
>
> Number of records placed on each document page.
> Object **properties**
>
> Property bundle used to set multiple values in one operation.

### Methods

> Boolean **alertMissingImages**( File **outputMissingImagesReportFile** )
>
> When true, writes a list of missing images to the specified output file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | outputMissingImagesReportFile | Output file path. |

> String **toSource**()
>
> Builds a source string that evaluates back to the DataMergePreference.
> DataMergePreference **getElements**()
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

## DataMergeQrcodePlaceholder

Container object for a date merge QR code field.

### Instance

> _Read Only_
>
> DataMergeField **field**
>
> Placeholder insertion uses this data merge field. Related references: data merge text placeholder; data merge image placeholder.
> _Read Only_
>
> PageItem **placeholderPageItem**
>
> Page item that receives the placeholder.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the DataMergeQrcodePlaceholder (a Document).
> _Read Only_
>
> Number **index**
>
> Position of the DataMergeQrcodePlaceholder inside its containing object.
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
> Builds a source string that evaluates back to the DataMergeQrcodePlaceholder.
> DataMergeQrcodePlaceholder **getElements**()
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
