# Open File Behavior, Open File Behaviors, Open Options, Open Type Feature ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: OpenFileBehavior; OpenFileBehaviors; OpenOptions; OpenTypeFeature; OTFFigureStyle; OuterGlowSetting — Instance.

## OpenFileBehavior

Object that describes an open file behavior.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the OpenFileBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID for the OpenFileBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for OpenFileBehavior; possible parent types are Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox, or SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of the OpenFileBehavior inside its containing object.
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
> String **filePath**
>
> File path value, colon delimited on the Mac OS. Can also accept: File.
> Boolean **enableBehavior**
>
> True means the behavior is active.
> BehaviorEvents **behaviorEvent**
>
> Event used to trigger the behavior.
> String **label**
>
> String-valued label property.
> Object **properties**
>
> Property bag used to assign several properties in one operation.

### Methods

> **remove**()
>
> Deletes the OpenFileBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the supplied label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a string that, when executed, returns the OpenFileBehavior.
> OpenFileBehavior **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Retrieves object specifier text.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Optional; deprecated capture flag. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Optional; deprecated capture flag. |

## OpenFileBehaviors

Collection containing open file behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Reports how many OpenFileBehavior elements are present.
> OpenFileBehavior **add**( Object **withProperties** )
>
> Adds a new OpenFileBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new OpenFileBehavior (Optional) |

> OpenFileBehavior **item**( Mixed **index** )
>
> Gets the OpenFileBehavior for the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> OpenFileBehavior **itemByName**( String **name** )
>
> Gets the OpenFileBehavior with that name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> OpenFileBehavior **itemByID**( Number **id** )
>
> Gets the OpenFileBehavior identified by the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> OpenFileBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the OpenFileBehaviors contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | OpenFileBehavior, index, or name that starts the range. Can accept: OpenFileBehavior, Long Integer or String. |
| Mixed | to | OpenFileBehavior, index, or name that ends the range. Can accept: OpenFileBehavior, Long Integer or String. |

> OpenFileBehavior **firstItem**()
>
> Gets the first OpenFileBehavior in this collection.
> OpenFileBehavior **lastItem**()
>
> Gets the last OpenFileBehavior in this collection.
> OpenFileBehavior **middleItem**()
>
> Gets the middle OpenFileBehavior in this collection.
> OpenFileBehavior **previousItem**( OpenFileBehavior **obj** )
>
> Gets the OpenFileBehavior positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OpenFileBehavior | obj | Index for the OpenFileBehavior that comes after the wanted OpenFileBehavior. |

> OpenFileBehavior **nextItem**( OpenFileBehavior **obj** )
>
> Gets the OpenFileBehavior positioned after the supplied OpenFileBehavior in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| OpenFileBehavior | obj | OpenFileBehavior whose index is immediately before the wanted OpenFileBehavior. |

> OpenFileBehavior **anyItem**()
>
> Gets any OpenFileBehavior from the collection.
> OpenFileBehavior **everyItem**()
>
> Gets every OpenFileBehavior from the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the OpenFileBehavior.
> OpenFileBehavior **[]**( Number **index** )
>
> Gets the OpenFileBehavior for the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## OpenOptions

Specifies the way a document is opened.

### Class

> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Uses the default behavior determined by file type or extension.
> _Read Only_
>
> Number `OPEN_ORIGINAL` = 1332760434
>
> Opens the original document.
> _Read Only_
>
> Number `OPEN_COPY` = 1332757360
>
> Opens a copy of the document.

## OpenTypeFeature

Supported options for OpenType features.

### Class

> _Read Only_
>
> Number **LOW** = 1701727351
>
> Low.
> _Read Only_
>
> Number `DISCRETIONARY_LIGATURES_FEATURE` = 1330930764
>
> Enables optional discretionary ligatures.
> _Read Only_
>
> Number `FRACTIONS_FEATURE` = 1330931282
>
> For slash-separated numbers, such as 1/2, applies fraction formatting. Note: Some fonts limit fractions feature handling to standard fractions. For non-standard values such as 4/13, consult denominator feature and numerator feature.
> _Read Only_
>
> Number `ORDINAL_FEATURE` = 1330933586
>
> Makes the alpha characters in ordinal numbers superscript.
> _Read Only_
>
> Number `SWASH_FEATURE` = 1330934615
>
> Supplies regular and contextual swashes, including possible alternate caps and end-of-word forms.
> _Read Only_
>
> Number `TITLING_FEATURE` = 1330934857
>
> Turns on alternate characters intended for uppercase titles.
> _Read Only_
>
> Number `CONTEXTUAL_ALTERNATES_FEATURE` = 1330930497
>
> Turns on contextual ligatures and connecting alternates.
> _Read Only_
>
> Number `ALL_SMALL_CAPS_FEATURE` = 1664250691
>
> Uses real small caps instead of scaled-down regular caps.
> _Read Only_
>
> Number `SUPERSCRIPT_FEATURE` = 1884247123
>
> Sizes raised glyphs appropriately against nearby characters.
> _Read Only_
>
> Number `SUBSCRIPT_FEATURE` = 1884247106
>
> Sizes lowered glyphs appropriately against nearby characters.
> _Read Only_
>
> Number `NUMERATOR_FEATURE` = 1884247118
>
> For a non-standard fraction made from two slash-separated numbers, such as 4/13, converts the first number into the numerator.
> _Read Only_
>
> Number `DENOMINATOR_FEATURE` = 1884247108
>
> For a non-standard fraction made from two slash-separated numbers, such as 4/13, converts the second number into the denominator.
> _Read Only_
>
> Number `TABULAR_LINING_FEATURE` = 1330931284
>
> Produces full-height figures with fixed, equal width.
> _Read Only_
>
> Number `PROPORTIONAL_OLDSTYLE_FEATURE` = 1330933587
>
> Produces varying-height figures with proportional widths.
> _Read Only_
>
> Number `PROPORTIONAL_LINING_FEATURE` = 1330932816
>
> Produces full-height figures with proportional widths.
> _Read Only_
>
> Number `TABULAR_OLDSTYLE_FEATURE` = 1330933588
>
> Produces varying-height figures with fixed, equal widths.
> _Read Only_
>
> Number `DEFAULT_FIGURE_STYLE_FEATURE` = 1330931268
>
> Figure glyphs receive the current font's default figure style.
> _Read Only_
>
> Number `OVERLAP_SWASH` = 1330933590
>
> Overlap swash
> _Read Only_
>
> Number `STYLISTIC_ALTERNATE` = 1330934612
>
> Stylistic alternate
> _Read Only_
>
> Number `JUSTIFICATION_ALTERNATE` = 1330932309
>
> Justification alternate
> _Read Only_
>
> Number `STRETCHED_ALTERNATE` = 1330934610
>
> Stretched alternate

## OTFFigureStyle

OpenType font figure style choices.

### Class

> _Read Only_
>
> Number `TABULAR_LINING` = 1330931316
>
> Uses monospaced lining figures.
> _Read Only_
>
> Number `PROPORTIONAL_OLDSTYLE` = 1330933619
>
> Uses oldstyle figures with proportional widths.
> _Read Only_
>
> Number `PROPORTIONAL_LINING` = 1330932848
>
> Uses lining figures with proportional widths.
> _Read Only_
>
> Number `TABULAR_OLDSTYLE` = 1330933620
>
> Uses monospaced oldstyle figures.
> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Uses the font's default figure style.

## OuterGlowSetting — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for OuterGlowSetting; possible parent types are TransparencySetting, StrokeTransparencySetting, FillTransparencySetting, or ContentTransparencySetting.
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
> True means the outer glow effect is applied.
> BlendMode **blendMode**
>
> Blending mode used by the outer glow effect.
> Number **opacity**
>
> Outer glow opacity, expressed as a percentage. (Range: 0 to 100)
> Number **noise**
>
> Noise amount added to the outer glow, as a percentage. (Range: 0 to 100)
> Swatch **effectColor**
>
> Outer glow color, supplied either as a swatch (color, gradient, tint, or mixed ink) or as an array of color values. The active color mode determines the array: RGB uses three values from 0 to 255 as [R,G,B]; CMYK uses four percentage values from 0 to 100 as [C,M,Y,K]; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127.
> GlowTechnique **technique**
>
> Technique used for the outer glow.
> Number **spread**
>
> Spread amount, measured against the outer glow size as a percentage. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **size**
>
> Outer glow size.
> Object **properties**
>
> Property bag used to assign several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the OuterGlowSetting.
> OuterGlowSetting **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Retrieves object specifier text.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Optional; deprecated capture flag. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Optional; deprecated capture flag. |
