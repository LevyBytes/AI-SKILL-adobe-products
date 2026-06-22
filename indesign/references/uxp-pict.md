# Pict (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

A PICT graphic that has been placed.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a PICT is placed. The event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after a PICT is placed. The event bubbles and cannot be canceled.

## Instance

> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Holds transparency configuration.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Holds the stroke transparency configuration.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Holds the transparency configuration for the PICT fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Holds transparency configuration for PICT content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Provides default text-wrap formatting properties for wrapping text around objects.
> _Read Only_
>
> ClippingPathSettings **clippingPath**
>
> Provides clipping path configuration.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> References the XML element linked to the PICT.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden. False means it either remains an unoverridden master-spread object or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Returns an overridden object that began on a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> Link **itemLink**
>
> Indicates the linked source file.
> _Read Only_
>
> String **imageTypeName**
>
> Names the image type.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Provides animation configuration for the page item.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Provides Linked Page Item options.
> _Read Only_
>
> PageItem **allPageItems**
>
> Enumerates page items inside the PICT.
> _Read Only_
>
> Graphic **allGraphics**
>
> Enumerates graphics inside the PICT.
> _Read Only_
>
> Page **parentPage**
>
> Identifies the page where this page item is placed.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Provides timing configuration for the object.
> _Read Only_
>
> Article **allArticles**
>
> Lists each article that includes this page item.
> _Read Only_
>
> Number **id**
>
> Gives the PICT unique ID.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Gives the PICT parent (a Snippet, XMLElement, PlaceGun, TextBox, SignatureField, ComboBox, ListBox, SplineItem, Polygon, GraphicLine, Rectangle, Oval or State).
> _Read Only_
>
> Number **index**
>
> Gives the PICT position inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Contains preferences objects.
> _Read Only_
>
> Events **events**
>
> Contains events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Contains event listeners.
> _Read Only_
>
> SVGs **svgs**
>
> Contains SVG files.
> _Read Only_
>
> Graphics **graphics**
>
> Contains imported graphics in vector, metafile, or bitmap formats.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection for processing every page item in a container, such as a document, page, or group, without filtering by type.
> Boolean **nonprinting**
>
> True prevents the PICT from printing.
> Boolean **allowOverrides**
>
> True allows this master page item to be overridden.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds for the PICT without stroke width, formatted as [y1, x1, y2, x2] for the top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds for the PICT with stroke width included, formatted as [y1, x1, y2, x2] for the top-left and bottom-right bounding-box coordinates.
> DisplaySettingOptions **localDisplaySetting**
>
> Provides display performance choices for the PICT.
> Number **rotationAngle**
>
> PICT rotation angle. (Range: -360 to 360)
> Number **shearAngle**
>
> Skew angle assigned to the PICT. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling used by the PICT.
> Number **verticalScale**
>
> Vertical scaling used by the PICT.
> Number **absoluteRotationAngle**
>
> Rotation angle for the PICT relative to the containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Skew angle for the PICT relative to the containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale for the PICT relative to the containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale for the PICT relative to the containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style assigned to the PICT.
> Flip **flip**
>
> Direction used when flipping the printed image.
> Flip **absoluteFlip**
>
> Reports whether the PICT was flipped apart from its parent object and, when applicable, the flip direction.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied under the object-based layout rule.
> Swatch **fillColor**
>
> Swatch used for the PICT fill (color, gradient, tint, or mixed ink). . Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the PICT fill color. To set a tint percent, use 0 to 100; use -1 for inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the PICT fill color overprint underlying objects. False makes the fill color knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, assigned to the PICT.
> Number **miterLimit**
>
> Maximum stroke-width-to-miter-length ratio before a miter (pointed) join changes to a bevel (squared-off) join.
> EndCap **endCap**
>
> End shape for an open path.
> EndJoin **endJoin**
>
> Corner join used by the PICT.
> StrokeStyle **strokeType**
>
> Stroke style name to use. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the PICT.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed-line pattern. Define up to six point values as [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Swatch used for the PICT stroke (color, gradient, tint, or mixed ink). Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. To set a tint percent, use 0 to 100; use -1 for inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient on the PICT fill, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Linear-gradient length or radial-gradient radius used on the PICT fill.
> Number **gradientFillAngle**
>
> Linear-gradient angle used on the PICT fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient on the PICT stroke, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Linear-gradient length or radial-gradient radius used on the PICT stroke.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle used on the PICT stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the PICT stroke color overprint underlying objects. False makes the stroke color knock out underlying colors.
> Swatch **gapColor**
>
> Swatch used for the gap in a dashed, dotted, or striped stroke; see stroke type for details.
> Number **gapTint**
>
> Gap-color tint percentage. To set a tint percent, use 0 to 100; use -1 for inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors. False makes the gap color knock out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the PICT.
> Layer **itemLayer**
>
> Layer containing the PICT.
> Boolean **locked**
>
> True means the PICT is locked.
> Boolean **visible**
>
> True means the PICT is visible.
> String **name**
>
> Name assigned to the PICT.
> CornerOptions **topLeftCornerOption**
>
> Corner shape for the top left of rectangular shapes and every corner of non-rectangular shapes. Note: corner option differs from end join because a radius can be set for a corner option, while rounded or beveled end-join effects depend on stroke weight.
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
> Measurement-unit radius for the top-left corner effect on rectangular shapes and all corners on non-rectangular shapes.
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
> Arrowhead alignment used by the PICT.
> Number **leftArrowHeadScale**
>
> Scale applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Settable property accepting any string.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> Asset **store**( Library **using**, Object **withProperties** )
>
> Stores this object into the chosen library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the object. |
| Object | withProperties | Starting property values for the new PICT. (Optional) |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When set, result order is reversed. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value, then replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When set, result order is reversed. (Optional) |

> **placeXML**( XMLElement **using** )
>
> Places XML content in the specified object. Note: Existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose content is placed. |

> **autoTag**()
>
> Tags the object or parent story with the default tags from XML preference.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while leaving current content intact.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> String **exportForWeb**( File **to** )
>
> Exports the PICT for web use.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Full path name for the exported file. |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File being placed. |
| Boolean | showingOptions | Whether the import options dialog is shown. (Optional) |
| Object | withProperties | Initial values assigned after placement. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Creates a document-page object by overriding a master page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Clears a master page item override.
> **detach**()
>
> Separates an overridden item from its master page.
> **remove**()
>
> Removes the PICT.
> **fit**( FitOptions **given** )
>
> Applies the specified fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Reverses the PICT along the requested axis.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Flip axis. |
| Mixed | around | Point used as the flip center. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Duplicates the PICT to a location or by an offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New PICT location, specified as coordinates in [x, y] format. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount for the new PICT relative to the original PICT position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Changes the PICT position. Note: Supply either 'to' or 'by'; if both are present, to takes precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New PICT location in (x, y) format. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Movement amount, in measurement units, relative to the current PICT position, in (x, y) format. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Style being applied. |
| Boolean | clearingOverrides | True clears existing PICT attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | True clears PICT attributes and formatting that the object style does not define. (Optional) |

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
| Mixed | from | Temporary transformation origin. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix supplied for the transformation. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to replace; when supplied, the target's existing transform components are overwritten with new values. Without it, the matrix is concatenated with the target's existing transform so both effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin in ruler units rather than points. Default value is false. It matters only when the reference point is relative to a page. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets page-item transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Gets coordinates for the requested location in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | True interprets a ruler location in ruler units rather than points. Default value is false. It matters only when the reference point is relative to a page. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors left on the item. The default is \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin for the transformation. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | Method that controls how the supplied values affect current dimensions. |
| Mixed | values | Values for width and height. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space determines _only_ the length unit for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | False with multiple targeted page items obtains the new dimensions by moving individual items rather than resizing them. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler location in ruler units rather than points. Default value is false. It matters only when the reference point is relative to a page. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the specified coordinate space. |

> String **transformAgain**()
>
> Applies to the PICT the latest transformation used on any object, including moving, scaling, rotating, flipping, and shearing.
> String **transformSequenceAgain**()
>
> Applies to the PICT the latest transform-operation sequence from one object or a simultaneous group operation, including moving, scaling, rotating, flipping, and shearing.
> String **transformAgainIndividually**()
>
> Applies to this PICT the latest transformation used on any PICT, including moving, scaling, rotating, flipping, and shearing.
> String **transformSequenceAgainIndividually**()
>
> Applies to the PICT the latest transformation sequence from one object or a simultaneous group operation, including moving, scaling, rotating, flipping, and shearing.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Plain Text to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Output QR Code Graphic swatch. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial values for the new PICT; these arguments are also allowed in the property object. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Hyperlink to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Output QR Code Graphic swatch. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial values for the new PICT; these arguments are also allowed in the property object. (Optional) |
