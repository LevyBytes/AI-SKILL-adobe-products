# Indesign (part 51)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Kashidas usage for justification.
  \*/
  kashidas: KashidasOptions | NothingEnum

/\*\*

- When true, every paragraph line stays together. When false, paragraphs may break across pages or columns.
  \*/
  keepAllLinesTogether: boolean | NothingEnum

/\*\*

- Minimum line count kept together in a paragraph before a page break is allowed.
  \*/
  keepFirstLines: number | NothingEnum

/\*\*

- Minimum line count kept together in a paragraph after a page break.
  \*/
  keepLastLines: number | NothingEnum

/\*\*

- When true, a chosen number of lines remains together if the paragraph spans columns or text frames.
  \*/
  keepLinesTogether: boolean | NothingEnum

/\*\*

- When true, the rule above the paragraph is kept inside frame bounds. Note: Requires rule above to be true.
  \*/
  keepRuleAboveInFrame: boolean | NothingEnum

/\*\*

- Minimum line count retained with the following paragraph.
  \*/
  keepWithNext: number | NothingEnum

/\*\*

- Whether the paragraph's first line should stay with the previous paragraph's last line.
  \*/
  keepWithPrevious: boolean | NothingEnum

/\*\*

- Kenten character alignment relative to parent characters.
  \*/
  kentenAlignment: KentenAlignment | NothingEnum

/\*\*

- Character set for the custom kenten character. Note: Applies only when kenten kind is custom.
  \*/
  kentenCharacterSet: KentenCharacterSet | NothingEnum

/\*\*

- Character used for kenten. Note: Applies only when kenten kind is custom.
  \*/
  kentenCustomCharacter: string | NothingEnum

/\*\*

- Swatch (color, gradient, tint, or mixed ink) applied to kenten character fill.
  \*/
  kentenFillColor: Swatch | string | NothingEnum

/\*\*

- Font used for kenten characters.
  \*/
  kentenFont: Font | string | NothingEnum

/\*\*

- Kenten character size, in points.
  \*/
  kentenFontSize: number | NothingEnum

/\*\*

- Font style for kenten characters.
  \*/
  kentenFontStyle: string | NothingEnum

/\*\*

- Kenten character style.
  \*/
  kentenKind: KentenCharacter | NothingEnum

/\*\*

- Overprint method for kenten fill.
  \*/
  kentenOverprintFill: AdornmentOverprint | NothingEnum

/\*\*

- Overprint method for kenten stroke.
  \*/
  kentenOverprintStroke: AdornmentOverprint | NothingEnum

/\*\*

- Distance separating kenten characters from parent characters.
  \*/
  kentenPlacement: number | NothingEnum

/\*\*

- Kenten position relative to the parent character.
  \*/
  kentenPosition: RubyKentenPosition | NothingEnum

/\*\*

- Swatch (color, gradient, tint, or mixed ink) applied to kenten character stroke.
  \*/
  kentenStrokeColor: Swatch | string | NothingEnum

/\*\*

- Stroke tint percentage for kenten characters. (Range: 0 to 100).
  \*/
  kentenStrokeTint: number | NothingEnum

/\*\*

- Fill tint percentage for kenten characters. (Range: 0 to 100).
  \*/
  kentenTint: number | NothingEnum

/\*\*

- Stroke weight, in points, for kenten characters.
  \*/
  kentenWeight: number | NothingEnum

/\*\*

- Horizontal size of kenten characters as a percentage of original size.
  \*/
  kentenXScale: number | NothingEnum

/\*\*

- Vertical size of kenten charachers as a percentage of original size.
  \*/
  kentenYScale: number | NothingEnum

/\*\*

- Pair kerning type.
  \*/
  kerningMethod: string | NothingEnum

/\*\*

- Space to add or remove between characters, in thousands of an em.
  \*/
  kerningValue: number | NothingEnum

/\*\*

- Character keyboard direction.
  \*/
  keyboardDirection: CharacterDirectionOptions | NothingEnum

/\*\*

- Hanging punctuation type to allow. Note: Requires an active kinsoku set.
  \*/
  kinsokuHangType: KinsokuHangTypes | NothingEnum

/\*\*

- Kinsoku set that controls legitimate line breaks.
  \*/
  kinsokuSet: KinsokuTable | KinsokuSet | string | NothingEnum

/\*\*

- Kinsoku processing type used to prevent kinsoku characters from starting or ending a line. Note: Requires a defined kinsoku set.
  \*/
  kinsokuType: KinsokuType | NothingEnum

/\*\*

- Indent amount for the paragraph's last line.
  \*/
  lastLineIndent: number | NothingEnum

/\*\*

- Leading applied to the text.
  \*/
  leading: number | Leading | NothingEnum

/\*\*

- Space amount before each character.
  \*/
  leadingAki: number | NothingEnum

/\*\*

- Point from which leading is measured between lines.
  \*/
  leadingModel: LeadingModel | NothingEnum

/\*\*

- Left indent width.
  \*/
  leftIndent: number | NothingEnum

/\*\*

- Enables substitution of combinations such as fl or fi with ligature glyphs.
  \*/
  ligatures: boolean | NothingEnum

/\*\*

- Sets the stroke-width to miter-length cutoff where pointed joins convert to squared bevel joins.
  \*/
  miterLimit: number | NothingEnum

/\*\*

- Selects the mojikumi table; mojikumi table defaults provide the reference values.
  \*/
  mojikumi: MojikumiTable | string | MojikumiTableDefaults | NothingEnum

/\*\*

- Keeps text together on one line when enabled.
  \*/
  noBreak: boolean | NothingEnum

/\*\*

- Applies the restart policy for numbering when enabled.
  \*/
  numberingApplyRestartPolicy: boolean | NothingEnum

/\*\*

- CharacterStyle used to format the numbering string.
  \*/
  numberingCharacterStyle: CharacterStyle | string | NothingEnum

/\*\*

- Continues numbering for this list level.
  \*/
  numberingContinue: boolean | NothingEnum

/\*\*

- Expression that defines the numbering string.
  \*/
  numberingExpression: string | NothingEnum

/\*\*

- Available formatting choice for numbering.
  \*/
  numberingFormat: NumberingStyle | string | NothingEnum

/\*\*

- Paragraph list level for numbering.
  \*/
  numberingLevel: number | NothingEnum

/\*\*

- Restart policy settings available for numbering.
  \*/
  readonly numberingRestartPolicies: NumberingRestartPolicy | NothingEnum

/\*\*

- Starting value to use in a numbered list.
  \*/
  numberingStartAt: number | NothingEnum

/\*\*

- Uses contextual alternate OpenType forms when enabled.
  \*/
  otfContextualAlternate: boolean | NothingEnum

/\*\*

- Enables discretionary OpenType ligatures.
  \*/
  otfDiscretionaryLigature: boolean | NothingEnum

/\*\*

- OpenType figure style setting.
  \*/
  otfFigureStyle: OTFFigureStyle | NothingEnum

/\*\*

- Enables OpenType fraction glyphs.
  \*/
  otfFraction: boolean | NothingEnum

/\*\*

- Switches hiragana fonts for horizontal versus vertical glyph variants when enabled.
  \*/
  otfHVKana: boolean | NothingEnum

/\*\*

- Uses historical OpenType forms when enabled.
  \*/
  otfHistorical: boolean | NothingEnum

/\*\*

- Applies alternate OpenType forms for justification when enabled.
  \*/
  otfJustificationAlternate: boolean | NothingEnum

/\*\*

- Enables localized OpenType forms.
  \*/
  otfLocale: boolean | NothingEnum

/\*\*

- Turns on OpenType mark positioning.
  \*/
  otfMark: boolean | NothingEnum

/\*\*

- Enables OpenType ordinal glyphs.
  \*/
  otfOrdinal: boolean | NothingEnum

/\*\*

- Uses overlapping swash OpenType forms when enabled.
  \*/
  otfOverlapSwash: boolean | NothingEnum

/\*\*

- Applies kerning based on proportional CJK OpenType metrics.
  \*/
  otfProportionalMetrics: boolean | NothingEnum

/\*\*

- Italicizes half-width alphanumeric characters when enabled.
  \*/
  otfRomanItalics: boolean | NothingEnum

/\*\*

- Uses a slashed zero OpenType glyph when enabled.
  \*/
  otfSlashedZero: boolean | NothingEnum

/\*\*

- Uses stretched alternate OpenType forms when enabled.
  \*/
  otfStretchedAlternate: boolean | NothingEnum

/\*\*

- Enables stylistic alternate OpenType forms.
  \*/
  otfStylisticAlternate: boolean | NothingEnum

/\*\*

- OpenType stylistic set numbers to apply.
  \*/
  otfStylisticSets: number | NothingEnum

/\*\*

- Enables OpenType swash forms.
  \*/
  otfSwash: boolean | NothingEnum

/\*\*

- Enables OpenType titling forms.
  \*/
  otfTitling: boolean | NothingEnum

/\*\*

- Overprints character fill color when enabled.
  \*/
  overprintFill: boolean | NothingEnum

/\*\*

- Overprints character strokes when enabled.
  \*/
  overprintStroke: boolean | NothingEnum

/\*\*

- Direction setting for the paragraph.
  \*/
  paragraphDirection: ParagraphDirectionOptions | NothingEnum

/\*\*

- When enabled, gyoudori applies across the whole paragraph; otherwise it is evaluated line by line.
  \*/
  paragraphGyoudori: boolean | NothingEnum

/\*\*

- Justification setting for the paragraph.
  \*/
  paragraphJustification: ParagraphJustificationOptions | NothingEnum

/\*\*

- Kashida width for paragraphs: 0 none, 1 short, 2 medium, 3 long.
  \*/
  paragraphKashidaWidth: number | NothingEnum

/\*\*

- Size of the text.
  \*/
  pointSize: number | NothingEnum

/\*\*

- Baseline-relative placement of the text.
  \*/
  position: Position | NothingEnum

/\*\*

- Positional form chosen for OpenType.
  \*/
  positionalForm: PositionalForms | NothingEnum

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Prevents line breaks inside numbers when true; when false, multi-digit numbers may break between digits.
  \*/
  rensuuji: boolean | NothingEnum

/\*\*

- Width assigned to the right indent.
  \*/
  rightIndent: number | NothingEnum

/\*\*

- Rotates Roman characters inside vertical text when enabled.
  \*/
  rotateSingleByteCharacters: boolean | NothingEnum

/\*\*

- Alignment setting used for ruby.
  \*/
  rubyAlignment: RubyAlignments | NothingEnum

/\*\*

- Automatically aligns ruby when enabled.
  \*/
  rubyAutoAlign: boolean | NothingEnum

/\*\*

- Scales ruby automatically to the configured percent of parent text size; ruby parent scaling percent explains the percentage value.
  \*/
  rubyAutoScaling: boolean | NothingEnum

/\*\*

- Fits auto tcy (tate-chuu-yoko) ruby glyphs into one em through automatic scaling when enabled.
  \*/
  rubyAutoTcyAutoScale: boolean | NothingEnum

/\*\*

- Number of digits used in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyDigits: number | NothingEnum

/\*\*

- Includes Roman characters in ruby auto tcy (tate-chuu-yoko) when enabled.
  \*/
  rubyAutoTcyIncludeRoman: boolean | NothingEnum

/\*\*

- Ruby character fills use this swatch, which may be a color, gradient, tint, or mixed ink.
  \*/
  rubyFill: Swatch | string | NothingEnum

/\*\*

- Font assigned to ruby characters.
  \*/
  rubyFont: Font | string | NothingEnum

/\*\*

- Ruby character size in points.
  \*/
  rubyFontSize: number | NothingEnum

/\*\*

- Font style applied to ruby characters.
  \*/
  rubyFontStyle: string | NothingEnum

/\*\*

- Uses OpenType Pro fonts for ruby when enabled.
  \*/
  rubyOpenTypePro: boolean | NothingEnum

/\*\*

- Limits ruby overhang to the configured amount when enabled; ruby parent overhang amount documents the amount value.
  \*/
  rubyOverhang: boolean | NothingEnum

/\*\*

- Overprint method used for ruby fills.
  \*/
  rubyOverprintFill: AdornmentOverprint | NothingEnum

/\*\*

- Overprint method used for ruby strokes.
  \*/
  rubyOverprintStroke: AdornmentOverprint | NothingEnum

/\*\*

- Amount of permitted ruby overhang beyond the parent text.
  \*/
  rubyParentOverhangAmount: RubyOverhang | NothingEnum

/\*\*

- Percentage of parent text size used to derive the ruby text size.
  \*/
  rubyParentScalingPercent: number | NothingEnum

/\*\*

- Ruby spacing in relation to the parent text.
  \*/
  rubyParentSpacing: RubyParentSpacing | NothingEnum

/\*\*

- Placement of ruby characters relative to their parent text.
  \*/
  rubyPosition: RubyKentenPosition | NothingEnum

/\*\*

- Ruby character strokes use this swatch, which may be a color, gradient, tint, or mixed ink.
  \*/
  rubyStroke: Swatch | string | NothingEnum

/\*\*

- Percentage tint used for ruby character strokes.
  \*/
  rubyStrokeTint: number | NothingEnum

/\*\*

- Percentage tint for ruby fill color. Range: 0 to 100.
  \*/
  rubyTint: number | NothingEnum

/\*\*

- Ruby type selection.
  \*/
  rubyType: RubyTypes | NothingEnum

/\*\*

- Stroke weight, in points, for ruby characters.
  \*/
  rubyWeight: number | NothingEnum

/\*\*

- Horizontal spacing amount between ruby and parent characters.
  \*/
  rubyXOffset: number | NothingEnum

/\*\*

- Horizontal ruby character size as a percentage of original size.
  \*/
  rubyXScale: number | NothingEnum

/\*\*

- Vertical spacing amount between ruby and parent characters.
  \*/
  rubyYOffset: number | NothingEnum

/\*\*

- Vertical ruby character size as a percentage of original size.
  \*/
  rubyYScale: number | NothingEnum

/\*\*

- Spacing inserted between consecutive paragraphs that share the same style.
  \*/
  sameParaStyleSpacing: number | Spacing | NothingEnum

/\*\*

- Lets scaled characters change line height when enabled.
  \*/
  scaleAffectsLineHeight: boolean | NothingEnum

/\*\*

- Applies shatai rotation when enabled.
  \*/
  shataiAdjustRotation: boolean | NothingEnum

/\*\*

- Adjusts shatai tsume when enabled.
  \*/
  shataiAdjustTsume: boolean | NothingEnum

/\*\*

- Shatai lens angle measured in degrees.
  \*/
  shataiDegreeAngle: number | NothingEnum

/\*\*

- Percentage amount of shatai obliquing to apply.
  \*/
  shataiMagnification: number | NothingEnum

/\*\*

- Alignment applied to lines containing a single word.
  \*/
  singleWordJustification: SingleWordJustification | NothingEnum

/\*\*

- Skew angle value for the FindTextPreference.
  \*/
  skew: number | NothingEnum

/\*\*

- Height for paragraph spacing below.
  \*/
  spaceAfter: number | NothingEnum

/\*\*

- Height for paragraph spacing above.
  \*/
  spaceBefore: number | NothingEnum

/\*\*

- Minimum space after a span column or split column.
  \*/
  spanColumnMinSpaceAfter: number | NothingEnum

/\*\*

- Minimum space before a span column or split column.
  \*/
  spanColumnMinSpaceBefore: number | NothingEnum

/\*\*

- Chooses whether the paragraph remains one column, spans columns, or splits into columns.
  \*/
  spanColumnType: SpanColumnTypeOptions | NothingEnum

/\*\*

- Count of columns the paragraph spans, or count of split columns.
  \*/
  spanSplitColumnCount: number | SpanColumnCountOptions | NothingEnum

/\*\*

- Inside gutter value used when a paragraph splits columns.
  \*/
  splitColumnInsideGutter: number | NothingEnum

/\*\*

- Outside gutter value used when a paragraph splits columns.
  \*/
  splitColumnOutsideGutter: number | NothingEnum

/\*\*

- Location where the paragraph begins.
  \*/
  startParagraph: StartParagraph | NothingEnum

/\*\*

- Strikethrough stroke uses this swatch, which may be a color, gradient, tint, or mixed ink.
  \*/
  strikeThroughColor: Swatch | string | NothingEnum

/\*\*

- Strikethrough stroke gap uses this swatch, which may be a color, gradient, tint, or mixed ink.
  \*/
  strikeThroughGapColor: Swatch | string | NothingEnum

/\*\*

- Overprints the strikethrough gap color when enabled. Applies only when the strikethrough type is not solid.
  \*/
  strikeThroughGapOverprint: boolean | NothingEnum

/\*\*

- Percentage tint for the strikethrough stroke gap color. Range: 0 to 100. Applies only when the strikethrough type is not solid.
  \*/
  strikeThroughGapTint: number | NothingEnum

/\*\*

- Baseline offset amount for the strikethrough stroke.
  \*/
  strikeThroughOffset: number | NothingEnum

/\*\*

- Overprints the strikethrough stroke when enabled.
  \*/
  strikeThroughOverprint: boolean | NothingEnum

/\*\*

- Percentage tint for the strikethrough stroke. Range: 0 to 100.
  \*/
  strikeThroughTint: number | NothingEnum

/\*\*

- Stroke style used for the strikethrough stroke.
  \*/
  strikeThroughType: StrokeStyle | string | NothingEnum

/\*\*

- Stroke weight used for the strikethrough stroke.
  \*/
  strikeThroughWeight: number | NothingEnum

/\*\*

- Draws a strikethrough line across the text when enabled.
  \*/
  strikeThru: boolean | NothingEnum

/\*\*

- Stroke alignment applied to text.
  \*/
  strokeAlignment: TextStrokeAlign | NothingEnum

/\*\*

- Stroke color swatch to find or replace; the swatch may be a color, gradient, tint, or mixed ink.
  \*/
  strokeColor: string | NothingEnum | Swatch

/\*\*

- Percentage tint for the FindTextPreference stroke color. Use 0 to 100 for explicit tint, or -1 for inherited or overridden values.
  \*/
  strokeTint: number | NothingEnum

/\*\*

- Stroke weight applied to text characters.
  \*/
  strokeWeight: number | NothingEnum

/\*\*

- Makes characters horizontal within vertical text when enabled.
  \*/
  tatechuyoko: boolean | NothingEnum

/\*\*

- Horizontal offset for characters made horizontal within vertical text.
  \*/
  tatechuyokoXOffset: number | NothingEnum

/\*\*

- Vertical offset for characters made horizontal within vertical text.
  \*/
  tatechuyokoYOffset: number | NothingEnum

/\*\*

- Loosens or tightens a text block by thousandths of an em.
  \*/
  tracking: number | NothingEnum

/\*\*

- Space added after each character.
  \*/
  trailingAki: number | NothingEnum

/\*\*

- Keeps ideographic spaces from wrapping like regular text characters when enabled.
  \*/
  treatIdeographicSpaceAsSpace: boolean | NothingEnum

/\*\*

- Horizontal character compression amount.
  \*/
  tsume: number | NothingEnum

/\*\*

- Underlines text when enabled.
  \*/
  underline: boolean | NothingEnum

/\*\*

- Underline stroke uses this swatch, which may be a color, gradient, tint, or mixed ink.
  \*/
  underlineColor: Swatch | string | NothingEnum

/\*\*

- Underline stroke gap uses this swatch, which may be a color, gradient, tint, or mixed ink. Applies only when the underline type is not solid.
  \*/
  underlineGapColor: Swatch | string | NothingEnum

/\*\*

- Overprints the underline stroke gap color when enabled.
  \*/
  underlineGapOverprint: boolean | NothingEnum

/\*\*

- Percentage tint for the underline gap color. Range: 0 to 100. Applies only when the underline type is not solid.
  \*/
  underlineGapTint: number | NothingEnum

/\*\*

- Baseline offset amount for the underline.
  \*/
  underlineOffset: number | NothingEnum

/\*\*

- Overprints the underline stroke color when enabled.
  \*/
  underlineOverprint: boolean | NothingEnum

/\*\*

- Percentage tint for the underline stroke. Range: 0 to 100.
  \*/
  underlineTint: number | NothingEnum

/\*\*

- Stroke style used for the underline.
  \*/
  underlineType: StrokeStyle | string | NothingEnum

/\*\*

- Stroke weight used for the underline.
  \*/
  underlineWeight: number | NothingEnum

/\*\*

- Vertical scaling value applied to the FindTextPreference.
  \*/
  verticalScale: number | NothingEnum

/\*\*

- Enables warichu when true.
  \*/
  warichu: boolean | NothingEnum

/\*\*

- Alignment setting for warichu.
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

- Gap between lines made of warichu characters.
  \*/
  warichuLineSpacing: number | NothingEnum

/\*\*

- Number of warichu lines placed inside one normal line.
  \*/
  warichuLines: number | NothingEnum

/\*\*

- Percentage of parent text size used to calculate warichu size.
  \*/
  warichuSize: number | NothingEnum

/\*\*

- Horizontal x offset used for diacritic adjustment.
  \*/
  xOffsetDiacritic: number | NothingEnum

/\*\*

- Vertical y offset used for diacritic adjustment.
  \*/
  yOffsetDiacritic: number | NothingEnum

/\*\*

- Reports whether the Nth design axis of a variable font is hidden.
- @param nthAxisIndex Design-axis index.
  \*/
  isNthDesignAxisHidden(nthAxisIndex: number): boolean

/\*\*

- Sets the Nth design axis on a variable font.
- @param nthAxisIndex Design-axis index.
- @param nthAxisValue Value assigned to that design axis.
  \*/
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void
  }

/\*\*

- Preferences used for GREP find/change operations.
  \*/
  declare class FindGrepPreference extends Preference {
  /\*\*
  - Allows words with no hyphenation-dictionary association to break on any character at line end when enabled.
    \*/
    allowArbitraryHyphenation: boolean | NothingEnum

/\*\*

- Character style targeted for search or replacement.
  \*/
  appliedCharacterStyle: string | NothingEnum | CharacterStyle

/\*\*

- Conditions targeted for search or replacement. For "Any", supply the "nothing" enum; for "[Unconditional]", supply an empty list.
  \*/
  appliedConditions: string[] | NothingEnum | Condition[]

/\*\*

- Font assigned to the FindGrepPreference, supplied as a font object or font-family name.
  \*/
  appliedFont: Font | string | NothingEnum

/\*\*

- Language targeted for search or replacement.
  \*/
  appliedLanguage: string | NothingEnum | Language | LanguageWithVendors

/\*\*

- Numbering list that the item belongs to.
  \*/
  appliedNumberingList: NumberingList | string | NothingEnum

/\*\*

- Paragraph style targeted for search or replacement.
  \*/
  appliedParagraphStyle: string | NothingEnum | ParagraphStyle

/\*\*

- Percentage of type size used for auto leading. Range: 0 to 500.
  \*/
  autoLeading: number | NothingEnum

/\*\*

- Threshold count of half-width characters that automatically run horizontally in vertical text.
  \*/
  autoTcy: number | NothingEnum

/\*\*

- Includes Roman characters in auto tcy when enabled.
  \*/
  autoTcyIncludeRoman: boolean | NothingEnum

/\*\*

- Balances ragged lines when true or when an enumeration value is supplied. Not valid with a single-line text composer.
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

- Bullets and numbering list type.
  \*/
  bulletsAndNumberingListType: ListType | NothingEnum

/\*\*

- Character style used for the text after string.
  \*/
  bulletsCharacterStyle: CharacterStyle | string | NothingEnum

/\*\*

- Expression for the bullets text after string.
  \*/
  bulletsTextAfter: string | NothingEnum

/\*\*

- Adds double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set when enabled. Applies only with an active kinsoku set.
  \*/
  bunriKinshi: boolean | NothingEnum

/\*\*

- Capitalization option.
  \*/
  capitalization: Capitalization | NothingEnum

/\*\*

- Alignment of small characters against the largest character on the line.
  \*/
  characterAlignment: CharacterAlignment | NothingEnum

/\*\*

- Character direction setting.
  \*/
  characterDirection: CharacterDirectionOptions | NothingEnum

/\*\*

- Rotation angle for individual characters, measured in degrees. Rotation proceeds counterclockwise.
  \*/
  characterRotation: number | NothingEnum

/\*\*

- Uses grid tracking for non-Roman characters in CJK grids when enabled.
  \*/
  cjkGridTracking: boolean | NothingEnum

/\*\*

- Text composer used to compose the text.
  \*/
  composer: string | NothingEnum

/\*\*

- Values assigned to Design Axes.
  \*/
  designAxes: number[] | NothingEnum

/\*\*

- Position setting for diacritic characters.
  \*/
  diacriticPosition: DiacriticPositionOptions | NothingEnum

/\*\*

- Digit type setting.
  \*/
  digitsType: DigitsTypeOptions | NothingEnum

/\*\*

- Number of characters included in the drop cap.
  \*/
  dropCapCharacters: number | NothingEnum

/\*\*

- Number of lines occupied by the drop cap.
  \*/
  dropCapLines: number | NothingEnum
