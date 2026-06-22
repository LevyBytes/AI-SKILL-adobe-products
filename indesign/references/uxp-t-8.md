# Texts, Threaded Text Frame Text Options, Thumbs Per Page, Tiling Types ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Texts; ThreadedTextFrameTextOptions; ThumbsPerPage; TilingTypes; TimingGroup; TimingGroups; TimingList; TimingLists; TimingSetting — Instance; TimingTarget; TimingTargets; Tint.

## Texts

Collection containing text objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the Text collection.
> Text **item**( Mixed **index** )
>
> Returns the Text identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Allowed values include: Long Integer or String. |

> Text **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns Texts in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as Text, index, or name. Allowed values include: Text, Long Integer or String. |
| Mixed | to | Range end, supplied as Text, index, or name. Allowed values include: Text, Long Integer or String. |

> Text **firstItem**()
>
> Returns the collection's first Text.
> Text **lastItem**()
>
> Returns the collection's last Text.
> Text **middleItem**()
>
> Returns the collection's middle Text.
> Text **previousItem**( Text **obj** )
>
> Returns the Text at the index before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Text | obj | Index of the Text that follows the requested Text. |

> Text **nextItem**( Text **obj** )
>
> Returns the Text at the index after the specified Text in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Text | obj | Text whose index precedes the requested Text. |

> Text **anyItem**()
>
> Supplies any Text from the collection.
> Text **everyItem**()
>
> Supplies all Text objects in the collection.
> String **toSource**()
>
> Creates a string that can be executed to return the Text.
> Text **[]**( Number **index** )
>
> Returns the Text for the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## ThreadedTextFrameTextOptions

Text selection scope to use for threaded text frames.

### Class

> _Read Only_
>
> Number `TEXT_WITHIN_TEXTFRAME` = 1700021844
>
> Text contained in the current text frame.
> _Read Only_
>
> Number `TEXT_FOR_COMPLETE_STORY` = 1698911092
>
> Text from the complete story.

## ThumbsPerPage

Choices controlling how many thumbnails appear on each page.

### Class

> _Read Only_
>
> Number **K1X2** = 1949399090
>
> Uses one page row with two thumbnails in that row.
> _Read Only_
>
> Number **K2X2** = 1949464626
>
> Uses two rows of two.
> _Read Only_
>
> Number **K3X3** = 1949530163
>
> Uses three rows of three.
> _Read Only_
>
> Number **K4X4** = 1949595700
>
> Uses four rows of four.
> _Read Only_
>
> Number **K5X5** = 1949661237
>
> Uses five rows of five.
> _Read Only_
>
> Number **K6X6** = 1949726774
>
> Uses six rows of six.
> _Read Only_
>
> Number **K7X7** = 1949792311
>
> Uses seven rows of seven.

## TilingTypes

Options that select the tiling type.

### Class

> _Read Only_
>
> Number **AUTO** = 1635019116
>
> Computes the required tile count automatically, including overlap. For information, see tiling overlap.
> _Read Only_
>
> Number `AUTO_JUSTIFIED` = 1634366324
>
> Raises overlap as needed so the right edges of the right-most tiles line up with the document page's right edge, and the bottom edges of the bottom-most tiles line up with the document page's bottom edge. For information, see tiling overlap.
> _Read Only_
>
> Number **MANUAL** = 1835955308
>
> Prints one tile with its upper-left corner placed at the ruler zero point.

## TimingGroup

Timing group object.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> TimingList **parent**
>
> Parent object of the TimingGroup (a TimingList).
> _Read Only_
>
> Number **index**
>
> Position of the TimingGroup within its container.
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
> _Read Only_
>
> TimingTargets **timingTargets**
>
> Timing target collection.
> Number **placement**
>
> Timing group's placement in the timing list.
> Number **plays**
>
> How many times this timing group plays.
> Boolean **playsLoop**
>
> True when the timing group loops.
> Object **properties**
>
> Allows several properties to be set at once.

### Methods

> **remove**()
>
> Removes the TimingGroup.
> **unlink**()
>
> Splits every target in the group into its own group within this timing list.
> TimingGroup **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the timing group or target to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: Use it when to specifies before or after. Allowed values include: TimingGroup, TimingTarget or TimingList. (Optional) |

> String **toSource**()
>
> Creates an executable string that returns the TimingGroup.
> TimingGroup **getElements**()
>
> Resolves the object specifier and returns an array of object references.
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
| Mixed | handler | Event handler. Allowed values include: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Allowed values include: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TimingGroups

Collection of timing data objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for the collection.

### Methods

> TimingGroup **add**( Mixed **dynamicTarget**, Number **delaySeconds**, Object **withProperties** )
>
> Creates a new timing group.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | dynamicTarget | Page item target for animation, media, or mso. Allowed values include: PageItem, Graphic, Behavior or MediaItem. |
| Number | delaySeconds | Target delay time, in seconds. (Optional) |
| Object | withProperties | Starting property values for the new TimingGroup. (Optional) |

> Number **count**()
>
> Shows how many elements are in the TimingGroup collection.
> TimingGroup **item**( Mixed **index** )
>
> Returns the TimingGroup identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Allowed values include: Long Integer or String. |

> TimingGroup **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns TimingGroups in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as TimingGroup, index, or name. Allowed values include: TimingGroup, Long Integer or String. |
| Mixed | to | Range end, supplied as TimingGroup, index, or name. Allowed values include: TimingGroup, Long Integer or String. |

> TimingGroup **firstItem**()
>
> Returns the collection's first TimingGroup.
> TimingGroup **lastItem**()
>
> Returns the collection's last TimingGroup.
> TimingGroup **middleItem**()
>
> Returns the collection's middle TimingGroup.
> TimingGroup **previousItem**( TimingGroup **obj** )
>
> Returns the TimingGroup at the index before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TimingGroup | obj | Index of the TimingGroup that follows the requested TimingGroup. |

> TimingGroup **nextItem**( TimingGroup **obj** )
>
> Returns the TimingGroup at the index after the specified TimingGroup in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TimingGroup | obj | TimingGroup whose index precedes the requested TimingGroup. |

> TimingGroup **anyItem**()
>
> Supplies any TimingGroup from the collection.
> TimingGroup **everyItem**()
>
> Supplies all TimingGroup objects in the collection.
> String **toSource**()
>
> Creates a string that can be executed to return the TimingGroup.
> TimingGroup **[]**( Number **index** )
>
> Returns the TimingGroup for the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## TimingList

Timing list object.

### Instance

> _Read Only_
>
> DynamicTriggerEvents **triggerEvent**
>
> Trigger event.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> TimingSetting **parent**
>
> Parent object of the TimingList (a TimingSetting).
> _Read Only_
>
> Number **index**
>
> Position of the TimingList within its container.
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
> _Read Only_
>
> TimingGroups **timingGroups**
>
> Collection of timing data objects.
> Object **properties**
>
> Allows several properties to be set at once.

### Methods

> **remove**()
>
> Removes the TimingList.
> String **toSource**()
>
> Creates an executable string that returns the TimingList.
> TimingList **getElements**()
>
> Resolves the object specifier and returns an array of object references.
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
| Mixed | handler | Event handler. Allowed values include: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Allowed values include: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TimingLists

Collection of timing lists.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Gives the element total for the TimingList.
> TimingList **add**( DynamicTriggerEvents **triggerEvent**, Object **withProperties** )
>
> Creates a TimingList driven by an event trigger.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DynamicTriggerEvents | triggerEvent | Trigger Event |
| Object | withProperties | Starting property values for the created TimingList. (Optional) |

> TimingList **item**( Mixed **index** )
>
> Gets the TimingList identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> TimingList **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TimingLists covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting TimingList, index, or name for the range. Accepts: TimingList, Long Integer or String. |
| Mixed | to | Ending TimingList, index, or name for the range. Accepts: TimingList, Long Integer or String. |

> TimingList **firstItem**()
>
> Gets the first TimingList from the collection.
> TimingList **lastItem**()
>
> Gets the final TimingList from the collection.
> TimingList **middleItem**()
>
> Gets the middle TimingList from the collection.
> TimingList **previousItem**( TimingList **obj** )
>
> Gets the TimingList positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TimingList | obj | Index of the TimingList located after the requested TimingList. |

> TimingList **nextItem**( TimingList **obj** )
>
> Gets the TimingList positioned after the specified TimingList in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TimingList | obj | TimingList located before the requested TimingList. |

> TimingList **anyItem**()
>
> Gets one TimingList from the collection.
> TimingList **everyItem**()
>
> Gets all TimingList objects in the collection.
> String **toSource**()
>
> Builds a string that returns the TimingList when run.
> TimingList **[]**( Number **index** )
>
> Gets the TimingList at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## TimingSetting — Instance

> _Read Only_
>
> Object **unassignedDynamicTargets**
>
> Spread dynamic targets that have not been assigned.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the TimingSetting (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, MasterSpread or Spread).
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> _Read Only_
>
> TimingLists **timingLists**
>
> Collection containing timing lists.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> String **toSource**()
>
> Builds a string that returns the TimingSetting when run.
> TimingSetting **getElements**()
>
> Resolves this object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler value. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type that was registered. |
| Mixed | handler | Event handler that was registered. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TimingTarget

Represents a timing target.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> TimingGroup **parent**
>
> Parent object for the TimingTarget (a TimingGroup).
> _Read Only_
>
> Number **index**
>
> Position of the TimingTarget within its containing object.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Mixed **dynamicTarget**
>
> Page item target used for an animation, media item, or mso. Can return: PageItem, Graphic, Behavior or MediaItem.
> Number **delaySeconds**
>
> Delay, in seconds, for one target or for a target group after the previous group finishes.
> Boolean **reverseAnimation**
>
> Set this to true to reverse animation on rolloff. Valid only for self rolloff trigger event.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> **remove**()
>
> Removes the TimingTarget.
> **unlink**()
>
> Detaches the target from this group and adds it at the end of this timing list.
> TimingTarget **move**( LocationOptions **to**, Mixed **reference** )
>
> Places the timing group or target at the specified location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: Required when the to parameter specifies before or after. Accepts: TimingGroup, TimingTarget or TimingList. (Optional) |

> String **toSource**()
>
> Builds a string that returns the TimingTarget when run.
> TimingTarget **getElements**()
>
> Resolves this object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler value. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type that was registered. |
| Mixed | handler | Event handler that was registered. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TimingTargets

Collection object for timing targets.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> TimingTarget **add**( Mixed **dynamicTarget**, Number **delaySeconds**, Object **withProperties** )
>
> Creates a target item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | dynamicTarget | Page item target used for an animation, media item, or mso. Accepts: PageItem, Graphic, Behavior or MediaItem. |
| Number | delaySeconds | Delay time in seconds for a target. (Optional) |
| Object | withProperties | Starting property values for the created TimingTarget. (Optional) |

> Number **count**()
>
> Gives the element total for the TimingTarget.
> TimingTarget **item**( Mixed **index** )
>
> Gets the TimingTarget identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> TimingTarget **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TimingTargets covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting TimingTarget, index, or name for the range. Accepts: TimingTarget, Long Integer or String. |
| Mixed | to | Ending TimingTarget, index, or name for the range. Accepts: TimingTarget, Long Integer or String. |

> TimingTarget **firstItem**()
>
> Gets the first TimingTarget from the collection.
> TimingTarget **lastItem**()
>
> Gets the final TimingTarget from the collection.
> TimingTarget **middleItem**()
>
> Gets the middle TimingTarget from the collection.
> TimingTarget **previousItem**( TimingTarget **obj** )
>
> Gets the TimingTarget positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TimingTarget | obj | Index of the TimingTarget located after the requested TimingTarget. |

> TimingTarget **nextItem**( TimingTarget **obj** )
>
> Gets the TimingTarget positioned after the specified TimingTarget in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TimingTarget | obj | TimingTarget located before the requested TimingTarget. |

> TimingTarget **anyItem**()
>
> Gets one TimingTarget from the collection.
> TimingTarget **everyItem**()
>
> Gets all TimingTarget objects in the collection.
> String **toSource**()
>
> Builds a string that returns the TimingTarget when run.
> TimingTarget **[]**( Number **index** )
>
> Gets the TimingTarget at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Tint

Represents a tint swatch.

### Instance

> _Read Only_
>
> Color **baseColor**
>
> Color used as the basis for the tint.
> _Read Only_
>
> String **name**
>
> Name assigned to the Tint.
> _Read Only_
>
> ColorModel **model**
>
> Color model value.
> _Read Only_
>
> ColorSpace **space**
>
> Color space value.
> _Read Only_
>
> Number **colorValue**
>
> Ink percentages that define the color. Note: Required value count and allowed ranges depend on the color space. For RGB, provide three values, each from 0 to 255; for CMYK, provide four values for C, M, Y, and K, each from 0 to 100; for LAB, provide three values for L (Range: 0 to 100), A (Range: -128 to 127), and B (Range: -128 to 127); for mixed ink, provide one value per ink in the ink list, each from 0 to 100.
> _Read Only_
>
> ColorGroup **parentColorGroup**
>
> Color group containing the swatch.
> _Read Only_
>
> Number **id**
>
> Unique ID for the Tint.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Tint (a Application or Document).
> _Read Only_
>
> Number **index**
>
> Position of the Tint within its containing object.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Number **tintValue**
>
> Base color percentage. (Range: 0 to 100)
> String **label**
>
> Property that accepts any string value.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> **remove**( Swatch **replacingWith** )
>
> Removes the swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Swatch | replacingWith | Swatch to use instead of the removed swatch. (Optional) |

> Tint **duplicate**()
>
> Creates a duplicate of the Tint.
> Swatch **merge**( Mixed **with** )
>
> Combines the specified swatches with this swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | with | Swatches to combine. Accepts: Array of Swatches, Swatch or String. |

> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value under the specified key in the label data.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label data stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a string that returns the Tint when run.
> Tint **getElements**()
>
> Resolves this object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler value. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type that was registered. |
| Mixed | handler | Event handler that was registered. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
