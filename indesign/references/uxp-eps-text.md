# Eps Text (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Fires before a EPSText is placed; the event bubbles and is cancelable.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Fires after a EPSText is placed; the event bubbles and cannot be canceled.

## EPSText — Instance

> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings for anchored objects.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked with the EPSText.
> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Overall transparency settings.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Stroke-specific transparency settings.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Fill transparency settings applied to the EPSText.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency settings for EPSText content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties defining the default format for wrapping text around objects.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Linked Page Item option settings.
> _Read Only_
>
> Boolean **overridden**
>
> When true, the object came from a master spread and has been overridden. When false, either it still uses the master-spread version or it was not created from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden item whose origin was a master page. Return types: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> Lists every page item contained by the EPSText.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic contained by the EPSText.
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
> Unique ID assigned to the EPSText.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the EPSText. Possible parent types: Snippet, PlaceGun, ComboBox, ListBox, TextBox, SignatureField, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, State or Character.
> _Read Only_
>
> Number **index**
>
> EPSText index within its container.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preferences objects.
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
> TextPaths **textPaths**
>
> Collection of text paths.
> _Read Only_
>
> SVGs **svgs**
>
> Collection of SVG files.
> _Read Only_
>
> Graphics **graphics**
>
> Collection of imported graphics in any graphic file format, including vector, metafile, or bitmap.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection for page items, usable to handle all page items inside a container such as a document, page, or group without regard to type.
> Boolean **allowOverrides**
>
> When true, the master page item can be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied to this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied to this item under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds for the EPSText excluding stroke width, in [y1, x1, y2, x2] order; the values are the top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds for the EPSText including stroke width, in [y1, x1, y2, x2] order; the values are the top-left and bottom-right bounding-box coordinates.
> Swatch **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied to the EPSText fill. Accepted type also includes: String.
> Number **fillTint**
>
> Tint percentage for the EPSText fill color. Use 0 to 100 for a specific tint; use -1 for inherited or overridden values.
> Boolean **overprintFill**
>
> When true, the EPSText fill color overprints objects underneath. When false, the fill color knocks out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, applied to the EPSText.
> Number **miterLimit**
>
> Ratio threshold between stroke width and miter length at which a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join used by the EPSText.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Accepted type also includes: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the EPSText.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap values defining a custom dashed-line pattern. Provide as many as six point values in [dash1, gap1, dash2, gap2, dash3, gap3] order.
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the beginning of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the end of the path.
> Swatch **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied to the EPSText stroke. Accepted type also includes: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for a specific tint; use -1 for inherited or overridden values.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient on the EPSText fill, expressed as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Linear-gradient length or radial-gradient radius applied to the EPSText fill.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the EPSText fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient on the EPSText stroke, expressed as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Linear-gradient length or radial-gradient radius applied to the EPSText stroke.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the EPSText stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> When true, the EPSText stroke color overprints objects underneath. When false, the stroke color knocks out underlying colors.
> Swatch **gapColor**
>
> Gap swatch, which may be a color, gradient, tint, or mixed ink, for strokes with dash, dot, or stripe patterns. See stroke type for details.
> Number **gapTint**
>
> Gap-color tint percentage. Use 0 to 100 for a specific tint; use -1 for inherited or overridden values.
> Boolean **overprintGap**
>
> When true, the gap color overprints colors underneath. When false, the gap color knocks them out.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the EPSText.
> Boolean **nonprinting**
>
> When true, the EPSText is excluded from printing.
> Layer **itemLayer**
>
> Layer containing the EPSText.
> Boolean **locked**
>
> Locked state for the EPSText.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the EPSText.
> Number **rotationAngle**
>
> Rotation angle for the EPSText. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the EPSText. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the EPSText.
> Number **verticalScale**
>
> Vertical scaling applied to the EPSText.
> Number **absoluteRotationAngle**
>
> Rotation angle measured against the containing object for the EPSText. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Skewing angle measured against the containing object for the EPSText. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale for the EPSText relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale for the EPSText relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the EPSText.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Indicates whether the EPSText was flipped independently of its parent object and, if so, gives the direction of that flip.
> Boolean **visible**
>
> When true, the EPSText is visible.
> String **name**
>
> Name of the EPSText.
> CornerOptions **topLeftCornerOption**
>
> Corner shape for the top left of rectangular shapes and for every corner of non-rectangular shapes. Note: corner option differs from end join because a corner option can have a radius, while rounded or beveled end-join appearance depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Corner shape for the top right of rectangular shapes.
> CornerOptions **bottomLeftCornerOption**
>
> Corner shape for the bottom left of rectangular shapes.
> CornerOptions **bottomRightCornerOption**
>
> Corner shape for the bottom right of rectangular shapes.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Radius, in measurement units, for the corner effect on the top left of rectangular shapes and every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Radius, in measurement units, for the corner effect on the top right of rectangular shapes.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Radius, in measurement units, for the corner effect on the bottom left of rectangular shapes.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Radius, in measurement units, for the corner effect on the bottom right of rectangular shapes.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the EPSText.
> Number **leftArrowHeadScale**
>
> Scale factor for the path-start arrowhead. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale factor for the path-end arrowhead. (Range: 1 to 1000)
> String **label**
>
> Settable string-valued property.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> **bringToFront**( PageItem **reference** )
>
> Moves the EPSText to the top of its layer, or positions it ahead of a supplied item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Object used as the front-placement reference; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Places the EPSText at the bottom of its layer, or behind the chosen item; the parent must match.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Object used as the behind-placement reference. (Optional) |

> **bringForward**()
>
> Raises the EPSText one stacking level within its layer.
> **sendBackward**()
>
> Lowers the EPSText one stacking level within its layer.
> Asset **store**( Library **using**, Object **withProperties** )
>
> Adds this object to the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the object. |
| Object | withProperties | Starting property values for the created EPSText. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Writes a label value for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> **placeXML**( XMLElement **using** )
>
> Inserts XML content into this object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element that supplies the content to place. |

> **autoTag**()
>
> Uses the default tags from XML preference to tag this object or its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the supplied XML element and keeps the current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Locates objects matching the current find what setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, the returned results are ordered in reverse. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects matching find what and substitutes the change to setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, the returned results are ordered in reverse. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places the selected file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File that will be placed. |
| Boolean | showingOptions | Controls whether the import options dialog appears. (Optional) |
| Object | withProperties | Starting property values for the placed object(s). (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Converts a master page item override into a new object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item being overridden. |

> **removeOverride**()
>
> Clears the override state from a master page item that was previously overridden.
> **detach**()
>
> Separates an overridden master page item from its master page.
> **remove**()
>
> Removes the EPSText.
> **fit**( FitOptions **given** )
>
> Uses the supplied fit option on content inside a frame.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip operation on the EPSText.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used for flipping the EPSText. |
| Mixed | around | Reference point for flipping the EPSText. Accepts: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a copy of the EPSText at the requested location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination for the new EPSText, given as coordinates in the format [x, y]. Accepts: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset distance from the original EPSText's position for the new EPSText. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the EPSText. Note: either the 'to' or 'by' argument is required; when both are supplied, the to value takes precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New EPSText location expressed as (x, y). Accepts: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit amount that shifts the EPSText from its current position, expressed as (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the chosen object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style that will be applied. |
| Boolean | clearingOverrides | When true, current EPSText attributes are removed before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, EPSText attributes and formatting outside the object style definition are cleared. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object style overrides.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the EPSText into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | Replacement shape for the EPSText. |
| Number | numberOfSides | Side count for the polygon produced by the conversion. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Percentage controlling the star inset in the polygon result. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius used for the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Removes transformation data from the EPSText, including shear, fit, flip, scale, and rotation effects.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space for the operation. |
| Mixed | from | Temporary origin used while transforming. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transform. Accepts: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components included in replacement; when this optional value is supplied, the target's current transform components are replaced by new values. Without it, the supplied matrix is concatenated with the target's current transform so both effects combine. Accepts: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin uses ruler units instead of points. The default value is false. This setting only matters when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space for the values. |

> String **transformAgain**()
>
> Reapplies to the EPSText the most recent transformation used on any object. The operation set covers move, rotate, shear, scale, and flip actions.
> String **transformSequenceAgain**()
>
> Repeats on the EPSText the latest transform sequence used on one object, or applied simultaneously to a group. The operation set covers move, rotate, shear, scale, and flip actions.
> String **transformAgainIndividually**()
>
> Runs again on the EPSText the most recent transformation previously used on any EPSText. The operation set covers move, rotate, shear, scale, and flip actions.
> String **transformSequenceAgainIndividually**()
>
> Replays on the EPSText the latest sequence of transformations used on one object, or applied at the same time to a group. The operation set covers move, rotate, shear, scale, and flip actions.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Builds a QR Code carrying Plain Text content for the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new EPSText; the listed parameters can be delivered through properties as well. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Hyperlink QR Code on a page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL stored in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new EPSText; the listed parameters can be delivered through properties as well. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a Text Msg QR Code on a page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number encoded in the QR code. (Optional) |
| String | textMessage | Text Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new EPSText; the listed parameters can be delivered through properties as well. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates an Email QR Code on a page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address encoded in the QR code. (Optional) |
| String | subject | Email Subject encoded in the QR code. (Optional) |
| String | body | Email Body Message encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new EPSText; the listed parameters can be delivered through properties as well. (Optional) |
