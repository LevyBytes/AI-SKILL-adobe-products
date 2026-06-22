# Text (part 2) (cont. 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> Number **dropCapCharacters**
>

> dropCapCharacters: Count of characters to drop cap.
> Boolean **keepLinesTogether**
>
> keepLinesTogether: True value: a specified line count stays together when a paragraph breaks across columns or text frames.
> Boolean **keepAllLinesTogether**
>
> keepAllLinesTogether: True value: every line in the paragraph stays together. False value: paragraphs to break across pages or columns is allowed.
> Number **keepWithNext**
>
> keepWithNext: Minimum line count to keep with the next paragraph.
> Number **keepFirstLines**
>
> keepFirstLines: Minimum line count to keep together before a paragraph page break.
> Number **keepLastLines**
>
> keepLastLines: Minimum line count to keep together after a paragraph page break.
> StartParagraph **startParagraph**
>
> startParagraph: Location at which to start the paragraph.
> String **composer**
>
> composer: Text composer to use to compose the text.
> Number **minimumWordSpacing**
>
> minimumWordSpacing: Lower word-spacing percentage for justified text, based on the font word-space value. Note: Applies only to justified text. (Range: 0 to 1000).
> Number **maximumWordSpacing**
>
> maximumWordSpacing: Upper word-spacing percentage for justified text, based on the font word-space value. Note: Applies only to justified text. (Range: 0 to 1000).
> Number **desiredWordSpacing**
>
> desiredWordSpacing: Target word-spacing percentage based on the font word-space value. (Range: 0 to 1000)
> Number **minimumLetterSpacing**
>
> minimumLetterSpacing: Lower letter-spacing percentage based on the font built-in letter space. Note: Applies only to justified text. (Range: -100 to 500)
> Number **maximumLetterSpacing**
>
> maximumLetterSpacing: Maximum letter-spacing percentage of the font built-in letter space. Note: Applies only to justified text. (Range: -100 to 500)
> Number **desiredLetterSpacing**
>
> desiredLetterSpacing: Desired letter spacing as a percentage of the font built-in letter space. (Range: -100 to 500)
> Number **minimumGlyphScaling**
>
> minimumGlyphScaling: Minimum individual-character width percentage. (Range: 50 to 200)
> Number **maximumGlyphScaling**
>
> maximumGlyphScaling: Maximum individual-character width percentage. (Range: 50 to 200)
> Number **desiredGlyphScaling**
>
> desiredGlyphScaling: Desired individual-character width percentage. (Range: 50 to 200)
> Boolean **ruleAbove**
>
> ruleAbove: True value: a rule is placed above the paragraph.
> Boolean **ruleAboveOverprint**
>
> ruleAboveOverprint: True value: the paragraph rule above overprints.
> Measurement Unit (Number or String)=any **ruleAboveLineWeight**
>
> ruleAboveLineWeight: Line weight for the rule above.
> Number **ruleAboveTint**
>
> ruleAboveTint: Paragraph rule above tint percentage. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **ruleAboveOffset**
>
> ruleAboveOffset: Baseline-to-rule offset above the paragraph, measured from the first line.
> Measurement Unit (Number or String)=any **ruleAboveLeftIndent**
>
> ruleAboveLeftIndent: Left indent for the rule above, based on first-line text width or column width.
> Measurement Unit (Number or String)=any **ruleAboveRightIndent**
>
> ruleAboveRightIndent: Right indent for the rule above, based on first-line text width or column width.
> RuleWidth **ruleAboveWidth**
>
> ruleAboveWidth: Calculation basis (text width or column width) for the paragraph rule above width.
> Mixed **ruleAboveColor**
>
> ruleAboveColor: Swatch (color, gradient, tint, or mixed ink) used for the paragraph rule above. Return type: Swatch or String.
> Mixed **ruleAboveGapColor**
>
> ruleAboveGapColor: Swatch (color, gradient, tint, or mixed ink) used for the stroke gap of the paragraph rule above. Note: Applies only for non-solid paragraph rule above types. Return type: Swatch or String.
> Number **ruleAboveGapTint**
>
> ruleAboveGapTint: Percentage tint for the stroke gap color of the paragraph rule. Note: Applies only for non-solid rule above types. (Range: 0 to 100)
> Boolean **ruleAboveGapOverprint**
>
> ruleAboveGapOverprint: True value: stroke gap of the paragraph rule above overprints. Note: Applies only for non-solid rule above types.
> Mixed **ruleAboveType**
>
> ruleAboveType: Stroke type for the rule above the paragraph. Return type: StrokeStyle or String.
> Boolean **ruleBelow**
>
> ruleBelow: True value: a paragraph rule below is applied.
> Measurement Unit (Number or String)=any **ruleBelowLineWeight**
>
> ruleBelowLineWeight: Line weight for the rule below.
> Number **ruleBelowTint**
>
> ruleBelowTint: Paragraph rule below tint percentage. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **ruleBelowOffset**
>
> ruleBelowOffset: Baseline-to-rule offset below the paragraph, measured from the last line.
> Measurement Unit (Number or String)=any **ruleBelowLeftIndent**
>
> ruleBelowLeftIndent: Left indent for the rule below, based on last-line text width or column width.
> Measurement Unit (Number or String)=any **ruleBelowRightIndent**
>
> ruleBelowRightIndent: Right indent for the rule below, based on last-line text width or column width.
> RuleWidth **ruleBelowWidth**
>
> ruleBelowWidth: Calculation basis (text width or column width) for the paragraph rule below width.
> Mixed **ruleBelowColor**
>
> ruleBelowColor: Swatch (color, gradient, tint, or mixed ink) used for the paragraph rule below. Return type: Swatch or String.
> Mixed **ruleBelowGapColor**
>
> ruleBelowGapColor: Swatch (color, gradient, tint, or mixed ink) used for the stroke gap of the paragraph rule below. Note: Applies only for non-solid paragraph rule below types. Return type: Swatch or String.
> Number **ruleBelowGapTint**
>
> ruleBelowGapTint: Percentage tint for the stroke gap color of the paragraph rule below. Note: Applies only for non-solid paragraph rule below types. (Range: 0 to 100)
> Mixed **ruleBelowType**
>
> ruleBelowType: Stroke type for the rule below the paragraph. Return type: StrokeStyle or String.
> Boolean **hyphenateCapitalizedWords**
>
> hyphenateCapitalizedWords: True value: capitalized words may be hyphenated.
> Boolean **hyphenation**
>
> hyphenation: True value: hyphenation is allowed.
> Number **hyphenateBeforeLast**
>
> hyphenateBeforeLast: Minimum ending-letter count before a word may be hyphenated.
> Number **hyphenateAfterFirst**
>
> hyphenateAfterFirst: Minimum starting-letter count before a word may be hyphenated.
> Number **hyphenateWordsLongerThan**
>
> hyphenateWordsLongerThan: Minimum word length that qualifies for hyphenation.
> Number **hyphenateLadderLimit**
>
> hyphenateLadderLimit: Maximum consecutive-line hyphen count; zero allows unlimited consecutive lines.
> Measurement Unit (Number or String)=any **hyphenationZone**
>
> hyphenationZone: White-space allowance at a non-justified line end before hyphenation begins. Note: Applies when composer is single-line composer.
> Number **hyphenWeight**
>
> hyphenWeight: Preference balance for spacing quality versus hyphen count. Lower values use hyphens more often. (Range: 0 to 100)
> CharacterStyle **dropCapStyle**
>
> dropCapStyle: Character style used for the drop cap. Also accepts: String.
> Mixed **contents**
>
> contents: Contents for the text. Return type: String or SpecialCharacters enumerator.
> ParagraphStyle **appliedParagraphStyle**
>
> appliedParagraphStyle: Paragraph style used for the text. Also accepts: String.
> CharacterStyle **appliedCharacterStyle**
>
> appliedCharacterStyle: Character style used for the text. Also accepts: String.
> Measurement Unit (Number or String)=any **lastLineIndent**
>
> lastLineIndent: Amount to indent the last line in the paragraph.
> Boolean **hyphenateLastWord**
>
> hyphenateLastWord: True value: the final word in a paragraph may be hyphenated. Note: Applies only when hyphenation is true.
> Boolean **otfSlashedZero**
>
> otfSlashedZero: True value: OpenType slashed zero forms are used.
> Boolean **otfHistorical**
>
> otfHistorical: True value: OpenType historical forms are used.
> Number **otfStylisticSets**
>
> otfStylisticSets: Stylistic sets to use in OpenType fonts.
> Number **gradientFillLength**
>
> gradientFillLength: Linear-gradient length or radial-gradient radius for text fill.
> Number **gradientFillAngle**
>
> gradientFillAngle: Linear-gradient angle for text fill. (Range: -180 to 180)
> Number **gradientStrokeLength**
>
> gradientStrokeLength: Linear-gradient length or radial-gradient radius for text stroke.
> Number **gradientStrokeAngle**
>
> gradientStrokeAngle: Linear-gradient angle for text stroke. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> gradientFillStart: Gradient start point for the fill of the text, in page coordinates and [x, y] format.
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> gradientStrokeStart: Gradient start point for the stroke of the text, in page coordinates and [x, y] format.
> Boolean **keepWithPrevious**
>
> keepWithPrevious: Controls whether the paragraph first line stays with the previous paragraph last line.
> Mixed **spanSplitColumnCount**
>
> spanSplitColumnCount: Count of columns a paragraph spans, or split columns. Return type: Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
> SpanColumnTypeOptions **spanColumnType**
>
> spanColumnType: Specifies whether a paragraph remains one column, spans columns, or splits columns.
> Measurement Unit (Number or String)=any **splitColumnInsideGutter**
>
> splitColumnInsideGutter: Inside gutter for split-column paragraphs.
> Measurement Unit (Number or String)=any **splitColumnOutsideGutter**
>
> splitColumnOutsideGutter: Outside gutter for split-column paragraphs.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceBefore**
>
> spanColumnMinSpaceBefore: Minimum pre-space for a span or split column.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceAfter**
>
> spanColumnMinSpaceAfter: Minimum post-space for a span or split column.
> Boolean **ruleBelowOverprint**
>
> ruleBelowOverprint: True value: the rule below overprints.
> Boolean **ruleBelowGapOverprint**
>
> ruleBelowGapOverprint: True value: the rule-below gap color overprints.
> Number **dropcapDetail**
>
> dropcapDetail: Drop-cap details derived from glyph outlines. 1 means left side bearing; 2 means descenders; 0x100, 0x200, and 0x400 are for Japanese frame grid.
> Boolean **hyphenateAcrossColumns**
>
> hyphenateAcrossColumns: True value: the last word in a text column to be hyphenated is allowed.
> Boolean **keepRuleAboveInFrame**
>
> keepRuleAboveInFrame: True value: the rule above the paragraph stays within the frame bounds. Note: Applies only when rule above is true.
> Boolean **ignoreEdgeAlignment**
>
> ignoreEdgeAlignment: True value: paragraph optical edge alignment is ignored.
> Boolean **otfMark**
>
> otfMark: True value: OpenType mark positioning is used.
> Boolean **otfLocale**
>
> otfLocale: True value: OpenType localized forms are used.
> PositionalForms **positionalForm**
>
> positionalForm: OpenType positional form.
> ParagraphDirectionOptions **paragraphDirection**
>
> paragraphDirection: Paragraph direction setting.
> ParagraphJustificationOptions **paragraphJustification**
>
> paragraphJustification: Paragraph justification setting.
> Number **miterLimit**
>
> miterLimit: Ratio limit between stroke width and miter length before a pointed miter join becomes a squared-off bevel join.
> TextStrokeAlign **strokeAlignment**
>
> strokeAlignment: Stroke alignment for the text.
> OutlineJoin **endJoin**
>
> endJoin: Stroke join type applied to the characters for the text.
> Boolean **otfOverlapSwash**
>
> otfOverlapSwash: True value: OpenType overlapping swash forms are used.
> Boolean **otfStylisticAlternate**
>
> otfStylisticAlternate: True value: OpenType stylistic alternate forms are used.
> Boolean **otfJustificationAlternate**
>
> otfJustificationAlternate: True value: OpenType alternate justification forms are used.
> Boolean **otfStretchedAlternate**
>
> otfStretchedAlternate: True value: OpenType stretched alternate forms are used.
> CharacterDirectionOptions **characterDirection**
>
> characterDirection: Direction of the character.
> CharacterDirectionOptions **keyboardDirection**
>
> keyboardDirection: Keyboard direction of the character.
> DigitsTypeOptions **digitsType**
>
> digitsType: Digits type.
> KashidasOptions **kashidas**
>
> kashidas: Kashidas usage for justification.
> DiacriticPositionOptions **diacriticPosition**
>
> diacriticPosition: Diacritic character positioning.
> Number **xOffsetDiacritic**
>
> xOffsetDiacritic: X (horizontal) offset for diacritic adjustment.
> Number **yOffsetDiacritic**
>
> yOffsetDiacritic: Y (vertical) offset for diacritic adjustment.
> Mixed **tabList**
>
> tabList: Paragraph tab-stop list. Return type: Array of Arrays of Property Name/Value Pairs.
> Condition **appliedConditions**
>
> appliedConditions: Applied conditions.
> Mixed **opentypeFeatures**
>
> opentypeFeatures: OpenType feature list. Return type: Array of Array of 2 Strings or Long Integers.
> Boolean **gridAlignFirstLineOnly**
>
> gridAlignFirstLineOnly: True value: aligns only the first line to the frame grid or baseline grid. False value: aligns all lines to the grid.
> GridAlignment **gridAlignment**
>
> gridAlignment: Alignment to the frame grid or baseline grid.
> Number **gridGyoudori**
>
> gridGyoudori: Manual gyoudori setting.
> Number **autoTcy**
>
> autoTcy: Count of half-width characters at or below which characters automatically run horizontally in vertical text.
> Boolean **autoTcyIncludeRoman**
>
> autoTcyIncludeRoman: True value: auto tcy includes Roman characters.
> Mixed **kinsokuSet**
>
> kinsokuSet: Kinsoku set used to determine permitted line breaks. Return type: KinsokuTable, KinsokuSet enumerator or String.
> KinsokuType **kinsokuType**
>
> kinsokuType: Line-start and line-end prevention mode for kinsoku characters. Note: Applies only when a kinsoku set is defined.
> KinsokuHangTypes **kinsokuHangType**
>
> kinsokuHangType: Type setting for hanging punctuation to allow. Note: Applies only when a kinsoku set is in effect.
> Boolean **bunriKinshi**
>
> bunriKinshi: True value: the selected kinsoku set receives the double period (..), ellipse (...), and double hyphen (--). Note: Applies only when a kinsoku set is in effect.
> Mixed **mojikumi**
>
> mojikumi: Mojikumi table. See mojikumi table defaults for details. Return type: MojikumiTable, String or MojikumiTableDefaults enumerator.
> Boolean **rensuuji**
>
> rensuuji: True value: line breaks in numbers are disallowed. False value: lines can break between digits in multi-digit numbers.
> Boolean **rotateSingleByteCharacters**
>
> rotateSingleByteCharacters: True value: Roman characters rotate in vertical text.
> LeadingModel **leadingModel**
>
> leadingModel: Point used to measure leading from one line to the next.
> CharacterAlignment **characterAlignment**
>
> characterAlignment: Alignment of small characters against the line largest character.
> Number **tsume**
>
> tsume: Horizontal character compression amount.
> Number **leadingAki**
>
> leadingAki: Space amount before each character.
> Number **trailingAki**
>
> trailingAki: Space amount after each character.
> Number **characterRotation**
>
> characterRotation: Individual-character rotation angle in degrees. Note: Rotation is counterclockwise.
> Number **jidori**
>
> jidori: Count of grid squares used to arrange the text.
> Number **shataiMagnification**
>
> shataiMagnification: Percentage amount for shatai obliquing to apply.
> Number **shataiDegreeAngle**
>
> shataiDegreeAngle: Shatai lens angle in degrees.
> Boolean **shataiAdjustRotation**
>
> shataiAdjustRotation: True value: shatai rotation is applied.
> Boolean **shataiAdjustTsume**
>
> shataiAdjustTsume: True value: shatai tsume is adjusted.
> Boolean **tatechuyoko**
>
> tatechuyoko: True value: the character becomes horizontal in vertical text.
> Number **tatechuyokoXOffset**
>
> tatechuyokoXOffset: Horizontal offset for horizontal characters in vertical text.
> Number **tatechuyokoYOffset**
>
> tatechuyokoYOffset: Vertical offset for horizontal characters in vertical text.
> Mixed **kentenFillColor**
>
> kentenFillColor: Swatch (color, gradient, tint, or mixed ink) used for the fill of kenten characters. Return type: Swatch or String.
> Mixed **kentenStrokeColor**
>
> kentenStrokeColor: Swatch (color, gradient, tint, or mixed ink) used for the stroke of kenten characters. Return type: Swatch or String.
> Number **kentenTint**
>
> kentenTint: Percentage fill tint for kenten characters. (Range: 0 to 100)
> Number **kentenStrokeTint**
>
> kentenStrokeTint: Percentage stroke tint for kenten characters. (Range: 0 to 100)
> Number **kentenWeight**
>
> kentenWeight: Stroke weight (in points) of kenten characters.
> AdornmentOverprint **kentenOverprintFill**
>
> kentenOverprintFill: Method of overprinting the kenten fill.
> AdornmentOverprint **kentenOverprintStroke**
>
> kentenOverprintStroke: Method of overprinting the kenten stroke.
> KentenCharacter **kentenKind**
>
> kentenKind: Kenten character style.
> Number **kentenPlacement**
>
> kentenPlacement: Distance between kenten characters and parent characters.
> KentenAlignment **kentenAlignment**
>
> kentenAlignment: Kenten-character alignment relative to parent characters.
> RubyKentenPosition **kentenPosition**
>
> kentenPosition: Kenten position relative to the parent character.
> Mixed **kentenFont**
>
> kentenFont: Font used for kenten characters. Return type: Font or String.
> Mixed **kentenFontStyle**
>
> kentenFontStyle: Font style for kenten characters. Return type: String or NothingEnum enumerator.
> Number **kentenFontSize**
>
> kentenFontSize: Size (in points) of kenten characters.
> Number **kentenXScale**
>
> kentenXScale: Kenten horizontal scale percentage relative to original size.
> Number **kentenYScale**
>
> kentenYScale: Kenten vertical scale percentage relative to original size.
> String **kentenCustomCharacter**
>
> kentenCustomCharacter: Character used for kenten. Note: Applies only when kenten kind is custom.
> KentenCharacterSet **kentenCharacterSet**
>
> kentenCharacterSet: Character set for the custom kenten character. Note: Applies only when kenten kind is custom.
> Mixed **rubyFill**
>
> rubyFill: Swatch (color, gradient, tint, or mixed ink) used for the fill of ruby characters. Return type: Swatch or String.
> Mixed **rubyStroke**
>
> rubyStroke: Swatch (color, gradient, tint, or mixed ink) used for the stroke of ruby characters. Return type: Swatch or String.
> Number **rubyTint**
>
> rubyTint: Percentage tint for the ruby fill color. (Range: 0 to 100)
> Number **rubyWeight**
>
> rubyWeight: Stroke weight (in points) of ruby characters.
> AdornmentOverprint **rubyOverprintFill**
>
> rubyOverprintFill: Method of overprinting the ruby fill.
> AdornmentOverprint **rubyOverprintStroke**
>
> rubyOverprintStroke: Method of overprinting the ruby stroke.
> Number **rubyStrokeTint**
>
> rubyStrokeTint: Percentage stroke tint for ruby characters.
> Mixed **rubyFont**
>
> rubyFont: Font used for ruby characters. Return type: Font or String.
> Mixed **rubyFontStyle**
>
> rubyFontStyle: Font style for ruby characters. Return type: String or NothingEnum enumerator.
> Number **rubyFontSize**
>
> rubyFontSize: Size (in points) of ruby characters.
> Boolean **rubyOpenTypePro**
>
> rubyOpenTypePro: True value: OpenType Pro fonts are used for ruby.
> Number **rubyXScale**
>
> rubyXScale: Ruby horizontal scale percentage relative to original size.
> Number **rubyYScale**
>
> rubyYScale: Ruby vertical scale percentage relative to original size.
> RubyTypes **rubyType**
>
> rubyType: Ruby type setting.
> RubyAlignments **rubyAlignment**
>
> rubyAlignment: Ruby alignment setting.
> RubyKentenPosition **rubyPosition**
>
> rubyPosition: Ruby-character position relative to parent text.
> Number **rubyXOffset**
>
> rubyXOffset: Horizontal spacing between ruby and parent characters.
> Number **rubyYOffset**
>
> rubyYOffset: Vertical spacing between ruby and parent characters.
> RubyParentSpacing **rubyParentSpacing**
>
> rubyParentSpacing: Ruby spacing relative to parent text.
> Boolean **rubyAutoAlign**
>
> rubyAutoAlign: True value: ruby aligns automatically.
> Boolean **rubyOverhang**
>
> rubyOverhang: True value: ruby overhang is constrained to the specified amount. See ruby parent overhang amount for amount details.
> Boolean **rubyAutoScaling**
>
> rubyAutoScaling: True value: ruby scales automatically to the specified percentage of parent text size. See ruby parent scaling percent for percent details.
> Number **rubyParentScalingPercent**
>
> rubyParentScalingPercent: Parent-text scaling percentage used to derive ruby text size.
> RubyOverhang **rubyParentOverhangAmount**
>
> rubyParentOverhangAmount: Allowed overhang amount for ruby characters beyond the parent text.
> Boolean **warichu**
>
> warichu: True value: warichu is enabled.
> Number **warichuSize**
>
> warichuSize: Percentage used to scale parent text size when determining warichu size.
> Number **warichuLines**
>
> warichuLines: Count of warichu lines within one normal line.
> Number **warichuLineSpacing**
>
> warichuLineSpacing: Gap between warichu character lines.
> WarichuAlignment **warichuAlignment**
>
> warichuAlignment: Warichu alignment setting.
> Number **warichuCharsAfterBreak**
>
> warichuCharsAfterBreak: Minimum character count allowed after a line break.
> Number **warichuCharsBeforeBreak**
>
> warichuCharsBeforeBreak: Minimum character count allowed before a line break.
> Boolean **otfProportionalMetrics**
>
> otfProportionalMetrics: True value: kerning follows proportional CJK metrics in OpenType fonts.
> Boolean **otfHVKana**
>
> otfHVKana: True value: hiragana fonts switch to glyphs that differ for horizontal and vertical text.
> Boolean **otfRomanItalics**
>
> otfRomanItalics: True value: half-width alphanumerics receive italics.
> Boolean **scaleAffectsLineHeight**
>
> scaleAffectsLineHeight: True value: character scaling changes the line size.
> Boolean **cjkGridTracking**
>
> cjkGridTracking: True value: grid tracking handles non-Roman characters in CJK grids.
> AlternateGlyphForms **glyphForm**
>
> glyphForm: Glyph variant substituted for standard glyphs.
> Boolean **rubyFlag**
>
> rubyFlag: True value: ruby is enabled.
> String **rubyString**
>
> rubyString: Ruby string contents.
> Boolean **paragraphGyoudori**
>
> paragraphGyoudori: True value: the gyoudori mode applies to the entire paragraph. False value: the gyoudori mode applies to each line in the paragraph.
