# Radio Button (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Radio button object.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a RadioButton is placed. This event bubbles. The event can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after a RadioButton is placed. This event bubbles. The event cannot be canceled.

## Instance

> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings for anchored objects.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text-wrap preference properties for default formatting when text wraps around objects.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the RadioButton.
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
> Fill transparency configuration for the RadioButton.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Content transparency configuration for the RadioButton.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Linked Page Item option settings.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden. False means either that master-spread object remains unoverridden, or that the object did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden master-page object. Possible returns: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained in the RadioButton.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained in the RadioButton.
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
> Unique ID assigned to the RadioButton.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the RadioButton. Possible values: Snippet, PlaceGun, Character, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval or Group.
> _Read Only_
>
> Number **index**
>
> Position of the RadioButton inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Preferences object collection.
> _Read Only_
>
> Ovals **ovals**
>
> Ellipse collection.
> _Read Only_
>
> SplineItems **splineItems**
>
> Spline items collection.
> _Read Only_
>
> PageItems **pageItems**
>
> Page items collection for processing every page item in a container such as a document, page, or group, without filtering by type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Rectangle collection.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Graphic line collection.
> _Read Only_
>
> TextFrames **textFrames**
>
> Text frame collection.
> _Read Only_
>
> Polygons **polygons**
>
> Polygon collection.
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
> Images **images**
>
> Bitmap image collection for bitmap file formats including TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Imported graphics collection for graphic file formats, including vector, metafile, or bitmap.
> _Read Only_
>
> EPSs **epss**
>
> EPS file collection.
> _Read Only_
>
> WMFs **wmfs**
>
> WMF graphic collection.
> _Read Only_
>
> PICTs **picts**
>
> PICT graphic collection.
> _Read Only_
>
> PDFs **pdfs**
>
> PDF file collection.
> _Read Only_
>
> Groups **groups**
>
> Group collection.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts
> _Read Only_
>
> States **states**
>
> State collection.
> _Read Only_
>
> SVGs **svgs**
>
> SVG file collection.
> _Read Only_
>
> SubmitFormBehaviors **submitFormBehaviors**
>
> Submit form behavior object collection.
> _Read Only_
>
> Behaviors **behaviors**
>
> Behavior object collection.
> _Read Only_
>
> ClearFormBehaviors **clearFormBehaviors**
>
> Clear form behavior object collection.
> _Read Only_
>
> PrintFormBehaviors **printFormBehaviors**
>
> Print form behavior object collection.
> _Read Only_
>
> ViewZoomBehaviors **viewZoomBehaviors**
>
> View zoom behavior object collection.
> _Read Only_
>
> SoundBehaviors **soundBehaviors**
>
> Sound behavior object collection.
> _Read Only_
>
> ShowHideFieldsBehaviors **showHideFieldsBehaviors**
>
> Show/hide fields behavior object collection.
> _Read Only_
>
> MovieBehaviors **movieBehaviors**
>
> Movie behavior object collection.
> _Read Only_
>
> GotoAnchorBehaviors **gotoAnchorBehaviors**
>
> Goto anchor behavior object collection.
> _Read Only_
>
> GotoFirstPageBehaviors **gotoFirstPageBehaviors**
>
> Goto first page behavior object collection.
> _Read Only_
>
> GotoLastPageBehaviors **gotoLastPageBehaviors**
>
> Goto last page behavior object collection.
> _Read Only_
>
> GotoNextPageBehaviors **gotoNextPageBehaviors**
>
> Goto next page behavior object collection.
> _Read Only_
>
> GotoPreviousPageBehaviors **gotoPreviousPageBehaviors**
>
> Goto previous page behavior object collection.
> _Read Only_
>
> GotoNextViewBehaviors **gotoNextViewBehaviors**
>
> Goto next view behavior object collection.
> _Read Only_
>
> GotoPreviousViewBehaviors **gotoPreviousViewBehaviors**
>
> Goto previous view behavior object collection.
> _Read Only_
>
> GotoURLBehaviors **gotoURLBehaviors**
>
> Goto URL behavior object collection.
> _Read Only_
>
> OpenFileBehaviors **openFileBehaviors**
>
> Open file behavior object collection.
> Boolean **readOnly**
>
> True makes the form field read only in the exported PDF.
> Boolean **required**
>
> True makes the form field required in the exported PDF.
> Boolean **printableInPdf**
>
> True makes the form field/push button printable in the exported PDF.
> Boolean **hiddenUntilTriggered**
>
> True keeps the form field/push button hidden in the exported PDF until a trigger shows it.
> Boolean **checkedByDefault**
>
> True selects the check box/radio button by default in the exported PDF.
> String **exportValue**
>
> Exported PDF value for the check box/radio button.
> Number **activeStateIndex**
>
> Index for the active state within the object's states collection.
> String **name**
>
> Name of the RadioButton.
> String **description**
>
> Description assigned to the RadioButton.
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
> RadioButton bounds without stroke width, formatted as [y1, x1, y2, x2] for the top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> RadioButton bounds with stroke width included, formatted as [y1, x1, y2, x2] for the top-left and bottom-right bounding-box coordinates.
> Swatch **fillColor**
>
> Fill swatch for the RadioButton, using a color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the RadioButton's fill color. Use 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the RadioButton's fill color overprint underlying objects; false makes the fill knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, for the RadioButton.
> Number **miterLimit**
>
> Ratio limit between stroke width and miter length before a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> End shape for an open path.
> EndJoin **endJoin**
>
> Corner join used by the RadioButton.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the RadioButton.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements defining a custom dashed-line pattern. Up to six point values may be provided as [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Stroke swatch for the RadioButton, using a color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for object's stroke color. Use 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Page-coordinate starting point for a gradient on the RadioButton fill, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Fill gradient length for a linear gradient, or radius for a radial gradient, on the RadioButton.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the RadioButton fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Page-coordinate starting point for a gradient on the RadioButton stroke, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Stroke gradient length for a linear gradient, or radius for a radial gradient, on the RadioButton.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the RadioButton stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the RadioButton's stroke color overprint underlying objects; false makes the stroke knock out underlying colors.
> Swatch **gapColor**
>
> Gap swatch for a dashed, dotted, or striped stroke, using a color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap color tint percentage. Use 0 to 100 for a tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying objects; false makes the gap color knock out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the RadioButton.
> Boolean **nonprinting**
>
> True prevents the RadioButton from printing.
> Layer **itemLayer**
>
> Layer containing the RadioButton.
> Boolean **locked**
>
> True locks the RadioButton.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the RadioButton.
> Number **rotationAngle**
>
> Rotation angle for the RadioButton. (Range: -360 to 360)
> Number **shearAngle**
>
> Shear angle applied to the RadioButton. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the RadioButton.
> Number **verticalScale**
>
> Vertical scaling applied to the RadioButton.
> Number **absoluteRotationAngle**
>
> RadioButton rotation angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> RadioButton shear angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> RadioButton horizontal scale relative to its containing object.
> Number **absoluteVerticalScale**
>
> RadioButton vertical scale relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the RadioButton.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Whether the RadioButton has been flipped independently of its parent object and, when it has, the flip direction used for the RadioButton.
> Boolean **visible**
>
> True makes the RadioButton visible.
> CornerOptions **topLeftCornerOption**
>
> Shape used for the top-left corner of rectangular shapes and every corner of non-rectangular shapes. Note: a corner option can set a radius, while the rounded or beveled result of an end join depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Shape used for the top-right corner of rectangular shapes.
> CornerOptions **bottomLeftCornerOption**
>
> Shape used for the bottom-left corner of rectangular shapes.
> CornerOptions **bottomRightCornerOption**
>
> Rectangular-shape bottom-right corner shape.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for the top-left rectangular corner; on non-rectangular shapes it applies to every corner.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Radius, in measurement units, for the corner effect on the top-right rectangular corner.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Radius, in measurement units, for the corner effect on the bottom-left rectangular corner.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Radius, in measurement units, for the corner effect on the bottom-right rectangular corner.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the RadioButton.
> Number **leftArrowHeadScale**
>
> Scale applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> String-settable property.
> Object **properties**
>
> Lets several properties be set together.

### Methods

> **bringToFront**( PageItem **reference** )
>
> Moves the RadioButton to the front of its layer, or ahead of a specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object should be brought in front of; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the RadioButton to the back of its layer, or behind a specified item that shares the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object should be sent behind. (Optional) |

> **bringForward**()
>
> Raises the RadioButton one stacking level within its layer.
> **sendBackward**()
>
> Moves the RadioButton one stacking level lower.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the RadioButton into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the RadioButton. |
| Number | numberOfSides | Side count for the output shape. (Allowed: 3 to 100) (Optional) |
| Number | insetPercentage | Inset percentage used for the output star polygon. (Allowed: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the resulting rectangle. (Optional) |

> **convertToObject**()
>
> Converts the button object into the page item from the active state; page items in other states are discarded.
> Asset **store**( Library **using**, Object **withProperties** )
>
> Adds the object to the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library where the object is stored. |
| Object | withProperties | Starting property values for the added RadioButton. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns a label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> **placeXML**( XMLElement **using** )
>
> Places XML content into the specified object. Note: Existing content is replaced.

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
| XMLElement | using | XML element to associate. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | Set true to reverse the returned order. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | Set true to reverse the returned order. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Overrides a master page item and creates the new object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page holding the master page item targeted for override. |

> **removeOverride**()
>
> Removes a previously overridden master page item's override.
> **detach**()
>
> Disconnects an overridden item from the source master.
> **remove**()
>
> Removes the RadioButton object.
> **fit**( FitOptions **given** )
>
> Uses the specified fit option on frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip operation on the RadioButton.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the RadioButton. |
| Mixed | around | Point used as the flip center for the RadioButton. Accepts Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Duplicates the RadioButton at a specified location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Location for the new RadioButton, expressed as coordinates in [x, y] format. Accepts Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Distance to offset from where the original RadioButton sits. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the RadioButton. Note: either the 'to' or 'by' parameter is required; if both are present, the to value is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New RadioButton location, in (x, y) format. Accepts Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset for moving the RadioButton from its current position, in (x, y) format. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | True clears existing RadioButton attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | True clears RadioButton attributes and formatting that the object style does not define. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> **clearTransformations**()
>
> Removes rotate, scale, flip, fit, and shear transforms from the RadioButton.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary transformation origin. Accepts Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Accepts Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; when supplied, this optional parameter replaces the target's existing transform components with new values. Without it, the given matrix is concatenated onto the target's existing transform so both effects combine. Accepts MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is read in ruler units instead of points. Default: false. It applies only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets transformation values for the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |

> String **transformAgain**()
>
> Repeats on the RadioButton the last object transformation. It may involve moving, rotating, shearing, scaling, or flipping.
> String **transformSequenceAgain**()
>
> Repeats on the RadioButton the last transform sequence from one object or from simultaneous work on a group of objects. The sequence may involve moving, rotating, shearing, scaling, or flipping.
> String **transformAgainIndividually**()
>
> Repeats on this RadioButton the last transformation performed on any RadioButton. It may involve moving, rotating, shearing, scaling, or flipping.
> String **transformSequenceAgainIndividually**()
>
> Repeats on the RadioButton the last transformation sequence from one object or from simultaneous work on a group of objects. The sequence may involve moving, rotating, shearing, scaling, or flipping.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Property bundle for initial RadioButton values; it may carry the parameters above. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Initial RadioButton property bundle; the parameters above may also be carried here. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text phone number for the QR code. (Optional) |
| String | textMessage | Text message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Property bundle for the new RadioButton; it may include the parameters above. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address for the QR code. (Optional) |
| String | subject | Email Subject for the QR code. (Optional) |
| String | body | Email Body Message for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts Swatch or String. (Optional) |
| String | withProperties | Initial property bundle for the RadioButton; the parameters above may be provided through it. (Optional) |
