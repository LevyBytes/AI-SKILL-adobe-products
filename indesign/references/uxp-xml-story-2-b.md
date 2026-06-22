# Xml Story (part 2) (cont. 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> Number **ruleAboveTint**
>

> Tint percentage for the above-paragraph rule. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **ruleAboveOffset**
>
> Offset amount from the first-line baseline for the paragraph rule above.
> Measurement Unit (Number or String)=any **ruleAboveLeftIndent**
>
> Left-edge indent distance for the paragraph rule above, based on text width or the first-line column width.
> Measurement Unit (Number or String)=any **ruleAboveRightIndent**
>
> Right-edge indent distance for the paragraph rule above, based on text width or the first-line column width.
> RuleWidth **ruleAboveWidth**
>
> Basis for calculating the width of the paragraph rule above: text width or column width.
> Mixed **ruleAboveColor**
>
> Swatch assigned to the paragraph rule above; valid swatch kinds include color, gradient, tint, or mixed ink. Return type can be Swatch or String.
> Mixed **ruleAboveGapColor**
>
> Gap swatch for the paragraph rule above stroke; valid swatch kinds include color, gradient, tint, or mixed ink. Return type can be Swatch or String. Note: Applies only for non-solid paragraph rule above type.
> Number **ruleAboveGapTint**
>
> Tint percentage for the paragraph rule above stroke-gap color. (Range: 0 to 100) Note: Applies only for non-solid rule above type.
> Boolean **ruleAboveGapOverprint**
>
> True: overprints the paragraph rule above stroke gap. Note: Applies only for non-solid rule above type.
> Mixed **ruleAboveType**
>
> Stroke type for the rule above the paragraph. Return type can be StrokeStyle or String.
> Boolean **ruleBelow**
>
> True: adds a rule below the paragraph.
> Measurement Unit (Number or String)=any **ruleBelowLineWeight**
>
> Line weight for the rule below.
> Number **ruleBelowTint**
>
> Tint percentage for the below-paragraph rule. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **ruleBelowOffset**
>
> Offset amount from the last-line baseline for the paragraph rule below.
> Measurement Unit (Number or String)=any **ruleBelowLeftIndent**
>
> Left-edge indent distance for the paragraph rule below, based on text width or the last-line column width.
> Measurement Unit (Number or String)=any **ruleBelowRightIndent**
>
> Right-edge indent distance for the paragraph rule below, based on text width or the last-line column width.
> RuleWidth **ruleBelowWidth**
>
> Basis for calculating the width of the paragraph rule below: text width or column width.
> Mixed **ruleBelowColor**
>
> Swatch assigned to the paragraph rule below; valid swatch kinds include color, gradient, tint, or mixed ink. Return type can be Swatch or String.
> Mixed **ruleBelowGapColor**
>
> Gap swatch for the paragraph rule below stroke; valid swatch kinds include color, gradient, tint, or mixed ink. Return type can be Swatch or String. Note: Applies only for non-solid paragraph rule below type.
> Number **ruleBelowGapTint**
>
> Tint percentage for the paragraph rule below stroke-gap color. (Range: 0 to 100) Note: Applies only for non-solid paragraph rule below type.
> Mixed **ruleBelowType**
>
> Stroke type for the rule below the paragraph. Return type can be StrokeStyle or String.
> Boolean **hyphenateCapitalizedWords**
>
> True: permits hyphenation of capitalized words.
> Boolean **hyphenation**
>
> True: permits hyphenation.
> Number **hyphenateBeforeLast**
>
> Minimum trailing letters required after a hyphen break in a word.
> Number **hyphenateAfterFirst**
>
> Mininum leading letters required before a hyphen break in a word.
> Number **hyphenateWordsLongerThan**
>
> Minimum word length required before hyphenation can apply.
> Number **hyphenateLadderLimit**
>
> Maximum hyphen count allowed on consecutive lines. Use zero for unlimited consecutive lines.
> Measurement Unit (Number or String)=any **hyphenationZone**
>
> White-space amount permitted at the end of a non-justified line before hypenation starts. Note: Applies when composer is single-line composer.
> Number **hyphenWeight**
>
> Relative preference between better spacing and fewer hyphens. Lower values increase hyphen use. (Range: 0 to 100)
> CharacterStyle **dropCapStyle**
>
> Character style for the drop cap. Also accepts String.
> ParagraphStyle **appliedParagraphStyle**
>
> Paragraph style assigned to the text. Also accepts String.
> CharacterStyle **appliedCharacterStyle**
>
> Character style assigned to the text. Also accepts String.
> Measurement Unit (Number or String)=any **lastLineIndent**
>
> Last-line indent amount for the paragraph.
> Boolean **hyphenateLastWord**
>
> True: permits hyphenation in the last word in a paragraph. Note: Applies only when hyphenation is true.
> Boolean **otfSlashedZero**
>
> True: enables a slashed zeroes in OpenType fonts.
> Boolean **otfHistorical**
>
> True: OpenType historical forms are enabled.
> Number **otfStylisticSets**
>
> OpenType stylistic sets to use.
> Number **gradientFillLength**
>
> Text-fill gradient size: length for a linear gradient or radius for a radial gradient.
> Number **gradientFillAngle**
>
> Linear-gradient angle for the text fill. (Range: -180 to 180)
> Number **gradientStrokeLength**
>
> Text-stroke gradient size: length for a linear gradient or radius for a radial gradient.
> Number **gradientStrokeAngle**
>
> Linear-gradient angle for the text stroke. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Page-coordinate starting point for the text-fill gradient, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Page-coordinate starting point for the text-stroke gradient, formatted as [x, y].
> Boolean **keepWithPrevious**
>
> Whether to keep the paragraph's first line with the previous paragraph's last line.
> Mixed **spanSplitColumnCount**
>
> Column span count or split-column count for the paragraph. Return type can be Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
> SpanColumnTypeOptions **spanColumnType**
>
> Whether the paragraph uses a single column, spans columns, or splits columns.
> Measurement Unit (Number or String)=any **splitColumnInsideGutter**
>
> Inside gutter used when the paragraph splits columns.
> Measurement Unit (Number or String)=any **splitColumnOutsideGutter**
>
> Outside gutter used when the paragraph splits columns.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceBefore**
>
> Minimum spacing before a span column or split column.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceAfter**
>
> Minimum spacing after a span column or split column.
> Boolean **ruleBelowOverprint**
>
> True: rule below overprints.
> Boolean **ruleBelowGapOverprint**
>
> True: gap color of the rule below overprints.
> Number **dropcapDetail**
>
> Drop-cap metadata derived from glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 indicate Japanese frame grid.
> Boolean **hyphenateAcrossColumns**
>
> True: permits the last word in a text column to be hyphenated.
> Boolean **keepRuleAboveInFrame**
>
> True: keeps the rule above the paragraph within in the frame bounds. Note: Applies only when rule above is true.
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
> The OpenType positional form value.
> ParagraphDirectionOptions **paragraphDirection**
>
> Direction for the paragraph.
> ParagraphJustificationOptions **paragraphJustification**
>
> Justification for the paragraph.
> Number **miterLimit**
>
> Threshold ratio between stroke width and miter length before a pointed miter join changes to a squared-off bevel join.
> TextStrokeAlign **strokeAlignment**
>
> Stroke alignment assigned to the text.
> OutlineJoin **endJoin**
>
> Stroke join type assigned to the characters of the text.
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
> Direction for the character.
> CharacterDirectionOptions **keyboardDirection**
>
> Keyboard direction for the character.
> DigitsTypeOptions **digitsType**
>
> Digit type.
> KashidasOptions **kashidas**
>
> Kashidas usage for justification.
> DiacriticPositionOptions **diacriticPosition**
>
> Position for diacriticical characters.
> Number **xOffsetDiacritic**
>
> x (horizontal) offset used for diacritic adjustment.
> Number **yOffsetDiacritic**
>
> y (vertical) offset used for diacritic adjustment.
> Mixed **tabList**
>
> Tab-stop list for the paragraph. Return type can be Array of Arrays of Property Name/Value Pairs.
> Boolean **trackChanges**
>
> True: turns on track changes.
> String **storyTitle**
>
> Title assigned to this InCopy story.
> NamedGrid **appliedNamedGrid**
>
> Named grid currently in use.
> Mixed **opentypeFeatures**
>
> OpenType feature list. Return type can be Array of Array of 2 Strings or Long Integers.
> Boolean **gridAlignFirstLineOnly**
>
> True: only the first line aligns to the frame grid or baseline grid. False: all lines align to the grid.
> GridAlignment **gridAlignment**
>
> Frame-grid or baseline-grid alignment.
> Number **gridGyoudori**
>
> Manual gyoudori setting.
> Number **autoTcy**
>
> Threshold count of half-width characters that automatically run horizontally in vertical text.
> Boolean **autoTcyIncludeRoman**
>
> True: Roman characters are included in auto tcy.
> Mixed **kinsokuSet**
>
> Kinsoku set for legitimate line breaks. Return type can be KinsokuTable, KinsokuSet enumerator or String.
> KinsokuType **kinsokuType**
>
> Kinsoku-processing type that prevents kinsoku characters from starting or ending a line. Note: Applies only when a kinsoku set is defined.
> KinsokuHangTypes **kinsokuHangType**
>
> Hanging-punctuation type to allow. Note: Applies only when a kinsoku set is in effect.
> Boolean **bunriKinshi**
>
> True: selected kinsoku set gains double period (..), ellipse (...), and double hyphen (--). Note: Applies only when a kinsoku set is in effect.
> Mixed **mojikumi**
>
> Mojikumi table. For details, see mojikumi table defaults. Return type can be MojikumiTable, String or MojikumiTableDefaults enumerator.
> Boolean **rensuuji**
>
> True: blocks line breaks in numbers. False: lines may break between digits in multi-digit numbers.
> Boolean **rotateSingleByteCharacters**
>
> True: turns Roman characters in vertical text.
> LeadingModel **leadingModel**
>
> Reference point used to measure leading from one line to the next.
> CharacterAlignment **characterAlignment**
>
> Alignment of small characters against the largest character on the line.
> Number **tsume**
>
> Amount of compression applied horizontally to characters.
> Number **leadingAki**
>
> Space amount before each character.
> Number **trailingAki**
>
> Space amount after each character.
> Number **characterRotation**
>
> Rotation angle (in degrees) for individual characters. Note: Rotation runs counterclockwise.
> Number **jidori**
>
> Count of grid squares in which to arrange the text.
> Number **shataiMagnification**
>
> Percentage amount for shatai obliquing to apply.
> Number **shataiDegreeAngle**
>
> Shatai lens angle, in degrees.
> Boolean **shataiAdjustRotation**
>
> True: applies shatai rotation.
> Boolean **shataiAdjustTsume**
>
> True: adjusts shatai tsume.
> Boolean **tatechuyoko**
>
> True: makes a vertical-text character horizontal.
> Number **tatechuyokoXOffset**
>
> The horizontal offset for horizontal characters in vertical text value.
> Number **tatechuyokoYOffset**
>
> The vertical offset for horizontal characters in vertical text value.
> Mixed **kentenFillColor**
>
> Swatch assigned to the fill of kenten characters; valid swatch kinds include color, gradient, tint, or mixed ink. Return type can be Swatch or String.
> Mixed **kentenStrokeColor**
>
> Swatch assigned to the stroke of kenten characters; valid swatch kinds include color, gradient, tint, or mixed ink. Return type can be Swatch or String.
> Number **kentenTint**
>
> Fill tint percentage for kenten characters. (Range: 0 to 100)
> Number **kentenStrokeTint**
>
> Stroke tint percentage for kenten characters. (Range: 0 to 100)
> Number **kentenWeight**
>
> Stroke weight, in points, for kenten characters.
> AdornmentOverprint **kentenOverprintFill**
>
> Overprinting method for the kenten fill.
> AdornmentOverprint **kentenOverprintStroke**
>
> Overprinting method for the kenten stroke.
> KentenCharacter **kentenKind**
>
> Kenten character style.
> Number **kentenPlacement**
>
> Distance separating kenten characters and their parent characters.
> KentenAlignment **kentenAlignment**
>
> Alignment for kenten characters relative to the parent characters.
> RubyKentenPosition **kentenPosition**
>
> Kenten position in relation to the parent character.
> Mixed **kentenFont**
>
> Font for kenten characters. Return type can be Font or String.
> Mixed **kentenFontStyle**
>
> Font style for kenten characters. Return type can be String or NothingEnum enumerator.
> Number **kentenFontSize**
>
> Size, in points, for kenten characters.
> Number **kentenXScale**
>
> Horizontal size for kenten characters as a percent of the original size.
> Number **kentenYScale**
>
> Vertical-size percentage for kenten charachers relative to original size.
> String **kentenCustomCharacter**
>
> Kenten character value. Note: Applies only when kenten kind is custom.
> KentenCharacterSet **kentenCharacterSet**
>
> Character set for the custom kenten character. Note: Applies only when kenten kind is custom.
> Mixed **rubyFill**
>
> Swatch assigned to the fill of ruby characters; valid swatch kinds include color, gradient, tint, or mixed ink. Return type can be Swatch or String.
> Mixed **rubyStroke**
>
> Swatch assigned to the stroke of ruby characters; valid swatch kinds include color, gradient, tint, or mixed ink. Return type can be Swatch or String.
> Number **rubyTint**
>
> Tint percentage for the ruby fill color. (Range: 0 to 100)
> Number **rubyWeight**
>
> Stroke weight, in points, for ruby characters.
> AdornmentOverprint **rubyOverprintFill**
>
> Method for overprinting the ruby fill.
> AdornmentOverprint **rubyOverprintStroke**
>
> Method for overprinting the ruby stroke.
> Number **rubyStrokeTint**
>
> Stroke tint percentage for ruby characters.
> Mixed **rubyFont**
>
> Font assigned to ruby characters. Return type can be Font or String.
> Mixed **rubyFontStyle**
>
> Font style for ruby characters. Return type can be String or NothingEnum enumerator.
> Number **rubyFontSize**
>
> Size, in points, for ruby characters.
> Boolean **rubyOpenTypePro**
>
> True: enables OpenType Pro fonts for ruby.
> Number **rubyXScale**
>
> Horizontal size for ruby characters, specified as a percent of the original size.
> Number **rubyYScale**
>
> Vertical size for ruby characters, specified as a percent of the original size.
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
> Ruby spacing in relation to the parent text.
> Boolean **rubyAutoAlign**
>
> True: auto aligns ruby.
> Boolean **rubyOverhang**
>
> True: limits ruby overhang to the specified amount. For specifying an amount, see ruby parent overhang amount.
> Boolean **rubyAutoScaling**
>
> True: auto-scales ruby to the specified percent of parent text size. For specifying a percent, see ruby parent scaling percent.
> Number **rubyParentScalingPercent**
>
> Percentage used to derive ruby text size from the parent text size.
> RubyOverhang **rubyParentOverhangAmount**
>
> Amount of allowed ruby overhang beyond the parent text.
> Boolean **warichu**
>
> True: turns on warichu.
> Number **warichuSize**
>
> Percentage amount used to scale parent text size to determine warichu size.
> Number **warichuLines**
>
> Count of lines of warichu within a single normal line.
> Number **warichuLineSpacing**
>
> Gap separating lines of warichu characters.
> WarichuAlignment **warichuAlignment**
>
> Warichu alignment.
> Number **warichuCharsAfterBreak**
>
> Minimum count of characters allowed after a line break.
> Number **warichuCharsBeforeBreak**
>
> Minimum count of characters allowed before a line break.
> Boolean **otfProportionalMetrics**
>
> True: kerning follows proportional CJK metrics in OpenType fonts.
> Boolean **otfHVKana**
>
> True: switches hiragana fonts when horizontal and vertical glyphs differ.
> Boolean **otfRomanItalics**
>
> True: applies italics to half-width alphanumerics.
> Boolean **scaleAffectsLineHeight**
>
> True: line size changes when characters are scaled.
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
> True: gyoudori mode covers the full paragraph. False: gyoudori mode is applied line by line within the paragraph.
> Number **rubyAutoTcyDigits**
>
> Digit count included in ruby auto tcy (tate-chuu-yoko).
> Boolean **rubyAutoTcyIncludeRoman**
>
> True: ruby auto tcy (tate-chuu-yoko) includes Roman characters.
> Boolean **rubyAutoTcyAutoScale**
>
> True: glyphs in ruby auto tcy (tate-chuu-yoko) scale automatically to fit one em.
> Boolean **treatIdeographicSpaceAsSpace**
>
> True: ideographic spaces do not wrap like text characters to the next line.
> Boolean **allowArbitraryHyphenation**
>
> True: words without a hyphenation-dictionary association may break at any character when moving to the next line.
> ListType **bulletsAndNumberingListType**
>
> Bullets-and-numbering list type.
> Mixed **bulletsCharacterStyle**
>
> Character style used for the text after string. Return type can be CharacterStyle or String.
> Mixed **numberingCharacterStyle**
>
> Character style used for the number string. Return type can be CharacterStyle or String.
> String **numberingExpression**
>
> Number-string expression used for numbering.
> String **bulletsTextAfter**
>
> Text-after string expression used for bullets.
> Mixed **appliedNumberingList**
>
> The list to be part of value. Return type can be NumberingList or String.
> Number **numberingLevel**
>
> Paragraph level.
> Mixed **numberingFormat**
>
> Options for numbering format. Return type can be NumberingStyle enumerator or String.
> Boolean **numberingContinue**
>
> Continues numbering at this level.
> Number **numberingStartAt**
>
> Sets the starting number for a numbered list.
> Boolean **numberingApplyRestartPolicy**
>
> True: apply the numbering restart policy.
> ListAlignment **bulletsAlignment**
>
> Alignment for the bullet character.
> ListAlignment **numberingAlignment**
>
> Alignment for the number.
> String **label**
>
> Property accepts any string value.
> String **name**
>
> Name of the XmlStory; it aliases the XmlStory's label property.
> Object **properties**
>
> Property used to set several properties in one operation.
