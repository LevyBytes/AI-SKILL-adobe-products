# Movie (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `AFTER_ATTRIBUTE_CHANGED` = afterAttributeChanged
>
> Sent when a property value changes on this Movie. The event bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before placement of a Movie. The event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after placement of a Movie. The event bubbles and cannot be canceled.

## Movie — Instance

> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked with the Movie.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and was overridden. False covers master-spread items that remain unoverridden as well as objects that did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object that started on a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> Link **itemLink**
>
> Link source file.
> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Transparency configuration.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Stroke transparency configuration.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Fill transparency configuration for the Movie.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Content transparency configuration for the Movie.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text-wrap preference properties that set default formatting when text wraps near page objects.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked page items.
> _Read Only_
>
> PageItem **allPageItems**
>
> Lists every page item contained by the Movie.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic contained by the Movie.
> _Read Only_
>
> Page **parentPage**
>
> Page where this page item appears.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Animation settings for the page item.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Timing settings for the object.
> _Read Only_
>
> Article **allArticles**
>
> All articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the Movie.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Movie, either SplineItem, Polygon, GraphicLine, Rectangle or Oval.
> _Read Only_
>
> Number **index**
>
> Position of the Movie inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Preference object collection.
> _Read Only_
>
> Paths **paths**
>
> Path collection.
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
> _Read Only_
>
> Images **images**
>
> Bitmap image collection across bitmap formats, including TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Imported graphic collection across vector, metafile, and bitmap formats.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection for processing all page items held by containers like documents, pages, or groups, independent of item type.
> _Read Only_
>
> NavigationPoints **navigationPoints**
>
> Navigation point collection.
> _Read Only_
>
> SVGs **svgs**
>
> SVG file collection.
> String **name**
>
> Name assigned to the Movie.
> String **description**
>
> Description assigned to the Movie.
> FloatingWindowPosition **floatingWindowPosition**
>
> Position of the floating window that displays the movie.
> FloatingWindowSize **floatingWindowSize**
>
> Size of the floating window that displays the movie.
> Boolean **playOnPageTurn**
>
> True makes the movie start automatically when a user views the PDF page containing the movie poster.
> Boolean **showControls**
>
> True shows playback controls along the bottom edge of the movie display window.
> Boolean **floatingWindow**
>
> True opens a separate playback window; false uses the PDF document page's poster frame for playback.
> String **url**
>
> URL value.
> String **posterFile**
>
> Poster file.
> MoviePosterTypes **moviePosterType**
>
> Poster type for the movie.
> Boolean **embedInPDF**
>
> True embeds the file in the PDF; false links the file to the PDF. Note: embedding movie files requires acrobat compatibility set to acrobat 6 or higher.
> Number **horizontalScale**
>
> Horizontal scale applied to the Movie.
> Number **verticalScale**
>
> Vertical scale applied to the Movie.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds of the Movie without stroke width, in the format [y1, x1, y2, x2], where the coordinates identify the bounding box top-left and bottom-right corners.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds of the Movie including stroke width, in the format [y1, x1, y2, x2], where the coordinates identify the bounding box top-left and bottom-right corners.
> Layer **itemLayer**
>
> Layer containing the Movie.
> String **filePath**
>
> Mac OS colon-delimited file path. Can also accept: File.
> String **controllerSkin**
>
> Video controller skin name.
> Boolean **showController**
>
> True displays the controller skin on mouse rollover.
> Boolean **movieLoop**
>
> True makes the movie loop forever.
> Boolean **allowOverrides**
>
> True lets the master page item be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints that affect this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints that affect this item under the object-based layout rule.
> Swatch **fillColor**
>
> Fill swatch applied to the Movie, covering color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the Movie's fill color. Use 0 to 100 for an explicit tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True overprints Movie fill color on underlying objects; false knocks out those underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight for the Movie, measured in points.
> Number **miterLimit**
>
> Maximum stroke-width-to-miter-length ratio before a pointed miter join changes into a squared-off bevel join.
> EndCap **endCap**
>
> End shape for an open path.
> EndJoin **endJoin**
>
> Corner join applied to the Movie.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment for the Movie.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Custom dashed-line pattern dash and gap measurements. Provide as many as six point values in the format [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead applied to the start of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead applied to the end of the path.
> Swatch **strokeColor**
>
> Stroke swatch applied to the Movie, covering color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for an explicit tint percent, or -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point in page coordinates for a gradient applied to the Movie fill, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the Movie fill, this gives linear-gradient length or radial-gradient radius.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the Movie fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point in page coordinates for a gradient applied to the Movie stroke, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the Movie stroke, this gives linear-gradient length or radial-gradient radius.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the Movie stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True overprints Movie stroke color on underlying objects; false knocks out those underlying colors.
> Swatch **gapColor**
>
> Gap swatch for a dashed, dotted, or striped stroke, covering color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint percentage. Use 0 to 100 for an explicit tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True overprints the gap color on underlying colors; false knocks out the underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment applied to the Movie.
> Boolean **nonprinting**
>
> True means the Movie does not print.
> Boolean **locked**
>
> True locks the Movie.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the Movie.
> Number **rotationAngle**
>
> Rotation angle for the Movie. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the Movie. (Range: -360 to 360)
> Number **absoluteRotationAngle**
>
> Rotation angle for the Movie relative to the object that contains it. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Skewing angle for the Movie relative to the object that contains it. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the Movie relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the Movie relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the Movie.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Indicates whether the Movie was flipped independently of its parent object and, when it was, the direction used for the flip.
> Boolean **visible**
>
> True means the Movie is visible.
> CornerOptions **topLeftCornerOption**
>
> Shape used for the upper-left corner on rectangular shapes and for every corner on non-rectangular shapes. Note: unlike end join, a corner option can set radius; rounded or beveled end-join effects depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Shape used for the upper-right corner on rectangular shapes.
> CornerOptions **bottomLeftCornerOption**
>
> Shape used for the lower-left corner on rectangular shapes.
> CornerOptions **bottomRightCornerOption**
>
> Shape used for the lower-right corner on rectangular shapes.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the corner effect on rectangular shapes' upper-left corner and on every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the corner effect on the upper-right corner of rectangular shapes.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the corner effect on the lower-left corner of rectangular shapes.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the corner effect on the lower-right corner of rectangular shapes.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment applied to the Movie.
> Number **leftArrowHeadScale**
>
> Scale factor for the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale factor for the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Stores caller-defined string data.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> Asset **store**( Library **using**, Object **withProperties** )
>
> Adds the object to the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the object. |
| Object | withProperties | Starting property values for the new Movie. (Optional) |

> **placeXML**( XMLElement **using** )
>
> Puts XML content into the specified object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose content should be placed. |

> **autoTag**()
>
> Applies default tags from XML preference to the object or parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> Boolean **verifyURL**()
>
> Checks that the specified URL is valid and includes the specified movie file. This applies only when the movie is identified by URL instead of file path.
> Movie **duplicate**()
>
> Creates a duplicate Movie.
> **bringToFront**( PageItem **reference** )
>
> Moves the Movie to the front of its layer or before a particular item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object should move in front of; it must have the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the Movie behind everything in its layer or behind a same-parent item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object should move behind. (Optional) |

> **bringForward**()
>
> Moves the Movie forward one layer level.
> **sendBackward**()
>
> Moves the Movie back one layer level.
> **fit**( FitOptions **given** )
>
> Applies the specified fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **remove**()
>
> Deletes this Movie.
> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the Movie. Note: either 'to' or 'by' is required; when both are supplied, only 'to' is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New Movie location in (x, y) format. Allowed values include Spread, Page, Layer, or Array of 2 Units. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset from the current Movie position in measurement units. Optional; use (x, y). |

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Allowed values include AnchorPoint enumerator, Array of 2 Reals, CoordinateSpaces enumerators, BoundingBoxLimits enumerators, Long Integers, AnchorPoint enumerators, or Array of Arrays of 2 Reals. |
| Mixed | withMatrix | Transformation matrix. Allowed values: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; supplying this optional parameter replaces the target's current transform components with new values. If omitted, the given matrix concatenates with the current target transform so both effects combine. Allowed values: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin with ruler units instead of points. The default value is false. This parameter only matters when the reference point is specified relative to a page. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors to keep with the item; default \{1.0, 1.0}. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Converts a master page item override into a new object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page that contains the master page item being overridden. |

> **removeOverride**()
>
> Removes override status from a master page item that was already overridden.
> **detach**()
>
> Separates an overridden master page item from the master.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the Movie to another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the Movie. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Resulting star polygon inset percent; valid values are 0.0 through 100.0. Optional. |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Clears Movie transformations: fitting, shearing, flipping, scaling, and rotation.
> **select**( SelectionOptions **existingSelection** )
>
> Selects the object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status for the Movie relative to previously selected objects. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores value on the label entry identified by key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key for the label entry. |
| String | value | Value for the label entry. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Performs file placement.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Boolean | showingOptions | Whether to show the import options dialog. (Optional) |
| Object | withProperties | Initial properties for objects placed by the call. (Optional) |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a Movie flip.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the Movie. |
| Mixed | around | Point used as the flip origin. Optional; accepts AnchorPoint enumerator or Array of 2 Units. |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | When true, existing Movie attributes are cleared before style application. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | True clears attributes and formatting on the Movie that the object style does not define. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Returns coordinates for `location` after evaluating it in the requested coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Specifies the requested location. Accepted forms: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Selects the coordinate space for the result. |
| Boolean | consideringRulerUnits | When true, ruler-based positions use ruler units instead of points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the dimensions of the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Identifies the bounding box that will be resized. Accepted forms: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Defines the transformation origin. Allowed specifications include: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepted forms: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | Determines how `values` changes the current dimensions. |
| Mixed | values | Supplies width and height data. Allowed dimensions specifications include: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers. Coordinate space determines just the length unit for x and y, and the 'current dimensions times' resize method ignores coordinate space). Accepted forms: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and the target contains multiple page items, the result is reached by moving the separate items rather than resizing each one. (Optional) |
| Boolean | consideringRulerUnits | When true, ruler-based positions use ruler units instead of points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Repositions the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Identifies the bounding box to change. Accepted forms: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Provides opposite corners for the replacement bounding box in the selected coordinate space. |

> String **transformAgain**()
>
> Reapplies to the Movie the most recent transformation used on any object. Moving, rotating, shearing, scaling, and flipping are included.
> String **transformSequenceAgain**()
>
> Reapplies to the Movie the latest ordered set of transform operations used on one object or simultaneously on grouped objects. Moving, rotating, shearing, scaling, and flipping are included.
> String **transformAgainIndividually**()
>
> Repeats on the Movie the last transformation used on any Movie. Moving, rotating, shearing, scaling, and flipping are included.
> String **transformSequenceAgainIndividually**()
>
> Runs again on the Movie the latest transform sequence used on one object or simultaneously on a group of objects. Moving, rotating, shearing, scaling, and flipping are included.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a page-item QR code whose data type is Plain Text.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Accepted forms: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Movie; the preceding parameters may be supplied through this object too. (Optional) |
