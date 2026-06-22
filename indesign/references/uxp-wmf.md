# Wmf (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Placed WMF graphic.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Before a WMF is placed, this event fires, bubbles, and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> After a WMF is placed, this event fires, bubbles, and cannot be canceled.

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
> Fill transparency configuration applied to the WMF.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Content transparency configuration for the WMF.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties that set default formatting for object text wrap.
> _Read Only_
>
> ClippingPathSettings **clippingPath**
>
> Clipping path configuration.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the WMF.
> _Read Only_
>
> Boolean **overridden**
>
> True indicates an object from a master spread has been overridden. False means either it came from a master spread without being overridden, or it did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object whose origin is a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> Link **itemLink**
>
> Link source file.
> _Read Only_
>
> String **imageTypeName**
>
> Image type.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Animation settings for the page item.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked Page Items.
> _Read Only_
>
> PageItem **allPageItems**
>
> Lists every page item contained by the WMF.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic contained by the WMF.
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
> Unique ID assigned to the WMF.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the WMF. Supported parent types include a Snippet, an XMLElement, a PlaceGun, a TextBox, a SignatureField, a ComboBox, a ListBox, a SplineItem, a Polygon, a GraphicLine, a Rectangle, an Oval or a State.
> _Read Only_
>
> Number **index**
>
> Position of the WMF inside its container.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preferences objects.
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
> SVGs **svgs**
>
> Collection of SVG files.
> _Read Only_
>
> Graphics **graphics**
>
> Imported graphics collection covering vector, metafile, or bitmap graphic formats.
> _Read Only_
>
> PageItems **pageItems**
>
> Page items collection used to process every page item in a container, such as a document, page, or group, without regard to type.
> Boolean **nonprinting**
>
> True prevents the WMF from printing.
> Boolean **allowOverrides**
>
> True permits overriding the master page item.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds of the WMF without stroke width, in the format [y1, x1, y2, x2], giving the top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds of the WMF including stroke width, in the format [y1, x1, y2, x2], giving the top-left and bottom-right bounding-box coordinates.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options assigned to the WMF.
> Number **rotationAngle**
>
> Rotation angle for the WMF. (Range: -360 to 360)
> Number **shearAngle**
>
> Skew angle applied to the WMF. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the WMF.
> Number **verticalScale**
>
> Vertical scaling applied to the WMF.
> Number **absoluteRotationAngle**
>
> WMF rotation measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> WMF skew measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the WMF relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the WMF relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the WMF.
> Flip **flip**
>
> Flip direction for the printed image.
> Flip **absoluteFlip**
>
> Shows whether the WMF was flipped independently from its parent object and, when it was, the flip direction.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints that apply to this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints that apply to this item under the object-based layout rule.
> Swatch **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied to the WMF fill. . Can also accept: String.
> Number **fillTint**
>
> Tint percentage used for the WMF's fill color. Use 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the WMF fill color overprint underlying objects. False makes it knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight in points applied to the WMF.
> Number **miterLimit**
>
> Maximum stroke-width-to-miter-length ratio before a miter (pointed) join changes to a bevel (squared-off) join.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join applied to the WMF.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> WMF corner adjustment setting.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements defining a custom dashed-line pattern. The format is [dash1, gap1, dash2, gap2, dash3, gap3], with up to six point values.
> ArrowHead **leftLineEnd**
>
> Arrowhead applied to the start of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead applied to the end of the path.
> Swatch **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied to the WMF stroke. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage used for object's stroke color. Use 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient applied to the WMF fill, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For WMF fill gradients, this gives the linear-gradient length or radial-gradient radius.
> Number **gradientFillAngle**
>
> Angle of a linear gradient applied to the WMF fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient applied to the WMF stroke, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For WMF stroke gradients, this gives the linear-gradient length or radial-gradient radius.
> Number **gradientStrokeAngle**
>
> Angle of a linear gradient applied to the WMF stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the WMF stroke color overprint underlying objects. False makes it knock out underlying colors.
> Swatch **gapColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied to the gap in a dashed, dotted, or striped stroke. For details, see stroke type.
> Number **gapTint**
>
> Gap color tint percentage. Use 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors. False makes it knock out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment applied to the WMF.
> Layer **itemLayer**
>
> Layer containing the WMF.
> Boolean **locked**
>
> True means the WMF is locked.
> Boolean **visible**
>
> True means the WMF is visible.
> String **name**
>
> Name assigned to the WMF.
> CornerOptions **topLeftCornerOption**
>
> Top-left corner shape for rectangular shapes, and all-corner shape for non-rectangular shapes. Note: corner option differs from end join because corner option can have a radius, while rounded or beveled end-join effects depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Top-right corner shape for rectangular shapes.
> CornerOptions **bottomLeftCornerOption**
>
> Bottom-left corner shape for rectangular shapes.
> CornerOptions **bottomRightCornerOption**
>
> Bottom-right corner shape for rectangular shapes.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Radius, in measurement units, for the top-left corner effect on rectangular shapes and for every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Radius, in measurement units, for the top-right corner effect on rectangular shapes.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Radius, in measurement units, for the bottom-left corner effect on rectangular shapes.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Radius, in measurement units, for the bottom-right corner effect on rectangular shapes.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment applied to the WMF.
> Number **leftArrowHeadScale**
>
> Scale factor for the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale factor for the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> String-valued property.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves this object into the designated library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library destination that receives the object. |
| Object | withProperties | Starting property values assigned to the new WMF (Optional) |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Locates objects whose values satisfy the current find what criteria.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, the returned matches are ordered in reverse. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects matching the find what value, then substitutes them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, matching results come back in reverse order. (Optional) |

> **placeXML**( XMLElement **using** )
>
> Inserts XML content into the chosen object. Note: any content already there is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element that supplies the content to insert. |

> **autoTag**()
>
> Applies the default tags from XML preference to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the supplied XML element without discarding existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> String **exportForWeb**( File **to** )
>
> Creates a web export of the WMF.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Complete path name for the output file. |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places the specified file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File that will be placed |
| Boolean | showingOptions | Controls whether the import options dialog appears (Optional) |
| Object | withProperties | Initial property values for the placed object(s) (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Converts a master page item override into a new object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item that will be overridden. |

> **removeOverride**()
>
> Clears the override state from a master page item that had been overridden.
> **detach**()
>
> Separates an overridden master page item from its master page.
> **remove**()
>
> Removes the WMF.
> **fit**( FitOptions **given** )
>
> Uses the requested fit option on frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Mirrors the WMF.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used when flipping the WMF. |
| Mixed | around | WMF flip reference point. Accepted values: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Copies the WMF to the requested location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New WMF location coordinates. Use [x, y]. Accepted values: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount applied from the original WMF's position to the new WMF. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the WMF. Note: supply either the 'to' or 'by' parameter; when both are present, the to value takes precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New WMF position. Use (x, y). Accepted values: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Distance, in measurement units, for moving the WMF from its current position, using the format (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Assigns the chosen object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style that will be applied. |
| Boolean | clearingOverrides | When true, current WMF attributes are cleared before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, WMF attributes and formatting outside the object style definition are cleared. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object style overrides
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transformation to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation |
| Mixed | from | Transform's temporary origin. Accepted values: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transform. Accepted values: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to replace; passing this optional value swaps the target's current transform components for new ones. When omitted, the given matrix is concatenated with the target's existing transform, combining both effects. Accepted values: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, an origin based on the ruler is read in ruler units instead of points. The default value is false. This matters only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Converts the requested location into coordinates in the chosen coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepted values: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units rather than points. The default value is false. This setting applies only when the reference point is page-relative. (Optional) |

> **redefineScaling**( Number **to** )
>
> Pushes an item's scaling onto its content when that is possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors that should remain on the item. The default is \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Accepted values: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin point for the transform. Allowed forms: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepted values: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | Method describing how the given values affect the current dimensions |
| Mixed | values | Width and height inputs. Allowed dimension forms: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space is used _only_ to determine their length unit; coordinate space is ignored for the 'current dimensions times' resize method). Accepted values: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and the target is multiple page items, the new dimensions are reached by moving the individual items instead of resizing them. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units rather than points. The default value is false. This setting applies only when the reference point is page-relative. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Repositions the page item's bounding box

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Accepted values: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the chosen coordinate space |

> String **transformAgain**()
>
> Repeats on the WMF the most recent transformation used on any object. The transformation may be moving, rotating, shearing, scaling, or flipping.
> String **transformSequenceAgain**()
>
> Repeats on the WMF the last sequence of transform operations used on one object, or applied together to a group of objects. Supported operations are move, rotate, shear, scale, and flip transformations.
> String **transformAgainIndividually**()
>
> Applies to the WMF the last transformation previously performed on any WMF. The transformation set includes moving, rotating, shearing, scaling, and flipping.
> String **transformSequenceAgainIndividually**()
>
> Applies to the WMF the last transformation sequence used on one object, or simultaneously on a group of objects. The sequence may contain move, rotate, shear, scale, and flip transformations.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a Plain Text QR Code for the page item

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new WMF. Property-based input may include the parameters above (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a Hyperlink QR Code for the page item or document

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL for the QR code (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new WMF. Property-based input may include the parameters above (Optional) |
