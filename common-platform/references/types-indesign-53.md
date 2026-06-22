# Indesign (part 53)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Preferences used for glyph find operations.
  \*/
  declare class FindGlyphPreference extends Preference {
  /\*\*
  - Font for FindGlyphPreference, supplied as a font object or by font-family name.
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

- Registry Ordered font grouping.
  \*/
  rosFontGroup: [string, string] | NothingEnum

/\*\*

- When true, Nth design axis of variable font is hidden.
- @param nthAxisIndex Design axis index.
  \*/
  isNthDesignAxisHidden(nthAxisIndex: number): boolean

/\*\*

- Assigns Nth design axis of a variable font.
- @param nthAxisIndex Design axis index.
- @param nthAxisValue Value for nth design axis.
  \*/
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void
  }

/\*\*

- Preferences used for object find operations.
  \*/
  declare class FindObjectPreference extends Preference {
  /\*\*
  - Metadata property selected as the actual-text source. Can return an ordered array with namespacePrefix:String and propertyPath:String, or the NothingEnum enumerator.
    \*/
    actualMetadataProperty: any

/\*\*

- SourceType used for actual text.
  \*/
  actualTextSourceType: SourceType | NothingEnum

/\*\*

- Metadata property selected as the alternate-text source. Can return an ordered array with namespacePrefix:String and propertyPath:String, or the NothingEnum enumerator.
  \*/
  altMetadataProperty: any

/\*\*

- SourceType used for alternate text.
  \*/
  altTextSourceType: SourceType | NothingEnum

/\*\*

- Point on the anchored object used for positioning.
  \*/
  anchorPoint: AnchorPoint | NothingEnum

/\*\*

- Space placed above an above-line anchored object.
  \*/
  anchorSpaceAbove: number | NothingEnum

/\*\*

- Horizontal, or x, offset for the anchored object.
  \*/
  anchorXoffset: number | NothingEnum

/\*\*

- Vertical, or y, offset for the anchored object. For above-line positioning, this maps to the space-after property.
  \*/
  anchorYoffset: number | NothingEnum

/\*\*

- Anchored-object position relative to its anchor.
  \*/
  anchoredPosition: AnchorPosition | NothingEnum

/\*\*

- Object style or styles in use.
  \*/
  appliedObjectStyles: string | NothingEnum | ObjectStyle

/\*\*

- Page item tag type.
  \*/
  applyTagType: TagType | NothingEnum

/\*\*

- When true, master-spread text wrap affects only that spread, not pages where the master spread is applied.
  \*/
  applyToMasterPageOnly: boolean | NothingEnum

/\*\*

- Arrowhead alignment used by FindObjectPreference.
  \*/
  arrowHeadAlignment: ArrowHeadAlignmentEnum | NothingEnum

/\*\*

- Reference point for text-frame auto sizing. The reference point is adjusted automatically to fit the auto-sizing type; for example, a top-left point becomes top-center when only height is sized.
  \*/
  autoSizingReferencePoint: AutoSizingReferenceEnum | NothingEnum

/\*\*

- Text-frame auto-sizing mode. The reference value changes according to type, such as top-left becoming top-center for height-only sizing. Set other auto-sizing attributes before changing this type.
  \*/
  autoSizingType: AutoSizingTypeEnum | NothingEnum

/\*\*

- Baseline grid line color, either a three-double RGB array with values from 0 to 255 or a UI color.
  \*/
  baselineFrameGridColor: [number, number, number] | UIColors | NothingEnum

/\*\*

- Distance separating baseline grid lines.
  \*/
  baselineFrameGridIncrement: number | NothingEnum

/\*\*

- Location used as the basis for the custom baseline grid: top of page, top margin, top of frame, or frame inset.
  \*/
  baselineFrameGridRelativeOption: BaselineFrameGridRelativeOption | NothingEnum

/\*\*

- Measurement-unit amount cropped from the graphic bottom edge.
  \*/
  bottomCrop: number | NothingEnum

/\*\*

- Corner shape for the lower-left corner of rectangular shapes.
  \*/
  bottomLeftCornerOption: CornerOptions | NothingEnum

/\*\*

- Measurement-unit radius of the lower-left rectangular-corner effect.
  \*/
  bottomLeftCornerRadius: number | NothingEnum

/\*\*

- Corner shape for the lower-right corner of rectangular shapes.
  \*/
  bottomRightCornerOption: CornerOptions | NothingEnum

/\*\*

- Measurement-unit radius of the lower-right rectangular-corner effect.
  \*/
  bottomRightCornerRadius: number | NothingEnum

/\*\*

- Content transparency settings belonging to FindObjectPreference.
  \*/
  readonly contentTransparencySettings: FindChangeContentTransparencySetting | NothingEnum

/\*\*

- Contour type value.
  \*/
  contourType: ContourOptionsTypes | NothingEnum

/\*\*

- User-entered custom actual text.
  \*/
  customActualText: string | NothingEnum

/\*\*

- User-entered custom alternate text.
  \*/
  customAltText: string | NothingEnum

/\*\*

- End shape used by an open path.
  \*/
  endCap: EndCap | NothingEnum

/\*\*

- Corner join setting on FindObjectPreference.
  \*/
  endJoin: EndJoin | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for the FindObjectPreference fill.
  \*/
  fillColor: Swatch | NothingEnum | string

/\*\*

- Tint percent for the FindObjectPreference fill color. Use a number from 0 to 100 for an explicit tint, or -1 for inherited or overridden behavior.
  \*/
  fillTint: number | NothingEnum

/\*\*

- Transparency settings for the FindObjectPreference fill.
  \*/
  readonly fillTransparencySettings: FindChangeFillTransparencySetting | NothingEnum

/\*\*

- Distance from the text baseline to the top inset of the text frame or cell.
  \*/
  firstBaselineOffset: FirstBaseline | NothingEnum

/\*\*

- Alignment point for an empty image while fitting it inside a frame. For details, see frame fitting options.
  \*/
  fittingAlignment: AnchorPoint | NothingEnum

/\*\*

- Frame-fitting behavior for placed or pasted content when the frame is empty. It can be set on a frame, object style, document, or the application.
  \*/
  fittingOnEmptyFrame: EmptyFrameFittingOptions | NothingEnum

/\*\*

- When true, document footnote-option overrides are enabled.
  \*/
  footnotesEnableOverrides: boolean | NothingEnum

/\*\*

- Minimum spacing before the first footnote.
  \*/
  footnotesMinimumSpacing: number | NothingEnum

/\*\*

- Spacing between footnotes.
  \*/
  footnotesSpaceBetween: number | NothingEnum

/\*\*

- When true, footnotes can straddle columns.
  \*/
  footnotesSpanAcrossColumns: boolean | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for gaps in a dashed, dotted, or striped stroke. For details, see stroke type.
  \*/
  gapColor: Swatch | NothingEnum

/\*\*

- Gap-color tint percentage. Use a number from 0 to 100 for an explicit tint, or -1 for inherited or overridden behavior.
  \*/
  gapTint: number | NothingEnum

/\*\*

- When true, GIF output is interlaced. Not validwhen image conversion is JPEG.
  \*/
  gifOptionsInterlaced: boolean | NothingEnum

/\*\*

- Color palette for GIF conversion. Not valid when image conversion is JPEG.
  \*/
  gifOptionsPalette: GIFOptionsPalette | NothingEnum

/\*\*

- Linear-gradient angle for the FindObjectPreference fill. Range: -180 to 180.
  \*/
  gradientFillAngle: number | NothingEnum

/\*\*

- Linear-gradient angle for the FindObjectPreference stroke. Range: -180 to 180.
  \*/
  gradientStrokeAngle: number | NothingEnum

/\*\*

- Horizontal page reference point. Valid only when anchored position is custom.
  \*/
  horizontalReferencePoint: AnchoredRelativeTo | NothingEnum

/\*\*

- When true, drawn or placed object text-wrap settings are ignored in the text frame.
  \*/
  ignoreWrap: boolean | NothingEnum

/\*\*

- Image alignment setting.
  \*/
  imageAlignment: ImageAlignmentType | NothingEnum

/\*\*

- Image format chosen for conversion.
  \*/
  imageConversionType: ImageFormat | NothingEnum

/\*\*

- Resolution used for image export.
  \*/
  imageExportResolution: ImageResolution | NothingEnum

/\*\*

- Page-break settings for images used with objects.
  \*/
  imagePageBreak: ImagePageBreakType | NothingEnum

/\*\*

- Space After value for images.
  \*/
  imageSpaceAfter: number | NothingEnum

/\*\*

- Space Before value for images.
  \*/
  imageSpaceBefore: number | NothingEnum

/\*\*

- When true, interior clipping paths are created inside the surrounding clipping path. This applies only to alpha channel or detect edges clipping.
  \*/
  includeInsideEdges: boolean | NothingEnum

/\*\*

- Offset from text to the text-frame edges, either one value for all sides or 4 values in [top inset, left inset, bottom inset, right inset] order.
  \*/
  insetSpacing: number | [number, number, number, number] | NothingEnum

/\*\*

- When true, the text wrap is inverted.
  \*/
  inverse: boolean | NothingEnum

/\*\*

- Formatting method for converted JPEG images. Not validwhen image conversion is GIF.
  \*/
  jpegOptionsFormat: JPEGOptionsFormat | NothingEnum

/\*\*

- Quality setting for converted JPEG images. Not valid when image conversion is GIF.
  \*/
  jpegOptionsQuality: JPEGOptionsQuality | NothingEnum

/\*\*

- Scale applied to the path-start arrowhead. Range: 1 to 1000.
  \*/
  leftArrowHeadScale: number | NothingEnum

/\*\*

- Measurement-unit amount cropped from the graphic left edge.
  \*/
  leftCrop: number | NothingEnum

/\*\*

- Arrowhead used at the start of the path.
  \*/
  leftLineEnd: ArrowHead | NothingEnum

/\*\*

- When true, manual movement of the anchored object is blocked.
  \*/
  lockPosition: boolean | NothingEnum

/\*\*

- Minimum distance from the text baseline to the top inset of the text frame or cell.
  \*/
  minimumFirstBaselineOffset: number | NothingEnum

/\*\*

- Minimum height used by text-frame auto sizing.
  \*/
  minimumHeightForAutoSizing: number | NothingEnum

/\*\*

- Minimum width used by text-frame auto sizing.
  \*/
  minimumWidthForAutoSizing: number | NothingEnum

/\*\*

- Ratio limit between stroke width and miter length before a pointed miter join changes to a squared-off bevel join.
  \*/
  miterLimit: number | NothingEnum

/\*\*

- When true, FindObjectPreference is nonprinting.
  \*/
  nonprinting: boolean | NothingEnum

/\*\*

- When true, frame-edge character positions are adjusted for improved appearance.
  \*/
  opticalMarginAlignment: boolean | NothingEnum

/\*\*

- Point size used when calculating optical margin alignment. Range: 0.1 to 1296.
  \*/
  opticalMarginSize: number | NothingEnum

/\*\*

- When true, the FindObjectPreference fill color overprints underlying objects; when false, that fill knocks out underlying colors.
  \*/
  overprintFill: boolean | NothingEnum

/\*\*

- When true, the gap color overprints underlying colors; when false, that gap knocks them out.
  \*/
  overprintGap: boolean | NothingEnum

/\*\*

- When true, the FindObjectPreference stroke color overprints underlying objects; when false, that stroke knocks out theunderlying colors.
  \*/
  overprintStroke: boolean | NothingEnum

/\*\*

- When true, the anchored object position is pinned within the top and bottom of the text frame.
  \*/
  pinPosition: boolean | NothingEnum

/\*\*

- Point in the referenced object used as the positioning basis for the anchored object. Valid only when anchored position is custom.
  \*/
  positionReferencePoint: AnchorPoint | NothingEnum

/\*\*

- Collection of preferences objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Preserve Appearance from Layout option.
  \*/
  preserveAppearanceFromLayout: PreserveAppearanceFromLayoutEnum | NothingEnum

/\*\*

- Scale applied to the path-end arrowhead. Range: 1 to 1000.
  \*/
  rightArrowHeadScale: number | NothingEnum

/\*\*

- Measurement-unit amount cropped from the graphic right edge.
  \*/
  rightCrop: number | NothingEnum

/\*\*

- Arrowhead used at the end of the path.
  \*/
  rightLineEnd: ArrowHead | NothingEnum

/\*\*

- When true, anchored-object placement uses the page or spread binding spine as its reference.
  \*/
  spineRelative: boolean | NothingEnum

/\*\*

- Offset amount for the baseline grid.
  \*/
  startingOffsetForBaselineFrameGrid: number | NothingEnum

/\*\*

- Story direction setting.
  \*/
  storyDirection: StoryDirectionOptions | NothingEnum

/\*\*

- Stroke alignment setting for FindObjectPreference.
  \*/
  strokeAlignment: StrokeAlignment | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for the FindObjectPreference stroke.
  \*/
  strokeColor: Swatch | NothingEnum | string

/\*\*

- Corner adjustment setting for FindObjectPreference.
  \*/
  strokeCornerAdjustment: StrokeCornerAdjustment | NothingEnum

/\*\*

- Dash and gap measurements defining a custom dashed-line pattern. Provide up to six point values as [dash1, gap1, dash2, gap2, dash3, gap3].
  \*/
  strokeDashAndGap: number[] | NothingEnum

/\*\*

- Tint percent for the object's stroke color. Use a number from 0 to 100 for an explicit tint, or -1 for inherited or overridden behavior.
  \*/
  strokeTint: number | NothingEnum

/\*\*

- Transparency settings for the stroke.
  \*/
  readonly strokeTransparencySettings: FindChangeStrokeTransparencySetting | NothingEnum

/\*\*

- Stroke style name to apply.
  \*/
  strokeType: StrokeStyle | NothingEnum | string

/\*\*

- Point weight assigned to the FindObjectPreference stroke.
  \*/
  strokeWeight: number | NothingEnum

/\*\*

- Number of columns in the text frame. Depending on use fixed column width, this count may update automatically when the frame size changes.
  \*/
  textColumnCount: number | NothingEnum

/\*\*

- Width assigned to text-frame columns.
  \*/
  textColumnFixedWidth: number | NothingEnum

/\*\*

- Space between text-frame columns.
  \*/
  textColumnGutter: number | NothingEnum

/\*\*

- Text wrap mode value.
  \*/
  textWrapMode: TextWrapModes | NothingEnum

/\*\*

- Minimum gap between text and wrapped-object edges. Specify 4 values as [top, left, bottom, right]. Can return an ordered array with top:Unit, left:Unit, bottom:Unit, and right:Unit, or the NothingEnum enumerator.
  \*/
  textWrapOffset: any

/\*\*

- Side options for text wrap.
  \*/
  textWrapSide: TextWrapSideOptions | NothingEnum

/\*\*

- Measurement-unit amount cropped from the graphic top edge.
  \*/
  topCrop: number | NothingEnum

/\*\*

- Corner shape for the upper-left corner of rectangular shapes and every corner of non-rectangular shapes. Unlike end join, a corner option can take a radius; rounded or beveled end joins depend on stroke weight.
  \*/
  topLeftCornerOption: CornerOptions | NothingEnum

/\*\*

- Measurement-unit radius of the corner effect on the upper-left corner of rectangles and on all non-rectangular corners.
  \*/
  topLeftCornerRadius: number | NothingEnum

/\*\*

- Corner shape for the upper-right corner of rectangular shapes.
  \*/
  topRightCornerOption: CornerOptions | NothingEnum

/\*\*

- Measurement-unit radius of the upper-right rectangular-corner effect.
  \*/
  topRightCornerRadius: number | NothingEnum

/\*\*

- Transparency settings.
  \*/
  readonly transparencySettings: FindChangeTransparencySetting | NothingEnum

/\*\*

- When true, a custom baseline frame grid is used.
  \*/
  useCustomBaselineFrameGrid: boolean | NothingEnum

/\*\*

- When true, column width stays fixed during text-frame resizing. When false, columns resize with the frame. If true, resizing can alter the frame's column count.
  \*/
  useFixedColumnWidth: boolean | NothingEnum

/\*\*

- When true, objects use image page-break settings.
  \*/
  useImagePageBreak: boolean | NothingEnum

/\*\*

- When true, the minimum height value participates in text-frame auto sizing.
  \*/
  useMinimumHeightForAutoSizing: boolean | NothingEnum

/\*\*

- When true, the minimum width value participates in text-frame auto sizing.
  \*/
  useMinimumWidthForAutoSizing: boolean | NothingEnum

/\*\*

- When true, auto sizing does not introduce line breaks.
  \*/
  useNoLineBreaksForAutoSizing: boolean | NothingEnum

/\*\*

- When true, the user has explicitly changed the text wrap path.
  \*/
  readonly userModifiedWrap: boolean | NothingEnum

/\*\*

- Vertical alignment setting for text content.
  \*/
  verticalJustification: VerticalJustification | NothingEnum

/\*\*

- Vertical page reference point. Valid when anchored position is custom.
  \*/
  verticalReferencePoint: VerticallyRelativeTo | NothingEnum

/\*\*

- Maximum vertical space permitted between two paragraphs. Valid only with justified vertical justification; the amount is added to the paragraph's space before or space after values.
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

- Preferences used for transliteration find operations.
  \*/
  declare class FindTransliteratePreference extends Preference {
  /\*\*
  - When true, words without a hyphenation dictionary association may break on any character at line end.
    \*/
    allowArbitraryHyphenation: boolean | NothingEnum

/\*\*

- Character style to find or replace.
  \*/
  appliedCharacterStyle: string | NothingEnum | CharacterStyle

/\*\*

- Font for FindTransliteratePreference, supplied as a font object or by font-family name.
  \*/
  appliedFont: Font | string | NothingEnum

/\*\*

- Language to find or replace.
  \*/
  appliedLanguage: string | NothingEnum | Language | LanguageWithVendors

/\*\*

- Numbering list membership.
  \*/
  appliedNumberingList: NumberingList | string | NothingEnum

/\*\*

- Paragraph style to find or replace.
  \*/
  appliedParagraphStyle: string | NothingEnum | ParagraphStyle

/\*\*

- Type-size percentage used for auto leading. Range: 0 to 500.
  \*/
  autoLeading: number | NothingEnum

/\*\*

- Maximum half-width character count that automatically runs horizontally in vertical text.
  \*/
  autoTcy: number | NothingEnum

/\*\*

- When true, auto tcy includes Roman characters.
  \*/
  autoTcyIncludeRoman: boolean | NothingEnum

/\*\*

- When true, or when set to an enumeration value, ragged lines are balanced. Not valid with a single-line text composer.
  \*/
  balanceRaggedLines: boolean | BalanceLinesStyle | NothingEnum

/\*\*

- Baseline shift used by the text.
  \*/
  baselineShift: number | NothingEnum

/\*\*

- Bullet character value.
  \*/
  readonly bulletChar: Bullet | NothingEnum

/\*\*

- Bullet character alignment.
  \*/
  bulletsAlignment: ListAlignment | NothingEnum

/\*\*

- Bullet and numbering list type.
  \*/
  bulletsAndNumberingListType: ListType | NothingEnum

/\*\*

- Character style used for the text after string.
  \*/
  bulletsCharacterStyle: CharacterStyle | string | NothingEnum

/\*\*

- Text-after string expression for bullets.
  \*/
  bulletsTextAfter: string | NothingEnum

/\*\*

- When true, the selected kinsoku set also includes the double period (..), ellipse (...), and double hyphen (--). Valid only while a kinsoku set is active.
  \*/
  bunriKinshi: boolean | NothingEnum

/\*\*

- Capitalization scheme value.
  \*/
  capitalization: Capitalization | NothingEnum

/\*\*

- Alignment of smaller characters against the largest character on the line.
  \*/
  characterAlignment: CharacterAlignment | NothingEnum

/\*\*

- Rotation angle, in degrees, for individual characters. Rotation is counterclockwise.
  \*/
  characterRotation: number | NothingEnum

/\*\*

- When true, grid tracking is used for non-Roman characters in CJK grids.
  \*/
  cjkGridTracking: boolean | NothingEnum

/\*\*

- Text composer used to compose the text.
  \*/
  composer: string | NothingEnum

/\*\*

- Design Axes values.
  \*/
  designAxes: number[] | NothingEnum

/\*\*

- Character count for the drop cap.
  \*/
  dropCapCharacters: number | NothingEnum

/\*\*

- Line count for the drop cap.
  \*/
  dropCapLines: number | NothingEnum

/\*\*

- Drop-cap details derived from glyph outlines. 1 = left side bearing. 2 = descenders. Japanese frame grid uses 0x100,0x200,0x400.
  \*/
  dropcapDetail: number | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used as the fill color to find or replace.
  \*/
  fillColor: string | NothingEnum | Swatch

/\*\*

- Fill-color tint percentage for FindTransliteratePreference. Use a number from 0 to 100 for an explicit tint, or -1 for inherited or overridden behavior.
  \*/
  fillTint: number | NothingEnum

/\*\*

- Character type targeted by the find operation.
  \*/
  findCharacterType: FindChangeTransliterateCharacterTypes | NothingEnum

/\*\*

- First-line indent amount.
  \*/
  firstLineIndent: number | NothingEnum

/\*\*

- Font style name.
  \*/
  fontStyle: string | NothingEnum

/\*\*

- Glyph variant used instead of standard glyphs.
  \*/
  glyphForm: AlternateGlyphForms | NothingEnum

/\*\*

- Linear-gradient angle for the text fill. Range: -180 to 180.
  \*/
  gradientFillAngle: number | NothingEnum

/\*\*

- Length for a linear gradient, or radius for a radial gradient, used on the text fill.
  \*/
  gradientFillLength: number | NothingEnum

/\*\*

- Starting point, in page coordinates, for a gradient on the text fill, formatted as [x, y].
  \*/
  gradientFillStart: [number | string, number | string] | NothingEnum

/\*\*

- Linear-gradient angle for the text stroke. Range: -180 to 180.
  \*/
  gradientStrokeAngle: number | NothingEnum

/\*\*

- Length for a linear gradient, or radius for a radial gradient, used on the text stroke.
  \*/
  gradientStrokeLength: number | NothingEnum

/\*\*

- Starting point, in page coordinates, for a gradient on the text stroke, formatted as [x, y].
  \*/
  gradientStrokeStart: [number | string, number | string] | NothingEnum

/\*\*

- Alignment to the frame grid or baseline grid.
  \*/
  gridAlignment: GridAlignment | NothingEnum

/\*\*

- Manual gyoudori setting.
  \*/
  gridGyoudori: number | NothingEnum

/\*\*

- Horizontal scaling set on FindTransliteratePreference.
  \*/
  horizontalScale: number | NothingEnum
