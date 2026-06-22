# Character Style (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

### Methods

> Boolean **createThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to** )
>
> Builds a thumbnail for selected text using the supplied properties.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text for the preview |
| Number | pointSize | Font size for the text, in points |
| ColorSpace | space | Color space: RGB, CMYK or LAB |
| Number | colorValue | Values for the chosen color |
| File | to | Destination export-file path. |

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Assigns the Nth design axis value for a variable font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |
| Number | nthAxisValue | Value for the nth design axis. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Returns true when the variable font's Nth design axis is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |

> **remove**( CharacterStyle **replacingWith** )
>
> Removes the style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharacterStyle | replacingWith | Style applied instead of the removed style. (Optional) |

> CharacterStyle **duplicate**()
>
> Makes a duplicate CharacterStyle.
> CharacterStyle **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the style to the requested position.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Destination expressed relative to the reference object, or inside the containing object. |
| Mixed | reference | Object used as the reference. Note: Needed when the to parameter uses before/after placement. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Stored value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Produces executable source text that returns the CharacterStyle when run.
> CharacterStyle **getElements**()
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
