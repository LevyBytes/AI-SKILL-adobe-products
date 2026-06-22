# Insertion Point (part 2) (cont. 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> RuleWidth **ruleAboveWidth**
>

> Basis for calculating the width of the paragraph rule above: text width or column width.
> Mixed **ruleAboveColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the paragraph rule above. Possible returns: Swatch or String.
> Mixed **ruleAboveGapColor**
>
> Swatch (color, gradient, tint, or mixed ink) for the paragraph rule-above stroke gap. Note: valid only when the paragraph rule above type is not solid. Possible returns: Swatch or String.
> Number **ruleAboveGapTint**
>
> Paragraph rule stroke-gap tint percentage. Range: 0 to 100. Note: applies only when the rule above type is not solid.
> Boolean **ruleAboveGapOverprint**
>
> When true, the stroke gap of the paragraph rule above overprints. Note: Valid only the rule above type is not solid.
> Mixed **ruleAboveType**
>
> Stroke type of the rule above the paragraph. Possible returns: StrokeStyle or String.
> Boolean **ruleBelow**
>
> When true, a paragraph rule is applied below.
> Measurement Unit (Number or String)=any **ruleBelowLineWeight**
>
> Line weight for the rule below.
> Number **ruleBelowTint**
>
> Paragraph rule-below tint percentage. Range: 0 to 100.
> Measurement Unit (Number or String)=any **ruleBelowOffset**
>
> Offset from the last-line baseline to the paragraph rule below.
> Measurement Unit (Number or String)=any **ruleBelowLeftIndent**
>
> Left-edge indent for the paragraph rule below, based on text width or the last-line column width.
> Measurement Unit (Number or String)=any **ruleBelowRightIndent**
>
> Right-edge indent for the paragraph rule below, based on text width or the last-line column width.
> RuleWidth **ruleBelowWidth**
>
> Basis for calculating the width of the paragraph rule below: text width or column width.
> Mixed **ruleBelowColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the paragraph rule below. Possible returns: Swatch or String.
> Mixed **ruleBelowGapColor**
>
> Swatch (color, gradient, tint, or mixed ink) for the paragraph rule-below stroke gap. Note: valid only when the paragraph rule below type is not solid. Possible returns: Swatch or String.
> Number **ruleBelowGapTint**
>
> Paragraph rule-below stroke-gap tint percentage. Range: 0 to 100. Note: applies only when the paragraph rule below type is not solid.
> Mixed **ruleBelowType**
>
> Stroke type of the rule below the paragraph. Possible returns: StrokeStyle or String.
> Boolean **hyphenateCapitalizedWords**
>
> When true, allows hyphenation of capitalized words.
> Boolean **hyphenation**
>
> When true, allows hyphenation.
> Number **hyphenateBeforeLast**
>
> Minimum letters left at a word end before a hyphen break.
> Number **hyphenateAfterFirst**
>
> Minimum letters left at a word start before a hyphen break.
> Number **hyphenateWordsLongerThan**
>
> Minimum word length required for hyphenation.
> Number **hyphenateLadderLimit**
>
> Maximum hyphens allowed on consecutive lines; use zero for no limit.
> Measurement Unit (Number or String)=any **hyphenationZone**
>
> End-of-line whitespace allowed before hyphenation begins in non-justified text. Note: applies when composer is single-line composer.
> Number **hyphenWeight**
>
> Preference balance between spacing quality and fewer hyphens. Lower values allow more hyphens. Range: 0 to 100.
> CharacterStyle **dropCapStyle**
>
> Character style to apply to the drop cap. Also accepts: String.
> Mixed **contents**
>
> Contents for the text. Possible returns: String or SpecialCharacters enumerator.
> ParagraphStyle **appliedParagraphStyle**
>
> For the text. Also accepts: String, applied paragraph style.
> CharacterStyle **appliedCharacterStyle**
>
> For the text. Also accepts: String, applied character style.
> Measurement Unit (Number or String)=any **lastLineIndent**
>
> amount to indent the last line in the paragraph.
> Boolean **hyphenateLastWord**
>
> When true, the paragraph last word may hyphenate. Note: valid only when hyphenation is true.
> Boolean **otfSlashedZero**
>
> When true, use a slashed zeroes in OpenType fonts.
> Boolean **otfHistorical**
>
> When true, use historical forms in OpenType fonts.
> Number **otfStylisticSets**
>
> stylistic sets to use in OpenType fonts.
> Number **gradientFillLength**
>
> For the fill of the text, applied length (for a linear gradient) or radius (for a radial gradient).
> Number **gradientFillAngle**
>
> Text fill linear-gradient angle. Range: -180 to 180.
> Number **gradientStrokeLength**
>
> For the stroke of the text, applied length (for a linear gradient) or radius (for a radial gradient).
> Number **gradientStrokeAngle**
>
> Text stroke linear-gradient angle. Range: -180 to 180.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Gradient fill start point in page coordinates, using the format [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Gradient stroke start point in page coordinates, using the format [x, y].
> Boolean **keepWithPrevious**
>
> Controls whether the paragraph first line stays with the previous paragraph last line.
> Mixed **spanSplitColumnCount**
>
> Column count for paragraph spans or split columns. Possible returns: Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
> SpanColumnTypeOptions **spanColumnType**
>
> Paragraph column mode: single-column, spanning-column, or split-column.
> Measurement Unit (Number or String)=any **splitColumnInsideGutter**
>
> Inside gutter used when the paragraph splits columns.
> Measurement Unit (Number or String)=any **splitColumnOutsideGutter**
>
> Outside gutter used when the paragraph splits columns.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceBefore**
>
> Minimum space before a span or split column.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceAfter**
>
> Minimum space after a span or split column.
> Boolean **ruleBelowOverprint**
>
> When true, the rule below overprints.
> Boolean **ruleBelowGapOverprint**
>
> When true, the gap color of the rule below overprints.
> Number **dropcapDetail**
>
> Drop-cap details derived from glyph outlines. Values: 1 = left side bearing; 2 = descenders; Japanese frame grid uses 0x100,0x200,0x400.
> Boolean **hyphenateAcrossColumns**
>
> When true, the final word in a text column may hyphenate.
> Boolean **keepRuleAboveInFrame**
>
> When true, the rule above remains inside the frame bounds. Note: applies only when rule above is true.
> Boolean **ignoreEdgeAlignment**
>
> When true, ignores optical edge alignment for the paragraph.
> Boolean **otfMark**
>
> When true, uses mark positioning in OpenType fonts.
> Boolean **otfLocale**
>
> When true, uses localized forms in OpenType fonts.
> PositionalForms **positionalForm**
>
> OpenType positional form.
> ParagraphDirectionOptions **paragraphDirection**
>
> Paragraph direction setting.
> ParagraphJustificationOptions **paragraphJustification**
>
> Paragraph justification setting.
> Number **miterLimit**
>
> Stroke-width to miter-length ratio limit before a miter (pointed) join changes to a bevel (squared-off) join.
> TextStrokeAlign **strokeAlignment**
>
> For the text, applied stroke alignment.
> OutlineJoin **endJoin**
>
> For the characters of the text, applied stroke join type.
> Boolean **otfOverlapSwash**
>
> When true, use overlapping swash forms in OpenType fonts
> Boolean **otfStylisticAlternate**
>
> When true, use stylistic alternate forms in OpenType fonts
> Boolean **otfJustificationAlternate**
>
> When true, use alternate justification forms in OpenType fonts
> Boolean **otfStretchedAlternate**
>
> When true, use stretched alternate forms in OpenType fonts
> CharacterDirectionOptions **characterDirection**
>
> Direction for the character.
> CharacterDirectionOptions **keyboardDirection**
>
> Keyboard direction for the character.
> DigitsTypeOptions **digitsType**
>
> Digits type.
> KashidasOptions **kashidas**
>
> Kashidas use for justification.
> DiacriticPositionOptions **diacriticPosition**
>
> Position of diacriticical characters.
> Number **xOffsetDiacritic**
>
> X (horizontal) offset for diacritic adjustment.
> Number **yOffsetDiacritic**
>
> Y (vertical) offset for diacritic adjustment.
> Condition **appliedConditions**
>
> Applied conditions.
> Mixed **opentypeFeatures**
>
> OpenType features. Possible returns: Array of Array of 2 Strings or Long Integers.
> Boolean **gridAlignFirstLineOnly**
>
> When true, only the first line aligns to the frame grid or baseline grid. When false, every line aligns to the grid.
> GridAlignment **gridAlignment**
>
> Alignment to the frame grid or baseline grid.
> Number **gridGyoudori**
>
> Manual gyoudori setting.
> Number **autoTcy**
>
> Threshold count for half-width characters that automatically run horizontally in vertical text.
> Boolean **autoTcyIncludeRoman**
>
> When true, auto tcy includes Roman characters.
> Mixed **kinsokuSet**
>
> Kinsoku set defining valid line breaks. Possible returns: KinsokuTable, KinsokuSet enumerator or String.
> KinsokuType **kinsokuType**
>
> Kinsoku processing type that prevents kinsoku characters at line starts or endings. Note: valid only when a kinsoku set is defined.
> KinsokuHangTypes **kinsokuHangType**
>
> Allowed hanging punctuation type. Note: valid only when a kinsoku set is in effect.
> Boolean **bunriKinshi**
>
> When true, the selected kinsoku set also includes double period (.), ellipse (..), and double hyphen (--). Note: valid only when a kinsoku set is in effect.
> Mixed **mojikumi**
>
> Mojikumi table. For information, see mojikumi table defaults. Possible returns: MojikumiTable, String or MojikumiTableDefaults enumerator.
> Boolean **rensuuji**
>
> When true, disallows line breaks in numbers. When false, lines can break between digits in multi-digit numbers.
> Boolean **rotateSingleByteCharacters**
>
> When true, rotates Roman characters in vertical text.
> LeadingModel **leadingModel**
>
> Point from which leading is measured from line to line.
> CharacterAlignment **characterAlignment**
>
> Alignment for small characters to the largest character in the line.
> Number **tsume**
>
> Amount for horizontal character compression.
> Number **leadingAki**
>
> Amount for space before each character.
> Number **trailingAki**
>
> Amount for space after each character.
> Number **characterRotation**
>
> Individual-character rotation angle, in degrees. Note: rotation is counterclockwise.
> Number **jidori**
>
> Number for grid squares in which to arrange the text.
> Number **shataiMagnification**
>
> Amount (as a percentage) of shatai obliquing to apply.
> Number **shataiDegreeAngle**
>
> Shatai lens angle (in degrees).
> Boolean **shataiAdjustRotation**
>
> When true, applies shatai rotation.
> Boolean **shataiAdjustTsume**
>
> When true, adjusts shatai tsume.
> Boolean **tatechuyoko**
>
> When true, makes the character horizontal in vertical text.
> Number **tatechuyokoXOffset**
>
> horizontal offset for horizontal characters in vertical text.
> Number **tatechuyokoYOffset**
>
> vertical offset for horizontal characters in vertical text.
> Mixed **kentenFillColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the fill of kenten characters. Possible returns: Swatch or String.
> Mixed **kentenStrokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the stroke of kenten characters. Possible returns: Swatch or String.
> Number **kentenTint**
>
> Percentage fill tint for kenten characters; range: 0 to 100.
> Number **kentenStrokeTint**
>
> Percentage stroke tint for kenten characters; range: 0 to 100.
> Number **kentenWeight**
>
> Stroke weight (in points) of kenten characters.
> AdornmentOverprint **kentenOverprintFill**
>
> Method for overprinting the kenten fill.
> AdornmentOverprint **kentenOverprintStroke**
>
> Method for overprinting the kenten stroke.
> KentenCharacter **kentenKind**
>
> Style for kenten characters.
> Number **kentenPlacement**
>
> Distance between kenten characters and their parent characters.
> KentenAlignment **kentenAlignment**
>
> Alignment for kenten characters relative to the parent characters.
> RubyKentenPosition **kentenPosition**
>
> kenten position relative to the parent character.
> Mixed **kentenFont**
>
> Font to use for kenten characters. Possible returns: Font or String.
> Mixed **kentenFontStyle**
>
> Font style of kenten characters. Possible returns: String or NothingEnum enumerator.
> Number **kentenFontSize**
>
> Size (in points) of kenten characters.
> Number **kentenXScale**
>
> Kenten horizontal scale as a percent of original size.
> Number **kentenYScale**
>
> Kenten vertical scale as a percent of original size.
> String **kentenCustomCharacter**
>
> Kenten character value. Note: valid only when kenten kind is custom.
> KentenCharacterSet **kentenCharacterSet**
>
> Character set for custom kenten characters. Note: valid only when kenten kind is custom.
> Mixed **rubyFill**
>
> Swatch (color, gradient, tint, or mixed ink) used for the fill of ruby characters. Possible returns: Swatch or String.
> Mixed **rubyStroke**
>
> Swatch (color, gradient, tint, or mixed ink) used for the stroke of ruby characters. Possible returns: Swatch or String.
> Number **rubyTint**
>
> Percentage tint for the ruby fill color; range: 0 to 100.
> Number **rubyWeight**
>
> Stroke weight (in points) of ruby characters.
> AdornmentOverprint **rubyOverprintFill**
>
> Method for overprinting the ruby fill.
> AdornmentOverprint **rubyOverprintStroke**
>
> Method for overprinting the ruby stroke.
> Number **rubyStrokeTint**
>
> Percentage stroke tint for ruby characters.
> Mixed **rubyFont**
>
> For ruby characters. Possible returns: Font or String, applied font.
> Mixed **rubyFontStyle**
>
> Font style of ruby characters. Possible returns: String or NothingEnum enumerator.
> Number **rubyFontSize**
>
> Size (in points) of ruby characters.
> Boolean **rubyOpenTypePro**
>
> When true, uses OpenType Pro fonts for ruby.
> Number **rubyXScale**
>
> Ruby horizontal scale as a percent of original size.
> Number **rubyYScale**
>
> Ruby vertical scale as a percent of original size.
> RubyTypes **rubyType**
>
> Ruby type.
> RubyAlignments **rubyAlignment**
>
> Ruby alignment.
> RubyKentenPosition **rubyPosition**
>
> Position for ruby characters relative to the parent text.
> Number **rubyXOffset**
>
> Amount for horizontal space between ruby and parent characters.
> Number **rubyYOffset**
>
> Amount for vertical space between ruby and parent characters.
> RubyParentSpacing **rubyParentSpacing**
>
> ruby spacing relative to the parent text.
> Boolean **rubyAutoAlign**
>
> When true, auto aligns ruby.
> Boolean **rubyOverhang**
>
> When true, ruby overhang is limited to the specified amount. For amount details, see ruby parent overhang amount.
> Boolean **rubyAutoScaling**
>
> When true, ruby scales automatically to the specified percent of parent text size. For percent details, see ruby parent scaling percent.
> Number **rubyParentScalingPercent**
>
> Parent-text scaling percentage used to determine ruby text size.
> RubyOverhang **rubyParentOverhangAmount**
>
> Allowed ruby-character overhang beyond the parent text.
> Boolean **warichu**
>
> When true, turns on warichu.
> Number **warichuSize**
>
> Parent-text scaling percentage used to determine warichu size.
> Number **warichuLines**
>
> Number for lines of warichu within a single normal line.
> Number **warichuLineSpacing**
>
> Gap between lines of warichu characters.
> WarichuAlignment **warichuAlignment**
>
> Warichu alignment.
> Number **warichuCharsAfterBreak**
>
> Minimum number of characters allowed after a line break.
> Number **warichuCharsBeforeBreak**
>
> Minimum number of characters allowed before a line break.
> Boolean **otfProportionalMetrics**
>
> When true, kerns according to proportional CJK metrics in OpenType fonts.
> Boolean **otfHVKana**
>
> When true, hiragana fonts switch to variants with different horizontal and vertical glyphs.
> Boolean **otfRomanItalics**
>
> When true, applies italics to half-width alphanumerics.
> Boolean **scaleAffectsLineHeight**
>
> When true, the line changes size when characters are scaled.
> Boolean **cjkGridTracking**
>
> When true, grid tracking controls non-Roman characters in CJK grids.
> AlternateGlyphForms **glyphForm**
>
> Glyph variant to substitute for standard glyphs.
> Boolean **rubyFlag**
>
> When true, ruby is on.
> String **rubyString**
>
> Ruby string contents.
> Boolean **paragraphGyoudori**
>
> When true, gyoudori mode covers the full paragraph. When false, it applies line by line.
> Number **rubyAutoTcyDigits**
>
> Number for digits included in auto tcy (tate-chuu-yoko) in ruby.
> Boolean **rubyAutoTcyIncludeRoman**
>
> When true, ruby auto tcy (tate-chuu-yoko) includes Roman characters.
> Boolean **rubyAutoTcyAutoScale**
>
> When true, ruby auto tcy (tate-chuu-yoko) glyphs scale automatically to fit one em.
> Boolean **treatIdeographicSpaceAsSpace**
>
> When true, ideographic spaces do not wrap to the next line like text characters.
> Boolean **allowArbitraryHyphenation**
>
> When true, words without a hyphenation dictionary association may break to the next line at any character.
> ListType **bulletsAndNumberingListType**
>
> List type for bullets and numbering.
> Mixed **bulletsCharacterStyle**
>
> Character style to be used for the text after string. Possible returns: CharacterStyle or String.
> Mixed **numberingCharacterStyle**
>
> Character style to be used for the number string. Possible returns: CharacterStyle or String.
> String **numberingExpression**
>
> Number string expression for numbering.
> String **bulletsTextAfter**
>
> Text after string expression for bullets.
> Mixed **appliedNumberingList**
>
> List to be part of. Possible returns: NumberingList or String.
> Number **numberingLevel**
>
> Level for the paragraph.
> Mixed **numberingFormat**
>
> Numbering format choices. Possible returns: NumberingStyle enumerator or String.
> Boolean **numberingContinue**
>
> Keeps numbering continuing at this level.
> Number **numberingStartAt**
>
> Sets the starting number for a numbered list.
> Boolean **numberingApplyRestartPolicy**
>
> When true, apply the numbering restart policy.
> ListAlignment **bulletsAlignment**
>
> Alignment for the bullet character.
> ListAlignment **numberingAlignment**
>
> Alignment for the number.
> Object **properties**
>
> Property that allows setting of several properties at the same time.
