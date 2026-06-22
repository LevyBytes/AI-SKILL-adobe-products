# Check Box (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a CheckBox is placed. The event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after a CheckBox is placed. The event bubbles and cannot be canceled.

## CheckBox — Instance

> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings for anchored objects.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference values that set the default formatting for object text wrap.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the CheckBox.
> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Settings related to transparency.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Transparency settings used by the stroke.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Transparency settings for the CheckBox fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency settings for CheckBox content.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked page items.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden. False means either the master-spread object remains unoverridden or the object was not based on a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Master-page object that has an override. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items inside the CheckBox.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics inside the CheckBox.
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
> Identifier unique to the CheckBox.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Container that owns this CheckBox; possible parents include Snippet, PlaceGun, Character, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval or Group.
> _Read Only_
>
> Number **index**
>
> Position of the CheckBox within its container.
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
> Spline-items collection.
> _Read Only_
>
> PageItems **pageItems**
>
> Page-items collection for processing every page item in a container, such as a document, page, or group, regardless of item type.
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
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> _Read Only_
>
> Images **images**
>
> Bitmap image collection for bitmap file formats such as TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Imported-graphics collection for graphic file formats, including vector, metafile, or bitmap.
> _Read Only_
>
> EPSs **epss**
>
> EPS file collection.
> _Read Only_
>
> WMFs **wmfs**
>
> WMF graphics collection.
> _Read Only_
>
> PICTs **picts**
>
> PICT graphics collection.
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
> EPSTexts
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
> SubmitFormBehaviors **submitFormBehaviors**
>
> Submit form behavior object collection.
> _Read Only_
>
> Behaviors **behaviors**
>
> Behavior object collection.
> _Read Only_
>
> ClearFormBehaviors **clearFormBehaviors**
>
> Clear form behavior object collection.
> _Read Only_
>
> PrintFormBehaviors **printFormBehaviors**
>
> Print form behavior object collection.
> _Read Only_
>
> ViewZoomBehaviors **viewZoomBehaviors**
>
> View zoom behavior object collection.
> _Read Only_
>
> SoundBehaviors **soundBehaviors**
>
> Sound behavior object collection.
> _Read Only_
>
> ShowHideFieldsBehaviors **showHideFieldsBehaviors**
>
> Show/hide fields behavior object collection.
> _Read Only_
>
> MovieBehaviors **movieBehaviors**
>
> Movie behavior object collection.
> _Read Only_
>
> GotoAnchorBehaviors **gotoAnchorBehaviors**
>
> Goto anchor behavior object collection.
> _Read Only_
>
> GotoFirstPageBehaviors **gotoFirstPageBehaviors**
>
> Goto first page behavior object collection.
> _Read Only_
>
> GotoLastPageBehaviors **gotoLastPageBehaviors**
>
> Goto last page behavior object collection.
> _Read Only_
>
> GotoNextPageBehaviors **gotoNextPageBehaviors**
>
> Goto next page behavior object collection.
> _Read Only_
>
> GotoPreviousPageBehaviors **gotoPreviousPageBehaviors**
>
> Goto previous page behavior object collection.
> _Read Only_
>
> GotoNextViewBehaviors **gotoNextViewBehaviors**
>
> Goto next view behavior object collection.
> _Read Only_
>
> GotoPreviousViewBehaviors **gotoPreviousViewBehaviors**
>
> Goto previous view behavior object collection.
> _Read Only_
>
> GotoURLBehaviors **gotoURLBehaviors**
>
> Goto URL behavior object collection.
> _Read Only_
>
> OpenFileBehaviors **openFileBehaviors**
>
> Open file behavior object collection.
> Boolean **readOnly**
>
> True makes the form field read only in the exported PDF.
> Boolean **required**
>
> True makes the form field required in the exported PDF.
> Boolean **printableInPdf**
>
> True makes the form field/push button printable in the exported PDF.
> Boolean **hiddenUntilTriggered**
>
> True keeps the form field/push button hidden in the exported PDF until triggered.
> Boolean **checkedByDefault**
>
> True selects the check box/radio button by default in the exported PDF.
> String **exportValue**
>
> Export value used for the check box/radio button in the exported PDF.
> Number **activeStateIndex**
>
> Active state's index within the object's states collection.
> String **name**
>
> Name assigned to the CheckBox.
> String **description**
>
> Description assigned to the CheckBox.
> Boolean **allowOverrides**
>
> True allows the master page item to be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> CheckBox bounds without stroke width, using [y1, x1, y2, x2] for the bounding box's top-left and bottom-right coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> CheckBox bounds including stroke width, using [y1, x1, y2, x2] for the bounding box's top-left and bottom-right coordinates.
> Swatch **fillColor**
>
> Fill swatch applied to the CheckBox, including color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the CheckBox fill color. Use a number from 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> When true, the CheckBox fill color overprints underlying objects. When false, it knocks out colors underneath.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight applied to the CheckBox, in points.
> Number **miterLimit**
>
> Ratio limit between stroke width and miter length before a pointed join switches to a squared-off bevel join.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join used by the CheckBox.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the CheckBox.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed-line pattern. Define as many as six point values in [dash1, gap1, dash2, gap2, dash3, gap3] form.
> ArrowHead **leftLineEnd**
>
> Arrowhead placed at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead placed at the path end.
> Swatch **strokeColor**
>
> Stroke swatch applied to the CheckBox, including color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use a number from 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point for a fill gradient on the CheckBox, in page coordinates and [x, y] format.
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the CheckBox fill, supplies the linear-gradient length or radial-gradient radius.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the CheckBox fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point for a stroke gradient on the CheckBox, in page coordinates and [x, y] format.
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the CheckBox stroke, supplies the linear-gradient length or radial-gradient radius.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the CheckBox stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> When true, the CheckBox stroke color overprints underlying objects. When false, it knocks out colors underneath.
> Swatch **gapColor**
>
> Gap swatch for a dashed, dotted, or striped stroke, including color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint percentage. Use a number from 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> When true, the gap color overprints underlying colors. When false, it knocks out colors underneath.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the CheckBox.
> Boolean **nonprinting**
>
> True prevents the CheckBox from printing.
> Layer **itemLayer**
>
> Layer containing the CheckBox.
> Boolean **locked**
>
> True locks the CheckBox.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options assigned to the CheckBox.
> Number **rotationAngle**
>
> Rotation angle for the CheckBox. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the CheckBox. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the CheckBox.
> Number **verticalScale**
>
> Vertical scaling applied to the CheckBox.
> Number **absoluteRotationAngle**
>
> CheckBox rotation measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> CheckBox skew measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the CheckBox relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the CheckBox relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the CheckBox.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Reports whether the CheckBox was flipped independently from its parent object and, when it was, the flip direction.
> Boolean **visible**
>
> True makes the CheckBox visible.
> CornerOptions **topLeftCornerOption**
>
> Shape applied to the top left corner of rectangular shapes and to every corner of non-rectangular shapes. Note: corner option differs from end join because a corner option can have a radius, while the rounded or beveled effect of an end join depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Shape used for rectangular-shape top-right corners.
> CornerOptions **bottomLeftCornerOption**
>
> Shape used for rectangular-shape bottom-left corners.
> CornerOptions **bottomRightCornerOption**
>
> Shape used for rectangular-shape bottom-right corners.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for the top left corner of rectangular shapes and every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Radius, in measurement units, for the rectangular-shape top-right corner effect.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Radius, in measurement units, for the rectangular-shape bottom-left corner effect.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Radius, in measurement units, for the rectangular-shape bottom-right corner effect.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the CheckBox.
> Number **leftArrowHeadScale**
>
> Scale factor for the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale factor for the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Property that accepts any string value.
> Object **properties**
>
> Property for setting multiple properties together.

### Methods

> **bringToFront**( PageItem **reference** )
>
> Moves the CheckBox ahead of other items on its layer, or places it before a specific item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Target item that the object should be placed in front of; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the CheckBox behind other items on its layer, or positions it after a specified item with the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Target item that the object should be placed behind. (Optional) |

> **bringForward**()
>
> Raises the CheckBox by one stacking position within its layer.
> **sendBackward**()
>
> Lowers the CheckBox by one stacking position within its layer.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the CheckBox into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | Shape to apply to the CheckBox. |
| Number | numberOfSides | Side count for the polygon that results. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Star inset percentage used for the generated polygon. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius used for the generated rectangle. (Optional) |

> **convertToObject**()
>
> Turns the button object into the page item for the currently active state. Items from the remaining states are discarded.
> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves the object into the selected library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the stored object. |
| Object | withProperties | Starting property values for the new CheckBox. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Writes a label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to use. |
| String | value | Value to store. |

> **placeXML**( XMLElement **using** )
>
> Inserts XML content into the target object. Note: Existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element that supplies the content to place. |

> **autoTag**()
>
> Applies the default XML preference tags to the object or to its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element without removing current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Searches for objects whose values match the find criteria.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, the returned results are ordered in reverse. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects matching the find value and replaces them with the change value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, the returned results are ordered in reverse. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Creates a document-page object by overriding a master page item onto the destination page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page where the overridden master page item is placed. |

> **removeOverride**()
>
> Clears an override from a master page item that was previously overridden.
> **detach**()
>
> Separates an overridden master page item from its master page.
> **remove**()
>
> Removes the CheckBox.
> **fit**( FitOptions **given** )
>
> Uses the chosen fit option on frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Mirrors the CheckBox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used for flipping the CheckBox. |
| Mixed | around | Point used as the flip center. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Copies the CheckBox to a given position or by a stated offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Position for the new CheckBox, written as [x, y] coordinates. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset applied to the new CheckBox relative to the original CheckBox position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Repositions the CheckBox. Note: Supply either 'to' or 'by'; when both are present, only the to value is honored.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New CheckBox position, in (x, y) form. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset that shifts the CheckBox from its current position, in (x, y) form. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Assigns the chosen object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | When true, existing CheckBox attributes are cleared before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, attributes and formatting on the CheckBox that are outside the object style definition are cleared. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object style overrides.
> **clearTransformations**()
>
> Removes CheckBox transformations, including rotation, scaling, flipping, fitting, and shearing.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transformation to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Mixed | from | Origin used temporarily during the transform operation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix to apply. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to evaluate; when this optional parameter is supplied, the target's existing transform components are replaced by the new values. Without it, the given matrix is concatenated with the target's current transform so both effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin uses ruler units instead of points. The default value is false. This setting matters only when the reference point is relative to a page. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Retrieves transformation values from the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation. |
