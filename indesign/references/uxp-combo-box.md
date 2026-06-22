# Combo Box (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a ComboBox is placed. This event bubbles. This event can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after a ComboBox is placed. This event bubbles. This event cannot be canceled.

## ComboBox — Instance

> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings for anchored objects.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default text-wrap formatting for object-surrounding text is stored in these preference properties.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> The XML element tied to the ComboBox.
> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Transparency configuration values.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Stroke-specific transparency configuration.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Transparency configuration for the ComboBox fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency configuration for the ComboBox content.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for Linked Page Item handling.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and is now overridden. False covers both master-spread objects that remain unoverridden and objects that never came from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object whose origin is a master page. Possible return types: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items held inside the ComboBox.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics held inside the ComboBox.
> _Read Only_
>
> Page **parentPage**
>
> The page where this page item is placed.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Animation settings for the page item.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Timing configuration for the object.
> _Read Only_
>
> Article **allArticles**
>
> Every article that includes this page item.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the ComboBox.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the ComboBox; possible values are Snippet or PlaceGun or Character or Spread or MasterSpread or SplineItem or Polygon or GraphicLine or Rectangle or Oval or Group.
> _Read Only_
>
> Number **index**
>
> Position of the ComboBox within its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preference objects.
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
> Collection of page items for processing every page item in a container, such as a document, page, or group, without filtering by type.
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
> Images **images**
>
> Collection containing bitmap images; supported bitmap file formats include TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Collection containing imported graphics; supported graphic file formats include vector, metafile, or bitmap.
> _Read Only_
>
> EPSs **epss**
>
> Collection containing EPS files.
> _Read Only_
>
> WMFs **wmfs**
>
> Collection containing WMF graphics.
> _Read Only_
>
> PICTs **picts**
>
> Collection containing PICT graphics.
> _Read Only_
>
> PDFs **pdfs**
>
> Collection containing PDF files.
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
> SVGs **svgs**
>
> Collection containing SVG files.
> _Read Only_
>
> SubmitFormBehaviors **submitFormBehaviors**
>
> Collection containing submit form behavior objects.
> _Read Only_
>
> Behaviors **behaviors**
>
> Collection containing behavior objects.
> _Read Only_
>
> ClearFormBehaviors **clearFormBehaviors**
>
> Collection containing clear form behavior objects.
> _Read Only_
>
> PrintFormBehaviors **printFormBehaviors**
>
> Collection containing print form behavior objects.
> _Read Only_
>
> ViewZoomBehaviors **viewZoomBehaviors**
>
> Collection containing view zoom behavior objects.
> _Read Only_
>
> SoundBehaviors **soundBehaviors**
>
> Collection containing sound behavior objects.
> _Read Only_
>
> ShowHideFieldsBehaviors **showHideFieldsBehaviors**
>
> Collection containing show/hide fields behavior objects.
> _Read Only_
>
> MovieBehaviors **movieBehaviors**
>
> Collection containing movie behavior objects.
> _Read Only_
>
> GotoAnchorBehaviors **gotoAnchorBehaviors**
>
> Collection containing goto anchor behavior objects.
> _Read Only_
>
> GotoFirstPageBehaviors **gotoFirstPageBehaviors**
>
> Collection containing goto first page behavior objects.
> _Read Only_
>
> GotoLastPageBehaviors **gotoLastPageBehaviors**
>
> Collection containing goto last page behavior objects.
> _Read Only_
>
> GotoNextPageBehaviors **gotoNextPageBehaviors**
>
> Collection containing goto next page behavior objects.
> _Read Only_
>
> GotoPreviousPageBehaviors **gotoPreviousPageBehaviors**
>
> Collection containing goto previous page behavior objects.
> _Read Only_
>
> GotoNextViewBehaviors **gotoNextViewBehaviors**
>
> Collection containing goto next view behavior objects.
> _Read Only_
>
> GotoPreviousViewBehaviors **gotoPreviousViewBehaviors**
>
> Collection containing goto previous view behavior objects.
> _Read Only_
>
> GotoURLBehaviors **gotoURLBehaviors**
>
> Collection containing goto URL behavior objects.
> _Read Only_
>
> OpenFileBehaviors **openFileBehaviors**
>
> Collection containing open file behavior objects.
> String **fontStyle**
>
> Font style used by the form field in the exported PDF.
> String **appliedFont**
>
> Font family used by the form field in the exported PDF.
> Boolean **readOnly**
>
> True makes the exported PDF form field read only.
> Boolean **required**
>
> True marks the exported PDF form field as required.
> Boolean **printableInPdf**
>
> True makes the form field/push button printable in the exported PDF.
> Boolean **hiddenUntilTriggered**
>
> True keeps the form field/push button hidden in the exported PDF until it is triggered.
> Number **fontSize**
>
> Font size used by the form field in the exported PDF.
> Boolean **sortChoices**
>
> True sorts the choices in the exported PDF.
> String **choiceList**
>
> Choice values for combo and list boxes in the exported PDF.
> Boolean **rightToLeftField**
>
> True enables right to left text for the form field in the exported PDF.
> Number **activeStateIndex**
>
> Index for the active state within the object's states collection.
> String **name**
>
> Name assigned to the ComboBox.
> String **description**
>
> Description assigned to the ComboBox.
> Boolean **allowOverrides**
>
> True allows the master page item to be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Object-based layout rules use these left margin, width, and right margin constraints for this item.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Object-based layout rules use these top margin, height, and bottom margin constraints for this item.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> ComboBox bounds without stroke width, expressed as [y1, x1, y2, x2], whose values locate the top-left and bottom-right bounding-box corners.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> ComboBox bounds including stroke width, expressed as [y1, x1, y2, x2], whose values locate the top-left and bottom-right bounding-box corners.
> Swatch **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the ComboBox fill. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the ComboBox's fill color. (Use a number in the range of 0 to 100 for a tint percent; use -1 for the inherited or overridden value.)
> Boolean **overprintFill**
>
> True causes the ComboBox's fill color to overprint underlying objects; false makes the fill color knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, applied to the ComboBox.
> Number **miterLimit**
>
> Maximum stroke-width-to-miter-length ratio before a miter (pointed) join changes into a bevel (squared-off) join.
> EndCap **endCap**
>
> End shape used for an open path.
> EndJoin **endJoin**
>
> Corner join used by the ComboBox.
> StrokeStyle **strokeType**
>
> Stroke style name to use. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the ComboBox.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements forming a custom dashed-line pattern. The pattern can use up to six point values: [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the ComboBox stroke. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for object's stroke color. (Use a number in the range of 0 to 100 for a tint percent; use -1 for the inherited or overridden value.)
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Gradient start point for the ComboBox fill, using page coordinates in the format [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the ComboBox fill, this is the linear gradient length or the radial gradient radius.
> Number **gradientFillAngle**
>
> Linear-gradient angle used by the ComboBox fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Gradient start point for the ComboBox stroke, using page coordinates in the format [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the ComboBox stroke, this is the linear gradient length or the radial gradient radius.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle used by the ComboBox stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True causes the ComboBox's stroke color to overprint underlying objects; false makes the stroke color knock out the underlying colors.
> Swatch **gapColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to a dashed, dotted, or striped stroke gap. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint as a percentage. (Use a number in the range of 0 to 100 for a tint percent; use -1 for the inherited or overridden value.)
> Boolean **overprintGap**
>
> True causes the gap color to overprint underlying colors; false makes the gap color knock out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the ComboBox.
> Boolean **nonprinting**
>
> True prevents the ComboBox from printing.
> Layer **itemLayer**
>
> Layer containing the ComboBox.
> Boolean **locked**
>
> True locks the ComboBox.
> DisplaySettingOptions **localDisplaySetting**
>
> Display-performance options for the ComboBox.
> Number **rotationAngle**
>
> Rotation angle for the ComboBox. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle used by the ComboBox. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling value for the ComboBox.
> Number **verticalScale**
>
> Vertical scaling value for the ComboBox.
> Number **absoluteRotationAngle**
>
> Relative to its containing object, the ComboBox rotation angle. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Relative to its containing object, the ComboBox skewing angle. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Relative to its containing object, the ComboBox horizontal scale.
> Number **absoluteVerticalScale**
>
> Relative to its containing object, the ComboBox vertical scale.
> ObjectStyle **appliedObjectStyle**
>
> Object style used by the ComboBox.
> Flip **flip**
>
> Direction used when flipping the printed image.
> Flip **absoluteFlip**
>
> Reports whether the ComboBox was flipped separately from its parent object and, when so, gives the flip direction.
> Boolean **visible**
>
> True makes the ComboBox visible.
> CornerOptions **topLeftCornerOption**
>
> Corner shape for rectangular shapes' top left corner and for every corner on non-rectangular shapes. Note: unlike end join, corner option can take a radius; rounded or beveled end-join effects depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Corner shape used on rectangular shapes' top right corner.
> CornerOptions **bottomLeftCornerOption**
>
> Corner shape used on rectangular shapes' bottom left corner.
> CornerOptions **bottomRightCornerOption**
>
> Corner shape used on rectangular shapes' bottom right corner.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' top left corner and every corner on non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' top right corner.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' bottom left corner.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' bottom right corner.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the ComboBox.
> Number **leftArrowHeadScale**
>
> Scaling applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scaling applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Property accepting any string.
> Object **properties**
>
> Property used to set several properties in one operation.

### Methods

> **bringToFront**( PageItem **reference** )
>
> Moves the ComboBox to the front of its layer or ahead of a specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Object used as the front-placement reference; it must have the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the ComboBox to the back of its layer or behind a specified item that shares its parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Object used as the behind-placement reference. (Optional) |

> **bringForward**()
>
> Advances the ComboBox by one stacking level.
> **sendBackward**()
>
> Moves the ComboBox backward by one stacking level.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the ComboBox into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the ComboBox. |
| Number | numberOfSides | Side count for the polygon that results. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Star inset percentage for the polygon that results. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the rectangle that results. (Optional) |

> **convertToObject**()
>
> Changes the button object into the page item in the active state. Page items from other states are discarded.
> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the object. |
| Object | withProperties | Starting property values for the new ComboBox. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the label to the value paired with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Stored value. |

> **placeXML**( XMLElement **using** )
>
> Inserts XML content into the specified object. Note: Existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element containing the content to place. |

> **autoTag**()
>
> Applies default XML preference tags to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while leaving current content intact.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Locates objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, the result order is reversed. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, the result order is reversed. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Overrides a master page item and creates the resulting object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item that will be overridden. |

> **removeOverride**()
>
> Clears the override from a master page item that had been overridden.
> **detach**()
>
> Separates an overridden master page item from its master page.
> **remove**()
>
> Deletes the ComboBox.
> **fit**( FitOptions **given** )
>
> Uses the specified fit option on frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip operation on the ComboBox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the ComboBox. |
| Mixed | around | Point used as the flip center. Accepts: AnchorPoint enumerator or Array of 2 Units. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a duplicate ComboBox at a specified location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New ComboBox location, expressed with coordinates in the format [x, y]. Accepts: Spread, Page, Layer, or Array of 2 Units. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount measured from the original ComboBox position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the ComboBox. Note: Either the 'to' or 'by' parameter is required; when both exist, the to value takes precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | ComboBox destination, written in the format (x, y). Accepts: Spread, Page, Layer, or Array of 2 Units. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset, in measurement units, from the ComboBox current position; coordinates are (x, y). This parameter is optional. |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | True removes the ComboBox's current attributes before style application. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | True clears attributes and formatting on the ComboBox when those values are not included in the object style. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object-style overrides.
> **clearTransformations**()
>
> Clears ComboBox transformations, including shearing, fitting, flipping, scaling, and rotation.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Accepts: AnchorPoint enumerator, Array of 2 Reals, or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Accepts: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; supplying this optional parameter replaces the target's current transform components with new values. Without it, the supplied matrix is concatenated with the target's existing transform so the two effects combine. Accepts: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin with ruler units instead of points. The default value is false. This parameter matters only for a reference point specified relative to a page. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Retrieves transformation values for the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
