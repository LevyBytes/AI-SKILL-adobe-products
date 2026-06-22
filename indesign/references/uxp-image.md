# Image (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Represents a placed bitmap Image from a bitmap file format, including TIFF, JPEG, or GIF.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before an Image is placed; the event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after an Image is placed; the event bubbles and cannot be canceled.

## Instance

> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Settings controlling transparency.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Settings controlling stroke transparency.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Settings controlling fill transparency for the Image.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Settings controlling transparency for Image content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default text-wrap formatting rules for wrapping text around objects.
> _Read Only_
>
> ClippingPathSettings **clippingPath**
>
> Settings for clipping paths.
> _Read Only_
>
> ImageIOPreference **imageIOPreferences**
>
> Import-image preferences exposed through image I/O settings.
> _Read Only_
>
> GraphicLayerOption **graphicLayerOptions**
>
> Settings for graphic layer options.
> _Read Only_
>
> String **space**
>
> Color space value.
> _Read Only_
>
> Number **actualPpi**
>
> Native resolution reported for the placed graphic.
> _Read Only_
>
> Number **effectivePpi**
>
> Resolution after resizing the graphic.
> _Read Only_
>
> String **profileList**
>
> Valid RGB profile list.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element tied to the Image.
> _Read Only_
>
> Boolean **overridden**
>
> true means the object came from a master spread and has been overridden; false means it either remains a non-overridden master-spread object or did not originate on a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object that originally belonged to a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
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
> Animation settings for the page item.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for a linked Page Item.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained within the Image.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained within the Image.
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
> Unique ID assigned to the Image.
> _Read Only_
>
> Boolean **isValid**
>
> true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the Image. Can return: Snippet, XMLElement, Sound, PlaceGun, Movie, TextBox, SignatureField, ComboBox, ListBox, SplineItem, Polygon, GraphicLine, Rectangle, Oval or State.
> _Read Only_
>
> Number **index**
>
> Image index inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preferences objects.
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
> SVG file collection.
> _Read Only_
>
> Graphics **graphics**
>
> Imported graphics collection for graphic file formats, including vector, metafile, or bitmap.
> _Read Only_
>
> PageItems **pageItems**
>
> Use this collection to handle contained page items across documents, pages, groups, and other containers, independent of item type.
> Swatch **fillColor**
>
> Fill swatch applied to the Image, covering color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the Image fill color. Use 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> true makes the Image fill overprint underlying objects; false knocks those colors out.
> Boolean **nonprinting**
>
> true prevents the Image from printing.
> Mixed **profile**
>
> Color profile. Can return: Profile enumerator or String.
> RenderingIntent **imageRenderingIntent**
>
> Rendering-intent override used by the image.
> Boolean **allowOverrides**
>
> true permits overriding the master page item.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds for the Image without stroke width. Format: [y1, x1, y2, x2], giving top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds for the Image with stroke width included. Format: [y1, x1, y2, x2], giving top-left and bottom-right bounding-box coordinates.
> DisplaySettingOptions **localDisplaySetting**
>
> Display-performance options for the Image.
> Number **rotationAngle**
>
> Rotation angle for the Image. (Range: -360 to 360)
> Number **shearAngle**
>
> Skew angle applied to the Image. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling value applied to the Image.
> Number **verticalScale**
>
> Vertical scaling value applied to the Image.
> Number **absoluteRotationAngle**
>
> Image rotation angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Image skew angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale for the Image relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale for the Image relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style currently applied to the Image.
> Flip **flip**
>
> Flip direction for the printed image.
> Flip **absoluteFlip**
>
> Shows whether the Image was flipped independently from its parent object and, when true, the flip direction used.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints used by the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints used by the object-based layout rule.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, for the Image.
> Number **miterLimit**
>
> Maximum stroke-width to miter-length ratio before a pointed miter join turns into a squared-off bevel join.
> EndCap **endCap**
>
> End shape used for an open path.
> EndJoin **endJoin**
>
> Corner join used on the Image.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the Image.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements defining a custom dashed-line pattern. Supply up to six point values in this format: [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead at the start of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead at the end of the path.
> Swatch **strokeColor**
>
> Stroke swatch applied to the Image, covering color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Gradient-fill starting point in page coordinates, using [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the Image fill, linear gradients use this length value and radial gradients use this radius value.
> Number **gradientFillAngle**
>
> Linear-gradient angle for the Image fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Gradient-stroke starting point in page coordinates, using [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the Image stroke, linear gradients use this length value and radial gradients use this radius value.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle for the Image stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> true makes the Image stroke color overprint underlying objects; false knocks those colors out.
> Swatch **gapColor**
>
> Swatch applied to the gap in a dashed, dotted, or striped stroke; it may be a color, gradient, tint, or mixed ink. See stroke type for details.
> Number **gapTint**
>
> Gap-color tint percentage. Use 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> true makes the gap color overprint underlying colors; false knocks those colors out.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment for the Image.
> Layer **itemLayer**
>
> Layer containing the Image.
> Boolean **locked**
>
> true when the Image is locked.
> Boolean **visible**
>
> true when the Image is visible.
> String **name**
>
> Name assigned to the Image.
> CornerOptions **topLeftCornerOption**
>
> Corner shape for the top left of rectangular shapes and for every corner of non-rectangular shapes. Note: corner option differs from end join: corner option can use a radius, while a rounded or beveled end-join effect depends on stroke weight.
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
> Radius, in measurement units, for the corner effect at the top left of rectangular shapes and at every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Radius, in measurement units, for the top right corner effect on rectangular shapes.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Radius, in measurement units, for the bottom left corner effect on rectangular shapes.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Radius, in measurement units, for the bottom right corner effect on rectangular shapes.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the Image.
> Number **leftArrowHeadScale**
>
> Scale applied to the path-start arrowhead. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale applied to the path-end arrowhead. (Range: 1 to 1000)
> String **label**
>
> Settable string property.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> Asset **store**( Library **using**, Object **withProperties** )
>
> Adds the object to the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Target library for storing the object. |
| Object | withProperties | Starting property values for the new Image. (Optional) |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Locates objects whose attributes match the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When set, the result order is reversed. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects that match the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When set, the result order is reversed. (Optional) |

> **placeXML**( XMLElement **using** )
>
> Places XML content into this object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element containing the content to place. |

> **autoTag**()
>
> Uses XML preference defaults to tag the object or its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while retaining current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> String **exportForWeb**( File **to** )
>
> Exports the Image in a web-oriented form.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Absolute pathname for the web export destination. |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places the supplied file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Boolean | showingOptions | Whether the import options dialog appears. (Optional) |
| Object | withProperties | Optional starting properties for the object(s) created by place. |

> Mixed **override**( Page **destinationPage** )
>
> Turns a master page item into a new object on the destination document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page that receives the overridden master page item. |

> **removeOverride**()
>
> Clears the override on a master page item that had been overridden.
> **detach**()
>
> Separates an overridden master page item from the master page.
> **remove**()
>
> Removes the Image.
> **fit**( FitOptions **given** )
>
> Applies the specified fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Applies a flip to the Image.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the Image. |
| Mixed | around | Optional flip reference point; accepted form can be an Array of 2 Units or an AnchorPoint enumerator. |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a duplicate Image at a location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination for the new Image. Use [x, y] coordinates, an Array of 2 Units, a Spread, a Page, or a Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount for the new Image relative to the original Image's position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the Image. Note: one of the 'to' or 'by' parameters is required; when both are supplied, the to value wins.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Target position for the Image. Use (x, y), an Array of 2 Units, a Spread, a Page, or a Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset, in measurement units, from the current Image position. Supply it as (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the chosen object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | true clears current Image attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | true clears Image attributes and formatting that are outside the object style definition. (Optional) |

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
| Mixed | from | Temporary origin for the transformation. Accepted forms include Array of 2 Reals; AnchorPoint enumerator; Array of Arrays of 2 Reals, with CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix value for the transformation; accepted forms are Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; when this optional parameter is provided, the target's current transform components are replaced by new values. Without it, the supplied matrix is concatenated with the target's current transform so the two effects combine. Accepted forms include MatrixContent enumerator, an Array of MatrixContent enumerators, or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | true interprets a ruler-based origin with ruler units instead of points. Default: false. This only matters when the reference point is relative to a page. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets the page item's transformation values.

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
| Mixed | location | Requested location. Accepted forms include Array of 2 Reals; AnchorPoint enumerator; Array of Arrays of 2 Reals, with CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | true interprets a ruler location with ruler units instead of points. Default: false. This only matters when the reference point is relative to a page. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors that should remain on the item. Default: \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Resize target bounding box. Accepted forms: CoordinateSpaces enumerator; BoundingBoxLimits enumerator; or Ordered array containing coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Transform origin. Legal specifications: for bounding-box-relative origins, anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; for coordinate-space-relative origins, \{x,y} \{\{x,y}[, coordinate space]}; for layout-window-ruler origins, \{\{x,y}, page index bounds kind}. Accepted types include Array of 2 Reals; AnchorPoint enumerator; Array of Arrays of 2 Reals; and, as separate accepted forms, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the supplied values affect the current dimensions. |
| Mixed | values | Supplied width/height pair. Dimension specifications may be \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space supplies only the unit of length for x and y. The 'current dimensions times' resize method ignores coordinate space. Accepted types include Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | false, when multiple page items are targeted, reaches the new dimensions by moving individual items instead of resizing them. (Optional) |
| Boolean | consideringRulerUnits | true interprets a ruler location with ruler units instead of points. Default: false. This only matters when the reference point is relative to a page. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box to resize. Accepted forms: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the supplied coordinate space. |

> String **transformAgain**()
>
> Repeats on the Image the most recent transformation applied to any object. Supported transformation kinds are move, rotate, shear, scale, and flip.
> String **transformSequenceAgain**()
>
> Repeats on the Image the latest transformation sequence applied to one object or simultaneously to a group. Supported transformation kinds are move, rotate, shear, scale, and flip.
> String **transformAgainIndividually**()
>
> Repeats on the Image the most recent transformation applied to any Image. Supported transformation kinds are move, rotate, shear, scale, and flip.
> String **transformSequenceAgainIndividually**()
>
> Repeats on the Image the latest transformation sequence applied to one object or simultaneously to a group of objects. Supported transformation kinds are move, rotate, shear, scale, and flip.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a QR Code of type Plain Text to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Value encoded as Plain Text. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property bag for the new Image; it may include the parameters listed above. |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Generates a QR Code for a Hyperlink on the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | URL encoded for the Hyperlink QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Optional property bag for the new Image; it may include the parameters listed above. |
