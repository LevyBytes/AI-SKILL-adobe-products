# Xml Element, Xml Elements, Xml Export Map, Xml Export Maps

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: XMLElement; XMLElements; XMLExportMap; XMLExportMaps.

## XMLElement

Represents an XML element.

### Instance

> _Read Only_
>
> InsertionPoint **storyOffset**
>
> Story placement is indicated by the insertion point immediately before the table.
> _Read Only_
>
> Story **parentStory**
>
> Identifies the Story that owns this text.
> _Read Only_
>
> Mixed **xmlContent**
>
> Content reference for this element. Returns one of: Text, Story, PageItem, Movie, Sound, Graphic, Table or Cell.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to this XMLElement.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the XMLElement; a Document or XMLElement.
> _Read Only_
>
> Number **index**
>
> Position of this XMLElement inside the object that contains it.
> _Read Only_
>
> XMLAttributes **xmlAttributes**
>
> XML attributes are exposed through this collection.
> _Read Only_
>
> XMLElements **xmlElements**
>
> XML element children are exposed through this collection.
> _Read Only_
>
> XMLItems **xmlItems**
>
> XML items available from the element.
> _Read Only_
>
> XMLComments **xmlComments**
>
> XML comments associated with the element.
> _Read Only_
>
> XMLInstructions **xmlInstructions**
>
> XML processing instructions associated with the element.
> _Read Only_
>
> PageItems **pageItems**
>
> Provides every page item in a container, such as a document, page, or group, without filtering by type.
> _Read Only_
>
> Images **images**
>
> Bitmap image items in supported bitmap formats, including TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Imported graphic items from vector, metafile, or bitmap file formats.
> _Read Only_
>
> EPSs **epss**
>
> EPS file items available from the element.
> _Read Only_
>
> WMFs **wmfs**
>
> WMF graphic items available from the element.
> _Read Only_
>
> PICTs **picts**
>
> PICT graphic items available from the element.
> _Read Only_
>
> PDFs **pdfs**
>
> PDF file items available from the element.
> _Read Only_
>
> Stories **stories**
>
> Story objects available from the element.
> _Read Only_
>
> Tables **tables**
>
> Table objects available from the element.
> _Read Only_
>
> Cells **cells**
>
> Table cell objects available from the element.
> _Read Only_
>
> Texts **texts**
>
> Text objects available from the element.
> _Read Only_
>
> Characters **characters**
>
> Character objects available from the element.
> _Read Only_
>
> Words **words**
>
> Word objects available from the element.
> _Read Only_
>
> Lines **lines**
>
> Line objects available from the element.
> _Read Only_
>
> TextColumns **textColumns**
>
> Text column objects available from the element.
> _Read Only_
>
> Paragraphs **paragraphs**
>
> Paragraph objects available from the element.
> _Read Only_
>
> InsertionPoints **insertionPoints**
>
> Insertion point objects available from the element.
> _Read Only_
>
> TextStyleRanges **textStyleRanges**
>
> Text style range objects available from the element.
> _Read Only_
>
> Events **events**
>
> Event objects available from the element.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects available from the element.
> _Read Only_
>
> SVGs **svgs**
>
> SVG file items available from the element.
> XMLTag **markupTag**
>
> XMLTag assigned to the element. Can also accept: String.
> Mixed **contents**
>
> Text contents for the object. Returns one of: String or SpecialCharacters enumerator.
> Object **properties**
>
> Use this property to set multiple properties together.

### Methods

> Asset **store**( Library **using**, Object **withProperties** )
>
> Places the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Target Library for storing the object. |
| Object | withProperties | Starting property values for the new XMLElement. (Optional) |

> XMLElement **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the element to the requested position.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement relative to the reference object or inside the containing object. |
| Mixed | reference | Object used as the reference point. Required when to specifies before or after. Accepts: XMLItem or Text. (Optional) |

> XMLElement **duplicate**()
>
> Creates another instance of the XMLElement.
> **markup**( Mixed **using** )
>
> Links the object to the specified XML element without discarding existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Object that receives markup. Accepts: PageItem, Movie, Sound, Graphic, Story, Text or Table. |

> **placeXML**( Mixed **using** )
>
> Inserts XML content into the story and replaces what was there before.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Destination object for placement. Accepts: Story, PageItem, Graphic, Movie or Sound. |

> **untag**()
>
> Removes tagging from an element.
> ValidationError **validate**( Number **maximumErrors** )
>
> Checks the element against a DTD.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | maximumErrors | Limit on the validation errors generated. (Optional) |

> **applyParagraphStyle**( Mixed **using**, Boolean **clearingOverrides** )
>
> Assigns the requested paragraph style to the XMLElement text content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Paragraph style to assign. Accepts: String or ParagraphStyle. |
| Boolean | clearingOverrides | When true, attributes are cleared before the style is applied. (Optional) |

> **applyCharacterStyle**( Mixed **using** )
>
> Assigns the requested character style to the XMLElement text content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Character style to assign. Accepts: String or CharacterStyle. |

> XMLAttribute **convertToAttribute**( String **using** )
>
> Changes the XMLElement into an attribute on its parent element.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | using | Name assigned to the new attribute. (Optional) |

> Table **convertElementToTable**( XMLTag **rowTag**, XMLTag **cellTag** )
>
> Turns XML element content into a table.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLTag | rowTag | XML tag used to mark a table row. |
| XMLTag | cellTag | XML tag used to mark a table cell. |

> PageItem **placeIntoInlineFrame**( Measurement Unit (Number or String)=any **dimensions** )
>
> Creates an inline frame that contains the XML element.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Measurement Unit (Number or String)=any | dimensions | Inline frame size expressed as [width, height]. |

> PageItem **placeIntoInlineCopy**( PageItem **copyItem**, Boolean **retainExistingFrame** )
>
> Connects an existing page item with the XML element, then positions it in an inline frame.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | copyItem | Page item used for the copy operation. |
| Boolean | retainExistingFrame | When true, the existing page item is moved; when false, a duplicate is moved. (Optional) |

> PageItem **setContent**( String **using**, String **relativeBasePath** )
>
> Imports file-based content to replace the XML element content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | using | File path for the import source. |
| String | relativeBasePath | Base path for resolving relative paths. (Optional) |

> Text **insertTextAsContent**( Mixed **using**, XMLElementPosition **position** )
>
> Adds the specified text as content before, inside, or after the XML element.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Text value to insert. Accepts: String or SpecialCharacters enumerator. |
| XMLElementPosition | position | Insertion position for the text. Text placed before or after the element becomes content of the parent element instead of content of this element. |

> **applyTableStyle**( Mixed **using**, Boolean **clearingOverrides** )
>
> Assigns a table style to the table tied to the XMLElement.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Table style to assign. Accepts: String or TableStyle. |
| Boolean | clearingOverrides | When true, local formatting is removed before the table style is applied. (Optional) |

> **applyCellStyle**( Mixed **using**, Boolean **clearingOverrides** )
>
> Assigns a cell style to the table cells tied to the XMLElement.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Cell style to assign. Accepts: String or CellStyle. |
| Boolean | clearingOverrides | When true, local formatting is removed before the cell style is applied. (Optional) |

> **applyObjectStyle**( Mixed **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Assigns an object style to the frame tied to the XMLElement.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Object style to assign. Accepts: String or ObjectStyle. |
| Boolean | clearingOverrides | When true, local formatting is removed before the object style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, root-style processing clears category attributes that are unchecked. (Optional) |

> PageItem **placeIntoFrame**( Mixed **on**, Measurement Unit (Number or String)=any **geometricBounds** )
>
> Creates a new rectangular page item and places the XML element into it. If the XML element already had a page item association, that page item is removed.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | on | Page or spread where the new page item is created. Accepts: Spread, Page or MasterSpread. |
| Measurement Unit (Number or String)=any | geometricBounds | Page item bounds without stroke width, expressed as [y1, x1, y2, x2]. |

> PageItem **placeIntoCopy**( Mixed **on**, Measurement Unit (Number or String)=any **placePoint**, PageItem **copyItem**, Boolean **retainExistingFrame** )
>
> Links the XML element to a copy of a page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | on | Page or spread where the new page item is created. Accepts: Spread, Page or MasterSpread. |
| Measurement Unit (Number or String)=any | placePoint | Coordinates for the page item's upper-left corner, expressed as [y1, x1]. |
| PageItem | copyItem | Page item used as the copy source. |
| Boolean | retainExistingFrame | When true, the XML element is associated with the existing page item and that item is moved rather than duplicating it. (Optional) |

> **importXML**( File **from** )
>
> Loads the XML file named by from into an InDesign document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | from | XML file to import. |

> XMLItem **evaluateXPathExpression**( String **using**, Mixed **prefixMappingTable** )
>
> Runs an XPath expression from this XML element's position in the structure.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | using | XPath expression to evaluate. |
| Mixed | prefixMappingTable | Namespace mapping table. Accepts: Array of Arrays of 2 Strings. (Optional) |

> Text **findText**( Boolean **reverseOrder** )
>
> Finds text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matches from last to first. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Uses the current find what value to locate matching text, then applies the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matches from last to first. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Searches with the current find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matches from last to first. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Searches with the current find what value, then applies the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matches from last to first. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Searches by the current find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matches from last to first. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Searches by the current find character type value, then applies the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matches from last to first. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Writes the object or objects out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, either an ExportFormat enumerator or String naming an extension shown in the Export dialog's Save as type or Format menu. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment recorded for this version. (Optional) |
| Boolean | forceSave | When true, a version is saved forcibly. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Starts an asynchronous file export for the object or objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, either an ExportFormat enumerator or String naming an extension shown in the Export dialog's Save as type or Format menu. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, the export options dialog is shown. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment recorded for this version. (Optional) |
| Boolean | forceSave | When true, a version is saved forcibly. (Optional) |

> **remove**()
>
> Removes this XMLElement.
> **select**( SelectionOptions **existingSelection** )
>
> Makes the object selected.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the XMLElement relative to objects already selected. (Optional) |

> String **toSource**()
>
> Builds a string that can be executed to return the XMLElement.
> XMLElement **getElements**()
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

## XMLElements

XML elements exposed together as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects contained by the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the XMLElement.
> XMLElement **add**( Mixed **markupTag**, Mixed **xmlContent**, Object **withProperties** )
>
> Creates an XML element.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | markupTag | XML tag used to identify the element. Accepts: String or XMLTag. |
| Mixed | xmlContent | Content that will be marked up. Accepts: Text, Story, PageItem, Movie, Sound, Graphic, Table or Cell. (Optional) |
| Object | withProperties | Starting property values for the new XMLElement. (Optional) |

> XMLElement **item**( Mixed **index** )
>
> Gets the XMLElement identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Accepts: Long Integer or String. |

> XMLElement **itemByID**( Number **id** )
>
> Gets the XMLElement identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> XMLElement **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the XMLElements inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting XMLElement, index, or name for the range. Accepts: XMLElement, Long Integer or String. |
| Mixed | to | Ending XMLElement, index, or name for the range. Accepts: XMLElement, Long Integer or String. |

> XMLElement **firstItem**()
>
> Gets the first XMLElement in the collection.
> XMLElement **lastItem**()
>
> Gets the last XMLElement in the collection.
> XMLElement **middleItem**()
>
> Gets the middle XMLElement in the collection.
> XMLElement **previousItem**( XMLElement **obj** )
>
> Gets the XMLElement whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | obj | XMLElement index that follows the desired XMLElement. |

> XMLElement **nextItem**( XMLElement **obj** )
>
> Gets the XMLElement whose index comes after the specified XMLElement in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | obj | XMLElement whose index precedes the desired XMLElement. |

> XMLElement **anyItem**()
>
> Gets any XMLElement in the collection.
> XMLElement **everyItem**()
>
> Gets every XMLElement in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the XMLElement.
> XMLElement **[]**( Number **index** )
>
> Gets the XMLElement identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## XMLExportMap

Maps a paragraph, character, table, or cell style to an XML tag.

### Instance

> _Read Only_
>
> Mixed **mappedStyle**
>
> Current style paired with the XML tag. Returns one of: ParagraphStyle, CharacterStyle, TableStyle or CellStyle. Can also accept: String.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the XMLExportMap; a Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of this XMLExportMap inside the object that contains it.
> _Read Only_
>
> Events **events**
>
> Event objects available from the XMLExportMap.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects available from the XMLExportMap.
> XMLTag **markupTag**
>
> XMLTag assigned to the element. Can also accept: String.
> Boolean **includeMasterPageStories**
>
> When true, style-to-tag mapping includes stories on master spreads.
> Boolean **includePasteboardStories**
>
> When true, style-to-tag mapping includes stories located on the pasteboard.
> Boolean **includeEmptyStories**
>
> When true, style-to-tag mapping includes empty stories.
> Object **properties**
>
> Use this property to set multiple properties together.

### Methods

> **remove**()
>
> Deletes the XMLExportMap.
> String **toSource**()
>
> Builds a string that can be executed to return the XMLExportMap.
> XMLExportMap **getElements**()
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

## XMLExportMaps

XML export maps exposed together as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects contained by the collection.

### Methods

> XMLExportMap **add**( Mixed **mappedStyle**, Mixed **markupTag**, Object **withProperties** )
>
> Creates a mapping.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | mappedStyle | Style to map. Accepts: ParagraphStyle, CharacterStyle, TableStyle, CellStyle or String. |
| Mixed | markupTag | Tag used for the mapping. Accepts: XMLTag or String. |
| Object | withProperties | Starting property values for the new XMLExportMap. (Optional) |

> Number **count**()
>
> Shows how many elements are in the XMLExportMap.
> XMLExportMap **item**( Mixed **index** )
>
> Gets the XMLExportMap identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Accepts: Long Integer or String. |

> XMLExportMap **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the XMLExportMaps inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting XMLExportMap, index, or name for the range. Accepts: XMLExportMap, Long Integer or String. |
| Mixed | to | Ending XMLExportMap, index, or name for the range. Accepts: XMLExportMap, Long Integer or String. |

> XMLExportMap **firstItem**()
>
> Gets the first XMLExportMap in the collection.
> XMLExportMap **lastItem**()
>
> Gets the last XMLExportMap in the collection.
> XMLExportMap **middleItem**()
>
> Gets the middle XMLExportMap in the collection.
> XMLExportMap **previousItem**( XMLExportMap **obj** )
>
> Gets the XMLExportMap whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLExportMap | obj | XMLExportMap index that follows the desired XMLExportMap. |

> XMLExportMap **nextItem**( XMLExportMap **obj** )
>
> Gets the XMLExportMap whose index comes after the specified XMLExportMap in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLExportMap | obj | XMLExportMap whose index precedes the desired XMLExportMap. |

> XMLExportMap **anyItem**()
>
> Gets any XMLExportMap in the collection.
> XMLExportMap **everyItem**()
>
> Gets every XMLExportMap in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the XMLExportMap.
> XMLExportMap **[]**( Number **index** )
>
> Gets the XMLExportMap identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## See also

- [Characters](uxp-characters.md)
