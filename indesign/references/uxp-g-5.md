# Gradient, Gradients, Graphic Layer Option, Graphic Layer ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Gradient — Instance; Gradients; GraphicLayerOption; GraphicLayer; GraphicLayers.

## Gradient — Instance

> _Read Only_
>
> ColorGroup **parentColorGroup**
>
> Identifies the ColorGroup that contains this swatch.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the Gradient.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the Gradient, either an Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of the Gradient inside its containing object.
> _Read Only_
>
> Events **events**
>
> Holds the associated events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the associated event listener collection.
> _Read Only_
>
> GradientStops **gradientStops**
>
> Holds the gradient stop collection.
> GradientType **type**
>
> Specifies which gradient type is used.
> String **name**
>
> Stores the Gradient name.
> String **label**
>
> Stores any string assigned as the label.
> Object **properties**
>
> Allows several property values to be assigned together.

### Methods

> **remove**( Swatch **replacingWith** )
>
> Removes the swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Swatch | replacingWith | Swatch to use where the removed swatch had been applied. (Optional) |

> Gradient **duplicate**()
>
> Creates another Gradient with matching settings.
> Swatch **merge**( Mixed **with** )
>
> Combines the supplied swatches into this swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | with | Swatches supplied for the merge. Accepted forms: Array of Swatches, Swatch or String. |

> **insertLabel**( String **key**, String **value** )
>
> Writes a label entry by pairing the specified key with the supplied value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key for the label entry. |
| String | value | Value stored for that key. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key whose label value should be read. |

> String **toSource**()
>
> Builds executable source text that recreates the Gradient when run.
> Gradient **getElements**()
>
> Resolves the specifier into an array of object references.
> String **toSpecifier**()
>
> Reads the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Gradients

Gradient collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Gradient **add**( Object **withProperties** )
>
> Adds a new Gradient.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new Gradient. (Optional) |

> Number **count**()
>
> Shows how many elements are in the Gradient collection.
> Gradient **item**( Mixed **index** )
>
> Gets the Gradient addressed by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Can accept: Long Integer or String. |

> Gradient **itemByName**( String **name** )
>
> Gets the Gradient with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> Gradient **itemByID**( Number **id** )
>
> Gets the Gradient with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> Gradient **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Gradients that fall within the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Gradient, index, or name at the range start. Can accept: Gradient, Long Integer or String. |
| Mixed | to | Gradient, index, or name at the range end. Can accept: Gradient, Long Integer or String. |

> Gradient **firstItem**()
>
> Gets the first Gradient in this collection.
> Gradient **lastItem**()
>
> Gets the last Gradient in this collection.
> Gradient **middleItem**()
>
> Gets the middle Gradient in this collection.
> Gradient **previousItem**( Gradient **obj** )
>
> Gets the Gradient whose index comes directly before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Gradient | obj | Gradient index that follows the desired Gradient. |

> Gradient **nextItem**( Gradient **obj** )
>
> Gets the Gradient whose index comes directly after the specified Gradient.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Gradient | obj | Gradient index that precedes the desired Gradient. |

> Gradient **anyItem**()
>
> Gets an arbitrary Gradient from this collection.
> Gradient **everyItem**()
>
> Gets all Gradients in this collection.
> String **toSource**()
>
> Builds executable source text that recreates the Gradient when run.
> Gradient **[]**( Number **index** )
>
> Gets the Gradient at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to resolve. |

## GraphicLayerOption

Graphic layer option setting.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the GraphicLayerOption, either an Image, PDF or ImportedPage.
> _Read Only_
>
> Events **events**
>
> Holds the associated events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the associated event listener collection.
> _Read Only_
>
> GraphicLayers **graphicLayers**
>
> Holds the graphic layer collection.
> UpdateLinkOptions **updateLinkOption**
>
> Controls how a graphic link is updated after another application changes graphic-layer visibility settings.
> Object **properties**
>
> Allows several property values to be assigned together.

### Methods

> String **toSource**()
>
> Builds executable source text that recreates the GraphicLayerOption when run.
> GraphicLayerOption **getElements**()
>
> Resolves the specifier into an array of object references.
> String **toSpecifier**()
>
> Reads the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GraphicLayer

Layer contained in a PSD image or PDF file.

### Instance

> _Read Only_
>
> String **name**
>
> Stores the GraphicLayer name.
> _Read Only_
>
> Boolean **originalVisibility**
>
> Reports the layer visibility recorded before the graphic file import. Note: In a script, read this before replacing visibility with a current visibility statement.
> _Read Only_
>
> Boolean **separatorLayer**
>
> True when the layer serves as a separator layer.
> _Read Only_
>
> Boolean **adjustmentLayer**
>
> True when the layer is an adjustment layer. Note: In a script, read this before changing the layer visibility state with a current visibility statement.
> _Read Only_
>
> Boolean **fxLayer**
>
> True when effects are applied to the layer. Note: In a script, read this before changing the layer visibility state with a current visibility statement.
> _Read Only_
>
> Boolean **locked**
>
> True when the GraphicLayer is locked.
> _Read Only_
>
> Boolean **sectionDividerLayer**
>
> True when the layer acts as a section divider layer.
> _Read Only_
>
> Boolean **hasViewState**
>
> True when a view state is defined for the layer.
> _Read Only_
>
> Boolean **viewState**
>
> True when the view state is enabled.
> _Read Only_
>
> Boolean **hasExportState**
>
> True when an export state is defined for the layer.
> _Read Only_
>
> Boolean **exportState**
>
> True when the export state is enabled.
> _Read Only_
>
> Boolean **hasPrintState**
>
> True when a print state is defined for the layer.
> _Read Only_
>
> Boolean **printState**
>
> True when the print state is enabled.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the GraphicLayer.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the GraphicLayer, either a GraphicLayerOption or GraphicLayer.
> _Read Only_
>
> Number **index**
>
> Position of the GraphicLayer inside its containing object.
> _Read Only_
>
> Events **events**
>
> Holds the associated events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the associated event listener collection.
> _Read Only_
>
> GraphicLayers **graphicLayers**
>
> Holds the graphic layer collection.
> Boolean **currentVisibility**
>
> True when the layer is visible in the document.
> Object **properties**
>
> Allows several property values to be assigned together.

### Methods

> String **toSource**()
>
> Builds executable source text that recreates the GraphicLayer when run.
> GraphicLayer **getElements**()
>
> Resolves the specifier into an array of object references.
> String **toSpecifier**()
>
> Reads the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type already registered. |
| Mixed | handler | Handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## GraphicLayers

Graphic layer collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the GraphicLayer collection.
> GraphicLayer **item**( Mixed **index** )
>
> Gets the GraphicLayer addressed by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Can accept: Long Integer or String. |

> GraphicLayer **itemByName**( String **name** )
>
> Gets the GraphicLayer with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> GraphicLayer **itemByID**( Number **id** )
>
> Gets the GraphicLayer with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> GraphicLayer **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the GraphicLayers that fall within the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | GraphicLayer, index, or name at the range start. Can accept: GraphicLayer, Long Integer or String. |
| Mixed | to | GraphicLayer, index, or name at the range end. Can accept: GraphicLayer, Long Integer or String. |

> GraphicLayer **firstItem**()
>
> Gets the first GraphicLayer in this collection.
> GraphicLayer **lastItem**()
>
> Gets the last GraphicLayer in this collection.
> GraphicLayer **middleItem**()
>
> Gets the middle GraphicLayer in this collection.
> GraphicLayer **previousItem**( GraphicLayer **obj** )
>
> Gets the GraphicLayer whose index comes directly before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GraphicLayer | obj | GraphicLayer index that follows the desired GraphicLayer. |

> GraphicLayer **nextItem**( GraphicLayer **obj** )
>
> Gets the GraphicLayer whose index comes directly after the specified GraphicLayer.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GraphicLayer | obj | GraphicLayer index that precedes the desired GraphicLayer. |

> GraphicLayer **anyItem**()
>
> Gets an arbitrary GraphicLayer from this collection.
> GraphicLayer **everyItem**()
>
> Gets all GraphicLayers in this collection.
> String **toSource**()
>
> Builds executable source text that recreates the GraphicLayer when run.
> GraphicLayer **[]**( Number **index** )
>
> Gets the GraphicLayer at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to resolve. |
