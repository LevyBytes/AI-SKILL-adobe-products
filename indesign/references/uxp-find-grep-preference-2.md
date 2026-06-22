# Find Grep Preference (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> _Read Only_
>
> Mixed **numberingRestartPolicies**
>
> Numbering restart policies for this preference. Can return: NumberingRestartPolicy or NothingEnum enumerator.
> _Read Only_
>
> Mixed **bulletChar**
>
> Bullet character value for the setting. Can return: Bullet or NothingEnum enumerator.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the FindGrepPreference (a Application).
> _Read Only_
>
> Events **events**
>
> Event collection associated with the object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection associated with the object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preferences objects.
> Mixed **sameParaStyleSpacing**
>
> Spacing inserted between paragraphs that use the same style. Can return: Unit, Spacing enumerator or NothingEnum enumerator.
> Mixed **paragraphKashidaWidth**
>
> Kashida width code for the paragraph. Values: 0 none, 1 short, 2 medium, 3 long. Can return: Real or NothingEnum enumerator.
> Mixed **designAxes**
>
> Design Axes value. Can return: Array of Reals or NothingEnum enumerator.
> Mixed **findWhat**
>
> FindGrepPreference text or pattern being searched. Can return: String or NothingEnum enumerator.
> Mixed **appliedCharacterStyle**
>
> Character style targeted by the search or replacement. Can return: String or NothingEnum enumerator. Can also accept: CharacterStyle.
> Mixed **appliedParagraphStyle**
>
> Paragraph style targeted by the search or replacement. Can return: String or NothingEnum enumerator. Can also accept: ParagraphStyle.
> Mixed **firstLineIndent**
>
> Indent amount applied to the first line. Can return: Unit or NothingEnum enumerator.
> Mixed **leftIndent**
>
> Left indent width. Can return: Unit or NothingEnum enumerator.
> Mixed **rightIndent**
>
> Right indent width. Can return: Unit or NothingEnum enumerator.
> Mixed **spaceBefore**
>
> Paragraph spacing height above the paragraph. Can return: Unit or NothingEnum enumerator.
> Mixed **spaceAfter**
>
> Paragraph spacing height below the paragraph. Can return: Unit or NothingEnum enumerator.
> Mixed **balanceRaggedLines**
>
> Ragged-line balancing is enabled by true or by a supported enumeration value. Note: A single-line text composer does not support this. Can return: Boolean, BalanceLinesStyle enumerator or NothingEnum enumerator.
> Mixed **justification**
>
> Alignment setting for the paragraph. Can return: Justification enumerator or NothingEnum enumerator.
> Mixed **singleWordJustification**
>
> Alignment used when a line contains only one word. Can return: SingleWordJustification enumerator or NothingEnum enumerator.
> Mixed **autoLeading**
>
> Auto-leading uses this type-size percentage. (Allowed range: 0 to 500). Can return: Real or NothingEnum enumerator.
> Mixed **dropCapLines**
>
> Line count included in the drop-cap treatment. Can return: Short Integer (0 - 25) or NothingEnum enumerator.
> Mixed **dropCapCharacters**
>
> Character count included in the drop-cap treatment. Can return: Short Integer (0 - 150) or NothingEnum enumerator.
> Mixed **keepLinesTogether**
>
> When true, the configured line group stays together if columns or text frames split the paragraph. Can return: Boolean or NothingEnum enumerator.
> Mixed **keepAllLinesTogether**
>
> True keeps the complete paragraph together; false permits breaks across pages or columns. Can return: Boolean or NothingEnum enumerator.
> Mixed **keepWithNext**
>
> Minimum line count that stays with the following paragraph. Can return: Short Integer (0 - 5) or NothingEnum enumerator.
> Mixed **keepFirstLines**
>
> Minimum paragraph-start line count kept together before layout may break to another page. Can return: Short Integer (1 - 50) or NothingEnum enumerator.
> Mixed **keepLastLines**
>
> Minimum count of paragraph-end lines retained together after pagination. Can return: Short Integer (1 - 50) or NothingEnum enumerator.
> Mixed **startParagraph**
>
> Location where the paragraph begins. Can return: StartParagraph enumerator or NothingEnum enumerator.
> Mixed **composer**
>
> Text composer used to compose the text. Can return: String or NothingEnum enumerator.
> Mixed **lastLineIndent**
>
> Indent amount applied to the paragraph's final line. Can return: Unit or NothingEnum enumerator.
> Mixed **hyphenateLastWord**
>
> True permits final-word hyphenation in a paragraph. Note: Requires hyphenation to be true. Can return: Boolean or NothingEnum enumerator.
> Mixed **dropcapDetail**
>
> Glyph-outline data for the drop cap. 1 maps to left side bearing; 2 maps to descenders; 0x100,0x200,0x400 apply to Japanese frame grid. Can return: Long Integer or NothingEnum enumerator.
> Mixed **hyphenateAcrossColumns**
>
> True permits the final word in a text column to hyphenate. Can return: Boolean or NothingEnum enumerator.
> Mixed **keepRuleAboveInFrame**
>
> True keeps the paragraph's rule above inside the frame boundary. Note: Requires rule above to be true. Can return: Boolean or NothingEnum enumerator.
> Mixed **ignoreEdgeAlignment**
>
> True skips paragraph optical edge alignment. Can return: Boolean or NothingEnum enumerator.
> Mixed **appliedFont**
>
> Font used by the FindGrepPreference, supplied either as a font object or as the font-family name. Can return: Font, String or NothingEnum enumerator.
> Mixed **fontStyle**
>
> Font style name. Can return: String or NothingEnum enumerator.
> Mixed **pointSize**
>
> Size of the text. Can return: Unit or NothingEnum enumerator.
> Mixed **leading**
>
> Leading value used on the text. Can return: Unit, Leading enumerator or NothingEnum enumerator.
> Mixed **kerningMethod**
>
> Pair-kerning method. Can return: String or NothingEnum enumerator.
> Mixed **tracking**
>
> Loosening or tightening amount for a text block, expressed in thousandths of an em. Can return: Real or NothingEnum enumerator.
> Mixed **capitalization**
>
> Capitalization scheme value. Can return: Capitalization enumerator or NothingEnum enumerator.
> Mixed **position**
>
> Baseline-relative text position. Can return: Position enumerator or NothingEnum enumerator.
> Mixed **underline**
>
> True applies an underline to the text. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThru**
>
> True draws a line through the text as strikethrough. Can return: Boolean or NothingEnum enumerator.
> Mixed **ligatures**
>
> True converts specific character pairs, such as fl and fi, into ligature characters. Can return: Boolean or NothingEnum enumerator.
> Mixed **noBreak**
>
> True holds the text on one line. . Can return: Boolean or NothingEnum enumerator.
> Mixed **horizontalScale**
>
> Horizontal scale value applied to the FindGrepPreference. Can return: Real or NothingEnum enumerator.
> Mixed **verticalScale**
>
> Vertical scale value applied to the FindGrepPreference. Can return: Real or NothingEnum enumerator.
> Mixed **baselineShift**
>
> Baseline shift value applied to the text. Can return: Unit or NothingEnum enumerator.
> Mixed **skew**
>
> Skew angle used by the FindGrepPreference. Can return: Real or NothingEnum enumerator.
> Mixed **fillTint**
>
> Fill-color tint percentage for the FindGrepPreference. (Use 0 to 100 for a tint percentage; use -1 for the inherited or overridden value.). Can return: Real or NothingEnum enumerator.
> Mixed **strokeTint**
>
> Stroke-color tint percentage for the FindGrepPreference. (Use 0 to 100 for a tint percentage; use -1 for the inherited or overridden value.). Can return: Real or NothingEnum enumerator.
> Mixed **strokeWeight**
>
> Stroke weight used for the text characters. Can return: Unit or NothingEnum enumerator.
> Mixed **overprintStroke**
>
> True makes the character stroke overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **overprintFill**
>
> True makes the character fill color overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfFigureStyle**
>
> Figure-style setting for OpenType fonts. Can return: OTFFigureStyle enumerator or NothingEnum enumerator.
> Mixed **otfOrdinal**
>
> True enables ordinals in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfFraction**
>
> True enables fractions in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfDiscretionaryLigature**
>
> True turns on OpenType discretionary ligatures. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfTitling**
>
> True turns on OpenType titling forms. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfContextualAlternate**
>
> True turns on OpenType contextual alternate forms. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfSwash**
>
> True turns on OpenType swash forms. Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineColor**
>
> Swatch applied to the underline stroke, whether color, gradient, tint, or mixed ink. . Can return: Swatch, String or NothingEnum enumerator.
> Mixed **underlineGapColor**
>
> Swatch applied to the underline stroke gap, whether color, gradient, tint, or mixed ink. Note: Use for a non-solid underline type. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **underlineTint**
>
> Tint percentage applied to the underline stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **underlineGapTint**
>
> Tint percentage for the underline gap color. (Range: 0 to 100) Note: Use for a non-solid underline type. Can return: Real or NothingEnum enumerator.
> Mixed **underlineOverprint**
>
> True makes the underline stroke color overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineGapOverprint**
>
> True makes the underline stroke gap color overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineType**
>
> Stroke type used for the underline stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
> Mixed **underlineOffset**
>
> Offset amount between the underline and the text baseline. Can return: Unit or NothingEnum enumerator.
> Mixed **underlineWeight**
>
> Stroke weight used by the underline stroke. Can return: Unit or NothingEnum enumerator.
> Mixed **strikeThroughColor**
>
> Swatch applied to the strikethrough stroke, whether color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **strikeThroughGapColor**
>
> Swatch applied to the strikethrough stroke gap, whether color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **strikeThroughTint**
>
> Strikethrough-stroke tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **strikeThroughGapTint**
>
> Tint percentage for the strikethrough gap color. (Range: 0 to 100) Note: Use for a non-solid strike through type. Can return: Real or NothingEnum enumerator.
> Mixed **strikeThroughOverprint**
>
> True makes the strikethrough stroke overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughGapOverprint**
>
> True makes the strikethrough stroke gap color overprint. Note: Use for a non-solid strike through type. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughType**
>
> Stroke type used for the strikethrough stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
> Mixed **strikeThroughOffset**
>
> Offset amount between the strikethrough stroke and the text baseline. Can return: Unit or NothingEnum enumerator.
> Mixed **strikeThroughWeight**
>
> Stroke weight used by the strikethrough stroke. Can return: Unit or NothingEnum enumerator.
> Mixed **otfSlashedZero**
>
> True enables OpenType slashed zeroes. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfHistorical**
>
> True enables OpenType historical forms. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfStylisticSets**
>
> Stylistic sets selected for OpenType fonts. Can return: Long Integer or NothingEnum enumerator.
> Mixed **gradientFillLength**
>
> Fill-gradient length for a linear gradient, or radius for a radial gradient, used on the text. Can return: Real or NothingEnum enumerator.
> Mixed **gradientFillAngle**
>
> Linear-gradient angle applied to the text fill. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeLength**
>
> Stroke-gradient length for a linear gradient, or radius for a radial gradient, used on the text. Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeAngle**
>
> Linear-gradient angle applied to the text stroke. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **gradientFillStart**
>
> Starting point for a fill gradient in page coordinates. Format: [x, y] coordinate pair. Can return: Array of 2 Units or NothingEnum enumerator.
> Mixed **gradientStrokeStart**
>
> Starting point for a stroke gradient in page coordinates. Format: [x, y] coordinate pair. Can return: Array of 2 Units or NothingEnum enumerator.
> Mixed **otfMark**
>
> True turns on OpenType mark positioning. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfLocale**
>
> True turns on OpenType localized forms. Can return: Boolean or NothingEnum enumerator.
> Mixed **positionalForm**
>
> Positional-form value for OpenType. Can return: PositionalForms enumerator or NothingEnum enumerator.
> Mixed **fillColor**
>
> Fill-color swatch, whether color, gradient, tint, or mixed ink, used for the search or replacement. Can return: String or NothingEnum enumerator. Can also accept: Swatch.
> Mixed **strokeColor**
>
> Stroke-color swatch, whether color, gradient, tint, or mixed ink, used for the search or replacement. Can return: String or NothingEnum enumerator. Can also accept: Swatch.
> Mixed **appliedLanguage**
>
> Language targeted by the search or replacement. Can return: String or NothingEnum enumerator. Can also accept: Language or LanguageWithVendors.
> Mixed **kerningValue**
>
> Space amount added or removed between characters, expressed in thousandths of an em. . Can return: Real or NothingEnum enumerator.
> Mixed **miterLimit**
>
> Ratio threshold between stroke width and miter length that changes a miter (pointed) join into a bevel-style join with squared geometry. Can return: Real (0 - 1000) or NothingEnum enumerator.
> Mixed **strokeAlignment**
>
> Stroke alignment used on the text. Can return: TextStrokeAlign enumerator or NothingEnum enumerator.
> Mixed **endJoin**
>
> Stroke join type applied to text characters. Can return: OutlineJoin enumerator or NothingEnum enumerator.
> Mixed **appliedConditions**
>
> Conditions targeted by the search or replacement. Use the "nothing" enum for "Any"; an empty list means "[Unconditional]" state. Can return: Array of Strings or NothingEnum enumerator. Can also accept: Array of Conditions.
> Mixed **paragraphDirection**
>
> Direction setting for paragraphs. Can return: ParagraphDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **paragraphJustification**
>
> Justification setting for paragraphs. Can return: ParagraphJustificationOptions enumerator or NothingEnum enumerator.
> Mixed **otfOverlapSwash**
>
> True turns on OpenType overlapping swash forms. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfStylisticAlternate**
>
> True turns on OpenType stylistic alternate forms. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfJustificationAlternate**
>
> True turns on OpenType alternate justification forms. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfStretchedAlternate**
>
> True turns on OpenType stretched alternate forms. Can return: Boolean or NothingEnum enumerator.
> Mixed **characterDirection**
>
> Direction setting for characters. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **keyboardDirection**
>
> Keyboard direction setting for characters. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **digitsType**
>
> Digit type setting. Can return: DigitsTypeOptions enumerator or NothingEnum enumerator.
> Mixed **kashidas**
>
> Kashidas usage for justification. Can return: KashidasOptions enumerator or NothingEnum enumerator.
> Mixed **diacriticPosition**
>
> Placement setting for diacritic characters. Can return: DiacriticPositionOptions enumerator or NothingEnum enumerator.
> Mixed **xOffsetDiacritic**
>
> Horizontal x offset used for diacritic adjustment. Can return: Real or NothingEnum enumerator.
> Mixed **yOffsetDiacritic**
>
> Vertical y offset used for diacritic adjustment. Can return: Real or NothingEnum enumerator.
> Mixed **keepWithPrevious**
>
> True keeps the paragraph's first line with the previous paragraph's last line. Can return: Boolean or NothingEnum enumerator.
> Mixed **spanSplitColumnCount**
>
> Paragraph span count or split-column count. Can return: Short Integer (1 - 40), SpanColumnCountOptions enumerator or NothingEnum enumerator.
> Mixed **spanColumnType**
>
> Specifies whether a paragraph is a single column, spans columns, or splits columns. Can return: SpanColumnTypeOptions enumerator or NothingEnum enumerator.
> Mixed **splitColumnInsideGutter**
>
> Inside gutter used when the paragraph splits columns. Can return: Unit or NothingEnum enumerator.
> Mixed **splitColumnOutsideGutter**
>
> Outside gutter used when the paragraph splits columns. Can return: Unit or NothingEnum enumerator.
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
> Horizontal character compression amount. Can return: Real or NothingEnum enumerator.
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
> Grid-square count used for arranging the text. . Can return: Short Integer or NothingEnum enumerator.
> Mixed **shataiMagnification**
>
> Shatai obliquing amount, as a percentage. Can return: Real or NothingEnum enumerator.
> Mixed **shataiDegreeAngle**
>
> Angle, in degrees, for the shatai lens. Can return: Real or NothingEnum enumerator.
> Mixed **shataiAdjustRotation**
>
> True applies shatai rotation. Can return: Boolean or NothingEnum enumerator.
> Mixed **shataiAdjustTsume**
>
> True adjusts shatai tsume. Can return: Boolean or NothingEnum enumerator.
> Mixed **tatechuyoko**
>
> True makes a character horizontal inside vertical text. Can return: Boolean or NothingEnum enumerator.
> Mixed **tatechuyokoXOffset**
>
> Horizontal offset for horizontal characters inside vertical text. Can return: Real or NothingEnum enumerator.
> Mixed **tatechuyokoYOffset**
>
> Vertical offset for horizontal characters inside vertical text. Can return: Real or NothingEnum enumerator.
> Mixed **kentenFillColor**
>
> Swatch applied to the fill of kenten characters, whether color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **kentenStrokeColor**
>
> Swatch applied to the stroke of kenten characters, whether color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **kentenTint**
>
> Kenten-character fill tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **kentenStrokeTint**
>
> Kenten-character stroke tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **kentenWeight**
>
> Stroke weight, in points, for kenten characters. Can return: Real or NothingEnum enumerator.
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
> Spacing between kenten marks and their parent characters. Can return: Real or NothingEnum enumerator.
> Mixed **kentenAlignment**
>
> Alignment of kenten characters relative to their parent characters. . Can return: KentenAlignment enumerator or NothingEnum enumerator.
> Mixed **kentenPosition**
>
> Kenten placement against the parent character. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **kentenFont**
>
> Font used for kenten characters. Can return: Font, String or NothingEnum enumerator.
> Mixed **kentenFontStyle**
>
> Font style used by kenten characters. Can return: String or NothingEnum enumerator.
> Mixed **kentenFontSize**
>
> Size, in points, for kenten characters. Can return: Real or NothingEnum enumerator.
> Mixed **kentenXScale**
>
> Horizontal size of kenten characters as a percentage of the original size. Can return: Real or NothingEnum enumerator.
> Mixed **kentenYScale**
>
> Vertical size of kenten charachers as a percentage of the original size. . Can return: Real or NothingEnum enumerator.
> Mixed **kentenCustomCharacter**
>
> Custom kenten character. Note: Applies only for custom kenten kind. Can return: String or NothingEnum enumerator.
> Mixed **kentenCharacterSet**
>
> Character set for the custom kenten character. Note: Applies only for custom kenten kind. . Can return: KentenCharacterSet enumerator or NothingEnum enumerator.
> Mixed **rubyFill**
>
> Swatch applied to the fill of ruby characters, whether color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **rubyStroke**
>
> Swatch applied to the stroke of ruby characters, whether color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **rubyTint**
>
> Ruby fill-color tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **rubyWeight**
>
> Stroke weight, in points, for ruby characters. Can return: Real or NothingEnum enumerator.
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
> Font used by ruby characters. Can return: Font, String or NothingEnum enumerator.
> Mixed **rubyFontStyle**
>
> Font style used by ruby characters. Can return: String or NothingEnum enumerator.
> Mixed **rubyFontSize**
>
> Size, in points, for ruby characters. Can return: Real or NothingEnum enumerator.
> Mixed **rubyOpenTypePro**
>
> True selects ruby OpenType Pro fonts. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyXScale**
>
> Horizontal size of ruby characters, expressed as a percentage of the original size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyYScale**
>
> Vertical size of ruby characters, expressed as a percentage of the original size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyType**
>
> Ruby type setting. Can return: RubyTypes enumerator or NothingEnum enumerator.
> Mixed **rubyAlignment**
>
> Ruby alignment setting. Can return: RubyAlignments enumerator or NothingEnum enumerator.
> Mixed **rubyPosition**
>
> Ruby character placement against the parent text. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **rubyXOffset**
>
> Horizontal spacing amount separating ruby from parent characters. Can return: Real or NothingEnum enumerator.
> Mixed **rubyYOffset**
>
> Vertical spacing amount separating ruby from parent characters. Can return: Real or NothingEnum enumerator.
> Mixed **rubyParentSpacing**
>
> Ruby spacing relative to parent text. . Can return: RubyParentSpacing enumerator or NothingEnum enumerator.
