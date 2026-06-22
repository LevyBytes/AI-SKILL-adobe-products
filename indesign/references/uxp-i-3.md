# Imported Pages, In Copy Export Option, In Copy Ui Colors, Index Capitalization Options ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ImportedPages; InCopyExportOption; InCopyUIColors; IndexCapitalizationOptions; IndexFormat; IndexOptions — Instance; IndexSection; IndexSections; Index — Instance.

## ImportedPages

Imported InDesign pages.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size in objects.

### Methods

> Number **count**()
>
> Reports how many elements are in the ImportedPage collection.
> ImportedPage **add**( Object **withProperties** )
>
> Creates an ImportedPage.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new ImportedPage. (Optional) |

> ImportedPage **item**( Mixed **index** )
>
> Gets the ImportedPage for the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> ImportedPage **itemByName**( String **name** )
>
> Gets the ImportedPage with the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name string. |

> ImportedPage **itemByID**( Number **id** )
>
> Gets the ImportedPage with the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> ImportedPage **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ImportedPages inside the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as an ImportedPage, Long Integer, or String. |
| Mixed | to | Range end, supplied as an ImportedPage, Long Integer, or String. |

> ImportedPage **firstItem**()
>
> Gets the first ImportedPage in the collection.
> ImportedPage **lastItem**()
>
> Gets the last ImportedPage in the collection.
> ImportedPage **middleItem**()
>
> Gets the middle ImportedPage in the collection.
> ImportedPage **previousItem**( ImportedPage **obj** )
>
> Gets the ImportedPage whose index is immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ImportedPage | obj | ImportedPage index that comes after the desired ImportedPage. |

> ImportedPage **nextItem**( ImportedPage **obj** )
>
> Gets the ImportedPage whose index comes after the specified ImportedPage in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ImportedPage | obj | ImportedPage whose index precedes the desired ImportedPage. |

> ImportedPage **anyItem**()
>
> Gets any ImportedPage in the collection.
> ImportedPage **everyItem**()
>
> Gets every ImportedPage in the collection.
> String **toSource**()
>
> Builds a string that returns the ImportedPage when executed.
> ImportedPage **[]**( Number **index** )
>
> Gets the ImportedPage at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## InCopyExportOption

Export settings for the InCopy INCX document format.

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
> Parent object for the InCopyExportOption; may be an Application, Story, XmlStory, Oval, Rectangle, or Polygon.
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
> Boolean **includeGraphicProxies**
>
> When true, graphic proxy data is included.
> Boolean **includeAllResources**
>
> When true, exports every resource, such as styles; otherwise, only resources used by the story are exported.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that returns the InCopyExportOption when executed.
> InCopyExportOption **getElements**()
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

## InCopyUIColors

UI color constants for InCopy.

### Class

> _Read Only_
>
> Number **CANARY** = 1766026873
>
> Color value: Canary.
> _Read Only_
>
> Number **LEMON** = 1766616430
>
> Color value: Lemon.
> _Read Only_
>
> Number **ELECTROLYTE** = 1766157411
>
> Color value: Electrolyte.
> _Read Only_
>
> Number **LIME** = 1766615405
>
> Color value: Lime.
> _Read Only_
>
> Number **FOREST** = 1766224756
>
> Color value: Forest.
> _Read Only_
>
> Number **LICHEN** = 1766615395
>
> Color value: Lichen.
> _Read Only_
>
> Number **JADE** = 1766482276
>
> Color value: Jade.
> _Read Only_
>
> Number **AQUA** = 1765896545
>
> Color value: Aqua.
> _Read Only_
>
> Number **CIRRUS** = 1766025586
>
> Color value: Cirrus.
> _Read Only_
>
> Number **ETHER** = 1766159464
>
> Color value: Ether.
> _Read Only_
>
> Number **SLATE** = 1767074932
>
> Color value: Slate.
> _Read Only_
>
> Number **ULTRAMARINE** = 1767205997
>
> Color value: Ultramarine.
> _Read Only_
>
> Number **MIDNIGHT** = 1766680932
>
> Color value: Midnight.
> _Read Only_
>
> Number **BLUEBERRY** = 1765960802
>
> Color value: Blueberry.
> _Read Only_
>
> Number **EGGPLANT** = 1766156135
>
> Color value: Eggplant.
> _Read Only_
>
> Number **GRAPE** = 1766290032
>
> Color value: Grape.
> _Read Only_
>
> Number **FUCHSIA** = 1766225267
>
> Color value: Fuchsia.
> _Read Only_
>
> Number **IRIS** = 1766421107
>
> Color value: Iris.
> _Read Only_
>
> Number **CARNATION** = 1766023538
>
> Color value: Carnation.
> _Read Only_
>
> Number **MOCHA** = 1766682467
>
> Color value: Mocha.
> _Read Only_
>
> Number **WHEAT** = 1767336037
>
> Color value: Wheat.
> _Read Only_
>
> Number **MUSTARD** = 1766684019
>
> Color value: Mustard.
> _Read Only_
>
> Number **AMBER** = 1765895522
>
> Color value: Amber.
> _Read Only_
>
> Number **CORNSTARCH** = 1766027886
>
> Color value: Cornstarch.
> _Read Only_
>
> Number **POWDER** = 1766879095
>
> Color value: Powder.
> _Read Only_
>
> Number **SMOKE** = 1767075179
>
> Color value: Smoke.
> _Read Only_
>
> Number **GRAPHITE** = 1766289512
>
> Color value: Graphite.
> _Read Only_
>
> Number **GUNMETAL** = 1766290798
>
> Color value: Gunmetal.
> _Read Only_
>
> Number `LIGHT_BLUE` = 1766613612
>
> Color value: Light blue.
> _Read Only_
>
> Number **RED** = 1767007588
>
> Color value: Red.
> _Read Only_
>
> Number **GREEN** = 1766290030
>
> Color value: Green.
> _Read Only_
>
> Number **BLUE** = 1765960821
>
> Color value: Blue.
> _Read Only_
>
> Number **YELLOW** = 1767468151
>
> Color value: Yellow.
> _Read Only_
>
> Number **MAGENTA** = 1766680430
>
> Color value: Magenta.
> _Read Only_
>
> Number **CYAN** = 1766029678
>
> Color value: Cyan.
> _Read Only_
>
> Number **GRAY** = 1766290041
>
> Color value: Gray.
> _Read Only_
>
> Number **BLACK** = 1765960811
>
> Color value: Black.
> _Read Only_
>
> Number **ORANGE** = 1766814318
>
> Color value: Orange.
> _Read Only_
>
> Number `DARK_GREEN` = 1766090610
>
> Color value: Dark green.
> _Read Only_
>
> Number **TEAL** = 1767138668
>
> Color value: Teal.
> _Read Only_
>
> Number **TAN** = 1767137646
>
> Color value: Tan.
> _Read Only_
>
> Number **BROWN** = 1765962350
>
> Color value: Brown.
> _Read Only_
>
> Number **VIOLET** = 1767271540
>
> Color value: Violet.
> _Read Only_
>
> Number **GOLD** = 1766288484
>
> Color value: Gold.
> _Read Only_
>
> Number `DARK_BLUE` = 1766089324
>
> Color value: Dark blue.
> _Read Only_
>
> Number **PINK** = 1766878827
>
> Color value: Pink.
> _Read Only_
>
> Number **LAVENDER** = 1766618734
>
> Color value: Lavender.
> _Read Only_
>
> Number `BRICK_RED` = 1765962340
>
> Color value: Brick red.
> _Read Only_
>
> Number `OLIVE_GREEN` = 1766812790
>
> Color value: Olive green.
> _Read Only_
>
> Number **PEACH** = 1766876008
>
> Color value: Peach.
> _Read Only_
>
> Number **BURGUNDY** = 1765962343
>
> Color value: Burgundy.
> _Read Only_
>
> Number `GRASS_GREEN` = 1766287218
>
> Color value: Grass green.
> _Read Only_
>
> Number **OCHRE** = 1766810482
>
> Color value: Ochre.
> _Read Only_
>
> Number **PURPLE** = 1766879856
>
> Color value: Purple.
> _Read Only_
>
> Number `LIGHT_GRAY` = 1766614898
>
> Color value: Light gray.
> _Read Only_
>
> Number **CHARCOAL** = 1766025324
>
> Color value: Charcoal.
> _Read Only_
>
> Number `GRID_BLUE` = 1766285932
>
> Color value: Grid blue.
> _Read Only_
>
> Number `GRID_ORANGE` = 1766289266
>
> Color value: Grid orange.
> _Read Only_
>
> Number **FIESTA** = 1766222181
>
> Color value: Fiesta.
> _Read Only_
>
> Number `LIGHT_OLIVE` = 1766616940
>
> Color value: Light olive.
> _Read Only_
>
> Number **LIPSTICK** = 1766615408
>
> Color value: Lipstick.
> _Read Only_
>
> Number `CUTE_TEAL` = 1766028396
>
> Color value: Cute teal.
> _Read Only_
>
> Number **SULPHUR** = 1767077228
>
> Color value: Sulphur.
> _Read Only_
>
> Number `GRID_GREEN` = 1766286439
>
> Color value: Grid green.
> _Read Only_
>
> Number **WHITE** = 1767336052
>
> Color value: White.

## IndexCapitalizationOptions

Capitalization choices for index entries.

### Class

> _Read Only_
>
> Number `SELECTED_ENTRY` = 1398042725
>
> Capitalizes only the specified topic, leaving nested topics unchanged. Use this only with the topic capitalize method, not with the index capitalize method. Note: create the selected topic and its nested topics before applying this option.
> _Read Only_
>
> Number `INCLUDE_SUBENTRIES` = 1767072325
>
> Capitalizes the specified topic together with its nested topics. Use this only with the topic capitalize method, not with the index capitalize method. Note: create the selected topic and its nested subtopics before applying this option.
> _Read Only_
>
> Number `ALL_LEVEL_1_ENTRIES` = 1095517556
>
> Capitalizes every level 1 entry. Note: only topics that already exist before the capitalization statement in the script are affected.
> _Read Only_
>
> Number `ALL_ENTRIES` = 1097624645
>
> Capitalizes every index entry. Note: only topics created before the script reaches the capitalization statement are affected.

## IndexFormat

Formatting choices for index topics at level 2 and below.

### Class

> _Read Only_
>
> Number `RUNIN_FORMAT` = 1382631782
>
> Keeps nested topics on the parent topic's line, using the specified separator between them.
> _Read Only_
>
> Number `NESTED_FORMAT` = 1316243814
>
> Places nested topics on a following line with indentation from the parent topic.

## IndexOptions — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the IndexOptions; either a Document or an Application.
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
> String **title**
>
> Title used for the generated index.
> ParagraphStyle **titleStyle**
>
> Paragraph style assigned to the generated index title. Can also accept: String.
> Boolean **replaceExistingIndex**
>
> When true, replaces the existing index content. Note: Only index content changes; the index location and other modified index properties are not updated.
> Boolean **includeBookDocuments**
>
> When true, includes topics and page references from every document in a book.
> Boolean **includeHiddenEntries**
>
> When true, includes topics and page references from hidden layers.
> IndexFormat **indexFormat**
>
> Format used for level 2 and lower index topics.
> Boolean **includeSectionHeadings**
>
> When true, shows alphabet letters as index section headings.
> Boolean **includeEmptyIndexSections**
>
> When true, section headings appear even for sections with no index topics. Note: use only when include section headings is true.
> ParagraphStyle **level1Style**
>
> Paragraph style assigned to level 1 index topics.
> ParagraphStyle **level2Style**
>
> Paragraph style assigned to level 2 index topics.
> ParagraphStyle **level3Style**
>
> Paragraph style assigned to level 3 index topics.
> ParagraphStyle **level4Style**
>
> Paragraph style assigned to level 4 index topics.
> ParagraphStyle **sectionHeadingStyle**
>
> Paragraph style assigned to index section headings. Note: use when include section headings is true.
> CharacterStyle **pageNumberStyle**
>
> Character style assigned to page numbers in the index.
> CharacterStyle **crossReferenceStyle**
>
> Character style assigned to cross references.
> CharacterStyle **crossReferenceTopicStyle**
>
> Character style assigned to cross reference topics.
> String **followingTopicSeparator**
>
> Character or characters inserted after each index topic.
> String **betweenEntriesSeparator**
>
> Character or characters placed between index entries when nested topics use runin-style index format.
> String **pageRangeSeparator**
>
> Character or characters placed between page numbers to mark a page range.
> String **betweenPageNumbersSeparator**
>
> Character or characters placed between distinct page numbers, page numbers and page ranges, and sequences of page ranges.
> String **beforeCrossReferenceSeparator**
>
> Character or characters inserted at the beginning of cross references.
> String **entryEndSeparator**
>
> Character or characters inserted at the end of each index entry.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that returns the IndexOptions when executed.
> IndexOptions **getElements**()
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

## IndexSection

One section inside an index.

### Instance

> _Read Only_
>
> Topic **allTopics**
>
> Topics contained in the specified index section.
> _Read Only_
>
> String **name**
>
> Name assigned to the IndexSection.
> _Read Only_
>
> Number **id**
>
> Unique ID for the IndexSection.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Index **parent**
>
> Parent object for the IndexSection (a Index).
> _Read Only_
>
> Number **index**
>
> Position of the IndexSection inside its containing object.
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
> Topics **topics**
>
> Index topics collection.
> String **label**
>
> Any string can be assigned to this property.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **insertLabel**( String **key**, String **value** )
>
> Writes value as the label entry for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key string. |
| String | value | Value string. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key string. |

> String **toSource**()
>
> Builds a string that returns the IndexSection when executed.
> IndexSection **getElements**()
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

## IndexSections

Collection object for index sections.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size in objects.

### Methods

> Number **count**()
>
> Reports how many elements are in the IndexSection collection.
> IndexSection **item**( Mixed **index** )
>
> Gets the IndexSection for the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> IndexSection **itemByName**( String **name** )
>
> Gets the IndexSection with the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name string. |

> IndexSection **itemByID**( Number **id** )
>
> Gets the IndexSection with the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> IndexSection **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the IndexSections inside the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as an IndexSection, Long Integer, or String. |
| Mixed | to | Range end, supplied as an IndexSection, Long Integer, or String. |

> IndexSection **firstItem**()
>
> Gets the first IndexSection in the collection.
> IndexSection **lastItem**()
>
> Gets the last IndexSection in the collection.
> IndexSection **middleItem**()
>
> Gets the middle IndexSection in the collection.
> IndexSection **previousItem**( IndexSection **obj** )
>
> Gets the IndexSection whose index is immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IndexSection | obj | IndexSection index that comes after the desired IndexSection. |

> IndexSection **nextItem**( IndexSection **obj** )
>
> Gets the IndexSection whose index comes after the specified IndexSection in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IndexSection | obj | IndexSection whose index precedes the desired IndexSection. |

> IndexSection **anyItem**()
>
> Gets any IndexSection in the collection.
> IndexSection **everyItem**()
>
> Gets every IndexSection in the collection.
> String **toSource**()
>
> Builds a string that returns the IndexSection when executed.
> IndexSection **[]**( Number **index** )
>
> Gets the IndexSection at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Index — Instance

> _Read Only_
>
> Topic **allTopics**
>
> Topics contained in the specified index section.
> _Read Only_
>
> Number **id**
>
> Unique ID for the Index.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the Index (a Document).
> _Read Only_
>
> Number **index**
>
> Position of the Index inside its containing object.
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
> IndexSections **indexSections**
>
> Index sections collection.
> _Read Only_
>
> Topics **topics**
>
> Index topics collection.
> String **label**
>
> Any string can be assigned to this property.
> String **name**
>
> Name of the Index; it aliases the Index label property.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **importTopics**( File **from** )
>
> Imports index topics from a list.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | File to read the topics from. |

> **removeUnusedTopics**()
>
> Deletes every index topic with no index entries.
> **capitalize**( IndexCapitalizationOptions **capitalizationOption** )
>
> Uppercases the initial letter for the specified index topic or set of index topics.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IndexCapitalizationOptions | capitalizationOption | Entry or entries that should be capitalized. (Optional) |

> **update**()
>
> Refreshes the index preview pane. Note: the index itself is not updated.
> Story **generate**( Mixed **on**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **autoflowing**, Boolean **includeOverset** )
>
> Creates a new index story.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | on | Spread or page where the story is placed. Accepts: Page, Spread or MasterSpread. (Optional) |
| Measurement Unit (Number or String)=any | placePoint | Upper-left coordinates for the story bounding box, in [x, y] format. (Optional) |
| Layer | destinationLayer | Layer that receives the story. (Optional) |
| Boolean | autoflowing | When true, lets the story continue onto later pages if it does not fit on the specified page; if the document has no later pages, the needed pages are created. (Optional) |
| Boolean | includeOverset | When true, includes topics that live in overset text in the story. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Writes value as the label entry for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key string. |
| String | value | Value string. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key string. |

> String **toSource**()
>
> Builds a string that returns the Index when executed.
> Index **getElements**()
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
