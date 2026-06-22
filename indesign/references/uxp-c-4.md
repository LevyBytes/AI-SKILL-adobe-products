# Change Markings, Change Object Preference, Change Text Color Choices

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ChangeMarkings; ChangeObjectPreference; ChangeTextColorChoices.

## ChangeMarkings

Options that control how changed text is marked.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Leaves changed text unmarked.
> _Read Only_
>
> Number **STRIKETHROUGH** = 1699968114
>
> Marks changed text with a strikethrough.
> _Read Only_
>
> Number `UNDERLINE_SINGLE` = 1700097636
>
> Applies an underline to changed text.
> _Read Only_
>
> Number **OUTLINE** = 1869900910
>
> Marks changed text with an outline.

## ChangeObjectPreference

Preferences used when changing objects.

### Instance

> _Read Only_
>
> Mixed **transparencySettings**
>
> Holds the transparency configuration. Can return: FindChangeTransparencySetting or NothingEnum enumerator.
> _Read Only_
>
> Mixed **strokeTransparencySettings**
>
> Holds the stroke-specific transparency configuration. Can return: FindChangeStrokeTransparencySetting or NothingEnum enumerator.
> _Read Only_
>
> Mixed **fillTransparencySettings**
>
> Holds the fill transparency configuration used by the ChangeObjectPreference. Can return: FindChangeFillTransparencySetting or NothingEnum enumerator.
> _Read Only_
>
> Mixed **contentTransparencySettings**
>
> Holds transparency configuration for the ChangeObjectPreference content. Can return: FindChangeContentTransparencySetting or NothingEnum enumerator.
> _Read Only_
>
> Mixed **userModifiedWrap**
>
> True indicates that the user directly changed the text wrap path. Can return: Boolean or NothingEnum enumerator.
> _Read Only_
>
> Boolean **isValid**
>
> Reports whether the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Identifies the ChangeObjectPreference parent (a Application).
> _Read Only_
>
> Preferences **preferences**
>
> Provides the collection of preferences objects.
> _Read Only_
>
> Events **events**
>
> Provides the event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listener collection.
> Mixed **storyDirection**
>
> Sets the story direction. Can return: StoryDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **positionReferencePoint**
>
> Chooses a referenced-object point as the basis for anchored-object placement. Notes: Custom anchored position only. Can return: AnchorPoint enumerator or NothingEnum enumerator.
> Mixed **applyToMasterPageOnly**
>
> True limits text wraps on the master spread to that spread, without applying them to pages that use the master spread. Can return: Boolean or NothingEnum enumerator.
> Mixed **textWrapSide**
>
> Selects the side behavior for text wrap. Can return: TextWrapSideOptions enumerator or NothingEnum enumerator.
> Mixed **textWrapOffset**
>
> Sets minimum separation between text and wrapped-object edges. Use [top, left, bottom, right] for the four-value form. Can return: Ordered array containing top:Unit, left:Unit, bottom:Unit, right:Unit or NothingEnum enumerator.
> Mixed **textWrapMode**
>
> Chooses the wrap behavior. Can return: TextWrapModes enumerator or NothingEnum enumerator.
> Mixed **footnotesEnableOverrides**
>
> True lets document footnote options be overridden. Can return: Boolean or NothingEnum enumerator.
> Mixed **footnotesSpanAcrossColumns**
>
> True permits footnotes to straddle columns. Can return: Boolean or NothingEnum enumerator.
> Mixed **footnotesMinimumSpacing**
>
> Minimum Spacing Before First Footnote. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **footnotesSpaceBetween**
>
> Controls footnote-to-footnote spacing. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **appliedObjectStyles**
>
> Chooses object style(s) to apply. Can return: String or NothingEnum enumerator. Can also accept: ObjectStyle.
> Mixed **fillColor**
>
> Specifies the swatch (color, gradient, tint, or mixed ink) used for the ChangeObjectPreference fill. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
> Mixed **fillTint**
>
> Sets fill-color tint on the ChangeObjectPreference. Values 0 to 100 specify a tint percent; -1 selects the inherited or overridden value. Can return: Real or NothingEnum enumerator.
> Mixed **overprintFill**
>
> True makes the ChangeObjectPreference's fill color overprint underlying objects; false makes that fill knock out underlying colors. Can return: Boolean or NothingEnum enumerator.
> Mixed **strokeWeight**
>
> Sets the point weight for the ChangeObjectPreference's stroke. Can return: Unit or NothingEnum enumerator.
> Mixed **miterLimit**
>
> Controls when a pointed miter join converts into a squared-off bevel join, based on the stroke-width versus miter-length ratio. Can return: Real (1 - 500) or NothingEnum enumerator.
> Mixed **endCap**
>
> Selects the cap shape for an open path end. Can return: EndCap enumerator or NothingEnum enumerator.
> Mixed **endJoin**
>
> Sets the ChangeObjectPreference corner join. Can return: EndJoin enumerator or NothingEnum enumerator.
> Mixed **strokeType**
>
> Identifies which stroke style is used. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
> Mixed **strokeCornerAdjustment**
>
> Sets the ChangeObjectPreference corner adjustment. Can return: StrokeCornerAdjustment enumerator or NothingEnum enumerator.
> Mixed **strokeDashAndGap**
>
> Defines the dash and gap measurements for a custom dashed line pattern. Use as many as six point values, formatted [dash1, gap1, dash2, gap2, dash3, gap3]. Can return: Array of Units or NothingEnum enumerator.
> Mixed **leftLineEnd**
>
> Sets the arrowhead used at the path start. Can return: ArrowHead enumerator or NothingEnum enumerator.
> Mixed **rightLineEnd**
>
> Sets the arrowhead used at the path end. Can return: ArrowHead enumerator or NothingEnum enumerator.
> Mixed **strokeColor**
>
> Specifies the swatch (color, gradient, tint, or mixed ink) used for the ChangeObjectPreference stroke. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
> Mixed **strokeTint**
>
> Sets tint for object's stroke color. Values 0 to 100 specify a tint percent; -1 selects the inherited or overridden value. Can return: Real or NothingEnum enumerator.
> Mixed **overprintStroke**
>
> True makes the ChangeObjectPreference's stroke color overprint underlying objects; false makes the stroke knock out the underlying colors. Can return: Boolean or NothingEnum enumerator.
> Mixed **gapColor**
>
> Chooses the swatch (color, gradient, tint, or mixed ink) for gaps in dashed, dotted, or striped strokes. See stroke type for related information. Can return: Swatch or NothingEnum enumerator.
> Mixed **gapTint**
>
> Sets gap color tint. Values 0 to 100 specify a tint percent; -1 selects the inherited or overridden value. Can return: Real or NothingEnum enumerator.
> Mixed **overprintGap**
>
> True makes the gap color overprint underlying colors; false makes the gap color knock them out. Can return: Boolean or NothingEnum enumerator.
> Mixed **strokeAlignment**
>
> Sets the ChangeObjectPreference stroke alignment. Can return: StrokeAlignment enumerator or NothingEnum enumerator.
> Mixed **nonprinting**
>
> True prevents the ChangeObjectPreference from printing. Can return: Boolean or NothingEnum enumerator.
> Mixed **gradientFillAngle**
>
> Sets the linear gradient angle for the ChangeObjectPreference fill. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeAngle**
>
> Sets the linear gradient angle for the ChangeObjectPreference stroke. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **textColumnCount**
>
> Sets how many columns the text frame contains. Note: use fixed column width can make the column count update as the frame is resized. Can return: Long Integer (1 - 40) or NothingEnum enumerator.
> Mixed **textColumnGutter**
>
> Defines the text frame's inter-column gap. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **textColumnFixedWidth**
>
> Defines each text-frame column's width. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **useFixedColumnWidth**
>
> True preserves column width when the text frame is resized; false resizes columns with the text frame. Note: with true, resizing the frame may alter how many columns the frame contains. Can return: Boolean or NothingEnum enumerator.
> Mixed **insetSpacing**
>
> Sets how far text sits from text frame edges; supply either one value for every side or [top inset, left inset, bottom inset, right inset] as a 4-value array. Can return: Unit (0 - 8640 points), Array of 4 Units (0 - 8640 points) or NothingEnum enumerator.
> Mixed **firstBaselineOffset**
>
> Sets baseline-to-top-inset distance in a frame/cell. Can return: FirstBaseline enumerator or NothingEnum enumerator.
> Mixed **minimumFirstBaselineOffset**
>
> Sets the minimum baseline-to-top-inset distance in a frame/cell. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **verticalJustification**
>
> Selects vertical alignment for the text content. Can return: VerticalJustification enumerator or NothingEnum enumerator.
> Mixed **verticalThreshold**
>
> Sets the maximum extra vertical gap allowed between paragraphs. Note: This applies only with justified vertical justification, and the amount is added to paragraph space before or space after values. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **ignoreWrap**
>
> True ignores text wrap settings for drawn or placed objects inside the text frame. Can return: Boolean or NothingEnum enumerator.
> Mixed **useCustomBaselineFrameGrid**
>
> True switches the frame to a custom baseline grid. Can return: Boolean or NothingEnum enumerator.
> Mixed **startingOffsetForBaselineFrameGrid**
>
> Sets the baseline grid offset amount. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **baselineFrameGridRelativeOption**
>
> Chooses the custom baseline grid basis: top of page, top margin, top of frame, or frame inset. Can return: BaselineFrameGridRelativeOption enumerator or NothingEnum enumerator.
> Mixed **baselineFrameGridIncrement**
>
> Sets grid-line spacing. Can return: Unit (1 - 8640 points) or NothingEnum enumerator.
> Mixed **baselineFrameGridColor**
>
> Defines grid-line color as either a UI color or an array of three doubles, with R, G, and B values each in the range 0 to 255. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
> Mixed **inverse**
>
> True reverses the text wrap. Can return: Boolean or NothingEnum enumerator.
> Mixed **contourType**
>
> Selects the contour type. Can return: ContourOptionsTypes enumerator or NothingEnum enumerator.
> Mixed **includeInsideEdges**
>
> True adds interior clipping paths inside the outer clipping path. Note: Use only with alpha channel or detect edges clipping type. Can return: Boolean or NothingEnum enumerator.
> Mixed **anchoredPosition**
>
> Chooses anchored-object placement from the anchor. Can return: AnchorPosition enumerator or NothingEnum enumerator.
> Mixed **spineRelative**
>
> True makes the anchored object's position relative to the page or spread binding spine. Can return: Boolean or NothingEnum enumerator.
> Mixed **lockPosition**
>
> True blocks manual repositioning of the anchored object. Can return: Boolean or NothingEnum enumerator.
> Mixed **pinPosition**
>
> True constrains anchored-object placement between the frame top and bottom. Can return: Boolean or NothingEnum enumerator.
> Mixed **anchorPoint**
>
> Selects the point in the anchored object used for positioning. Can return: AnchorPoint enumerator or NothingEnum enumerator.
> Mixed **horizontalReferencePoint**
>
> Chooses the page-based horizontal reference. Only custom anchored position supports this. Can return: AnchoredRelativeTo enumerator or NothingEnum enumerator.
> Mixed **verticalReferencePoint**
>
> Chooses the page-based vertical reference. Use with custom anchored position. Can return: VerticallyRelativeTo enumerator or NothingEnum enumerator.
> Mixed **anchorXoffset**
>
> Sets the anchored object's horizontal (x) offset. Can return: Unit or NothingEnum enumerator.
> Mixed **anchorYoffset**
>
> Sets the anchored object's vertical (y) offset. For above line positioning, this maps to the space after property. Can return: Unit or NothingEnum enumerator.
> Mixed **anchorSpaceAbove**
>
> Sets spacing before an object anchored above the line. Can return: Unit or NothingEnum enumerator.
> Mixed **opticalMarginAlignment**
>
> True adjusts character positions at frame edges for improved appearance. Can return: Boolean or NothingEnum enumerator.
> Mixed **opticalMarginSize**
>
> Sets point-size basis for optical-margin alignment calculations. (Range: 0.1 to 1296). Can return: Unit (0.1 - 1296 points) or NothingEnum enumerator.
> Mixed **leftCrop**
>
> Sets how much measurement-unit cropping is applied to a graphic's left edge. Can return: Unit or NothingEnum enumerator.
> Mixed **topCrop**
>
> Sets how much measurement-unit cropping is applied to a graphic's top edge. Can return: Unit or NothingEnum enumerator.
> Mixed **rightCrop**
>
> Sets how much measurement-unit cropping is applied to a graphic's right edge. Can return: Unit or NothingEnum enumerator.
> Mixed **bottomCrop**
>
> Sets how much measurement-unit cropping is applied to a graphic's bottom edge. Can return: Unit or NothingEnum enumerator.
> Mixed **fittingOnEmptyFrame**
>
> Chooses the frame fitting option for placed or pasted content when the frame is empty. It can apply to a frame, object style, document, or application. Can return: EmptyFrameFittingOptions enumerator or NothingEnum enumerator.
> Mixed **fittingAlignment**
>
> Selects the point used to align the image empty during frame fitting. See frame fitting options for related information. Can return: AnchorPoint enumerator or NothingEnum enumerator.
> Mixed **arrowHeadAlignment**
>
> Sets the ChangeObjectPreference arrowhead alignment. Can return: ArrowHeadAlignmentEnum enumerator or NothingEnum enumerator.
> Mixed **leftArrowHeadScale**
>
> Sets scaling for the arrowhead at the path start. (Range: 1 to 1000). Can return: Real or NothingEnum enumerator.
> Mixed **rightArrowHeadScale**
>
> Sets scaling for the arrowhead at the path end. (Range: 1 to 1000). Can return: Real or NothingEnum enumerator.
> Mixed **topLeftCornerOption**
>
> For rectangular shapes, controls the top left corner; for non-rectangular shapes, controls all corners. Note: corner option differs from end join because a corner option can have a radius, while a rounded or beveled end join is determined by stroke weight. Can return: CornerOptions enumerator or NothingEnum enumerator.
> Mixed **topRightCornerOption**
>
> Sets the rectangular-shape top-right corner form. Can return: CornerOptions enumerator or NothingEnum enumerator.
> Mixed **bottomLeftCornerOption**
>
> Sets the rectangular-shape bottom-left corner form. Can return: CornerOptions enumerator or NothingEnum enumerator.
> Mixed **bottomRightCornerOption**
>
> Sets the rectangular-shape bottom-right corner form. Can return: CornerOptions enumerator or NothingEnum enumerator.
> Mixed **topLeftCornerRadius**
>
> Sets the measurement-unit radius of the corner effect for the top left corner of rectangular shapes and every corner of non-rectangular shapes. Can return: Unit or NothingEnum enumerator.
> Mixed **topRightCornerRadius**
>
> Sets the measurement-unit radius for the rectangular-shape top-right corner effect. Can return: Unit or NothingEnum enumerator.
> Mixed **bottomLeftCornerRadius**
>
> Sets the measurement-unit radius for the rectangular-shape bottom-left corner effect. Can return: Unit or NothingEnum enumerator.
> Mixed **bottomRightCornerRadius**
>
> Sets the measurement-unit radius for the rectangular-shape bottom-right corner effect. Can return: Unit or NothingEnum enumerator.
> Mixed **autoSizingType**
>
> Selects the text frame auto-sizing type. The chosen type automatically adjusts the reference value; for height only type, top-left reference point becomes top-center. Set the other auto-sizing attributes before changing auto-sizing type. Can return: AutoSizingTypeEnum enumerator or NothingEnum enumerator.
> Mixed **autoSizingReferencePoint**
>
> Sets the reference point used for text frame auto sizing. The reference point is automatically adjusted to the suitable value for the auto-sizing type value; for height only dimension, top left reference point becomes top center. Can return: AutoSizingReferenceEnum enumerator or NothingEnum enumerator.
> Mixed **useMinimumHeightForAutoSizing**
>
> True uses a minimum height value while auto-sizing the text frame. Can return: Boolean or NothingEnum enumerator.
> Mixed **minimumHeightForAutoSizing**
>
> Sets the minimum height used for text frame auto-sizing. Can return: Unit or NothingEnum enumerator.
> Mixed **useMinimumWidthForAutoSizing**
>
> True uses a minimum width value while auto-sizing the text frame. Can return: Boolean or NothingEnum enumerator.
> Mixed **minimumWidthForAutoSizing**
>
> Sets the minimum width used for text frame auto-sizing. Can return: Unit or NothingEnum enumerator.
> Mixed **useNoLineBreaksForAutoSizing**
>
> True keeps auto sizing from adding line-breaks. Can return: Boolean or NothingEnum enumerator.
> Mixed **preserveAppearanceFromLayout**
>
> Preserve Appearance from Layout. Can return: PreserveAppearanceFromLayoutEnum enumerator or NothingEnum enumerator.
> Mixed **altTextSourceType**
>
> Selects the source type for alternate text. Can return: SourceType enumerator or NothingEnum enumerator.
> Mixed **actualTextSourceType**
>
> Selects the source type for actual text. Can return: SourceType enumerator or NothingEnum enumerator.
> Mixed **customAltText**
>
> Stores the user-entered custom alternate text. Can return: String or NothingEnum enumerator.
> Mixed **customActualText**
>
> Stores the user-entered custom actual text. Can return: String or NothingEnum enumerator.
> Mixed **altMetadataProperty**
>
> Selects the metadata property used as the alternate text source. Can return: Ordered array containing namespacePrefix:String, propertyPath:String or NothingEnum enumerator.
> Mixed **actualMetadataProperty**
>
> Selects the metadata property used as the actual text source. Can return: Ordered array containing namespacePrefix:String, propertyPath:String or NothingEnum enumerator.
> Mixed **applyTagType**
>
> Selects the page item tag type. Can return: TagType enumerator or NothingEnum enumerator.
> Mixed **imageConversionType**
>
> Lets the user choose a conversion image format. Can return: ImageFormat enumerator or NothingEnum enumerator.
> Mixed **imageExportResolution**
>
> Sets the export resolution. Can return: ImageResolution enumerator or NothingEnum enumerator.
> Mixed **gifOptionsPalette**
>
> Sets the GIF conversion color palette. Note: JPEG conversion does not use this. Can return: GIFOptionsPalette enumerator or NothingEnum enumerator.
> Mixed **gifOptionsInterlaced**
>
> True outputs GIFs as interlaced. Note: JPEG conversion does not use this. Can return: Boolean or NothingEnum enumerator.
> Mixed **jpegOptionsQuality**
>
> Sets converted-JPEG image quality. Note: GIF conversion does not use this. Can return: JPEGOptionsQuality enumerator or NothingEnum enumerator.
> Mixed **jpegOptionsFormat**
>
> Chooses converted-JPEG formatting method. Note: GIF conversion does not use this. Can return: JPEGOptionsFormat enumerator or NothingEnum enumerator.
> Mixed **imageAlignment**
>
> Sets image alignment. Can return: ImageAlignmentType enumerator or NothingEnum enumerator.
> Mixed **imageSpaceBefore**
>
> Sets Space Before for images. Can return: Real (0 - 8640) or NothingEnum enumerator.
> Mixed **imageSpaceAfter**
>
> Sets Space After for images. Can return: Real (0 - 8640) or NothingEnum enumerator.
> Mixed **useImagePageBreak**
>
> True uses image page break settings in objects. Can return: Boolean or NothingEnum enumerator.
> Mixed **imagePageBreak**
>
> Provides image page break settings for use with objects. Can return: ImagePageBreakType enumerator or NothingEnum enumerator.
> Object **properties**
>
> Allows several properties to be set at the same time.

### Methods

> String **altText**()
>
> Returns the object's alternate text.
> String **actualText**()
>
> Returns the object's actual text.
> String **toSource**()
>
> Creates a string that, when executed, returns the ChangeObjectPreference.
> ChangeObjectPreference **getElements**()
>
> Resolves the object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ChangeTextColorChoices

Options for changed text color.

### Class

> _Read Only_
>
> Number `CHANGE_USES_GALLEY_TEXT_COLOR` = 1700095843
>
> Uses the galley text color for changed text.
> _Read Only_
>
> Number `CHANGE_USES_CHANGE_PREF_COLOR` = 1700098147
>
> Uses the text color set in track changes preferences for changed text. For information, see text color for added text, text color for deleted text, or text color for moved text.
