# Find Change Object Option, Find Change Outer Glow Setting, Find Change Satin Setting, Find Change Stroke Transparency Setting ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FindChangeObjectOption; FindChangeOuterGlowSetting; FindChangeSatinSetting; FindChangeStrokeTransparencySetting; FindChangeTextOption; FindChangeTransliterateCharacterTypes; FindChangeTransliterateOption; FindChangeTransparencySetting — Instance; FindColorPreference.

## FindChangeObjectOption

Options for find/change object handling.

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
> Parent object for FindChangeObjectOption; it is a Application.
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
> ObjectTypes **objectType**
>
> Object type value.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the FindChangeObjectOption.
> FindChangeObjectOption **getElements**()
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

## FindChangeOuterGlowSetting

Controls for the outer glow effect.

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
> Parent object for FindChangeOuterGlowSetting; it is a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting.
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
> When true, the outer glow effect is active. Return forms: Boolean or NothingEnum enumerator.
> Mixed **blendMode**
>
> Blending mode used by the outer glow effect. Return forms: BlendMode enumerator or NothingEnum enumerator.
> Mixed **opacity**
>
> Outer glow opacity, expressed as a percentage. (Range: 0 to 100). Return forms: Real (0 - 100) or NothingEnum enumerator.
> Mixed **noise**
>
> Noise amount added to the outer glow, expressed as a percentage. (Range: 0 to 100). Return forms: Real (0 - 100) or NothingEnum enumerator.
> Mixed **effectColor**
>
> Outer glow color value. Inputs may be a swatch (color, gradient, tint, or mixed ink) or a numeric color-value array. Array rules by mode: RGB: 3 components, 0 to 255, ordered [R,G,B]; CMYK: 4 percentage components, 0 to 100, ordered [C,M,Y,K]; LAB: [L,A,B], with L at 0 to 100 and A/B at -128 to 127. Return forms: Swatch or NothingEnum enumerator.
> Mixed **technique**
>
> Technique selected for the outer glow. Return forms: GlowTechnique enumerator or NothingEnum enumerator.
> Mixed **spread**
>
> Spread amount, measured as a percentage of the outer glow size. (Range: 0 to 100). Return forms: Real (0 - 100) or NothingEnum enumerator.
> Mixed **size**
>
> Outer glow size value. Return forms: Unit (0 - 144 points) or NothingEnum enumerator.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the FindChangeOuterGlowSetting.
> FindChangeOuterGlowSetting **getElements**()
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

## FindChangeSatinSetting

Controls for the satin effect.

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
> Parent object for FindChangeSatinSetting; it is a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting.
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
> When true, the satin effect is active. Return forms: Boolean or NothingEnum enumerator.
> Mixed **effectColor**
>
> Satin effect color value. Valid inputs include a swatch; swatch kinds include color, gradient, tint, or mixed ink. A color library color and a hex value are also valid, as is a numeric color-value array. Array rules by mode: RGB: 3 components, 0 to 255, ordered [R,G,B]; CMYK: 4 percentage components, 0 to 100, ordered [C,M,Y,K]; LAB: [L,A,B], with L at 0 to 100 and A/B at -128 to 127; HSB: [H,S,B], with H at 0 to 360 and S/B percentages at 0 to 100. Return forms: Swatch or NothingEnum enumerator.
> Mixed **blendMode**
>
> Blending mode used by the satin effect. Return forms: BlendMode enumerator or NothingEnum enumerator.
> Mixed **opacity**
>
> Satin effect opacity, expressed as a percentage. (Range: 0 to 100). Return forms: Real (0 - 100) or NothingEnum enumerator.
> Mixed **angle**
>
> Light angle used by the satin effect. (Range: -360 to 360). Return forms: Real (-180 - 180) or NothingEnum enumerator.
> Mixed **distance**
>
> Distance in pixels from the FindChangeSatinSetting to the satin effect. Return forms: Unit (0 - 1000 points) or NothingEnum enumerator.
> Mixed **size**
>
> Width in pixels for the satin effect. Return forms: Unit (0 - 144 points) or NothingEnum enumerator.
> Mixed **invertEffect**
>
> When true, the satin effect is inverted. Return forms: Boolean or NothingEnum enumerator.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the FindChangeSatinSetting.
> FindChangeSatinSetting **getElements**()
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

## FindChangeStrokeTransparencySetting

Transparency controls for the parent object's stroke.

### Instance

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
> Parent object for FindChangeStrokeTransparencySetting; it is a FindObjectPreference or ChangeObjectPreference.
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
> Builds a string that, when executed, returns the FindChangeStrokeTransparencySetting.
> FindChangeStrokeTransparencySetting **getElements**()
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

## FindChangeTextOption

Options for find/change text handling.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier points to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for this FindChangeTextOption, an Application.
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
> Boolean **searchBackwards**
>
> When true, the search runs in the reverse direction.
> Boolean **includeLockedStoriesForFind**
>
> When true, locked stories are part of the find query.
> Boolean **includeLockedLayersForFind**
>
> When true, locked layers are considered by the find query.
> Boolean **includeHiddenLayers**
>
> When true, hidden layers participate in the find/change query.
> Boolean **includeMasterPages**
>
> When true, master pages are included in the find/change query.
> Boolean **includeFootnotes**
>
> When true, footnotes are included in the find/change query.
> Boolean **wholeWord**
>
> When true, matching is limited to the full find text string; when false, strings containing that find text are also matched.
> Boolean **caseSensitive**
>
> When true, only strings whose capitalization matches the find text string are found; when false, case is ignored while matching.
> Boolean **kanaSensitive**
>
> When true, matches must use the specified kana type.
> Boolean **widthSensitive**
>
> When true, matches must use the specified character width.
> Boolean **ignoreKashidas**
>
> When true, kashidas are skipped during the find/change query.
> Boolean **ignoreDiacritics**
>
> When true, diacritics are skipped during the find/change query.
> Object **properties**
>
> Several properties can be assigned together through this property.

### Methods

> String **toSource**()
>
> Builds a string that returns this FindChangeTextOption when executed.
> FindChangeTextOption **getElements**()
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

## FindChangeTransliterateCharacterTypes

Options for find/change transliteration character types.

### Class

> _Read Only_
>
> Number `HALF_WIDTH_KATAKANA` = 1179154251
>
> Katakana in half-width form.
> _Read Only_
>
> Number `HALF_WIDTH_ROMAN_SYMBOLS` = 1179154258
>
> Roman symbols in half-width form.
> _Read Only_
>
> Number `FULL_WIDTH_HIRAGANA` = 1179023176
>
> Hiragana in full-width form.
> _Read Only_
>
> Number `FULL_WIDTH_KATAKANA` = 1179023179
>
> Katakana in full-width form.
> _Read Only_
>
> Number `FULL_WIDTH_ROMAN_SYMBOLS` = 1179023186
>
> Roman symbols in full-width form.
> _Read Only_
>
> Number `WESTERN_ARABIC_DIGITS` = 1463903337
>
> Western Arabic digit characters (0, 1, 2, 3, ...).
> _Read Only_
>
> Number `ARABIC_INDIC_DIGITS` = 1095328873
>
> Arabic Indic (hindi) digit characters.
> _Read Only_
>
> Number `FARSI_DIGITS` = 1684629089
>
> Digit characters used for Farsi.

## FindChangeTransliterateOption

Settings used for find/change transliteration.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier points to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for this FindChangeTransliterateOption, an Application.
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
> Boolean **searchBackwards**
>
> When true, the search runs in the reverse direction.
> Boolean **kanaSensitive**
>
> When true, matches must use the specified kana type.
> Boolean **widthSensitive**
>
> When true, matches must use the specified character width.
> Boolean **includeLockedStoriesForFind**
>
> When true, locked stories are part of the find query.
> Boolean **includeLockedLayersForFind**
>
> When true, locked layers are considered by the find query.
> Boolean **includeHiddenLayers**
>
> When true, hidden layers participate in the find/change query.
> Boolean **includeMasterPages**
>
> When true, master pages are included in the find/change query.
> Boolean **includeFootnotes**
>
> When true, footnotes are included in the find/change query.
> Boolean **wholeWord**
>
> When true, matching is limited to the full find text string; when false, strings containing that find text are also matched.
> Boolean **caseSensitive**
>
> When true, only strings whose capitalization matches the find text string are found; when false, case is ignored while matching.
> Object **properties**
>
> Several properties can be assigned together through this property.

### Methods

> String **toSource**()
>
> Builds a string that returns this FindChangeTransliterateOption when executed.
> FindChangeTransliterateOption **getElements**()
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

## FindChangeTransparencySetting — Instance

> _Read Only_
>
> FindChangeBlendingSetting **blendingSettings**
>
> Settings for blending mode.
> _Read Only_
>
> FindChangeDropShadowSetting **dropShadowSettings**
>
> Drop shadow effect settings.
> _Read Only_
>
> FindChangeFeatherSetting **featherSettings**
>
> Feather effect settings.
> _Read Only_
>
> FindChangeInnerShadowSetting **innerShadowSettings**
>
> Inner shadow effect settings.
> _Read Only_
>
> FindChangeOuterGlowSetting **outerGlowSettings**
>
> Outer glow effect settings.
> _Read Only_
>
> FindChangeInnerGlowSetting **innerGlowSettings**
>
> Inner glow effect settings.
> _Read Only_
>
> FindChangeBevelAndEmbossSetting **bevelAndEmbossSettings**
>
> Bevel and emboss effect settings.
> _Read Only_
>
> FindChangeSatinSetting **satinSettings**
>
> Satin effect settings.
> _Read Only_
>
> FindChangeDirectionalFeatherSetting **directionalFeatherSettings**
>
> Directional feather effect settings.
> _Read Only_
>
> FindChangeGradientFeatherSetting **gradientFeatherSettings**
>
> Gradient feather effect settings.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier points to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for this FindChangeTransparencySetting, either a FindObjectPreference or ChangeObjectPreference.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preference objects.
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
> Object **properties**
>
> Several properties can be assigned together through this property.

### Methods

> String **toSource**()
>
> Builds a string that returns this FindChangeTransparencySetting when executed.
> FindChangeTransparencySetting **getElements**()
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

## FindColorPreference

Preferences used when finding colors.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier points to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for this FindColorPreference, an Application.
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
> Mixed **findWhat**
>
> Color value to locate. Can return: Swatch or NothingEnum enumerator.
> Mixed **tint**
>
> Tint value to locate. Can return: Real (0 - 100) or NothingEnum enumerator.
> Mixed **tintLowerLimit**
>
> Lower tint bound to locate. Can return: Real (0 - 100) or NothingEnum enumerator.
> Mixed **tintUpperLimit**
>
> Upper tint bound to locate. Can return: Real (0 - 100) or NothingEnum enumerator.
> Object **properties**
>
> Several properties can be assigned together through this property.

### Methods

> String **toSource**()
>
> Builds a string that returns this FindColorPreference when executed.
> FindColorPreference **getElements**()
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
