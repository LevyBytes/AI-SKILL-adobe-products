# Find Glyph Preference

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Preferences used when finding glyphs.

## Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier points to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for this FindGlyphPreference, an Application.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> Mixed **designAxes**
>
> Design Axes value. Can return: Array of Reals or NothingEnum enumerator.
> Mixed **glyphID**
>
> Glyph GID/CID value. Can return: Long Integer or NothingEnum enumerator.
> Mixed **rosFontGroup**
>
> Registry Ordered font group value. Can return: Array of 2 Strings or NothingEnum enumerator.
> Mixed **appliedFont**
>
> Font applied to the FindGlyphPreference, supplied either as a font object or as the font family name. Can return: Font, String or NothingEnum enumerator.
> Mixed **fontStyle**
>
> Font style name. Can return: String or NothingEnum enumerator.
> Object **properties**
>
> Several properties can be assigned together through this property.

### Methods

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Assigns the Nth design axis value for a variable-font setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Index of design axis. |
| Number | nthAxisValue | Value of nth design axis. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> Reports true when that Nth design axis is hidden in a variable-font setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Index of design axis. |

> String **toSource**()
>
> Builds a string that returns this FindGlyphPreference when executed.
> FindGlyphPreference **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Creates a listener registration for the event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Deletes a listener registration for the event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |
