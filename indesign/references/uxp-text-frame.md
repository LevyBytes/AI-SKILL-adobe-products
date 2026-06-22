# Text Frame (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

A frame that contains text.

## Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Fires before placement of a TextFrame. The event bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Fires after placement of a TextFrame. The event bubbles and cannot be canceled.

## Instance

> _Read Only_
>
> TransparencySetting **transparencySettings**
>
> Transparency settings.
> _Read Only_
>
> StrokeTransparencySetting **strokeTransparencySettings**
>
> Stroke transparency settings.
> _Read Only_
>
> FillTransparencySetting **fillTransparencySettings**
>
> Fill transparency settings used by the TextFrame.
> _Read Only_
>
> ContentTransparencySetting **contentTransparencySettings**
>
> Transparency settings for TextFrame content.
> _Read Only_
>
> TextFramePreference **textFramePreferences**
>
> Preference settings for the text frame.
> _Read Only_
>
> BaselineFrameGridOption **baselineFrameGridOptions**
>
> Settings for baseline frame grid options.
> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Anchored object settings.
> _Read Only_
>
> Story **parentStory**
>
> Story containing the text.
> _Read Only_
>
> Mixed **startTextFrame**
>
> Thread's first text frame. Can return: TextFrame or TextPath.
> _Read Only_
>
> Mixed **endTextFrame**
>
> Thread's last text frame. Can return: TextFrame or TextPath.
> _Read Only_
>
> Number **textFrameIndex**
>
> Index position of the text frame inside the story.
> _Read Only_
>
> Boolean **overflows**
>
> True when the story has overset text.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default properties for object text-wrap formatting.
> _Read Only_
>
> ObjectExportOption **objectExportOptions**
>
> Object export option settings.
> _Read Only_
>
> GridDataInformation **gridData**
>
> Default grid properties. Note: This covers named grids, layout grids, and frame (story) grids.
> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element tied to TextFrame.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for Linked Page Item.
> _Read Only_
>
> Boolean **overridden**
>
> When true, the object came from a master spread and has been overridden. When false, it either came from a master spread without being overridden or did not come from a master page.
> _Read Only_
>
> Mixed **overriddenMasterPageItem**
>
> Overridden object originating on a master page. Can return: PageItem, Guide, Graphic, Movie or Sound.
> _Read Only_
>
> PageItem **allPageItems**
>
> Every page item contained by the TextFrame.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic contained by the TextFrame.
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
> List of every article that includes this page item.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the TextFrame.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning container (a Snippet, ComboBox, ListBox, TextBox, SignatureField, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, State, Cell, Character or PlaceGun).
> _Read Only_
>
> Number **index**
>
> Index position of the TextFrame inside its containing object.
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
> Spline items collection.
> _Read Only_
>
> PageItems **pageItems**
>
> Page item collection; use it to process every page item within any container, for example a document, page, or group, without filtering by type.
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
> EPSTexts.
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
> Imported graphics collection for graphic file formats such as vector, metafile, or bitmap.
> _Read Only_
>
> HiddenTexts **hiddenTexts**
>
> Collection containing hidden text objects.
> Measurement Unit (Number or String)=any **geometricBounds**
>
> Bounds of the TextFrame excluding stroke width, in the format [y1, x1, y2, x2], giving the top-left and bottom-right coordinates of the bounding box.
> Measurement Unit (Number or String)=any **visibleBounds**
>
> Bounds of the TextFrame including stroke width, in the format [y1, x1, y2, x2], giving the top-left and bottom-right coordinates of the bounding box.
> Mixed **previousTextFrame**
>
> Earlier threaded frame. Can return: TextFrame or TextPath. Can also accept: NothingEnum enumerator.
> Mixed **nextTextFrame**
>
> Later threaded frame. Can return: TextFrame or TextPath. Can also accept: NothingEnum enumerator.
> Mixed **contents**
>
> Text frame content. Can return: String, TextFrameContents enumerator or SpecialCharacters enumerator.
> ContentType **contentType**
>
> Type of content that a frame can contain.
> Boolean **allowOverrides**
>
> When true, the master page item can be overridden.
> DimensionsConstraints **horizontalLayoutConstraints**
>
> Left margin, width, and right margin constraints applied to this item when the object-based layout rule is used.
> DimensionsConstraints **verticalLayoutConstraints**
>
> Top margin, height, and bottom margin constraints applied to this item when the object-based layout rule is used.
> Swatch **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied to the TextFrame fill. Can also accept: String.
> Number **fillTint**
>
> Tint percentage for fill color on the TextFrame. Use 0 to 100 for a tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintFill**
>
> When true, the TextFrame fill color overprints underlying objects. When false, it knocks out the underlying colors.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Weight in points applied to the TextFrame stroke.
> Number **miterLimit**
>
> Limit for the stroke-width-to-miter-length ratio before a pointed miter join changes to a squared-off bevel join.
> EndCap **endCap**
>
> End shape used for an open path.
> EndJoin **endJoin**
>
> Corner join used on the TextFrame.
> StrokeStyle **strokeType**
>
> Stroke style name to apply. Can also accept: String.
> StrokeCornerAdjustment **strokeCornerAdjustment**
>
> Corner adjustment used on the TextFrame.
> Measurement Unit (Number or String)=any **strokeDashAndGap**
>
> Dash/gap measurements for a custom dashed-line pattern. You may define up to six point values: [dash1, gap1, dash2, gap2, dash3, gap3].
> ArrowHead **leftLineEnd**
>
> Arrowhead applied to the start of the path.
> ArrowHead **rightLineEnd**
>
> Arrowhead applied to the end of the path.
> Swatch **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied to the TextFrame stroke. Can also accept: String.
> Number **strokeTint**
>
> Tint percentage for the object's stroke color. Use 0 to 100 for a tint percent; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point in page coordinates for a gradient applied to the TextFrame fill, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientFillLength**
>
> For a TextFrame fill gradient, this is the linear-gradient length or radial-gradient radius.
> Number **gradientFillAngle**
>
> Angle of a linear gradient applied to the TextFrame fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point in page coordinates for a gradient applied to the TextFrame stroke, in the format [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeLength**
>
> For a TextFrame stroke gradient, this is the linear-gradient length or radial-gradient radius.
> Number **gradientStrokeAngle**
>
> Angle of a linear gradient applied to the TextFrame stroke. (Range: -180 to 180)
> Boolean **overprintStroke**
>
> When true, the TextFrame's stroke color overprints underlying objects. When false, the stroke color knocks out underlying colors.
> Swatch **gapColor**
>
> Gap swatch for a dashed, dotted, or striped stroke, using color, gradient, tint, or mixed ink. For information, see stroke type.
> Number **gapTint**
>
> Tint percentage for the gap color. Use 0 to 100 for a tint percent; use -1 for the inherited or overridden value.
> Boolean **overprintGap**
>
> When true, the gap color overprints underlying colors. When false, the gap color knocks out the underlying colors.
> StrokeAlignment **strokeAlignment**
>
> Stroke alignment used on the TextFrame.
> Boolean **nonprinting**
>
> When true, the TextFrame does not print.
> Layer **itemLayer**
>
> Layer containing the TextFrame.
> Boolean **locked**
>
> True means the TextFrame is locked.
> DisplaySettingOptions **localDisplaySetting**
>
> TextFrame display performance options.
> Number **rotationAngle**
>
> Rotation angle of the TextFrame. (Range: -360 to 360)
> Number **shearAngle**
>
> Skewing angle applied to the TextFrame. (Range: -360 to 360)
> Number **horizontalScale**
>
> Horizontal scaling applied to the TextFrame.
> Number **verticalScale**
>
> Vertical scaling applied to the TextFrame.
> Number **absoluteRotationAngle**
>
> Relative rotation angle for the TextFrame in its container context. (Range: -360 to 360)
> Number **absoluteShearAngle**
>
> Relative skewing angle for the TextFrame in its container context. (Range: -360 to 360)
> Number **absoluteHorizontalScale**
>
> Horizontal scale of the TextFrame relative to its containing object.
> Number **absoluteVerticalScale**
>
> Vertical scale of the TextFrame relative to its containing object.
> ObjectStyle **appliedObjectStyle**
>
> Object style applied to the TextFrame.
> Flip **flip**
>
> Direction used to flip the printed image.
> Flip **absoluteFlip**
>
> Shows whether the TextFrame was flipped independently of its parent object and, if so, the direction of that flip.
> Boolean **visible**
>
> When true, the TextFrame is visible.
> String **name**
>
> Name of the TextFrame.
> CornerOptions **topLeftCornerOption**
>
> For rectangular shapes, the top-left corner shape; for non-rectangular shapes, the shape used on every corner. Note: A corner option is distinct from end join; corner options can set a radius, while the rounded or beveled effect of an end join depends on stroke weight.
> CornerOptions **topRightCornerOption**
>
> Top-right rectangular-corner shape.
> CornerOptions **bottomLeftCornerOption**
>
> Bottom-left rectangular-corner shape.
> CornerOptions **bottomRightCornerOption**
>
> Bottom-right rectangular-corner shape.
> Measurement Unit (Number or String)=any **topLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for the top-left rectangular corner and every corner of non-rectangular shapes.
> Measurement Unit (Number or String)=any **topRightCornerRadius**
>
> Corner-effect radius, in measurement units, for the top-right rectangular corner.
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for the bottom-left rectangular corner.
> Measurement Unit (Number or String)=any **bottomRightCornerRadius**
>
> Corner-effect radius, in measurement units, for the bottom-right rectangular corner.
> ArrowHeadAlignmentEnum **arrowHeadAlignment**
>
> Arrowhead alignment used on the TextFrame.
> Number **leftArrowHeadScale**
>
> Start-of-path arrowhead scale value. (Range: 1 to 1000)
> Number **rightArrowHeadScale**
>
> End-of-path arrowhead scale value. (Range: 1 to 1000)
> String **label**
>
> Property that can be set to any string.
> Object **properties**
>
> Property for assigning several properties in one operation.

### Methods

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes the text into outlines. In the result, every text line is represented as a polygon object. If the converted text is one letter with no inner spaces and no separated parts, that polygon has a single path only. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, the original text is removed. When false, separate outline object(s) are created above the text. (Optional) |

> **recompose**()
>
> Updates composition for the text in the TextFrame.
> Text **findText**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Locates text matching the find what value and substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Searches for text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Locates text matching the find what value and substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Searches for glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Locates glyphs matching the find what value and replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> PageItem **findObject**( Boolean **reverseOrder** )
>
> Searches for objects matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> PageItem **changeObject**( Boolean **reverseOrder** )
>
> Locates objects matching the find what value and substitutes the change to value for them.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Searches for text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Locates text matching the find character type value and substitutes the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | When true, result ordering is reversed. (Optional) |

> Story **placeAndLink**( Story **parentStory**, Boolean **showingOptions** )
>
> Deprecated: contentPlace method is the replacement. Original Description: Make a linked story and put it inside the destination page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Story | parentStory | Source story used for the place-and-link operation. |
| Boolean | showingOptions | Controls whether the link options dialog is shown. (Optional) |

> **convertToRawText**()
>
> Changes TextFrame contents into raw text.
> **bringToFront**( PageItem **reference** )
>
> Moves the TextFrame to the top of its layer, or ahead of a specific item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Object used as the front-placement reference; it must share the same parent. (Optional) |

> **sendToBack**( PageItem **reference** )
>
> Moves the TextFrame to the bottom of its layer or behind a specific item that has the same parent.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | reference | Object used as the behind-placement reference. (Optional) |

> **bringForward**()
>
> Advances the TextFrame by one stacking level in its layer.
> **sendBackward**()
>
> Moves the TextFrame one stacking level back in its layer.
> PageItem **makeCompoundPath**( PageItem **with** )
>
> Builds a compound path from the TextFrame path(s) together with other object paths.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Other objects whose paths are included in the compound path being made. |

> PageItem **releaseCompoundPath**()
>
> Breaks apart a compound path.
> PageItem **intersectPath**( PageItem **with** )
>
> Produces a page item from the intersection of the TextFrame and other objects. An error is returned when there is no intersection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object(s) used for the intersection. |

> PageItem **addPath**( PageItem **with** )
>
> Produces a page item by uniting the TextFrame with other objects. Nonintersecting objects are deleted.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object(s) included in the add operation. |

> PageItem **subtractPath**( PageItem **with** )
>
> Produces a page item by removing overlapping regions between the TextFrame and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object(s) used as the subtraction source. |

> PageItem **minusBack**( PageItem **with** )
>
> Produces a page item by applying reverse subtraction to overlapping regions of the TextFrame and other objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object(s) used for reverse subtraction. |

> PageItem **excludeOverlapPath**( PageItem **with** )
>
> Produces a page item with overlapping regions of the TextFrame and other objects excluded.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | with | Object(s) whose overlap is excluded. |

> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
>
> Changes the TextFrame into another shape.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConvertShapeOptions | given | New shape assigned to the TextFrame. |
| Number | numberOfSides | Side count for the polygon that results. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | Star inset percentage for the polygon that results. (Range: 0.0 to 100.0) (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | Corner radius applied to the rectangle that results. (Optional) |

> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
>
> Copies an object into the destination page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageItems | Page item or page items being placed or loaded. |
| Boolean | linkPageItems | Controls whether pageItems are linked in content placer; a true value overrides link stories. (Optional) |
| Boolean | linkStories | Controls whether stories are linked in content placer; applies only to a single story, while pageItem links are also created for multiple items. (Optional) |
| Boolean | mapStyles | Controls style mapping in content placer. (Optional) |
| Boolean | showingOptions | Controls whether the link options dialog is shown. (Optional) |

> Asset **store**( Library **using**, Object **withProperties** )
>
> Saves the object into the specified library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | using | Library that receives the stored object. |
| Object | withProperties | Starting property values for the new TextFrame. (Optional) |

## See also

- [Characters](uxp-characters.md)
