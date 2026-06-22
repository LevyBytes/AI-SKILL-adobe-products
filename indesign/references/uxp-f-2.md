# Find Change Drop Shadow Setting, Find Change Feather Setting, Find Change Fill Transparency Setting, Find Change Glyph Option ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FindChangeDropShadowSetting — Instance; FindChangeFeatherSetting — Instance; FindChangeFillTransparencySetting — Instance; FindChangeGlyphOption; FindChangeGradientFeatherSetting; FindChangeGrepOption; FindChangeInnerGlowSetting; FindChangeInnerShadowSetting.

## FindChangeDropShadowSetting — Instance

> _Read Only_
>
> Boolean **isValid**
>
> Indicates true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for this FindChangeDropShadowSetting (FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
> _Read Only_
>
> Events **events**
>
> Event collection attached to this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection attached to this object.
> Mixed **distance**
>
> Distance from the item to its shadow. Return types: Unit (0 - 1000 points) or NothingEnum enumerator.
> Mixed **angle**
>
> Angle used to cast the shadow. Return types: Real (-180 - 180) or NothingEnum enumerator.
> Mixed **mode**
>
> Shadow mode. Return types: ShadowMode enumerator or NothingEnum enumerator.
> Mixed **blendMode**
>
> Blend mode used by the drop shadow effect. Return types: BlendMode enumerator or NothingEnum enumerator.
> Mixed **opacity**
>
> Drop shadow opacity percentage. (Range: 0 to 100). Return types: Real (0 - 100) or NothingEnum enumerator.
> Mixed **xOffset**
>
> Horizontal drop shadow offset. Unit-based limits: points: -1000 to 1000; picas: -83p4 to 83p4; inches: -13.8889 to 13.8889; mm: -352.778 to 352.778; cm: -35.277 to 35.277; ciceros: -78c2.389 to 78c2.389. Return types: Unit (-1000 - 1000 points) or NothingEnum enumerator.
> Mixed **yOffset**
>
> Vertical drop shadow offset. Unit-based limits: points: -1000 to 1000; picas: -83p4 to 83p4; inches: -13.8889 to 13.8889; mm: -352.778 to 352.778; cm: -35.277 to 35.277; ciceros: -78c2.389 to 78c2.389. Return types: Unit (-1000 - 1000 points) or NothingEnum enumerator.
> Mixed **size**
>
> Blur radius for the drop shadow, measured in pixels. Unit-based limits: points: 0 to 144; picas: 0p0 to 12p0; inches: 0 to 2; mm: 0 to 50.08; cm: 0 to 5.08; ciceros: 0c0 to 11c3.128. Return types: Unit (0 - 144 points) or NothingEnum enumerator.
> Mixed **effectColor**
>
> Drop shadow color value. Accepted forms include an array of color values or a swatch (color, gradient, tint, or mixed ink). Array values are interpreted by color mode: RGB uses [R,G,B] with three values from 0 to 255; CMYK uses [C,M,Y,K] with four percentage values from 0 to 100; LAB uses [L,A,B] with L from 0 to 100 and A and B from -128 to 127. Return types: Swatch or NothingEnum enumerator.
> Mixed **noise**
>
> Noise percentage applied to the shadow. (Range: 0 to 100). Return types: Real (0 - 100) or NothingEnum enumerator.
> Mixed **spread**
>
> Percentage of blur width used to spread the drop shadow footprint and reduce blur radius. (Range: 0 to 100). Return types: Real (0 - 100) or NothingEnum enumerator.
> Mixed **useGlobalLight**
>
> True means the global light angle is used. Return types: Boolean or NothingEnum enumerator.
> Mixed **knockedOut**
>
> True means the layer knocks out the drop shadow. Return types: Boolean or NothingEnum enumerator.
> Mixed **honorOtherEffects**
>
> True means non-shadow effects are included when calculating the drop shadow. Return types: Boolean or NothingEnum enumerator.
> Object **properties**
>
> Allows multiple properties to be assigned at once.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, recreates the FindChangeDropShadowSetting.
> FindChangeDropShadowSetting **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type name. |
| Mixed | handler | Handler for the event. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type name. |
| Mixed | handler | Registered handler for the event. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## FindChangeFeatherSetting — Instance

> _Read Only_
>
> Boolean **isValid**
>
> Indicates true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for this FindChangeFeatherSetting (FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
> _Read Only_
>
> Events **events**
>
> Event collection attached to this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection attached to this object.
> Mixed **mode**
>
> Feather mode value. Return types: FeatherMode enumerator or NothingEnum enumerator.
> Mixed **width**
>
> Feather width. Unit-based limits: points: 0 to 1000; picas: 0 to 83p4; inches: 0 to 13.8889; mm: 0 to 352.778; cm: 0 to 35.277; ciceros: 0 to 78c2.389. Return types: Unit (0 - 1000 points) or NothingEnum enumerator.
> Mixed **cornerType**
>
> Corner effect used by the feather. Return types: FeatherCornerType enumerator or NothingEnum enumerator.
> Mixed **noise**
>
> Noise percentage applied to the feather. (Range: 0 to 100). Return types: Real (0 - 100) or NothingEnum enumerator.
> Mixed **chokeAmount**
>
> Choke percentage for the feather, measured against feather width. (Range: 0 to 100). Return types: Real (0 - 100) or NothingEnum enumerator.
> Object **properties**
>
> Allows multiple properties to be assigned at once.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, recreates the FindChangeFeatherSetting.
> FindChangeFeatherSetting **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type name. |
| Mixed | handler | Handler for the event. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type name. |
| Mixed | handler | Registered handler for the event. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## FindChangeFillTransparencySetting — Instance

> _Read Only_
>
> FindChangeBlendingSetting **blendingSettings**
>
> Controls for blending mode behavior.
> _Read Only_
>
> FindChangeDropShadowSetting **dropShadowSettings**
>
> Controls that apply to the drop shadow effect.
> _Read Only_
>
> FindChangeFeatherSetting **featherSettings**
>
> Controls for the feather effect.
> _Read Only_
>
> FindChangeInnerShadowSetting **innerShadowSettings**
>
> Controls assigned to the inner shadow effect.
> _Read Only_
>
> FindChangeOuterGlowSetting **outerGlowSettings**
>
> Controls assigned to the outer glow effect.
> _Read Only_
>
> FindChangeInnerGlowSetting **innerGlowSettings**
>
> Controls assigned to the inner glow effect.
> _Read Only_
>
> FindChangeBevelAndEmbossSetting **bevelAndEmbossSettings**
>
> Controls for the bevel and emboss effect.
> _Read Only_
>
> FindChangeSatinSetting **satinSettings**
>
> Controls for the satin effect.
> _Read Only_
>
> FindChangeDirectionalFeatherSetting **directionalFeatherSettings**
>
> Controls for the directional feather effect.
> _Read Only_
>
> FindChangeGradientFeatherSetting **gradientFeatherSettings**
>
> Controls for the gradient feather effect.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for FindChangeFillTransparencySetting; it is a FindObjectPreference or ChangeObjectPreference.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the FindChangeFillTransparencySetting.
> FindChangeFillTransparencySetting **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Event handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## FindChangeGlyphOption

Options for find/change glyph handling.

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
> Parent object for FindChangeGlyphOption; it is a Application.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Boolean **searchBackwards**
>
> When true, the search runs backward.
> Boolean **includeLockedStoriesForFind**
>
> When true, the find query also checks locked stories.
> Boolean **includeLockedLayersForFind**
>
> When true, the find query also checks locked layers.
> Boolean **includeHiddenLayers**
>
> When true, the find/change query also checks hidden layers.
> Boolean **includeMasterPages**
>
> When true, the find/change query also checks master pages.
> Boolean **includeFootnotes**
>
> When true, the find/change query also checks footnotes.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the FindChangeGlyphOption.
> FindChangeGlyphOption **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Event handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## FindChangeGradientFeatherSetting

Controls for the gradient feather effect.

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
> Parent object for FindChangeGradientFeatherSetting; it is a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting.
> _Read Only_
>
> OpacityGradientStops **opacityGradientStops**
>
> Collection containing opacity gradient stops.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Mixed **applied**
>
> When true, the gradient feather effect is active. Return forms: Boolean or NothingEnum enumerator.
> Mixed **type**
>
> Gradient type value. Return forms: GradientType enumerator or NothingEnum enumerator.
> Mixed **angle**
>
> Angle used for the gradient feather. Return forms: Real (-180 - 180) or NothingEnum enumerator.
> Mixed **length**
>
> Length for an axial gradient, or radius for a radial gradient. Return forms: Unit or NothingEnum enumerator.
> Mixed **gradientStart**
>
> Fill position for the center point of a radial gradient or the starting point of a linear gradient, expressed as page coordinates in the format [x, y]. Return forms: Array of 2 Units or NothingEnum enumerator.
> Mixed **hiliteAngle**
>
> Highlight angle for the radial gradient feather. Return forms: Real or NothingEnum enumerator.
> Mixed **hiliteLength**
>
> Highlight length for the radial gradient feather. Return forms: Unit or NothingEnum enumerator.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the FindChangeGradientFeatherSetting.
> FindChangeGradientFeatherSetting **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Event handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## FindChangeGrepOption

Options for find/change grep handling.

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
> Parent object for FindChangeGrepOption; it is a Application.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Boolean **searchBackwards**
>
> When true, the search runs backward.
> Boolean **includeLockedStoriesForFind**
>
> When true, the find query also checks locked stories.
> Boolean **includeLockedLayersForFind**
>
> When true, the find query also checks locked layers.
> Boolean **includeHiddenLayers**
>
> When true, the find/change query also checks hidden layers.
> Boolean **includeMasterPages**
>
> When true, the find/change query also checks master pages.
> Boolean **includeFootnotes**
>
> When true, the find/change query also checks footnotes.
> Boolean **kanaSensitive**
>
> When true, matches are limited to text with the specified kana type.
> Boolean **widthSensitive**
>
> When true, matches are limited to text with the specified character width.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the FindChangeGrepOption.
> FindChangeGrepOption **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Event handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## FindChangeInnerGlowSetting

Controls for the inner glow effect.

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
> Parent object for FindChangeInnerGlowSetting; it is a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Mixed **applied**
>
> When true, the inner glow effect is active. Return forms: Boolean or NothingEnum enumerator.
> Mixed **blendMode**
>
> Blending mode used by the inner glow effect. Return forms: BlendMode enumerator or NothingEnum enumerator.
> Mixed **opacity**
>
> Inner glow opacity, expressed as a percentage. (Range: 0 to 100). Return forms: Real (0 - 100) or NothingEnum enumerator.
> Mixed **noise**
>
> Noise amount added to the inner glow, expressed as a percentage. (Range: 0 to 100). Return forms: Real (0 - 100) or NothingEnum enumerator.
> Mixed **effectColor**
>
> Inner glow color value. Inputs may be a swatch (color, gradient, tint, or mixed ink) or a numeric color-value array. Array rules by mode: RGB: 3 components, 0 to 255, ordered [R,G,B]; CMYK: 4 percentage components, 0 to 100, ordered [C,M,Y,K]; LAB: [L,A,B], with L at 0 to 100 and A/B at -128 to 127. Return forms: Swatch or NothingEnum enumerator.
> Mixed **technique**
>
> Technique selected for the inner glow. Return forms: GlowTechnique enumerator or NothingEnum enumerator.
> Mixed **spread**
>
> Spread amount, measured as a percentage of the inner glow size. (Range: 0 to 100). Return forms: Real (0 - 100) or NothingEnum enumerator.
> Mixed **size**
>
> Inner glow size value. Return forms: Unit (0 - 144 points) or NothingEnum enumerator.
> Mixed **source**
>
> Light source used for the inner glow effect. Return forms: InnerGlowSource enumerator or NothingEnum enumerator.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the FindChangeInnerGlowSetting.
> FindChangeInnerGlowSetting **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Event handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## FindChangeInnerShadowSetting

Controls for the inner shadow effect.

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
> Parent object for FindChangeInnerShadowSetting; it is a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Mixed **xOffset**
>
> Horizontal shadow offset. Return forms: Unit (-1000 - 1000 points) or NothingEnum enumerator.
> Mixed **yOffset**
>
> Vertical shadow offset. Return forms: Unit (-1000 - 1000 points) or NothingEnum enumerator.
> Mixed **applied**
>
> When true, the inner shadow effect is active. Return forms: Boolean or NothingEnum enumerator.
> Mixed **effectColor**
>
> Inner shadow color value. Inputs may be a swatch (color, gradient, tint, or mixed ink) or a numeric color-value array. Array rules by mode: RGB: 3 components, 0 to 255, ordered [R,G,B]; CMYK: 4 percentage components, 0 to 100, ordered [C,M,Y,K]; LAB: [L,A,B], with L at 0 to 100 and A/B at -128 to 127. Return forms: Swatch or NothingEnum enumerator.
> Mixed **blendMode**
>
> Blending mode used by the inner shadow effect. Return forms: BlendMode enumerator or NothingEnum enumerator.
> Mixed **opacity**
>
> Inner shadow opacity, expressed as a percentage. (Range: 0 to 100). Return forms: Real (0 - 100) or NothingEnum enumerator.
> Mixed **angle**
>
> Angle used to cast the inner shadow. (Range: -360 to 360). Return forms: Real (-180 - 180) or NothingEnum enumerator.
> Mixed **distance**
>
> Distance from the FindChangeInnerShadowSetting to the shadow. Return forms: Unit (0 - 1000 points) or NothingEnum enumerator.
> Mixed **useGlobalLight**
>
> When true, the global light angle supplies the lighting direction. Return forms: Boolean or NothingEnum enumerator.
> Mixed **chokeAmount**
>
> Choke amount for the inner shadow, measured as a percentage of shadow size. (Range: 0 to 100). Return forms: Real (0 - 100) or NothingEnum enumerator.
> Mixed **size**
>
> Inner shadow size value. Return forms: Unit (0 - 144 points) or NothingEnum enumerator.
> Mixed **noise**
>
> Noise amount added to the shadow, expressed as a percentage. (Range: 0 to 100). Return forms: Real (0 - 100) or NothingEnum enumerator.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the FindChangeInnerShadowSetting.
> FindChangeInnerShadowSetting **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Event handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
