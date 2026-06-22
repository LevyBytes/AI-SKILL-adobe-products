# Map Type, Margin Preference, Mark Line Weight, Mark Types ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: MapType; MarginPreference — Instance; MarkLineWeight; MarkTypes; MasterSpread; MasterSpreads; MatchCharacterStylePreference; MatchParagraphStylePreference; MatrixContent — Class.

## MapType

Mapping category used by style mappings.

### Class

> _Read Only_
>
> Number `STYLE_MAPPING_RULE` = 1937011570
>
> rule mapping one style to another style.
> _Read Only_
>
> Number `GROUP_MAPPING_RULE` = 1735681906
>
> rule mapping one group to another group.
> _Read Only_
>
> Number `STYLE_TO_GROUP_MAPPING_RULE` = 1937008498
>
> rule mapping a style to a group.
> _Read Only_
>
> Number `GROUP_TO_STYLE_MAPPING_RULE` = 1735684978
>
> rule mapping a group to a style.

## MarginPreference — Instance

> _Read Only_
>
> Boolean **customColumns**
>
> When false, columns use even spacing. When true, custom column widths are allowed.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the MarginPreference, which can be a Application, Document or Page.
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
> Number **columnCount**
>
> Column count to place on the page.
> Measurement Unit (Number or String)=any **columnGutter**
>
> Gap measured between columns.
> Measurement Unit (Number or String)=any **top**
>
> Top edge of the MarginPreference.
> Measurement Unit (Number or String)=any **bottom**
>
> Bottom edge of the MarginPreference.
> Measurement Unit (Number or String)=any **left**
>
> Left edge of the MarginPreference.
> Measurement Unit (Number or String)=any **right**
>
> Right edge of the MarginPreference.
> HorizontalOrVertical **columnDirection**
>
> Text direction used by the column.
> Measurement Unit (Number or String)=any **columnsPositions**
>
> Distance from the left margin to each column guide, represented as an array in the form [guide1, guide2, guide3].
> Object **properties**
>
> Property used to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Produces executable string text that recreates the MarginPreference when run.
> MarginPreference **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier string.
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

## MarkLineWeight

Printer-mark stroke weight options.

### Class

> _Read Only_
>
> Number **P125PT** = 825374064
>
> 125 pt.
> _Read Only_
>
> Number **P25PT** = 842346608
>
> 25 pt.
> _Read Only_
>
> Number **P50PT** = 892350576
>
> 50 pt.
> _Read Only_
>
> Number **P05MM** = 808807789
>
> 05 mm.
> _Read Only_
>
> Number **P07MM** = 808938861
>
> 07 mm.
> _Read Only_
>
> Number **P10MM** = 825257325
>
> 10 mm.
> _Read Only_
>
> Number **P15MM** = 825585005
>
> 15 mm.
> _Read Only_
>
> Number **P20MM** = 842034541
>
> 20 mm.
> _Read Only_
>
> Number **P30MM** = 858811757
>
> 30 mm.

## MarkTypes

Options for printer mark formats.

### Class

> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Applies the default format.
> _Read Only_
>
> Number `J_MARK_WITH_CIRCLE` = 1785558883
>
> Applies J marks with a circle.
> _Read Only_
>
> Number `J_MARK_WITHOUT_CIRCLE` = 1785556579
>
> Applies J marks without a circle.

## MasterSpread

MasterSpread represents a master spread.

### Instance

> _Read Only_
>
> String **name**
>
> Holds the MasterSpread name.
> _Read Only_
>
> PageItem **allPageItems**
>
> Provides every page item that belongs to the MasterSpread.
> _Read Only_
>
> Graphic **allGraphics**
>
> Provides every graphic that belongs to the MasterSpread.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Supplies timing settings for the object.
> _Read Only_
>
> Number **id**
>
> Supplies the MasterSpread unique ID.
> _Read Only_
>
> Boolean **isValid**
>
> Indicates whether the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Document **parent**
>
> Identifies the owning Document for the MasterSpread.
> _Read Only_
>
> Number **index**
>
> Gives the MasterSpread position inside its container.
> _Read Only_
>
> Pages **pages**
>
> Holds the Pages collection.
> _Read Only_
>
> Ovals **ovals**
>
> Holds the ellipses collection.
> _Read Only_
>
> SplineItems **splineItems**
>
> Accesses the collection of spline items.
> _Read Only_
>
> PageItems **pageItems**
>
> Gives access to the PageItems collection for processing every page item in a container, including a document, page, or group, without filtering by kind.
> _Read Only_
>
> Rectangles **rectangles**
>
> Holds the rectangles collection.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Holds the graphic lines collection.
> _Read Only_
>
> TextFrames **textFrames**
>
> Holds the text frames collection.
> _Read Only_
>
> Polygons **polygons**
>
> Holds the polygons collection.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Holds the endnote text frames collection.
> _Read Only_
>
> Events **events**
>
> Holds the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listeners collection.
> _Read Only_
>
> Guides **guides**
>
> Holds the guides collection.
> _Read Only_
>
> Groups **groups**
>
> Holds the groups collection.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts
> _Read Only_
>
> FormFields **formFields**
>
> Holds the form fields collection.
> _Read Only_
>
> Buttons **buttons**
>
> Holds the buttons collection.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Holds the multi-state objects collection.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Holds the checkboxes collection.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Holds the comboboxes collection.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Holds the listboxes collection.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Holds the radio buttons collection.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Holds the text boxes collection.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Holds the signature fields collection.
> _Read Only_
>
> Preferences **preferences**
>
> Holds a collection of preferences objects.
> Mixed **pageColor**
>
> Defines the MasterSpread color label either as an array of three doubles, where each entry is 0 to 255 for R, G, and B, or as a UI color. Returns: Array of 3 Reals (0 - 255), UIColors enumerator, or PageColorOptions enumerator.
> String **namePrefix**
>
> Stores the prefix portion of the master spread name.
> String **baseName**
>
> Stores the master spread name.
> Boolean **showMasterItems**
>
> When true, document pages in the spread show master page items.
> MasterSpread **appliedMaster**
>
> Specifies the master spread assigned to this MasterSpread. Also accepts: NothingEnum enumerator.
> PageItem **primaryTextFrame**
>
> Identifies the primary text frame used for text flow on the MasterSpread. The value must be a text frame or a type on a path spline. Also accepts: NothingEnum enumerator.
> String **idmlComponentName**
>
> Stores the MasterSpread IDML component name.
> String **label**
>
> Stores an arbitrary string value.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> Mixed **duplicate**( LocationOptions **to**, Mixed **reference** )
>
> Makes a copy of the spread.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement target for the copied spread, either relative to the reference object or inside the document. (Optional) |
| Mixed | reference | Object used as the placement reference. Note: needed only when the to parameter specifies before or after. Accepts: MasterSpread, Document, or MasterSpread. (Optional) |

> Story **placeAndLink**( Story **parentStory**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions** )
>
> Deprecated: Use contentPlace method. Original Description: Builds a linked story and places it into the target.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Story | parentStory | Source story used for the linked placement. |
| Measurement Unit (Number or String)=any | placePoint | Point where the content is placed. (Optional) |
| Layer | destinationLayer | Layer receiving the placed content. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears. (Optional) |

> Mixed **place**( File **fileName**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions**, Boolean **autoflowing**, Object **withProperties** )
>
> Inserts the file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File selected for placement. |
| Measurement Unit (Number or String)=any | placePoint | Point where the file is placed. (Optional) |
| Layer | destinationLayer | Layer receiving the file. (Optional) |
| Boolean | showingOptions | Controls whether the import options dialog appears. (Optional) |
| Boolean | autoflowing | Controls whether placed text autoflows. (Optional) |
| Object | withProperties | Starting property values for the placed object(s). (Optional) |

> **remove**()
>
> Removes the MasterSpread.
> **removeOverride**()
>
> Clears the override from a master page item that had been overridden.
> **detach**()
>
> Separates an overridden master page item from its master page.
> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the MasterSpread compared with objects already selected. (Optional) |

> **createGuides**( Number **numberOfRows**, Number **numberOfColumns**, Measurement Unit (Number or String)=any **rowGutter**, Measurement Unit (Number or String)=any **columnGutter**, Mixed **guideColor**, Boolean **fitMargins**, Boolean **removeExisting**, Layer **layer** )
>
> Adds multiple guides across every page of the spread.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | numberOfRows | Row count added per page. (Optional) |
| Number | numberOfColumns | Column count added per page. (Optional) |
| Measurement Unit (Number or String)=any | rowGutter | Gutter height between rows. (Optional) |
| Measurement Unit (Number or String)=any | columnGutter | Gutter width between columns. (Optional) |
| Mixed | guideColor | Color used for the guides, given either as an array of three doubles with values from 0 to 255 for R, G, and B, or as a UI color. Accepts: Array of 3 Reals (0 - 255) or UIColors enumerator. (Optional) |
| Boolean | fitMargins | When true, row height and column width are based on the area inside page margins; when false, the full page is used for those calculations. (Optional) |
| Boolean | removeExisting | When true, old guides are removed as the new guides are created. (Optional) |
| Layer | layer | Layer where the guides are created. (Optional) |

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transformation to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used by the operation. |
| Mixed | from | Temporary origin for the transformation. Accepts: Array of 2 Reals, AnchorPoint enumerator, or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators, or Long Integers. |
| Mixed | withMatrix | Matrix used for the transform. Accepts: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components included in replacement; when this optional argument is supplied, the target's current transform components are replaced by new values. If omitted, the supplied matrix is concatenated with the target's current transform so both effects combine. Accepts: MatrixContent enumerator, Array of MatrixContent enumerators, or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is interpreted in ruler units instead of points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used by the operation. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Converts the requested location into coordinates in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepts: Array of 2 Reals, AnchorPoint enumerator, or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators, or Long Integers. |
| CoordinateSpaces | in | Coordinate space used by the operation. |
| Boolean | consideringRulerUnits | When true, a ruler location is interpreted in ruler units rather than points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions** )
>
> Copies an object and places that copy at the destination.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page items supplied for place or load handling. |
| Boolean | linkPageItems | Controls whether pageItems are linked in the content placer; true takes precedence over the linkStories value. (Optional) |
| Boolean | linkStories | Controls whether stories are linked in the content placer; this applies only to a single story, while pageItem links are also created when more than one item is involved. (Optional) |
| Boolean | mapStyles | Controls whether styles are mapped in the content placer. (Optional) |
| Measurement Unit (Number or String)=any | placePoint | Point where the content is placed. (Optional) |
| Layer | destinationLayer | Layer receiving the content. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog appears. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to set. |
| String | value | Value assigned to the key. |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> String **toSource**()
>
> Produces a string that, when executed, returns the MasterSpread.
> MasterSpread **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## MasterSpreads

MasterSpreads is the collection for master spreads.

### Instance

> _Read Only_
>
> Number **length**
>
> Gives the collection's object count.

### Methods

> MasterSpread **add**( Number **pagesPerSpread**, Object **withProperties** )
>
> Creates a MasterSpread.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | pagesPerSpread | Page count to include in the master spread. (Optional) |
| Object | withProperties | Initial property values for the new MasterSpread. (Optional) |

> Number **count**()
>
> Reports how many elements are in the MasterSpread collection.
> MasterSpread **item**( Mixed **index** )
>
> Gets the MasterSpread identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> MasterSpread **itemByName**( String **name** )
>
> Gets the MasterSpread that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> MasterSpread **itemByID**( Number **id** )
>
> Gets the MasterSpread that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MasterSpread **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the MasterSpreads included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a MasterSpread, index, or name. Accepts: MasterSpread, Long Integer, or String. |
| Mixed | to | Range end, supplied as a MasterSpread, index, or name. Accepts: MasterSpread, Long Integer, or String. |

> MasterSpread **firstItem**()
>
> Gets the first MasterSpread in the collection.
> MasterSpread **lastItem**()
>
> Gets the last MasterSpread in the collection.
> MasterSpread **middleItem**()
>
> Gets the middle MasterSpread in the collection.
> MasterSpread **previousItem**( MasterSpread **obj** )
>
> Gets the MasterSpread whose index comes immediately before the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MasterSpread | obj | MasterSpread index that follows the desired MasterSpread. |

> MasterSpread **nextItem**( MasterSpread **obj** )
>
> Gets the MasterSpread whose index comes immediately after the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MasterSpread | obj | MasterSpread whose index comes before the desired MasterSpread. |

> MasterSpread **anyItem**()
>
> Gets any MasterSpread in the collection.
> MasterSpread **everyItem**()
>
> Gets every MasterSpread in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the MasterSpread.
> MasterSpread **[]**( Number **index** )
>
> Gets the MasterSpread at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to access. |

## MatchCharacterStylePreference

Settings for a running header/footer variable that matches a character style.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Indicates whether the object specifier resolves successfully to valid objects.
> _Read Only_
>
> TextVariable **parent**
>
> Identifies the owning TextVariable for the MatchCharacterStylePreference.
> _Read Only_
>
> Events **events**
>
> Holds the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listeners collection.
> String **textBefore**
>
> Text inserted before the variable value. (Limit: 128 characters)
> String **textAfter**
>
> Text inserted after the variable value. (Limit: 128 characters)
> CharacterStyle **appliedCharacterStyle**
>
> Character style assigned to the text. Also accepts: String.
> SearchStrategies **searchStrategy**
>
> Defines the search start point and search direction.
> ChangeCaseOptions **changeCase**
>
> Defines capitalization for the matched text.
> Boolean **deleteEndPunctuation**
>
> When true, end punctuation is removed from the matched text.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Produces a string that, when executed, returns the MatchCharacterStylePreference.
> MatchCharacterStylePreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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

## MatchParagraphStylePreference

Settings for a running header/footer variable that matches a paragraph style.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Indicates whether the object specifier resolves successfully to valid objects.
> _Read Only_
>
> TextVariable **parent**
>
> Identifies the owning TextVariable for the MatchParagraphStylePreference.
> _Read Only_
>
> Events **events**
>
> Holds the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listeners collection.
> String **textBefore**
>
> Text inserted before the variable value. (Limit: 128 characters)
> String **textAfter**
>
> Text inserted after the variable value. (Limit: 128 characters)
> ParagraphStyle **appliedParagraphStyle**
>
> Paragraph style assigned to the text. Also accepts: String.
> SearchStrategies **searchStrategy**
>
> Defines the search start point and search direction.
> ChangeCaseOptions **changeCase**
>
> Defines capitalization for the matched text.
> Boolean **deleteEndPunctuation**
>
> When true, end punctuation is removed from the matched text.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Produces a string that, when executed, returns the MatchParagraphStylePreference.
> MatchParagraphStylePreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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

## MatrixContent — Class

> _Read Only_
>
> Number `SCALE_VALUES` = 1735552887
>
> Scaling components
> _Read Only_
>
> Number `SHEAR_VALUE` = 1936486004
>
> Shearing component
> _Read Only_
>
> Number `ROTATION_VALUE` = 1936746862
>
> Rotation component
> _Read Only_
>
> Number `TRANSLATION_VALUES` = 1936484720
>
> Translation components
