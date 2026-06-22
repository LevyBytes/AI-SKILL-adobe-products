# Cross Reference Formats, Cross Reference Source, Cross Reference Sources, Cross Reference Type ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: CrossReferenceFormats; CrossReferenceSource; CrossReferenceSources; CrossReferenceType; CrossReference; CrossReferences; CursorTypes — Class; CustomLayoutTypeEnum; CustomTextVariablePreference.

## CrossReferenceFormats

Collection containing cross reference formats.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> CrossReferenceFormat **add**( String **name**, Object **withProperties** )
>
> Creates a cross reference format.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Format name. (Optional) |
| Object | withProperties | Initial property values for the new CrossReferenceFormat (Optional) |

> Number **count**()
>
> Shows how many elements are in the CrossReferenceFormat collection.
> CrossReferenceFormat **item**( Mixed **index** )
>
> Gets the CrossReferenceFormat identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name. Accepts: Long Integer or String. |

> CrossReferenceFormat **itemByName**( String **name** )
>
> Gets the CrossReferenceFormat matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> CrossReferenceFormat **itemByID**( Number **id** )
>
> Gets the CrossReferenceFormat matching the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> CrossReferenceFormat **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets CrossReferenceFormats inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | CrossReferenceFormat, index, or name that starts the range. Can accept: CrossReferenceFormat, Long Integer or String. |
| Mixed | to | CrossReferenceFormat, index, or name that ends the range. Can accept: CrossReferenceFormat, Long Integer or String. |

> CrossReferenceFormat **firstItem**()
>
> Gets the first CrossReferenceFormat in the collection.
> CrossReferenceFormat **lastItem**()
>
> Gets the last CrossReferenceFormat in the collection.
> CrossReferenceFormat **middleItem**()
>
> Gets the middle CrossReferenceFormat in the collection.
> CrossReferenceFormat **previousItem**( CrossReferenceFormat **obj** )
>
> Gets the CrossReferenceFormat positioned immediately before the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CrossReferenceFormat | obj | CrossReferenceFormat that follows the desired CrossReferenceFormat. |

> CrossReferenceFormat **nextItem**( CrossReferenceFormat **obj** )
>
> Gets the CrossReferenceFormat positioned immediately after the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CrossReferenceFormat | obj | CrossReferenceFormat that comes before the desired CrossReferenceFormat. |

> CrossReferenceFormat **anyItem**()
>
> Gets any CrossReferenceFormat in the collection.
> CrossReferenceFormat **everyItem**()
>
> Gets every CrossReferenceFormat in the collection.
> String **toSource**()
>
> Creates source text that, when executed, returns the CrossReferenceFormat.
> CrossReferenceFormat **[]**( Number **index** )
>
> Gets the CrossReferenceFormat at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## CrossReferenceSource

Object representing a cross reference text source.

### Instance

> _Read Only_
>
> Boolean **hidden**
>
> True means the hyperlink is hidden.
> _Read Only_
>
> Number **id**
>
> Unique ID for the CrossReferenceSource.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Owner of the CrossReferenceSource, which is a Document.
> _Read Only_
>
> Number **index**
>
> Position of the CrossReferenceSource inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> CrossReferenceFormat **appliedFormat**
>
> Cross reference format used by this source.
> String **name**
>
> Name assigned to the CrossReferenceSource.
> Text **sourceText**
>
> Hyperlinked text or insertion point.
> CharacterStyle **appliedCharacterStyle**
>
> Character style used by the hyperlink text source.
> String **label**
>
> Settable string storage for label text.
> Object **properties**
>
> Allows several properties to be assigned together.

### Methods

> **update**()
>
> Refreshes content for the cross reference text source.
> **remove**()
>
> Deletes this CrossReferenceSource.
> **showSource**()
>
> Moves to the hyperlink source.
> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value for the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to use. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Creates source text that, when executed, returns the CrossReferenceSource.
> CrossReferenceSource **getElements**()
>
> Converts the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
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
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## CrossReferenceSources

Collection containing cross reference text sources.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> CrossReferenceSource **add**( Text **source**, CrossReferenceFormat **appliedFormat**, Object **withProperties** )
>
> Creates a cross reference text source.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Text | source | Text or insertion point used to create the source. |
| CrossReferenceFormat | appliedFormat | Cross reference format used by this source. |
| Object | withProperties | Initial property values for the new CrossReferenceSource (Optional) |

> Number **count**()
>
> Shows how many elements are in the CrossReferenceSource collection.
> CrossReferenceSource **item**( Mixed **index** )
>
> Gets the CrossReferenceSource identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name. Accepts: Long Integer or String. |

> CrossReferenceSource **itemByName**( String **name** )
>
> Gets the CrossReferenceSource matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> CrossReferenceSource **itemByID**( Number **id** )
>
> Gets the CrossReferenceSource matching the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> CrossReferenceSource **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets CrossReferenceSources inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | CrossReferenceSource, index, or name that starts the range. Can accept: CrossReferenceSource, Long Integer or String. |
| Mixed | to | CrossReferenceSource, index, or name that ends the range. Can accept: CrossReferenceSource, Long Integer or String. |

> CrossReferenceSource **firstItem**()
>
> Gets the first CrossReferenceSource in the collection.
> CrossReferenceSource **lastItem**()
>
> Gets the last CrossReferenceSource in the collection.
> CrossReferenceSource **middleItem**()
>
> Gets the middle CrossReferenceSource in the collection.
> CrossReferenceSource **previousItem**( CrossReferenceSource **obj** )
>
> Gets the CrossReferenceSource positioned immediately before the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CrossReferenceSource | obj | CrossReferenceSource that follows the desired CrossReferenceSource. |

> CrossReferenceSource **nextItem**( CrossReferenceSource **obj** )
>
> Gets the CrossReferenceSource positioned immediately after the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CrossReferenceSource | obj | CrossReferenceSource that comes before the desired CrossReferenceSource. |

> CrossReferenceSource **anyItem**()
>
> Gets any CrossReferenceSource in the collection.
> CrossReferenceSource **everyItem**()
>
> Gets every CrossReferenceSource in the collection.
> String **toSource**()
>
> Creates source text that, when executed, returns the CrossReferenceSource.
> CrossReferenceSource **[]**( Number **index** )
>
> Gets the CrossReferenceSource at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## CrossReferenceType

Options that define the instructional wording used for a cross reference.

### Class

> _Read Only_
>
> Number `SEE_OR_ALSO_BRACKET` = 1399800172
>
> Places 'See also' before the referenced topic when that topic includes an associated page reference; otherwise places 'See' before it.
> _Read Only_
>
> Number **SEE** = 1701729125
>
> Adds 'See' ahead of the referenced topic.
> _Read Only_
>
> Number `SEE_ALSO` = 1399144812
>
> Adds 'See also' ahead of the referenced topic.
> _Read Only_
>
> Number `SEE_HEREIN` = 1397256814
>
> Adds 'See herein' ahead of the referenced topic.
> _Read Only_
>
> Number `SEE_ALSO_HEREIN` = 1398884466
>
> Adds 'See also herein' ahead of the referenced topic.
> _Read Only_
>
> Number `CUSTOM_CROSS_REFERENCE` = 1131639875
>
> Adds the specified string ahead of the referenced topic.
> _Read Only_
>
> Number `CUSTOM_CROSS_REFERENCE_BEFORE` = 1131639906
>
> Adds the specified string and the specified before cross reference separator ahead of the referenced topic. When no before cross reference separator is supplied, a space is used.
> _Read Only_
>
> Number `CUSTOM_CROSS_REFERENCE_AFTER` = 1131639905
>
> After the referenced topic, places the specified following topic separator and the specified string. When no following topic separator is supplied, a space is used.

## CrossReference

Represents a link from one index topic to another. Text-level cross references use the 'cross reference source' and 'hyperlink' objects.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the CrossReference.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Topic **parent**
>
> Parent object for this CrossReference, a Topic.
> _Read Only_
>
> Number **index**
>
> Position of the CrossReference inside its container.
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
> Topic **referencedTopic**
>
> Topic targeted by this CrossReference.
> CrossReferenceType **crossReferenceType**
>
> Wording placed before or after the referenced topic.
> String **customTypeString**
>
> Custom cross reference type text; applies only to custom cross reference types.
> String **label**
>
> User-settable string storage for the object.
> String **name**
>
> CrossReference name; aliases the CrossReference label property.
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> **remove**()
>
> Removes the CrossReference.
> **insertLabel**( String **key**, String **value** )
>
> Stores value under the specified key as a label entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label entry stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Creates executable source text that would return the CrossReference.
> CrossReference **getElements**()
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

## CrossReferences

Collection containing cross references for index topics. Text-level cross references use the 'cross reference source' and 'hyperlink' objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size.

### Methods

> CrossReference **add**( Topic **referencedTopic**, CrossReferenceType **crossReferenceType**, String **customTypeString**, Object **withProperties** )
>
> Builds a new cross reference.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Topic | referencedTopic | Topic that the cross reference targets. |
| CrossReferenceType | crossReferenceType | Type setting for the cross reference. |
| String | customTypeString | Custom cross-reference string; applies only when crossReferenceType is a custom cross reference type. (Optional) |
| Object | withProperties | Property values applied while creating the new CrossReference. (Optional) |

> Number **count**()
>
> Reports how many elements are in the CrossReference collection.
> CrossReference **item**( Mixed **index** )
>
> Fetches the CrossReference identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value; accepts Long Integer or String. |

> CrossReference **itemByName**( String **name** )
>
> Fetches the CrossReference matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> CrossReference **itemByID**( Number **id** )
>
> Fetches the CrossReference matching the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> CrossReference **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the CrossReferences spanning the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting CrossReference, index, or name for the range. Accepts CrossReference, Long Integer or String. |
| Mixed | to | Ending CrossReference, index, or name for the range. Accepts CrossReference, Long Integer or String. |

> CrossReference **firstItem**()
>
> Fetches the first CrossReference in the collection.
> CrossReference **lastItem**()
>
> Fetches the last CrossReference in the collection.
> CrossReference **middleItem**()
>
> Fetches the middle CrossReference in the collection.
> CrossReference **previousItem**( CrossReference **obj** )
>
> Fetches the CrossReference immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CrossReference | obj | Index-bearing CrossReference that follows the desired CrossReference. |

> CrossReference **nextItem**( CrossReference **obj** )
>
> Fetches the collection neighbor after the specified CrossReference by index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CrossReference | obj | CrossReference positioned before the desired CrossReference. |

> CrossReference **anyItem**()
>
> Fetches an arbitrary CrossReference from the collection.
> CrossReference **everyItem**()
>
> Fetches every CrossReference in the collection.
> String **toSource**()
>
> Creates executable source text that would return the CrossReference.
> CrossReference **[]**( Number **index** )
>
> Fetches the CrossReference at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## CursorTypes — Class

> _Read Only_
>
> Number `STANDARD_CURSOR` = 1699968100
>
> Selects a standard cursor.
> _Read Only_
>
> Number `THICK_CURSOR` = 1700029291
>
> Selects a thick cursor.
> _Read Only_
>
> Number `BARBELL_CURSOR` = 1698841196
>
> Selects a barbell cursor.
> _Read Only_
>
> Number `BLOCK_CURSOR` = 1698851951
>
> Selects a block cursor.

## CustomLayoutTypeEnum

Options for Custom Layout Type.

### Class

> _Read Only_
>
> Number `FLOAT_LEFT` = 1181502565
>
> Float Left setting.
> _Read Only_
>
> Number `FLOAT_RIGHT` = 1181504105
>
> Float Right setting.
> _Read Only_
>
> Number `ALIGNMENT_AND_SPACING` = 1097618288
>
> Alignment And Spacing setting.

## CustomTextVariablePreference

Preferences that configure a custom text variable.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> TextVariable **parent**
>
> Parent object for this CustomTextVariablePreference, a TextVariable.
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
> Mixed **contents**
>
> Text contents; may return a String or SpecialCharacters enumerator.
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Creates executable source text that would return the CustomTextVariablePreference.
> CustomTextVariablePreference **getElements**()
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
