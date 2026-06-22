# Text Style Range (part 2) (cont. 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> Number **ruleAboveTint**
>
> The paragraph rule above tint (as a percentage). (Range: 0 to 100)
> Measurement Unit (Number or String)=any **ruleAboveOffset**
>
> paragraph / of the first line the / rule above from the baseline / amount to offset the paragraph.
> Measurement Unit (Number or String)=any **ruleAboveLeftIndent**
>
> in the paragraph / width of the first line / text width or the column / above (based on either the / edge of the paragraph rule / distance to indent the left.
> Measurement Unit (Number or String)=any **ruleAboveRightIndent**
>
> in the paragraph / width of the first line / text width or the column / above (based on either the / edge of the paragraph rule / distance to indent the right.
> RuleWidth **ruleAboveWidth**
>
> Basis for calculating width of the paragraph rule above; choices are text width or column width.
> Mixed **ruleAboveColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the paragraph rule above. Can return: Swatch or String.
> Mixed **ruleAboveGapColor**
>
> rule above / stroke gap of the paragraph / mixed ink) applied to the / swatch (color, gradient, tint, or. Can return: Swatch or String. Note: applies only when the paragraph rule above type is not solid.
> Number **ruleAboveGapTint**
>
> to 100) / the paragraph rule. (Range: 0 / the stroke gap color of / tint (as a percentage) of. Note: applies only when the rule above type is not solid.
> Boolean **ruleAboveGapOverprint**
>
> will overprint / of the paragraph rule above / If true, the stroke gap. Note: applies only when the rule above type is not solid.
> Mixed **ruleAboveType**
>
> The rule above the paragraph stroke type. Can return: StrokeStyle or String.
> Boolean **ruleBelow**
>
> True setting: adds a rule below the paragraph.
> Measurement Unit (Number or String)=any **ruleBelowLineWeight**
>
> The rule below line weight.
> Number **ruleBelowTint**
>
> Paragraph rule-below tint percentage. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **ruleBelowOffset**
>
> Distance between the rule below and the paragraph last-line baseline.
> Measurement Unit (Number or String)=any **ruleBelowLeftIndent**
>
> in the paragraph / width of the last line / text width or the column / below (based on either the / edge of the paragraph rule / distance to indent the left.
> Measurement Unit (Number or String)=any **ruleBelowRightIndent**
>
> in the paragraph / width of the last line / text width or the column / below (based on either the / edge of the paragraph rule / distance to indent the right.
> RuleWidth **ruleBelowWidth**
>
> Basis for calculating rule-below width; choices are text width or column width.
> Mixed **ruleBelowColor**
>
> Can return: Swatch or String. Swatch for the rule below, covering color, gradient, tint, or mixed ink.
> Mixed **ruleBelowGapColor**
>
> Can return: Swatch or String. Swatch for the rule-below stroke gap, covering color, gradient, tint, or mixed ink. Note: applies only when the paragraph rule below type is not solid.
> Number **ruleBelowGapTint**
>
> Rule-below stroke-gap tint percentage. (Range: 0 to 100) Note: applies only when the paragraph rule below type is not solid.
> Mixed **ruleBelowType**
>
> Can return: StrokeStyle or String. Stroke type for the rule below the paragraph.
> Boolean **hyphenateCapitalizedWords**
>
> True setting: permits hyphenation of capitalized words.
> Boolean **hyphenation**
>
> True setting: permits hyphenation.
> Number **hyphenateBeforeLast**
>
> a hyphen / that can be broken by / the end of a word / minimum number of letters at.
> Number **hyphenateAfterFirst**
>
> a hyphen / that can be broken by / the beginning of a word / mininum number of letters at.
> Number **hyphenateWordsLongerThan**
>
> to qualify for hyphenation / word must have in order / minimum number of letters a.
> Number **hyphenateLadderLimit**
>
> use zero / To specify unlimited consecutive lines, / can appear on consecutive lines. / maximum number of hyphens that.
> Measurement Unit (Number or String)=any **hyphenationZone**
>
> hypenation begins / line of non-justified text before / at the end of a / amount of white space allowed. Note: applies when composer is single-line composer.
> Number **hyphenWeight**
>
> hyphens / results in greater use of / vs. fewer hyphens. lower value / relative desirability of better spacing. (Range: 0 to 100)
> CharacterStyle **dropCapStyle**
>
> Character style used for the drop cap. Can also accept: String.
> Mixed **contents**
>
> The text contents. Can return: String or SpecialCharacters enumerator.
> ParagraphStyle **appliedParagraphStyle**
>
> Paragraph style used for the text. Can also accept: String.
> CharacterStyle **appliedCharacterStyle**
>
> Can also accept: String. Character style used by the text.
> Measurement Unit (Number or String)=any **lastLineIndent**
>
> Amount indent for the last line in the paragraph.
> Boolean **hyphenateLastWord**
>
> paragraph / the last word in a / If true, allows hyphenation in. Note: applies only when hyphenation is true.
> Boolean **otfSlashedZero**
>
> True setting: enable a slashed zeroes in OpenType fonts.
> Boolean **otfHistorical**
>
> True setting: enable historical forms in OpenType fonts.
> Number **otfStylisticSets**
>
> Stylistic sets to use in OpenType fonts.
> Number **gradientFillLength**
>
> of the text / gradient) applied to the fill / or radius (for a radial / length (for a linear gradient).
> Number **gradientFillAngle**
>
> the text / applied to the fill of / angle of a linear gradient. (Range: -180 to 180)
> Number **gradientStrokeLength**
>
> of the text / gradient) applied to the stroke / or radius (for a radial / length (for a linear gradient).
> Number **gradientStrokeAngle**
>
> the text / applied to the stroke of / angle of a linear gradient. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> in the format [x, y] / the fill of the text, / of a gradient applied to / starting point (in page coordinates).
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> in the format [x, y] / the stroke of the text, / of a gradient applied to / starting point (in page coordinates).
> Boolean **keepWithPrevious**
>
> previous paragraph / with the last line of / the paragraph should be kept / If the first line in.
> Mixed **spanSplitColumnCount**
>
> split columns / spans or the number of / number of columns a paragraph. Can return: Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
> SpanColumnTypeOptions **spanColumnType**
>
> or split columns / a single column, span columns / Whether a paragraph should be.
> Measurement Unit (Number or String)=any **splitColumnInsideGutter**
>
> Inside gutter used when the paragraph splits columns.
> Measurement Unit (Number or String)=any **splitColumnOutsideGutter**
>
> Outside gutter used when the paragraph splits columns.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceBefore**
>
> or a split column / minimum space before a span.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceAfter**
>
> or a split column / minimum space after a span.
> Boolean **ruleBelowOverprint**
>
> True setting: the rule below overprints.
> Boolean **ruleBelowGapOverprint**
>
> True setting: the gap color of the rule below overprints.
> Number **dropcapDetail**
>
> used for Japanese frame grid / 2 = descenders. 0x100,0x200,0x400 are / 1 = left side bearing. / based on the glyph outlines. / Details about the drop cap.
> Boolean **hyphenateAcrossColumns**
>
> True setting: to be hyphenated / in a text column / permits the last word.
> Boolean **keepRuleAboveInFrame**
>
> True setting: in the frame bounds / the paragraph to remain / requires the rule above. Note: applies only when rule above is true.
> Boolean **ignoreEdgeAlignment**
>
> True setting: ignores optical edge alignment for the paragraph.
> Boolean **otfMark**
>
> True setting: enables mark positioning in OpenType fonts.
> Boolean **otfLocale**
>
> True setting: enables localized forms in OpenType fonts.
> PositionalForms **positionalForm**
>
> OpenType positional form.
> ParagraphDirectionOptions **paragraphDirection**
>
> Direction assigned to the paragraph.
> ParagraphJustificationOptions **paragraphJustification**
>
> Justification assigned to the paragraph.
> Number **miterLimit**
>
> becomes a bevel (squared-off) join / before a miter (pointed) join / stroke width to miter length / limit of the ratio of.
> TextStrokeAlign **strokeAlignment**
>
> Stroke alignment used for the text.
> OutlineJoin **endJoin**
>
> The text stroke join type applied to the characters.
> Boolean **otfOverlapSwash**
>
> True setting: enable overlapping swash forms in OpenType fonts.
> Boolean **otfStylisticAlternate**
>
> True setting: enable stylistic alternate forms in OpenType fonts.
> Boolean **otfJustificationAlternate**
>
> True setting: enable alternate justification forms in OpenType fonts.
> Boolean **otfStretchedAlternate**
>
> True setting: enable stretched alternate forms in OpenType fonts.
> CharacterDirectionOptions **characterDirection**
>
> The character direction.
> CharacterDirectionOptions **keyboardDirection**
>
> The character keyboard direction.
> DigitsTypeOptions **digitsType**
>
> Digits type.
> KashidasOptions **kashidas**
>
> Kashidas usage for justification.
> DiacriticPositionOptions **diacriticPosition**
>
> Position for diacriticical characters.
> Number **xOffsetDiacritic**
>
> X (horizontal) offset for diacritic adjustment.
> Number **yOffsetDiacritic**
>
> Diacritic adjustment y-offset (vertical).
> Mixed **opentypeFeatures**
>
> Can return: Array of Array of 2 Strings or Long Integers. OpenType feature data.
> Boolean **gridAlignFirstLineOnly**
>
> True setting: grid or baseline grid / line to the frame / aligns only the first; false setting: aligns all lines to the grid.
> GridAlignment **gridAlignment**
>
> or baseline grid / alignment to the frame grid.
> Number **gridGyoudori**
>
> Manual gyoudori setting.
> Number **autoTcy**
>
> text / automatically run horizontally in vertical / or below which the characters / number of half-width characters at.
> Boolean **autoTcyIncludeRoman**
>
> True setting: auto tcy includes Roman characters.
> Mixed **kinsokuSet**
>
> legitimate line breaks / kinsoku set that determines. Can return: KinsokuTable, KinsokuSet enumerator or String.
> KinsokuType **kinsokuType**
>
> or ending a line / preventing kinsoku characters from beginning / type of kinsoku processing for. Note: applies only when a kinsoku set is defined.
> KinsokuHangTypes **kinsokuHangType**
>
> Hanging punctuation to allow type. Note: applies only when a kinsoku set is in effect.
> Boolean **bunriKinshi**
>
> True setting: the selected kinsoku set / double hyphen (--) to / (..), ellipse (...), and / adds the double period. Note: applies only when a kinsoku set is in effect.
> Mixed **mojikumi**
>
> mojikumi table defaults / mojikumi table. For information, see. Can return: MojikumiTable, String or MojikumiTableDefaults enumerator.
> Boolean **rensuuji**
>
> multi-digit numbers / can break between digits in / in numbers. If false, lines / If true, disallows line breaks.
> Boolean **rotateSingleByteCharacters**
>
> True setting: rotates Roman characters in vertical text.
> LeadingModel **leadingModel**
>
> Point used as the origin for leading is measured from line to line.
> CharacterAlignment **characterAlignment**
>
> line / the largest character in the / alignment of small characters to.
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
> Individual characters rotation angle (in degrees). Note: rotation proceeds counterclockwise.
> Number **jidori**
>
> which to arrange the text / number of grid squares in.
> Number **shataiMagnification**
>
> Percentage amount for shatai obliquing to apply.
> Number **shataiDegreeAngle**
>
> Shatai lens angle (in degrees).
> Boolean **shataiAdjustRotation**
>
> True setting: applies shatai rotation.
> Boolean **shataiAdjustTsume**
>
> True setting: adjusts shatai tsume.
> Boolean **tatechuyoko**
>
> True setting: makes the character horizontal in vertical text.
> Number **tatechuyokoXOffset**
>
> in vertical text / horizontal offset for horizontal characters.
> Number **tatechuyokoYOffset**
>
> in vertical text / vertical offset for horizontal characters.
> Mixed **kentenFillColor**
>
> fill of kenten characters / mixed ink) applied to the / swatch (color, gradient, tint, or. Can return: Swatch or String.
> Mixed **kentenStrokeColor**
>
> stroke of kenten characters / mixed ink) applied to the / swatch (color, gradient, tint, or. Can return: Swatch or String.
> Number **kentenTint**
>
> Kenten characters fill tint (as a percentage). (Range: 0 to 100)
> Number **kentenStrokeTint**
>
> Kenten characters stroke tint (as a percentage). (Range: 0 to 100)
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
> their parent characters / distance between kenten characters and.
> KentenAlignment **kentenAlignment**
>
> Kenten characters relative to the parent characters alignment.
> RubyKentenPosition **kentenPosition**
>
> Kenten position relative to the parent character.
> Mixed **kentenFont**
>
> Font used by kenten characters. Can return: Font or String.
> Mixed **kentenFontStyle**
>
> Kenten characters font style. Can return: String or NothingEnum enumerator.
> Number **kentenFontSize**
>
> Kenten characters size (in points).
> Number **kentenXScale**
>
> original size / as a percent of the / horizontal size of kenten characters.
> Number **kentenYScale**
>
> original size / as a percent of the / vertical size of kenten charachers.
> String **kentenCustomCharacter**
>
> Character used for kenten. Note: applies only when kenten kind is custom.
> KentenCharacterSet **kentenCharacterSet**
>
> custom kenten character / character set used for the. Note: applies only when kenten kind is custom.
> Mixed **rubyFill**
>
> fill of ruby characters / mixed ink) applied to the / swatch (color, gradient, tint, or. Can return: Swatch or String.
> Mixed **rubyStroke**
>
> stroke of ruby characters / mixed ink) applied to the / swatch (color, gradient, tint, or. Can return: Swatch or String.
> Number **rubyTint**
>
> The ruby fill color tint (as a percentage). (Range: 0 to 100)
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
> Ruby characters stroke tint (as a percentage).
> Mixed **rubyFont**
>
> Font used for ruby characters. Can return: Font or String.
> Mixed **rubyFontStyle**
>
> Ruby characters font style. Can return: String or NothingEnum enumerator.
> Number **rubyFontSize**
>
> Ruby characters size (in points).
> Boolean **rubyOpenTypePro**
>
> True setting: enables OpenType Pro fonts for ruby.
> Number **rubyXScale**
>
> the original size / specified as a percent of / horizontal size of ruby characters,.
> Number **rubyYScale**
>
> the original size / specified as a percent of / vertical size of ruby characters,.
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
> True setting: auto aligns ruby.
> Boolean **rubyOverhang**
>
> True setting: overhang amount / amount, see ruby parent / information on specifying an / the specified amount. For / constrains ruby overhang to.
> Boolean **rubyAutoScaling**
>
> True setting: scaling percent / percent, see ruby parent / information on specifying a / parent text size. For / the specified percent of / scales automatically ruby to.
> Number **rubyParentScalingPercent**
>
> size / to determine the ruby text / scale the parent text size / amount (as a percentage) to.
> RubyOverhang **rubyParentOverhangAmount**
>
> can overhang the parent text / amount by which ruby characters.
> Boolean **warichu**
>
> True setting: enables warichu.
> Number **warichuSize**
>
> determine warichu size / scale parent text size to / amount (as a percentage) to.
> Number **warichuLines**
>
> within a single normal line / number of lines of warichu.
> Number **warichuLineSpacing**
>
> Warichu characters gap between lines.
> WarichuAlignment **warichuAlignment**
>
> Warichu alignment.
> Number **warichuCharsAfterBreak**
>
> Minimum count for characters allowed after a line break.
> Number **warichuCharsBeforeBreak**
>
> Minimum count for characters allowed before a line break.
> Boolean **otfProportionalMetrics**
>
> fonts / proportional CJK metrics in OpenType / If true, kerns according to.
> Boolean **otfHVKana**
>
> True setting: horizontal and vertical / have different glyphs for / switches hiragana fonts, which.
> Boolean **otfRomanItalics**
>
> True setting: applies italics to half-width alphanumerics.
> Boolean **scaleAffectsLineHeight**
>
> size when characters are scaled / If true, the line changes.
> Boolean **cjkGridTracking**
>
> True setting: CJK grids / track non-Roman characters in / enables grid tracking to.
> AlternateGlyphForms **glyphForm**
>
> Glyph variant to substitute for standard glyphs.
> Boolean **rubyFlag**
>
> True setting: ruby is on.
> String **rubyString**
>
> Ruby string contents.
> Boolean **paragraphGyoudori**
>
> the paragraph / applies to each line in / If false, the gyoudori mode / applies to the entire paragraph. / If true, the gyoudori mode.
> Number **rubyAutoTcyDigits**
>
> auto tcy (tate-chuu-yoko) in ruby / number of digits included in.
> Boolean **rubyAutoTcyIncludeRoman**
>
> True setting: ruby / auto tcy (tate-chuu-yoko) in / includes Roman characters in.
> Boolean **rubyAutoTcyAutoScale**
>
> True setting: em / ruby to fit one / auto tcy (tate-chuu-yoko) in / scales automatically glyphs in.
> Boolean **treatIdeographicSpaceAsSpace**
>
> True setting: line like text characters / wrap to the next / ideographic spaces will not.
> Boolean **allowArbitraryHyphenation**
>
> True setting: on any character / to the next line / hyphenation dictionary can break / words unassociated with a.
> ListType **bulletsAndNumberingListType**
>
> Bullets-and-numbering list type.
> Mixed **bulletsCharacterStyle**
>
> Character style used by the text after string. Can return: CharacterStyle or String.
> Mixed **numberingCharacterStyle**
>
> Character style used by the number string. Can return: CharacterStyle or String.
> String **numberingExpression**
>
> Number string expression for numbering.
> String **bulletsTextAfter**
>
> Text after string expression for bullets.
> Mixed **appliedNumberingList**
>
> Can return: NumberingList or String. Numbering list membership.
> Number **numberingLevel**
>
> Paragraph level value.
> Mixed **numberingFormat**
>
> Numbering format settings. Can return: NumberingStyle enumerator or String.
> Boolean **numberingContinue**
>
> Controls numbering continuation at this level.
> Number **numberingStartAt**
>
> Sets the initial value for a numbered list.
> Boolean **numberingApplyRestartPolicy**
>
> True setting: apply the numbering restart policy.
> ListAlignment **bulletsAlignment**
>
> The bullet character alignment.
> ListAlignment **numberingAlignment**
>
> The number alignment.
> Object **properties**
>
> time / several properties at the same / property that allows setting of.
