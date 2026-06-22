# Indesign (part 57)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Underline gap swatch, including color, gradient, tint, or mixed ink. Valid when underline type is not solid.
  \*/
  underlineGapColor: Swatch | string | NothingEnum

/\*\*

- When true, the underline gap color overprints.
  \*/
  underlineGapOverprint: boolean | NothingEnum

/\*\*

- Underline gap-color tint percentage. Range: 0 to 100. Valid when underline type is not solid.
  \*/
  underlineGapTint: number | NothingEnum

/\*\*

- Offset amount from the text baseline for the underline.
  \*/
  underlineOffset: number | NothingEnum

/\*\*

- When true, the underline stroke color overprints.
  \*/
  underlineOverprint: boolean | NothingEnum

/\*\*

- Underline stroke tint percentage. Range: 0 to 100.
  \*/
  underlineTint: number | NothingEnum

/\*\*

- StrokeStyle used for underline drawing.
  \*/
  underlineType: StrokeStyle | string | NothingEnum

/\*\*

- Weight assigned to the underline stroke.
  \*/
  underlineWeight: number | NothingEnum

/\*\*

- Vertical scale applied to ChangeGrepPreference.
  \*/
  verticalScale: number | NothingEnum

/\*\*

- When true, warichu is enabled.
  \*/
  warichu: boolean | NothingEnum

/\*\*

- Warichu alignment setting.
  \*/
  warichuAlignment: WarichuAlignment | NothingEnum

/\*\*

- Minimum character count allowed after a line break.
  \*/
  warichuCharsAfterBreak: number | NothingEnum

/\*\*

- Minimum character count allowed before a line break.
  \*/
  warichuCharsBeforeBreak: number | NothingEnum

/\*\*

- Gap between lines of warichu characters.
  \*/
  warichuLineSpacing: number | NothingEnum

/\*\*

- Number of warichu lines inside one normal line.
  \*/
  warichuLines: number | NothingEnum

/\*\*

- Percentage used to scale parent text size when calculating warichu size.
  \*/
  warichuSize: number | NothingEnum

/\*\*

- Horizontal x offset for diacritic adjustment.
  \*/
  xOffsetDiacritic: number | NothingEnum

/\*\*

- Vertical y offset for diacritic adjustment.
  \*/
  yOffsetDiacritic: number | NothingEnum

/\*\*

- When true, the Nth design axis of a variable font is hidden.
- @param nthAxisIndex Design axis index.
  \*/
  isNthDesignAxisHidden(nthAxisIndex: number): boolean

/\*\*

- Sets the Nth design axis on a variable font.
- @param nthAxisIndex Design axis index.
- @param nthAxisValue Nth design axis value.
  \*/
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void
  }

/\*\*

- Preferences for changing glyphs.
  \*/
  declare class ChangeGlyphPreference extends Preference {
  /\*\*
  - Font assigned to ChangeGlyphPreference, supplied either as a font object or as the font family name.
    \*/
    appliedFont: Font | string | NothingEnum

/\*\*

- Design Axes values.
  \*/
  designAxes: number[] | NothingEnum

/\*\*

- Font style name.
  \*/
  fontStyle: string | NothingEnum

/\*\*

- Glyph GID/CID value.
  \*/
  glyphID: number | NothingEnum

/\*\*

- When true, the Nth design axis of a variable font is hidden.
- @param nthAxisIndex Design axis index.
  \*/
  isNthDesignAxisHidden(nthAxisIndex: number): boolean

/\*\*

- Sets the Nth design axis on a variable font.
- @param nthAxisIndex Design axis index.
- @param nthAxisValue Nth design axis value.
  \*/
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void
  }

/\*\*

- Preferences for changing objects.
  \*/
  declare class ChangeObjectPreference extends Preference {
  /\*\*
  - Metadata property used as the actual-text source. Return form may be [namespacePrefix:String, propertyPath:String] or a NothingEnum enumerator.
    \*/
    actualMetadataProperty: any

/\*\*

- Actual-text source type.
  \*/
  actualTextSourceType: SourceType | NothingEnum

/\*\*

- Metadata property used as the alternate-text source. Return form may be [namespacePrefix:String, propertyPath:String] or a NothingEnum enumerator.
  \*/
  altMetadataProperty: any

/\*\*

- Alternate-text source type.
  \*/
  altTextSourceType: SourceType | NothingEnum

/\*\*

- Point on the anchored object used for positioning.
  \*/
  anchorPoint: AnchorPoint | NothingEnum

/\*\*

- Space above an anchored object positioned above the line.
  \*/
  anchorSpaceAbove: number | NothingEnum

/\*\*

- Horizontal x offset for the anchored object.
  \*/
  anchorXoffset: number | NothingEnum

/\*\*

- Vertical y offset for the anchored object; for above-line positioning, it corresponds to the space after property.
  \*/
  anchorYoffset: number | NothingEnum

/\*\*

- Anchored-object position relative to the anchor.
  \*/
  anchoredPosition: AnchorPosition | NothingEnum

/\*\*

- Object style or styles applied.
  \*/
  appliedObjectStyles: string | NothingEnum | ObjectStyle

/\*\*

- Page item tag type.
  \*/
  applyTagType: TagType | NothingEnum

/\*\*

- When true, text wrap on the master spread affects only that spread, not pages using the master spread.
  \*/
  applyToMasterPageOnly: boolean | NothingEnum

/\*\*

- Arrowhead alignment used by ChangeObjectPreference.
  \*/
  arrowHeadAlignment: ArrowHeadAlignmentEnum | NothingEnum

/\*\*

- Reference point for text-frame auto sizing. The reference point adjusts automatically to a suitable value based on the auto-sizing type; for example, top left becomes top center for height only dimension.
  \*/
  autoSizingReferencePoint: AutoSizingReferenceEnum | NothingEnum

/\*\*

- Text-frame auto-sizing type. The reference value adjusts by type; for height only type, for example, top-left becomes top-center. Change the auto-sizing type after setting other auto-sizing attributes.
  \*/
  autoSizingType: AutoSizingTypeEnum | NothingEnum

/\*\*

- Grid-line color, provided either as three doubles from 0 to 255 representing R, G, and B, or as a UI color.
  \*/
  baselineFrameGridColor: [number, number, number] | UIColors | NothingEnum

/\*\*

- Distance separating grid lines.
  \*/
  baselineFrameGridIncrement: number | NothingEnum

/\*\*

- Location used as the basis for the custom baseline grid: top of page, top margin, top of frame, or frame inset.
  \*/
  baselineFrameGridRelativeOption: BaselineFrameGridRelativeOption | NothingEnum

/\*\*

- Measurement-unit amount used to crop a graphic's bottom edge.
  \*/
  bottomCrop: number | NothingEnum

/\*\*

- Shape applied to the bottom-left corner of rectangular shapes.
  \*/
  bottomLeftCornerOption: CornerOptions | NothingEnum

/\*\*

- Corner-effect radius, in measurement units, for the bottom-left corner of rectangular shapes.
  \*/
  bottomLeftCornerRadius: number | NothingEnum

/\*\*

- Shape applied to the bottom-right corner of rectangular shapes.
  \*/
  bottomRightCornerOption: CornerOptions | NothingEnum

/\*\*

- Corner-effect radius, in measurement units, for the bottom-right corner of rectangular shapes.
  \*/
  bottomRightCornerRadius: number | NothingEnum

/\*\*

- Content transparency settings for ChangeObjectPreference.
  \*/
  readonly contentTransparencySettings: FindChangeContentTransparencySetting | NothingEnum

/\*\*

- Contour type setting.
  \*/
  contourType: ContourOptionsTypes | NothingEnum

/\*\*

- Custom actual text supplied by the user.
  \*/
  customActualText: string | NothingEnum

/\*\*

- Custom alternate text supplied by the user.
  \*/
  customAltText: string | NothingEnum

/\*\*

- End shape for an open path.
  \*/
  endCap: EndCap | NothingEnum

/\*\*

- Corner join used by ChangeObjectPreference.
  \*/
  endJoin: EndJoin | NothingEnum

/\*\*

- Fill swatch for ChangeObjectPreference, including color, gradient, tint, or mixed ink.
  \*/
  fillColor: Swatch | NothingEnum | string

/\*\*

- Tint percentage for the ChangeObjectPreference fill color. Use 0 to 100 for a tint value, or -1 for inherited or overridden behavior.
  \*/
  fillTint: number | NothingEnum

/\*\*

- Fill transparency settings for ChangeObjectPreference.
  \*/
  readonly fillTransparencySettings: FindChangeFillTransparencySetting | NothingEnum

/\*\*

- Distance from the text baseline to the text frame or cell top inset.
  \*/
  firstBaselineOffset: FirstBaseline | NothingEnum

/\*\*

- Alignment point for fitting an empty image frame. For details, see frame fitting options.
  \*/
  fittingAlignment: AnchorPoint | NothingEnum

/\*\*

- Frame-fitting option applied to placed or pasted content when the frame is empty. It can apply to a frame, object style, document, or the application.
  \*/
  fittingOnEmptyFrame: EmptyFrameFittingOptions | NothingEnum

/\*\*

- When true, overrides for document footnote options are enabled.
  \*/
  footnotesEnableOverrides: boolean | NothingEnum

/\*\*

- Minimum spacing placed before the first footnote.
  \*/
  footnotesMinimumSpacing: number | NothingEnum

/\*\*

- Space between footnotes.
  \*/
  footnotesSpaceBetween: number | NothingEnum

/\*\*

- When true, straddling footnotes are enabled.
  \*/
  footnotesSpanAcrossColumns: boolean | NothingEnum

/\*\*

- Gap swatch for a dashed, dotted, or striped stroke, including color, gradient, tint, or mixed ink. For details, see stroke type.
  \*/
  gapColor: Swatch | NothingEnum

/\*\*

- Gap-color tint percentage. Use 0 to 100 for a tint value, or -1 for inherited or overridden behavior.
  \*/
  gapTint: number | NothingEnum

/\*\*

- When true, interlaced GIFs are generated. Not validwhen image conversion is JPEG.
  \*/
  gifOptionsInterlaced: boolean | NothingEnum

/\*\*

- GIF conversion color palette. Not valid when image conversion is JPEG.
  \*/
  gifOptionsPalette: GIFOptionsPalette | NothingEnum

/\*\*

- Linear fill-gradient angle for ChangeObjectPreference. Range: -180 to 180.
  \*/
  gradientFillAngle: number | NothingEnum

/\*\*

- Linear stroke-gradient angle for ChangeObjectPreference. Range: -180 to 180.
  \*/
  gradientStrokeAngle: number | NothingEnum

/\*\*

- Horizontal page reference point. Valid only when anchored position is custom.
  \*/
  horizontalReferencePoint: AnchoredRelativeTo | NothingEnum

/\*\*

- When true, drawn or placed objects in the text frame ignore text wrap settings.
  \*/
  ignoreWrap: boolean | NothingEnum

/\*\*

- Image alignment setting.
  \*/
  imageAlignment: ImageAlignmentType | NothingEnum

/\*\*

- Lets the user choose the conversion image format.
  \*/
  imageConversionType: ImageFormat | NothingEnum

/\*\*

- Export resolution setting.
  \*/
  imageExportResolution: ImageResolution | NothingEnum

/\*\*

- Page-break settings for images used with objects.
  \*/
  imagePageBreak: ImagePageBreakType | NothingEnum

/\*\*

- Space After value applied to images.
  \*/
  imageSpaceAfter: number | NothingEnum

/\*\*

- Space Before value applied to images.
  \*/
  imageSpaceBefore: number | NothingEnum

/\*\*

- When true, interior clipping paths are created inside the surrounding clipping path. Available only for alpha channel or detect edges clipping types.
  \*/
  includeInsideEdges: boolean | NothingEnum

/\*\*

- Text-frame edge offset, either one value for all sides or a 4-value array formatted as [top inset, left inset, bottom inset, right inset].
  \*/
  insetSpacing: number | [number, number, number, number] | NothingEnum

/\*\*

- When true, text wrap is inverted.
  \*/
  inverse: boolean | NothingEnum

/\*\*

- Formatting method for JPEG conversion. Not validwhen image conversion is GIF.
  \*/
  jpegOptionsFormat: JPEGOptionsFormat | NothingEnum

/\*\*

- Converted JPEG image quality. Not valid when image conversion is GIF.
  \*/
  jpegOptionsQuality: JPEGOptionsQuality | NothingEnum

/\*\*

- Scale applied to the arrowhead at the path start. Range: 1 to 1000.
  \*/
  leftArrowHeadScale: number | NothingEnum

/\*\*

- Measurement-unit amount used to crop a graphic's left edge.
  \*/
  leftCrop: number | NothingEnum

/\*\*

- Arrowhead applied to the path start.
  \*/
  leftLineEnd: ArrowHead | NothingEnum

/\*\*

- When true, manual anchored-object positioning is prevented.
  \*/
  lockPosition: boolean | NothingEnum

/\*\*

- Minimum distance from the text baseline to the text frame or cell top inset.
  \*/
  minimumFirstBaselineOffset: number | NothingEnum

/\*\*

- Minimum height used for text-frame auto-sizing.
  \*/
  minimumHeightForAutoSizing: number | NothingEnum

/\*\*

- Minimum width used for text-frame auto-sizing.
  \*/
  minimumWidthForAutoSizing: number | NothingEnum

/\*\*

- Ratio limit where stroke width versus miter length changes a miter (pointed) join into a bevel (squared-off) join.
  \*/
  miterLimit: number | NothingEnum

/\*\*

- When true, ChangeObjectPreference is nonprinting.
  \*/
  nonprinting: boolean | NothingEnum

/\*\*

- When true, characters at frame edges are repositioned for a better appearance.
  \*/
  opticalMarginAlignment: boolean | NothingEnum

/\*\*

- Point size used as the basis for optical margin alignment calculations. Range: 0.1 to 1296.
  \*/
  opticalMarginSize: number | NothingEnum

/\*\*

- When true, the fill color for ChangeObjectPreference overprints underlying objects; when false, it knocks out underlying colors.
  \*/
  overprintFill: boolean | NothingEnum

/\*\*

- When true, the gap color overprints underlying colors; when false, it knocks them out.
  \*/
  overprintGap: boolean | NothingEnum

/\*\*

- When true, the stroke color for ChangeObjectPreference overprints underlying objects; when false, it knocks out theunderlying colors.
  \*/
  overprintStroke: boolean | NothingEnum

/\*\*

- When true, the anchored object keeps its position between the top and bottom of the text frame.
  \*/
  pinPosition: boolean | NothingEnum

/\*\*

- AnchorPoint on the referenced object used as the basis for locating the anchored object. Notes: applies only when anchored position is custom.
  \*/
  positionReferencePoint: AnchorPoint | NothingEnum

/\*\*

- Preferences collection associated with this object.
  \*/
  readonly preferences: Preferences

/\*\*

- Preserve Appearance from Layout.
  \*/
  preserveAppearanceFromLayout: PreserveAppearanceFromLayoutEnum | NothingEnum

/\*\*

- Scale percentage for the path's ending arrowhead. (Range: 1 to 1000).
  \*/
  rightArrowHeadScale: number | NothingEnum

/\*\*

- Measurement-unit crop amount for a graphic's right edge.
  \*/
  rightCrop: number | NothingEnum

/\*\*

- ArrowHead used at the path end.
  \*/
  rightLineEnd: ArrowHead | NothingEnum

/\*\*

- When true, anchored-object placement is measured from the page or spread binding spine.
  \*/
  spineRelative: boolean | NothingEnum

/\*\*

- Offset amount for the baseline grid.
  \*/
  startingOffsetForBaselineFrameGrid: number | NothingEnum

/\*\*

- StoryDirectionOptions value for story flow direction.
  \*/
  storyDirection: StoryDirectionOptions | NothingEnum

/\*\*

- StrokeAlignment used by the ChangeObjectPreference stroke.
  \*/
  strokeAlignment: StrokeAlignment | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for the ChangeObjectPreference stroke.
  \*/
  strokeColor: Swatch | NothingEnum | string

/\*\*

- StrokeCornerAdjustment used by ChangeObjectPreference.
  \*/
  strokeCornerAdjustment: StrokeCornerAdjustment | NothingEnum

/\*\*

- Dash and gap values for a custom dashed-line pattern. Supply as many as six point values in [dash1, gap1, dash2, gap2, dash3, gap3] order.
  \*/
  strokeDashAndGap: number[] | NothingEnum

/\*\*

- Tint percentage for the object's stroke color. (Accepted explicit tint values are 0 through 100; use -1 for the inherited or overridden value.).
  \*/
  strokeTint: number | NothingEnum

/\*\*

- Stroke transparency configuration.
  \*/
  readonly strokeTransparencySettings: FindChangeStrokeTransparencySetting | NothingEnum

/\*\*

- Name of the StrokeStyle to use.
  \*/
  strokeType: StrokeStyle | NothingEnum | string

/\*\*

- Point weight assigned to the ChangeObjectPreference stroke.
  \*/
  strokeWeight: number | NothingEnum

/\*\*

- Count of columns in the text frame. Note: the value can update automatically as the frame changes size, depending on use fixed column width.
  \*/
  textColumnCount: number | NothingEnum

/\*\*

- Fixed width used for text-frame columns.
  \*/
  textColumnFixedWidth: number | NothingEnum

/\*\*

- Gutter spacing between text-frame columns.
  \*/
  textColumnGutter: number | NothingEnum

/\*\*

- TextWrapModes value controlling text wrap behavior. .
  \*/
  textWrapMode: TextWrapModes | NothingEnum

/\*\*

- Minimum gap between text and the wrapped object's edges. Use four values ordered as [top, left, bottom, right]. . Return values can be an ordered array with top:Unit, left:Unit, bottom:Unit, right:Unit entries, or a NothingEnum enumerator.
  \*/
  textWrapOffset: any

/\*\*

- TextWrapSideOptions setting for wrap-side behavior.
  \*/
  textWrapSide: TextWrapSideOptions | NothingEnum

/\*\*

- Measurement-unit crop amount for a graphic's top edge.
  \*/
  topCrop: number | NothingEnum

/\*\*

- CornerOptions shape applied to a rectangular shape's top-left corner and to every corner on non-rectangular shapes. Note: a corner option differs from an end join because its radius is set directly, while rounded or beveled end-join appearance depends on stroke weight.
  \*/
  topLeftCornerOption: CornerOptions | NothingEnum

/\*\*

- Measurement-unit radius for the top-left corner effect on rectangular shapes and the all-corner effect on non-rectangular shapes.
  \*/
  topLeftCornerRadius: number | NothingEnum

/\*\*

- CornerOptions shape for the top right corner of rectangular shapes.
  \*/
  topRightCornerOption: CornerOptions | NothingEnum

/\*\*

- Measurement-unit radius for the corner effect on a rectangular shape's top right corner.
  \*/
  topRightCornerRadius: number | NothingEnum

/\*\*

- Transparency configuration.
  \*/
  readonly transparencySettings: FindChangeTransparencySetting | NothingEnum

/\*\*

- When true, a custom baseline frame grid is enabled.
  \*/
  useCustomBaselineFrameGrid: boolean | NothingEnum

/\*\*

- When true, column width stays fixed as the text frame is resized. When false, resizing the frame also resizes the columns. Note: with this enabled, resizing can alter how many columns the frame contains.
  \*/
  useFixedColumnWidth: boolean | NothingEnum

/\*\*

- When true, objects use image page break settings.
  \*/
  useImagePageBreak: boolean | NothingEnum

/\*\*

- When true, the minimum height value participates in text-frame auto sizing. .
  \*/
  useMinimumHeightForAutoSizing: boolean | NothingEnum

/\*\*

- When true, the minimum width value participates in text-frame auto sizing. .
  \*/
  useMinimumWidthForAutoSizing: boolean | NothingEnum

/\*\*

- When true, auto sizing does not add line breaks. .
  \*/
  useNoLineBreaksForAutoSizing: boolean | NothingEnum

/\*\*

- Read-only flag showing whether the user explicitly edited the text wrap path.
  \*/
  readonly userModifiedWrap: boolean | NothingEnum

/\*\*

- VerticalJustification setting for the text content. .
  \*/
  verticalJustification: VerticalJustification | NothingEnum

/\*\*

- Page-relative vertical reference point. Valid when anchored position is custom.
  \*/
  verticalReferencePoint: VerticallyRelativeTo | NothingEnum

/\*\*

- Greatest vertical spacing allowed between two paragraphs. Note: valid only with justified vertical justification; this amount is added on top of paragraph space before or space after values.
  \*/
  verticalThreshold: number | NothingEnum

/\*\*

- Returns the object's actual text.
  \*/
  actualText(): string

/\*\*

- Returns the object's alternate text.
  \*/
  altText(): string
  }

/\*\*

- Preferences used for change transliteration.
  \*/
  declare class ChangeTransliteratePreference extends Preference {
  /\*\*
  - When true, words without an associated hyphenation dictionary may line-break at any character.
    \*/
    allowArbitraryHyphenation: boolean | NothingEnum

/\*\*

- Character style used as the search target or replacement.
  \*/
  appliedCharacterStyle: string | NothingEnum | CharacterStyle

/\*\*

- Font assigned to ChangeTransliteratePreference, given as either a font object or font-family name.
  \*/
  appliedFont: Font | string | NothingEnum

/\*\*

- Language used as the search target or replacement.
  \*/
  appliedLanguage: string | NothingEnum | Language | LanguageWithVendors

/\*\*

- NumberingList membership to apply.
  \*/
  appliedNumberingList: NumberingList | string | NothingEnum

/\*\*

- Paragraph style used as the search target or replacement.
  \*/
  appliedParagraphStyle: string | NothingEnum | ParagraphStyle

/\*\*

- Auto-leading percentage based on type size. (Range: 0 to 500).
  \*/
  autoLeading: number | NothingEnum

/\*\*

- Threshold count of half-width characters that automatically run horizontally in vertical text.
  \*/
  autoTcy: number | NothingEnum

/\*\*

- When true, Roman characters are included in auto tcy.
  \*/
  autoTcyIncludeRoman: boolean | NothingEnum

/\*\*

- When true or set to an enumeration value, ragged lines are balanced. Note: cannot be used with a single-line text composer.
  \*/
  balanceRaggedLines: boolean | BalanceLinesStyle | NothingEnum

/\*\*

- Baseline shift applied to text.
  \*/
  baselineShift: number | NothingEnum

/\*\*

- Bullet character value.
  \*/
  readonly bulletChar: Bullet | NothingEnum

/\*\*

- Alignment for the bullet character.
  \*/
  bulletsAlignment: ListAlignment | NothingEnum

/\*\*

- Bullets and numbering list type.
  \*/
  bulletsAndNumberingListType: ListType | NothingEnum

/\*\*

- CharacterStyle used for the text after string.
  \*/
  bulletsCharacterStyle: CharacterStyle | string | NothingEnum

/\*\*

- Text-after string expression for bullets.
  \*/
  bulletsTextAfter: string | NothingEnum

/\*\*

- When true, the selected kinsoku set also includes the double period (..), ellipse (...), and double hyphen (--). Note: valid only while a kinsoku set is active.
  \*/
  bunriKinshi: boolean | NothingEnum

/\*\*

- Capitalization scheme setting.
  \*/
  capitalization: Capitalization | NothingEnum

/\*\*

- FindChangeTransliterateCharacterTypes value used as the replacement character type.
  \*/
  changeCharacterType: FindChangeTransliterateCharacterTypes | NothingEnum

/\*\*

- Alignment of small characters against the line's largest character.
  \*/
  characterAlignment: CharacterAlignment | NothingEnum

/\*\*

- Counterclockwise rotation angle in degrees for individual characters.
  \*/
  characterRotation: number | NothingEnum

/\*\*

- When true, grid tracking is used for tracking non-Roman characters in CJK grids.
  \*/
  cjkGridTracking: boolean | NothingEnum

/\*\*

- Text composer selected to compose the text.
  \*/
  composer: string | NothingEnum

/\*\*

- Design Axes value.
  \*/
  designAxes: number[] | NothingEnum
