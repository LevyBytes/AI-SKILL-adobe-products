# Object Style Stroke Effects Category Settings, Object Style, Object Styles, Object Types ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ObjectStyleStrokeEffectsCategorySettings; ObjectStyle; ObjectStyles; ObjectTypes; OpacityGradientStop; OpacityGradientStops.

## ObjectStyleStrokeEffectsCategorySettings

Settings for object style stroke effects categories.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier maps to valid objects.
> _Read Only_
>
> ObjectStyle **parent**
>
> Parent object for ObjectStyleStrokeEffectsCategorySettings (a ObjectStyle).
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Boolean **enableTransparency**
>
> When true, transparency settings are applied by the object style.
> Boolean **enableDropShadow**
>
> When true, drop shadows are applied by the object style.
> Boolean **enableFeather**
>
> When true, feathering is applied by the object style.
> Boolean **enableInnerShadow**
>
> When true, inner shadows are applied by the object style.
> Boolean **enableOuterGlow**
>
> When true, outer glow is applied by the object style.
> Boolean **enableInnerGlow**
>
> When true, inner glow is applied by the object style.
> Boolean **enableBevelEmboss**
>
> When true, bevel emboss is applied by the object style.
> Boolean **enableSatin**
>
> When true, satin is applied by the object style.
> Boolean **enableDirectionalFeather**
>
> When true, directional feathering is applied by the object style.
> Boolean **enableGradientFeather**
>
> When true, gradient feathering is applied by the object style.
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> String **toSource**()
>
> Creates a string that returns the ObjectStyleStrokeEffectsCategorySettings when run.
> ObjectStyleStrokeEffectsCategorySettings **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ObjectStyle

An object style object.

### Instance

> _Read Only_
>
> ObjectExportOption **objectExportOptions**
>
> Object export options.
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
> Fill transparency configuration used by the ObjectStyle.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Content transparency configuration for the ObjectStyle.
> _Read Only_
>
> ObjectStyleObjectEffectsCategorySettings **objectEffectsEnablingSettings**
>
> Object effects enabling configuration.
> _Read Only_
>
> ObjectStyleStrokeEffectsCategorySettings **strokeEffectsEnablingSettings**
>
> Stroke effects enabling configuration.
> _Read Only_
>
> ObjectStyleFillEffectsCategorySettings **fillEffectsEnablingSettings**
>
> Fill effects enabling configuration.
> _Read Only_
>
> ObjectStyleContentEffectsCategorySettings **contentEffectsEnablingSettings**
>
> Content effects enabling configuration.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the ObjectStyle.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the ObjectStyle (a Document, Application or ObjectStyleGroup).
> _Read Only_
>
> Number **index**
>
> Position of the ObjectStyle inside its containing object.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> _Read Only_
>
> ObjectStyleExportTagMaps **objectStyleExportTagMaps**
>
> Object style export tag maps collection.
> _Read Only_
>
> Preferences **preferences**
>
> Preferences object collection.
> Boolean **emitCss**
>
> Emits CSS.
> TransformAttributeOption **transformAttributeOptions**
>
> Layout attribute options used for any page item.
> Boolean **enableTransformAttributes**
>
> When true, Dimension and Position attributes are enabled.
> Boolean **includeClass**
>
> When true, a class attribute is generated for the style.
> Boolean **enableTextFrameAutoSizingOptions**
>
> When true, auto-sizing text frame options are applied by the object style.
> Boolean **enableTextFrameColumnRuleOptions**
>
> Enables the object style category for text frame column rule options.
> Boolean **enableExportTagging**
>
> When true, epub tag and class data are applied by the object style.
> Boolean **enableObjectExportAltTextOptions**
>
> When true, alt text export options are applied by the object style.
> Boolean **enableObjectExportTaggedPdfOptions**
>
> When true, tagged pdf export options are applied by the object style.
> Boolean **enableObjectExportEpubOptions**
>
> When true, epub export options are applied by the object style.
> Mixed **basedOn**
>
> Style used as this style's base. Can return: ObjectStyle or String.
> String **name**
>
> ObjectStyle name.
> ParagraphStyle **appliedParagraphStyle**
>
> Paragraph style assigned to the text. Can also accept: String.
> Boolean **applyNextParagraphStyle**
>
> When true, paragraph styles are applied through Next Paragraph Style settings, starting with the Next Paragraph Style set in the paragraph style linked to the object style (if any).
> Boolean **enableFill**
>
> When true, a fill is applied by the object style.
> Boolean **enableStroke**
>
> When true, a stroke is applied by the object style.
> Boolean **enableParagraphStyle**
>
> When true, a paragraph style is applied by the object style.
> Boolean **enableTextFrameGeneralOptions**
>
> When true, general text frame options are applied by the object style.
> Boolean **enableTextFrameBaselineOptions**
>
> When true, baseline text frame options are applied by the object style.
> Boolean **enableStoryOptions**
>
> When true, story options are applied by the object style.
> Boolean **enableTextWrapAndOthers**
>
> When true, text wrap, contour, and non-printing settings are applied by the object style.
> Boolean **enableAnchoredObjectOptions**
>
> When true, an anchored object setting is applied by the object style.
> Swatch **fillColor**
>
> Swatch applied to the ObjectStyle fill (color, gradient, tint, or mixed ink). . Can also accept: String.
> Number **fillTint**
>
> Tint percent for the ObjectStyle's fill color. (Use 0 through 100 for a tint percent; use -1 for the inherited or overridden value.)
> Boolean **overprintFill**
>
> When true, the ObjectStyle's fill color overprints underlying objects. When false, the fill color knocks out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, applied to the ObjectStyle.
> Number **miterLimit**
>
> Ratio limit between stroke width and miter length before a miter (pointed) join changes to a bevel (squared-off) join.
> EndCap **endCap**
>
> End shape used by an open path.
> EndJoin **endJoin**
>
> Corner join used by the ObjectStyle.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Swatch applied to the ObjectStyle stroke (color, gradient, tint, or mixed ink). Can also accept: String.
> Number **strokeTint**
>
> Tint percent for the object's stroke color. (Use 0 through 100 for a tint percent; use -1 for the inherited or overridden value.)
> Boolean **overprintStroke**
>
> When true, the ObjectStyle's stroke color overprints underlying objects. When false, the stroke color knocks out the underlying colors.
> Swatch **gapColor**
>
> Swatch applied to the gap of a dashed, dotted, or striped stroke (color, gradient, tint, or mixed ink). For information, see stroke type.
> Number **gapTint**
>
> Gap color tint percentage. (Use 0 through 100 for a tint percent; use -1 for the inherited or overridden value.)
> Boolean **overprintGap**
>
> When true, the gap color overprints underlying colors. When false, the gap color knocks out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the ObjectStyle.
> Boolean **nonprinting**
>
> When true, the ObjectStyle is excluded from printing.
> Number **gradientFillAngle**
>
> Linear gradient angle applied to the ObjectStyle fill. (Range: -180 to 180)
> Number **gradientStrokeAngle**
>
> Linear gradient angle applied to the ObjectStyle stroke. (Range: -180 to 180)
> TextFramePreference **textFramePreferences**
>
> Text frame preference configuration.
> BaselineFrameGridOption **baselineFrameGridOptions**
>
> Baseline frame grid option configuration.
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Anchored object configuration.
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties defining default formatting for text wrapping around objects.
> StoryPreference **storyPreferences**
>
> Story preference configuration.
> CornerOptions **topLeftCornerOption**
>
> Controls the top left corner form on rectangular shapes and all corners on non-rectangular shapes. Note: corner option differs from end join because corner options support a radius, while rounded or beveled end join effects depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Controls the top right corner form on rectangular shapes.
> CornerOptions **bottomLeftCornerOption**
>
> Controls the bottom left corner form on rectangular shapes.
> CornerOptions **bottomRightCornerOption**
>
> Controls the bottom right corner form on rectangular shapes.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the top left rectangular corner effect and each non-rectangular corner effect.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the top right rectangular corner effect.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the bottom left rectangular corner effect.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the bottom right rectangular corner effect.
> FrameFittingOption **frameFittingOptions**
>
> Frame fitting option applied to placed or pasted content. It can apply to a frame, object style, document, or the application.
> Boolean **enableFrameFittingOptions**
>
> When true, frame fitting options are applied by the object style.
> Boolean **enableStrokeAndCornerOptions**
>
> When true, stroke options and corner options are applied by the object style.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the ObjectStyle.
> Number **leftArrowHeadScale**
>
> Scale applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale applied to the arrowhead at the path end. (Range: 1 to 1000)
> Boolean **enableTextFrameFootnoteOptions**
>
> Enables the object style category for text frame footnote options.
> String **label**
>
> Accepts any string value.
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> Boolean **setDimensionAttributeState**( DimensionAttributes **whichAttributes**, Boolean **attributeState** )
>
> Changes the selected dimension attribute state to enabled or disabled.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DimensionAttributes | whichAttributes | Dimension attributes to enable or disable. |
| Boolean | attributeState | Attribute state to apply; true enables the attributes and false disables them. |

> Boolean **setPositionAttributeState**( PositionAttributes **whichAttributes**, Boolean **attributeState** )
>
> Changes the selected position attribute state to enabled or disabled.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PositionAttributes | whichAttributes | Position attributes to enable or disable. |
| Boolean | attributeState | Attribute state to apply; true enables the attributes and false disables them. |

> ObjectStyle **duplicate**()
>
> Makes a duplicate ObjectStyle.
> ObjectStyle **move**( LocationOptions **to**, Mixed **reference** )
>
> Moves the ObjectStyle to the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | New placement relative to the reference object or inside the container object. |
| Mixed | reference | Reference object. Note: required when the to parameter is before or after. Accepts: ObjectStyle, ObjectStyleGroup, Document or Application. (Optional) |

> **remove**( ObjectStyle **replacingWith** )
>
> Removes the style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | replacingWith | Style used instead of the deleted style. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the label to the value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Reads the label value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **toSource**()
>
> Creates a string that returns the ObjectStyle when run.
> ObjectStyle **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ObjectStyles

Object style collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held in the collection.

### Methods

> ObjectStyle **add**( Object **withProperties** )
>
> Creates an ObjectStyle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new ObjectStyle. (Optional) |

> Number **count**()
>
> Shows how many elements the ObjectStyle contains.
> ObjectStyle **item**( Mixed **index** )
>
> Gets the ObjectStyle matching the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> ObjectStyle **itemByName**( String **name** )
>
> Gets the ObjectStyle with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> ObjectStyle **itemByID**( Number **id** )
>
> Gets the ObjectStyle with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> ObjectStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ObjectStyles in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | ObjectStyle, index, or name at the range start. Accepts: ObjectStyle, Long Integer or String. |
| Mixed | to | ObjectStyle, index, or name at the range end. Accepts: ObjectStyle, Long Integer or String. |

> ObjectStyle **firstItem**()
>
> Gets the first ObjectStyle in the collection.
> ObjectStyle **lastItem**()
>
> Gets the final ObjectStyle in the collection.
> ObjectStyle **middleItem**()
>
> Gets the middle ObjectStyle in the collection.
> ObjectStyle **previousItem**( ObjectStyle **obj** )
>
> Gets the ObjectStyle whose index comes before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | obj | Index of the ObjectStyle after the target ObjectStyle. |

> ObjectStyle **nextItem**( ObjectStyle **obj** )
>
> Gets the ObjectStyle whose index comes after the supplied ObjectStyle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | obj | ObjectStyle placed before the target ObjectStyle. |

> ObjectStyle **anyItem**()
>
> Gets any ObjectStyle in the collection.
> ObjectStyle **everyItem**()
>
> Gets every ObjectStyle in the collection.
> String **toSource**()
>
> Creates a string that returns the ObjectStyle when run.
> ObjectStyle **[]**( Number **index** )
>
> Gets the ObjectStyle at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## ObjectTypes

Options for object types.

### Class

> _Read Only_
>
> Number `ALL_FRAMES_TYPE` = 1178682995
>
> Every frame type.
> _Read Only_
>
> Number `TEXT_FRAMES_TYPE` = 1179928178
>
> Text-frame type.
> _Read Only_
>
> Number `GRAPHIC_FRAMES_TYPE` = 1179076211
>
> Graphics-frame type.
> _Read Only_
>
> Number `UNASSIGNED_FRAMES_TYPE` = 1179993715
>
> Unassigned-frame type.

## OpacityGradientStop

An opacity gradient stop object.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the OpacityGradientStop (a GradientFeatherSetting or FindChangeGradientFeatherSetting).
> _Read Only_
>
> Number **index**
>
> Position of the OpacityGradientStop inside its containing object.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Number **opacity**
>
> Opacity value for the opacity gradient stop, expressed as a percentage. (Range: 0 to 100)
> Number **location**
>
> Position for the opacity gradient stop on the OpacityGradientStop scale, in percent. (Range: 0 to 100)
> Number **midpoint**
>
> Mid-point for the opacity gradient stop on the OpacityGradientStop scale, in percent. (Range: 13 to 87)
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> **remove**()
>
> Removes the OpacityGradientStop.
> String **toSource**()
>
> Creates a string that returns the OpacityGradientStop when run.
> OpacityGradientStop **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## OpacityGradientStops

Opacity gradient stop collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> OpacityGradientStop **add**( Object **withProperties** )
>
> Adds a new OpacityGradientStop.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new OpacityGradientStop (Optional) |

> Number **count**()
>
> Reports how many elements the OpacityGradientStop collection contains.
> OpacityGradientStop **item**( Mixed **index** )
>
> Gets the OpacityGradientStop for the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> OpacityGradientStop **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the OpacityGradientStops contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | OpacityGradientStop, index, or name that starts the range. Can accept: OpacityGradientStop, Long Integer or String. |
| Mixed | to | OpacityGradientStop, index, or name that ends the range. Can accept: OpacityGradientStop, Long Integer or String. |

> OpacityGradientStop **firstItem**()
>
> Gets the collection's first OpacityGradientStop.
> OpacityGradientStop **lastItem**()
>
> Gets the collection's last OpacityGradientStop.
> OpacityGradientStop **middleItem**()
>
> Gets the collection's middle OpacityGradientStop.
> OpacityGradientStop **previousItem**( OpacityGradientStop **obj** )
>
> Gets the OpacityGradientStop positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OpacityGradientStop | obj | Index for the OpacityGradientStop that comes after the wanted OpacityGradientStop. |

> OpacityGradientStop **nextItem**( OpacityGradientStop **obj** )
>
> Gets the OpacityGradientStop positioned after the supplied OpacityGradientStop in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OpacityGradientStop | obj | OpacityGradientStop whose index is immediately before the wanted OpacityGradientStop. |

> OpacityGradientStop **anyItem**()
>
> Gets any OpacityGradientStop from the collection.
> OpacityGradientStop **everyItem**()
>
> Gets every OpacityGradientStop from the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the OpacityGradientStop.
> OpacityGradientStop **[]**( Number **index** )
>
> Gets the OpacityGradientStop for the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
