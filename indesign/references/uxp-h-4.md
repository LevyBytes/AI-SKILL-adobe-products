# Hyperlink, Hyperlinks, Hyphenation Exception, Hyphenation Exceptions ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Hyperlink — Instance; Hyperlinks; HyphenationException; HyphenationExceptions; HyphenationStyleEnum.

## Hyperlink — Instance

> _Read Only_
>
> Boolean **hidden**
>
> True means the hyperlink is kept hidden.
> _Read Only_
>
> Number **id**
>
> Identifier assigned uniquely to the Hyperlink.
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Owning Document for the Hyperlink.
> _Read Only_
>
> Number **index**
>
> Position of the Hyperlink inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection associated with the object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing the object's event listeners.
> String **name**
>
> Name assigned to the Hyperlink.
> Mixed **source**
>
> Hyperlinked text or page item. Return types include: HyperlinkPageItemSource, HyperlinkTextSource or CrossReferenceSource.
> Boolean **visible**
>
> True means the Hyperlink is shown.
> HyperlinkAppearanceHighlight **highlight**
>
> Highlight style applied to the hyperlink.
> HyperlinkAppearanceWidth **width**
>
> Stroke weight used for the hyperlink border.
> Mixed **borderColor**
>
> Border color used by the hyperlink. Return types include: Array of 3 Reals (0 - 255) or UIColors enumerator.
> HyperlinkAppearanceStyle **borderStyle**
>
> Border style used by the hyperlink.
> Mixed **destination**
>
> Text, page, or URL target for the hyperlink. Return types include: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination, HyperlinkURLDestination or ParagraphDestination.
> String **label**
>
> User-settable string storage for the object.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **remove**()
>
> Removes the Hyperlink.
> **showSource**()
>
> Moves the view to the hyperlink source.
> **showDestination**()
>
> Moves the view to the hyperlink destination.
> **insertLabel**( String **key**, String **value** )
>
> Stores **value** as the label entry for the supplied **key**.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Lookup key. |
| String | value | Value stored under the key. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the supplied **key**.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label lookup key. |

> String **toSource**()
>
> Builds a string that returns the Hyperlink when executed.
> Hyperlink **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Reads the object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event category. |
| Mixed | handler | Event callback. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Hyperlinks

Container for hyperlink objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Total objects available.

### Methods

> Hyperlink **add**( Mixed **hyperlinkSource**, Mixed **hyperlinkDestination**, Object **withProperties** )
>
> Creates a hyperlink.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | hyperlinkSource | Object used as the hyperlink source. Can accept: HyperlinkPageItemSource, HyperlinkTextSource or CrossReferenceSource. |
| Mixed | hyperlinkDestination | Destination used by the hyperlink. Accepts an Ordered array containing fileName:String, volumn:String, directoryId:Long Integer, dataLinkClassId:Long Integer, destinationUid:Long Integer, HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination, HyperlinkURLDestination or ParagraphDestination. (Optional) |
| Object | withProperties | Starting property values for the new Hyperlink. (Optional) |

> Number **count**()
>
> Shows how many elements are in the Hyperlink collection.
> Hyperlink **item**( Mixed **index** )
>
> Gets the Hyperlink identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector by position or name; accepts Long Integer or String. |

> Hyperlink **itemByName**( String **name** )
>
> Gets the Hyperlink matching the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Hyperlink name. |

> Hyperlink **itemByID**( Number **id** )
>
> Gets the Hyperlink matching the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | Hyperlink ID. |

> Hyperlink **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Hyperlinks covered by the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Hyperlink, index, or name for the range. Can accept: Hyperlink, Long Integer or String. |
| Mixed | to | Ending Hyperlink, index, or name for the range. Can accept: Hyperlink, Long Integer or String. |

> Hyperlink **firstItem**()
>
> Gets the first Hyperlink in the collection.
> Hyperlink **lastItem**()
>
> Gets the last Hyperlink in the collection.
> Hyperlink **middleItem**()
>
> Gets the middle Hyperlink in the collection.
> Hyperlink **previousItem**( Hyperlink **obj** )
>
> Gets the Hyperlink positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Hyperlink | obj | Hyperlink index that follows the requested Hyperlink. |

> Hyperlink **nextItem**( Hyperlink **obj** )
>
> Gets the Hyperlink positioned immediately after the specified Hyperlink in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Hyperlink | obj | Hyperlink whose index precedes the requested Hyperlink. |

> Hyperlink **anyItem**()
>
> Gets any Hyperlink from the collection.
> Hyperlink **everyItem**()
>
> Gets every Hyperlink in the collection.
> String **toSource**()
>
> Builds a string that returns the Hyperlink when executed.
> Hyperlink **[]**( Number **index** )
>
> Gets the Hyperlink at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Collection index. |

## HyphenationException

Hyphenation exceptions list object.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the HyphenationException.
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Owning Document for the HyphenationException.
> _Read Only_
>
> Number **index**
>
> Position of the HyphenationException inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection associated with the object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing the object's event listeners.
> String **removedExceptions**
>
> Words listed as removed from the hyphenation exceptions list.
> String **addedExceptions**
>
> Words listed as added to the hyphenation exceptions list.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **addException**( String **addedExceptions**, Boolean **removedList** )
>
> Adds the specified words into a hyphenation exceptions list.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | addedExceptions | Words to add. |
| Boolean | removedList | True sends the words into the removed exceptions list; false or omission targets addedExceptions. (Optional) |

> **removeException**( String **removedExceptions**, Boolean **removedList** )
>
> Removes the specified words from a hyphenation exceptions list.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | removedExceptions | Words to remove. |
| Boolean | removedList | True removes the words from the removed exceptions list; false or omission targets addedExceptions. (Optional) |

> String **toSource**()
>
> Builds a string that returns the HyphenationException when executed.
> HyphenationException **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Reads the object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event category. |
| Mixed | handler | Event callback. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## HyphenationExceptions

Collection of hyphenation exception lists.

### Instance

> _Read Only_
>
> Number **length**
>
> Total objects available.

### Methods

> Number **count**()
>
> Shows how many elements are in the HyphenationException collection.
> HyphenationException **item**( Mixed **index** )
>
> Gets the HyphenationException identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector by position or name; accepts Long Integer or String. |

> HyphenationException **itemByName**( String **name** )
>
> Gets the HyphenationException matching the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | HyphenationException name. |

> HyphenationException **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the HyphenationExceptions covered by the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting HyphenationException, index, or name for the range. Can accept: HyphenationException, Long Integer or String. |
| Mixed | to | Ending HyphenationException, index, or name for the range. Can accept: HyphenationException, Long Integer or String. |

> HyphenationException **firstItem**()
>
> Gets the first HyphenationException in the collection.
> HyphenationException **lastItem**()
>
> Gets the last HyphenationException in the collection.
> HyphenationException **middleItem**()
>
> Gets the middle HyphenationException in the collection.
> HyphenationException **previousItem**( HyphenationException **obj** )
>
> Gets the HyphenationException positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyphenationException | obj | HyphenationException index that follows the requested HyphenationException. |

> HyphenationException **nextItem**( HyphenationException **obj** )
>
> Gets the HyphenationException positioned immediately after the specified HyphenationException in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyphenationException | obj | HyphenationException whose index precedes the requested HyphenationException. |

> HyphenationException **anyItem**()
>
> Gets any HyphenationException from the collection.
> HyphenationException **everyItem**()
>
> Gets every HyphenationException in the collection.
> String **toSource**()
>
> Builds a string that returns the HyphenationException when executed.
> HyphenationException **[]**( Number **index** )
>
> Gets the HyphenationException at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Collection index. |

## HyphenationStyleEnum

Hyphenation style choices for providers; the Duden hyphenation provider is currently the only supported provider.

### Class

> _Read Only_
>
> Number `HYPH_ALL` = 1684106348
>
> Uses every available hyphenation point.
> _Read Only_
>
> Number `HYPH_ALL_BUT_UNAESTHETIC` = 1684103797
>
> Uses all hyphenation points except unaesthetic ones.
> _Read Only_
>
> Number `HYPH_AESTHETIC` = 1684104563
>
> Uses aesthetic hyphenation points.
> _Read Only_
>
> Number `HYPH_PREFERRED_AESTHETIC` = 1685086565
>
> Uses preferred aesthetic hyphenation points.
