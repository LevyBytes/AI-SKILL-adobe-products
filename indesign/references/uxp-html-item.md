# Html Item (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Fires before placement of a HtmlItem. The event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Fires after placement of a HtmlItem. The event bubbles and cannot be canceled.

## HtmlItem — Instance

> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> References the XML element linked to the HtmlItem.
> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Holds transparency settings.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Holds stroke transparency settings.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Holds transparency settings for the HtmlItem fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Holds transparency settings for the HtmlItem content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Defines the default text-wrapping format around objects through the text wrap preference properties.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Provides linked Page Item options.
> _Read Only_
>
> Boolean **overridden**
>
> true means this object came from a master spread and has been overridden; false covers either a non-overridden master-spread object or an object that did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> References an overridden item whose origin is a master page. Return types include: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> Lists every page item contained by the HtmlItem.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic contained by the HtmlItem.
> _Read Only_
>
> Page **parentPage**
>
> Identifies the page where this page item is shown.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Holds animation settings for the page item.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Holds object timing settings.
> _Read Only_
>
> Article **allArticles**
>
> Lists all articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Stores the HtmlItem unique ID.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the HtmlItem parent, which can be a SplineItem, Polygon, GraphicLine, Rectangle or Oval.
> _Read Only_
>
> Number **index**
>
> Gives the HtmlItem position inside its container.
> _Read Only_
>
> Preferences **preferences**
>
> Provides the preferences objects collection.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event-listener collection.
> _Read Only_
>
> SVGs **svgs**
>
> Provides the SVG files collection.
> _Read Only_
>
> Graphics **graphics**
>
> Provides imported graphics of any graphic file format, including vector, metafile, or bitmap.
> _Read Only_
>
> PageItems **pageItems**
>
> Provides the page items collection so every page item can be processed by container, including document, page, or group containers, without regard to type.
> String **htmlContent**
>
> Stores the embedded HTML text.
> Boolean **fixedDimensions**
>
> Indicates whether this HTML can adjust width and height when the parent div changes, or whether fixed dimensions are used.
> Boolean **allowOverrides**
>
> true permits the master page item to be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Sets the left margin, width, and right margin constraints used by this item with the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Sets the top margin, height, and bottom margin constraints used by this item with the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Gives the HtmlItem bounds without stroke width, in the format [y1, x1, y2, x2], with bounding-box coordinates running from top-left to bottom-right.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Gives the HtmlItem bounds including stroke width, in the format [y1, x1, y2, x2], with bounding-box coordinates running from top-left to bottom-right.
> Swatch **fillColor**
>
> Applies a swatch (color, gradient, tint, or mixed ink) to the HtmlItem fill. Can also accept: String.
> Number **fillTint**
>
> Sets the tint percentage for the HtmlItem fill color. Use a number from 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> true makes the HtmlItem fill color overprint underlying objects; false makes it knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Applies stroke weight to the HtmlItem in points.
> Number **miterLimit**
>
> Sets the stroke-width to miter-length ratio limit before a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> Sets the shape at the end of an open path.
> EndJoin **endJoin**
>
> Applies the corner join to the HtmlItem.
> StrokeStyle **strokeType**
>
> Specifies the stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Applies the corner adjustment to the HtmlItem.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Defines dash and gap measurements for a custom dashed line. Define up to six point values in the format [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Applies the arrowhead to the path start.
> ArrowHead **rightLineEnd**
>
> Applies the arrowhead to the path end.
> Swatch **strokeColor**
>
> Applies a swatch (color, gradient, tint, or mixed ink) to the HtmlItem stroke. Can also accept: String.
> Number **strokeTint**
>
> Sets the tint percentage for the object's stroke color. Use a number from 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Sets the starting point, in page coordinates, for a gradient applied to the HtmlItem fill, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Sets the length for a linear gradient or the radius for a radial gradient applied to the HtmlItem fill.
> Number **gradientFillAngle**
>
> Sets the linear-gradient angle applied to the HtmlItem fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Sets the starting point, in page coordinates, for a gradient applied to the HtmlItem stroke, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Sets the length for a linear gradient or the radius for a radial gradient applied to the HtmlItem stroke.
> Number **gradientStrokeAngle**
>
> Sets the linear-gradient angle applied to the HtmlItem stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> true makes the HtmlItem stroke color overprint underlying objects; false makes it knock out underlying colors.
> Swatch **gapColor**
>
> Applies a swatch (color, gradient, tint, or mixed ink) to gaps in dashed, dotted, or striped strokes. See stroke type for related details.
> Number **gapTint**
>
> Sets the gap color tint as a percentage. Use a number from 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> true makes the gap color overprint underlying colors; false makes it knock out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Applies stroke alignment to the HtmlItem.
> Boolean **nonprinting**
>
> true prevents the HtmlItem from printing.
> Layer **itemLayer**
>
> Identifies the layer containing the HtmlItem.
> Boolean **locked**
>
> true locks the HtmlItem.
> DisplaySettingOptions **localDisplaySetting**
>
> Sets display performance options for the HtmlItem.
> Number **rotationAngle**
>
> Sets the HtmlItem rotation angle. (Range: -360 to 360)
> Number **shearAngle**
>
> Applies the skewing angle to the HtmlItem. (Range: -360 to 360)
> Number **horizontalScale**
>
> Applies horizontal scaling to the HtmlItem.
> Number **verticalScale**
>
> Applies vertical scaling to the HtmlItem.
> Number **absoluteRotationAngle**
>
> Sets the HtmlItem rotation angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Sets the HtmlItem skewing angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Sets the HtmlItem horizontal scale relative to its containing object.
> Number **absoluteVerticalScale**
>
> Sets the HtmlItem vertical scale relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Applies the object style to the HtmlItem.
> Flip **flip**
>
> Sets the direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Indicates whether the HtmlItem was flipped independently from its parent object and, if so, gives the flip direction.
> Boolean **visible**
>
> true makes the HtmlItem visible.
> String **name**
>
> Names the HtmlItem.
> CornerOptions **topLeftCornerOption**
>
> Applies the corner shape to the top left corner of rectangular shapes and every corner of non-rectangular shapes. Note: corner option differs from end join because a corner option can have a radius, while rounded or beveled end-join results depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Applies the corner shape to the top right corner of rectangular shapes.
> CornerOptions **bottomLeftCornerOption**
>
> Applies the corner shape to the bottom left corner of rectangular shapes.
> CornerOptions **bottomRightCornerOption**
>
> Sets the shape for the lower-right corner of rectangular shapes.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Sets, in measurement units, the corner-effect radius for the upper-left corner of rectangular shapes and every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Sets, in measurement units, the corner-effect radius for the upper-right corner of rectangular shapes.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Sets, in measurement units, the corner-effect radius for the lower-left corner of rectangular shapes.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Sets, in measurement units, the corner-effect radius for the lower-right corner of rectangular shapes.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Applies arrowhead alignment to the HtmlItem.
> Number **leftArrowHeadScale**
>
> Sets scaling for the path-start arrowhead. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Sets scaling for the path-end arrowhead. (Range: 1 to 1000)
> String **label**
>
> Accepts any string as the property value.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves this object into the supplied library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library destination that receives the object. |
| Object | withProperties | Property values used when the new HtmlItem is initialized (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Writes a label value under the provided key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> **placeXML**( XMLElement **using** )
>
> Puts XML content into the target object. Note: Existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element providing the content to place. |

> **autoTag**()
>
> Uses XML preference default tags to tag either the object or its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the supplied XML element without removing current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Locates objects whose values satisfy the find what setting.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results come back in reverse order. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects that satisfy find what, then substitutes them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results come back in reverse order. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Imports the file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File selected for placement |
| Boolean | showingOptions | Controls whether the import options dialog is shown (Optional) |
| Object | withProperties | Starting property values for the placed object or objects (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Converts a master page item override into a new object on the destination document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item that will be overridden. |

> **removeOverride**()
>
> Clears the override from a master page item that had already been overridden.
> **detach**()
>
> Separates an overridden master page item from its master page.
> **remove**()
>
> Removes the HtmlItem.
> **fit**( FitOptions **given** )
>
> Uses the requested fit option for frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Reverses the HtmlItem across a specified axis.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the HtmlItem. |
| Mixed | around | Flip center point. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a copy of the HtmlItem at the requested position or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Coordinate pair [x, y] for the new HtmlItem location. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount applied from the original HtmlItem position to the new HtmlItem. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the HtmlItem. Note: Provide either the 'to' parameter or the 'by' parameter; when both are present, the to value is the one used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination coordinate pair (x, y) for the HtmlItem. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset pair (x, y) from the current HtmlItem position. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Assigns the requested object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style that should be applied. |
| Boolean | clearingOverrides | When true, existing HtmlItem attributes are cleared before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, HtmlItem attributes and formatting absent from the object style are removed. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object style overrides
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the HtmlItem into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the HtmlItem. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Inset percentage used when the resulting polygon is a star. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius used for the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Removes transformations from the HtmlItem. Affected operations include shearing along with fitting, flipping, rotation, and scaling.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transformation to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation |
| Mixed | from | Temporary origin used during transformation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to evaluate; when this optional value is supplied, the target's current transform components are replaced with new values. If it is omitted, the supplied matrix is concatenated onto the target's current transform so both effects are combined. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is read in ruler units instead of points. The default value is false. This parameter matters only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Returns coordinates for the requested location within the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. The default value is false. This parameter matters only when the reference point is page-relative. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its contents when that can be done.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Retained scale factors. Default: \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Transform origin. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the supplied values affect the current dimensions |
| Mixed | values | Dimensions to apply. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y must be real numbers, and coordinate space contributes only length units to x and y; the 'current dimensions times' resize method ignores coordinate space). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and multiple page items are targeted, the new dimensions are reached by moving the individual items instead of resizing them. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. The default value is false. This parameter matters only when the reference point is page-relative. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | New bounding box opposing corners in the supplied coordinate space |

> String **transformAgain**()
>
> Repeats on the HtmlItem the last transformation applied to any object. Included operations are flipping, moving, rotating, scaling, and shearing.
> String **transformSequenceAgain**()
>
> Repeats on the HtmlItem the latest transform-operation sequence applied to one object or simultaneously to a group of objects. Included operations are flipping, moving, rotating, scaling, and shearing.
> String **transformAgainIndividually**()
>
> Repeats on the HtmlItem the last transformation applied to any HtmlItem. Included operations are flipping, moving, rotating, scaling, and shearing.
> String **transformSequenceAgainIndividually**()
>
> Repeats on the HtmlItem the latest transformation sequence applied to one object or simultaneously to a group of objects. Included operations are flipping, moving, rotating, scaling, and shearing.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a QR Code of type Plain Text for the page item

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text value for the QR code (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new HtmlItem; this property map can include the preceding parameters (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Creates a QR Code of type Hyperlink for the page item or document

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL value for the QR code (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new HtmlItem; this property map can include the preceding parameters (Optional) |
