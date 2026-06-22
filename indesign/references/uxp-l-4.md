# List Boxes, List Type, Live Drawing Options, Locale ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ListBoxes; ListType; LiveDrawingOptions; Locale — Class; LocationOptions; LockStateValues.

## ListBoxes

A collection containing listboxes.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Reports the ListBox element count.
> ListBox **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a ListBox object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer that receives the new ListBox. (Optional) |
| LocationOptions | at | Insertion point for the ListBox, relative either to reference or to the containing object. (Optional) |
| Mixed | reference | Reference object. Allowed value types: Document, Spread, MasterSpread, Page, Layer or PageItem. Required for LocationOptions.BEFORE or LocationOptions.AFTER. (Optional) |
| Object | withProperties | Starting property values for the new ListBox. (Optional) |

> ListBox **item**( Mixed **index** )
>
> Gets the ListBox identified by the provided index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> ListBox **itemByName**( String **name** )
>
> Gets the ListBox that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> ListBox **itemByID**( Number **id** )
>
> Gets the ListBox that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> ListBox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ListBoxes contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | ListBox, index, or name that starts the range. Can accept: ListBox, Long Integer or String. |
| Mixed | to | ListBox, index, or name that ends the range. Can accept: ListBox, Long Integer or String. |

> ListBox **firstItem**()
>
> Gets the first ListBox in the collection.
> ListBox **lastItem**()
>
> Gets the last ListBox in the collection.
> ListBox **middleItem**()
>
> Gets the middle ListBox in the collection.
> ListBox **previousItem**( ListBox **obj** )
>
> Gets the ListBox whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ListBox | obj | Index of the ListBox that follows the wanted ListBox. |

> ListBox **nextItem**( ListBox **obj** )
>
> Gets the ListBox whose index comes after the specified ListBox in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ListBox | obj | ListBox whose index precedes the wanted ListBox. |

> ListBox **anyItem**()
>
> Gets any ListBox from the collection.
> ListBox **everyItem**()
>
> Gets all ListBox objects from the collection.
> String **toSource**()
>
> Produces executable string text that recreates the ListBox when run.
> ListBox **[]**( Number **index** )
>
> Gets the ListBox identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## ListType

Options that define list type.

### Class

> _Read Only_
>
> Number `NO_LIST` = 1280601711
>
> No list is applied.
> _Read Only_
>
> Number `BULLET_LIST` = 1280598644
>
> Bullet list is applied.
> _Read Only_
>
> Number `NUMBERED_LIST` = 1280601709
>
> Numbered list is applied.

## LiveDrawingOptions

Options for live drawing when mouse interaction causes page items to be redrawn on screen as the action happens.

### Class

> _Read Only_
>
> Number **NEVER** = 1347767926
>
> During mouse operations, use sprite mode rather than live screen drawing.
> _Read Only_
>
> Number **IMMEDIATELY** = 1347766637
>
> During mouse operations, live screen drawing starts immediately.
> _Read Only_
>
> Number **DELAYED** = 1347765349
>
> During mouse operations, live screen drawing begins after a delay when the user pauses before moving the mouse.

## Locale — Class

> _Read Only_
>
> Number `DANISH_LOCALE` = 1279476846
>
> Danish.
> _Read Only_
>
> Number `ENGLISH_LOCALE` = 1279477102
>
> English.
> _Read Only_
>
> Number `INTERNATIONAL_ENGLISH_LOCALE` = 1279477097
>
> International English.
> _Read Only_
>
> Number `FINNISH_LOCALE` = 1279477358
>
> Finnish.
> _Read Only_
>
> Number `FRENCH_LOCALE` = 1279477362
>
> French.
> _Read Only_
>
> Number `GERMAN_LOCALE` = 1279477613
>
> German.
> _Read Only_
>
> Number `ITALIAN_LOCALE` = 1279478132
>
> Italian.
> _Read Only_
>
> Number `PORTUGUESE_LOCALE` = 1279479911
>
> Portuguese.
> _Read Only_
>
> Number `SPANISH_LOCALE` = 1279480688
>
> Spanish.
> _Read Only_
>
> Number `SWEDISH_LOCALE` = 1279480695
>
> Swedish.
> _Read Only_
>
> Number `JAPANESE_LOCALE` = 1279478384
>
> Japanese.
> _Read Only_
>
> Number `ARABIC_LOCALE` = 1279476082
>
> Arabic
> _Read Only_
>
> Number `CZECH_LOCALE` = 1279476602
>
> Czech
> _Read Only_
>
> Number `GREEK_LOCALE` = 1279477618
>
> Greek
> _Read Only_
>
> Number `HEBREW_LOCALE` = 1279477858
>
> Hebrew
> _Read Only_
>
> Number `HUNGARIAN_LOCALE` = 1279477877
>
> Hungarian
> _Read Only_
>
> Number `POLISH_LOCALE` = 1279479916
>
> Polish
> _Read Only_
>
> Number `ROMANIAN_LOCALE` = 1279480431
>
> Romanian
> _Read Only_
>
> Number `RUSSIAN_LOCALE` = 1279480437
>
> Russian
> _Read Only_
>
> Number `TURKISH_LOCALE` = 1279480946
>
> Turkish
> _Read Only_
>
> Number `UKRAINIAN_LOCALE` = 1279481195
>
> Ukrainian
> _Read Only_
>
> Number `KOREAN_LOCALE` = 1279478639
>
> en_KoreanLocale
> _Read Only_
>
> Number `SIMPLIFIED_CHINESE_LOCALE` = 1279476590
>
> simplified chinese
> _Read Only_
>
> Number `TRADITIONAL_CHINESE_LOCALE` = 1279480951
>
> traditional chinese

## LocationOptions

Location options for positioning relative to a reference object or inside a containing object.

### Class

> _Read Only_
>
> Number **BEFORE** = 1650812527
>
> Positions the object before the reference object.
> _Read Only_
>
> Number **AFTER** = 1634104421
>
> Positions the object after the reference object.
> _Read Only_
>
> Number `AT_END` = 1701733408
>
> End position inside the containing object.
> _Read Only_
>
> Number `AT_BEGINNING` = 1650945639
>
> Beginning position inside the containing object.
> _Read Only_
>
> Number **UNKNOWN** = 1433299822
>
> No location has been set.

## LockStateValues

Options for lock states.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> No lock state is assigned.
> _Read Only_
>
> Number `UNMANAGED_STORY` = 1112700269
>
> The story is not managed.
> _Read Only_
>
> Number `CHECKED_IN_STORY` = 1112695657
>
> The story status is checked in.
> _Read Only_
>
> Number `CHECKED_OUT_STORY` = 1112695663
>
> The story status is checked out.
> _Read Only_
>
> Number `LOCKED_STORY` = 1112697963
>
> The story is in a locked state.
> _Read Only_
>
> Number `EMBEDDED_STORY` = 1112696173
>
> Embedded story state.
> _Read Only_
>
> Number `MISSING_LOCK_STATE` = 1112698227
>
> The story file cannot be found.
> _Read Only_
>
> Number `MIXED_LOCK_STATE` = 1112698232
>
> The stories do not all share the same lock state.
