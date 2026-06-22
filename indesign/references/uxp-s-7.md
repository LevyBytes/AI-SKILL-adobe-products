# Striped Stroke Style, Striped Stroke Styles, Stroke Alignment, Stroke Corner Adjustment ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: StripedStrokeStyle; StripedStrokeStyles; StrokeAlignment; StrokeCornerAdjustment; StrokeFillProxyOptions; StrokeFillProxySetting; StrokeFillTargetOptions; StrokeOrderTypes; StrokeStyle; StrokeStyles; StrokeTransparencySetting — Instance; StyleConflict; StyleExportTagMap; StyleExportTagMaps; StyleType — Class.

## StripedStrokeStyle

Represents a striped stroke style.

### Instance

> _Read Only_
>
> String **strokeStyleType**
>
> Stroke style type.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the StripedStrokeStyle.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the StripedStrokeStyle, either a Document or Application.
> _Read Only_
>
> Number **index**
>
> Position of the StripedStrokeStyle inside its containing object.
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
> Number **stripeArray**
>
> Defines stripe widths and positions for a striped stroke pattern. Each stripe uses a start-end pair formatted as [start1, end1, start2, end2]; values are percentages of stroke weight. Every value must exceed the one before it. (Range: 0 to 100).
> String **name**
>
> Name of the StripedStrokeStyle.
> Object **properties**
>
> Property bag for setting several properties in one operation.

### Methods

> StripedStrokeStyle **duplicate**()
>
> Creates a duplicate of the StripedStrokeStyle.
> **remove**( Mixed **replacingWith** )
>
> Removes the stroke style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | replacingWith | Stroke style applied in place of the deleted style. Accepts StrokeStyle or String. (Optional) |

> String **toSource**()
>
> Builds a string that evaluates back to the StripedStrokeStyle.
> StripedStrokeStyle **getElements**()
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

## StripedStrokeStyles

Collection of striped stroke styles.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> StripedStrokeStyle **add**( Object **withProperties** )
>
> Creates a StripedStrokeStyle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new StripedStrokeStyle. (Optional) |

> Number **count**()
>
> Returns the element count for StripedStrokeStyle.
> StripedStrokeStyle **item**( Mixed **index** )
>
> Returns the StripedStrokeStyle identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts Long Integer or String. |

> StripedStrokeStyle **itemByName**( String **name** )
>
> Returns the StripedStrokeStyle identified by the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> StripedStrokeStyle **itemByID**( Number **id** )
>
> Returns the StripedStrokeStyle identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> StripedStrokeStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the StripedStrokeStyles in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a StripedStrokeStyle, index, or name. Accepts StripedStrokeStyle, Long Integer or String. |
| Mixed | to | Range end, supplied as a StripedStrokeStyle, index, or name. Accepts StripedStrokeStyle, Long Integer or String. |

> StripedStrokeStyle **firstItem**()
>
> Returns the first StripedStrokeStyle from the collection.
> StripedStrokeStyle **lastItem**()
>
> Returns the last StripedStrokeStyle from the collection.
> StripedStrokeStyle **middleItem**()
>
> Returns the middle StripedStrokeStyle from the collection.
> StripedStrokeStyle **previousItem**( StripedStrokeStyle **obj** )
>
> Returns the StripedStrokeStyle whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StripedStrokeStyle | obj | StripedStrokeStyle with the index after the desired StripedStrokeStyle. |

> StripedStrokeStyle **nextItem**( StripedStrokeStyle **obj** )
>
> Returns the StripedStrokeStyle whose index comes after the specified StripedStrokeStyle in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StripedStrokeStyle | obj | StripedStrokeStyle with the index before the desired StripedStrokeStyle. |

> StripedStrokeStyle **anyItem**()
>
> Returns any StripedStrokeStyle from the collection.
> StripedStrokeStyle **everyItem**()
>
> Returns every StripedStrokeStyle from the collection.
> String **toSource**()
>
> Builds a string that evaluates back to the StripedStrokeStyle.
> StripedStrokeStyle **[]**( Number **index** )
>
> Returns the StripedStrokeStyle identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## StrokeAlignment

Options that set where a stroke sits relative to its path.

### Class

> _Read Only_
>
> Number `CENTER_ALIGNMENT` = 1936998723
>
> Stroke is centered on the path.
> _Read Only_
>
> Number `INSIDE_ALIGNMENT` = 1936998729
>
> Stroke falls inside the path.
> _Read Only_
>
> Number `OUTSIDE_ALIGNMENT` = 1936998735
>
> Stroke falls outside the path, like a picture frame.

## StrokeCornerAdjustment

Automatic adjustment applied to the pattern of a dashed or dotted stroke so it covers path corner points.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> No automatic adjustment.
> _Read Only_
>
> Number **DASHES** = 1162113896
>
> Alters dash lengths so dashes always fall on path ends and corners while the configured gap length stays unchanged. Note: On shapes with unequal side lengths, such as rectangles, this can produce dashes of different lengths.
> _Read Only_
>
> Number **GAPS** = 1164406899
>
> Changes gap lengths so dashes or dots always land at ends and corners while dash length or dot diameter stays unchanged. Note: On shapes with unequal side lengths, such as rectangles, this can produce gaps of different lengths.
> _Read Only_
>
> Number `DASHES_AND_GAPS` = 1148405616
>
> Adjusts dashes and gaps together to cover corners and end points. Note: Dash and gap sizes remain consistent on every side of the shape.

## StrokeFillProxyOptions

Options for the active stroke/fill proxy.

### Class

> _Read Only_
>
> Number **STROKE** = 1400140395
>
> Stroke proxy is the active proxy.
> _Read Only_
>
> Number **FILL** = 1181314156
>
> Fill proxy is the active proxy.

## StrokeFillProxySetting

Settings for stroke/fill proxy.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent of the StrokeFillProxySetting, an Application.
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
> StrokeFillProxyOptions **active**
>
> Currently active part of the stroke/fill proxy.
> StrokeFillTargetOptions **target**
>
> Target affected by changes to the stroke/fill proxy.
> Swatch **fillColor**
>
> Fill color uses a Swatch (color, gradient, tint, or mixed ink) on the StrokeFillProxySetting. Can also accept: String.
> Swatch **strokeColor**
>
> Stroke color uses a Swatch (color, gradient, tint, or mixed ink) on the StrokeFillProxySetting. Can also accept: String.
> Object **properties**
>
> Property bag for setting several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that evaluates back to the StrokeFillProxySetting.
> StrokeFillProxySetting **getElements**()
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

## StrokeFillTargetOptions

Options selecting the target for the active stroke/fill proxy.

### Class

> _Read Only_
>
> Number `FORMATTING_AFFECTS_CONTAINER` = 1181696323
>
> Formatting changes apply to the container.
> _Read Only_
>
> Number `FORMATTING_AFFECTS_TEXT` = 1181696340
>
> Formatting changes apply to the text.

## StrokeOrderTypes

Options controlling how row and column strokes display at corners.

### Class

> _Read Only_
>
> Number `ROW_ON_TOP` = 1936879476
>
> Draws row strokes in front of column strokes.
> _Read Only_
>
> Number `COLUMN_ON_TOP` = 1935896436
>
> Draws column strokes in front of row strokes.
> _Read Only_
>
> Number `BEST_JOINS` = 1935828330
>
> When row and column strokes use different colors, places row strokes in front; joins striped strokes and connects crossing points.
> _Read Only_
>
> Number `INDESIGN_2_COMPATIBILITY` = 1936286819
>
> When row and column strokes use different colors, places row strokes in front; striped strokes join only where strokes cross in a T-shape.

## StrokeStyle

Represents a stroke style.

### Instance

> _Read Only_
>
> String **strokeStyleType**
>
> Identifies the stroke style type.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the StrokeStyle.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning container for the StrokeStyle (a Document or Application).
> _Read Only_
>
> Number **index**
>
> Position of the StrokeStyle inside its containing object.
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
> String **name**
>
> Name assigned to the StrokeStyle.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> StrokeStyle **duplicate**()
>
> Creates a duplicate StrokeStyle.
> **remove**( Mixed **replacingWith** )
>
> Removes the stroke style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | replacingWith | Replacement stroke style to use where the removed style had been applied. Can accept: StrokeStyle or String. (Optional) |

> String **toSource**()
>
> Builds source text that evaluates back to the StrokeStyle.
> StrokeStyle **getElements**()
>
> Resolves the object specifier and returns object references in an array.
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
| Mixed | handler | Handler used for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## StrokeStyles

Collection containing stroke styles.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size.

### Methods

> Number **count**()
>
> Reports how many elements the StrokeStyle collection contains.
> StrokeStyle **item**( Mixed **index** )
>
> Finds a StrokeStyle by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Can accept: Long Integer or String. |

> StrokeStyle **itemByName**( String **name** )
>
> Finds the StrokeStyle with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to look up. |

> StrokeStyle **itemByID**( Number **id** )
>
> Finds the StrokeStyle with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to look up. |

> StrokeStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Collects the StrokeStyles in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting StrokeStyle, index, or name for the range. Can accept: StrokeStyle, Long Integer or String. |
| Mixed | to | Ending StrokeStyle, index, or name for the range. Can accept: StrokeStyle, Long Integer or String. |

> StrokeStyle **firstItem**()
>
> Gets the first StrokeStyle in the collection.
> StrokeStyle **lastItem**()
>
> Gets the final StrokeStyle in the collection.
> StrokeStyle **middleItem**()
>
> Gets the central StrokeStyle in the collection.
> StrokeStyle **previousItem**( StrokeStyle **obj** )
>
> Gets the StrokeStyle at the index immediately before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StrokeStyle | obj | StrokeStyle index that comes after the desired StrokeStyle. |

> StrokeStyle **nextItem**( StrokeStyle **obj** )
>
> Gets the StrokeStyle at the index immediately after the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StrokeStyle | obj | StrokeStyle index that comes before the desired StrokeStyle. |

> StrokeStyle **anyItem**()
>
> Gets any StrokeStyle from the collection.
> StrokeStyle **everyItem**()
>
> Gets all StrokeStyle entries in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the StrokeStyle.
> StrokeStyle **[]**( Number **index** )
>
> Gets the StrokeStyle at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## StrokeTransparencySetting — Instance

> _Read Only_
>
> BlendingSetting **blendingSettings**
>
> Configuration for blending mode behavior.
> _Read Only_
>
> DropShadowSetting **dropShadowSettings**
>
> Configuration for the drop shadow effect.
> _Read Only_
>
> FeatherSetting **featherSettings**
>
> Configuration for the feather effect.
> _Read Only_
>
> InnerShadowSetting **innerShadowSettings**
>
> Configuration for the inner shadow effect.
> _Read Only_
>
> OuterGlowSetting **outerGlowSettings**
>
> Configuration for the outer glow effect.
> _Read Only_
>
> InnerGlowSetting **innerGlowSettings**
>
> Configuration for the inner glow effect.
> _Read Only_
>
> BevelAndEmbossSetting **bevelAndEmbossSettings**
>
> Configuration for the bevel and emboss effect.
> _Read Only_
>
> SatinSetting **satinSettings**
>
> Configuration for the satin effect.
> _Read Only_
>
> DirectionalFeatherSetting **directionalFeatherSettings**
>
> Configuration for the directional feather effect.
> _Read Only_
>
> GradientFeatherSetting **gradientFeatherSettings**
>
> Configuration for the gradient feather effect.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for the StrokeTransparencySetting (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, PageItemDefault or ObjectStyle).
> _Read Only_
>
> Preferences **preferences**
>
> Preferences object collection.
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
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds source text that evaluates back to the StrokeTransparencySetting.
> StrokeTransparencySetting **getElements**()
>
> Resolves the object specifier and returns object references in an array.
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
| Mixed | handler | Handler used for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## StyleConflict

Style-conflict choices used while tagged text is imported.

### Class

> _Read Only_
>
> Number `PUBLICATION_DEFINITION` = 1414819940
>
> Selects the publication style.
> _Read Only_
>
> Number `TAG_FILE_DEFINITION` = 1413903460
>
> Selects the tag file style.

## StyleExportTagMap

Object that maps an export type to a corresponding export tag.

### Instance

> _Read Only_
>
> String **exportType**
>
> Export type value.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for the StyleExportTagMap (a CharacterStyle or ParagraphStyle).
> _Read Only_
>
> Number **index**
>
> Position of the StyleExportTagMap inside its containing object.
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
> String **exportTag**
>
> Export tag being mapped.
> String **exportClass**
>
> Export class being mapped.
> String **exportAttributes**
>
> Export attributes being mapped.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> **remove**()
>
> Removes the StyleExportTagMap.
> String **toSource**()
>
> Builds source text that evaluates back to the StyleExportTagMap.
> StyleExportTagMap **getElements**()
>
> Resolves the object specifier and returns object references in an array.
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
| Mixed | handler | Handler used for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## StyleExportTagMaps

Collection containing style export tag maps.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size.

### Methods

> StyleExportTagMap **add**( String **exportType**, String **exportTag**, String **exportClass**, String **exportAttributes**, Object **withProperties** )
>
> Creates a new mapping entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | exportType | Export type value. |
| String | exportTag | Export tag to use for the mapping. |
| String | exportClass | Export class to use for the mapping. |
| String | exportAttributes | Export attributes to use for the mapping. |
| Object | withProperties | Starting property values for the new StyleExportTagMap. (Optional) |

> Number **count**()
>
> Reports how many elements the StyleExportTagMap collection contains.
> StyleExportTagMap **item**( Mixed **index** )
>
> Finds a StyleExportTagMap by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Can accept: Long Integer or String. |

> StyleExportTagMap **itemByRange**( Mixed **from**, Mixed **to** )
>
> Collects the StyleExportTagMaps in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting StyleExportTagMap, index, or name for the range. Can accept: StyleExportTagMap, Long Integer or String. |
| Mixed | to | Ending StyleExportTagMap, index, or name for the range. Can accept: StyleExportTagMap, Long Integer or String. |

> StyleExportTagMap **firstItem**()
>
> Gets the first StyleExportTagMap in the collection.
> StyleExportTagMap **lastItem**()
>
> Gets the final StyleExportTagMap in the collection.
> StyleExportTagMap **middleItem**()
>
> Gets the central StyleExportTagMap in the collection.
> StyleExportTagMap **previousItem**( StyleExportTagMap **obj** )
>
> Gets the StyleExportTagMap at the index immediately before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StyleExportTagMap | obj | StyleExportTagMap index that comes after the desired StyleExportTagMap. |

> StyleExportTagMap **nextItem**( StyleExportTagMap **obj** )
>
> Gets the StyleExportTagMap at the index immediately after the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StyleExportTagMap | obj | StyleExportTagMap index that comes before the desired StyleExportTagMap. |

> StyleExportTagMap **anyItem**()
>
> Gets any StyleExportTagMap from the collection.
> StyleExportTagMap **everyItem**()
>
> Gets all StyleExportTagMap entries in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the StyleExportTagMap.
> StyleExportTagMap **[]**( Number **index** )
>
> Gets the StyleExportTagMap at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## StyleType — Class

> _Read Only_
>
> Number `CHARACTER_STYLE_TYPE` = 1665684340
>
> Character Style
> _Read Only_
>
> Number `PARAGRAPH_STYLE_TYPE` = 1883730548
>
> Paragraph Style
