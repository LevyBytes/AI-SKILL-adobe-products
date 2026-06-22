# Color Group Swatches, Color Group, Color Groups, Color Model ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ColorGroupSwatches; ColorGroup; ColorGroups; ColorModel; ColorOutputModes; ColorRenderingDictionary; ColorSetting; ColorSettingsPolicy; ColorSpace; Color; Colors.

## ColorGroupSwatches

ColorGroupSwatches is the collection type for color group swatch objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> ColorGroupSwatch **add**( Swatch **swatchItemRef**, Object **withProperties** )
>
> Adds a swatch entry to a color group.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Swatch | swatchItemRef | Swatch to add to the color group. |
| Object | withProperties | Starting property values for the new ColorGroupSwatch. (Optional) |

> Number **count**()
>
> Shows how many elements are in the ColorGroupSwatch collection.
> ColorGroupSwatch **item**( Mixed **index** )
>
> Gets the ColorGroupSwatch identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts Long Integer or String. |

> ColorGroupSwatch **itemByID**( Number **id** )
>
> Gets the ColorGroupSwatch with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> ColorGroupSwatch **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ColorGroupSwatches that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | ColorGroupSwatch, index, or name at the range start. Accepts ColorGroupSwatch, Long Integer or String. |
| Mixed | to | ColorGroupSwatch, index, or name at the range end. Accepts ColorGroupSwatch, Long Integer or String. |

> ColorGroupSwatch **firstItem**()
>
> Gets the first ColorGroupSwatch in the collection.
> ColorGroupSwatch **lastItem**()
>
> Gets the last ColorGroupSwatch in the collection.
> ColorGroupSwatch **middleItem**()
>
> Gets the middle ColorGroupSwatch in the collection.
> ColorGroupSwatch **previousItem**( ColorGroupSwatch **obj** )
>
> Gets the ColorGroupSwatch at the index immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ColorGroupSwatch | obj | Index of the ColorGroupSwatch that comes after the desired ColorGroupSwatch. |

> ColorGroupSwatch **nextItem**( ColorGroupSwatch **obj** )
>
> Gets the ColorGroupSwatch whose index comes after the specified ColorGroupSwatch in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ColorGroupSwatch | obj | ColorGroupSwatch whose index comes before the desired ColorGroupSwatch. |

> ColorGroupSwatch **anyItem**()
>
> Gets any ColorGroupSwatch in the collection.
> ColorGroupSwatch **everyItem**()
>
> Gets every ColorGroupSwatch in the collection.
> String **toSource**()
>
> Builds executable source text that returns the ColorGroupSwatch.
> ColorGroupSwatch **[]**( Number **index** )
>
> Gets the ColorGroupSwatch at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## ColorGroup

ColorGroup represents a color group.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID for the ColorGroup.
> _Read Only_
>
> Boolean **isValid**
>
> true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Containing object for the ColorGroup: Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of the ColorGroup inside its containing object.
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
> ColorGroupSwatches **colorGroupSwatches**
>
> Collection of color group swatches.
> String **name**
>
> Name of the ColorGroup.
> String **label**
>
> Any string value may be assigned to this property.
> Object **properties**
>
> Sets several properties in a single operation.

### Methods

> **remove**()
>
> Deletes the ColorGroup.
> **ungroup**()
>
> Breaks apart a color group.
> ColorGroup **duplicate**()
>
> Creates a duplicate ColorGroup.
> **insertLabel**( String **key**, String **value** )
>
> Stores value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value assigned to the key. |

> String **extractLabel**( String **key** )
>
> Reads the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds executable source text that returns the ColorGroup.
> ColorGroup **getElements**()
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

## ColorGroups

ColorGroups is the collection type for color group objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count held here.

### Methods

> ColorGroup **add**( String **name**, Swatch **swatchList**, Object **withProperties** )
>
> Creates a ColorGroup.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Color group name. (Optional) |
| Swatch | swatchList | Swatches to include in the color group. (Optional) |
| Object | withProperties | Starting property values for the new ColorGroup. (Optional) |

> Number **count**()
>
> Shows how many elements are in the ColorGroup collection.
> ColorGroup **item**( Mixed **index** )
>
> Gets the ColorGroup identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts Long Integer or String. |

> ColorGroup **itemByName**( String **name** )
>
> Gets the ColorGroup with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> ColorGroup **itemByID**( Number **id** )
>
> Gets the ColorGroup with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> ColorGroup **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ColorGroups that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | ColorGroup, index, or name at the range start. Accepts ColorGroup, Long Integer or String. |
| Mixed | to | ColorGroup, index, or name at the range end. Accepts ColorGroup, Long Integer or String. |

> ColorGroup **firstItem**()
>
> Gets the first ColorGroup in the collection.
> ColorGroup **lastItem**()
>
> Gets the last ColorGroup in the collection.
> ColorGroup **middleItem**()
>
> Gets the middle ColorGroup in the collection.
> ColorGroup **previousItem**( ColorGroup **obj** )
>
> Gets the ColorGroup at the index immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ColorGroup | obj | Index of the ColorGroup that comes after the desired ColorGroup. |

> ColorGroup **nextItem**( ColorGroup **obj** )
>
> Gets the ColorGroup whose index comes after the specified ColorGroup in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ColorGroup | obj | ColorGroup whose index comes before the desired ColorGroup. |

> ColorGroup **anyItem**()
>
> Gets any ColorGroup in the collection.
> ColorGroup **everyItem**()
>
> Gets every ColorGroup in the collection.
> String **toSource**()
>
> Builds executable source text that returns the ColorGroup.
> ColorGroup **[]**( Number **index** )
>
> Gets the ColorGroup at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## ColorModel

Options that identify the ColorModel.

### Class

> _Read Only_
>
> Number **SPOT** = 1936748404
>
> Model for spot inks.
> _Read Only_
>
> Number **PROCESS** = 1886548851
>
> Model for process output.
> _Read Only_
>
> Number **REGISTRATION** = 1919248243
>
> Model for registration marks.
> _Read Only_
>
> Number **MIXEDINKMODEL** = 1768844664
>
> Model for mixed inks.

## ColorOutputModes

Options for composite color output modes.

### Class

> _Read Only_
>
> Number `COMPOSITE_LEAVE_UNCHANGED` = 1668107349
>
> Sends the specified pages to the printer as full color while retaining all original document color values. Note: Overprint cannot be simulated with this option.
> _Read Only_
>
> Number `COMPOSITE_GRAY` = 1668116583
>
> Prints the specified pages as grayscale.
> _Read Only_
>
> Number `COMPOSITE_RGB` = 1668108866
>
> Prints the specified pages in full color.
> _Read Only_
>
> Number `COMPOSITE_CMYK` = 1668105035
>
> Prints the specified pages in full color. Note: Requires PostScript printers.
> _Read Only_
>
> Number **SEPARATIONS** = 1936027745
>
> Prints PostScript information for each required separation. Note: Requires PostScript printers.
> _Read Only_
>
> Number `INRIP_SEPARATIONS` = 1919512691
>
> Lets the printer generate color separations. Note: Use only with a PostScript raster image processing (RIP) device.

## ColorRenderingDictionary

ColorRenderingDictionary chooses the CRD to use.

### Class

> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> The default CRD is used.
> _Read Only_
>
> Number `USE_DOCUMENT` = 1967419235
>
> The document's CRD is used.
> _Read Only_
>
> Number **WORKING** = 1466921579
>
> The working CRD is used.

## ColorSetting

Settings for color management.

### Instance

> _Read Only_
>
> String **engineList**
>
> Available color engines.
> _Read Only_
>
> String **cmsSettingsList**
>
> Valid color management system settings configurations.
> _Read Only_
>
> String **workingSpaceCMYKList**
>
> Valid CMYK color profiles.
> _Read Only_
>
> String **workingSpaceRGBList**
>
> Valid RGB color profiles.
> _Read Only_
>
> Boolean **isValid**
>
> true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Containing Application for the ColorSetting.
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
> ColorSettingsPolicy **cmykPolicy**
>
> Policy for colors in a CMYK color model, covering profile reading and embedding, mismatch resolution between embedded profiles and the working space, and color movement between documents.
> Boolean **enableColorManagement**
>
> When true, color management is enabled.
> String **engine**
>
> Color management module (CMM) used to map color space gamuts between documents.
> Boolean **mismatchAskWhenOpening**
>
> When true, opening a file whose embedded color profile differs from the current working space displays a prompt. That prompt can override the default mismatch behavior.
> Boolean **mismatchAskWhenPasting**
>
> When true, importing an object by pasting, drag-and-drop, or similar methods prompts if its colors differ from the current working space. That prompt can override the default mismatch behavior.
> Boolean **missingAskWhenOpening**
>
> When true, opening a file without an embedded color profile displays a prompt. The prompt can assign a color profile.
> ColorSettingsPolicy **rgbPolicy**
>
> Policy for colors in an RGB color model, covering profile reading and embedding, mismatch handling between embedded profiles and the working space, plus color transfer between documents.
> String **cmsSettings**
>
> Current color management system settings configuration. Note: For possible values, see CMS settings list.
> File **cmsSettingsPath**
>
> File path for the CSF file to use.
> Boolean **useBPC**
>
> When true, black point compensation preserves shadow detail by simulating the output device's full dynamic range.
> String **workingSpaceCMYK**
>
> Current CMYK profile.
> String **workingSpaceRGB**
>
> Current RGB profile.
> DefaultRenderingIntent **intent**
>
> Default rendering intent.
> Boolean **accurateLABSpots**
>
> When true, LAB alternates are used for spot colors when available.
> Boolean **idealizedBlackToScreen**
>
> When true, CMYK-to-RGB or CMYK-to-Gray conversions to the screen use idealized black.
> Boolean **idealizedBlackToExport**
>
> When true, CMYK-to-RGB or CMYK-to-Gray conversions to print or export use idealized black.
> Object **properties**
>
> Sets several properties in a single operation.

### Methods

> String **toSource**()
>
> Builds executable source text that returns the ColorSetting.
> ColorSetting **getElements**()
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

## ColorSettingsPolicy

ColorSettingsPolicy defines how mismatched CMYK configurations are handled.

### Class

> _Read Only_
>
> Number `COLOR_POLICY_OFF` = 1129344870
>
> For documents with profiles outside the working space, color management is disabled. Imported colors use their numeric values ahead of their displayed appearance.
> _Read Only_
>
> Number `PRESERVE_EMBEDDED_PROFILES` = 1129345136
>
> Newly opened documents keep the color profiles embedded in them.
> _Read Only_
>
> Number `CONVERT_TO_WORKING_SPACE` = 1129346931
>
> Newly opened documents are changed to the active working space. With imported colors, visual color appearance takes precedence over numeric values.
> _Read Only_
>
> Number `COMBINATION_OF_PRESERVE_AND_SAFE_CMYK` = 1129345124
>
> Raw color numbers remain intact while embedded color profiles are disregarded.

## ColorSpace

Options for color spaces.

### Class

> _Read Only_
>
> Number **RGB** = 1666336578
>
> RGB.
> _Read Only_
>
> Number **CMYK** = 1129142603
>
> CMYK.
> _Read Only_
>
> Number **LAB** = 1665941826
>
> LAB.
> _Read Only_
>
> Number **MIXEDINK** = 1666009432
>
> Mixed ink.
> _Read Only_
>
> Number **HSB** = 1665684290
>
> HSB.

## Color

A swatch representing a color.

### Instance

> _Read Only_
>
> ColorGroup **parentColorGroup**
>
> The swatch's owning color group.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Color.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Color, either an Application or a Document.
> _Read Only_
>
> Number **index**
>
> Position of the Color inside the object that contains it.
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
> ColorModel **model**
>
> Color model.
> ColorSpace **space**
>
> Color space.
> Number **colorValue**
>
> Ink values, expressed as percentages for the individual inks, define the color. Note: The needed value count and allowed limits depend on the color space. RGB takes three values from 0 to 255; CMYK takes C, M, Y, and K values from 0 to 100; LAB takes L (Range: 0 to 100), plus A and B values (Range: -128 to 127); mixed ink takes one value per ink in the ink list, each from 0 to 100.
> String **name**
>
> Name of the Color.
> String **label**
>
> Any string can be stored in this property.
> Object **properties**
>
> Several properties can be assigned together through this property.

### Methods

> **remove**( Swatch **replacingWith** )
>
> Removes the swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Swatch | replacingWith | Swatch used where the removed swatch had been applied. (Optional) |

> Color **duplicate**()
>
> Creates a duplicate of the Color.
> Swatch **merge**( Mixed **with** )
>
> Combines the specified swatches into this swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | with | Swatches to combine. Allowed: Array of Swatches, Swatch or String. |

> **insertLabel**( String **key**, String **value** )
>
> Stores the label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **toSource**()
>
> Produces a string that, when executed, returns the Color.
> Color **getElements**()
>
> Resolves the object specifier and creates an array containing object references.
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
| Mixed | handler | Event handler. Allowed: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Allowed: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Colors

A collection made up of Color objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> Number **count**()
>
> Shows how many elements are in the Color collection.
> Color **add**( Object **withProperties** )
>
> Adds a new Color.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new Color. (Optional) |

> Color **item**( Mixed **index** )
>
> Gets the Color identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Allowed: Long Integer or String. |

> Color **itemByName**( String **name** )
>
> Gets the Color with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> Color **itemByID**( Number **id** )
>
> Gets the Color with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> Color **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Colors inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Color, index, or name used as the range start. Allowed: Color, Long Integer or String. |
| Mixed | to | Color, index, or name used as the range end. Allowed: Color, Long Integer or String. |

> Color **firstItem**()
>
> Gets the first Color in the collection.
> Color **lastItem**()
>
> Gets the last Color in the collection.
> Color **middleItem**()
>
> Gets the middle Color in the collection.
> Color **previousItem**( Color **obj** )
>
> Gets the Color whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Color | obj | Index of the Color that comes after the desired Color. |

> Color **nextItem**( Color **obj** )
>
> Gets the Color whose index comes after the specified Color in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Color | obj | Color whose index is immediately before the desired Color. |

> Color **anyItem**()
>
> Gets any Color from the collection.
> Color **everyItem**()
>
> Gets every Color in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the Color.
> Color **[]**( Number **index** )
>
> Gets the Color at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |
