# Indexes, Indexing Sort Option, Indexing Sort Options, Ink Types ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Indexes; IndexingSortOption; IndexingSortOptions; InkTypes; Ink — Instance; Inks; InnerGlowSetting — Instance; InnerGlowSource; InnerShadowSetting — Instance.

## Indexes

Collection object for indexes.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size in objects.

### Methods

> Index **add**( Object **withProperties** )
>
> Creates an Index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new Index. (Optional) |

> Number **count**()
>
> Reports how many elements are in the Index collection.
> Index **item**( Mixed **index** )
>
> Gets the Index for the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> Index **itemByName**( String **name** )
>
> Gets the Index with the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name string. |

> Index **itemByID**( Number **id** )
>
> Gets the Index with the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Index **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Indexes inside the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as an Index, Long Integer, or String. |
| Mixed | to | Range end, supplied as an Index, Long Integer, or String. |

> Index **firstItem**()
>
> Gets the first Index in the collection.
> Index **lastItem**()
>
> Gets the last Index in the collection.
> Index **middleItem**()
>
> Gets the middle Index in the collection.
> Index **previousItem**( Index **obj** )
>
> Gets the Index whose index is immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Index | obj | Index that comes after the desired Index. |

> Index **nextItem**( Index **obj** )
>
> Gets the Index whose index comes after the specified Index in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Index | obj | Index whose index precedes the desired Index. |

> Index **anyItem**()
>
> Gets any Index in the collection.
> Index **everyItem**()
>
> Gets every Index in the collection.
> String **toSource**()
>
> Builds a string that returns the Index when executed.
> Index **[]**( Number **index** )
>
> Gets the Index at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## IndexingSortOption

Sort option for indexing.

### Instance

> _Read Only_
>
> String **name**
>
> Provides this IndexingSortOption object's name.
> _Read Only_
>
> Boolean **isValid**
>
> True means the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent reference for this IndexingSortOption; expected to be an Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of this IndexingSortOption inside its containing object.
> _Read Only_
>
> Events **events**
>
> Holds the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listener collection.
> Boolean **include**
>
> When true, this indexing sort option is included.
> Number **priority**
>
> Priority assigned to this indexing sort option; earlier entries are shifted down.
> Mixed **headerType**
>
> Header type; can return a HeaderTypes enumerator or a NothingEnum enumerator.
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> String **toSource**()
>
> Builds executable source text that recreates the IndexingSortOption when run.
> IndexingSortOption **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler; can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler; can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## IndexingSortOptions

Indexing sort options are represented as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Reports how many IndexingSortOption elements are present.
> IndexingSortOption **item**( Mixed **index** )
>
> Retrieves the IndexingSortOption identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> IndexingSortOption **itemByName**( String **name** )
>
> Retrieves the IndexingSortOption that matches the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> IndexingSortOption **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the IndexingSortOptions that fall inside the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as an IndexingSortOption, index, or name. Can accept: IndexingSortOption, Long Integer or String. |
| Mixed | to | Range end, supplied as an IndexingSortOption, index, or name. Can accept: IndexingSortOption, Long Integer or String. |

> IndexingSortOption **firstItem**()
>
> Retrieves the first IndexingSortOption in this collection.
> IndexingSortOption **lastItem**()
>
> Retrieves the last IndexingSortOption in this collection.
> IndexingSortOption **middleItem**()
>
> Retrieves the middle IndexingSortOption in this collection.
> IndexingSortOption **previousItem**( IndexingSortOption **obj** )
>
> Retrieves the IndexingSortOption whose index immediately precedes the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IndexingSortOption | obj | Reference point: the IndexingSortOption that comes after the desired IndexingSortOption. |

> IndexingSortOption **nextItem**( IndexingSortOption **obj** )
>
> Retrieves the IndexingSortOption whose index immediately follows the specified IndexingSortOption in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IndexingSortOption | obj | Reference point: the IndexingSortOption that comes before the desired IndexingSortOption. |

> IndexingSortOption **anyItem**()
>
> Retrieves any IndexingSortOption from this collection.
> IndexingSortOption **everyItem**()
>
> Retrieves every IndexingSortOption from this collection.
> String **toSource**()
>
> Builds executable source text that recreates the IndexingSortOption when run.
> IndexingSortOption **[]**( Number **index** )
>
> Retrieves the IndexingSortOption at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## InkTypes

Options that describe ink trapping type.

### Class

> _Read Only_
>
> Number **NORMAL** = 1852797549
>
> Uses standard process inks plus most spot inks.
> _Read Only_
>
> Number **OPAQUE** = 1769230192
>
> For metallic inks, use this with heavy, nontransparent inks; underlying colors do not trap, but edge trapping remains available.
> _Read Only_
>
> Number **TRANSPARENT** = 1769231474
>
> For clear inks, this makes underlying items trap; recommended for varnishes and dieline inks.
> _Read Only_
>
> Number `OPAQUE_IGNORE` = 1769228647
>
> For inks that interact poorly with other inks, use this heavy, nontransparent setting to stop underlying-color trapping while keeping edge trapping available.

## Ink — Instance

> _Read Only_
>
> Boolean **isProcessInk**
>
> True indicates that the ink is a process ink.
> _Read Only_
>
> String **name**
>
> Provides this Ink object's name.
> _Read Only_
>
> Number **solidity**
>
> Ink solidity value. (Range: 0.0 to 1.0)
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Ink.
> _Read Only_
>
> Boolean **isValid**
>
> True means the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent reference for this Ink; expected to be an Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of this Ink inside its containing object.
> _Read Only_
>
> Events **events**
>
> Holds the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listener collection.
> String **aliasInkName**
>
> Ink object that this ink maps to.
> Number **angle**
>
> Ink angle. (Range: 0 to 360)
> Boolean **convertToProcess**
>
> Converts spot inks into process inks.
> Number **frequency**
>
> Ink frequency. (Range: 1 to 500)
> Number **neutralDensity**
>
> Ink neutral density. (Range: 0.001 to 10.0)
> Boolean **printInk**
>
> When true, the ink prints. Valid only when printing separations.
> Number **trapOrder**
>
> Ink position within the trapping sequence.
> InkTypes **inkType**
>
> Ink trapping type.
> String **label**
>
> Accepts any string value for this property.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **insertLabel**( String **key**, String **value** )
>
> Stores the value associated with the specified key in the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds executable source text that recreates the Ink when run.
> Ink **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler; can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler; can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Inks

Inks are exposed as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Reports how many Ink elements are present.
> Ink **item**( Mixed **index** )
>
> Retrieves the Ink identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> Ink **itemByName**( String **name** )
>
> Retrieves the Ink that matches the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Ink **itemByID**( Number **id** )
>
> Retrieves the Ink that matches the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Ink **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the Inks that fall inside the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as an Ink, index, or name. Can accept: Ink, Long Integer or String. |
| Mixed | to | Range end, supplied as an Ink, index, or name. Can accept: Ink, Long Integer or String. |

> Ink **firstItem**()
>
> Retrieves the first Ink in this collection.
> Ink **lastItem**()
>
> Retrieves the last Ink in this collection.
> Ink **middleItem**()
>
> Retrieves the middle Ink in this collection.
> Ink **previousItem**( Ink **obj** )
>
> Retrieves the Ink whose index immediately precedes the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Ink | obj | Reference point: the Ink that comes after the desired Ink. |

> Ink **nextItem**( Ink **obj** )
>
> Retrieves the Ink whose index immediately follows the specified Ink in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Ink | obj | Reference point: the Ink that comes before the desired Ink. |

> Ink **anyItem**()
>
> Retrieves any Ink from this collection.
> Ink **everyItem**()
>
> Retrieves every Ink from this collection.
> String **toSource**()
>
> Builds executable source text that recreates the Ink when run.
> Ink **[]**( Number **index** )
>
> Retrieves the Ink at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## InnerGlowSetting — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True means the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent reference for this InnerGlowSetting; expected to be a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting.
> _Read Only_
>
> Events **events**
>
> Holds the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listener collection.
> Boolean **applied**
>
> When true, the inner glow effect is active.
> BlendMode **blendMode**
>
> Blend mode used by the inner glow effect.
> Number **opacity**
>
> Inner glow opacity, expressed as a percentage. (Range: 0 to 100)
> Number **noise**
>
> Noise amount applied to the inner glow, as a percentage. (Range: 0 to 100)
> Swatch **effectColor**
>
> Inner glow color, supplied as a swatch (color, gradient, tint, or mixed ink) or an array of color values. The color mode controls the array shape: RGB uses three values in the range 0 to 255 formatted as [R,G,B]; CMYK uses four percentage values, each in the range 0 to 100, formatted as [C,M,Y,K]; LAB uses [L,A,B], where L is in the range 0 to 100 and A and B are in the range -128 to 127.
> GlowTechnique **technique**
>
> Technique selected for the inner glow.
> Number **spread**
>
> Spread percentage relative to the glow's dimensions. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **size**
>
> Inner glow size.
> InnerGlowSource **source**
>
> Light source used by the inner glow effect.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Builds executable source text that recreates the InnerGlowSetting when run.
> InnerGlowSetting **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler; can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler; can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## InnerGlowSource

Options for choosing an inner glow source.

### Class

> _Read Only_
>
> Number `CENTER_SOURCED` = 2020618593
>
> Glow output starts at the object's center.
> _Read Only_
>
> Number `EDGE_SOURCED` = 2020618594
>
> Glow output starts at the object's edge.

## InnerShadowSetting — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True means the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent reference for this InnerShadowSetting; expected to be a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting.
> _Read Only_
>
> Events **events**
>
> Holds the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listener collection.
> Measurement Unit (Number or String)=any **xOffset**
>
> Horizontal shadow offset.
> Measurement Unit (Number or String)=any **yOffset**
>
> Vertical shadow offset.
> Boolean **applied**
>
> When true, the inner shadow effect is active.
> Swatch **effectColor**
>
> Inner shadow color, supplied as a swatch (color, gradient, tint, or mixed ink) or an array of color values. The color mode controls the array shape: RGB uses three values in the range 0 to 255 formatted as [R,G,B]; CMYK uses four percentage values, each in the range 0 to 100, formatted as [C,M,Y,K]; LAB uses [L,A,B], where L is in the range 0 to 100 and A and B are in the range -128 to 127.
> BlendMode **blendMode**
>
> Blend mode used by the inner shadow effect.
> Number **opacity**
>
> Inner shadow opacity, expressed as a percentage. (Range: 0 to 100)
> Number **angle**
>
> Angle used to cast the inner shadow. (Range: -360 to 360)
> Measurement Unit (Number or String)=any **distance**
>
> Distance separating the InnerShadowSetting and the shadow.
> Boolean **useGlobalLight**
>
> When true, uses the global light angle.
> Number **chokeAmount**
>
> Choke amount relative to shadow size, in percent. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **size**
>
> Inner shadow size.
> Number **noise**
>
> Noise amount added to the shadow, as a percentage. (Range: 0 to 100)
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Builds executable source text that recreates the InnerShadowSetting when run.
> InnerShadowSetting **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler; can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler; can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
