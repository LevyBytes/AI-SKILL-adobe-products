# Nested Styles, Note Backgrounds, Note Color Choices, Note Preference ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: NestedStyles; NoteBackgrounds; NoteColorChoices; NotePreference — Instance; Note; Notes; NothingEnum — Class; NumberedListExportOption; NumberedParagraphsOptions; NumberingList; NumberingLists; NumberingRestartPolicy; NumberingStyle — Class.

## NestedStyles

Collection object for nested styles.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> NestedStyle **add**( Object **withProperties** )
>
> Adds a NestedStyle object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the NestedStyle being added. (Optional) |

> Number **count**()
>
> Reports how many NestedStyle elements are present.
> NestedStyle **item**( Mixed **index** )
>
> Gets the NestedStyle addressed by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> NestedStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets NestedStyles covered by the supplied endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting endpoint, given as a NestedStyle, index, or name. Accepts: NestedStyle, Long Integer or String. |
| Mixed | to | Ending endpoint, given as a NestedStyle, index, or name. Accepts: NestedStyle, Long Integer or String. |

> NestedStyle **firstItem**()
>
> Gets the first NestedStyle in this collection.
> NestedStyle **lastItem**()
>
> Gets the final NestedStyle in this collection.
> NestedStyle **middleItem**()
>
> Gets the middle NestedStyle in this collection.
> NestedStyle **previousItem**( NestedStyle **obj** )
>
> Gets the NestedStyle positioned before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NestedStyle | obj | NestedStyle whose position follows the target NestedStyle. |

> NestedStyle **nextItem**( NestedStyle **obj** )
>
> Gets the NestedStyle positioned after the specified one in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NestedStyle | obj | NestedStyle whose position precedes the target NestedStyle. |

> NestedStyle **anyItem**()
>
> Gets an arbitrary NestedStyle from the collection.
> NestedStyle **everyItem**()
>
> Gets all NestedStyle objects in the collection.
> String **toSource**()
>
> Builds executable source text that resolves back to the NestedStyle.
> NestedStyle **[]**( Number **index** )
>
> Gets the NestedStyle addressed by numeric index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## NoteBackgrounds

Options for note background colors.

### Class

> _Read Only_
>
> Number `GALLEY_BACKGROUND_COLOR` = 1699168839
>
> Selects the galley background color.
> _Read Only_
>
> Number `USE_NOTE_COLOR` = 1700020807
>
> Selects the note color.

## NoteColorChoices

Options for note colors.

### Class

> _Read Only_
>
> Number `USE_USER_COLOR` = 1700091203
>
> Selects the user's assigned color.
> _Read Only_
>
> Number `USE_NOTE_PREF_COLOR` = 1700089923
>
> Selects the note color.

## NotePreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Application **parent**
>
> Application that owns this NotePreference.
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
> NoteBackgrounds **noteBackgroundColor**
>
> Background color applied to notes.
> Mixed **noteColor**
>
> The note color may be an InCopy UI color or a three-double RGB array with channel values from 0 to 255. Return types: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
> Boolean **showNoteTips**
>
> When true, hovering in layout view over a note anchor, or in galley/story view over a note bookend, displays note details and some note content.
> Boolean **findAndReplaceNoteContents**
>
> When true, Find/Change commands include inline note content; applies only in Galley and Story views.
> Boolean **spellCheckNotes**
>
> When true, Spell Check includes inline note content; applies only in Galley and Story views.
> NoteColorChoices **noteColorChoices**
>
> Color setting used for notes.
> Object **properties**
>
> Property bag for assigning multiple properties together.

### Methods

> String **toSource**()
>
> Builds executable source text that resolves back to the NotePreference.
> NotePreference **getElements**()
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

## Note

Represents a note in a story.

### Instance

> _Read Only_
>
> Date **creationDate**
>
> Date and time when the note was created.
> _Read Only_
>
> Date **modificationDate**
>
> Date and time when the note was most recently modified.
> _Read Only_
>
> String **userName**
>
> User who created the note.
> _Read Only_
>
> InsertionPoint **storyOffset**
>
> InsertionPoint located before the table in the story that contains that table.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Note.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for this Note; one of XmlStory, Story, TextFrame, EndnoteTextFrame, InsertionPoint or Cell.
> _Read Only_
>
> Number **index**
>
> Position of the Note inside its containing object.
> _Read Only_
>
> TextVariableInstances **textVariableInstances**
>
> Text variable instance collection.
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
> Texts **texts**
>
> Text object collection.
> _Read Only_
>
> Characters **characters**
>
> Character collection.
> _Read Only_
>
> Words **words**
>
> Word collection.
> _Read Only_
>
> Lines **lines**
>
> Line collection.
> _Read Only_
>
> TextColumns **textColumns**
>
> Text column collection.
> _Read Only_
>
> Paragraphs **paragraphs**
>
> Paragraph collection.
> _Read Only_
>
> InsertionPoints **insertionPoints**
>
> Insertion point collection.
> _Read Only_
>
> TextStyleRanges **textStyleRanges**
>
> Text style range collection.
> _Read Only_
>
> HiddenTexts **hiddenTexts**
>
> Hidden text object collection.
> Boolean **collapsed**
>
> When true, the note appears collapsed in galley view.
> String **label**
>
> String-valued property available for arbitrary data.
> String **name**
>
> Name of the Note; aliases the Note label property.
> Object **properties**
>
> Property bag for assigning multiple properties together.

### Methods

> **remove**()
>
> Deletes this Note.
> **convertToText**()
>
> Changes the note into story text.
> Note **move**( LocationOptions **to**, Mixed **reference** )
>
> Moves the note to a specified location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Destination, either relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: required when the to parameter specifies before or after. Accepts: Text or Story. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Gets the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **toSource**()
>
> Builds executable source text that resolves back to the Note.
> Note **getElements**()
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

## Notes

Collection object for notes.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Reports how many Note elements are present.
> Note **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Adds a new note.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | at | Placement position, either relative to a reference object or within the containing object. (Optional) |
| Mixed | reference | Reference object. Note: required when the at parameter specifies before or after. Accepts: Note or InsertionPoint. (Optional) |
| Object | withProperties | Starting property values for the Note being added. (Optional) |

> Note **item**( Mixed **index** )
>
> Gets the Note addressed by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> Note **itemByName**( String **name** )
>
> Gets the Note addressed by name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> Note **itemByID**( Number **id** )
>
> Gets the Note addressed by ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> Note **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets Notes covered by the supplied endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting endpoint, given as a Note, index, or name. Accepts: Note, Long Integer or String. |
| Mixed | to | Ending endpoint, given as a Note, index, or name. Accepts: Note, Long Integer or String. |

> Note **firstItem**()
>
> Gets the first Note in this collection.
> Note **lastItem**()
>
> Gets the final Note in this collection.
> Note **middleItem**()
>
> Gets the middle Note in this collection.
> Note **previousItem**( Note **obj** )
>
> Gets the Note positioned before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Note | obj | Note whose position follows the target Note. |

> Note **nextItem**( Note **obj** )
>
> Gets the Note positioned after the specified one in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Note | obj | Note whose position precedes the target Note. |

> Note **anyItem**()
>
> Gets an arbitrary Note from the collection.
> Note **everyItem**()
>
> Gets all Note objects in the collection.
> String **toSource**()
>
> Builds executable source text that resolves back to the Note.
> Note **[]**( Number **index** )
>
> Gets the Note addressed by numeric index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Numeric index. |

## NothingEnum — Class

> _Read Only_
>
> Number **NOTHING** = 1851876449
>
> Nothing

## NumberedListExportOption

NumberedListExportOption defines how ordered list content is exported.

### Class

> _Read Only_
>
> Number `ORDERED_LIST` = 1700949359
>
> Exports the content as an HTML ordered list.
> _Read Only_
>
> Number `AS_TEXT` = 1700946804
>
> Outputs the list content as plain text.

## NumberedParagraphsOptions

Settings that control numbered paragraphs.

### Class

> _Read Only_
>
> Number `INCLUDE_FULL_PARAGRAPH` = 1953064560
>
> Includes all paragraph text.
> _Read Only_
>
> Number `INCLUDE_NUMBERS_ONLY` = 1953066607
>
> Includes just the paragraph number.
> _Read Only_
>
> Number `EXCLUDE_NUMBERS` = 1952804469
>
> Omits paragraph numbering.

## NumberingList

A NumberingList represents a numbered list.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique identifier for the NumberingList.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for the NumberingList (a Application or Document).
> _Read Only_
>
> Number **index**
>
> Position of the NumberingList inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> String **name**
>
> Name assigned to the NumberingList.
> Boolean **continueNumbersAcrossStories**
>
> When true, numbering continues from one story to the next.
> Boolean **continueNumbersAcrossDocuments**
>
> When true, numbering carries across documents in a book.
> String **label**
>
> Stores an arbitrary string value.
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> **remove**( NumberingList **replacingWith** )
>
> Deletes the NumberingList.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NumberingList | replacingWith | NumberingList used as the replacement for this one. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the label value stored under the specified key.

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
| String | key | Key to read. |

> String **toSource**()
>
> Builds executable source text that returns the NumberingList.
> NumberingList **getElements**()
>
> Resolves the specifier and returns object references as an array.
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

## NumberingLists

NumberingLists is a collection containing numbered lists.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size.

### Methods

> NumberingList **add**( String **name**, Boolean **continueNumbersAcrossStories**, Boolean **continueNumbersAcrossDocuments**, Object **withProperties** )
>
> Creates a list style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name |
| Boolean | continueNumbersAcrossStories | When true, numbering continues from one story to the next. (Optional) |
| Boolean | continueNumbersAcrossDocuments | When true, numbering carries across documents in a book. (Optional) |
| Object | withProperties | Starting property values for the new NumberingList. (Optional) |

> Number **count**()
>
> Reports how many elements are in the NumberingList.
> NumberingList **item**( Mixed **index** )
>
> Gets the NumberingList identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> NumberingList **itemByName**( String **name** )
>
> Gets the NumberingList with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> NumberingList **itemByID**( Number **id** )
>
> Gets the NumberingList with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> NumberingList **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the NumberingLists in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | NumberingList, index, or name that starts the range. Can accept: NumberingList, Long Integer or String. |
| Mixed | to | NumberingList, index, or name that ends the range. Can accept: NumberingList, Long Integer or String. |

> NumberingList **firstItem**()
>
> Gets the first NumberingList in the collection.
> NumberingList **lastItem**()
>
> Gets the last NumberingList in the collection.
> NumberingList **middleItem**()
>
> Gets the middle NumberingList in the collection.
> NumberingList **previousItem**( NumberingList **obj** )
>
> Gets the NumberingList at the index immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NumberingList | obj | Index of the NumberingList that follows the requested NumberingList. |

> NumberingList **nextItem**( NumberingList **obj** )
>
> Gets the NumberingList whose index comes after the specified NumberingList in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| NumberingList | obj | NumberingList whose index precedes the requested NumberingList. |

> NumberingList **anyItem**()
>
> Gets any NumberingList from the collection.
> NumberingList **everyItem**()
>
> Gets every NumberingList in the collection.
> String **toSource**()
>
> Builds executable source text that returns the NumberingList.
> NumberingList **[]**( Number **index** )
>
> Gets the NumberingList at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## NumberingRestartPolicy

Policy settings for restarting numbering.

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
> Parent for NumberingRestartPolicy: TextDefault, ParagraphStyle, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story, XmlStory, FindTextPreference, ChangeTextPreference, FindGrepPreference, or ChangeGrepPreference.
> _Read Only_
>
> Events **events**
>
> Event collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> RestartPolicy **numberingPolicy**
>
> Numbering restart policy applied here.
> Number **numberingLowerLevel**
>
> Lower numbering level used by a numbered list.
> Number **numberingUpperLevel**
>
> Upper numbering level used by a numbered list.
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds executable source text that returns the NumberingRestartPolicy.
> NumberingRestartPolicy **getElements**()
>
> Resolves the specifier and returns object references as an array.
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

## NumberingStyle — Class

> _Read Only_
>
> Number `UPPER_ROMAN` = 1297247605
>
> Upper roman
> _Read Only_
>
> Number `LOWER_ROMAN` = 1297247596
>
> Lower roman
> _Read Only_
>
> Number `UPPER_LETTERS` = 1296855669
>
> Upper letters
> _Read Only_
>
> Number `LOWER_LETTERS` = 1296855660
>
> Lower letters
> _Read Only_
>
> Number **ARABIC** = 1298231906
>
> Arabic
> _Read Only_
>
> Number **KANJI** = 1296788073
>
> Kanji
> _Read Only_
>
> Number `KATAKANA_MODERN` = 1265920877
>
> Katakana (a, i, u, e, o...).
> _Read Only_
>
> Number `KATAKANA_TRADITIONAL` = 1265920884
>
> Katakana (i, ro, ha, ni...).
> _Read Only_
>
> Number `FORMAT_NONE` = 1701733998
>
> Adds no characters.
> _Read Only_
>
> Number `SINGLE_LEADING_ZEROS` = 1297312890
>
> Adds one leading zero.
> _Read Only_
>
> Number `ARABIC_ALIF_BA_TAH` = 1296130420
>
> Uses Arabic Alif Ba Tah
> _Read Only_
>
> Number `ARABIC_ABJAD` = 1296130410
>
> Uses Arabic Abjad
> _Read Only_
>
> Number `HEBREW_BIBLICAL` = 1296589410
>
> Uses Hebrew Biblical
> _Read Only_
>
> Number `HEBREW_NON_STANDARD` = 1296589422
>
> Uses Hebrew Non Standard
> _Read Only_
>
> Number `DOUBLE_LEADING_ZEROS` = 1296329850
>
> Adds two leading zeros.
> _Read Only_
>
> Number `TRIPLE_LEADING_ZEROS` = 1297378426
>
> Adds three leading zeros.

## See also

- [Characters](uxp-characters.md)
