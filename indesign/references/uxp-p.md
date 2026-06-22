# Page Binding Options, Page Color Options, Page Item Default

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: PageBindingOptions; PageColorOptions; PageItemDefault.

## PageBindingOptions

Placement setting for page binding.

### Class

> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Applies the default page binding.
> _Read Only_
>
> Number `RIGHT_TO_LEFT` = 1920232546
>
> Binds pages on the right.
> _Read Only_
>
> Number `LEFT_TO_RIGHT` = 1819570786
>
> Binds pages on the left.

## PageColorOptions

Page color label choices.

### Class

> _Read Only_
>
> Number **NOTHING** = 1851876449
>
> Leaves color unset.
> _Read Only_
>
> Number `USE_MASTER_COLOR` = 1346594413
>
> Uses the page's master page color label.

## PageItemDefault

Formatting defaults for page items.

### Instance

> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Transparency configuration.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Stroke transparency configuration.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Fill transparency configuration for the PageItemDefault.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Content transparency configuration for the PageItemDefault.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the PageItemDefault, either a Application or Document.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preferences objects.
> _Read Only_
>
> Events **events**
>
> Collection of events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection of event listeners.
> CornerOptions **topLeftCornerOption**
>
> Upper-left rectangular corner shape, also used for every corner of non-rectangular shapes. Note: corner option differs from end join because a corner option can have a radius, while rounded or beveled end-join effects depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Upper-right rectangular corner shape.
> CornerOptions **bottomLeftCornerOption**
>
> Lower-left rectangular corner shape.
> CornerOptions **bottomRightCornerOption**
>
> Lower-right rectangular corner shape.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the upper-left rectangular corner effect and for every non-rectangular corner effect.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the upper-right rectangular corner effect.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the lower-left rectangular corner effect.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the lower-right rectangular corner effect.
> ObjectStyle **appliedGraphicObjectStyle**
>
> Default graphic object style assigned to the PageItemDefault. Can also accept: String.
> ObjectStyle **appliedTextObjectStyle**
>
> Default text object style assigned to the PageItemDefault. Can also accept: String.
> ObjectStyle **appliedGridObjectStyle**
>
> Default frame grid object style assigned to the PageItemDefault. Can also accept: String.
> Swatch **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the PageItemDefault fill. Can also accept: String.
> Number **fillTint**
>
> Tint percentage used for the PageItemDefault fill color. Use 0 to 100 for an explicit tint percent; use -1 for inherited or overridden value.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, assigned to the PageItemDefault.
> Number **miterLimit**
>
> Maximum stroke-width to miter-length ratio allowed before a miter (pointed) join changes into a bevel (squared-off) join.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join assigned to the PageItemDefault.
> StrokeStyle **strokeType**
>
> Stroke style name to assign. Can also accept: String.
> ArrowHead **leftLineEnd**
>
> Arrowhead assigned to the beginning of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead assigned to the path end.
> Swatch **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the PageItemDefault stroke. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage used for the object's stroke color. Use 0 to 100 for an explicit tint percent; use -1 for inherited or overridden value.
> Number **gradientFillAngle**
>
> Linear-gradient angle assigned to the PageItemDefault fill. (Range: -180 to 180)
> Number **gradientStrokeAngle**
>
> Linear-gradient angle assigned to the PageItemDefault stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> When true, the PageItemDefault's stroke color overprints objects underneath it. When false, the stroke color knocks out underlying colors.
> Boolean **overprintFill**
>
> When true, the PageItemDefault's fill color overprints objects underneath it. When false, the fill color knocks out underlying colors.
> Swatch **gapColor**
>
> Gap swatch for dashed, dotted, or striped strokes, including color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap color tint expressed as a percentage. Use 0 to 100 for an explicit tint percent; use -1 for inherited or overridden value.
> Boolean **overprintGap**
>
> When true, the gap color overprints underlying colors. When false, the gap color knocks out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment assigned to the PageItemDefault.
> Boolean **nonprinting**
>
> When true, the PageItemDefault is excluded from printing.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment assigned to the PageItemDefault.
> Number **leftArrowHeadScale**
>
> Scale value applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale value applied to the arrowhead at the path end. (Range: 1 to 1000)
> Object **properties**
>
> Property used to set multiple properties in a single operation.

### Methods

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Assigns the requested object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | ObjectStyle value that should be assigned. |
| Boolean | clearingOverrides | When true, existing PageItemDefault attributes are removed before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, formatting and attributes on the PageItemDefault that are outside the object style definition are removed. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object-style overrides.
> String **toSource**()
>
> Builds a string that can be executed to return the PageItemDefault.
> PageItemDefault **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
| Mixed | handler | Event handler callback or file. Can accept: File or JavaScript Function. |
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
