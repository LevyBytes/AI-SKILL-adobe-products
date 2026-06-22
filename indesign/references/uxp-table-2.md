# Table (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

### Methods

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Turns text into outlines. Each text line becomes a polygon object. If the converted text is one letter with no internal spaces or detached pieces, that polygon has one path only. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, creates separate outline object(s) above the text. (Optional) |

> **autoTag**()
>
> Applies default XML preference tags to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element without changing existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | Provides the XML element. |

> **recompose**()
>
> Recomposes Table text.
> Text **findText**( Boolean **reverseOrder** )
>
> Finds text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Finds text matching the find what value and replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Finds text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Finds text matching the find what value and replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Finds glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Finds glyphs matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching the find character type value and replaces it with the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returns results in reverse order. (Optional) |

> **remove**()
>
> Removes the Table.
> Cell **unmerge**()
>
> Separates every merged cell in the Table.
> Text **convertToText**( String **columnSeparator**, String **rowSeparator** )
>
> Changes the table into text.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | columnSeparator | Specifies the character placed between each column's content after conversion to text. Note: Define it as any single character, including a letter, number, punctuation mark, space, or tab. Enter the actual character instead of its name, such as ',' instead of 'Comma'. Put an extra backslash before double quotes, single quotes, or a backslash to escape them. For paragraphs, use ^p. (Optional) |
| String | rowSeparator | Specifies the character that separates row content in the converted text. Note: Define it as any single character, including a letter, number, punctuation mark, space, or tab. Enter the actual character instead of its name, such as , instead of Comma. Put an extra backslash before double quotes, single quotes, or a backslash to escape them. For paragraphs, use ^p. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the specified key with its associated label value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Provides the key. |
| String | value | Provides the value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Provides the key. |

> **clearTableStyleOverrides**()
>
> Clears Table Style Overrides
> **convertBulletsAndNumberingToText**()
>
> Converts bullets and numbering into text.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Specifies how the Table selection relates to objects already selected. (Optional) |

> String **toSource**()
>
> Generates a string that returns the Table when executed.
> Table **getElements**()
>
> Resolves the object specifier and creates an object-reference array.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Provides the event type. |
| Mixed | handler | Provides the event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This obsolete parameter is optional. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Provides the registered event type. |
| Mixed | handler | Supplies the registered event handler. Accepts File or JavaScript Function. |
| Boolean | captures | This obsolete parameter is optional. (Optional) |
