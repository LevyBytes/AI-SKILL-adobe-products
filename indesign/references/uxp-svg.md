# Svg (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

A placed SVG file.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before placement of a SVG; it bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after placement of a SVG; it bubbles and cannot be canceled.

## Instance

> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default text-wrap formatting preferences used when text flows around objects.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to this SVG.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden; false means either it remains unoverridden on its master spread or it did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object whose source was a master page item. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> Link **itemLink**
>
> Linked source file.
> _Read Only_
>
> String **imageTypeName**
>
> Image type name.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Animation configuration for the page item.
> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Transparency configuration.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Stroke-specific transparency configuration.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Fill transparency configuration used by the SVG.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency configuration for the SVG content.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Linked Page Item options.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained inside the SVG.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained inside the SVG.
> _Read Only_
>
> Page **parentPage**
>
> Page where this page item is displayed.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Timing configuration for the object.
> _Read Only_
>
> Article **allArticles**
>
> Articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique SVG ID.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the SVG (a TextBox, SignatureField, ComboBox, ListBox, PageItem, HtmlItem, FormField, RadioButton, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, State, PlaceGun, XMLElement or Snippet).
> _Read Only_
>
> Number **index**
>
> Position of the SVG inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> _Read Only_
>
> SVGs **svgs**
>
> Collection containing SVG files.
> _Read Only_
>
> Graphics **graphics**
>
> Collection of imported graphics across graphic file formats, including vector, metafile, or bitmap.
> _Read Only_
>
> PageItems **pageItems**
>
> Page item collection used to process every page item in a container, such as a document, page, or group, without filtering by type.
> Boolean **nonprinting**
>
> True prevents the SVG from printing.
> UseSVGAsEnum **useSVGAs**
>
> Use SVG As
> Boolean **allowOverrides**
>
> True permits overriding of the master page item.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> SVG bounds without stroke width, using [y1, x1, y2, x2] for the top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> SVG bounds including stroke width, using [y1, x1, y2, x2] for the top-left and bottom-right bounding-box coordinates.
> DisplaySettingOptions **localDisplaySetting**
>
> Display-performance setting for this SVG.
> Number **rotationAngle**
>
> SVG rotation angle. (Range: -360 to 360)
> Number **shearAngle**
>
> Skew angle applied to the SVG. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scale applied to the SVG.
> Number **verticalScale**
>
> Vertical scale applied to the SVG.
> Number **absoluteRotationAngle**
>
> SVG rotation angle measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> SVG skew angle measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> SVG horizontal scale measured relative to its containing object.
> Number **absoluteVerticalScale**
>
> SVG vertical scale measured relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style assigned to the SVG.
> Flip **flip**
>
> Direction used when flipping the printed image.
> Flip **absoluteFlip**
>
> Whether the SVG was flipped separately from its parent object, and, when it was, the flip direction.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints used by this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints used by this item under the object-based layout rule.
> Swatch **fillColor**
>
> Fill swatch applied to the SVG; the swatch may be a color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the SVG's fill color. Use 0 to 100 for a tint percentage, or -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the SVG's fill color overprint objects underneath it; false makes that fill knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, applied to the SVG.
> Number **miterLimit**
>
> Maximum ratio between stroke width and miter length before a pointed miter join is converted to a squared-off bevel join.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join used by the SVG.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the SVG.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements defining a custom dashed-line pattern. Provide up to six point values in [dash1, gap1, dash2, gap2, dash3, gap3] format.
> ArrowHead **leftLineEnd**
>
> Arrowhead assigned to the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead assigned to the path end.
> Swatch **strokeColor**
>
> Stroke swatch applied to the SVG; the swatch may be a color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for a tint percentage, or -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Fill-gradient starting point in page coordinates, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Fill-gradient length for a linear gradient or radius for a radial gradient.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the SVG fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Stroke-gradient starting point in page coordinates, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Stroke-gradient length for a linear gradient or radius for a radial gradient.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the SVG stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the SVG's stroke color overprint objects underneath it; false makes that stroke knock out the underlying colors.
> Swatch **gapColor**
>
> Gap swatch for a dashed, dotted, or striped stroke; the swatch may be a color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint percentage. Use 0 to 100 for a tint percentage, or -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes the gap color knock out colors below it.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the SVG.
> Layer **itemLayer**
>
> Layer containing the SVG.
> Boolean **locked**
>
> True means the SVG is locked.
> Boolean **visible**
>
> True means the SVG is visible.
> String **name**
>
> SVG name.
> CornerOptions **topLeftCornerOption**
>
> For rectangular shapes, sets the top-left corner shape; for non-rectangular shapes, applies that corner shape to every corner. Note: a corner option can carry its own radius, while a rounded or beveled end join gets its appearance from the stroke weight.
> CornerOptions **topRightCornerOption**
>
> Sets the corner form used at a rectangular shape's top-right corner.
> CornerOptions **bottomLeftCornerOption**
>
> Sets the corner form used at a rectangular shape's bottom-left corner.
> CornerOptions **bottomRightCornerOption**
>
> Sets the corner form used at a rectangular shape's bottom-right corner.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the top-left corner effect on rectangular shapes, or for every corner effect on non-rectangular shapes.
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
> Arrowhead alignment used by the SVG.
> Number **leftArrowHeadScale**
>
> Scale value applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale value applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Property that accepts any string value.
> Object **properties**
>
> Property used to set several properties in one operation.

### Methods

> **placeXML**( XMLElement **using** )
>
> Places XML content in the specified object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose contents will be placed. |

> **autoTag**()
>
> Applies default tags from XML preference to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element without removing current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> String **exportForWeb**( File **to** )
>
> Exports this SVG for web use.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Full pathname for the exported file. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True uses reverse ordering for the matched results. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders the returned matches from last to first. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places the specified file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File that will be placed. |
| Boolean | showingOptions | Whether the import options dialog is shown. (Optional) |
| Object | withProperties | Initial property values for the placed object or objects. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Turns a master page item into an independent object on the destination document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Clears the override from a master page item that had been overridden.
> **detach**()
>
> Separates an overridden master page item from its master page.
> **remove**()
>
> Deletes this SVG.
> **fit**( FitOptions **given** )
>
> Applies the chosen fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Flips this SVG.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the SVG. |
| Mixed | around | Point used as the flip center. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a duplicate SVG at a specified location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New SVG location, expressed as [x, y] coordinates. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount from the original SVG's position to the new SVG. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates this SVG. Note: supply either 'to' or 'by'; if both are provided, the to value takes precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New SVG location, in (x, y) format. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset that moves the SVG relative to its current position, in (x, y) format. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the requested object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | True removes the SVG's current attributes before applying the style. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | True removes SVG attributes and formatting that the object style does not define. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object-style overrides.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; supplying this optional value replaces the target's current transform components with new values. If omitted, the supplied matrix is concatenated with the target's current transform so both effects are combined. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin with ruler units instead of points. The default value is false. This only matters when the reference point is relative to a page. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Gets coordinates for the supplied location in the requested coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units instead of points. The default value is false. This only matters when the reference point is relative to a page. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content where possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors that should remain on the item. The default is \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box being resized. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin used for the transform. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the supplied values change the current dimensions. |
| Mixed | values | Width and height values. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space determines _only_ the length unit for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | False, with multiple page items targeted, reaches the new dimensions by moving individual items instead of resizing them. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units instead of points. The default value is false. This only matters when the reference point is relative to a page. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box to resize. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the supplied coordinate space. |

> String **transformAgain**()
>
> Repeats on the SVG the most recent transformation applied to any object. The repeated change may be a move, rotation, shear, scale, or flip.
> String **transformSequenceAgain**()
>
> Repeats on the SVG the last transform sequence applied to one object or applied simultaneously to a group. Possible operations are move, rotate, shear, scale, and flip.
> String **transformAgainIndividually**()
>
> Repeats on the SVG the most recent transformation applied to any SVG. The reused change may be a move, rotation, shear, scale, or flip.
> String **transformSequenceAgainIndividually**()
>
> Repeats on the SVG the last transformation sequence applied to one object or applied simultaneously to a group. Possible operations are move, rotate, shear, scale, and flip.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates on the page item a Plain Text QR Code.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain text encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used on the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property initialization for the new SVG; the preceding parameters may also be supplied as properties. |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a Hyperlink QR Code for either the page item or the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch used on the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property initialization for the new SVG; the preceding parameters may also be supplied as properties. |
