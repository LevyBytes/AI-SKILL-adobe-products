# Dialog Row, Dialog Rows, Dialog, Dialogs ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: DialogRow; DialogRows; Dialog — Instance; Dialogs; DictionaryPreference; DigitsTypeOptions; DigpubArticleVersion; DigpubVersion; DimensionAttributes; DimensionsConstraints; DirectionalFeatherSetting; DisplayOrderOptions; DisplayPerformancePreference; DisplaySettingOptions; DisplaySetting.

## DialogRow

Borderless dialog row used to hold controls.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the DialogRow.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> DialogColumn **parent**
>
> Parent object for DialogRow; this value is a DialogColumn.
> _Read Only_
>
> Number **index**
>
> Position of the DialogRow inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection exposed on this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection exposed on this object.
> _Read Only_
>
> DialogColumns **dialogColumns**
>
> Dialog column collection for this object.
> _Read Only_
>
> Widgets **widgets**
>
> Widget collection for this object.
> _Read Only_
>
> TextEditboxes **textEditboxes**
>
> Text editbox collection for this object.
> _Read Only_
>
> IntegerEditboxes **integerEditboxes**
>
> Integer editbox collection for this object.
> _Read Only_
>
> MeasurementEditboxes **measurementEditboxes**
>
> Measurement editbox collection for this object.
> _Read Only_
>
> RealEditboxes **realEditboxes**
>
> Real number editbox collection for this object.
> _Read Only_
>
> AngleEditboxes **angleEditboxes**
>
> Angle editbox collection for this object.
> _Read Only_
>
> PercentEditboxes **percentEditboxes**
>
> Percent editbox collection for this object.
> _Read Only_
>
> IntegerComboboxes **integerComboboxes**
>
> Integer combobox collection for this object.
> _Read Only_
>
> MeasurementComboboxes **measurementComboboxes**
>
> Measurement combobox collection for this object.
> _Read Only_
>
> RealComboboxes **realComboboxes**
>
> Real number combobox collection for this object.
> _Read Only_
>
> AngleComboboxes **angleComboboxes**
>
> Angle combobox collection for this object.
> _Read Only_
>
> PercentComboboxes **percentComboboxes**
>
> Percent combobox collection for this object.
> _Read Only_
>
> CheckboxControls **checkboxControls**
>
> Checkbox control collection for this object.
> _Read Only_
>
> StaticTexts **staticTexts**
>
> Static text object collection for this object.
> _Read Only_
>
> Dropdowns **dropdowns**
>
> Dropdown collection for this object.
> _Read Only_
>
> BorderPanels **borderPanels**
>
> Border panel collection for this object.
> _Read Only_
>
> EnablingGroups **enablingGroups**
>
> Enabling group collection for this object.
> _Read Only_
>
> RadiobuttonGroups **radiobuttonGroups**
>
> Radiobutton group collection for this object.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that returns the DialogRow when executed.
> DialogRow **getElements**()
>
> Resolves the object specifier and produces an array of object references.
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
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## DialogRows

Collection containing dialog rows.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> DialogRow **add**( Object **withProperties** )
>
> Creates a DialogRow.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new DialogRow. (Optional) |

> Number **count**()
>
> Shows how many DialogRow elements the collection contains.
> DialogRow **item**( Mixed **index** )
>
> Gets the DialogRow identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Accepts Long Integer or String. |

> DialogRow **itemByID**( Number **id** )
>
> Gets the DialogRow with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> DialogRow **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the DialogRows that fall inside the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | DialogRow, index, or name at the range start. Can accept: DialogRow, Long Integer or String. |
| Mixed | to | DialogRow, index, or name at the range end. Can accept: DialogRow, Long Integer or String. |

> DialogRow **firstItem**()
>
> Gets the first DialogRow in this collection.
> DialogRow **lastItem**()
>
> Gets the last DialogRow in this collection.
> DialogRow **middleItem**()
>
> Gets the middle DialogRow in this collection.
> DialogRow **previousItem**( DialogRow **obj** )
>
> Gets the DialogRow whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DialogRow | obj | Index of the DialogRow after the wanted DialogRow. |

> DialogRow **nextItem**( DialogRow **obj** )
>
> Gets the DialogRow whose index comes immediately after the specified DialogRow in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DialogRow | obj | DialogRow whose index is before the wanted DialogRow. |

> DialogRow **anyItem**()
>
> Gets any DialogRow in this collection.
> DialogRow **everyItem**()
>
> Gets every DialogRow in this collection.
> String **toSource**()
>
> Builds a string that returns the DialogRow when executed.
> DialogRow **[]**( Number **index** )
>
> Gets the DialogRow at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Dialog — Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Dialog.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for Dialog; this value is an Application.
> _Read Only_
>
> Number **index**
>
> Position of the Dialog inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection exposed on this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection exposed on this object.
> _Read Only_
>
> DialogColumns **dialogColumns**
>
> Dialog column collection for this object.
> Boolean **canCancel**
>
> When true, the dialog includes a Cancel button so users can close it without saving selections. When false, only an OK button appears and Cancel is omitted.
> String **name**
>
> Name assigned to the Dialog.
> String **label**
>
> String value that can be assigned to this property.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **destroy**()
>
> Destroys the dialog object. Note: Dialog objects stay in memory until destroyed or until the program quits.
> Boolean **show**()
>
> Shows the dialog.
> **insertLabel**( String **key**, String **value** )
>
> Stores the label as the value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Gets the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a string that returns the Dialog when executed.
> Dialog **getElements**()
>
> Resolves the object specifier and produces an array of object references.
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
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Dialogs

Collection containing dialogs.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> Dialog **add**( Object **withProperties** )
>
> Creates a Dialog.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new Dialog. (Optional) |

> Number **count**()
>
> Shows how many Dialog elements the collection contains.
> Dialog **item**( Mixed **index** )
>
> Gets the Dialog identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Accepts Long Integer or String. |

> Dialog **itemByName**( String **name** )
>
> Gets the Dialog with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Dialog **itemByID**( Number **id** )
>
> Gets the Dialog with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Dialog **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Dialogs that fall inside the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Dialog, index, or name at the range start. Can accept: Dialog, Long Integer or String. |
| Mixed | to | Dialog, index, or name at the range end. Can accept: Dialog, Long Integer or String. |

> Dialog **firstItem**()
>
> Gets the first Dialog in this collection.
> Dialog **lastItem**()
>
> Gets the last Dialog in this collection.
> Dialog **middleItem**()
>
> Gets the middle Dialog in this collection.
> Dialog **previousItem**( Dialog **obj** )
>
> Gets the Dialog whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Dialog | obj | Index of the Dialog after the wanted Dialog. |

> Dialog **nextItem**( Dialog **obj** )
>
> Gets the Dialog whose index comes immediately after the specified Dialog in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Dialog | obj | Dialog whose index is before the wanted Dialog. |

> Dialog **anyItem**()
>
> Gets any Dialog in this collection.
> Dialog **everyItem**()
>
> Gets every Dialog in this collection.
> String **toSource**()
>
> Builds a string that returns the Dialog when executed.
> Dialog **[]**( Number **index** )
>
> Gets the Dialog at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## DictionaryPreference

Preferences for user dictionaries.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for DictionaryPreference; this can be an Application or Document.
> _Read Only_
>
> Events **events**
>
> Event collection exposed on this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection exposed on this object.
> ComposeUsing **composition**
>
> Hyphenation exception list used while composing text.
> Boolean **mergeUserDictionary**
>
> When true, spelling and hyphenation exception lists from the external user dictionary are merged with the lists stored in the document.
> Boolean **recomposeWhenChanged**
>
> When compose using settings change, or when words are added to or removed from the user dictionary, true causes all stories to be recomposed.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that returns the DictionaryPreference when executed.
> DictionaryPreference **getElements**()
>
> Resolves the object specifier and produces an array of object references.
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
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## DigitsTypeOptions

Options for digit type.

### Class

> _Read Only_
>
> Number `DEFAULT_DIGITS` = 1684628581
>
> Digits: default style.
> _Read Only_
>
> Number `ARABIC_DIGITS` = 1684627826
>
> Digits: Arabic.
> _Read Only_
>
> Number `HINDI_DIGITS` = 1684629609
>
> Digits: Hindi.
> _Read Only_
>
> Number `FARSI_DIGITS` = 1684629089
>
> Digits: Farsi.
> _Read Only_
>
> Number `NATIVE_DIGITS` = 1684631137
>
> Digits: native style.
> _Read Only_
>
> Number `FULL_FARSI_DIGITS` = 1684629094
>
> Digits: full Farsi.
> _Read Only_
>
> Number `THAI_DIGITS` = 1684632680
>
> Digits: Thai.
> _Read Only_
>
> Number `LAO_DIGITS` = 1684630625
>
> Digits: Lao.
> _Read Only_
>
> Number `DEVANAGARI_DIGITS` = 1684628598
>
> Digits: Devanagari.
> _Read Only_
>
> Number `BENGALI_DIGITS` = 1684628069
>
> Digits: Bengali.
> _Read Only_
>
> Number `GURMUKHI_DIGITS` = 1684629357
>
> Digits: Gurmukhi.
> _Read Only_
>
> Number `GUJARATI_DIGITS` = 1684629354
>
> Digits: Gujarati.
> _Read Only_
>
> Number `ORIYA_DIGITS` = 1684631410
>
> Digits: Oriya.
> _Read Only_
>
> Number `TAMIL_DIGITS` = 1684632673
>
> Digits: Tamil.
> _Read Only_
>
> Number `TELUGU_DIGITS` = 1684632677
>
> Digits: Telugu.
> _Read Only_
>
> Number `KANNADA_DIGITS` = 1684630369
>
> Digits: Kannada.
> _Read Only_
>
> Number `MALAYALAM_DIGITS` = 1684630881
>
> Digits: Malayalam.
> _Read Only_
>
> Number `TIBETAN_DIGITS` = 1684632681
>
> Digits: Tibetan.
> _Read Only_
>
> Number `KHMER_DIGITS` = 1684630376
>
> Digits: Khmer.
> _Read Only_
>
> Number `BURMESE_DIGITS` = 1684628085
>
> Digits: Burmese.

## DigpubArticleVersion

Available values identify the plugin version and article version.

### Class

> _Read Only_
>
> Number **ALL** = 1634495520
>
> Includes plugin and article versions, ordered that way.
> _Read Only_
>
> Number **PLUGIN** = 1685090412
>
> Plugin version only.
> _Read Only_
>
> Number **ARTICLE** = 1685078390
>
> Article version only.

## DigpubVersion

Lists the version values that can be requested.

### Class

> _Read Only_
>
> Number **ALL** = 1634495520
>
> Returns all versions, ordered first by plugin, then by folio, then by plist.
> _Read Only_
>
> Number **PLUGIN** = 1685090412
>
> Plugin version only.
> _Read Only_
>
> Number **FOLIO** = 1685087862
>
> Folio version only.
> _Read Only_
>
> Number **PLIST** = 1685090422
>
> Plist version only.

## DimensionAttributes

Selects the dimension attribute to control.

### Class

> _Read Only_
>
> Number `WIDTH_ATTRIBUTE` = 1700226127
>
> Dimension width attribute.
> _Read Only_
>
> Number `HEIGHT_ATTRIBUTE` = 1699247183
>
> Dimension height attribute.
> _Read Only_
>
> Number `BOTH_HEIGHT_WIDTH_ATTRIBUTE` = 1700227170
>
> Dimension height and width attributes together.

## DimensionsConstraints

Constraints used by the object-based layout rule for dimensions.

### Class

> _Read Only_
>
> Number `FIXED_DIMENSION` = 1145267817
>
> Dimension stays fixed relative to the parent.
> _Read Only_
>
> Number `FLEXIBLE_DIMENSION` = 1145267820
>
> Dimension may change relative to the parent.

## DirectionalFeatherSetting

Settings for the directional feather effect.

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
> Parent object for the DirectionalFeatherSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
> Boolean **applied**
>
> When true, applies the directional feather effect.
> Measurement Unit (Number or String)=any **leftWidth**
>
> DirectionalFeatherSetting left-side feather width, in pixels.
> Measurement Unit (Number or String)=any **rightWidth**
>
> DirectionalFeatherSetting right-side feather width, in pixels. (Range: .2 to 250)
> Measurement Unit (Number or String)=any **topWidth**
>
> DirectionalFeatherSetting top-side feather width, in pixels. (Range: .2 to 250)
> Measurement Unit (Number or String)=any **bottomWidth**
>
> DirectionalFeatherSetting bottom-side feather width, in pixels. (Range: .2 to 250)
> Number **chokeAmount**
>
> Percentage of feather width used to choke the directional feather. (Range: 0 to 100)
> Number **angle**
>
> Feather angle. (Range: 180 to -180)
> FollowShapeModeOptions **followShapeMode**
>
> Algorithm used when the feather follows the shape.
> Number **noise**
>
> Noise percentage applied within the feather region. (Range: 0 to 100)
> Object **properties**
>
> Allows several properties to be supplied together.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the DirectionalFeatherSetting.
> DirectionalFeatherSetting **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers a listener for events.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the listener from events.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## DisplayOrderOptions

Specifies how table cells are ordered in story and galley views.

### Class

> _Read Only_
>
> Number `ORDER_BY_ROWS` = 1652118103
>
> Rows determine the order.
> _Read Only_
>
> Number `ORDER_BY_COLUMNS` = 1652114254
>
> Columns determine the order.

## DisplayPerformancePreference

Application defaults for display performance.

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
> Parent object for the DisplayPerformancePreference (a Application).
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
> ViewDisplaySettings **defaultDisplaySettings**
>
> Default display performance settings at the object level. Note: Graphics already placed in the document are not affected by these settings.
> Boolean **ignoreLocalSettings**
>
> When true, application-level default display settings replace object-level default display performance settings, and object-level settings cannot be set.
> Boolean **persistLocalSettings**
>
> When true, application-level preferences are set to keep object-level display settings.
> Object **properties**
>
> Allows several properties to be supplied together.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the DisplayPerformancePreference.
> DisplayPerformancePreference **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers a listener for events.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the listener from events.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## DisplaySettingOptions

Options for display performance.

### Class

> _Read Only_
>
> Number `HIGH_QUALITY` = 1346922866
>
> Prioritizes quality over speed; shows high-resolution graphics and high-quality transparencies, with anti-aliasing enabled.
> _Read Only_
>
> Number **TYPICAL** = 1349810544
>
> Balances speed and quality; shows proxy graphics and low-quality transparencies, with anti-aliasing enabled.
> _Read Only_
>
> Number **OPTIMIZED** = 1349480564
>
> Prioritizes speed; graphics are grayed out, while transparency and anti-aliasing are disabled.
> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Uses the default display performance preference setting from the container object. For information, see default display settings.

## DisplaySetting

Display settings applied at the object level.

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
> Parent object for the DisplaySetting (a Application).
> _Read Only_
>
> Number **index**
>
> Position of the DisplaySetting inside its containing object.
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
> TagRaster **raster**
>
> Display method used for raster images.
> TagVector **vector**
>
> Display method used for vector images.
> TagTransparency **transparency**
>
> Display setting used for transparencies.
> Boolean **antialiasing**
>
> When true, anti-aliasing is used for text and bitmap images.
> Number **greekBelow**
>
> Text below this point size is greeked.
> Object **properties**
>
> Allows several properties to be supplied together.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the DisplaySetting.
> DisplaySetting **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers a listener for events.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the listener from events.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |
