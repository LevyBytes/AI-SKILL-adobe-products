# Xml Export Preference, Xml Export Untagged Tables Format, Xml File Encoding, Xml Import Map ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: XMLExportPreference; XMLExportUntaggedTablesFormat; XMLFileEncoding; XMLImportMap; XMLImportMaps; XMLImportPreference; XMLImportStyles; XMLInstruction; XMLInstructions; XMLItem; XMLItems.

## XMLExportPreference

Settings that control XML export behavior.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the XMLExportPreference; a Application or Document.
> _Read Only_
>
> Events **events**
>
> Event objects available from the XMLExportPreference.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects available from the XMLExportPreference.
> Boolean **viewAfterExport**
>
> When true, exported XML content opens in a specified viewer.
> Mixed **preferredBrowser**
>
> Browser preferred for viewing XML. Returns one of: File or NothingEnum enumerator.
> Boolean **exportFromSelected**
>
> When true, XML exports from the selected XML element; when false, the whole document is exported.
> XMLFileEncoding **fileEncoding**
>
> File encoding type used when XML content is exported.
> Boolean **ruby**
>
> When true, Ruby text is included in exported XML content.
> Boolean **excludeDtd**
>
> When true, the DTD is omitted from exported XML content.
> Boolean **copyOriginalImages**
>
> When true, original images are copied into the images subfolder.
> Boolean **copyOptimizedImages**
>
> When true, optimized images are copied into the images subfolder.
> Boolean **copyFormattedImages**
>
> When true, formatted images are copied into the images subfolder.
> ImageConversion **imageConversion**
>
> Converted-image file format; relevant only when copyOptimizedImages and/or copyFormattedImages is true.
> GIFOptionsPalette **gifOptionsPalette**
>
> GIF conversion palette; this setting does not apply when imageConversion is JPEG.
> Boolean **gifOptionsInterlaced**
>
> When true, interlaced GIFs are generated. Note: not valid when image conversion is JPEG.
> JPEGOptionsQuality **jpegOptionsQuality**
>
> Quality level for JPEG conversions; this setting does not apply when imageConversion is GIF.
> JPEGOptionsFormat **jpegOptionsFormat**
>
> Formatting method for JPEG conversions; this setting does not apply when imageConversion is GIF.
> Boolean **allowTransform**
>
> When true, XML is transformed with an XSLT file.
> Mixed **transformFilename**
>
> Name of the XSLT file. Note: valid when allow transform is true. Returns one of: File or XMLTransformFile enumerator.
> Boolean **characterReferences**
>
> When true, special characters are replaced with character references.
> XMLExportUntaggedTablesFormat **exportUntaggedTablesFormat**
>
> Export format used for untagged tables in tagged stories.
> Object **properties**
>
> Use this property to set multiple properties together.

### Methods

> String **toSource**()
>
> Builds a string that can be executed to return the XMLExportPreference.
> XMLExportPreference **getElements**()
>
> Materializes the specifier as an array of object references.
> String **toSpecifier**()
>
> Returns this object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Handler already registered for the event. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## XMLExportUntaggedTablesFormat

Choices for exporting untagged tables from tagged stories.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Leaves untagged tables out of the export.
> _Read Only_
>
> Number **CALS** = 1484022643
>
> Outputs untagged tables as CALS XML.

## XMLFileEncoding

Encoding choices for exported XML content.

### Class

> _Read Only_
>
> Number **UTF8** = 1937134904
>
> Uses UTF-8.
> _Read Only_
>
> Number **UTF16** = 1937125686
>
> Uses UTF-16.
> _Read Only_
>
> Number `SHIFT_JIS` = 1249077875
>
> Uses Shift-JIS.

## XMLImportMap

Maps an XML tag to a paragraph, character, table, or cell style.

### Instance

> _Read Only_
>
> XMLTag **markupTag**
>
> XMLTag assigned to the element. Can also accept: String.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the XMLImportMap; a Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of this XMLImportMap inside the object that contains it.
> _Read Only_
>
> Events **events**
>
> Event objects available from the XMLImportMap.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects available from the XMLImportMap.
> Mixed **mappedStyle**
>
> Current style paired with the XML tag. Returns one of: ParagraphStyle, CharacterStyle, TableStyle or CellStyle. Can also accept: String.
> Object **properties**
>
> Use this property to set multiple properties together.

### Methods

> **remove**()
>
> Deletes the XMLImportMap.
> String **toSource**()
>
> Builds a string that can be executed to return the XMLImportMap.
> XMLImportMap **getElements**()
>
> Materializes the specifier as an array of object references.
> String **toSpecifier**()
>
> Returns this object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Handler already registered for the event. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## XMLImportMaps

XML import maps exposed together as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects contained by the collection.

### Methods

> XMLImportMap **add**( Mixed **markupTag**, Mixed **mappedStyle**, Object **withProperties** )
>
> Creates a mapping.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | markupTag | Tag used for the mapping. Accepts: XMLTag or String. |
| Mixed | mappedStyle | Style to map. Accepts: ParagraphStyle, CharacterStyle, TableStyle, CellStyle or String. |
| Object | withProperties | Starting property values for the new XMLImportMap. (Optional) |

> Number **count**()
>
> Shows how many elements are in the XMLImportMap.
> XMLImportMap **item**( Mixed **index** )
>
> Gets the XMLImportMap identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Accepts: Long Integer or String. |

> XMLImportMap **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the XMLImportMaps inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting XMLImportMap, index, or name for the range. Accepts: XMLImportMap, Long Integer or String. |
| Mixed | to | Ending XMLImportMap, index, or name for the range. Accepts: XMLImportMap, Long Integer or String. |

> XMLImportMap **firstItem**()
>
> Gets the first XMLImportMap in the collection.
> XMLImportMap **lastItem**()
>
> Gets the last XMLImportMap in the collection.
> XMLImportMap **middleItem**()
>
> Gets the middle XMLImportMap in the collection.
> XMLImportMap **previousItem**( XMLImportMap **obj** )
>
> Gets the XMLImportMap whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLImportMap | obj | XMLImportMap index that follows the desired XMLImportMap. |

> XMLImportMap **nextItem**( XMLImportMap **obj** )
>
> Gets the XMLImportMap whose index comes after the specified XMLImportMap in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLImportMap | obj | XMLImportMap whose index precedes the desired XMLImportMap. |

> XMLImportMap **anyItem**()
>
> Gets any XMLImportMap in the collection.
> XMLImportMap **everyItem**()
>
> Gets every XMLImportMap in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the XMLImportMap.
> XMLImportMap **[]**( Number **index** )
>
> Gets the XMLImportMap identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## XMLImportPreference

Preferences that control XML import.

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
> Identifies the XMLImportPreference parent, either a Application or Document.
> _Read Only_
>
> Events **events**
>
> Provides the event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> Boolean **createLinkToXML**
>
> When true, the imported XML file remains linked. When false, the file is embedded.
> Boolean **repeatTextElements**
>
> When true, repeated text elements take on formatting from placeholder text. Note: applies only when import style is merge.
> Boolean **ignoreUnmatchedIncoming**
>
> When true, incoming elements that have no counterpart in the existing structure are ignored. Note: applies only when import style is merge.
> Boolean **importTextIntoTables**
>
> When true, matching tags allow text to flow into placeholder tables and their cells. Note: applies only when import style is merge.
> Boolean **ignoreWhitespace**
>
> When true, existing content stays unchanged when the matching XML content contains only whitespace, including carriage return or tab characters. Note: applies only when import style is merge.
> Boolean **removeUnmatchedExisting**
>
> When true, document elements or placeholders with no corresponding item in the XML file are deleted. Note: applies only when import style is merge.
> Boolean **importToSelected**
>
> When true, import targets the selected XML element. When false, import occurs at the root element.
> XMLImportStyles **importStyle**
>
> Controls how imported XML content is incorporated into the document.
> Boolean **allowTransform**
>
> When true, an XSLT file is used to transform the XML.
> Mixed **transformFilename**
>
> Names the XSLT file. Note: use when allowTransform is true. Can return: File or XMLTransformFile enumerator.
> Mixed **transformParameters**
>
> Supplies stylesheet parameters as name/value pairs in the form [[name, value], [name, value], ...]. Can return: Ordered array containing name:String, value:String.
> Boolean **importCALSTables**
>
> When true, CALS tables are brought in as InDesign tables.
> Object **properties**
>
> Enables several properties to be assigned in a single operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the XMLImportPreference.
> XMLImportPreference **getElements**()
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
| String | eventType | Specifies the event type. |
| Mixed | handler | Supplies the event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the registered event type. |
| Mixed | handler | Supplies the registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## XMLImportStyles

Choices for bringing imported XML content into the document.

### Class

> _Read Only_
>
> Number `APPEND_IMPORT` = 1481466217
>
> Places imported content after existing content.
> _Read Only_
>
> Number `MERGE_IMPORT` = 1481469289
>
> Combines imported content with existing content.

## XMLInstruction

An instruction for XML processing.

### Instance

> _Read Only_
>
> InsertionPoint **storyOffset**
>
> Gives the insertion point before the table inside the story that contains it.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the XMLInstruction.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the XMLInstruction parent, either a Document or XMLElement.
> _Read Only_
>
> Number **index**
>
> Position of the XMLInstruction within the object that contains it.
> _Read Only_
>
> Events **events**
>
> Provides the event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> String **target**
>
> Names the processing instruction for an application that reads the exported XML file.
> String **data**
>
> Supplies the value that tells the application reading the exported XML file how to handle the processing instruction.
> Object **properties**
>
> Enables several properties to be assigned in a single operation.

### Methods

> XMLInstruction **move**( LocationOptions **to**, Mixed **reference** )
>
> Moves the element to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: supply it when the to parameter is before or after. . Can accept: XMLItem or Text. (Optional) |

> XMLInstruction **duplicate**()
>
> Creates a duplicate XMLInstruction.
> **remove**()
>
> Removes the XMLInstruction.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the XMLInstruction relative to objects already selected. (Optional) |

> String **toSource**()
>
> Builds a string that, when executed, returns the XMLInstruction.
> XMLInstruction **getElements**()
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
| String | eventType | Specifies the event type. |
| Mixed | handler | Supplies the event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the registered event type. |
| Mixed | handler | Supplies the registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## XMLInstructions

A collection containing XML instructions.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Shows how many elements the XMLInstruction contains.
> XMLInstruction **add**( String **target**, String **data**, Mixed **storyOffset**, Object **withProperties** )
>
> Creates an XML processing instruction.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | target | Name used by an application that reads the exported XML file to identify the processing instruction. |
| String | data | Value used by the application to act on the processing instruction named by target. (Optional) |
| Mixed | storyOffset | Story insertion location. Can accept: InsertionPoint or Long Integer. (Optional) |
| Object | withProperties | Initial property values for the new XMLInstruction (Optional) |

> XMLInstruction **item**( Mixed **index** )
>
> Gets the XMLInstruction for the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> XMLInstruction **itemByID**( Number **id** )
>
> Gets the XMLInstruction with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> XMLInstruction **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the XMLInstructions in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | XMLInstruction, index, or name that starts the range. Can accept: XMLInstruction, Long Integer or String. |
| Mixed | to | XMLInstruction, index, or name that ends the range. Can accept: XMLInstruction, Long Integer or String. |

> XMLInstruction **firstItem**()
>
> Gets the first XMLInstruction in the collection.
> XMLInstruction **lastItem**()
>
> Gets the last XMLInstruction in the collection.
> XMLInstruction **middleItem**()
>
> Gets the middle XMLInstruction in the collection.
> XMLInstruction **previousItem**( XMLInstruction **obj** )
>
> Gets the XMLInstruction whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLInstruction | obj | The XMLInstruction positioned after the desired XMLInstruction. |

> XMLInstruction **nextItem**( XMLInstruction **obj** )
>
> Gets the XMLInstruction whose index comes after the specified XMLInstruction in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLInstruction | obj | XMLInstruction whose index comes before the desired XMLInstruction. |

> XMLInstruction **anyItem**()
>
> Gets any XMLInstruction in the collection.
> XMLInstruction **everyItem**()
>
> Gets every XMLInstruction in the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the XMLInstruction.
> XMLInstruction **[]**( Number **index** )
>
> Gets the XMLInstruction at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## XMLItem

An item represented in XML.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the XMLItem.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the XMLItem parent, either a Document or XMLElement.
> _Read Only_
>
> Number **index**
>
> Position of the XMLItem within the object that contains it.
> _Read Only_
>
> Events **events**
>
> Provides the event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> Object **properties**
>
> Enables several properties to be assigned in a single operation.

### Methods

> **remove**()
>
> Removes the XMLItem.
> XMLItem **duplicate**()
>
> Creates a duplicate XMLItem.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the XMLItem relative to objects already selected. (Optional) |

> String **toSource**()
>
> Builds a string that, when executed, returns the XMLItem.
> XMLItem **getElements**()
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
| String | eventType | Specifies the event type. |
| Mixed | handler | Supplies the event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the registered event type. |
| Mixed | handler | Supplies the registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## XMLItems

A collection containing XML items.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Shows how many elements the XMLItem contains.
> XMLItem **item**( Mixed **index** )
>
> Gets the XMLItem for the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> XMLItem **itemByID**( Number **id** )
>
> Gets the XMLItem with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> XMLItem **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the XMLItems in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | XMLItem, index, or name that starts the range. Can accept: XMLItem, Long Integer or String. |
| Mixed | to | XMLItem, index, or name that ends the range. Can accept: XMLItem, Long Integer or String. |

> XMLItem **firstItem**()
>
> Gets the first XMLItem in the collection.
> XMLItem **lastItem**()
>
> Gets the last XMLItem in the collection.
> XMLItem **middleItem**()
>
> Gets the middle XMLItem in the collection.
> XMLItem **previousItem**( XMLItem **obj** )
>
> Gets the XMLItem whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLItem | obj | The XMLItem positioned after the desired XMLItem. |

> XMLItem **nextItem**( XMLItem **obj** )
>
> Gets the XMLItem whose index comes after the specified XMLItem in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLItem | obj | XMLItem whose index comes before the desired XMLItem. |

> XMLItem **anyItem**()
>
> Gets any XMLItem in the collection.
> XMLItem **everyItem**()
>
> Gets every XMLItem in the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the XMLItem.
> XMLItem **[]**( Number **index** )
>
> Gets the XMLItem at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
