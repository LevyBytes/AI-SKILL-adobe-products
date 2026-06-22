# Indesign (part 45)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Corner-effect radius, in measurement units, for the bottom left corner of rectangular shapes.
  \*/
  paragraphShadingBottomLeftCornerRadius: number | string

/\*\*

- Offset distance for the bottom edge of the paragraph.
  \*/
  paragraphShadingBottomOffset: number | string

/\*\*

- Reference basis (descent or baseline) for calculating the bottom origin of the paragraph shading.
  \*/
  paragraphShadingBottomOrigin: ParagraphShadingBottomOriginEnum

/\*\*

- Shape assigned to the bottom right corner of rectangular shapes.
  \*/
  paragraphShadingBottomRightCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the bottom right corner of rectangular shapes.
  \*/
  paragraphShadingBottomRightCornerRadius: number | string

/\*\*

- When true, paragraph shading is clipped relative to the frame shape.
  \*/
  paragraphShadingClipToFrame: boolean

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the paragraph shading.
  \*/
  paragraphShadingColor: Swatch | string

/\*\*

- Offset distance for the left edge of the paragraph.
  \*/
  paragraphShadingLeftOffset: number | string

/\*\*

- When true, paragraph shading is On.
  \*/
  paragraphShadingOn: boolean

/\*\*

- When true, paragraph shading overprints.
  \*/
  paragraphShadingOverprint: boolean

/\*\*

- Offset distance for the right edge of the paragraph.
  \*/
  paragraphShadingRightOffset: number | string

/\*\*

- When true, printing of paragraph shading is suppressed.
  \*/
  paragraphShadingSuppressPrinting: boolean

/\*\*

- Tint percentage for the paragraph shading. (Range: 0 to 100).
  \*/
  paragraphShadingTint: number

/\*\*

- Corner option used for the top left corner of rectangular shapes and every corner of non-rectangular shapes. Note: a corner option can have a radius, unlike an end join; rounded or beveled end-join effects depend on stroke weight.
  \*/
  paragraphShadingTopLeftCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the top left corner of rectangular shapes and every corner of non-rectangular shapes.
  \*/
  paragraphShadingTopLeftCornerRadius: number | string

/\*\*

- Offset distance for the top edge of the paragraph.
  \*/
  paragraphShadingTopOffset: number | string

/\*\*

- Reference basis (cap height, ascent or baseline) for calculating the top origin of the paragraph shading.
  \*/
  paragraphShadingTopOrigin: ParagraphShadingTopOriginEnum

/\*\*

- Shape assigned to the top right corner of rectangular shapes.
  \*/
  paragraphShadingTopRightCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the top right corner of rectangular shapes.
  \*/
  paragraphShadingTopRightCornerRadius: number | string

/\*\*

- Reference basis (text width or column width) for calculating the width of the paragraph shading.
  \*/
  paragraphShadingWidth: ParagraphShadingWidthEnum

/\*\*

- Text size value.
  \*/
  pointSize: number | string

/\*\*

- Text position measured relative to the baseline.
  \*/
  position: Position

/\*\*

- OpenType positional form.
  \*/
  positionalForm: PositionalForms

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Hyphenation style selected for the provider.
  \*/
  providerHyphenationStyle: HyphenationStyleEnum

/\*\*

- When true, numbers cannot break across lines; when false, multi-digit numbers may break between digits.
  \*/
  rensuuji: boolean

/\*\*

- Right-indent width.
  \*/
  rightIndent: number | string

/\*\*

- When true, Roman characters rotate within vertical text.
  \*/
  rotateSingleByteCharacters: boolean

/\*\*

- Ruby alignment setting.
  \*/
  rubyAlignment: RubyAlignments

/\*\*

- When true, ruby is auto-aligned.
  \*/
  rubyAutoAlign: boolean

/\*\*

- When true, ruby scales automatically to the chosen percentage of the parent text size. For percentage details, see ruby parent scaling percent.
  \*/
  rubyAutoScaling: boolean

/\*\*

- When true, glyphs in ruby auto tcy (tate-chuu-yoko) are automatically scaled to fit one em.
  \*/
  rubyAutoTcyAutoScale: boolean

/\*\*

- Digit count used by ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyDigits: number

/\*\*

- When true, Roman characters are included in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyIncludeRoman: boolean

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the fill of ruby characters.
  \*/
  rubyFill: Swatch | string

/\*\*

- Font used for ruby characters.
  \*/
  rubyFont: Font | string

/\*\*

- Ruby-character size, in points.
  \*/
  rubyFontSize: number

/\*\*

- Font style for ruby characters.
  \*/
  rubyFontStyle: string | NothingEnum

/\*\*

- When true, ruby uses OpenType Pro fonts.
  \*/
  rubyOpenTypePro: boolean

/\*\*

- When true, ruby overhang is limited to the specified amount. For amount details, see ruby parent overhang amount.
  \*/
  rubyOverhang: boolean

/\*\*

- Overprinting method for the ruby fill.
  \*/
  rubyOverprintFill: AdornmentOverprint

/\*\*

- Overprinting method for the ruby stroke.
  \*/
  rubyOverprintStroke: AdornmentOverprint

/\*\*

- Allowed overhang amount for ruby characters beyond the parent text.
  \*/
  rubyParentOverhangAmount: RubyOverhang

/\*\*

- Percentage used to scale parent text size when determining the ruby text size.
  \*/
  rubyParentScalingPercent: number

/\*\*

- Ruby spacing in relation to the parent text.
  \*/
  rubyParentSpacing: RubyParentSpacing

/\*\*

- Ruby-character position relative to the parent text.
  \*/
  rubyPosition: RubyKentenPosition

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the stroke of ruby characters.
  \*/
  rubyStroke: Swatch | string

/\*\*

- Stroke tint percentage for ruby characters.
  \*/
  rubyStrokeTint: number

/\*\*

- Tint percentage for the ruby fill color. (Range: 0 to 100).
  \*/
  rubyTint: number

/\*\*

- Ruby type setting.
  \*/
  rubyType: RubyTypes

/\*\*

- Ruby-character stroke weight, in points.
  \*/
  rubyWeight: number

/\*\*

- Horizontal spacing amount between ruby and parent characters.
  \*/
  rubyXOffset: number

/\*\*

- Ruby-character horizontal size, as a percent of the original size.
  \*/
  rubyXScale: number

/\*\*

- Vertical spacing amount between ruby and parent characters.
  \*/
  rubyYOffset: number

/\*\*

- Ruby-character vertical size, as a percent of the original size.
  \*/
  rubyYScale: number

/\*\*

- When true, a rule is placed above the paragraph.
  \*/
  ruleAbove: boolean

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the paragraph rule above.
  \*/
  ruleAboveColor: Swatch | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the paragraph-rule-above stroke gap. Note: applies only for nonsolid paragraph rule above type.
  \*/
  ruleAboveGapColor: Swatch | string

/\*\*

- When true, the paragraph-rule-above stroke gap overprints. Note: applies only when the rule above type is not solid.
  \*/
  ruleAboveGapOverprint: boolean

/\*\*

- Stroke-gap tint percentage for the paragraph rule above. (Range: 0 to 100) Note: applies only for nonsolid rule above type.
  \*/
  ruleAboveGapTint: number

/\*\*

- Indent distance for the left edge of the paragraph rule above, based on text width or the column width of the first paragraph line.
  \*/
  ruleAboveLeftIndent: number | string

/\*\*

- Line weight for the rule above.
  \*/
  ruleAboveLineWeight: number | string

/\*\*

- Baseline offset for the paragraph rule above, measured from the paragraph's first line.
  \*/
  ruleAboveOffset: number | string

/\*\*

- When true, the paragraph rule above overprints.
  \*/
  ruleAboveOverprint: boolean

/\*\*

- Indent distance for the right edge of the paragraph rule above, based on text width or the column width of the first paragraph line.
  \*/
  ruleAboveRightIndent: number | string

/\*\*

- Tint percentage for the paragraph rule above. (Range: 0 to 100).
  \*/
  ruleAboveTint: number

/\*\*

- Stroke type for the paragraph rule above.
  \*/
  ruleAboveType: StrokeStyle | string

/\*\*

- Reference basis (text width or column width) for calculating the width of the paragraph rule above.
  \*/
  ruleAboveWidth: RuleWidth

/\*\*

- When true, a paragraph rule below is applied.
  \*/
  ruleBelow: boolean

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the paragraph rule below.
  \*/
  ruleBelowColor: Swatch | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the paragraph-rule-below stroke gap. Note: applies only for nonsolid paragraph rule below type.
  \*/
  ruleBelowGapColor: Swatch | string

/\*\*

- When true, the rule-below gap color overprints.
  \*/
  ruleBelowGapOverprint: boolean

/\*\*

- Stroke-gap tint percentage for the paragraph rule below. (Range: 0 to 100) Note: applies only for nonsolid paragraph rule below type.
  \*/
  ruleBelowGapTint: number

/\*\*

- Indent distance for the left edge of the paragraph rule below, based on text width or the column width of the last paragraph line.
  \*/
  ruleBelowLeftIndent: number | string

/\*\*

- Line weight for the rule below.
  \*/
  ruleBelowLineWeight: number | string

/\*\*

- Baseline offset for the paragraph rule below, measured from the paragraph's last line.
  \*/
  ruleBelowOffset: number | string

/\*\*

- When true, the rule below overprints.
  \*/
  ruleBelowOverprint: boolean

/\*\*

- Indent distance for the right edge of the paragraph rule below, based on text width or the column width of the last paragraph line.
  \*/
  ruleBelowRightIndent: number | string

/\*\*

- Tint percentage for the paragraph rule below. (Range: 0 to 100).
  \*/
  ruleBelowTint: number

/\*\*

- Stroke type for the paragraph rule below.
  \*/
  ruleBelowType: StrokeStyle | string

/\*\*

- Reference basis (text width or column width) for calculating the width of the paragraph rule below.
  \*/
  ruleBelowWidth: RuleWidth

/\*\*

- Spacing between paragraphs that use the same style.
  \*/
  sameParaStyleSpacing: number | Spacing

/\*\*

- When true, character scaling also changes line size.
  \*/
  scaleAffectsLineHeight: boolean

/\*\*

- When true, shatai rotation is applied.
  \*/
  shataiAdjustRotation: boolean

/\*\*

- When true, shatai tsume is adjusted.
  \*/
  shataiAdjustTsume: boolean

/\*\*

- Shatai lens angle, in degrees.
  \*/
  shataiDegreeAngle: number

/\*\*

- Shatai obliquing amount, expressed as a percentage.
  \*/
  shataiMagnification: number

/\*\*

- Alignment used for single-word lines.
  \*/
  singleWordJustification: SingleWordJustification

/\*\*

- TextDefault skew angle.
  \*/
  skew: number

/\*\*

- Height for paragraph space below.
  \*/
  spaceAfter: number | string

/\*\*

- Height for paragraph space above.
  \*/
  spaceBefore: number | string

/\*\*

- Minimum spacing after a span or split column.
  \*/
  spanColumnMinSpaceAfter: number | string

/\*\*

- Minimum spacing before a span or split column.
  \*/
  spanColumnMinSpaceBefore: number | string

/\*\*

- Selects single-column, span-column, or split-column behavior for a paragraph.
  \*/
  spanColumnType: SpanColumnTypeOptions

/\*\*

- Column count a paragraph spans, or the split-column count.
  \*/
  spanSplitColumnCount: number | SpanColumnCountOptions

/\*\*

- Inside gutter used when the paragraph splits columns.
  \*/
  splitColumnInsideGutter: number | string

/\*\*

- Outside gutter used when the paragraph splits columns.
  \*/
  splitColumnOutsideGutter: number | string

/\*\*

- Start location for the paragraph.
  \*/
  startParagraph: StartParagraph

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the strikethrough stroke.
  \*/
  strikeThroughColor: Swatch | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the gap of the strikethrough stroke.
  \*/
  strikeThroughGapColor: Swatch | string

/\*\*

- When true, the strikethrough-stroke gap color overprints. Note: applies when strike through type is not solid.
  \*/
  strikeThroughGapOverprint: boolean

/\*\*

- Tint percentage for the strikethrough stroke gap color. (Range: 0 to 100) Note: applies when strike through type is not solid.
  \*/
  strikeThroughGapTint: number

/\*\*

- Baseline offset amount for the strikethrough stroke.
  \*/
  strikeThroughOffset: number | string

/\*\*

- When true, the strikethrough stroke overprints.
  \*/
  strikeThroughOverprint: boolean

/\*\*

- Tint percentage for the strikethrough stroke. (Range: 0 to 100).
  \*/
  strikeThroughTint: number

/\*\*

- Stroke type for the strikethrough stroke.
  \*/
  strikeThroughType: StrokeStyle | string

/\*\*

- Stroke weight for the strikethrough stroke.
  \*/
  strikeThroughWeight: number | string

/\*\*

- When true, a strikethrough line is drawn through the text.
  \*/
  strikeThru: boolean

/\*\*

- Stroke alignment used for the text.
  \*/
  strokeAlignment: TextStrokeAlign

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the stroke of the TextDefault.
  \*/
  strokeColor: Swatch | string

/\*\*

- Tint percentage for the TextDefault stroke color. Use a number in the range of 0 to 100 for an explicit tint, or -1 for the inherited or overridden value.
  \*/
  strokeTint: number

/\*\*

- Stroke weight used on text characters.
  \*/
  strokeWeight: number | string

/\*\*

- Paragraph tab-stop list; it can return Array of Arrays of Property Name/Value Pairs.
  \*/
  tabList: any[]

/\*\*

- Collection containing tab stops.
  \*/
  readonly tabStops: TabStops

/\*\*

- When true, the character becomes horizontal within vertical text.
  \*/
  tatechuyoko: boolean

/\*\*

- Horizontal offset for horizontal characters inside vertical text.
  \*/
  tatechuyokoXOffset: number

/\*\*

- Vertical offset for horizontal characters inside vertical text.
  \*/
  tatechuyokoYOffset: number

/\*\*

- Tracking adjustment for loosening or tightening a text block, specified in thousands of an em.
  \*/
  tracking: number

/\*\*

- Spacing amount after each character.
  \*/
  trailingAki: number

/\*\*

- When true, ideographic spaces do not wrap to the next line as text characters do.
  \*/
  treatIdeographicSpaceAsSpace: boolean

/\*\*

- Horizontal character-compression amount.
  \*/
  tsume: number

/\*\*

- When true, the text is underlined.
  \*/
  underline: boolean

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the underline stroke. .
  \*/
  underlineColor: Swatch | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the gap of the underline stroke. Note: applies when underline type is not solid.
  \*/
  underlineGapColor: Swatch | string

/\*\*

- When true, the underline-stroke gap color overprints.
  \*/
  underlineGapOverprint: boolean

/\*\*

- Tint percentage for the gap color of the underline stroke. (Range: 0 to 100) Note: applies when underline type is not solid.
  \*/
  underlineGapTint: number

/\*\*

- Baseline offset amount for the underline.
  \*/
  underlineOffset: number | string

/\*\*

- When true, the underline stroke color overprints.
  \*/
  underlineOverprint: boolean

/\*\*

- Tint percentage for the underline stroke. (Range: 0 to 100)
  \*/
  underlineTint: number

/\*\*

- Stroke type for the underline stroke.
  \*/
  underlineType: StrokeStyle | string

/\*\*

- Stroke weight for the underline stroke.
  \*/
  underlineWeight: number | string

/\*\*

- Vertical scaling used by the TextDefault.
  \*/
  verticalScale: number

/\*\*

- When true, warichu is enabled.
  \*/
  warichu: boolean

/\*\*

- Warichu alignment setting.
  \*/
  warichuAlignment: WarichuAlignment

/\*\*

- Minimum character count allowed after a line break.
  \*/
  warichuCharsAfterBreak: number

/\*\*

- Minimum character count allowed before a line break.
  \*/
  warichuCharsBeforeBreak: number

/\*\*

- Line gap between warichu character lines.
  \*/
  warichuLineSpacing: number

/\*\*

- Warichu line count within one normal line.
  \*/
  warichuLines: number

/\*\*

- Percentage used to scale parent text size when determining warichu size.
  \*/
  warichuSize: number

/\*\*

- X (horizontal) offset for diacritic adjustment.
  \*/
  xOffsetDiacritic: number

/\*\*

- Y (vertical) offset for diacritic adjustment.
  \*/
  yOffsetDiacritic: number

/\*\*

- When true, the Nth design axis of the variable font is hidden.
- @param nthAxisIndex Design-axis index.
  \*/
  isNthDesignAxisHidden(nthAxisIndex: number): boolean

/\*\*

- Sets the Nth design axis for a variable font.
- @param nthAxisIndex Design-axis index.
- @param nthAxisValue Design-axis value for the nth axis.
  \*/
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void
  }

/\*\*

- Preferences for documents.
  \*/
  declare class DocumentPreference extends Preference {
  /\*\*
  - When true, adding pages keeps a spread capped at two pages. When false, pages may be added or moved into existing spreads. For override details, see preserve layout when shuffling.
    \*/
    allowPageShuffle: boolean

/\*\*

- Text direction within the column.
  \*/
  columnDirection: HorizontalOrVertical

/\*\*

- Color for the column guides; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
  \*/
  columnGuideColor: [number, number, number] | UIColors

/\*\*

- When true, column guides are locked.
  \*/
  columnGuideLocked: boolean

/\*\*

- When true, a new document gives the document A-master primary text frames.
  \*/
  createPrimaryTextFrame: boolean

/\*\*

- Offset amount for the bottom document bleed. Note: set the bleed bottom offset only when document bleed uniform size is false.
  \*/
  documentBleedBottomOffset: number | string

/\*\*

- Offset amount for the inside or left document bleed. Note: set the bleed inside or left offset only when document bleed uniform size is false.
  \*/
  documentBleedInsideOrLeftOffset: number | string

/\*\*

- Offset amount for the outside or right document bleed. Note: set the bleed outside or right offset only when document bleed uniform size is false.
  \*/
  documentBleedOutsideOrRightOffset: number | string

/\*\*

- Offset amount for the top document bleed.
  \*/
  documentBleedTopOffset: number | string

/\*\*

- When true, every document-side bleed offset uses the document bleed top offset value. The default setting is true.
  \*/
  documentBleedUniformSize: boolean

/\*\*

- When true, slug measurements on every document side use the slug top offset value. The default value is false.
  \*/
  documentSlugUniformSize: boolean

/\*\*

- When true, the document uses facing pages.
  \*/
  facingPages: boolean

/\*\*

- Document intent.
  \*/
  intent: DocumentIntentOptions

/\*\*

- Color for the margin guides; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
  \*/
  marginGuideColor: [number, number, number] | UIColors

/\*\*

- When true, black is overprinted during document saving.
  \*/
  overprintBlack: boolean

/\*\*

- Page-binding placement.
  \*/
  pageBinding: PageBindingOptions

/\*\*

- Page height.
  \*/
  pageHeight: number | string

/\*\*

- Page orientation setting.
  \*/
  pageOrientation: PageOrientation

/\*\*

- Page size.
  \*/
  pageSize: string

/\*\*

- Page width.
  \*/
  pageWidth: number | string

/\*\*

- Page count for the document. (Range: 1 to 9999)
  \*/
  pagesPerDocument: number

/\*\*

- When true, spreads with more than two pages keep their layout after allow page shuffle is turned on. When false, qualifying multi-page spreads become two-page spreads if created or changed after allow page shuffle was enabled.
  \*/
  preserveLayoutWhenShuffling: boolean

/\*\*

- Offset amount for the bottom slug. Note: set the slug bottom offset only when document slug uniform size is false.
  \*/
  slugBottomOffset: number | string

/\*\*

- Offset amount for the inside or left slug. Note: set the slug inside or left offset only when document slug uniform size is false.
  \*/
  slugInsideOrLeftOffset: number | string

/\*\*

- Offset amount for the outside or right slug. Note: set the slug right or outside offset only when document slug uniform size is false.
  \*/
  slugRightOrOutsideOffset: number | string

/\*\*

- Offset amount for the top slug.
  \*/
  slugTopOffset: number | string

/\*\*

- When true, UI-based snippet import places page items at their original location.
  \*/
  snippetImportUsesOriginalLocation: boolean

/\*\*

- Starting page number for a document; it also serves as the first section starting page number. Default value is 1.
  \*/
  startPageNumber: number
  }

/\*\*

- Preferences for grids.
  \*/
  declare class GridPreference extends Preference {
  /\*\*
  - Color for the baseline grid; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
    \*/
    baselineColor: [number, number, number] | UIColors

/\*\*

- Spacing amount between baseline grid lines.
  \*/
  baselineDivision: number | string

/\*\*

- Zero point used for the baseline grid offset.
  \*/
  baselineGridRelativeOption: BaselineGridRelativeOption

/\*\*

- When true, the baseline grid is shown.
  \*/
  baselineGridShown: boolean

/\*\*

- Offset amount for the baseline grid from the zero point.
  \*/
  baselineStart: number | string

/\*\*

- Magnification percentage below which ruler guides are hidden. (Range: 5 to 4000)
  \*/
  baselineViewThreshold: number

/\*\*

- When true, the document grid is shown.
  \*/
  documentGridShown: boolean

/\*\*

- When true, created, moved, or resized objects snap to the closest grid line.
  \*/
  documentGridSnapto: boolean

/\*\*

- Color for the document grid; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
  \*/
  gridColor: [number, number, number] | UIColors
