# Oval (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Fires before an Oval is placed. Bubbles: yes. Cancelable: yes.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Fires after an Oval is placed. Bubbles: yes. Cancelable: no.

## Oval — Instance

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
> Transparency configuration for the Oval fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency configuration for Oval content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties used as default formatting for wrapping text around objects.
> _Read Only_
>
> InCopyExportOption **incopyExportOptions**
>
> InCopy INCX document format export options.
> _Read Only_
>
> FrameFittingOption **frameFittingOptions**
>
> Frame fitting option applied to placed or pasted content. It can apply to a frame, object style, document, or the application.
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
> Oval-linked XML element.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Linked Page Item options.
> _Read Only_
>
> Boolean **overridden**
>
> True when the object came from a master spread and has been overridden. False means it either came from a master spread without being overridden or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden source object from the master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained by the Oval.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained by the Oval.
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
> Unique ID for the Oval.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for Oval; possible parent types are Snippet, ComboBox, ListBox, TextBox, SignatureField, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, State, Cell, Character, or PlaceGun.
> _Read Only_
>
> Number **index**
>
> Position of the Oval inside its containing object.
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
> Page items collection for processing every page item in a container, such as a document, page, or group, without regard to type.
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
> Sounds **sounds**
>
> Collection of sound clips.
> _Read Only_
>
> MediaItems **mediaItems**
>
> Media items collection.
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
> Collection of text paths.
> _Read Only_
>
> Movies **movies**
>
> Collection of movies.
> _Read Only_
>
> HtmlItems **htmlItems**
>
> Collection of embedded HTML page items.
> _Read Only_
>
> Images **images**
>
> Bitmap-image collection for bitmap file formats, including TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Collection of imported graphics in any graphic file format, including vector, metafile, or bitmap.
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
> EPSTexts
> _Read Only_
>
> FormFields **formFields**
>
> Collection of form fields.
> _Read Only_
>
> Buttons **buttons**
>
> Collection of buttons.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Collection of multi-state objects.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Collection of checkboxes.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Collection of comboboxes.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Collection of listboxes.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Collection of radio buttons.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Collection of text boxes.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Collection of signature fields.
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
> Title assigned to this InCopy story.
> ContentType **contentType**
>
> Content type that a frame can hold.
> Boolean **allowOverrides**
>
> True permits the master page item to be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints used by this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints used by this item under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Oval bounds without stroke width, formatted as [y1, x1, y2, x2] for the top-left and bottom-right bounding-box corners.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Oval bounds including stroke width, formatted as [y1, x1, y2, x2] for the top-left and bottom-right bounding-box corners.
> Swatch **fillColor**
>
> Swatch applied to the Oval fill, such as color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the Oval's fill color. Use 0 to 100 for a tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the Oval's fill color overprint underlying objects. False makes the fill color knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight for the Oval, in points.
> Number **miterLimit**
>
> Ratio limit between stroke width and miter length where a pointed join changes to a squared-off bevel join.
> EndCap **endCap**
>
> End shape for an open path.
> EndJoin **endJoin**
>
> Corner join used by the Oval.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the Oval.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements defining a custom dashed-line pattern. Define up to six point values in the format [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead at the path end.
> Swatch **strokeColor**
>
> Swatch applied to the Oval stroke, such as color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for a tint percent; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient applied to the Oval fill, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the Oval fill, this is the linear-gradient length or radial-gradient radius.
> Number **gradientFillAngle**
>
> Linear-gradient angle applied to the Oval fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient applied to the Oval stroke, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the Oval stroke, this is the linear-gradient length or radial-gradient radius.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle applied to the Oval stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the Oval's stroke color overprint underlying objects. False makes the stroke color knock out underlying colors.
> Swatch **gapColor**
>
> Swatch applied to the gap of a dashed, dotted, or striped stroke, such as color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap color tint percentage. Use 0 to 100 for a tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors. False makes the gap color knock out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the Oval.
> Boolean **nonprinting**
>
> True prevents the Oval from printing.
> Layer **itemLayer**
>
> Layer containing the Oval.
> Boolean **locked**
>
> True indicates a locked Oval.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the Oval.
> Number **rotationAngle**
>
> Rotation angle for the Oval. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the Oval. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the Oval.
> Number **verticalScale**
>
> Vertical scaling applied to the Oval.
> Number **absoluteRotationAngle**
>
> Oval rotation angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Oval skewing angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Oval horizontal scale relative to its containing object.
> Number **absoluteVerticalScale**
>
> Oval vertical scale relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the Oval.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Shows whether the Oval has been flipped independently of its parent object and, when it has, the flip direction.
> Boolean **visible**
>
> True means the Oval is visible.
> String **name**
>
> Name of the Oval.
> CornerOptions **topLeftCornerOption**
>
> Corner shape for the top left corner of rectangular shapes and for every corner of non-rectangular shapes. Note: corner option differs from end join because corner option can set a corner radius, while the rounded or beveled result of an end join depends on stroke weight.
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
> Measurement-unit radius for the corner effect on the top left rectangular corner and every non-rectangular corner.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the top-right rectangular corner effect.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the bottom-left rectangular corner effect.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the bottom-right rectangular corner effect.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the Oval.
> Number **leftArrowHeadScale**
>
> Scale applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> String-valued label property.
> Object **properties**
>
> Property bag used to assign several properties in one operation.

### Methods

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns results in reverse order. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns results in reverse order. (Optional) |

> **clearFrameFittingOptions**()
>
> Clears frame fitting options and returns them to their starting state.
> Boolean **checkOut**()
>
> Performs story checkout.
> Boolean **checkIn**( String **versionComments**, Boolean **forceSave** )
>
> Performs check-in for the story or stories.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | versionComments | Comment for this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> Boolean **revert**()
>
> Restores the document to the state from its most recent save operation.
> **bringToFront**( PageItem **reference** )
>
> Places the Oval at the front of its layer, or ahead of a specific item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object is brought in front of; it must have the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the Oval to the back of its layer, or behind a specific item that must share the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object is sent behind. (Optional) |

> **bringForward**()
>
> Moves the Oval forward by one level in its layer.
> **sendBackward**()
>
> Moves the Oval back by one level in its layer.
> PageItem **makeCompoundPath**( PageItem **with** )
>
> Builds a compound path by combining the Oval path or paths with paths from other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Other objects that contribute paths to the compound path being created. |

> PageItem **releaseCompoundPath**()
>
> Breaks apart a compound path.
> PageItem **intersectPath**( PageItem **with** )
>
> Creates a new page item from overlap between the Oval and other objects. If no intersection exists, an error is returned.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to intersect with. |

> PageItem **addPath**( PageItem **with** )
>
> Combines the Oval with other objects to create a new page item. Non-intersecting objects are deleted.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to add. |

> PageItem **subtractPath**( PageItem **with** )
>
> Subtracts the Oval's overlapping areas with other objects to create a new page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to subtract. |

> PageItem **minusBack**( PageItem **with** )
>
> Reverse-subtracts overlapping areas between the Oval and other objects, producing a new page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to reverse subtract. |

> PageItem **excludeOverlapPath**( PageItem **with** )
>
> Excludes overlapping areas between the Oval and other objects, producing a new page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to exclude. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the Oval into a different shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the Oval. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Resulting polygon's star inset percentage. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the resulting rectangle. (Optional) |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library where the object is stored. |
| Object | withProperties | Starting property values for the new Oval (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the supplied label key.

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
| XMLElement | using | XML element containing the content to place. |

> **autoTag**()
>
> Applies default tags defined in XML preference to the object or parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to use. |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places a selected file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File that will be placed |
| Boolean | showingOptions | Controls whether the import options dialog appears (Optional) |
| Object | withProperties | Starting property values for the placed object(s) (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Creates an override of a master page item and puts the new object on the document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item being overridden. |

> **removeOverride**()
>
> Clears an override from a master page item.
> **detach**()
>
> Separates the overridden item from its master page.
> **remove**()
>
> Deletes the Oval.
> **fit**( FitOptions **given** )
>
> Uses the specified fit option on frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option applied. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs an Oval flip.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the Oval. |
| Mixed | around | Point used as the flip center. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Duplicates the Oval at the specified location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Location for the new Oval, given as [x, y] coordinates. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount for the new Oval relative to the original Oval's position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the Oval. Supply either `to` or `by`; when both are present, InDesign uses `to` and ignores `by`.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Target position for the Oval, written as (x, y). Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset, in measurement units, applied from the Oval's current position and written as (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Assigns the requested object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | ObjectStyle value that should be assigned. |
| Boolean | clearingOverrides | When true, existing Oval attributes are removed before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, formatting and attributes on the Oval that are outside the object style definition are removed. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object-style overrides.
> **clearTransformations**()
>
> Removes Oval transformations, including shearing, fitting, flipping, scaling, and rotation.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform operation to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation |
| Mixed | from | Temporary transformation origin. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transform. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Specifies transform components to evaluate; when this optional argument is provided, matching existing target components are swapped for new values. If omitted, the supplied matrix is concatenated with the target's current transform so both effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is read in ruler units instead of points. The default value is false. Only page-relative reference points use this setting. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the lookup |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Calculates coordinates for the requested location in the chosen coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space for interpreting the location. |
| Boolean | consideringRulerUnits | When true, a ruler location is evaluated with ruler units rather than points. The default value is false. Only page-relative reference points use this setting. (Optional) |

> **redefineScaling**( Number **to** )
>
> Pushes the item's scaling into its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors to leave on the item. The default is \{1.0, 1.0}. (Optional) |
