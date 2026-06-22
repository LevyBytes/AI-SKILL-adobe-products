# Indesign (part 54)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- When true, the last word in a text column may be hyphenated.
  \*/
  hyphenateAcrossColumns: boolean | NothingEnum

/\*\*

- When true, the final word in a paragraph may hyphenate. Valid only when hyphenation is true.
  \*/
  hyphenateLastWord: boolean | NothingEnum

/\*\*

- When true, optical edge alignment is ignored for the paragraph.
  \*/
  ignoreEdgeAlignment: boolean | NothingEnum

/\*\*

- Number of grid squares used to arrange the text.
  \*/
  jidori: number | NothingEnum

/\*\*

- Paragraph alignment setting.
  \*/
  justification: Justification | NothingEnum

/\*\*

- When true, every line in the paragraph stays together. When false, paragraphs may break across pages or columns.
  \*/
  keepAllLinesTogether: boolean | NothingEnum

/\*\*

- Minimum number of paragraph lines kept together before a page break is allowed.
  \*/
  keepFirstLines: number | NothingEnum

/\*\*

- Minimum number of paragraph lines kept together after a page break.
  \*/
  keepLastLines: number | NothingEnum

/\*\*

- When true, a specified number of lines stay together as the paragraph breaks across columns or text frames.
  \*/
  keepLinesTogether: boolean | NothingEnum

/\*\*

- When true, the rule above the paragraph is forced to remain within frame bounds. Valid only when rule above is true.
  \*/
  keepRuleAboveInFrame: boolean | NothingEnum

/\*\*

- Minimum line count kept with the following paragraph.
  \*/
  keepWithNext: number | NothingEnum

/\*\*

- Alignment of kenten characters relative to their parent characters.
  \*/
  kentenAlignment: KentenAlignment | NothingEnum

/\*\*

- Character set for the custom kenten character. Valid only when kenten kind is custom.
  \*/
  kentenCharacterSet: KentenCharacterSet | NothingEnum

/\*\*

- Character used as kenten. Valid only when kenten kind is custom.
  \*/
  kentenCustomCharacter: string | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for the fill of kenten characters.
  \*/
  kentenFillColor: Swatch | string | NothingEnum

/\*\*

- Font used for kenten characters.
  \*/
  kentenFont: Font | string | NothingEnum

/\*\*

- Point size for kenten characters.
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

- Overprint method for the kenten fill.
  \*/
  kentenOverprintFill: AdornmentOverprint | NothingEnum

/\*\*

- Overprint method for the kenten stroke.
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

- Swatch, including color, gradient, tint, or mixed ink, used for the stroke of kenten characters.
  \*/
  kentenStrokeColor: Swatch | string | NothingEnum

/\*\*

- Stroke tint percentage for kenten characters. Range: 0 to 100.
  \*/
  kentenStrokeTint: number | NothingEnum

/\*\*

- Fill tint percentage for kenten characters. Range: 0 to 100.
  \*/
  kentenTint: number | NothingEnum

/\*\*

- Stroke weight, in points, for kenten characters.
  \*/
  kentenWeight: number | NothingEnum

/\*\*

- Horizontal size of kenten characters, measured as a percent of original size.
  \*/
  kentenXScale: number | NothingEnum

/\*\*

- Vertical size of kenten charachers, measured as a percent of original size.
  \*/
  kentenYScale: number | NothingEnum

/\*\*

- Pair-kerning type.
  \*/
  kerningMethod: string | NothingEnum

/\*\*

- Character-spacing amount to add or remove, expressed in thousandths of an em.
  \*/
  kerningValue: number | NothingEnum

/\*\*

- Hanging punctuation type to allow. Valid only while a kinsoku set is active.
  \*/
  kinsokuHangType: KinsokuHangTypes | NothingEnum

/\*\*

- Kinsoku set used to determine valid line breaks.
  \*/
  kinsokuSet: KinsokuTable | KinsokuSet | string | NothingEnum

/\*\*

- Kinsoku processing type that prevents kinsoku characters from starting or ending a line. Valid only when a kinsoku set is defined.
  \*/
  kinsokuType: KinsokuType | NothingEnum

/\*\*

- Amount used to indent the paragraph's last line.
  \*/
  lastLineIndent: number | NothingEnum

/\*\*

- Leading applied to the text.
  \*/
  leading: number | Leading | NothingEnum

/\*\*

- Space amount placed before each character.
  \*/
  leadingAki: number | NothingEnum

/\*\*

- Reference point used to measure leading from one line to the next.
  \*/
  leadingModel: LeadingModel | NothingEnum

/\*\*

- Left indent width.
  \*/
  leftIndent: number | NothingEnum

/\*\*

- When true, selected character combinations, such as fl and fi, are replaced with ligature characters.
  \*/
  ligatures: boolean | NothingEnum

/\*\*

- Mojikumi table. For details, see mojikumi table defaults.
  \*/
  mojikumi: MojikumiTable | string | MojikumiTableDefaults | NothingEnum

/\*\*

- When true, text remains on the same line.
  \*/
  noBreak: boolean | NothingEnum

/\*\*

- Number alignment setting.
  \*/
  numberingAlignment: ListAlignment | NothingEnum

/\*\*

- When true, the numbering restart policy is applied.
  \*/
  numberingApplyRestartPolicy: boolean | NothingEnum

/\*\*

- Character style used for the number string.
  \*/
  numberingCharacterStyle: CharacterStyle | string | NothingEnum

/\*\*

- Continue numbering at this level.
  \*/
  numberingContinue: boolean | NothingEnum

/\*\*

- Number-string expression used for numbering.
  \*/
  numberingExpression: string | NothingEnum

/\*\*

- Numbering format options.
  \*/
  numberingFormat: NumberingStyle | string | NothingEnum

/\*\*

- Paragraph level value.
  \*/
  numberingLevel: number | NothingEnum

/\*\*

- Starting number for a numbered list.
  \*/
  numberingStartAt: number | NothingEnum

/\*\*

- When true, OpenType contextual alternate forms are used.
  \*/
  otfContextualAlternate: boolean | NothingEnum

/\*\*

- When true, OpenType discretionary ligatures are used.
  \*/
  otfDiscretionaryLigature: boolean | NothingEnum

/\*\*

- OpenType figure style.
  \*/
  otfFigureStyle: OTFFigureStyle | NothingEnum

/\*\*

- When true, OpenType fractions are used.
  \*/
  otfFraction: boolean | NothingEnum

/\*\*

- When true, hiragana fonts are switched for horizontal and vertical glyph differences.
  \*/
  otfHVKana: boolean | NothingEnum

/\*\*

- When true, historical OpenType forms are used.
  \*/
  otfHistorical: boolean | NothingEnum

/\*\*

- When true, localized OpenType forms are used.
  \*/
  otfLocale: boolean | NothingEnum

/\*\*

- When true, OpenType mark positioning is used.
  \*/
  otfMark: boolean | NothingEnum

/\*\*

- When true, OpenType ordinals are used.
  \*/
  otfOrdinal: boolean | NothingEnum

/\*\*

- When true, kerning follows proportional CJK metrics in OpenType fonts.
  \*/
  otfProportionalMetrics: boolean | NothingEnum

/\*\*

- When true, half-width alphanumerics receive italics.
  \*/
  otfRomanItalics: boolean | NothingEnum

/\*\*

- When true, slashed zeroes are used in OpenType fonts.
  \*/
  otfSlashedZero: boolean | NothingEnum

/\*\*

- Stylistic sets used in OpenType fonts.
  \*/
  otfStylisticSets: number | NothingEnum

/\*\*

- When true, OpenType swash forms are used.
  \*/
  otfSwash: boolean | NothingEnum

/\*\*

- When true, OpenType titling forms are used.
  \*/
  otfTitling: boolean | NothingEnum

/\*\*

- When true, character fill color overprints.
  \*/
  overprintFill: boolean | NothingEnum

/\*\*

- When true, character stroke overprints.
  \*/
  overprintStroke: boolean | NothingEnum

/\*\*

- When true, gyoudori mode affects the whole paragraph. When false, it applies separately to each paragraph line.
  \*/
  paragraphGyoudori: boolean | NothingEnum

/\*\*

- Text size value.
  \*/
  pointSize: number | NothingEnum

/\*\*

- Text position relative to the baseline.
  \*/
  position: Position | NothingEnum

/\*\*

- OpenType positional form.
  \*/
  positionalForm: PositionalForms | NothingEnum

/\*\*

- Collection of preferences objects.
  \*/
  readonly preferences: Preferences

/\*\*

- When true, line breaks in numbers are disallowed. When false, lines may break between digits in multi-digit numbers.
  \*/
  rensuuji: boolean | NothingEnum

/\*\*

- Right indent width.
  \*/
  rightIndent: number | NothingEnum

/\*\*

- When true, Roman characters rotate in vertical text.
  \*/
  rotateSingleByteCharacters: boolean | NothingEnum

/\*\*

- Ruby alignment setting.
  \*/
  rubyAlignment: RubyAlignments | NothingEnum

/\*\*

- When true, ruby is aligned automatically.
  \*/
  rubyAutoAlign: boolean | NothingEnum

/\*\*

- When true, ruby is automatically scaled to the specified percentage of parent text size. For details about setting the percentage, see ruby parent scaling percent.
  \*/
  rubyAutoScaling: boolean | NothingEnum

/\*\*

- When true, glyphs in auto tcy (tate-chuu-yoko) within ruby are automatically scaled to fit one em.
  \*/
  rubyAutoTcyAutoScale: boolean | NothingEnum

/\*\*

- Number of digits included in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyDigits: number | NothingEnum

/\*\*

- When true, ruby auto tcy (tate-chuu-yoko) also accepts Roman characters.
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

- When true, ruby composition uses OpenType Pro fonts.
  \*/
  rubyOpenTypePro: boolean | NothingEnum

/\*\*

- When true, ruby overhang is limited by the configured amount. For that amount, see ruby parent overhang amount. .
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

- Maximum amount that ruby characters may extend past the parent text.
  \*/
  rubyParentOverhangAmount: RubyOverhang | NothingEnum

/\*\*

- Percentage that converts parent text size into the ruby text size.
  \*/
  rubyParentScalingPercent: number | NothingEnum

/\*\*

- Spacing of ruby relative to its parent text. .
  \*/
  rubyParentSpacing: RubyParentSpacing | NothingEnum

/\*\*

- Placement of ruby characters relative to the parent text.
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

- Ruby category selection.
  \*/
  rubyType: RubyTypes | NothingEnum

/\*\*

- Stroke thickness, in points, for ruby characters.
  \*/
  rubyWeight: number | NothingEnum

/\*\*

- Horizontal gap between ruby characters and the parent characters.
  \*/
  rubyXOffset: number | NothingEnum

/\*\*

- Ruby character width as a percent of the original size.
  \*/
  rubyXScale: number | NothingEnum

/\*\*

- Vertical gap between ruby characters and the parent characters.
  \*/
  rubyYOffset: number | NothingEnum

/\*\*

- Ruby character height as a percent of the original size.
  \*/
  rubyYScale: number | NothingEnum

/\*\*

- Paragraph spacing used when the same style continues.
  \*/
  sameParaStyleSpacing: number | Spacing | NothingEnum

/\*\*

- When true, character scaling changes the line height too. .
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

- Percentage of shatai obliquing to apply.
  \*/
  shataiMagnification: number | NothingEnum

/\*\*

- Justification used for lines containing only one word.
  \*/
  singleWordJustification: SingleWordJustification | NothingEnum

/\*\*

- Skew angle for the FindTransliteratePreference.
  \*/
  skew: number | NothingEnum

/\*\*

- Paragraph-space height below the paragraph.
  \*/
  spaceAfter: number | NothingEnum

/\*\*

- Paragraph-space height above the paragraph.
  \*/
  spaceBefore: number | NothingEnum

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

- When true, the strikethrough stroke's gap color overprints. Note: Valid when strike through type is not solid.
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

- Weight assigned to the strikethrough stroke.
  \*/
  strikeThroughWeight: number | NothingEnum

/\*\*

- When true, a strikethrough line is drawn through the text.
  \*/
  strikeThru: boolean | NothingEnum

/\*\*

- Swatch to find or substitute as stroke color; it may be a color, gradient, tint, or mixed ink.
  \*/
  strokeColor: string | NothingEnum | Swatch

/\*\*

- FindTransliteratePreference stroke-color tint percentage. (Tint values are numbers from 0 to 100; -1 keeps the inherited or overridden value.).
  \*/
  strokeTint: number | NothingEnum

/\*\*

- Character stroke weight applied to the text.
  \*/
  strokeWeight: number | NothingEnum

/\*\*

- When true, a character is made horizontal inside vertical text.
  \*/
  tatechuyoko: boolean | NothingEnum

/\*\*

- Horizontal offset for horizontal characters placed within vertical text.
  \*/
  tatechuyokoXOffset: number | NothingEnum

/\*\*

- Vertical offset for horizontal characters placed within vertical text.
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

- When true, ideographic spaces do not wrap to the next line as text characters do.
  \*/
  treatIdeographicSpaceAsSpace: boolean | NothingEnum

/\*\*

- Horizontal compression amount for characters.
  \*/
  tsume: number | NothingEnum

/\*\*

- When true, the text is underlined.
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

- When true, the underline stroke's gap color overprints.
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

- Vertical scale value for the FindTransliteratePreference.
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

- Minimum character count permitted after a line break. .
  \*/
  warichuCharsAfterBreak: number | NothingEnum

/\*\*

- Minimum character count permitted before a line break.
  \*/
  warichuCharsBeforeBreak: number | NothingEnum

/\*\*

- Gap between warichu character lines.
  \*/
  warichuLineSpacing: number | NothingEnum

/\*\*

- Number of warichu lines that fit within one normal line.
  \*/
  warichuLines: number | NothingEnum

/\*\*

- Percentage used to scale parent text size into warichu size.
  \*/
  warichuSize: number | NothingEnum

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

- Preferences used for text change operations.
  \*/
  declare class ChangeTextPreference extends Preference {
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

- Font assigned to the ChangeTextPreference, provided as a font object or as the font-family name.
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

/\*\*

- Half-width character threshold at or below which characters run horizontally in vertical text automatically.
  \*/
  autoTcy: number | NothingEnum

/\*\*

- When true, auto tcy also includes Roman characters.
  \*/
  autoTcyIncludeRoman: boolean | NothingEnum

/\*\*

- When true, or when an enumeration value is supplied, ragged lines are balanced. Note: A single-line text composer cannot use this setting.
  \*/
  balanceRaggedLines: boolean | BalanceLinesStyle | NothingEnum

/\*\*

- Baseline shift assigned to the text.
  \*/
  baselineShift: number | NothingEnum

/\*\*

- Bullet character value.
  \*/
  readonly bulletChar: Bullet | NothingEnum

/\*\*

- List type used for bullets and numbering.
  \*/
  bulletsAndNumberingListType: ListType | NothingEnum

/\*\*

- Character style used for the text after string.
  \*/
  bulletsCharacterStyle: CharacterStyle | string | NothingEnum

/\*\*

- Text-after string expression used by bullets.
  \*/
  bulletsTextAfter: string | NothingEnum

/\*\*

- When true, double period (..), ellipse (...), and double hyphen (--) entries are added to the selected kinsoku set. Note: Requires an active kinsoku set.
  \*/
  bunriKinshi: boolean | NothingEnum

/\*\*

- Capitalization rule to apply.
  \*/
  capitalization: Capitalization | NothingEnum

/\*\*

- Change-conditions behavior, either replacing applied conditions or adding to them.
  \*/
  changeConditionsMode: ChangeConditionsModes | NothingEnum

/\*\*

- Replacement value for ChangeTextPreference.
  \*/
  changeTo: string | NothingEnum

/\*\*

- Alignment of smaller characters against the line's largest character.
  \*/
  characterAlignment: CharacterAlignment | NothingEnum

/\*\*

- Direction assigned to the character.
  \*/
  characterDirection: CharacterDirectionOptions | NothingEnum

/\*\*

- Per-character rotation angle, in degrees. Note: The rotation is counterclockwise.
  \*/
  characterRotation: number | NothingEnum

/\*\*

- When true, CJK grids use grid tracking for non-Roman characters.
  \*/
  cjkGridTracking: boolean | NothingEnum

/\*\*

- Text composer chosen for composing the text.
  \*/
  composer: string | NothingEnum

/\*\*

- Design Axes values.
  \*/
  designAxes: number[] | NothingEnum

/\*\*

- Position used for diacriticical characters.
  \*/
  diacriticPosition: DiacriticPositionOptions | NothingEnum

/\*\*

- Digits type selection.
  \*/
  digitsType: DigitsTypeOptions | NothingEnum

/\*\*

- Character count used for the drop cap.
  \*/
  dropCapCharacters: number | NothingEnum

/\*\*

- Line count used for the drop cap.
  \*/
  dropCapLines: number | NothingEnum

/\*\*

- Glyph-outline detail for the drop cap: 1 = left side bearing; 2 = descenders; Japanese frame grid uses 0x100,0x200,0x400.
  \*/
  dropcapDetail: number | NothingEnum

/\*\*

- Stroke join style applied to the text characters.
  \*/
  endJoin: OutlineJoin | NothingEnum

/\*\*

- Swatch to find or substitute as fill color; it may be a color, gradient, tint, or mixed ink.
  \*/
  fillColor: string | NothingEnum | Swatch

/\*\*

- ChangeTextPreference fill-color tint percentage. (Tint values are numbers from 0 to 100; -1 keeps the inherited or overridden value.).
  \*/
  fillTint: number | NothingEnum

/\*\*

- First-line indent amount.
  \*/
  firstLineIndent: number | NothingEnum

/\*\*

- Font-style name.
  \*/
  fontStyle: string | NothingEnum

/\*\*

- Glyph variant used in place of standard glyphs.
  \*/
  glyphForm: AlternateGlyphForms | NothingEnum

/\*\*

- Linear-gradient angle used on the text fill. (Range: -180 to 180).
  \*/
  gradientFillAngle: number | NothingEnum
