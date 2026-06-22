# Change Text Preference (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> _Read Only_
>
> Mixed **numberingRestartPolicies**
>
> Restart behavior used for numbering. Can return: NumberingRestartPolicy or NothingEnum enumerator.
> _Read Only_
>
> Mixed **bulletChar**
>
> Character used for bullets. Can return: Bullet or NothingEnum enumerator.
> _Read Only_
>
> Boolean **isValid**
>
> True means the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for this ChangeTextPreference (a Application).
> _Read Only_
>
> Events **events**
>
> Events collection for the object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for the object.
> _Read Only_
>
> Preferences **preferences**
>
> Preferences object collection.
> Mixed **sameParaStyleSpacing**
>
> Spacing between paragraphs that share the same style. Can return: Unit, Spacing enumerator or NothingEnum enumerator.
> Mixed **paragraphKashidaWidth**
>
> Width setting for paragraph kashidas; 0 means none, 1 means short, 2 means medium, and 3 means long. Can return: Real or NothingEnum enumerator.
> Mixed **designAxes**
>
> Design Axes values. Can return: Array of Reals or NothingEnum enumerator.
> Mixed **changeTo**
>
> Replacement value for the ChangeTextPreference. Can return: String or NothingEnum enumerator.
> Mixed **appliedCharacterStyle**
>
> Character style used as the search target or replacement. Can return: String or NothingEnum enumerator. Can also accept: CharacterStyle.
> Mixed **appliedParagraphStyle**
>
> Paragraph style used as the search target or replacement. Can return: String or NothingEnum enumerator. Can also accept: ParagraphStyle.
> Mixed **markupTag**
>
> Element's applied XML tag. Can return: String or NothingEnum enumerator. Also accepts: XMLTag.
> Mixed **firstLineIndent**
>
> Indent amount for the first line. Can return: Unit or NothingEnum enumerator.
> Mixed **leftIndent**
>
> Left-indent width. Can return: Unit or NothingEnum enumerator.
> Mixed **rightIndent**
>
> Right-indent width. Can return: Unit or NothingEnum enumerator.
> Mixed **spaceBefore**
>
> Paragraph spacing above the text. Can return: Unit or NothingEnum enumerator.
> Mixed **spaceAfter**
>
> Paragraph spacing below the text. Can return: Unit or NothingEnum enumerator.
> Mixed **balanceRaggedLines**
>
> A true value or enumeration setting balances ragged lines. Note: Single-line text composers do not support this. Can return: Boolean, BalanceLinesStyle enumerator or NothingEnum enumerator.
> Mixed **justification**
>
> Alignment setting for the paragraph. Can return: Justification enumerator or NothingEnum enumerator.
> Mixed **singleWordJustification**
>
> Alignment used when a line contains one word. Can return: SingleWordJustification enumerator or NothingEnum enumerator.
> Mixed **autoLeading**
>
> Auto-leading amount as a percentage of type size. (Range: 0 to 500). Can return: Real or NothingEnum enumerator.
> Mixed **dropCapLines**
>
> Number of lines covered by the initial capital. Can return: Short Integer (0 - 25) or NothingEnum enumerator.
> Mixed **dropCapCharacters**
>
> Number of characters included in the initial capital. Can return: Short Integer (0 - 150) or NothingEnum enumerator.
> Mixed **keepLinesTogether**
>
> When true, the requested number of lines stays together during column or text-frame flow. Can return: Boolean or NothingEnum enumerator.
> Mixed **keepAllLinesTogether**
>
> When true, every paragraph line remains together; when false, page or column breaks may split paragraphs. Can return: Boolean or NothingEnum enumerator.
> Mixed **keepWithNext**
>
> Minimum line count kept with the following paragraph. Can return: Short Integer (0 - 5) or NothingEnum enumerator.
> Mixed **keepFirstLines**
>
> Minimum lines held together before a page break can occur in a paragraph. Can return: Short Integer (1 - 50) or NothingEnum enumerator.
> Mixed **keepLastLines**
>
> Minimum lines retained at the top of the continued paragraph after breaking. Can return: Short Integer (1 - 50) or NothingEnum enumerator.
> Mixed **startParagraph**
>
> Location where the paragraph begins. Can return: StartParagraph enumerator or NothingEnum enumerator.
> Mixed **composer**
>
> Text composer used to compose the text. Can return: String or NothingEnum enumerator.
> Mixed **lastLineIndent**
>
> Indent amount for the paragraph's last line. Can return: Unit or NothingEnum enumerator.
> Mixed **hyphenateLastWord**
>
> When true, the final word in a paragraph may hyphenate. Note: Requires hyphenation = true. Can return: Boolean or NothingEnum enumerator.
> Mixed **dropcapDetail**
>
> Glyph-outline details for the drop cap. Value 1 maps to left side bearing. Value 2 maps to descenders. 0x100, 0x200, and 0x400 apply to Japanese frame grid. Can return: Long Integer or NothingEnum enumerator.
> Mixed **hyphenateAcrossColumns**
>
> When true, a text column's last word may be hyphenated. Can return: Boolean or NothingEnum enumerator.
> Mixed **keepRuleAboveInFrame**
>
> When true, the paragraph rule above is kept inside the frame bounds. Note: Requires rule above = true. Can return: Boolean or NothingEnum enumerator.
> Mixed **ignoreEdgeAlignment**
>
> When true, paragraph optical edge alignment is ignored. Can return: Boolean or NothingEnum enumerator.
> Mixed **appliedFont**
>
> Font assigned to the ChangeTextPreference, given either as a font object or as the font family name. Can return: Font, String or NothingEnum enumerator.
> Mixed **fontStyle**
>
> Font style name. Can return: String or NothingEnum enumerator.
> Mixed **pointSize**
>
> Size of the text. Can return: Unit or NothingEnum enumerator.
> Mixed **leading**
>
> Text leading value. Can return: Unit, Leading enumerator or NothingEnum enumerator.
> Mixed **kerningMethod**
>
> Pair-kerning method. Can return: String or NothingEnum enumerator.
> Mixed **tracking**
>
> Amount used to loosen or tighten text, expressed in thousandths of an em. Can return: Real or NothingEnum enumerator.
> Mixed **capitalization**
>
> Capitalization mode. Can return: Capitalization enumerator or NothingEnum enumerator.
> Mixed **position**
>
> Baseline-relative placement of the text. Can return: Position enumerator or NothingEnum enumerator.
> Mixed **underline**
>
> A true value applies underline styling to the text. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThru**
>
> A true value draws a strikethrough through the text. Can return: Boolean or NothingEnum enumerator.
> Mixed **ligatures**
>
> A true value substitutes ligature characters for specific combinations, e.g., fl, fi. Can return: Boolean or NothingEnum enumerator.
> Mixed **noBreak**
>
> A true value keeps the text on one line. Can return: Boolean or NothingEnum enumerator.
> Mixed **horizontalScale**
>
> Horizontal scaling for the ChangeTextPreference. Can return: Real or NothingEnum enumerator.
> Mixed **verticalScale**
>
> Vertical scaling for the ChangeTextPreference. Can return: Real or NothingEnum enumerator.
> Mixed **baselineShift**
>
> Baseline shift assigned to the text. Can return: Unit or NothingEnum enumerator.
> Mixed **skew**
>
> Skew angle for the ChangeTextPreference. Can return: Real or NothingEnum enumerator.
> Mixed **fillTint**
>
> Fill-color tint percentage for the ChangeTextPreference. (Use 0 to 100 for an explicit tint percentage; use -1 for the inherited or overridden value.). Can return: Real or NothingEnum enumerator.
> Mixed **strokeTint**
>
> Stroke-color tint percentage for the ChangeTextPreference. (Use 0 to 100 for an explicit tint percentage; use -1 for the inherited or overridden value.). Can return: Real or NothingEnum enumerator.
> Mixed **strokeWeight**
>
> Stroke weight applied to text characters. Can return: Unit or NothingEnum enumerator.
> Mixed **overprintStroke**
>
> When true, character strokes overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **overprintFill**
>
> When true, character fills overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfFigureStyle**
>
> Figure style used in OpenType fonts. Can return: OTFFigureStyle enumerator or NothingEnum enumerator.
> Mixed **otfOrdinal**
>
> When true, OpenType ordinals are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfFraction**
>
> When true, OpenType fractions are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfDiscretionaryLigature**
>
> When true, OpenType discretionary ligatures are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfTitling**
>
> When true, OpenType titling forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfContextualAlternate**
>
> When true, OpenType contextual alternate forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfSwash**
>
> When true, OpenType swash forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineColor**
>
> Swatch (color, gradient, tint, or mixed ink) used on the underline stroke. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **underlineGapColor**
>
> Swatch (color, gradient, tint, or mixed ink) used on the underline stroke gap. Note: Requires a non-solid underline type. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **underlineTint**
>
> Tint percentage for the underline stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **underlineGapTint**
>
> Tint percentage for the underline stroke gap color. (Range: 0 to 100) Note: Requires a non-solid underline type. Can return: Real or NothingEnum enumerator.
> Mixed **underlineOverprint**
>
> When true, the underline stroke color overprints. Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineGapOverprint**
>
> When true, the underline stroke gap color overprints. Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineType**
>
> Stroke type used for the underline. Can return: StrokeStyle, String or NothingEnum enumerator.
> Mixed **underlineOffset**
>
> Offset amount from the text baseline to the underline. Can return: Unit or NothingEnum enumerator.
> Mixed **underlineWeight**
>
> Stroke weight used by the underline. Can return: Unit or NothingEnum enumerator.
> Mixed **strikeThroughColor**
>
> Swatch (color, gradient, tint, or mixed ink) used on the strikethrough stroke. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **strikeThroughGapColor**
>
> Swatch (color, gradient, tint, or mixed ink) used on the strikethrough gap. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **strikeThroughTint**
>
> Strikethrough stroke tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **strikeThroughGapTint**
>
> Tint percentage for the strikethrough gap color. (Range: 0 to 100) Note: Requires a non-solid strike through type. Can return: Real or NothingEnum enumerator.
> Mixed **strikeThroughOverprint**
>
> When true, the strikethrough stroke overprints. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughGapOverprint**
>
> When true, the strikethrough gap color overprints. Note: Requires a non-solid strike through type. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughType**
>
> Stroke type used for the strikethrough stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
> Mixed **strikeThroughOffset**
>
> Offset amount from the text baseline to the strikethrough stroke. Can return: Unit or NothingEnum enumerator.
> Mixed **strikeThroughWeight**
>
> Stroke weight used by the strikethrough stroke. Can return: Unit or NothingEnum enumerator.
> Mixed **otfSlashedZero**
>
> When true, OpenType slashed zeroes are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfHistorical**
>
> When true, OpenType historical forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfStylisticSets**
>
> Stylistic sets used in OpenType fonts. Can return: Long Integer or NothingEnum enumerator.
> Mixed **gradientFillLength**
>
> For the text fill, this is length for a linear gradient and radius for a radial gradient. Can return: Real or NothingEnum enumerator.
> Mixed **gradientFillAngle**
>
> Angle for a linear gradient applied to the text fill. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeLength**
>
> For the text stroke, this is length for a linear gradient and radius for a radial gradient. Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeAngle**
>
> Angle for a linear gradient applied to the text stroke. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **gradientFillStart**
>
> Starting point in page coordinates for a gradient applied to the text fill; [x, y] gives the page-space coordinates. Can return: Array of 2 Units or NothingEnum enumerator.
> Mixed **gradientStrokeStart**
>
> Starting point in page coordinates for a gradient applied to the text stroke; [x, y] gives the page-space coordinates. Can return: Array of 2 Units or NothingEnum enumerator.
> Mixed **otfMark**
>
> When true, OpenType mark positioning is used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfLocale**
>
> When true, OpenType localized forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **positionalForm**
>
> OpenType positional-form setting. Can return: PositionalForms enumerator or NothingEnum enumerator.
> Mixed **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied as fill color for search or replacement. Can return: String or NothingEnum enumerator. Can also accept: Swatch.
> Mixed **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied as stroke color for search or replacement. Can return: String or NothingEnum enumerator. Can also accept: Swatch.
> Mixed **appliedLanguage**
>
> Language used as the search target or replacement. Can return: String or NothingEnum enumerator. Also accepts: Language or LanguageWithVendors.
> Mixed **kerningValue**
>
> Space amount to add or remove between characters, expressed in thousandths of an em. Can return: Real or NothingEnum enumerator.
> Mixed **changeConditionsMode**
>
> Condition-changing mode: changes either replace applied conditions or add to them. Can return: ChangeConditionsModes enumerator or NothingEnum enumerator.
> Mixed **miterLimit**
>
> Miter limit ratio between stroke width and miter length; above it, the miter (pointed) join switches into bevel (squared-off) form. Can return: Real (0 - 1000) or NothingEnum enumerator.
> Mixed **strokeAlignment**
>
> Stroke alignment used by the text. Can return: TextStrokeAlign enumerator or NothingEnum enumerator.
> Mixed **endJoin**
>
> Stroke join type used on text characters. Can return: OutlineJoin enumerator or NothingEnum enumerator.
> Mixed **appliedConditions**
>
> Conditions used as the search target or replacement. For "Any", specify the "nothing" enum; for "[Unconditional]", specify an empty list. Can return: Array of Strings or NothingEnum enumerator. Also accepts: Array of Conditions.
> Mixed **paragraphDirection**
>
> Direction setting for the paragraph. Can return: ParagraphDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **paragraphJustification**
>
> Justification setting for the paragraph. Can return: ParagraphJustificationOptions enumerator or NothingEnum enumerator.
> Mixed **otfOverlapSwash**
>
> When true, OpenType overlapping swash forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfStylisticAlternate**
>
> When true, OpenType stylistic alternate forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfJustificationAlternate**
>
> When true, OpenType alternate justification forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfStretchedAlternate**
>
> When true, OpenType stretched alternate forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **characterDirection**
>
> Direction setting for the character. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **keyboardDirection**
>
> Keyboard direction setting for the character. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **digitsType**
>
> Digit-type setting. Can return: DigitsTypeOptions enumerator or NothingEnum enumerator.
> Mixed **kashidas**
>
> Kashida use for justification. Can return: KashidasOptions enumerator or NothingEnum enumerator.
> Mixed **diacriticPosition**
>
> Placement setting for diacriticical characters. Can return: DiacriticPositionOptions enumerator or NothingEnum enumerator.
> Mixed **xOffsetDiacritic**
>
> Horizontal x offset used for diacritic adjustment. Can return: Real or NothingEnum enumerator.
> Mixed **yOffsetDiacritic**
>
> Vertical y offset used for diacritic adjustment. Can return: Real or NothingEnum enumerator.
> Mixed **keepWithPrevious**
>
> Whether the paragraph's first line should stay with the previous paragraph's last line. Can return: Boolean or NothingEnum enumerator.
> Mixed **spanSplitColumnCount**
>
> Count for paragraph column spans or split-column divisions. Can return: SpanColumnCountOptions enumerator, Short Integer (1 - 40) or NothingEnum enumerator.
> Mixed **spanColumnType**
>
> Whether the paragraph is a single column, spans columns, or splits columns. Can return: SpanColumnTypeOptions enumerator or NothingEnum enumerator.
> Mixed **splitColumnInsideGutter**
>
> Inside gutter used when a paragraph splits columns. Can return: Unit or NothingEnum enumerator.
> Mixed **splitColumnOutsideGutter**
>
> Outside gutter used when a paragraph splits columns. Can return: Unit or NothingEnum enumerator.
> Mixed **spanColumnMinSpaceBefore**
>
> Minimum space before a span or split column. Can return: Unit or NothingEnum enumerator.
> Mixed **spanColumnMinSpaceAfter**
>
> Minimum space after a span or split column. Can return: Unit or NothingEnum enumerator.
> Mixed **characterAlignment**
>
> Alignment of small characters against the line's largest character. Can return: CharacterAlignment enumerator or NothingEnum enumerator.
> Mixed **tsume**
>
> Horizontal compression amount for characters. Can return: Real or NothingEnum enumerator.
> Mixed **leadingAki**
>
> Space amount before each character. Can return: Real or NothingEnum enumerator.
> Mixed **trailingAki**
>
> Space amount after each character. Can return: Real or NothingEnum enumerator.
> Mixed **characterRotation**
>
> Individual-character rotation angle, in degrees. Note: Rotation proceeds counterclockwise. Can return: Real or NothingEnum enumerator.
> Mixed **jidori**
>
> Grid-square count used for arranging text. Can return: Short Integer or NothingEnum enumerator.
> Mixed **shataiMagnification**
>
> Shatai obliquing amount as a percentage. Can return: Real or NothingEnum enumerator.
> Mixed **shataiDegreeAngle**
>
> Lens angle for shatai, in degrees. Can return: Real or NothingEnum enumerator.
> Mixed **shataiAdjustRotation**
>
> When true, shatai rotation is applied. Can return: Boolean or NothingEnum enumerator.
> Mixed **shataiAdjustTsume**
>
> When true, shatai tsume is adjusted. Can return: Boolean or NothingEnum enumerator.
> Mixed **tatechuyoko**
>
> When true, the character becomes horizontal within vertical text. Can return: Boolean or NothingEnum enumerator.
> Mixed **tatechuyokoXOffset**
>
> X offset applied to horizontal characters within vertical text. Can return: Real or NothingEnum enumerator.
> Mixed **tatechuyokoYOffset**
>
> Y offset applied to horizontal characters within vertical text. Can return: Real or NothingEnum enumerator.
> Mixed **kentenFillColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied to kenten-character fills. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **kentenStrokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) applied to kenten-character strokes. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **kentenTint**
>
> Kenten-character fill tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **kentenStrokeTint**
>
> Stroke tint percentage for kenten characters. Can return: Real or NothingEnum enumerator.
> Mixed **kentenWeight**
>
> Stroke weight in points for kenten characters. Can return: Real or NothingEnum enumerator.
> Mixed **kentenOverprintFill**
>
> Overprint method used for the kenten fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **kentenOverprintStroke**
>
> Overprint method used for the kenten stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **kentenKind**
>
> Kenten character style. Can return: KentenCharacter enumerator or NothingEnum enumerator.
> Mixed **kentenPlacement**
>
> Gap separating kenten characters from their parent characters. Can return: Real or NothingEnum enumerator.
> Mixed **kentenAlignment**
>
> Alignment of kenten characters relative to their parent characters. Can return: KentenAlignment enumerator or NothingEnum enumerator.
> Mixed **kentenPosition**
>
> Parent-character-relative position for kenten. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **kentenFont**
>
> Font used for kenten characters. Can return: Font, String or NothingEnum enumerator.
> Mixed **kentenFontStyle**
>
> Font style used for kenten characters. Can return: String or NothingEnum enumerator.
> Mixed **kentenFontSize**
>
> Size in points for kenten characters. Can return: Real or NothingEnum enumerator.
> Mixed **kentenXScale**
>
> Horizontal size of kenten characters as a percentage of original size. Can return: Real or NothingEnum enumerator.
> Mixed **kentenYScale**
>
> Vertical size of kenten charachers as a percentage of original size. Can return: Real or NothingEnum enumerator.
> Mixed **kentenCustomCharacter**
>
> Kenten character value. Note: Requires kenten kind = custom. Can return: String or NothingEnum enumerator.
> Mixed **kentenCharacterSet**
>
> Character set for the custom kenten character. Note: Requires kenten kind = custom. Can return: KentenCharacterSet enumerator or NothingEnum enumerator.
> Mixed **rubyFill**
>
> Swatch (color, gradient, tint, or mixed ink) applied to ruby-character fills. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **rubyStroke**
>
> Swatch (color, gradient, tint, or mixed ink) applied to ruby-character strokes. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **rubyTint**
>
> Ruby fill-color tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **rubyWeight**
>
> Stroke weight in points for ruby characters. Can return: Real or NothingEnum enumerator.
> Mixed **rubyOverprintFill**
>
> Overprint method used for the ruby fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **rubyOverprintStroke**
>
> Overprint method used for the ruby stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **rubyStrokeTint**
>
> Stroke tint percentage for ruby characters. Can return: Real or NothingEnum enumerator.
> Mixed **rubyFont**
>
> Font assigned to ruby characters. Can return: Font, String or NothingEnum enumerator.
> Mixed **rubyFontStyle**
>
> Font style used by ruby characters. Can return: String or NothingEnum enumerator.
> Mixed **rubyFontSize**
>
> Size in points for ruby characters. Can return: Real or NothingEnum enumerator.
> Mixed **rubyOpenTypePro**
>
> When true, OpenType Pro fonts are used for ruby. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyXScale**
>
> Horizontal size of ruby characters, given as a percentage of original size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyYScale**
>
> Vertical size of ruby characters, given as a percentage of original size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyType**
>
> Ruby type setting. Can return: RubyTypes enumerator or NothingEnum enumerator.
> Mixed **rubyAlignment**
>
> Ruby alignment setting. Can return: RubyAlignments enumerator or NothingEnum enumerator.
> Mixed **rubyPosition**
>
> Position of ruby characters relative to parent text. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **rubyXOffset**
>
> Horizontal spacing amount separating ruby from parent characters. Can return: Real or NothingEnum enumerator.
> Mixed **rubyYOffset**
>
> Vertical spacing amount separating ruby from parent characters. Can return: Real or NothingEnum enumerator.
