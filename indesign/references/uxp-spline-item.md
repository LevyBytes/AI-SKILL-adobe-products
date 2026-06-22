# Spline Item (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Path-based page item, for example a rectangle, oval, polygon, or graphic line.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a SplineItem is placed. The event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after placement of a SplineItem. The event bubbles, but it is not cancelable.

## Instance

> _Read Only_
>
> LockStateValues **lockState**
>
> Current locking condition.
> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings used for the anchored object.
> _Read Only_
>
> ObjectExportOption **objectExportOptions**
>
> Object-specific export option settings.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element tied to this SplineItem.
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
> Transparency configuration for the fill assigned to the SplineItem.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency configuration for the SplineItem content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties controlling default formatting when text wraps around objects.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked page items.
> _Read Only_
>
> Boolean **overridden**
>
> True indicates the object came from a master spread and has been overridden. False means the object either remains an unoverridden master-spread item or was not created from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object whose origin is a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items held inside the SplineItem.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics held inside the SplineItem.
> _Read Only_
>
> Page **parentPage**
>
> Page where this page item is displayed.
> _Read Only_
>
> AnimationSetting **animationSettings**
>
> Animation settings assigned to the page item.
> _Read Only_
>
> TimingSetting **timingSettings**
>
> Timing settings for the object.
> _Read Only_
>
> Article **allArticles**
>
> Complete set of articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the SplineItem.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Container that owns this SplineItem: Snippet, ComboBox, ListBox, TextBox, SignatureField, Spread, MasterSpread, Polygon, GraphicLine, Rectangle, Oval, SplineItem, Group, State, Cell, Character or PlaceGun.
> _Read Only_
>
> Number **index**
>
> Position of the SplineItem inside its container object.
> _Read Only_
>
> Preferences **preferences**
>
> Group of preferences objects.
> _Read Only_
>
> Ovals **ovals**
>
> Group of ellipses.
> _Read Only_
>
> SplineItems **splineItems**
>
> Collection containing spline items.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection of page items for processing every page item in a container, such as a document, page, or group, without filtering by type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Group of rectangles.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Group of graphic lines.
> _Read Only_
>
> TextFrames **textFrames**
>
> Group of text frames.
> _Read Only_
>
> Polygons **polygons**
>
> Group of polygons.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Group of endnote text frames.
> _Read Only_
>
> Paths **paths**
>
> Group of paths.
> _Read Only_
>
> Sounds **sounds**
>
> Group of sound clips.
> _Read Only_
>
> MediaItems **mediaItems**
>
> Collection containing media items.
> _Read Only_
>
> Events **events**
>
> Group of events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Group of event listeners.
> _Read Only_
>
> TextPaths **textPaths**
>
> Group of text paths.
> _Read Only_
>
> Movies **movies**
>
> Group of movies.
> _Read Only_
>
> HtmlItems **htmlItems**
>
> Group of embedded HTML page items.
> _Read Only_
>
> Images **images**
>
> Bitmap-image collection; supported bitmap file formats include TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Imported-graphics collection; supported graphic file formats include vector, metafile, or bitmap.
> _Read Only_
>
> EPSs **epss**
>
> Group of EPS files.
> _Read Only_
>
> WMFs **wmfs**
>
> Group of WMF graphics.
> _Read Only_
>
> PICTs **picts**
>
> Group of PICT graphics.
> _Read Only_
>
> PDFs **pdfs**
>
> Group of PDF files.
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
> Group of form fields.
> _Read Only_
>
> Buttons **buttons**
>
> Group of buttons.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Group of multi-state objects.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Group of checkboxes.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Group of comboboxes.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Group of listboxes.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Group of radio buttons.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Group of text boxes.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Group of signature fields.
> _Read Only_
>
> SVGs **svgs**
>
> Group of SVG files.
> _Read Only_
>
> ImportedPages **importedPages**
>
> Imported InDesign pages.
> ContentType **contentType**
>
> Content category that a frame is able to contain.
> Boolean **allowOverrides**
>
> True permits the master page item to be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied to this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied to this item under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds for the SplineItem without stroke width, formatted as [y1, x1, y2, x2] for the bounding box's top-left and bottom-right coordinates.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds for the SplineItem with stroke width included, formatted as [y1, x1, y2, x2] for the bounding box's top-left and bottom-right coordinates.
> Swatch **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the SplineItem fill. . Can also accept: String.
> Number **fillTint**
>
> Tint percentage for the SplineItem's fill color. Use a number from 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the SplineItem's fill color overprint objects underneath; false makes the fill knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight, in points, assigned to the SplineItem.
> Number **miterLimit**
>
> Maximum stroke-width to miter-length ratio before a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join used by the SplineItem.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment assigned to the SplineItem.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements defining a custom dashed-line pattern. Provide up to six point values in the format [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead placed at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead placed at the path end.
> Swatch **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the SplineItem stroke. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use a number from 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient used on the SplineItem fill, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Length for a linear gradient, or radius for a radial gradient, used on the SplineItem fill.
> Number **gradientFillAngle**
>
> Linear-gradient angle used for the SplineItem fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient used on the SplineItem stroke, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Length for a linear gradient, or radius for a radial gradient, used on the SplineItem stroke.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle used for the SplineItem stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the SplineItem's stroke color overprint objects underneath; false makes the stroke knock out underlying colors.
> Swatch **gapColor**
>
> Gap swatch for dashed, dotted, or striped strokes; color, gradient, tint, or mixed ink can be used. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint percentage. Use a number from 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes the gap color knock out those colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment assigned to the SplineItem.
> Boolean **nonprinting**
>
> True prevents the SplineItem from printing.
> Layer **itemLayer**
>
> Layer containing the SplineItem.
> Boolean **locked**
>
> True indicates a locked SplineItem.
> DisplaySettingOptions **localDisplaySetting**
>
> Display-performance options for the SplineItem.
> Number **rotationAngle**
>
> Rotation angle for the SplineItem. (Range: -360 to 360)
> Number **shearAngle**
>
> Skew angle assigned to the SplineItem. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling assigned to the SplineItem.
> Number **verticalScale**
>
> Vertical scaling assigned to the SplineItem.
> Number **absoluteRotationAngle**
>
> Rotation angle of the SplineItem measured relative to its container object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Skew angle of the SplineItem measured relative to its container object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the SplineItem measured relative to its container object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the SplineItem measured relative to its container object.
> ObjectStyle **appliedObjectStyle**
>
> Object style assigned to the SplineItem.
> Flip **flip**
>
> Direction used when flipping the printed image.
> Flip **absoluteFlip**
>
> Shows whether the SplineItem has been flipped apart from its parent object and, when applicable, the flip direction used for the SplineItem.
> Boolean **visible**
>
> True makes the SplineItem visible.
> String **name**
>
> Name assigned to the SplineItem.
> CornerOptions **topLeftCornerOption**
>
> For top-left rectangle corners, and for every corner on non-rectangular shapes, this selects the corner shape. Note: unlike end join, corner option has its own radius; rounded or beveled end-join appearance is controlled by stroke weight.
> CornerOptions **topRightCornerOption**
>
> For rectangular shapes, selects the top-right corner shape.
> CornerOptions **bottomLeftCornerOption**
>
> For rectangular shapes, selects the bottom-left corner shape.
> CornerOptions **bottomRightCornerOption**
>
> For rectangular shapes, selects the bottom-right corner shape.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the top-left rectangle corner effect and for every non-rectangular corner effect.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the top-right rectangle corner effect.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the bottom-left rectangle corner effect.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the bottom-right rectangle corner effect.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment assigned to the SplineItem.
> Number **leftArrowHeadScale**
>
> Scale applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Property that accepts any string value.
> Object **properties**
>
> Property for assigning several properties in a single operation.

### Methods

> Boolean **checkOut**()
>
> Checks the story out.
> Boolean **checkIn**( String **versionComments**, Boolean **forceSave** )
>
> Checks the story or stories in.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | versionComments | Comment text for this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> Boolean **revert**()
>
> Restores the document to the condition it had at the most recent save.
> **bringToFront**( PageItem **reference** )
>
> Moves the SplineItem to the front of its layer, or positions it ahead of a chosen item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object before which this object is moved; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the SplineItem to the back of its layer or behind a chosen item; the objects must share the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object behind which this object is moved. (Optional) |

> **bringForward**()
>
> Advances the SplineItem one stacking level within its layer.
> **sendBackward**()
>
> Moves the SplineItem one stacking level backward within its layer.
> PageItem **makeCompoundPath**( PageItem **with** )
>
> Builds a compound path from the SplineItem path or paths together with paths from other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Other objects contributing paths to the compound path being created. |

> PageItem **releaseCompoundPath**()
>
> Breaks apart a compound path.
> PageItem **intersectPath**( PageItem **with** )
>
> Produces a new page item from the intersection between the SplineItem and other objects. An error is returned when the objects have no intersection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects used for the intersection. |

> PageItem **addPath**( PageItem **with** )
>
> Produces a new page item by combining the SplineItem with other objects. Objects that do not intersect are deleted.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to combine. |

> PageItem **subtractPath**( PageItem **with** )
>
> Produces a new page item by removing overlapping regions shared by the SplineItem and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects used as the subtraction source. |

> PageItem **minusBack**( PageItem **with** )
>
> Produces a new page item by applying reverse subtraction to the overlapping regions of the SplineItem and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects used for reverse subtraction. |

> PageItem **excludeOverlapPath**( PageItem **with** )
>
> Produces a new page item with the overlapping regions of the SplineItem and other objects excluded.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects whose overlap is excluded. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the SplineItem into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the SplineItem. |
| Number | numberOfSides | Side count for the polygon that results. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Star inset percentage for the polygon that results. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius for the rectangle that results. (Optional) |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Adds the object to the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library where the object will be stored. |
| Object | withProperties | Starting property values for the new SplineItem. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the label value associated with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> **placeXML**( XMLElement **using** )
>
> Inserts XML content into the target object. Note: Existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose content is placed. |

> **autoTag**()
>
> Tags the object or its parent story using the default tags defined in XML preference.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element without discarding existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the result order. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the result order. (Optional) |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File that will be placed. |
| Boolean | showingOptions | Whether the import options dialog is shown. (Optional) |
| Object | withProperties | Starting property values for the placed object or objects. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Creates a new document-page object by overriding a master page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Clears the override from a master page item after it has been overridden.
> **detach**()
>
> Breaks the link between an overridden page item and its master page.
> **remove**()
>
> Deletes the SplineItem.
> **fit**( FitOptions **given** )
>
> Applies the specified fitting option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip on the SplineItem.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the SplineItem. |
| Mixed | around | Flip center point. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Duplicates the SplineItem at a specified destination or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination coordinates for the new SplineItem, formatted as [x, y]. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset from the original SplineItem position to the duplicated SplineItem. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the SplineItem. Note: Either the 'to' or 'by' parameter is required; when both are supplied, only the to value is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination coordinate pair for the SplineItem, formatted as (x, y). Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset that moves the SplineItem from its current position, in the format (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Applies the specified object style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style to apply. |
| Boolean | clearingOverrides | True clears the SplineItem's current attributes before the style is applied. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | True removes SplineItem attributes and formatting that are absent from the object style definition. (Optional) |

> **clearObjectStyleOverrides**()
>
> Clears object style overrides.
> **clearTransformations**()
>
> Strips rotation, scaling, flipping, fitting, and shearing transformations from the SplineItem.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to evaluate; when this optional parameter is provided, current transform components on the target are replaced with new values. Without it, the given matrix is concatenated onto the target's current transform, combining both effects. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin with ruler units instead of points. Defaults to false. It only affects reference points specified relative to a page. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Returns coordinates for the requested location in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units instead of points. Defaults to false. It only affects reference points specified relative to a page. (Optional) |

> **redefineScaling**( Number **to** )
>
> Applies an item's scaling to its content when possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors that remain on the item. The default is \{1.0, 1.0}. (Optional) |
