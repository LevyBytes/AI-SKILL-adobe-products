# Indesign (part 52)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Drop-cap details based on glyph outlines: 1 means left side bearing, 2 means descenders, and 0x100,0x200,0x400 serve Japanese frame grid use cases.
  \*/
  dropcapDetail: number | NothingEnum

/\*\*

- Stroke join type applied to text characters.
  \*/
  endJoin: OutlineJoin | NothingEnum

/\*\*

- Fill color swatch to find or replace; the swatch may be a color, gradient, tint, or mixed ink.
  \*/
  fillColor: string | NothingEnum | Swatch

/\*\*

- Percentage tint for the FindGrepPreference fill color. Use 0 to 100 for explicit tint, or -1 for inherited or overridden values.
  \*/
  fillTint: number | NothingEnum

/\*\*

- FindGrepPreference value used as the find target.
  \*/
  findWhat: string | NothingEnum

/\*\*

- First-line indent amount.
  \*/
  firstLineIndent: number | NothingEnum

/\*\*

- Name of the font style.
  \*/
  fontStyle: string | NothingEnum

/\*\*

- Glyph variant substituted for standard glyphs.
  \*/
  glyphForm: AlternateGlyphForms | NothingEnum

/\*\*

- Angle for a linear gradient on the text fill. Range: -180 to 180.
  \*/
  gradientFillAngle: number | NothingEnum

/\*\*

- Length for a linear gradient, or radius for a radial gradient, on the text fill.
  \*/
  gradientFillLength: number | NothingEnum

/\*\*

- Gradient fill starting point in page coordinates, formatted as [x, y].
  \*/
  gradientFillStart: [number | string, number | string] | NothingEnum

/\*\*

- Angle for a linear gradient on the text stroke. Range: -180 to 180.
  \*/
  gradientStrokeAngle: number | NothingEnum

/\*\*

- Length for a linear gradient, or radius for a radial gradient, on the text stroke.
  \*/
  gradientStrokeLength: number | NothingEnum

/\*\*

- Gradient stroke starting point in page coordinates, formatted as [x, y].
  \*/
  gradientStrokeStart: [number | string, number | string] | NothingEnum

/\*\*

- Alignment against the frame grid or baseline grid.
  \*/
  gridAlignment: GridAlignment | NothingEnum

/\*\*

- Manual gyoudori value.
  \*/
  gridGyoudori: number | NothingEnum

/\*\*

- Horizontal scaling value applied to the FindGrepPreference.
  \*/
  horizontalScale: number | NothingEnum

/\*\*

- Allows hyphenation of the final word in a text column when enabled.
  \*/
  hyphenateAcrossColumns: boolean | NothingEnum

/\*\*

- Allows hyphenation in a paragraph's final word when enabled. Applies only when hyphenation is true.
  \*/
  hyphenateLastWord: boolean | NothingEnum

/\*\*

- Ignores paragraph optical edge alignment when enabled.
  \*/
  ignoreEdgeAlignment: boolean | NothingEnum

/\*\*

- Count of grid squares used to arrange the text.
  \*/
  jidori: number | NothingEnum

/\*\*

- Paragraph alignment setting.
  \*/
  justification: Justification | NothingEnum

/\*\*

- Kashida usage for justification.
  \*/
  kashidas: KashidasOptions | NothingEnum

/\*\*

- Keeps every paragraph line together when enabled; when disabled, paragraphs may split across pages or columns.
  \*/
  keepAllLinesTogether: boolean | NothingEnum

/\*\*

- Minimum lines to keep together before a page break may occur in a paragraph.
  \*/
  keepFirstLines: number | NothingEnum

/\*\*

- Minimum lines to keep together after a page break in a paragraph.
  \*/
  keepLastLines: number | NothingEnum

/\*\*

- Keeps a configured number of lines together when a paragraph crosses columns or text frames.
  \*/
  keepLinesTogether: boolean | NothingEnum

/\*\*

- Keeps the rule above within frame bounds when enabled. Applies only when rule above is true.
  \*/
  keepRuleAboveInFrame: boolean | NothingEnum

/\*\*

- Minimum number of lines kept with the following paragraph.
  \*/
  keepWithNext: number | NothingEnum

/\*\*

- Controls whether the first line of this paragraph stays with the previous paragraph's final line.
  \*/
  keepWithPrevious: boolean | NothingEnum

/\*\*

- Alignment of kenten characters relative to parent characters.
  \*/
  kentenAlignment: KentenAlignment | NothingEnum

/\*\*

- Character set for the custom kenten character. Applies only when the kenten kind is custom.
  \*/
  kentenCharacterSet: KentenCharacterSet | NothingEnum

/\*\*

- Character used for kenten. Applies only when the kenten kind is custom.
  \*/
  kentenCustomCharacter: string | NothingEnum

/\*\*

- Kenten character fills use this swatch, which may be a color, gradient, tint, or mixed ink.
  \*/
  kentenFillColor: Swatch | string | NothingEnum

/\*\*

- Font used for kenten characters.
  \*/
  kentenFont: Font | string | NothingEnum

/\*\*

- Kenten character size in points.
  \*/
  kentenFontSize: number | NothingEnum

/\*\*

- Font style applied to kenten characters.
  \*/
  kentenFontStyle: string | NothingEnum

/\*\*

- Style assigned to kenten characters.
  \*/
  kentenKind: KentenCharacter | NothingEnum

/\*\*

- Overprint method used for kenten fills.
  \*/
  kentenOverprintFill: AdornmentOverprint | NothingEnum

/\*\*

- Overprint method used for kenten strokes.
  \*/
  kentenOverprintStroke: AdornmentOverprint | NothingEnum

/\*\*

- Distance between kenten characters and their parent characters.
  \*/
  kentenPlacement: number | NothingEnum

/\*\*

- Kenten position relative to the parent character.
  \*/
  kentenPosition: RubyKentenPosition | NothingEnum

/\*\*

- Kenten character strokes use this swatch, which may be a color, gradient, tint, or mixed ink.
  \*/
  kentenStrokeColor: Swatch | string | NothingEnum

/\*\*

- Percentage tint for kenten character strokes. Range: 0 to 100.
  \*/
  kentenStrokeTint: number | NothingEnum

/\*\*

- Percentage fill tint for kenten characters. Range: 0 to 100.
  \*/
  kentenTint: number | NothingEnum

/\*\*

- Stroke weight, in points, for kenten characters.
  \*/
  kentenWeight: number | NothingEnum

/\*\*

- Horizontal kenten character size as a percentage of original size.
  \*/
  kentenXScale: number | NothingEnum

/\*\*

- Vertical kenten character size as a percentage of original size.
  \*/
  kentenYScale: number | NothingEnum

/\*\*

- Pair-kerning type.
  \*/
  kerningMethod: string | NothingEnum

/\*\*

- Character spacing amount to add or remove, measured in thousandths of an em.
  \*/
  kerningValue: number | NothingEnum

/\*\*

- Keyboard direction assigned to the character.
  \*/
  keyboardDirection: CharacterDirectionOptions | NothingEnum

/\*\*

- Hanging-punctuation type allowed. Applies only with an active kinsoku set.
  \*/
  kinsokuHangType: KinsokuHangTypes | NothingEnum

/\*\*

- Kinsoku set that defines allowed line-break positions.
  \*/
  kinsokuSet: KinsokuTable | KinsokuSet | string | NothingEnum

/\*\*

- Kinsoku processing mode used to prevent kinsoku characters from starting or ending a line. Applies only when a kinsoku set exists.
  \*/
  kinsokuType: KinsokuType | NothingEnum

/\*\*

- Indent amount for the paragraph's last line.
  \*/
  lastLineIndent: number | NothingEnum

/\*\*

- Leading applied to text.
  \*/
  leading: number | Leading | NothingEnum

/\*\*

- Space inserted before each character.
  \*/
  leadingAki: number | NothingEnum

/\*\*

- Point from which line-to-line leading is measured.
  \*/
  leadingModel: LeadingModel | NothingEnum

/\*\*

- Width assigned to the left indent.
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

- Skew angle value for the FindGrepPreference.
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

- Strikethrough stroke tint percentage. Range: 0 to 100.
  \*/
  strikeThroughTint: number | NothingEnum

/\*\*

- StrokeStyle used for strikethrough drawing.
  \*/
  strikeThroughType: StrokeStyle | string | NothingEnum

/\*\*

- Weight assigned to the strikethrough stroke.
  \*/
  strikeThroughWeight: number | NothingEnum

/\*\*

- When true, text receives a line through it.
  \*/
  strikeThru: boolean | NothingEnum

/\*\*

- Text stroke alignment setting.
  \*/
  strokeAlignment: TextStrokeAlign | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used as the stroke color to find or replace.
  \*/
  strokeColor: string | NothingEnum | Swatch

/\*\*

- Tint percentage for the FindGrepPreference stroke color. Use 0 to 100 for an explicit tint, or -1 for inherited or overridden handling.
  \*/
  strokeTint: number | NothingEnum

/\*\*

- Stroke weight used on the text characters.
  \*/
  strokeWeight: number | NothingEnum

/\*\*

- When true, a character is made horizontal inside vertical text.
  \*/
  tatechuyoko: boolean | NothingEnum

/\*\*

- Horizontal offset used by horizontal characters in vertical text.
  \*/
  tatechuyokoXOffset: number | NothingEnum

/\*\*

- Vertical offset used by horizontal characters in vertical text.
  \*/
  tatechuyokoYOffset: number | NothingEnum

/\*\*

- Loosening or tightening amount for a text block, expressed in thousandths of an em.
  \*/
  tracking: number | NothingEnum

/\*\*

- Space amount placed after each character.
  \*/
  trailingAki: number | NothingEnum

/\*\*

- When true, ideographic spaces stay off line starts instead of wrapping like ordinary text characters.
  \*/
  treatIdeographicSpaceAsSpace: boolean | NothingEnum

/\*\*

- Horizontal compression amount for characters.
  \*/
  tsume: number | NothingEnum

/\*\*

- When true, text is underlined.
  \*/
  underline: boolean | NothingEnum

/\*\*

- Swatch, such as color, gradient, tint, or mixed ink, for the underline stroke.
  \*/
  underlineColor: Swatch | string | NothingEnum

/\*\*

- Swatch, such as color, gradient, tint, or mixed ink, for the underline stroke gap. Valid when underline type is not solid.
  \*/
  underlineGapColor: Swatch | string | NothingEnum

/\*\*

- When true, the underline stroke gap color overprints.
  \*/
  underlineGapOverprint: boolean | NothingEnum

/\*\*

- Underline stroke gap-color tint percentage. Range: 0 to 100. Valid when underline type is not solid.
  \*/
  underlineGapTint: number | NothingEnum

/\*\*

- Distance used to move the underline away from the text baseline.
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

- StrokeStyle used by the underline stroke.
  \*/
  underlineType: StrokeStyle | string | NothingEnum

/\*\*

- Weight assigned to the underline stroke.
  \*/
  underlineWeight: number | NothingEnum

/\*\*

- Vertical scaling configured on the FindGrepPreference.
  \*/
  verticalScale: number | NothingEnum

/\*\*

- When true, warichu is enabled.
  \*/
  warichu: boolean | NothingEnum

/\*\*

- Alignment setting for warichu.
  \*/
  warichuAlignment: WarichuAlignment | NothingEnum

/\*\*

- Minimum character count permitted after a line break.
  \*/
  warichuCharsAfterBreak: number | NothingEnum

/\*\*

- Minimum character count permitted before a line break.
  \*/
  warichuCharsBeforeBreak: number | NothingEnum

/\*\*

- Gap size between warichu character lines.
  \*/
  warichuLineSpacing: number | NothingEnum

/\*\*

- Count of warichu lines inside one regular line.
  \*/
  warichuLines: number | NothingEnum

/\*\*

- Percentage used to scale the parent text size when deriving warichu size.
  \*/
  warichuSize: number | NothingEnum

/\*\*

- X, or horizontal, offset for diacritic adjustment.
  \*/
  xOffsetDiacritic: number | NothingEnum

/\*\*

- Y, or vertical, offset for diacritic adjustment.
  \*/
  yOffsetDiacritic: number | NothingEnum

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
