# Groups, Guide Preference, Guide Type Options, Guide ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Groups; GuidePreference — Instance; GuideTypeOptions; Guide — Class; Guides.

## Groups

Collection containing Group objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> Number **count**()
>
> Returns the collection element count.
> Group **add**( PageItem **groupItems**, Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a new Group.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | groupItems | Objects to group. |
| Layer | layer | Layer where the Group is created. (Optional) |
| LocationOptions | at | Insertion location for the Group, relative to reference or inside the container object. (Optional) |
| Mixed | reference | Reference object. Note: Required when at is set to before/after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial property values for the new Group. (Optional) |

> Group **item**( Mixed **index** )
>
> Returns the Group identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Identifier by position or name. Can accept: Long Integer or String. |

> Group **itemByName**( String **name** )
>
> Looks up the Group with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Group **itemByID**( Number **id** )
>
> Looks up the Group with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Group **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the Groups in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, provided as Group, index, or name. Can accept: Group, Long Integer or String. |
| Mixed | to | Range end, provided as Group, index, or name. Can accept: Group, Long Integer or String. |

> Group **firstItem**()
>
> Gets the first Group in the collection.
> Group **lastItem**()
>
> Gets the last Group in the collection.
> Group **middleItem**()
>
> Gets the middle Group in the collection.
> Group **previousItem**( Group **obj** )
>
> Gets the Group immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Group | obj | Group positioned after the desired Group. |

> Group **nextItem**( Group **obj** )
>
> Gets the Group immediately after the specified Group in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Group | obj | Group positioned before the desired Group. |

> Group **anyItem**()
>
> Gets any Group from the collection.
> Group **everyItem**()
>
> Gets every Group in the collection.
> String **toSource**()
>
> Builds a source string that returns the Group when executed.
> Group **[]**( Number **index** )
>
> Returns the Group identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## GuidePreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the GuidePreference (a Application or Document).
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
> Boolean **guidesInBack**
>
> True places guides behind every other object on the spread.
> Boolean **guidesShown**
>
> True displays the guides.
> Boolean **guidesLocked**
>
> True prevents guides from being moved, added, or deleted.
> Boolean **guidesSnapto**
>
> True snaps created, moved, or resized objects to the closest guide inside the specified range. For range information, see guide snapto zone.
> Number **rulerGuidesViewThreshold**
>
> Magnification percentage below which ruler guides are hidden. (Range: 5 to 4000)
> Mixed **rulerGuidesColor**
>
> Guide color supplied as R, G, and B doubles in the 0 to 255 range, or by UIColors. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Object **properties**
>
> Several properties can be set together through this property.

### Methods

> String **toSource**()
>
> Builds a source string that returns the GuidePreference when executed.
> GuidePreference **getElements**()
>
> Turns the object specifier into an object-reference array.
> String **toSpecifier**()
>
> Returns this object's specifier string.
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

## GuideTypeOptions

Options describing ruler guide types.

### Class

> _Read Only_
>
> Number **RULER** = 1735618160
>
> Default ruler guide.
> _Read Only_
>
> Number **LIQUID** = 1735617635
>
> Liquid guide.

## Guide — Class

> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Fires after a Guide has been placed. The event bubbles and cannot be canceled.

### Guide — Instance

> _Read Only_
>
> Boolean **overridden**
>
> true means this object came from a master spread and has been overridden; false covers either a non-overridden master-spread object or an object that did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> References an overridden item whose origin is a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> Page **parentPage**
>
> Identifies the page where this page item is shown.
> _Read Only_
>
> Number **id**
>
> Stores the Guide's unique ID.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Holds the Guide's parent, either a Spread or MasterSpread.
> _Read Only_
>
> Number **index**
>
> Gives the Guide position inside its container.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event-listener collection.
> Boolean **allowOverrides**
>
> true permits the master page item to be overridden.
> Mixed **guideColor**
>
> Defines the guide color as three R, G, and B doubles in the 0 to 255 range, or by using a UI color. Return types include: Array of 3 Reals (0 - 255) or UIColors enumerator.
> HorizontalOrVertical **orientation**
>
> Specifies whether the guide is horizontal or vertical.
> Measurement Unit (Number or String)=any **location**
>
> Places the guide relative to the ruler's current zero point.
> Boolean **fitToPage**
>
> With true, horizontal orientation guides end at the specified page edges; with false, guides continue across the spread width and into the pasteboard.
> Number **viewThreshold**
>
> Sets the percentage magnification below which guides stop displaying. (Range: 5.0 to 4000.0)
> Boolean **locked**
>
> true locks the Guide.
> Layer **itemLayer**
>
> Identifies the layer containing the Guide.
> GuideTypeOptions **guideType**
>
> Chooses the guide type.
> Measurement Unit (Number or String)=any **guideZone**
>
> Defines the guide zone.
> String **label**
>
> Accepts any string as the property value.
> String **name**
>
> Names the Guide and maps to the Guide's label property.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> Mixed **override**( Page **destinationPage** )
>
> Creates a new object on the document page by overriding a master page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page that receives the overridden master page item. |

> **removeOverride**()
>
> Clears the override from a master page item that was overridden earlier.
> **detach**()
>
> Separates an overridden master page item from the master page.
> **remove**()
>
> Deletes this Guide.
> **move**( Measurement Unit (Number or String)=any **to**, Measurement Unit (Number or String)=any **by** )
>
> Repositions the guide. Note: supply either the to parameter or the by parameter; when both are supplied, the to value takes precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Measurement Unit (Number or String)=any | to | Target guide location, formatted as [x, y]. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset used to move the guide from its current position, formatted as [x, y]. (Optional) |

> Guide **duplicate**()
>
> Makes a duplicate of the Guide.
> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the values. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Converts the requested location into coordinates for the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepted inputs: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Boolean | consideringRulerUnits | true interprets a ruler location in ruler units instead of points. The default value is false. This parameter matters only when the reference point is page-relative. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | How the Guide selection relates to objects already selected. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Produces source text that evaluates back to the Guide.
> Guide **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns this object's specifier.
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
| String | eventType | Event type that was registered. |
| Mixed | handler | Event handler that was registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Guides

Guide objects grouped as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Gives the object count in the collection.

### Methods

> Guide **add**( Layer **layer**, Object **withProperties** )
>
> Builds a new guide.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the guide is created. (Optional) |
| Object | withProperties | Starting property values for the new Guide. (Optional) |

> Number **count**()
>
> Reports how many elements are in the Guide.
> Guide **item**( Mixed **index** )
>
> Retrieves the Guide identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts either Long Integer or String. |

> Guide **itemByName**( String **name** )
>
> Retrieves the Guide that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> Guide **itemByID**( Number **id** )
>
> Retrieves the Guide with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> Guide **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the Guides contained within the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Guide, index, or name that starts the range. Can accept: Guide, Long Integer or String. |
| Mixed | to | Guide, index, or name that ends the range. Can accept: Guide, Long Integer or String. |

> Guide **firstItem**()
>
> Retrieves the collection's first Guide.
> Guide **lastItem**()
>
> Retrieves the collection's last Guide.
> Guide **middleItem**()
>
> Retrieves the collection's middle Guide.
> Guide **previousItem**( Guide **obj** )
>
> Retrieves the Guide whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Guide | obj | Guide index that follows the desired Guide. |

> Guide **nextItem**( Guide **obj** )
>
> Retrieves the Guide whose index comes after the specified Guide in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Guide | obj | Guide whose index precedes the desired Guide. |

> Guide **anyItem**()
>
> Retrieves any Guide from the collection.
> Guide **everyItem**()
>
> Retrieves every Guide from the collection.
> String **toSource**()
>
> Produces source text that evaluates back to the Guide.
> Guide **[]**( Number **index** )
>
> Retrieves the Guide at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |
