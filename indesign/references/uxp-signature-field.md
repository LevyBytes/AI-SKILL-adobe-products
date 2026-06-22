# Signature Field (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Signature field object.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before placement of a SignatureField. The event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after placement of a SignatureField. The event bubbles and cannot be canceled.

## Instance

> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings for anchored objects.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text-wrap preference properties supply the default formatting used when text flows around objects.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked with this SignatureField.
> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Transparency-related settings.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Stroke transparency settings.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Fill transparency settings for the SignatureField.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Content transparency settings for the SignatureField.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked page items.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden; false covers either a master-spread object left unchanged or an object not based on a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Object from a master page that is now overridden. Returns may include: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained inside the SignatureField.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained inside the SignatureField.
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
> Every article that includes this page item.
> _Read Only_
>
> Number **id**
>
> Unique identifier for the SignatureField.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the SignatureField: Snippet, PlaceGun, Character, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, or Group.
> _Read Only_
>
> Number **index**
>
> Position of the SignatureField inside its containing object.
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
> Collection of spline items.
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
> Bitmap-image collection for bitmap file formats, including TIFF, JPEG, and GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Imported-graphics collection for vector, metafile, or bitmap graphic formats.
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
> EPSTexts
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
> True makes the form field read-only in the exported PDF.
> Boolean **required**
>
> True marks the exported PDF form field as required.
> Boolean **printableInPdf**
>
> True allows the form field or push button to print in the exported PDF.
> Boolean **hiddenUntilTriggered**
>
> True keeps the form field or push button hidden in the exported PDF until a trigger occurs.
> Number **activeStateIndex**
>
> Index for the active state in the object's states collection.
> String **name**
>
> Name assigned to the SignatureField.
> String **description**
>
> Description assigned to the SignatureField.
> Boolean **allowOverrides**
>
> True permits overriding of the master page item.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints used by this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints used by this item under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds for the SignatureField without stroke width, formatted as [y1, x1, y2, x2] for the upper-left and lower-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds for the SignatureField including stroke width, formatted as [y1, x1, y2, x2] for the upper-left and lower-right bounding-box coordinates.
> Swatch **fillColor**
>
> Fill swatch applied to the SignatureField, such as color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the SignatureField fill color. Use 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the SignatureField fill color overprint underlying objects; false makes it knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, applied to the SignatureField.
> Number **miterLimit**
>
> Ratio limit between stroke width and miter length before a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> End shape used by an open path.
> EndJoin **endJoin**
>
> Corner join used by the SignatureField.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the SignatureField.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements defining a custom dashed-line pattern. Provide as many as six point values in [dash1, gap1, dash2, gap2, dash3, gap3] format.
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Stroke swatch applied to the SignatureField, such as color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for the SignatureField fill gradient, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Length for a linear fill gradient, or radius for a radial fill gradient, applied to the SignatureField.
> Number **gradientFillAngle**
>
> Linear fill-gradient angle for this object. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for the SignatureField stroke gradient, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Length for a linear stroke gradient, or radius for a radial stroke gradient, applied to the SignatureField.
> Number **gradientStrokeAngle**
>
> Linear stroke-gradient angle for this object. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the SignatureField stroke color overprint underlying objects; false makes it knock out underlying colors.
> Swatch **gapColor**
>
> Gap swatch for a dashed, dotted, or striped stroke: color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint percentage. Use 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes it knock them out.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the SignatureField.
> Boolean **nonprinting**
>
> True prevents the SignatureField from printing.
> Layer **itemLayer**
>
> Layer containing the SignatureField.
> Boolean **locked**
>
> True locks the SignatureField.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the SignatureField.
> Number **rotationAngle**
>
> Rotation angle for the SignatureField. (Range: -360 to 360)
> Number **shearAngle**
>
> Skew angle applied to the SignatureField. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the SignatureField.
> Number **verticalScale**
>
> Vertical scaling applied to the SignatureField.
> Number **absoluteRotationAngle**
>
> Relative-to-container rotation angle for the SignatureField. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Relative-to-container skew angle for the SignatureField. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Relative-to-container horizontal scale for the SignatureField.
> Number **absoluteVerticalScale**
>
> Relative-to-container vertical scale for the SignatureField.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the SignatureField.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Indicates whether the SignatureField was flipped independently from its parent object and, when so, the direction of that flip.
> Boolean **visible**
>
> True makes the SignatureField visible.
> CornerOptions **topLeftCornerOption**
>
> Shape used for rectangular upper-left corners and for every corner on non-rectangular shapes. Note: corner options support a radius, unlike end joins, whose rounded or beveled effects depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Shape used for rectangular upper-right corners.
> CornerOptions **bottomLeftCornerOption**
>
> Shape used for rectangular lower-left corners.
> CornerOptions **bottomRightCornerOption**
>
> Shape used for rectangular lower-right corners.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the upper-left rectangular corner effect and for corner effects on non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the upper-right rectangular corner effect.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the lower-left rectangular corner effect.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the lower-right rectangular corner effect.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the SignatureField.
> Number **leftArrowHeadScale**
>
> Scaling for the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scaling for the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Stores any string value.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **bringToFront**( PageItem **reference** )
>
> Moves the SignatureField to the front of its layer, or ahead of a specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object should be placed in front of; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the SignatureField to the back of its layer, or behind a specified item that shares the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object should be placed behind. (Optional) |

> **bringForward**()
>
> Moves the SignatureField forward by one layer-stack level.
> **sendBackward**()
>
> Moves the SignatureField backward by one layer-stack level.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the SignatureField into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the SignatureField. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Inset percentage for the generated star shape. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Radius for rounded rectangle corners. (Optional) |

> **convertToObject**()
>
> Changes the button object into the page item from the current active state; page items belonging to other states are discarded.
> Asset **store**( Library **using**, Object **withProperties** )
>
> Stores this object in the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the object. |
| Object | withProperties | Initial property values for the new SignatureField. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Writes **value** into the label entry identified by **key**.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> **placeXML**( XMLElement **using** )
>
> Places XML content into this object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element containing the content to place. |

> **autoTag**()
>
> Tags the object or its parent story with default tags from XML preferences.
> **markup**( XMLElement **using** )
>
> Associates the page item with the specified XML element and keeps existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find-what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns the results reversed. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find-what value and replaces them with the change-to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns the results reversed. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Creates an override for a master page item and puts the new object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Removes a previously applied master page item override.
> **detach**()
>
> Detaches an overridden master page item from its master page.
> **remove**()
>
> Deletes the SignatureField.
> **fit**( FitOptions **given** )
>
> Applies the selected fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip operation on the SignatureField.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the SignatureField. |
| Mixed | around | Reference point for the flip. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a copy of the SignatureField at the requested location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination expressed as [x, y] coordinates for the duplicate. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount for the duplicate relative to the original position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the SignatureField. Note: one of **to** or **by** is required; if both are supplied, only **to** is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination for the SignatureField in (x, y) format. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset for moving the SignatureField from its current position, in (x, y) format. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Assigns the requested object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | True clears existing SignatureField attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | True clears SignatureField attributes and formatting not defined by the object style. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object-style overrides.
> **clearTransformations**()
>
> Resets SignatureField transforms, covering translation, rotation, shear, scale, flip, and fit changes.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin point. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Components selected for replacement; supplying this optional value replaces the target's existing transform components with new values. If omitted, the given matrix is concatenated with the current transform so both effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin using ruler units instead of points. Default value is false. This parameter only matters when the reference point is relative to a page. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
