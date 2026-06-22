# Eps (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

An EPS file that has been placed.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before an EPS is placed. This event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after an EPS is placed. This event bubbles and cannot be canceled.

## Instance

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
> Fill transparency configuration for the EPS.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Content transparency configuration for the EPS.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default object-wrap formatting comes from these text wrap preference properties.
> _Read Only_
>
> ClippingPathSettings **clippingPath**
>
> Clipping path configuration.
> _Read Only_
>
> String **space**
>
> Color space value.
> _Read Only_
>
> Number **actualPpi**
>
> Native resolution for a placed graphic.
> _Read Only_
>
> Number **effectivePpi**
>
> Graphic resolution after resizing.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the EPS.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and is overridden. False means it either remains unoverridden on a master spread or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden item whose origin was a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> Link **itemLink**
>
> Source file for the link.
> _Read Only_
>
> String **imageTypeName**
>
> Image type name.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Animation settings for the page item.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for Linked Page Item behavior.
> _Read Only_
>
> PageItem **allPageItems**
>
> Lists every page item contained by the EPS.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic contained by the EPS.
> _Read Only_
>
> Page **parentPage**
>
> Page where this page item appears.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Timing settings for the object.
> _Read Only_
>
> Article **allArticles**
>
> Lists all articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique ID for the EPS.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> EPS parent can be any of these: Snippet, XMLElement, PlaceGun, TextBox, SignatureField, ComboBox, ListBox, SplineItem, Polygon, GraphicLine, Rectangle, Oval or State.
> _Read Only_
>
> Number **index**
>
> Position index for the EPS inside its containing object.
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
> SVGs **svgs**
>
> Collection of SVG files.
> _Read Only_
>
> Graphics **graphics**
>
> Imported-graphics collection covering vector, metafile, and bitmap graphic file formats.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection for processing every page item inside a container, including a document, page, or group, across item types.
> Boolean **nonprinting**
>
> True prevents the EPS from printing.
> PlacedVectorProfilePolicy **grayVectorPolicy**
>
> Color profile policy for grayscale content in a placed vector.
> PlacedVectorProfilePolicy **rgbVectorPolicy**
>
> Color profile policy for RGB content in a placed vector.
> PlacedVectorProfilePolicy **cmykVectorPolicy**
>
> Color profile policy for CMYK content in a placed vector.
> Boolean **allowOverrides**
>
> True allows the master page item to be overridden.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> EPS bounds without stroke width, in the format [y1, x1, y2, x2], giving the top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> EPS bounds with stroke width included, in the format [y1, x1, y2, x2], giving the top-left and bottom-right bounding-box coordinates.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the EPS.
> Number **rotationAngle**
>
> Rotation angle for the EPS. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle used by the EPS. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling used by the EPS.
> Number **verticalScale**
>
> Vertical scaling used by the EPS.
> Number **absoluteRotationAngle**
>
> Rotation angle of the EPS relative to the containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Skewing angle of the EPS relative to the containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the EPS relative to the containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the EPS relative to the containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style currently applied to the EPS.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> States whether the EPS was flipped independently of its parent object and, when applicable, the flip direction.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints used by the item with the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints used by the item with the object-based layout rule.
> Swatch **fillColor**
>
> Swatch, such as color, gradient, tint, or mixed ink, applied to the EPS fill. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the EPS's fill color. Values 0 to 100 set an explicit tint; -1 selects the inherited or overridden value.
> Boolean **overprintFill**
>
> True overprints underlying objects with the EPS fill color; false knocks those underlying colors out.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, applied to the EPS.
> Number **miterLimit**
>
> Maximum stroke-width-to-miter-length ratio before a miter join changes to a bevel join.
> EndCap **endCap**
>
> End shape for an open path.
> EndJoin **endJoin**
>
> Corner join used by the EPS.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the EPS.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed-line pattern. Define up to six values, in points, using the format [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the beginning of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the end of the path.
> Swatch **strokeColor**
>
> Swatch, such as color, gradient, tint, or mixed ink, applied to the EPS stroke. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for object's stroke color. Values 0 to 100 set an explicit tint; -1 selects the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Gradient starting point for the EPS fill in page coordinates, using the format [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> EPS fill gradient size: length when linear, radius when radial.
> Number **gradientFillAngle**
>
> Linear-gradient angle used by the EPS fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Gradient starting point for the EPS stroke in page coordinates, using the format [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> EPS stroke gradient size: length when linear, radius when radial.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle used by the EPS stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True overprints underlying objects with the EPS stroke color; false knocks those underlying colors out.
> Swatch **gapColor**
>
> Swatch for the gap in a dashed, dotted, or striped stroke, such as color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap color tint percentage. Values 0 to 100 set an explicit tint; -1 selects the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes the gap color knock out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the EPS.
> Layer **itemLayer**
>
> Layer containing the EPS.
> Boolean **locked**
>
> True means the EPS is locked.
> Boolean **visible**
>
> True means the EPS is visible.
> String **name**
>
> Name of the EPS.
> CornerOptions **topLeftCornerOption**
>
> Corner shape applied to the top left corner of rectangular shapes and to every corner of non-rectangular shapes. Note: corner option differs from end join because a corner option can have a radius, while rounded or beveled end join behavior depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Corner shape used on rectangular shapes at the upper-right corner.
> CornerOptions **bottomLeftCornerOption**
>
> Corner shape used on rectangular shapes at the lower-left corner.
> CornerOptions **bottomRightCornerOption**
>
> Corner shape used on rectangular shapes at the lower-right corner.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Radius, in measurement units, for the corner effect on rectangular shapes at the upper-left corner and on every non-rectangular-shape corner.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes at the upper-right corner.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes at the lower-left corner.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes at the lower-right corner.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the EPS.
> Number **leftArrowHeadScale**
>
> Scale used for the arrowhead at the beginning of the path. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale for the path-ending arrowhead. (Range: 1 to 1000)
> String **label**
>
> Settable string property.
> Object **properties**
>
> Property container that can set several properties at once.

### Methods

> Asset **store**( Library **using**, Object **withProperties** )
>
> Adds this object to the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the object. |
| Object | withProperties | Starting property values for the new EPS. (Optional) |

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

> String **exportForWeb**( File **to** )
>
> Exports the EPS for web use.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Full path name for the exported file. |

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
> Removes the EPS.
> **fit**( FitOptions **given** )
>
> Uses the supplied fit option on content inside a frame.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip operation on the EPS.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used for flipping the EPS. |
| Mixed | around | Reference point for flipping the EPS. Accepts: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a copy of the EPS at the requested location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination for the new EPS, given as coordinates in the format [x, y]. Accepts: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset distance from the original EPS's position for the new EPS. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Repositions the EPS. Note: one of the 'to' or 'by' arguments must be supplied; when both are present, the to value takes precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination for the EPS, using the (x, y) format. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset, in measurement units, used to move the EPS from where it currently sits, expressed as (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Assigns the indicated object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style that will be assigned. |
| Boolean | clearingOverrides | When true, removes the EPS's current attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, strips attributes and formatting on the EPS that the object style does not define. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object style overrides.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Mixed | from | Temporary origin used while transforming. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transformation. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to evaluate; supplying this optional value replaces the target's current transform components with new ones. If omitted, the supplied matrix is concatenated with the existing transform so both effects are combined. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is read in ruler units instead of points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the lookup. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Resolves a requested location to coordinates in the chosen coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location value. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space used for resolution. |
| Boolean | consideringRulerUnits | When true, ruler-unit values are used to interpret a ruler location instead of points. The default value is false. This argument has an effect only for page-relative reference points. (Optional) |

> **redefineScaling**( Number **to** )
>
> Pushes an item's scaling into its contents where possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors that should remain assigned to the item. The default is \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box that will be resized. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin point for the transform. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | Method that controls how the provided values alter the current dimensions. |
| Mixed | values | Width and height inputs. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space controls _only_ the length unit for x and y; for the 'current dimensions times' resize method, coordinate space is ignored). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and the target contains multiple page items, the requested dimensions are reached by moving separate items rather than resizing each item. (Optional) |
| Boolean | consideringRulerUnits | When true, ruler-unit values are used to interpret a ruler location instead of points. The default value is false. This argument has an effect only for page-relative reference points. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Changes the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box that will be reframed. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the supplied coordinate space. |

> String **transformAgain**()
>
> Replays on the EPS the prior transform applied to any object; supported operations are move, rotate, shear, scale, and flip.
> String **transformSequenceAgain**()
>
> Replays on the EPS the prior transform sequence from one object or from a group transformed simultaneously; supported operations are move, rotate, shear, scale, and flip.
> String **transformAgainIndividually**()
>
> Reapplies to this EPS the prior transform used on any EPS; supported operations are move, rotate, shear, scale, and flip.
> String **transformSequenceAgainIndividually**()
>
> Reapplies to this EPS the prior transform sequence from one object or from a simultaneously transformed group; supported operations are move, rotate, shear, scale, and flip.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds Plain Text QR Code data to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property seed values for the new EPS, including values otherwise provided through the listed arguments. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds Hyperlink QR Code data to either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL stored in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch assigned to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property seed values for the new EPS, including values otherwise provided through the listed arguments. (Optional) |
