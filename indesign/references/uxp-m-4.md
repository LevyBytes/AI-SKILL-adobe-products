# Menus, Metadata Preference, Mixed Ink Group, Mixed Ink Groups ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Menus; MetadataPreference — Instance; MixedInkGroup; MixedInkGroups; MixedInk; MixedInks; MojikumiTableDefaults.

## Menus

Represents a collection containing menus.

### Instance

> _Read Only_
>
> Number **length**
>
> Reports how many objects are contained.

### Methods

> Number **count**()
>
> Shows how many elements the Menu collection contains.
> Menu **item**( Mixed **index** )
>
> Retrieves the Menu addressed by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Allowed types: Long Integer or String. |

> Menu **itemByName**( String **name** )
>
> Retrieves the Menu addressed by name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> Menu **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the Menus included in the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as Menu, Long Integer, or String. |
| Mixed | to | Range end, supplied as Menu, Long Integer, or String. |

> Menu **firstItem**()
>
> Retrieves the collection's first Menu.
> Menu **lastItem**()
>
> Retrieves the collection's last Menu.
> Menu **middleItem**()
>
> Retrieves the collection's middle Menu.
> Menu **previousItem**( Menu **obj** )
>
> Retrieves the Menu whose index immediately precedes the supplied one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Menu | obj | Menu index positioned after the desired Menu. |

> Menu **nextItem**( Menu **obj** )
>
> Retrieves the Menu indexed immediately after the supplied Menu.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Menu | obj | Menu whose index is before the desired Menu. |

> Menu **anyItem**()
>
> Retrieves any Menu from the collection.
> Menu **everyItem**()
>
> Retrieves all Menu objects in the collection.
> String **toSource**()
>
> Builds source text that can recreate the Menu when run.
> Menu **[]**( Number **index** )
>
> Retrieves the Menu addressed by index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## MetadataPreference — Instance

> _Read Only_
>
> String **serverURL**
>
> Indicates where the document resides on the asset management server.
> _Read Only_
>
> Date **modificationDate**
>
> Records the document's latest modification date.
> _Read Only_
>
> Date **creationDate**
>
> Records when the document was created.
> _Read Only_
>
> String **creator**
>
> Names the application that created the document.
> _Read Only_
>
> String **format**
>
> Identifies the document format.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Document **parent**
>
> Gives the parent for the MetadataPreference, a Document.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> String **author**
>
> Stores the document author.
> String **description**
>
> Stores the MetadataPreference description.
> String **jobName**
>
> Stores the job name.
> CopyrightStatus **copyrightStatus**
>
> Stores the document copyright status.
> String **copyrightNotice**
>
> Stores the copyright notice text.
> String **copyrightInfoURL**
>
> Gives the URL for the file containing the linked copyright statement.
> String **keywords**
>
> Stores the keyword list associated with the document.
> String **documentTitle**
>
> Stores the document title.
> Object **properties**
>
> Lets multiple properties be set together.

### Methods

> **save**( File **to** )
>
> Writes document metadata out to an external file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Path for the external file. |

> **replace**( File **using**, Boolean **affectAll** )
>
> Replaces the document's current metadata with metadata read from the specified file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | using | Full path to the file containing replacement metadata. |
| Boolean | affectAll | true treats every property as external. Note: Defaults to false. (Optional) |

> **append**( File **from**, Boolean **affectAll** )
>
> Applies metadata from the specified external file to document metadata properties that are still undefined.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | Path to the external file containing the metadata. |
| Boolean | affectAll | true also overwrites current metadata with values from the external file. false keeps existing metadata unchanged. Note: Defaults to false. (Optional) |

> String **getProperty**( String **namespace**, String **path** )
>
> Reads the XMP property value for the specified path.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | namespace | Property namespace. |
| String | path | Target path. |

> **setProperty**( String **namespace**, String **path**, String **value** )
>
> Writes the XMP property at the specified path.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | namespace | Property namespace. |
| String | path | Specified path or paths. |
| String | value | Value to assign to the property. Note: Pass an empty string to remove the property. |

> **createContainerItem**( String **namespace**, String **path**, Number **index**, ContainerType **container** )
>
> Builds an empty container.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | namespace | Container namespace. |
| String | path | Path to the container. |
| Number | index | Item index inside the container. Values must be 1 or greater. Use 0 to append the item at the end and assign the next available value. (Optional) |
| ContainerType | container | Container type. Note: Required when adding the first new item to the container. (Optional) |

> Number **countContainer**( String **namespace**, String **path** )
>
> Counts items stored in the container.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | namespace | Namespace that identifies the container. |
| String | path | Path pointing to the container. |

> String **toSource**()
>
> Produces executable source text that evaluates back to the MetadataPreference.
> MetadataPreference **getElements**()
>
> Resolves the object specifier and returns object references as an array.
> String **toSpecifier**()
>
> Returns the object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
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

## MixedInkGroup

Represents a mixed ink group.

### Instance

> _Read Only_
>
> Ink **inkList**
>
> Component inks for this object.
> _Read Only_
>
> ColorGroup **parentColorGroup**
>
> Color group containing the swatch.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the MixedInkGroup.
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the MixedInkGroup (a Application or Document).
> _Read Only_
>
> Number **index**
>
> Position of the MixedInkGroup inside its containing object.
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
> ColorModel **model**
>
> Color model value.
> String **name**
>
> Name assigned to the MixedInkGroup.
> String **label**
>
> Settable string label property.
> Object **properties**
>
> Allows several properties to be assigned in one operation.

### Methods

> **remove**( Swatch **replacingWith** )
>
> Removes the swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Swatch | replacingWith | Swatch to apply instead of the removed swatch. (Optional) |

> MixedInkGroup **duplicate**()
>
> Creates a duplicate MixedInkGroup.
> Swatch **merge**( Mixed **with** )
>
> Combines the specified swatches with the swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | with | Swatches that should be merged. Can accept: Array of Swatches, Swatch or String. |

> **insertLabel**( String **key**, String **value** )
>
> Stores the value under the specified key in the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to address. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Produces executable source text that evaluates back to the MixedInkGroup.
> MixedInkGroup **getElements**()
>
> Resolves the object specifier and returns object references as an array.
> String **toSpecifier**()
>
> Returns the object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
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

## MixedInkGroups

Represents a collection of mixed ink groups.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> Number **count**()
>
> Reports the MixedInkGroup element total.
> MixedInkGroup **add**( Ink **inkList**, Number **inkPercentages**, Number **repeatValues**, Number **incrementValues**, Object **withProperties** )
>
> Adds a mixed ink group.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Ink | inkList | Inks included in the mix. |
| Number | inkPercentages | Percentage assigned per inkList entry. (Range: 0 to 100 for each ink) (Optional) |
| Number | repeatValues | Repetition count per inkList entry. (Range: 0 to 100 for each ink) (Optional) |
| Number | incrementValues | Percent increase applied with each repetition per ink. (Range: 0 to 100) Note: Total ink percentage for an ink cannot exceed 100.) (Optional) |
| Object | withProperties | Initial property values for the new MixedInkGroup. (Optional) |

> MixedInkGroup **item**( Mixed **index** )
>
> Retrieves the MixedInkGroup identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> MixedInkGroup **itemByName**( String **name** )
>
> Retrieves the MixedInkGroup that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> MixedInkGroup **itemByID**( Number **id** )
>
> Retrieves the MixedInkGroup that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MixedInkGroup **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the MixedInkGroups within the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Start-of-range selector. Can accept: MixedInkGroup, Long Integer or String. |
| Mixed | to | End-of-range selector. Can accept: MixedInkGroup, Long Integer or String. |

> MixedInkGroup **firstItem**()
>
> Selects the collection's first MixedInkGroup.
> MixedInkGroup **lastItem**()
>
> Selects the collection's last MixedInkGroup.
> MixedInkGroup **middleItem**()
>
> Selects the collection's middle MixedInkGroup.
> MixedInkGroup **previousItem**( MixedInkGroup **obj** )
>
> Gets the MixedInkGroup whose index precedes the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MixedInkGroup | obj | MixedInkGroup whose index comes immediately after the target MixedInkGroup. |

> MixedInkGroup **nextItem**( MixedInkGroup **obj** )
>
> Gets the collection member located after the specified MixedInkGroup.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MixedInkGroup | obj | MixedInkGroup whose index comes immediately before the target MixedInkGroup. |

> MixedInkGroup **anyItem**()
>
> Selects any MixedInkGroup in the collection.
> MixedInkGroup **everyItem**()
>
> Selects every MixedInkGroup in the collection.
> String **toSource**()
>
> Produces executable source text that evaluates back to the MixedInkGroup.
> MixedInkGroup **[]**( Number **index** )
>
> Retrieves the MixedInkGroup at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## MixedInk

Represents a mixed ink swatch.

### Instance

> _Read Only_
>
> Ink **inkList**
>
> Component inks for this object.
> _Read Only_
>
> MixedInkGroup **baseColor**
>
> Mixed ink group used as the basis for the mixed ink swatch.
> _Read Only_
>
> ColorGroup **parentColorGroup**
>
> Color group containing the swatch.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the MixedInk.
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the MixedInk (a Application or Document).
> _Read Only_
>
> Number **index**
>
> Position of the MixedInk inside its containing object.
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
> ColorModel **model**
>
> Color model value.
> ColorSpace **space**
>
> Color space value.
> Number **inkPercentages**
>
> Tint-percentage array for the inks in the ink list. Note: Provide a value for each ink.
> String **name**
>
> Name assigned to the MixedInk.
> String **label**
>
> Settable string label property.
> Object **properties**
>
> Allows several properties to be assigned in one operation.

### Methods

> **remove**( Swatch **replacingWith** )
>
> Removes the swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Swatch | replacingWith | Swatch to apply instead of the removed swatch. (Optional) |

> MixedInk **duplicate**()
>
> Creates a duplicate MixedInk.
> Swatch **merge**( Mixed **with** )
>
> Combines the specified swatches with the swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | with | Swatches that should be merged. Can accept: Array of Swatches, Swatch or String. |

> **insertLabel**( String **key**, String **value** )
>
> Stores the value under the specified key in the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to address. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Produces executable source text that evaluates back to the MixedInk.
> MixedInk **getElements**()
>
> Resolves the object specifier and returns object references as an array.
> String **toSpecifier**()
>
> Returns the object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
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

## MixedInks

Represents a collection of mixed inks.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> Number **count**()
>
> Reports how many elements are in the MixedInk.
> MixedInk **add**( Mixed **inkList**, Number **inkPercentages**, Object **withProperties** )
>
> Adds a mixed ink swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | inkList | Inks used for the mix. Note: Requires two or more process inks and at least one spot ink. Can accept: Array of Inks or MixedInkGroup. |
| Number | inkPercentages | Percentage for each inkList entry. (Range: 0 to 100 for each ink) |
| Object | withProperties | Initial property values for the new MixedInk. (Optional) |

> MixedInk **item**( Mixed **index** )
>
> Retrieves the MixedInk identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> MixedInk **itemByName**( String **name** )
>
> Retrieves the MixedInk that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> MixedInk **itemByID**( Number **id** )
>
> Retrieves the MixedInk that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MixedInk **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the MixedInks within the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Start-of-range selector. Can accept: MixedInk, Long Integer or String. |
| Mixed | to | End-of-range selector. Can accept: MixedInk, Long Integer or String. |

> MixedInk **firstItem**()
>
> Selects the collection's first MixedInk.
> MixedInk **lastItem**()
>
> Selects the collection's last MixedInk.
> MixedInk **middleItem**()
>
> Selects the collection's middle MixedInk.
> MixedInk **previousItem**( MixedInk **obj** )
>
> Gets the MixedInk whose index precedes the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MixedInk | obj | MixedInk whose index comes immediately after the target MixedInk. |

> MixedInk **nextItem**( MixedInk **obj** )
>
> Gets the collection member located after the specified MixedInk.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MixedInk | obj | MixedInk whose index comes immediately before the target MixedInk. |

> MixedInk **anyItem**()
>
> Selects any MixedInk in the collection.
> MixedInk **everyItem**()
>
> Selects every MixedInk in the collection.
> String **toSource**()
>
> Produces executable source text that evaluates back to the MixedInk.
> MixedInk **[]**( Number **index** )
>
> Retrieves the MixedInk at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## MojikumiTableDefaults

Mojikumi table options.

### Class

> _Read Only_
>
> Number **NOTHING** = 1851876449
>
> Disables mojikumi.
> _Read Only_
>
> Number `LINE_END_ALL_ONE_HALF_EM_ENUM` = 1246572593
>
> Applies half-width spacing to every character.
> _Read Only_
>
> Number `ONE_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM` = 1246572594
>
> Applies one-space line indents and line end uke one half space.
> _Read Only_
>
> Number `ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM` = 1246572595
>
> Applies one full-space or half-space indentation and line end uke one half space.
> _Read Only_
>
> Number `ONE_OR_ONE_HALF_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM` = 1246572596
>
> Applies full-width spacing to every character except the final character in the line; that last character may use full- or half-width spacing.
> _Read Only_
>
> Number `ONE_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM` = 1246572597
>
> Applies one full-space indentation and full-width spacing for every character.
> _Read Only_
>
> Number `ONE_EM_INDENT_LINE_END_ALL_NO_FLOAT_ENUM` = 1246572598
>
> Applies one full-space indentation and no-float spacing for every character.
> _Read Only_
>
> Number `ONE_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM` = 1246572599
>
> Applies one full-space indentation with line end uke no float.
> _Read Only_
>
> Number `ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM` = 1246572600
>
> Applies half-space or one full-space indentation with line end uke no float.
> _Read Only_
>
> Number `ONE_EM_INDENT_LINE_END_ALL_ONE_HALF_EM_ENUM` = 1246572601
>
> Applies one full-space indentation and half-width spacing for every character.
> _Read Only_
>
> Number `LINE_END_ALL_ONE_EM_ENUM` = 1246572848
>
> Applies full-width spacing to every character.
> _Read Only_
>
> Number `LINE_END_UKE_NO_FLOAT_ENUM` = 1246572849
>
> Line end uke no float is applied.
> _Read Only_
>
> Number `ONE_OR_ONE_HALF_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM` = 1246572850
>
> Applies one-space or one-half-space indentation plus full-width spacing for punctuation and the line's final character.
> _Read Only_
>
> Number `ONE_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM` = 1246572851
>
> Applies one full-space indentation plus full-width spacing for punctuation and the line's final character.
> _Read Only_
>
> Number `LINE_END_PERIOD_ONE_EM_ENUM` = 1246572852
>
> Applies full-width spacing to punctuation.
> _Read Only_
>
> Number `TRAD_CHINESE_DEFAULT` = 1246572853
>
> Optimizes mojikumi tsume and aki for Traditional Chinese centered punctuation glyphs.
> _Read Only_
>
> Number `SIMP_CHINESE_DEFAULT` = 1246572854
>
> Optimizes mojikumi tsume and aki for Simplified Chinese punctuation glyphs.
