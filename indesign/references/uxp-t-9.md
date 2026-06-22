# Tints, Toc Style Entries, Toc Style Entry, Toc Style ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Tints; TOCStyleEntries; TOCStyleEntry; TOCStyle; TOCStyles; ToolBox; ToolTipOptions; ToolsPanelOptions; Topic; Topics.

## Tints

Collection object for tints.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Gives the element total for the Tint.
> Tint **add**( Color **baseColor**, Object **withProperties** )
>
> Creates a tint swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Color | baseColor | Color used as the basis for the tint. |
| Object | withProperties | Starting property values for the created Tint. (Optional) |

> Tint **item**( Mixed **index** )
>
> Gets the Tint identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> Tint **itemByName**( String **name** )
>
> Gets the Tint with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Tint **itemByID**( Number **id** )
>
> Gets the Tint with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Tint **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Tints covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Tint, index, or name for the range. Accepts: Tint, Long Integer or String. |
| Mixed | to | Ending Tint, index, or name for the range. Accepts: Tint, Long Integer or String. |

> Tint **firstItem**()
>
> Gets the first Tint from the collection.
> Tint **lastItem**()
>
> Gets the final Tint from the collection.
> Tint **middleItem**()
>
> Gets the middle Tint from the collection.
> Tint **previousItem**( Tint **obj** )
>
> Gets the Tint positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Tint | obj | Index of the Tint located after the requested Tint. |

> Tint **nextItem**( Tint **obj** )
>
> Gets the Tint positioned after the specified Tint in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Tint | obj | Tint located before the requested Tint. |

> Tint **anyItem**()
>
> Gets one Tint from the collection.
> Tint **everyItem**()
>
> Gets all Tint objects in the collection.
> String **toSource**()
>
> Builds a string that returns the Tint when run.
> Tint **[]**( Number **index** )
>
> Gets the Tint at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## TOCStyleEntries

Collection object for TOC style entries.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> TOCStyleEntry **add**( String **styleName**, Object **withProperties** )
>
> Creates a TOC style entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | styleName | Paragraph style selected for inclusion as TOC entries. (Optional) |
| Object | withProperties | Starting property values for the created TOCStyleEntry. (Optional) |

> Number **count**()
>
> Gives the element total for the TOCStyleEntry.
> TOCStyleEntry **item**( Mixed **index** )
>
> Gets the TOCStyleEntry identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> TOCStyleEntry **itemByName**( String **name** )
>
> Gets the TOCStyleEntry with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> TOCStyleEntry **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TOCStyleEntries covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting TOCStyleEntry, index, or name for the range. Accepts: TOCStyleEntry, Long Integer or String. |
| Mixed | to | Ending TOCStyleEntry, index, or name for the range. Accepts: TOCStyleEntry, Long Integer or String. |

> TOCStyleEntry **firstItem**()
>
> Gets the first TOCStyleEntry from the collection.
> TOCStyleEntry **lastItem**()
>
> Gets the final TOCStyleEntry from the collection.
> TOCStyleEntry **middleItem**()
>
> Gets the middle TOCStyleEntry from the collection.
> TOCStyleEntry **previousItem**( TOCStyleEntry **obj** )
>
> Gets the TOCStyleEntry positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TOCStyleEntry | obj | Index of the TOCStyleEntry located after the requested TOCStyleEntry. |

> TOCStyleEntry **nextItem**( TOCStyleEntry **obj** )
>
> Gets the TOCStyleEntry positioned after the specified TOCStyleEntry in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TOCStyleEntry | obj | TOCStyleEntry located before the requested TOCStyleEntry. |

> TOCStyleEntry **anyItem**()
>
> Gets one TOCStyleEntry from the collection.
> TOCStyleEntry **everyItem**()
>
> Gets all TOCStyleEntry objects in the collection.
> String **toSource**()
>
> Builds a string that returns the TOCStyleEntry when run.
> TOCStyleEntry **[]**( Number **index** )
>
> Gets the TOCStyleEntry at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## TOCStyleEntry

Defines a TOC entry.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> TOCStyle **parent**
>
> Parent object for the TOCStyleEntry (a TOCStyle).
> _Read Only_
>
> Number **index**
>
> Position of the TOCStyleEntry within its containing object.
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
> String **name**
>
> Name assigned to the TOCStyleEntry.
> Mixed **formatStyle**
>
> Paragraph style used for the TOC entry. Can return: ParagraphStyle or String.
> Number **level**
>
> Indent level used by this TOC entry.
> Mixed **pageNumberStyle**
>
> Character style used for the entry page number. Can return: CharacterStyle or String.
> PageNumberPosition **pageNumberPosition**
>
> Placement of page numbers for the TOC entry style.
> String **separator**
>
> String inserted between entry text and page numbers.
> Mixed **separatorStyle**
>
> Character style applied to the separator between TOC entry text and page numbers. Can return: CharacterStyle or String.
> Boolean **sortAlphabet**
>
> When true, entries are sorted alphabetically.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> **remove**()
>
> Removes the TOCStyleEntry.
> String **toSource**()
>
> Builds a string that returns the TOCStyleEntry when run.
> TOCStyleEntry **getElements**()
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

## TOCStyle

Defines a TOC style.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID for the TOCStyle.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the TOCStyle (a Document).
> _Read Only_
>
> Number **index**
>
> Position of the TOCStyle within its containing object.
> _Read Only_
>
> TOCStyleEntries **tocStyleEntries**
>
> Collection containing TOC style entries.
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
> ParagraphStyle **titleStyle**
>
> Paragraph style used for the TOC title.
> String **title**
>
> TOC title string.
> String **name**
>
> Name assigned to the TOCStyle.
> Boolean **runIn**
>
> When true, the lowest-level TOC entries continue on the same line as the previous entry.
> Boolean **includeHidden**
>
> When true, the TOC includes entries from text on hidden layers.
> Boolean **includeBookDocuments**
>
> When true, the TOC includes the entire book. When false, only entries from the current document are used. Note: Valid when the current document belongs to a book.
> Boolean **createBookmarks**
>
> When true, bookmarks are created for TOC entries.
> HorizontalOrVertical **setStoryDirection**
>
> Story direction for the table of contents.
> NumberedParagraphsOptions **numberedParagraphs**
>
> Import format for numbered paragraphs in the TOC.
> Boolean **removeForcedLineBreak**
>
> When true, forced line breaks are removed.
> Boolean **makeAnchor**
>
> When true, a text anchor is made in the source paragraph.
> String **label**
>
> Property that accepts any string value.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> TOCStyle **duplicate**()
>
> Creates a duplicate of the TOCStyle.
> **remove**()
>
> Removes the TOCStyle.
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
> Builds a string that returns the TOCStyle when run.
> TOCStyle **getElements**()
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

## TOCStyles

Collection object for TOC styles.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> TOCStyle **add**( Object **withProperties** )
>
> Creates a TOCStyle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the created TOCStyle. (Optional) |

> Number **count**()
>
> Gives the element total for the TOCStyle.
> TOCStyle **item**( Mixed **index** )
>
> Gets the TOCStyle identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> TOCStyle **itemByName**( String **name** )
>
> Gets the TOCStyle with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> TOCStyle **itemByID**( Number **id** )
>
> Gets the TOCStyle with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> TOCStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TOCStyles covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting TOCStyle, index, or name for the range. Accepts: TOCStyle, Long Integer or String. |
| Mixed | to | Ending TOCStyle, index, or name for the range. Accepts: TOCStyle, Long Integer or String. |

> TOCStyle **firstItem**()
>
> Gets the first TOCStyle from the collection.
> TOCStyle **lastItem**()
>
> Gets the final TOCStyle from the collection.
> TOCStyle **middleItem**()
>
> Gets the middle TOCStyle from the collection.
> TOCStyle **previousItem**( TOCStyle **obj** )
>
> Gets the TOCStyle positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TOCStyle | obj | Index of the TOCStyle located after the requested TOCStyle. |

> TOCStyle **nextItem**( TOCStyle **obj** )
>
> Gets the TOCStyle positioned after the specified TOCStyle in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TOCStyle | obj | TOCStyle located before the requested TOCStyle. |

> TOCStyle **anyItem**()
>
> Gets one TOCStyle from the collection.
> TOCStyle **everyItem**()
>
> Gets all TOCStyle objects in the collection.
> String **toSource**()
>
> Builds a string that returns the TOCStyle when run.
> TOCStyle **[]**( Number **index** )
>
> Gets the TOCStyle at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## ToolBox

ToolBox tools.

### Class

> _Read Only_
>
> String `AFTER_ATTRIBUTE_CHANGED` = afterAttributeChanged
>
> Fired when a property value changes on this ToolBox. This event bubbles. This event cannot be canceled.

### Instance

> _Read Only_
>
> String **currentToolName**
>
> Name for the tool that is active now.
> _Read Only_
>
> String **currentToolHint**
>
> Hint text associated with the active tool.
> _Read Only_
>
> File **currentToolIconFile**
>
> Icon resource file used by the active tool.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for this ToolBox; it is a Application.
> _Read Only_
>
> Events **events**
>
> Event objects are exposed through this collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects are exposed through this collection.
> UITools **currentTool**
>
> Tool that is active at the moment.
> Object **properties**
>
> Use this property to set multiple properties together.

### Methods

> String **toSource**()
>
> Builds source text that recreates the ToolBox when run.
> ToolBox **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches a listener for an event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches the listener for that event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## ToolTipOptions

Settings that control tool tip behavior.

### Class

> _Read Only_
>
> Number **NORMAL** = 1852797549
>
> Tool tips are shown.
> _Read Only_
>
> Number **NONE** = 1852796517
>
> Tool tips are disabled.
> _Read Only_
>
> Number **FAST** = 1180791668
>
> Tool tips appear faster than the normal timing.

## ToolsPanelOptions

Configuration choices for the Tools panel.

### Class

> _Read Only_
>
> Number `SINGLE_COLUMN` = 1163092844
>
> One-column layout
> _Read Only_
>
> Number `DOUBLE_COLUMN` = 1162109804
>
> Two-column layout
> _Read Only_
>
> Number `SINGLE_ROW` = 1163096695
>
> One-row layout

## Topic

Topic entry used by an index.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for this Topic; it can be a IndexSection, Topic or Index.
> _Read Only_
>
> Number **index**
>
> Position of this Topic inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event objects are exposed through this collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects are exposed through this collection.
> _Read Only_
>
> Topics **topics**
>
> Index topic objects are exposed through this collection.
> _Read Only_
>
> CrossReferences **crossReferences**
>
> Index cross-reference objects are exposed through this collection. Text-level cross references should use the 'cross reference source' and 'hyperlink' objects.
> _Read Only_
>
> PageReferences **pageReferences**
>
> Index page-reference objects are exposed through this collection.
> String **sortOrder**
>
> Sorting can use this string in place of the topic name. Note: The index displays the actual topic text, not the sort order text.
> String **name**
>
> Name assigned to the Topic.
> Object **properties**
>
> Use this property to set multiple properties together.

### Methods

> **remove**()
>
> Removes the Topic.
> **capitalize**( IndexCapitalizationOptions **capitalizationOption** )
>
> Applies uppercase to the first letter of the specified index topic or topic group.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IndexCapitalizationOptions | capitalizationOption | The entry or entries to capitalize. (Optional) |

> String **toSource**()
>
> Builds source text that recreates the Topic when run.
> Topic **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches a listener for an event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches the listener for that event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## Topics

Collection containing index topic entries.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the Topic.
> Topic **add**( String **name**, String **sortBy**, Object **withProperties** )
>
> Creates an index-topic object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | The name of the topic. Note: This is the text that appears in the index. |
| String | sortBy | The string to sort this topic by instead of the topic name. Note: The actual topic text, rather than the sort order text, appears in the index. (Optional) |
| Object | withProperties | Initial values for properties of the new Topic (Optional) |

> Topic **item**( Mixed **index** )
>
> Gets the Topic identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | The index or name. Can accept: Long Integer or String. |

> Topic **itemByName**( String **name** )
>
> Gets the Topic with that name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | The name. |

> Topic **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Topics included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | The Topic, index, or name at the beginning of the range. Can accept: Topic, Long Integer or String. |
| Mixed | to | The Topic, index, or name at the end of the range. Can accept: Topic, Long Integer or String. |

> Topic **firstItem**()
>
> Gets the first Topic in the collection.
> Topic **lastItem**()
>
> Gets the last Topic in the collection.
> Topic **middleItem**()
>
> Gets the middle Topic in the collection.
> Topic **previousItem**( Topic **obj** )
>
> Gets the Topic whose index precedes the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Topic | obj | The index of the Topic that follows the desired Topic. |

> Topic **nextItem**( Topic **obj** )
>
> Gets the Topic whose index comes after the supplied Topic in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Topic | obj | The Topic whose index comes before the desired Topic. |

> Topic **anyItem**()
>
> Gets any Topic in the collection.
> Topic **everyItem**()
>
> Gets every Topic in the collection.
> String **toSource**()
>
> Builds source text that recreates the Topic when run.
> Topic **[]**( Number **index** )
>
> Gets the Topic at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | The index. |
