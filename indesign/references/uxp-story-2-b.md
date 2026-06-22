# Story (part 2) (cont. 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Story — Instance

> RuleWidth **ruleAboveWidth**
>

> Width basis for the paragraph rule above, using either text width or column width.
> Mixed **ruleAboveColor**
>
> Paragraph rule above swatch, using color, gradient, tint, or mixed ink. Can return: Swatch or String.
> Mixed **ruleAboveGapColor**
>
> Paragraph rule-above stroke-gap swatch. Value may be color, gradient, tint, or mixed ink. Note: Use only with non-solid paragraph rule above types. Can return: Swatch or String.
> Number **ruleAboveGapTint**
>
> Paragraph rule stroke-gap tint percentage. (Range: 0 to 100) Note: Use only with non-solid rule above types.
> Boolean **ruleAboveGapOverprint**
>
> True makes the paragraph rule above stroke gap overprint. Note: Use only with non-solid rule above types.
> Mixed **ruleAboveType**
>
> The rule above the paragraph. Can return: strokestyle or string stroke type.
> Boolean **ruleBelow**
>
> True adds a paragraph rule below.
> Measurement Unit (Number or String)=any **ruleBelowLineWeight**
>
> The rule below line weight.
> Number **ruleBelowTint**
>
> Paragraph rule-below tint percentage. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **ruleBelowOffset**
>
> Offset amount for the paragraph rule below, measured from the baseline of the paragraph's last line.
> Measurement Unit (Number or String)=any **ruleBelowLeftIndent**
>
> Left-edge indent for the paragraph rule below, based on either the last line's text width or column width.
> Measurement Unit (Number or String)=any **ruleBelowRightIndent**
>
> Right-edge indent for the paragraph rule below, based on either the last line's text width or column width.
> RuleWidth **ruleBelowWidth**
>
> Width basis for the paragraph rule below, using either text width or column width.
> Mixed **ruleBelowColor**
>
> Paragraph rule below swatch, using color, gradient, tint, or mixed ink. Can return: Swatch or String.
> Mixed **ruleBelowGapColor**
>
> Paragraph rule-below stroke-gap swatch. Value may be color, gradient, tint, or mixed ink. Note: Use only with non-solid paragraph rule below types. Can return: Swatch or String.
> Number **ruleBelowGapTint**
>
> Paragraph rule-below stroke-gap tint percentage. (Range: 0 to 100) Note: Use only with non-solid paragraph rule below types.
> Mixed **ruleBelowType**
>
> Stroke type for the paragraph rule below. Can return: StrokeStyle or String.
> Boolean **hyphenateCapitalizedWords**
>
> True enables this behavior: permits hyphenation of capitalized words.
> Boolean **hyphenation**
>
> True enables this behavior: permits hyphenation.
> Number **hyphenateBeforeLast**
>
> Minimum trailing letters before a word may break at a hyphen.
> Number **hyphenateAfterFirst**
>
> Minimum leading letters before a word may break at a hyphen.
> Number **hyphenateWordsLongerThan**
>
> Letters a word must have in order to qualify for hyphenation minimum number.
> Number **hyphenateLadderLimit**
>
> Maximum hyphen count permitted on consecutive lines. Use zero to allow unlimited consecutive lines.
> Measurement Unit (Number or String)=any **hyphenationZone**
>
> White-space allowance at the end of a non-justified line before hyphenation starts. Note: Valid when composer is single-line composer.
> Number **hyphenWeight**
>
> Preference weight between better spacing and fewer hyphens. Lower values make hyphens more likely. (Range: 0 to 100)
> CharacterStyle **dropCapStyle**
>
> Drop-cap character style. Can also accept: String.
> Mixed **contents**
>
> Contents for the text. Can return: String or SpecialCharacters enumerator.
> ParagraphStyle **appliedParagraphStyle**
>
> Paragraph style assigned to the text. Can also accept: String.
> CharacterStyle **appliedCharacterStyle**
>
> Text character style. Can also accept: String.
> Measurement Unit (Number or String)=any **lastLineIndent**
>
> Amount to indent the last line in the paragraph.
> Boolean **hyphenateLastWord**
>
> True permits hyphenating the paragraph's final word. Note: Requires hyphenation to be true.
> Boolean **otfSlashedZero**
>
> True enables this behavior: enables a slashed zeroes in OpenType fonts.
> Boolean **otfHistorical**
>
> True enables this behavior: enables historical forms in OpenType fonts.
> Number **otfStylisticSets**
>
> Stylistic sets to use in opentype fonts.
> Number **gradientFillLength**
>
> For the text fill gradient, linear length or radial radius.
> Number **gradientFillAngle**
>
> Linear-gradient angle for the text fill. (Range: -180 to 180)
> Number **gradientStrokeLength**
>
> For the text stroke gradient, linear length or radial radius.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle for the text stroke. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient on the text fill; format is [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Starting point, in page coordinates, for a gradient on the text stroke; format is [x, y].
> Boolean **keepWithPrevious**
>
> Whether the paragraph's first line stays with the previous paragraph's last line.
> Mixed **spanSplitColumnCount**
>
> Paragraph span/split column count. Returns: Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
> SpanColumnTypeOptions **spanColumnType**
>
> Paragraph layout mode: single-column, spanning, or split-column.
> Measurement Unit (Number or String)=any **splitColumnInsideGutter**
>
> Inside gutter for split-column paragraphs.
> Measurement Unit (Number or String)=any **splitColumnOutsideGutter**
>
> Outside gutter for split-column paragraphs.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceBefore**
>
> Minimum preceding space for span or split-column paragraphs.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceAfter**
>
> Minimum following space for span or split-column paragraphs.
> Boolean **ruleBelowOverprint**
>
> True enables this behavior: the rule below will overprint.
> Boolean **ruleBelowGapOverprint**
>
> True enables this behavior: the gap color of the rule below will overprint.
> Number **dropcapDetail**
>
> Drop-cap detail flags from glyph outlines. 1 = left side bearing. 2 = descenders. Japanese frame grid uses 0x100,0x200,0x400.
> Boolean **hyphenateAcrossColumns**
>
> True enables this behavior: permits the last word in a text column to be hyphenated.
> Boolean **keepRuleAboveInFrame**
>
> True holds the paragraph rule above within frame bounds. Note: Valid only when rule above is true.
> Boolean **ignoreEdgeAlignment**
>
> True enables this behavior: ignores optical edge alignment for the paragraph.
> Boolean **otfMark**
>
> True enables this behavior: enables mark positioning in OpenType fonts.
> Boolean **otfLocale**
>
> True enables this behavior: enables localized forms in OpenType fonts.
> PositionalForms **positionalForm**
>
> Positional form for OpenType text.
> ParagraphDirectionOptions **paragraphDirection**
>
> Paragraph direction.
> ParagraphJustificationOptions **paragraphJustification**
>
> Paragraph justification.
> Number **miterLimit**
>
> Ratio limit between stroke width and miter length before a pointed miter join changes to a squared-off bevel join.
> TextStrokeAlign **strokeAlignment**
>
> Stroke alignment assigned to the text.
> OutlineJoin **endJoin**
>
> Stroke join type assigned to the characters of the text.
> Boolean **otfOverlapSwash**
>
> True enables this behavior: enables overlapping swash forms in OpenType fonts.
> Boolean **otfStylisticAlternate**
>
> True enables this behavior: enables stylistic alternate forms in OpenType fonts.
> Boolean **otfJustificationAlternate**
>
> True enables this behavior: enables alternate justification forms in OpenType fonts.
> Boolean **otfStretchedAlternate**
>
> True enables this behavior: enables stretched alternate forms in OpenType fonts.
> CharacterDirectionOptions **characterDirection**
>
> Character direction.
> CharacterDirectionOptions **keyboardDirection**
>
> Character keyboard direction.
> DigitsTypeOptions **digitsType**
>
> Digits type.
> KashidasOptions **kashidas**
>
> Kashidas usage for justification.
> DiacriticPositionOptions **diacriticPosition**
>
> Diacriticical character position.
> Number **xOffsetDiacritic**
>
> Horizontal x offset for diacritic adjustment.
> Number **yOffsetDiacritic**
>
> Vertical y offset for diacritic adjustment.
> Mixed **tabList**
>
> Paragraph tab stops. Can return: Array of Arrays of Property Name/Value Pairs.
> String **idmlComponentName**
>
> IDML component name for the Story.
> Boolean **trackChanges**
>
> True enables this behavior: track changes is turned on.
> String **storyTitle**
>
> Title assigned to this InCopy story.
> NamedGrid **appliedNamedGrid**
>
> Named grid currently used.
> Mixed **opentypeFeatures**
>
> OpenType feature data. Returns: Array of Array of 2 Strings or Long Integers.
> Boolean **gridAlignFirstLineOnly**
>
> True limits frame-grid or baseline-grid alignment to the first line; false aligns every line to the grid.
> GridAlignment **gridAlignment**
>
> Alignment to the frame grid or baseline grid.
> Number **gridGyoudori**
>
> Manual gyoudori setting.
> Number **autoTcy**
>
> Maximum half-width character count that automatically runs horizontally in vertical text.
> Boolean **autoTcyIncludeRoman**
>
> True enables this behavior: auto tcy includes Roman characters.
> Mixed **kinsokuSet**
>
> Kinsoku set used to decide legal line breaks. Can return: KinsokuTable, KinsokuSet enumerator or String.
> KinsokuType **kinsokuType**
>
> Mode for kinsoku processing, preventing kinsoku characters at line starts or ends. Note: Valid only when a kinsoku set is defined.
> KinsokuHangTypes **kinsokuHangType**
>
> Allowed hanging-punctuation mode. Note: Valid only when a kinsoku set is in effect.
> Boolean **bunriKinshi**
>
> True extends the selected kinsoku set with double period (..), ellipse (...), and double hyphen (--). Note: Valid only when a kinsoku set is in effect.
> Mixed **mojikumi**
>
> Mojikumi table. See mojikumi table defaults for details. Can return: MojikumiTable, String or MojikumiTableDefaults enumerator.
> Boolean **rensuuji**
>
> True prevents numeric line breaks; false permits breaks between digits in multi-digit numbers.
> Boolean **rotateSingleByteCharacters**
>
> True enables this behavior: rotates Roman characters in vertical text.
> LeadingModel **leadingModel**
>
> Reference point used when measuring leading from one line to the next.
> CharacterAlignment **characterAlignment**
>
> Alignment of smaller characters against the largest character on the line.
> Number **tsume**
>
> Horizontal character compression amount.
> Number **leadingAki**
>
> Space before each character amount.
> Number **trailingAki**
>
> Space after each character amount.
> Number **characterRotation**
>
> Rotation angle, in degrees, for individual characters. Note: The rotation is counterclockwise.
> Number **jidori**
>
> Count of grid squares in which to arrange the text.
> Number **shataiMagnification**
>
> Percentage amount for shatai obliquing to apply.
> Number **shataiDegreeAngle**
>
> Shatai lens angle (in degrees).
> Boolean **shataiAdjustRotation**
>
> True enables this behavior: applies shatai rotation.
> Boolean **shataiAdjustTsume**
>
> True enables this behavior: adjusts shatai tsume.
> Boolean **tatechuyoko**
>
> True enables this behavior: makes the character horizontal in vertical text.
> Number **tatechuyokoXOffset**
>
> Horizontal offset for horizontal characters in vertical text.
> Number **tatechuyokoYOffset**
>
> Vertical offset for horizontal characters in vertical text.
> Mixed **kentenFillColor**
>
> Swatch assigned to the fill of kenten characters, using color, gradient, tint, or mixed ink. Can return: Swatch or String.
> Mixed **kentenStrokeColor**
>
> Swatch assigned to the stroke of kenten characters, using color, gradient, tint, or mixed ink. Can return: Swatch or String.
> Number **kentenTint**
>
> Fill tint percentage for kenten characters. (Range: 0 to 100)
> Number **kentenStrokeTint**
>
> Stroke tint percentage for kenten characters. (Range: 0 to 100)
> Number **kentenWeight**
>
> Kenten characters stroke weight (in points).
> AdornmentOverprint **kentenOverprintFill**
>
> Overprinting the kenten fill method.
> AdornmentOverprint **kentenOverprintStroke**
>
> Overprinting the kenten stroke method.
> KentenCharacter **kentenKind**
>
> Kenten characters style.
> Number **kentenPlacement**
>
> Distance between kenten characters and their parent characters.
> KentenAlignment **kentenAlignment**
>
> Kenten characters relative to the parent characters alignment.
> RubyKentenPosition **kentenPosition**
>
> Kenten position relative to the parent character.
> Mixed **kentenFont**
>
> Kenten-character font. Can return: Font or String.
> Mixed **kentenFontStyle**
>
> Kenten characters. Can return: string or nothingenum enumerator font style.
> Number **kentenFontSize**
>
> Kenten characters size (in points).
> Number **kentenXScale**
>
> Horizontal size of kenten characters as a percent of original size.
> Number **kentenYScale**
>
> Vertical size of kenten charachers as a percent of original size.
> String **kentenCustomCharacter**
>
> Custom kenten character. Note: Valid only when kenten kind is custom.
> KentenCharacterSet **kentenCharacterSet**
>
> Character set for custom kenten characters. Note: Valid only when kenten kind is custom.
> Mixed **rubyFill**
>
> Swatch assigned to the fill of ruby characters, using color, gradient, tint, or mixed ink. Can return: Swatch or String.
> Mixed **rubyStroke**
>
> Swatch assigned to the stroke of ruby characters, using color, gradient, tint, or mixed ink. Can return: Swatch or String.
> Number **rubyTint**
>
> Tint percentage for the ruby fill color. (Range: 0 to 100)
> Number **rubyWeight**
>
> Ruby characters stroke weight (in points).
> AdornmentOverprint **rubyOverprintFill**
>
> Overprinting the ruby fill method.
> AdornmentOverprint **rubyOverprintStroke**
>
> Overprinting the ruby stroke method.
> Number **rubyStrokeTint**
>
> Stroke tint percentage for ruby characters.
> Mixed **rubyFont**
>
> Font assigned to ruby characters. Can return: Font or String.
> Mixed **rubyFontStyle**
>
> Ruby characters. Can return: string or nothingenum enumerator font style.
> Number **rubyFontSize**
>
> Ruby characters size (in points).
> Boolean **rubyOpenTypePro**
>
> True enables this behavior: enables OpenType Pro fonts for ruby.
> Number **rubyXScale**
>
> Horizontal size of ruby characters as a percent of original size.
> Number **rubyYScale**
>
> Vertical size of ruby characters as a percent of original size.
> RubyTypes **rubyType**
>
> Ruby type.
> RubyAlignments **rubyAlignment**
>
> Ruby alignment.
> RubyKentenPosition **rubyPosition**
>
> Ruby characters relative to the parent text position.
> Number **rubyXOffset**
>
> Horizontal space between ruby and parent characters amount.
> Number **rubyYOffset**
>
> Vertical space between ruby and parent characters amount.
> RubyParentSpacing **rubyParentSpacing**
>
> Ruby spacing relative to the parent text.
> Boolean **rubyAutoAlign**
>
> True enables this behavior: auto aligns ruby.
> Boolean **rubyOverhang**
>
> True constrains ruby overhang to a specified amount. For amount details, see ruby parent overhang amount.
> Boolean **rubyAutoScaling**
>
> True auto-scales ruby to a chosen percentage of parent text size. For percentage details, see ruby parent scaling percent.
> Number **rubyParentScalingPercent**
>
> Percentage used to scale parent text size when determining ruby text size.
> RubyOverhang **rubyParentOverhangAmount**
>
> Amount by which ruby characters can overhang the parent text.
> Boolean **warichu**
>
> True enables this behavior: enables warichu.
> Number **warichuSize**
>
> Percentage amount used to scale parent text size to determine warichu size.
> Number **warichuLines**
>
> Count of lines of warichu within a single normal line.
> Number **warichuLineSpacing**
>
> Warichu characters gap between lines.
> WarichuAlignment **warichuAlignment**
>
> Warichu alignment.
> Number **warichuCharsAfterBreak**
>
> Characters allowed after a line break minimum number.
> Number **warichuCharsBeforeBreak**
>
> Characters allowed before a line break minimum number.
> Boolean **otfProportionalMetrics**
>
> True enables this behavior: kerns according to proportional CJK metrics in OpenType fonts.
> Boolean **otfHVKana**
>
> True switches hiragana fonts whose horizontal and vertical glyphs differ.
> Boolean **otfRomanItalics**
>
> True enables this behavior: applies italics to half-width alphanumerics.
> Boolean **scaleAffectsLineHeight**
>
> True enables this behavior: the line changes size when characters are scaled.
> Boolean **cjkGridTracking**
>
> True enables this behavior: enables grid tracking to track non-Roman characters in CJK grids.
> AlternateGlyphForms **glyphForm**
>
> Glyph variant to substitute for standard glyphs.
> Boolean **rubyFlag**
>
> True enables this behavior: ruby is on.
> String **rubyString**
>
> Ruby string contents.
> Boolean **paragraphGyoudori**
>
> True applies gyoudori mode to the full paragraph; false applies it line by line.
> Number **rubyAutoTcyDigits**
>
> Digit count included in ruby auto tcy (tate-chuu-yoko).
> Boolean **rubyAutoTcyIncludeRoman**
>
> True includes Roman characters in ruby auto tcy (tate-chuu-yoko).
> Boolean **rubyAutoTcyAutoScale**
>
> True auto-scales ruby auto tcy (tate-chuu-yoko) glyphs to fit one em.
> Boolean **treatIdeographicSpaceAsSpace**
>
> True makes ideographic spaces behave as spaces instead of wrapping like text characters.
> Boolean **allowArbitraryHyphenation**
>
> True allows dictionary-unmatched words to break on any character when moving to the next line.
> ListType **bulletsAndNumberingListType**
>
> List type for bullets and numbering.
> Mixed **bulletsCharacterStyle**
>
> Character style for text after string. Can return: CharacterStyle or String.
> Mixed **numberingCharacterStyle**
>
> Character style for the number string. Can return: CharacterStyle or String.
> String **numberingExpression**
>
> Number string expression for numbering.
> String **bulletsTextAfter**
>
> Text after string expression for bullets.
> Mixed **appliedNumberingList**
>
> List to be part of. Can return: numberinglist or string.
> Number **numberingLevel**
>
> Paragraph level.
> Mixed **numberingFormat**
>
> Format selection for numbering. Returns: NumberingStyle enumerator or String.
> Boolean **numberingContinue**
>
> Continue-numbering flag for this level.
> Number **numberingStartAt**
>
> Starting number for a numbered list.
> Boolean **numberingApplyRestartPolicy**
>
> True enables this behavior: apply the numbering restart policy.
> ListAlignment **bulletsAlignment**
>
> The bullet character alignment.
> ListAlignment **numberingAlignment**
>
> The number alignment.
> String **label**
>
> Settable string property.
> String **name**
>
> Story name; this aliases the Story label property.
> Object **properties**
>
> Property object for assigning several settings in one operation.

## See also

- [Characters](uxp-characters.md)
