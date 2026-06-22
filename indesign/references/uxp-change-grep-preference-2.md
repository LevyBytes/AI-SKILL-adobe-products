# Change Grep Preference (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> _Read Only_
>
> Mixed **numberingRestartPolicies**
>
> Numbering restart policy settings. Return type: NumberingRestartPolicy or NothingEnum enumerator.
> _Read Only_
>
> Mixed **bulletChar**
>
> Bullet glyph setting. Return type: Bullet or NothingEnum enumerator.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves against valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the ChangeGrepPreference; it is an Application.
> _Read Only_
>
> Events **events**
>
> Event collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection associated with this object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> Mixed **sameParaStyleSpacing**
>
> Spacing between paragraphs that use the same style. Return type: Unit, Spacing enumerator, or NothingEnum enumerator.
> Mixed **paragraphKashidaWidth**
>
> Paragraph kashida width setting; 0 is none, 1 is short, 2 is medium, and 3 is long. Return type: Real or NothingEnum enumerator.
> Mixed **designAxes**
>
> Design Axes values. Return type: Array of Reals or NothingEnum enumerator.
> Mixed **changeTo**
>
> Replacement value for the ChangeGrepPreference. Return type: String or NothingEnum enumerator.
> Mixed **appliedCharacterStyle**
>
> Character style used as the search target or replacement. Return type: String or NothingEnum enumerator. Also accepts: CharacterStyle.
> Mixed **appliedParagraphStyle**
>
> Paragraph style used as the search target or replacement. Return type: String or NothingEnum enumerator. Also accepts: ParagraphStyle.
> Mixed **markupTag**
>
> XML tag assigned to the element. Return type: String or NothingEnum enumerator. Also accepts: XMLTag.
> Mixed **firstLineIndent**
>
> First-line indent amount. Return type: Unit or NothingEnum enumerator.
> Mixed **leftIndent**
>
> Left-indent width. Return type: Unit or NothingEnum enumerator.
> Mixed **rightIndent**
>
> Right-indent width. Return type: Unit or NothingEnum enumerator.
> Mixed **spaceBefore**
>
> Paragraph spacing above the paragraph. Return type: Unit or NothingEnum enumerator.
> Mixed **spaceAfter**
>
> Paragraph spacing below the paragraph. Return type: Unit or NothingEnum enumerator.
> Mixed **balanceRaggedLines**
>
> A true value, or an enumeration value, balances ragged lines. Note: it is not valid with a single-line text composer. Return type: Boolean, BalanceLinesStyle enumerator, or NothingEnum enumerator.
> Mixed **justification**
>
> Paragraph alignment setting. Return type: Justification enumerator or NothingEnum enumerator.
> Mixed **singleWordJustification**
>
> Alignment applied to a line containing only one word. Return type: SingleWordJustification enumerator or NothingEnum enumerator.
> Mixed **autoLeading**
>
> Auto-leading percentage relative to type size. Range: 0 to 500. Return type: Real or NothingEnum enumerator.
> Mixed **dropCapLines**
>
> Count of lines used for the drop cap. Return type: Short Integer (0 - 25) or NothingEnum enumerator.
> Mixed **dropCapCharacters**
>
> Count of characters used for the drop cap. Return type: Short Integer (0 - 150) or NothingEnum enumerator.
> Mixed **keepLinesTogether**
>
> When true, a specified number of lines stay together as the paragraph flows across columns or text frames. Return type: Boolean or NothingEnum enumerator.
> Mixed **keepAllLinesTogether**
>
> When true, every line in the paragraph stays together; when false, page or column breaks can split the paragraph. Return type: Boolean or NothingEnum enumerator.
> Mixed **keepWithNext**
>
> Minimum line count kept with the following paragraph. Return type: Short Integer (0 - 5) or NothingEnum enumerator.
> Mixed **keepFirstLines**
>
> Minimum number of paragraph lines kept before a page break can occur. Return type: Short Integer (1 - 50) or NothingEnum enumerator.
> Mixed **keepLastLines**
>
> Minimum number of paragraph lines kept after a page break. Return type: Short Integer (1 - 50) or NothingEnum enumerator.
> Mixed **startParagraph**
>
> Location where the paragraph begins. Return type: StartParagraph enumerator or NothingEnum enumerator.
> Mixed **composer**
>
> Text composer selected to compose the text. Return type: String or NothingEnum enumerator.
> Mixed **lastLineIndent**
>
> Indent amount for the paragraph's final line. Return type: Unit or NothingEnum enumerator.
> Mixed **hyphenateLastWord**
>
> When true, the last word of a paragraph may be hyphenated. Note: valid only when hyphenation is true. Return type: Boolean or NothingEnum enumerator.
> Mixed **dropcapDetail**
>
> Drop-cap detail flags based on the glyph outline shapes. 1 = left side bearing. 2 = descenders. Japanese frame grid uses 0x100,0x200,0x400. Return type: Long Integer or NothingEnum enumerator.
> Mixed **hyphenateAcrossColumns**
>
> When true, the final word in a text column may be hyphenated. Return type: Boolean or NothingEnum enumerator.
> Mixed **keepRuleAboveInFrame**
>
> When true, the paragraph's rule above is forced to stay inside frame bounds. Note: valid only when rule above is true. Return type: Boolean or NothingEnum enumerator.
> Mixed **ignoreEdgeAlignment**
>
> When true, optical edge alignment is ignored for the paragraph. Return type: Boolean or NothingEnum enumerator.
> Mixed **appliedFont**
>
> Font assigned to the ChangeGrepPreference, supplied as either a font object or a font-family name. Return type: Font, String, or NothingEnum enumerator.
> Mixed **fontStyle**
>
> Font-style name. Return type: String or NothingEnum enumerator.
> Mixed **pointSize**
>
> Size of the text. Return type: Unit or NothingEnum enumerator.
> Mixed **leading**
>
> Leading value applied to the text. Return type: Unit, Leading enumerator, or NothingEnum enumerator.
> Mixed **kerningMethod**
>
> Pair-kerning type. Return type: String or NothingEnum enumerator.
> Mixed **tracking**
>
> Amount that loosens or tightens a text block, expressed in thousandths of an em. Return type: Real or NothingEnum enumerator.
> Mixed **capitalization**
>
> Capitalization method. Return type: Capitalization enumerator or NothingEnum enumerator.
> Mixed **position**
>
> Text position in relation to the baseline. Return type: Position enumerator or NothingEnum enumerator.
> Mixed **underline**
>
> When true, the text is underlined. Return type: Boolean or NothingEnum enumerator.
> Mixed **strikeThru**
>
> When true, a strikethrough line is drawn through the text. Return type: Boolean or NothingEnum enumerator.
> Mixed **ligatures**
>
> When true, certain character combinations (e.g., fl, fi) are substituted with ligature characters. Return type: Boolean or NothingEnum enumerator.
> Mixed **noBreak**
>
> When true, the text remains on one line. Return type: Boolean or NothingEnum enumerator.
> Mixed **horizontalScale**
>
> Horizontal scale applied to the ChangeGrepPreference. Return type: Real or NothingEnum enumerator.
> Mixed **verticalScale**
>
> Vertical scale applied to the ChangeGrepPreference. Return type: Real or NothingEnum enumerator.
> Mixed **baselineShift**
>
> Baseline-shift value applied to the text. Return type: Unit or NothingEnum enumerator.
> Mixed **skew**
>
> Skew angle for the ChangeGrepPreference. Return type: Real or NothingEnum enumerator.
> Mixed **fillTint**
>
> Fill-color tint percentage for the ChangeGrepPreference. A tint percentage is expressed with a number in the range of 0 to 100; -1 selects the inherited or overridden value. Return type: Real or NothingEnum enumerator.
> Mixed **strokeTint**
>
> Stroke-color tint percentage for the ChangeGrepPreference. A tint percentage is expressed with a number in the range of 0 to 100; -1 selects the inherited or overridden value. Return type: Real or NothingEnum enumerator.
> Mixed **strokeWeight**
>
> Stroke weight applied to the text characters. Return type: Unit or NothingEnum enumerator.
> Mixed **overprintStroke**
>
> When true, character strokes overprint. Return type: Boolean or NothingEnum enumerator.
> Mixed **overprintFill**
>
> When true, character fills overprint. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfFigureStyle**
>
> Figure-style choice for OpenType fonts. Return type: OTFFigureStyle enumerator or NothingEnum enumerator.
> Mixed **otfOrdinal**
>
> When true, OpenType ordinal forms are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfFraction**
>
> When true, OpenType fraction forms are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfDiscretionaryLigature**
>
> When true, OpenType discretionary ligatures are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfTitling**
>
> When true, OpenType titling forms are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfContextualAlternate**
>
> When true, OpenType contextual alternate forms are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfSwash**
>
> When true, OpenType swash forms are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **underlineColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the underline stroke. Return type: Swatch, String, or NothingEnum enumerator.
> Mixed **underlineGapColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the underline stroke gap. Note: valid when underline type is not solid. Return type: Swatch, String, or NothingEnum enumerator.
> Mixed **underlineTint**
>
> Tint percentage for the underline stroke. Range: 0 to 100. Return type: Real or NothingEnum enumerator.
> Mixed **underlineGapTint**
>
> Tint percentage for the underline stroke gap color. Range: 0 to 100. Note: valid when underline type is not solid. Return type: Real or NothingEnum enumerator.
> Mixed **underlineOverprint**
>
> When true, the underline stroke color overprints. Return type: Boolean or NothingEnum enumerator.
> Mixed **underlineGapOverprint**
>
> When true, the underline stroke gap color overprints. Return type: Boolean or NothingEnum enumerator.
> Mixed **underlineType**
>
> Stroke type used by the underline stroke. Return type: StrokeStyle, String, or NothingEnum enumerator.
> Mixed **underlineOffset**
>
> Offset distance from the text baseline to the underline. Return type: Unit or NothingEnum enumerator.
> Mixed **underlineWeight**
>
> Stroke weight for the underline stroke. Return type: Unit or NothingEnum enumerator.
> Mixed **strikeThroughColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the strikethrough stroke. Return type: Swatch, String, or NothingEnum enumerator.
> Mixed **strikeThroughGapColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the strikethrough stroke gap. Return type: Swatch, String, or NothingEnum enumerator.
> Mixed **strikeThroughTint**
>
> Tint percentage for the strikethrough stroke. Range: 0 to 100. Return type: Real or NothingEnum enumerator.
> Mixed **strikeThroughGapTint**
>
> Tint percentage assigned to the strikethrough stroke gap color. Range: 0 to 100. Note: this applies when strike through type is not solid. Return type: Real or NothingEnum enumerator.
> Mixed **strikeThroughOverprint**
>
> When true, the strikethrough stroke overprints. Return type: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughGapOverprint**
>
> When true, the strikethrough stroke gap color overprints. Note: valid when strike through type is not solid. Return type: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughType**
>
> Stroke type used by the strikethrough stroke. Return type: StrokeStyle, String, or NothingEnum enumerator.
> Mixed **strikeThroughOffset**
>
> Offset distance from the text baseline to the strikethrough stroke. Return type: Unit or NothingEnum enumerator.
> Mixed **strikeThroughWeight**
>
> Stroke weight for the strikethrough stroke. Return type: Unit or NothingEnum enumerator.
> Mixed **otfSlashedZero**
>
> When true, OpenType slashed zeroes are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfHistorical**
>
> When true, OpenType historical forms are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfStylisticSets**
>
> Stylistic sets selected for OpenType fonts. Return type: Long Integer or NothingEnum enumerator.
> Mixed **gradientFillLength**
>
> Fill-gradient length for a linear gradient, or radius for a radial gradient, on the text. Return type: Real or NothingEnum enumerator.
> Mixed **gradientFillAngle**
>
> Linear-gradient angle applied to the text fill. Range: -180 to 180. Return type: Real or NothingEnum enumerator.
> Mixed **gradientStrokeLength**
>
> Stroke-gradient length for a linear gradient, or radius for a radial gradient, on the text. Return type: Real or NothingEnum enumerator.
> Mixed **gradientStrokeAngle**
>
> Linear-gradient angle applied to the text stroke. Range: -180 to 180. Return type: Real or NothingEnum enumerator.
> Mixed **gradientFillStart**
>
> Starting point, in page coordinates and in the format [x, y], for a gradient applied to the text fill. Return type: Array of 2 Units or NothingEnum enumerator.
> Mixed **gradientStrokeStart**
>
> Starting point, in page coordinates and in the format [x, y], for a gradient applied to the text stroke. Return type: Array of 2 Units or NothingEnum enumerator.
> Mixed **otfMark**
>
> When true, OpenType mark positioning is used. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfLocale**
>
> When true, OpenType localized forms are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **positionalForm**
>
> OpenType positional form setting. Return type: PositionalForms enumerator or NothingEnum enumerator.
> Mixed **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied as the fill color to search for or replace with. Return type: String or NothingEnum enumerator. Also accepts: Swatch.
> Mixed **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied as the stroke color to search for or replace with. Return type: String or NothingEnum enumerator. Also accepts: Swatch.
> Mixed **appliedLanguage**
>
> Language used as the search target or replacement. Return type: String or NothingEnum enumerator. Also accepts: Language or LanguageWithVendors.
> Mixed **kerningValue**
>
> Amount of space added or removed between characters, expressed in thousandths of an em. Return type: Real or NothingEnum enumerator.
> Mixed **changeConditionsMode**
>
> Change-conditions mode: the change either replaces applied conditions or adds to them. Return type: ChangeConditionsModes enumerator or NothingEnum enumerator.
> Mixed **miterLimit**
>
> Threshold ratio of stroke width to miter length before a miter (pointed) join switches to a bevel (squared-off) join. Return type: Real (0 - 1000) or NothingEnum enumerator.
> Mixed **strokeAlignment**
>
> Stroke alignment assigned to the text. Return type: TextStrokeAlign enumerator or NothingEnum enumerator.
> Mixed **endJoin**
>
> Stroke join type assigned to the text characters. Return type: OutlineJoin enumerator or NothingEnum enumerator.
> Mixed **appliedConditions**
>
> Conditions used as the search target or replacement. Specify the "nothing" enum for "Any" or an empty list for "[Unconditional]". Return type: Array of Strings or NothingEnum enumerator. Also accepts: Array of Conditions.
> Mixed **paragraphDirection**
>
> Paragraph direction setting. Return type: ParagraphDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **paragraphJustification**
>
> Paragraph justification setting. Return type: ParagraphJustificationOptions enumerator or NothingEnum enumerator.
> Mixed **otfOverlapSwash**
>
> When true, OpenType overlapping swash forms are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfStylisticAlternate**
>
> When true, OpenType stylistic alternate forms are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfJustificationAlternate**
>
> When true, OpenType alternate justification forms are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfStretchedAlternate**
>
> When true, OpenType stretched alternate forms are used. Return type: Boolean or NothingEnum enumerator.
> Mixed **characterDirection**
>
> Character direction setting. Return type: CharacterDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **keyboardDirection**
>
> Character keyboard direction setting. Return type: CharacterDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **digitsType**
>
> Digits type setting. Return type: DigitsTypeOptions enumerator or NothingEnum enumerator.
> Mixed **kashidas**
>
> Kashida use for justification. Return type: KashidasOptions enumerator or NothingEnum enumerator.
> Mixed **diacriticPosition**
>
> Position used for diacritical characters. Return type: DiacriticPositionOptions enumerator or NothingEnum enumerator.
> Mixed **xOffsetDiacritic**
>
> Horizontal x offset for diacritic adjustment. Return type: Real or NothingEnum enumerator.
> Mixed **yOffsetDiacritic**
>
> Vertical y offset for diacritic adjustment. Return type: Real or NothingEnum enumerator.
> Mixed **keepWithPrevious**
>
> Controls whether the paragraph's first line stays with the previous paragraph's last line. Return type: Boolean or NothingEnum enumerator.
> Mixed **spanSplitColumnCount**
>
> Number of columns that a paragraph spans, or number of split columns. Return type: Short Integer (1 - 40), SpanColumnCountOptions enumerator, or NothingEnum enumerator.
> Mixed **spanColumnType**
>
> Determines whether a paragraph is a single column, spans columns, or splits columns. Return type: SpanColumnTypeOptions enumerator or NothingEnum enumerator.
> Mixed **splitColumnInsideGutter**
>
> Inside gutter used when the paragraph splits columns. Return type: Unit or NothingEnum enumerator.
> Mixed **splitColumnOutsideGutter**
>
> Outside gutter used when the paragraph splits columns. Return type: Unit or NothingEnum enumerator.
> Mixed **spanColumnMinSpaceBefore**
>
> Minimum space before a span or split column. Return type: Unit or NothingEnum enumerator.
> Mixed **spanColumnMinSpaceAfter**
>
> Minimum space after a span or split column. Return type: Unit or NothingEnum enumerator.
> Mixed **characterAlignment**
>
> Alignment of small characters against the largest character in the line. Return type: CharacterAlignment enumerator or NothingEnum enumerator.
> Mixed **tsume**
>
> Horizontal character-compression amount. Return type: Real or NothingEnum enumerator.
> Mixed **leadingAki**
>
> Space amount before each character. Return type: Real or NothingEnum enumerator.
> Mixed **trailingAki**
>
> Space amount after each character. Return type: Real or NothingEnum enumerator.
> Mixed **characterRotation**
>
> Individual-character rotation angle, in degrees. Note: rotation is counterclockwise. Return type: Real or NothingEnum enumerator.
> Mixed **jidori**
>
> Number of grid squares used to arrange the text. Return type: Short Integer or NothingEnum enumerator.
> Mixed **shataiMagnification**
>
> Shatai obliquing amount, as a percentage. Return type: Real or NothingEnum enumerator.
> Mixed **shataiDegreeAngle**
>
> Shatai lens angle, in degrees. Return type: Real or NothingEnum enumerator.
> Mixed **shataiAdjustRotation**
>
> When true, shatai rotation is applied. Return type: Boolean or NothingEnum enumerator.
> Mixed **shataiAdjustTsume**
>
> When true, shatai tsume is adjusted. Return type: Boolean or NothingEnum enumerator.
> Mixed **tatechuyoko**
>
> When true, the character becomes horizontal in vertical text. Return type: Boolean or NothingEnum enumerator.
> Mixed **tatechuyokoXOffset**
>
> Horizontal offset for horizontal characters within vertical text. Return type: Real or NothingEnum enumerator.
> Mixed **tatechuyokoYOffset**
>
> Vertical offset for horizontal characters within vertical text. Return type: Real or NothingEnum enumerator.
> Mixed **kentenFillColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to kenten character fills. Return type: Swatch, String, or NothingEnum enumerator.
> Mixed **kentenStrokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to kenten character strokes. Return type: Swatch, String, or NothingEnum enumerator.
> Mixed **kentenTint**
>
> Fill tint percentage for kenten characters. Range: 0 to 100. Return type: Real or NothingEnum enumerator.
> Mixed **kentenStrokeTint**
>
> Stroke tint percentage for kenten characters. Range: 0 to 100. Return type: Real or NothingEnum enumerator.
> Mixed **kentenWeight**
>
> Stroke weight for kenten characters, in points. Return type: Real or NothingEnum enumerator.
> Mixed **kentenOverprintFill**
>
> Overprint method used for the kenten fill. Return type: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **kentenOverprintStroke**
>
> Overprint method used for the kenten stroke. Return type: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **kentenKind**
>
> Kenten character style. Return type: KentenCharacter enumerator or NothingEnum enumerator.
> Mixed **kentenPlacement**
>
> Distance between kenten characters and their parent characters. Return type: Real or NothingEnum enumerator.
> Mixed **kentenAlignment**
>
> Alignment of kenten characters relative to parent characters. Return type: KentenAlignment enumerator or NothingEnum enumerator.
> Mixed **kentenPosition**
>
> Kenten position relative to the parent character. Return type: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **kentenFont**
>
> Font used for kenten characters. Return type: Font, String, or NothingEnum enumerator.
> Mixed **kentenFontStyle**
>
> Font style for kenten characters. Return type: String or NothingEnum enumerator.
> Mixed **kentenFontSize**
>
> Point size for kenten characters. Return type: Real or NothingEnum enumerator.
> Mixed **kentenXScale**
>
> Horizontal size of kenten characters as a percentage of original size. Return type: Real or NothingEnum enumerator.
> Mixed **kentenYScale**
>
> Vertical size of kenten characters as a percentage of original size. Return type: Real or NothingEnum enumerator.
> Mixed **kentenCustomCharacter**
>
> Custom character used for kenten. Note: valid only when kenten kind is custom. Return type: String or NothingEnum enumerator.
> Mixed **kentenCharacterSet**
>
> Character set used by the custom kenten character. Note: valid only when kenten kind is custom. Return type: KentenCharacterSet enumerator or NothingEnum enumerator.
> Mixed **rubyFill**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to ruby character fills. Return type: Swatch, String, or NothingEnum enumerator.
> Mixed **rubyStroke**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to ruby character strokes. Return type: Swatch, String, or NothingEnum enumerator.
> Mixed **rubyTint**
>
> Tint percentage for ruby fill color. Range: 0 to 100. Return type: Real or NothingEnum enumerator.
> Mixed **rubyWeight**
>
> Stroke weight for ruby characters, in points. Return type: Real or NothingEnum enumerator.
> Mixed **rubyOverprintFill**
>
> Overprint method used for the ruby fill. Return type: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **rubyOverprintStroke**
>
> Overprint method used for the ruby stroke. Return type: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **rubyStrokeTint**
>
> Stroke tint percentage for ruby characters. Return type: Real or NothingEnum enumerator.
> Mixed **rubyFont**
>
> Font assigned to ruby characters. Return type: Font, String, or NothingEnum enumerator.
> Mixed **rubyFontStyle**
>
> Font style for ruby characters. Return type: String or NothingEnum enumerator.
> Mixed **rubyFontSize**
>
> Point size for ruby characters. Return type: Real or NothingEnum enumerator.
> Mixed **rubyOpenTypePro**
>
> When true, OpenType Pro fonts are used for ruby. Return type: Boolean or NothingEnum enumerator.
> Mixed **rubyXScale**
>
> Horizontal size of ruby characters, as a percentage of original size. Return type: Real or NothingEnum enumerator.
> Mixed **rubyYScale**
>
> Vertical size of ruby characters, as a percentage of original size. Return type: Real or NothingEnum enumerator.
> Mixed **rubyType**
>
> Ruby type setting. Return type: RubyTypes enumerator or NothingEnum enumerator.
> Mixed **rubyAlignment**
>
> Ruby alignment setting. Return type: RubyAlignments enumerator or NothingEnum enumerator.
