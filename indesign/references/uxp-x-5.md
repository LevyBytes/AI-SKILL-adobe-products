# Xml Tag, Xml Tags, Xml Transform File, Xml View Preference

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: XMLTag; XMLTags; XMLTransformFile; XMLViewPreference.

## XMLTag

A tag used for XML markup.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique XMLTag ID.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the XMLTag (a Application or Document).
> _Read Only_
>
> Number **index**
>
> Position of the XMLTag within its containing object.
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
> String **name**
>
> XMLTag name.
> Mixed **tagColor**
>
> Tag color. Supply either three double values for R, G, and B within 0 to 255, or a UI color. Returns either: Array of 3 Reals (0 - 255) or UIColors enumerator.
> String **label**
>
> Free-form string property.
> Object **properties**
>
> Allows several properties to be set together.

### Methods

> **remove**( Mixed **replacingWith** )
>
> Deletes this tag.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | replacingWith | Replacement tag value. Can accept: XMLTag or String. |

> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Builds a source string that evaluates back to the XMLTag.
> XMLTag **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
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

## XMLTags

A collection containing XML tags.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> XMLTag **add**( String **name**, Mixed **tagColor**, Object **withProperties** )
>
> Creates a new tag.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name assigned to the tag. (Optional) |
| Mixed | tagColor | Tag color. Provide either three double values for R, G, and B in the 0 to 255 range. A UI color is also valid. Accepts either: Array of 3 Reals (0 - 255) or UIColors enumerator. (Optional) |
| Object | withProperties | Starting property values for the new XMLTag. (Optional) |

> Number **count**()
>
> Displays the XMLTag element count.
> XMLTag **item**( Mixed **index** )
>
> Gets the XMLTag identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to select. Can accept: Long Integer or String. |

> XMLTag **itemByName**( String **name** )
>
> Gets the XMLTag with that name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> XMLTag **itemByID**( Number **id** )
>
> Gets the XMLTag with that ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> XMLTag **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the XMLTags inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | XMLTag, index, or name that starts the range. Can accept: XMLTag, Long Integer or String. |
| Mixed | to | XMLTag, index, or name that ends the range. Can accept: XMLTag, Long Integer or String. |

> XMLTag **firstItem**()
>
> Gets the first XMLTag in the collection.
> XMLTag **lastItem**()
>
> Gets the last XMLTag in the collection.
> XMLTag **middleItem**()
>
> Gets the middle XMLTag in the collection.
> XMLTag **previousItem**( XMLTag **obj** )
>
> Gets the XMLTag whose index comes immediately before the specified XMLTag.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLTag | obj | XMLTag whose index follows the target XMLTag. |

> XMLTag **nextItem**( XMLTag **obj** )
>
> Gets the XMLTag whose index comes after the supplied XMLTag in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLTag | obj | XMLTag whose index comes before the target XMLTag. |

> XMLTag **anyItem**()
>
> Gets any XMLTag in the collection.
> XMLTag **everyItem**()
>
> Gets every XMLTag in the collection.
> String **toSource**()
>
> Builds a source string that evaluates back to the XMLTag.
> XMLTag **[]**( Number **index** )
>
> Gets the XMLTag at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## XMLTransformFile

A file used when performing XML transformation.

### Class

> _Read Only_
>
> Number `STYLESHEET_IN_XML` = 1483961208
>
> Uses the stylesheet declared in the XML.

## XMLViewPreference

Preferences for viewing XML.

### Instance

> _Read Only_
>
> Boolean **showTagOptions**
>
> When true, opens the tag options dialog while tagging an item whose parent has no tag.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the XMLViewPreference (a Application or Document).
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
> Boolean **showStructure**
>
> When true, shows the structure view.
> Boolean **showTagMarkers**
>
> When true, shows XML tags.
> Boolean **showTaggedFrames**
>
> When true, shows XML tags inside tagged frames.
> Boolean **showAttributes**
>
> When true, shows attributes together with elements in the structure view. Note: Applies only when show structure is true.
> Boolean **showTextSnippets**
>
> When true, structure view includes text snippets from element content. Note: Applies only when show structure is true.
> Object **properties**
>
> Allows several properties to be set together.

### Methods

> String **toSource**()
>
> Builds a source string that evaluates back to the XMLViewPreference.
> XMLViewPreference **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
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
