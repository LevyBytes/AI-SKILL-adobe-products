# Condition, Conditional Text Preference, Conditions, Container Type ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Condition; ConditionalTextPreference; Conditions; ContainerType; ContentPlacerObject; ContentTransparencySetting; ContentType; ContourOption; ContourOptionsTypes; ConvertPageBreaks; ConvertShapeOptions; ConvertTablesOptions; CoordinateSpaces; CopyrightStatus; CornerOptions — Class; CreateProxy; CrossReferenceFormat.

## Condition

Represents one conditional-text condition.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the Condition.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Condition, either a Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of the Condition inside the object that contains it.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection for this object.
> String **name**
>
> Name assigned to the Condition.
> Mixed **indicatorColor**
>
> Color used for the condition indicator; supply either an array of three doubles for RGB values from 0 to 255, or a UI color. Returns may be: Array of 3 Reals (0 - 255) or UIColors enumerator.
> ConditionIndicatorMethod **indicatorMethod**
>
> Method used for the condition indicator.
> ConditionUnderlineIndicatorAppearance **underlineIndicatorAppearance**
>
> Appearance used for the condition underline indicator.
> Boolean **visible**
>
> When true, the Condition is shown.
> String **label**
>
> User-settable string property.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **remove**( Mixed **replacingWith** )
>
> Deletes the condition.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | replacingWith | Condition to apply to text where the deleted condition was used. With the default, no replacement condition is applied. Accepts: Condition or String. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the supplied label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Builds a string that, when run, recreates the Condition.
> Condition **getElements**()
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
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ConditionalTextPreference

Preferences that control conditional text.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the ConditionalTextPreference, either a Application or Document.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection for this object.
> ConditionIndicatorMode **showConditionIndicators**
>
> Controls display of condition indicators.
> ConditionSet **activeConditionSet**
>
> Condition set currently in effect.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when run, recreates the ConditionalTextPreference.
> ConditionalTextPreference **getElements**()
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
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Conditions

Collection containing conditional-text conditions.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Condition **add**( Object **withProperties** )
>
> Creates a Condition.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new Condition. (Optional) |

> Number **count**()
>
> Shows how many elements are in the Condition.
> Condition **item**( Mixed **index** )
>
> Retrieves the Condition identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Value for selecting by position or by name. Accepts: Long Integer or String. |

> Condition **itemByName**( String **name** )
>
> Retrieves the Condition with the provided name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Condition **itemByID**( Number **id** )
>
> Retrieves the Condition with the provided ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Condition **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the Conditions covered by the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Condition, index, or name at the range start. Can accept: Condition, Long Integer or String. |
| Mixed | to | Condition, index, or name at the range end. Can accept: Condition, Long Integer or String. |

> Condition **firstItem**()
>
> Retrieves the collection's first Condition.
> Condition **lastItem**()
>
> Retrieves the collection's last Condition.
> Condition **middleItem**()
>
> Retrieves the collection's middle Condition.
> Condition **previousItem**( Condition **obj** )
>
> Retrieves the Condition whose index precedes the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Condition | obj | Index of the Condition that follows the target Condition. |

> Condition **nextItem**( Condition **obj** )
>
> From the collection, retrieves the Condition immediately after the supplied Condition.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Condition | obj | Condition whose index comes before the target Condition. |

> Condition **anyItem**()
>
> Retrieves any Condition from the collection.
> Condition **everyItem**()
>
> Retrieves every Condition in the collection.
> String **toSource**()
>
> Builds a string that, when run, recreates the Condition.
> Condition **[]**( Number **index** )
>
> Retrieves the Condition at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## ContainerType

Identifies a container type.

### Class

> _Read Only_
>
> Number **BAG** = 1298424423
>
> Container holds items without ordering.
> _Read Only_
>
> Number **SEQ** = 1298428785
>
> Container holds ordered or sequential items.
> _Read Only_
>
> Number **ALT** = 1298424180
>
> Container holds alternative values, with only one usable at a time.

## ContentPlacerObject

Represents the ContentPlacerObject.

### Instance

> _Read Only_
>
> Boolean **loaded**
>
> Indicates whether the Content Placer currently has content ready to place.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the ContentPlacerObject, a Application.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection for this object.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **load**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Loads one or more objects into the Content Placer.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | One or more page items to load or place. |
| Boolean | linkPageItems | Whether pageItems are linked in the content placer; true overrides the link stories value. (Optional) |
| Boolean | linkStories | Whether stories are linked in the content placer; applies only to a single story, and pageItem links are also created when more than one item is present. (Optional) |
| Boolean | mapStyles | Whether styles are mapped in the content placer. (Optional) |
| Boolean | showingOptions | Whether the link options dialog appears. (Optional) |

> String **toSource**()
>
> Builds a string that, when run, recreates the ContentPlacerObject.
> ContentPlacerObject **getElements**()
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
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ContentTransparencySetting

Controls transparency for the parent object's content.

### Instance

> _Read Only_
>
> BlendingSetting **blendingSettings**
>
> Blending-mode configuration.
> _Read Only_
>
> DropShadowSetting **dropShadowSettings**
>
> Drop-shadow effect configuration.
> _Read Only_
>
> FeatherSetting **featherSettings**
>
> Feather effect configuration.
> _Read Only_
>
> InnerShadowSetting **innerShadowSettings**
>
> Inner-shadow effect configuration.
> _Read Only_
>
> OuterGlowSetting **outerGlowSettings**
>
> Outer-glow effect configuration.
> _Read Only_
>
> InnerGlowSetting **innerGlowSettings**
>
> Inner-glow effect configuration.
> _Read Only_
>
> BevelAndEmbossSetting **bevelAndEmbossSettings**
>
> Bevel-and-emboss effect configuration.
> _Read Only_
>
> SatinSetting **satinSettings**
>
> Satin effect configuration.
> _Read Only_
>
> DirectionalFeatherSetting **directionalFeatherSettings**
>
> Directional-feather effect configuration.
> _Read Only_
>
> GradientFeatherSetting **gradientFeatherSettings**
>
> Gradient-feather effect configuration.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the ContentTransparencySetting, which can be PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, PageItemDefault or ObjectStyle.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preferences objects.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection for this object.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when run, recreates the ContentTransparencySetting.
> ContentTransparencySetting **getElements**()
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
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ContentType

Identifies an object's content type.

### Class

> _Read Only_
>
> Number **UNASSIGNED** = 1970168179
>
> No content type is assigned.
> _Read Only_
>
> Number `GRAPHIC_TYPE` = 1735553140
>
> Indicates a graphics frame.
> _Read Only_
>
> Number `TEXT_TYPE` = 1952412773
>
> Indicates a text frame.

## ContourOption

Represents a contour option.

### Instance

> _Read Only_
>
> String **photoshopPathNames**
>
> List of clipping paths stored in the graphic.
> _Read Only_
>
> String **alphaChannelPathNames**
>
> List of alpha channels stored in the graphic.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> TextWrapPreference **parent**
>
> Parent object for the ContourOption, a TextWrapPreference.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection for this object.
> ContourOptionsTypes **contourType**
>
> Selected contour type.
> Boolean **includeInsideEdges**
>
> When true, InDesign creates interior clipping paths inside the outer clipping path. Note: only alpha channel or detect edges clipping types support this.
> String **contourPathName**
>
> Chooses the alpha channel or Photoshop path for the contour option. Valid only for photoshop path or alpha channel contour options.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when run, recreates the ContourOption.
> ContourOption **getElements**()
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
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ContourOptionsTypes

Specifies which path drives the contour text wrap.

### Class

> _Read Only_
>
> Number `BOUNDING_BOX` = 1701732962
>
> Uses the object's bounding box as the text wrap shape.
> _Read Only_
>
> Number `PHOTOSHOP_PATH` = 1886613620
>
> Uses the specified Photoshop path as the text wrap shape. For choosing the Photoshop path, see contour path name.
> _Read Only_
>
> Number `DETECT_EDGES` = 1685349735
>
> Uses the image edges as the text wrap shape.
> _Read Only_
>
> Number `ALPHA_CHANNEL` = 1634756707
>
> Uses edges from the specified alpha channel as the text wrap shape. For choosing the alpha channel, see contour path name.
> _Read Only_
>
> Number `GRAPHIC_FRAME` = 1701734246
>
> Uses the wrapped object's graphics frame as the text wrap shape.
> _Read Only_
>
> Number `SAME_AS_CLIPPING` = 1935762288
>
> Uses the clipping path, if one exists, defined in Photoshop as the text wrap shape. Note: this enumeration cannot specify a path. For a specific path, select the `PHOTOSHOP_PATH` value.
> _Read Only_
>
> Number `SELECT_SUBJECT` = 1685087092
>
> Smart Text Wrap chooses the key Subject in the content using Adobe Sensei.

## ConvertPageBreaks

Options used when converting manual page breaks.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Text is allowed to reflow instead of retaining page breaks.
> _Read Only_
>
> Number `PAGE_BREAK` = 1397778242
>
> Keeps page breaks intact.
> _Read Only_
>
> Number `COLUMN_BREAK` = 1396927554
>
> Changes manual page breaks into column breaks.

## ConvertShapeOptions

Settings that identify the destination shape when an object is converted.

### Class

> _Read Only_
>
> Number `CONVERT_TO_RECTANGLE` = 1129534021
>
> Changes the object into a rectangle.
> _Read Only_
>
> Number `CONVERT_TO_ROUNDED_RECTANGLE` = 1129534034
>
> Changes the object into a rectangle with rounded corners.
> _Read Only_
>
> Number `CONVERT_TO_BEVELED_RECTANGLE` = 1129529938
>
> Changes the object into a rectangle with beveled corners.
> _Read Only_
>
> Number `CONVERT_TO_INVERSE_ROUNDED_RECTANGLE` = 1129531730
>
> Changes the object into a rectangle with inverse rounded corners.
> _Read Only_
>
> Number `CONVERT_TO_OVAL` = 1129533270
>
> Changes the object into an ellipse.
> _Read Only_
>
> Number `CONVERT_TO_TRIANGLE` = 1129534546
>
> Changes the object into a triangle.
> _Read Only_
>
> Number `CONVERT_TO_POLYGON` = 1129533519
>
> Changes the object into a polygon.
> _Read Only_
>
> Number `CONVERT_TO_LINE` = 1129532489
>
> Changes the object into a line running from the upper-left corner to the lower-right corner of the object's bounding box.
> _Read Only_
>
> Number `CONVERT_TO_STRAIGHT_LINE` = 1129534284
>
> Changes the object into a straight line. For a square, a circle, or a bounding box wider than tall, the result is horizontal and joins the center points on the bounding box's vertical sides. When the bounding box is taller than wide, the line joins the center points on the horizontal sides.
> _Read Only_
>
> Number `CONVERT_TO_OPEN_PATH` = 1129533296
>
> Changes the object into an open path.
> _Read Only_
>
> Number `CONVERT_TO_CLOSED_PATH` = 1129530224
>
> Changes the object into a closed path.

## ConvertTablesOptions

Choices used when converting tables.

### Class

> _Read Only_
>
> Number `UNFORMATTED_TABLE` = 1396921684
>
> Changes tables into basic tables without formatting.
> _Read Only_
>
> Number `UNFORMATTED_TABBED_TEXT` = 1398101076
>
> Changes tables into plain tab-delimited text.

## CoordinateSpaces

Coordinate-space choices.

### Class

> _Read Only_
>
> Number `PASTEBOARD_COORDINATES` = 2021224546
>
> Coordinates measured from the pasteboard.
> _Read Only_
>
> Number `PARENT_COORDINATES` = 2021224545
>
> Coordinates measured from the parent.
> _Read Only_
>
> Number `INNER_COORDINATES` = 2021222766
>
> Coordinates measured from the inner space.
> _Read Only_
>
> Number `PAGE_COORDINATES` = 2021224551
>
> Coordinates measured from the page.
> _Read Only_
>
> Number `SPREAD_COORDINATES` = 2021225328
>
> Coordinates measured from the spread.

## CopyrightStatus

Document copyright state.

### Class

> _Read Only_
>
> Number **UNKNOWN** = 1433299822
>
> Copyright state is not known.
> _Read Only_
>
> Number **YES** = 2036691744
>
> The document carries copyright protection.
> _Read Only_
>
> Number **NO** = 1852776480
>
> The document is in the public domain.

## CornerOptions — Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> No corner style.
> _Read Only_
>
> Number `ROUNDED_CORNER` = 1667592804
>
> Rounded corner style.
> _Read Only_
>
> Number `INVERSE_ROUNDED_CORNER` = 1667591798
>
> Inverted rounded corner style.
> _Read Only_
>
> Number `INSET_CORNER` = 1667591795
>
> Inset corner style.
> _Read Only_
>
> Number `BEVEL_CORNER` = 1667588726
>
> Beveled corner style.
> _Read Only_
>
> Number `FANCY_CORNER` = 1667589742
>
> Fancy corner style.

## CreateProxy

Preview-image creation choices.

### Class

> _Read Only_
>
> Number `AS_NEEDED` = 1699311204
>
> Builds preview images only when required.
> _Read Only_
>
> Number **ALWAYS** = 1699307895
>
> Builds preview images every time.

## CrossReferenceFormat

Object representing a cross reference format.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID for the CrossReferenceFormat.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Owner of the CrossReferenceFormat, which is a Document.
> _Read Only_
>
> Number **index**
>
> Position of the CrossReferenceFormat inside its containing object.
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
> _Read Only_
>
> BuildingBlocks **buildingBlocks**
>
> Cross reference building block collection.
> String **name**
>
> Name assigned to the CrossReferenceFormat.
> CharacterStyle **appliedCharacterStyle**
>
> Character style used by the cross reference format.
> String **label**
>
> Settable string storage for label text.
> Object **properties**
>
> Allows several properties to be assigned together.

### Methods

> **remove**()
>
> Deletes this CrossReferenceFormat.
> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value for the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to use. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Creates source text that, when executed, returns the CrossReferenceFormat.
> CrossReferenceFormat **getElements**()
>
> Converts the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to register. |
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
