# Indesign (part 79)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- For the text stroke, sets linear-gradient length or radial-gradient radius.
  \*/
  gradientStrokeLength: number

/\*\*

- Gradient start point applied to the text stroke, in page coordinates and formatted as [x, y].
  \*/
  gradientStrokeStart: (number | string)[]

/\*\*

- Graphic-line collection.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- When true, only the first line aligns to the frame grid or baseline grid; when false, every line aligns to the grid.
  \*/
  gridAlignFirstLineOnly: boolean

/\*\*

- Alignment to the frame grid or baseline grid.
  \*/
  gridAlignment: GridAlignment

/\*\*

- Default grid settings. Note: Applies to named, layout, and frame (story) grids.
  \*/
  readonly gridData: GridDataInformation

/\*\*

- Manual gyoudori setting.
  \*/
  gridGyoudori: number

/\*\*

- Group collection.
  \*/
  readonly groups: Groups

/\*\*

- Hidden-text object collection.
  \*/
  readonly hiddenTexts: HiddenTexts

/\*\*

- Horizontal scaling applied to the Story.
  \*/
  horizontalScale: number

/\*\*

- Preference for better spacing versus fewer hyphens; lower values use hyphens more often. (Range: 0 to 100)
  \*/
  hyphenWeight: number

/\*\*

- When true, the final word in a text column may be hyphenated.
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

- Maximum consecutive lines that may contain hyphens. Use zero for no limit.
  \*/
  hyphenateLadderLimit: number

/\*\*

- When true, the last word in a paragraph may be hyphenated. Note: Valid only when hyphenation is true.
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

- White-space amount allowed at the end of a non-justified text line before hyphenation starts. Note: Valid when composer is single-line composer.
  \*/
  hyphenationZone: number | string

/\*\*

- Unique Story ID.
  \*/
  readonly id: number

/\*\*

- IDML component name for the Story.
  \*/
  idmlComponentName: string

/\*\*

- When true, optical edge alignment is ignored for the paragraph.
  \*/
  ignoreEdgeAlignment: boolean

/\*\*

- Export settings for InCopy INCX document format.
  \*/
  readonly incopyExportOptions: InCopyExportOption

/\*\*

- Story index within its containing object.
  \*/
  readonly index: number

/\*\*

- InsertionPoint collection.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- True when this is an endnote story; false otherwise.
  \*/
  readonly isEndnoteStory: boolean

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Link source file.
  \*/
  readonly itemLink: Link

/\*\*

- Number of grid squares used for arranging the text.
  \*/
  jidori: number

/\*\*

- Paragraph alignment.
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

- Minimum lines to keep together in a paragraph before a page break is allowed.
  \*/
  keepFirstLines: number

/\*\*

- Minimum post-break lines that stay together in a paragraph.
  \*/
  keepLastLines: number

/\*\*

- When true, a specified number of lines stay together as the paragraph breaks across columns or text frames.
  \*/
  keepLinesTogether: boolean

/\*\*

- When true, the paragraph rule above is forced to stay within frame bounds. Note: Valid only when rule above is true.
  \*/
  keepRuleAboveInFrame: boolean

/\*\*

- Minimum lines to keep with the next paragraph.
  \*/
  keepWithNext: number

/\*\*

- Whether the first line in the paragraph stays with the last line of the previous paragraph.
  \*/
  keepWithPrevious: boolean

/\*\*

- Kenten-character alignment relative to parent characters.
  \*/
  kentenAlignment: KentenAlignment

/\*\*

- Custom kenten characters use this character set. Note: Applies only when kenten kind is custom.
  \*/
  kentenCharacterSet: KentenCharacterSet

/\*\*

- Kenten uses this custom character. Note: Applies only when kenten kind is custom.
  \*/
  kentenCustomCharacter: string

/\*\*

- Kenten character fills receive this swatch (color, gradient, tint, or mixed ink).
  \*/
  kentenFillColor: Swatch | string

/\*\*

- Font assigned to kenten characters.
  \*/
  kentenFont: Font | string

/\*\*

- Kenten character size, in points.
  \*/
  kentenFontSize: number

/\*\*

- Font style assigned to kenten characters.
  \*/
  kentenFontStyle: string | NothingEnum

/\*\*

- Kenten character styling kind.
  \*/
  kentenKind: KentenCharacter

/\*\*

- Overprint behavior for the kenten fill.
  \*/
  kentenOverprintFill: AdornmentOverprint

/\*\*

- Overprint behavior for the kenten stroke.
  \*/
  kentenOverprintStroke: AdornmentOverprint

/\*\*

- Spacing between kenten characters and their parent characters.
  \*/
  kentenPlacement: number

/\*\*

- Placement of kenten relative to the parent character.
  \*/
  kentenPosition: RubyKentenPosition

/\*\*

- Kenten character strokes receive this swatch (color, gradient, tint, or mixed ink).
  \*/
  kentenStrokeColor: Swatch | string

/\*\*

- Kenten character stroke tint, expressed as a percentage. (Range: 0 to 100)
  \*/
  kentenStrokeTint: number

/\*\*

- Kenten character fill tint, expressed as a percentage. (Range: 0 to 100)
  \*/
  kentenTint: number

/\*\*

- Kenten character stroke weight, in points.
  \*/
  kentenWeight: number

/\*\*

- Horizontal scale for kenten characters, as a percent of the original size.
  \*/
  kentenXScale: number

/\*\*

- Vertical scale for kenten characters, as a percent of the original size.
  \*/
  kentenYScale: number

/\*\*

- Pair-kerning method type.
  \*/
  kerningMethod: string

/\*\*

- Character keyboard direction.
  \*/
  keyboardDirection: CharacterDirectionOptions

/\*\*

- Hanging punctuation type to permit. Note: Applies only while a kinsoku set is active.
  \*/
  kinsokuHangType: KinsokuHangTypes

/\*\*

- Kinsoku set used to decide valid line-break positions.
  \*/
  kinsokuSet: KinsokuTable | KinsokuSet | string

/\*\*

- Kinsoku processing mode that keeps kinsoku characters from opening or closing a line. Note: Applies only when a kinsoku set is defined.
  \*/
  kinsokuType: KinsokuType

/\*\*

- String-valued property available for arbitrary text.
  \*/
  label: string

/\*\*

- Indent amount for the paragraph's final line.
  \*/
  lastLineIndent: number | string

/\*\*

- Leading value applied to the text.
  \*/
  leading: number | Leading

/\*\*

- Space inserted before each character.
  \*/
  leadingAki: number

/\*\*

- Measurement reference point for line-to-line leading.
  \*/
  leadingModel: LeadingModel

/\*\*

- Left indent width.
  \*/
  leftIndent: number | string

/\*\*

- Object count in the collection.
  \*/
  readonly length: number

/\*\*

- When true, specific combinations such as fl and fi are substituted with ligature characters.
  \*/
  ligatures: boolean

/\*\*

- Collection containing lines.
  \*/
  readonly lines: Lines

/\*\*

- Options for linked stories.
  \*/
  readonly linkedStoryOptions: LinkedStoryOption

/\*\*

- Collection containing listboxes.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- Current lock state.
  \*/
  readonly lockState: LockStateValues

/\*\*

- Maximum individual-character width, as a percentage. (Range: 50 to 200)
  \*/
  maximumGlyphScaling: number

/\*\*

- Maximum letter spacing, as a percentage of the font's built-in inter-letter space. (Range: -100 to 500) Note: Applies only to justified text.
  \*/
  maximumLetterSpacing: number

/\*\*

- Maximum word spacing, as a percentage of the font word-space value. Note: Applies only to justified text. (Range: 0 to 1000)
  \*/
  maximumWordSpacing: number

/\*\*

- When true, adjacent paragraph borders with fully matching properties merge together.
  \*/
  mergeConsecutiveParaBorders: boolean

/\*\*

- Minimum individual-character width, as a percentage. (Range: 50 to 200)
  \*/
  minimumGlyphScaling: number

/\*\*

- Minimum letter spacing, as a percentage of the font's built-in inter-letter space. (Range: -100 to 500) Note: Applies only to justified text.
  \*/
  minimumLetterSpacing: number

/\*\*

- Minimum word spacing, as a percentage of the font word-space value. Note: Applies only to justified text. (Range: 0 to 1000)
  \*/
  minimumWordSpacing: number

/\*\*

- Stroke-width to miter-length ratio limit at which a miter (pointed) join changes to a bevel (squared-off) join.
  \*/
  miterLimit: number

/\*\*

- Mojikumi table. For details, refer to mojikumi table defaults.
  \*/
  mojikumi: MojikumiTable | string | MojikumiTableDefaults

/\*\*

- Collection containing multi-state objects.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Story name; aliases the Story label property.
  \*/
  name: string

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

- When true, text remains on one line.
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

- Continue numbering at this level.
  \*/
  numberingContinue: boolean

/\*\*

- Expression that defines the numbering string.
  \*/
  numberingExpression: string

/\*\*

- Options controlling numbering format.
  \*/
  numberingFormat: NumberingStyle | string

/\*\*

- Paragraph numbering level.
  \*/
  numberingLevel: number

/\*\*

- Numbering restart policy collection.
  \*/
  readonly numberingRestartPolicies: NumberingRestartPolicy

/\*\*

- Sets the starting number for a numbered list.
  \*/
  numberingStartAt: number

/\*\*

- OpenType feature data. May yield nested arrays whose entries are 2 Strings or Long Integers.
  \*/
  opentypeFeatures: any[]

/\*\*

- When true, OpenType fonts use contextual alternate forms.
  \*/
  otfContextualAlternate: boolean

/\*\*

- When true, OpenType fonts use discretionary ligatures.
  \*/
  otfDiscretionaryLigature: boolean

/\*\*

- Figure style used by OpenType fonts.
  \*/
  otfFigureStyle: OTFFigureStyle

/\*\*

- When true, OpenType fonts use fractions.
  \*/
  otfFraction: boolean

/\*\*

- When true, hiragana fonts switch between horizontal and vertical glyph variants.
  \*/
  otfHVKana: boolean

/\*\*

- When true, OpenType fonts use historical forms.
  \*/
  otfHistorical: boolean

/\*\*

- When true, OpenType fonts use alternate justification forms.
  \*/
  otfJustificationAlternate: boolean

/\*\*

- When true, OpenType fonts use localized forms.
  \*/
  otfLocale: boolean

/\*\*

- When true, OpenType fonts use mark positioning.
  \*/
  otfMark: boolean

/\*\*

- When true, OpenType fonts use ordinals.
  \*/
  otfOrdinal: boolean

/\*\*

- When true, OpenType fonts use overlapping swash forms.
  \*/
  otfOverlapSwash: boolean

/\*\*

- When true, OpenType fonts kern using proportional CJK metrics.
  \*/
  otfProportionalMetrics: boolean

/\*\*

- When true, half-width alphanumerics receive italics.
  \*/
  otfRomanItalics: boolean

/\*\*

- When true, OpenType fonts use slashed zeroes.
  \*/
  otfSlashedZero: boolean

/\*\*

- When true, OpenType fonts use stretched alternate forms.
  \*/
  otfStretchedAlternate: boolean

/\*\*

- When true, OpenType fonts use stylistic alternate forms.
  \*/
  otfStylisticAlternate: boolean

/\*\*

- Stylistic sets selected for OpenType fonts.
  \*/
  otfStylisticSets: number

/\*\*

- When true, OpenType fonts use swash forms.
  \*/
  otfSwash: boolean

/\*\*

- When true, OpenType fonts use titling forms.
  \*/
  otfTitling: boolean

/\*\*

- Collection containing ellipses.
  \*/
  readonly ovals: Ovals

/\*\*

- When true, the story contains overset text.
  \*/
  readonly overflows: boolean

/\*\*

- When true, character fill color overprints.
  \*/
  overprintFill: boolean

/\*\*

- When true, character strokes overprint.
  \*/
  overprintStroke: boolean

/\*\*

- Page item collection for processing every page item in a container, such as a document, page, or group, without filtering by type.
  \*/
  readonly pageItems: PageItems

/\*\*

- Collection containing para style mappings.
  \*/
  readonly paraStyleMappings: ParaStyleMappings

/\*\*

- Shape applied to the bottom-left corner of rectangular shapes.
  \*/
  paragraphBorderBottomLeftCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the bottom-left corner effect on rectangular shapes.
  \*/
  paragraphBorderBottomLeftCornerRadius: number | string

/\*\*

- Border bottom line weight for the paragraph.
  \*/
  paragraphBorderBottomLineWeight: number | string

/\*\*

- Offset distance for the paragraph border's bottom edge.
  \*/
  paragraphBorderBottomOffset: number | string

/\*\*

- Basis, either descent or baseline, for computing the paragraph border bottom origin.
  \*/
  paragraphBorderBottomOrigin: ParagraphBorderBottomOriginEnum

/\*\*

- Shape applied to the bottom-right corner of rectangular shapes.
  \*/
  paragraphBorderBottomRightCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the bottom-right corner effect on rectangular shapes.
  \*/
  paragraphBorderBottomRightCornerRadius: number | string

/\*\*

- Paragraph stroke uses this swatch (color, gradient, tint, or mixed ink).
  \*/
  paragraphBorderColor: Swatch | string

/\*\*

- When true, paragraph borders also appear where the paragraph splits across frames or columns.
  \*/
  paragraphBorderDisplayIfSplits: boolean

/\*\*

- Paragraph border gaps use this swatch (color, gradient, tint, or mixed ink). Note: Applies only when the border type is not solid.
  \*/
  paragraphBorderGapColor: Swatch | string

/\*\*

- When true, the paragraph border gap overprints. Note: Applies only when border type is not solid.
  \*/
  paragraphBorderGapOverprint: boolean

/\*\*

- Paragraph border gap tint, expressed as a percentage. Note: Non-solid border types only. (Range: 0 to 100)
  \*/
  paragraphBorderGapTint: number

/\*\*

- Left line weight for the paragraph border.
  \*/
  paragraphBorderLeftLineWeight: number | string

/\*\*

- Offset distance for the paragraph border's left edge.
  \*/
  paragraphBorderLeftOffset: number | string

/\*\*

- When true, paragraph border display is enabled.
  \*/
  paragraphBorderOn: boolean

/\*\*

- When true, the paragraph border overprints.
  \*/
  paragraphBorderOverprint: boolean

/\*\*

- Right line weight for the paragraph border.
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

- Corner join used by the Story.
  \*/
  paragraphBorderStrokeEndJoin: EndJoin

/\*\*

- Paragraph stroke tint, expressed as a percentage. (Range: 0 to 100)
  \*/
  paragraphBorderTint: number

/\*\*

- Shape applied to the top-left corner of rectangular shapes and to every corner of non-rectangular shapes. Note: corner option lets you set a corner radius, unlike end join, where rounded or beveled appearance depends on stroke weight.
  \*/
  paragraphBorderTopLeftCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the top-left corner effect on rectangular shapes and for all corners on non-rectangular shapes.
  \*/
  paragraphBorderTopLeftCornerRadius: number | string

/\*\*

- Top line weight for the paragraph border.
  \*/
  paragraphBorderTopLineWeight: number | string

/\*\*

- Offset distance for the paragraph border's top edge.
  \*/
  paragraphBorderTopOffset: number | string

/\*\*

- Basis, either cap height, ascent or baseline, for computing the paragraph border top origin.
  \*/
  paragraphBorderTopOrigin: ParagraphBorderTopOriginEnum

/\*\*

- Shape applied to the top-right corner of rectangular shapes.
  \*/
  paragraphBorderTopRightCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the top-right corner effect on rectangular shapes.
  \*/
  paragraphBorderTopRightCornerRadius: number | string

/\*\*

- Border type used for the paragraph.
  \*/
  paragraphBorderType: StrokeStyle | string

/\*\*

- Basis, either text width or column width, for computing paragraph border width.
  \*/
  paragraphBorderWidth: ParagraphBorderEnum

/\*\*

- Direction setting for the paragraph.
  \*/
  paragraphDirection: ParagraphDirectionOptions

/\*\*

- When true, gyoudori mode covers the whole paragraph. When false, gyoudori mode is applied per line within the paragraph.
  \*/
  paragraphGyoudori: boolean

/\*\*

- Justification setting for the paragraph.
  \*/
  paragraphJustification: ParagraphJustificationOptions

/\*\*

- Kashida width for the paragraph. Values: 0 none, 1 short, 2 medium, 3 long.
  \*/
  paragraphKashidaWidth: number

/\*\*

- Shape applied to the bottom-left corner of rectangular shapes.
  \*/
  paragraphShadingBottomLeftCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the bottom-left corner effect on rectangular shapes.
  \*/
  paragraphShadingBottomLeftCornerRadius: number | string

/\*\*

- Offset distance for the paragraph shading bottom edge.
  \*/
  paragraphShadingBottomOffset: number | string

/\*\*

- Basis, either descent or baseline, for computing the paragraph shading bottom origin.
  \*/
  paragraphShadingBottomOrigin: ParagraphShadingBottomOriginEnum

/\*\*

- Shape applied to the bottom-right corner of rectangular shapes.
  \*/
  paragraphShadingBottomRightCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the bottom-right corner effect on rectangular shapes.
  \*/
  paragraphShadingBottomRightCornerRadius: number | string

/\*\*

- When true, paragraph shading is forced to clip to the frame shape.
  \*/
  paragraphShadingClipToFrame: boolean

/\*\*

- Paragraph shading uses this swatch (color, gradient, tint, or mixed ink).
  \*/
  paragraphShadingColor: Swatch | string

/\*\*

- Offset distance for the paragraph shading left edge.
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

- Offset distance for the paragraph shading right edge.
  \*/
  paragraphShadingRightOffset: number | string

/\*\*

- When true, printing is suppressed for the paragraph shading.
  \*/
  paragraphShadingSuppressPrinting: boolean

/\*\*

- Paragraph shading tint, expressed as a percentage. (Range: 0 to 100)
  \*/
  paragraphShadingTint: number

/\*\*

- Shape applied to the top-left corner of rectangular shapes and to every corner of non-rectangular shapes. Note: corner option lets you set a corner radius, unlike end join, where rounded or beveled appearance depends on stroke weight.
  \*/
  paragraphShadingTopLeftCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the top-left corner effect on rectangular shapes and for all corners on non-rectangular shapes.
  \*/
  paragraphShadingTopLeftCornerRadius: number | string

/\*\*

- Offset distance for the paragraph shading top edge.
  \*/
  paragraphShadingTopOffset: number | string

/\*\*

- Basis, either cap height, ascent or baseline, for computing the paragraph shading top origin.
  \*/
  paragraphShadingTopOrigin: ParagraphShadingTopOriginEnum

/\*\*

- Shape applied to the top-right corner of rectangular shapes.
  \*/
  paragraphShadingTopRightCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the top-right corner effect on rectangular shapes.
  \*/
  paragraphShadingTopRightCornerRadius: number | string

/\*\*

- Basis, either text width or column width, for computing paragraph shading width.
  \*/
  paragraphShadingWidth: ParagraphShadingWidthEnum

/\*\*

- Collection containing paragraphs.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Parent object for the Story, either a XMLElement or Document.
  \*/
  readonly parent: any

/\*\*

- Size of the text.
  \*/
  pointSize: number | string

/\*\*

- Collection containing polygons.
  \*/
  readonly polygons: Polygons

/\*\*

- Baseline-relative text position.
  \*/
  position: Position

/\*\*

- OpenType positional-form setting.
  \*/
  positionalForm: PositionalForms

/\*\*

- Collection containing preferences objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Object property that can set several properties in one operation.
  \*/
  properties: object

/\*\*

- Hyphenation style selected for the provider.
  \*/
  providerHyphenationStyle: HyphenationStyleEnum

/\*\*

- Collection containing radio buttons.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Collection containing rectangles.
  \*/
  readonly rectangles: Rectangles

/\*\*

- When true, numbers cannot break across lines. When false, multi-digit numbers may break between digits.
  \*/
  rensuuji: boolean

/\*\*

- Right indent width.
  \*/
  rightIndent: number | string

/\*\*

- When true, Roman characters rotate in vertical text.
  \*/
  rotateSingleByteCharacters: boolean

/\*\*

- Alignment setting for ruby.
  \*/
  rubyAlignment: RubyAlignments

/\*\*

- When true, ruby auto alignment is enabled.
  \*/
  rubyAutoAlign: boolean

/\*\*

- When true, ruby is automatically scaled to the specified percent of parent text size. For details on specifying a percent, see ruby parent scaling percent.
  \*/
  rubyAutoScaling: boolean

/\*\*

- When true, glyphs in auto tcy (tate-chuu-yoko) inside ruby scale automatically to fit one em.
  \*/
  rubyAutoTcyAutoScale: boolean

/\*\*

- Count of digits included in auto tcy (tate-chuu-yoko) for ruby.
  \*/
  rubyAutoTcyDigits: number

/\*\*

- When true, Roman characters are included in auto tcy (tate-chuu-yoko) for ruby.
  \*/
  rubyAutoTcyIncludeRoman: boolean

/\*\*

- Ruby character fills receive this swatch (color, gradient, tint, or mixed ink).
  \*/
  rubyFill: Swatch | string

/\*\*

- When true, ruby is enabled.
  \*/
  rubyFlag: boolean

/\*\*

- Font assigned to ruby characters.
  \*/
  rubyFont: Font | string

/\*\*

- Ruby character size, in points.
  \*/
  rubyFontSize: number

/\*\*

- Font style assigned to ruby characters.
  \*/
  rubyFontStyle: string | NothingEnum
