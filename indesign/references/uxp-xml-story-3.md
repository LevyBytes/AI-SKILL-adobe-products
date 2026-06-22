# Xml Story (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

### Methods

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Assigns the nth design-axis value for a variable font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |
| Number | nthAxisValue | Value assigned to that design axis. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Returns true when the nth design axis of the variable font is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Turns text into outline geometry. Each text line becomes a polygon object. If the converted text is one letter without internal spaces or detached parts, that polygon has only a single path. Note: To check whether outline creation is allowed for a font, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, places separate outline object(s) over the text. (Optional) |

> **changecase**( ChangecaseMode **using** )
>
> Changes the selected text to the requested case.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ChangecaseMode | using | Case setting to apply to the text. |

> **clearOverrides**( OverrideType **overridesToClear** )
>
> Removes the requested override categories.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OverrideType | overridesToClear | Override categories that should be removed. (Optional) |

> Text **duplicate**( LocationOptions **to**, Mixed **reference** )
>
> Copies the text at the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement relative to the reference object, or inside the containing object. |
| Mixed | reference | Object used as the reference point. Note: Required for before/after placement. Can accept: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

> Text **findText**( Boolean **reverseOrder** )
>
> Finds text matching the find what setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches in reverse order. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Finds text matching the find what setting and replaces it using the change to setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches in reverse order. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Finds text that satisfies the find what setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches in reverse order. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Finds text that satisfies the find what setting and replaces it using the change to setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches in reverse order. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Finds glyphs that satisfy the find what setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches in reverse order. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Finds glyphs that satisfy the find what setting and replaces them using the change to setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches in reverse order. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching the find character type setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches in reverse order. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching the find character type setting and replaces it using the change character type setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns matches in reverse order. (Optional) |

> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
>
> Exports the object(s) to a file asynchronously.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Export format, given as an enumeration value or as an extension shown in the Save as type or Format menu of the Export dialog. Can accept: ExportFormat enumerator or String. |
| File | to | Destination path for the exported file. |
| Boolean | showingOptions | When true, opens the export options dialog. (Optional) |
| PDFExportPreset | using | Export style to use. (Optional) |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> **convertBulletsAndNumberingToText**()
>
> Changes bullets and numbering into text.
> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value under the specified label key.

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
> Builds a source string that evaluates back to the XmlStory.
> XmlStory **getElements**()
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
