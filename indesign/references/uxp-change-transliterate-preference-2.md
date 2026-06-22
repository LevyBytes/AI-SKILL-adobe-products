# Change Transliterate Preference (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> _Read Only_
>
> Mixed **bulletChar**
>
> Specifies the bullet character. Type information: Can return: Bullet or NothingEnum enumerator.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Identifies the ChangeTransliteratePreference parent, a Application.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event listeners collection.
> _Read Only_
>
> Preferences **preferences**
>
> Provides the preferences objects collection.
> Mixed **sameParaStyleSpacing**
>
> Sets spacing between paragraphs that share the same style. Type information: Can return: Unit, Spacing enumerator or NothingEnum enumerator.
> Mixed **designAxes**
>
> Stores the Design Axes value. Type information: Can return: Array of Reals or NothingEnum enumerator.
> Mixed **changeCharacterType**
>
> Sets the replacement character type for the found character type. Type information: Can return: FindChangeTransliterateCharacterTypes enumerator or NothingEnum enumerator.
> Mixed **appliedCharacterStyle**
>
> Sets the character style used for search or replacement. Type information: Can return: String or NothingEnum enumerator. Can also accept: CharacterStyle.
> Mixed **appliedParagraphStyle**
>
> Sets the paragraph style used for search or replacement. Type information: Can return: String or NothingEnum enumerator. Can also accept: ParagraphStyle.
> Mixed **markupTag**
>
> Specifies the element XML tag. Type information: Can return: String or NothingEnum enumerator. Can also accept: XMLTag.
> Mixed **firstLineIndent**
>
> Sets the first-line indent amount. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **leftIndent**
>
> Sets the left-indent width. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **rightIndent**
>
> Sets the right-indent width. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **spaceBefore**
>
> Sets the paragraph spacing above. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **spaceAfter**
>
> Sets the paragraph spacing below. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **balanceRaggedLines**
>
> When enabled or set by enumeration, balances ragged lines; this is not valid with a single-line text composer. Type information: Can return: Boolean, BalanceLinesStyle enumerator or NothingEnum enumerator.
> Mixed **justification**
>
> Sets paragraph alignment. Type information: Can return: Justification enumerator or NothingEnum enumerator.
> Mixed **singleWordJustification**
>
> Sets alignment for single-word lines. Type information: Can return: SingleWordJustification enumerator or NothingEnum enumerator.
> Mixed **autoLeading**
>
> Sets auto leading as a percentage of type size. (Range: 0 to 500). Type information: Can return: Real or NothingEnum enumerator.
> Mixed **dropCapLines**
>
> Sets how many lines the drop cap spans. Type information: Can return: Short Integer (0 - 25) or NothingEnum enumerator.
> Mixed **dropCapCharacters**
>
> Sets how many characters are included in the drop cap. Type information: Can return: Short Integer (0 - 150) or NothingEnum enumerator.
> Mixed **keepLinesTogether**
>
> When true, keeps the configured line count together as a paragraph breaks across columns or text frames. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **keepAllLinesTogether**
>
> When true, keeps every paragraph line together; when false, page or column breaks may split paragraphs. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **keepWithNext**
>
> Sets the minimum line count kept with the next paragraph. Type information: Can return: Short Integer (0 - 5) or NothingEnum enumerator.
> Mixed **keepFirstLines**
>
> Sets how many paragraph lines must stay together before a page break is allowed. Type information: Can return: Short Integer (1 - 50) or NothingEnum enumerator.
> Mixed **keepLastLines**
>
> Sets how many paragraph lines must stay together after a page break. Type information: Can return: Short Integer (1 - 50) or NothingEnum enumerator.
> Mixed **startParagraph**
>
> Sets where the paragraph starts. Type information: Can return: StartParagraph enumerator or NothingEnum enumerator.
> Mixed **composer**
>
> Chooses the composer used for the text. Type information: Can return: String or NothingEnum enumerator.
> Mixed **lastLineIndent**
>
> Sets the paragraph last-line indent amount. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **hyphenateLastWord**
>
> When true, permits hyphenating the paragraph final word; this applies only when hyphenation is true. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **dropcapDetail**
>
> Stores glyph-outline-based drop cap details: 1 maps to left side bearing; 2 maps to descenders; 0x100,0x200,0x400 apply to the Japanese frame grid. Type information: Can return: Long Integer or NothingEnum enumerator.
> Mixed **hyphenateAcrossColumns**
>
> When true, permits hyphenation of the final word in a text column. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **keepRuleAboveInFrame**
>
> When true, keeps the paragraph rule above inside the frame bounds; this applies only when rule above is true. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **ignoreEdgeAlignment**
>
> When true, optical edge alignment is ignored for the paragraph. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **appliedFont**
>
> Sets the ChangeTransliteratePreference font, using either a font object or the font family name. Type information: Can return: Font, String or NothingEnum enumerator.
> Mixed **fontStyle**
>
> Specifies the font style name. Type information: Can return: String or NothingEnum enumerator.
> Mixed **pointSize**
>
> Sets text size. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **leading**
>
> Sets the text leading. Type information: Can return: Unit, Leading enumerator or NothingEnum enumerator.
> Mixed **kerningMethod**
>
> Specifies the pair-kerning type. Type information: Can return: String or NothingEnum enumerator.
> Mixed **tracking**
>
> Specifies, in thousands of an em, how much a text block is loosened or tightened. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **capitalization**
>
> Sets the capitalization scheme. Type information: Can return: Capitalization enumerator or NothingEnum enumerator.
> Mixed **position**
>
> Sets text position relative to the baseline. Type information: Can return: Position enumerator or NothingEnum enumerator.
> Mixed **underline**
>
> When true, applies underline to the text. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThru**
>
> When true, draws strikethrough through the text. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **ligatures**
>
> When true, substitutes ligature characters for specific combinations (e.g., fl, fi). Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **noBreak**
>
> When true, keeps the text on the same line.. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **horizontalScale**
>
> Sets horizontal scaling on the ChangeTransliteratePreference. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **verticalScale**
>
> Sets vertical scaling on the ChangeTransliteratePreference. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **baselineShift**
>
> Sets the text baseline shift. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **skew**
>
> Sets the ChangeTransliteratePreference skew angle. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **fillTint**
>
> Sets the ChangeTransliteratePreference fill-color tint percentage. Use a number in the range of 0 to 100 for an explicit tint, or -1 for the inherited or overridden value. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **strokeTint**
>
> Sets the ChangeTransliteratePreference stroke-color tint percentage. Use a number in the range of 0 to 100 for an explicit tint, or -1 for the inherited or overridden value. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **strokeWeight**
>
> Sets character stroke weight for the text. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **overprintStroke**
>
> When true, character strokes overprint. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **overprintFill**
>
> When true, character fill color overprints. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **otfFigureStyle**
>
> Sets OpenType figure style. Type information: Can return: OTFFigureStyle enumerator or NothingEnum enumerator.
> Mixed **otfOrdinal**
>
> When true, enables OpenType ordinals. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **otfFraction**
>
> When true, enables OpenType fractions. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **otfDiscretionaryLigature**
>
> When true, enables OpenType discretionary ligatures. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **otfTitling**
>
> When true, enables OpenType titling forms. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **otfContextualAlternate**
>
> When true, enables OpenType contextual alternate forms. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **otfSwash**
>
> When true, enables OpenType swash forms. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineColor**
>
> Specifies swatch (color, gradient, tint, or mixed ink) applied to the underline stroke.. Type information: Can return: Swatch, String or NothingEnum enumerator.
> Mixed **underlineGapColor**
>
> Chooses the underline-stroke gap swatch (color, gradient, tint, or mixed ink); this is valid when underline type is not solid. Type information: Can return: Swatch, String or NothingEnum enumerator.
> Mixed **underlineTint**
>
> Sets underline stroke tint as a percentage. (Range: 0 to 100). Type information: Can return: Real or NothingEnum enumerator.
> Mixed **underlineGapTint**
>
> Sets underline-stroke gap color tint as a percentage. (Range: 0 to 100). This is valid when underline type is not solid. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **underlineOverprint**
>
> When true, underline stroke color overprints. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineGapOverprint**
>
> When true, underline-stroke gap color overprints. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineType**
>
> Sets the underline stroke type. Type information: Can return: StrokeStyle, String or NothingEnum enumerator.
> Mixed **underlineOffset**
>
> Sets how far the underline is offset from the text baseline. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **underlineWeight**
>
> Sets underline stroke weight. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **strikeThroughColor**
>
> Chooses the strikethrough stroke swatch (color, gradient, tint, or mixed ink). Type information: Can return: Swatch, String or NothingEnum enumerator.
> Mixed **strikeThroughGapColor**
>
> Chooses the strikethrough-stroke gap swatch (color, gradient, tint, or mixed ink). Type information: Can return: Swatch, String or NothingEnum enumerator.
> Mixed **strikeThroughTint**
>
> Sets strikethrough stroke tint as a percentage. (Range: 0 to 100). Type information: Can return: Real or NothingEnum enumerator.
> Mixed **strikeThroughGapTint**
>
> Sets strikethrough-stroke gap color tint as a percentage. (Range: 0 to 100). This is valid when strike through type is not solid. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **strikeThroughOverprint**
>
> When true, the strikethrough stroke overprints. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughGapOverprint**
>
> When true, the strikethrough-stroke gap color overprints; this is valid when strike through type is not solid. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughType**
>
> Sets the strikethrough stroke type. Type information: Can return: StrokeStyle, String or NothingEnum enumerator.
> Mixed **strikeThroughOffset**
>
> Sets how far the strikethrough stroke sits from the text baseline. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **strikeThroughWeight**
>
> Sets strikethrough stroke weight. Type information: Can return: Unit or NothingEnum enumerator.
> Mixed **otfSlashedZero**
>
> When true, enables slashed zeroes in OpenType fonts. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **otfHistorical**
>
> When true, enables historical forms in OpenType fonts. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **otfStylisticSets**
>
> Selects the OpenType stylistic sets. Type information: Can return: Long Integer or NothingEnum enumerator.
> Mixed **gradientFillLength**
>
> Sets text-fill gradient length for linear gradients or radius for radial gradients. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **gradientFillAngle**
>
> Sets the text-fill linear gradient angle. (Range: -180 to 180). Type information: Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeLength**
>
> Sets text-stroke gradient length for linear gradients or radius for radial gradients. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeAngle**
>
> Sets the text-stroke linear gradient angle. (Range: -180 to 180). Type information: Can return: Real or NothingEnum enumerator.
> Mixed **gradientFillStart**
>
> Sets the text-fill gradient starting point in page coordinates, formatted as [x, y]. Type information: Can return: Array of 2 Units or NothingEnum enumerator.
> Mixed **gradientStrokeStart**
>
> Sets the text-stroke gradient starting point in page coordinates, formatted as [x, y]. Type information: Can return: Array of 2 Units or NothingEnum enumerator.
> Mixed **otfMark**
>
> When true, enables OpenType mark positioning. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **otfLocale**
>
> When true, enables OpenType localized forms. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **positionalForm**
>
> Sets the OpenType positional form. Type information: Can return: PositionalForms enumerator or NothingEnum enumerator.
> Mixed **fillColor**
>
> Sets the fill-color swatch (color, gradient, tint, or mixed ink) used for search or replacement. Type information: Can return: String or NothingEnum enumerator. Can also accept: Swatch.
> Mixed **strokeColor**
>
> Sets the stroke-color swatch (color, gradient, tint, or mixed ink) used for search or replacement. Type information: Can return: String or NothingEnum enumerator. Can also accept: Swatch.
> Mixed **appliedLanguage**
>
> Sets the language used for search or replacement. Type information: Can return: String or NothingEnum enumerator. Can also accept: Language or LanguageWithVendors.
> Mixed **kerningValue**
>
> Adjusts character spacing in thousands of an em, adding or removing space as needed. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **characterAlignment**
>
> Sets how small characters align against the line largest character. Type information: Can return: CharacterAlignment enumerator or NothingEnum enumerator.
> Mixed **tsume**
>
> Sets horizontal character compression. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **leadingAki**
>
> Sets spacing before each character. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **trailingAki**
>
> Sets spacing after each character. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **characterRotation**
>
> Sets individual-character rotation in degrees; the rotation is counterclockwise. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **jidori**
>
> Specifies number of grid squares in which to arrange the text.. Type information: Can return: Short Integer or NothingEnum enumerator.
> Mixed **shataiMagnification**
>
> Sets shatai obliquing as a percentage. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **shataiDegreeAngle**
>
> Sets the shatai lens angle in degrees. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **shataiAdjustRotation**
>
> When true, enables shatai rotation. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **shataiAdjustTsume**
>
> When true, enables shatai tsume adjustment. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **tatechuyoko**
>
> When true, makes characters horizontal inside vertical text. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **tatechuyokoXOffset**
>
> Sets the horizontal offset used by horizontal characters in vertical text. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **tatechuyokoYOffset**
>
> Sets the vertical offset used by horizontal characters in vertical text. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **kentenFillColor**
>
> Chooses the kenten-character fill swatch (color, gradient, tint, or mixed ink). Type information: Can return: Swatch, String or NothingEnum enumerator.
> Mixed **kentenStrokeColor**
>
> Chooses the kenten-character stroke swatch (color, gradient, tint, or mixed ink). Type information: Can return: Swatch, String or NothingEnum enumerator.
> Mixed **kentenTint**
>
> Sets kenten character fill tint as a percentage. (Range: 0 to 100). Type information: Can return: Real or NothingEnum enumerator.
> Mixed **kentenStrokeTint**
>
> Sets kenten character stroke tint as a percentage. (Range: 0 to 100). Type information: Can return: Real or NothingEnum enumerator.
> Mixed **kentenWeight**
>
> Sets kenten character stroke weight in points. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **kentenOverprintFill**
>
> Sets how kenten fill overprinting is handled. Type information: Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **kentenOverprintStroke**
>
> Sets how kenten stroke overprinting is handled. Type information: Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **kentenKind**
>
> Sets kenten character style. Type information: Can return: KentenCharacter enumerator or NothingEnum enumerator.
> Mixed **kentenPlacement**
>
> Sets the spacing between kenten characters and parent characters. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **kentenAlignment**
>
> Specifies alignment of kenten characters relative to the parent characters.. Type information: Can return: KentenAlignment enumerator or NothingEnum enumerator.
> Mixed **kentenPosition**
>
> Sets kenten position against the parent character. Type information: Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **kentenFont**
>
> Chooses the kenten character font. Type information: Can return: Font, String or NothingEnum enumerator.
> Mixed **kentenFontStyle**
>
> Sets kenten character font style. Type information: Can return: String or NothingEnum enumerator.
> Mixed **kentenFontSize**
>
> Sets kenten character size in points. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **kentenXScale**
>
> Sets kenten character horizontal size as a percentage of original size. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **kentenYScale**
>
> Specifies vertical size of kenten charachers as a percent of the original size.. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **kentenCustomCharacter**
>
> Sets the kenten character; this is valid only when kenten kind is custom. Type information: Can return: String or NothingEnum enumerator.
> Mixed **kentenCharacterSet**
>
> Sets the character set for the custom kenten character; valid only when kenten kind is custom. Type information: Can return: KentenCharacterSet enumerator or NothingEnum enumerator.
> Mixed **rubyFill**
>
> Chooses the ruby-character fill swatch (color, gradient, tint, or mixed ink). Type information: Can return: Swatch, String or NothingEnum enumerator.
> Mixed **rubyStroke**
>
> Chooses the ruby-character stroke swatch (color, gradient, tint, or mixed ink). Type information: Can return: Swatch, String or NothingEnum enumerator.
> Mixed **rubyTint**
>
> Sets ruby fill color tint as a percentage. (Range: 0 to 100). Type information: Can return: Real or NothingEnum enumerator.
> Mixed **rubyWeight**
>
> Sets ruby character stroke weight in points. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **rubyOverprintFill**
>
> Sets how ruby fill overprinting is handled. Type information: Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **rubyOverprintStroke**
>
> Sets how ruby stroke overprinting is handled. Type information: Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **rubyStrokeTint**
>
> Sets ruby character stroke tint as a percentage. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **rubyFont**
>
> Sets the ruby character font. Type information: Can return: Font, String or NothingEnum enumerator.
> Mixed **rubyFontStyle**
>
> Sets ruby character font style. Type information: Can return: String or NothingEnum enumerator.
> Mixed **rubyFontSize**
>
> Sets ruby character size in points. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **rubyOpenTypePro**
>
> When true, enables OpenType Pro fonts for ruby. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyXScale**
>
> Sets ruby character horizontal size as a percentage of original size. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **rubyYScale**
>
> Sets ruby character vertical size as a percentage of original size. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **rubyType**
>
> Sets ruby type. Type information: Can return: RubyTypes enumerator or NothingEnum enumerator.
> Mixed **rubyAlignment**
>
> Sets ruby alignment. Type information: Can return: RubyAlignments enumerator or NothingEnum enumerator.
> Mixed **rubyPosition**
>
> Sets ruby character position against parent text. Type information: Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **rubyXOffset**
>
> Sets horizontal spacing between ruby and parent characters. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **rubyYOffset**
>
> Sets vertical spacing between ruby and parent characters. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **rubyParentSpacing**
>
> Specifies ruby spacing relative to the parent text.. Type information: Can return: RubyParentSpacing enumerator or NothingEnum enumerator.
> Mixed **rubyAutoAlign**
>
> When true, automatically aligns ruby. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyOverhang**
>
> When true, caps ruby overhang at the specified amount. See ruby parent overhang amount for amount details. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoScaling**
>
> When true, auto-scales ruby to the chosen percentage of parent text size. See ruby parent scaling percent for percentage details. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyParentScalingPercent**
>
> Sets the percentage used to scale parent text size into ruby text size. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **rubyParentOverhangAmount**
>
> Sets how much ruby characters may overhang parent text. Type information: Can return: RubyOverhang enumerator or NothingEnum enumerator.
> Mixed **rubyAutoTcyDigits**
>
> Sets how many digits are included in ruby auto tcy (tate-chuu-yoko). Type information: Can return: Short Integer or NothingEnum enumerator.
