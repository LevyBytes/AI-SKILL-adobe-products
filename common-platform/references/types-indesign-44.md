# Indesign (part 44)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- When true, the Japanese composer treats quotes as half width and rotates them in vertical text.
  \*/
  quoteCharactersRotatedInVertical: boolean

/\*\*

- When this bool is true, Indic & Latin characters are shaped through Harfbuzz Shaping engine rather than Lipika.
  \*/
  shapeIndicAndLatinWithHarbuzz: boolean

/\*\*

- When true, hidden characters are displayed.
  \*/
  showInvisibles: boolean

/\*\*

- Small-caps text size as a percentage of font size. (Range: 1 to 200)
  \*/
  smallCap: number

/\*\*

- When true, pages can be automatically added and deleted in response to text reflow.
  \*/
  smartTextReflow: boolean

/\*\*

- When this is True and Smart text reflow is also enabled, page add/delete operations after text reflowing run synchronously.
  \*/
  smartTextReflowSync: boolean

/\*\*

- Subscript character position as a percentage of regular leading. (Range: -500 to 500)
  \*/
  subscriptPosition: number

/\*\*

- Subscript character size as a percentage of font size. (Range: 0 to 200)
  \*/
  subscriptSize: number

/\*\*

- Superscript character position as a percentage of regular leading. (Range: -500 to 500)
  \*/
  superscriptPosition: number

/\*\*

- Superscript character size as a percentage of font size. (Range: 0 to 200)
  \*/
  superscriptSize: number

/\*\*

- When true, straight quotes are converted into typographic quotes.
  \*/
  typographersQuotes: boolean

/\*\*

- When true, the character's glyph CID supplies its mojikumi class.
  \*/
  useCidMojikumi: boolean

/\*\*

- When true, X and Y scaling are reversed for Roman characters in vertical text.
  \*/
  useNewVerticalScaling: boolean

/\*\*

- When true, the correct optical size is selected automatically.
  \*/
  useOpticalSize: boolean

/\*\*

- When true, leading changes made to a text range apply to the whole paragraph. When false, they affect only the text range.
  \*/
  useParagraphLeading: boolean

/\*\*

- When true, text wrap ignores text on layers above the layer that contains the text wrap object. When false, text wrap affects all visible layers.
  \*/
  zOrderTextWrap: boolean
  }

/\*\*

- TextDefault settings.
  \*/
  declare class TextDefault extends Preference {
  /\*\*
  - When true, text baselines align to the baseline grid.
    \*/
    alignToBaseline: boolean

/\*\*

- When true, words without an associated hyphenation dictionary may break to the next line on any character.
  \*/
  allowArbitraryHyphenation: boolean

/\*\*

- Character style assigned to the text.
  \*/
  appliedCharacterStyle: CharacterStyle | string

/\*\*

- Font assigned to TextDefault, either as a font object or a font family name.
  \*/
  appliedFont: Font | string

/\*\*

- Language assigned to the text.
  \*/
  appliedLanguage: LanguageWithVendors | Language | string

/\*\*

- Named grid currently in use.
  \*/
  appliedNamedGrid: NamedGrid

/\*\*

- List membership target.
  \*/
  appliedNumberingList: NumberingList | string

/\*\*

- Paragraph style assigned to the text.
  \*/
  appliedParagraphStyle: ParagraphStyle | string

/\*\*

- Type-size percentage used for auto leading. (Range: 0 to 500).
  \*/
  autoLeading: number

/\*\*

- Half-width character count threshold at or below which characters run horizontally automatically in vertical text.
  \*/
  autoTcy: number

/\*\*

- When true, auto tcy includes Roman characters.
  \*/
  autoTcyIncludeRoman: boolean

/\*\*

- When true or set to an enumeration value, ragged lines are balanced. Note: unavailable with a single-line text composer.
  \*/
  balanceRaggedLines: boolean | BalanceLinesStyle

/\*\*

- Baseline shift assigned to the text.
  \*/
  baselineShift: number | string

/\*\*

- Bullet character.
  \*/
  readonly bulletChar: Bullet

/\*\*

- Alignment used for the bullet character.
  \*/
  bulletsAlignment: ListAlignment

/\*\*

- Bullets and numbering list type.
  \*/
  bulletsAndNumberingListType: ListType

/\*\*

- Character style used for the text after string.
  \*/
  bulletsCharacterStyle: CharacterStyle | string

/\*\*

- Text after string expression used for bullets.
  \*/
  bulletsTextAfter: string

/\*\*

- When true, the selected kinsoku set adds double period (..), ellipse (...), and double hyphen (--). Note: valid only while a kinsoku set is active.
  \*/
  bunriKinshi: boolean

/\*\*

- Capitalization scheme.
  \*/
  capitalization: Capitalization

/\*\*

- Small-character alignment against the largest character in the line.
  \*/
  characterAlignment: CharacterAlignment

/\*\*

- Character direction setting.
  \*/
  characterDirection: CharacterDirectionOptions

/\*\*

- Rotation angle for individual characters, in degrees. Note: rotation is counterclockwise.
  \*/
  characterRotation: number

/\*\*

- When true, grid tracking is used to track non-Roman characters in CJK grids.
  \*/
  cjkGridTracking: boolean

/\*\*

- Text composer used to compose the text.
  \*/
  composer: string

/\*\*

- Design Axes value.
  \*/
  designAxes: number[]

/\*\*

- Desired individual-character width, expressed as a percentage. (Range: 50 to 200)
  \*/
  desiredGlyphScaling: number

/\*\*

- Desired letter spacing, as a percentge of the font's built-in space between letters. (Range: -100 to 500)
  \*/
  desiredLetterSpacing: number

/\*\*

- Desired spacing between words, using the font word space value as the percentage basis. (Range: 0 to 1000)
  \*/
  desiredWordSpacing: number

/\*\*

- Diacriticical character position.
  \*/
  diacriticPosition: DiacriticPositionOptions

/\*\*

- Digits type.
  \*/
  digitsType: DigitsTypeOptions

/\*\*

- Character count used for the drop cap.
  \*/
  dropCapCharacters: number

/\*\*

- Line count used for the drop cap.
  \*/
  dropCapLines: number

/\*\*

- Character style applied to the drop cap.
  \*/
  dropCapStyle: CharacterStyle | string

/\*\*

- Drop-cap glyph-outline detail values: 1 = left side bearing; 2 = descenders; 0x100,0x200,0x400 support Japanese frame grid.
  \*/
  dropcapDetail: number

/\*\*

- Stroke join type used on text characters.
  \*/
  endJoin: OutlineJoin

/\*\*

- Swatch (color, gradient, tint, or mixed ink) applied to the TextDefault fill. .
  \*/
  fillColor: Swatch | string

/\*\*

- Fill color tint for TextDefault, as a percentage. To specify a tint percentage, use 0 to 100; use -1 for the inherited or overridden value.
  \*/
  fillTint: number

/\*\*

- Indent amount for the first line.
  \*/
  firstLineIndent: number | string

/\*\*

- Font style name.
  \*/
  fontStyle: string

/\*\*

- Glyph variant substituted for standard glyphs.
  \*/
  glyphForm: AlternateGlyphForms

/\*\*

- Linear-gradient angle applied to the text fill. (Range: -180 to 180)
  \*/
  gradientFillAngle: number

/\*\*

- Fill-gradient length for a linear gradient or radius for a radial gradient.
  \*/
  gradientFillLength: number

/\*\*

- Starting point for a gradient applied to the text fill, in page coordinates and format [x, y].
  \*/
  gradientFillStart: (number | string)[]

/\*\*

- Linear-gradient angle applied to the text stroke. (Range: -180 to 180)
  \*/
  gradientStrokeAngle: number

/\*\*

- Stroke-gradient length for a linear gradient or radius for a radial gradient.
  \*/
  gradientStrokeLength: number

/\*\*

- Starting point for a gradient applied to the text stroke, in page coordinates and format [x, y].
  \*/
  gradientStrokeStart: (number | string)[]

/\*\*

- When true, only the first line aligns to the frame grid or baseline grid. When false, every line aligns to the grid.
  \*/
  gridAlignFirstLineOnly: boolean

/\*\*

- Alignment to the frame grid or baseline grid.
  \*/
  gridAlignment: GridAlignment

/\*\*

- Manual gyoudori setting.
  \*/
  gridGyoudori: number

/\*\*

- Horizontal scaling assigned to TextDefault.
  \*/
  horizontalScale: number

/\*\*

- Relative preference for improved spacing versus fewer hyphens. Lower values lead to more hyphen use. (Range: 0 to 100)
  \*/
  hyphenWeight: number

/\*\*

- When true, the last word in a text column may be hyphenated.
  \*/
  hyphenateAcrossColumns: boolean

/\*\*

- Minimum letters at a word's start before a hyphen break is allowed.
  \*/
  hyphenateAfterFirst: number

/\*\*

- Minimum letters at a word's end before a hyphen break is allowed.
  \*/
  hyphenateBeforeLast: number

/\*\*

- When true, capitalized words may be hyphenated.
  \*/
  hyphenateCapitalizedWords: boolean

/\*\*

- Maximum hyphens allowed on consecutive lines. Use zero for unlimited consecutive lines.
  \*/
  hyphenateLadderLimit: number

/\*\*

- When true, hyphenation is allowed in the last word of a paragraph. Note: valid only when hyphenation is true.
  \*/
  hyphenateLastWord: boolean

/\*\*

- Minimum word length required for hyphenation eligibility.
  \*/
  hyphenateWordsLongerThan: number

/\*\*

- When true, hyphenation is allowed.
  \*/
  hyphenation: boolean

/\*\*

- For non-justified text, this sets line-end white space allowed before hypenation begins. Note: valid with single-line composer.
  \*/
  hyphenationZone: number | string

/\*\*

- When true, optical edge alignment is ignored for the paragraph.
  \*/
  ignoreEdgeAlignment: boolean

/\*\*

- Grid-square count used to arrange the text.
  \*/
  jidori: number

/\*\*

- Paragraph alignment setting.
  \*/
  justification: Justification

/\*\*

- Kashidas use for justification.
  \*/
  kashidas: KashidasOptions

/\*\*

- When true, every line in the paragraph stays together. When false, paragraphs may break across pages or columns.
  \*/
  keepAllLinesTogether: boolean

/\*\*

- Minimum lines kept together before a page break is permitted.
  \*/
  keepFirstLines: number

/\*\*

- Minimum lines kept together after a page break.
  \*/
  keepLastLines: number

/\*\*

- When true, a specified number of lines is kept together when the paragraph breaks across columns or text frames.
  \*/
  keepLinesTogether: boolean

/\*\*

- When true, the paragraph rule above is kept inside frame bounds. Note: applies only when rule above is true.
  \*/
  keepRuleAboveInFrame: boolean

/\*\*

- Minimum number of lines kept with the next paragraph.
  \*/
  keepWithNext: number

/\*\*

- Whether the first paragraph line should stay with the previous paragraph's last line.
  \*/
  keepWithPrevious: boolean

/\*\*

- Alignment of kenten characters against their parent characters.
  \*/
  kentenAlignment: KentenAlignment

/\*\*

- Character set for custom kenten. Note: applies only when kenten kind is custom.
  \*/
  kentenCharacterSet: KentenCharacterSet

/\*\*

- Kenten custom character. Note: applies only when kenten kind is custom.
  \*/
  kentenCustomCharacter: string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) applied to kenten character fills.
  \*/
  kentenFillColor: Swatch | string

/\*\*

- Font used for kenten characters.
  \*/
  kentenFont: Font | string

/\*\*

- Kenten character size, in points.
  \*/
  kentenFontSize: number

/\*\*

- Font style used by kenten characters.
  \*/
  kentenFontStyle: string | NothingEnum

/\*\*

- Kenten character style.
  \*/
  kentenKind: KentenCharacter

/\*\*

- Overprint method for the kenten fill.
  \*/
  kentenOverprintFill: AdornmentOverprint

/\*\*

- Overprint method for the kenten stroke.
  \*/
  kentenOverprintStroke: AdornmentOverprint

/\*\*

- Distance between kenten characters and parent characters.
  \*/
  kentenPlacement: number

/\*\*

- Kenten position relative to the parent character.
  \*/
  kentenPosition: RubyKentenPosition

/\*\*

- Swatch (color, gradient, tint, or mixed ink) applied to kenten character strokes.
  \*/
  kentenStrokeColor: Swatch | string

/\*\*

- Kenten character stroke tint as a percentage. (Range: 0 to 100)
  \*/
  kentenStrokeTint: number

/\*\*

- Kenten character fill tint as a percentage. (Range: 0 to 100)
  \*/
  kentenTint: number

/\*\*

- Kenten character stroke weight, in points.
  \*/
  kentenWeight: number

/\*\*

- Horizontal size of kenten characters as a percent of their original size.
  \*/
  kentenXScale: number

/\*\*

- Vertical size of kenten charachers as a percent of their original size.
  \*/
  kentenYScale: number

/\*\*

- Pair kerning type.
  \*/
  kerningMethod: string

/\*\*

- Character keyboard direction.
  \*/
  keyboardDirection: CharacterDirectionOptions

/\*\*

- Hanging punctuation type to allow. Note: valid only while a kinsoku set is active.
  \*/
  kinsokuHangType: KinsokuHangTypes

/\*\*

- Kinsoku set that defines legitimate line breaks.
  \*/
  kinsokuSet: KinsokuTable | KinsokuSet | string

/\*\*

- Kinsoku processing type that prevents kinsoku characters from starting or ending a line. Note: requires a defined kinsoku set.
  \*/
  kinsokuType: KinsokuType

/\*\*

- Indent amount for the last paragraph line.
  \*/
  lastLineIndent: number | string

/\*\*

- Leading assigned to the text.
  \*/
  leading: number | Leading

/\*\*

- Space before each character.
  \*/
  leadingAki: number

/\*\*

- Point used to measure leading from one line to the next.
  \*/
  leadingModel: LeadingModel

/\*\*

- Left indent width.
  \*/
  leftIndent: number | string

/\*\*

- When true, particular character combinations (e.g., fl, fi) are replaced with ligature characters.
  \*/
  ligatures: boolean

/\*\*

- Maximum individual-character width, expressed as a percentage. (Range: 50 to 200)
  \*/
  maximumGlyphScaling: number

/\*\*

- Maximum letter spacing, calculated from the font's built-in inter-letter space. (Range: -100 to 500) Note: valid only for justified text.
  \*/
  maximumLetterSpacing: number

/\*\*

- Maximum spacing between words, based on the font word space value. Note: valid only for justified text. (Range: 0 to 1000)
  \*/
  maximumWordSpacing: number

/\*\*

- When true, consecutive para borders with fully matching properties are merged.
  \*/
  mergeConsecutiveParaBorders: boolean

/\*\*

- Minimum individual-character width, expressed as a percentage. (Range: 50 to 200)
  \*/
  minimumGlyphScaling: number

/\*\*

- Minimum letter spacing, calculated from the font's built-in inter-letter space. (Range: -100 to 500) Note: valid only for justified text.
  \*/
  minimumLetterSpacing: number

/\*\*

- Minimum spacing between words, based on the font word space value. Note: valid only for justified text. (Range: 0 to 1000)
  \*/
  minimumWordSpacing: number

/\*\*

- Limit on stroke-width to miter-length ratio before a miter (pointed) join changes into a bevel (squared-off) join.
  \*/
  miterLimit: number

/\*\*

- Mojikumi table. For details, see mojikumi table defaults.
  \*/
  mojikumi: MojikumiTable | string | MojikumiTableDefaults

/\*\*

- Nested GREP styles collection.
  \*/
  readonly nestedGrepStyles: NestedGrepStyles

/\*\*

- Nested line styles collection.
  \*/
  readonly nestedLineStyles: NestedLineStyles

/\*\*

- Nested styles collection.
  \*/
  readonly nestedStyles: NestedStyles

/\*\*

- When true, text stays on the same line.
  \*/
  noBreak: boolean

/\*\*

- Number alignment.
  \*/
  numberingAlignment: ListAlignment

/\*\*

- When true, numbering restart policy is applied.
  \*/
  numberingApplyRestartPolicy: boolean

/\*\*

- Character style used for the number string.
  \*/
  numberingCharacterStyle: CharacterStyle | string

/\*\*

- Continues numbering at this level.
  \*/
  numberingContinue: boolean

/\*\*

- Number string expression.
  \*/
  numberingExpression: string

/\*\*

- Numbering format options.
  \*/
  numberingFormat: NumberingStyle | string

/\*\*

- Paragraph level.
  \*/
  numberingLevel: number

/\*\*

- Numbering restart policies.
  \*/
  readonly numberingRestartPolicies: NumberingRestartPolicy

/\*\*

- Determines the starting number for a numbered list.
  \*/
  numberingStartAt: number

/\*\*

- When true, OpenType contextual alternate forms are used.
  \*/
  otfContextualAlternate: boolean

/\*\*

- When true, OpenType discretionary ligatures are used.
  \*/
  otfDiscretionaryLigature: boolean

/\*\*

- Figure style in OpenType fonts.
  \*/
  otfFigureStyle: OTFFigureStyle

/\*\*

- When true, OpenType fractions are used.
  \*/
  otfFraction: boolean

/\*\*

- When true, hiragana fonts switch for different horizontal and vertical glyphs.
  \*/
  otfHVKana: boolean

/\*\*

- When true, OpenType historical forms are used.
  \*/
  otfHistorical: boolean

/\*\*

- When true, OpenType alternate justification forms are used.
  \*/
  otfJustificationAlternate: boolean

/\*\*

- When true, OpenType localized forms are used.
  \*/
  otfLocale: boolean

/\*\*

- When true, OpenType mark positioning is used.
  \*/
  otfMark: boolean

/\*\*

- When true, OpenType ordinals are used.
  \*/
  otfOrdinal: boolean

/\*\*

- When true, OpenType overlapping swash forms are used.
  \*/
  otfOverlapSwash: boolean

/\*\*

- When true, OpenType proportional CJK metrics drive kerning.
  \*/
  otfProportionalMetrics: boolean

/\*\*

- When true, italics are applied to half-width alphanumerics.
  \*/
  otfRomanItalics: boolean

/\*\*

- When true, OpenType slashed zeroes are used.
  \*/
  otfSlashedZero: boolean

/\*\*

- When true, OpenType stretched alternate forms are used.
  \*/
  otfStretchedAlternate: boolean

/\*\*

- When true, OpenType stylistic alternate forms are used.
  \*/
  otfStylisticAlternate: boolean

/\*\*

- Stylistic sets used in OpenType fonts.
  \*/
  otfStylisticSets: number

/\*\*

- When true, OpenType swash forms are used.
  \*/
  otfSwash: boolean

/\*\*

- When true, OpenType titling forms are used.
  \*/
  otfTitling: boolean

/\*\*

- When true, character fill color overprints.
  \*/
  overprintFill: boolean

/\*\*

- When true, character strokes overprint.
  \*/
  overprintStroke: boolean

/\*\*

- Shape assigned to the bottom left corner of rectangular shapes.
  \*/
  paragraphBorderBottomLeftCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the bottom left corner of rectangular shapes.
  \*/
  paragraphBorderBottomLeftCornerRadius: number | string

/\*\*

- Line weight for the paragraph border bottom edge.
  \*/
  paragraphBorderBottomLineWeight: number | string

/\*\*

- Offset distance for the bottom edge of the paragraph border.
  \*/
  paragraphBorderBottomOffset: number | string

/\*\*

- Reference basis (descent or baseline) for calculating the bottom origin of the paragraph border.
  \*/
  paragraphBorderBottomOrigin: ParagraphBorderBottomOriginEnum

/\*\*

- Shape assigned to the bottom right corner of rectangular shapes.
  \*/
  paragraphBorderBottomRightCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the bottom right corner of rectangular shapes.
  \*/
  paragraphBorderBottomRightCornerRadius: number | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the paragraph stroke.
  \*/
  paragraphBorderColor: Swatch | string

/\*\*

- When true, paragraph borders are also shown where the paragraph splits across frames or columns.
  \*/
  paragraphBorderDisplayIfSplits: boolean

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the gap in the paragraph border. Note: applies only for nonsolid border type.
  \*/
  paragraphBorderGapColor: Swatch | string

/\*\*

- When true, the paragraph-border gap overprints. Note: applies only when border type is not solid.
  \*/
  paragraphBorderGapOverprint: boolean

/\*\*

- Paragraph-border gap tint percentage. Note: applies only for nonsolid border type. (Range: 0 to 100).
  \*/
  paragraphBorderGapTint: number

/\*\*

- Line weight for the paragraph border left edge.
  \*/
  paragraphBorderLeftLineWeight: number | string

/\*\*

- Offset distance for the left edge of the paragraph border.
  \*/
  paragraphBorderLeftOffset: number | string

/\*\*

- When true, the paragraph border is enabled.
  \*/
  paragraphBorderOn: boolean

/\*\*

- When true, the paragraph border overprints.
  \*/
  paragraphBorderOverprint: boolean

/\*\*

- Line weight for the paragraph border right edge.
  \*/
  paragraphBorderRightLineWeight: number | string

/\*\*

- Offset distance for the right edge of the paragraph border.
  \*/
  paragraphBorderRightOffset: number | string

/\*\*

- Ending shape for an open path.
  \*/
  paragraphBorderStrokeEndCap: EndCap

/\*\*

- Corner join used by the TextDefault.
  \*/
  paragraphBorderStrokeEndJoin: EndJoin

/\*\*

- Tint percentage for the paragraph stroke. (Range: 0 to 100).
  \*/
  paragraphBorderTint: number

/\*\*

- Corner option used for the top left corner of rectangular shapes and every corner of non-rectangular shapes. Note: a corner option can have a radius, unlike an end join; rounded or beveled end-join effects depend on stroke weight.
  \*/
  paragraphBorderTopLeftCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the top left corner of rectangular shapes and every corner of non-rectangular shapes.
  \*/
  paragraphBorderTopLeftCornerRadius: number | string

/\*\*

- Line weight for the paragraph border top edge.
  \*/
  paragraphBorderTopLineWeight: number | string

/\*\*

- Offset distance for the top edge of the paragraph border.
  \*/
  paragraphBorderTopOffset: number | string

/\*\*

- Reference basis (cap height, ascent or baseline) for calculating the top origin of the paragraph border.
  \*/
  paragraphBorderTopOrigin: ParagraphBorderTopOriginEnum

/\*\*

- Shape assigned to the top right corner of rectangular shapes.
  \*/
  paragraphBorderTopRightCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the top right corner of rectangular shapes.
  \*/
  paragraphBorderTopRightCornerRadius: number | string

/\*\*

- Border type for the paragraph.
  \*/
  paragraphBorderType: StrokeStyle | string

/\*\*

- Reference basis (text width or column width) for calculating the width of the paragraph border.
  \*/
  paragraphBorderWidth: ParagraphBorderEnum

/\*\*

- Direction for the paragraph.
  \*/
  paragraphDirection: ParagraphDirectionOptions

/\*\*

- When true, gyoudori mode covers the full paragraph; when false, it is applied line by line within the paragraph.
  \*/
  paragraphGyoudori: boolean

/\*\*

- Justification for the paragraph.
  \*/
  paragraphJustification: ParagraphJustificationOptions

/\*\*

- Paragraph kashida width: 0 means none, 1 means short, 2 means medium, and 3 means long.
  \*/
  paragraphKashidaWidth: number

/\*\*

- Shape assigned to the bottom left corner of rectangular shapes.
  \*/
  paragraphShadingBottomLeftCornerOption: CornerOptions
