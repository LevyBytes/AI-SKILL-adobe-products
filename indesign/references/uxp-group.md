# Group (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before placement of a Group occurs. Bubbles: yes. Cancelable: yes.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after placement of a Group occurs. Bubbles: yes. Cancelable: no.

## Group — Instance

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
> Settings controlling transparency on the Group fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Settings controlling transparency for Group content.
> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings for anchored objects.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default text-wrap formatting around objects is defined by these preference properties.
> _Read Only_
>
> ObjectExportOption **objectExportOptions**
>
> Options used when exporting the object.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the Group.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked page items.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and is now overridden. False means it either came from a master spread without an override or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Master-page object after an override has been made. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> Lists every page item contained by the Group.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic contained by the Group.
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
> Unique ID assigned to the Group.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Group (a Snippet, PlaceGun, ComboBox, ListBox, TextBox, SignatureField, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, State or Character).
> _Read Only_
>
> Number **index**
>
> Position of the Group inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> _Read Only_
>
> Ovals **ovals**
>
> Collection containing ellipses.
> _Read Only_
>
> SplineItems **splineItems**
>
> Collection of spline items.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection for processing page items in a container, such as a document, page, or group, without regard to item type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Collection containing rectangles.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Collection containing graphic lines.
> _Read Only_
>
> TextFrames **textFrames**
>
> Collection containing text frames.
> _Read Only_
>
> Polygons **polygons**
>
> Collection containing polygons.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Collection containing endnote text frames.
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
> Groups **groups**
>
> Collection containing groups.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts
> _Read Only_
>
> FormFields **formFields**
>
> Collection containing form fields.
> _Read Only_
>
> Buttons **buttons**
>
> Collection containing buttons.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Collection containing multi-state objects.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Collection containing checkboxes.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Collection containing comboboxes.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Collection containing listboxes.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Collection containing radio buttons.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Collection containing text boxes.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Collection containing signature fields.
> _Read Only_
>
> SVGs **svgs**
>
> Collection containing SVG files.
> _Read Only_
>
> Graphics **graphics**
>
> Imported graphics collection covering any graphic file format (vector, metafile, or bitmap).
> _Read Only_
>
> ArticleChildren **articleChildren**
>
> Collection of Group items that also belong to an article.
> Boolean **allowOverrides**
>
> True permits the master page item to be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints that apply under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints that apply under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Group bounds without stroke width, using [y1, x1, y2, x2] for top-left and bottom-right bounding-box coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Group bounds including stroke width, using [y1, x1, y2, x2] for top-left and bottom-right bounding-box coordinates.
> Swatch **fillColor**
>
> Fill uses this swatch (color, gradient, tint, or mixed ink). . Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the Group's fill color. Use 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the Group's fill color overprint underlying objects; false makes the fill knock out the underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, applied to the Group.
> Number **miterLimit**
>
> Ratio limit between stroke width and miter length before a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join used by the Group.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the Group.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Custom dashed-line pattern values. Define up to six point values in [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Stroke uses this swatch (color, gradient, tint, or mixed ink). Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient applied to the Group fill, in [x, y] format.
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Length for a linear gradient, or radius for a radial gradient, used on the Group fill.
> Number **gradientFillAngle**
>
> Angle for a linear gradient applied to the Group fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient applied to the Group stroke, in [x, y] format.
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Length for a linear gradient, or radius for a radial gradient, used on the Group stroke.
> Number **gradientStrokeAngle**
>
> Angle for a linear gradient applied to the Group stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the Group's stroke color overprint underlying objects; false makes the stroke knock out the underlying colors.
> Swatch **gapColor**
>
> Gap in a dashed, dotted, or striped stroke uses this swatch (color, gradient, tint, or mixed ink). For information, see stroke type.
> Number **gapTint**
>
> Tint percentage for the gap color. Use 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes the gap knock out the underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the Group.
> Boolean **nonprinting**
>
> True prevents the Group from printing.
> Layer **itemLayer**
>
> Layer containing the Group.
> Boolean **locked**
>
> True locks the Group.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the Group.
> Number **rotationAngle**
>
> Rotation angle for the Group. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle used by the Group. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling used by the Group.
> Number **verticalScale**
>
> Vertical scaling used by the Group.
> Number **absoluteRotationAngle**
>
> Group rotation measured against its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Group skew measured against its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the Group relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the Group relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style used by the Group.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Shows whether the Group was flipped independently of its parent object and, when so, the direction of that flip.
> Boolean **visible**
>
> True makes the Group visible.
> String **name**
>
> Name of the Group.
> CornerOptions **topLeftCornerOption**
>
> Corner shape for rectangular top-left corners and for every corner on non-rectangular shapes.Note: corner option differs from end join because corner option radius is set directly, while rounded or beveled end-join effects depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Corner shape applied at the rectangular shape's top right.
> CornerOptions **bottomLeftCornerOption**
>
> Corner shape applied at the rectangular shape's bottom left.
> CornerOptions **bottomRightCornerOption**
>
> Corner shape applied at the rectangular shape's bottom right.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Radius, in measurement units, for the corner effect on rectangular top-left corners and every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Radius, in measurement units, for the corner effect at the rectangular shape's top right.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Radius, in measurement units, for the corner effect at the rectangular shape's bottom left.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Radius, in measurement units, for the corner effect at the rectangular shape's bottom right.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the Group.
> Number **leftArrowHeadScale**
>
> Scaling applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scaling applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Any string value can be assigned to this property.
> Object **properties**
>
> Several properties can be set together through this property.

### Methods

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Locates objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returned results are ordered in reverse. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects matching the find what value, then replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, returned results are ordered in reverse. (Optional) |

> **ungroup**()
>
> Breaks apart the group.
> **bringToFront**( PageItem **reference** )
>
> Moves the Group to the front of its layer or ahead of a specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object should be placed in front of; it must have same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the Group to the back of its layer or behind a specified item that shares the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object should be placed behind. (Optional) |

> **bringForward**()
>
> Moves the Group forward by one level in its layer.
> **sendBackward**()
>
> Moves the Group back by one level in its layer.
> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library where the object is stored. |
| Object | withProperties | Initial property values for the new Group. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns value to the label entry identified by key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> **placeXML**( XMLElement **using** )
>
> Places XML content into the specified object. Note: existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element that supplies the content to place. |

> **autoTag**()
>
> Applies default tags from XML preference to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element without removing current content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> Mixed **override**( Page **destinationPage** )
>
> Overrides a master page item and creates the resulting object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Clears the override from a master page item that had been overridden.
> **detach**()
>
> Breaks the link between an overridden item and its master page.
> **remove**()
>
> Deletes the Group.
> **fit**( FitOptions **given** )
>
> Applies the requested fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option applied. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Mirrors the Group.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the Group. |
| Mixed | around | Point used as the flip reference for the Group. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a copy of the Group at the requested location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New Group location, given as coordinates in [x, y] format. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount from the original Group's position for the new Group. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the Group. Note: either the 'to' or 'by' parameter is required; when both are provided, only the to value is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New Group location, in (x, y) format. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset for moving the Group from its current position, in (x, y) format. (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | When true, current Group attributes are cleared before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, Group attributes and formatting absent from the object style are cleared. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object-style overrides.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the Group into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the Group. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Percentage used for the resulting polygon's star inset. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the resulting rectangle. (Optional) |

> **clearTransformations**()
>
> Clears the Group's rotation, scaling, flipping, fitting, and shearing transforms.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Origin used temporarily while transforming. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Optional transform components to evaluate. Supplying it replaces matching transform components on the target with new values; omitting it concatenates the given matrix with the target's current transform, combining both effects. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin uses ruler units instead of points. The default value is false. This matters only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns transformation values for the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |

> String **transformAgain**()
>
> Applies to the Group the last transform used on any object. Covered operations are move, rotate, shear, scale, and flip.
> String **transformSequenceAgain**()
>
> Applies to the Group the most recent transform sequence used on one object or simultaneously on a group of objects. Covered operations are move, rotate, shear, scale, and flip.
> String **transformAgainIndividually**()
>
> Applies to the Group the last transform used on any Group. Covered operations are move, rotate, shear, scale, and flip.
> String **transformSequenceAgainIndividually**()
>
> Applies to the Group the most recent transform sequence used on one object or simultaneously on a group of objects. Covered operations are move, rotate, shear, scale, and flip.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Uses this swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property values for initializing the new Group; these arguments are also valid property entries. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Uses this swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property values for initializing the new Group; these arguments are also valid property entries. (Optional) |

> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Text Msg QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | cellNumber | Text Phone Number value for the QR code. (Optional) |
| String | textMessage | Text Message value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Uses this swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property values for initializing the new Group; these arguments are also valid property entries. (Optional) |

> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds an Email QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | emailAddress | Email Address value for the QR code. (Optional) |
| String | subject | Email Subject value for the QR code. (Optional) |
| String | body | Email Body Message value for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Uses this swatch for the generated QR Code Graphic. Can accept: Swatch or String. (Optional) |
| String | withProperties | Property values for initializing the new Group; these arguments are also valid property entries. (Optional) |
