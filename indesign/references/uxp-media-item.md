# Media Item (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

A page item that represents sound or movie media.

## Class

> _Read Only_
>
> String `AFTER_ATTRIBUTE_CHANGED` = afterAttributeChanged
>
> Fires after a property value on this MediaItem changes. The event bubbles, and cancellation is not supported.
> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Fires before placement of a MediaItem. The event bubbles, and callers may cancel it.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Fires once placement of a MediaItem has finished. The event bubbles, and cancellation is not supported.

## Instance

> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the MediaItem.
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
> Fill transparency configuration for the MediaItem.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Content transparency configuration for the MediaItem.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default object text-wrap formatting is controlled through these preference properties.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked page items.
> _Read Only_
>
> Boolean **overridden**
>
> True means the item came from a master spread and has been overridden. False means either the master-spread item remains unoverridden or the object was not created from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Object from a master page after an override has been applied. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items inside the MediaItem.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics inside the MediaItem.
> _Read Only_
>
> Page **parentPage**
>
> Page where this page item is displayed.
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
> Unique ID assigned to the MediaItem.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Containing object for the MediaItem; possible containers include Polygon, GraphicLine, Rectangle, Oval or SplineItem.
> _Read Only_
>
> Number **index**
>
> Position of the MediaItem in its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> _Read Only_
>
> Paths **paths**
>
> Collection containing paths.
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
> SVGs **svgs**
>
> Collection containing SVG files.
> _Read Only_
>
> Graphics **graphics**
>
> Collection of imported graphics in vector, metafile, or bitmap formats.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection used to work through every page item in a container such as a document, page, or group without filtering by item type.
> Boolean **allowOverrides**
>
> True permits overriding the master page item.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied to this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied to this item under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> MediaItem bounds without stroke width, expressed as [y1, x1, y2, x2] for the bounding box's top-left and bottom-right corners.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> MediaItem bounds with stroke width included, expressed as [y1, x1, y2, x2] for the bounding box's top-left and bottom-right corners.
> Swatch **fillColor**
>
> Fill swatch applied to the MediaItem, covering color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Tint percentage used for the MediaItem fill color. Use a number from 0 to 100; use -1 to keep the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the MediaItem fill color overprint objects beneath it. False causes the fill color to knock out the colors underneath.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight for the MediaItem, measured in points.
> Number **miterLimit**
>
> Threshold ratio between stroke width and miter length at which a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> Shape used at an open path endpoint.
> EndJoin **endJoin**
>
> Corner join used by the MediaItem.
> StrokeStyle **strokeType**
>
> Stroke style name to use. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the MediaItem.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed-line pattern. Up to six point values may be supplied as [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Stroke swatch used by the MediaItem, covering color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use a number from 0 to 100; use -1 to keep the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Page-coordinate start point for the MediaItem fill gradient, expressed as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Length of a linear fill gradient or radius of a radial fill gradient used by the MediaItem.
> Number **gradientFillAngle**
>
> Linear-gradient angle for the MediaItem fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Page-coordinate start point for the MediaItem stroke gradient, expressed as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Length of a linear stroke gradient or radius of a radial stroke gradient used by the MediaItem.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle for the MediaItem stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the MediaItem stroke color overprint objects beneath it. False causes the stroke color to knock out the colors underneath.
> Swatch **gapColor**
>
> Gap swatch for dashed, dotted, or striped strokes, covering color, gradient, tint, or mixed ink. For related details, see stroke type.
> Number **gapTint**
>
> Gap-color tint as a percentage. Use a number from 0 to 100; use -1 to keep the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors. False makes the gap color knock out those colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the MediaItem.
> Boolean **nonprinting**
>
> True prevents the MediaItem from printing.
> Layer **itemLayer**
>
> Layer containing the MediaItem.
> Boolean **locked**
>
> True means the MediaItem is locked.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance settings for the MediaItem.
> Number **rotationAngle**
>
> MediaItem rotation angle. (Range: -360 to 360)
> Number **shearAngle**
>
> Skew angle used by the MediaItem. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scale used by the MediaItem.
> Number **verticalScale**
>
> Vertical scale used by the MediaItem.
> Number **absoluteRotationAngle**
>
> Relative-to-container rotation angle for the MediaItem. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Relative-to-container skew angle for the MediaItem. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Relative-to-container horizontal scale for the MediaItem.
> Number **absoluteVerticalScale**
>
> Relative-to-container vertical scale for the MediaItem.
> ObjectStyle **appliedObjectStyle**
>
> Object style used by the MediaItem.
> Flip **flip**
>
> Direction used when flipping the printed image.
> Flip **absoluteFlip**
>
> Reports whether the MediaItem was flipped separately from its parent object and, when it was, the flip direction used.
> Boolean **visible**
>
> True means the MediaItem is visible.
> String **name**
>
> Name assigned to the MediaItem.
> CornerOptions **topLeftCornerOption**
>
> Corner shape used for the top-left corner on rectangular shapes and for every corner on non-rectangular shapes. Note: corner option differs from end join because a corner option can receive a radius, while an end join's rounded or beveled result depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Corner shape used for the top-right corner on rectangular shapes.
> CornerOptions **bottomLeftCornerOption**
>
> Corner shape used for the bottom-left corner on rectangular shapes.
> CornerOptions **bottomRightCornerOption**
>
> Corner shape used for the bottom-right corner on rectangular shapes.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the top-left rectangular corner effect, and for every corner effect on non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the rectangular shape's top-right corner effect.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the rectangular shape's bottom-left corner effect.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the rectangular shape's bottom-right corner effect.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the MediaItem.
> Number **leftArrowHeadScale**
>
> Scale factor for the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale factor for the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Property that accepts any string.
> Object **properties**
>
> Property used to set multiple properties in a single operation.

### Methods

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the MediaItem into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the MediaItem. |
| Number | numberOfSides | Side count used for the generated polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Star inset percentage applied to the generated polygon. (Optional) (Range: 0.0 to 100.0) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius used for the generated rectangle. (Optional) |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves the object into the selected library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the stored object. |
| Object | withProperties | Starting property values for the new MediaItem. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the label value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> **placeXML**( XMLElement **using** )
>
> Places XML content into the target object. Note: Existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element containing the content to place. |

> **autoTag**()
>
> Applies XML preference default tags to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item with the specified XML element without removing current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Locates objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matches from last to first. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects matching the find what value and replaces them using the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matches from last to first. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File chosen for placement. |
| Boolean | showingOptions | Controls whether the import options dialog appears. (Optional) |
| Object | withProperties | Initial property values for the placed object or objects. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Overrides a master page item and puts the resulting new object onto the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Clears an override from a master page item that had already been overridden.
> **detach**()
>
> Disconnects an overridden master page item from its master page.
> **remove**()
>
> Removes the MediaItem.
> **fit**( FitOptions **given** )
>
> Uses the requested fit option on the content in a frame.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip operation on the MediaItem.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the MediaItem. |
| Mixed | around | Point used as the flip origin for the MediaItem. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a copy of the MediaItem at the requested location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Optional destination for the new MediaItem, given as coordinates in [x, y] format. Accepted types: Array of 2 Units, Spread, Page or Layer. |
| Measurement Unit (Number or String)=any | by | Offset amount from the original MediaItem position to the new MediaItem position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Sends the MediaItem to a different location. Note: Either the 'to' or 'by' parameter is required; when both are supplied, the to value takes precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Optional new MediaItem location, using (x, y) format. Accepted types: Array of 2 Units, Spread, Page or Layer. |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset from the MediaItem's current position, using (x, y) format. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the requested object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | True clears existing MediaItem attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | True clears MediaItem attributes and formatting that the object style does not define. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object style overrides.
> **clearTransformations**()
>
> Removes MediaItem transformations, such as fitting, flipping, rotation, scaling, and shear operations.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transformation to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin used during transformation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transformation components considered for replacement; supplying this optional value replaces existing target transform components with the new values. Without it, the supplied matrix is concatenated with the target's current transform so both effects are combined. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin with ruler units instead of points. The default value is false. It matters only when the reference point is relative to a page. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Retrieves the page item's transformation values.

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
| Mixed | location | Requested location. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units instead of points. The default value is false. It matters only when the reference point is relative to a page. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors that should remain on the item. The default is \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Transformation origin. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | Method describing how the supplied values affect the current dimensions. |
| Mixed | values | Width and height inputs. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space determines _only_ their length unit; under the 'current dimensions times' resize method, coordinate space is ignored). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | False, when multiple page items are targeted, achieves the new dimensions by moving individual items instead of resizing them. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units instead of points. The default value is false. It matters only when the reference point is relative to a page. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the supplied coordinate space. |

> String **transformAgain**()
>
> Runs again on the MediaItem whatever transformation was most recently applied to any object. Covered operations include flipping, moving, rotating, scaling, and shearing.
> String **transformSequenceAgain**()
>
> Runs again on the MediaItem the most recent transform-operation sequence from one object or from a group operation. Covered operations include flipping, moving, rotating, scaling, and shearing.
> String **transformAgainIndividually**()
>
> Runs again on the MediaItem the latest transformation applied to any MediaItem. Covered operations include flipping, moving, rotating, scaling, and shearing.
> String **transformSequenceAgainIndividually**()
>
> Runs again on the MediaItem the latest transformation sequence from one object or from a group operation. Covered operations include flipping, moving, rotating, scaling, and shearing.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a page-item Plain Text QR Code.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property bag for the new MediaItem's initial values; the same inputs may be supplied through the properties object. |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property bag for the new MediaItem's initial values; the same inputs may be supplied through the properties object. |
