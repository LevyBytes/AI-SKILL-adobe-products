# Character Style (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Definition for a character style.

## Instance

> _Read Only_
>
> Mixed **imported**
>
> When true, this style came in from a different document. Can return: Boolean or NothingEnum enumerator.
> _Read Only_
>
> Number **id**
>
> Identifier value assigned uniquely to the CharacterStyle.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for the CharacterStyle, which may be a Document, Application or CharacterStyleGroup.
> _Read Only_
>
> Number **index**
>
> Position of the CharacterStyle inside the object that contains it.
> _Read Only_
>
> StyleExportTagMaps **styleExportTagMaps**
>
> Holds the style export tag map collection.
> _Read Only_
>
> Events **events**
>
> Holds the event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listener collection.
> Mixed **basedOn**
>
> Style used as the basis for this style. Can return: CharacterStyle or String.
> Mixed **splitDocument**
>
> Controls Split Document for EPUB output only. Can return: Boolean or NothingEnum enumerator.
> Mixed **emitCss**
>
> Controls whether CSS is emitted. Can return: Boolean or NothingEnum enumerator.
> Mixed **styleUniqueId**
>
> Assignable unique id for distinguishing styles; intended for internal use only. Can return: String or NothingEnum enumerator.
> Mixed **appliedFont**
>
> Font assigned to the CharacterStyle, as either a font object or the font family name. Can return: Font, String or NothingEnum enumerator.
> Mixed **fontStyle**
>
> Font-style name. Can return: String or NothingEnum enumerator.
> Mixed **pointSize**
>
> Size used for the text. Can return: Unit or NothingEnum enumerator.
> Mixed **leading**
>
> Leading value for text lines. Can return: Unit, Leading enumerator or NothingEnum enumerator.
> Mixed **kerningMethod**
>
> Pair-kerning method type. Can return: String or NothingEnum enumerator.
> Mixed **tracking**
>
> Amount that loosens or tightens a text block, expressed in thousandths of an em. Can return: Real or NothingEnum enumerator.
> Mixed **capitalization**
>
> Capitalization scheme in use. Can return: Capitalization enumerator or NothingEnum enumerator.
> Mixed **position**
>
> Baseline-related placement used for the text. Can return: Position enumerator or NothingEnum enumerator.
> Mixed **underline**
>
> When true, underline formatting is applied to the text. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThru**
>
> When true, a strikethrough rule is drawn through the text. Can return: Boolean or NothingEnum enumerator.
> Mixed **ligatures**
>
> When true, certain character pairs such as fl or fi are substituted with ligature glyphs. Can return: Boolean or NothingEnum enumerator.
> Mixed **noBreak**
>
> When true, the text remains on one line. Can return: Boolean or NothingEnum enumerator.
> Mixed **horizontalScale**
>
> Horizontal scale value applied to the CharacterStyle. Can return: Real or NothingEnum enumerator.
> Mixed **verticalScale**
>
> Vertical scale value applied to the CharacterStyle. Can return: Real or NothingEnum enumerator.
> Mixed **baselineShift**
>
> Shift amount applied against the text baseline. Can return: Unit or NothingEnum enumerator.
> Mixed **skew**
>
> Skew angle set on the CharacterStyle. Can return: Real or NothingEnum enumerator.
> Mixed **fillTint**
>
> Fill-color tint percentage for the CharacterStyle. Use 0 to 100 for a tint percentage, or -1 for the inherited or overridden value. Can return: Real or NothingEnum enumerator.
> Mixed **strokeTint**
>
> Stroke-color tint percentage for the CharacterStyle. Use 0 to 100 for a tint percentage, or -1 for the inherited or overridden value. Can return: Real or NothingEnum enumerator.
> Mixed **strokeWeight**
>
> Stroke weight assigned to the text characters. Can return: Unit or NothingEnum enumerator.
> Mixed **overprintStroke**
>
> When true, character strokes overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **overprintFill**
>
> When true, character fills overprint. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfFigureStyle**
>
> Figure style used with OpenType fonts. Can return: OTFFigureStyle enumerator or NothingEnum enumerator.
> Mixed **otfOrdinal**
>
> When true, OpenType ordinal forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfFraction**
>
> When true, OpenType fraction forms are used. Can return: Boolean or NothingEnum enumerator.
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
> Swatch assigned to the underline stroke, including color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **underlineGapColor**
>
> Swatch assigned to the underline-stroke gap, including color, gradient, tint, or mixed ink. Note: Applies only for non-solid underline types. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **underlineTint**
>
> Tint percentage for the underline stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **underlineGapTint**
>
> Tint percentage for the underline-stroke gap color. (Range: 0 to 100) Note: Applies only for non-solid underline types. Can return: Real or NothingEnum enumerator.
> Mixed **underlineOverprint**
>
> When true, the underline stroke color overprints. Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineGapOverprint**
>
> When true, the underline-stroke gap color overprints. Can return: Boolean or NothingEnum enumerator.
> Mixed **underlineType**
>
> Stroke style used by the underline stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
> Mixed **underlineOffset**
>
> Offset distance from the text baseline to the underline. Can return: Unit or NothingEnum enumerator.
> Mixed **underlineWeight**
>
> Weight assigned to the underline stroke. Can return: Unit or NothingEnum enumerator.
> Mixed **strikeThroughColor**
>
> Swatch assigned to the strikethrough stroke, including color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **strikeThroughGapColor**
>
> Swatch assigned to the strikethrough-stroke gap, including color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **strikeThroughTint**
>
> Strikethrough stroke tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **strikeThroughGapTint**
>
> Tint percentage for the gap color in the strikethrough stroke. (Range: 0 to 100) Note: Applies only for non-solid strike through types. Can return: Real or NothingEnum enumerator.
> Mixed **strikeThroughOverprint**
>
> When true, the strikethrough stroke overprints. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughGapOverprint**
>
> When true, the strikethrough-stroke gap color overprints. Note: Applies only for non-solid strike through types. Can return: Boolean or NothingEnum enumerator.
> Mixed **strikeThroughType**
>
> Stroke style used by the strikethrough stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
> Mixed **strikeThroughOffset**
>
> Offset distance from the text baseline to the strikethrough stroke. Can return: Unit or NothingEnum enumerator.
> Mixed **strikeThroughWeight**
>
> Weight assigned to the strikethrough stroke. Can return: Unit or NothingEnum enumerator.
> Mixed **fillColor**
>
> Swatch assigned to the CharacterStyle fill, including color, gradient, tint, or mixed ink. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
> Mixed **strokeColor**
>
> Swatch assigned to the CharacterStyle stroke, including color, gradient, tint, or mixed ink. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
> Mixed **appliedLanguage**
>
> Text language setting. Can return: LanguageWithVendors, Language or NothingEnum enumerator. Also accepts: String.
> Mixed **includeClass**
>
> When true, the style produces a class attribute. Can return: Boolean or NothingEnum enumerator.
> Mixed **designAxes**
>
> Design Axes values. Can return: Array of Reals or NothingEnum enumerator.
> Mixed **otfSlashedZero**
>
> When true, OpenType fonts use a slashed zero. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfHistorical**
>
> When true, OpenType historical forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfStylisticSets**
>
> OpenType stylistic sets selected for use. Can return: Long Integer or NothingEnum enumerator.
> Mixed **gradientFillLength**
>
> For the text fill, sets linear-gradient length or radial-gradient radius. Can return: Real or NothingEnum enumerator.
> Mixed **gradientFillAngle**
>
> Angle for a linear gradient applied to the text fill. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeLength**
>
> For the text stroke, sets linear-gradient length or radial-gradient radius. Can return: Real or NothingEnum enumerator.
> Mixed **gradientStrokeAngle**
>
> Angle for a linear gradient applied to the text stroke. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
> Mixed **gradientFillStart**
>
> Page-coordinate starting point for a gradient on the text fill, formatted as [x, y] coordinates. Can return: Array of 2 Units or NothingEnum enumerator.
> Mixed **gradientStrokeStart**
>
> Page-coordinate starting point for a gradient on the text stroke, formatted as [x, y] coordinates. Can return: Array of 2 Units or NothingEnum enumerator.
> Mixed **otfMark**
>
> When true, OpenType mark positioning is used. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfLocale**
>
> When true, OpenType localized forms are used. Can return: Boolean or NothingEnum enumerator.
> Mixed **positionalForm**
>
> OpenType positional form setting. Can return: PositionalForms enumerator or NothingEnum enumerator.
> String **name**
>
> Style name.
> Mixed **previewColor**
>
> Preview color, provided either as an R, G, B array of three doubles from 0 to 255 or through a UIColors value. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
> Mixed **miterLimit**
>
> Maximum ratio between stroke width and miter length before a pointed miter join changes to a squared-off bevel join. Can return: Real (0 - 1000) or NothingEnum enumerator.
> Mixed **strokeAlignment**
>
> Stroke alignment assigned to the text. Can return: TextStrokeAlign enumerator or NothingEnum enumerator.
> Mixed **endJoin**
>
> Stroke-join type assigned to the text characters. Can return: OutlineJoin enumerator or NothingEnum enumerator.
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
> Keyboard-direction setting for the character. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
> Mixed **digitsType**
>
> Digit-type setting. Can return: DigitsTypeOptions enumerator or NothingEnum enumerator.
> Mixed **kashidas**
>
> Kashidas usage for justification. Can return: KashidasOptions enumerator or NothingEnum enumerator.
> Mixed **diacriticPosition**
>
> Placement used for diacritic characters. Can return: DiacriticPositionOptions enumerator or NothingEnum enumerator.
> Mixed **xOffsetDiacritic**
>
> Horizontal x offset for diacritic adjustment. Can return: Real or NothingEnum enumerator.
> Mixed **yOffsetDiacritic**
>
> Vertical y offset for diacritic adjustment. Can return: Real or NothingEnum enumerator.
> Mixed **characterAlignment**
>
> Alignment that positions small characters against the largest character on the line. Can return: CharacterAlignment enumerator or NothingEnum enumerator.
> Mixed **tsume**
>
> Horizontal compression amount for characters. Can return: Real or NothingEnum enumerator.
> Mixed **leadingAki**
>
> Space inserted before each character. Can return: Real or NothingEnum enumerator.
> Mixed **trailingAki**
>
> Space inserted after each character. Can return: Real or NothingEnum enumerator.
> Mixed **characterRotation**
>
> Character-by-character rotation angle, in degrees. Note: Rotation is counterclockwise. Can return: Real or NothingEnum enumerator.
> Mixed **jidori**
>
> Grid-square count used for text arrangement. Can return: Short Integer or NothingEnum enumerator.
> Mixed **shataiMagnification**
>
> Shatai obliquing amount expressed as a percentage. Can return: Real or NothingEnum enumerator.
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
> Horizontal offset for horizontal characters placed in vertical text. Can return: Real or NothingEnum enumerator.
> Mixed **tatechuyokoYOffset**
>
> Vertical offset for horizontal characters placed in vertical text. Can return: Real or NothingEnum enumerator.
> Mixed **kentenFillColor**
>
> Swatch assigned to kenten-character fills, including color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **kentenStrokeColor**
>
> Swatch assigned to kenten-character strokes, including color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **kentenTint**
>
> Kenten fill tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
> Mixed **kentenStrokeTint**
>
> Kenten stroke tint percentage. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
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
> Kenten-character style. Can return: KentenCharacter enumerator or NothingEnum enumerator.
> Mixed **kentenPlacement**
>
> Distance separating kenten characters from their parent characters. Can return: Real or NothingEnum enumerator.
> Mixed **kentenAlignment**
>
> Alignment of kenten characters relative to parent characters. Can return: KentenAlignment enumerator or NothingEnum enumerator.
> Mixed **kentenPosition**
>
> Position of kenten against the parent character. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **kentenFont**
>
> Font used for kenten characters. Can return: Font, String or NothingEnum enumerator.
> Mixed **kentenFontStyle**
>
> Font style used for kenten characters. Can return: String or NothingEnum enumerator.
> Mixed **kentenFontSize**
>
> Point size for kenten characters. Can return: Real or NothingEnum enumerator.
> Mixed **kentenXScale**
>
> Horizontal kenten-character size as a percentage of the original size. Can return: Real or NothingEnum enumerator.
> Mixed **kentenYScale**
>
> Vertical kenten-character size as a percentage of the original size. Can return: Real or NothingEnum enumerator.
> Mixed **kentenCustomCharacter**
>
> Custom kenten character. Note: For custom kenten kind only. Can return: String or NothingEnum enumerator.
> Mixed **kentenCharacterSet**
>
> Character set for the custom kenten character. Note: For custom kenten kind only. Can return: KentenCharacterSet enumerator or NothingEnum enumerator.
> Mixed **rubyFill**
>
> Swatch assigned to ruby-character fills, including color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
> Mixed **rubyStroke**
>
> Swatch assigned to ruby-character strokes, including color, gradient, tint, or mixed ink. Can return: Swatch, String or NothingEnum enumerator.
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
> Font assigned to ruby characters. Can return: Font, String or NothingEnum enumerator.
> Mixed **rubyFontStyle**
>
> Font style used for ruby characters. Can return: String or NothingEnum enumerator.
> Mixed **rubyFontSize**
>
> Point size for ruby characters. Can return: Real or NothingEnum enumerator.
> Mixed **rubyOpenTypePro**
>
> When true, ruby uses OpenType Pro fonts. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyXScale**
>
> Horizontal ruby-character size, expressed as a percentage of the original size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyYScale**
>
> Vertical ruby-character size, expressed as a percentage of the original size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyType**
>
> Ruby type setting. Can return: RubyTypes enumerator or NothingEnum enumerator.
> Mixed **rubyAlignment**
>
> Ruby alignment setting. Can return: RubyAlignments enumerator or NothingEnum enumerator.
> Mixed **rubyPosition**
>
> Position of ruby characters against the parent text. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **rubyXOffset**
>
> Horizontal gap separating ruby from parent characters. Can return: Real or NothingEnum enumerator.
> Mixed **rubyYOffset**
>
> Vertical gap separating ruby from parent characters. Can return: Real or NothingEnum enumerator.
> Mixed **rubyParentSpacing**
>
> Ruby spacing relative to parent text. Can return: RubyParentSpacing enumerator or NothingEnum enumerator.
> Mixed **rubyAutoAlign**
>
> When true, ruby auto alignment is enabled. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyOverhang**
>
> When true, ruby overhang is limited to the specified amount. For the amount setting, consult the related parent-overhang amount for ruby. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoScaling**
>
> When true, ruby is automatically scaled to the specified percentage of the parent text size. For the percent setting, consult the related parent scaling value for ruby. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyParentScalingPercent**
>
> Percentage used to scale the parent text size when determining ruby text size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyParentOverhangAmount**
>
> Permitted overhang amount for ruby characters beyond parent text. Can return: RubyOverhang enumerator or NothingEnum enumerator.
> Mixed **warichu**
>
> When true, warichu is enabled. Can return: Boolean or NothingEnum enumerator.
> Mixed **warichuSize**
>
> Percentage used to scale parent text size when determining warichu size. Can return: Real or NothingEnum enumerator.
> Mixed **warichuLines**
>
> Number of warichu lines inside one normal line. Can return: Short Integer or NothingEnum enumerator.
> Mixed **warichuLineSpacing**
>
> Line gap for warichu characters. Can return: Real or NothingEnum enumerator.
> Mixed **warichuAlignment**
>
> Warichu alignment setting. Can return: WarichuAlignment enumerator or NothingEnum enumerator.
> Mixed **warichuCharsAfterBreak**
>
> Post-break minimum character count. Can return: Short Integer or NothingEnum enumerator.
> Mixed **warichuCharsBeforeBreak**
>
> Pre-break minimum character count. Can return: Short Integer or NothingEnum enumerator.
> Mixed **otfProportionalMetrics**
>
> When true, OpenType proportional CJK metrics determine kerning. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfHVKana**
>
> When true, alternate hiragana glyphs are used for horizontal and vertical fonts. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfRomanItalics**
>
> When true, italics are applied to half-width alphanumerics. Can return: Boolean or NothingEnum enumerator.
> Mixed **scaleAffectsLineHeight**
>
> When true, line size changes as characters are scaled. Can return: Boolean or NothingEnum enumerator.
> Mixed **cjkGridTracking**
>
> When true, CJK-grid non-Roman characters use grid tracking. Can return: Boolean or NothingEnum enumerator.
> Mixed **glyphForm**
>
> Alternate glyph form used in place of standard glyphs. Can return: AlternateGlyphForms enumerator or NothingEnum enumerator.
> Mixed **rubyAutoTcyDigits**
>
> Digit count included in auto tcy (tate-chuu-yoko) for ruby. Can return: Short Integer or NothingEnum enumerator.
> Mixed **rubyAutoTcyIncludeRoman**
>
> When true, Roman characters are included in auto tcy (tate-chuu-yoko) for ruby. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoTcyAutoScale**
>
> When true, glyphs in auto tcy (tate-chuu-yoko) for ruby are automatically scaled to fit one em. Can return: Boolean or NothingEnum enumerator.
> String **label**
>
> Settable property that accepts any string.
> Object **properties**
>
> Property used to set several properties in one operation.
