# Rectangles, Rendering Intent, Repaginate Option, Replies ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Rectangles; RenderingIntent; RepaginateOption; Replies; Reply — Instance; ResizeConstraints — Class; ResizeMethods — Class; ResolveStyleClash; RestartPolicy; RotationDirection; RowTypes.

## Rectangles

Collection containing rectangles.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Reports the Rectangle element count.
> Rectangle **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a Rectangle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the Rectangle is created. (Optional) |
| LocationOptions | at | Insertion location for the Rectangle, relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object; required for before/after placement. Accepts Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new Rectangle. (Optional) |

> Rectangle **item**( Mixed **index** )
>
> Gets the Rectangle identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Accepts a Long Integer index or a String name. |

> Rectangle **itemByName**( String **name** )
>
> Gets the Rectangle identified by the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Rectangle **itemByID**( Number **id** )
>
> Gets the Rectangle identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Rectangle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Rectangles in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Rectangle, index, or name at the range start. Can accept: Rectangle, Long Integer or String. |
| Mixed | to | Rectangle, index, or name at the range end. Can accept: Rectangle, Long Integer or String. |

> Rectangle **firstItem**()
>
> Gets the first Rectangle in the collection.
> Rectangle **lastItem**()
>
> Gets the last Rectangle in the collection.
> Rectangle **middleItem**()
>
> Gets the middle Rectangle in the collection.
> Rectangle **previousItem**( Rectangle **obj** )
>
> Gets the Rectangle whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Rectangle | obj | Index of the Rectangle that comes after the desired Rectangle. |

> Rectangle **nextItem**( Rectangle **obj** )
>
> Gets the Rectangle whose index comes after the specified Rectangle in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Rectangle | obj | Rectangle whose index comes before the desired Rectangle. |

> Rectangle **anyItem**()
>
> Gets any Rectangle in the collection.
> Rectangle **everyItem**()
>
> Gets every Rectangle in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the Rectangle.
> Rectangle **[]**( Number **index** )
>
> Gets the Rectangle at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## RenderingIntent

Choices for rendering intent.

### Class

> _Read Only_
>
> Number `USE_COLOR_SETTINGS` = 1380541299
>
> Uses the active color settings.
> _Read Only_
>
> Number **PERCEPTUAL** = 1380544611
>
> Keeps color relationships visually consistent, even when actual color values change; best suited to photographic images containing many out-of-gamut colors.
> _Read Only_
>
> Number **SATURATION** = 1380545377
>
> Favors vivid output over color precision; use it for graphs, charts, and similar business graphics.
> _Read Only_
>
> Number `RELATIVE_COLORIMETRIC` = 1380545123
>
> Compares the brightest point in the source color space with the destination color space, then shifts all colors accordingly; colors outside gamut move to the nearest reproducible destination color.
> _Read Only_
>
> Number `ABSOLUTE_COLORIMETRIC` = 1380540771
>
> Prioritizes color accuracy rather than preserving relationships among colors; most useful for previewing the effect of paper color on printed colors.

## RepaginateOption

Controls page numbering for book content objects inside the book.

### Class

> _Read Only_
>
> Number `NEXT_PAGE` = 1885500011
>
> Continues numbering pages in sequence after the previous book content object.
> _Read Only_
>
> Number `NEXT_ODD_PAGE` = 1332765291
>
> Begins each book content object's page numbering on the next odd-numbered page following the previous book content object's last page.
> _Read Only_
>
> Number `NEXT_EVEN_PAGE` = 1164993131
>
> Begins each book content object's page numbering on the next even-numbered page following the previous book content object's last page.

## Replies

Collection containing reply objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Reports how many elements are in the Reply.
> Reply **item**( Mixed **index** )
>
> Gets the Reply identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Accepts a Long Integer index or a String name. |

> Reply **itemByName**( String **name** )
>
> Gets the Reply identified by the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Reply **itemByID**( Number **id** )
>
> Gets the Reply identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Reply **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Replies in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Reply, index, or name at the range start. Can accept: Reply, Long Integer or String. |
| Mixed | to | Reply, index, or name at the range end. Can accept: Reply, Long Integer or String. |

> Reply **firstItem**()
>
> Gets the first Reply in the collection.
> Reply **lastItem**()
>
> Gets the last Reply in the collection.
> Reply **middleItem**()
>
> Gets the middle Reply in the collection.
> Reply **previousItem**( Reply **obj** )
>
> Gets the Reply whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Reply | obj | Index of the Reply that comes after the desired Reply. |

> Reply **nextItem**( Reply **obj** )
>
> Gets the Reply whose index comes after the specified Reply in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Reply | obj | Reply whose index comes before the desired Reply. |

> Reply **anyItem**()
>
> Gets any Reply in the collection.
> Reply **everyItem**()
>
> Gets every Reply in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the Reply.
> Reply **[]**( Number **index** )
>
> Gets the Reply at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Reply — Instance

> _Read Only_
>
> String **replyReviewer**
>
> Name of the reviewer who made the reply.
> _Read Only_
>
> String **replyContent**
>
> Reply content.
> _Read Only_
>
> Date **replyDate**
>
> Reply date.
> _Read Only_
>
> Number **id**
>
> Unique ID of the Reply.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> PDFComment **parent**
>
> Parent PDFComment for the Reply.
> _Read Only_
>
> Number **index**
>
> Index of the Reply within its containing object.
> _Read Only_
>
> Events **events**
>
> Collection of events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection of event listeners.
> String **label**
>
> String-valued property that can be set freely.
> String **name**
>
> Name of the Reply; this aliases the Reply's label property.
> Object **properties**
>
> Property used to set several properties at once.

### Methods

> **insertLabel**( String **key**, String **value** )
>
> Sets the label to the value stored under the specified key.

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
| String | key | Key to look up. |

> String **toSource**()
>
> Produces a string that, when executed, returns the Reply.
> Reply **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Reads the object specifier.
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

## ResizeConstraints — Class

> _Read Only_
>
> Number `KEEP_CURRENT_VALUE` = 1264939094
>
> Keep the current value.
> _Read Only_
>
> Number `KEEP_CURRENT_PROPORTIONS` = 1264939088
>
> Preserve the current proportions.
> _Read Only_
>
> Number `TALL_PROPORTIONS` = 1415670864
>
> Use tall proportions.
> _Read Only_
>
> Number `WIDE_PROPORTIONS` = 1466524752
>
> Use wide proportions.
> _Read Only_
>
> Number `INVERSE_PROPORTIONS` = 1231976016
>
> Use inverse proportions.

## ResizeMethods — Class

> _Read Only_
>
> Number `ADDING_CURRENT_DIMENSIONS_TO` = 1215264592
>
> Increase the current width and height by added amounts.
> _Read Only_
>
> Number `MULTIPLYING_CURRENT_DIMENSIONS_BY` = 1215264589
>
> Scale the current width and height using the supplied factors.
> _Read Only_
>
> Number `REPLACING_CURRENT_DIMENSIONS_WITH` = 1215264581
>
> Replace the current width and height with new values.
> _Read Only_
>
> Number `RESHAPING_AREA_TO_RATIO` = 1215264577
>
> Change the width-to-height ratio while preserving the current area.
> _Read Only_
>
> Number `RESHAPING_BORDER_TO_RATIO` = 1215264595
>
> Change the width-to-height ratio while preserving the current perimeter.

## ResolveStyleClash

Choices for handling conflicts caused by matching style names.

### Class

> _Read Only_
>
> Number `RESOLVE_CLASH_USE_EXISTING` = 2001879877
>
> Applies the existing style.
> _Read Only_
>
> Number `RESOLVE_CLASH_AUTO_RENAME` = 2001879873
>
> Automatically gives the new style a different name.
> _Read Only_
>
> Number `RESOLVE_CLASH_USE_NEW` = 2001879886
>
> Applies the new style.

## RestartPolicy

Choices for restarting numbering.

### Class

> _Read Only_
>
> Number `ANY_PREVIOUS_LEVEL` = 1701732720
>
> Restarts numbering after any earlier higher numbering level.
> _Read Only_
>
> Number `AFTER_SPECIFIC_LEVEL` = 1701737324
>
> Restarts numbering after a specified numbering level.
> _Read Only_
>
> Number `RANGE_OF_LEVELS` = 1701737068
>
> Restarts numbering after any level within a range of numbering levels.

## RotationDirection

Choices for rotating place-gun contents.

### Class

> _Read Only_
>
> Number **FORWARD** = 1181708919
>
> Moves the front item to the end, rotating the list forward.
> _Read Only_
>
> Number **BACKWARD** = 1113680759
>
> Moves the backmost item to the front, rotating the list backward.

## RowTypes

Row type.

### Class

> _Read Only_
>
> Number `BODY_ROW` = 1161982583
>
> Sets the row's classification to body.
> _Read Only_
>
> Number `HEADER_ROW` = 1162375799
>
> Sets the row's classification to header. Note: assigning a row as a header requires it to be the table's top row or placed next to an existing header row.
> _Read Only_
>
> Number `FOOTER_ROW` = 1162244727
>
> Sets the row's classification to footer. Note: assigning a row as a footer requires it to be the table's bottom row or beside a footer row already present.
> _Read Only_
>
> Number `MIXED_STATE` = 1162703479
>
> (Read-only) The column contains rows with more than one row type.
