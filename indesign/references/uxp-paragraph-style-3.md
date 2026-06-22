# Paragraph Style (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

### Methods

> Boolean **createThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to** )
>
> Builds a thumbnail for the selected text using the supplied property values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | previewText | Sample text for the thumbnail. |
| Number | pointSize | Font size for the text, in points. |
| ColorSpace | space | RGB, CMYK or LAB color space. |
| Number | colorValue | Color component values. |
| File | to | Export file path. |

> **forceDelete**( ParagraphStyle **replacingWith** )
>
> Forcefully removes the paragraph style. Reserved for internal use.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphStyle | replacingWith | Style assigned where the deleted style had been used. (Optional) |

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Sets the variable font's Nth design axis.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design axis index. |
| Number | nthAxisValue | Nth design axis value. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Returns true when the variable font's Nth design axis is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design axis index. |

> **remove**( ParagraphStyle **replacingWith** )
>
> Removes the style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphStyle | replacingWith | Style assigned where the deleted style had been used. (Optional) |

> ParagraphStyle **duplicate**()
>
> Copies the ParagraphStyle.
> ParagraphStyle **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the style to the requested position.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement relative to the reference object or within the containing object. |
| Mixed | reference | When the to parameter uses before or after, this reference object is required. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) |

> **convertBulletsAndNumberingToText**()
>
> Changes bullets and numbering into text.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value as the label for the given key.

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
> Produces a string that returns the ParagraphStyle when executed.
> ParagraphStyle **getElements**()
>
> Creates an object-reference array from the resolved specifier.
> String **toSpecifier**()
>
> Returns this object's specifier string.
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
| Mixed | handler | Registered handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
