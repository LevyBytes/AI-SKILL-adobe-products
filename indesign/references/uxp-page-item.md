# Page Item (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

A page object such as a rectangle, ellipse, graphic line, polygon, group, text frame, or button.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a PageItem is placed. This event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after a PageItem is placed. This event bubbles and cannot be canceled.

## Instance

> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML data node linked with this PageItem.
> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Transparency controls for the item.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Stroke-specific transparency controls.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Transparency controls used by the PageItem fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency controls that affect the PageItem content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> These TextWrapPreference properties set the default formatting used when text wraps around objects.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked PageItem behavior.
> _Read Only_
>
> Boolean **overridden**
>
> true means the object came from a master spread and has been overridden. false covers either a master-spread object that remains unoverridden or an object that did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Represents an overridden object that originally belonged to a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All PageItem objects contained inside this PageItem.
> _Read Only_
>
> Graphic **allGraphics**
>
> All Graphic objects contained inside this PageItem.
> _Read Only_
>
> Page **parentPage**
>
> Page where this page item is displayed.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Animation controls assigned to the page item.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Timing controls for the object.
> _Read Only_
>
> Article **allArticles**
>
> All articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique PageItem ID.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Container that owns this object (a Snippet, XMLElement, ComboBox, ListBox, TextBox, SignatureField, CheckBox, RadioButton, Spread, MasterSpread, Polygon, GraphicLine, Rectangle, Oval, SplineItem, Group, State, Cell, Button, MultiStateObject, EndnoteTextFrame, TextFrame, Character, Sound, PlaceGun, Movie, HtmlItem, FormField, MediaItem, EPSText, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Graphic or PageItem).
> _Read Only_
>
> Number **index**
>
> Position of the PageItem within the object that contains it.
> _Read Only_
>
> Preferences **preferences**
>
> Preferences object collection.
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
> Imported graphic collection for vector, metafile, or bitmap formats.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection used to address every page item inside a container, such as a document, page, or group, without filtering by type.
> Boolean **allowOverrides**
>
> true allows the master page item to be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Horizontal constraints applied under the object-based layout rule: left margin, width, and right margin.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Vertical constraints applied under the object-based layout rule: top margin, height, and bottom margin.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> PageItem bounds without stroke width, expressed as [y1, x1, y2, x2] for the bounding box's top-left and bottom-right coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> PageItem bounds with stroke width included, expressed as [y1, x1, y2, x2] for the bounding box's top-left and bottom-right coordinates.
> Swatch **fillColor**
>
> Swatch assigned to the PageItem fill, such as a color, gradient, tint, or mixed ink. . Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the PageItem fill color. Use a number from 0 to 100 for an explicit tint; use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> true makes the PageItem fill color overprint underlying objects; false makes that fill knock out the colors beneath it.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Point size used for the PageItem stroke weight.
> Number **miterLimit**
>
> Maximum stroke-width-to-miter-length ratio allowed before a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join used by the PageItem.
> StrokeStyle **strokeType**
>
> Stroke style name to use. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the PageItem.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Custom dashed-line pattern values for dashes and gaps. Define up to six point values as [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Swatch assigned to the PageItem stroke, such as a color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use a number from 0 to 100 for an explicit tint; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient used on the PageItem fill, expressed as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Length for a linear gradient, or radius for a radial gradient, used on the PageItem fill.
> Number **gradientFillAngle**
>
> Linear-gradient angle used by the PageItem fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient used on the PageItem stroke, expressed as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Length for a linear gradient, or radius for a radial gradient, used on the PageItem stroke.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle used by the PageItem stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> true makes the PageItem stroke color overprint underlying objects; false makes that stroke knock out the colors beneath it.
> Swatch **gapColor**
>
> Swatch assigned to the gap in a dashed, dotted, or striped stroke, such as a color, gradient, tint, or mixed ink. See stroke type for more information.
> Number **gapTint**
>
> Gap-color tint percentage. Use a number from 0 to 100 for an explicit tint; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> true makes the gap color overprint underlying colors; false makes that gap knock out the colors beneath it.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the PageItem.
> Boolean **nonprinting**
>
> true prevents the PageItem from printing.
> Layer **itemLayer**
>
> Layer containing the PageItem.
> Boolean **locked**
>
> true means the PageItem is locked.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance setting for the PageItem.
> Number **rotationAngle**
>
> Rotation angle for the PageItem. (Range: -360 to 360)
> Number **shearAngle**
>
> Skew angle used by the PageItem. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling value for the PageItem.
> Number **verticalScale**
>
> Vertical scaling value for the PageItem.
> Number **absoluteRotationAngle**
>
> PageItem rotation angle measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> PageItem skew angle measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the PageItem measured relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the PageItem measured relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style assigned to the PageItem.
> Flip **flip**
>
> Direction used when flipping the printed image.
> Flip **absoluteFlip**
>
> Reports whether the PageItem has a flip independent of its parent object and, when it does, the direction of that flip.
> Boolean **visible**
>
> true means the PageItem is visible.
> String **name**
>
> PageItem name.
> CornerOptions **topLeftCornerOption**
>
> Top-left corner shape for rectangular shapes, and the corner shape used for every corner on non-rectangular shapes. Note: a corner option is not the same as an end join; corner options can define a radius, while stroke weight determines the rounded or beveled result of an end join.
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
> Measurement-unit radius for the corner effect on rectangular shapes at top left and on every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the rectangular shape's top-right corner effect.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the rectangular shape's bottom-left corner effect.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the rectangular shape's bottom-right corner effect.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the PageItem.
> Number **leftArrowHeadScale**
>
> Scaling for the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scaling for the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Settable property that accepts any string.
> Object **properties**
>
> Property used to assign several properties together.

### Methods

> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves this object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the object. |
| Object | withProperties | Starting values for the new PageItem properties. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Writes a label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> **placeXML**( XMLElement **using** )
>
> Inserts XML content into the target object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose content will be inserted. |

> **autoTag**()
>
> Applies default XML preference tags to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element without removing existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Locates objects that satisfy the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | true reverses the order of returned results. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects that satisfy the find what value, then replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | true reverses the order of returned results. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Imports the file into place.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Boolean | showingOptions | Whether the import options dialog appears. (Optional) |
| Object | withProperties | Initial property values for the placed object or objects. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Takes a master page item override and creates the resulting object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page that contains the master page item being overridden. |

> **removeOverride**()
>
> Clears the override from a master page item that had been overridden.
> **detach**()
>
> Separates an overridden master page item from the master page.
> **remove**()
>
> Removes the PageItem.
> **fit**( FitOptions **given** )
>
> Uses the supplied fit option on frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Flips this PageItem.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used for the PageItem flip. |
| Mixed | around | Point used as the PageItem flip reference. Accepted values: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a duplicate PageItem at the requested location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New PageItem location, specified as coordinates in [x, y] format. Accepted values: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount applied to the new PageItem from the original PageItem position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the PageItem. Note: supply either 'to' or 'by'; when both are supplied, the to value takes precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New PageItem location, in (x, y) format. Accepted values: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset for moving the PageItem from its current position, in (x, y) format. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the requested object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | true removes the PageItem's current attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | true removes PageItem attributes and formatting that are outside the object style definition. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object style overrides.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the PageItem into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the PageItem. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Resulting polygon's star inset percentage. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius used by the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Removes PageItem transformations, covering rotate, scale, flip, fit, and shear operations.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin used during transformation. Accepted values: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transformation. Accepted values: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to include for replacement; when this optional parameter is supplied, the target's current transform components are replaced by the new values. If omitted, the supplied matrix is concatenated with the target's current transform so both effects are combined. Accepted values: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | true interprets a ruler-based origin with ruler units instead of points. false is the default. This parameter only matters when the reference point is relative to a page. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Retrieves this page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Resolves the requested location into coordinates within the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepted values: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | true interprets a ruler location using ruler units rather than points. false is the default. This parameter only has an effect when the reference point is relative to a page. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content where possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors left with the item; default: \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Resize target bounding box. Accepted values: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin for the transform. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepted values: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the supplied values affect the current dimensions. |
| Mixed | values | Width and height inputs. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space only determines their length unit. That coordinate space does not apply to the 'current dimensions times' resize method). Accepted values: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | false, when several page items are targeted, reaches the new dimensions by moving individual items instead of resizing them. (Optional) |
| Boolean | consideringRulerUnits | true interprets a ruler location with ruler units instead of points. false is the default. This parameter only matters when the reference point is relative to a page. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Moves the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Resize target bounding box. Accepted values: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the specified coordinate space. |

> String **transformAgain**()
>
> Reapplies to the PageItem the most recent transformation performed on any object. Supported kinds are move, rotate, shear, scale, and flip.
> String **transformSequenceAgain**()
>
> Reapplies to the PageItem the most recent transform sequence performed on one object or simultaneously on a group of objects. Supported kinds are move, rotate, shear, scale, and flip.
> String **transformAgainIndividually**()
>
> Reapplies to the PageItem the most recent transformation performed on any PageItem. Supported kinds are move, rotate, shear, scale, and flip.
> String **transformSequenceAgainIndividually**()
>
> Reapplies to the PageItem the most recent transformation sequence performed on one object or simultaneously on a group of objects. Supported kinds are move, rotate, shear, scale, and flip.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text value encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting values for the new PageItem properties. The listed parameter values may be carried here too. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Starting values for the new PageItem properties. The listed parameter values may be carried here too. (Optional) |
