# Find Grep Preference (part 2)

> Mixed **rubyAutoAlign**
>
> True automatically aligns ruby. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyOverhang**
>
> True constrains ruby overhang to the chosen amount. Amount details are under ruby parent overhang amount. . Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoScaling**
>
> True scales ruby automatically to the chosen percentage of parent text size. Percent details are under ruby parent scaling percent. . Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyParentScalingPercent**
>
> Percentage used to scale the parent text size when determining ruby text size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyParentOverhangAmount**
>
> Allowed parent-text overhang amount for ruby characters. Can return: RubyOverhang enumerator or NothingEnum enumerator.
> Mixed **rubyAutoTcyDigits**
>
> Number of digits included in auto tcy (tate-chuu-yoko) for ruby. Can return: Short Integer or NothingEnum enumerator.
> Mixed **rubyAutoTcyIncludeRoman**
>
> True includes Roman characters in auto tcy (tate-chuu-yoko) for ruby. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoTcyAutoScale**
>
> True scales glyphs automatically in auto tcy (tate-chuu-yoko) for ruby so they fit one em. Can return: Boolean or NothingEnum enumerator.
> Mixed **warichu**
>
> True enables warichu. Can return: Boolean or NothingEnum enumerator.
> Mixed **warichuSize**
>
> Percentage used to scale parent text size when determining warichu size. Can return: Real or NothingEnum enumerator.
> Mixed **warichuLines**
>
> Number of warichu lines within one normal line. Can return: Short Integer or NothingEnum enumerator.
> Mixed **warichuLineSpacing**
>
> Line gap for warichu characters. Can return: Real or NothingEnum enumerator.
> Mixed **warichuAlignment**
>
> Warichu alignment setting. Can return: WarichuAlignment enumerator or NothingEnum enumerator.
> Mixed **warichuCharsAfterBreak**
>
> Minimum characters allowed following a line break. . Can return: Short Integer or NothingEnum enumerator.
> Mixed **warichuCharsBeforeBreak**
>
> Minimum characters allowed ahead of a line break. Can return: Short Integer or NothingEnum enumerator.
> Mixed **otfProportionalMetrics**
>
> True kerns with OpenType proportional CJK metrics. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfHVKana**
>
> True switches hiragana fonts, which use different glyphs for horizontal and vertical text. . Can return: Boolean or NothingEnum enumerator.
> Mixed **otfRomanItalics**
>
> True italicizes half-width alphanumerics. . Can return: Boolean or NothingEnum enumerator.
> Mixed **scaleAffectsLineHeight**
>
> True resizes the line when character scaling changes. . Can return: Boolean or NothingEnum enumerator.
> Mixed **cjkGridTracking**
>
> True tracks non-Roman characters using grid tracking in CJK grids. Can return: Boolean or NothingEnum enumerator.
> Mixed **glyphForm**
>
> Glyph variant substituted for standard glyphs. Can return: AlternateGlyphForms enumerator or NothingEnum enumerator.
> Mixed **paragraphGyoudori**
>
> True applies gyoudori mode to the whole paragraph; false applies it line by line within the paragraph. Can return: Boolean or NothingEnum enumerator.
> Mixed **gridAlignment**
>
> Frame-grid or baseline-grid alignment. Can return: GridAlignment enumerator or NothingEnum enumerator.
> Mixed **gridGyoudori**
>
> Manual gyoudori value. Can return: Short Integer or NothingEnum enumerator.
> Mixed **autoTcy**
>
> Half-width character threshold for automatic horizontal layout in vertical text. Can return: Short Integer or NothingEnum enumerator.
> Mixed **autoTcyIncludeRoman**
>
> True includes Roman characters in auto tcy. Can return: Boolean or NothingEnum enumerator.
> Mixed **kinsokuSet**
>
> Kinsoku line-break rule set. Can return: KinsokuTable, KinsokuSet enumerator, String or NothingEnum enumerator.
> Mixed **kinsokuType**
>
> Kinsoku processing type that stops kinsoku characters from appearing at line starts or line ends. Note: Requires a defined kinsoku set. Can return: KinsokuType enumerator or NothingEnum enumerator.
> Mixed **kinsokuHangType**
>
> Hanging-punctuation mode to allow. Note: Use with an active kinsoku set. Can return: KinsokuHangTypes enumerator or NothingEnum enumerator.
> Mixed **bunriKinshi**
>
> True adds the double period (..), ellipse (...), and double hyphen (--) to the chosen kinsoku set. Note: Use with an active kinsoku set. Can return: Boolean or NothingEnum enumerator.
> Mixed **mojikumi**
>
> Mojikumi table setting. Reference topic: mojikumi table defaults entry. Can return: MojikumiTable, String, MojikumiTableDefaults enumerator or NothingEnum enumerator.
> Mixed **rensuuji**
>
> True blocks line breaks inside numbers; false lets multi-digit numbers break between digits. Can return: Boolean or NothingEnum enumerator.
> Mixed **rotateSingleByteCharacters**
>
> True rotates Roman characters when text is vertical. Can return: Boolean or NothingEnum enumerator.
> Mixed **leadingModel**
>
> Point used as the line-to-line leading measurement reference. Can return: LeadingModel enumerator or NothingEnum enumerator.
> Mixed **treatIdeographicSpaceAsSpace**
>
> True keeps ideographic spaces from wrapping like text characters onto the next line. Can return: Boolean or NothingEnum enumerator.
> Mixed **allowArbitraryHyphenation**
>
> True allows words without a hyphenation-dictionary association to break onto the next line at any character. Can return: Boolean or NothingEnum enumerator.
> Mixed **bulletsTextAfter**
>
> Text-after string expression used for bullets. Can return: String or NothingEnum enumerator.
> Mixed **appliedNumberingList**
>
> Numbering list that the item belongs to. Can return: NumberingList, String or NothingEnum enumerator.
> Mixed **numberingLevel**
>
> Paragraph level value. Can return: Long Integer or NothingEnum enumerator.
> Mixed **numberingFormat**
>
> Numbering format setting. Can return: NumberingStyle enumerator, String or NothingEnum enumerator.
> Mixed **numberingContinue**
>
> Continue numbering at this level. Can return: Boolean or NothingEnum enumerator.
> Mixed **numberingStartAt**
>
> Starting number for a numbered list. Can return: Long Integer or NothingEnum enumerator.
> Mixed **numberingApplyRestartPolicy**
>
> True applies the numbering restart policy. Can return: Boolean or NothingEnum enumerator.
> Mixed **bulletsCharacterStyle**
>
> Character style applied to the bullets text-after string. Can return: CharacterStyle, String or NothingEnum enumerator.
> Mixed **numberingCharacterStyle**
>
> Character style applied to the numbering string. Can return: CharacterStyle, String or NothingEnum enumerator.
> Mixed **numberingExpression**
>
> Number-string expression used for numbering. Can return: String or NothingEnum enumerator.
> Mixed **bulletsAndNumberingListType**
>
> Bullets-and-numbering list type. Can return: ListType enumerator or NothingEnum enumerator.
> Object **properties**
>
> Property that supports setting several properties in one operation.
