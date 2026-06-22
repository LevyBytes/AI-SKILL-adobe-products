# Find Object Preference

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Find object preference settings.

## Instance

> _Read Only_
>
> Mixed **transparencySettings**
>
> Holds the transparency criteria. Can return: FindChangeTransparencySetting or NothingEnum enumerator.
> _Read Only_
>
> Mixed **strokeTransparencySettings**
>
> Stores stroke-specific transparency criteria. Can return: FindChangeStrokeTransparencySetting or NothingEnum enumerator.
> _Read Only_
>
> Mixed **fillTransparencySettings**
>
> Stores transparency criteria for the FindObjectPreference fill. Can return: FindChangeFillTransparencySetting or NothingEnum enumerator.
> _Read Only_
>
> Mixed **contentTransparencySettings**
>
> Stores transparency criteria for FindObjectPreference content. Can return: FindChangeContentTransparencySetting or NothingEnum enumerator.
> _Read Only_
>
> Mixed **userModifiedWrap**
>
> When true, the user has directly changed the text wrap path. Can return: Boolean or NothingEnum enumerator.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Application **parent**
>
> Identifies the FindObjectPreference parent, which is a Application.
> _Read Only_
>
> Preferences **preferences**
>
> Provides the related preferences object collection.
> _Read Only_
>
> Events **events**
>
> Provides the related events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the related event listeners collection.
> Mixed **storyDirection**
>
> Defines story direction. Can return: StoryDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **positionReferencePoint**
>
> For anchored-object positioning, this selects the point inside the referenced object that acts as the basis. Notes: Applies only with a custom anchored position. Can return: AnchorPoint enumerator or NothingEnum enumerator.
> Mixed **applyToMasterPageOnly**
>
> When true, master-spread text wraps affect that spread without propagating to pages using the master spread. Can return: Boolean or NothingEnum enumerator.
> Mixed **textWrapSide**
>
> Selects which side text wrap uses. Can return: TextWrapSideOptions enumerator or NothingEnum enumerator.
> Mixed **textWrapOffset**
>
> Sets the least allowed gap between text and wrapped-object edges. Provide the four entries as [top, left, bottom, right]. Can return: Ordered array containing top:Unit, left:Unit, bottom:Unit, right:Unit or NothingEnum enumerator.
> Mixed **textWrapMode**
>
> Chooses how text wrapping behaves. Can return: TextWrapModes enumerator or NothingEnum enumerator.
> Mixed **footnotesEnableOverrides**
>
> When true, document footnote options may be overridden. Can return: Boolean or NothingEnum enumerator.
> Mixed **footnotesSpanAcrossColumns**
>
> When true, footnotes can straddle columns. Can return: Boolean or NothingEnum enumerator.
> Mixed **footnotesMinimumSpacing**
>
> Sets the minimum preface gap for the initial footnote. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **footnotesSpaceBetween**
>
> Controls spacing from one footnote to the next. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **appliedObjectStyles**
>
> Specifies the object style or styles applied. Can return: String or NothingEnum enumerator. Can also accept: ObjectStyle.
> Mixed **fillColor**
>
> Specifies the swatch, whether color, gradient, tint, or mixed ink, assigned to the FindObjectPreference fill. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
> Mixed **fillTint**
>
> Gives the tint percentage for the FindObjectPreference fill color. Use 0 to 100 for an explicit tint percent, or -1 for the inherited or overridden value. Can return: Real or NothingEnum enumerator.
> Mixed **overprintFill**
>
> When true, underlying objects are overprinted by the FindObjectPreference fill color; when false, that fill knocks underlying colors out. Can return: Boolean or NothingEnum enumerator.
> Mixed **strokeWeight**
>
> Sets, in points, the FindObjectPreference stroke weight. Can return: Unit or NothingEnum enumerator.
> Mixed **miterLimit**
>
> Sets the stroke-width-to-miter-length ratio limit where a miter join, meaning pointed, switches into a squared-off bevel join. Can return: Real (1 - 500) or NothingEnum enumerator.
> Mixed **endCap**
>
> Chooses the ending shape for an open path. Can return: EndCap enumerator or NothingEnum enumerator.
> Mixed **endJoin**
>
> Chooses the FindObjectPreference corner join. Can return: EndJoin enumerator or NothingEnum enumerator.
> Mixed **strokeType**
>
> Names the stroke style that should be applied. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
> Mixed **strokeCornerAdjustment**
>
> Sets the FindObjectPreference corner adjustment. Can return: StrokeCornerAdjustment enumerator or NothingEnum enumerator.
> Mixed **strokeDashAndGap**
>
> Defines a custom dashed-line pattern through dash and gap measurements. Use as many as six point values: [dash1, gap1, dash2, gap2, dash3, gap3]. Can return: Array of Units or NothingEnum enumerator.
> Mixed **leftLineEnd**
>
> Assigns the arrowhead at the path start. Can return: ArrowHead enumerator or NothingEnum enumerator.
> Mixed **rightLineEnd**
>
> Assigns the arrowhead at the path end. Can return: ArrowHead enumerator or NothingEnum enumerator.
> Mixed **strokeColor**
>
> Specifies the swatch, whether color, gradient, tint, or mixed ink, assigned to the FindObjectPreference stroke. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
> Mixed **strokeTint**
>
> Gives the tint percentage for object's stroke color. Use 0 to 100 for an explicit tint percent, or -1 for the inherited or overridden value. Can return: Real or NothingEnum enumerator.
> Mixed **overprintStroke**
>
> When true, underlying objects are overprinted by the FindObjectPreference stroke color; when false, that stroke knocks underlying colors out. Can return: Boolean or NothingEnum enumerator.
> Mixed **gapColor**
>
> Specifies the swatch, whether color, gradient, tint, or mixed ink, used in the gap of a dashed, dotted, or striped stroke. For details, see stroke type. Can return: Swatch or NothingEnum enumerator.
> Mixed **gapTint**
>
> Gives the gap color tint percentage. Use 0 to 100 for an explicit tint percent, or -1 for the inherited or overridden value. Can return: Real or NothingEnum enumerator.
> Mixed **overprintGap**
>
> When true, the gap color overprints colors below it; when false, it knocks those colors out. Can return: Boolean or NothingEnum enumerator.
> Mixed **strokeAlignment**
>
> Sets the FindObjectPreference stroke alignment. Can return: StrokeAlignment enumerator or NothingEnum enumerator.
> Mixed **nonprinting**
>
> When true, the FindObjectPreference is excluded from printing. Can return: Boolean or NothingEnum enumerator.
> Mixed **gradientFillAngle**
>
> Sets the linear-gradient angle for the FindObjectPreference fill. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeAngle**
>
> Sets the linear-gradient angle for the FindObjectPreference stroke. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **textColumnCount**
>
> Sets how many columns the text frame contains. Note: Depending on the value of use fixed column width, resizing the text frame can automatically change this count. Can return: Long Integer (1 - 40) or NothingEnum enumerator.
> Mixed **textColumnGutter**
>
> Sets the gap between text-frame columns. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **textColumnFixedWidth**
>
> Sets the width assigned to text-frame columns. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **useFixedColumnWidth**
>
> When true, resizing the text frame preserves column width; when false, columns resize with the frame. Note: A true value can make the frame's column count change during resizing. Can return: Boolean or NothingEnum enumerator.
> Mixed **insetSpacing**
>
> Sets how far text is inset from text-frame edges, either as one value shared by every side or as 4 entries: [top inset, left inset, bottom inset, right inset]. Can return: Unit (0 - 8640 points), Array of 4 Units (0 - 8640 points) or NothingEnum enumerator.
> Mixed **firstBaselineOffset**
>
> Sets the distance from a text baseline to a text frame or cell's top inset. Can return: FirstBaseline enumerator or NothingEnum enumerator.
> Mixed **minimumFirstBaselineOffset**
>
> Sets the minimum distance from a text baseline to a text frame or cell's top inset. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **verticalJustification**
>
> Sets vertical alignment for text content. Can return: VerticalJustification enumerator or NothingEnum enumerator.
> Mixed **verticalThreshold**
>
> Sets the largest vertical gap permitted between a pair of paragraphs. Note: Applies only to justified vertical justification; this amount is added on top of paragraph-defined space before or space after values. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **ignoreWrap**
>
> When true, the text frame disregards text wrap settings on drawn or placed objects. Can return: Boolean or NothingEnum enumerator.
> Mixed **useCustomBaselineFrameGrid**
>
> When true, a custom baseline frame grid is used. Can return: Boolean or NothingEnum enumerator.
> Mixed **startingOffsetForBaselineFrameGrid**
>
> Sets the baseline-grid offset amount. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **baselineFrameGridRelativeOption**
>
> Chooses the reference location for the custom baseline grid, such as top of page, top margin, top of frame, or frame inset. Can return: BaselineFrameGridRelativeOption enumerator or NothingEnum enumerator.
> Mixed **baselineFrameGridIncrement**
>
> Sets baseline frame grid-line spacing. Can return: Unit (1 - 8640 points) or NothingEnum enumerator.
> Mixed **baselineFrameGridColor**
>
> Sets grid-line color from either a UI color or three double values for R, G, and B, with each value in the range 0 to 255. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
> Mixed **inverse**
>
> When true, text wrap is inverted. Can return: Boolean or NothingEnum enumerator.
> Mixed **contourType**
>
> Sets the contour type. Can return: ContourOptionsTypes enumerator or NothingEnum enumerator.
> Mixed **includeInsideEdges**
>
> When true, interior clipping paths are created inside the outer clipping path. Note: Applies only for alpha channel or detect edges clipping type. Can return: Boolean or NothingEnum enumerator.
> Mixed **anchoredPosition**
>
> Sets the anchored object's position in relation to the anchor. Can return: AnchorPosition enumerator or NothingEnum enumerator.
> Mixed **spineRelative**
>
> When true, anchored-object positioning is based on the page or spread binding spine. Can return: Boolean or NothingEnum enumerator.
> Mixed **lockPosition**
>
> When true, manual repositioning of the anchored object is blocked. Can return: Boolean or NothingEnum enumerator.
> Mixed **pinPosition**
>
> When true, the anchored object's placement is pinned between the top and bottom of the text frame. Can return: Boolean or NothingEnum enumerator.
> Mixed **anchorPoint**
>
> Selects the point in the anchored object used for positioning. Can return: AnchorPoint enumerator or NothingEnum enumerator.
> Mixed **horizontalReferencePoint**
>
> Selects the page's horizontal reference point. Applies only with a custom anchored position. Can return: AnchoredRelativeTo enumerator or NothingEnum enumerator.
> Mixed **verticalReferencePoint**
>
> Selects the page's vertical reference point. Applies with a custom anchored position. Can return: VerticallyRelativeTo enumerator or NothingEnum enumerator.
> Mixed **anchorXoffset**
>
> Sets the anchored object's horizontal (x) offset. Can return: Unit or NothingEnum enumerator.
> Mixed **anchorYoffset**
>
> Sets the anchored object's vertical (y) offset. For above line positioning, this matches the space after property. Can return: Unit or NothingEnum enumerator.
> Mixed **anchorSpaceAbove**
>
> Sets the gap above an anchored object positioned above-line. Can return: Unit or NothingEnum enumerator.
> Mixed **opticalMarginAlignment**
>
> When true, edge characters in the frame are repositioned to improve appearance. Can return: Boolean or NothingEnum enumerator.
> Mixed **opticalMarginSize**
>
> Sets the point-size basis for optical margin alignment calculations. (Range: 0.1 to 1296). Can return: Unit (0.1 - 1296 points) or NothingEnum enumerator.
> Mixed **leftCrop**
>
> Sets how much of a graphic's left edge is cropped, measured in the current units. Can return: Unit or NothingEnum enumerator.
> Mixed **topCrop**
>
> Sets how much of a graphic's top edge is cropped, measured in the current units. Can return: Unit or NothingEnum enumerator.
> Mixed **rightCrop**
>
> Sets how much of a graphic's right edge is cropped, measured in the current units. Can return: Unit or NothingEnum enumerator.
> Mixed **bottomCrop**
>
> Sets how much of a graphic's bottom edge is cropped, measured in the current units. Can return: Unit or NothingEnum enumerator.
> Mixed **fittingOnEmptyFrame**
>
> Chooses the frame-fitting behavior for placed or pasted content when the frame has no contents. The setting can apply to a frame, object style, document, or the application. Can return: EmptyFrameFittingOptions enumerator or NothingEnum enumerator.
> Mixed **fittingAlignment**
>
> Selects the point used to align the image empty during fitting in a frame. For details, consult frame fitting options. Can return: AnchorPoint enumerator or NothingEnum enumerator.
> Mixed **arrowHeadAlignment**
>
> Sets the FindObjectPreference arrowhead alignment. Can return: ArrowHeadAlignmentEnum enumerator or NothingEnum enumerator.
> Mixed **leftArrowHeadScale**
>
> Sets scaling for the arrowhead at the path start. (Range: 1 to 1000). Can return: Real or NothingEnum enumerator.
> Mixed **rightArrowHeadScale**
>
> Sets scaling for the arrowhead at the path end. (Range: 1 to 1000). Can return: Real or NothingEnum enumerator.
> Mixed **topLeftCornerOption**
>
> Chooses the corner shape for a rectangle's upper-left corner and for all corners on non-rectangular shapes. Note: a corner option allows a radius value; end join differs because its rounded or beveled result depends on stroke weight. Can return: CornerOptions enumerator or NothingEnum enumerator.
> Mixed **topRightCornerOption**
>
> Chooses the corner shape for a rectangle's upper-right corner. Can return: CornerOptions enumerator or NothingEnum enumerator.
> Mixed **bottomLeftCornerOption**
>
> Chooses the corner shape for a rectangle's lower-left corner. Can return: CornerOptions enumerator or NothingEnum enumerator.
> Mixed **bottomRightCornerOption**
>
> Chooses the corner shape for a rectangle's lower-right corner. Can return: CornerOptions enumerator or NothingEnum enumerator.
> Mixed **topLeftCornerRadius**
>
> Sets, in measurement units, the corner-effect radius for a rectangle's upper-left corner and all corners on non-rectangular shapes. Can return: Unit or NothingEnum enumerator.
> Mixed **topRightCornerRadius**
>
> Sets, in measurement units, the corner-effect radius for a rectangle's upper-right corner. Can return: Unit or NothingEnum enumerator.
> Mixed **bottomLeftCornerRadius**
>
> Sets, in measurement units, the corner-effect radius for a rectangle's lower-left corner. Can return: Unit or NothingEnum enumerator.
> Mixed **bottomRightCornerRadius**
>
> Sets, in measurement units, the corner-effect radius for a rectangle's lower-right corner. Can return: Unit or NothingEnum enumerator.
> Mixed **autoSizingType**
>
> Chooses the text-frame auto-sizing type, which also drives automatic reference-value adjustment. Example: with height only type, a top-left reference point shifts to top-center. Change auto-sizing type after other auto-sizing attributes are set. Can return: AutoSizingTypeEnum enumerator or NothingEnum enumerator.
> Mixed **autoSizingReferencePoint**
>
> Sets the reference point used by text-frame auto sizing. The auto-sizing type value can automatically substitute a suitable reference point; for height only dimension, for instance, top left reference point becomes top center. Can return: AutoSizingReferenceEnum enumerator or NothingEnum enumerator.
> Mixed **useMinimumHeightForAutoSizing**
>
> When true, the minimum height value participates in text-frame auto-sizing. Can return: Boolean or NothingEnum enumerator.
> Mixed **minimumHeightForAutoSizing**
>
> Sets the text frame's minimum auto-sizing height. Can return: Unit or NothingEnum enumerator.
> Mixed **useMinimumWidthForAutoSizing**
>
> When true, the minimum width value participates in text-frame auto-sizing. Can return: Boolean or NothingEnum enumerator.
> Mixed **minimumWidthForAutoSizing**
>
> Sets the text frame's minimum auto-sizing width. Can return: Unit or NothingEnum enumerator.
> Mixed **useNoLineBreaksForAutoSizing**
>
> When true, auto sizing does not introduce line-breaks afterward. Can return: Boolean or NothingEnum enumerator.
> Mixed **preserveAppearanceFromLayout**
>
> Controls the Preserve Appearance from Layout setting. Can return: PreserveAppearanceFromLayoutEnum enumerator or NothingEnum enumerator.
> Mixed **altTextSourceType**
>
> Sets the alternate-text source type. Can return: SourceType enumerator or NothingEnum enumerator.
> Mixed **actualTextSourceType**
>
> Sets the actual-text source type. Can return: SourceType enumerator or NothingEnum enumerator.
> Mixed **customAltText**
>
> Stores user-entered custom alternate text. Can return: String or NothingEnum enumerator.
> Mixed **customActualText**
>
> Stores user-entered custom actual text. Can return: String or NothingEnum enumerator.
> Mixed **altMetadataProperty**
>
> Selects the metadata property used as the alternate-text source. Can return: Ordered array containing namespacePrefix:String, propertyPath:String or NothingEnum enumerator.
> Mixed **actualMetadataProperty**
>
> Selects the metadata property used as the actual-text source. Can return: Ordered array containing namespacePrefix:String, propertyPath:String or NothingEnum enumerator.
> Mixed **applyTagType**
>
> Sets the page item's tag type. Can return: TagType enumerator or NothingEnum enumerator.
> Mixed **imageConversionType**
>
> Lets the user choose which image format conversion uses. Can return: ImageFormat enumerator or NothingEnum enumerator.
> Mixed **imageExportResolution**
>
> Sets export resolution. Can return: ImageResolution enumerator or NothingEnum enumerator.
> Mixed **gifOptionsPalette**
>
> Sets the palette used for GIF conversion. Note: Use this for GIF conversion, not JPEG conversion. Can return: GIFOptionsPalette enumerator or NothingEnum enumerator.
> Mixed **gifOptionsInterlaced**
>
> When true, interlaced GIFs are generated. Note: Use this for GIF conversion, not JPEG conversion. Can return: Boolean or NothingEnum enumerator.
> Mixed **jpegOptionsQuality**
>
> Sets converted JPEG image quality. Note: Use this for JPEG conversion, not GIF conversion. Can return: JPEGOptionsQuality enumerator or NothingEnum enumerator.
> Mixed **jpegOptionsFormat**
>
> Sets the formatting method used for converted JPEG images. Note: Use this for JPEG conversion, not GIF conversion. Can return: JPEGOptionsFormat enumerator or NothingEnum enumerator.
> Mixed **imageAlignment**
>
> Sets alignment for images. Can return: ImageAlignmentType enumerator or NothingEnum enumerator.
> Mixed **imageSpaceBefore**
>
> Sets Space Before for images. Can return: Real (0 - 8640) or NothingEnum enumerator.
> Mixed **imageSpaceAfter**
>
> Sets Space After for images. Can return: Real (0 - 8640) or NothingEnum enumerator.
> Mixed **useImagePageBreak**
>
> When true, object handling uses image page break settings. Can return: Boolean or NothingEnum enumerator.
> Mixed **imagePageBreak**
>
> Sets the image page break settings used with objects. Can return: ImagePageBreakType enumerator or NothingEnum enumerator.
> Object **properties**
>
> Allows multiple properties to be set in one operation.

### Methods

> String **altText**()
>
> Returns alternate text for the object.
> String **actualText**()
>
> Returns actual text for the object.
> String **toSource**()
>
> Builds a string that, when executed, returns the FindObjectPreference.
> FindObjectPreference **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Handler used for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
