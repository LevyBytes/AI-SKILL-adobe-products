# Text Frames, Text Import Character Set, Text Import Preference, Text Path Effects ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: TextFrames; TextImportCharacterSet; TextImportPreference; TextPathEffects; TextPath; TextPaths.

## TextFrames

Text frame collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Displays the number of TextFrame elements.
> TextFrame **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Makes a new TextFrame.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the TextFrame is created. (Optional) |
| LocationOptions | at | Insertion location for the TextFrame, relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object. Note: Needed if at is set to before or after. Accepted values: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new TextFrame. (Optional) |

> TextFrame **item**( Mixed **index** )
>
> Returns the TextFrame identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Identifier by index or name; accepted types are Long Integer or String. |

> TextFrame **itemByName**( String **name** )
>
> Returns the TextFrame identified by the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> TextFrame **itemByID**( Number **id** )
>
> Returns the TextFrame identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> TextFrame **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the TextFrames inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | TextFrame, index, or name marking the range start; accepted types are TextFrame, Long Integer or String. |
| Mixed | to | TextFrame, index, or name marking the range end; accepted types are TextFrame, Long Integer or String. |

> TextFrame **firstItem**()
>
> Returns the first TextFrame from the collection.
> TextFrame **lastItem**()
>
> Returns the last TextFrame from the collection.
> TextFrame **middleItem**()
>
> Returns the middle TextFrame from the collection.
> TextFrame **previousItem**( TextFrame **obj** )
>
> Returns the TextFrame whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextFrame | obj | Index of the TextFrame that follows the TextFrame being requested. |

> TextFrame **nextItem**( TextFrame **obj** )
>
> Returns the TextFrame whose index comes after the specified TextFrame in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextFrame | obj | TextFrame whose index comes before the TextFrame being requested. |

> TextFrame **anyItem**()
>
> Returns any TextFrame from the collection.
> TextFrame **everyItem**()
>
> Returns every TextFrame from the collection.
> String **toSource**()
>
> Generates a string that returns the TextFrame when executed.
> TextFrame **[]**( Number **index** )
>
> Returns the TextFrame identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## TextImportCharacterSet

Options describing character sets for text-file import.

### Class

> _Read Only_
>
> Number **ANSI** = 1095652169
>
> ANSI character set.
> _Read Only_
>
> Number **RECOMMENDSHIFTJIS83PV** = 1412969328
>
> Recommend:Shift_JIS 83pv character set.
> _Read Only_
>
> Number **SHIFTJIS90PV** = 1413034096
>
> Shift_JIS 90pv character set.
> _Read Only_
>
> Number **SHIFTJIS90MS** = 1413034093
>
> Shift_JIS 90ms character set.
> _Read Only_
>
> Number **GB2312** = 1416061535
>
> GB2312 character set.
> _Read Only_
>
> Number `CHINESE_BIG_5` = 1415799349
>
> Chinese Big 5 character set.
> _Read Only_
>
> Number `MACINTOSH_CE` = 1416446789
>
> Macintosh CE (Cantral European) character set.
> _Read Only_
>
> Number `MACINTOSH_CYRILLIC` = 1416446841
>
> Macintosh Cyrillic character set.
> _Read Only_
>
> Number `MACINTOSH_GREEK` = 1416447858
>
> Macintosh Greek character set.
> _Read Only_
>
> Number `MACINTOSH_TURKISH` = 1416451186
>
> Macintosh Turkish character set.
> _Read Only_
>
> Number `WINDOWS_CYRILLIC` = 1417102201
>
> Windows Cyrillic character set.
> _Read Only_
>
> Number `WINDOWS_EE` = 1417102661
>
> Windows EE (Eastern European) character set.
> _Read Only_
>
> Number `WINDOWS_GREEK` = 1417103218
>
> Windows Greek character set.
> _Read Only_
>
> Number `WINDOWS_TURKISH` = 1417106549
>
> Windows Turkish character set.
> _Read Only_
>
> Number **GB18030** = 1416061491
>
> GB18030 character set.
> _Read Only_
>
> Number **KSC5601** = 1414230883
>
> KSC5601 character set.
> _Read Only_
>
> Number `WINDOWS_BALTIC` = 1417101940
>
> Windows Baltic character set.
> _Read Only_
>
> Number `WINDOWS_CE` = 1417102149
>
> Windows CE (Central European) character set.
> _Read Only_
>
> Number `MACINTOSH_ROMAN` = 1416450669
>
> Macintosh Roman character set.
> _Read Only_
>
> Number `MACINTOSH_CROATIAN` = 1416446834
>
> Macintosh Croatian character set.
> _Read Only_
>
> Number `MACINTOSH_ICELANDIC` = 1416448355
>
> Macintosh Icelandic character set.
> _Read Only_
>
> Number `MACINTOSH_ROMANIAN` = 1416450671
>
> Macintosh Romanian character set.
> _Read Only_
>
> Number `CYRILLIC_KOI8R` = 1416312946
>
> Cyrillic (KOI8R) character set.
> _Read Only_
>
> Number `CYRILLIC_KOI8U` = 1416312949
>
> Cyrillic (KOI8U) character set.
> _Read Only_
>
> Number `CYRILLIC_CP855` = 1415788597
>
> Cyrillic (CP855) character set.
> _Read Only_
>
> Number `DOS_LATIN_2` = 1415867442
>
> DOS Latin 2 character set.
> _Read Only_
>
> Number `CYRILLIC_ISO` = 1416184697
>
> Cyrillic (ISO) character set.
> _Read Only_
>
> Number `GREEK_ISO` = 1416185707
>
> Greek (ISO) character set.
> _Read Only_
>
> Number `CENTRALEUROPEAN_ISO` = 1416184645
>
> Central European (ISO) character set.
> _Read Only_
>
> Number `TURKISH_ISO` = 1416189045
>
> Turkish (ISO) character set.
> _Read Only_
>
> Number `MACINTOSH_GREEK_SHARED_CAPS` = 1416447794
>
> Macintosh Greek (Shared caps) character set.
> _Read Only_
>
> Number `MACINTOSH_ARABIC` = 1416446322
>
> Macintosh Arabic character set.
> _Read Only_
>
> Number `MACINTOSH_HEBREW` = 1416448098
>
> Macintosh Hebrew character set.
> _Read Only_
>
> Number `WINDOWS_ARABIC` = 1417101682
>
> Windows Arabic character set.
> _Read Only_
>
> Number `WINDOWS_HEBREW` = 1417103458
>
> Windows Hebrew character set.
> _Read Only_
>
> Number `ARABIC_ASMO` = 1415672685
>
> Arabic ASMO character set.
> _Read Only_
>
> Number `ARABIC_ASMO_TRANSPARENT` = 1415672692
>
> Arabic ASMO transparent character set.
> _Read Only_
>
> Number **UTF16** = 1937125686
>
> Unicode UTF16 character set.
> _Read Only_
>
> Number **UTF8** = 1937134904
>
> Unicode UTF8 character set.

## TextImportPreference

Preferences controlling text import.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent of the TextImportPreference (a Application).
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> TextImportCharacterSet **characterSet**
>
> Computer-language character set used when the text file was created.
> ImportPlatform **platform**
>
> Platform on which the imported text file was created.
> String **dictionary**
>
> Dictionary used for the imported text.
> Boolean **stripReturnsBetweenLines**
>
> When true, the import filter strips extra carriage returns from line ends.
> Boolean **stripReturnsBetweenParagraphs**
>
> When true, the import filter strips extra carriage returns between paragraphs.
> Boolean **convertSpacesIntoTabs**
>
> When true, the specified number of spaces is converted into a tab. For details on setting that space count, see spaces into tabs count.
> Number **spacesIntoTabsCount**
>
> Count of spaces converted to a tab. Note: Applies when convert spaces into tabs is true.
> Boolean **useTypographersQuotes**
>
> When true, straight quotes and apostrophes in imported text are converted to typographic quotation marks and apostrophes.
> Object **properties**
>
> Property that permits several properties to be set in one operation.

### Methods

> String **toSource**()
>
> Generates a string that returns the TextImportPreference when executed.
> TextImportPreference **getElements**()
>
> Resolves the object specifier and produces an object-reference array.
> String **toSpecifier**()
>
> Gets its reference string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers a listener for events.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Deletes the event listener registration.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TextPathEffects

Choices that control type-on-a-path alignment and appearance.

### Class

> _Read Only_
>
> Number `RAINBOW_PATH_EFFECT` = 1601201778
>
> This default effect aligns each character baseline center parallel to the path's tangent.
> _Read Only_
>
> Number `SKEW_PATH_EFFECT` = 1601201779
>
> Regardless of path shape, text character vertical edges remain perfectly vertical.
> _Read Only_
>
> Number `RIBBON_PATH_EFFECT` = 1601201715
>
> Regardless of path shape, text character horizontal edges remain perfectly horizontal.
> _Read Only_
>
> Number `STAIR_STEP_PATH_EFFECT` = 1601205107
>
> Each character baseline's left edge sits on the path, with no character rotation.
> _Read Only_
>
> Number `GRAVITY_PATH_EFFECT` = 1601201767
>
> Each character baseline's center sits on the path while every vertical edge lines up with the path's center point.

## TextPath

Text object positioned along a path.

### Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a TextPath is placed. This event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after a TextPath is placed. This event bubbles and cannot be canceled.

### Instance

> _Read Only_
>
> Number **centerBracket**
>
> Midpoint between the start bracket and the end bracket.
> _Read Only_
>
> Story **parentStory**
>
> Story containing the text.
> _Read Only_
>
> Mixed **startTextFrame**
>
> First text frame in the thread. Returns TextFrame or TextPath.
> _Read Only_
>
> Mixed **endTextFrame**
>
> Final text frame in the thread. Returns TextFrame or TextPath.
> _Read Only_
>
> Number **textFrameIndex**
>
> Position of the text frame within the story.
> _Read Only_
>
> Boolean **overflows**
>
> True when the story contains overset text.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the TextPath.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owner for this TextPath can be SplineItem or Polygon or GraphicLine or Rectangle or Oval or TextFrame or EndnoteTextFrame or EPSText.
> _Read Only_
>
> Number **index**
>
> Position of the TextPath within its containing object.
> _Read Only_
>
> Texts **texts**
>
> Collection containing text objects.
> _Read Only_
>
> Characters **characters**
>
> Collection containing characters.
> _Read Only_
>
> Words **words**
>
> Collection containing words.
> _Read Only_
>
> Lines **lines**
>
> Collection containing lines.
> _Read Only_
>
> TextColumns **textColumns**
>
> Collection containing text columns.
> _Read Only_
>
> Paragraphs **paragraphs**
>
> Collection containing paragraphs.
> _Read Only_
>
> InsertionPoints **insertionPoints**
>
> Collection containing insertion points.
> _Read Only_
>
> TextStyleRanges **textStyleRanges**
>
> Collection containing text style ranges.
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
> PathTypeAlignments **pathAlignment**
>
> Controls type alignment on a path.
> TextTypeAlignments **textAlignment**
>
> Type-on-path alignment applied here.
> TextPathEffects **pathEffect**
>
> Effect used for type on a path.
> FlipValues **flipPathEffect**
>
> Flip effect used for type on a path.
> Number **pathSpacing**
>
> Spacing used by the type on a path.
> Number **startBracket**
>
> Point position, in points, where type begins on the path. Note: 0 identifies the first point on the path.
> Number **endBracket**
>
> Point where type on the path ends. Note: extra text becomes overset unless linked to another path or text frame.
> Mixed **previousTextFrame**
>
> Text frame before this one in the thread. Returns TextFrame or TextPath. Also accepts: NothingEnum enumerator.
> Mixed **nextTextFrame**
>
> Text frame after this one in the thread. Returns TextFrame or TextPath. Also accepts: NothingEnum enumerator.
> Mixed **contents**
>
> Text frame contents. Returns String, TextFrameContents enumerator or SpecialCharacters enumerator.
> String **label**
>
> Settable string property.
> String **name**
>
> Name of the TextPath; this aliases the TextPath's label property.
> Object **properties**
>
> Allows several properties to be assigned at the same time.

### Methods

> Text **findText**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching the find what value, then replaces those glyphs with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching the find character type value, then replaces it with the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> **remove**()
>
> Removes the TextPath.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified key/value pair on the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key string. |
| String | value | Value string. |

> String **extractLabel**( String **key** )
>
> Gets the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key string. |

> String **toSource**()
>
> Builds a string that, when executed, returns the TextPath.
> TextPath **getElements**()
>
> Produces an object-reference array from the resolved object specifier.
> String **toSpecifier**()
>
> Gets this object's specifier string.
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

## TextPaths

Collection object for text paths.

### Instance

> _Read Only_
>
> Number **length**
>
> Number of objects held by the collection.

### Methods

> TextPath **add**( Object **withProperties** )
>
> Creates a TextPath.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new TextPath. (Optional) |

> Number **count**()
>
> Shows how many elements are in the TextPath.
> TextPath **item**( Mixed **index** )
>
> Returns the TextPath matching the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name input. Allowed inputs: Long Integer, String. |

> TextPath **itemByName**( String **name** )
>
> Yields the named TextPath.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> TextPath **itemByID**( Number **id** )
>
> Yields the TextPath for the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> TextPath **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns TextPaths inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting range value: TextPath, index, or name. Can accept: TextPath, Long Integer or String. |
| Mixed | to | Ending range value: TextPath, index, or name. Can accept: TextPath, Long Integer or String. |

> TextPath **firstItem**()
>
> Yields the collection's first TextPath.
> TextPath **lastItem**()
>
> Yields the collection's final TextPath.
> TextPath **middleItem**()
>
> Yields the collection's middle TextPath.
> TextPath **previousItem**( TextPath **obj** )
>
> Returns the TextPath whose index precedes the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextPath | obj | Index of the TextPath after the desired TextPath. |

> TextPath **nextItem**( TextPath **obj** )
>
> Returns the TextPath whose index comes after the specified TextPath in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextPath | obj | Object positioned immediately before the desired TextPath. |

> TextPath **anyItem**()
>
> Yields an arbitrary TextPath from the collection.
> TextPath **everyItem**()
>
> Yields all TextPath objects in the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the TextPath.
> TextPath **[]**( Number **index** )
>
> Returns the TextPath with the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## See also

- [Characters](uxp-characters.md)
