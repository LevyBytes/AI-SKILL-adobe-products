# Named Grid, Named Grids, Navigation Point, Navigation Points ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: NamedGrid; NamedGrids; NavigationPoint; NavigationPoints; NestedGrepStyle; NestedGrepStyles; NestedLineStyle; NestedLineStyles; NestedStyleDelimiters; NestedStyle.

## NamedGrid

Represents one named grid.

### Instance

> _Read Only_
>
> GridDataInformation **gridData**
>
> Default grid settings. Note: used for named, layout, and frame (story) grids.
> _Read Only_
>
> Number **id**
>
> Unique ID for the NamedGrid.
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the NamedGrid (a Document or Application).
> _Read Only_
>
> Number **index**
>
> Position of the NamedGrid inside its containing object.
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
> _Read Only_
>
> Preferences **preferences**
>
> Preference-object collection.
> String **name**
>
> Name of the NamedGrid.
> String **label**
>
> String value that can be assigned to the object.
> Object **properties**
>
> Lets several properties be set together.

### Methods

> **remove**()
>
> Deletes the NamedGrid.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to set. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Builds a string that, when executed, returns the NamedGrid.
> NamedGrid **getElements**()
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
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler to invoke. Can accept: File or JavaScript Function. |
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

## NamedGrids

Represents a set of named grids.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for the collection.

### Methods

> NamedGrid **add**( Object **withProperties** )
>
> Creates a NamedGrid.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new NamedGrid. (Optional) |

> Number **count**()
>
> Reports how many elements are in the NamedGrid collection.
> NamedGrid **item**( Mixed **index** )
>
> Gets the NamedGrid identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector value, either index or name. Accepts Long Integer or String. |

> NamedGrid **itemByName**( String **name** )
>
> Gets the NamedGrid with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> NamedGrid **itemByID**( Number **id** )
>
> Gets the NamedGrid with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> NamedGrid **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the NamedGrids inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | NamedGrid, index, or name at the start of the range. Can accept: NamedGrid, Long Integer or String. |
| Mixed | to | Range endpoint as a NamedGrid, index, or name. Accepts NamedGrid, Long Integer or String. |

> NamedGrid **firstItem**()
>
> Gets the first NamedGrid in the collection.
> NamedGrid **lastItem**()
>
> Gets the last NamedGrid in the collection.
> NamedGrid **middleItem**()
>
> Gets the middle NamedGrid in the collection.
> NamedGrid **previousItem**( NamedGrid **obj** )
>
> Gets the NamedGrid immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NamedGrid | obj | Index of the NamedGrid that comes after the desired NamedGrid. |

> NamedGrid **nextItem**( NamedGrid **obj** )
>
> Gets the NamedGrid whose index comes after the specified NamedGrid in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NamedGrid | obj | NamedGrid whose index comes before the desired NamedGrid. |

> NamedGrid **anyItem**()
>
> Gets any NamedGrid in the collection.
> NamedGrid **everyItem**()
>
> Gets every NamedGrid in the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the NamedGrid.
> NamedGrid **[]**( Number **index** )
>
> Gets the NamedGrid at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## NavigationPoint

Represents a navigation point.

### Instance

> _Read Only_
>
> Number **id**
>
> Internally generated unique identifier (read only).
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Movie **parent**
>
> Parent object for the NavigationPoint (a Movie).
> _Read Only_
>
> Number **index**
>
> Position of the NavigationPoint inside its containing object.
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
> UI display name.
> Number **time**
>
> Seconds value rounded upward at two decimals; for example, 3.115 becomes 3.12.
> Object **properties**
>
> Lets several properties be set together.

### Methods

> **remove**()
>
> Deletes the NavigationPoint.
> String **toSource**()
>
> Builds a string that, when executed, returns the NavigationPoint.
> NavigationPoint **getElements**()
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
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler to invoke. Can accept: File or JavaScript Function. |
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

## NavigationPoints

Represents a set of navigation points.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for the collection.

### Methods

> NavigationPoint **add**( Object **withProperties** )
>
> Creates a NavigationPoint.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new NavigationPoint. (Optional) |

> Number **count**()
>
> Reports how many elements are in the NavigationPoint collection.
> NavigationPoint **item**( Mixed **index** )
>
> Gets the NavigationPoint identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector value, either index or name. Accepts Long Integer or String. |

> NavigationPoint **itemByName**( String **name** )
>
> Gets the NavigationPoint with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> NavigationPoint **itemByID**( Number **id** )
>
> Gets the NavigationPoint with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> NavigationPoint **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the NavigationPoints inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | NavigationPoint, index, or name at the start of the range. Can accept: NavigationPoint, Long Integer or String. |
| Mixed | to | Range endpoint as a NavigationPoint, index, or name. Accepts NavigationPoint, Long Integer or String. |

> NavigationPoint **firstItem**()
>
> Gets the first NavigationPoint in the collection.
> NavigationPoint **lastItem**()
>
> Gets the last NavigationPoint in the collection.
> NavigationPoint **middleItem**()
>
> Gets the middle NavigationPoint in the collection.
> NavigationPoint **previousItem**( NavigationPoint **obj** )
>
> Gets the NavigationPoint immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NavigationPoint | obj | Index of the NavigationPoint that comes after the desired NavigationPoint. |

> NavigationPoint **nextItem**( NavigationPoint **obj** )
>
> Gets the NavigationPoint whose index comes after the specified NavigationPoint in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NavigationPoint | obj | NavigationPoint whose index comes before the desired NavigationPoint. |

> NavigationPoint **anyItem**()
>
> Gets any NavigationPoint in the collection.
> NavigationPoint **everyItem**()
>
> Gets every NavigationPoint in the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the NavigationPoint.
> NavigationPoint **[]**( Number **index** )
>
> Gets the NavigationPoint at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## NestedGrepStyle

Represents a nested GREP style.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> NestedGrepStyle parent; allowed classes: TextDefault, Paragraph, ParagraphStyle, Text, InsertionPoint, TextStyleRange, TextColumn, Line, Word, Character, Story or XmlStory.
> _Read Only_
>
> Number **index**
>
> Position of the NestedGrepStyle inside its containing object.
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
> CharacterStyle **appliedCharacterStyle**
>
> Character style used on the text. Can also accept: String.
> String **grepExpression**
>
> GREP expression that drives automatic styling.
> Object **properties**
>
> Lets several properties be set together.

### Methods

> **remove**()
>
> Deletes the NestedGrepStyle.
> String **toSource**()
>
> Builds a string that, when executed, returns the NestedGrepStyle.
> NestedGrepStyle **getElements**()
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
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler to invoke. Can accept: File or JavaScript Function. |
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

## NestedGrepStyles

Represents a set of nested GREP styles.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> NestedGrepStyle **add**( Object **withProperties** )
>
> Adds a NestedGrepStyle object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the NestedGrepStyle being added. (Optional) |

> Number **count**()
>
> Reports how many NestedGrepStyle elements are present.
> NestedGrepStyle **item**( Mixed **index** )
>
> Gets the NestedGrepStyle addressed by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> NestedGrepStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets NestedGrepStyles covered by the supplied endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting endpoint, given as a NestedGrepStyle, index, or name. Accepts: NestedGrepStyle, Long Integer or String. |
| Mixed | to | Ending endpoint, given as a NestedGrepStyle, index, or name. Accepts: NestedGrepStyle, Long Integer or String. |

> NestedGrepStyle **firstItem**()
>
> Gets the first NestedGrepStyle in this collection.
> NestedGrepStyle **lastItem**()
>
> Gets the final NestedGrepStyle in this collection.
> NestedGrepStyle **middleItem**()
>
> Gets the middle NestedGrepStyle in this collection.
> NestedGrepStyle **previousItem**( NestedGrepStyle **obj** )
>
> Gets the NestedGrepStyle positioned before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NestedGrepStyle | obj | NestedGrepStyle whose position follows the target NestedGrepStyle. |

> NestedGrepStyle **nextItem**( NestedGrepStyle **obj** )
>
> Gets the NestedGrepStyle positioned after the specified one in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NestedGrepStyle | obj | NestedGrepStyle whose position precedes the target NestedGrepStyle. |

> NestedGrepStyle **anyItem**()
>
> Gets an arbitrary NestedGrepStyle from the collection.
> NestedGrepStyle **everyItem**()
>
> Gets all NestedGrepStyle objects in the collection.
> String **toSource**()
>
> Builds executable source text that resolves back to the NestedGrepStyle.
> NestedGrepStyle **[]**( Number **index** )
>
> Gets the NestedGrepStyle addressed by numeric index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## NestedLineStyle

Represents a nested line style.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for this NestedLineStyle; possible parent types include TextDefault, Paragraph, ParagraphStyle, Text, InsertionPoint, TextStyleRange, TextColumn, Line, Word, Character, Story, and XmlStory.
> _Read Only_
>
> Number **index**
>
> Position of the NestedLineStyle inside its containing object.
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
> CharacterStyle **appliedCharacterStyle**
>
> CharacterStyle assigned to the text. Accepts: String.
> Number **lineCount**
>
> Count of lines that receive the nested style.
> Number **repeatLast**
>
> Count of line-style rules to step back.
> Object **properties**
>
> Property bag for assigning multiple properties together.

### Methods

> **remove**()
>
> Deletes this NestedLineStyle.
> String **toSource**()
>
> Builds executable source text that resolves back to the NestedLineStyle.
> NestedLineStyle **getElements**()
>
> Resolves the object specifier and produces an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## NestedLineStyles

Collection object for nested line styles.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> NestedLineStyle **add**( Object **withProperties** )
>
> Adds a NestedLineStyle object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the NestedLineStyle being added. (Optional) |

> Number **count**()
>
> Reports how many NestedLineStyle elements are present.
> NestedLineStyle **item**( Mixed **index** )
>
> Gets the NestedLineStyle addressed by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> NestedLineStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets NestedLineStyles covered by the supplied endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting endpoint, given as a NestedLineStyle, index, or name. Accepts: NestedLineStyle, Long Integer or String. |
| Mixed | to | Ending endpoint, given as a NestedLineStyle, index, or name. Accepts: NestedLineStyle, Long Integer or String. |

> NestedLineStyle **firstItem**()
>
> Gets the first NestedLineStyle in this collection.
> NestedLineStyle **lastItem**()
>
> Gets the final NestedLineStyle in this collection.
> NestedLineStyle **middleItem**()
>
> Gets the middle NestedLineStyle in this collection.
> NestedLineStyle **previousItem**( NestedLineStyle **obj** )
>
> Gets the NestedLineStyle positioned before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NestedLineStyle | obj | NestedLineStyle whose position follows the target NestedLineStyle. |

> NestedLineStyle **nextItem**( NestedLineStyle **obj** )
>
> Gets the NestedLineStyle positioned after the specified one in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NestedLineStyle | obj | NestedLineStyle whose position precedes the target NestedLineStyle. |

> NestedLineStyle **anyItem**()
>
> Gets an arbitrary NestedLineStyle from the collection.
> NestedLineStyle **everyItem**()
>
> Gets all NestedLineStyle objects in the collection.
> String **toSource**()
>
> Builds executable source text that resolves back to the NestedLineStyle.
> NestedLineStyle **[]**( Number **index** )
>
> Gets the NestedLineStyle addressed by numeric index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## NestedStyleDelimiters

Options that define where nested style application ends.

### Class

> _Read Only_
>
> Number **SENTENCE** = 1380541555
>
> Treats the first sentence or sentences in the paragraph as the delimiter for the nested style. Here, the first sentence covers paragraph text before the first period, question mark, or exclamation mark.
> _Read Only_
>
> Number `ANY_WORD` = 1380541559
>
> Delimiter selection uses the paragraph's initial word or initial words. For this purpose, word content stops before the paragraph's first ordinary space or other white space character.
> _Read Only_
>
> Number `ANY_CHARACTER` = 1380541539
>
> Delimiter selection uses the first character or characters that are not zero-width markers. Anchors, index markers, XML tags, and similar markers count as zero-width.
> _Read Only_
>
> Number **LETTERS** = 1380541548
>
> Delimiter selection uses starting alpha characters. Note: see repetition to choose the letter count.
> _Read Only_
>
> Number **DIGITS** = 1380541540
>
> Delimiter selection uses starting numeric characters. Note: see repetition to choose the digit count.
> _Read Only_
>
> Number **TABS** = 1380541556
>
> Delimiter selection uses the paragraph's first literal tab character. Note: this is not the first tab stop. Without a literal tab in the paragraph, the nested style continues to paragraph end.
> _Read Only_
>
> Number `INLINE_GRAPHIC` = 1380541545
>
> Delimiter selection uses the first inline graphic.
> _Read Only_
>
> Number **DROPCAP** = 1380541507
>
> Delimiter selection uses the dropcap.
> _Read Only_
>
> Number `FORCED_LINE_BREAK` = 1397124194
>
> Delimiter selection uses the first forced line break.
> _Read Only_
>
> Number `END_NESTED_STYLE` = 1396855379
>
> Delimiter selection uses the inserted end nested style here character.
> _Read Only_
>
> Number `INDENT_HERE_TAB` = 1397319796
>
> Delimiter selection uses the first literal indent-to-here tab character. Note: this is not the first indent-to-here tab stop. Without that actual character in the paragraph, the nested style continues to paragraph end.
> _Read Only_
>
> Number `EM_SPACE` = 1397058899
>
> Delimiter selection uses the first em space.
> _Read Only_
>
> Number `EN_SPACE` = 1397059155
>
> Delimiter selection uses the first en space.
> _Read Only_
>
> Number `NONBREAKING_SPACE` = 1397645907
>
> Delimiter selection uses the first nonbreaking space.
> _Read Only_
>
> Number `AUTO_PAGE_NUMBER` = 1396797550
>
> Delimiter selection uses the first automatic page number.
> _Read Only_
>
> Number `SECTION_MARKER` = 1400073805
>
> Delimiter selection uses the first section name marker.
> _Read Only_
>
> Number **REPEAT** = 1380545132
>
> Repeat

## NestedStyle

Represents a nested style.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for this NestedStyle; possible parent types include TextDefault, Paragraph, ParagraphStyle, Text, InsertionPoint, TextStyleRange, TextColumn, Line, Word, Character, Story, and XmlStory.
> _Read Only_
>
> Number **index**
>
> Position of the NestedStyle inside its containing object.
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
> CharacterStyle **appliedCharacterStyle**
>
> CharacterStyle assigned to the text. Accepts: String.
> Mixed **delimiter**
>
> Expression that determines how far into the paragraph the nested style is applied. Return types: String or NestedStyleDelimiters enumerator.
> Number **repetition**
>
> Number of specified delimiter occurrences up to, or through, which the nested style applies.
> Boolean **inclusive**
>
> When true, application includes the last delimiter; when false, it stops before that final delimiter.
> Object **properties**
>
> Property bag for assigning multiple properties together.

### Methods

> **remove**()
>
> Deletes this NestedStyle.
> String **toSource**()
>
> Builds executable source text that resolves back to the NestedStyle.
> NestedStyle **getElements**()
>
> Resolves the object specifier and produces an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
