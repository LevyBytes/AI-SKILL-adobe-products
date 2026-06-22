# Paragraph (part 1) (cont. 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _(continued)_

> Measurement Unit (Number or String)=any **ruleAboveRightIndent**
>

> Right-edge indent distance for the paragraph rule above, based on text width or first-line column width.
> RuleWidth **ruleAboveWidth**
>
> Basis (text width or column width) for calculating the width of the paragraph rule above.
> Mixed **ruleAboveColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the paragraph rule above. Can return: Swatch or String.
> Mixed **ruleAboveGapColor**
>
> Swatch for the paragraph-rule-above stroke gap; it may be color, gradient, tint, or mixed ink. Note: use only for non-solid paragraph rule above types. May return: Swatch or String.
> Number **ruleAboveGapTint**
>
> Stroke-gap color tint percentage for the paragraph rule. (Range: 0 to 100) Note: use only for non-solid rule above types.
> Boolean **ruleAboveGapOverprint**
>
> When true, stroke gap of the paragraph rule above overprints. Note: Valid only the rule above type is not solid.
> Mixed **ruleAboveType**
>
> Stroke type for the rule above the paragraph. Can return: StrokeStyle or String.
> Boolean **ruleBelow**
>
> When true, adds a rule below the paragraph.
> Measurement Unit (Number or String)=any **ruleBelowLineWeight**
>
> Line weight for the rule below.
> Number **ruleBelowTint**
>
> Paragraph-rule-below tint percentage. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **ruleBelowOffset**
>
> Offset amount from the paragraph's last-line baseline to the rule below.
> Measurement Unit (Number or String)=any **ruleBelowLeftIndent**
>
> Left-edge indent distance for the paragraph rule below, based on text width or last-line column width.
> Measurement Unit (Number or String)=any **ruleBelowRightIndent**
>
> Right-edge indent distance for the paragraph rule below, based on text width or last-line column width.
> RuleWidth **ruleBelowWidth**
>
> Basis (text width or column width) for calculating the width of the paragraph rule below.
> Mixed **ruleBelowColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the paragraph rule below. Can return: Swatch or String.
> Mixed **ruleBelowGapColor**
>
> Swatch for the paragraph-rule-below stroke gap; it may be color, gradient, tint, or mixed ink. Note: use only for non-solid paragraph rule below types. May return: Swatch or String.
> Number **ruleBelowGapTint**
>
> Stroke-gap color tint percentage for the paragraph rule below. (Range: 0 to 100) Note: use only for non-solid paragraph rule below types.
> Mixed **ruleBelowType**
>
> Stroke type for the rule below the paragraph. Can return: StrokeStyle or String.
> Boolean **hyphenateCapitalizedWords**
>
> When true, permits hyphenation of capitalized words.
> Boolean **hyphenation**
>
> When true, permits hyphenation.
> Number **hyphenateBeforeLast**
>
> Minimum trailing letters that may remain after a word is hyphen-broken.
> Number **hyphenateAfterFirst**
>
> Minimum leading letters required before a word may be hyphen-broken.
> Number **hyphenateWordsLongerThan**
>
> Minimum number of letters a word must have to qualify for hyphenation.
> Number **hyphenateLadderLimit**
>
> Maximum number of hyphens that may appear on back-to-back lines. Use zero to allow unlimited consecutive lines.
> Measurement Unit (Number or String)=any **hyphenationZone**
>
> Allowed end-of-line white space before hyphenation starts in non-justified text. Note: applies with the single-line composer.
> Number **hyphenWeight**
>
> Relative preference for better spacing vs. fewer hyphens. Lower values favor more hyphen use. (Range: 0 to 100)
> CharacterStyle **dropCapStyle**
>
> Character style applied to the drop cap. Can also accept: String.
> Mixed **contents**
>
> Contents of the text. Can return: String or SpecialCharacters enumerator.
> ParagraphStyle **appliedParagraphStyle**
>
> Paragraph style used by the text. Can also accept: String.
> CharacterStyle **appliedCharacterStyle**
>
> Character style for the text. Also accepts: String.
> Measurement Unit (Number or String)=any **lastLineIndent**
>
> amount to indent the last line in the paragraph.
> Boolean **hyphenateLastWord**
>
> When true, permits hyphenation in the last word in a paragraph. Note: use only when hyphenation is true.
> Boolean **otfSlashedZero**
>
> When true, uses a slashed zeroes in OpenType fonts.
> Boolean **otfHistorical**
>
> When true, uses historical forms in OpenType fonts.
> Number **otfStylisticSets**
>
> stylistic sets to use in OpenType fonts.
> Number **gradientFillLength**
>
> Fill gradient extent: length for a linear gradient or radius for a radial gradient.
> Number **gradientFillAngle**
>
> Linear-gradient angle for the text fill. (Range: -180 to 180)
> Number **gradientStrokeLength**
>
> Stroke gradient extent: length for a linear gradient or radius for a radial gradient.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle for the text stroke. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Gradient start point for the text fill, in page coordinates and formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Gradient start point for the text stroke, in page coordinates and formatted as [x, y].
> Boolean **keepWithPrevious**
>
> Controls keeping the paragraph's first line with the previous paragraph's last line.
> Mixed **spanSplitColumnCount**
>
> Column count for paragraph spanning or splitting. May return: Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
> SpanColumnTypeOptions **spanColumnType**
>
> Controls paragraph column mode: single column, spanning columns, or split columns.
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
> Minimum space after a span or a split column.
> Boolean **ruleBelowOverprint**
>
> When true, rule below overprints.
> Boolean **ruleBelowGapOverprint**
>
> When true, gap color of the rule below overprints.
> Number **dropcapDetail**
>
> Drop-cap detail from glyph outlines. 1 selects left side bearing; 2 selects descenders; 0x100,0x200,0x400 apply to Japanese frame grid.
> Boolean **hyphenateAcrossColumns**
>
> When true, permits the last word in a text column to be hyphenated.
> Boolean **keepRuleAboveInFrame**
>
> When true, keeps the rule above inside frame bounds. Note: use only when rule above is true.
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
> Direction for the paragraph.
> ParagraphJustificationOptions **paragraphJustification**
>
> Justification for the paragraph.
> Number **miterLimit**
>
> Limit for the stroke-width to miter-length ratio before a miter (pointed) join changes to a bevel (squared-off) join.
> TextStrokeAlign **strokeAlignment**
>
> stroke alignment applied to the text.
> OutlineJoin **endJoin**
>
> stroke join type applied to the characters of the text.
> Boolean **otfOverlapSwash**
>
> When true, uses overlapping swash forms in OpenType fonts.
> Boolean **otfStylisticAlternate**
>
> When true, uses stylistic alternate forms in OpenType fonts.
> Boolean **otfJustificationAlternate**
>
> When true, uses alternate justification forms in OpenType fonts.
> Boolean **otfStretchedAlternate**
>
> When true, uses stretched alternate forms in OpenType fonts.
> CharacterDirectionOptions **characterDirection**
>
> Direction of the character.
> CharacterDirectionOptions **keyboardDirection**
>
> Keyboard direction for the character.
> DigitsTypeOptions **digitsType**
>
> Digits type.
> KashidasOptions **kashidas**
>
> Kashidas usage for justification.
> DiacriticPositionOptions **diacriticPosition**
>
> Placement of diacriticical characters.
> Number **xOffsetDiacritic**
>
> x (horizontal) offset for diacritic adjustment.
> Number **yOffsetDiacritic**
>
> y (vertical) offset for diacritic adjustment.
> Condition **appliedConditions**
>
> Conditions applied to the text.
> Mixed **opentypeFeatures**
>
> OpenType feature data. May return: nested Array entries containing 2 Strings or Long Integers.
> Boolean **gridAlignFirstLineOnly**
>
> When true, aligns just the first line to the frame grid or baseline grid; when false, every line aligns to the grid.
> GridAlignment **gridAlignment**
>
> alignment to the frame grid or baseline grid.
> Number **gridGyoudori**
>
> Manual gyoudori setting.
> Number **autoTcy**
>
> Half-width character threshold for automatic horizontal composition inside vertical text.
> Boolean **autoTcyIncludeRoman**
>
> When true, auto tcy includes Roman characters.
> Mixed **kinsokuSet**
>
> Kinsoku set determining legitimate line breaks. Can return: KinsokuTable, KinsokuSet enumerator or String.
> KinsokuType **kinsokuType**
>
> Kinsoku-processing type that blocks kinsoku characters at line starts or line endings. Note: use only when a kinsoku set is defined.
> KinsokuHangTypes **kinsokuHangType**
>
> Type of hanging punctuation to allow. Note: use only when a kinsoku set is in effect.
> Boolean **bunriKinshi**
>
> When true, includes double period (..), ellipse (...), and double hyphen (--) in the selected kinsoku set. Note: use only when a kinsoku set is in effect.
> Mixed **mojikumi**
>
> Mojikumi table. For details, see mojikumi table defaults. May return: MojikumiTable, String, or MojikumiTableDefaults enumerator.
> Boolean **rensuuji**
>
> When true, prevents line breaks inside numbers; when false, multi-digit numbers may break between digits.
> Boolean **rotateSingleByteCharacters**
>
> When true, rotates Roman characters in vertical text.
> LeadingModel **leadingModel**
>
> Point used to measure leading is measured from line to line.
> CharacterAlignment **characterAlignment**
>
> Alignment for small characters to the largest character in the line.
> Number **tsume**
>
> Amount of horizontal character compression.
> Number **leadingAki**
>
> Amount of space before each character.
> Number **trailingAki**
>
> Amount of space after each character.
> Number **characterRotation**
>
> Individual-character rotation angle, in degrees. Note: rotation proceeds counterclockwise.
> Number **jidori**
>
> Number of grid squares in which to arrange the text.
> Number **shataiMagnification**
>
> amount (as a percentage) of shatai obliquing to apply.
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
> Swatch (color, gradient, tint, or mixed ink) used for the fill of kenten characters. Can return: Swatch or String.
> Mixed **kentenStrokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the stroke of kenten characters. Can return: Swatch or String.
> Number **kentenTint**
>
> Fill tint percentage for kenten characters. (Range: 0 to 100)
> Number **kentenStrokeTint**
>
> Stroke tint percentage for kenten characters. (Range: 0 to 100)
> Number **kentenWeight**
>
> stroke weight (in points) of kenten characters.
> AdornmentOverprint **kentenOverprintFill**
>
> Overprinting method for the kenten fill.
> AdornmentOverprint **kentenOverprintStroke**
>
> Overprinting method for the kenten stroke.
> KentenCharacter **kentenKind**
>
> Style for kenten characters.
> Number **kentenPlacement**
>
> distance between kenten characters and their parent characters.
> KentenAlignment **kentenAlignment**
>
> Alignment for kenten characters relative to the parent characters.
> RubyKentenPosition **kentenPosition**
>
> kenten position relative to the parent character.
> Mixed **kentenFont**
>
> Font used for kenten characters. Can return: Font or String.
> Mixed **kentenFontStyle**
>
> Font style for kenten characters. Can return: String or NothingEnum enumerator.
> Number **kentenFontSize**
>
> size (in points) of kenten characters.
> Number **kentenXScale**
>
> Kenten character horizontal size as a percentage of original size.
> Number **kentenYScale**
>
> Kenten character vertical size as a percentage of original size.
> String **kentenCustomCharacter**
>
> Character used for kenten. Note: use only when kenten kind is custom.
> KentenCharacterSet **kentenCharacterSet**
>
> Character set used for the custom kenten character. Note: use only when kenten kind is custom.
> Mixed **rubyFill**
>
> Swatch (color, gradient, tint, or mixed ink) used for the fill of ruby characters. Can return: Swatch or String.
> Mixed **rubyStroke**
>
> Swatch (color, gradient, tint, or mixed ink) used for the stroke of ruby characters. Can return: Swatch or String.
> Number **rubyTint**
>
> Tint percentage for the ruby fill color. (Range: 0 to 100)
> Number **rubyWeight**
>
> stroke weight (in points) of ruby characters.
> AdornmentOverprint **rubyOverprintFill**
>
> Overprinting method for the ruby fill.
> AdornmentOverprint **rubyOverprintStroke**
>
> Overprinting method for the ruby stroke.
> Number **rubyStrokeTint**
>
> Stroke tint percentage for ruby characters.
> Mixed **rubyFont**
>
> Font used by ruby characters. Can return: Font or String.
> Mixed **rubyFontStyle**
>
> Font style for ruby characters. Can return: String or NothingEnum enumerator.
> Number **rubyFontSize**
>
> size (in points) of ruby characters.
> Boolean **rubyOpenTypePro**
>
> When true, uses OpenType Pro fonts for ruby.
> Number **rubyXScale**
>
> horizontal size of ruby characters, given as a percent of the original size.
> Number **rubyYScale**
>
> vertical size of ruby characters, given as a percent of the original size.
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
> Amount of horizontal space between ruby and parent characters.
> Number **rubyYOffset**
>
> Amount of vertical space between ruby and parent characters.
> RubyParentSpacing **rubyParentSpacing**
>
> Ruby spacing relative to the parent text.
> Boolean **rubyAutoAlign**
>
> When true, auto aligns ruby.
> Boolean **rubyOverhang**
>
> When true, limits ruby overhang to the specified amount. For amount selection, see ruby parent overhang amount.
> Boolean **rubyAutoScaling**
>
> When true, scales ruby automatically to the specified percent of parent text size. For percent selection, see ruby parent scaling percent.
> Number **rubyParentScalingPercent**
>
> Percentage scaling applied to parent text size to derive ruby text size.
> RubyOverhang **rubyParentOverhangAmount**
>
> Allowed ruby-character overhang beyond the parent text.
> Boolean **warichu**
>
> When true, enables warichu.
> Number **warichuSize**
>
> Percentage amount used to scale parent text size to determine warichu size.
> Number **warichuLines**
>
> Number of lines of warichu within a single normal line.
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
> When true, kerns with proportional CJK metrics in OpenType fonts.
> Boolean **otfHVKana**
>
> When true, switches between hiragana fonts with separate horizontal and vertical glyphs.
> Boolean **otfRomanItalics**
>
> When true, applies italics to half-width alphanumerics.
> Boolean **scaleAffectsLineHeight**
>
> When true, line changes size when characters are scaled.
> Boolean **cjkGridTracking**
>
> When true, applies grid tracking to non-Roman characters in CJK grids.
> AlternateGlyphForms **glyphForm**
>
> Glyph variant substituted for standard glyphs.
> Boolean **rubyFlag**
>
> When true, ruby is on.
> String **rubyString**
>
> Contents of the ruby string.
> Boolean **paragraphGyoudori**
>
> When true, gyoudori mode covers the entire paragraph; when false, it is applied line by line.
> Number **rubyAutoTcyDigits**
>
> Digit count included in auto tcy (tate-chuu-yoko) for ruby.
> Boolean **rubyAutoTcyIncludeRoman**
>
> When true, adds Roman characters to ruby auto tcy (tate-chuu-yoko).
> Boolean **rubyAutoTcyAutoScale**
>
> When true, auto-scales glyphs in ruby auto tcy (tate-chuu-yoko) so they fit one em.
> Boolean **treatIdeographicSpaceAsSpace**
>
> When true, ideographic spaces do not wrap to the next line like text characters.
> Boolean **allowArbitraryHyphenation**
>
> When true, words without a hyphenation-dictionary match may wrap at any character.
> ListType **bulletsAndNumberingListType**
>
> Type of list used for bullets and numbering.
> Mixed **bulletsCharacterStyle**
>
> Character style used for the text-after string. May return: CharacterStyle or String.
> Mixed **numberingCharacterStyle**
>
> Character style used for the number string. May return: CharacterStyle or String.
> String **numberingExpression**
>
> number string expression for numbering.
> String **bulletsTextAfter**
>
> text after string expression for bullets.
> Mixed **appliedNumberingList**
>
> list to be part of. Can return: NumberingList or String.
> Number **numberingLevel**
>
> Paragraph level.
> Mixed **numberingFormat**
>
> Options for numbering format. Can return: NumberingStyle enumerator or String.
> Boolean **numberingContinue**
>
> Whether numbering continues at this level.
> Number **numberingStartAt**
>
> Starting number used in a numbered list.
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
> Property used to set several properties in one operation.
