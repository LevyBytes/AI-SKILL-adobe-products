# Indesign (part 58)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Count of characters included in the drop cap.
  \*/
  dropCapCharacters: number | NothingEnum

/\*\*

- Count of lines spanned by the drop cap.
  \*/
  dropCapLines: number | NothingEnum

/\*\*

- Drop-cap controls derived from glyph outlines: use 1 for left side bearing, 2 for descenders, and 0x100,0x200,0x400 for Japanese frame grid behavior.
  \*/
  dropcapDetail: number | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used as the fill color to search for or change to.
  \*/
  fillColor: string | NothingEnum | Swatch

/\*\*

- Fill-color tint percentage for ChangeTransliteratePreference. (Accepted explicit tint values are 0 through 100; use -1 for the inherited or overridden value.).
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

- AlternateGlyphForms variant substituted for standard glyphs.
  \*/
  glyphForm: AlternateGlyphForms | NothingEnum

/\*\*

- Linear-gradient angle for text fill. (Range: -180 to 180).
  \*/
  gradientFillAngle: number | NothingEnum

/\*\*

- For text fill, this supplies the linear-gradient length or the radial-gradient radius.
  \*/
  gradientFillLength: number | NothingEnum

/\*\*

- Page-coordinate starting point for a gradient applied to text fill, formatted as [x, y].
  \*/
  gradientFillStart: [number | string, number | string] | NothingEnum

/\*\*

- Linear-gradient angle for text stroke. (Range: -180 to 180).
  \*/
  gradientStrokeAngle: number | NothingEnum

/\*\*

- For text stroke, this supplies the linear-gradient length or the radial-gradient radius.
  \*/
  gradientStrokeLength: number | NothingEnum

/\*\*

- Page-coordinate starting point for a gradient applied to text stroke, formatted as [x, y].
  \*/
  gradientStrokeStart: [number | string, number | string] | NothingEnum

/\*\*

- GridAlignment setting for the frame grid or baseline grid.
  \*/
  gridAlignment: GridAlignment | NothingEnum

/\*\*

- Manual gyoudori value.
  \*/
  gridGyoudori: number | NothingEnum

/\*\*

- Horizontal scaling applied to ChangeTransliteratePreference.
  \*/
  horizontalScale: number | NothingEnum

/\*\*

- When true, the final word in a text column may be hyphenated.
  \*/
  hyphenateAcrossColumns: boolean | NothingEnum

/\*\*

- When true, the last word in a paragraph may be hyphenated. Note: valid only when hyphenation is true.
  \*/
  hyphenateLastWord: boolean | NothingEnum

/\*\*

- When true, paragraph optical edge alignment is ignored.
  \*/
  ignoreEdgeAlignment: boolean | NothingEnum

/\*\*

- Number of grid squares used to arrange the text. .
  \*/
  jidori: number | NothingEnum

/\*\*

- Paragraph Justification setting.
  \*/
  justification: Justification | NothingEnum

/\*\*

- When true, every line in the paragraph stays together. When false, paragraphs may break across pages or columns.
  \*/
  keepAllLinesTogether: boolean | NothingEnum

/\*\*

- Minimum line count kept together before a paragraph page break is permitted.
  \*/
  keepFirstLines: number | NothingEnum

/\*\*

- Minimum line count kept together after a paragraph page break.
  \*/
  keepLastLines: number | NothingEnum

/\*\*

- When true, the specified count of lines is kept as a unit as the paragraph flows across columns or text frames.
  \*/
  keepLinesTogether: boolean | NothingEnum

/\*\*

- When true, the paragraph's rule above remains inside the frame bounds. Note: requires rule above to be true.
  \*/
  keepRuleAboveInFrame: boolean | NothingEnum

/\*\*

- Minimum number of lines kept with the next paragraph.
  \*/
  keepWithNext: number | NothingEnum

/\*\*

- KentenAlignment value positioning kenten characters against their parent characters. .
  \*/
  kentenAlignment: KentenAlignment | NothingEnum

/\*\*

- Character set assigned to a custom kenten character. Note: requires kenten kind to be custom. .
  \*/
  kentenCharacterSet: KentenCharacterSet | NothingEnum

/\*\*

- Character used for custom kenten. Note: valid only when kenten kind is custom.
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

- Font style used by kenten characters.
  \*/
  kentenFontStyle: string | NothingEnum

/\*\*

- KentenCharacter style used for kenten.
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

- Spacing between kenten characters and their parent characters.
  \*/
  kentenPlacement: number | NothingEnum

/\*\*

- RubyKentenPosition placement of kenten relative to the parent character.
  \*/
  kentenPosition: RubyKentenPosition | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for kenten-character stroke.
  \*/
  kentenStrokeColor: Swatch | string | NothingEnum

/\*\*

- Kenten-character stroke tint percentage. (Range: 0 to 100).
  \*/
  kentenStrokeTint: number | NothingEnum

/\*\*

- Kenten-character fill tint percentage. (Range: 0 to 100).
  \*/
  kentenTint: number | NothingEnum

/\*\*

- Stroke weight in points for kenten characters.
  \*/
  kentenWeight: number | NothingEnum

/\*\*

- Horizontal kenten size as a percentage of original size.
  \*/
  kentenXScale: number | NothingEnum

/\*\*

- Vertical kenten characher size as a percentage of original size. .
  \*/
  kentenYScale: number | NothingEnum

/\*\*

- Pair-kerning type.
  \*/
  kerningMethod: string | NothingEnum

/\*\*

- Character spacing adjustment, added or removed, expressed in thousands of an em. .
  \*/
  kerningValue: number | NothingEnum

/\*\*

- Hanging-punctuation type to allow. Note: valid only while a kinsoku set is active.
  \*/
  kinsokuHangType: KinsokuHangTypes | NothingEnum

/\*\*

- Kinsoku set used to decide permitted line breaks.
  \*/
  kinsokuSet: KinsokuTable | KinsokuSet | string | NothingEnum

/\*\*

- Kinsoku processing type that prevents kinsoku characters from appearing at a line start or line end. Note: requires a defined kinsoku set.
  \*/
  kinsokuType: KinsokuType | NothingEnum

/\*\*

- Indent amount for the paragraph's last line.
  \*/
  lastLineIndent: number | NothingEnum

/\*\*

- Leading value applied to text.
  \*/
  leading: number | Leading | NothingEnum

/\*\*

- Spacing amount before each character.
  \*/
  leadingAki: number | NothingEnum

/\*\*

- Reference point used to measure leading from one line to the next.
  \*/
  leadingModel: LeadingModel | NothingEnum

/\*\*

- Left-indent width.
  \*/
  leftIndent: number | NothingEnum

/\*\*

- When true, specified character pairs such as e.g., fl, fi are replaced with ligature characters.
  \*/
  ligatures: boolean | NothingEnum

/\*\*

- XML tag assigned to the element.
  \*/
  markupTag: string | NothingEnum | XMLTag

/\*\*

- Mojikumi table. For details, see mojikumi table defaults.
  \*/
  mojikumi: MojikumiTable | string | MojikumiTableDefaults | NothingEnum

/\*\*

- When true, the text remains on one line. .
  \*/
  noBreak: boolean | NothingEnum

/\*\*

- Alignment used for the number.
  \*/
  numberingAlignment: ListAlignment | NothingEnum

/\*\*

- When true, the numbering restart policy is applied.
  \*/
  numberingApplyRestartPolicy: boolean | NothingEnum

/\*\*

- CharacterStyle used for the number string.
  \*/
  numberingCharacterStyle: CharacterStyle | string | NothingEnum

/\*\*

- Continue numbering at this level.
  \*/
  numberingContinue: boolean | NothingEnum

/\*\*

- Number-string expression for numbering.
  \*/
  numberingExpression: string | NothingEnum

/\*\*

- NumberingStyle or string option for numbering format.
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

- When true, fractions are used in OpenType fonts.
  \*/
  otfFraction: boolean | NothingEnum

/\*\*

- When true, hiragana fonts with different horizontal and vertical glyphs are switched. .
  \*/
  otfHVKana: boolean | NothingEnum

/\*\*

- When true, historical forms are used in OpenType fonts.
  \*/
  otfHistorical: boolean | NothingEnum

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

- When true, proportional CJK metrics drive kerning in OpenType fonts.
  \*/
  otfProportionalMetrics: boolean | NothingEnum

/\*\*

- When true, half-width alphanumerics receive italics. .
  \*/
  otfRomanItalics: boolean | NothingEnum

/\*\*

- When true, slashed zeroes are used in OpenType fonts.
  \*/
  otfSlashedZero: boolean | NothingEnum

/\*\*

- Stylistic sets to use in OpenType fonts.
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

- When true, gyoudori mode covers the full paragraph. When false, gyoudori mode is applied line by line within the paragraph.
  \*/
  paragraphGyoudori: boolean | NothingEnum

/\*\*

- Text size value.
  \*/
  pointSize: number | NothingEnum

/\*\*

- Position of text relative to the baseline.
  \*/
  position: Position | NothingEnum

/\*\*

- PositionalForms value for OpenType.
  \*/
  positionalForm: PositionalForms | NothingEnum

/\*\*

- Preferences collection associated with this object.
  \*/
  readonly preferences: Preferences

/\*\*

- When true, numbers cannot line-break. When false, multi-digit numbers may break between digits.
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

- RubyAlignments value for ruby alignment.
  \*/
  rubyAlignment: RubyAlignments | NothingEnum

/\*\*

- When true, ruby auto alignment is enabled.
  \*/
  rubyAutoAlign: boolean | NothingEnum

/\*\*

- When true, ruby automatically scales to the specified percentage of parent text size. For details on specifying a percentage, see ruby parent scaling percent. .
  \*/
  rubyAutoScaling: boolean | NothingEnum

/\*\*

- When true, glyphs in ruby auto tcy (tate-chuu-yoko) automatically scale to fit one em.
  \*/
  rubyAutoTcyAutoScale: boolean | NothingEnum

/\*\*

- Digit count included in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyDigits: number | NothingEnum

/\*\*

- When true, Roman characters are included in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyIncludeRoman: boolean | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for ruby-character fill.
  \*/
  rubyFill: Swatch | string | NothingEnum

/\*\*

- Font applied to ruby characters.
  \*/
  rubyFont: Font | string | NothingEnum

/\*\*

- Point size for ruby characters.
  \*/
  rubyFontSize: number | NothingEnum

/\*\*

- Font style used by ruby characters.
  \*/
  rubyFontStyle: string | NothingEnum

/\*\*

- When true, OpenType Pro fonts are used for ruby.
  \*/
  rubyOpenTypePro: boolean | NothingEnum

/\*\*

- When true, ruby overhang is limited to the specified amount. For details on specifying an amount, see ruby parent overhang amount. .
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

- Amount by which ruby characters may overhang the parent text.
  \*/
  rubyParentOverhangAmount: RubyOverhang | NothingEnum

/\*\*

- Parent-text-size scaling percentage used to determine ruby text size.
  \*/
  rubyParentScalingPercent: number | NothingEnum

/\*\*

- RubyParentSpacing value for spacing relative to parent text. .
  \*/
  rubyParentSpacing: RubyParentSpacing | NothingEnum

/\*\*

- Position of ruby characters relative to parent text.
  \*/
  rubyPosition: RubyKentenPosition | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for ruby-character stroke.
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

- RubyTypes value.
  \*/
  rubyType: RubyTypes | NothingEnum

/\*\*

- Stroke weight in points for ruby characters.
  \*/
  rubyWeight: number | NothingEnum

/\*\*

- Horizontal spacing amount between ruby and parent characters.
  \*/
  rubyXOffset: number | NothingEnum

/\*\*

- Horizontal ruby-character size as a percentage of original size.
  \*/
  rubyXScale: number | NothingEnum

/\*\*

- Vertical spacing amount between ruby and parent characters.
  \*/
  rubyYOffset: number | NothingEnum

/\*\*

- Vertical ruby-character size as a percentage of original size.
  \*/
  rubyYScale: number | NothingEnum

/\*\*

- Spacing between paragraphs that use the same style.
  \*/
  sameParaStyleSpacing: number | Spacing | NothingEnum

/\*\*

- When true, scaled characters cause the line height to change. .
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

- Shatai obliquing percentage to apply.
  \*/
  shataiMagnification: number | NothingEnum

/\*\*

- Alignment used for lines containing a single word.
  \*/
  singleWordJustification: SingleWordJustification | NothingEnum

/\*\*

- Skew angle for ChangeTransliteratePreference.
  \*/
  skew: number | NothingEnum

/\*\*

- Paragraph-space-below height.
  \*/
  spaceAfter: number | NothingEnum

/\*\*

- Paragraph-space-above height.
  \*/
  spaceBefore: number | NothingEnum

/\*\*

- Start location for the paragraph.
  \*/
  startParagraph: StartParagraph | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for the strikethrough stroke.
  \*/
  strikeThroughColor: Swatch | string | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for the strikethrough stroke gap.
  \*/
  strikeThroughGapColor: Swatch | string | NothingEnum

/\*\*

- When true, the strikethrough stroke's gap color overprints. Note: valid when strike through type is not solid.
  \*/
  strikeThroughGapOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the strikethrough stroke gap color. (Range: 0 to 100) Note: applies when strike through type is not solid.
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

- Tint percentage for the strikethrough stroke. (Range: 0 to 100).
  \*/
  strikeThroughTint: number | NothingEnum

/\*\*

- StrokeStyle or string type used for the strikethrough stroke.
  \*/
  strikeThroughType: StrokeStyle | string | NothingEnum

/\*\*

- Stroke weight for the strikethrough stroke.
  \*/
  strikeThroughWeight: number | NothingEnum

/\*\*

- When true, a strikethrough line is drawn through the text.
  \*/
  strikeThru: boolean | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used as the stroke color to search for or change to.
  \*/
  strokeColor: string | NothingEnum | Swatch

/\*\*

- Stroke-color tint percentage for ChangeTransliteratePreference. (Accepted explicit tint values are 0 through 100; use -1 for the inherited or overridden value.).
  \*/
  strokeTint: number | NothingEnum

/\*\*

- Stroke weight applied to text characters.
  \*/
  strokeWeight: number | NothingEnum

/\*\*

- When true, the character is made horizontal within vertical text.
  \*/
  tatechuyoko: boolean | NothingEnum

/\*\*

- Horizontal offset for horizontal characters placed in vertical text.
  \*/
  tatechuyokoXOffset: number | NothingEnum

/\*\*

- Vertical offset for horizontal characters placed in vertical text.
  \*/
  tatechuyokoYOffset: number | NothingEnum

/\*\*

- Amount that loosens or tightens a text block, expressed in thousands of an em.
  \*/
  tracking: number | NothingEnum

/\*\*

- Spacing amount after each character.
  \*/
  trailingAki: number | NothingEnum

/\*\*

- When true, ideographic spaces do not wrap to the next line like text characters.
  \*/
  treatIdeographicSpaceAsSpace: boolean | NothingEnum

/\*\*

- Horizontal character-compression amount.
  \*/
  tsume: number | NothingEnum

/\*\*

- When true, text is underlined.
  \*/
  underline: boolean | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for the underline stroke. .
  \*/
  underlineColor: Swatch | string | NothingEnum

/\*\*

- Swatch, including color, gradient, tint, or mixed ink, used for the underline stroke gap. Note: valid when underline type is not solid.
  \*/
  underlineGapColor: Swatch | string | NothingEnum

/\*\*

- When true, the underline stroke's gap color overprints.
  \*/
  underlineGapOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the underline stroke gap color. (Range: 0 to 100) Note: applies when underline type is not solid.
  \*/
  underlineGapTint: number | NothingEnum

/\*\*

- Offset amount from the text baseline for the underline.
  \*/
  underlineOffset: number | NothingEnum

/\*\*

- When true, the underline stroke color overprints.
  \*/
  underlineOverprint: boolean | NothingEnum

/\*\*

- Underline stroke tint percentage. (Range: 0 to 100).
  \*/
  underlineTint: number | NothingEnum

/\*\*

- StrokeStyle or string type used for the underline stroke.
  \*/
  underlineType: StrokeStyle | string | NothingEnum

/\*\*

- Stroke weight for the underline stroke.
  \*/
  underlineWeight: number | NothingEnum

/\*\*

- Vertical scaling applied to ChangeTransliteratePreference.
  \*/
  verticalScale: number | NothingEnum

/\*\*

- When true, warichu is turned on.
  \*/
  warichu: boolean | NothingEnum

/\*\*

- WarichuAlignment value.
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

- Line gap between warichu characters.
  \*/
  warichuLineSpacing: number | NothingEnum

/\*\*

- Number of warichu lines inside one normal line.
  \*/
  warichuLines: number | NothingEnum

/\*\*

- Parent-text-size percentage used to determine warichu size.
  \*/
  warichuSize: number | NothingEnum

/\*\*

- When true, the Nth design axis of a variable font is hidden.
- @param nthAxisIndex Design-axis index.
  \*/
  isNthDesignAxisHidden(nthAxisIndex: number): boolean

/\*\*

- Sets the Nth design axis of a variable font.
- @param nthAxisIndex Design-axis index.
- @param nthAxisValue Nth design-axis value.
  \*/
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void
  }

/\*\*

- Options controlling find/change color behavior.
  \*/
  declare class FindChangeColorOption extends Preference {
  /\*\*
  - When true, footnotes are included in the find/change query.
    \*/
    includeFootnotes: boolean

/\*\*

- When true, hidden layers are included in the find/change query.
  \*/
  includeHiddenLayers: boolean

/\*\*

- When true, locked layers are included in the find query.
  \*/
  includeLockedLayersForFind: boolean

/\*\*

- When true, locked stories are included in the find query.
  \*/
  includeLockedStoriesForFind: boolean

/\*\*

- When true, master pages are included in the find/change query.
  \*/
  includeMasterPages: boolean

/\*\*

- ObjectTypes value.
  \*/
  objectType: ObjectTypes
  }

/\*\*

- Preferences for finding colors.
  \*/
  declare class FindColorPreference extends Preference {
  /\*\*
  - Swatch color being searched for.
    \*/
    findWhat: Swatch | NothingEnum

/\*\*

- Tint value being searched for.
  \*/
  tint: number | NothingEnum

/\*\*

- Lower tint boundary used for searching.
  \*/
  tintLowerLimit: number | NothingEnum

/\*\*

- Upper tint boundary used for searching.
  \*/
  tintUpperLimit: number | NothingEnum
  }

/\*\*

- Preferences for changing colors.
  \*/
  declare class ChangeColorPreference extends Preference {
  /\*\*
  - Replacement Swatch color.
    \*/
    changeTo: Swatch | NothingEnum

/\*\*

- Replacement tint value.
  \*/
  tint: number | NothingEnum
  }

/\*\*

- Preferences for linking.
  \*/
  declare class LinkingPreference extends Preference {
  /\*\*
  - When true, link states are checked when a document opens.
    \*/
    checkLinksAtOpen: boolean

/\*\*

- When true, missing links are searched for when a document opens.
  \*/
  findMissingLinksAtOpen: boolean

/\*\*

- Experimental: preference that enables auto tagging for items created through http based links.
  \*/
  httpLinksAutoTagAssetsPreference: boolean

/\*\*

- Experimental: rendition type used for http link.
  \*/
  httpLinksRenditionType: LinkResourceRenditionType
  }

/\*\*

- Export options for the InCopy INCX document format.
  \*/
  declare class InCopyExportOption extends Preference {
  /\*\*
  - When true, all resources, such as styles etc, are exported; otherwise only resources used by the story are exported.
    \*/
    includeAllResources: boolean

/\*\*

- When true, graphic proxy data is included.
  \*/
  includeGraphicProxies: boolean
  }
