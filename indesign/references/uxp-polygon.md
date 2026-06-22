# Polygon (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

A polygon is any non-rectangle, non-ellipse shape that is also not a graphic line. Adding one in InDesign creates a regular polygon from the current polygon preference settings.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before placement of a Polygon. This event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after placement of a Polygon. This event bubbles and cannot be canceled.

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
> Settings controlling transparency for the Polygon fill.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Settings controlling transparency for Polygon content.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default properties used when formatting text wrapping around objects.
> _Read Only_
>
> InCopyExportOption **incopyExportOptions**
>
> Options used to export to the InCopy INCX document format.
> _Read Only_
>
> FrameFittingOption **frameFittingOptions**
>
> Frame-fitting behavior for placed or pasted content; usable on frames, object styles, documents, or the application.
> _Read Only_
>
> LockStateValues **lockState**
>
> Current lock state.
> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Anchored-object configuration.
> _Read Only_
>
> ObjectExportOption **objectExportOptions**
>
> Export configuration for this object.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked with the Polygon.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Linked Page Item configuration.
> _Read Only_
>
> Boolean **overridden**
>
> True means the object came from a master spread and has been overridden. False means it either came from a master spread without being overridden or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Master-page object after override. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained inside the Polygon.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained inside the Polygon.
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
> Unique ID assigned to the Polygon.
> _Read Only_
>
> Boolean **isValid**
>
> Resolves to true when the object specifier points at valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Polygon parent. Possible values: Snippet, ComboBox, ListBox, TextBox, SignatureField, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, State, Cell, Character or PlaceGun.
> _Read Only_
>
> Number **index**
>
> Position of the Polygon inside its containing object.
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
> Spline item collection.
> _Read Only_
>
> PageItems **pageItems**
>
> Page item collection used to process every page item in a container such as a document, page, or group, independent of type.
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
> Media item collection.
> _Read Only_
>
> Events **events**
>
> Event object collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener object collection.
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
> Bitmap image collection covering any bitmap format, including TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Imported graphic collection covering any graphic format, including vector, metafile, or bitmap.
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
> String **storyTitle**
>
> Title assigned to this InCopy story.
> ContentType **contentType**
>
> Content category that a frame can hold.
> Boolean **allowOverrides**
>
> When true, the master page item can be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Polygon bounds excluding stroke width, expressed as [y1, x1, y2, x2] coordinates for the bounding box's top-left and bottom-right corners.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Polygon bounds including stroke width, expressed as [y1, x1, y2, x2] coordinates for the bounding box's top-left and bottom-right corners.
> Swatch **fillColor**
>
> Swatch applied to the Polygon fill, such as a color, gradient, tint, or mixed ink. . Can also accept: String.
> Number **fillTint**
>
> Tint percentage used for the Polygon's fill color. Use a number from 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> When true, the Polygon's fill color overprints objects beneath it. When false, the fill knocks out the colors below.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight to apply to the Polygon, in points.
> Number **miterLimit**
>
> Ratio limit between stroke width and miter length before a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> Shape used at the end of an open path.
> EndJoin **endJoin**
>
> Corner join used by the Polygon.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the Polygon.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed-line pattern. Define up to six point values in the format [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the start of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the end of the path.
> Swatch **strokeColor**
>
> Swatch applied to the Polygon stroke, such as a color, gradient, tint, or mixed ink. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage used for object's stroke color. Use a number from 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point for a fill gradient on the Polygon, in page coordinates and formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the Polygon fill, defines linear-gradient length or radial-gradient radius.
> Number **gradientFillAngle**
>
> Angle for a linear gradient applied to the Polygon fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point for a stroke gradient on the Polygon, in page coordinates and formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the Polygon stroke, defines linear-gradient length or radial-gradient radius.
> Number **gradientStrokeAngle**
>
> Angle for a linear gradient applied to the Polygon stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> When true, the Polygon's stroke color overprints objects beneath it. When false, the stroke knocks out the underlying colors.
> Swatch **gapColor**
>
> Swatch applied to the gap in a dashed, dotted, or striped stroke, such as a color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap color tint percentage. Use a number from 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> When true, the gap color overprints underlying colors. When false, the gap knocks out those colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the Polygon.
> Boolean **nonprinting**
>
> When true, the Polygon is omitted from print output.
> Layer **itemLayer**
>
> Layer containing the Polygon.
> Boolean **locked**
>
> When true, the Polygon is locked.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options used for the Polygon.
> Number **rotationAngle**
>
> Rotation angle for the Polygon. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle used by the Polygon. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling used by the Polygon.
> Number **verticalScale**
>
> Vertical scaling used by the Polygon.
> Number **absoluteRotationAngle**
>
> Rotation angle of the Polygon measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Skewing angle of the Polygon measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the Polygon measured relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the Polygon measured relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style assigned to the Polygon.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Reports whether the Polygon was flipped independently of its parent object and, when it was, the flip direction.
> Boolean **visible**
>
> When true, the Polygon is visible.
> String **name**
>
> Name assigned to the Polygon.
> CornerOptions **topLeftCornerOption**
>
> For rectangular shapes, sets the top-left corner shape; for non-rectangular shapes, sets every corner shape.Note: a corner option can define a radius, unlike an end join whose rounded or beveled effect depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> For rectangular shapes, sets the top-right corner shape.
> CornerOptions **bottomLeftCornerOption**
>
> For rectangular shapes, sets the bottom-left corner shape.
> CornerOptions **bottomRightCornerOption**
>
> For rectangular shapes, sets the bottom-right corner shape.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> In measurement units, sets the top-left corner effect radius on rectangular shapes and the all-corner radius on non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> In measurement units, sets the top-right corner effect radius on rectangular shapes.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> In measurement units, sets the bottom-left corner effect radius on rectangular shapes.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> In measurement units, sets the bottom-right corner effect radius on rectangular shapes.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the Polygon.
> Number **leftArrowHeadScale**
>
> Scaling applied to the arrowhead at the path start. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scaling applied to the arrowhead at the path end. (Range: 1 to 1000)
> String **label**
>
> Property that accepts any string value.
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results come back in reverse order. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, results come back in reverse order. (Optional) |

> **clearFrameFittingOptions**()
>
> Clears frame fitting options and returns them to their initial state.
> Boolean **checkOut**()
>
> Performs checkout for the story.
> Boolean **checkIn**( String **versionComments**, Boolean **forceSave** )
>
> Checks in one or more stories.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | versionComments | Comment stored for this version. (Optional) |
| Boolean | forceSave | When true, a version is saved forcibly. (Optional) |

> Boolean **revert**()
>
> Restores the document to the state from its most recent save operation.
> **bringToFront**( PageItem **reference** )
>
> Moves the Polygon to the front of its layer or ahead of a specific item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object is moved in front of; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the Polygon to the back of its layer or behind a specific item that shares the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object is moved behind. (Optional) |

> **bringForward**()
>
> Moves the Polygon one level forward within its layer.
> **sendBackward**()
>
> Moves the Polygon one level backward within its layer.
> PageItem **makeCompoundPath**( PageItem **with** )
>
> Builds a compound path by combining the Polygon paths with paths from other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Other objects whose paths are included in the new compound path. |

> PageItem **releaseCompoundPath**()
>
> Breaks apart a compound path.
> PageItem **intersectPath**( PageItem **with** )
>
> Creates a page item from the intersection between the Polygon and other objects. An error is returned when the objects do not intersect.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects used for the intersection. |

> PageItem **addPath**( PageItem **with** )
>
> Creates a page item by combining the Polygon with other objects. The objects are deleted when they do not intersect.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to add. |

> PageItem **subtractPath**( PageItem **with** )
>
> Creates a page item by subtracting overlap areas between the Polygon and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to subtract. |

> PageItem **minusBack**( PageItem **with** )
>
> Creates a page item by reverse-subtracting the overlap areas between the Polygon and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects used for reverse subtraction. |

> PageItem **excludeOverlapPath**( PageItem **with** )
>
> Creates a page item by excluding overlap areas between the Polygon and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object or objects to exclude. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the Polygon into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the Polygon. |
| Number | numberOfSides | Side count for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Resulting polygon star inset percentage. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Resulting rectangle corner radius. (Optional) |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Places the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that stores the object. |
| Object | withProperties | Initial property values for the new Polygon. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Associates the specified key with the supplied label value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to use. |
| String | value | Value to store. |

> **placeXML**( XMLElement **using** )
>
> Places XML content into the specified object. Note: Existing content is replaced.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element whose content is placed. |

> **autoTag**()
>
> Tags the object or its parent story with default tags from XML preferences.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element to associate. |

> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Places a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fileName | File that will be placed. |
| Boolean | showingOptions | Whether the import options dialog is shown. (Optional) |
| Object | withProperties | Initial property values for the placed object or objects. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Creates an override for a master page item, then places the result onto the destination document page.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Removes the override from a master page item that was previously overridden.
> **detach**()
>
> Separates an override from its source master page.
> **remove**()
>
> Deletes this Polygon.
> **fit**( FitOptions **given** )
>
> Uses the specified fit option on frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Fit option to apply. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a flip operation on the Polygon.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the Polygon. |
| Mixed | around | Point used as the flip center. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Duplicates the Polygon to a specified location or by a specified offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Destination for the duplicate Polygon, in [x, y] coordinate form. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset amount for the new Polygon from the original Polygon's position. (Optional) |
