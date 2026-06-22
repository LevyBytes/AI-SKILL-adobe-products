# Graphics, Grid Alignment, Grid Data Information, Grid Preference ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Graphics; GridAlignment; GridDataInformation; GridPreference — Instance; GridPrintingPreference; GridViewSettings.

## Graphics

Collection containing imported graphics in graphic file formats such as vector, metafile, or bitmap.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects contained by the collection.

### Methods

> Number **count**()
>
> Reports how many elements are in the Graphic collection.
> Graphic **item**( Mixed **index** )
>
> Gets the Graphic identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Accepted values are Long Integer or String. |

> Graphic **itemByName**( String **name** )
>
> Gets the Graphic identified by the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name selector. |

> Graphic **itemByID**( Number **id** )
>
> Gets the Graphic identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID selector. |

> Graphic **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Graphics inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Graphic, index, or name that starts the range. Accepted values are Graphic, Long Integer, or String. |
| Mixed | to | Graphic, index, or name that ends the range. Accepted values are Graphic, Long Integer, or String. |

> Graphic **firstItem**()
>
> Gets the first Graphic in the collection.
> Graphic **lastItem**()
>
> Gets the final Graphic in the collection.
> Graphic **middleItem**()
>
> Gets the middle Graphic in the collection.
> Graphic **previousItem**( Graphic **obj** )
>
> Gets the Graphic at the index immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Graphic | obj | Index of the Graphic that comes after the desired Graphic. |

> Graphic **nextItem**( Graphic **obj** )
>
> Gets the Graphic whose index comes immediately after the specified Graphic in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Graphic | obj | Graphic whose index comes before the desired Graphic. |

> Graphic **anyItem**()
>
> Gets any Graphic in the collection.
> Graphic **everyItem**()
>
> Gets every Graphic in the collection.
> String **toSource**()
>
> Creates a string that, when executed, returns the Graphic.
> Graphic **[]**( Number **index** )
>
> Gets the Graphic identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index selector. |

## GridAlignment

Options that align frame grids or baseline grids.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Leaves lines unaligned to the grid.
> _Read Only_
>
> Number `ALIGN_BASELINE` = 1247896172
>
> Aligns the text baseline with the grid.
> _Read Only_
>
> Number `ALIGN_EM_TOP` = 1247900784
>
> Aligns the em box top with the grid.
> _Read Only_
>
> Number `ALIGN_EM_CENTER` = 1247896436
>
> Aligns the em box center with the grid.
> _Read Only_
>
> Number `ALIGN_EM_BOTTOM` = 1247896173
>
> Aligns the em box bottom with the grid.
> _Read Only_
>
> Number `ALIGN_ICF_TOP` = 1248425072
>
> Aligns the ICF box top with the grid.
> _Read Only_
>
> Number `ALIGN_ICF_BOTTOM` = 1248420461
>
> Aligns the ICF box bottom with the grid.

## GridDataInformation

Default grid settings. Note: covers named grids, layout grids, and frame (story) grids.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent can be one of these objects: Story, XmlStory, Page, NamedGrid, TextFrame, or EndnoteTextFrame.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> Mixed **appliedFont**
>
> Font used by the GridDataInformation, provided either as a font object or as the font-family name. Returns Font or String.
> String **fontStyle**
>
> Font style name.
> Measurement Unit (Number or String)=any **pointSize**
>
> Text size.
> Number **characterAki**
>
> White-space amount between characters.
> Number **lineAki**
>
> White-space amount between lines.
> Number **horizontalScale**
>
> Horizontal scaling value applied to the GridDataInformation.
> Number **verticalScale**
>
> Vertical scaling value applied to the GridDataInformation.
> LineAlignment **lineAlignment**
>
> Line justification setting.
> GridAlignment **gridAlignment**
>
> Alignment used for the frame grid or baseline grid.
> CharacterAlignment **characterAlignment**
>
> Alignment for small characters relative to the largest character in the line.
> GridViewSettings **gridView**
>
> Grid view setting.
> CharacterCountLocation **characterCountLocation**
>
> Character-count position. Note: valid when show character count is true.
> Number **characterCountSize**
>
> Character size used when displaying the character count.
> Object **properties**
>
> Lets several properties be set in one operation.

### Methods

> String **toSource**()
>
> Creates a string that, when executed, returns the GridDataInformation.
> GridDataInformation **getElements**()
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
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler, supplied as a File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler, supplied as a File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GridPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the GridPreference: an Application or Document.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> Boolean **documentGridShown**
>
> When true, shows the document grid.
> Boolean **documentGridSnapto**
>
> When true, objects snap to the closest grid line as they are created, moved, or resized.
> Measurement Unit (Number or String)=any **horizontalGridlineDivision**
>
> Distance separating the document grid's major horizontal lines.
> Measurement Unit (Number or String)=any **verticalGridlineDivision**
>
> Spacing between major vertical lines in the document grid.
> Number **horizontalGridSubdivision**
>
> Row count used to subdivide the area between horizontal document grid lines.
> Number **verticalGridSubdivision**
>
> Column count used to subdivide the area between vertical document grid lines.
> Mixed **gridColor**
>
> Document grid color, supplied either as an array of three doubles in the 0 to 255 range for R, G, and B values, or as a UI color. Returns Array of 3 Reals (0 - 255) or UIColors enumerator.
> Boolean **gridsInBack**
>
> When true, positions grids behind every other object on the spread.
> Boolean **baselineGridShown**
>
> When true, shows the baseline grid.
> Measurement Unit (Number or String)=any **baselineStart**
>
> Offset amount from the zero point to the baseline grid.
> Measurement Unit (Number or String)=any **baselineDivision**
>
> Spacing between baseline grid lines.
> Number **baselineViewThreshold**
>
> Magnification percentage below which ruler guides are hidden. (Range: 5 to 4000)
> Mixed **baselineColor**
>
> Baseline grid color, supplied either as an array of three doubles in the 0 to 255 range for R, G, and B values, or as a UI color. Returns Array of 3 Reals (0 - 255) or UIColors enumerator.
> BaselineGridRelativeOption **baselineGridRelativeOption**
>
> Zero point used for the baseline grid offset.
> Object **properties**
>
> Lets several properties be set in one operation.

### Methods

> String **toSource**()
>
> Creates a string that, when executed, returns the GridPreference.
> GridPreference **getElements**()
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
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler, supplied as a File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler, supplied as a File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GridPrintingPreference

Preferences that control grid printing and exporting.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the GridPrintingPreference: an Application.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> Boolean **layoutGridPrinting**
>
> When true, includes layout grids in the printed or exported document.
> Boolean **frameGridPrinting**
>
> When true, includes frame (story) grids in the printed or exported document.
> Boolean **textPrinting**
>
> When true, includes text in the printed or exported document.
> Boolean **pageItemPrinting**
>
> When true, the printed or exported document includes non-text page items, excluding frame grids and layout grids. Cross-references: text printing, frame grid printing, and layout grid printing.
> Number **layoutGridStrokeWeight**
>
> Stroke weight, in points, for the layout grid.
> Number **frameGridStrokeWeight**
>
> Stroke weight, in points, for the frame grid.
> Object **properties**
>
> Lets several properties be set in one operation.

### Methods

> String **toSource**()
>
> Creates a string that, when executed, returns the GridPrintingPreference.
> GridPrintingPreference **getElements**()
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
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler, supplied as a File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler, supplied as a File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GridViewSettings

Options for grid display views.

### Class

> _Read Only_
>
> Number `GRID_VIEW_ENUM` = 1783064438
>
> Grid view.
> _Read Only_
>
> Number `ZN_VIEW_ENUM` = 1783069302
>
> ZN view.
> _Read Only_
>
> Number `ALIGN_VIEW_ENUM` = 1783062902
>
> Align view.
> _Read Only_
>
> Number `GRID_AND_ZN_VIEW_ENUM` = 1783064442
>
> Grid and ZN view.
