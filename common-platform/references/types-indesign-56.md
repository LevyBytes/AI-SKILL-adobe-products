# Indesign (part 56)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Maximum half-width character count that still auto-sets those characters horizontally in vertical text.
  \*/
  autoTcy: number | NothingEnum

/\*\*

- When true, Roman characters are included in auto tcy.
  \*/
  autoTcyIncludeRoman: boolean | NothingEnum

/\*\*

- When true, or when supplied with an enum value, ragged lines are balanced. Not valid with a single-line text composer.
  \*/
  balanceRaggedLines: boolean | BalanceLinesStyle | NothingEnum

/\*\*

- Baseline offset applied to text.
  \*/
  baselineShift: number | NothingEnum

/\*\*

- Bullet glyph.
  \*/
  readonly bulletChar: Bullet | NothingEnum

/\*\*

- Bullets and numbering list category.
  \*/
  bulletsAndNumberingListType: ListType | NothingEnum

/\*\*

- Character style assigned to the text after string.
  \*/
  bulletsCharacterStyle: CharacterStyle | string | NothingEnum

/\*\*

- Text after string expression used by bullets.
  \*/
  bulletsTextAfter: string | NothingEnum

/\*\*

- When true, the selected kinsoku set also blocks double period (..), ellipse (...), and double hyphen (--). Valid only while a kinsoku set is active.
  \*/
  bunriKinshi: boolean | NothingEnum

/\*\*

- Capitalization behavior.
  \*/
  capitalization: Capitalization | NothingEnum

/\*\*

- Change conditions mode deciding whether applied conditions are replaced or appended.
  \*/
  changeConditionsMode: ChangeConditionsModes | NothingEnum

/\*\*

- Replacement value for ChangeGrepPreference.
  \*/
  changeTo: string | NothingEnum

/\*\*

- How small characters align against the line's largest character.
  \*/
  characterAlignment: CharacterAlignment | NothingEnum

/\*\*

- Character direction setting.
  \*/
  characterDirection: CharacterDirectionOptions | NothingEnum

/\*\*

- Individual character rotation angle, in degrees. Rotation proceeds counterclockwise.
  \*/
  characterRotation: number | NothingEnum

/\*\*

- When true, CJK grids track non-Roman characters by using grid tracking.
  \*/
  cjkGridTracking: boolean | NothingEnum

/\*\*

- Text composer selected for composition.
  \*/
  composer: string | NothingEnum

/\*\*

- Design Axes values.
  \*/
  designAxes: number[] | NothingEnum

/\*\*

- Diacritical character placement.
  \*/
  diacriticPosition: DiacriticPositionOptions | NothingEnum

/\*\*

- Digits type setting.
  \*/
  digitsType: DigitsTypeOptions | NothingEnum

/\*\*

- Count of characters used for a drop cap.
  \*/
  dropCapCharacters: number | NothingEnum

/\*\*

- Count of lines used for a drop cap.
  \*/
  dropCapLines: number | NothingEnum

/\*\*

- Glyph-outline detail for drop caps: 1 = left side bearing, 2 = descenders, and 0x100,0x200,0x400 apply to Japanese frame grid.
  \*/
  dropcapDetail: number | NothingEnum

/\*\*

- Stroke join used on text characters.
  \*/
  endJoin: OutlineJoin | NothingEnum

/\*\*

- Fill swatch, whether color, gradient, tint, or mixed ink, used for search or replacement.
  \*/
  fillColor: string | NothingEnum | Swatch

/\*\*

- Fill-color tint percentage for ChangeGrepPreference. Use 0 to 100 for a tint value, or -1 for inherited or overridden behavior.
  \*/
  fillTint: number | NothingEnum

/\*\*

- First-line indent amount.
  \*/
  firstLineIndent: number | NothingEnum

/\*\*

- Font style name.
  \*/
  fontStyle: string | NothingEnum

/\*\*

- Glyph variant substituted for standard glyphs.
  \*/
  glyphForm: AlternateGlyphForms | NothingEnum

/\*\*

- Linear fill-gradient angle on the text. Range: -180 to 180.
  \*/
  gradientFillAngle: number | NothingEnum

/\*\*

- Fill-gradient length for linear gradients, or radius for radial gradients, on the text.
  \*/
  gradientFillLength: number | NothingEnum

/\*\*

- Fill-gradient start point in page coordinates, formatted as [x, y].
  \*/
  gradientFillStart: [number | string, number | string] | NothingEnum

/\*\*

- Linear stroke-gradient angle on the text. Range: -180 to 180.
  \*/
  gradientStrokeAngle: number | NothingEnum

/\*\*

- Stroke-gradient length for linear gradients, or radius for radial gradients, on the text.
  \*/
  gradientStrokeLength: number | NothingEnum

/\*\*

- Stroke-gradient start point in page coordinates, formatted as [x, y].
  \*/
  gradientStrokeStart: [number | string, number | string] | NothingEnum

/\*\*

- Alignment target, either the frame grid or baseline grid.
  \*/
  gridAlignment: GridAlignment | NothingEnum

/\*\*

- Manual gyoudori value.
  \*/
  gridGyoudori: number | NothingEnum

/\*\*

- Horizontal scale applied to ChangeGrepPreference.
  \*/
  horizontalScale: number | NothingEnum

/\*\*

- When true, the final word in a text column may hyphenate.
  \*/
  hyphenateAcrossColumns: boolean | NothingEnum

/\*\*

- When true, the last word of a paragraph may hyphenate. Valid only when hyphenation is true.
  \*/
  hyphenateLastWord: boolean | NothingEnum

/\*\*

- When true, paragraph optical edge alignment is ignored.
  \*/
  ignoreEdgeAlignment: boolean | NothingEnum

/\*\*

- Grid-square count used to arrange text.
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

- When true, every paragraph line stays together; when false, paragraphs may break across pages or columns.
  \*/
  keepAllLinesTogether: boolean | NothingEnum

/\*\*

- Minimum line count kept together before a page break is allowed in a paragraph.
  \*/
  keepFirstLines: number | NothingEnum

/\*\*

- Minimum line count kept together after a page break in a paragraph.
  \*/
  keepLastLines: number | NothingEnum

/\*\*

- When true, a specified line count remains together as the paragraph breaks across columns or text frames.
  \*/
  keepLinesTogether: boolean | NothingEnum

/\*\*

- When true, the paragraph's rule above is forced to stay within frame bounds. Valid only when rule above is true.
  \*/
  keepRuleAboveInFrame: boolean | NothingEnum

/\*\*

- Minimum line count to keep with the next paragraph.
  \*/
  keepWithNext: number | NothingEnum

/\*\*

- Whether the paragraph's first line stays with the previous paragraph's last line.
  \*/
  keepWithPrevious: boolean | NothingEnum

/\*\*

- Kenten character alignment relative to parent characters.
  \*/
  kentenAlignment: KentenAlignment | NothingEnum

/\*\*

- Character set for a custom kenten character. Valid only when kenten kind is custom.
  \*/
  kentenCharacterSet: KentenCharacterSet | NothingEnum

/\*\*

- Custom kenten character value. Valid only when kenten kind is custom.
  \*/
  kentenCustomCharacter: string | NothingEnum

/\*\*

- Kenten fill swatch, including color, gradient, tint, or mixed ink.
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

- Font style used for kenten characters.
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

- Distance separating kenten characters from their parent characters.
  \*/
  kentenPlacement: number | NothingEnum

/\*\*

- Kenten position in relation to the parent character.
  \*/
  kentenPosition: RubyKentenPosition | NothingEnum

/\*\*

- Kenten stroke swatch, including color, gradient, tint, or mixed ink.
  \*/
  kentenStrokeColor: Swatch | string | NothingEnum

/\*\*

- Kenten stroke tint percentage. Range: 0 to 100.
  \*/
  kentenStrokeTint: number | NothingEnum

/\*\*

- Kenten fill tint percentage. Range: 0 to 100.
  \*/
  kentenTint: number | NothingEnum

/\*\*

- Kenten stroke weight in points.
  \*/
  kentenWeight: number | NothingEnum

/\*\*

- Kenten horizontal size as a percent of original size.
  \*/
  kentenXScale: number | NothingEnum

/\*\*

- Kenten vertical size as a percent of original size.
  \*/
  kentenYScale: number | NothingEnum

/\*\*

- Pair-kerning type.
  \*/
  kerningMethod: string | NothingEnum

/\*\*

- Space added to or removed from characters, measured in thousandths of an em.
  \*/
  kerningValue: number | NothingEnum

/\*\*

- Keyboard direction for the character.
  \*/
  keyboardDirection: CharacterDirectionOptions | NothingEnum

/\*\*

- Hanging-punctuation type to allow. Valid only while a kinsoku set is active.
  \*/
  kinsokuHangType: KinsokuHangTypes | NothingEnum

/\*\*

- Kinsoku set used to decide valid line-break positions.
  \*/
  kinsokuSet: KinsokuTable | KinsokuSet | string | NothingEnum

/\*\*

- Kinsoku processing type that prevents kinsoku characters from starting or ending a line. Valid only when a kinsoku set is defined.
  \*/
  kinsokuType: KinsokuType | NothingEnum

/\*\*

- Last-line indent amount in the paragraph.
  \*/
  lastLineIndent: number | NothingEnum

/\*\*

- Leading value applied to text.
  \*/
  leading: number | Leading | NothingEnum

/\*\*

- Space amount before each character.
  \*/
  leadingAki: number | NothingEnum

/\*\*

- Point from which line-to-line leading is measured.
  \*/
  leadingModel: LeadingModel | NothingEnum

/\*\*

- Left indent width.
  \*/
  leftIndent: number | NothingEnum

/\*\*

- When true, combinations such as fl and fi are replaced with ligature glyphs.
  \*/
  ligatures: boolean | NothingEnum

/\*\*

- XML tag assigned to the element.
  \*/
  markupTag: string | NothingEnum | XMLTag

/\*\*

- Ratio limit where stroke width versus miter length changes a miter (pointed) join into a bevel (squared-off) join.
  \*/
  miterLimit: number | NothingEnum

/\*\*

- Mojikumi table value. For details, see mojikumi table defaults.
  \*/
  mojikumi: MojikumiTable | string | MojikumiTableDefaults | NothingEnum

/\*\*

- When true, text remains on the same line.
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

- Number string expression for numbering.
  \*/
  numberingExpression: string | NothingEnum

/\*\*

- Numbering format choices.
  \*/
  numberingFormat: NumberingStyle | string | NothingEnum

/\*\*

- Paragraph level.
  \*/
  numberingLevel: number | NothingEnum

/\*\*

- Numbering restart policy values.
  \*/
  readonly numberingRestartPolicies: NumberingRestartPolicy | NothingEnum

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

- When true, hiragana fonts with different horizontal and vertical glyphs are switched.
  \*/
  otfHVKana: boolean | NothingEnum

/\*\*

- When true, OpenType historical forms are used.
  \*/
  otfHistorical: boolean | NothingEnum

/\*\*

- When true, OpenType alternate justification forms are used.
  \*/
  otfJustificationAlternate: boolean | NothingEnum

/\*\*

- When true, OpenType localized forms are used.
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

- When true, OpenType overlapping swash forms are used.
  \*/
  otfOverlapSwash: boolean | NothingEnum

/\*\*

- When true, OpenType kerning follows proportional CJK metrics.
  \*/
  otfProportionalMetrics: boolean | NothingEnum

/\*\*

- When true, italics apply to half-width alphanumerics.
  \*/
  otfRomanItalics: boolean | NothingEnum

/\*\*

- When true, OpenType slashed zeroes are used.
  \*/
  otfSlashedZero: boolean | NothingEnum

/\*\*

- When true, OpenType stretched alternate forms are used.
  \*/
  otfStretchedAlternate: boolean | NothingEnum

/\*\*

- When true, OpenType stylistic alternate forms are used.
  \*/
  otfStylisticAlternate: boolean | NothingEnum

/\*\*

- OpenType stylistic sets to use.
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

- When true, the characters' fill color overprints.
  \*/
  overprintFill: boolean | NothingEnum

/\*\*

- When true, character strokes overprint.
  \*/
  overprintStroke: boolean | NothingEnum

/\*\*

- Paragraph direction setting.
  \*/
  paragraphDirection: ParagraphDirectionOptions | NothingEnum

/\*\*

- When true, gyoudori mode covers the whole paragraph; when false, it applies line by line.
  \*/
  paragraphGyoudori: boolean | NothingEnum

/\*\*

- Paragraph justification setting.
  \*/
  paragraphJustification: ParagraphJustificationOptions | NothingEnum

/\*\*

- Paragraph kashida width where 0 is none, 1 is short, 2 is medium, and 3 is long.
  \*/
  paragraphKashidaWidth: number | NothingEnum

/\*\*

- Text point size.
  \*/
  pointSize: number | NothingEnum

/\*\*

- Text position measured against the baseline.
  \*/
  position: Position | NothingEnum

/\*\*

- OpenType positional form.
  \*/
  positionalForm: PositionalForms | NothingEnum

/\*\*

- Collection containing preferences objects.
  \*/
  readonly preferences: Preferences

/\*\*

- When true, line breaks inside numbers are disallowed; when false, multi-digit numbers may break between digits.
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

- When true, ruby aligns automatically.
  \*/
  rubyAutoAlign: boolean | NothingEnum

/\*\*

- When true, ruby scales automatically to the specified percent of parent text size. For details about setting the percent, see ruby parent scaling percent.
  \*/
  rubyAutoScaling: boolean | NothingEnum

/\*\*

- When true, glyphs in auto tcy (tate-chuu-yoko) within ruby auto-scale to fit one em.
  \*/
  rubyAutoTcyAutoScale: boolean | NothingEnum

/\*\*

- Digit count included in auto tcy (tate-chuu-yoko) for ruby.
  \*/
  rubyAutoTcyDigits: number | NothingEnum

/\*\*

- When true, Roman characters are included in auto tcy (tate-chuu-yoko) for ruby.
  \*/
  rubyAutoTcyIncludeRoman: boolean | NothingEnum

/\*\*

- Ruby fill swatch, including color, gradient, tint, or mixed ink.
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

- Font style assigned to ruby characters.
  \*/
  rubyFontStyle: string | NothingEnum

/\*\*

- When true, OpenType Pro fonts are used for ruby.
  \*/
  rubyOpenTypePro: boolean | NothingEnum

/\*\*

- When true, ruby overhang is constrained to the specified amount. For details about setting the amount, see ruby parent overhang amount.
  \*/
  rubyOverhang: boolean | NothingEnum

/\*\*

- Overprint method for ruby fill.
  \*/
  rubyOverprintFill: AdornmentOverprint | NothingEnum

/\*\*

- Overprint method for ruby stroke.
  \*/
  rubyOverprintStroke: AdornmentOverprint | NothingEnum

/\*\*

- Amount ruby characters may extend past the parent text.
  \*/
  rubyParentOverhangAmount: RubyOverhang | NothingEnum

/\*\*

- Percentage used to scale parent text size when determining ruby text size.
  \*/
  rubyParentScalingPercent: number | NothingEnum

/\*\*

- Ruby spacing relative to parent text.
  \*/
  rubyParentSpacing: RubyParentSpacing | NothingEnum

/\*\*

- Ruby character position relative to parent text.
  \*/
  rubyPosition: RubyKentenPosition | NothingEnum

/\*\*

- Ruby stroke swatch, including color, gradient, tint, or mixed ink.
  \*/
  rubyStroke: Swatch | string | NothingEnum

/\*\*

- Ruby character stroke tint percentage.
  \*/
  rubyStrokeTint: number | NothingEnum

/\*\*

- Ruby fill-color tint percentage. Range: 0 to 100.
  \*/
  rubyTint: number | NothingEnum

/\*\*

- Ruby type setting.
  \*/
  rubyType: RubyTypes | NothingEnum

/\*\*

- Ruby character stroke weight in points.
  \*/
  rubyWeight: number | NothingEnum

/\*\*

- Horizontal spacing between ruby and parent characters.
  \*/
  rubyXOffset: number | NothingEnum

/\*\*

- Ruby horizontal size as a percent of original size.
  \*/
  rubyXScale: number | NothingEnum

/\*\*

- Vertical spacing between ruby and parent characters.
  \*/
  rubyYOffset: number | NothingEnum

/\*\*

- Ruby vertical size as a percent of original size.
  \*/
  rubyYScale: number | NothingEnum

/\*\*

- Spacing between paragraphs that use the same style.
  \*/
  sameParaStyleSpacing: number | Spacing | NothingEnum

/\*\*

- When true, character scaling changes the line size.
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

- Shatai lens angle in degrees.
  \*/
  shataiDegreeAngle: number | NothingEnum

/\*\*

- Shatai obliquing amount as a percentage.
  \*/
  shataiMagnification: number | NothingEnum

/\*\*

- Alignment used for single-word lines.
  \*/
  singleWordJustification: SingleWordJustification | NothingEnum

/\*\*

- Skew angle assigned to ChangeGrepPreference.
  \*/
  skew: number | NothingEnum

/\*\*

- Paragraph space below height.
  \*/
  spaceAfter: number | NothingEnum

/\*\*

- Paragraph space above height.
  \*/
  spaceBefore: number | NothingEnum

/\*\*

- Minimum space after a span or split column.
  \*/
  spanColumnMinSpaceAfter: number | NothingEnum

/\*\*

- Minimum space before a span or split column.
  \*/
  spanColumnMinSpaceBefore: number | NothingEnum

/\*\*

- Whether the paragraph uses one column, spans columns, or splits columns.
  \*/
  spanColumnType: SpanColumnTypeOptions | NothingEnum

/\*\*

- Number of columns spanned by the paragraph, or count of split columns.
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

- Start location for the paragraph.
  \*/
  startParagraph: StartParagraph | NothingEnum

/\*\*

- Strikethrough stroke swatch, including color, gradient, tint, or mixed ink.
  \*/
  strikeThroughColor: Swatch | string | NothingEnum

/\*\*

- Strikethrough gap swatch, including color, gradient, tint, or mixed ink.
  \*/
  strikeThroughGapColor: Swatch | string | NothingEnum

/\*\*

- When true, the strikethrough gap color overprints. Valid when strike through type is not solid.
  \*/
  strikeThroughGapOverprint: boolean | NothingEnum

/\*\*

- Strikethrough gap-color tint percentage. Range: 0 to 100. Valid when strike through type is not solid.
  \*/
  strikeThroughGapTint: number | NothingEnum

/\*\*

- Offset amount from the text baseline for the strikethrough stroke.
  \*/
  strikeThroughOffset: number | NothingEnum

/\*\*

- When true, the strikethrough stroke overprints.
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

- When true, text receives a strikethrough line.
  \*/
  strikeThru: boolean | NothingEnum

/\*\*

- Text stroke alignment setting.
  \*/
  strokeAlignment: TextStrokeAlign | NothingEnum

/\*\*

- Stroke swatch, whether color, gradient, tint, or mixed ink, used for search or replacement.
  \*/
  strokeColor: string | NothingEnum | Swatch

/\*\*

- Stroke-color tint percentage for ChangeGrepPreference. Use 0 to 100 for a tint value, or -1 for inherited or overridden behavior.
  \*/
  strokeTint: number | NothingEnum

/\*\*

- Stroke weight applied to text characters.
  \*/
  strokeWeight: number | NothingEnum

/\*\*

- When true, the character becomes horizontal in vertical text.
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

- Loosening or tightening amount for a text block, measured in thousandths of an em.
  \*/
  tracking: number | NothingEnum

/\*\*

- Space amount after each character.
  \*/
  trailingAki: number | NothingEnum

/\*\*

- When true, ideographic spaces avoid wrapping to the next line like text characters.
  \*/
  treatIdeographicSpaceAsSpace: boolean | NothingEnum

/\*\*

- Horizontal character compression amount.
  \*/
  tsume: number | NothingEnum

/\*\*

- When true, text is underlined.
  \*/
  underline: boolean | NothingEnum

/\*\*

- Underline stroke swatch, including color, gradient, tint, or mixed ink.
  \*/
  underlineColor: Swatch | string | NothingEnum
