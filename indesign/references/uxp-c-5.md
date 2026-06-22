# Change Types, Change, Changebar Locations, Changecase Mode ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ChangeTypes; Change; ChangebarLocations; ChangecaseMode; Changes; ChapterNumberPreference; ChapterNumberSources; ChapterNumberVariablePreference; CharStyleMapping; CharStyleMappings; CharacterAlignment; CharacterCountLocation; CharacterDirectionOptions — Class; CharacterStyleGroup; CharacterStyleGroups.

## ChangeTypes

Options for change types.

### Class

> _Read Only_
>
> Number `INSERTED_TEXT` = 1799974515
>
> Inserted text.
> _Read Only_
>
> Number `DELETED_TEXT` = 1799644524
>
> Removed text.
> _Read Only_
>
> Number `MOVED_TEXT` = 1800236918
>
> Relocated text.

## Change

Represents a story-level tracked change.

### Instance

> _Read Only_
>
> Date **date**
>
> Stores when the tracked change was made; this is valid only when track changes is true.
> _Read Only_
>
> ChangeTypes **changeType**
>
> Stores the tracked-change type; this is valid only when track changes is true.
> _Read Only_
>
> String **userName**
>
> Stores the user responsible for the change; this is valid only when track changes is true.
> _Read Only_
>
> InsertionPoint **storyOffset**
>
> Locates the first insertion point in the object, relative to the story beginning.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the Change parent, a Story, XmlStory or Cell.
> _Read Only_
>
> Number **index**
>
> Stores the Change index inside its containing object.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listeners collection.
> _Read Only_
>
> Texts **texts**
>
> Provides the text objects collection.
> _Read Only_
>
> Characters **characters**
>
> Provides the characters collection.
> _Read Only_
>
> Words **words**
>
> Provides the words collection.
> _Read Only_
>
> Lines **lines**
>
> Provides the lines collection.
> _Read Only_
>
> TextColumns **textColumns**
>
> Provides the text columns collection.
> _Read Only_
>
> Paragraphs **paragraphs**
>
> Provides the paragraphs collection.
> _Read Only_
>
> InsertionPoints **insertionPoints**
>
> Provides the insertion points collection.
> _Read Only_
>
> TextStyleRanges **textStyleRanges**
>
> Provides the text style ranges collection.
> _Read Only_
>
> TextVariableInstances **textVariableInstances**
>
> Provides the text variable instances collection.
> Object **properties**
>
> Supports assigning several properties in one operation.

### Methods

> **accept**()
>
> Accepts the tracked change; this is valid only when track changes is true.
> **reject**()
>
> Rejects the tracked change; this is valid only when track changes is true.
> String **toSource**()
>
> Creates executable source text that returns the Change.
> Change **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the event type. |
| Mixed | handler | Specifies the event handler. Accepted input: Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the registered event type. |
| Mixed | handler | Specifies the registered event handler. Accepted input: Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ChangebarLocations

Options for change bar locations.

### Class

> _Read Only_
>
> Number `LEFT_ALIGN` = 1818584692
>
> Places change bars in the left margin.
> _Read Only_
>
> Number `RIGHT_ALIGN` = 1919379572
>
> Places change bars in the right margin.

## ChangecaseMode

Options for text case.

### Class

> _Read Only_
>
> Number **UPPERCASE** = 1667462499
>
> Converts every letter to uppercase.
> _Read Only_
>
> Number **LOWERCASE** = 1667460195
>
> Converts every letter to lowercase.
> _Read Only_
>
> Number **TITLECASE** = 1667462243
>
> Uppercases the first letter in each word.
> _Read Only_
>
> Number **SENTENCECASE** = 1667461987
>
> Uppercases the first letter in each sentence.

## Changes

Represents a changes collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Stores the collection object count.

### Methods

> Number **count**()
>
> Returns the element count for the Change.
> Change **item**( Mixed **index** )
>
> Provides the Change identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Specifies the index or name. Accepted input: Can accept: Long Integer or String. |

> Change **itemByRange**( Mixed **from**, Mixed **to** )
>
> Provides the Changes in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Specifies the Change, index, or name where the range begins. Accepted input: Can accept: Change, Long Integer or String. |
| Mixed | to | Specifies the Change, index, or name where the range ends. Accepted input: Can accept: Change, Long Integer or String. |

> Change **firstItem**()
>
> Provides the first Change in the collection.
> Change **lastItem**()
>
> Provides the last Change in the collection.
> Change **middleItem**()
>
> Provides the middle Change in the collection.
> Change **previousItem**( Change **obj** )
>
> Provides the Change at the index before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Change | obj | Specifies the Change index that follows the desired Change. |

> Change **nextItem**( Change **obj** )
>
> Provides the Change whose index comes after the specified Change in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Change | obj | Specifies the Change that precedes the desired Change. |

> Change **anyItem**()
>
> Provides any Change in the collection.
> Change **everyItem**()
>
> Provides every Change in the collection.
> String **toSource**()
>
> Creates executable source text that returns the Change.
> Change **[]**( Number **index** )
>
> Provides the Change identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Specifies the index. |

## ChapterNumberPreference

Preferences for chapter numbering.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Identifies the ChapterNumberPreference parent, a Document.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listeners collection.
> Number **chapterNumber**
>
> Stores the chapter number.
> ChapterNumberSources **chapterNumberSource**
>
> Specifies the source used to generate the chapter number.
> Mixed **chapterNumberFormat**
>
> Sets chapter-number formatting options. Type information: Can return: NumberingStyle enumerator or String.
> Object **properties**
>
> Supports assigning several properties in one operation.

### Methods

> String **toSource**()
>
> Creates executable source text that returns the ChapterNumberPreference.
> ChapterNumberPreference **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the event type. |
| Mixed | handler | Specifies the event handler. Accepted input: Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the registered event type. |
| Mixed | handler | Specifies the registered event handler. Accepted input: Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ChapterNumberSources

Sources for chapter numbers.

### Class

> _Read Only_
>
> Number `USER_DEFINED` = 1668183396
>
> Chapter number set by the user.
> _Read Only_
>
> Number `CONTINUE_FROM_PREVIOUS_DOCUMENT` = 1668178800
>
> Chapter numbering continues from the prior document.
> _Read Only_
>
> Number `SAME_AS_PREVIOUS_DOCUMENT` = 1668182896
>
> Chapter numbering matches the prior document.

## ChapterNumberVariablePreference

Settings used by a chapter number variable.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier maps to valid objects.
> _Read Only_
>
> TextVariable **parent**
>
> Owning TextVariable for the ChapterNumberVariablePreference.
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
> String **textBefore**
>
> Text placed before the variable value. (Limit: 128 characters)
> VariableNumberingStyles **format**
>
> Numbering style used by the variable.
> String **textAfter**
>
> Text placed after the variable value. (Limit: 128 characters)
> Object **properties**
>
> Allows several properties to be assigned together.

### Methods

> String **toSource**()
>
> Produces a string that can be executed to recreate the ChapterNumberVariablePreference.
> ChapterNumberVariablePreference **getElements**()
>
> Resolves the object specifier and returns object references as an array.
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
| Mixed | handler | Handler for the event. Accepted values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered handler for the event. Accepted values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## CharStyleMapping

Mapping entry for a character style.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for the CharStyleMapping: Application, Document, Story, or XmlStory.
> _Read Only_
>
> Number **index**
>
> Position of the CharStyleMapping inside its container.
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
> String **sourceStyleName**
>
> Name of the source style.
> String **destinationStyleName**
>
> Name of the destination style.
> MapType **mappingRuleType**
>
> Mapping rule type.
> Object **properties**
>
> Allows several properties to be set together.

### Methods

> **remove**()
>
> Deletes a style-mapping entry.
> String **toSource**()
>
> Produces a string that can be executed to recreate the CharStyleMapping.
> CharStyleMapping **getElements**()
>
> Resolves the object specifier and returns object references as an array.
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
| Mixed | handler | Handler for the event. Accepted values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered handler for the event. Accepted values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## CharStyleMappings

Collection containing char style mappings.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> CharStyleMapping **add**( String **sourceStyleName**, String **destinationStyleName**, MapType **mappingRuleType**, Object **withProperties** )
>
> Creates a style mapping entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | sourceStyleName | Name of the source style. |
| String | destinationStyleName | Name of the destination style. |
| MapType | mappingRuleType | Mapping type. |
| Object | withProperties | Initial property values for the new CharStyleMapping. (Optional) |

> Number **count**()
>
> Returns how many elements the CharStyleMapping collection contains.
> CharStyleMapping **item**( Mixed **index** )
>
> Gets the CharStyleMapping identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepted values: Long Integer or String. |

> CharStyleMapping **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets CharStyleMappings in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting CharStyleMapping, index, or name for the range. Accepted values: CharStyleMapping, Long Integer or String. |
| Mixed | to | Ending CharStyleMapping, index, or name for the range. Accepted values: CharStyleMapping, Long Integer or String. |

> CharStyleMapping **firstItem**()
>
> Gets the collection's first CharStyleMapping.
> CharStyleMapping **lastItem**()
>
> Gets the collection's last CharStyleMapping.
> CharStyleMapping **middleItem**()
>
> Gets the collection's middle CharStyleMapping.
> CharStyleMapping **previousItem**( CharStyleMapping **obj** )
>
> Gets the CharStyleMapping whose index comes immediately before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharStyleMapping | obj | CharStyleMapping used as the following item when locating the desired CharStyleMapping. |

> CharStyleMapping **nextItem**( CharStyleMapping **obj** )
>
> Gets the CharStyleMapping whose index comes immediately after the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharStyleMapping | obj | CharStyleMapping used as the preceding item when locating the desired CharStyleMapping. |

> CharStyleMapping **anyItem**()
>
> Gets any CharStyleMapping from the collection.
> CharStyleMapping **everyItem**()
>
> Gets every CharStyleMapping in the collection.
> String **toSource**()
>
> Produces a string that can be executed to recreate the CharStyleMapping.
> CharStyleMapping **[]**( Number **index** )
>
> Gets the CharStyleMapping at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## CharacterAlignment

Alignment choices for positioning smaller characters relative to the line's largest character.

### Class

> _Read Only_
>
> Number `ALIGN_BASELINE` = 1247896172
>
> Positions small characters in a line relative to the large character.
> _Read Only_
>
> Number `ALIGN_EM_TOP` = 1247900784
>
> In horizontal text, places small characters at the top of large characters' em box. In vertical text, positions them on the em box's right side.
> _Read Only_
>
> Number `ALIGN_EM_CENTER` = 1247896436
>
> Centers small characters on the em box of large characters.
> _Read Only_
>
> Number `ALIGN_EM_BOTTOM` = 1247896173
>
> In horizontal text, places small characters at the bottom of large characters' em box. In vertical text, positions them on the em box's left side.
> _Read Only_
>
> Number `ALIGN_ICF_TOP` = 1248425072
>
> In horizontal text, places small characters at the top of the ICF for large characters. In vertical text, positions them on the ICF's right side.
> _Read Only_
>
> Number `ALIGN_ICF_BOTTOM` = 1248420461
>
> In horizontal text, places small characters at the bottom of the ICF for large characters. In vertical text, positions them on the ICF's left side.

## CharacterCountLocation

Options controlling where character counts appear.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Does not show the character count.
> _Read Only_
>
> Number `TOP_ALIGN` = 1953460256
>
> Places the character count along the frame top.
> _Read Only_
>
> Number `LEFT_ALIGN` = 1818584692
>
> Places the character count on the frame's left side.
> _Read Only_
>
> Number `BOTTOM_ALIGN` = 1651471469
>
> Places the character count along the frame bottom.
> _Read Only_
>
> Number `RIGHT_ALIGN` = 1919379572
>
> Places the character count on the frame's right side.

## CharacterDirectionOptions — Class

> _Read Only_
>
> Number `DEFAULT_DIRECTION` = 1147496036
>
> Uses the default direction.
> _Read Only_
>
> Number `LEFT_TO_RIGHT_DIRECTION` = 1278366308
>
> Uses left-to-right direction.
> _Read Only_
>
> Number `RIGHT_TO_LEFT_DIRECTION` = 1379028068
>
> Uses right-to-left direction.

## CharacterStyleGroup

Group for character styles.

### Instance

> _Read Only_
>
> CharacterStyle **allCharacterStyles**
>
> Reports every character style, independent of group membership.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the CharacterStyleGroup.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for the CharacterStyleGroup: Document, Application, or CharacterStyleGroup.
> _Read Only_
>
> Number **index**
>
> Position of the CharacterStyleGroup inside its container.
> _Read Only_
>
> CharacterStyles **characterStyles**
>
> Collection containing character styles.
> _Read Only_
>
> CharacterStyleGroups **characterStyleGroups**
>
> Collection containing character style groups.
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
> Name assigned to the CharacterStyleGroup.
> String **label**
>
> String-valued label property.
> Object **properties**
>
> Allows several properties to be assigned together.

### Methods

> CharacterStyleGroup **duplicate**()
>
> Creates a CharacterStyleGroup duplicate.
> CharacterStyleGroup **move**( LocationOptions **to**, Mixed **reference** )
>
> Moves the style to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement target, either relative to reference or inside the containing object. |
| Mixed | reference | Reference object. Required when the to value specifies before or after. Accepted values: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document, or the Application type. (Optional) |

> **remove**( Mixed **replacingWith** )
>
> Removes the style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | replacingWith | Style applied as the replacement for the deleted style. Accepted values: ParagraphStyle or CharacterStyle. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores value under the specified key for the label.

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
> Produces a string that can be executed to recreate the CharacterStyleGroup.
> CharacterStyleGroup **getElements**()
>
> Resolves the object specifier and returns object references as an array.
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
| Mixed | handler | Handler for the event. Accepted values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered handler for the event. Accepted values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## CharacterStyleGroups

Collection containing character style groups.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> CharacterStyleGroup **add**( Object **withProperties** )
>
> Adds a new CharacterStyleGroup.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new CharacterStyleGroup. (Optional) |

> Number **count**()
>
> Returns how many elements the CharacterStyleGroup collection contains.
> CharacterStyleGroup **item**( Mixed **index** )
>
> Gets the CharacterStyleGroup identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepted values: Long Integer or String. |

> CharacterStyleGroup **itemByName**( String **name** )
>
> Gets the CharacterStyleGroup identified by name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> CharacterStyleGroup **itemByID**( Number **id** )
>
> Gets the CharacterStyleGroup identified by ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> CharacterStyleGroup **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets CharacterStyleGroups in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting CharacterStyleGroup, index, or name for the range. Accepted values: CharacterStyleGroup, Long Integer or String. |
| Mixed | to | Ending CharacterStyleGroup, index, or name for the range. Accepted values: CharacterStyleGroup, Long Integer or String. |

> CharacterStyleGroup **firstItem**()
>
> Gets the collection's first CharacterStyleGroup.
> CharacterStyleGroup **lastItem**()
>
> Gets the collection's last CharacterStyleGroup.
> CharacterStyleGroup **middleItem**()
>
> Gets the collection's middle CharacterStyleGroup.
> CharacterStyleGroup **previousItem**( CharacterStyleGroup **obj** )
>
> Gets the CharacterStyleGroup whose index comes immediately before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharacterStyleGroup | obj | CharacterStyleGroup used as the following item when locating the desired CharacterStyleGroup. |

> CharacterStyleGroup **nextItem**( CharacterStyleGroup **obj** )
>
> Gets the CharacterStyleGroup whose index comes immediately after the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharacterStyleGroup | obj | CharacterStyleGroup used as the preceding item when locating the desired CharacterStyleGroup. |

> CharacterStyleGroup **anyItem**()
>
> Gets any CharacterStyleGroup from the collection.
> CharacterStyleGroup **everyItem**()
>
> Gets every CharacterStyleGroup in the collection.
> String **toSource**()
>
> Produces a string that can be executed to recreate the CharacterStyleGroup.
> CharacterStyleGroup **[]**( Number **index** )
>
> Gets the CharacterStyleGroup at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## See also

- [Characters](uxp-characters.md)
