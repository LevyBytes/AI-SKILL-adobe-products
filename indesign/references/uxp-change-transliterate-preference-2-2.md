# Change Transliterate Preference (part 2)

> Mixed **rubyAutoTcyIncludeRoman**
>
> When true, ruby auto tcy (tate-chuu-yoko) includes Roman characters. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoTcyAutoScale**
>
> When true, glyphs in ruby auto tcy (tate-chuu-yoko) are automatically scaled to one em. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **warichu**
>
> When true, enables warichu. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **warichuSize**
>
> Sets the percentage used to derive warichu size from parent text size. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **warichuLines**
>
> Sets how many warichu lines fit within one normal line. Type information: Can return: Short Integer or NothingEnum enumerator.
> Mixed **warichuLineSpacing**
>
> Sets spacing between warichu character lines. Type information: Can return: Real or NothingEnum enumerator.
> Mixed **warichuAlignment**
>
> Sets warichu alignment. Type information: Can return: WarichuAlignment enumerator or NothingEnum enumerator.
> Mixed **warichuCharsAfterBreak**
>
> Specifies minimum number of characters allowed after a line break.. Type information: Can return: Short Integer or NothingEnum enumerator.
> Mixed **warichuCharsBeforeBreak**
>
> Sets the minimum characters permitted before a line break. Type information: Can return: Short Integer or NothingEnum enumerator.
> Mixed **otfProportionalMetrics**
>
> When true, kerning follows proportional CJK metrics in OpenType fonts. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **otfHVKana**
>
> When true, switches hiragana fonts, which have different glyphs for horizontal and vertical.. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **otfRomanItalics**
>
> When true, applies italics to half-width alphanumerics.. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **scaleAffectsLineHeight**
>
> When true, the line changes size when characters are scaled.. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **cjkGridTracking**
>
> When true, grid tracking is used for non-Roman characters in CJK grids. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **glyphForm**
>
> Sets the glyph variant substituted for standard glyphs. Type information: Can return: AlternateGlyphForms enumerator or NothingEnum enumerator.
> Mixed **paragraphGyoudori**
>
> When true, gyoudori mode covers the whole paragraph; when false, it applies line by line within the paragraph. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **gridAlignment**
>
> Sets alignment against the frame grid or baseline grid. Type information: Can return: GridAlignment enumerator or NothingEnum enumerator.
> Mixed **gridGyoudori**
>
> Sets manual gyoudori. Type information: Can return: Short Integer or NothingEnum enumerator.
> Mixed **autoTcy**
>
> Sets the half-width character count threshold for automatic horizontal composition in vertical text. Type information: Can return: Short Integer or NothingEnum enumerator.
> Mixed **autoTcyIncludeRoman**
>
> When true, auto tcy includes Roman characters. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **kinsokuSet**
>
> Selects the kinsoku set used to determine legal line breaks. Type information: Can return: KinsokuTable, KinsokuSet enumerator, String or NothingEnum enumerator.
> Mixed **kinsokuType**
>
> Sets kinsoku processing that blocks kinsoku characters at line starts or ends; this is valid only when a kinsoku set is defined. Type information: Can return: KinsokuType enumerator or NothingEnum enumerator.
> Mixed **kinsokuHangType**
>
> Sets the hanging punctuation type allowed; this is valid only when a kinsoku set is in effect. Type information: Can return: KinsokuHangTypes enumerator or NothingEnum enumerator.
> Mixed **bunriKinshi**
>
> When true, the selected kinsoku set also receives the double period (..), ellipse (...), and double hyphen (--); only valid when a kinsoku set is in effect. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **mojikumi**
>
> Sets the mojikumi table. For details, see mojikumi table defaults. Type information: Can return: MojikumiTable, String, MojikumiTableDefaults enumerator or NothingEnum enumerator.
> Mixed **rensuuji**
>
> When true, prevents line breaks in numbers; when false, multi-digit numbers may break between digits. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **rotateSingleByteCharacters**
>
> When true, Roman characters rotate in vertical text. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **leadingModel**
>
> Sets the point used to measure leading between lines. Type information: Can return: LeadingModel enumerator or NothingEnum enumerator.
> Mixed **treatIdeographicSpaceAsSpace**
>
> When true, ideographic spaces do not wrap to the next line like text characters. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **allowArbitraryHyphenation**
>
> When true, words lacking a hyphenation-dictionary association may break to the next line on any character. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **bulletsTextAfter**
>
> Sets the string expression placed after bullet text. Type information: Can return: String or NothingEnum enumerator.
> Mixed **bulletsCharacterStyle**
>
> Sets the character style for the after-text string. Type information: Can return: CharacterStyle, String or NothingEnum enumerator.
> Mixed **bulletsAlignment**
>
> Sets bullet character alignment. Type information: Can return: ListAlignment enumerator or NothingEnum enumerator.
> Mixed **appliedNumberingList**
>
> Sets the list membership. Type information: Can return: NumberingList, String or NothingEnum enumerator.
> Mixed **numberingLevel**
>
> Sets the paragraph level. Type information: Can return: Long Integer or NothingEnum enumerator.
> Mixed **numberingFormat**
>
> Sets numbering-format options. Type information: Can return: NumberingStyle enumerator, String or NothingEnum enumerator.
> Mixed **numberingExpression**
>
> Sets the numbering string expression. Type information: Can return: String or NothingEnum enumerator.
> Mixed **numberingCharacterStyle**
>
> Sets the character style for the number string. Type information: Can return: CharacterStyle, String or NothingEnum enumerator.
> Mixed **numberingContinue**
>
> Continues numbering at this level. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **numberingStartAt**
>
> Sets the starting number for a numbered list. Type information: Can return: Long Integer or NothingEnum enumerator.
> Mixed **numberingApplyRestartPolicy**
>
> When true, applies the numbering restart policy. Type information: Can return: Boolean or NothingEnum enumerator.
> Mixed **numberingAlignment**
>
> Sets number alignment. Type information: Can return: ListAlignment enumerator or NothingEnum enumerator.
> Mixed **bulletsAndNumberingListType**
>
> Sets the bullets-and-numbering list type. Type information: Can return: ListType enumerator or NothingEnum enumerator.
> Object **properties**
>
> Supports assigning several properties in one operation.
