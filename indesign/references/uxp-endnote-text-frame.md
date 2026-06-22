# Endnote Text Frame (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

An endnote frame for text.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Before an EndnoteTextFrame placement occurs, this cancelable bubbling event is sent.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Once an EndnoteTextFrame has been placed, this noncancelable bubbling event is sent.

## Instance

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
> Fill transparency configuration used by the EndnoteTextFrame.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency configuration for EndnoteTextFrame content.
> _Read Only_
>
> TextFramePreference **textFramePreferences**
>
> Text frame preference configuration.
> _Read Only_
>
> BaselineFrameGridOption **baselineFrameGridOptions**
>
> Baseline frame grid option configuration.
> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Anchored object configuration.
> _Read Only_
>
> Story **parentStory**
>
> Story object that holds the text.
> _Read Only_
>
> Mixed **startTextFrame**
>
> First threaded text frame. Return choices: TextFrame or TextPath.
> _Read Only_
>
> Mixed **endTextFrame**
>
> Last threaded text frame. Return choices: TextFrame or TextPath.
> _Read Only_
>
> Number **textFrameIndex**
>
> Position of this text frame inside the story.
> _Read Only_
>
> Boolean **overflows**
>
> True means the story contains overset text.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default text-wrap formatting properties for object wrapping.
> _Read Only_
>
> ObjectExportOption **objectExportOptions**
>
> Object export configuration.
> _Read Only_
>
> GridDataInformation **gridData**
>
> Default grid properties. Note: named grids, layout grids, and frame (story) grids are covered.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked with the EndnoteTextFrame.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Linked Page Item configuration.
> _Read Only_
>
> Boolean **overridden**
>
> True indicates a master-spread object that has been overridden. False indicates either a master-spread object without override status or an object not created from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Object from a master page after override. Return choices: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items held inside the EndnoteTextFrame.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics held inside the EndnoteTextFrame.
> _Read Only_
>
> Page **parentPage**
>
> Page where this page item is displayed.
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
> Articles that include this page item.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the EndnoteTextFrame.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container choices include Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, or a State or Cell.
> _Read Only_
>
> Number **index**
>
> EndnoteTextFrame position within its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> _Read Only_
>
> Texts **texts**
>
> Collection containing text objects.
> _Read Only_
>
> Characters **characters**
>
> Collection containing characters.
> _Read Only_
>
> Words **words**
>
> Collection containing words.
> _Read Only_
>
> Lines **lines**
>
> Collection containing lines.
> _Read Only_
>
> TextColumns **textColumns**
>
> Collection containing text columns.
> _Read Only_
>
> Paragraphs **paragraphs**
>
> Collection containing paragraphs.
> _Read Only_
>
> InsertionPoints **insertionPoints**
>
> Collection containing insertion points.
> _Read Only_
>
> TextStyleRanges **textStyleRanges**
>
> Collection containing text style ranges.
> _Read Only_
>
> Footnotes **footnotes**
>
> Collection containing footnotes.
> _Read Only_
>
> TextVariableInstances **textVariableInstances**
>
> Collection containing text variable instances.
> _Read Only_
>
> Tables **tables**
>
> Collection containing tables.
> _Read Only_
>
> Ovals **ovals**
>
> Collection containing ellipses.
> _Read Only_
>
> SplineItems **splineItems**
>
> Spline item collection.
> _Read Only_
>
> PageItems **pageItems**
>
> Page item collection for processing every page item in a container, such as a document, page, or group, without filtering by type.
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
> Paths **paths**
>
> Collection containing paths.
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
> TextPaths **textPaths**
>
> Collection containing text paths.
> _Read Only_
>
> Notes **notes**
>
> Collection containing notes.
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
> Collection containing imported graphics for any graphic file format, including vector, metafile, or bitmap.
> _Read Only_
>
> HiddenTexts **hiddenTexts**
>
> Collection containing hidden text objects.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds for the EndnoteTextFrame excluding stroke width, expressed as [y1, x1, y2, x2] coordinates for the top-left and bottom-right bounding-box corners.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds for the EndnoteTextFrame including stroke width, expressed as [y1, x1, y2, x2] coordinates for the top-left and bottom-right bounding-box corners.
> Mixed **previousTextFrame**
>
> Previous threaded text frame. Return choices: TextFrame or TextPath. Also accepts: NothingEnum enumerator.
> Mixed **nextTextFrame**
>
> Next threaded text frame. Return choices: TextFrame or TextPath. Also accepts: NothingEnum enumerator.
> Mixed **contents**
>
> Text-frame contents. Return choices: String, TextFrameContents enumerator or SpecialCharacters enumerator.
> ContentType **contentType**
>
> Content category allowed in a frame.
> Boolean **allowOverrides**
>
> True permits overriding the master page item.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied under the object-based layout rule.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied under the object-based layout rule.
> Swatch **fillColor**
>
> Fill swatch for the EndnoteTextFrame, such as a color, gradient, tint, or mixed ink. . Also accepts: String.
> Number **fillTint**
>
> Tint percentage for the EndnoteTextFrame's fill color. To set a tint percent, use a number from 0 to 100; use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> True makes the EndnoteTextFrame's fill color overprint underlying objects. False makes that fill color knock out underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight in points for the EndnoteTextFrame.
> Number **miterLimit**
>
> Ratio threshold between stroke width and miter length at which a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> End shape used for an open path.
> EndJoin **endJoin**
>
> Corner join used by the EndnoteTextFrame.
> StrokeStyle **strokeType**
>
> Stroke style name to use. Also accepts: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used by the EndnoteTextFrame.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash and gap measurements defining a custom dashed-line pattern. Up to six point values can be supplied as [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead used at the path start.
> ArrowHead **rightLineEnd**
>
> Arrowhead used at the path end.
> Swatch **strokeColor**
>
> Stroke swatch for the EndnoteTextFrame, such as a color, gradient, tint, or mixed ink. Also accepts: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. To set a tint percent, use a number from 0 to 100; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point in page coordinates for an EndnoteTextFrame fill gradient, expressed as [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> Length for a linear gradient, or radius for a radial gradient, used by the EndnoteTextFrame fill.
> Number **gradientFillAngle**
>
> Linear-gradient angle for the EndnoteTextFrame fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point in page coordinates for an EndnoteTextFrame stroke gradient, expressed as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> Length for a linear gradient, or radius for a radial gradient, used by the EndnoteTextFrame stroke.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle for the EndnoteTextFrame stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> True makes the EndnoteTextFrame's stroke color overprint underlying objects. False makes that stroke color knock out the underlying colors.
> Swatch **gapColor**
>
> Gap swatch for a dashed, dotted, or striped stroke, such as a color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Gap-color tint percentage. To set a tint percent, use a number from 0 to 100; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> True makes the gap color overprint underlying colors. False makes the gap color knock out underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used by the EndnoteTextFrame.
> Boolean **nonprinting**
>
> True prevents the EndnoteTextFrame from printing.
> Layer **itemLayer**
>
> Layer containing the EndnoteTextFrame.
> Boolean **locked**
>
> True means the EndnoteTextFrame is locked.
> DisplaySettingOptions **localDisplaySetting**
>
> Display performance configuration for the EndnoteTextFrame.
> Number **rotationAngle**
>
> Rotatation angle for the EndnoteTextFrame. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle used by the EndnoteTextFrame. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling used by the EndnoteTextFrame.
> Number **verticalScale**
>
> Vertical scaling used by the EndnoteTextFrame.
> Number **absoluteRotationAngle**
>
> EndnoteTextFrame rotation angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> EndnoteTextFrame skewing angle relative to its containing object. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale for the EndnoteTextFrame relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale for the EndnoteTextFrame relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style assigned to the EndnoteTextFrame.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Shows whether the EndnoteTextFrame was flipped separately from its parent object and, if so, the direction used.
> Boolean **visible**
>
> True means the EndnoteTextFrame is visible.
> String **name**
>
> Name assigned to the EndnoteTextFrame.
> CornerOptions **topLeftCornerOption**
>
> For rectangular shapes, this controls the top-left corner shape; for non-rectangular shapes, it controls every corner. Note: unlike end join, corner option can take a radius, while an end join's rounded or beveled result depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> For rectangular shapes, this controls the top-right corner shape.
> CornerOptions **bottomLeftCornerOption**
>
> For rectangular shapes, this controls the bottom-left corner shape.
> CornerOptions **bottomRightCornerOption**
>
> For rectangular shapes, this controls the bottom-right corner shape.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for a rectangular shape's top-left corner and for every non-rectangular corner.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Corner-effect radius, in measurement units, for a rectangular shape's top-right corner.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for a rectangular shape's bottom-left corner.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Corner-effect radius, in measurement units, for a rectangular shape's bottom-right corner.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used by the EndnoteTextFrame.
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
> Property used to assign several properties in one operation.

### Methods

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Converts text into outlines. Each text line becomes a polygon object. For a converted single letter without internal spaces or detached pieces, the polygon has one path only. Note: To determine whether a font allows outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | True removes the original text. False creates separate outline object(s) above the text. (Optional) |

> **recompose**()
>
> Recomposes text within the EndnoteTextFrame.
> Text **findText**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders matches from last to first. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders matches from last to first. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders matches from last to first. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders matches from last to first. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders matches from last to first. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching the find what value, then replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders matches from last to first. (Optional) |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Searches for objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders matches from last to first. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Searches for objects matching the find what value, then replaces those objects with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders matches from last to first. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders matches from last to first. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching the find character type value, then replaces it with the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders matches from last to first. (Optional) |

> Story **placeAndLink**( Story **parentStory**, Boolean **showingOptions** )
>
> Deprecated: contentPlace method supersedes this. Original Description: Create and position a linked story inside the target page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Story | parentStory | Story used as the source for place and link. |
| Boolean | showingOptions | Whether the link options dialog is shown. (Optional) |

> **convertToRawText**()
>
> Converts the text frame contents into raw text.
> **bringToFront**( PageItem **reference** )
>
> Moves the EndnoteTextFrame to the front of its layer or ahead of a specific item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object is brought in front of; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the EndnoteTextFrame to the back of its layer or behind a specific item; the item must share the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Reference object that the object is sent behind. (Optional) |

> **bringForward**()
>
> Moves the EndnoteTextFrame one level forward in its layer.
> **sendBackward**()
>
> Moves the EndnoteTextFrame one level backward in its layer.
> PageItem **makeCompoundPath**( PageItem **with** )
>
> Builds a compound path by combining the EndnoteTextFrame path(s) with paths from other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Other objects whose paths are included in the new compound path. |

> PageItem **releaseCompoundPath**()
>
> Breaks apart a compound path.
> PageItem **intersectPath**( PageItem **with** )
>
> Builds a new page item from the intersection of the EndnoteTextFrame and other objects. An error is returned when the objects do not intersect.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object(s) used for the intersection. |

> PageItem **addPath**( PageItem **with** )
>
> Builds a new page item by combining the EndnoteTextFrame with other objects. The objects are deleted if no intersection exists.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object(s) to add. |

> PageItem **subtractPath**( PageItem **with** )
>
> Builds a new page item by subtracting regions where other objects overlap the EndnoteTextFrame.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object(s) used for subtraction. |

> PageItem **minusBack**( PageItem **with** )
>
> Builds a new page item through reverse subtraction of regions where other objects overlap the EndnoteTextFrame.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object(s) used for reverse subtraction. |

> PageItem **excludeOverlapPath**( PageItem **with** )
>
> Builds a new page item by removing the overlap shared by the EndnoteTextFrame and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object(s) used for exclusion. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the EndnoteTextFrame into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape for the EndnoteTextFrame. |
| Number | numberOfSides | Side count for the output polygon value. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Star inset percentage used by the output polygon value. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Rectangle corner radius for the conversion result. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Creates a duplicate object inside the target container.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or items to place or load |
| Boolean | linkPageItems | Whether pageItems are linked in content placer; when true, it overrides link stories value. (Optional) |
| Boolean | linkStories | Whether stories are linked in content placer; applies only to a single story, while pageItem links are also created when multiple items are involved. (Optional) |
| Boolean | mapStyles | Whether styles are mapped in content placer. (Optional) |
| Boolean | showingOptions | Whether the link options dialog is shown. (Optional) |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Adds the object to the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the object. |
| Object | withProperties | Initial property values for the new EndnoteTextFrame. (Optional) |

## See also

- [Characters](uxp-characters.md)
