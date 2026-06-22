# Story (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Story — Instance

### Methods

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Turns text into outline geometry. Each text line is produced as a polygon object. If the converted text is a single letter without internal spaces or detached pieces, the polygon has only one path. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, creates separate outline object(s) above the text. (Optional) |

> Boolean **checkOut**()
>
> Checks the story out.
> Boolean **checkIn**( String **versionComments**, Boolean **forceSave** )
>
> Checks story content back in.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | versionComments | Comment stored with this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> Boolean **revert**()
>
> Restores the document to the state from the most recent save operation.
> **placeXML**( XMLElement **using** )
>
> Inserts XML content in the specified object. Note: Existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element supplying the content to place. |

> **autoTag**()
>
> Applies default XML preference tags to the object or to the parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Sets the Nth design axis for a variable font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |
| Number | nthAxisValue | Nth design-axis value. |

> **changecase**( ChangecaseMode **using** )
>
> Applies the requested case transformation to the text.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ChangecaseMode | using | Text case option. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Returns true when the Nth design axis of the variable font is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |

> **clearOverrides**( OverrideType **overridesToClear** )
>
> Removes the requested override types.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OverrideType | overridesToClear | Override types to remove. (Optional) |

> **recompose**()
>
> Recomposes the Story text.
> **remove**()
>
> Removes the Story.
> Text **duplicate**( LocationOptions **to**, Mixed **reference** )
>
> Copies the text to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Destination expressed relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: Required when the to parameter specifies before or after. Accepts Text, Story, Cell, Row, Column, Table or PageItem values. (Optional) |

> Text **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the text to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Destination expressed relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object. Note: Required when the to parameter specifies before or after. Accepts Text, Story, Cell, Row, Column, Table or PageItem values. (Optional) |

> Text **findText**( Boolean **reverseOrder** )
>
> Searches for text that matches find what.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Searches for text matching find what and substitutes change to.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Searches for text that matches find what.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Searches for text matching find what and substitutes change to.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs that match find what.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching find what and substitutes change to.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Searches for text that matches find character type.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching find character type and substitutes change character type.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> StoryWindow **storyEdit**()
>
> Opens a story editor window for the story.
> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) into a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given as an enumeration value or as an extension shown by Save as type or Format in the Export dialog. Accepts ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment stored with this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given as an enumeration value or as an extension shown by Save as type or Format in the Export dialog. Accepts ExportFormat enumerator or String. |
| File | to | Path for the export file. |
| Boolean | showingOptions | When true, shows the export options dialog. (Optional) |
| PDFExportPreset | using | Export style. (Optional) |
| String | versionComments | Comment stored with this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> **convertBulletsAndNumberingToText**()
>
> Turns bullets and numbering into text.
> **insertLabel**( String **key**, String **value** )
>
> Assigns the value to the label identified by the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **toSource**()
>
> Builds a string that evaluates back to the Story.
> Story **getElements**()
>
> Resolves the object specifier into an array of object references.
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
