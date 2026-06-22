# Imported Page (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Imported InDesign page object.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Fires before an ImportedPage is placed. The event bubbles, and callers can cancel it.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Fires after an ImportedPage is placed. The event bubbles, and cancellation is not supported.

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
> Transparency configuration for the stroke.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Transparency configuration for the fill applied to the ImportedPage.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency configuration for ImportedPage content.
> _Read Only_
>
> Number **pageNumber**
>
> Selects which page of the InDesign document is imported. This is read only for page items.
> _Read Only_
>
> ImportedPageCropOptions **importedPageCrop**
>
> Sets cropping for the imported InDesign page. This is read only for page items.
> _Read Only_
>
> GraphicLayerOption **graphicLayerOptions**
>
> Graphic layer option configuration.
> _Read Only_
>
> ClippingPathSettings **clippingPath**
>
> Clipping path configuration.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties that set default formatting for text wrapped around objects.
> _Read Only_
>
> PDFAttribute **pdfAttributes**
>
> PDF attribute configuration.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the ImportedPage.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden. False means it either still matches its master spread source or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object originally associated with a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
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
> Options for a linked page item.
> _Read Only_
>
> PageItem **allPageItems**
>
> Lists every page item contained by the ImportedPage.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic contained by the ImportedPage.
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
> All articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the ImportedPage.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Containing object for the ImportedPage; one of PlaceGun, SplineItem, Polygon, GraphicLine, Rectangle or Oval.
> _Read Only_
>
> Number **index**
>
> Position of the ImportedPage inside its containing object.
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
> Collection of imported graphics in any graphic file format, including vector, metafile, or bitmap.
> _Read Only_
>
> PageItems **pageItems**
>
> Page item collection for iterating everything in a container, such as a document, page, or group, without regard to item type.
> Boolean **nonprinting**
>
> When true, the ImportedPage is excluded from printing.
> Boolean **allowOverrides**
>
> When true, the master page item may be overridden.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds for the ImportedPage without stroke width, in the format [y1, x1, y2, x2], giving top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds for the ImportedPage with stroke width included, in the format [y1, x1, y2, x2], giving top-left and bottom-right bounding-box coordinates.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the ImportedPage.
> Number **rotationAngle**
>
> Rotation angle for the ImportedPage. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the ImportedPage. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the ImportedPage.
> Number **verticalScale**
>
> Vertical scaling applied to the ImportedPage.
> Number **absoluteRotationAngle**
>
> ImportedPage rotation measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> ImportedPage skew measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the ImportedPage relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the ImportedPage relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the ImportedPage.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Indicates whether the ImportedPage was flipped independently of its parent object and, when it was, which direction was used.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied when the object-based layout rule is used.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied when the object-based layout rule is used.
> Swatch **fillColor**
>
> Swatch, color, gradient, tint, or mixed ink applied to the ImportedPage fill. Can also accept: String.
> Number **fillTint**
>
> Fill-color tint percentage for the ImportedPage. Use a number in the range of 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> When true, the ImportedPage fill color overprints underlying objects. When false, the fill color knocks out the colors below.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, applied to the ImportedPage.
> Number **miterLimit**
>
> Ratio limit of stroke width to miter length before a miter, or pointed, join changes to a bevel, or squared-off, join.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join applied to the ImportedPage.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Adjustment used at the ImportedPage corners.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed-line pattern. Provide as many as six point values in the format [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead applied at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead applied at the path end.
> Swatch **strokeColor**
>
> Swatch, color, gradient, tint, or mixed ink applied to the ImportedPage stroke. Can also accept: String.
> Number **strokeTint**
>
> Stroke-color tint percentage for the object. Use a number in the range of 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient applied to the ImportedPage fill, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> ImportedPage fill gradient extent: length for a linear gradient or radius for a radial gradient.
> Number **gradientFillAngle**
>
> Angle of a linear gradient applied to the ImportedPage fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient applied to the ImportedPage stroke, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> ImportedPage stroke gradient extent: length for a linear gradient or radius for a radial gradient.
> Number **gradientStrokeAngle**
>
> Angle of a linear gradient applied to the ImportedPage stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> When true, the ImportedPage stroke color overprints underlying objects. When false, the stroke color knocks out the colors below.
> Swatch **gapColor**
>
> Swatch, color, gradient, tint, or mixed ink used for gaps in dashed, dotted, or striped strokes. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint percentage. Use a number in the range of 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> When true, the gap color overprints underlying colors. When false, the gap color knocks out the colors below.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment applied to the ImportedPage.
> Layer **itemLayer**
>
> Layer containing the ImportedPage.
> Boolean **locked**
>
> When true, the ImportedPage is locked.
> Boolean **visible**
>
> When true, the ImportedPage is visible.
> String **name**
>
> Name of the ImportedPage.
> CornerOptions **topLeftCornerOption**
>
> Shape used for the top left corner of rectangular shapes and for every corner of non-rectangular shapes. Note: unlike end join behavior, a corner option can set its own radius; rounded or beveled end-join results depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Shape used for the top right corner of rectangular shapes.
> CornerOptions **bottomLeftCornerOption**
>
> Shape used for the bottom left corner of rectangular shapes.
> CornerOptions **bottomRightCornerOption**
>
> Shape used on rectangular shapes' bottom-right corner.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the top-left corner effect on rectangular shapes and all-corner effect on non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the top-right corner effect on rectangular shapes.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the bottom-left corner effect on rectangular shapes.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the bottom-right corner effect on rectangular shapes.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment applied to the ImportedPage.
> Number **leftArrowHeadScale**
>
> Scaling applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scaling applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> String-valued property that can be assigned any string.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **placeXML**( XMLElement **using** )
>
> Places XML content into the specified object. Note: any existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element containing the content to place. |

> **autoTag**()
>
> Tags the object, or its parent story, with default tags defined in XML preference.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> String **exportForWeb**( File **to** )
>
> Exports the ImportedPage for web use.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Full path name for the exported file. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns output in reverse sequence. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns output in reverse sequence. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Adds the file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Boolean | showingOptions | Whether the import options dialog should be shown. (Optional) |
| Object | withProperties | Starting property values for the object(s) being placed. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Overrides a master page item and puts the resulting new object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item being overridden. |

> **removeOverride**()
>
> Removes override state from a master page item that was already overridden.
> **detach**()
>
> Breaks the connection between an overridden master page item and its master page.
> **remove**()
>
> Removes the ImportedPage.
> **fit**( FitOptions **given** )
>
> Applies the specified fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Selected fit option. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Mirrors the ImportedPage.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used for flipping the ImportedPage. |
| Mixed | around | Center point for the ImportedPage flip operation. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Duplicates the ImportedPage at the specified location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Target for placing the duplicate ImportedPage, using [x, y] coordinates. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset between the duplicate ImportedPage and the original position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the ImportedPage. Note: either the 'to' or 'by' parameter is required; if both are supplied, only the to value is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Target for the ImportedPage move, using (x, y) coordinates. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset that moves the ImportedPage from its current position, in the format (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | When true, clears the ImportedPage's current attributes before applying the style. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, clears attributes and formatting on the ImportedPage that the object style does not define. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary transform origin. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transformation. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to use; when supplied, this optional parameter substitutes new values for the target's current transform components. If omitted, the given matrix concatenates with the target's current transform so the effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler based origin with ruler units rather than points. Defaults to false. It only matters for a page-relative reference point. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Resolves the given location to coordinates in the requested coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units rather than points. Defaults to false. It only matters for a page-relative reference point. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors to leave on the item. The default is \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Resize target bounding box. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin used for the transform. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the supplied values affect the current dimensions. |
| Mixed | values | Width and height inputs. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, while coordinate space contributes _only_ the length unit for x and y; the 'current dimensions times' resize method ignores coordinate space). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and multiple page items are targeted, the new dimensions are reached only by moving individual items instead of resizing them. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units rather than points. Defaults to false. It only matters for a page-relative reference point. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Resize target bounding box. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the replacement bounding box, expressed in the given coordinate space. |

> String **transformAgain**()
>
> Repeats on the ImportedPage the most recent transformation used by any object; possible operations are move, rotate, shear, scale, and flip.
> String **transformSequenceAgain**()
>
> Repeats on the ImportedPage the most recent transform-operation sequence used by one object, or a sequence applied simultaneously to a group; possible operations are move, rotate, shear, scale, and flip.
> String **transformAgainIndividually**()
>
> Repeats on this ImportedPage the most recent transformation used by any ImportedPage; possible operations are move, rotate, shear, scale, and flip.
> String **transformSequenceAgainIndividually**()
>
> Repeats on this ImportedPage the most recent transformation sequence used by one object, or a sequence applied simultaneously to a group; possible operations are move, rotate, shear, scale, and flip.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Plain Text to this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text payload for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Color swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | New ImportedPage setup values; property arguments may include the parameters above. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Hyperlink for this target or a document context.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Color swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | New ImportedPage setup values; property arguments may include the parameters above. (Optional) |
