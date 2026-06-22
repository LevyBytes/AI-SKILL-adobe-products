# Spline Items, Spread Flattener Level, Spread, Spreads ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: SplineItems; SpreadFlattenerLevel; Spread — Instance; Spreads; StartParagraph; StateTypes.

## SplineItems

Collection containing spline items.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size, expressed as its object count.

### Methods

> Number **count**()
>
> Reports how many elements the SplineItem collection contains.
> SplineItem **item**( Mixed **index** )
>
> Fetches the SplineItem identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> SplineItem **itemByName**( String **name** )
>
> Fetches the SplineItem that matches the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> SplineItem **itemByID**( Number **id** )
>
> Fetches the SplineItem that matches the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> SplineItem **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the SplineItems bounded by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting SplineItem, index, or name for the range. Can accept: SplineItem, Long Integer or String. |
| Mixed | to | Ending SplineItem, index, or name for the range. Can accept: SplineItem, Long Integer or String. |

> SplineItem **firstItem**()
>
> Fetches the first SplineItem from the collection.
> SplineItem **lastItem**()
>
> Fetches the final SplineItem from the collection.
> SplineItem **middleItem**()
>
> Fetches the center SplineItem from the collection.
> SplineItem **previousItem**( SplineItem **obj** )
>
> Fetches the SplineItem positioned immediately before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SplineItem | obj | Index for the SplineItem that comes after the target SplineItem. |

> SplineItem **nextItem**( SplineItem **obj** )
>
> Fetches the SplineItem positioned immediately after the supplied SplineItem in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SplineItem | obj | SplineItem that comes before the target SplineItem. |

> SplineItem **anyItem**()
>
> Fetches one SplineItem from the collection.
> SplineItem **everyItem**()
>
> Fetches each SplineItem in the collection.
> String **toSource**()
>
> Builds executable string source that evaluates back to the SplineItem.
> SplineItem **[]**( Number **index** )
>
> Fetches the SplineItem at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## SpreadFlattenerLevel

Options that override the flattener level.

### Class

> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Applies the default level.
> _Read Only_
>
> Number **NONE** = 1852796517
>
> Disables flattening.
> _Read Only_
>
> Number **CUSTOM** = 1131639917
>
> Applies the custom flattening level supplied for this case.

## Spread — Instance

> _Read Only_
>
> FlattenerPreference **flattenerPreferences**
>
> Settings object for flattener preferences.
> _Read Only_
>
> Number **index**
>
> Position held by the Spread inside its containing object.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained by the Spread.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained by the Spread.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Timing settings object.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Spread.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent Document for the Spread.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> _Read Only_
>
> Pages **pages**
>
> Collection containing pages.
> _Read Only_
>
> Ovals **ovals**
>
> Collection containing ellipses.
> _Read Only_
>
> SplineItems **splineItems**
>
> Collection containing spline items.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection used to iterate every page item in a container, such as a document, page, or group, without filtering by item type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Collection containing rectangles.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Collection containing graphic lines.
> _Read Only_
>
> TextFrames **textFrames**
>
> Collection containing text frames.
> _Read Only_
>
> Polygons **polygons**
>
> Collection containing polygons.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Collection containing endnote text frames.
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
> _Read Only_
>
> Guides **guides**
>
> Collection containing guides.
> _Read Only_
>
> Groups **groups**
>
> Collection containing groups.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts
> _Read Only_
>
> FormFields **formFields**
>
> Collection containing form fields.
> _Read Only_
>
> Buttons **buttons**
>
> Collection containing buttons.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Collection containing multi-state objects.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Collection containing checkboxes.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Collection containing comboboxes.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Collection containing listboxes.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Collection containing radio buttons.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Collection containing text boxes.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Collection containing signature fields.
> SpreadFlattenerLevel **flattenerOverride**
>
> Transparency flattener preference override assigned to the spread.
> Boolean **allowPageShuffle**
>
> True keeps newly added pages constrained so the spread holds no more than two pages; false permits pages to be inserted or moved into existing spreads. For details on overrides, see preserve layout when shuffling.
> Boolean **showMasterItems**
>
> True shows master page items on document pages in the spread.
> MasterSpread **appliedMaster**
>
> Master spread currently applied to the Spread. Can also accept: NothingEnum enumerator.
> String **idmlComponentName**
>
> IDML component name assigned to the Spread.
> PageTransitionTypeOptions **pageTransitionType**
>
> Page transition type.
> PageTransitionDirectionOptions **pageTransitionDirection**
>
> Page transition direction.
> PageTransitionDurationOptions **pageTransitionDuration**
>
> Page transition duration.
> String **label**
>
> String value available for user-defined labeling.
> String **name**
>
> Spread name; this aliases the Spread label property.
> Object **properties**
>
> Allows multiple properties to be set in a single operation.

### Methods

> PageItem **placeXML**( XMLElement **using**, Measurement Unit (Number or String)=any **placePoint**, Boolean **autoflowing** )
>
> Places an XML element on a page. When the place point is over an existing page item, the XML element is inserted into that item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element that will be placed. |
| Measurement Unit (Number or String)=any | placePoint | Placement point for the object, using the format [x, y]. |
| Boolean | autoflowing | True enables autoflow for placed text. (Optional) |

> PageItem **setContent**( String **using**, String **relativeBasePath** )
>
> Imports file content to replace the content of an XML element.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | using | File path for the import file. |
| String | relativeBasePath | Base path for resolving relative paths. (Optional) |

> Spread **move**( LocationOptions **to**, Mixed **reference** )
>
> Repositions the spread.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Spread placement relative to the reference object or inside the document. (Optional) |
| Mixed | reference | Reference object; required when to is before or after. Accepted forms: Spread, Page or Document. (Optional) |

> **remove**()
>
> Removes the Spread.
> Mixed **duplicate**( LocationOptions **to**, Mixed **reference** )
>
> Creates a duplicate of the spread.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Spread placement relative to the reference object or inside the document. (Optional) |
| Mixed | reference | Reference object; required only when to is before or after. Accepted forms: Spread, Document or MasterSpread. (Optional) |

> Story **placeAndLink**( Story **parentStory**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions** )
>
> Deprecated: Use contentPlace method. Original Description: Builds a linked story and inserts it in the target.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Story | parentStory | Story used as the place-and-link source. |
| Measurement Unit (Number or String)=any | placePoint | Position at which to place. (Optional) |
| Layer | destinationLayer | Layer that receives the placed item. (Optional) |
| Boolean | showingOptions | Whether the link options dialog is shown. (Optional) |

> Mixed **place**( File **fileName**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions**, Boolean **autoflowing**, Object **withProperties** )
>
> Places the specified file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Measurement Unit (Number or String)=any | placePoint | Position at which to place. (Optional) |
| Layer | destinationLayer | Layer that receives the placed item. (Optional) |
| Boolean | showingOptions | Whether the import options dialog is shown. (Optional) |
| Boolean | autoflowing | Whether placed text should autoflow. (Optional) |
| Object | withProperties | Initial property values for the placed object or objects. (Optional) |

> **removeOverride**()
>
> Clears an override from a master page item that had been overridden.
> **detach**()
>
> Detaches an overridden master page item from its master page.
> **select**( SelectionOptions **existingSelection** )
>
> Marks the object as selected.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status for the Spread relative to objects already selected. (Optional) |

> **createGuides**( Number **numberOfRows**, Number **numberOfColumns**, Measurement Unit (Number or String)=any **rowGutter**, Measurement Unit (Number or String)=any **columnGutter**, Mixed **guideColor**, Boolean **fitMargins**, Boolean **removeExisting**, Layer **layer** )
>
> Creates multiple guides across all pages in the spread.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | numberOfRows | Rows generated per page. (Optional) |
| Number | numberOfColumns | Columns generated per page. (Optional) |
| Measurement Unit (Number or String)=any | rowGutter | Gutter height between rows. (Optional) |
| Measurement Unit (Number or String)=any | columnGutter | Gutter width between columns. (Optional) |
| Mixed | guideColor | Guide color, provided as either a three-double array with R, G, and B components from 0 to 255 or as a UI color. Accepted forms: Array of 3 Reals (0 - 255) or UIColors enumerator. (Optional) |
| Boolean | fitMargins | True calculates row height and column width from the area inside page margins; false uses the full page area for those calculations. (Optional) |
| Boolean | removeExisting | True removes current guides while creating the new guides. (Optional) |
| Layer | layer | Layer where the guides are created. (Optional) |

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin used for the transformation. Accepted forms: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Accepted forms: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components that should be considered; when this optional parameter is supplied, the target's existing transform components are replaced with the new values. If it is omitted, the supplied matrix is concatenated with the target's current transform, combining both effects. Accepted forms: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin in ruler units instead of points. The default value is false. This parameter matters only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Resolves the requested location to coordinates in the chosen coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepted forms: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | True interprets a ruler location in ruler units instead of points. The default value is false. This parameter matters only when the reference point is page-relative. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions** )
>
> Copies an object into the target.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page items to be placed or loaded; one or more may be supplied. |
| Boolean | linkPageItems | Whether pageItems are linked in the content placer; true overrides the linkStories value. (Optional) |
| Boolean | linkStories | Whether stories are linked in the content placer; applies only for a single story, and pageItem links are also created when more than one item is involved. (Optional) |
| Boolean | mapStyles | Whether styles are mapped in the content placer. (Optional) |
| Measurement Unit (Number or String)=any | placePoint | Position at which to place. (Optional) |
| Layer | destinationLayer | Layer that receives the placed item. (Optional) |
| Boolean | showingOptions | Whether the link options dialog is shown. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores a label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value assigned to the key. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds executable string source that evaluates back to the Spread.
> Spread **getElements**()
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
| Mixed | handler | Handler to invoke. Accepted forms: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered handler. Accepted forms: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Spreads

Collection containing spreads.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size, expressed as its object count.

### Methods

> Number **count**()
>
> Reports how many elements the Spread collection contains.
> Spread **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a spread.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | at | Spread placement relative to the reference object or inside the document. (Optional) |
| Mixed | reference | Reference object; required when at is before or after. Can accept: Spread or Document. (Optional) |
| Object | withProperties | Initial property values for the new Spread. (Optional) |

> Spread **item**( Mixed **index** )
>
> Fetches the Spread identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> Spread **itemByName**( String **name** )
>
> Fetches the Spread that matches the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Spread **itemByID**( Number **id** )
>
> Fetches the Spread that matches the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Spread **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the Spreads bounded by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Spread, index, or name for the range. Can accept: Spread, Long Integer or String. |
| Mixed | to | Ending Spread, index, or name for the range. Can accept: Spread, Long Integer or String. |

> Spread **firstItem**()
>
> Fetches the first Spread from the collection.
> Spread **lastItem**()
>
> Fetches the final Spread from the collection.
> Spread **middleItem**()
>
> Fetches the center Spread from the collection.
> Spread **previousItem**( Spread **obj** )
>
> Fetches the Spread positioned immediately before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Spread | obj | Index for the Spread that comes after the target Spread. |

> Spread **nextItem**( Spread **obj** )
>
> Fetches the Spread positioned immediately after the supplied Spread in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Spread | obj | Spread that comes before the target Spread. |

> Spread **anyItem**()
>
> Fetches one Spread from the collection.
> Spread **everyItem**()
>
> Fetches each Spread in the collection.
> String **toSource**()
>
> Builds executable string source that evaluates back to the Spread.
> Spread **[]**( Number **index** )
>
> Fetches the Spread at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## StartParagraph

Options controlling column and page breaks.

### Class

> _Read Only_
>
> Number **ANYWHERE** = 1851945579
>
> Begins in the next available space.
> _Read Only_
>
> Number `NEXT_COLUMN` = 1667396203
>
> Begins at the top of the following column.
> _Read Only_
>
> Number `NEXT_FRAME` = 1313235563
>
> Begins in the following threaded text frame, at its top.
> _Read Only_
>
> Number `NEXT_PAGE` = 1885500011
>
> Begins at the top of the following page.
> _Read Only_
>
> Number `NEXT_ODD_PAGE` = 1332765291
>
> Begins at the top of the following odd-numbered page.
> _Read Only_
>
> Number `NEXT_EVEN_PAGE` = 1164993131
>
> Begins at the top of the following even-numbered page.

## StateTypes

Options specifying which events (user actions) switch a button's state.

### Class

> _Read Only_
>
> Number **UP** = 1181971566
>
> Default look used while the button area has no user activity.
> _Read Only_
>
> Number **ROLLOVER** = 1181971574
>
> Used when the mouse pointer enters the button area.
> _Read Only_
>
> Number **DOWN** = 1181971556
>
> Used when the mouse pointer clicks in the button area.
> _Read Only_
>
> Number `UP_ON` = 1181970031
>
> State for up-on appearance.
> _Read Only_
>
> Number `ROLLOVER_ON` = 1181972079
>
> State for rollover-on appearance.
> _Read Only_
>
> Number `DOWN_ON` = 1181967471
>
> State for down-on appearance.
> _Read Only_
>
> Number `UP_OFF` = 1181970022
>
> State for up-off appearance.
> _Read Only_
>
> Number `ROLLOVER_OFF` = 1181972070
>
> State for rollover-off appearance.
> _Read Only_
>
> Number `DOWN_OFF` = 1181967462
>
> State for down-off appearance.
