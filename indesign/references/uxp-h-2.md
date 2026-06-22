# Html Items, Htmlfxl Export Preference, Http Link Connection Manager Object, Hyperlink Appearance Highlight ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: HtmlItems; HTMLFXLExportPreference; HttpLinkConnectionManagerObject; HyperlinkAppearanceHighlight; HyperlinkAppearanceStyle; HyperlinkAppearanceWidth; HyperlinkDestinationPageSetting; HyperlinkExternalPageDestination; HyperlinkExternalPageDestinations; HyperlinkPageDestination; HyperlinkPageDestinations.

## HtmlItems

Embedded HTML page items collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> HtmlItem **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a new HtmlItem

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer that will contain the created HtmlItem. (Optional) |
| LocationOptions | at | Insertion location for the HtmlItem, relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object. Note: When at is before or after, this parameter must be supplied. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new HtmlItem (Optional) |

> Number **count**()
>
> Shows how many elements are in the HtmlItem.
> HtmlItem **item**( Mixed **index** )
>
> Retrieves the HtmlItem at the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or object name. Can accept: Long Integer or String. |

> HtmlItem **itemByName**( String **name** )
>
> Retrieves the HtmlItem with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> HtmlItem **itemByID**( Number **id** )
>
> Retrieves the HtmlItem with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> HtmlItem **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the HtmlItems included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | HtmlItem, index, or name at the range start. Can accept: HtmlItem, Long Integer or String. |
| Mixed | to | HtmlItem, index, or name at the range end. Can accept: HtmlItem, Long Integer or String. |

> HtmlItem **firstItem**()
>
> Retrieves the first HtmlItem in the collection.
> HtmlItem **lastItem**()
>
> Retrieves the last HtmlItem in the collection.
> HtmlItem **middleItem**()
>
> Retrieves the middle HtmlItem in the collection.
> HtmlItem **previousItem**( HtmlItem **obj** )
>
> Retrieves the HtmlItem whose index immediately precedes the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HtmlItem | obj | Index of the HtmlItem that follows the wanted HtmlItem. |

> HtmlItem **nextItem**( HtmlItem **obj** )
>
> Retrieves the HtmlItem at the next index after the specified HtmlItem in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HtmlItem | obj | HtmlItem whose index precedes the wanted HtmlItem. |

> HtmlItem **anyItem**()
>
> Retrieves any HtmlItem from the collection.
> HtmlItem **everyItem**()
>
> Retrieves every HtmlItem in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the HtmlItem.
> HtmlItem **[]**( Number **index** )
>
> Retrieves the HtmlItem at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## HTMLFXLExportPreference

Preferences used for HTML FXL export.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the HTMLFXLExportPreference (a Document).
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
> String **epubPageRange**
>
> EPUB page range.
> PageRangeFormat **epubPageRangeFormat**
>
> EPUB page range format.
> Object **properties**
>
> Property for setting several properties together.

### Methods

> String **toSource**()
>
> Builds a string that can be executed to return the HTMLFXLExportPreference.
> HTMLFXLExportPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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

## HttpLinkConnectionManagerObject

Experimental http link connection manager.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the HttpLinkConnectionManagerObject (a Application).
> _Read Only_
>
> Number **index**
>
> Index of the HttpLinkConnectionManagerObject inside its containing object.
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
> Property for setting several properties together.

### Methods

> **httpConnect**( String **serverurl**, String **jsonData** )
>
> Experimental: opens a URL connection for the supplied server address

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | serverurl | Server URL used for the connection |
| String | jsonData | JSON data |

> Boolean **isConnected**( String **serverurl** )
>
> Experimental: tests whether the supplied server URL is connected.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | serverurl | Server URL being checked |

> **logout**( String **serverurl** )
>
> Experimental: logs out from the supplied URL

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | serverurl | Server URL used for logout |

> String **toSource**()
>
> Builds a string that can be executed to return the HttpLinkConnectionManagerObject.
> HttpLinkConnectionManagerObject **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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

## HyperlinkAppearanceHighlight

Choices that control hyperlink highlighting when a hyperlink is selected.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Leaves the hyperlink unhighlighted.
> _Read Only_
>
> Number **INVERT** = 1853256308
>
> Uses the hyperlink fill color for highlighting.
> _Read Only_
>
> Number **OUTLINE** = 1869900910
>
> Uses the hyperlink border as the highlight.
> _Read Only_
>
> Number **INSET** = 1853056372
>
> Highlights using an inset hyperlink border.

## HyperlinkAppearanceStyle

Hyperlink border style choices.

### Class

> _Read Only_
>
> Number **SOLID** = 1936682084
>
> Applies a solid stroke.
> _Read Only_
>
> Number **DASHED** = 1684108136
>
> Applies a dashed stroke.

## HyperlinkAppearanceWidth

Hyperlink border weight choices.

### Class

> _Read Only_
>
> Number **THIN** = 1952999790
>
> Applies a thin border.
> _Read Only_
>
> Number **MEDIUM** = 1701727588
>
> Applies a medium border.
> _Read Only_
>
> Number **THICK** = 1952999787
>
> Applies a thick border.

## HyperlinkDestinationPageSetting

Display choices for hyperlink destination pages.

### Class

> _Read Only_
>
> Number **FIXED** = 1212437350
>
> Fits the destination page inside the specified rectangle. For details about the rectangle size and position, see the view bounds entry.
> _Read Only_
>
> Number `FIT_VIEW` = 1212437366
>
> Uses the visible part of the destination page as the destination display.
> _Read Only_
>
> Number `FIT_WINDOW` = 1212437367
>
> Fits the full destination page in the document window. Note: Resizing the window changes magnification automatically.
> _Read Only_
>
> Number `FIT_WIDTH` = 1212437335
>
> Fits the destination page to the window width; the lower part of the page can be hidden. Note: Horizontal window resizing changes magnification automatically.
> _Read Only_
>
> Number `FIT_HEIGHT` = 1212437352
>
> Matches the destination page height to the document window; the right side of the page can be hidden. Note: Vertical window resizing changes magnification automatically.
> _Read Only_
>
> Number `FIT_VISIBLE` = 1212437334
>
> Fits the destination page text area to the window width; page margins are hidden and the lower part of the page may also be hidden. Note: Horizontal window resizing changes magnification automatically.
> _Read Only_
>
> Number `INHERIT_ZOOM` = 1212437370
>
> Shows the destination page at the same zoom percent as the page shown previously. Note: Window resizing changes magnification automatically.

## HyperlinkExternalPageDestination

A hyperlink destination pointing to a page in another document, separate from the document that holds the hyperlink source. For hyperlink source details, see hyperlink page item source or hyperlink text source.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the HyperlinkExternalPageDestination.
> _Read Only_
>
> Boolean **hidden**
>
> True indicates that the hyperlink is not visible.
> _Read Only_
>
> Number **id**
>
> Unique identifier for this HyperlinkExternalPageDestination.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Owning Document for the HyperlinkExternalPageDestination.
> _Read Only_
>
> Number **index**
>
> Position of the HyperlinkExternalPageDestination in its container.
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
> File **documentPath**
>
> Document file path targeted by the hyperlink destination.
> Number **destinationPageIndex**
>
> Page index used by the hyperlink destination. Note: Valid only when hyperlink destination is an external page.
> HyperlinkDestinationPageSetting **viewSetting**
>
> Page sizing to use after the hyperlink opens the destination page.
> Mixed **viewBounds**
>
> Rectangle for the view, using [y1, x1, y2, x2]. Applies only when view setting is fixed. Return value can be: Ordered array containing top:Unit, left:Unit, bottom:Unit, right:Unit.
> Number **viewPercentage**
>
> Zoom value. (Range: 5 to 4000) Applies only when view setting is fixed.
> String **label**
>
> String value available for arbitrary labeling.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> **remove**()
>
> Removes this HyperlinkExternalPageDestination.
> **showDestination**()
>
> Moves the view to the hyperlink destination.
> **insertLabel**( String **key**, String **value** )
>
> Stores a label value under the specified key.

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
> Produces a string that can recreate the HyperlinkExternalPageDestination when executed.
> HyperlinkExternalPageDestination **getElements**()
>
> Resolves the object specifier into an array of object references.
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
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## HyperlinkExternalPageDestinations

Collection containing hyperlink external page destinations.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> HyperlinkExternalPageDestination **add**( Page **destination**, Object **withProperties** )
>
> Adds a hyperlink external page destination.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destination | Destination page. (Optional) |
| Object | withProperties | Starting property values for the new HyperlinkExternalPageDestination. (Optional) |

> Number **count**()
>
> Shows how many elements are in the HyperlinkExternalPageDestination collection.
> HyperlinkExternalPageDestination **item**( Mixed **index** )
>
> Fetches the HyperlinkExternalPageDestination identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Identifier supplied as index or name. Accepted values: Long Integer or String. |

> HyperlinkExternalPageDestination **itemByName**( String **name** )
>
> Fetches the HyperlinkExternalPageDestination matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> HyperlinkExternalPageDestination **itemByID**( Number **id** )
>
> Fetches the HyperlinkExternalPageDestination matching the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> HyperlinkExternalPageDestination **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the HyperlinkExternalPageDestinations included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as HyperlinkExternalPageDestination, index, or name. Accepted values: HyperlinkExternalPageDestination, Long Integer or String. |
| Mixed | to | Range end, supplied as HyperlinkExternalPageDestination, index, or name. Accepted values: HyperlinkExternalPageDestination, Long Integer or String. |

> HyperlinkExternalPageDestination **firstItem**()
>
> Gets the first HyperlinkExternalPageDestination from the collection.
> HyperlinkExternalPageDestination **lastItem**()
>
> Gets the final HyperlinkExternalPageDestination from the collection.
> HyperlinkExternalPageDestination **middleItem**()
>
> Gets the middle HyperlinkExternalPageDestination from the collection.
> HyperlinkExternalPageDestination **previousItem**( HyperlinkExternalPageDestination **obj** )
>
> Gets the HyperlinkExternalPageDestination whose index immediately precedes the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkExternalPageDestination | obj | Index-bearing HyperlinkExternalPageDestination after the desired HyperlinkExternalPageDestination. |

> HyperlinkExternalPageDestination **nextItem**( HyperlinkExternalPageDestination **obj** )
>
> Gets the HyperlinkExternalPageDestination whose index immediately follows the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkExternalPageDestination | obj | HyperlinkExternalPageDestination positioned before the desired HyperlinkExternalPageDestination. |

> HyperlinkExternalPageDestination **anyItem**()
>
> Gets any HyperlinkExternalPageDestination from the collection.
> HyperlinkExternalPageDestination **everyItem**()
>
> Gets all HyperlinkExternalPageDestination objects in the collection.
> String **toSource**()
>
> Produces a string that can recreate the HyperlinkExternalPageDestination when executed.
> HyperlinkExternalPageDestination **[]**( Number **index** )
>
> Fetches the HyperlinkExternalPageDestination at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## HyperlinkPageDestination

Hyperlink destination whose target is a document page.

### Instance

> _Read Only_
>
> Boolean **hidden**
>
> True indicates that the hyperlink is not visible.
> _Read Only_
>
> Number **id**
>
> Unique identifier for this HyperlinkPageDestination.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Owning Document for the HyperlinkPageDestination.
> _Read Only_
>
> Number **index**
>
> Position of the HyperlinkPageDestination in its container.
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
> String **name**
>
> Name assigned to the HyperlinkPageDestination.
> Boolean **nameManually**
>
> True or an unspecified value permits a custom destination name and prevents automatic renaming when the destination moves to another page. False derives the destination name from the page number, makes the name property read-only on the destination object, and updates the name after a move to another page.
> Page **destinationPage**
>
> Page targeted by the hyperlink.
> HyperlinkDestinationPageSetting **viewSetting**
>
> Page sizing to use after the hyperlink opens the destination page.
> Mixed **viewBounds**
>
> Rectangle for the view, using [y1, x1, y2, x2]. Applies only when view setting is fixed. Return value can be: Ordered array containing top:Unit, left:Unit, bottom:Unit, right:Unit.
> Number **viewPercentage**
>
> Zoom value. (Range: 5 to 4000) Applies only when view setting is fixed.
> String **label**
>
> String value available for arbitrary labeling.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> **remove**()
>
> Removes this HyperlinkPageDestination.
> **showDestination**()
>
> Moves the view to the hyperlink destination.
> **insertLabel**( String **key**, String **value** )
>
> Stores a label value under the specified key.

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
> Produces a string that can recreate the HyperlinkPageDestination when executed.
> HyperlinkPageDestination **getElements**()
>
> Resolves the object specifier into an array of object references.
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
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## HyperlinkPageDestinations

Collection containing hyperlink page destinations.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> HyperlinkPageDestination **add**( Page **destination**, Object **withProperties** )
>
> Adds a hyperlink page destination.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destination | Document page targeted by the hyperlink. (Optional) |
| Object | withProperties | Starting property values for the new HyperlinkPageDestination. (Optional) |

> Number **count**()
>
> Shows how many elements are in the HyperlinkPageDestination collection.
> HyperlinkPageDestination **item**( Mixed **index** )
>
> Fetches the HyperlinkPageDestination identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Identifier supplied as index or name. Accepted values: Long Integer or String. |

> HyperlinkPageDestination **itemByName**( String **name** )
>
> Fetches the HyperlinkPageDestination matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> HyperlinkPageDestination **itemByID**( Number **id** )
>
> Fetches the HyperlinkPageDestination matching the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> HyperlinkPageDestination **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the HyperlinkPageDestinations included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as HyperlinkPageDestination, index, or name. Accepted values: HyperlinkPageDestination, Long Integer or String. |
| Mixed | to | Range end, supplied as HyperlinkPageDestination, index, or name. Accepted values: HyperlinkPageDestination, Long Integer or String. |

> HyperlinkPageDestination **firstItem**()
>
> Gets the first HyperlinkPageDestination from the collection.
> HyperlinkPageDestination **lastItem**()
>
> Gets the final HyperlinkPageDestination from the collection.
> HyperlinkPageDestination **middleItem**()
>
> Gets the middle HyperlinkPageDestination from the collection.
> HyperlinkPageDestination **previousItem**( HyperlinkPageDestination **obj** )
>
> Gets the HyperlinkPageDestination whose index immediately precedes the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkPageDestination | obj | Index-bearing HyperlinkPageDestination after the desired HyperlinkPageDestination. |

> HyperlinkPageDestination **nextItem**( HyperlinkPageDestination **obj** )
>
> Gets the HyperlinkPageDestination whose index immediately follows the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkPageDestination | obj | HyperlinkPageDestination positioned before the desired HyperlinkPageDestination. |

> HyperlinkPageDestination **anyItem**()
>
> Gets any HyperlinkPageDestination from the collection.
> HyperlinkPageDestination **everyItem**()
>
> Gets all HyperlinkPageDestination objects in the collection.
> String **toSource**()
>
> Produces a string that can recreate the HyperlinkPageDestination when executed.
> HyperlinkPageDestination **[]**( Number **index** )
>
> Fetches the HyperlinkPageDestination at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |
