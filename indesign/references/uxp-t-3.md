# Tables, Tag Raster, Tag Text Export Character Set, Tag Text Form ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Tables; TagRaster; TagTextExportCharacterSet; TagTextForm; TagTransparency; TagType; TagVector; TaggedPDFPreference; TaggedPDFStructureOrderOptions; TaggedTextExportPreference; TaggedTextImportPreference; TaskAlertType; TaskState.

## Tables

Represents table objects as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Reports how many objects the collection contains.

### Methods

> Number **count**()
>
> Returns the element count for the Table.
> Table **add**( LocationOptions **to**, Mixed **reference**, Object **withProperties** )
>
> Creates a table.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Specifies where the new table goes, either relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Provides the reference object. Note: Required if to is before or after. Accepts: Table, XMLElement, XmlStory, TextFrame, EndnoteTextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or Cell. (Optional) |
| Object | withProperties | Initial property values for the new Table. (Optional) |

> Table **item**( Mixed **index** )
>
> Returns the Table identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Provides the index or name. Accepts Long Integer or String. |

> Table **itemByName**( String **name** )
>
> Returns the Table identified by the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Provides the name. |

> Table **itemByID**( Number **id** )
>
> Returns the Table identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | Provides the ID. |

> Table **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns Tables in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Provides the Table, index, or name that starts the range. Accepts: Table, Long Integer or String. |
| Mixed | to | Provides the Table, index, or name that ends the range. Accepts: Table, Long Integer or String. |

> Table **firstItem**()
>
> Returns the collection's first Table.
> Table **lastItem**()
>
> Returns the collection's last Table.
> Table **middleItem**()
>
> Returns the collection's middle Table.
> Table **previousItem**( Table **obj** )
>
> Returns the Table whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Table | obj | Provides the Table index that follows the desired Table. |

> Table **nextItem**( Table **obj** )
>
> Returns the Table with an index immediately after the specified Table in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Table | obj | Provides the Table whose index precedes the desired Table. |

> Table **anyItem**()
>
> Returns any Table from the collection.
> Table **everyItem**()
>
> Returns all Tables in the collection.
> String **toSource**()
>
> Generates a string that returns the Table when executed.
> Table **[]**( Number **index** )
>
> Returns the Table identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Provides the index. |

## TagRaster

Controls how raster images are displayed.

### Class

> _Read Only_
>
> Number `GRAY_OUT` = 1917284985
>
> Shows raster images as grayed out.
> _Read Only_
>
> Number **PROXY** = 1917874808
>
> Shows a low-resolution proxy image suitable for image identification and placement.
> _Read Only_
>
> Number `HIGH_RESOLUTION` = 1917348177
>
> Shows the image at high resolution.
> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Uses the default setting. For details, see display performance preferences.

## TagTextExportCharacterSet

Character-set choices for exporting tagged text files.

### Class

> _Read Only_
>
> Number **ASCII** = 1095975753
>
> ASCII.
> _Read Only_
>
> Number **ANSI** = 1095652169
>
> ANSI.
> _Read Only_
>
> Number **UNICODE** = 1249209961
>
> Unicode.
> _Read Only_
>
> Number `SHIFT_JIS` = 1249077875
>
> Shift_JIS.
> _Read Only_
>
> Number **GB18030** = 1416061491
>
> Applies GB18030 encoding.
> _Read Only_
>
> Number **KSC5601** = 1414230883
>
> Applies KSC5601 encoding.
> _Read Only_
>
> Number `CHINESE_BIG_5` = 1415799349
>
> Chinese Big 5
> _Read Only_
>
> Number `CENTRALEUROPEAN_ISO` = 1416184645
>
> Central European (ISO) character set.
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
> Number `WINDOWS_ARABIC` = 1417101682
>
> Windows Arabic character set.
> _Read Only_
>
> Number `WINDOWS_HEBREW` = 1417103458
>
> Windows Hebrew character set.

## TagTextForm

Options for tag form output.

### Class

> _Read Only_
>
> Number **VERBOSE** = 1414821474
>
> Shows tags in long form and creates larger text files.
> _Read Only_
>
> Number **ABBREVIATED** = 1414816098
>
> Shortens tags and creates smaller text files.

## TagTransparency

Options controlling how tranparencies appear on screen.

### Class

> _Read Only_
>
> Number **OFF** = 1330005536
>
> Disables transparency display on screen. Note: Printing or exporting the file still preserves transparency.
> _Read Only_
>
> Number `LOW_QUALITY` = 1481666146
>
> Shows basic transparency, including opacity and blend modes, and approximates effects such as drop shadow and feathering at low resolution. Note: Page content is not isolated from the background. Objects using blend modes other than Normal may look different in other applications and output.
> _Read Only_
>
> Number `MEDIUM_QUALITY` = 1481663597
>
> Shows drop shadows and feathering at low resolution.
> _Read Only_
>
> Number `HIGH_QUALITY` = 1346922866
>
> Shows higher-resolution (144 dpi) drop shadows and feathers, including spread isolation and CMYK mattes.
> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Uses the default setting. For details, see display performance preferences.

## TagType

Tag type assigned to a page item.

### Class

> _Read Only_
>
> Number `TAG_FROM_STRUCTURE` = 1952928613
>
> Derives the tag from XML structure, or falls back to standard tag.
> _Read Only_
>
> Number `TAG_ARTIFACT` = 1952924006
>
> Tags as artifact.
> _Read Only_
>
> Number `TAG_BASED_ON_OBJECT` = 1952924271
>
> Tags as Story or Figure according to object type.

## TagVector

Controls how vector images are displayed.

### Class

> _Read Only_
>
> Number `GRAY_OUT` = 1917284985
>
> Shows the image as grayed out.
> _Read Only_
>
> Number **PROXY** = 1917874808
>
> Shows a proxy image at low resolution.
> _Read Only_
>
> Number `HIGH_RESOLUTION` = 1917348177
>
> Shows the image at high resolution.
> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Uses the default setting. For details, see display performance preferences.

## TaggedPDFPreference

Preferences for Tagged PDF output.

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
> Parent container for the TaggedPDFPreference (a Application or Document).
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
> TaggedPDFStructureOrderOptions **structureOrder**
>
> Preference controlling tagged PDF structure order.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> String **toSource**()
>
> Produces executable text that recreates the TaggedPDFPreference.
> TaggedPDFPreference **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler to use. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler value. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TaggedPDFStructureOrderOptions

Options for tagged PDF structure order.

### Class

> _Read Only_
>
> Number `USE_XML_STRUCTURE` = 1350062959
>
> Builds tagged PDF structure from XML structure, using layout heuristics as fallback.
> _Read Only_
>
> Number `USE_ARTICLES` = 1348554610
>
> Uses Articles ordering for tagged PDF structure.

## TaggedTextExportPreference

Preferences used when exporting tagged text.

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
> Parent application for the TaggedTextExportPreference.
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
> TagTextExportCharacterSet **characterSet**
>
> Character set selection.
> TagTextForm **tagForm**
>
> Tag formatting used in the exported text.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> String **toSource**()
>
> Produces executable text that recreates the TaggedTextExportPreference.
> TaggedTextExportPreference **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler to use. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler value. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TaggedTextImportPreference

Preferences used when importing tagged text.

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
> Parent application for the TaggedTextImportPreference.
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
> Boolean **useTypographersQuotes**
>
> When true, imported straight quotes and apostrophes are converted to typographic quotation marks and apostrophes.
> Boolean **removeTextFormatting**
>
> When true, text formatting is stripped.
> StyleConflict **styleConflict**
>
> Conflict-resolution policy for imported tagged text styles whose names match styles in the current publication.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> String **toSource**()
>
> Produces executable text that recreates the TaggedTextImportPreference.
> TaggedTextImportPreference **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler to use. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered handler value. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TaskAlertType

Specifies a task alert category.

### Class

> _Read Only_
>
> Number `TASK_INFORMATION` = 1699302771
>
> Informational message.
> _Read Only_
>
> Number `TASK_WARNING` = 1700220275
>
> Warning-level message.
> _Read Only_
>
> Number `TASK_ERROR` = 1699040627
>
> Error-level message.

## TaskState

Specifies task status.

### Class

> _Read Only_
>
> Number **QUEUED** = 1699837285
>
> Task is queued and awaiting scheduling for execution.
> _Read Only_
>
> Number **RUNNING** = 1700033141
>
> Task is currently executing.
> _Read Only_
>
> Number **WAITING** = 1700225396
>
> Task is in a waiting state.
> _Read Only_
>
> Number **CANCELLING** = 1700029281
>
> Task has received a cancel signal but has not stopped yet.
> _Read Only_
>
> Number **COMPLETED** = 1700029296
>
> Task execution finished, whether successfully or with errors.
> _Read Only_
>
> Number **CANCELLED** = 1700029292
>
> Task was cancelled before it ran or while execution was underway.
