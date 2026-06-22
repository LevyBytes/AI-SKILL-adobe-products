# Word (part 2)

> Number **hyphenWeight**
>
> Preference between better spacing and fewer hyphens; lower values use more hyphens. (Range: 0 to 100).
> CharacterStyle **dropCapStyle**
>
> Character style used for the drop cap. Also accepts: String.
> Mixed **contents**
>
> Contents of the text. Returns may be: String or SpecialCharacters enumerator.
> ParagraphStyle **appliedParagraphStyle**
>
> Paragraph style set on the text. Also accepts: String.
> CharacterStyle **appliedCharacterStyle**
>
> Character style set on the text. Also accepts: String.
> Measurement Unit (Number or String)=any **lastLineIndent**
>
> Indent amount for the last line in the paragraph.
> Boolean **hyphenateLastWord**
>
> True: permits hyphenation in the last word in a paragraph. Only valid when hyphenation is true.
> Boolean **otfSlashedZero**
>
> True: enables a slashed zeroes in OpenType fonts.
> Boolean **otfHistorical**
>
> True: enables historical forms in OpenType fonts.
> Number **otfStylisticSets**
>
> Defines stylistic sets to use in OpenType fonts.
> Number **gradientFillLength**
>
> Gradient length for a linear gradient, or radius for a radial gradient, on the text fill.
> Number **gradientFillAngle**
>
> Linear-gradient angle for the text fill. (Range: -180 to 180).
> Number **gradientStrokeLength**
>
> Gradient length for a linear gradient, or radius for a radial gradient, on the text stroke.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle for the text stroke. (Range: -180 to 180).
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Gradient start for the text fill, expressed in page coordinates as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Gradient start for the text stroke, expressed in page coordinates as [x, y].
> Boolean **keepWithPrevious**
>
> Controls whether the paragraph first line stays with the previous paragraph last line.
> Mixed **spanSplitColumnCount**
>
> Number of columns a paragraph spans or the number of split columns. Returns may be: Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
> SpanColumnTypeOptions **spanColumnType**
>
> Controls whether the paragraph stays single-column, spans columns, or splits columns.
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
> True: rule below overprints.
> Boolean **ruleBelowGapOverprint**
>
> True: gap color of the rule below overprints.
> Number **dropcapDetail**
>
> Drop-cap outline details: 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 support Japanese frame grid.
> Boolean **hyphenateAcrossColumns**
>
> True: permits the last word in a text column to be hyphenated.
> Boolean **keepRuleAboveInFrame**
>
> True: requires the rule above the paragraph to remain in the frame bounds. Only valid when rule above is true.
> Boolean **ignoreEdgeAlignment**
>
> True: ignores optical edge alignment for the paragraph.
> Boolean **otfMark**
>
> True: enables mark positioning in OpenType fonts.
> Boolean **otfLocale**
>
> True: enables localized forms in OpenType fonts.
> PositionalForms **positionalForm**
>
> OpenType positional form.
> ParagraphDirectionOptions **paragraphDirection**
>
> Direction setting for the paragraph.
> ParagraphJustificationOptions **paragraphJustification**
>
> Justification setting for the paragraph.
> Number **miterLimit**
>
> Ratio limit between stroke width and miter length before a pointed miter join changes to a squared-off bevel join.
> TextStrokeAlign **strokeAlignment**
>
> Stroke alignment set on the text.
> OutlineJoin **endJoin**
>
> Stroke join type set on text characters.
> Boolean **otfOverlapSwash**
>
> True: enables overlapping swash forms in OpenType fonts.
> Boolean **otfStylisticAlternate**
>
> True: enables stylistic alternate forms in OpenType fonts.
> Boolean **otfJustificationAlternate**
>
> True: enables alternate justification forms in OpenType fonts.
> Boolean **otfStretchedAlternate**
>
> True: enables stretched alternate forms in OpenType fonts.
> CharacterDirectionOptions **characterDirection**
>
> Character direction setting.
> CharacterDirectionOptions **keyboardDirection**
>
> Keyboard direction for the character.
> DigitsTypeOptions **digitsType**
>
> Digits type setting.
> KashidasOptions **kashidas**
>
> Kashidas usage for justification.
> DiacriticPositionOptions **diacriticPosition**
>
> Position for diacriticical characters.
> Number **xOffsetDiacritic**
>
> Defines x (horizontal) offset for diacritic adjustment.
> Number **yOffsetDiacritic**
>
> Defines y (vertical) offset for diacritic adjustment.
> Condition **appliedConditions**
>
> Conditions currently applied.
> Mixed **opentypeFeatures**
>
> OpenType feature data. Returns may be: Array of Array of 2 Strings or Long Integers.
> Boolean **gridAlignFirstLineOnly**
>
> True: aligns just the first line to the frame grid or baseline grid. False: every line aligns to the grid.
> GridAlignment **gridAlignment**
>
> Alignment target for the frame grid or baseline grid.
> Number **gridGyoudori**
>
> Manual gyoudori setting.
> Number **autoTcy**
>
> Half-width character threshold for automatic horizontal layout inside vertical text.
> Boolean **autoTcyIncludeRoman**
>
> True: auto tcy includes Roman characters.
> Mixed **kinsokuSet**
>
> Kinsoku set that determines legitimate line breaks. Returns may be: KinsokuTable, KinsokuSet enumerator or String.
> KinsokuType **kinsokuType**
>
> Kinsoku processing type that blocks kinsoku characters at line starts or ends. Only valid when a kinsoku set is defined.
> KinsokuHangTypes **kinsokuHangType**
>
> Allowed hanging-punctuation type. Only valid when a kinsoku set is in effect.
> Boolean **bunriKinshi**
>
> True: adds double period (..), ellipse (...), and double hyphen (--) entries to the selected kinsoku set. Only valid when a kinsoku set is in effect.
> Mixed **mojikumi**
>
> Mojikumi table. See mojikumi table defaults. Returns may be: MojikumiTable, String or MojikumiTableDefaults enumerator.
> Boolean **rensuuji**
>
> True: disallows line breaks in numbers. False: multi-digit numbers may break between digits.
> Boolean **rotateSingleByteCharacters**
>
> True: rotates Roman characters in vertical text.
> LeadingModel **leadingModel**
>
> Point used as the line-to-line leading measurement origin.
> CharacterAlignment **characterAlignment**
>
> Alignment of small characters against the line largest character.
> Number **tsume**
>
> Defines amount of horizontal character compression.
> Number **leadingAki**
>
> Defines amount of space before each character.
> Number **trailingAki**
>
> Defines amount of space after each character.
> Number **characterRotation**
>
> Individual-character rotation angle, in degrees. The rotation is counterclockwise.
> Number **jidori**
>
> Grid-square count used to arrange the text.
> Number **shataiMagnification**
>
> Shatai obliquing amount, as a percentage.
> Number **shataiDegreeAngle**
>
> Shatai lens angle, in degrees.
> Boolean **shataiAdjustRotation**
>
> True: turns on shatai rotation.
> Boolean **shataiAdjustTsume**
>
> True: adjusts shatai tsume.
> Boolean **tatechuyoko**
>
> True: makes the character horizontal in vertical text.
> Number **tatechuyokoXOffset**
>
> Horizontal offset for horizontal characters within vertical text.
> Number **tatechuyokoYOffset**
>
> Vertical offset for horizontal characters within vertical text.
> Mixed **kentenFillColor**
>
> Color, gradient, tint, or mixed-ink swatch for fill of kenten characters. Returns may be: Swatch or String.
> Mixed **kentenStrokeColor**
>
> Color, gradient, tint, or mixed-ink swatch for stroke of kenten characters. Returns may be: Swatch or String.
> Number **kentenTint**
>
> fill tint percentage for kenten characters. (Range: 0 to 100)
> Number **kentenStrokeTint**
>
> stroke tint percentage for kenten characters. (Range: 0 to 100)
> Number **kentenWeight**
>
> Stroke weight for kenten characters, in points.
> AdornmentOverprint **kentenOverprintFill**
>
> Overprint method for the kenten fill.
> AdornmentOverprint **kentenOverprintStroke**
>
> Overprint method for the kenten stroke.
> KentenCharacter **kentenKind**
>
> Kenten character style.
> Number **kentenPlacement**
>
> Spacing between kenten characters and their parent characters.
> KentenAlignment **kentenAlignment**
>
> Kenten-character alignment relative to parent characters.
> RubyKentenPosition **kentenPosition**
>
> Kenten position measured relative to the parent character.
> Mixed **kentenFont**
>
> Font used for kenten characters. Returns may be: Font or String.
> Mixed **kentenFontStyle**
>
> Font style of kenten characters. Returns may be: String or NothingEnum enumerator.
> Number **kentenFontSize**
>
> Point size for kenten characters.
> Number **kentenXScale**
>
> Horizontal kenten-character scale as a percent of the original size.
> Number **kentenYScale**
>
> Vertical kenten-character scale as a percent of the original size.
> String **kentenCustomCharacter**
>
> Character used for kenten. Only valid when kenten kind is custom.
> KentenCharacterSet **kentenCharacterSet**
>
> Character set for the custom kenten character. Only valid when kenten kind is custom.
> Mixed **rubyFill**
>
> Color, gradient, tint, or mixed-ink swatch for fill of ruby characters. Returns may be: Swatch or String.
> Mixed **rubyStroke**
>
> Color, gradient, tint, or mixed-ink swatch for stroke of ruby characters. Returns may be: Swatch or String.
> Number **rubyTint**
>
> Tint percentage for the ruby fill color. (Range: 0 to 100)
> Number **rubyWeight**
>
> Stroke weight for ruby characters, in points.
> AdornmentOverprint **rubyOverprintFill**
>
> Overprint method for the ruby fill.
> AdornmentOverprint **rubyOverprintStroke**
>
> Overprint method for the ruby stroke.
> Number **rubyStrokeTint**
>
> Ruby-character stroke tint percentage.
> Mixed **rubyFont**
>
> Font set on ruby characters. Returns may be: Font or String.
> Mixed **rubyFontStyle**
>
> Font style of ruby characters. Returns may be: String or NothingEnum enumerator.
> Number **rubyFontSize**
>
> Point size for ruby characters.
> Boolean **rubyOpenTypePro**
>
> True: enables OpenType Pro fonts for ruby.
> Number **rubyXScale**
>
> Horizontal ruby-character scale as a percent of the original size.
> Number **rubyYScale**
>
> Vertical ruby-character scale as a percent of the original size.
> RubyTypes **rubyType**
>
> Ruby type setting.
> RubyAlignments **rubyAlignment**
>
> Ruby alignment setting.
> RubyKentenPosition **rubyPosition**
>
> Ruby-character position relative to the parent text.
> Number **rubyXOffset**
>
> Horizontal spacing between ruby and parent characters.
> Number **rubyYOffset**
>
> Vertical spacing between ruby and parent characters.
> RubyParentSpacing **rubyParentSpacing**
>
> Ruby spacing relative to the parent text.
> Boolean **rubyAutoAlign**
>
> True: ruby auto-alignment is enabled.
> Boolean **rubyOverhang**
>
> True: limits ruby overhang to the specified amount. For details on setting that value, see ruby parent overhang amount.
> Boolean **rubyAutoScaling**
>
> True: auto-scales ruby by the specified percentage of parent text size. For details on setting that percentage, see ruby parent scaling percent.
> Number **rubyParentScalingPercent**
>
> Percentage used to derive the ruby text size from the parent text size.
> RubyOverhang **rubyParentOverhangAmount**
>
> Allowed ruby-character overhang beyond the parent text.
> Boolean **warichu**
>
> True: warichu is enabled.
> Number **warichuSize**
>
> Percentage used to derive warichu size from the parent text size.
> Number **warichuLines**
>
> Warichu line count inside one normal line.
> Number **warichuLineSpacing**
>
> Gap between warichu character lines.
> WarichuAlignment **warichuAlignment**
>
> Warichu alignment setting.
> Number **warichuCharsAfterBreak**
>
> Minimum characters permitted after a line break.
> Number **warichuCharsBeforeBreak**
>
> Minimum characters permitted before a line break.
> Boolean **otfProportionalMetrics**
>
> True: kerns according to proportional CJK metrics in OpenType fonts.
> Boolean **otfHVKana**
>
> True: switches hiragana fonts to use the glyph set appropriate for horizontal or vertical text.
> Boolean **otfRomanItalics**
>
> True: turns on italics to half-width alphanumerics.
> Boolean **scaleAffectsLineHeight**
>
> True: line size changes as characters are scaled.
> Boolean **cjkGridTracking**
>
> True: enables grid tracking to track non-Roman characters in CJK grids.
> AlternateGlyphForms **glyphForm**
>
> Glyph variant used in place of standard glyphs.
> Boolean **rubyFlag**
>
> True: ruby is enabled.
> String **rubyString**
>
> Contents of the ruby string.
> Boolean **paragraphGyoudori**
>
> True: the gyoudori mode applies to the entire paragraph. False: gyoudori mode is applied line by line in the paragraph.
> Number **rubyAutoTcyDigits**
>
> Digit count included in ruby auto tcy (tate-chuu-yoko).
> Boolean **rubyAutoTcyIncludeRoman**
>
> True: auto tcy (tate-chuu-yoko) in ruby includes Roman characters.
> Boolean **rubyAutoTcyAutoScale**
>
> True: auto-scales glyphs in ruby auto tcy (tate-chuu-yoko) so they fit one em.
> Boolean **treatIdeographicSpaceAsSpace**
>
> True: ideographic spaces avoid wrapping to the next line as text characters do.
> Boolean **allowArbitraryHyphenation**
>
> True: words without a hyphenation-dictionary entry may break to the next line at any character.
> ListType **bulletsAndNumberingListType**
>
> Bullets and numbering list type.
> Mixed **bulletsCharacterStyle**
>
> Character style to be used for the text after string. Returns may be: CharacterStyle or String.
> Mixed **numberingCharacterStyle**
>
> Character style to be used for the number string. Returns may be: CharacterStyle or String.
> String **numberingExpression**
>
> Number string expression used for numbering.
> String **bulletsTextAfter**
>
> Text-after string expression used for bullets.
> Mixed **appliedNumberingList**
>
> List to be part of. Returns may be: NumberingList or String.
> Number **numberingLevel**
>
> Paragraph level.
> Mixed **numberingFormat**
>
> Numbering format choices. Returns may be: NumberingStyle enumerator or String.
> Boolean **numberingContinue**
>
> Numbering continues at this level.
> Number **numberingStartAt**
>
> Sets the first number for a numbered list.
> Boolean **numberingApplyRestartPolicy**
>
> True: apply the numbering restart policy.
> ListAlignment **bulletsAlignment**
>
> Bullet character alignment.
> ListAlignment **numberingAlignment**
>
> Number alignment.
> Object **properties**
>
> Property object for setting several properties in one operation.
