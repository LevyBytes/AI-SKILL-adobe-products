# Background Task, Background Tasks, Balance Lines Style, Baseline Frame Grid Option ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: BackgroundTask — Instance; BackgroundTasks; BalanceLinesStyle; BaselineFrameGridOption; BaselineFrameGridRelativeOption; BaselineGridRelativeOption; BehaviorEvents; Behavior; Behaviors; BevelAndEmbossDirection; BevelAndEmbossSetting; BevelAndEmbossStyle; BevelAndEmbossTechnique; BindingOptions; BitmapCompression; BlendMode.

## BackgroundTask — Instance

> _Read Only_
>
> String **name**
>
> BackgroundTask name.
> _Read Only_
>
> String **documentName**
>
> Name of the document this task works on.
> _Read Only_
>
> Number **percentDone**
>
> Progress details for this task.
> _Read Only_
>
> TaskState **status**
>
> Current status value for this task object.
> _Read Only_
>
> Mixed **alerts**
>
> Alerts found during execution of this task object. Return forms: Array of Array of 2 TaskAlertType enumerators or Strings.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the BackgroundTask.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> BackgroundTask parent, provided as a Application.
> _Read Only_
>
> Number **index**
>
> BackgroundTask position inside its container.
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
> Object **properties**
>
> Several properties can be assigned together through this property.

### Methods

> **cancelTask**()
>
> Cancels the specified background task.
> TaskState **waitForTask**()
>
> Waits until the task is complete.
> any **queryProperty**( String **name** )
>
> Queries a specified property in the task metadata.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Task property to query. |

> String **toSource**()
>
> Produces a string that, when executed, returns the BackgroundTask.
> BackgroundTask **getElements**()
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
| Mixed | handler | Event handler; accepted values are File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler; accepted values are File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## BackgroundTasks

Background task object collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> Number **count**()
>
> Shows how many elements are in the BackgroundTask.
> BackgroundTask **item**( Mixed **index** )
>
> Gets the BackgroundTask identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Identifier value; accepted forms are Long Integer or String. |

> BackgroundTask **itemByName**( String **name** )
>
> Gets the BackgroundTask with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> BackgroundTask **itemByID**( Number **id** )
>
> Gets the BackgroundTask with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> BackgroundTask **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the BackgroundTasks contained in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | BackgroundTask, index, or name used as the range start. Can accept: BackgroundTask, Long Integer or String. |
| Mixed | to | BackgroundTask, index, or name used as the range end. Can accept: BackgroundTask, Long Integer or String. |

> BackgroundTask **firstItem**()
>
> Gets the first BackgroundTask in the collection.
> BackgroundTask **lastItem**()
>
> Gets the last BackgroundTask in the collection.
> BackgroundTask **middleItem**()
>
> Gets the middle BackgroundTask in the collection.
> BackgroundTask **previousItem**( BackgroundTask **obj** )
>
> Gets the BackgroundTask whose index comes before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| BackgroundTask | obj | Index of the BackgroundTask that follows the wanted BackgroundTask. |

> BackgroundTask **nextItem**( BackgroundTask **obj** )
>
> Gets the BackgroundTask whose index comes after the supplied BackgroundTask in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| BackgroundTask | obj | BackgroundTask whose index precedes the wanted BackgroundTask. |

> BackgroundTask **anyItem**()
>
> Gets any BackgroundTask from the collection.
> BackgroundTask **everyItem**()
>
> Gets every BackgroundTask in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the BackgroundTask.
> BackgroundTask **[]**( Number **index** )
>
> Gets the BackgroundTask with the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## BalanceLinesStyle

Balancing choices for line endings in text.

### Class

> _Read Only_
>
> Number `NO_BALANCING` = 1114394470
>
> Leaves line endings unbalanced.
> _Read Only_
>
> Number `VEE_SHAPE` = 1114396261
>
> Favors a shorter final line.
> _Read Only_
>
> Number `FULLY_BALANCED` = 1114391921
>
> Makes the line lengths even.
> _Read Only_
>
> Number `PYRAMID_SHAPE` = 1114394745
>
> Favors a longer final line.

## BaselineFrameGridOption

Baseline frame grid configuration choices.

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
> The BaselineFrameGridOption belongs to its parent Application, Document, TextFrame, EndnoteTextFrame, or ObjectStyle.
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
> Boolean **useCustomBaselineFrameGrid**
>
> When true, a custom baseline frame grid is used.
> Measurement Unit (Number or String)=any **startingOffsetForBaselineFrameGrid**
>
> Baseline grid offset amount.
> BaselineFrameGridRelativeOption **baselineFrameGridRelativeOption**
>
> Chooses the reference location for the custom baseline grid: top of page, top margin, top of frame, or frame inset.
> Measurement Unit (Number or String)=any **baselineFrameGridIncrement**
>
> Spacing between adjacent grid lines.
> Mixed **baselineFrameGridColor**
>
> Grid lines use this color, provided either as a UI color or as three doubles for R, G, and B, with each value from 0 to 255. Return forms: UIColors enumerator; Array of 3 Reals (0 - 255).
> Object **properties**
>
> Use this property to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Builds source text that, when run, returns the BaselineFrameGridOption.
> BaselineFrameGridOption **getElements**()
>
> Turns the object specifier into an array of object references.
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

## BaselineFrameGridRelativeOption

Baseline frame grid offset calculations use this starting reference point.

### Class

> _Read Only_
>
> Number `TOP_OF_PAGE` = 1163161458
>
> Measures the grid offset starting at the page top.
> _Read Only_
>
> Number `TOP_OF_MARGIN` = 1163161453
>
> Measures the grid offset starting at the page's top margin.
> _Read Only_
>
> Number `TOP_OF_FRAME` = 1163161446
>
> Measures the grid offset starting at the text frame top.
> _Read Only_
>
> Number `TOP_OF_INSET` = 1163161449
>
> Measures the grid offset starting at the text frame's top inset.

## BaselineGridRelativeOption

Zero-point choices for baseline grid offsets.

### Class

> _Read Only_
>
> Number `TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION` = 1162766196
>
> Places the baseline grid offset zero point at the page top.
> _Read Only_
>
> Number `TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION` = 1162766189
>
> Places the baseline grid offset zero point at the page's top margin.

## BehaviorEvents

Options for behavior-triggering events.

### Class

> _Read Only_
>
> Number `MOUSE_UP` = 1836410230
>
> Fires the behavior after a click when the mouse is released.
> _Read Only_
>
> Number `MOUSE_DOWN` = 1835296118
>
> Fires the behavior on mouse-button press, before release.
> _Read Only_
>
> Number `MOUSE_ENTER` = 1835361654
>
> Fires the behavior as the mouse pointer enters the object's bounding-box area.
> _Read Only_
>
> Number `MOUSE_EXIT` = 1836606838
>
> Fires the behavior as the mouse pointer leaves the object's bounding-box area.
> _Read Only_
>
> Number `ON_FOCUS` = 1868981622
>
> Fires the behavior when mouse action or the Tab key gives the object focus.
> _Read Only_
>
> Number `ON_BLUR` = 1868719478
>
> Fires the behavior when focus shifts to another interactive object.

## Behavior

Object representing a behavior.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the Behavior.
> _Read Only_
>
> Number **id**
>
> Unique ID for the Behavior.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> The Behavior belongs to its parent Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox, or SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of the Behavior inside its containing object.
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
> Boolean **enableBehavior**
>
> When true, the behavior is active.
> BehaviorEvents **behaviorEvent**
>
> Event that fires the behavior.
> String **label**
>
> Stores any string value.
> Object **properties**
>
> Use this property to set multiple properties in one operation.

### Methods

> **remove**()
>
> Deletes the Behavior.
> **insertLabel**( String **key**, String **value** )
>
> Assigns the value associated with the specified key to the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **toSource**()
>
> Builds source text that, when run, returns the Behavior.
> Behavior **getElements**()
>
> Turns the object specifier into an array of object references.
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

## Behaviors

Collection containing behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the Behavior.
> Behavior **item**( Mixed **index** )
>
> Gets the Behavior at the specified index or with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Accepts Long Integer or String as the index or name. |

> Behavior **itemByName**( String **name** )
>
> Gets the Behavior with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> Behavior **itemByID**( Number **id** )
>
> Gets the Behavior with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> Behavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Behaviors in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a Behavior, index, or name. Can accept: Behavior, Long Integer or String. |
| Mixed | to | Range end, supplied as a Behavior, index, or name. Can accept: Behavior, Long Integer or String. |

> Behavior **firstItem**()
>
> Gets the first Behavior in the collection.
> Behavior **lastItem**()
>
> Gets the last Behavior in the collection.
> Behavior **middleItem**()
>
> Gets the middle Behavior in the collection.
> Behavior **previousItem**( Behavior **obj** )
>
> Gets the Behavior whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Behavior | obj | Index of the Behavior that follows the wanted Behavior. |

> Behavior **nextItem**( Behavior **obj** )
>
> Gets the Behavior whose index comes after the specified Behavior in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Behavior | obj | Behavior whose index comes before the wanted Behavior. |

> Behavior **anyItem**()
>
> Gets any Behavior from the collection.
> Behavior **everyItem**()
>
> Gets every Behavior in the collection.
> String **toSource**()
>
> Builds source text that, when run, returns the Behavior.
> Behavior **[]**( Number **index** )
>
> Gets the Behavior at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## BevelAndEmbossDirection

Choices for bevel and emboss direction.

### Class

> _Read Only_
>
> Number **UP** = 1181971566
>
> Makes the effect look raised.
> _Read Only_
>
> Number **DOWN** = 1181971556
>
> Makes the effect look pressed inward.

## BevelAndEmbossSetting

Settings for bevel and emboss effects.

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
> The BevelAndEmbossSetting belongs to its parent TransparencySetting, StrokeTransparencySetting, FillTransparencySetting, or ContentTransparencySetting.
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
> Boolean **applied**
>
> When true, the bevel or emboss effect is in use.
> BevelAndEmbossStyle **style**
>
> Bevel or emboss style.
> BevelAndEmbossTechnique **technique**
>
> Edge treatment used for the bevel or emboss.
> Number **depth**
>
> Bevel or emboss depth, expressed as a percentage. (Range: 0 to 1000)
> BevelAndEmbossDirection **direction**
>
> Bevel or emboss direction.
> Measurement Unit (Number or String)=any **size**
>
> Bevel or emboss size.
> Measurement Unit (Number or String)=any **soften**
>
> Softening amount, in pixels.
> Number **angle**
>
> Light-source angle. (Range: -180 to 180)
> Number **altitude**
>
> Light-source altitude. (Range: 0 to 90)
> Boolean **useGlobalLight**
>
> When true, the global light source is used.
> Swatch **highlightColor**
>
> Highlight areas of the effect use this color. Accepted forms include swatch entries such as color, gradient, tint, or mixed ink; color library colors; hex values; or color-value arrays. The color mode controls the array format: RGB uses three values from 0 to 255 in [R,G,B]; CMYK uses four percentage values from 0 to 100 in [C,M,Y,K]; LAB uses [L,A,B], where L ranges from 0 to 100 and A and B range from -128 to 127; HSB uses [H,S,B], with H from 0 to 360 and S and B as percentages from 0 to 100.
> BlendMode **highlightBlendMode**
>
> Blending mode used by the highlight part of the effect.
> Number **highlightOpacity**
>
> Highlight portion opacity, expressed as a percentage. (Range: 0 to 100)
> Swatch **shadowColor**
>
> Shadow areas of the effect use this color. Accepted forms include swatch entries such as color, gradient, tint, or mixed ink; color library colors; hex values; or color-value arrays. The color mode controls the array format: RGB uses three values from 0 to 255 in [R,G,B]; CMYK uses four percentage values from 0 to 100 in [C,M,Y,K]; LAB uses [L,A,B], where L ranges from 0 to 100 and A and B range from -128 to 127; HSB uses [H,S,B], with H from 0 to 360 and S and B as percentages from 0 to 100.
> BlendMode **shadowBlendMode**
>
> Blending mode used by the shadow part of the effect.
> Number **shadowOpacity**
>
> Shadow portion opacity, expressed as a percentage. (Range: 0 to 100)
> Object **properties**
>
> Use this property to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Builds source text that, when run, returns the BevelAndEmbossSetting.
> BevelAndEmbossSetting **getElements**()
>
> Turns the object specifier into an array of object references.
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

## BevelAndEmbossStyle

Choices for bevel and emboss style.

### Class

> _Read Only_
>
> Number `OUTER_BEVEL` = 2020618849
>
> Bevels the object's outside edges.
> _Read Only_
>
> Number `INNER_BEVEL` = 2020618850
>
> Bevels the object's inside edges.
> _Read Only_
>
> Number **EMBOSS** = 2020618851
>
> Applies an emboss effect to the object.
> _Read Only_
>
> Number `PILLOW_EMBOSS` = 2020618852
>
> Applies an emboss effect to the object's edges.

## BevelAndEmbossTechnique

Options that define the bevel and emboss technique.

### Class

> _Read Only_
>
> Number `SMOOTH_CONTOUR` = 2020619105
>
> Applies smooth contours to emboss and bevel effects.
> _Read Only_
>
> Number `CHISEL_HARD` = 2020619106
>
> Gives emboss and bevel contours a chiseled shape with hard corners.
> _Read Only_
>
> Number `CHISEL_SOFT` = 2020619107
>
> Uses chiseled emboss or bevel contours with some softening applied.

## BindingOptions

Specifies where the binding spine sits inside a spread.

### Class

> _Read Only_
>
> Number `RIGHT_ALIGN` = 1919379572
>
> Places the page to the spread area right of its binding spine.
> _Read Only_
>
> Number `LEFT_ALIGN` = 1818584692
>
> Places the page to the spread area left of its binding spine.
> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Applies the default binding side.

## BitmapCompression

Compression selection used for bitmap images.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Leaves compression disabled.
> _Read Only_
>
> Number `AUTO_COMPRESSION` = 1631808880
>
> Chooses JPEG compression and selects the most suitable quality type automatically. Available only if acrobat compatibility is acrobat 6 or higher.
> _Read Only_
>
> Number **JPEG** = 1785751398
>
> Applies JPEG compression.
> _Read Only_
>
> Number **ZIP** = 2053730371
>
> Applies ZIP compression.
> _Read Only_
>
> Number `JPEG_2000` = 1785751346
>
> Applies JPEG 2000. Available only if acrobat compatibility is acrobat 6 or higher.
> _Read Only_
>
> Number `AUTOMATIC_JPEG_2000` = 1634365490
>
> Selects the Automatic JPEG 2000 compression method.

## BlendMode

Available blend mode choices.

### Class

> _Read Only_
>
> Number **NORMAL** = 1852797549
>
> Paints the object using the blend color without combining it with the base color.
> _Read Only_
>
> Number **MULTIPLY** = 2020625762
>
> Produces a darker result by multiplying the base color with the blend color. Note: black multiplication yields black; multiplying by white keeps the color as it was.
> _Read Only_
>
> Number **SCREEN** = 2020625763
>
> Produces a lighter result by multiplying the inverses of the blend and base colors. Note: screening with white yields white; screening with black keeps the color as it was.
> _Read Only_
>
> Number **OVERLAY** = 2020625764
>
> Chooses multiplication or screening based on the base color; existing artwork receives the pattern or color while base highlights and shadows remain, and the blend color is mixed to mirror the source color's lightness or darkness.
> _Read Only_
>
> Number `SOFT_LIGHT` = 2020625765
>
> With blend colors lighter than 50% gray, artwork is lightened like a dodge operation; with blend colors darker than 50% gray, artwork is darkened like a burn operation. Note: pure black or white makes an area clearly darker or lighter, without turning it into pure black or pure white.
> _Read Only_
>
> Number `HARD_LIGHT` = 2020625766
>
> With blend colors lighter than 50% gray, artwork is lightened as though screened; with blend colors darker than 50% gray, artwork is darkened as though multiplied. Note: painting using pure black or white creates pure black or pure white.
> _Read Only_
>
> Number `COLOR_DODGE` = 2020625767
>
> Lightens the base color in response to the blend color. Note: using pure black as the blend produces no change.
> _Read Only_
>
> Number `COLOR_BURN` = 2020625768
>
> Makes the base color darker in response to the blend color. Note: using white as the blend produces no change.
> _Read Only_
>
> Number **DARKEN** = 2020625769
>
> Uses whichever of the base or blend colors is darker for the final color; areas lighter than the blend color are replaced, while areas already darker than the blend color stay unchanged.
> _Read Only_
>
> Number **LIGHTEN** = 2020625770
>
> Uses whichever of the base or blend colors is lighter for the final color; areas darker than the blend color are replaced, while areas already lighter than the blend color stay unchanged.
> _Read Only_
>
> Number **DIFFERENCE** = 2020625771
>
> Subtracts one color from the other, using the direction determined by which of the blend color or base color has greater brightness. Note: white blending inverts base color values; black blending leaves them unchanged.
> _Read Only_
>
> Number **EXCLUSION** = 2020625772
>
> Builds a result like the difference blend mode, but with reduced contrast. Note: white blending inverts base color values; black blending leaves them unchanged.
> _Read Only_
>
> Number **HUE** = 2020625773
>
> Builds a color that keeps the base color's luminance and saturation while taking hue from the blend color.
> _Read Only_
>
> Number **SATURATION** = 1380545377
>
> Builds a color that keeps the base color's luminance and hue while taking saturation from the blend color. Note: areas with no saturation (0% gray) remain unchanged.
> _Read Only_
>
> Number **COLOR** = 1668246642
>
> Builds a color that keeps luminance from the base color and uses hue plus saturation from the blend color. Note: gray levels are preserved, making this useful for tinting color images or coloring monochrome images. It is the inverse of the luminosity blend mode.
> _Read Only_
>
> Number **LUMINOSITY** = 2020625776
>
> Builds a color that keeps hue and saturation from the base color while taking luminance from the blend color. Note: this is the inverse of the color blend mode.
