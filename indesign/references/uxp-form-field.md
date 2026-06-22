# Form Field (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Form field object.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Sent before a FormField is placed. This event bubbles. This event can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Sent after a FormField is placed. This event bubbles. This event cannot be canceled.

## Instance

> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Anchored object settings.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties that set default formatting for wrapping text around objects.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> Linked XML element.
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
> Fill transparency configuration for the FormField.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> FormField content transparency configuration.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Linked Page Item options
> _Read Only_
>
> Boolean **overridden**
>
> When true, the object came from a master spread and has been overridden. When false, the object either came from a master spread without being overridden or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Object originally from a master page that has been overridden. Returns may be: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained in the FormField.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained in the FormField.
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
> List of all articles that include this page item
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the FormField.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the FormField. It can be Character, Group, Oval, Rectangle, GraphicLine, Polygon, SplineItem, MasterSpread, Spread, PlaceGun or Snippet.
> _Read Only_
>
> Number **index**
>
> Position of the FormField inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Preference objects belonging to this collection.
> _Read Only_
>
> Events **events**
>
> Event objects belonging to this collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects belonging to this collection.
> _Read Only_
>
> SVGs **svgs**
>
> SVG file objects belonging to this collection.
> _Read Only_
>
> Graphics **graphics**
>
> Imported graphics collection for any graphic file format, including vector, metafile, or bitmap.
> _Read Only_
>
> PageItems **pageItems**
>
> Page item collection for processing every page item in a container, such as a document, page, or group, independent of type.
> Number **activeStateIndex**
>
> Active-state index within the object's states collection.
> String **name**
>
> Name of the FormField.
> String **description**
>
> Description of the FormField.
> Boolean **allowOverrides**
>
> When true, the master page item can be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied to this item under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied to this item under the object-based layout rule.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds of the FormField without stroke width, formatted as [y1, x1, y2, x2], giving the top-left and bottom-right bounding-box corners.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds of the FormField including stroke width, formatted as [y1, x1, y2, x2], giving the top-left and bottom-right bounding-box corners.
> Swatch **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the FormField fill. . Also accepts: String.
> Number **fillTint**
>
> Tint percentage used in the FormField fill color. Use 0 to 100 for an explicit tint; use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> When true, the FormField fill color overprints objects underneath. When false, that fill removes the underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Weight, in points, applied to the FormField stroke.
> Number **miterLimit**
>
> Ratio limit between stroke width and miter length before a miter (pointed) join changes to a bevel (squared-off) join.
> EndCap **endCap**
>
> End shape for an open path.
> EndJoin **endJoin**
>
> Corner join applied to the FormField.
> StrokeStyle **strokeType**
>
> Name of the stroke style to apply. Also accepts: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> FormField corner adjustment.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements for a custom dashed-line pattern. Provide up to six point values using [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead applied to the beginning of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead applied to the end of the path.
> Swatch **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the FormField stroke. Also accepts: String.
> Number **strokeTint**
>
> Tint percentage used in object's stroke color. Use 0 to 100 for an explicit tint; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient applied to the FormField fill, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For the FormField fill gradient, supplies length when linear or radius when radial.
> Number **gradientFillAngle**
>
> Angle of a linear gradient applied to the FormField fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient applied to the FormField stroke, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For the FormField stroke gradient, supplies length when linear or radius when radial.
> Number **gradientStrokeAngle**
>
> Angle of a linear gradient applied to the FormField stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> When true, the FormField stroke color overprints objects underneath. When false, that stroke removes the underlying colors.
> Swatch **gapColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to gaps in dashed, dotted, or striped strokes. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint percentage. Use 0 to 100 for an explicit tint; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> When true, the gap color overprints underlying colors. When false, the gap color knocks out the underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment applied to the FormField.
> Boolean **nonprinting**
>
> When true, the FormField does not print.
> Layer **itemLayer**
>
> Layer that contains the FormField.
> Boolean **locked**
>
> When true, locking is enabled for the FormField.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance options for the FormField.
> Number **rotationAngle**
>
> Rotation angle of the FormField. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the FormField. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the FormField.
> Number **verticalScale**
>
> Vertical scaling applied to the FormField.
> Number **absoluteRotationAngle**
>
> FormField rotation angle measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> FormField skewing angle measured relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the FormField relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the FormField relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the FormField.
> Flip **flip**
>
> Printed-image flip direction.
> Flip **absoluteFlip**
>
> Reports whether the FormField was flipped independently from its parent object and, if so, which flip direction was used.
> Boolean **visible**
>
> When true, the FormField is visible.
> CornerOptions **topLeftCornerOption**
>
> Shape for the top left corner of rectangular shapes and every corner of non-rectangular shapes. Note: unlike end join, corner option supports a radius value; rounded or beveled end-join effects depend on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Shape for rectangular shapes at the top-right corner
> CornerOptions **bottomLeftCornerOption**
>
> Shape for rectangular shapes at the bottom-left corner.
> CornerOptions **bottomRightCornerOption**
>
> Shape for rectangular shapes at the bottom-right corner.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Measurement-unit radius for the top-left corner effect on rectangular shapes and all-corner effects on non-rectangular shapes
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Measurement-unit radius for the top-right corner effect on rectangular shapes
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Measurement-unit radius for the bottom-left corner effect on rectangular shapes
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Measurement-unit radius for the bottom-right corner effect on rectangular shapes
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment applied to the FormField.
> Number **leftArrowHeadScale**
>
> Scale applied to the path-start arrowhead. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> Scale applied to the path-end arrowhead. (Range: 1 to 1000)
> String **label**
>
> String value assignable as a property.
> Object **properties**
>
> Enables several properties to be set in one operation.

### Methods

> Asset **store**( Library **using**, Object **withProperties** )
>
> Stores the object in the chosen library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Destination library for storing the object. |
| Object | withProperties | Starting property values for the new FormField (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores a label value under the specified key.

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
> Tags the object or parent story with the default tags defined in XML preference.
> **markup**( XMLElement **using** )
>
> Links the page item to the specified XML element while keeping existing content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| XMLElement | using | XML element. |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Finds objects that match the search value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the result order. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Finds objects matching the search value, then swaps them to the replacement value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True reverses the result order. (Optional) |

> Mixed **override**( Page **destinationPage** )
>
> Creates a new document-page object by overriding a master page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Page | destinationPage | Document page containing the master page item to override. |

> **removeOverride**()
>
> Removes the override from a master page item that was previously overridden.
> **detach**()
>
> Detaches an overridden master page item from its master page.
> **remove**()
>
> Deletes the FormField.
> **fit**( FitOptions **given** )
>
> Applies the selected fit option to frame content.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FitOptions | given | Selected FitOptions value. |

> **flipItem**( Flip **given**, Mixed **around** )
>
> Performs a FormField flip.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Flip | given | Axis used to flip the FormField. |
| Mixed | around | Center point for flipping the FormField. Accepts: AnchorPoint enumerator or Array of 2 Units. (Optional) |

> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Creates a duplicate FormField at the requested location or offset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New FormField location, specified as [x, y] coordinates. Accepts: Spread, Page, Layer or Array of 2 Units. (Optional) |
| Measurement Unit (Number or String)=any | by | Offset for the duplicate FormField relative to the original FormField position. (Optional) |

> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
>
> Relocates the FormField. Note: Either the 'to' or 'by' parameter is required; when both are defined, the to value is used.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | New location for the FormField, in the format (x, y). Accepts: Spread, Page, Layer or Array of 2 Units. (Optional) |
| Measurement Unit (Number or String)=any | by | Measurement-unit offset used to move the FormField from its current position, in the format (x, y). (Optional) |

> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
>
> Uses the supplied object style on the FormField.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ObjectStyle | using | Object style that should be applied. |
| Boolean | clearingOverrides | When true, existing FormField attributes are cleared before the style is used. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | When true, formatting and attributes on the FormField that fall outside the object style definition are removed. (Optional) |

> **clearObjectStyleOverrides**()
>
> Removes object-style overrides.
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the FormField into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape assigned to the FormField. |
| Number | numberOfSides | Side count for the generated polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Inset percentage used for star-shaped polygon output. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius applied to the generated rectangle. (Optional) |

> **clearTransformations**()
>
> Removes any FormField transform state, including shearing, fitting, flipping, scaling, and rotation.
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation |
| Mixed | from | Temporary origin for the transformation. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transform. Accepts: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components selected for replacement; when this optional argument is supplied, those existing components on the target are overwritten with the new values. If it is omitted, the provided matrix is concatenated with the target's current transform so both effects combine. Accepts: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is read in ruler units instead of points. The default value is false. This matters only when the reference point is page-relative. (Optional) |

> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
>
> Returns the page item's transformation values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the lookup |

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Resolves the requested location to coordinates in the chosen coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space used for resolution. |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. The default value is false. This matters only when the reference point is page-relative. (Optional) |

> **redefineScaling**( Number **to** )
>
> Pushes an item's scaling into its content where possible.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | to | Scale factors that remain on the item. The default is \{1.0, 1.0}. (Optional) |

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box that is resized. Accepts: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin for the transform. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | Method used to apply the supplied values to the current dimensions |
| Mixed | values | Width and height inputs. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, coordinate space determines _only_ the length unit for x and y, and for the 'current dimensions times' resize method the coordinate space has no effect). Accepts: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and the target contains multiple page items, the new dimensions are achieved by moving the separate items rather than resizing each one. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. The default value is false. This matters only when the reference point is page-relative. (Optional) |

> **reframe**( Mixed **in**, Mixed **opposingCorners** )
>
> Repositions the page item's bounding box.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Accepts: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners for the new bounding box in the supplied coordinate space |

> String **transformAgain**()
>
> Reapplies to the FormField the most recent transformation performed on any object. Transform operations include flipping, scaling, shearing, rotating, and moving.
> String **transformSequenceAgain**()
>
> Replays on the FormField the last sequence of transform operations done to any single object or to any group of objects at one time. Transform operations include flipping, scaling, shearing, rotating, and moving.
> String **transformAgainIndividually**()
>
> Reuses on the FormField the last transformation performed on any FormField. Transform operations include flipping, scaling, shearing, rotating, and moving.
> String **transformSequenceAgainIndividually**()
>
> Runs again on the FormField the last transformation sequence performed on any single object or on any group of objects simultaneously. Transform operations include flipping, scaling, shearing, rotating, and moving.
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Plain Text QR Code to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | plainText | Plain Text content for the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial property bag for the new FormField; it can carry the same values as the listed parameters. (Optional) |

> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
>
> Adds a Hyperlink QR Code to the page item or document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | urlLink | Hyperlink URL encoded in the QR code. (Optional) |
| Mixed | qrCodeSwatch | Swatch applied to the generated QR Code Graphic. Accepts: Swatch or String. (Optional) |
| String | withProperties | Initial property bag for the new FormField; it can carry the same values as the listed parameters. (Optional) |
