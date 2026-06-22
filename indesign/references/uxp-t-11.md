# Trap Preset, Trap Presets, Trapping, Type Contextual Ui Preference

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: TrapPreset; TrapPresets; Trapping — Class; TypeContextualUiPreference.

## TrapPreset

A trap preset definition.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the TrapPreset.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> The owning parent for this TrapPreset, either a Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of the TrapPreset inside its containing object.
> _Read Only_
>
> Events **events**
>
> The events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> The event-listener collection.
> String **name**
>
> Name assigned to the TrapPreset.
> Measurement Unit (Number or String)=any **defaultTrapWidth**
>
> For colors other than solid black, this sets the default trap width. (Allowed ranges by unit: points: 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
> Measurement Unit (Number or String)=any **blackWidth**
>
> Width setting used for black. (Allowed ranges by unit: points: 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
> EndJoin **trapJoin**
>
> Join style used by the trap preset.
> TrapEndTypes **trapEnd**
>
> Shape applied at three-way trap intersections.
> Boolean **objectsToImages**
>
> When true, vector objects are made to overlap bitmap images.
> Boolean **imagesToImages**
>
> When true, trapping is enabled along boundaries where bitmap images overlap or touch.
> Boolean **internalImages**
>
> When true, trapping is enabled between colors inside individual bitmap images.
> Boolean **oneBitImages**
>
> When true, one-bit images trap to adjoining objects.
> TrapImagePlacementTypes **imagePlacement**
>
> Placement setting for traps between vector objects and bitmap images.
> Number **stepThreshold**
>
> Percentage difference required between components of adjoining colors before a trap is made. (Range: 1 to 100)
> Number **blackColorThreshold**
>
> Minimum black-ink percentage needed before applying the black width setting. (Range: 0 to 100)
> Number **blackDensity**
>
> Neutral-density value at which an ink counts as black, including higher values. (Range: .001 to 10)
> Number **slidingTrapThreshold**
>
> Neutral-density percentage difference between adjoining colors that moves the trap away from the darker side of the color edge toward the centerline. (Range: 0 to 100)
> Number **colorReduction**
>
> Percentage amount by which components from adjoining colors reduce the trap color. (Range: 0 to 100) Note: 0% produces a trap whose neutral density matches the darker color.
> String **label**
>
> A string-valued property.
> Object **properties**
>
> Lets multiple property values be assigned together.

### Methods

> TrapPreset **duplicate**()
>
> Creates a duplicate of the TrapPreset.
> **remove**( TrapPreset **replacingWith** )
>
> Removes this trap preset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TrapPreset | replacingWith | Trap preset applied instead of the deleted preset. |

> **insertLabel**( String **key**, String **value** )
>
> Stores the label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Gets the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **toSource**()
>
> Builds a string that, when run, recreates the TrapPreset.
> TrapPreset **getElements**()
>
> Resolves the object specifier and returns object references in an array.
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
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TrapPresets

Collection object for trap presets.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> TrapPreset **add**( Object **withProperties** )
>
> Creates a TrapPreset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new TrapPreset. (Optional) |

> Number **count**()
>
> Shows how many elements are in the TrapPreset collection.
> TrapPreset **item**( Mixed **index** )
>
> Gets the TrapPreset selected by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector value for lookup by index or name. Allowed: Long Integer or String. |

> TrapPreset **itemByName**( String **name** )
>
> Gets the TrapPreset selected by the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> TrapPreset **itemByID**( Number **id** )
>
> Gets the TrapPreset selected by the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> TrapPreset **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TrapPresets contained in the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting range selector: TrapPreset, Long Integer, or String. |
| Mixed | to | Ending range selector: TrapPreset, Long Integer, or String. |

> TrapPreset **firstItem**()
>
> Gets the first TrapPreset in the collection.
> TrapPreset **lastItem**()
>
> Gets the final TrapPreset in the collection.
> TrapPreset **middleItem**()
>
> Gets the collection's middle TrapPreset.
> TrapPreset **previousItem**( TrapPreset **obj** )
>
> Gets the TrapPreset whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TrapPreset | obj | Index of the TrapPreset that follows the requested TrapPreset. |

> TrapPreset **nextItem**( TrapPreset **obj** )
>
> Gets the TrapPreset whose index comes immediately after the specified TrapPreset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TrapPreset | obj | TrapPreset whose index precedes the requested TrapPreset. |

> TrapPreset **anyItem**()
>
> Gets any TrapPreset from the collection.
> TrapPreset **everyItem**()
>
> Gets every TrapPreset in the collection.
> String **toSource**()
>
> Builds a string that, when run, recreates the TrapPreset.
> TrapPreset **[]**( Number **index** )
>
> Gets the TrapPreset at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## Trapping — Class

> _Read Only_
>
> Number **OFF** = 1330005536
>
> Trapping disabled.
> _Read Only_
>
> Number `APPLICATION_BUILTIN` = 1114199152
>
> Built into the application.
> _Read Only_
>
> Number `ADOBE_INRIP` = 1919512660
>
> Adobe in-RIP trapping.

## TypeContextualUiPreference

Type contextual UI preferences.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Application **parent**
>
> The owning parent for this TypeContextualUiPreference is a Application.
> _Read Only_
>
> Events **events**
>
> The events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> The event-listener collection.
> Boolean **showAlternatesUi**
>
> Preference that controls whether contextual UI for alternates appears.
> Boolean **showFractionsUi**
>
> Preference that controls whether contextual UI for fractions appears.
> Object **properties**
>
> Lets multiple property values be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that, when run, recreates the TypeContextualUiPreference.
> TypeContextualUiPreference **getElements**()
>
> Resolves the object specifier and returns object references in an array.
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
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
