# Endnote Option, Endnote Range, Endnote Ranges, Endnote Restarting ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: EndnoteOption; EndnoteRange; EndnoteRanges; EndnoteRestarting; EndnoteScope.

## EndnoteOption

Default-formatting options for endnotes.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owner of the EndnoteOption; this is an Application or Document.
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
> String **endnoteTitle**
>
> Endnotes title. (Limit: 0 to 100 characters)
> ParagraphStyle **endnoteTitleStyle**
>
> Paragraph style assigned to the endnote title.
> Mixed **endnoteNumberingStyle**
>
> Numbering style used by endnotes. Can return: FootnoteNumberingStyle enumerator or String.
> Number **startEndnoteNumberAt**
>
> Initial number used when endnote numbering begins.
> Mixed **restartEndnoteNumbering**
>
> Location where endnote numbering restarts. Can return: EndnoteRestarting enumerator or String.
> Mixed **endnoteMarkerPositioning**
>
> Placement of endnote reference numbers within the main text. Can return: FootnoteMarkerPositioning enumerator or String.
> CharacterStyle **endnoteMarkerStyle**
>
> Character style assigned to endnote reference numbers in the main text.
> ParagraphStyle **endnoteTextStyle**
>
> Paragraph style assigned to endnote text.
> String **endnoteSeparatorText**
>
> Separator text placed after the endnote marker number and before the endnote text. (Range: 0 to 100 characters)
> Mixed **scopeValue**
>
> Endnote scope value. Can return: EndnoteScope enumerator or String.
> Mixed **frameCreateOption**
>
> Endnote frame-creation setting. Can return: EndnoteFrameCreate enumerator or String.
> Mixed **showEndnotePrefixSuffix**
>
> Prefix/suffix display position for the endnote. Can return: FootnotePrefixSuffix enumerator or String.
> String **endnotePrefix**
>
> Prefix text used for the endnote. (Limit: 0 to 100 characters)
> String **endnoteSuffix**
>
> Suffix text used for the endnote. (Limit: 0 to 100 characters)
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that returns the EndnoteOption when that string is executed.
> EndnoteOption **getElements**()
>
> Resolves the object specifier and produces an array of object references.
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

## EndnoteRange

Text range belonging to an endnote.

### Instance

> _Read Only_
>
> Number **endnoteRangeStartIndex**
>
> Start index for the EndnoteRange object.
> _Read Only_
>
> Number **endnoteRangeEndIndex**
>
> End index for the EndnoteRange object.
> _Read Only_
>
> Number **id**
>
> ID value that uniquely identifies the EndnoteRange.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owner of the EndnoteRange; valid owner types include Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story, and XmlStory.
> _Read Only_
>
> Number **index**
>
> Position of the EndnoteRange inside its parent container.
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
> Endnote **sourceEndnote**
>
> Endnote reference associated with the endnote text range.
> Mixed **endnoteRangeContent**
>
> EndnoteRange contents. When content is set or replaced in an endnote range, the endnote number is skipped. Return forms include String, SpecialCharacters enumerator, Array of Strings, or an array containing SpecialCharacters enumerators. Accepted input includes NothingEnum enumerator, Array of Strings, an array containing SpecialCharacters enumerators, or an array containing NothingEnum enumerators.
> String **label**
>
> String property available for arbitrary text.
> String **name**
>
> Name of the EndnoteRange; this aliases the EndnoteRange's label property.
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> **deleteEndnoteRange**()
>
> Removes the endnote range together with its linked endnote anchor.
> **insertLabel**( String **key**, String **value** )
>
> Assigns the label to the value paired with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value text. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value paired with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a string that returns the EndnoteRange when that string is executed.
> EndnoteRange **getElements**()
>
> Resolves the object specifier and produces an array of object references.
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

## EndnoteRanges

A collection containing endnote text ranges.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the EndnoteRange.
> EndnoteRange **item**( Mixed **index** )
>
> Gets the EndnoteRange identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts Long Integer or String values. |

> EndnoteRange **itemByName**( String **name** )
>
> Gets the EndnoteRange identified by the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> EndnoteRange **itemByID**( Number **id** )
>
> Gets the EndnoteRange identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> EndnoteRange **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the EndnoteRanges that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | EndnoteRange, index, or name marking the range start. Can accept: EndnoteRange, Long Integer or String. |
| Mixed | to | EndnoteRange, index, or name marking the range end. Can accept: EndnoteRange, Long Integer or String. |

> EndnoteRange **firstItem**()
>
> Gets the first EndnoteRange in the collection.
> EndnoteRange **lastItem**()
>
> Gets the final EndnoteRange in the collection.
> EndnoteRange **middleItem**()
>
> Gets the middle EndnoteRange in the collection.
> EndnoteRange **previousItem**( EndnoteRange **obj** )
>
> Gets the EndnoteRange whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EndnoteRange | obj | Index of the EndnoteRange that follows the target EndnoteRange. |

> EndnoteRange **nextItem**( EndnoteRange **obj** )
>
> Gets the EndnoteRange positioned after the specified EndnoteRange in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EndnoteRange | obj | EndnoteRange whose index precedes the target EndnoteRange. |

> EndnoteRange **anyItem**()
>
> Gets any EndnoteRange from the collection.
> EndnoteRange **everyItem**()
>
> Gets all EndnoteRange objects in the collection.
> String **toSource**()
>
> Builds a string that returns the EndnoteRange when that string is executed.
> EndnoteRange **[]**( Number **index** )
>
> Gets the EndnoteRange at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## EndnoteRestarting

Choices for restarting endnote numbering.

### Class

> _Read Only_
>
> Number **CONTINUOUS** = 1164210803
>
> Keeps numbering uninterrupted, with endnotes numbered sequentially across the document.
> _Read Only_
>
> Number `STORY_RESTART` = 1165193843
>
> Starts endnote numbering over for each story.

## EndnoteScope

Choices defining the scope used for endnote placement.

### Class

> _Read Only_
>
> Number `STORY_SCOPE` = 1162769267
>
> Endnotes scoped to an individual story.
> _Read Only_
>
> Number `ENDNOTE_DOCUMENT_SCOPE` = 1162765427
>
> Endnotes scoped across an individual document.
