# Button (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a Button is placed; bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after a Button is placed; bubbles and cannot be canceled.

## Button — Instance

> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings for anchored objects.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default text-wrap formatting properties for wrapping text around objects.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Timing settings for the object.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the Button.
> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Transparency controls.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Stroke transparency controls.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Transparency controls for the Button fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency controls for Button content.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Linked Page Item options.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden. False means it either came from a master spread without override, or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object whose origin is a master page. May return PageItem, Guide, Graphic, Movie, or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items inside the Button.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics inside the Button.
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
> Article **allArticles**
>
> Articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Button.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Button: Snippet, PlaceGun, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, or Character.
> _Read Only_
>
> Number **index**
>
> Button index inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Preference-object collection.
> _Read Only_
>
> Ovals **ovals**
>
> Ellipse collection.
> _Read Only_
>
> SplineItems **splineItems**
>
> Collection of spline items.
> _Read Only_
>
> PageItems **pageItems**
>
> Page-item collection for processing every page item in a container, such as a document, page, or group, without filtering by type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Rectangle collection.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Graphic-line collection.
> _Read Only_
>
> TextFrames **textFrames**
>
> Text-frame collection.
> _Read Only_
>
> Polygons **polygons**
>
> Polygon collection.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Endnote text-frame collection.
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
> Bitmap-image collection for bitmap formats such as TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Imported-graphics collection covering vector, metafile, or bitmap formats.
> _Read Only_
>
> EPSs **epss**
>
> EPS file collection.
> _Read Only_
>
> WMFs **wmfs**
>
> WMF graphic collection.
> _Read Only_
>
> PICTs **picts**
>
> PICT graphic collection.
> _Read Only_
>
> PDFs **pdfs**
>
> PDF file collection.
> _Read Only_
>
> Groups **groups**
>
> Group collection.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts.
> _Read Only_
>
> States **states**
>
> State collection.
> _Read Only_
>
> SVGs **svgs**
>
> SVG file collection.
> _Read Only_
>
> Behaviors **behaviors**
>
> Behavior-object collection.
> _Read Only_
>
> GotoFirstPageBehaviors **gotoFirstPageBehaviors**
>
> Collection of goto first page behavior objects.
> _Read Only_
>
> GotoLastPageBehaviors **gotoLastPageBehaviors**
>
> Collection of goto last page behavior objects.
> _Read Only_
>
> GotoNextPageBehaviors **gotoNextPageBehaviors**
>
> Collection of goto next page behavior objects.
> _Read Only_
>
> GotoPreviousPageBehaviors **gotoPreviousPageBehaviors**
>
> Collection of goto previous page behavior objects.
> _Read Only_
>
> GotoNextViewBehaviors **gotoNextViewBehaviors**
>
> Collection of goto next view behavior objects.
> _Read Only_
>
> GotoPreviousViewBehaviors **gotoPreviousViewBehaviors**
>
> Collection of goto previous view behavior objects.
> _Read Only_
>
> GotoURLBehaviors **gotoURLBehaviors**
>
> Collection of goto URL behavior objects.
> _Read Only_
>
> GotoAnchorBehaviors **gotoAnchorBehaviors**
>
> Collection of goto anchor behavior objects.
> _Read Only_
>
> MovieBehaviors **movieBehaviors**
>
> Collection of movie behavior objects.
> _Read Only_
>
> SoundBehaviors **soundBehaviors**
>
> Collection of sound behavior objects.
> _Read Only_
>
> ShowHideFieldsBehaviors **showHideFieldsBehaviors**
>
> Collection of show/hide fields behavior objects.
> _Read Only_
>
> OpenFileBehaviors **openFileBehaviors**
>
> Collection of open file behavior objects.
> _Read Only_
>
> ViewZoomBehaviors **viewZoomBehaviors**
>
> Collection of view zoom behavior objects.
> _Read Only_
>
> SubmitFormBehaviors **submitFormBehaviors**
>
> Collection of submit form behavior objects.
> _Read Only_
>
> ClearFormBehaviors **clearFormBehaviors**
>
> Collection of clear form behavior objects.
> _Read Only_
>
> PrintFormBehaviors **printFormBehaviors**
>
> Collection of print form behavior objects.
> _Read Only_
>
> AnimationBehaviors **animationBehaviors**
>
> Animation-behavior collection.
> _Read Only_
>
> GotoNextStateBehaviors **gotoNextStateBehaviors**
>
> Collection of goto next state behaviors.
> _Read Only_
>
> GotoPreviousStateBehaviors **gotoPreviousStateBehaviors**
>
> Collection of goto previous state behaviors.
> _Read Only_
>
> GotoStateBehaviors **gotoStateBehaviors**
>
> Collection of goto state behaviors.
> _Read Only_
>
> GotoPageBehaviors **gotoPageBehaviors**
>
> Collection of go to page behavior objects.
> Boolean **printableInPdf**
>
> True makes the form field/push button printable in the exported PDF.
> Boolean **hiddenUntilTriggered**
>
> True keeps the form field/push button hidden in the exported PDF until a trigger shows it.
> Number **activeStateIndex**
>
> Position of the active state within the object's states collection.
> String **name**
>
> Button name.
> String **description**
>
> Button description.
> Boolean **allowOverrides**
>
> True permits overriding the master page item.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Under the object-based layout rule, this holds the left margin, width, and right margin constraints for the item.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Under the object-based layout rule, this holds the top margin, height, and bottom margin constraints for the item.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Button bounds excluding stroke width, using [y1, x1, y2, x2] for the top-left and bottom-right bounding-box corners.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Button bounds including stroke width, using [y1, x1, y2, x2] for the top-left and bottom-right bounding-box corners.
> Swatch **fillColor**
>
> Swatch applied to the Button fill: color, gradient, tint, or mixed ink. Also accepts String.
> Number **fillTint**
>
> Tint percentage for the Button's fill color. Use 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the Button's fill color overprint objects underneath; false makes it knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight for the Button, measured in points.
> Number **miterLimit**
>
> Maximum stroke-width to miter-length ratio before a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> End shape used by an open path.
> EndJoin **endJoin**
>
> Corner join used by the Button.
> StrokeStyle **strokeType**
>
> Stroke-style name to apply. Also accepts String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the Button.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed-line pattern. Specify up to six point values in [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead at the path end.
> Swatch **strokeColor**
>
> Swatch applied to the Button stroke: color, gradient, tint, or mixed ink. Also accepts String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point for a fill gradient in page coordinates, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Length for a linear fill gradient, or radius for a radial fill gradient.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the Button fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point for a stroke gradient in page coordinates, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Length for a linear stroke gradient, or radius for a radial stroke gradient.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the Button stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the Button's stroke color overprint objects underneath; false makes it knock out underlying colors.
> Swatch **gapColor**
>
> Swatch applied to the gap of a dashed, dotted, or striped stroke: color, gradient, tint, or mixed ink. See stroke type for details.
> Number **gapTint**
>
> Gap-color tint percentage. Use 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes it knock out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the Button.
> Boolean **nonprinting**
>
> True prevents the Button from printing.
> Layer **itemLayer**
>
> Layer containing the Button.
> Boolean **locked**
>
> True locks the Button.
> DisplaySettingOptions **localDisplaySetting**
>
> Display-performance options for the Button.
> Number **rotationAngle**
>
> Rotation angle for the Button. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the Button. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the Button.
> Number **verticalScale**
>
> Vertical scaling applied to the Button.
> Number **absoluteRotationAngle**
>
> Button rotation angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Button skewing angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Button horizontal scale relative to its containing object.
> Number **absoluteVerticalScale**
>
> Button vertical scale relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style assigned to the Button.
> Flip **flip**
>
> Direction for flipping the printed image.
> Flip **absoluteFlip**
>
> Reports whether the Button was flipped independently of its parent object and, when it was, the flip direction.
> Boolean **visible**
>
> True makes the Button visible.
> CornerOptions **topLeftCornerOption**
>
> For rectangular shapes, sets the top left corner shape; for non-rectangular shapes, applies to all corners. Note: unlike end join, a corner option has a radius, while rounded or beveled end join effects depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Controls the top-right corner form for rectangular shapes.
> CornerOptions **bottomLeftCornerOption**
>
> Controls the bottom-left corner form for rectangular shapes.
> CornerOptions **bottomRightCornerOption**
>
> Controls the bottom-right corner form for rectangular shapes.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the top-left corner effect on rectangular shapes, and for every corner effect on non-rectangular shapes.
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
> Arrowhead alignment used by the Button.
> Number **leftArrowHeadScale**
>
> Scaling for the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scaling for the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Settable string property.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **bringToFront**( PageItem **reference** )
>
> Moves the Button to the front of its layer, or ahead of a specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object used for front placement; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the Button to the back of its layer, or behind a specified item with the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object used for back placement. (Optional) |

> **bringForward**()
>
> Steps the Button forward by one stacking level.
> **sendBackward**()
>
> Steps the Button backward by one stacking level.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the Button to another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the Button. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Star polygon inset, expressed as a percentage. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the resulting rectangle. (Optional) |

> **convertToObject**()
>
> Turns the button object into the page item in the current active state; page items from other states are discarded.
> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library where the object is stored. |
| Object | withProperties | Initial property values for the new Button. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the label value associated with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> **placeXML**( XMLElement **using** )
>
> Puts XML content into the specified object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose content should be placed. |

> **autoTag**()
>
> Applies the default tags from XML preference to the object or parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the returned result order. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value, then replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns results in reverse order. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Creates a new document-page object by overriding a master page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page that holds the master page item being overridden. |

> **removeOverride**()
>
> Clears the override from a master page item that had been overridden.
> **detach**()
>
> Breaks the link between the overridden master page item and its master page.
> **remove**()
>
> Deletes the Button.
> **fit**( FitOptions **given** )
>
> Applies the selected fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Mirrors the Button.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the Button. |
| Mixed | around | Point used as the flip center. Accepts Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a duplicate of the Button at the specified position or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination for the new Button, supplied as [x, y] coordinates. Accepts Array of 2 Units, Spread, Page, or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset applied to the duplicate relative to the original Button. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the Button. Note: provide at least one of the 'to' or 'by' parameters; if both are present, the to value wins.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New Button location in (x, y) format. Accepts Array of 2 Units, Spread, Page, or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset that moves the Button from its current position, formatted as (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | True clears the Button's current attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | True clears Button attributes and formatting that are outside the object-style definition. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object-style overrides.
> **clearTransformations**()
>
> Removes fit, flip, scale, rotation, and shear changes from the Button.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Accepts Array of 2 Reals, AnchorPoint enumerator, or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators, or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Accepts Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components that participate. Supplying this optional value replaces the target's current transform components with new values; when omitted, the given matrix is concatenated with the target's existing transform so both effects combine. Accepts MatrixContent enumerator, Array of MatrixContent enumerators, or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin uses ruler units rather than points. Default false. It matters only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns transformation values for the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Returns coordinates for the requested location in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepts Array of 2 Reals, AnchorPoint enumerator, or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators, or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | When true, a ruler location uses ruler units rather than points. Default false. It matters only when the reference point is page-relative. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors retained by the item. Default: \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box to resize. Accepts CoordinateSpaces enumerator, BoundingBoxLimits enumerator, or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Transform origin. Accepted legal specifications include: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepts Array of 2 Reals, AnchorPoint enumerator, or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators, or Long Integers. |
| ResizeMethods | by | How the supplied values affect current dimensions. |
| Mixed | values | Dimension values for width and height. Accepted dimension forms: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; where x and y are real numbers and coordinate space is used to determine _only_ the unit of length for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Accepts Array of Reals, ResizeConstraints enumerators, or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and multiple page items are targeted, individual items move to reach the new dimensions instead of being resized. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location uses ruler units rather than points. Default false. It matters only when the reference point is page-relative. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box to resize. Accepts CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the given coordinate space. |
