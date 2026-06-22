# Indesign (part 55)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Fill gradient extent, either length for a linear gradient or radius for a radial gradient, on the text.
  \*/
  gradientFillLength: number | NothingEnum

/\*\*

- Fill-gradient starting point in page coordinates, formatted as [x, y].
  \*/
  gradientFillStart: [number | string, number | string] | NothingEnum

/\*\*

- Linear-gradient angle used on the text stroke. (Range: -180 to 180).
  \*/
  gradientStrokeAngle: number | NothingEnum

/\*\*

- Stroke gradient extent, either length for a linear gradient or radius for a radial gradient, on the text.
  \*/
  gradientStrokeLength: number | NothingEnum

/\*\*

- Stroke-gradient starting point in page coordinates, formatted as [x, y].
  \*/
  gradientStrokeStart: [number | string, number | string] | NothingEnum

/\*\*

- Alignment choice for the frame grid or baseline grid.
  \*/
  gridAlignment: GridAlignment | NothingEnum

/\*\*

- Manual gyoudori value.
  \*/
  gridGyoudori: number | NothingEnum

/\*\*

- Horizontal scale value for the ChangeTextPreference.
  \*/
  horizontalScale: number | NothingEnum

/\*\*

- When true, the final word in a text column may be hyphenated.
  \*/
  hyphenateAcrossColumns: boolean | NothingEnum

/\*\*

- When true, the final word in a paragraph may be hyphenated. Note: Valid only when hyphenation is true.
  \*/
  hyphenateLastWord: boolean | NothingEnum

/\*\*

- When true, paragraph optical edge alignment is ignored.
  \*/
  ignoreEdgeAlignment: boolean | NothingEnum

/\*\*

- Grid-square count used to arrange the text. .
  \*/
  jidori: number | NothingEnum

/\*\*

- Paragraph alignment setting.
  \*/
  justification: Justification | NothingEnum

/\*\*

- Kashidas usage for justification.
  \*/
  kashidas: KashidasOptions | NothingEnum

/\*\*

- When true, every line in the paragraph stays together. When false, paragraphs may split across pages or columns.
  \*/
  keepAllLinesTogether: boolean | NothingEnum

/\*\*

- Minimum number of paragraph lines retained together before a page break is allowed.
  \*/
  keepFirstLines: number | NothingEnum

/\*\*

- Minimum number of paragraph lines retained together after a page break.
  \*/
  keepLastLines: number | NothingEnum

/\*\*

- When true, the configured number of lines stays together as a paragraph crosses columns or text frames.
  \*/
  keepLinesTogether: boolean | NothingEnum

/\*\*

- When true, keeps the paragraph's rule above inside frame bounds. Note: Requires rule above to be true.
  \*/
  keepRuleAboveInFrame: boolean | NothingEnum

/\*\*

- Minimum line count to keep with the following paragraph.
  \*/
  keepWithNext: number | NothingEnum

/\*\*

- Controls whether the first paragraph line stays with the previous paragraph's last line.
  \*/
  keepWithPrevious: boolean | NothingEnum

/\*\*

- Alignment of kenten characters against their parent characters. .
  \*/
  kentenAlignment: KentenAlignment | NothingEnum

/\*\*

- Character set used by a custom kenten character. Note: Applies only when kenten kind is custom. .
  \*/
  kentenCharacterSet: KentenCharacterSet | NothingEnum

/\*\*

- Character used as kenten. Note: Valid only when kenten kind is custom.
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

- Point size used by kenten characters.
  \*/
  kentenFontSize: number | NothingEnum

/\*\*

- Font-style name assigned to kenten characters.
  \*/
  kentenFontStyle: string | NothingEnum

/\*\*

- Kenten character style.
  \*/
  kentenKind: KentenCharacter | NothingEnum

/\*\*

- Overprint behavior used for the kenten fill.
  \*/
  kentenOverprintFill: AdornmentOverprint | NothingEnum

/\*\*

- Overprint behavior used for the kenten stroke.
  \*/
  kentenOverprintStroke: AdornmentOverprint | NothingEnum

/\*\*

- Distance between kenten characters and the parent characters.
  \*/
  kentenPlacement: number | NothingEnum

/\*\*

- Kenten placement relative to the parent character.
  \*/
  kentenPosition: RubyKentenPosition | NothingEnum

/\*\*

- Kenten character strokes use this swatch, which may be a color, gradient, tint, or mixed ink.
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

- Stroke thickness, in points, for kenten characters.
  \*/
  kentenWeight: number | NothingEnum

/\*\*

- Kenten character width as a percent of the original size.
  \*/
  kentenXScale: number | NothingEnum

/\*\*

- Kenten character height as a percent of the original size. .
  \*/
  kentenYScale: number | NothingEnum

/\*\*

- Pair-kerning type.
  \*/
  kerningMethod: string | NothingEnum

/\*\*

- Space, in thousands of an em, added or removed between characters. .
  \*/
  kerningValue: number | NothingEnum

/\*\*

- Character keyboard direction.
  \*/
  keyboardDirection: CharacterDirectionOptions | NothingEnum

/\*\*

- Allowed hanging-punctuation type. Note: Requires an active kinsoku set.
  \*/
  kinsokuHangType: KinsokuHangTypes | NothingEnum

/\*\*

- Kinsoku set that determines permitted line breaks.
  \*/
  kinsokuSet: KinsokuTable | KinsokuSet | string | NothingEnum

/\*\*

- Kinsoku processing type that prevents kinsoku characters at line starts or endings. Note: Requires a defined kinsoku set.
  \*/
  kinsokuType: KinsokuType | NothingEnum

/\*\*

- Indent amount for the paragraph's last line.
  \*/
  lastLineIndent: number | NothingEnum

/\*\*

- Leading value assigned to the text.
  \*/
  leading: number | Leading | NothingEnum

/\*\*

- Space inserted before each character.
  \*/
  leadingAki: number | NothingEnum

/\*\*

- Reference point from which line-to-line leading is measured.
  \*/
  leadingModel: LeadingModel | NothingEnum

/\*\*

- Left-indent width.
  \*/
  leftIndent: number | NothingEnum

/\*\*

- When true, specified combinations such as fl and fi are replaced with ligature characters.
  \*/
  ligatures: boolean | NothingEnum

/\*\*

- XML tag assigned to the element.
  \*/
  markupTag: string | NothingEnum | XMLTag

/\*\*

- Ratio limit where stroke width versus miter length changes a pointed miter join into a squared-off bevel join.
  \*/
  miterLimit: number | NothingEnum

/\*\*

- Mojikumi table. For details, see mojikumi table defaults.
  \*/
  mojikumi: MojikumiTable | string | MojikumiTableDefaults | NothingEnum

/\*\*

- When true, the text remains on one line. .
  \*/
  noBreak: boolean | NothingEnum

/\*\*

- When true, the numbering restart policy is applied.
  \*/
  numberingApplyRestartPolicy: boolean | NothingEnum

/\*\*

- Character style used for the number string.
  \*/
  numberingCharacterStyle: CharacterStyle | string | NothingEnum

/\*\*

- Continues numbering at this level.
  \*/
  numberingContinue: boolean | NothingEnum

/\*\*

- Number string expression used for numbering.
  \*/
  numberingExpression: string | NothingEnum

/\*\*

- Numbering-format choices.
  \*/
  numberingFormat: NumberingStyle | string | NothingEnum

/\*\*

- Paragraph level.
  \*/
  numberingLevel: number | NothingEnum

/\*\*

- Numbering restart policy collection.
  \*/
  readonly numberingRestartPolicies: NumberingRestartPolicy | NothingEnum

/\*\*

- Starting number for a numbered list.
  \*/
  numberingStartAt: number | NothingEnum

/\*\*

- When true, contextual alternate forms are used in OpenType fonts.
  \*/
  otfContextualAlternate: boolean | NothingEnum

/\*\*

- When true, discretionary ligatures are used in OpenType fonts.
  \*/
  otfDiscretionaryLigature: boolean | NothingEnum

/\*\*

- Figure style for OpenType fonts.
  \*/
  otfFigureStyle: OTFFigureStyle | NothingEnum

/\*\*

- When true, OpenType fractions are used.
  \*/
  otfFraction: boolean | NothingEnum

/\*\*

- When true, hiragana fonts switch to glyphs that differ for horizontal and vertical text. .
  \*/
  otfHVKana: boolean | NothingEnum

/\*\*

- When true, historical forms are used in OpenType fonts.
  \*/
  otfHistorical: boolean | NothingEnum

/\*\*

- When true, alternate justification forms are used in OpenType fonts.
  \*/
  otfJustificationAlternate: boolean | NothingEnum

/\*\*

- When true, localized forms are used in OpenType fonts.
  \*/
  otfLocale: boolean | NothingEnum

/\*\*

- When true, mark positioning is used in OpenType fonts.
  \*/
  otfMark: boolean | NothingEnum

/\*\*

- When true, ordinals are used in OpenType fonts.
  \*/
  otfOrdinal: boolean | NothingEnum

/\*\*

- When true, overlapping swash forms are used in OpenType fonts.
  \*/
  otfOverlapSwash: boolean | NothingEnum

/\*\*

- When true, kerning follows proportional CJK metrics in OpenType fonts.
  \*/
  otfProportionalMetrics: boolean | NothingEnum

/\*\*

- When true, italics are applied to half-width alphanumerics. .
  \*/
  otfRomanItalics: boolean | NothingEnum

/\*\*

- When true, OpenType fonts use slashed zeroes.
  \*/
  otfSlashedZero: boolean | NothingEnum

/\*\*

- When true, stretched alternate forms are used in OpenType fonts.
  \*/
  otfStretchedAlternate: boolean | NothingEnum

/\*\*

- When true, stylistic alternate forms are used in OpenType fonts.
  \*/
  otfStylisticAlternate: boolean | NothingEnum

/\*\*

- Stylistic sets selected for OpenType fonts.
  \*/
  otfStylisticSets: number | NothingEnum

/\*\*

- When true, swash forms are used in OpenType fonts.
  \*/
  otfSwash: boolean | NothingEnum

/\*\*

- When true, titling forms are used in OpenType fonts.
  \*/
  otfTitling: boolean | NothingEnum

/\*\*

- When true, character fill color overprints.
  \*/
  overprintFill: boolean | NothingEnum

/\*\*

- When true, character strokes overprint.
  \*/
  overprintStroke: boolean | NothingEnum

/\*\*

- Direction setting for paragraphs.
  \*/
  paragraphDirection: ParagraphDirectionOptions | NothingEnum

/\*\*

- When true, gyoudori mode covers the whole paragraph. When false, each paragraph line gets gyoudori mode independently.
  \*/
  paragraphGyoudori: boolean | NothingEnum

/\*\*

- Justification setting for paragraphs.
  \*/
  paragraphJustification: ParagraphJustificationOptions | NothingEnum

/\*\*

- Paragraph kashida width: none is 0, short is 1, medium is 2, and long is 3.
  \*/
  paragraphKashidaWidth: number | NothingEnum

/\*\*

- Size of the text.
  \*/
  pointSize: number | NothingEnum

/\*\*

- Position of the text relative to the baseline.
  \*/
  position: Position | NothingEnum

/\*\*

- Positional form used for OpenType.
  \*/
  positionalForm: PositionalForms | NothingEnum

/\*\*

- Collection containing preferences objects.
  \*/
  readonly preferences: Preferences

/\*\*

- When true, numbers cannot break across lines. When false, lines may break between digits in multi-digit numbers.
  \*/
  rensuuji: boolean | NothingEnum

/\*\*

- Right-indent width.
  \*/
  rightIndent: number | NothingEnum

/\*\*

- When true, Roman characters rotate in vertical text.
  \*/
  rotateSingleByteCharacters: boolean | NothingEnum

/\*\*

- Alignment setting for ruby.
  \*/
  rubyAlignment: RubyAlignments | NothingEnum

/\*\*

- When true, ruby auto alignment is enabled.
  \*/
  rubyAutoAlign: boolean | NothingEnum

/\*\*

- When true, ruby is auto-scaled to the specified percentage of parent text size. For that percentage, see ruby parent scaling percent. .
  \*/
  rubyAutoScaling: boolean | NothingEnum

/\*\*

- When true, glyphs in ruby auto tcy (tate-chuu-yoko) are automatically scaled to fit one em.
  \*/
  rubyAutoTcyAutoScale: boolean | NothingEnum

/\*\*

- Digit count included in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyDigits: number | NothingEnum

/\*\*

- When true, ruby auto tcy (tate-chuu-yoko) includes Roman characters.
  \*/
  rubyAutoTcyIncludeRoman: boolean | NothingEnum

/\*\*

- Ruby character fills use this swatch, which may be a color, gradient, tint, or mixed ink.
  \*/
  rubyFill: Swatch | string | NothingEnum

/\*\*

- Font assigned for ruby characters.
  \*/
  rubyFont: Font | string | NothingEnum

/\*\*

- Point size used by ruby characters.
  \*/
  rubyFontSize: number | NothingEnum

/\*\*

- Font-style name assigned to ruby characters.
  \*/
  rubyFontStyle: string | NothingEnum

/\*\*

- When true, ruby uses OpenType Pro fonts.
  \*/
  rubyOpenTypePro: boolean | NothingEnum

/\*\*

- When true, ruby overhang is constrained to the specified amount. For that amount, see ruby parent overhang amount. .
  \*/
  rubyOverhang: boolean | NothingEnum

/\*\*

- Overprint behavior used for the ruby fill.
  \*/
  rubyOverprintFill: AdornmentOverprint | NothingEnum

/\*\*

- Overprint behavior used for the ruby stroke.
  \*/
  rubyOverprintStroke: AdornmentOverprint | NothingEnum

/\*\*

- Maximum amount that ruby characters can overhang the parent text.
  \*/
  rubyParentOverhangAmount: RubyOverhang | NothingEnum

/\*\*

- Percentage used to scale parent text size into ruby text size.
  \*/
  rubyParentScalingPercent: number | NothingEnum

/\*\*

- Ruby spacing relative to parent text. .
  \*/
  rubyParentSpacing: RubyParentSpacing | NothingEnum

/\*\*

- Position of ruby characters relative to parent text.
  \*/
  rubyPosition: RubyKentenPosition | NothingEnum

/\*\*

- Ruby character strokes use this swatch, which may be a color, gradient, tint, or mixed ink.
  \*/
  rubyStroke: Swatch | string | NothingEnum

/\*\*

- Stroke tint percentage for ruby characters.
  \*/
  rubyStrokeTint: number | NothingEnum

/\*\*

- Tint percentage for the ruby fill color. (Range: 0 to 100).
  \*/
  rubyTint: number | NothingEnum

/\*\*

- Ruby type setting.
  \*/
  rubyType: RubyTypes | NothingEnum

/\*\*

- Stroke thickness, in points, for ruby characters.
  \*/
  rubyWeight: number | NothingEnum

/\*\*

- Horizontal spacing between ruby and parent characters.
  \*/
  rubyXOffset: number | NothingEnum

/\*\*

- Ruby character width as a percent of the original size.
  \*/
  rubyXScale: number | NothingEnum

/\*\*

- Vertical spacing between ruby and parent characters.
  \*/
  rubyYOffset: number | NothingEnum

/\*\*

- Ruby character height as a percent of the original size.
  \*/
  rubyYScale: number | NothingEnum

/\*\*

- Spacing between paragraphs that use the same style.
  \*/
  sameParaStyleSpacing: number | Spacing | NothingEnum

/\*\*

- When true, scaling characters also changes the line size. .
  \*/
  scaleAffectsLineHeight: boolean | NothingEnum

/\*\*

- When true, shatai rotation is applied.
  \*/
  shataiAdjustRotation: boolean | NothingEnum

/\*\*

- When true, shatai tsume is adjusted.
  \*/
  shataiAdjustTsume: boolean | NothingEnum

/\*\*

- Shatai lens angle, measured in degrees.
  \*/
  shataiDegreeAngle: number | NothingEnum

/\*\*

- Percentage of shatai obliquing applied.
  \*/
  shataiMagnification: number | NothingEnum

/\*\*

- Alignment used for lines that contain a single word.
  \*/
  singleWordJustification: SingleWordJustification | NothingEnum

/\*\*

- Skew angle for the ChangeTextPreference.
  \*/
  skew: number | NothingEnum

/\*\*

- Height of the space after the paragraph.
  \*/
  spaceAfter: number | NothingEnum

/\*\*

- Height of the space before the paragraph.
  \*/
  spaceBefore: number | NothingEnum

/\*\*

- Minimum spacing after a span or split column.
  \*/
  spanColumnMinSpaceAfter: number | NothingEnum

/\*\*

- Minimum spacing before a span or split column.
  \*/
  spanColumnMinSpaceBefore: number | NothingEnum

/\*\*

- Controls whether a paragraph uses one column, spans columns, or splits columns.
  \*/
  spanColumnType: SpanColumnTypeOptions | NothingEnum

/\*\*

- Count of columns spanned by a paragraph, or count of split columns.
  \*/
  spanSplitColumnCount: number | SpanColumnCountOptions | NothingEnum

/\*\*

- Inside gutter used when the paragraph splits columns.
  \*/
  splitColumnInsideGutter: number | NothingEnum

/\*\*

- Outside gutter used when the paragraph splits columns.
  \*/
  splitColumnOutsideGutter: number | NothingEnum

/\*\*

- Paragraph start location.
  \*/
  startParagraph: StartParagraph | NothingEnum

/\*\*

- Strikethrough strokes use this swatch, which may be a color, gradient, tint, or mixed ink.
  \*/
  strikeThroughColor: Swatch | string | NothingEnum

/\*\*

- Strikethrough stroke gaps use this swatch, which may be a color, gradient, tint, or mixed ink.
  \*/
  strikeThroughGapColor: Swatch | string | NothingEnum

/\*\*

- When true, the strikethrough stroke gap color overprints. Note: Valid when strike through type is not solid.
  \*/
  strikeThroughGapOverprint: boolean | NothingEnum

/\*\*

- Strikethrough gap-color tint percentage. (Range: 0 to 100) Note: Use only for a non-solid strike through type.
  \*/
  strikeThroughGapTint: number | NothingEnum

/\*\*

- Offset distance from the text baseline to the strikethrough stroke.
  \*/
  strikeThroughOffset: number | NothingEnum

/\*\*

- When true, the strikethrough stroke overprints.
  \*/
  strikeThroughOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the strikethrough stroke. (Range: 0 to 100).
  \*/
  strikeThroughTint: number | NothingEnum

/\*\*

- Stroke style used by the strikethrough stroke.
  \*/
  strikeThroughType: StrokeStyle | string | NothingEnum

/\*\*

- Stroke weight assigned to the strikethrough stroke.
  \*/
  strikeThroughWeight: number | NothingEnum

/\*\*

- When true, a strikethrough line is drawn through the text.
  \*/
  strikeThru: boolean | NothingEnum

/\*\*

- Stroke alignment applied to the text.
  \*/
  strokeAlignment: TextStrokeAlign | NothingEnum

/\*\*

- Swatch to find or substitute as stroke color; it may be a color, gradient, tint, or mixed ink.
  \*/
  strokeColor: string | NothingEnum | Swatch

/\*\*

- ChangeTextPreference stroke-color tint percentage. (Tint values are numbers from 0 to 100; -1 keeps the inherited or overridden value.).
  \*/
  strokeTint: number | NothingEnum

/\*\*

- Stroke weight assigned to the text characters.
  \*/
  strokeWeight: number | NothingEnum

/\*\*

- When true, the character becomes horizontal inside vertical text.
  \*/
  tatechuyoko: boolean | NothingEnum

/\*\*

- Horizontal offset for horizontal characters in vertical text.
  \*/
  tatechuyokoXOffset: number | NothingEnum

/\*\*

- Vertical offset for horizontal characters in vertical text.
  \*/
  tatechuyokoYOffset: number | NothingEnum

/\*\*

- Amount, in thousands of an em, used to loosen or tighten a text block.
  \*/
  tracking: number | NothingEnum

/\*\*

- Space added after each character.
  \*/
  trailingAki: number | NothingEnum

/\*\*

- When true, ideographic spaces do not wrap to the next line like text characters.
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

- Underline strokes use this swatch, which may be a color, gradient, tint, or mixed ink. .
  \*/
  underlineColor: Swatch | string | NothingEnum

/\*\*

- Underline stroke gaps use this swatch, which may be a color, gradient, tint, or mixed ink. Note: Valid when underline type is not solid.
  \*/
  underlineGapColor: Swatch | string | NothingEnum

/\*\*

- When true, the underline stroke gap color overprints.
  \*/
  underlineGapOverprint: boolean | NothingEnum

/\*\*

- Underline gap-color tint percentage. (Range: 0 to 100) Note: Use only with a non-solid underline type.
  \*/
  underlineGapTint: number | NothingEnum

/\*\*

- Offset distance from the text baseline to the underline.
  \*/
  underlineOffset: number | NothingEnum

/\*\*

- When true, the underline stroke color overprints.
  \*/
  underlineOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the underline stroke. (Range: 0 to 100).
  \*/
  underlineTint: number | NothingEnum

/\*\*

- Stroke style used by the underline.
  \*/
  underlineType: StrokeStyle | string | NothingEnum

/\*\*

- Stroke weight used by the underline.
  \*/
  underlineWeight: number | NothingEnum

/\*\*

- Vertical scale value for the ChangeTextPreference.
  \*/
  verticalScale: number | NothingEnum

/\*\*

- When true, warichu is enabled.
  \*/
  warichu: boolean | NothingEnum

/\*\*

- Alignment mode for warichu.
  \*/
  warichuAlignment: WarichuAlignment | NothingEnum

/\*\*

- Minimum character count allowed after a line break. .
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

- Number of warichu lines within one normal line.
  \*/
  warichuLines: number | NothingEnum

/\*\*

- Percentage used to scale parent text size into warichu size.
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

- Sets the Nth design axis for a variable font.
- @param nthAxisIndex Design axis index.
- @param nthAxisValue Value for the nth design axis.
  \*/
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void
  }

/\*\*

- Preferences used for GREP change operations.
  \*/
  declare class ChangeGrepPreference extends Preference {
  /\*\*
  - When true, words without a hyphenation-dictionary association may break on any character at the next line.
    \*/
    allowArbitraryHyphenation: boolean | NothingEnum

/\*\*

- Character style targeted for search or replacement.
  \*/
  appliedCharacterStyle: string | NothingEnum | CharacterStyle

/\*\*

- Search/replacement conditions. For "Any", pass the "nothing" enum; for "[Unconditional]", pass an empty list.
  \*/
  appliedConditions: string[] | NothingEnum | Condition[]

/\*\*

- Font assigned to the ChangeGrepPreference, provided as a font object or as the font-family name.
  \*/
  appliedFont: Font | string | NothingEnum

/\*\*

- Language targeted for search or replacement.
  \*/
  appliedLanguage: string | NothingEnum | Language | LanguageWithVendors

/\*\*

- List membership to apply.
  \*/
  appliedNumberingList: NumberingList | string | NothingEnum

/\*\*

- Paragraph style targeted for search or replacement.
  \*/
  appliedParagraphStyle: string | NothingEnum | ParagraphStyle

/\*\*

- Type-size percentage used for auto leading. (Range: 0 to 500).
  \*/
  autoLeading: number | NothingEnum
