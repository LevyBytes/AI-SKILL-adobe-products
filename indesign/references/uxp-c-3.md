# Cells, Change Background Color Choices, Change Case Options, Change Color Preference ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Cells; ChangeBackgroundColorChoices; ChangeCaseOptions; ChangeColorPreference; ChangeConditionsModes; ChangeGlyphPreference.

## Cells

A collection containing table cells.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size.

### Methods

> Number **count**()
>
> Reports how many Cell elements are present.
> Cell **item**( Mixed **index** )
>
> Fetches the Cell identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> Cell **itemByName**( String **name** )
>
> Fetches the Cell that has the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Cell **itemByID**( Number **id** )
>
> Fetches the Cell that has the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Cell **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the Cells covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, given as a Cell, index, or name. Can accept: Cell, Long Integer or String. |
| Mixed | to | Range end, given as a Cell, index, or name. Can accept: Cell, Long Integer or String. |

> Cell **firstItem**()
>
> Fetches the first Cell from the collection.
> Cell **lastItem**()
>
> Fetches the final Cell from the collection.
> Cell **middleItem**()
>
> Fetches the middle Cell from the collection.
> Cell **previousItem**( Cell **obj** )
>
> Fetches the Cell positioned immediately before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Cell | obj | Cell index that comes after the requested Cell. |

> Cell **nextItem**( Cell **obj** )
>
> Fetches the Cell whose index comes after the supplied Cell in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Cell | obj | Cell whose index is before the requested Cell. |

> Cell **anyItem**()
>
> Fetches any Cell from the collection.
> Cell **everyItem**()
>
> Fetches every Cell from the collection.
> String **toSource**()
>
> Produces source text that returns the Cell when executed.
> Cell **[]**( Number **index** )
>
> Fetches the Cell at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## ChangeBackgroundColorChoices

Options for the background color used with changed text.

### Class

> _Read Only_
>
> Number `CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR` = 1700095842
>
> Uses the galley background color as the background for changed text.
> _Read Only_
>
> Number `CHANGE_BACKGROUND_USES_USER_COLOR` = 1700099426
>
> Uses the current user's assigned color as the background for changed text.
> _Read Only_
>
> Number `CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR` = 1700098146
>
> Uses the track changes preferences background color for changed text. Related references: background color for added text, background color for deleted text, or background color for moved text.

## ChangeCaseOptions

Options for changing case.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Performs no conversion.
> _Read Only_
>
> Number **UPPERCASE** = 1667462499
>
> Changes every letter to uppercase.
> _Read Only_
>
> Number **LOWERCASE** = 1667460195
>
> Changes every letter to lowercase.
> _Read Only_
>
> Number **TITLECASE** = 1667462243
>
> Changes the first letter in each word to uppercase.
> _Read Only_
>
> Number **SENTENCECASE** = 1667461987
>
> Changes the first letter of each sentence's first word to uppercase.

## ChangeColorPreference

Preferences used for change colors.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully.
> _Read Only_
>
> Application **parent**
>
> Parent of the ChangeColorPreference, an Application.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Mixed **changeTo**
>
> Replacement color. Can return: Swatch or NothingEnum enumerator.
> Mixed **tint**
>
> Replacement tint. Can return: Real (0 - 100) or NothingEnum enumerator.
> Object **properties**
>
> Property used to set multiple properties together.

### Methods

> String **toSource**()
>
> Produces source text that returns the ChangeColorPreference when executed.
> ChangeColorPreference **getElements**()
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

## ChangeConditionsModes

Modes used when changing conditions.

### Class

> _Read Only_
>
> Number `REPLACE_WITH` = 1919250519
>
> Change replaces conditions already applied.
> _Read Only_
>
> Number `ADD_TO` = 1633969202
>
> Change adds to the conditions already applied.

## ChangeGlyphPreference

Preferences used for changing glyphs.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully.
> _Read Only_
>
> Application **parent**
>
> Parent of the ChangeGlyphPreference, an Application.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Mixed **designAxes**
>
> Design Axes value. Can return: Array of Reals or NothingEnum enumerator.
> Mixed **glyphID**
>
> Glyph GID/CID. Can return: Long Integer or NothingEnum enumerator.
> Mixed **appliedFont**
>
> Font applied to the ChangeGlyphPreference, provided as a font object or font family name. Can return: Font, String or NothingEnum enumerator.
> Mixed **fontStyle**
>
> Font style name. Can return: String or NothingEnum enumerator.
> Object **properties**
>
> Property used to set multiple properties together.

### Methods

> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
>
> Sets the nth design axis for a variable font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design axis index. |
| Number | nthAxisValue | nth design axis value. |

> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
>
> True means the nth variable-font design axis is hidden.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | nthAxisIndex | Design axis index. |

> String **toSource**()
>
> Produces source text that returns the ChangeGlyphPreference when executed.
> ChangeGlyphPreference **getElements**()
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
