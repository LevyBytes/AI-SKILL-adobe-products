# Text Column (part 2) (cont. 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> Number **maximumLetterSpacing**
>
> Sets maximum letter spacing as a percentge of built-in font letter spacing. (Range: -100 to 500) for this setting. Note: usable only when text is justified.
> Number **desiredLetterSpacing**
>
> Sets desired letter spacing as a percentge of built-in font letter spacing. (Range: -100 to 500) for this setting.
> Number **minimumGlyphScaling**
>
> Sets minimum individual-character width as a percentage. (Range: 50 to 200) for this setting.
> Number **maximumGlyphScaling**
>
> Sets maximum individual-character width as a percentage. (Range: 50 to 200) for this setting.
> Number **desiredGlyphScaling**
>
> Sets desired individual-character width as a percentage. (Range: 50 to 200) for this setting.
> Boolean **ruleAbove**
>
> When true, places a rule above the paragraph.
> Boolean **ruleAboveOverprint**
>
> When true, the paragraph rule above overprints.
> Measurement Unit (Number or String)=any **ruleAboveLineWeight**
>
> Specifies the line weight of the rule above.
> Number **ruleAboveTint**
>
> Gives paragraph rule above tint as a percentage. (Range: 0 to 100) for this setting.
> Measurement Unit (Number or String)=any **ruleAboveOffset**
>
> Sets how far the paragraph rule above is offset from the first line's baseline in the paragraph.
> Measurement Unit (Number or String)=any **ruleAboveLeftIndent**
>
> Sets the paragraph rule above left-edge indent, using either text width or the first line's column width.
> Measurement Unit (Number or String)=any **ruleAboveRightIndent**
>
> Sets the paragraph rule above right-edge indent, using either text width or the first line's column width.
> RuleWidth **ruleAboveWidth**
>
> Specifies the basis (text width or column width) used for calculating the width for the paragraph rule above.
> Mixed **ruleAboveColor**
>
> Specifies the swatch (color, gradient, tint, or mixed ink) used for the paragraph rule above. Returns may be: Swatch or String.
> Mixed **ruleAboveGapColor**
>
> Specifies the swatch (color, gradient, tint, or mixed ink) used for the stroke gap for the paragraph rule above. Note: usable only when the paragraph rule above type is not solid. Returns may be: Swatch or String.
> Number **ruleAboveGapTint**
>
> Gives the tint (as a percentage) for the stroke gap color for the paragraph rule. (Range: 0 to 100) Note: usable only when the rule above type is not solid.
> Boolean **ruleAboveGapOverprint**
>
> When true, the stroke gap for the paragraph rule above overprints. Note: Valid only the rule above type is not solid.
> Mixed **ruleAboveType**
>
> Specifies the stroke type of the rule above the paragraph. Returns may be: StrokeStyle or String.
> Boolean **ruleBelow**
>
> When true, adds a rule beneath the paragraph.
> Measurement Unit (Number or String)=any **ruleBelowLineWeight**
>
> Specifies the line weight of the rule below.
> Number **ruleBelowTint**
>
> Gives paragraph rule below tint as a percentage. (Range: 0 to 100) for this setting.
> Measurement Unit (Number or String)=any **ruleBelowOffset**
>
> Sets how far the paragraph rule below is offset from the last line's baseline.
> Measurement Unit (Number or String)=any **ruleBelowLeftIndent**
>
> Sets the paragraph rule below left-edge indent, using either text width or the last line's column width.
> Measurement Unit (Number or String)=any **ruleBelowRightIndent**
>
> Sets the paragraph rule below right-edge indent, using either text width or the last line's column width.
> RuleWidth **ruleBelowWidth**
>
> Specifies the basis (text width or column width) used for calculating the width for the paragraph rule below.
> Mixed **ruleBelowColor**
>
> Specifies the swatch (color, gradient, tint, or mixed ink) used for the paragraph rule below. Returns may be: Swatch or String.
> Mixed **ruleBelowGapColor**
>
> Specifies the swatch (color, gradient, tint, or mixed ink) used for the stroke gap for the paragraph rule below. Note: usable only when the paragraph rule below type is not solid. Returns may be: Swatch or String.
> Number **ruleBelowGapTint**
>
> Gives the tint (as a percentage) for the stroke gap color for the paragraph rule below. (Range: 0 to 100) Note: usable only when the paragraph rule below type is not solid.
> Mixed **ruleBelowType**
>
> Specifies the stroke type of the rule below the paragraph. Returns may be: StrokeStyle or String.
> Boolean **hyphenateCapitalizedWords**
>
> When true, permits hyphenation of capitalized words.
> Boolean **hyphenation**
>
> When true, permits hyphenation.
> Number **hyphenateBeforeLast**
>
> Sets the minimum letters that must remain at a word end when a hyphen breaks it.
> Number **hyphenateAfterFirst**
>
> Sets the mininum letters required at a word beginning when a hyphen breaks it.
> Number **hyphenateWordsLongerThan**
>
> Sets the minimum number of letters a word must have to qualify for hyphenation.
> Number **hyphenateLadderLimit**
>
> Sets the maximum hyphen count across consecutive lines. Use zero to allow unlimited consecutive lines.
> Measurement Unit (Number or String)=any **hyphenationZone**
>
> Sets allowed white space at the line end before hyphenation begins for non-justified text. Note: applies when composer is single-line composer.
> Number **hyphenWeight**
>
> Sets the preference balance between better spacing and fewer hyphens; lower values use hyphens more often. (Range: 0 to 100) for this setting.
> CharacterStyle **dropCapStyle**
>
> Specifies the character style to apply to the drop cap. Also accepts: String.
> Mixed **contents**
>
> Specifies the contents for the text. Returns may be: String or SpecialCharacters enumerator.
> ParagraphStyle **appliedParagraphStyle**
>
> Specifies the paragraph style assigned to the text. Also accepts: String.
> CharacterStyle **appliedCharacterStyle**
>
> Specifies the character style assigned to the text. Also accepts: String.
> Measurement Unit (Number or String)=any **lastLineIndent**
>
> Specifies the amount to indent the last line in the paragraph.
> Boolean **hyphenateLastWord**
>
> When true, permits hyphenation in the last word in a paragraph. Note: usable only when hyphenation is true.
> Boolean **otfSlashedZero**
>
> When true, use a slashed zeroes in OpenType fonts.
> Boolean **otfHistorical**
>
> When true, use historical forms in OpenType fonts.
> Number **otfStylisticSets**
>
> Specifies the stylistic sets to use in OpenType fonts.
> Number **gradientFillLength**
>
> Gives the length (for a linear gradient) or radius (for a radial gradient) assigned to the fill for the text.
> Number **gradientFillAngle**
>
> Gives the angle of a linear gradient assigned to the fill for the text. (Range: -180 to 180)
> Number **gradientStrokeLength**
>
> Gives the length (for a linear gradient) or radius (for a radial gradient) assigned to the stroke for the text.
> Number **gradientStrokeAngle**
>
> Gives the linear-gradient angle assigned to the text stroke. (Range: -180 to 180) for this setting.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Gives, in [x, y] format, the page-coordinate starting point for a gradient assigned to the text fill.
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Gives the starting point (in page coordinates) of a gradient assigned to the stroke for the text, in the format [x, y].
> Boolean **keepWithPrevious**
>
> Controls whether a paragraph's first line stays with the previous paragraph's last line.
> Mixed **spanSplitColumnCount**
>
> Sets either how many columns the paragraph spans or how many split columns it uses. Returned value may be: Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
> SpanColumnTypeOptions **spanColumnType**
>
> Specifies single column, span columns, or split columns behavior for the paragraph.
> Measurement Unit (Number or String)=any **splitColumnInsideGutter**
>
> Specifies the inside gutter used when the paragraph splits columns.
> Measurement Unit (Number or String)=any **splitColumnOutsideGutter**
>
> Specifies the outside gutter used when the paragraph splits columns.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceBefore**
>
> Sets minimum spacing before a span or split column.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceAfter**
>
> Specifies the minimum space after a span or a split column
> Boolean **ruleBelowOverprint**
>
> When true, the rule below overprints.
> Boolean **ruleBelowGapOverprint**
>
> When true, the gap color of the rule below overprints.
> Number **dropcapDetail**
>
> Provides drop-cap details from glyph outlines: 1 = left side bearing; 2 = descenders; Japanese frame grid uses 0x100,0x200,0x400.
> Boolean **hyphenateAcrossColumns**
>
> When true, permits the last word in a text column to be hyphenated.
> Boolean **keepRuleAboveInFrame**
>
> When true, keeps the rule above inside the frame bounds. Note: usable only when rule above is true.
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
> Specifies the OpenType positional form.
> ParagraphDirectionOptions **paragraphDirection**
>
> Provides paragraph direction.
> ParagraphJustificationOptions **paragraphJustification**
>
> Provides paragraph justification.
> Number **miterLimit**
>
> Sets the miter limit ratio between stroke width and miter length before a pointed miter join changes to a squared-off bevel join.
> TextStrokeAlign **strokeAlignment**
>
> Gives the stroke alignment assigned to the text.
> OutlineJoin **endJoin**
>
> Gives the stroke join type assigned to text characters.
> Boolean **otfOverlapSwash**
>
> When true, overlapping swash forms are used in OpenType fonts.
> Boolean **otfStylisticAlternate**
>
> When true, stylistic alternate forms are used in OpenType fonts.
> Boolean **otfJustificationAlternate**
>
> When true, alternate justification forms are used in OpenType fonts.
> Boolean **otfStretchedAlternate**
>
> When true, stretched alternate forms are used in OpenType fonts.
> CharacterDirectionOptions **characterDirection**
>
> Specifies the character direction.
> CharacterDirectionOptions **keyboardDirection**
>
> Specifies the character keyboard direction.
> DigitsTypeOptions **digitsType**
>
> Specifies the digits type.
> KashidasOptions **kashidas**
>
> Controls Kashidas usage for justification.
> DiacriticPositionOptions **diacriticPosition**
>
> Sets the position for diacriticical characters.
> Number **xOffsetDiacritic**
>
> Gives the x (horizontal) offset for diacritic adjustment.
> Number **yOffsetDiacritic**
>
> Gives the y (vertical) offset for diacritic adjustment.
> Condition **appliedConditions**
>
> Lists the applied conditions.
> Mixed **opentypeFeatures**
>
> Provides OpenType features. Returns may be: Array of Array of 2 Strings or Long Integers.
> Boolean **gridAlignFirstLineOnly**
>
> When true, only the first line aligns to the frame grid or baseline grid. When false, every line aligns to the grid.
> GridAlignment **gridAlignment**
>
> Sets alignment against the frame grid or baseline grid.
> Number **gridGyoudori**
>
> Gives the manual gyoudori setting.
> Number **autoTcy**
>
> Sets the half-width character count threshold at or below which characters automatically run horizontally in vertical text.
> Boolean **autoTcyIncludeRoman**
>
> When true, auto tcy includes Roman characters.
> Mixed **kinsokuSet**
>
> Specifies the kinsoku set used to determine legitimate line breaks. Returns may be: KinsokuTable, KinsokuSet enumerator or String.
> KinsokuType **kinsokuType**
>
> Selects the kinsoku-processing type that prevents kinsoku characters from starting or ending a line. Note: usable only when a kinsoku set is defined.
> KinsokuHangTypes **kinsokuHangType**
>
> Selects the hanging punctuation type to allow. Note: usable only when a kinsoku set is in effect.
> Boolean **bunriKinshi**
>
> When true, the double period (..), ellipse (...), and double hyphen (--) are added to the selected kinsoku set. Note: usable only when a kinsoku set is in effect.
> Mixed **mojikumi**
>
> Specifies the mojikumi table. For related details, see mojikumi table defaults. Returns may be: MojikumiTable, String or MojikumiTableDefaults enumerator.
> Boolean **rensuuji**
>
> When true, numbers cannot break across lines. When false, multi-digit numbers may break between digits.
> Boolean **rotateSingleByteCharacters**
>
> When true, Roman characters rotate in vertical text.
> LeadingModel **leadingModel**
>
> Sets the reference point used to measure leading from one line to another.
> CharacterAlignment **characterAlignment**
>
> Sets how small characters align to the largest character on the line.
> Number **tsume**
>
> Gives the horizontal character compression amount.
> Number **leadingAki**
>
> Gives the space before each character.
> Number **trailingAki**
>
> Gives the space after each character.
> Number **characterRotation**
>
> Gives the rotation angle (in degrees) for individual characters. Note: rotation is counterclockwise.
> Number **jidori**
>
> Sets how many grid squares are used to arrange the text.
> Number **shataiMagnification**
>
> Gives the shatai obliquing amount (as a percentage) to apply.
> Number **shataiDegreeAngle**
>
> Gives the shatai lens angle (in degrees).
> Boolean **shataiAdjustRotation**
>
> When true, shatai rotation is applied.
> Boolean **shataiAdjustTsume**
>
> When true, shatai tsume is adjusted.
> Boolean **tatechuyoko**
>
> When true, the character becomes horizontal in vertical text.
> Number **tatechuyokoXOffset**
>
> Gives the horizontal offset for horizontal characters in vertical text.
> Number **tatechuyokoYOffset**
>
> Gives the vertical offset for horizontal characters in vertical text.
> Mixed **kentenFillColor**
>
> Specifies the swatch (color, gradient, tint, or mixed ink) used for the fill of kenten characters. Returns may be: Swatch or String.
> Mixed **kentenStrokeColor**
>
> Specifies the swatch (color, gradient, tint, or mixed ink) used for the stroke of kenten characters. Returns may be: Swatch or String.
> Number **kentenTint**
>
> Gives the fill tint (as a percentage) for kenten characters. (Range: 0 to 100)
> Number **kentenStrokeTint**
>
> Gives the stroke tint (as a percentage) for kenten characters. (Range: 0 to 100)
> Number **kentenWeight**
>
> Specifies the stroke weight (in points) of kenten characters.
> AdornmentOverprint **kentenOverprintFill**
>
> Specifies how the kenten fill overprints.
> AdornmentOverprint **kentenOverprintStroke**
>
> Specifies how the kenten stroke overprints.
> KentenCharacter **kentenKind**
>
> Specifies the kenten character style.
> Number **kentenPlacement**
>
> Sets the distance between kenten characters and their parent characters.
> KentenAlignment **kentenAlignment**
>
> Sets kenten-character alignment relative to the parent characters.
> RubyKentenPosition **kentenPosition**
>
> Gives the kenten position relative to the parent character.
> Mixed **kentenFont**
>
> Selects the font used for kenten characters. Returns may be: Font or String.
> Mixed **kentenFontStyle**
>
> Specifies the kenten character font style. Returns may be: String or NothingEnum enumerator.
> Number **kentenFontSize**
>
> Gives the kenten character size (in points).
> Number **kentenXScale**
>
> Gives kenten-character horizontal size as a percent of the original size.
> Number **kentenYScale**
>
> Gives kenten-character vertical size as a percent of the original size.
> String **kentenCustomCharacter**
>
> Specifies the character used for kenten. Note: usable only when kenten kind is custom.
> KentenCharacterSet **kentenCharacterSet**
>
> Specifies the character set for the custom kenten character. Note: usable only when kenten kind is custom.
> Mixed **rubyFill**
>
> Specifies the swatch (color, gradient, tint, or mixed ink) used for the fill of ruby characters. Returns may be: Swatch or String.
> Mixed **rubyStroke**
>
> Specifies the swatch (color, gradient, tint, or mixed ink) used for the stroke of ruby characters. Returns may be: Swatch or String.
> Number **rubyTint**
>
> Gives the tint (as a percentage) for the ruby fill color. (Range: 0 to 100)
> Number **rubyWeight**
>
> Specifies the stroke weight (in points) of ruby characters.
> AdornmentOverprint **rubyOverprintFill**
>
> Specifies the method of overprinting the ruby fill.
> AdornmentOverprint **rubyOverprintStroke**
>
> Specifies the method of overprinting the ruby stroke.
> Number **rubyStrokeTint**
>
> Gives the stroke tint (as a percentage) for ruby characters.
> Mixed **rubyFont**
>
> Specifies the font assigned to ruby characters. Returns may be: Font or String.
> Mixed **rubyFontStyle**
>
> Specifies the ruby character font style. Returns may be: String or NothingEnum enumerator.
> Number **rubyFontSize**
>
> Gives the ruby character size (in points).
> Boolean **rubyOpenTypePro**
>
> When true, ruby uses OpenType Pro fonts.
> Number **rubyXScale**
>
> Gives ruby-character horizontal size, expressed as a percent of the original size.
> Number **rubyYScale**
>
> Gives ruby-character vertical size, expressed as a percent of the original size.
> RubyTypes **rubyType**
>
> Specifies the ruby type.
> RubyAlignments **rubyAlignment**
>
> Sets the ruby alignment.
> RubyKentenPosition **rubyPosition**
>
> Gives the ruby-character position relative to the parent text.
> Number **rubyXOffset**
>
> Sets the horizontal space between ruby and parent characters.
> Number **rubyYOffset**
>
> Sets the vertical space between ruby and parent characters.
> RubyParentSpacing **rubyParentSpacing**
>
> Sets ruby spacing relative to the parent text.
> Boolean **rubyAutoAlign**
>
> When true, ruby is auto aligned.
> Boolean **rubyOverhang**
>
> When true, ruby overhang is constrained to the specified amount. For amount details, see ruby parent overhang amount.
> Boolean **rubyAutoScaling**
>
> When true, ruby scales automatically to the specified percent of parent text size. For percent details, see ruby parent scaling percent.
> Number **rubyParentScalingPercent**
>
> Sets the amount (as a percentage) used to scale parent text size when deriving ruby text size.
> RubyOverhang **rubyParentOverhangAmount**
>
> Sets how far ruby characters may overhang the parent text.
> Boolean **warichu**
>
> When true, warichu is enabled.
> Number **warichuSize**
>
> Sets the amount (as a percentage) used to scale parent text size when deriving warichu size.
> Number **warichuLines**
>
> Sets how many warichu lines fit inside one normal line.
> Number **warichuLineSpacing**
>
> Sets the gap between lines of warichu characters.
> WarichuAlignment **warichuAlignment**
>
> Sets the warichu alignment.
> Number **warichuCharsAfterBreak**
>
> Sets the minimum characters permitted after a line break.
> Number **warichuCharsBeforeBreak**
>
> Sets the minimum characters permitted before a line break.
> Boolean **otfProportionalMetrics**
>
> When true, kerning follows proportional CJK metrics in OpenType fonts.
> Boolean **otfHVKana**
>
> When true, hiragana fonts switch to glyph variants for horizontal and vertical text.
> Boolean **otfRomanItalics**
>
> When true, italics are applied to half-width alphanumerics.
> Boolean **scaleAffectsLineHeight**
>
> When true, line size changes as characters are scaled.
> Boolean **cjkGridTracking**
>
> When true, grid tracking tracks non-Roman characters in CJK grids.
> AlternateGlyphForms **glyphForm**
>
> Selects the glyph variant substituted for standard glyphs.
> Boolean **rubyFlag**
>
> When true, ruby is on.
> String **rubyString**
>
> Gives the ruby string contents.
> Boolean **paragraphGyoudori**
>
> When true, gyoudori mode applies to the whole paragraph. When false, gyoudori mode applies line by line within the paragraph.
> Number **rubyAutoTcyDigits**
>
> Sets how many digits are included in auto tcy (tate-chuu-yoko) in ruby.
> Boolean **rubyAutoTcyIncludeRoman**
>
> When true, Roman characters are included in auto tcy (tate-chuu-yoko) in ruby.
> Boolean **rubyAutoTcyAutoScale**
>
> When true, glyphs in ruby auto tcy (tate-chuu-yoko) scale automatically to fit one em.
> Boolean **treatIdeographicSpaceAsSpace**
>
> When true, ideographic spaces do not wrap to the next line like text characters.
> Boolean **allowArbitraryHyphenation**
>
> When true, words without a hyphenation-dictionary association can break to the next line at any character.
> ListType **bulletsAndNumberingListType**
>
> Specifies the bullets and numbering list type.
> Mixed **bulletsCharacterStyle**
>
> Specifies the character style used for the text after string. Returns may be: CharacterStyle or String.
> Mixed **numberingCharacterStyle**
>
> Specifies the character style used for the number string. Returns may be: CharacterStyle or String.
> String **numberingExpression**
>
> Gives the number-string expression for numbering.
> String **bulletsTextAfter**
>
> Gives the text-after-string expression for bullets.
> Mixed **appliedNumberingList**
>
> Specifies the list that this belongs to. Returns may be: NumberingList or String.
> Number **numberingLevel**
>
> Gives the paragraph level.
> Mixed **numberingFormat**
>
> Provides numbering format options. Returns may be: NumberingStyle enumerator or String.
> Boolean **numberingContinue**
>
> Controls whether numbering continues at this level.
> Number **numberingStartAt**
>
> Sets the starting number for a numbered list.
> Boolean **numberingApplyRestartPolicy**
>
> When true, the numbering restart policy is applied.
> ListAlignment **bulletsAlignment**
>
> Sets the bullet character alignment.
> ListAlignment **numberingAlignment**
>
> Sets the number alignment.
> Object **properties**
>
> Allows several properties to be set at the same time.
