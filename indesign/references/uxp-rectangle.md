# Rectangle (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before placement of a Rectangle. This event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after placement of a Rectangle. This event bubbles and cannot be canceled.

## Rectangle — Instance

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
> Transparency configuration for the Rectangle fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency configuration for the Rectangle content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text-wrap preference properties used as default formatting for wrapping text around objects.
> _Read Only_
>
> InCopyExportOption **incopyExportOptions**
>
> InCopy INCX document format export options.
> _Read Only_
>
> FrameFittingOption **frameFittingOptions**
>
> Frame fitting option for placed or pasted content. It may apply to a frame, an object style, a document, or the application.
> _Read Only_
>
> LockStateValues **lockState**
>
> Current lock state.
> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Anchored object configuration.
> _Read Only_
>
> ObjectExportOption **objectExportOptions**
>
> Object export options.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> Linked XML element for this object.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Linked Page Item options.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object began on a master spread and has been overridden. False means either the master-spread object has not been overridden or the object did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object whose origin is a master page. Possible return types: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items inside the Rectangle.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics inside the Rectangle.
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
> Every article that includes this page item.
> _Read Only_
>
> Number **id**
>
> Unique identifier for the Rectangle.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Containing object for this Rectangle (a Snippet, ComboBox, ListBox, TextBox, SignatureField, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, State, Cell, Character or PlaceGun).
> _Read Only_
>
> Number **index**
>
> Position of the Rectangle within its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Preference-object collection.
> _Read Only_
>
> Ovals **ovals**
>
> Ellipse collection.
> _Read Only_
>
> SplineItems **splineItems**
>
> SplineItems collection.
> _Read Only_
>
> PageItems **pageItems**
>
> PageItems collection for processing every contained item, regardless of type, in containers such as documents, pages, or groups.
> _Read Only_
>
> Rectangles **rectangles**
>
> Rectangle collection.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Graphic-line collection.
> _Read Only_
>
> TextFrames **textFrames**
>
> Text-frame collection.
> _Read Only_
>
> Polygons **polygons**
>
> Polygon collection.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Endnote text-frame collection.
> _Read Only_
>
> Paths **paths**
>
> Path collection.
> _Read Only_
>
> Sounds **sounds**
>
> Sound-clip collection.
> _Read Only_
>
> MediaItems **mediaItems**
>
> MediaItems collection.
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
> TextPaths **textPaths**
>
> Text-path collection.
> _Read Only_
>
> Movies **movies**
>
> Movie collection.
> _Read Only_
>
> HtmlItems **htmlItems**
>
> Embedded HTML page-item collection.
> _Read Only_
>
> Images **images**
>
> Bitmap-image collection; supported bitmap formats include TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Imported-graphics collection for any graphic file format, including vector, metafile, or bitmap.
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
> EPSTexts.
> _Read Only_
>
> FormFields **formFields**
>
> Form-field collection.
> _Read Only_
>
> Buttons **buttons**
>
> Button collection.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Multi-state object collection.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Checkbox collection.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Combobox collection.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Listbox collection.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Radio-button collection.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Text-box collection.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Signature-field collection.
> _Read Only_
>
> SVGs **svgs**
>
> SVG file collection.
> _Read Only_
>
> ImportedPages **importedPages**
>
> Imported InDesign pages.
> String **storyTitle**
>
> Title used for this InCopy story.
> ContentType **contentType**
>
> Content type that the frame can hold.
> Boolean **allowOverrides**
>
> True allows the master page item to be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints that apply to this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints that apply to this item under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds for the Rectangle without stroke width included, using [y1, x1, y2, x2] for the top-left and bottom-right coordinates of the bounding box.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds for the Rectangle with stroke width included, using [y1, x1, y2, x2] for the top-left and bottom-right coordinates of the bounding box.
> Swatch **fillColor**
>
> Fill swatch applied to the Rectangle, whether color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the Rectangle's fill color. Use 0 to 100 for an explicit tint; use -1 to keep the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the Rectangle fill overprint underlying objects; false makes the fill knock out colors underneath it.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight for the Rectangle, measured in points.
> Number **miterLimit**
>
> Threshold ratio between stroke width and miter length at which a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> Open-path end shape.
> EndJoin **endJoin**
>
> Corner join used by the Rectangle.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the Rectangle.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Custom dashed-line pattern measurements for dashes and gaps; supply up to six point values as [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Stroke swatch applied to the Rectangle, whether color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for an explicit tint; use -1 to keep the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Start point, in page coordinates, for a fill gradient on the Rectangle, expressed as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Length for a linear gradient, or radius for a radial gradient, used on the Rectangle fill.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the Rectangle fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Start point, in page coordinates, for a stroke gradient on the Rectangle, expressed as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Length for a linear gradient, or radius for a radial gradient, used on the Rectangle stroke.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the Rectangle stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the Rectangle stroke overprint underlying objects; false makes the stroke knock out colors underneath it.
> Swatch **gapColor**
>
> Gap swatch for a dashed, dotted, or striped stroke, whether color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint percentage. Use 0 to 100 for an explicit tint; use -1 to keep the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes it knock out colors underneath.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the Rectangle.
> Boolean **nonprinting**
>
> True prevents the Rectangle from printing.
> Layer **itemLayer**
>
> Layer containing the Rectangle.
> Boolean **locked**
>
> True locks the Rectangle.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the Rectangle.
> Number **rotationAngle**
>
> Rotation angle for the Rectangle. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle used by the Rectangle. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the Rectangle.
> Number **verticalScale**
>
> Vertical scaling applied to the Rectangle.
> Number **absoluteRotationAngle**
>
> Rectangle rotation angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Rectangle skewing angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Rectangle horizontal scale relative to its containing object.
> Number **absoluteVerticalScale**
>
> Rectangle vertical scale relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style currently applied to the Rectangle.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Indicates whether the Rectangle was flipped separately from its parent object and, when so, which direction was used.
> Boolean **visible**
>
> True means the Rectangle is visible.
> String **name**
>
> Rectangle name.
> CornerOptions **topLeftCornerOption**
>
> Corner shape assigned to rectangular shapes' top-left corner and to every corner of non-rectangular shapes. Note: corner option differs from end join because corner option can use a radius, while rounded or beveled end-join appearance depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Corner shape assigned to rectangular shapes' top-right corner.
> CornerOptions **bottomLeftCornerOption**
>
> Corner shape assigned to rectangular shapes' bottom-left corner.
> CornerOptions **bottomRightCornerOption**
>
> Corner shape assigned to rectangular shapes' bottom-right corner.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the corner effect on rectangular shapes' top-left corner and on every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the corner effect on rectangular shapes' top-right corner.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the corner effect on rectangular shapes' bottom-left corner.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the corner effect on rectangular shapes' bottom-right corner.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the Rectangle.
> Number **leftArrowHeadScale**
>
> Scale applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Property that can hold any string.
> Object **properties**
>
> Property bundle used to set several properties in one operation.

### Methods

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True requests reverse-order results. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True requests reverse-order results. (Optional) |

> **clearFrameFittingOptions**()
>
> Clears frame fitting options and returns them to the starting configuration.
> Boolean **checkOut**()
>
> Checks the story out for editing.
> Boolean **checkIn**( String **versionComments**, Boolean **forceSave** )
>
> Submits the story or stories for check-in.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> Boolean **revert**()
>
> Restores the document to the state from the most recent save operation.
> **bringToFront**( PageItem **reference** )
>
> Moves the Rectangle to the front of its layer or before a specific item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object is brought in front of; it must have the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the Rectangle to the back of its layer or behind a specific item that has the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object is sent behind. (Optional) |

> **bringForward**()
>
> Moves the Rectangle one level forward within its layer.
> **sendBackward**()
>
> Moves the Rectangle one level backward within its layer.
> PageItem **makeCompoundPath**( PageItem **with** )
>
> Builds a compound path from the Rectangle path(s) together with paths from other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Other objects whose paths are included in the new compound path. |

> PageItem **releaseCompoundPath**()
>
> Breaks apart a compound path.
> PageItem **intersectPath**( PageItem **with** )
>
> Creates a page item from the intersection of the Rectangle and other objects. An error is returned when the objects do not intersect.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects used for the intersection. |

> PageItem **addPath**( PageItem **with** )
>
> Creates a page item by combining the Rectangle with other objects. Objects are deleted when they do not intersect.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to add. |

> PageItem **subtractPath**( PageItem **with** )
>
> Creates a page item by subtracting overlapping regions of the Rectangle and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to subtract. |

> PageItem **minusBack**( PageItem **with** )
>
> Creates a page item by reverse-subtracting overlapping regions of the Rectangle and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to reverse subtract. |

> PageItem **excludeOverlapPath**( PageItem **with** )
>
> Creates a page item while excluding overlapping regions of the Rectangle and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to exclude. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the Rectangle into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the Rectangle. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Inset percentage for the star-shaped result. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius assigned to the produced shape. (Optional) |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Stores the object in the chosen library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the object. |
| Object | withProperties | Properties to apply when creating the Rectangle. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Writes the supplied value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> **placeXML**( XMLElement **using** )
>
> Places XML content into the specified object. Note: any existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose content should be placed. |

> **autoTag**()
>
> Tags the object or parent story using default tags defined in XML preference.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | Element node. |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places the referenced file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Boolean | showingOptions | Whether the import options dialog is shown. (Optional) |
| Object | withProperties | Properties to apply to placed object(s). (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Creates an override for a master page item, placing the resulting object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page that contains the master page item being overridden. |

> **removeOverride**()
>
> Clears the override from a master page item that was previously overridden.
> **detach**()
>
> Separates an overridden master page item from its master page.
> **remove**()
>
> Removes the Rectangle.
> **fit**( FitOptions **given** )
>
> Uses the specified fit option on frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip on the Rectangle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the Rectangle. |
| Mixed | around | Flip-center point for the Rectangle. Accepted forms: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Duplicates the Rectangle at the specified location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination for the new Rectangle as [x, y] coordinates. Accepted forms: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount for the new Rectangle from the original Rectangle's position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the Rectangle. Note: one of the 'to' or 'by' parameters is required; when both are supplied, only the to value is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New Rectangle location as (x, y). Accepted forms: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset that shifts the Rectangle from its current position, expressed with coordinates (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | True clears existing Rectangle attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | True clears Rectangle attributes and formatting that are outside the object style definition. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> **clearTransformations**()
>
> Clears Rectangle transformations, covering rotate, scale, flip, fit, and shear operations.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Accepted forms: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Accepted forms: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to evaluate; supplying this optional parameter replaces current transform components on the target with new values. When omitted, the supplied matrix is concatenated with the target's current transform so both effects combine. Accepted forms: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True makes a ruler-based origin use ruler units rather than points; false is the default. This only matters for a page-relative reference point. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Gets transformation values for the page item.

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
| Mixed | location | Requested location. Accepted forms: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | True makes a ruler location use ruler units rather than points; false is the default. This only matters for a page-relative reference point. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors left on the item. The default is \{1.0, 1.0}. (Optional) |
