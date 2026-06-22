# Pdf (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

A PDF file placed in the document.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a PDF is placed. This event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after a PDF is placed. This event bubbles and cannot be canceled.

## Instance

> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Settings for transparency.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Stroke transparency settings.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Transparency settings for the PDF fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency settings for PDF content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties that define default formatting for text wrapped around objects.
> _Read Only_
>
> PDFAttribute **pdfAttributes**
>
> Settings for PDF attributes.
> _Read Only_
>
> ClippingPathSettings **clippingPath**
>
> Settings for clipping paths.
> _Read Only_
>
> GraphicLayerOption **graphicLayerOptions**
>
> Settings for graphic layer options.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element associated with the PDF.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and was overridden. False means either the master-spread object remains unoverridden or the object did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object originally from a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> Link **itemLink**
>
> Link source file.
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
> Options for Linked Page Item.
> _Read Only_
>
> PageItem **allPageItems**
>
> Lists every page item contained by the PDF.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic contained by the PDF.
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
> Unique ID for the PDF.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Container for this PDF. Can be: Snippet, XMLElement, PlaceGun, TextBox, SignatureField, ComboBox, ListBox, SplineItem, Polygon, GraphicLine, Rectangle, Oval or State.
> _Read Only_
>
> Number **index**
>
> PDF index within its containing object.
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
> Imported-graphics collection covering graphic file formats such as vector, metafile, or bitmap.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection used to process every page item in a container such as a document, page, or group, regardless of item type.
> Boolean **nonprinting**
>
> When true, the PDF does not print.
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
> When true, this master page item is overridable.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds for the PDF without stroke width, in the format [y1, x1, y2, x2], where the values identify the upper-left and lower-right bounding-box corners.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds for the PDF with stroke width included, in the format [y1, x1, y2, x2], where the values identify the upper-left and lower-right bounding-box corners.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the PDF.
> Number **rotationAngle**
>
> Rotation angle for the PDF. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the PDF. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the PDF.
> Number **verticalScale**
>
> Vertical scaling applied to the PDF.
> Number **absoluteRotationAngle**
>
> Rotation angle for the PDF relative to its container. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Skewing angle for the PDF relative to its container. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale for the PDF relative to its container.
> Number **absoluteVerticalScale**
>
> Vertical scale for the PDF relative to its container.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the PDF.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Shows whether the PDF was flipped separately from its parent object and, if so, the direction used.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints that apply to this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints that apply to this item under the object-based layout rule.
> Swatch **fillColor**
>
> Fill swatch (color, gradient, tint, or mixed ink) used by the PDF. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the PDF fill color. (Use 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.)
> Boolean **overprintFill**
>
> True makes the PDF fill color overprint underlying objects; false makes it knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Weight in points for the PDF stroke.
> Number **miterLimit**
>
> Maximum stroke-width to miter-length ratio before a miter (pointed) join changes to a bevel (squared-off) join.
> EndCap **endCap**
>
> End shape used by an open path.
> EndJoin **endJoin**
>
> Corner join applied to the PDF.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> PDF corner adjustment setting.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed-line pattern. The pattern can contain up to six point values in the format [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead applied to the beginning of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead applied to the end of the path.
> Swatch **strokeColor**
>
> Stroke swatch (color, gradient, tint, or mixed ink) used by the PDF. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for object's stroke color. (Use 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.)
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Gradient start point for the PDF fill, in page coordinates and in the format [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the PDF fill, this is the length of a linear gradient or the radius of a radial gradient.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the PDF fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Gradient start point for the PDF stroke, in page coordinates and in the format [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the PDF stroke, this is the length of a linear gradient or the radius of a radial gradient.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the PDF stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the PDF stroke color overprint underlying objects; false makes it knock out the underlying colors.
> Swatch **gapColor**
>
> Swatch for the gaps in a dashed, dotted, or striped stroke, using color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint percentage. (Use 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.)
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes it knock out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment applied to the PDF.
> Layer **itemLayer**
>
> Layer containing the PDF.
> Boolean **locked**
>
> When true, the PDF is locked.
> Boolean **visible**
>
> When true, the PDF is visible.
> String **name**
>
> PDF name.
> CornerOptions **topLeftCornerOption**
>
> Corner shape for the upper-left rectangular corner and for every corner on non-rectangular shapes. Note: a corner option differs from an end join because a corner option can set a radius, while a rounded or beveled end join depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Corner shape for the upper-right rectangular corner.
> CornerOptions **bottomLeftCornerOption**
>
> Corner shape for the lower-left rectangular corner.
> CornerOptions **bottomRightCornerOption**
>
> Corner shape for the lower-right rectangular corner.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit effect radius for the upper-left rectangular corner and every corner on non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit effect radius for the upper-right rectangular corner.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit effect radius for the lower-left rectangular corner.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit effect radius for the lower-right rectangular corner.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment applied to the PDF.
> Number **leftArrowHeadScale**
>
> Scale for the arrowhead at the beginning of the path. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale for the path-end arrowhead. (Range: 1 to 1000)
> String **label**
>
> Property value that may be any string.
> Object **properties**
>
> Object used to set several properties in one operation.

### Methods

> Asset **store**( Library **using**, Object **withProperties** )
>
> Stores this object in the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library where the object is stored. |
| Object | withProperties | Starting property values for the new PDF. (Optional) |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, orders the returned result set from last to first. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, orders the returned result set from last to first. (Optional) |

> **placeXML**( XMLElement **using** )
>
> Inserts XML content into the specified object. Note: Existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose content should be placed. |

> **autoTag**()
>
> Tags the object or its parent story with default tags defined in XML preference.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while retaining current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> String **exportForWeb**( File **to** )
>
> Exports the PDF for web use.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Complete path for the export output. |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Imports the referenced file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Boolean | showingOptions | Whether the import options dialog is shown. (Optional) |
| Object | withProperties | Initial property values for object(s) created by placement. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Creates a new object on the document page by overriding a master page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Removes the override from an already overridden master page item.
> **detach**()
>
> Separates an overridden master page item from its master page.
> **remove**()
>
> Deletes the PDF.
> **fit**( FitOptions **given** )
>
> Fits frame content using the specified option.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Reverses the PDF around the requested axis.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the PDF. |
| Mixed | around | Point used as the flip center. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Duplicates the PDF at the specified location or by the specified offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Location for the new PDF, specified as coordinates in the format [x, y]. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount for the new PDF relative to the original PDF's position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Changes the PDF position. Note: Either the 'to' or 'by' parameter is required; when both are supplied, only the to value is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New PDF location, in the format (x, y). Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset from the PDF's existing position; use (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | When true, clears existing PDF attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, clears PDF attributes and formatting that are not defined by the object style. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Mixed | from | Temporary origin for the transformation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to evaluate; when this optional parameter is supplied, the target's current transform components are replaced by new values. Without it, the given matrix is concatenated with the target's current transform and both effects are combined. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin uses ruler units instead of points. Defaults to false. This matters only for page-relative reference points. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets transformation values for the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Gets coordinates for the requested location in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Location to resolve. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Boolean | consideringRulerUnits | When true, a ruler location uses ruler units instead of points. Defaults to false. This matters only for page-relative reference points. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors that remain on the item. The default is \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Transformation origin. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the supplied values affect the current dimensions. |
| Mixed | values | Width and height values. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space determines _only_ the unit of length for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | If false and more than one page item is targeted, the new dimensions are reached by moving individual items rather than resizing them. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location uses ruler units instead of points. Defaults to false. This matters only for page-relative reference points. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the replacement bounding box in the supplied coordinate space. |

> String **transformAgain**()
>
> Repeats on the PDF the latest transform used on any object; the operation may involve move, rotate, shear, scale, or flip actions.
> String **transformSequenceAgain**()
>
> Repeats on the PDF the latest transform sequence used on one object or on a group at the same time; operations may involve move, rotate, shear, scale, or flip actions.
> String **transformAgainIndividually**()
>
> Repeats on this PDF the latest transform applied to any PDF; the operation may involve move, rotate, shear, scale, or flip actions.
> String **transformSequenceAgainIndividually**()
>
> Repeats on the PDF the latest transform sequence applied to one object or to a group at the same time; operations may involve move, rotate, shear, scale, or flip actions.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds onto this page item a Plain Text QR Code.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | QR code Plain Text (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new PDF. You may also pass the parameters above through this properties object. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to either a document or page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | QR code Hyperlink URL (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new PDF. You may also pass the parameters above through this properties object. (Optional) |
