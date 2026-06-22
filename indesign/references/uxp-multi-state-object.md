# Multi State Object (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Multi-state object.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Fired before placement of a MultiStateObject. This event bubbles. It can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Fired after placement of a MultiStateObject. This event bubbles. It cannot be canceled.

## Instance

> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Anchored object configuration.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default formatting properties used when text wraps around objects.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the MultiStateObject.
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
> Fill transparency configuration applied to the MultiStateObject.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Content transparency configuration for the MultiStateObject.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for Linked Page Item behavior.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden. False means either the master-spread source was not overridden, or no master page source was involved.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Master-page-originated object after override. Possible return types: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained inside the MultiStateObject.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained inside the MultiStateObject.
> _Read Only_
>
> Page **parentPage**
>
> Page where this page item appears.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Animation configuration for the page item.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Timing configuration for the object.
> _Read Only_
>
> Article **allArticles**
>
> All articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique ID for the MultiStateObject.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the MultiStateObject: a Snippet, PlaceGun, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group or Character.
> _Read Only_
>
> Number **index**
>
> Position of the MultiStateObject inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preferences objects.
> _Read Only_
>
> Ovals **ovals**
>
> Collection of ellipses.
> _Read Only_
>
> SplineItems **splineItems**
>
> Spline items collection.
> _Read Only_
>
> PageItems **pageItems**
>
> Page items collection for processing every page item in a container, such as a document, page, or group, without regard to item type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Collection of rectangles.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Collection of graphic lines.
> _Read Only_
>
> TextFrames **textFrames**
>
> Collection of text frames.
> _Read Only_
>
> Polygons **polygons**
>
> Collection of polygons.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Collection of endnote text frames.
> _Read Only_
>
> Paths **paths**
>
> Collection of paths.
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
> Images **images**
>
> Bitmap image collection for supported bitmap file formats, including TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Imported-graphics collection for graphic file formats such as vector, metafile, or bitmap.
> _Read Only_
>
> EPSs **epss**
>
> Collection of EPS files.
> _Read Only_
>
> WMFs **wmfs**
>
> Collection of WMF graphics.
> _Read Only_
>
> PICTs **picts**
>
> Collection of PICT graphics.
> _Read Only_
>
> PDFs **pdfs**
>
> Collection of PDF files.
> _Read Only_
>
> Groups **groups**
>
> Collection of groups.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts.
> _Read Only_
>
> States **states**
>
> Collection of states.
> _Read Only_
>
> SVGs **svgs**
>
> Collection of SVG files.
> Boolean **initiallyHidden**
>
> Controls whether this object starts hidden in an exported file.
> Number **activeStateIndex**
>
> Index for the active state in the object's states collection.
> String **name**
>
> Name of the MultiStateObject.
> String **description**
>
> Description assigned to the MultiStateObject.
> Boolean **allowOverrides**
>
> True allows the master page item to be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints used by this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints used by this item under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds for the MultiStateObject without stroke width, using [y1, x1, y2, x2] for top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds for the MultiStateObject with stroke width included, using [y1, x1, y2, x2] for top-left and bottom-right bounding-box coordinates.
> Swatch **fillColor**
>
> Fill swatch applied to the MultiStateObject; it may be a color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Tint percentage used for the MultiStateObject's fill color. Use 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the MultiStateObject's fill color overprint underlying objects; false makes the fill color knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, applied to the MultiStateObject.
> Number **miterLimit**
>
> Ratio threshold between stroke width and miter length where a miter (pointed) join changes to a bevel (squared-off) join.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join used by the MultiStateObject.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the MultiStateObject.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements defining a custom dashed-line pattern. Define up to six values (in points) as [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the start of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the end of the path.
> Swatch **strokeColor**
>
> Stroke swatch applied to the MultiStateObject; it may be a color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Gradient starting point for the MultiStateObject fill, in page coordinates, using [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the MultiStateObject fill, this is the linear-gradient length or radial-gradient radius.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the MultiStateObject fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Gradient starting point for the MultiStateObject stroke, in page coordinates, using [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the MultiStateObject stroke, this is the linear-gradient length or radial-gradient radius.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the MultiStateObject stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the MultiStateObject's stroke color overprint underlying objects; false makes the stroke color knock out the underlying colors.
> Swatch **gapColor**
>
> Swatch applied to the gap of a dashed, dotted, or striped stroke; it may be a color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint percentage. Use 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes it knock out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the MultiStateObject.
> Boolean **nonprinting**
>
> True prevents the MultiStateObject from printing.
> Layer **itemLayer**
>
> Layer containing the MultiStateObject.
> Boolean **locked**
>
> True locks the MultiStateObject.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the MultiStateObject.
> Number **rotationAngle**
>
> Rotation angle for the MultiStateObject. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the MultiStateObject. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the MultiStateObject.
> Number **verticalScale**
>
> Vertical scaling applied to the MultiStateObject.
> Number **absoluteRotationAngle**
>
> Relative rotation angle between the MultiStateObject and its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Relative skewing angle between the MultiStateObject and its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Relative horizontal scale between the MultiStateObject and its containing object.
> Number **absoluteVerticalScale**
>
> Relative vertical scale between the MultiStateObject and its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the MultiStateObject.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Indicates whether the MultiStateObject was flipped independently of its parent object and, when so, the flip direction used.
> Boolean **visible**
>
> True makes the MultiStateObject visible.
> CornerOptions **topLeftCornerOption**
>
> Shape used for the top-left corner on rectangular shapes and for every corner on non-rectangular shapes. Note: a corner option can define a radius; an end join's rounded or beveled effect instead depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Shape used for the rectangular shape's top-right corner.
> CornerOptions **bottomLeftCornerOption**
>
> Shape used for the rectangular shape's bottom-left corner.
> CornerOptions **bottomRightCornerOption**
>
> Shape used for the rectangular shape's bottom-right corner.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Radius, in measurement units, for the corner effect on a rectangular shape's top-left corner and every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Radius, in measurement units, for the corner effect on a rectangular shape's top-right corner.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Radius, in measurement units, for the corner effect on a rectangular shape's bottom-left corner.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Radius, in measurement units, for the corner effect on a rectangular shape's bottom-right corner.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the MultiStateObject.
> Number **leftArrowHeadScale**
>
> Scale value for the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale value for the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Property that accepts any string value.
> Object **properties**
>
> Property used to set several properties in one operation.

### Methods

> **bringToFront**( PageItem **reference** )
>
> Moves the MultiStateObject to the front of its layer, or places it before a specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object is brought in front of; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the MultiStateObject to the back of its layer, or behind a specified item that has the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object is sent behind. (Optional) |

> **bringForward**()
>
> Advances the MultiStateObject one stacking level within its layer.
> **sendBackward**()
>
> Moves the MultiStateObject toward the back by one stacking level.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the MultiStateObject into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | Sets the new shape for the MultiStateObject. |
| Number | numberOfSides | Sets the side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Sets the inset percentage for the resulting star polygon; valid values are 0.0 to 100.0. (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Sets the corner radius for the resulting rectangle. (Optional) |

> **releaseAsObjects**()
>
> Releases every state associated with this object, then destroys the parent object.
> **addItemsAsState**( PageItem **pageitems** )
>
> Adds page items as an appearance state for this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageitems | Provides one or more page items to use as a state. |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Selects the library where the object is stored. |
| Object | withProperties | Starting property values for the new MultiStateObject. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the label to the value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Specifies the key. |
| String | value | Supplies the stored value. |

> **placeXML**( XMLElement **using** )
>
> Inserts XML content into the specified object. Note: the operation replaces existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | Supplies the XML element whose content should be placed. |

> **autoTag**()
>
> Applies default tags from XML preference to the object or parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | Supplies the XML element. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses the order of returned matches. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, reverses the order of returned matches. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Overrides a master page item, then creates the resulting object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item that will be overridden. |

> **removeOverride**()
>
> Removes the override from a master page item that was previously overridden.
> **detach**()
>
> Separates an overridden master page item from the master page.
> **remove**()
>
> Removes the MultiStateObject.
> **fit**( FitOptions **given** )
>
> Applies the specified fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Specifies which fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Mirrors the MultiStateObject.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the MultiStateObject. |
| Mixed | around | Point used as the flip center for the MultiStateObject. Accepted forms: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Duplicates the MultiStateObject at a requested position or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Location for the new MultiStateObject, given as coordinates in [x, y] format. Accepted forms: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount from the source item's position for the new MultiStateObject. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Places the MultiStateObject at another location. Note: either `to` or `by` is required; when both are supplied, only `to` is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New location for the MultiStateObject, in (x, y) format. Accepted forms: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Amount, in measurement units, used to move the MultiStateObject relative to its current position, in (x, y) format. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Specifies the object style to apply. |
| Boolean | clearingOverrides | When true, removes the MultiStateObject's existing attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, removes attributes and formatting on the MultiStateObject that are not defined by the object style. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> **clearTransformations**()
>
> Clears these transformations from the MultiStateObject: fitting, flipping, rotation, scaling, and shearing too.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Selects the coordinate space to use. |
| Mixed | from | Temporary origin used for the transformation. Accepted forms: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Provides the transform matrix. Accepted forms: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Names transform components to consider; supplying this optional argument replaces the target's current transform components with new values. Without it, the given matrix is concatenated onto the target's current transform so the two effects are combined. Accepted forms: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin uses ruler units rather than points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns transformation values for the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Selects the coordinate space to use. |

> String **transformAgain**()
>
> Applies to the MultiStateObject the most recent transform used on any object. The transform may involve moving, rotating, shearing, scaling, or flipping.
> String **transformSequenceAgain**()
>
> Replays on the MultiStateObject the latest transform-operation sequence from one object, or a sequence applied simultaneously to a group. The sequence may involve moving, rotating, shearing, scaling, or flipping.
> String **transformAgainIndividually**()
>
> Applies to the MultiStateObject the most recent transform used on any MultiStateObject. The transform may involve moving, rotating, shearing, scaling, or flipping.
> String **transformSequenceAgainIndividually**()
>
> Repeats on the MultiStateObject the latest transform sequence taken from one object, or from a group transformed in one operation. The sequence may involve moving, rotating, shearing, scaling, or flipping.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Generated QR Code Graphic uses this swatch. Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial property bag for the new MultiStateObject; it may include the same parameter values. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Generated QR Code Graphic uses this swatch. Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial property bag for the new MultiStateObject; it may include the same parameter values. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number value encoded in the QR code. (Optional) |
| String | textMessage | Text Message value encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Generated QR Code Graphic uses this swatch. Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial property bag for the new MultiStateObject; it may include the same parameter values. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address value encoded in the QR code. (Optional) |
| String | subject | Email Subject value encoded in the QR code. (Optional) |
| String | body | Email Body Message value encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Generated QR Code Graphic uses this swatch. Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial property bag for the new MultiStateObject; it may include the same parameter values. (Optional) |
