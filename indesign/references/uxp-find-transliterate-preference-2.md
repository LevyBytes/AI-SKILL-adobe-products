# Find Transliterate Preference (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> _Read Only_
>
> Mixed **bulletChar**
>
> Holds the bullet character. Can return: Bullet or NothingEnum enumerator.
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Identifies the containing parent for the FindTransliteratePreference (a Application).
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event-listener collection.
> _Read Only_
>
> Preferences **preferences**
>
> Provides the collection of preferences objects.
> Mixed **sameParaStyleSpacing**
>
> Controls spacing between paragraphs that use the same style. Can return: Unit, Spacing enumerator or NothingEnum enumerator.
> Mixed **designAxes**
>
> Stores Design Axes values. Can return: Array of Reals or NothingEnum enumerator.
> Mixed **findCharacterType**
>
> Specifies which character type is targeted by the find operation. Can return: FindChangeTransliterateCharacterTypes enumerator or NothingEnum enumerator.
> Mixed **appliedCharacterStyle**
>
> Names or supplies the character style to locate or apply as the replacement. Can return: String or NothingEnum enumerator. Can also accept: CharacterStyle.
> Mixed **appliedParagraphStyle**
>
> Names or supplies the paragraph style to locate or apply as the replacement. Can return: String or NothingEnum enumerator. Can also accept: ParagraphStyle.
> Mixed **firstLineIndent**
>
> Sets how far the first line is indented. Can return: Unit or NothingEnum enumerator.
> Mixed **leftIndent**
>
> Sets the left-indent width. Can return: Unit or NothingEnum enumerator.
> Mixed **rightIndent**
>
> Sets the right-indent width. Can return: Unit or NothingEnum enumerator.
> Mixed **spaceBefore**
>
> Gives the vertical paragraph spacing above. Can return: Unit or NothingEnum enumerator.
> Mixed **spaceAfter**
>
> Gives the vertical paragraph spacing below. Can return: Unit or NothingEnum enumerator.
> Mixed **balanceRaggedLines**
>
> Ragged-line balancing is enabled when true or when an appropriate enumeration value is supplied. Note: This is unavailable for one-line text composition. Can return: Boolean, BalanceLinesStyle enumerator or NothingEnum enumerator.
> Mixed **justification**
>
> Selects the paragraph alignment. Can return: Justification enumerator or NothingEnum enumerator.
> Mixed **singleWordJustification**
>
> Chooses the alignment used for lines containing only one word. Can return: SingleWordJustification enumerator or NothingEnum enumerator.
> Mixed **autoLeading**
>
> Auto leading uses this type-size percentage. (Range: 0 to 500). Can return: Real or NothingEnum enumerator.
> Mixed **dropCapLines**
>
> Sets how many lines the drop cap spans. Can return: Short Integer (0 - 25) or NothingEnum enumerator.
> Mixed **dropCapCharacters**
>
> Defines how many characters belong to this initial-cap setting. Can return: Short Integer (0 - 150) or NothingEnum enumerator.
> Mixed **keepLinesTogether**
>
> When true, a defined number of lines stay together as the paragraph crosses columns or text frames. Can return: Boolean or NothingEnum enumerator.
> Mixed **keepAllLinesTogether**
>
> True keeps every line in the paragraph together; false permits breaks across pages or columns. Can return: Boolean or NothingEnum enumerator.
> Mixed **keepWithNext**
>
> Defines the minimum line count kept with the following paragraph. Can return: Short Integer (0 - 5) or NothingEnum enumerator.
> Mixed **keepFirstLines**
>
> Defines how many opening lines must remain together before pagination may split the paragraph. Can return: Short Integer (1 - 50) or NothingEnum enumerator.
> Mixed **keepLastLines**
>
> Defines how many ending lines must remain together after pagination splits the paragraph. Can return: Short Integer (1 - 50) or NothingEnum enumerator.
> Mixed **startParagraph**
>
> Chooses where the paragraph starts. Can return: StartParagraph enumerator or NothingEnum enumerator.
> Mixed **composer**
>
> Names the text composer used to compose the text. Can return: String or NothingEnum enumerator.
> Mixed **lastLineIndent**
>
> Sets the indent amount for the paragraph's final line. Can return: Unit or NothingEnum enumerator.
> Mixed **hyphenateLastWord**
>
> When true, the paragraph's final word may be hyphenated. Note: Requires hyphenation to be true. Can return: Boolean or NothingEnum enumerator.
> Mixed **dropcapDetail**
>
> Controls drop-cap detail using glyph-outline data. 1 = left-side bearing. 2 = descender handling. 0x100,0x200,0x400 serve Japanese frame grid handling. Can return: Long Integer or NothingEnum enumerator.
> Mixed **hyphenateAcrossColumns**
>
> When true, the final word in a text column may be hyphenated. Can return: Boolean or NothingEnum enumerator.
> Mixed **keepRuleAboveInFrame**
>
> When true, the paragraph rule above is forced to stay inside the frame boundaries. Note: Requires rule above to be true. Can return: Boolean or NothingEnum enumerator.
> Mixed **ignoreEdgeAlignment**
>
> When true, the paragraph ignores optical edge alignment. Can return: Boolean or NothingEnum enumerator.
> Mixed **appliedFont**
>
> Supplies the FindTransliteratePreference font, either as a font object or as a font-family name. Can return: Font, String or NothingEnum enumerator.
> Mixed **fontStyle**
>
> Names the font style. Can return: String or NothingEnum enumerator.
> Mixed **pointSize**
>
> Defines the size of the text. Can return: Unit or NothingEnum enumerator.
> Mixed **leading**
>
> Provides text leading. Can return: Unit, Leading enumerator or NothingEnum enumerator.
> Mixed **kerningMethod**
>
> Selects the pair-kerning type. Can return: String or NothingEnum enumerator.
> Mixed **tracking**
>
> Sets how much a text block is tightened or loosened, using thousandths-of-an-em units. Can return: Real or NothingEnum enumerator.
> Mixed **capitalization**
>
> Selects the capitalization scheme. Can return: Capitalization enumerator or NothingEnum enumerator.
> Mixed **position**
>
> Sets the text position against the baseline. Can return: Position enumerator or NothingEnum enumerator.
> Mixed **underline**
>
> True applies underlining to the text. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThru**
>
> True draws strikethrough through the text. Can return: Boolean or NothingEnum enumerator.
> Mixed **ligatures**
>
> True substitutes defined letter combinations, such as fl and fi, with ligature glyphs. Can return: Boolean or NothingEnum enumerator.
> Mixed **noBreak**
>
> True keeps the text on one line. . Can return: Boolean or NothingEnum enumerator.
> Mixed **horizontalScale**
>
> Sets the horizontal scale applied to the FindTransliteratePreference. Can return: Real or NothingEnum enumerator.
> Mixed **verticalScale**
>
> Sets the vertical scale applied to the FindTransliteratePreference. Can return: Real or NothingEnum enumerator.
> Mixed **baselineShift**
>
> Applies a baseline shift to the text. Can return: Unit or NothingEnum enumerator.
> Mixed **skew**
>
> Sets the FindTransliteratePreference skew angle. Can return: Real or NothingEnum enumerator.
> Mixed **fillTint**
>
> Sets the FindTransliteratePreference fill-color tint percentage. Use 0 to 100 for an explicit tint percentage; use -1 for the inherited or overridden value. Can return: Real or NothingEnum enumerator.
> Mixed **strokeTint**
>
> Sets the FindTransliteratePreference stroke-color tint percentage. Use 0 to 100 for an explicit tint percentage; use -1 for the inherited or overridden value. Can return: Real or NothingEnum enumerator.
> Mixed **strokeWeight**
>
> Sets the stroke weight on the text characters. Can return: Unit or NothingEnum enumerator.
> Mixed **overprintStroke**
>
> True makes the character stroke overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **overprintFill**
>
> True makes the character fill color overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfFigureStyle**
>
> Selects the figure style for OpenType fonts. Can return: OTFFigureStyle enumerator or NothingEnum enumerator.
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
> Supplies the swatch (color, gradient, tint, or mixed ink) used for the underline stroke. . Can return: Swatch, String or NothingEnum enumerator.
> Mixed **underlineGapColor**
>
> Supplies the swatch (color, gradient, tint, or mixed ink) used for the underline-stroke gap. Note: Requires a non-solid underline type. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **underlineTint**
>
> Sets the tint percentage for the underline stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **underlineGapTint**
>
> Sets the underline-stroke gap-color tint percentage. (Range: 0 to 100) Note: Requires a non-solid underline type. Can return: Real or NothingEnum enumerator.
> Mixed **underlineOverprint**
>
> True makes the underline stroke color overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineGapOverprint**
>
> True makes the underline-stroke gap color overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineType**
>
> Selects the underline stroke type. Can return: StrokeStyle, String or NothingEnum enumerator.
> Mixed **underlineOffset**
>
> Sets how far the underline is offset from the text baseline. Can return: Unit or NothingEnum enumerator.
> Mixed **underlineWeight**
>
> Sets the underline stroke weight. Can return: Unit or NothingEnum enumerator.
> Mixed **strikeThroughColor**
>
> Supplies the swatch (color, gradient, tint, or mixed ink) used for the strikethrough stroke. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **strikeThroughGapColor**
>
> Supplies the swatch (color, gradient, tint, or mixed ink) used for the strikethrough-stroke gap. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **strikeThroughTint**
>
> Sets strikethrough-stroke tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **strikeThroughGapTint**
>
> Sets gap-color tint for the strikethrough stroke. (Range: 0 to 100) Note: Requires a non-solid strike through type. Can return: Real or NothingEnum enumerator.
> Mixed **strikeThroughOverprint**
>
> True makes the strikethrough stroke overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughGapOverprint**
>
> True makes the strikethrough-stroke gap color overprint. Note: Requires a non-solid strike through type. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughType**
>
> Selects the strikethrough stroke type. Can return: StrokeStyle, String or NothingEnum enumerator.
> Mixed **strikeThroughOffset**
>
> Sets how far the strikethrough stroke is offset from the text baseline. Can return: Unit or NothingEnum enumerator.
> Mixed **strikeThroughWeight**
>
> Sets the strikethrough stroke weight. Can return: Unit or NothingEnum enumerator.
> Mixed **otfSlashedZero**
>
> True enables OpenType slashed zeroes. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfHistorical**
>
> True turns on OpenType historical forms. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfStylisticSets**
>
> Selects the stylistic sets used in OpenType fonts. Can return: Long Integer or NothingEnum enumerator.
> Mixed **gradientFillLength**
>
> Sets the fill gradient's length for linear gradients or radius for radial gradients. Can return: Real or NothingEnum enumerator.
> Mixed **gradientFillAngle**
>
> Sets the angle for a linear gradient applied to the text fill. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeLength**
>
> Sets the stroke gradient's length for linear gradients or radius for radial gradients. Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeAngle**
>
> Sets the angle for a linear gradient applied to the text stroke. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **gradientFillStart**
>
> Gives the page-coordinate start point for a gradient applied to the text fill, using [x, y] coordinate order. Can return: Array of 2 Units or NothingEnum enumerator.
> Mixed **gradientStrokeStart**
>
> Gives the page-coordinate start point for a gradient applied to the text stroke, using [x, y] coordinate order. Can return: Array of 2 Units or NothingEnum enumerator.
> Mixed **otfMark**
>
> True turns on OpenType mark positioning. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfLocale**
>
> True turns on OpenType localized forms. Can return: Boolean or NothingEnum enumerator.
> Mixed **positionalForm**
>
> Chooses which positional form OpenType uses. Can return: PositionalForms enumerator or NothingEnum enumerator.
> Mixed **fillColor**
>
> Supplies the swatch (color, gradient, tint, or mixed ink) used as fill color when searching or changing. Can return: String or NothingEnum enumerator. Can also accept: Swatch.
> Mixed **strokeColor**
>
> Supplies the swatch (color, gradient, tint, or mixed ink) used as stroke color when searching or changing. Can return: String or NothingEnum enumerator. Can also accept: Swatch.
> Mixed **appliedLanguage**
>
> Names or supplies the language to locate or apply as the replacement. Can return: String or NothingEnum enumerator. Can also accept: Language or LanguageWithVendors.
> Mixed **kerningValue**
>
> Sets the space added or removed between characters, using thousandths-of-an-em units. . Can return: Real or NothingEnum enumerator.
> Mixed **characterAlignment**
>
> Aligns small characters against the line's largest character. Can return: CharacterAlignment enumerator or NothingEnum enumerator.
> Mixed **tsume**
>
> Sets horizontal character compression. Can return: Real or NothingEnum enumerator.
> Mixed **leadingAki**
>
> Sets the space before each character. Can return: Real or NothingEnum enumerator.
> Mixed **trailingAki**
>
> Sets the space after each character. Can return: Real or NothingEnum enumerator.
> Mixed **characterRotation**
>
> Gives the rotation angle for individual characters, in degrees. Note: Rotation proceeds counterclockwise. Can return: Real or NothingEnum enumerator.
> Mixed **jidori**
>
> Defines how many grid squares contain the arranged text. . Can return: Short Integer or NothingEnum enumerator.
> Mixed **shataiMagnification**
>
> Sets the shatai obliquing amount as a percentage. Can return: Real or NothingEnum enumerator.
> Mixed **shataiDegreeAngle**
>
> Sets the angle, in degrees, for the shatai lens. Can return: Real or NothingEnum enumerator.
> Mixed **shataiAdjustRotation**
>
> True applies shatai rotation. Can return: Boolean or NothingEnum enumerator.
> Mixed **shataiAdjustTsume**
>
> True adjusts shatai tsume. Can return: Boolean or NothingEnum enumerator.
> Mixed **tatechuyoko**
>
> True turns the character horizontal within vertical text. Can return: Boolean or NothingEnum enumerator.
> Mixed **tatechuyokoXOffset**
>
> Sets the horizontal offset for horizontal characters within vertical text. Can return: Real or NothingEnum enumerator.
> Mixed **tatechuyokoYOffset**
>
> Sets the vertical offset for horizontal characters within vertical text. Can return: Real or NothingEnum enumerator.
> Mixed **kentenFillColor**
>
> Supplies the swatch (color, gradient, tint, or mixed ink) used for kenten-character fill. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **kentenStrokeColor**
>
> Supplies the swatch (color, gradient, tint, or mixed ink) used for kenten-character stroke. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **kentenTint**
>
> Sets kenten fill tint. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **kentenStrokeTint**
>
> Sets kenten stroke tint. Can return: Real or NothingEnum enumerator.
> Mixed **kentenWeight**
>
> Sets the stroke weight for kenten characters, in points. Can return: Real or NothingEnum enumerator.
> Mixed **kentenOverprintFill**
>
> Selects the overprinting method for the kenten fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **kentenOverprintStroke**
>
> Selects the overprinting method for the kenten stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **kentenKind**
>
> Selects the kenten-character style. Can return: KentenCharacter enumerator or NothingEnum enumerator.
> Mixed **kentenPlacement**
>
> Sets spacing from kenten characters to their parent characters. Can return: Real or NothingEnum enumerator.
> Mixed **kentenAlignment**
>
> Aligns kenten characters against parent characters. . Can return: KentenAlignment enumerator or NothingEnum enumerator.
> Mixed **kentenPosition**
>
> Positions kenten against the parent character. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **kentenFont**
>
> Selects the font used for kenten characters. Can return: Font, String or NothingEnum enumerator.
> Mixed **kentenFontStyle**
>
> Names the font style for kenten characters. Can return: String or NothingEnum enumerator.
> Mixed **kentenFontSize**
>
> Sets kenten-character size in points. Can return: Real or NothingEnum enumerator.
> Mixed **kentenXScale**
>
> Sets the horizontal size of kenten characters as a percent of their original size. Can return: Real or NothingEnum enumerator.
> Mixed **kentenYScale**
>
> Sets the vertical size of kenten charachers as a percent of their original size. . Can return: Real or NothingEnum enumerator.
> Mixed **kentenCustomCharacter**
>
> Provides the kenten character. Note: Requires custom kenten kind. Can return: String or NothingEnum enumerator.
> Mixed **kentenCharacterSet**
>
> Chooses the character set for custom kenten. Note: Requires custom kenten kind. . Can return: KentenCharacterSet enumerator or NothingEnum enumerator.
> Mixed **rubyFill**
>
> Supplies the swatch (color, gradient, tint, or mixed ink) used for ruby-character fill. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **rubyStroke**
>
> Supplies the swatch (color, gradient, tint, or mixed ink) used for ruby-character stroke. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **rubyTint**
>
> Sets the ruby fill-color tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **rubyWeight**
>
> Sets ruby-character stroke weight in points. Can return: Real or NothingEnum enumerator.
> Mixed **rubyOverprintFill**
>
> Selects the overprinting method for the ruby fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **rubyOverprintStroke**
>
> Selects the overprinting method for the ruby stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
> Mixed **rubyStrokeTint**
>
> Sets the stroke tint percentage for ruby characters. Can return: Real or NothingEnum enumerator.
> Mixed **rubyFont**
>
> Selects ruby-character font. Can return: Font, String or NothingEnum enumerator.
> Mixed **rubyFontStyle**
>
> Names the font style for ruby characters. Can return: String or NothingEnum enumerator.
> Mixed **rubyFontSize**
>
> Sets ruby-character size in points. Can return: Real or NothingEnum enumerator.
> Mixed **rubyOpenTypePro**
>
> True makes ruby use OpenType Pro fonts. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyXScale**
>
> Sets the horizontal size of ruby characters as a percent of their original size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyYScale**
>
> Sets the vertical size of ruby characters as a percent of their original size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyType**
>
> Selects the ruby type. Can return: RubyTypes enumerator or NothingEnum enumerator.
> Mixed **rubyAlignment**
>
> Selects ruby alignment. Can return: RubyAlignments enumerator or NothingEnum enumerator.
> Mixed **rubyPosition**
>
> Positions ruby characters against parent text. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **rubyXOffset**
>
> Sets horizontal ruby-parent spacing. Can return: Real or NothingEnum enumerator.
> Mixed **rubyYOffset**
>
> Sets vertical ruby-parent spacing. Can return: Real or NothingEnum enumerator.
> Mixed **rubyParentSpacing**
>
> Configures how ruby spacing relates to parent text. . Can return: RubyParentSpacing enumerator or NothingEnum enumerator.
> Mixed **rubyAutoAlign**
>
> True automatically aligns ruby. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyOverhang**
>
> True limits ruby overhang to a specified value. For that value, consult rubyParentOverhangAmount. . Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoScaling**
>
> True automatically scales ruby to the specified percentage of parent text size. For that percentage, consult rubyParentScalingPercent. . Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyParentScalingPercent**
>
> Provides the percentage used to scale parent text size when determining ruby text size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyParentOverhangAmount**
>
> Defines permitted ruby-character overhang beyond parent text. Can return: RubyOverhang enumerator or NothingEnum enumerator.
> Mixed **rubyAutoTcyDigits**
>
> Sets the ruby auto tcy (tate-chuu-yoko) digit count. Can return: Short Integer or NothingEnum enumerator.
> Mixed **rubyAutoTcyIncludeRoman**
>
> True adds Roman characters to ruby auto tcy (tate-chuu-yoko). Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoTcyAutoScale**
>
> True automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby so they fit one em. Can return: Boolean or NothingEnum enumerator.
> Mixed **warichu**
>
> True turns on warichu. Can return: Boolean or NothingEnum enumerator.
> Mixed **warichuSize**
>
> Provides the percentage used to scale parent text size when determining warichu size. Can return: Real or NothingEnum enumerator.
> Mixed **warichuLines**
>
> Sets how many warichu lines fit within one normal line. Can return: Short Integer or NothingEnum enumerator.
> Mixed **warichuLineSpacing**
>
> Sets the gap between warichu-character lines. Can return: Real or NothingEnum enumerator.
> Mixed **warichuAlignment**
>
> Selects warichu alignment. Can return: WarichuAlignment enumerator or NothingEnum enumerator.
> Mixed **warichuCharsAfterBreak**
>
> Sets the minimum post-break character count. . Can return: Short Integer or NothingEnum enumerator.
> Mixed **warichuCharsBeforeBreak**
>
> Sets the minimum pre-break character count. Can return: Short Integer or NothingEnum enumerator.
> Mixed **otfProportionalMetrics**
>
> True uses OpenType proportional CJK metrics for kerning. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfHVKana**
>
> True switches hiragana fonts that use different glyphs for horizontal and vertical writing. . Can return: Boolean or NothingEnum enumerator.
> Mixed **otfRomanItalics**
>
> True italicizes half-width alphanumerics. . Can return: Boolean or NothingEnum enumerator.
> Mixed **scaleAffectsLineHeight**
>
> True lets line size change when characters are scaled. . Can return: Boolean or NothingEnum enumerator.
> Mixed **cjkGridTracking**
>
> True applies CJK-grid tracking to non-Roman characters. Can return: Boolean or NothingEnum enumerator.
> Mixed **glyphForm**
>
> Selects the glyph variant that replaces standard glyphs. Can return: AlternateGlyphForms enumerator or NothingEnum enumerator.
> Mixed **paragraphGyoudori**
>
> True applies gyoudori mode to the whole paragraph; false applies it separately to each paragraph line. Can return: Boolean or NothingEnum enumerator.
> Mixed **gridAlignment**
>
> Chooses either frame-grid or baseline-grid alignment. Can return: GridAlignment enumerator or NothingEnum enumerator.
> Mixed **gridGyoudori**
>
> Sets the manual gyoudori value. Can return: Short Integer or NothingEnum enumerator.
> Mixed **autoTcy**
>
> Sets the half-width character count threshold at or below which characters run horizontally in vertical text automatically. Can return: Short Integer or NothingEnum enumerator.
> Mixed **autoTcyIncludeRoman**
>
> True includes Roman characters in auto tcy. Can return: Boolean or NothingEnum enumerator.
> Mixed **kinsokuSet**
>
> Selects the kinsoku set for permissible breaking. Can return: KinsokuTable, KinsokuSet enumerator, String or NothingEnum enumerator.
> Mixed **kinsokuType**
>
> Chooses the kinsoku processing that blocks kinsoku characters at line starts or ends. Note: Requires a defined kinsoku set. Can return: KinsokuType enumerator or NothingEnum enumerator.
> Mixed **kinsokuHangType**
>
> Selects which hanging punctuation is allowed. Note: Requires an active kinsoku set. Can return: KinsokuHangTypes enumerator or NothingEnum enumerator.
> Mixed **bunriKinshi**
>
> True extends the selected kinsoku set with the double period (..), ellipse (...), and double hyphen (--). Note: Requires an active kinsoku set. Can return: Boolean or NothingEnum enumerator.
> Mixed **mojikumi**
>
> Chooses the mojikumi table. For details, consult mojikumi table defaults before setting this value. Can return: MojikumiTable, String, MojikumiTableDefaults enumerator or NothingEnum enumerator.
> Mixed **rensuuji**
>
> True blocks line breaks in numbers; false permits multi-digit numbers to break between digits. Can return: Boolean or NothingEnum enumerator.
> Mixed **rotateSingleByteCharacters**
>
> True rotates vertical-text Roman characters. Can return: Boolean or NothingEnum enumerator.
> Mixed **leadingModel**
>
> Selects the point from which leading is measured from one line to the next. Can return: LeadingModel enumerator or NothingEnum enumerator.
> Mixed **treatIdeographicSpaceAsSpace**
>
> True prevents ideographic spaces from wrapping to the following line as text characters do. Can return: Boolean or NothingEnum enumerator.
> Mixed **allowArbitraryHyphenation**
>
> True allows words that lack a hyphenation-dictionary association to break on any character at the next line. Can return: Boolean or NothingEnum enumerator.
> Mixed **bulletsTextAfter**
>
> Provides the bullet text-after string expression. Can return: String or NothingEnum enumerator.
> Mixed **bulletsCharacterStyle**
>
> Selects the character style for bullet text-after content. Can return: CharacterStyle, String or NothingEnum enumerator.
> Mixed **bulletsAlignment**
>
> Selects bullet-character alignment. Can return: ListAlignment enumerator or NothingEnum enumerator.
> Mixed **appliedNumberingList**
>
> Selects the list that contains the paragraph. Can return: NumberingList, String or NothingEnum enumerator.
> Mixed **numberingLevel**
>
> Sets the paragraph level. Can return: Long Integer or NothingEnum enumerator.
> Mixed **numberingFormat**
>
> Provides numbering-format choices. Can return: NumberingStyle enumerator, String or NothingEnum enumerator.
> Mixed **numberingExpression**
>
> Provides the expression used for numbering strings. Can return: String or NothingEnum enumerator.
> Mixed **numberingCharacterStyle**
>
> Selects the character style for numbering strings. Can return: CharacterStyle, String or NothingEnum enumerator.
> Mixed **numberingContinue**
>
> Continues numbering at this level. Can return: Boolean or NothingEnum enumerator.
> Mixed **numberingStartAt**
>
> Sets the starting number for a numbered list. Can return: Long Integer or NothingEnum enumerator.
> Mixed **numberingApplyRestartPolicy**
>
> True applies the numbering restart policy. Can return: Boolean or NothingEnum enumerator.
> Mixed **numberingAlignment**
>
> Selects number alignment. Can return: ListAlignment enumerator or NothingEnum enumerator.
> Mixed **bulletsAndNumberingListType**
>
> Selects the bullets-and-numbering list type. Can return: ListType enumerator or NothingEnum enumerator.
> Object **properties**
>
> Allows multiple properties to be set together.
