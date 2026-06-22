# Documents, Dotted Stroke Style, Dotted Stroke Styles, Drop Shadow Setting ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Documents; DottedStrokeStyle; DottedStrokeStyles; DropShadowSetting; Dropdown; Dropdowns; DTDs; DTD; DynamicDocumentsJPEGQualityOptions; DynamicDocumentsTextExportPolicy; DynamicMediaHandlingOptions; DynamicTriggerEvents.

## Documents

Documents collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Document **add**( Boolean **showingWindow**, DocumentPreset **documentPreset**, Object **withProperties** )
>
> Creates a document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | showingWindow | When true, the document is displayed. (Optional) |
| DocumentPreset | documentPreset | Document preset to apply. (Optional) |
| Object | withProperties | Starting property values for the new Document. (Optional) |

> Number **count**()
>
> Shows how many elements are in the Document.
> Document **item**( Mixed **index** )
>
> Gets the Document at the specified index or with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> Document **itemByName**( String **name** )
>
> Gets the Document with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Document **itemByID**( Number **id** )
>
> Gets the Document with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Document **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Documents included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Document, index, or name that starts the range. Accepts: Document, Long Integer or String. |
| Mixed | to | Document, index, or name that ends the range. Accepts: Document, Long Integer or String. |

> Document **firstItem**()
>
> Gets the first Document in the collection.
> Document **lastItem**()
>
> Gets the last Document in the collection.
> Document **middleItem**()
>
> Gets the middle Document in the collection.
> Document **previousItem**( Document **obj** )
>
> Gets the Document whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Document | obj | Index of the Document that follows the requested Document. |

> Document **nextItem**( Document **obj** )
>
> Gets the Document whose index comes after the specified Document in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Document | obj | Document whose index precedes the requested Document. |

> Document **anyItem**()
>
> Gets any Document in the collection.
> Document **everyItem**()
>
> Gets every Document in the collection.
> String **toSource**()
>
> Produces a string which, when executed, returns the Document.
> Document **[]**( Number **index** )
>
> Gets the Document at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## DottedStrokeStyle

Dotted stroke style.

### Instance

> _Read Only_
>
> String **strokeStyleType**
>
> Stroke style type.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the DottedStrokeStyle.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the DottedStrokeStyle (a Document or Application).
> _Read Only_
>
> Number **index**
>
> Index of the DottedStrokeStyle inside its container.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listeners collection.
> Measurement Unit (Number or String)=any **dotArray**
>
> Gap lengths between dots. Define up to five values.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the DottedStrokeStyle.
> String **name**
>
> Name of the DottedStrokeStyle.
> Object **properties**
>
> Property bundle for assigning several properties at once.

### Methods

> DottedStrokeStyle **duplicate**()
>
> Makes a duplicate DottedStrokeStyle.
> **remove**( Mixed **replacingWith** )
>
> Removes this stroke style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | replacingWith | Stroke style applied instead of the deleted style. Accepts: StrokeStyle or String. (Optional) |

> String **toSource**()
>
> Produces a string which, when executed, returns the DottedStrokeStyle.
> DottedStrokeStyle **getElements**()
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

## DottedStrokeStyles

Dotted stroke styles collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> DottedStrokeStyle **add**( Object **withProperties** )
>
> Creates a DottedStrokeStyle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new DottedStrokeStyle. (Optional) |

> Number **count**()
>
> Shows how many elements are in the DottedStrokeStyle.
> DottedStrokeStyle **item**( Mixed **index** )
>
> Gets the DottedStrokeStyle at the specified index or with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> DottedStrokeStyle **itemByName**( String **name** )
>
> Gets the DottedStrokeStyle with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> DottedStrokeStyle **itemByID**( Number **id** )
>
> Gets the DottedStrokeStyle with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> DottedStrokeStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the DottedStrokeStyles included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | DottedStrokeStyle, index, or name that starts the range. Accepts: DottedStrokeStyle, Long Integer or String. |
| Mixed | to | DottedStrokeStyle, index, or name that ends the range. Accepts: DottedStrokeStyle, Long Integer or String. |

> DottedStrokeStyle **firstItem**()
>
> Gets the first DottedStrokeStyle in the collection.
> DottedStrokeStyle **lastItem**()
>
> Gets the last DottedStrokeStyle in the collection.
> DottedStrokeStyle **middleItem**()
>
> Gets the middle DottedStrokeStyle in the collection.
> DottedStrokeStyle **previousItem**( DottedStrokeStyle **obj** )
>
> Gets the DottedStrokeStyle whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DottedStrokeStyle | obj | Index of the DottedStrokeStyle that follows the requested DottedStrokeStyle. |

> DottedStrokeStyle **nextItem**( DottedStrokeStyle **obj** )
>
> Gets the DottedStrokeStyle whose index comes after the specified DottedStrokeStyle in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DottedStrokeStyle | obj | DottedStrokeStyle whose index precedes the requested DottedStrokeStyle. |

> DottedStrokeStyle **anyItem**()
>
> Gets any DottedStrokeStyle in the collection.
> DottedStrokeStyle **everyItem**()
>
> Gets every DottedStrokeStyle in the collection.
> String **toSource**()
>
> Produces a string which, when executed, returns the DottedStrokeStyle.
> DottedStrokeStyle **[]**( Number **index** )
>
> Gets the DottedStrokeStyle at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## DropShadowSetting

Drop shadow settings.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for this DropShadowSetting: a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listeners collection.
> Measurement Unit (Number or String)=any **distance**
>
> Distance separating the item from its shadow.
> Number **angle**
>
> Angle used to cast the shadow.
> ShadowMode **mode**
>
> Shadow mode.
> BlendMode **blendMode**
>
> Blending mode applied to the drop shadow effect.
> Number **opacity**
>
> Drop shadow opacity percentage. Allowed: 0 to 100.
> Measurement Unit (Number or String)=any **xOffset**
>
> Horizontal drop shadow offset. Range varies by unit type: points: -1000 to 1000; picas: -83p4 to 83p4; inches: -13.8889 to 13.8889; mm: -352.778 to 352.778; cm: -35.277 to 35.277; ciceros: -78c2.389 to 78c2.389.
> Measurement Unit (Number or String)=any **yOffset**
>
> Vertical drop shadow offset. Range varies by unit type: points: -1000 to 1000; picas: -83p4 to 83p4; inches: -13.8889 to 13.8889; mm: -352.778 to 352.778; cm: -35.277 to 35.277; ciceros: -78c2.389 to 78c2.389.
> Measurement Unit (Number or String)=any **size**
>
> Blur radius, in pixels, applied to the drop shadow. Range varies by unit type: points: 0 to 144; picas: 0p0 to 12p0; inches: 0 to 2; mm: 0 to 50.08; cm: 0 to 5.08; ciceros: 0c0 to 11c3.128.
> Swatch **effectColor**
>
> Drop shadow color. Accepted forms: a swatch, including color, gradient, tint, or mixed ink; or an array of color values. Array interpretation follows the color mode: RGB uses three values from 0 to 255 in [R,G,B] format; CMYK uses four percentage values from 0 to 100 in [C,M,Y,K] format; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127.
> Number **noise**
>
> Noise amount applied to the shadow, as a percentage. (Range: 0 to 100)
> Number **spread**
>
> Spread amount, as a percentage of blur width, used to enlarge the drop shadow footprint and shrink the blur radius. (Range: 0 to 100)
> Boolean **useGlobalLight**
>
> When true, the global light angle is used.
> Boolean **knockedOut**
>
> When true, the layer knocks out the drop shadow.
> Boolean **honorOtherEffects**
>
> When true, the drop shadow accounts for other non-shadow effects.
> Object **properties**
>
> Property bundle for assigning several properties at once.

### Methods

> String **toSource**()
>
> Produces a string which, when executed, returns the DropShadowSetting.
> DropShadowSetting **getElements**()
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

## Dropdown

Dropdown control.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Dropdown.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for this Dropdown: a DialogColumn, DialogRow, EnablingGroup or BorderPanel.
> _Read Only_
>
> Number **index**
>
> Index of the Dropdown inside its containing object.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listeners collection.
> String **stringList**
>
> Menu items for a dropdown or combobox control, represented as an array of strings.
> Number **selectedIndex**
>
> Index of the current selection in a dropdown or combobox control.
> Number **minWidth**
>
> Control width. For an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Property bundle for assigning several properties at once.

### Methods

> String **toSource**()
>
> Produces a string which, when executed, returns the Dropdown.
> Dropdown **getElements**()
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

## Dropdowns

Dropdowns collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Dropdown **add**( Object **withProperties** )
>
> Creates a Dropdown.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new Dropdown. (Optional) |

> Number **count**()
>
> Shows how many elements are in the Dropdown.
> Dropdown **item**( Mixed **index** )
>
> Gets the Dropdown at the specified index or with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> Dropdown **itemByID**( Number **id** )
>
> Gets the Dropdown with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Dropdown **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Dropdowns included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Dropdown, index, or name that starts the range. Accepts: Dropdown, Long Integer or String. |
| Mixed | to | Dropdown, index, or name that ends the range. Accepts: Dropdown, Long Integer or String. |

> Dropdown **firstItem**()
>
> Gets the first Dropdown in the collection.
> Dropdown **lastItem**()
>
> Gets the last Dropdown in the collection.
> Dropdown **middleItem**()
>
> Gets the middle Dropdown in the collection.
> Dropdown **previousItem**( Dropdown **obj** )
>
> Gets the Dropdown whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Dropdown | obj | Index of the Dropdown that follows the requested Dropdown. |

> Dropdown **nextItem**( Dropdown **obj** )
>
> Gets the Dropdown whose index comes after the specified Dropdown in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Dropdown | obj | Dropdown whose index precedes the requested Dropdown. |

> Dropdown **anyItem**()
>
> Gets any Dropdown in the collection.
> Dropdown **everyItem**()
>
> Gets every Dropdown in the collection.
> String **toSource**()
>
> Produces a string which, when executed, returns the Dropdown.
> Dropdown **[]**( Number **index** )
>
> Gets the Dropdown at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## DTDs

DTDs collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the DTD.
> DTD **item**( Mixed **index** )
>
> Gets the DTD at the specified index or with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> DTD **itemByID**( Number **id** )
>
> Gets the DTD with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> DTD **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the DTDs included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | DTD, index, or name that starts the range. Accepts: DTD, Long Integer or String. |
| Mixed | to | DTD, index, or name that ends the range. Accepts: DTD, Long Integer or String. |

> DTD **firstItem**()
>
> Gets the first DTD in the collection.
> DTD **lastItem**()
>
> Gets the last DTD in the collection.
> DTD **middleItem**()
>
> Gets the middle DTD in the collection.
> DTD **previousItem**( DTD **obj** )
>
> Gets the DTD whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DTD | obj | Index of the DTD that follows the requested DTD. |

> DTD **nextItem**( DTD **obj** )
>
> Gets the DTD whose index comes after the specified DTD in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DTD | obj | DTD whose index precedes the requested DTD. |

> DTD **anyItem**()
>
> Gets any DTD in the collection.
> DTD **everyItem**()
>
> Gets every DTD in the collection.
> String **toSource**()
>
> Produces a string which, when executed, returns the DTD.
> DTD **[]**( Number **index** )
>
> Gets the DTD at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## DTD

Document DTD.

### Instance

> _Read Only_
>
> String **systemId**
>
> For an external-subset DTD, this is the DOCTYPE declaration's system ID.
> _Read Only_
>
> String **publicId**
>
> For an external-subset DTD, this is the DOCTYPE declaration's public ID.
> _Read Only_
>
> Mixed **contents**
>
> Text contents. Returns: String or SpecialCharacters enumerator.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the DTD.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent of the DTD (a Document).
> _Read Only_
>
> Number **index**
>
> Index of the DTD inside its containing object.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listeners collection.
> XMLTag **rootTag**
>
> Tag of the root object.
> Object **properties**
>
> Property bundle for assigning several properties at once.

### Methods

> **remove**()
>
> Removes this DTD object.
> **select**( SelectionOptions **existingSelection** )
>
> Marks this object as selected.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the DTD relative to objects already selected. (Optional) |

> String **toSource**()
>
> Produces a string which, when executed, returns the DTD.
> DTD **getElements**()
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

## DynamicDocumentsJPEGQualityOptions

Options controlling JPEG quality for dynamic documents.

### Class

> _Read Only_
>
> Number **MINIMUM** = 1701727598
>
> Selects the minimum JPEG compression setting.
> _Read Only_
>
> Number **LOW** = 1701727351
>
> Selects the low JPEG compression setting.
> _Read Only_
>
> Number **MEDIUM** = 1701727588
>
> Selects the medium JPEG compression setting.
> _Read Only_
>
> Number **HIGH** = 1701726313
>
> Selects the high JPEG compression setting.
> _Read Only_
>
> Number **MAXIMUM** = 1701727608
>
> Selects the maximum JPEG compression setting.

## DynamicDocumentsTextExportPolicy

Policy options for exporting text in dynamic documents.

### Class

> _Read Only_
>
> Number **LIVE** = 1952804972
>
> Exports text as editable live text.
> _Read Only_
>
> Number **RASTERIZE** = 1952804978
>
> Rasterizes the text during output.
> _Read Only_
>
> Number **VECTORIZE** = 1952804982
>
> Converts the text to vector form during output.
> _Read Only_
>
> Number **TLF** = 1952804980
>
> Outputs text using Text Layout Framework text.

## DynamicMediaHandlingOptions

Choices for how dynamic media is handled.

### Class

> _Read Only_
>
> Number `INCLUDE_ALL_MEDIA` = 1231241580
>
> Includes every interactive element.
> _Read Only_
>
> Number `APPEARANCE_ONLY` = 1097887823
>
> Renders only the appearance of interactive elements.

## DynamicTriggerEvents

The playback trigger event for a group of dynamic target objects.

### Class

> _Read Only_
>
> Number `ON_PAGE_LOAD` = 1953321036
>
> Fires the target when the page loads.
> _Read Only_
>
> Number `ON_PAGE_CLICK` = 1953321027
>
> Fires the target after a page click.
> _Read Only_
>
> Number `ON_STATE_LOAD` = 1953321804
>
> Fires the target when a state loads inside a multi-state object.
> _Read Only_
>
> Number `ON_CLICK` = 1953317740
>
> Fires the target from a button click or self click.
> _Read Only_
>
> Number `ON_ROLLOVER` = 1953321590
>
> Fires the target from a button rollover or self rollover.
> _Read Only_
>
> Number `ON_RELEASE` = 1953321580
>
> Fires the target when the button is released.
> _Read Only_
>
> Number `ON_ROLLOFF` = 1953321574
>
> Fires the target on a button rolloff.
> _Read Only_
>
> Number `ON_SELF_CLICK` = 1951613804
>
> Fires the target on self click.
> _Read Only_
>
> Number `ON_SELF_ROLLOVER` = 1951617638
>
> Fires the target on self rollover.
