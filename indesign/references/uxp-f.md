# Feather Corner Type, Feather Mode, Feather Setting, Feature Set Options ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FeatherCornerType; FeatherMode; FeatherSetting; FeatureSetOptions; FileNameVariablePreference; FillTransparencySetting; FindChangeBevelAndEmbossSetting — Instance; FindChangeBlendingSetting — Instance; FindChangeColorOption; FindChangeContentTransparencySetting — Instance; FindChangeDirectionalFeatherSetting — Instance.

## FeatherCornerType

Corner type choices.

### Class

> _Read Only_
>
> Number **SHARP** = 2020623201
>
> Gradient follows the object's outer edge exactly, including sharp corners.
> _Read Only_
>
> Number **ROUNDED** = 2020623202
>
> Feather radius rounds the corners.
> _Read Only_
>
> Number **DIFFUSION** = 2020623203
>
> Object edges transition from opaque to transparent.

## FeatherMode

Feathering switch choices.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Feathering is not applied.
> _Read Only_
>
> Number **STANDARD** = 2020623970
>
> Standard feathering is applied.

## FeatherSetting

Settings that control the feather effect.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Indicates true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for this FeatherSetting (TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
> FeatherMode **mode**
>
> Selected FeatherMode value.
> Measurement Unit (Number or String)=any **width**
>
> Feather width value. Unit-based limits: points: 0 to 1000; picas: 0 to 83p4; inches: 0 to 13.8889; mm: 0 to 352.778; cm: 0 to 35.277; ciceros: 0 to 78c2.389.
> FeatherCornerType **cornerType**
>
> Corner effect used by the feather.
> Number **noise**
>
> Noise percentage added to the feather. (Range: 0 to 100)
> Number **chokeAmount**
>
> Choke percentage, measured against the feather width. (Range: 0 to 100)
> Object **properties**
>
> Allows multiple properties to be assigned at once.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, recreates the FeatherSetting.
> FeatherSetting **getElements**()
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

## FeatureSetOptions

Choices for selecting a feature set.

### Class

> _Read Only_
>
> Number **ROMAN** = 1383034222
>
> Roman feature set and defaults are used.
> _Read Only_
>
> Number **JAPANESE** = 1247899758
>
> Japanese feature set and defaults are used.
> _Read Only_
>
> Number **RIGHTTOLEFT** = 1381265228
>
> R2L feature set is used.

## FileNameVariablePreference

Preferences applied to a file name variable.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Indicates true when the object specifier resolves to valid objects.
> _Read Only_
>
> TextVariable **parent**
>
> Parent object for this FileNameVariablePreference (TextVariable).
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
> String **textBefore**
>
> Text placed before the variable value. (Limit: 128 characters)
> Boolean **includePath**
>
> Includes the full file path when true.
> Boolean **includeExtension**
>
> Includes the file extension when true.
> String **textAfter**
>
> Text placed after the variable value. (Limit: 128 characters)
> Object **properties**
>
> Allows multiple properties to be assigned at once.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, recreates the FileNameVariablePreference.
> FileNameVariablePreference **getElements**()
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

## FillTransparencySetting

Fill transparency settings assigned to the parent object.

### Instance

> _Read Only_
>
> BlendingSetting **blendingSettings**
>
> Settings for blending modes.
> _Read Only_
>
> DropShadowSetting **dropShadowSettings**
>
> Settings for the drop shadow effect.
> _Read Only_
>
> FeatherSetting **featherSettings**
>
> Settings for the feather effect.
> _Read Only_
>
> InnerShadowSetting **innerShadowSettings**
>
> Settings for the inner shadow effect.
> _Read Only_
>
> OuterGlowSetting **outerGlowSettings**
>
> Settings for the outer glow effect.
> _Read Only_
>
> InnerGlowSetting **innerGlowSettings**
>
> Settings for the inner glow effect.
> _Read Only_
>
> BevelAndEmbossSetting **bevelAndEmbossSettings**
>
> Settings for the bevel and emboss effect.
> _Read Only_
>
> SatinSetting **satinSettings**
>
> Settings for the satin effect.
> _Read Only_
>
> DirectionalFeatherSetting **directionalFeatherSettings**
>
> Settings for the directional feather effect.
> _Read Only_
>
> GradientFeatherSetting **gradientFeatherSettings**
>
> Settings for the gradient feather effect.
> _Read Only_
>
> Boolean **isValid**
>
> Indicates true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for this FillTransparencySetting (PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, PageItemDefault or ObjectStyle).
> _Read Only_
>
> Preferences **preferences**
>
> Preference objects collection.
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
> Object **properties**
>
> Allows multiple properties to be assigned at once.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, recreates the FillTransparencySetting.
> FillTransparencySetting **getElements**()
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

## FindChangeBevelAndEmbossSetting — Instance

> _Read Only_
>
> Boolean **isValid**
>
> Indicates true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for this FindChangeBevelAndEmbossSetting (FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
> Mixed **applied**
>
> True means the bevel or emboss effect is active. Return types: Boolean or NothingEnum enumerator.
> Mixed **style**
>
> Bevel or emboss style value. Return types: BevelAndEmbossStyle enumerator or NothingEnum enumerator.
> Mixed **technique**
>
> Edge technique used by the bevel or emboss. Return types: BevelAndEmbossTechnique enumerator or NothingEnum enumerator.
> Mixed **depth**
>
> Bevel or emboss depth percentage. (Range: 0 to 1000). Return types: Real (0 - 1000) or NothingEnum enumerator.
> Mixed **direction**
>
> Bevel or emboss direction. Return types: BevelAndEmbossDirection enumerator or NothingEnum enumerator.
> Mixed **size**
>
> Bevel or emboss size. Return types: Unit (0 - 144 points) or NothingEnum enumerator.
> Mixed **soften**
>
> Softening amount in pixels. Return types: Unit (0 - 144 points) or NothingEnum enumerator.
> Mixed **angle**
>
> Light-source angle. (Range: -180 to 180). Return types: Real (-180 - 180) or NothingEnum enumerator.
> Mixed **altitude**
>
> Light-source altitude. (Range: 0 to 90). Return types: Real (0 - 100) or NothingEnum enumerator.
> Mixed **useGlobalLight**
>
> True means the global light source is used. Return types: Boolean or NothingEnum enumerator.
> Mixed **highlightColor**
>
> Highlight color value for the effect. Accepted forms include an array of color values, a hex value, a color library color, or a swatch (color, gradient, tint, or mixed ink). Array values are interpreted by color mode: RGB uses [R,G,B] with three values from 0 to 255; CMYK uses [C,M,Y,K] with four percentage values from 0 to 100; LAB uses [L,A,B] with L from 0 to 100 and A and B from -128 to 127; HSB uses [H,S,B] with H from 0 to 360 and S and B as percentages from 0 to 100. Return types: Swatch or NothingEnum enumerator.
> Mixed **highlightBlendMode**
>
> Blend mode for the highlight area of the effect. Return types: BlendMode enumerator or NothingEnum enumerator.
> Mixed **highlightOpacity**
>
> Highlight opacity percentage for the effect. (Range: 0 to 100). Return types: Real (0 - 100) or NothingEnum enumerator.
> Mixed **shadowColor**
>
> Shadow color value for the effect. Accepted forms include an array of color values, a hex value, a color library color, or a swatch (color, gradient, tint, or mixed ink). Array values are interpreted by color mode: RGB uses [R,G,B] with three values from 0 to 255; CMYK uses [C,M,Y,K] with four percentage values from 0 to 100; LAB uses [L,A,B] with L from 0 to 100 and A and B from -128 to 127; HSB uses [H,S,B] with H from 0 to 360 and S and B as percentages from 0 to 100. Return types: Swatch or NothingEnum enumerator.
> Mixed **shadowBlendMode**
>
> Blend mode for the shadow area of the effect. Return types: BlendMode enumerator or NothingEnum enumerator.
> Mixed **shadowOpacity**
>
> Shadow opacity percentage for the effect. (Range: 0 to 100). Return types: Real (0 - 100) or NothingEnum enumerator.
> Object **properties**
>
> Allows multiple properties to be assigned at once.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, recreates the FindChangeBevelAndEmbossSetting.
> FindChangeBevelAndEmbossSetting **getElements**()
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

## FindChangeBlendingSetting — Instance

> _Read Only_
>
> Boolean **isValid**
>
> Indicates true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for this FindChangeBlendingSetting (FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
> Mixed **blendMode**
>
> Controls how the base color blends with the FindChangeBlendingSetting color. Return types: BlendMode enumerator or NothingEnum enumerator.
> Mixed **opacity**
>
> Fill opacity percentage for the FindChangeBlendingSetting. (Range: 0 to 100). Return types: Real (0 - 100) or NothingEnum enumerator.
> Mixed **knockoutGroup**
>
> True means the FindChangeBlendingSetting acts as a knockout group. Return types: Boolean or NothingEnum enumerator.
> Mixed **isolateBlending**
>
> True limits blending to the group; false lets blending include all objects beneath the group. Return types: Boolean or NothingEnum enumerator.
> Object **properties**
>
> Allows multiple properties to be assigned at once.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, recreates the FindChangeBlendingSetting.
> FindChangeBlendingSetting **getElements**()
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

## FindChangeColorOption

Find/change settings for color.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Indicates true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for this FindChangeColorOption (Application).
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
> Boolean **includeLockedStoriesForFind**
>
> Includes locked stories in the find query when true.
> Boolean **includeLockedLayersForFind**
>
> Includes locked layers in the find query when true.
> Boolean **includeHiddenLayers**
>
> Includes hidden layers in the find/change query when true.
> Boolean **includeMasterPages**
>
> Includes master pages in the find/change query when true.
> Boolean **includeFootnotes**
>
> Includes footnotes in the find/change query when true.
> ObjectTypes **objectType**
>
> Object type selector.
> Object **properties**
>
> Allows multiple properties to be assigned at once.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, recreates the FindChangeColorOption.
> FindChangeColorOption **getElements**()
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

## FindChangeContentTransparencySetting — Instance

> _Read Only_
>
> FindChangeBlendingSetting **blendingSettings**
>
> Settings for blending modes.
> _Read Only_
>
> FindChangeDropShadowSetting **dropShadowSettings**
>
> Settings for the drop shadow effect.
> _Read Only_
>
> FindChangeFeatherSetting **featherSettings**
>
> Settings for the feather effect.
> _Read Only_
>
> FindChangeInnerShadowSetting **innerShadowSettings**
>
> Settings for the inner shadow effect.
> _Read Only_
>
> FindChangeOuterGlowSetting **outerGlowSettings**
>
> Settings for the outer glow effect.
> _Read Only_
>
> FindChangeInnerGlowSetting **innerGlowSettings**
>
> Settings for the inner glow effect.
> _Read Only_
>
> FindChangeBevelAndEmbossSetting **bevelAndEmbossSettings**
>
> Settings for the bevel and emboss effect.
> _Read Only_
>
> FindChangeSatinSetting **satinSettings**
>
> Settings for the satin effect.
> _Read Only_
>
> FindChangeDirectionalFeatherSetting **directionalFeatherSettings**
>
> Settings for the directional feather effect.
> _Read Only_
>
> FindChangeGradientFeatherSetting **gradientFeatherSettings**
>
> Settings for the gradient feather effect.
> _Read Only_
>
> Boolean **isValid**
>
> Indicates true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for this FindChangeContentTransparencySetting (FindObjectPreference or ChangeObjectPreference).
> _Read Only_
>
> Preferences **preferences**
>
> Preference objects collection.
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
> Object **properties**
>
> Allows multiple properties to be assigned at once.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, recreates the FindChangeContentTransparencySetting.
> FindChangeContentTransparencySetting **getElements**()
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

## FindChangeDirectionalFeatherSetting — Instance

> _Read Only_
>
> Boolean **isValid**
>
> Indicates true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for this FindChangeDirectionalFeatherSetting (FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
> Mixed **applied**
>
> True means the directional feather effect is active. Return types: Boolean or NothingEnum enumerator.
> Mixed **leftWidth**
>
> Left-side feather width in pixels for the FindChangeDirectionalFeatherSetting. Return types: Unit (0 - 1000 points) or NothingEnum enumerator.
> Mixed **rightWidth**
>
> Right-side feather width in pixels for the FindChangeDirectionalFeatherSetting. (Range: .2 to 250). Return types: Unit (0 - 1000 points) or NothingEnum enumerator.
> Mixed **topWidth**
>
> Top-side feather width in pixels for the FindChangeDirectionalFeatherSetting object. (Range: .2 to 250). Return types: Unit (0 - 1000 points) or NothingEnum enumerator.
> Mixed **bottomWidth**
>
> Bottom-side feather width in pixels for the FindChangeDirectionalFeatherSetting object. (Range: .2 to 250). Return types: Unit (0 - 1000 points) or NothingEnum enumerator.
> Mixed **chokeAmount**
>
> Choke percentage for the directional feather, measured against the feather width. (Range: 0 to 100). Return types: Real (0 - 100) or NothingEnum enumerator.
> Mixed **angle**
>
> Feather angle. (Range: 180 to -180). Return types: Real (-180 - 180) or NothingEnum enumerator.
> Mixed **followShapeMode**
>
> Shape-following algorithm used for the feather. Return types: FollowShapeModeOptions enumerator or NothingEnum enumerator.
> Mixed **noise**
>
> Noise percentage applied to the feather region. (Range: 0 to 100). Return types: Real (0 - 100) or NothingEnum enumerator.
> Object **properties**
>
> Allows multiple properties to be assigned at once.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, recreates the FindChangeDirectionalFeatherSetting.
> FindChangeDirectionalFeatherSetting **getElements**()
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
