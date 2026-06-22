# Check Boxes, Checkbox Control, Checkbox Controls, Cjk Grid Preference ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: CheckBoxes; CheckboxControl; CheckboxControls; CjkGridPreference; ClearFormBehavior; ClearFormBehaviors; ClipboardPreference — Instance; ClippingPathSettings; ClippingPathType; ColorGroupSwatch.

## CheckBoxes

A checkbox collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Reports the CheckBox element count.
> CheckBox **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Builds a new CheckBox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the CheckBox is created. (Optional) |
| LocationOptions | at | Insertion position for the CheckBox, relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object. Note: Supply this for before or after insertion positions. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new CheckBox. (Optional) |

> CheckBox **item**( Mixed **index** )
>
> Retrieves the CheckBox identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> CheckBox **itemByName**( String **name** )
>
> Retrieves the CheckBox that has the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> CheckBox **itemByID**( Number **id** )
>
> Retrieves the CheckBox that has the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> CheckBox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the CheckBoxes inside the selected range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | CheckBox, index, or name at the start of the range. Can accept: CheckBox, Long Integer or String. |
| Mixed | to | CheckBox, index, or name that closes the range. Can accept: CheckBox, Long Integer or String. |

> CheckBox **firstItem**()
>
> Retrieves the first CheckBox from the collection.
> CheckBox **lastItem**()
>
> Retrieves the final CheckBox from the collection.
> CheckBox **middleItem**()
>
> Retrieves the middle CheckBox from the collection.
> CheckBox **previousItem**( CheckBox **obj** )
>
> Retrieves the CheckBox whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CheckBox | obj | Index of the CheckBox that follows the wanted CheckBox. |

> CheckBox **nextItem**( CheckBox **obj** )
>
> Retrieves the CheckBox whose index comes after the specified CheckBox in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CheckBox | obj | CheckBox whose index is before the wanted CheckBox. |

> CheckBox **anyItem**()
>
> Retrieves any CheckBox from the collection.
> CheckBox **everyItem**()
>
> Retrieves every CheckBox from the collection.
> String **toSource**()
>
> Produces executable source text that reconstructs the CheckBox when run.
> CheckBox **[]**( Number **index** )
>
> Retrieves the CheckBox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## CheckboxControl

A checkbox UI control.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the CheckboxControl.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the CheckboxControl; this can be a DialogColumn, DialogRow, EnablingGroup or BorderPanel.
> _Read Only_
>
> Number **index**
>
> Position of the CheckboxControl within its container.
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
> Boolean **checkedState**
>
> When true, the dialog opens with the control checked.
> String **staticLabel**
>
> Text displayed in the CheckboxControl.
> Number **minWidth**
>
> Control width. For an editbox or combobox, this sets the box minimum width.
> Object **properties**
>
> Property used to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Produces executable source text that reconstructs the CheckboxControl when run.
> CheckboxControl **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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

## CheckboxControls

A collection containing checkbox controls.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> CheckboxControl **add**( Object **withProperties** )
>
> Builds a new CheckboxControl.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new CheckboxControl. (Optional) |

> Number **count**()
>
> Shows how many elements are in the CheckboxControl.
> CheckboxControl **item**( Mixed **index** )
>
> Retrieves the CheckboxControl identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> CheckboxControl **itemByID**( Number **id** )
>
> Retrieves the CheckboxControl that has the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> CheckboxControl **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the CheckboxControls inside the selected range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | CheckboxControl, index, or name at the start of the range. Can accept: CheckboxControl, Long Integer or String. |
| Mixed | to | CheckboxControl, index, or name that closes the range. Can accept: CheckboxControl, Long Integer or String. |

> CheckboxControl **firstItem**()
>
> Retrieves the first CheckboxControl from the collection.
> CheckboxControl **lastItem**()
>
> Retrieves the final CheckboxControl from the collection.
> CheckboxControl **middleItem**()
>
> Retrieves the middle CheckboxControl from the collection.
> CheckboxControl **previousItem**( CheckboxControl **obj** )
>
> Retrieves the CheckboxControl whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CheckboxControl | obj | Index of the CheckboxControl that follows the wanted CheckboxControl. |

> CheckboxControl **nextItem**( CheckboxControl **obj** )
>
> Retrieves the CheckboxControl whose index comes after the specified CheckboxControl in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CheckboxControl | obj | CheckboxControl whose index is before the wanted CheckboxControl. |

> CheckboxControl **anyItem**()
>
> Retrieves any CheckboxControl from the collection.
> CheckboxControl **everyItem**()
>
> Retrieves every CheckboxControl from the collection.
> String **toSource**()
>
> Produces executable source text that reconstructs the CheckboxControl when run.
> CheckboxControl **[]**( Number **index** )
>
> Retrieves the CheckboxControl at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## CjkGridPreference

Preferences for character grids.

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
> Parent object for the CjkGridPreference; this can be a Application or Document.
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
> Boolean **showAllLayoutGrids**
>
> When true, layout grids are displayed.
> Boolean **showAllFrameGrids**
>
> When true, frame (story) grids are displayed.
> Number **minimumScale**
>
> View magnification threshold, as a percentage, below which grids are hidden. (Range: 5 to 4000)
> Boolean **snapToLayoutGrid**
>
> When true, objects snap against the layout grid.
> Mixed **layoutGridColorIndex**
>
> Layout grid color, supplied either as three doubles in an array, each between 0 and 255 for R, G, and B, or through a UI color value. Returns: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Number **colorEveryNthCell**
>
> Grid color is applied to every nth cell, using this property as n.
> Boolean **singleLineColorMode**
>
> When true, the grid color is applied from the the edge of the line. When false, it is applied from the frame corner.
> Boolean **icfMode**
>
> When true, grid cells use ICF mode. When false, virtual body mode is used.
> Boolean **useCircularCells**
>
> When true, cells are circular. When false, cells are rectangular.
> Boolean **showCharacterCount**
>
> When true, the frame displays a character count.
> Object **properties**
>
> Property used to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Produces executable source text that reconstructs the CjkGridPreference when run.
> CjkGridPreference **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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

## ClearFormBehavior

Behavior object that clears document form fields.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the ClearFormBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the ClearFormBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the ClearFormBehavior; allowed parent types include Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of the ClearFormBehavior within its container.
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
> Boolean **enableBehavior**
>
> When true, the behavior is enabled.
> BehaviorEvents **behaviorEvent**
>
> Event that starts the behavior.
> String **label**
>
> Property that accepts any string.
> Object **properties**
>
> Property used to set multiple properties in one operation.

### Methods

> **remove**()
>
> Removes the ClearFormBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Writes a label value under the specified key.

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
| String | key | Key to look up. |

> String **toSource**()
>
> Produces executable source text that reconstructs the ClearFormBehavior when run.
> ClearFormBehavior **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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

## ClearFormBehaviors

A collection containing clear form behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the ClearFormBehavior.
> ClearFormBehavior **add**( Object **withProperties** )
>
> Builds a new ClearFormBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new ClearFormBehavior. (Optional) |

> ClearFormBehavior **item**( Mixed **index** )
>
> Retrieves the ClearFormBehavior identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> ClearFormBehavior **itemByName**( String **name** )
>
> Retrieves the ClearFormBehavior that has the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> ClearFormBehavior **itemByID**( Number **id** )
>
> Retrieves the ClearFormBehavior that has the given ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> ClearFormBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the ClearFormBehaviors inside the selected range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | ClearFormBehavior, index, or name at the start of the range. Can accept: ClearFormBehavior, Long Integer or String. |
| Mixed | to | ClearFormBehavior, index, or name that closes the range. Can accept: ClearFormBehavior, Long Integer or String. |

> ClearFormBehavior **firstItem**()
>
> Retrieves the first ClearFormBehavior from the collection.
> ClearFormBehavior **lastItem**()
>
> Retrieves the final ClearFormBehavior from the collection.
> ClearFormBehavior **middleItem**()
>
> Retrieves the middle ClearFormBehavior from the collection.
> ClearFormBehavior **previousItem**( ClearFormBehavior **obj** )
>
> Retrieves the ClearFormBehavior whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ClearFormBehavior | obj | Index of the ClearFormBehavior that follows the wanted ClearFormBehavior. |

> ClearFormBehavior **nextItem**( ClearFormBehavior **obj** )
>
> Retrieves the ClearFormBehavior whose index comes after the specified ClearFormBehavior in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ClearFormBehavior | obj | ClearFormBehavior whose index is before the wanted ClearFormBehavior. |

> ClearFormBehavior **anyItem**()
>
> Retrieves any ClearFormBehavior from the collection.
> ClearFormBehavior **everyItem**()
>
> Retrieves every ClearFormBehavior from the collection.
> String **toSource**()
>
> Produces executable source text that reconstructs the ClearFormBehavior when run.
> ClearFormBehavior **[]**( Number **index** )
>
> Retrieves the ClearFormBehavior at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## ClipboardPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the ClipboardPreference; this is a Application.
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
> Boolean **preferStyledTextWhenPasting**
>
> When true, pasted text includes text attributes.
> Boolean **preferPDFWhenPasting**
>
> When true, available PDF content is used for paste.
> Boolean **copyPDFToClipboard**
>
> When true, PDF content is copied to the clipboard.
> Boolean **pasteRemembersLayers**
>
> When true, objects cut or copied from different layers keep their layer assignment after paste.
> Boolean **preservePdfClipboardAtQuit**
>
> When true, PDF data remains on the system clipboard when the application exits.
> Boolean **showPasteOptions**
>
> When true, paste options are shown during paste.
> Object **properties**
>
> Property used to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Produces executable source text that reconstructs the ClipboardPreference when run.
> ClipboardPreference **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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

## ClippingPathSettings

Settings for clipping paths.

### Instance

> _Read Only_
>
> String **photoshopPathNames**
>
> Names for clipping paths embedded in the graphic.
> _Read Only_
>
> String **alphaChannelPathNames**
>
> Names for alpha channels embedded in the graphic.
> _Read Only_
>
> Boolean **isValid**
>
> true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Containing object for ClippingPathSettings: Image, EPS, WMF, PICT, PDF, or ImportedPage.
> _Read Only_
>
> Paths **paths**
>
> Paths collection.
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
> ClippingPathType **clippingType**
>
> Selected clipping path type.
> Boolean **invertPath**
>
> When true, the clipping path is inverted.
> Boolean **includeInsideEdges**
>
> When true, interior clipping paths are built inside the surrounding clipping path. Note: Use with alpha channel or detect edges clipping types.
> Boolean **restrictToFrame**
>
> When true, the clipping path is cut off at the edge of the frame that contains the graphic. Note: Use with alpha channel or detect edges clipping types.
> Boolean **useHighResolutionImage**
>
> When true, path generation uses the graphic's high-resolution version. When false, the calculation uses screen-display resolution. Note: Use with detect edges clipping type.
> Number **threshold**
>
> Lowest, darkest pixel value permitted in the image. Pixels with values above that threshold, meaning lighter pixels, are clipped (obscured). (Range: 0 to 255) Note: Use with detect edges or alpha channel clipping types.
> Number **tolerance**
>
> Defines how close a pixel's intensity value may be to the threshold value before the clipping path obscures that pixel. (Range: 0 to 10) Note: Use with detect edges or alpha channel clipping types.
> Measurement Unit (Number or String)=any **insetFrame**
>
> Reduces the area enclosed by the clipping path by the specified amount. (Range by unit: points -10000..10000; picas -833p4..833p4; inches -138.8889..138.8889; mm -3527.778..3527.778; cm -352.7778..352.7778; ciceros -781c11.889..781c11.889)
> String **appliedPathName**
>
> Name of the Photoshop path or alpha channel to apply as the clipping path.
> Object **properties**
>
> Sets several properties in a single operation.

### Methods

> PageItem **convertToFrame**()
>
> Changes the clipping path into a frame.
> String **toSource**()
>
> Builds executable source text that returns the ClippingPathSettings.
> ClippingPathSettings **getElements**()
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
| String | eventType | Event type value. |
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

## ClippingPathType

ClippingPathType selects which kind of clipping path will be created.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> No clipping path is applied.
> _Read Only_
>
> Number `DETECT_EDGES` = 1685349735
>
> Pixel value threshold and tolerance determine the clipping path.
> _Read Only_
>
> Number `ALPHA_CHANNEL` = 1634756707
>
> An alpha channel defined for the graphic in a graphics application supplies the clipping path.
> _Read Only_
>
> Number `PHOTOSHOP_PATH` = 1886613620
>
> Photoshop supplies the graphic's clipping path definition.
> _Read Only_
>
> Number `USER_MODIFIED_PATH` = 1970106484
>
> (Read-only) The clipping path was edited manually.

## ColorGroupSwatch

ColorGroupSwatch represents a swatch inside a color group.

### Instance

> _Read Only_
>
> Swatch **swatchItemRef**
>
> Underlying swatch item.
> _Read Only_
>
> Number **id**
>
> Unique ID for the ColorGroupSwatch.
> _Read Only_
>
> Boolean **isValid**
>
> true when the object specifier resolves to valid objects.
> _Read Only_
>
> ColorGroup **parent**
>
> Containing ColorGroup for the ColorGroupSwatch.
> _Read Only_
>
> Number **index**
>
> Position of the ColorGroupSwatch inside its containing object.
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
> Sets several properties in a single operation.

### Methods

> String **toSource**()
>
> Builds executable source text that returns the ColorGroupSwatch.
> ColorGroupSwatch **getElements**()
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
| String | eventType | Event type value. |
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
