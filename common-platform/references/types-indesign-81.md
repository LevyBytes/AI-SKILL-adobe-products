# Indesign (part 81)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Paragraph style definition.
  \*/
  declare class ParagraphStyle {
  /\*\*
  - True aligns text baselines with the baseline grid.
    \*/
    alignToBaseline: boolean

/\*\*

- True permits words without hyphenation-dictionary entries to break after any character.
  \*/
  allowArbitraryHyphenation: boolean

/\*\*

- Font assigned to the ParagraphStyle, as a font object or family name.
  \*/
  appliedFont: Font | string

/\*\*

- Text language setting.
  \*/
  appliedLanguage: LanguageWithVendors | Language | string

/\*\*

- Numbering list membership target.
  \*/
  appliedNumberingList: NumberingList | string

/\*\*

- Auto-leading type-size percentage. (Range: 0 to 500).
  \*/
  autoLeading: number

/\*\*

- Half-width character limit for automatic horizontal setting inside vertical text.
  \*/
  autoTcy: number

/\*\*

- True includes Roman characters in auto tcy.
  \*/
  autoTcyIncludeRoman: boolean

/\*\*

- True, or an enum value, balances ragged lines. Note: Invalid with a single-line text composer.
  \*/
  balanceRaggedLines: boolean | BalanceLinesStyle

/\*\*

- Base style used by this style.
  \*/
  basedOn: ParagraphStyle | string

/\*\*

- Baseline shift value applied to text.
  \*/
  baselineShift: number | string

/\*\*

- Bullet character data.
  \*/
  readonly bulletChar: Bullet

/\*\*

- Bullet character alignment.
  \*/
  bulletsAlignment: ListAlignment

/\*\*

- Bullets-and-numbering list type.
  \*/
  bulletsAndNumberingListType: ListType

/\*\*

- Character style for text following the string.
  \*/
  bulletsCharacterStyle: CharacterStyle | string

/\*\*

- Expression used as the text-after string for bullets.
  \*/
  bulletsTextAfter: string

/\*\*

- True adds double period (..), ellipse (...), and double hyphen (--) entries to the selected kinsoku set. Note: Applies only while a kinsoku set is active.
  \*/
  bunriKinshi: boolean

/\*\*

- Capitalization scheme.
  \*/
  capitalization: Capitalization

/\*\*

- Alignment for small characters against the line's largest character.
  \*/
  characterAlignment: CharacterAlignment

/\*\*

- Character direction setting.
  \*/
  characterDirection: CharacterDirectionOptions

/\*\*

- Rotation angle for individual characters, in degrees. Note: Rotation is counterclockwise.
  \*/
  characterRotation: number

/\*\*

- True applies grid tracking to non-Roman characters in CJK grids.
  \*/
  cjkGridTracking: boolean

/\*\*

- Text composer used for composition.
  \*/
  composer: string

/\*\*

- Design Axes values.
  \*/
  designAxes: number[]

/\*\*

- Desired individual-character width percentage. (Range: 50 to 200)
  \*/
  desiredGlyphScaling: number

/\*\*

- Desired letter spacing as a percentage of the font's built-in letter gap. (Range: -100 to 500)
  \*/
  desiredLetterSpacing: number

/\*\*

- Desired spacing between words, expressed against font word-space. (Range: 0 to 1000)
  \*/
  desiredWordSpacing: number

/\*\*

- Diacritic character placement.
  \*/
  diacriticPosition: DiacriticPositionOptions

/\*\*

- Digits type setting.
  \*/
  digitsType: DigitsTypeOptions

/\*\*

- Character count included in a drop cap.
  \*/
  dropCapCharacters: number

/\*\*

- Line count included in a drop cap.
  \*/
  dropCapLines: number

/\*\*

- Character style assigned to the drop cap.
  \*/
  dropCapStyle: CharacterStyle | string

/\*\*

- Drop-cap outline details: 1 = left side bearing, 2 = descenders, and 0x100,0x200,0x400 for Japanese frame grid use.
  \*/
  dropcapDetail: number

/\*\*

- CSS emission flag.
  \*/
  emitCss: boolean

/\*\*

- Stroke join type used on the text characters.
  \*/
  endJoin: OutlineJoin

/\*\*

- Event-listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Fill swatch for the ParagraphStyle, including color, gradient, tint, or mixed ink.
  \*/
  fillColor: Swatch | string

/\*\*

- Fill-color tint percentage for the ParagraphStyle. Use 0 to 100 for explicit tint, or -1 for inherited or overridden behavior.
  \*/
  fillTint: number

/\*\*

- First-line indent amount.
  \*/
  firstLineIndent: number | string

/\*\*

- Font-style name.
  \*/
  fontStyle: string

/\*\*

- Glyph variant substituted for standard glyphs.
  \*/
  glyphForm: AlternateGlyphForms

/\*\*

- Linear-gradient angle used by the text fill. (Range: -180 to 180)
  \*/
  gradientFillAngle: number

/\*\*

- Fill-gradient length for linear gradients, or radius for radial gradients.
  \*/
  gradientFillLength: number

/\*\*

- Fill-gradient start point in page coordinates, formatted as [x, y].
  \*/
  gradientFillStart: (number | string)[]

/\*\*

- Linear-gradient angle used by the text stroke. (Range: -180 to 180)
  \*/
  gradientStrokeAngle: number

/\*\*

- Stroke-gradient length for linear gradients, or radius for radial gradients.
  \*/
  gradientStrokeLength: number

/\*\*

- Stroke-gradient start point in page coordinates, formatted as [x, y].
  \*/
  gradientStrokeStart: (number | string)[]

/\*\*

- True limits grid alignment to the first line; false sends every line to the frame or baseline grid.
  \*/
  gridAlignFirstLineOnly: boolean

/\*\*

- Alignment setting for the frame grid or baseline grid.
  \*/
  gridAlignment: GridAlignment

/\*\*

- Manual gyoudori setting.
  \*/
  gridGyoudori: number

/\*\*

- Horizontal scaling assigned to the ParagraphStyle.
  \*/
  horizontalScale: number

/\*\*

- Preference weight between spacing quality and fewer hyphens; lower values use hyphens more often. (Range: 0 to 100)
  \*/
  hyphenWeight: number

/\*\*

- True allows the final word in a text column to hyphenate.
  \*/
  hyphenateAcrossColumns: boolean

/\*\*

- Minimum starting letters that must precede a hyphenated break.
  \*/
  hyphenateAfterFirst: number

/\*\*

- Minimum ending letters that must follow a hyphenated break.
  \*/
  hyphenateBeforeLast: number

/\*\*

- True permits capitalized words to hyphenate.
  \*/
  hyphenateCapitalizedWords: boolean

/\*\*

- Maximum consecutive lines allowed to end with hyphens; zero permits unlimited consecutive lines.
  \*/
  hyphenateLadderLimit: number

/\*\*

- True permits the paragraph's final word to hyphenate. Note: Applies only when hyphenation is true.
  \*/
  hyphenateLastWord: boolean

/\*\*

- Minimum word length required before hyphenation can apply.
  \*/
  hyphenateWordsLongerThan: number

/\*\*

- True enables hyphenation.
  \*/
  hyphenation: boolean

/\*\*

- White-space allowance at a non-justified line end before hyphenation starts. Note: Valid with the single-line composer.
  \*/
  hyphenationZone: number | string

/\*\*

- Unique ParagraphStyle ID.
  \*/
  readonly id: number

/\*\*

- True disables optical edge alignment for this paragraph.
  \*/
  ignoreEdgeAlignment: boolean

/\*\*

- True means another document supplied the style.
  \*/
  readonly imported: boolean

/\*\*

- True causes class attribute generation for the style.
  \*/
  includeClass: boolean

/\*\*

- Position of the ParagraphStyle inside its container.
  \*/
  readonly index: number

/\*\*

- True when this object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Grid-square count used to arrange the text.
  \*/
  jidori: number

/\*\*

- Paragraph alignment setting.
  \*/
  justification: Justification

/\*\*

- Kashidas usage for justification.
  \*/
  kashidas: KashidasOptions

/\*\*

- True keeps every paragraph line together; false allows page or column breaks.
  \*/
  keepAllLinesTogether: boolean

/\*\*

- Minimum lines kept together before allowing a page break.
  \*/
  keepFirstLines: number

/\*\*

- Minimum lines kept together after a page break.
  \*/
  keepLastLines: number

/\*\*

- True keeps a chosen number of lines together across column or text-frame breaks.
  \*/
  keepLinesTogether: boolean

/\*\*

- True keeps the rule above the paragraph inside frame bounds. Note: Valid only when rule above is true.
  \*/
  keepRuleAboveInFrame: boolean

/\*\*

- Minimum lines kept with the next paragraph.
  \*/
  keepWithNext: number

/\*\*

- Indicates whether the first paragraph line stays with the previous paragraph's last line.
  \*/
  keepWithPrevious: boolean

/\*\*

- Kenten-character alignment relative to parent characters.
  \*/
  kentenAlignment: KentenAlignment

/\*\*

- Character set for a custom kenten character. Note: Applies only for custom kenten kind.
  \*/
  kentenCharacterSet: KentenCharacterSet

/\*\*

- Custom kenten character value. Note: Applies only for custom kenten kind.
  \*/
  kentenCustomCharacter: string

/\*\*

- Fill swatch for kenten characters, including color, gradient, tint, or mixed ink.
  \*/
  kentenFillColor: Swatch | string

/\*\*

- Font used by kenten characters.
  \*/
  kentenFont: Font | string

/\*\*

- Kenten character size in points.
  \*/
  kentenFontSize: number

/\*\*

- Kenten character font style.
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

- Spacing distance between kenten characters and their parent characters.
  \*/
  kentenPlacement: number

/\*\*

- Kenten position in relation to the parent character.
  \*/
  kentenPosition: RubyKentenPosition

/\*\*

- Stroke swatch for kenten characters, including color, gradient, tint, or mixed ink.
  \*/
  kentenStrokeColor: Swatch | string

/\*\*

- Kenten-character stroke tint percentage. (Range: 0 to 100)
  \*/
  kentenStrokeTint: number

/\*\*

- Kenten-character fill tint percentage. (Range: 0 to 100)
  \*/
  kentenTint: number

/\*\*

- Kenten-character stroke weight in points.
  \*/
  kentenWeight: number

/\*\*

- Horizontal kenten-character size as a percentage of the original.
  \*/
  kentenXScale: number

/\*\*

- Vertical kenten-character size as a percentage of the original.
  \*/
  kentenYScale: number

/\*\*

- Pair-kerning type.
  \*/
  kerningMethod: string

/\*\*

- Keyboard direction for the character.
  \*/
  keyboardDirection: CharacterDirectionOptions

/\*\*

- Hanging-punctuation type to permit. Note: Valid only while a kinsoku set is active.
  \*/
  kinsokuHangType: KinsokuHangTypes

/\*\*

- Kinsoku set defining legal line breaks.
  \*/
  kinsokuSet: KinsokuTable | KinsokuSet | string

/\*\*

- Kinsoku processing type used to stop kinsoku characters from starting or ending a line. Note: Applies only when a kinsoku set exists.
  \*/
  kinsokuType: KinsokuType

/\*\*

- String-valued custom property.
  \*/
  label: string

/\*\*

- Last-line indent amount for the paragraph.
  \*/
  lastLineIndent: number | string

/\*\*

- Leading applied to text.
  \*/
  leading: number | Leading

/\*\*

- Space amount before each character.
  \*/
  leadingAki: number

/\*\*

- Measurement origin for line-to-line leading.
  \*/
  leadingModel: LeadingModel

/\*\*

- Left-indent width.
  \*/
  leftIndent: number | string

/\*\*

- True substitutes ligature characters for specific combinations such as fl and fi.
  \*/
  ligatures: boolean

/\*\*

- Maximum individual-character width percentage. (Range: 50 to 200)
  \*/
  maximumGlyphScaling: number

/\*\*

- Maximum letter spacing, measured as a percentage of the font's built-in letter gap. (Range: -100 to 500) Note: Applies only to justified text.
  \*/
  maximumLetterSpacing: number

/\*\*

- Maximum spacing between words, expressed against font word-space. Note: Applies only to justified text. (Range: 0 to 1000)
  \*/
  maximumWordSpacing: number

/\*\*

- True merges consecutive paragraph borders that have fully matching properties.
  \*/
  mergeConsecutiveParaBorders: boolean

/\*\*

- Minimum individual-character width percentage. (Range: 50 to 200)
  \*/
  minimumGlyphScaling: number

/\*\*

- Minimum letter spacing, measured as a percentage of the font's built-in letter gap. (Range: -100 to 500) Note: Applies only to justified text.
  \*/
  minimumLetterSpacing: number

/\*\*

- Minimum spacing between words, expressed against font word-space. Note: Applies only to justified text. (Range: 0 to 1000)
  \*/
  minimumWordSpacing: number

/\*\*

- Ratio limit where stroke width versus miter length changes a pointed join into a squared-off bevel.
  \*/
  miterLimit: number

/\*\*

- Mojikumi table value. For details, see mojikumi table defaults.
  \*/
  mojikumi: MojikumiTable | string | MojikumiTableDefaults

/\*\*

- ParagraphStyle name.
  \*/
  name: string

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

- Style applied to new paragraphs after paragraphs using this style.
  \*/
  nextStyle: ParagraphStyle

/\*\*

- True keeps the text on one line.
  \*/
  noBreak: boolean

/\*\*

- Number alignment.
  \*/
  numberingAlignment: ListAlignment

/\*\*

- True applies the numbering restart policy.
  \*/
  numberingApplyRestartPolicy: boolean

/\*\*

- Character style for the number string.
  \*/
  numberingCharacterStyle: CharacterStyle | string

/\*\*

- Continues numbering at this level.
  \*/
  numberingContinue: boolean

/\*\*

- Expression used for the numbering string.
  \*/
  numberingExpression: string

/\*\*

- Numbering format option value.
  \*/
  numberingFormat: NumberingStyle | string

/\*\*

- Paragraph level.
  \*/
  numberingLevel: number

/\*\*

- Numbering restart policy collection.
  \*/
  readonly numberingRestartPolicies: NumberingRestartPolicy

/\*\*

- Starting number for a numbered list.
  \*/
  numberingStartAt: number

/\*\*

- True enables contextual alternates in OpenType fonts.
  \*/
  otfContextualAlternate: boolean

/\*\*

- True enables discretionary ligatures in OpenType fonts.
  \*/
  otfDiscretionaryLigature: boolean

/\*\*

- OpenType figure style.
  \*/
  otfFigureStyle: OTFFigureStyle

/\*\*

- True enables fractions in OpenType fonts.
  \*/
  otfFraction: boolean

/\*\*

- True switches hiragana fonts for separate horizontal and vertical glyphs.
  \*/
  otfHVKana: boolean

/\*\*

- True enables historical forms in OpenType fonts.
  \*/
  otfHistorical: boolean

/\*\*

- True enables alternate justification forms in OpenType fonts.
  \*/
  otfJustificationAlternate: boolean

/\*\*

- True enables localized forms in OpenType fonts.
  \*/
  otfLocale: boolean

/\*\*

- True enables mark positioning in OpenType fonts.
  \*/
  otfMark: boolean

/\*\*

- True enables ordinals in OpenType fonts.
  \*/
  otfOrdinal: boolean

/\*\*

- True enables overlapping swash forms in OpenType fonts.
  \*/
  otfOverlapSwash: boolean

/\*\*

- True kerns with proportional CJK metrics in OpenType fonts.
  \*/
  otfProportionalMetrics: boolean

/\*\*

- True italicizes half-width alphanumerics.
  \*/
  otfRomanItalics: boolean

/\*\*

- True enables slashed zeroes in OpenType fonts.
  \*/
  otfSlashedZero: boolean

/\*\*

- True enables stretched alternate forms in OpenType fonts.
  \*/
  otfStretchedAlternate: boolean

/\*\*

- True enables stylistic alternate forms in OpenType fonts.
  \*/
  otfStylisticAlternate: boolean

/\*\*

- Stylistic sets used in OpenType fonts.
  \*/
  otfStylisticSets: number

/\*\*

- True enables swash forms in OpenType fonts.
  \*/
  otfSwash: boolean

/\*\*

- True enables titling forms in OpenType fonts.
  \*/
  otfTitling: boolean

/\*\*

- True makes character fill color overprint.
  \*/
  overprintFill: boolean

/\*\*

- True makes character strokes overprint.
  \*/
  overprintStroke: boolean

/\*\*

- Corner shape applied to the bottom-left corner of rectangular shapes.
  \*/
  paragraphBorderBottomLeftCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the bottom-left rectangular corner.
  \*/
  paragraphBorderBottomLeftCornerRadius: number | string

/\*\*

- Bottom border line weight for the paragraph.
  \*/
  paragraphBorderBottomLineWeight: number | string

/\*\*

- Offset distance for the paragraph border's bottom edge.
  \*/
  paragraphBorderBottomOffset: number | string

/\*\*

- Descent or baseline basis used for the paragraph border bottom origin.
  \*/
  paragraphBorderBottomOrigin: ParagraphBorderBottomOriginEnum

/\*\*

- Corner shape applied to the bottom-right corner of rectangular shapes.
  \*/
  paragraphBorderBottomRightCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the bottom-right rectangular corner.
  \*/
  paragraphBorderBottomRightCornerRadius: number | string

/\*\*

- Paragraph-border swatch, including color, gradient, tint, or mixed ink.
  \*/
  paragraphBorderColor: Swatch | string

/\*\*

- True also shows paragraph border segments where the paragraph splits across frames or columns.
  \*/
  paragraphBorderDisplayIfSplits: boolean

/\*\*

- Gap swatch for paragraph borders, including color, gradient, tint, or mixed ink. Note: Applies only for non-solid border types.
  \*/
  paragraphBorderGapColor: Swatch | string

/\*\*

- True overprints the paragraph border gap. Note: Applies only for non-solid border types.
  \*/
  paragraphBorderGapOverprint: boolean

/\*\*

- Paragraph-border gap tint percentage. Note: Applies only for non-solid border types. (Range: 0 to 100)
  \*/
  paragraphBorderGapTint: number

/\*\*

- Left border line weight for the paragraph.
  \*/
  paragraphBorderLeftLineWeight: number | string

/\*\*

- Offset distance for the paragraph border's left edge.
  \*/
  paragraphBorderLeftOffset: number | string

/\*\*

- True enables the paragraph border.
  \*/
  paragraphBorderOn: boolean

/\*\*

- True makes the paragraph border overprint.
  \*/
  paragraphBorderOverprint: boolean

/\*\*

- Right border line weight for the paragraph.
  \*/
  paragraphBorderRightLineWeight: number | string

/\*\*

- Offset distance for the paragraph border's right edge.
  \*/
  paragraphBorderRightOffset: number | string

/\*\*

- End shape for an open path.
  \*/
  paragraphBorderStrokeEndCap: EndCap

/\*\*

- Corner join used by the ParagraphStyle.
  \*/
  paragraphBorderStrokeEndJoin: EndJoin

/\*\*

- Paragraph-stroke tint percentage. (Range: 0 to 100)
  \*/
  paragraphBorderTint: number

/\*\*

- Corner option for top-left rectangular corners and every corner on non-rectangular shapes. Note: corner options can store a radius; end joins make rounded or beveled shapes from stroke weight instead.
  \*/
  paragraphBorderTopLeftCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the top-left rectangular corner and all corners on non-rectangular shapes.
  \*/
  paragraphBorderTopLeftCornerRadius: number | string

/\*\*

- Top border line weight for the paragraph.
  \*/
  paragraphBorderTopLineWeight: number | string

/\*\*

- Offset distance for the paragraph border's top edge.
  \*/
  paragraphBorderTopOffset: number | string

/\*\*

- Cap height, ascent, or baseline basis used for the paragraph border top origin.
  \*/
  paragraphBorderTopOrigin: ParagraphBorderTopOriginEnum

/\*\*

- Corner shape applied to the top-right corner of rectangular shapes.
  \*/
  paragraphBorderTopRightCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the top-right rectangular corner.
  \*/
  paragraphBorderTopRightCornerRadius: number | string

/\*\*

- Stroke style used for the paragraph border.
  \*/
  paragraphBorderType: StrokeStyle | string

/\*\*

- Text width or column width basis for calculating paragraph-border width.
  \*/
  paragraphBorderWidth: ParagraphBorderEnum

/\*\*

- Paragraph direction setting.
  \*/
  paragraphDirection: ParagraphDirectionOptions

/\*\*

- True applies gyoudori mode to the whole paragraph; false applies it line by line.
  \*/
  paragraphGyoudori: boolean

/\*\*

- Paragraph justification setting.
  \*/
  paragraphJustification: ParagraphJustificationOptions

/\*\*

- Paragraph kashida width where 0 is none, 1 is short, 2 is medium, and 3 is long.
  \*/
  paragraphKashidaWidth: number

/\*\*

- Corner shape applied to the bottom-left corner of rectangular shapes.
  \*/
  paragraphShadingBottomLeftCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the bottom-left rectangular corner.
  \*/
  paragraphShadingBottomLeftCornerRadius: number | string

/\*\*

- Offset distance for the paragraph's bottom edge.
  \*/
  paragraphShadingBottomOffset: number | string

/\*\*

- Descent or baseline basis used for the paragraph shading bottom origin.
  \*/
  paragraphShadingBottomOrigin: ParagraphShadingBottomOriginEnum

/\*\*

- Corner shape applied to the bottom-right corner of rectangular shapes.
  \*/
  paragraphShadingBottomRightCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the bottom-right rectangular corner.
  \*/
  paragraphShadingBottomRightCornerRadius: number | string

/\*\*

- True clips paragraph shading to the frame shape.
  \*/
  paragraphShadingClipToFrame: boolean

/\*\*

- Paragraph-shading swatch, including color, gradient, tint, or mixed ink.
  \*/
  paragraphShadingColor: Swatch | string

/\*\*

- Offset distance for the paragraph's left edge.
  \*/
  paragraphShadingLeftOffset: number | string

/\*\*

- True enables paragraph shading.
  \*/
  paragraphShadingOn: boolean

/\*\*

- True makes paragraph shading overprint.
  \*/
  paragraphShadingOverprint: boolean

/\*\*

- Offset distance for the paragraph's right edge.
  \*/
  paragraphShadingRightOffset: number | string

/\*\*

- True suppresses paragraph-shading printing.
  \*/
  paragraphShadingSuppressPrinting: boolean

/\*\*

- Paragraph-shading tint percentage. (Range: 0 to 100)
  \*/
  paragraphShadingTint: number
