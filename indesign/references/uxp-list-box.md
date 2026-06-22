# List Box (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Fires before a ListBox is placed. The event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Fires after a ListBox is placed. The event bubbles and cannot be canceled.

## ListBox — Instance

> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings for anchored objects.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default formatting preferences used when text wraps around objects.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the ListBox.
> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> General transparency settings.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Transparency configuration for the stroke.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Transparency configuration for the fill applied to the ListBox.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency configuration for ListBox content.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked page items.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden; false means it either remains on a master spread without override or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Object from a master page that has an override. Can return PageItem, Guide, Graphic, Movie, or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained inside the ListBox.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained inside the ListBox.
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
> Articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the ListBox.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier can resolve to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent for ListBox: Snippet, PlaceGun, Character, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, or Group.
> _Read Only_
>
> Number **index**
>
> Position of the ListBox inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> _Read Only_
>
> Ovals **ovals**
>
> Collection containing ellipses.
> _Read Only_
>
> SplineItems **splineItems**
>
> Collection for spline items.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection for page items; use it to process every page item in a container such as a document, page, or group, independent of type.
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
> Collection holding events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection holding event listeners.
> _Read Only_
>
> Images **images**
>
> Collection containing bitmap images in bitmap file formats, including TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Collection containing imported graphics in graphic file formats such as vector, metafile, or bitmap.
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
> EPSTexts.
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
> Font style used for the form field in the exported PDF.
> String **appliedFont**
>
> Font family used for the form field in the exported PDF.
> Boolean **readOnly**
>
> When true, the exported PDF treats the form field as read only.
> Boolean **required**
>
> When true, the exported PDF marks the form field as required.
> Boolean **printableInPdf**
>
> When true, the exported PDF can print the form field/push button.
> Boolean **hiddenUntilTriggered**
>
> When true, the exported PDF keeps the form field/push button hidden until triggered.
> Number **fontSize**
>
> Font size for the form field in the exported PDF.
> Boolean **sortChoices**
>
> When true, the exported PDF sorts the choices.
> String **choiceList**
>
> Choices used by combo boxes and list boxes in the exported PDF.
> Boolean **rightToLeftField**
>
> When true, right-to-left text is enabled for the exported PDF form field.
> Boolean **multipleSelection**
>
> When true, the exported PDF list box allows more than one item to be selected at once.
> Number **activeStateIndex**
>
> Index for the active state in the object's states collection.
> String **name**
>
> Name assigned to the ListBox.
> String **description**
>
> Description assigned to the ListBox.
> Boolean **allowOverrides**
>
> When true, the master page item may be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints used by the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints used by the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds for the ListBox without stroke width; [y1, x1, y2, x2] records the top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds for the ListBox with stroke width included; [y1, x1, y2, x2] records the top-left and bottom-right bounding-box coordinates.
> Swatch **fillColor**
>
> Fill swatch for the ListBox, including color, gradient, tint, or mixed ink. String is also accepted.
> Number **fillTint**
>
> Tint percentage used for the ListBox fill color. Use 0 to 100, or use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the ListBox fill overprint underlying objects; false makes that fill knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Point weight applied to the ListBox stroke.
> Number **miterLimit**
>
> Ratio limit where a miter (pointed) join changes to a bevel (squared-off) join, based on stroke width versus miter length.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join for the ListBox.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. String is also accepted.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment for the ListBox.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed-line pattern. Define up to six point values as [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead applied at the start of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead applied at the end of the path.
> Swatch **strokeColor**
>
> Stroke swatch for the ListBox, including color, gradient, tint, or mixed ink. String is also accepted.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100, or use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Start point, in page coordinates, for a gradient applied to the ListBox fill, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the ListBox fill, use this as the linear-gradient length or radial-gradient radius.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the ListBox fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Start point, in page coordinates, for a gradient applied to the ListBox stroke, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the ListBox stroke, use this as the linear-gradient length or radial-gradient radius.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the ListBox stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the ListBox stroke color overprint underlying objects; false makes that stroke knock out underlying colors.
> Swatch **gapColor**
>
> Gap swatch for dashed, dotted, or striped strokes; see stroke type for details.
> Number **gapTint**
>
> Tint percentage for the gap color. Use 0 to 100, or use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes the gap color knock them out.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment for the ListBox.
> Boolean **nonprinting**
>
> When true, the ListBox does not print.
> Layer **itemLayer**
>
> Layer containing the ListBox.
> Boolean **locked**
>
> Locked state for the ListBox when true.
> DisplaySettingOptions **localDisplaySetting**
>
> Display-performance setting for the ListBox.
> Number **rotationAngle**
>
> Rotation angle for the ListBox. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the ListBox. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the ListBox.
> Number **verticalScale**
>
> Vertical scaling applied to the ListBox.
> Number **absoluteRotationAngle**
>
> Relative rotation angle for the ListBox compared with its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Relative skewing angle for the ListBox compared with its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the ListBox relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the ListBox relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the ListBox.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Shows whether the ListBox was flipped independently of its parent object and, when so, the flip direction used for the ListBox.
> Boolean **visible**
>
> When true, the ListBox is visible.
> CornerOptions **topLeftCornerOption**
>
> Shape for the top left corner on rectangles and for every corner on non-rectangular shapes. Note: corner options allow a radius value, while an end join's rounded or beveled appearance depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Shape assigned to a rectangle's top right corner.
> CornerOptions **bottomLeftCornerOption**
>
> Shape assigned to a rectangle's bottom left corner.
> CornerOptions **bottomRightCornerOption**
>
> Shape assigned to a rectangle's bottom right corner.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Radius, in measurement units, for the corner effect on the top left corner of rectangles and on every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the corner effect on a rectangle's top right corner.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the corner effect on a rectangle's bottom left corner.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the corner effect on a rectangle's bottom right corner.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment for the ListBox.
> Number **leftArrowHeadScale**
>
> Scale factor for the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale factor for the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> String property that may hold any string.
> Object **properties**
>
> Use this object to assign several properties in one operation.

### Methods

> **bringToFront**( PageItem **reference** )
>
> Moves the ListBox to the front of its layer or ahead of a specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the moved object should appear in front of; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the ListBox to the back of its layer or behind a specified item; the parent must match.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object behind which the object should be sent. (Optional) |

> **bringForward**()
>
> Moves the ListBox forward by one layer level.
> **sendBackward**()
>
> Moves the ListBox backward by one layer level.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the ListBox into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the ListBox. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Star inset value for the output polygon. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the resulting rectangle. (Optional) |

> **convertToObject**()
>
> Turns the button object into the active state's page item; content from all other states is discarded.
> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library target for storing the object. |
| Object | withProperties | Initial property values for the new ListBox. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Writes the specified key/value pair into the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to associate with the key. |

> **placeXML**( XMLElement **using** )
>
> Places XML content into the specified object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element containing the content to place. |

> **autoTag**()
>
> Uses default tags defined in XML preference to tag the object or parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element without replacing existing content.

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
| Boolean | reverseOrder | True means result order is reversed. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True means result order is reversed. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Overrides a master page item and creates the resulting object on the destination document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Removes the override from a master page item that was previously overridden.
> **detach**()
>
> Separates an overridden master page item from the master page.
> **remove**()
>
> Removes the ListBox.
> **fit**( FitOptions **given** )
>
> Applies the specified fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip operation on the ListBox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the ListBox. |
| Mixed | around | Point used as the flip center for the ListBox. Accepts Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Copies the ListBox to the requested position or by the requested offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New ListBox location, expressed as coordinates in [x, y] format. Accepts Array of 2 Units, Spread, Page, or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount for the new ListBox measured from the original ListBox position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the ListBox. Note: either the 'to' or 'by' parameter is required; if both are defined, the to value is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New location for the ListBox, in (x, y) format. Accepts Array of 2 Units, Spread, Page, or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset for moving the ListBox from its current position, in (x, y) format. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | When true, existing ListBox attributes are cleared before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, clears ListBox attributes and formatting that are not defined in the object style. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> **clearTransformations**()
>
> Removes transformation effects from the ListBox: rotation, scale, flip, fit, and shear.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transformation to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Accepts Array of 2 Reals, AnchorPoint enumerator, Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators, or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Accepts Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components that should be considered. Supplying this optional parameter replaces current transform components on the target with new values; when omitted, the given matrix is concatenated with the target's existing transform so both effects combine. Accepts MatrixContent enumerator, Array of MatrixContent enumerators, or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is interpreted using ruler units instead of points. The default value is false. This has no effect unless the reference point is relative to a page. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Retrieves the transformation values for the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
