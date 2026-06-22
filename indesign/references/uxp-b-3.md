# Bookmarks, Books, Border Panel, Border Panels ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Bookmarks; Books; BorderPanel; BorderPanels; BoundingBoxLimits; BuildingBlockTypes; BuildingBlock; BuildingBlocks; BulletCharacterType; BulletListExportOption; Bullet — Instance; ButtonPreference — Instance.

## Bookmarks

Bookmark objects as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Bookmark **add**( Mixed **destination**, Object **withProperties** )
>
> Creates and returns a bookmark.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | destination | Destination for the bookmark. Can accept: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination or Page. |
| Object | withProperties | Starting property values for the new Bookmark. (Optional) |

> Number **count**()
>
> Reports how many elements are in the Bookmark collection.
> Bookmark **item**( Mixed **index** )
>
> Retrieves the Bookmark identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or name value. Accepts Long Integer or String. |

> Bookmark **itemByName**( String **name** )
>
> Retrieves the Bookmark with the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Bookmark **itemByID**( Number **id** )
>
> Retrieves the Bookmark with the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Bookmark **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the Bookmarks included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Bookmark, index, or name for the range. Can accept: Bookmark, Long Integer or String. |
| Mixed | to | Ending Bookmark, index, or name for the range. Can accept: Bookmark, Long Integer or String. |

> Bookmark **firstItem**()
>
> Retrieves the first Bookmark in the collection.
> Bookmark **lastItem**()
>
> Retrieves the final Bookmark in the collection.
> Bookmark **middleItem**()
>
> Retrieves the middle Bookmark from the collection.
> Bookmark **previousItem**( Bookmark **obj** )
>
> Retrieves the Bookmark positioned immediately before the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Bookmark | obj | Bookmark whose predecessor is requested. |

> Bookmark **nextItem**( Bookmark **obj** )
>
> Retrieves the Bookmark positioned immediately after the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Bookmark | obj | Bookmark whose successor is requested. |

> Bookmark **anyItem**()
>
> Retrieves any Bookmark from the collection.
> Bookmark **everyItem**()
>
> Retrieves every Bookmark in the collection.
> String **toSource**()
>
> Builds source text that returns this Bookmark collection when executed.
> Bookmark **[]**( Number **index** )
>
> Retrieves the Bookmark at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Books

Book objects as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Book **add**( File **fullName**, Object **withProperties** )
>
> Creates and returns a book.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fullName | Full path name for the new book file, including the '.indb' extension. |
| Object | withProperties | Starting property values for the new Book. (Optional) |

> Number **count**()
>
> Reports how many elements are in the Book collection.
> Book **item**( Mixed **index** )
>
> Retrieves the Book identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or name value. Accepts Long Integer or String. |

> Book **itemByName**( String **name** )
>
> Retrieves the Book with the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Book **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the Books included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Book, index, or name for the range. Can accept: Book, Long Integer or String. |
| Mixed | to | Ending Book, index, or name for the range. Can accept: Book, Long Integer or String. |

> Book **firstItem**()
>
> Retrieves the first Book in the collection.
> Book **lastItem**()
>
> Retrieves the final Book in the collection.
> Book **middleItem**()
>
> Retrieves the middle Book from the collection.
> Book **previousItem**( Book **obj** )
>
> Retrieves the Book positioned immediately before the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Book | obj | Book whose predecessor is requested. |

> Book **nextItem**( Book **obj** )
>
> Retrieves the Book positioned immediately after the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Book | obj | Book whose successor is requested. |

> Book **anyItem**()
>
> Retrieves any Book from the collection.
> Book **everyItem**()
>
> Retrieves every Book in the collection.
> String **toSource**()
>
> Builds source text that returns this Book collection when executed.
> Book **[]**( Number **index** )
>
> Retrieves the Book at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## BorderPanel

A dialog border panel that may hold controls of any type and quantity.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique BorderPanel ID.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> BorderPanel parent, which can be a DialogColumn, DialogRow, EnablingGroup or BorderPanel.
> _Read Only_
>
> Number **index**
>
> BorderPanel position inside its containing object.
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
> _Read Only_
>
> DialogColumns **dialogColumns**
>
> Dialog column collection.
> _Read Only_
>
> Widgets **widgets**
>
> Widget collection.
> _Read Only_
>
> TextEditboxes **textEditboxes**
>
> Text editbox collection.
> _Read Only_
>
> IntegerEditboxes **integerEditboxes**
>
> Integer editbox collection.
> _Read Only_
>
> MeasurementEditboxes **measurementEditboxes**
>
> Measurement editbox collection.
> _Read Only_
>
> RealEditboxes **realEditboxes**
>
> Real number editbox collection.
> _Read Only_
>
> AngleEditboxes **angleEditboxes**
>
> Angle editbox collection.
> _Read Only_
>
> PercentEditboxes **percentEditboxes**
>
> Percent editbox collection.
> _Read Only_
>
> IntegerComboboxes **integerComboboxes**
>
> Integer combobox collection.
> _Read Only_
>
> MeasurementComboboxes **measurementComboboxes**
>
> Measurement combobox collection.
> _Read Only_
>
> RealComboboxes **realComboboxes**
>
> Real number combobox collection.
> _Read Only_
>
> AngleComboboxes **angleComboboxes**
>
> Angle combobox collection.
> _Read Only_
>
> PercentComboboxes **percentComboboxes**
>
> Percent combobox collection.
> _Read Only_
>
> CheckboxControls **checkboxControls**
>
> Checkbox control collection.
> _Read Only_
>
> StaticTexts **staticTexts**
>
> Static text object collection.
> _Read Only_
>
> Dropdowns **dropdowns**
>
> Dropdown collection.
> _Read Only_
>
> BorderPanels **borderPanels**
>
> Border panel collection.
> _Read Only_
>
> EnablingGroups **enablingGroups**
>
> Enabling group collection.
> _Read Only_
>
> RadiobuttonGroups **radiobuttonGroups**
>
> Radiobutton group collection.
> Number **minWidth**
>
> Control width; for an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Builds source text that returns this BorderPanel when executed.
> BorderPanel **getElements**()
>
> Resolves the object specifier and produces object references as an array.
> String **toSpecifier**()
>
> Returns the object specifier text.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts either a File or a JavaScript Function. |
| Boolean | captures | Obsolete; retained only for compatibility. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts either a File or a JavaScript Function. |
| Boolean | captures | Obsolete; retained only for compatibility. (Optional) |

## BorderPanels

Border panel objects as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> BorderPanel **add**( Object **withProperties** )
>
> Creates and returns a BorderPanel.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new BorderPanel. (Optional) |

> Number **count**()
>
> Reports how many elements are in the BorderPanel collection.
> BorderPanel **item**( Mixed **index** )
>
> Retrieves the BorderPanel identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or name value. Accepts Long Integer or String. |

> BorderPanel **itemByID**( Number **id** )
>
> Retrieves the BorderPanel with the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> BorderPanel **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the BorderPanels included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting BorderPanel, index, or name for the range. Can accept: BorderPanel, Long Integer or String. |
| Mixed | to | Ending BorderPanel, index, or name for the range. Can accept: BorderPanel, Long Integer or String. |

> BorderPanel **firstItem**()
>
> Retrieves the first BorderPanel in the collection.
> BorderPanel **lastItem**()
>
> Retrieves the final BorderPanel in the collection.
> BorderPanel **middleItem**()
>
> Retrieves the middle BorderPanel from the collection.
> BorderPanel **previousItem**( BorderPanel **obj** )
>
> Retrieves the BorderPanel positioned immediately before the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| BorderPanel | obj | BorderPanel whose predecessor is requested. |

> BorderPanel **nextItem**( BorderPanel **obj** )
>
> Retrieves the BorderPanel positioned immediately after the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| BorderPanel | obj | BorderPanel whose successor is requested. |

> BorderPanel **anyItem**()
>
> Retrieves any BorderPanel from the collection.
> BorderPanel **everyItem**()
>
> Retrieves every BorderPanel in the collection.
> String **toSource**()
>
> Builds source text that returns this BorderPanel collection when executed.
> BorderPanel **[]**( Number **index** )
>
> Retrieves the BorderPanel at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## BoundingBoxLimits

Limits used for bounding boxes.

### Class

> _Read Only_
>
> Number `OUTER_STROKE_BOUNDS` = 1768844081
>
> Bounds that include the outer stroke.
> _Read Only_
>
> Number `GEOMETRIC_PATH_BOUNDS` = 1768844080
>
> Bounds based on the geometric path.

## BuildingBlockTypes

Types available for cross reference building blocks.

### Class

> _Read Only_
>
> Number `CUSTOM_STRING_BUILDING_BLOCK` = 1650615155
>
> Building block type for custom strings.
> _Read Only_
>
> Number `FILE_NAME_BUILDING_BLOCK` = 1650615918
>
> Building block type for file names.
> _Read Only_
>
> Number `CHAPTER_NUMBER_BUILDING_BLOCK` = 1650615150
>
> Building block type for chapter numbers.
> _Read Only_
>
> Number `PAGE_NUMBER_BUILDING_BLOCK` = 1650618478
>
> Building block type for page numbers.
> _Read Only_
>
> Number `FULL_PARAGRAPH_BUILDING_BLOCK` = 1650615920
>
> Building block type for full paragraphs.
> _Read Only_
>
> Number `PARAGRAPH_NUMBER_BUILDING_BLOCK` = 1651533678
>
> Building block type for paragraph numbers.
> _Read Only_
>
> Number `PARAGRAPH_TEXT_BUILDING_BLOCK` = 1650618484
>
> Building block type for paragraph text.
> _Read Only_
>
> Number `BOOKMARK_NAME_BUILDING_BLOCK` = 1650614894
>
> Building block type for bookmark names.

## BuildingBlock

A building block object for cross references.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> CrossReferenceFormat **parent**
>
> Parent CrossReferenceFormat for the BuildingBlock.
> _Read Only_
>
> Number **index**
>
> BuildingBlock position inside its containing object.
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
> BuildingBlockTypes **blockType**
>
> Building block type.
> CharacterStyle **appliedCharacterStyle**
>
> Character style applied to the building block.
> String **customText**
>
> Custom text for the building block. Currently, this matters only for custom string building block; other building block types ignore it.
> String **appliedDelimiter**
>
> Delimiter character used by paragraph text and full paragraph building blocks. Other building block types ignore it.
> Boolean **includeDelimiter**
>
> When true, generated source for the building block includes the delimiter. Without a delimiter on the building block, this setting has no effect.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **remove**()
>
> Deletes this BuildingBlock.
> String **toSource**()
>
> Builds source text that returns this BuildingBlock when executed.
> BuildingBlock **getElements**()
>
> Resolves the object specifier and produces object references as an array.
> String **toSpecifier**()
>
> Returns the object specifier text.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts either a File or a JavaScript Function. |
| Boolean | captures | Obsolete; retained only for compatibility. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts either a File or a JavaScript Function. |
| Boolean | captures | Obsolete; retained only for compatibility. (Optional) |

## BuildingBlocks

Cross reference building block objects as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Number of held objects.

### Methods

> BuildingBlock **add**( BuildingBlockTypes **blockType**, CharacterStyle **appliedCharacterStyle**, String **customText**, Object **withProperties** )
>
> Creates and returns a cross reference building block.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| BuildingBlockTypes | blockType | Building block type. |
| CharacterStyle | appliedCharacterStyle | Character style applied to the building block. (Optional) |
| String | customText | Custom text for the building block. Currently, this matters only for custom string building block; other building block types ignore it. (Optional) |
| Object | withProperties | Starting property values for the new BuildingBlock. (Optional) |

> Number **count**()
>
> Reports how many elements are in the BuildingBlock collection.
> BuildingBlock **item**( Mixed **index** )
>
> Retrieves the BuildingBlock identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or name value. Accepts Long Integer or String. |

> BuildingBlock **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the BuildingBlocks included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting BuildingBlock, index, or name for the range. Can accept: BuildingBlock, Long Integer or String. |
| Mixed | to | Ending BuildingBlock, index, or name for the range. Can accept: BuildingBlock, Long Integer or String. |

> BuildingBlock **firstItem**()
>
> Retrieves the first BuildingBlock in the collection.
> BuildingBlock **lastItem**()
>
> Retrieves the final BuildingBlock in the collection.
> BuildingBlock **middleItem**()
>
> Retrieves the middle BuildingBlock from the collection.
> BuildingBlock **previousItem**( BuildingBlock **obj** )
>
> Retrieves the BuildingBlock positioned immediately before the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| BuildingBlock | obj | BuildingBlock whose predecessor is requested. |

> BuildingBlock **nextItem**( BuildingBlock **obj** )
>
> Retrieves the BuildingBlock positioned immediately after the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| BuildingBlock | obj | BuildingBlock whose successor is requested. |

> BuildingBlock **anyItem**()
>
> Retrieves any BuildingBlock from the collection.
> BuildingBlock **everyItem**()
>
> Retrieves every BuildingBlock in the collection.
> String **toSource**()
>
> Builds source text that returns this BuildingBlock collection when executed.
> BuildingBlock **[]**( Number **index** )
>
> Retrieves the BuildingBlock at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## BulletCharacterType

Kinds used for bullet characters.

### Class

> _Read Only_
>
> Number `UNICODE_ONLY` = 1111717231
>
> Restricts the bullet character to Unicode.
> _Read Only_
>
> Number `UNICODE_WITH_FONT` = 1111717222
>
> Uses Unicode together with a font.
> _Read Only_
>
> Number `GLYPH_WITH_FONT` = 1111713638
>
> Uses a glyph together with a font.

## BulletListExportOption

Export choices for unordered bullet lists.

### Class

> _Read Only_
>
> Number `UNORDERED_LIST` = 1700949333
>
> Exports as an HTML unordered list.
> _Read Only_
>
> Number `AS_TEXT` = 1700946804
>
> Exports as text.

## Bullet — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Bullet: TextDefault, ParagraphStyle, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story, XmlStory, FindTextPreference, ChangeTextPreference, FindGrepPreference, ChangeGrepPreference, FindTransliteratePreference, or ChangeTransliteratePreference.
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
> BulletCharacterType **characterType**
>
> Bullet character category.
> Number **characterValue**
>
> Unicode ID or glyph ID used for the bullet character.
> Mixed **bulletsFont**
>
> Font used by the bullet character. May return Font, String, or AutoEnum enumerator.
> Mixed **bulletsFontStyle**
>
> Font style used by the bullet character. May return String, NothingEnum enumerator, or AutoEnum enumerator.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Creates a string that recreates the Bullet when run.
> Bullet **getElements**()
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
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ButtonPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the ButtonPreference: Application or Document.
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
> String **name**
>
> ButtonPreference name.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Creates a string that recreates the ButtonPreference when run.
> ButtonPreference **getElements**()
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
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
