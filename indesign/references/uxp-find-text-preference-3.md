# Find Text Preference (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

### Methods

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Sets the Nth design axis for a variable font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |
| Number | nthAxisValue | Nth design-axis value. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> True indicates that the Nth design axis of the variable font is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design-axis index. |

> String **toSource**()
>
> Produces a string that returns the FindTextPreference when run.
> FindTextPreference **getElements**()
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
