# Graphic (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

An imported graphic using any graphic file format, including vector, metafile, and bitmap formats.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a Graphic is placed. This event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after a Graphic is placed. This event bubbles and cannot be canceled.

## Instance

> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the Graphic.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden; false means it either remains unoverridden on a master spread or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object that came from a master page. Can return PageItem, Guide, Graphic, Movie, or Sound.
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
> Transparency configuration for the Graphic fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency configuration for Graphic content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties used as the default formatting for wrapping text around objects.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for Linked Page Item.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained by the Graphic.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained by the Graphic.
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
> Unique ID assigned to the Graphic.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the Graphic, which may be a Snippet, XMLElement, Sound, PlaceGun, Movie, TextBox, SignatureField, ComboBox, ListBox, CheckBox, RadioButton, Polygon, GraphicLine, Rectangle, Oval, SplineItem, State, Button, MultiStateObject, HtmlItem, FormField, MediaItem, EPSText, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Graphic, Group, EndnoteTextFrame, TextFrame, or PageItem.
> _Read Only_
>
> Number **index**
>
> Graphic index within its containing object.
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
> Imported graphics held by this Graphic, across vector, metafile, or bitmap formats.
> _Read Only_
>
> PageItems **pageItems**
>
> Page items collection for processing every page item in a container, such as a document, page, or group, without filtering by type.
> Boolean **allowOverrides**
>
> True allows overriding the master page item.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Graphic bounds without stroke width, in [y1, x1, y2, x2] format for top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Graphic bounds including stroke width, in [y1, x1, y2, x2] format for top-left and bottom-right bounding-box coordinates.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance settings for the Graphic.
> Number **rotationAngle**
>
> Graphic rotation angle. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle used on the Graphic. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scale used on the Graphic.
> Number **verticalScale**
>
> Vertical scale used on the Graphic.
> Number **absoluteRotationAngle**
>
> Graphic rotation angle measured against its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Graphic skewing angle measured against its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale for the Graphic relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale for the Graphic relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style currently applied to the Graphic.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Shows whether the Graphic was flipped independently from its parent object and, if so, the direction of that flip.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints for this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints for this item under the object-based layout rule.
> Swatch **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the Graphic fill. Also accepts String.
> Number **fillTint**
>
> Tint percentage for the Graphic fill color. To specify tint percent, use a number from 0 to 100; use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the Graphic fill color overprint underlying objects; false makes the fill color knock out colors beneath it.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Weight in points for the Graphic stroke.
> Number **miterLimit**
>
> Maximum stroke-width-to-miter-length ratio before a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> End shape for an open path.
> EndJoin **endJoin**
>
> Corner join used by the Graphic.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Also accepts String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the Graphic.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements defining a custom dashed-line pattern. Define up to six point values as [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the Graphic stroke. Also accepts String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. To specify tint percent, use a number from 0 to 100; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient assigned to the Graphic fill, using [x, y] format.
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Linear-gradient length or radial-gradient radius assigned to the Graphic fill.
> Number **gradientFillAngle**
>
> Linear gradient angle assigned to the Graphic fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient assigned to the Graphic stroke, using [x, y] format.
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Linear-gradient length or radial-gradient radius assigned to the Graphic stroke.
> Number **gradientStrokeAngle**
>
> Linear gradient angle assigned to the Graphic stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the Graphic stroke color overprint underlying objects; false makes the stroke color knock out colors beneath it.
> Swatch **gapColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to stroke gaps for dashed, dotted, or striped strokes. For information, see stroke type.
> Number **gapTint**
>
> Tint percentage for the gap color. To specify tint percent, use a number from 0 to 100; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes the gap color knock out colors beneath it.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the Graphic.
> Boolean **nonprinting**
>
> True prevents the Graphic from printing.
> Layer **itemLayer**
>
> Layer containing the Graphic.
> Boolean **locked**
>
> True means the Graphic is locked.
> Boolean **visible**
>
> True means the Graphic is visible.
> String **name**
>
> Graphic name.
> CornerOptions **topLeftCornerOption**
>
> Top-left corner shape for rectangular shapes, also applied to every corner on non-rectangular shapes. Note: a corner option can set a radius, while an end join's rounded or beveled result depends on stroke weight.
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
> Corner-effect radius, in measurement units, for the rectangular top-left corner and every non-rectangular corner.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Corner-effect radius, in measurement units, for the rectangular top-right corner.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for the rectangular bottom-left corner.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Corner-effect radius, in measurement units, for the rectangular bottom-right corner.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the Graphic.
> Number **leftArrowHeadScale**
>
> Scale applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Property value that may be any string.
> Object **properties**
>
> Property used to set several properties in one operation.

### Methods

> **placeXML**( XMLElement **using** )
>
> Places XML content into the specified object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose content should be placed. |

> **autoTag**()
>
> Applies XML preference default tags to the object or to the parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while retaining current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> String **exportForWeb**( File **to** )
>
> Exports the Graphic for web use.

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
| Boolean | reverseOrder | True returns matches from the end of the result order toward the beginning. (Optional parameter) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matches from the end of the result order toward the beginning. (Optional parameter) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Imports the specified file into the Graphic.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Boolean | showingOptions | Whether the import options dialog is displayed. (Optional) |
| Object | withProperties | Property initializer for object(s) created by the place call. (Optional parameter) |

> Mixed **override**( Page **destinationPage** )
>
> Turns a master page item into an override, creating the result as a new object on the destination document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Destination document page that holds the master page item to override. |

> **removeOverride**()
>
> Removes the override from a master page item that was previously overridden.
> **detach**()
>
> Detaches an overridden master page item from its master page.
> **remove**()
>
> Deletes this Graphic.
> **fit**( FitOptions **given** )
>
> Uses the specified fit option on frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip operation on the Graphic.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the Graphic. |
| Mixed | around | Point used as the flip center. Accepts an AnchorPoint enumerator or an Array of 2 Units. (Optional parameter) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a duplicate Graphic at a specified location or by a specified offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Location for the new Graphic, supplied as [x, y] coordinates. Accepts Spread, Page, Layer, or an Array of 2 Units. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset for the duplicate from the original Graphic. (Optional parameter) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates this Graphic. Note: one of 'to' or 'by' is required; when both are supplied, the to value takes precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New location for the Graphic, using (x, y) format. Accepts Spread, Page, Layer, or an Array of 2 Units. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset for moving the Graphic relative to its current position, in (x, y) format. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the object style supplied to the call.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | ObjectStyle value to apply. |
| Boolean | clearingOverrides | When true, existing Graphic attributes are cleared before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, removes Graphic attributes and formatting that the object style does not define. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object-style overrides.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Mixed | from | Temporary transformation origin. Accepted forms include Long Integers, BoundingBoxLimits enumerators, AnchorPoint enumerators, CoordinateSpaces enumerators, Array of Arrays of 2 Reals, an AnchorPoint enumerator, or an Array of 2 Reals. |
| Mixed | withMatrix | Matrix used for the transform. Accepts an Array of 6 Reals or a TransformationMatrix. |
| Mixed | replacingCurrent | Transform components considered for replacement; when this optional value is supplied, the target's current components are replaced by the new values. If omitted, the supplied matrix is appended to the target's current transform so both effects combine. Accepts a MatrixContent enumerator, an Array of MatrixContent enumerators, or a Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is read in ruler units instead of points. Default value: false. This matters only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the lookup. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Returns coordinates for the requested location in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepted forms include Long Integers, BoundingBoxLimits enumerators, AnchorPoint enumerators, CoordinateSpaces enumerators, Array of Arrays of 2 Reals, an AnchorPoint enumerator, or an Array of 2 Reals. |
| CoordinateSpaces | in | Coordinate space used for resolution. |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. Default value: false. This matters only when the reference point is page-relative. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies item scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors that remain on the item. The default is \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Defines which bounding box is resized. Accepted forms include a CoordinateSpaces enumerator, a BoundingBoxLimits enumerator, or an ordered array with coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Sets the transform origin. Valid origin syntax includes bounding-box-relative forms such as anchor, \{anchor \| \{x,y}, bounds kind [, coordinate space]}; coordinate-space-relative forms such as \{x,y} or \{\{x,y}[, coordinate space]}; and layout-window-ruler forms such as \{\{x,y}, page index \| bounds kind}. Accepted values include an array of 2 Reals, an AnchorPoint enumerator, or arrays containing 2-Reals arrays, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators, or Long Integers. |
| ResizeMethods | by | Specifies the way the supplied values change the current dimensions. |
| Mixed | values | Supplies width and height data. Legal dimension syntaxes are \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, and \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space contributes only the length unit for x and y. For the 'current dimensions times' resize method, coordinate space is disregarded. Accepted values include arrays of Reals, ResizeConstraints enumerators, or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and several page items are selected, individual items are moved to reach the new overall dimensions instead of being resized. (Optional) |
| Boolean | consideringRulerUnits | When true, ruler-relative locations use ruler units instead of points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Repositions the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Identifies the bounding box that will be reframed. Accepted forms are a CoordinateSpaces enumerator or an ordered array with coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Provides the new bounding box's opposite corners in the chosen coordinate space. |

> String **transformAgain**()
>
> Applies to the Graphic the most recent transformation used on any object. Covered operations are move, rotate, shear, scale, and flip transformations.
> String **transformSequenceAgain**()
>
> Reapplies to the Graphic the latest sequence of transform operations that was used on one object or simultaneously on a group. Covered operations are move, rotate, shear, scale, and flip transformations.
> String **transformAgainIndividually**()
>
> Applies to the Graphic the most recent transformation used on any Graphic. Covered operations are move, rotate, shear, scale, and flip transformations.
> String **transformSequenceAgainIndividually**()
>
> Repeats on the Graphic the latest transformation sequence used on a single object or at the same moment on grouped objects. Covered operations are move, rotate, shear, scale, and flip transformations.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> On the page item, builds a Plain Text QR Code.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Accepted values are Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Graphic; preceding parameters may be supplied as property entries. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> On the page item or document, builds a Hyperlink QR Code.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used for the generated QR Code Graphic. Accepted values are Swatch or String. (Optional) |
| String | withProperties | Starting property values for the new Graphic; preceding parameters may be supplied as property entries. (Optional) |
