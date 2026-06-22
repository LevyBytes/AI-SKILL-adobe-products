# Page, Pages Panel, Pages, Panel Layout Resize ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Page — Instance; PagesPanel — Instance; Pages; PanelLayoutResize; Panel.

## Page — Instance

> _Read Only_
>
> Section **appliedAlternateLayout**
>
> Alternate layout section containing this page.
> _Read Only_
>
> MarginPreference **marginPreferences**
>
> Settings for margins.
> _Read Only_
>
> PageSideOptions **side**
>
> Binding-spine side used for positioning the page inside the spread.
> _Read Only_
>
> String **name**
>
> Name assigned to the Page.
> _Read Only_
>
> Section **appliedSection**
>
> Section containing this page.
> _Read Only_
>
> Number **index**
>
> Position of the Page inside its container.
> _Read Only_
>
> Number **documentOffset**
>
> Sequential page number inside the document.
> _Read Only_
>
> Measurement Unit (Number or String)=any **bounds**
>
> Page bounds, using the format [y1, x1, y2, x2].
> _Read Only_
>
> Mixed **masterPageItems**
>
> Items on a specified document page that came from the applied master page and remain neither overridden nor detached. Return values may be: Array of PageItems, Guides, Graphics, Movies or Sounds.
> _Read Only_
>
> PageItem **allPageItems**
>
> Returns every page item contained by the Page.
> _Read Only_
>
> Graphic **allGraphics**
>
> Returns every graphic contained by the Page.
> _Read Only_
>
> GridDataInformation **gridData**
>
> Default grid settings. Note: covers named, layout, and frame (story) grids.
> _Read Only_
>
> Number **id**
>
> Unique ID for the Page.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Page (a Spread or MasterSpread).
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preferences objects.
> _Read Only_
>
> Ovals **ovals**
>
> Collection of ellipses.
> _Read Only_
>
> SplineItems **splineItems**
>
> Collection for spline items.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection of page items for processing every page item in a container, such as a document, page, or group, without filtering by type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Collection of rectangles.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Collection of graphic lines.
> _Read Only_
>
> TextFrames **textFrames**
>
> Collection of text frames.
> _Read Only_
>
> Polygons **polygons**
>
> Collection of polygons.
> _Read Only_
>
> Events **events**
>
> Collection of events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection of event listeners.
> _Read Only_
>
> Guides **guides**
>
> Collection of guides.
> _Read Only_
>
> Groups **groups**
>
> Collection of groups.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts
> _Read Only_
>
> FormFields **formFields**
>
> Collection of form fields.
> _Read Only_
>
> Buttons **buttons**
>
> Collection of buttons.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Collection of multi-state objects.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Collection of checkboxes.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Collection of comboboxes.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Collection of listboxes.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Collection of radio buttons.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Collection of text boxes.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Collection of signature fields.
> LayoutRuleOptions **layoutRule**
>
> Layout rule value.
> SnapshotBlendingModes **snapshotBlendingMode**
>
> Snapshot blending mode value.
> Boolean **optionalPage**
>
> Marks an optional page for HTML5 pagination. Obsolete after CS6.
> TrapPreset **appliedTrapPreset**
>
> Trap preset assigned to the page. Can also accept: String.
> Mixed **pageColor**
>
> Color label for the Page, supplied either as an array of three doubles from 0 to 255 representing R, G, and B, or as a UI color. Return values may be: Array of 3 Reals (0 - 255) or UIColors enumerator or PageColorOptions enumerator.
> MasterSpread **appliedMaster**
>
> Master spread assigned to the Page. Can also accept: NothingEnum enumerator.
> TransformationMatrix **masterPageTransform**
>
> Transform applied to the master page before applying it to Page.
> Mixed **tabOrder**
>
> Focus order for PDF form fields when the tab key is pressed. Return values may be: Array of Buttons, CheckBoxes, ComboBoxes, ListBoxes, RadioButtons, TextBoxes or SignatureFields.
> String **label**
>
> Settable string property.
> Object **properties**
>
> Property for assigning multiple properties in one operation.

### Methods

> **adjustLayout**( Object **adoptTo**, Page **affectedPages** )
>
> Recomputes the current layout from supplied page size, bleed, and margin settings. Pass the first parameter as a plain object whose key/value pairs name affected properties. Allowed keys: width, height, bleedInside, bleedTop, bleedOutside, bleedBottom, leftMargin, topMargin, rightMargin, bottomMargin. Values may be decimal Pt numbers or measurement strings such as '1 in'. Include only the properties that should change. For calls aimed at individual pages rather than the whole document, bleed updates are ignored. E.g. - app.activeDocument.adjustLayout(\{width:'600px', leftMargin: '1in'}), app.activeDocument.adjustLayout(\{rightMargin:'1in'}, app.activeDocument.spreads[0].pages), app.activeDocument.spreads[0].pages[0].adjustLayout(\{width:'400px', leftMargin: '10px'})

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | adoptTo | Values to change; see the function definition for details |
| Page | affectedPages | Page objects that receive the change (optional). Ignored for Page-level calls (Optional) |

> PageItem **placeXML**( XMLElement **using**, Measurement Unit (Number or String)=any **placePoint**, Boolean **autoflowing** )
>
> Places the XML element on a page. If the place point sits above an existing page item, the XML element is inserted into that page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element being placed. |
| Measurement Unit (Number or String)=any | placePoint | Placement point for the object, in [x, y] format. |
| Boolean | autoflowing | When true, placed text autoflows. (Optional) |

> PageItem **setContent**( String **using**, String **relativeBasePath** )
>
> Replaces XML element content with material imported from a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | using | Import file path. |
| String | relativeBasePath | Base path for resolving relative paths. (Optional) |

> **snapshotCurrentLayout**()
>
> Creates a layout snapshot for the current Page size and shape.
> **deleteLayoutSnapshot**()
>
> Deletes the layout snapshot for the current Page size and shape.
> **deleteAllLayoutSnapshots**()
>
> Deletes every layout snapshot for this Page.
> Page **move**( LocationOptions **to**, Mixed **reference**, BindingOptions **binding** )
>
> Repositions the page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | New page location, either relative to the reference object or inside the document or spread. (Optional) |
| Mixed | reference | Reference object. Requirement: supply it for before/after placement. Can accept: Page or Spread. (Optional) |
| BindingOptions | binding | Binding-spine location in spreads. (Optional) |

> **remove**()
>
> Removes the Page.
> Page **duplicate**( LocationOptions **to**, Mixed **reference** )
>
> Creates a duplicate of the page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Destination for the duplicated page, either relative to the reference object or inside the document or spread. (Optional) |
| Mixed | reference | Reference object. Requirement: supply it for before/after placement. Can accept: Page or Spread. (Optional) |

> Story **placeAndLink**( Story **parentStory**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions** )
>
> Deprecated: use contentPlace method. Original behavior: creates a linked story and places it into the target.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Story | parentStory | Story used as the source for placement and linking. |
| Measurement Unit (Number or String)=any | placePoint | Placement point (Optional) |
| Layer | destinationLayer | Destination layer (Optional) |
| Boolean | showingOptions | Whether the link options dialog is shown (Optional) |

> Mixed **place**( File **fileName**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions**, Boolean **autoflowing**, Object **withProperties** )
>
> Places the specified file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File being placed |
| Measurement Unit (Number or String)=any | placePoint | Placement point (Optional) |
| Layer | destinationLayer | Destination layer (Optional) |
| Boolean | showingOptions | Whether the import options dialog is shown (Optional) |
| Boolean | autoflowing | Whether placed text autoflows (Optional) |
| Object | withProperties | Initial property values for the placed object(s) (Optional) |

> **removeOverride**()
>
> Removes an override from a master page item that had been overridden.
> **detach**()
>
> Detaches an overridden master page item from its master page.
> **select**( SelectionOptions **existingSelection** )
>
> Makes the object selected.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status of the Page relative to objects already selected. (Optional) |

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation |
| Mixed | from | Transformation's temporary origin. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transform. Accepts: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to replace. Supplying this optional parameter swaps existing target transform components for new values. If omitted, the given matrix is concatenated onto the target's existing transform so both effects combine. Accepts: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is read in ruler units instead of points. Default value: false. This parameter applies only when the reference point is page-relative. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box targeted for resizing. Accepts: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the given coordinate space |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box targeted for resizing. Accepts: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin for the transform. Legal forms: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the given values affect current dimensions |
| Mixed | values | Width and height inputs. Legal dimension forms: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; where x and y are real numbers and coordinate space is used to determine _only_ the unit of length for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Accepts: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and multiple page items are targeted, the new dimensions are achieved by moving individual items rather than resizing those items. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. Default value: false. This parameter applies only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns transformation values for the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Returns the coordinates for the requested location in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. Default value: false. This parameter applies only when the reference point is page-relative. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions** )
>
> Duplicates an object and places it into the target.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items to place or load |
| Boolean | linkPageItems | Whether content placer should link pageItems; true overrides the linkStories value (Optional) |
| Boolean | linkStories | Whether content placer should link stories; applies only to a single story, while pageItem links are also created when more than one item is present (Optional) |
| Boolean | mapStyles | Whether content placer maps styles (Optional) |
| Measurement Unit (Number or String)=any | placePoint | Placement point (Optional) |
| Layer | destinationLayer | Destination layer (Optional) |
| Boolean | showingOptions | Whether the link options dialog is shown (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Gets the stored label value for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Generates a string that can return the Page when executed.
> Page **getElements**()
>
> Resolves the object specifier and produces an object-reference array.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PagesPanel — Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the PagesPanel.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the PagesPanel (a Application).
> _Read Only_
>
> Number **index**
>
> Position of the PagesPanel inside its container.
> _Read Only_
>
> Events **events**
>
> Collection of events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection of event listeners.
> PageViewOptions **pagesViewSetting**
>
> Setting that controls page arrangement in the panel's page section.
> IconSizes **iconSize**
>
> Icon size for pages.
> IconSizes **masterIconSize**
>
> Icon size for master pages.
> Boolean **masterVerticalView**
>
> If true, master page icons are arranged vertically around the binding spine. If false, they are arranged horizontally.
> PanelLayoutResize **resizeBehavior**
>
> Behavior used by the document and master page areas when the panel is resized.
> Boolean **pagesOnTop**
>
> If true, the panel draws the pages area above the master pages area.
> Boolean **pagesThumbnails**
>
> If true, the pages area of the panel shows page thumbnails.
> Boolean **mastersThumbnails**
>
> If true, the master pages area of the panel shows page thumbnails.
> Boolean **transparencyIcons**
>
> If true, spreads containing transparent elements show a transparency icon.
> Boolean **transitionsIcons**
>
> If true, spreads with page transitions show a page transitions icon.
> Boolean **rotationIcons**
>
> If true, spreads with non-zero rotation show a rotation icon.
> Boolean **visible**
>
> If true, the panel is visible.
> Object **properties**
>
> Property for assigning multiple properties in one operation.

### Methods

> String **toSource**()
>
> Generates a string that can return the PagesPanel when executed.
> PagesPanel **getElements**()
>
> Resolves the object specifier and produces an object-reference array.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Pages

Collection containing pages.

### Instance

> _Read Only_
>
> Number **length**
>
> Number of objects in the collection.

### Methods

> Number **count**()
>
> Displays the element count for the Page.
> Page **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | at | New page location, either relative to the reference object or inside the document or spread. (Optional) |
| Mixed | reference | Reference object. Requirement: supply it for before/after insertion. Can accept: Page, Spread, MasterSpread or Document. (Optional) |
| Object | withProperties | Initial property values for the new Page (Optional) |

> Page **item**( Mixed **index** )
>
> Returns the Page identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> Page **itemByName**( String **name** )
>
> Returns the Page identified by the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Page **itemByID**( Number **id** )
>
> Returns the Page identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Page **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the Pages inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting range endpoint. Accepts: Page, Long Integer or String. |
| Mixed | to | Ending range endpoint. Accepts: Page, Long Integer or String. |

> Page **firstItem**()
>
> Yields the collection's first Page.
> Page **lastItem**()
>
> Yields the collection's last Page.
> Page **middleItem**()
>
> Yields the collection's middle Page.
> Page **previousItem**( Page **obj** )
>
> Returns the Page with an index immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | obj | Page index immediately after the desired Page. |

> Page **nextItem**( Page **obj** )
>
> Returns the Page whose index comes after the specified Page in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | obj | Preceding Page used to locate the following item. |

> Page **anyItem**()
>
> Returns an arbitrary Page from the collection.
> Page **everyItem**()
>
> Returns all Pages from the collection.
> String **toSource**()
>
> Generates a string that can return the Page when executed.
> Page **[]**( Number **index** )
>
> Returns the Page identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## PanelLayoutResize

Options controlling how palette layout areas resize.

### Class

> _Read Only_
>
> Number `PROPORTIONAL_RESIZE` = 1886417010
>
> Resizes panel areas proportionally.
> _Read Only_
>
> Number `PAGES_FIXED` = 1886414456
>
> Keeps the document pages panel area fixed while resizing the panel.
> _Read Only_
>
> Number `MASTERS_FIXED` = 1886416230
>
> Keeps the master pages panel area fixed while resizing the panel.

## Panel

A panel, possibly contained by a panel group.

### Instance

> _Read Only_
>
> String **name**
>
> Identifies this Panel by name.
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> References the owning Application for this Panel.
> _Read Only_
>
> Number **index**
>
> Gives this Panel's position inside the container that owns it.
> _Read Only_
>
> Events **events**
>
> Provides the associated events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the associated event listener collection.
> Boolean **visible**
>
> True means the panel is currently shown.
> Object **properties**
>
> Supports applying multiple property values together.

### Methods

> String **toSource**()
>
> Builds executable text that recreates the Panel when run.
> Panel **getElements**()
>
> Resolves the specifier and returns object references as an array.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler to invoke. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
