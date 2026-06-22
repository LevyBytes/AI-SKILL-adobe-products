# Indesign (part 75)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Property bag for assigning multiple properties in one operation.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Event handler to invoke.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves this object specifier into object-reference array entries.
  \*/
  getElements(): NestedGrepStyle[]

/\*\*

- Deletes the NestedGrepStyle.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds a string that returns the NestedGrepStyle when run.
  \*/
  toSource(): string

/\*\*

- Returns this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for nested GREP styles.
  \*/
  declare class NestedGrepStyles {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the NestedGrepStyle at the supplied index.
- @param index Index to retrieve.
  \*/
  [index: number]: NestedGrepStyle

/\*\*

- Creates a NestedGrepStyle.
- @param withProperties Starting property values for the new NestedGrepStyle
  \*/
  add(withProperties: object): NestedGrepStyle

/\*\*

- Provides any NestedGrepStyle from the collection.
  \*/
  anyItem(): NestedGrepStyle

/\*\*

- Reports how many NestedGrepStyle elements are present.
  \*/
  count(): number

/\*\*

- Provides all NestedGrepStyle objects in the collection.
  \*/
  everyItem(): NestedGrepStyle[]

/\*\*

- Provides the first NestedGrepStyle in collection order.
  \*/
  firstItem(): NestedGrepStyle

/\*\*

- Retrieves the NestedGrepStyle at the supplied index or name.
- @param index Index or name to retrieve.
  \*/
  item(index: number | string): NestedGrepStyle

/\*\*

- Retrieves NestedGrepStyles spanning the supplied range.
- @param from Starting NestedGrepStyle, index, or name.
- @param to Ending NestedGrepStyle, index, or name.
  \*/
  itemByRange(from: NestedGrepStyle | number | string, to: NestedGrepStyle | number | string): NestedGrepStyle[]

/\*\*

- Provides the last NestedGrepStyle in collection order.
  \*/
  lastItem(): NestedGrepStyle

/\*\*

- Provides the middle NestedGrepStyle in collection order.
  \*/
  middleItem(): NestedGrepStyle

/\*\*

- Provides the NestedGrepStyle immediately after the supplied NestedGrepStyle.
- @param obj NestedGrepStyle positioned before the requested NestedGrepStyle.
  \*/
  nextItem(obj: NestedGrepStyle): NestedGrepStyle

/\*\*

- Provides the NestedGrepStyle immediately before the supplied index.
- @param obj Index of the NestedGrepStyle positioned after the requested NestedGrepStyle.
  \*/
  previousItem(obj: NestedGrepStyle): NestedGrepStyle

/\*\*

- Builds a string that returns the NestedGrepStyle when run.
  \*/
  toSource(): string
  }

/\*\*

- Represents a text object.
  \*/
  declare class Text {
  /\*\*
  - When true, the text baseline aligns to the baseline grid.
    \*/
    alignToBaseline: boolean

/\*\*

- All graphics contained by the Text.
  \*/
  readonly allGraphics: Graphic[]

/\*\*

- All page items contained by the Text.
  \*/
  readonly allPageItems: PageItem[]

/\*\*

- When true, words without a hyphenation dictionary may break on any character at the next line.
  \*/
  allowArbitraryHyphenation: boolean

/\*\*

- Character style assigned to the text.
  \*/
  appliedCharacterStyle: CharacterStyle | string

/\*\*

- Conditions applied to this text.
  \*/
  appliedConditions: Condition[]

/\*\*

- Font assigned to the Text, either as a font object or a font-family name.
  \*/
  appliedFont: Font | string

/\*\*

- Text language setting.
  \*/
  appliedLanguage: LanguageWithVendors | Language | string

/\*\*

- Character styles supplied by nested styles.
  \*/
  readonly appliedNestedStyles: CharacterStyle[]

/\*\*

- Numbering list to join.
  \*/
  appliedNumberingList: NumberingList | string

/\*\*

- Paragraph style assigned to the text.
  \*/
  appliedParagraphStyle: ParagraphStyle | string

/\*\*

- Highest ascent value among characters in the text.
  \*/
  readonly ascent: number | string

/\*\*

- XML elements linked to the Text.
  \*/
  readonly associatedXMLElements: XMLItem[]

/\*\*

- Percent of type size used for auto leading. (Range: 0 to 500).
  \*/
  autoLeading: number

/\*\*

- Half-width character count threshold for automatic horizontal rotation in vertical text.
  \*/
  autoTcy: number

/\*\*

- When true, Roman characters are included in auto tcy.
  \*/
  autoTcyIncludeRoman: boolean

/\*\*

- When true, or when set to an enumeration value, ragged lines are balanced. Note: Not valid with a single-line text composer.
  \*/
  balanceRaggedLines: boolean | BalanceLinesStyle

/\*\*

- Text vertical offset.
  \*/
  readonly baseline: number | string

/\*\*

- Baseline shift assigned to the text.
  \*/
  baselineShift: number | string

/\*\*

- Bullet character.
  \*/
  readonly bulletChar: Bullet

/\*\*

- Bullet character alignment.
  \*/
  bulletsAlignment: ListAlignment

/\*\*

- Bullet and numbering list type.
  \*/
  bulletsAndNumberingListType: ListType

/\*\*

- Character style used for text after string.
  \*/
  bulletsCharacterStyle: CharacterStyle | string

/\*\*

- Text-after string expression for bullets.
  \*/
  bulletsTextAfter: string

/\*\*

- When true, the selected kinsoku set also includes the double period (..), ellipse (...), and double hyphen (--). Note: Valid only when a kinsoku set is in effect.
  \*/
  bunriKinshi: boolean

/\*\*

- Collection containing buttons.
  \*/
  readonly buttons: Buttons

/\*\*

- Capitalization scheme.
  \*/
  capitalization: Capitalization

/\*\*

- Alignment for small characters against the largest character in the line.
  \*/
  characterAlignment: CharacterAlignment

/\*\*

- Character direction setting.
  \*/
  characterDirection: CharacterDirectionOptions

/\*\*

- Rotation angle for individual characters, in degrees. Note: The rotation is counterclockwise.
  \*/
  characterRotation: number

/\*\*

- Collection containing characters.
  \*/
  readonly characters: Characters

/\*\*

- Collection containing checkboxes.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- When true, grid tracking is used for non-Roman characters in CJK grids.
  \*/
  cjkGridTracking: boolean

/\*\*

- Collection containing comboboxes.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- Text composer used to compose the text.
  \*/
  composer: string

/\*\*

- Text contents.
  \*/
  contents: string | SpecialCharacters

/\*\*

- Highest descent value among characters in the text.
  \*/
  readonly descent: number | string

/\*\*

- Design Axes values.
  \*/
  designAxes: number[]

/\*\*

- Desired individual-character width percentage. (Range: 50 to 200)
  \*/
  desiredGlyphScaling: number

/\*\*

- Desired letter spacing as a percentage of the font's built-in interletter space. (Range: -100 to 500)
  \*/
  desiredLetterSpacing: number

/\*\*

- Desired word spacing uses the font word-space value as its percentage baseline. (Range: 0 to 1000)
  \*/
  desiredWordSpacing: number

/\*\*

- Diacritic character positioning.
  \*/
  diacriticPosition: DiacriticPositionOptions

/\*\*

- Digit type setting.
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

- Glyph-outline drop-cap detail bits: 1 = left side bearing; 2 = descenders; 0x100,0x200,0x400 = Japanese frame grid.
  \*/
  dropcapDetail: number

/\*\*

- Vertical offset at the text end.
  \*/
  readonly endBaseline: number | string

/\*\*

- Horizontal offset at the text end.
  \*/
  readonly endHorizontalOffset: number | string

/\*\*

- Stroke join type assigned to text characters.
  \*/
  endJoin: OutlineJoin

/\*\*

- Collection containing endnote text ranges.
  \*/
  readonly endnoteRanges: EndnoteRanges

/\*\*

- Collection containing endnote text frames.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- EPSTexts.
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Swatch (color, gradient, tint, or mixed ink) assigned to the Text fill.
  \*/
  fillColor: Swatch | string

/\*\*

- Fill-color tint percentage for the Text. Enter 0 to 100 for an explicit tint; use -1 for inherited or overridden value.
  \*/
  fillTint: number

/\*\*

- First-line indent amount.
  \*/
  firstLineIndent: number | string

/\*\*

- Font style name.
  \*/
  fontStyle: string

/\*\*

- Collection containing footnotes.
  \*/
  readonly footnotes: Footnotes

/\*\*

- Collection containing form fields.
  \*/
  readonly formFields: FormFields

/\*\*

- Glyph variant substituted for standard glyphs.
  \*/
  glyphForm: AlternateGlyphForms

/\*\*

- Linear-gradient angle used for the text fill. (Range: -180 to 180)
  \*/
  gradientFillAngle: number

/\*\*

- Fill gradient length for a linear gradient, or radius for a radial gradient.
  \*/
  gradientFillLength: number

/\*\*

- Fill gradient starting point in page coordinates, formatted as [x, y].
  \*/
  gradientFillStart: (number | string)[]

/\*\*

- Linear-gradient angle used for the text stroke. (Range: -180 to 180)
  \*/
  gradientStrokeAngle: number

/\*\*

- Stroke gradient length for a linear gradient, or radius for a radial gradient.
  \*/
  gradientStrokeLength: number

/\*\*

- Stroke gradient starting point in page coordinates, formatted as [x, y].
  \*/
  gradientStrokeStart: (number | string)[]

/\*\*

- Collection containing graphic lines.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- When true, only the first line aligns to the frame grid or baseline grid; when false, every line aligns to the grid.
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

- Collection containing groups.
  \*/
  readonly groups: Groups

/\*\*

- Collection containing hidden text objects.
  \*/
  readonly hiddenTexts: HiddenTexts

/\*\*

- Text horizontal offset.
  \*/
  readonly horizontalOffset: number | string

/\*\*

- Horizontal scaling assigned to the Text.
  \*/
  horizontalScale: number

/\*\*

- Relative preference between better spacing and fewer hyphens; lower values allow more hyphen use. (Range: 0 to 100)
  \*/
  hyphenWeight: number

/\*\*

- When true, the last word in a text column may be hyphenated.
  \*/
  hyphenateAcrossColumns: boolean

/\*\*

- Minimum letters before the hyphen break at the start of a word.
  \*/
  hyphenateAfterFirst: number

/\*\*

- Minimum letters after the hyphen break at the end of a word.
  \*/
  hyphenateBeforeLast: number

/\*\*

- When true, capitalized words may be hyphenated.
  \*/
  hyphenateCapitalizedWords: boolean

/\*\*

- Maximum hyphen count allowed on consecutive lines. Use zero for unlimited consecutive lines.
  \*/
  hyphenateLadderLimit: number

/\*\*

- When true, the final word in a paragraph may be hyphenated. Note: Valid only when hyphenation is true.
  \*/
  hyphenateLastWord: boolean

/\*\*

- Minimum word length required before hyphenation can apply.
  \*/
  hyphenateWordsLongerThan: number

/\*\*

- When true, hyphenation is allowed.
  \*/
  hyphenation: boolean

/\*\*

- Amount of trailing white space permitted on a non-justified line before hyphenation starts. Note: Valid when composer is single-line composer.
  \*/
  hyphenationZone: number | string

/\*\*

- When true, paragraph optical edge alignment is ignored.
  \*/
  ignoreEdgeAlignment: boolean

/\*\*

- Text index within the collection or parent object.
  \*/
  readonly index: number

/\*\*

- Collection containing insertion points.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Number of grid squares used to arrange the text.
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

- When true, all paragraph lines stay together; when false, paragraphs may break across pages or columns.
  \*/
  keepAllLinesTogether: boolean

/\*\*

- Minimum paragraph lines kept together before a page break may occur.
  \*/
  keepFirstLines: number

/\*\*

- Minimum paragraph lines kept together after a page break.
  \*/
  keepLastLines: number

/\*\*

- When true, a specified number of lines remain together as the paragraph breaks across columns or text frames.
  \*/
  keepLinesTogether: boolean

/\*\*

- When true, the paragraph rule above is forced to stay within frame bounds. Note: Valid only when rule above is true.
  \*/
  keepRuleAboveInFrame: boolean

/\*\*

- Minimum number of lines kept with the following paragraph.
  \*/
  keepWithNext: number

/\*\*

- Whether the paragraph's first line stays with the previous paragraph's last line.
  \*/
  keepWithPrevious: boolean

/\*\*

- Kenten character alignment relative to parent characters.
  \*/
  kentenAlignment: KentenAlignment

/\*\*

- Character set for the custom kenten character. Note: Applies when custom is the kenten kind.
  \*/
  kentenCharacterSet: KentenCharacterSet

/\*\*

- Character used for kenten. Note: Applies when custom is the kenten kind.
  \*/
  kentenCustomCharacter: string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) assigned to kenten character fill.
  \*/
  kentenFillColor: Swatch | string

/\*\*

- Font used for kenten characters.
  \*/
  kentenFont: Font | string

/\*\*

- Kenten character size in points.
  \*/
  kentenFontSize: number

/\*\*

- Font style for kenten characters.
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

- Distance between kenten characters and their parent characters.
  \*/
  kentenPlacement: number

/\*\*

- Kenten position relative to the parent character.
  \*/
  kentenPosition: RubyKentenPosition

/\*\*

- Swatch (color, gradient, tint, or mixed ink) assigned to kenten character stroke.
  \*/
  kentenStrokeColor: Swatch | string

/\*\*

- Kenten character stroke tint percentage. (Range: 0 to 100)
  \*/
  kentenStrokeTint: number

/\*\*

- Kenten character fill tint percentage. (Range: 0 to 100)
  \*/
  kentenTint: number

/\*\*

- Kenten character stroke weight in points.
  \*/
  kentenWeight: number

/\*\*

- Horizontal scale for kenten characters, as a percent of original size.
  \*/
  kentenXScale: number

/\*\*

- Vertical scale for kenten characters, as a percent of original size.
  \*/
  kentenYScale: number

/\*\*

- Pair-kerning type.
  \*/
  kerningMethod: string

/\*\*

- Space added or removed between characters, in thousandths of an em.
  \*/
  kerningValue: number

/\*\*

- Character keyboard direction.
  \*/
  keyboardDirection: CharacterDirectionOptions

/\*\*

- Hanging punctuation type to allow. Note: Applies only while a kinsoku set is in effect.
  \*/
  kinsokuHangType: KinsokuHangTypes

/\*\*

- Kinsoku set used to decide valid line breaks.
  \*/
  kinsokuSet: KinsokuTable | KinsokuSet | string

/\*\*

- Kinsoku processing type used to keep kinsoku characters from starting or ending a line. Note: Applies only after a kinsoku set is defined.
  \*/
  kinsokuType: KinsokuType

/\*\*

- Last-line indent amount for the paragraph.
  \*/
  lastLineIndent: number | string

/\*\*

- Leading assigned to the text.
  \*/
  leading: number | Leading

/\*\*

- Space amount before each character.
  \*/
  leadingAki: number

/\*\*

- Point from which line-to-line leading is measured.
  \*/
  leadingModel: LeadingModel

/\*\*

- Left indent width.
  \*/
  leftIndent: number | string

/\*\*

- Object count in this collection.
  \*/
  readonly length: number

/\*\*

- When true, specific character combinations such as fl and fi are replaced with ligature characters.
  \*/
  ligatures: boolean

/\*\*

- Collection containing lines.
  \*/
  readonly lines: Lines

/\*\*

- Collection containing listboxes.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- Maximum individual-character width percentage. (Range: 50 to 200)
  \*/
  maximumGlyphScaling: number

/\*\*

- Maximum letter spacing relative to the font's built-in interletter space. Text must be justified. (Range: -100 to 500)
  \*/
  maximumLetterSpacing: number

/\*\*

- Maximum word spacing uses the font word-space value as its percentage basis. Text must be justified. (Range: 0 to 1000)
  \*/
  maximumWordSpacing: number

/\*\*

- When true, consecutive para borders with identical properties are merged.
  \*/
  mergeConsecutiveParaBorders: boolean

/\*\*

- Minimum individual-character width percentage. (Range: 50 to 200)
  \*/
  minimumGlyphScaling: number

/\*\*

- Minimum letter spacing relative to the font's built-in interletter space. Text must be justified. (Range: -100 to 500)
  \*/
  minimumLetterSpacing: number

/\*\*

- Minimum word spacing uses the font word-space value as its percentage basis. Text must be justified. (Range: 0 to 1000)
  \*/
  minimumWordSpacing: number

/\*\*

- Ratio limit between stroke width and miter length before a miter (pointed) join changes to a bevel (squared-off) join.
  \*/
  miterLimit: number

/\*\*

- Mojikumi table. For details, see mojikumi table defaults.
  \*/
  mojikumi: MojikumiTable | string | MojikumiTableDefaults

/\*\*

- Collection containing multi-state objects.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Collection containing nested GREP styles.
  \*/
  readonly nestedGrepStyles: NestedGrepStyles

/\*\*

- Collection containing nested line styles.
  \*/
  readonly nestedLineStyles: NestedLineStyles

/\*\*

- Collection containing nested styles.
  \*/
  readonly nestedStyles: NestedStyles

/\*\*

- When true, the text remains on one line.
  \*/
  noBreak: boolean

/\*\*

- Collection containing notes.
  \*/
  readonly notes: Notes

/\*\*

- Number alignment setting.
  \*/
  numberingAlignment: ListAlignment

/\*\*

- When true, the numbering restart policy is applied.
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

- Number string expression used for numbering.
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

- Initial value used by a numbered list.
  \*/
  numberingStartAt: number

/\*\*

- OpenType feature data. Return shape may be an Array whose entries are Array of 2 Strings or Long Integers.
  \*/
  opentypeFeatures: any[]

/\*\*

- When true, contextual alternate forms are used in OpenType fonts.
  \*/
  otfContextualAlternate: boolean

/\*\*

- When true, discretionary ligatures are used in OpenType fonts.
  \*/
  otfDiscretionaryLigature: boolean

/\*\*

- Figure style for OpenType fonts.
  \*/
  otfFigureStyle: OTFFigureStyle

/\*\*

- When true, fractions are used in OpenType fonts.
  \*/
  otfFraction: boolean

/\*\*

- When true, hiragana fonts switch for horizontal and vertical glyph variants.
  \*/
  otfHVKana: boolean

/\*\*

- When true, historical forms are used in OpenType fonts.
  \*/
  otfHistorical: boolean

/\*\*

- When true, alternate justification forms are used in OpenType fonts.
  \*/
  otfJustificationAlternate: boolean

/\*\*

- When true, localized forms are used in OpenType fonts.
  \*/
  otfLocale: boolean

/\*\*

- When true, mark positioning is used in OpenType fonts.
  \*/
  otfMark: boolean

/\*\*

- When true, ordinals are used in OpenType fonts.
  \*/
  otfOrdinal: boolean

/\*\*

- When true, overlapping swash forms are used in OpenType fonts.
  \*/
  otfOverlapSwash: boolean

/\*\*

- When true, kerning follows proportional CJK metrics in OpenType fonts.
  \*/
  otfProportionalMetrics: boolean

/\*\*

- When true, italics are applied to half-width alphanumerics.
  \*/
  otfRomanItalics: boolean

/\*\*

- When true, slashed zeroes are used in OpenType fonts.
  \*/
  otfSlashedZero: boolean

/\*\*

- When true, stretched alternate forms are used in OpenType fonts.
  \*/
  otfStretchedAlternate: boolean

/\*\*

- When true, stylistic alternate forms are used in OpenType fonts.
  \*/
  otfStylisticAlternate: boolean

/\*\*

- Stylistic sets used in OpenType fonts.
  \*/
  otfStylisticSets: number

/\*\*

- When true, swash forms are used in OpenType fonts.
  \*/
  otfSwash: boolean

/\*\*

- When true, titling forms are used in OpenType fonts.
  \*/
  otfTitling: boolean

/\*\*

- Collection containing ellipses.
  \*/
  readonly ovals: Ovals

/\*\*

- When true, character fills overprint.
  \*/
  overprintFill: boolean

/\*\*

- When true, character strokes overprint.
  \*/
  overprintStroke: boolean

/\*\*

- PageItems collection for processing every page item in a container, such as a document, page, or group, independent of type.
  \*/
  readonly pageItems: PageItems

/\*\*

- Shape applied to the bottom left corner of rectangular shapes.
  \*/
  paragraphBorderBottomLeftCornerOption: CornerOptions

/\*\*

- Radius, in measurement units, for the corner effect on the bottom left corner of rectangular shapes.
  \*/
  paragraphBorderBottomLeftCornerRadius: number | string

/\*\*

- Bottom-line weight for the paragraph border.
  \*/
  paragraphBorderBottomLineWeight: number | string

/\*\*

- Offset distance for the paragraph border's bottom edge.
  \*/
  paragraphBorderBottomOffset: number | string

/\*\*

- Basis, descent or baseline, used to calculate the paragraph border bottom origin.
  \*/
  paragraphBorderBottomOrigin: ParagraphBorderBottomOriginEnum
