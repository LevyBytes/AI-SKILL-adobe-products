# Text Box (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Text box object.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a TextBox is placed. This event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after a TextBox is placed. This event bubbles and cannot be canceled.

## Instance

> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Anchored object settings.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Properties for default text wrap formatting around objects.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the TextBox.
> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Transparency settings.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Stroke transparency settings.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Fill transparency settings for the TextBox.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Content transparency settings for the TextBox.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked page items.
> _Read Only_
>
> Boolean **overridden**
>
> True indicates an object from a master spread has been overridden. False means the master-spread object remains unoverridden, or that the object did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden item originally belonging to a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained in the TextBox.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained in the TextBox.
> _Read Only_
>
> Page **parentPage**
>
> Page where this page item appears.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Page item animation settings.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Object timing settings.
> _Read Only_
>
> Article **allArticles**
>
> All articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique ID of the TextBox.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> TextBox parent; possible containers include Snippet, PlaceGun, Character, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval or Group.
> _Read Only_
>
> Number **index**
>
> Position of the TextBox within its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Preferences object collection.
> _Read Only_
>
> Ovals **ovals**
>
> Ellipse collection.
> _Read Only_
>
> SplineItems **splineItems**
>
> Spline item collection.
> _Read Only_
>
> PageItems **pageItems**
>
> Page item collection for processing every page item in a container, such as a document, page, or group, without filtering by type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Rectangle collection.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Graphic line collection.
> _Read Only_
>
> TextFrames **textFrames**
>
> Text frame collection.
> _Read Only_
>
> Polygons **polygons**
>
> Polygon collection.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> _Read Only_
>
> Images **images**
>
> Bitmap image collection for bitmap file formats, including TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Imported graphics collection covering graphic file formats such as vector, metafile, or bitmap.
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
> String **fontStyle**
>
> Font style used for the form field in the exported PDF.
> String **appliedFont**
>
> Font family used for the form field in the exported PDF.
> Boolean **readOnly**
>
> When true, the exported PDF form field is read only.
> Boolean **required**
>
> When true, the exported PDF form field is required.
> Boolean **printableInPdf**
>
> When true, the exported PDF form field/push button is printable.
> Boolean **hiddenUntilTriggered**
>
> When true, the exported PDF form field/push button remains hidden until triggered.
> Boolean **multiline**
>
> When true, the exported PDF text field supports multiple lines.
> Boolean **password**
>
> When true, the exported PDF text field acts as a password field.
> Boolean **scrollable**
>
> When true, the exported PDF text field can scroll.
> Number **fontSize**
>
> Font size used for the form field in the exported PDF.
> Boolean **rightToLeftField**
>
> When true, right to left text is enabled for the exported PDF form field.
> Number **activeStateIndex**
>
> Active state position within the object's states collection.
> String **name**
>
> Name of the TextBox.
> String **description**
>
> Description of the TextBox.
> Boolean **allowOverrides**
>
> When true, the master page item may be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> TextBox bounds without stroke width, formatted as [y1, x1, y2, x2] for the top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> TextBox bounds with stroke width included, formatted as [y1, x1, y2, x2] for the top-left and bottom-right bounding-box coordinates.
> Swatch **fillColor**
>
> Fill swatch for the TextBox, using color, gradient, tint, or mixed ink. . Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the TextBox's fill color. Use a number in the range of 0 to 100 for a tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> When true, the TextBox's fill color overprints underlying objects; when false, it knocks out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, for the TextBox.
> Number **miterLimit**
>
> Ratio threshold between stroke width and miter length where a miter (pointed) join changes to a bevel (squared-off) join.
> EndCap **endCap**
>
> End shape for an open path.
> EndJoin **endJoin**
>
> Corner join used by the TextBox.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the TextBox.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed line pattern. Up to six point values may be supplied in the format [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the start of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the end of the path.
> Swatch **strokeColor**
>
> Stroke swatch for the TextBox, using color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use a number in the range of 0 to 100 for a tint percent; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient on the TextBox fill, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the TextBox fill, stores the linear-gradient length or radial-gradient radius.
> Number **gradientFillAngle**
>
> Angle for a linear gradient applied to the TextBox fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient on the TextBox stroke, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the TextBox stroke, stores the linear-gradient length or radial-gradient radius.
> Number **gradientStrokeAngle**
>
> Angle for a linear gradient applied to the TextBox stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> When true, the TextBox's stroke color overprints underlying objects; when false, it knocks out the underlying colors.
> Swatch **gapColor**
>
> Gap swatch for a dashed, dotted, or striped stroke, using color, gradient, tint, or mixed ink. For details, see stroke type.
> Number **gapTint**
>
> Gap color tint percentage. Use a number in the range of 0 to 100 for a tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> When true, the gap color overprints underlying colors; when false, it knocks them out.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the TextBox.
> Boolean **nonprinting**
>
> When true, the TextBox does not print.
> Layer **itemLayer**
>
> Layer containing the TextBox.
> Boolean **locked**
>
> Set true to lock the TextBox.
> DisplaySettingOptions **localDisplaySetting**
>
> TextBox display-performance option set.
> Number **rotationAngle**
>
> Rotation angle of the TextBox. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the TextBox. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the TextBox.
> Number **verticalScale**
>
> Vertical scaling applied to the TextBox.
> Number **absoluteRotationAngle**
>
> TextBox rotation angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> TextBox skewing angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> TextBox horizontal scale relative to its containing object.
> Number **absoluteVerticalScale**
>
> TextBox vertical scale relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the TextBox.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Reports whether the TextBox was flipped independently of its parent object and, when it was, the direction of that flip.
> Boolean **visible**
>
> When true, the TextBox is visible.
> CornerOptions **topLeftCornerOption**
>
> For rectangular shapes, selects the top-left corner shape; for non-rectangular shapes, applies to all corners. Note: corner options can carry a radius, unlike end joins, where rounded or beveled effects depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> For rectangular shapes, selects the top-right corner shape.
> CornerOptions **bottomLeftCornerOption**
>
> For rectangular shapes, selects the bottom-left corner shape.
> CornerOptions **bottomRightCornerOption**
>
> For rectangular shapes, selects the bottom-right corner shape.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> In measurement units, radius for the top-left rectangular-shape corner and for every corner on non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> In measurement units, radius for the top-right corner on rectangular shapes.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> In measurement units, radius for the bottom-left corner on rectangular shapes.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> In measurement units, radius for the bottom-right corner on rectangular shapes.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the TextBox.
> Number **leftArrowHeadScale**
>
> Start-path arrowhead scale. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> End-path arrowhead scale. (Range: 1 to 1000)
> String **label**
>
> Accepts any string value.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> **bringToFront**( PageItem **reference** )
>
> Moves the TextBox to the front of its layer, or ahead of a specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object the object should be brought in front of; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the TextBox to the back of its layer, or behind a specified item with the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object the object should be sent behind. (Optional) |

> **bringForward**()
>
> Advances the TextBox within the layer stacking order.
> **sendBackward**()
>
> Lowers the TextBox within the layer stacking order.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the TextBox into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the TextBox. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Resulting polygon star inset, as a percentage. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Resulting rectangle corner radius. (Optional) |

> **convertToObject**()
>
> Turns the button object into the active-state page item; other state page items are discarded.
> Asset **store**( Library **using**, Object **withProperties** )
>
> Places the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that will receive the stored object. |
| Object | withProperties | Initial property values for the new TextBox. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the specified key's label to the supplied value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> **placeXML**( XMLElement **using** )
>
> Places XML content in the target object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element containing the content to place. |

> **autoTag**()
>
> Applies default XML-preference tags to the object or parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while retaining current content.

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
| Boolean | reverseOrder | Set true to reverse the returned result order. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | Set true to reverse the returned result order. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Creates a document-page object by overriding a master page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Clears the override from a master page item that was previously overridden.
> **detach**()
>
> Separates an overridden master page item from its master page.
> **remove**()
>
> Removes the TextBox.
> **fit**( FitOptions **given** )
>
> Applies the specified fitting option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Mirrors the TextBox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the TextBox. |
| Mixed | around | Flip center point. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a duplicate TextBox at a specified location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New TextBox destination: [x, y]. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount from the original TextBox's position for the new TextBox. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the TextBox. Note: one of 'to' or 'by' is required; when both are supplied, only the to value is honored.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | TextBox destination: (x, y). Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset from current TextBox position, expressed as (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | When true, existing TextBox attributes are cleared before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, TextBox attributes and formatting not defined in the object style are cleared. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> **clearTransformations**()
>
> Removes TextBox transforms, including rotate, scale, flip, fit, and shear operations.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transform operation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for transformation. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; when supplied, this optional parameter replaces the target's existing transform components with new values. If omitted, the given matrix is concatenated onto the target's existing transform so both effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is interpreted with ruler units instead of points. The default value is false. This parameter only affects reference points specified relative to a page. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
