# Sound (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Sound clip object.

## Class

> _Read Only_
>
> String `AFTER_ATTRIBUTE_CHANGED` = afterAttributeChanged
>
> Sent when a property value changes on this Sound. The event bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before placement of a Sound. The event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after placement of a Sound. The event bubbles and cannot be canceled.

## Instance

> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the Sound.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and was overridden. False means either the master-spread object remains unoverridden, or the object did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object that originated on a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> Link **itemLink**
>
> Link source file.
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
> Fill transparency settings applied to the Sound.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Content transparency settings for the Sound.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties that set default object-wrap behavior for text.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked page items.
> _Read Only_
>
> PageItem **allPageItems**
>
> Lists every page item contained by the Sound.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic contained by the Sound.
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
> Unique Sound ID.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when resolution of the object specifier produces valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Containing object for this Sound; possible parents are SplineItem, Polygon, GraphicLine, Rectangle or Oval.
> _Read Only_
>
> Number **index**
>
> Position of the Sound inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preferences objects.
> _Read Only_
>
> Paths **paths**
>
> Paths collection.
> _Read Only_
>
> Images **images**
>
> Bitmap-image collection; supported bitmap formats include TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Collection of imported graphics in any graphic file format, whether vector, metafile, or bitmap.
> _Read Only_
>
> PageItems **pageItems**
>
> Page-items collection used to process each item in a container, such as a document, page, or group, independent of type.
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
> SVGs **svgs**
>
> Collection of SVG files.
> String **name**
>
> Name assigned to the Sound.
> String **description**
>
> Description assigned to the Sound.
> Boolean **playOnPageTurn**
>
> When true, the movie starts automatically as a user views the page containing the movie poster in the PDF document.
> Boolean **doNotPrintPoster**
>
> When true, the sound poster is omitted from document printing.
> String **posterFile**
>
> Poster file.
> SoundPosterTypes **soundPosterType**
>
> Sound poster type.
> Boolean **embedInPDF**
>
> When true, the file is embedded in the PDF; when false, the PDF links to it. Note: movie-file embedding requires acrobat compatibility at acrobat 6 or higher.
> Number **horizontalScale**
>
> Horizontal scaling applied to the Sound.
> Number **verticalScale**
>
> Vertical scale factor for the Sound.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Sound bounds excluding stroke width, expressed as [y1, x1, y2, x2], the top-left and bottom-right coordinates of the bounding box.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Sound bounds including stroke width, expressed as [y1, x1, y2, x2], the top-left and bottom-right coordinates of the bounding box.
> Layer **itemLayer**
>
> Layer containing the Sound.
> String **filePath**
>
> File path, colon delimited on the Mac OS. Also accepts: File.
> Boolean **stopOnPageTurn**
>
> When true, sound playback stops when its page turns.
> Boolean **soundLoop**
>
> When true, sound repeats forever.
> Boolean **allowOverrides**
>
> When true, the master page item can be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied under the object-based layout rule.
> Swatch **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied to the Sound fill. Also accepts: String.
> Number **fillTint**
>
> Sound fill-color tint percentage. Use 0 to 100 for an explicit tint percent; use -1 to keep the inherited or overridden value.
> Boolean **overprintFill**
>
> When true, the Sound fill color overprints underlying objects; when false, the fill color knocks out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight for the Sound, in points.
> Number **miterLimit**
>
> Ratio limit of stroke width to miter length before a pointed miter join becomes a squared-off bevel join.
> EndCap **endCap**
>
> End shape for an open path.
> EndJoin **endJoin**
>
> Corner join applied to the Sound.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Also accepts: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Sound corner adjustment.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed line pattern. Define up to six point values as [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead applied at the start of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead applied at the end of the path.
> Swatch **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied to the Sound stroke. Also accepts: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. To specify a tint percent, use a number from 0 to 100; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point in page coordinates for a gradient applied to the Sound fill, in [x, y] format.
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the Sound fill gradient, length for linear mode or radius for radial mode.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the Sound fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point in page coordinates for a gradient applied to the Sound stroke, in [x, y] format.
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the Sound stroke gradient, length for linear mode or radius for radial mode.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the Sound stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> When true, the Sound stroke color overprints underlying objects; when false, the stroke color knocks out underlying colors.
> Swatch **gapColor**
>
> Gap swatch (color, gradient, tint, or mixed ink) used by dash, dot, or stripe stroke patterns. See stroke type for information.
> Number **gapTint**
>
> Tint percentage for the gap color. To specify a tint percent, use a number from 0 to 100; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> When true, the gap color overprints underlying colors; when false, the gap color knocks out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment applied to the Sound.
> Boolean **nonprinting**
>
> When true, the Sound does not print.
> Boolean **locked**
>
> When true, locking is enabled for the Sound.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the Sound.
> Number **rotationAngle**
>
> Rotation angle of the Sound. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the Sound. (Range: -360 to 360)
> Number **absoluteRotationAngle**
>
> Sound rotation relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Sound skew relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the Sound relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the Sound relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the Sound.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Indicates whether the Sound was flipped independently from its parent object and, if so, the direction used for that flip.
> Boolean **visible**
>
> When true, the Sound is visible.
> CornerOptions **topLeftCornerOption**
>
> Shape for the top left corner of rectangular shapes and every corner of non-rectangular shapes. Note: corner options can take a radius, unlike end join effects, whose rounded or beveled result depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Shape for the top right rectangle corner.
> CornerOptions **bottomLeftCornerOption**
>
> Shape for the bottom left rectangle corner.
> CornerOptions **bottomRightCornerOption**
>
> Shape for the bottom right rectangle corner.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for the top left corner of rectangular shapes and every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Corner-effect radius, in measurement units, for the top right rectangle corner.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for the bottom left rectangle corner.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Corner-effect radius, in measurement units, for the bottom right rectangle corner.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment applied to the Sound.
> Number **leftArrowHeadScale**
>
> Start-of-path arrowhead scale factor. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> End-of-path arrowhead scale factor. (Range: 1 to 1000)
> String **label**
>
> String-backed label property.
> Object **properties**
>
> Property bag for setting several properties together.

### Methods

> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves the object into the supplied library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the stored object. |
| Object | withProperties | Starting property values for the new Sound. (Optional) |

> **placeXML**( XMLElement **using** )
>
> Inserts XML content into the target object. Note: Existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose content will be placed. |

> **autoTag**()
>
> Applies default tags from XML preference to the object or parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> Sound **duplicate**()
>
> Duplicates the Sound.
> **bringToFront**( PageItem **reference** )
>
> Moves the Sound to the front of its layer, or ahead of a specific item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object the object is placed in front of; must have same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the Sound to the back of its layer, or behind a specific item that must have the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object the object is sent behind. (Optional) |

> **bringForward**()
>
> Raises the Sound by one level within its layer.
> **sendBackward**()
>
> Lowers the Sound by one level within its layer.
> **fit**( FitOptions **given** )
>
> Uses the specified fit option on frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | FitOptions value to use. |

> **remove**()
>
> Deletes this Sound.
> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates this Sound. Note: 'to' or 'by' is required; supplying both makes the to value take precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New Sound location, in (x, y) format. Accepts: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Relative movement amount for the Sound, in measurement units and (x, y) format. (Optional) |

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Accepts: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; passing this optional parameter replaces the target's existing transform components with new values. Without it, the given matrix is concatenated onto the target's existing transform, combining both effects. Accepts: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | If true, a ruler-based origin uses ruler units rather than points. The default value is false. This parameter matters only when the reference point is page-relative. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors to leave on the item. The default is \{1.0, 1.0}. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Overrides a master page item, creating a new object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Removes the override from a master page item that was previously overridden.
> **detach**()
>
> Separates the overridden item from its originating master.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Converts the Sound to another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the Sound. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Resulting polygon star inset percentage. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius of the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Removes rotation, scaling, flipping, fitting, and shearing transformations from the Sound.
> **select**( SelectionOptions **existingSelection** )
>
> Selects the object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status of the Sound relative to previously selected objects. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores a label entry under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result order is reversed. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Imports the file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Boolean | showingOptions | Whether to show the import options dialog. (Optional) |
| Object | withProperties | Starting property values for object(s) being placed. (Optional) |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Mirrors the Sound.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the Sound. |
| Mixed | around | Point used as the center for flipping the Sound. Accepts: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | When true, removes the Sound's existing attributes before applying the style. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, clears attributes and formatting on the Sound that are not defined in the object style. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets the page item's transformation values.

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
| Mixed | location | Requested location. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | If true, a ruler location uses ruler units rather than points. The default value is false. This parameter matters only when the reference point is page-relative. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box to resize. Accepts: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Transform origin. Allowed forms: bounding-box relative: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; coordinate-space relative: \{x,y} \{\{x,y}[, coordinate space]}; layout-window-ruler relative: \{\{x,y}, page index bounds kind}. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the given values affect the current dimensions. |
| Mixed | values | Width and height values. Allowed dimension forms: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and the coordinate space contributes _only_ their length unit; the 'current dimensions times' resize method ignores coordinate space. Accepts: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | If false and several page items are targeted, individual items are moved to reach the new dimensions instead of being resized. (Optional) |
| Boolean | consideringRulerUnits | If true, a ruler location uses ruler units rather than points. The default value is false. This parameter matters only when the reference point is page-relative. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box to resize. Accepts: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | New bounding box's opposing corners in the supplied coordinate space. |

> String **transformAgain**()
>
> Applies to the Sound the most recent transformation used on any object. Covered operations are move, rotate, shear, scale, and flip.
> String **transformSequenceAgain**()
>
> Applies to the Sound the most recent transform-operation sequence used on one object, or used simultaneously on a group of objects. Covered operations are move, rotate, shear, scale, and flip.
> String **transformAgainIndividually**()
>
> Applies to the Sound the most recent transformation used on any Sound. Covered operations are move, rotate, shear, scale, and flip.
> String **transformSequenceAgainIndividually**()
>
> Applies to the Sound the most recent transformation sequence used on one object, or used simultaneously on a group of objects. Covered operations are move, rotate, shear, scale, and flip.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch for the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Sound. The parameters above can also be supplied as properties. (Optional) |
