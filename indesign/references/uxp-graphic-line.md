# Graphic Line (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Straight line made from two points.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Fires before a GraphicLine is placed. This event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Fires after a GraphicLine is placed. This event bubbles and cannot be canceled.

## Instance

> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> General transparency settings.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Transparency controls for the stroke.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Transparency controls applied to the GraphicLine fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency controls for GraphicLine content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties used as defaults when wrapping text around objects.
> _Read Only_
>
> LockStateValues **lockState**
>
> Current lock state.
> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings for anchored objects.
> _Read Only_
>
> ObjectExportOption **objectExportOptions**
>
> Object export options.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> GraphicLine-associated XML element.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked page items.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden. False means it either remains unoverridden on a master spread or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Represents an overridden master-page object. Returns one of: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> Lists every page item contained by the GraphicLine.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic contained by the GraphicLine.
> _Read Only_
>
> Page **parentPage**
>
> Page where this page item appears.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Animation settings for this page item.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Timing settings for this object.
> _Read Only_
>
> Article **allArticles**
>
> All articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the GraphicLine.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the GraphicLine. Possible parent types include Snippet, ComboBox, ListBox, TextBox, or SignatureField; Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, or Oval; and Group, State, Cell, Character, or PlaceGun.
> _Read Only_
>
> Number **index**
>
> Position of the GraphicLine inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preference objects.
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
> Container-wide PageItems collection; it covers every page item regardless of type for containers such as a document, page, or group.
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
> EndnoteTextFrames **endnoteTextFrames**
>
> Endnote text frame collection.
> _Read Only_
>
> Paths **paths**
>
> Path collection.
> _Read Only_
>
> Sounds **sounds**
>
> Sound clip collection.
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
> Text path collection.
> _Read Only_
>
> Movies **movies**
>
> Movie collection.
> _Read Only_
>
> HtmlItems **htmlItems**
>
> Embedded HTML page item collection.
> _Read Only_
>
> Images **images**
>
> Bitmap image collection for bitmap file formats, including TIFF, JPEG, or GIF.
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
> FormFields **formFields**
>
> Form field collection.
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
> Radio button collection.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Text box collection.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Signature field collection.
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
> ContentType **contentType**
>
> Content type allowed in a frame.
> Boolean **allowOverrides**
>
> True when the master page item may be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Object-based layout rule constraints for left margin, width, and right margin.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Object-based layout rule constraints for top margin, height, and bottom margin.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> GraphicLine bounds without stroke width, expressed as [y1, x1, y2, x2] coordinates for the top-left and bottom-right bounding-box corners.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> GraphicLine bounds including stroke width, expressed as [y1, x1, y2, x2] coordinates for the top-left and bottom-right bounding-box corners.
> Swatch **fillColor**
>
> Swatch applied to the GraphicLine fill, such as color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the GraphicLine fill color. Use 0 to 100 for an explicit tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the GraphicLine fill color overprint underlying objects; false makes it knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, for the GraphicLine.
> Number **miterLimit**
>
> Ratio limit between stroke width and miter length where a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> End shape used for an open path.
> EndJoin **endJoin**
>
> Corner join used by the GraphicLine.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the GraphicLine.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> The sequence [dash1, gap1, dash2, gap2, dash3, gap3] holds up to six point measurements for a custom dashed-line pattern.
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Swatch applied to the GraphicLine stroke, such as color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for an explicit tint percent, or -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Page-coordinate starting point for a gradient on the GraphicLine fill, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Length for a linear gradient, or radius for a radial gradient, used on the GraphicLine fill.
> Number **gradientFillAngle**
>
> Angle for a linear gradient on the GraphicLine fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Page-coordinate starting point for a gradient on the GraphicLine stroke, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Length for a linear gradient, or radius for a radial gradient, used on the GraphicLine stroke.
> Number **gradientStrokeAngle**
>
> Angle for a linear gradient on the GraphicLine stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the GraphicLine stroke color overprint underlying objects; false makes it knock out underlying colors.
> Swatch **gapColor**
>
> Swatch applied to the gap of a dashed, dotted, or striped stroke, such as color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap color tint as a percentage. Use 0 to 100 for an explicit tint percent, or -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes it knock those colors out.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the GraphicLine.
> Boolean **nonprinting**
>
> True prevents the GraphicLine from printing.
> Layer **itemLayer**
>
> Layer containing the GraphicLine.
> Boolean **locked**
>
> Locked state is true for the GraphicLine.
> DisplaySettingOptions **localDisplaySetting**
>
> Local display-performance setting for the GraphicLine.
> Number **rotationAngle**
>
> GraphicLine rotation angle. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the GraphicLine. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scale applied to the GraphicLine.
> Number **verticalScale**
>
> Vertical scale applied to the GraphicLine.
> Number **absoluteRotationAngle**
>
> GraphicLine rotation angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> GraphicLine skewing angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> GraphicLine horizontal scale relative to its containing object.
> Number **absoluteVerticalScale**
>
> GraphicLine vertical scale relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style used by the GraphicLine.
> Flip **flip**
>
> Printed image flip direction.
> Flip **absoluteFlip**
>
> Reports whether the GraphicLine was flipped separately from its parent object and, when so, the flip direction.
> Boolean **visible**
>
> True when the GraphicLine is visible.
> String **name**
>
> Stores the GraphicLine name.
> CornerOptions **topLeftCornerOption**
>
> For rectangular shapes, controls the top left corner; for non-rectangular shapes, controls every corner. Note: a corner option can use a radius, while an end join's rounded or beveled appearance depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Shape assigned to a rectangular shape's top right corner.
> CornerOptions **bottomLeftCornerOption**
>
> Shape assigned to a rectangular shape's bottom left corner.
> CornerOptions **bottomRightCornerOption**
>
> Shape assigned to a rectangular shape's bottom right corner.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the rectangular top-left corner effect and, on non-rectangular shapes, every corner effect.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the rectangular shape's top right corner effect.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the rectangular shape's bottom left corner effect.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the rectangular shape's bottom right corner effect.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the GraphicLine.
> Number **leftArrowHeadScale**
>
> Scale applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Stores any string assigned as the label.
> Object **properties**
>
> Allows several property values to be assigned together.

### Methods

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | Set to true to reverse the result order. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value, then replaces them using the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | Set to true to reverse the result order. (Optional) |

> Boolean **checkOut**()
>
> Checks the story out.
> Boolean **checkIn**( String **versionComments**, Boolean **forceSave** )
>
> Checks in one or more stories.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | versionComments | Comment recorded for this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> Boolean **revert**()
>
> Restores the document to its state from the most recent save.
> **bringToFront**( PageItem **reference** )
>
> Moves the GraphicLine to the front of its layer or ahead of a specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object the item should be moved in front of; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the GraphicLine to the back of its layer or behind a specified item that shares the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object the item should be moved behind. (Optional) |

> **bringForward**()
>
> Moves the GraphicLine one level forward in its layer.
> **sendBackward**()
>
> Moves the GraphicLine one level backward in its layer.
> PageItem **makeCompoundPath**( PageItem **with** )
>
> Builds a compound path by combining the GraphicLine path or paths with paths from other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Other objects whose paths should be included in the compound path. |

> PageItem **releaseCompoundPath**()
>
> Breaks apart a compound path.
> PageItem **intersectPath**( PageItem **with** )
>
> Creates a page item from the intersection of the GraphicLine and other objects; non-intersecting objects produce an error.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects used for the intersection. |

> PageItem **addPath**( PageItem **with** )
>
> Creates a page item by combining the GraphicLine with other objects, deleting the objects when they do not intersect.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to add. |

> PageItem **subtractPath**( PageItem **with** )
>
> Creates a page item by subtracting overlapping areas between the GraphicLine and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to subtract. |

> PageItem **minusBack**( PageItem **with** )
>
> Creates a page item by reverse-subtracting overlapping areas between the GraphicLine and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects used for reverse subtraction. |

> PageItem **excludeOverlapPath**( PageItem **with** )
>
> Creates a page item by excluding overlap between the GraphicLine and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects whose overlap should be excluded. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the GraphicLine into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the GraphicLine. |
| Number | numberOfSides | Side count for the resulting polygon. Allowed range: 3 through 100. (Optional) |
| Number | insetPercentage | Inset percentage used for the resulting polygon's star shape. Allowed range: 0.0 through 100.0. (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the resulting rectangle. (Optional) |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Adds the object to the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that will receive the object. |
| Object | withProperties | Starting property values for the new GraphicLine. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Writes a label entry by pairing the specified key with the supplied value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key for the label entry. |
| String | value | Value stored for that key. |

> **placeXML**( XMLElement **using** )
>
> Places XML content into the specified object. Note: Existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element that supplies the content to place. |

> **autoTag**()
>
> Applies default tags from XML preference to the object or its parent story.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Imports the file into place.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File to place. |
| Boolean | showingOptions | Whether the import options dialog should be shown. (Optional) |
| Object | withProperties | Starting property values for the placed object or objects. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Overrides a master page item and creates its document-page object on destinationPage.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page holding the master page item to override. |

> **removeOverride**()
>
> Clears the override from a master page item that was previously overridden.
> **detach**()
>
> Disconnects an overridden master page item from the master page.
> **remove**()
>
> Removes the GraphicLine.
> **fit**( FitOptions **given** )
>
> Applies the specified fit option to content inside a frame.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Mirrors the GraphicLine according to the supplied flip settings.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the GraphicLine. |
| Mixed | around | Origin point for the GraphicLine flip. Accepted forms: AnchorPoint enumerator or Array of 2 Units. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a copy of the GraphicLine at a specified location or by applying an offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Target location for the new GraphicLine as [x, y] coordinates. Accepted forms: Spread, Page, Layer, or Array of 2 Units. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset from the original GraphicLine position to the duplicate, expressed as (x, y). (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the GraphicLine. Note: supply either the 'to' or 'by' parameter; if both are present, the to value takes precedence.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Target position for the GraphicLine, expressed as (x, y). Accepted forms: Spread, Page, Layer, or Array of 2 Units. (Optional) |
| Measurement Unit (Number or String)=any | by | Relative movement amount in measurement units, expressed as (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the object style supplied to the call.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | ObjectStyle value to apply. |
| Boolean | clearingOverrides | When true, existing GraphicLine attributes are cleared before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, removes GraphicLine attributes and formatting that the object style does not define. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object-style overrides.
> **clearTransformations**()
>
> Removes rotation, scaling, flipping, fitting, and shearing transformations from the GraphicLine.
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
