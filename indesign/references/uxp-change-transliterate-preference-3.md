# Change Transliterate Preference (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

### Methods

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Sets the Nth design axis for a variable font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design axis index. |
| Number | nthAxisValue | Nth design axis value. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> When true, the variable font Nth design axis is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design axis index. |

> String **toSource**()
>
> Creates executable source text that returns the ChangeTransliteratePreference.
> ChangeTransliteratePreference **getElements**()
>
> Resolves the object specifier into an array of object references.
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
| Mixed | handler | Specifies the event handler. Accepted input: Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Specifies the registered event type. |
| Mixed | handler | Specifies the registered event handler. Accepted input: Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
