# Change Text Preference (part 2)

> Mixed **rubyParentSpacing**
>
> Ruby spacing relative to parent text. Can return: RubyParentSpacing enumerator or NothingEnum enumerator.
> Mixed **rubyAutoAlign**
>
> When true, ruby auto alignment is enabled. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyOverhang**
>
> When true, ruby overhang is constrained to the specified amount. The related amount setting is ruby parent overhang amount. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoScaling**
>
> When true, ruby scales automatically to the specified percentage of parent text size. The related percent setting is ruby parent scaling percent. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyParentScalingPercent**
>
> Percentage amount used to scale parent text size when determining ruby text size. Can return: Real or NothingEnum enumerator.
> Mixed **rubyParentOverhangAmount**
>
> Amount by which ruby characters may overhang parent text. Can return: RubyOverhang enumerator or NothingEnum enumerator.
> Mixed **rubyAutoTcyDigits**
>
> Ruby auto tcy (tate-chuu-yoko) digit count. Can return: Short Integer or NothingEnum enumerator.
> Mixed **rubyAutoTcyIncludeRoman**
>
> When true, auto tcy (tate-chuu-yoko) in ruby includes Roman characters. Can return: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoTcyAutoScale**
>
> When true, glyphs in auto tcy (tate-chuu-yoko) in ruby scale automatically to fit one em. Can return: Boolean or NothingEnum enumerator.
> Mixed **warichu**
>
> When true, warichu is enabled. Can return: Boolean or NothingEnum enumerator.
> Mixed **warichuSize**
>
> Percentage amount used to scale parent text size when determining warichu size. Can return: Real or NothingEnum enumerator.
> Mixed **warichuLines**
>
> Number of warichu lines within one normal line. Can return: Short Integer or NothingEnum enumerator.
> Mixed **warichuLineSpacing**
>
> Line-to-line gap for warichu characters. Can return: Real or NothingEnum enumerator.
> Mixed **warichuAlignment**
>
> Warichu alignment setting. Can return: WarichuAlignment enumerator or NothingEnum enumerator.
> Mixed **warichuCharsAfterBreak**
>
> Minimum character count permitted following a break. Can return: Short Integer or NothingEnum enumerator.
> Mixed **warichuCharsBeforeBreak**
>
> Minimum character count permitted before the break point. Can return: Short Integer or NothingEnum enumerator.
> Mixed **otfProportionalMetrics**
>
> When true, OpenType proportional CJK metrics drive kerning. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfHVKana**
>
> When true, hiragana fonts switch to forms with different glyphs for horizontal and vertical writing. Can return: Boolean or NothingEnum enumerator.
> Mixed **otfRomanItalics**
>
> When true, italics are applied to half-width alphanumerics. Can return: Boolean or NothingEnum enumerator.
> Mixed **scaleAffectsLineHeight**
>
> When true, scaling characters changes the line size. Can return: Boolean or NothingEnum enumerator.
> Mixed **cjkGridTracking**
>
> When true, CJK grid tracking handles non-Roman characters. Can return: Boolean or NothingEnum enumerator.
> Mixed **glyphForm**
>
> Glyph variant substituted for standard glyphs. Can return: AlternateGlyphForms enumerator or NothingEnum enumerator.
> Mixed **paragraphGyoudori**
>
> When true, gyoudori mode covers the full paragraph; when false, it applies line by line. Can return: Boolean or NothingEnum enumerator.
> Mixed **gridAlignment**
>
> Frame-grid or baseline-grid alignment setting. Can return: GridAlignment enumerator or NothingEnum enumerator.
> Mixed **gridGyoudori**
>
> Manual gyoudori setting. Can return: Short Integer or NothingEnum enumerator.
> Mixed **autoTcy**
>
> Maximum half-width character count for automatic horizontal layout inside vertical text. Can return: Short Integer or NothingEnum enumerator.
> Mixed **autoTcyIncludeRoman**
>
> When true, Roman characters participate in auto tcy. Can return: Boolean or NothingEnum enumerator.
> Mixed **kinsokuSet**
>
> Kinsoku set used to define allowed break positions. Can return: KinsokuTable, KinsokuSet enumerator, String or NothingEnum enumerator.
> Mixed **kinsokuType**
>
> Kinsoku processing type that prevents kinsoku characters from starting or ending a line. Note: Requires a defined kinsoku set. Can return: KinsokuType enumerator or NothingEnum enumerator.
> Mixed **kinsokuHangType**
>
> Allowed hanging-punctuation type. Note: Requires an active kinsoku set. Can return: KinsokuHangTypes enumerator or NothingEnum enumerator.
> Mixed **bunriKinshi**
>
> When true, the selected kinsoku set adds the double period (..), ellipse (...), and double hyphen (--). Note: Requires an active kinsoku set. Can return: Boolean or NothingEnum enumerator.
> Mixed **mojikumi**
>
> Mojikumi table. The related default table is mojikumi table defaults. Return values: MojikumiTable, String, MojikumiTableDefaults enumerator or NothingEnum enumerator.
> Mixed **rensuuji**
>
> When true, numbers remain unbroken across lines; when false, multi-digit numbers may split between digits. Can return: Boolean or NothingEnum enumerator.
> Mixed **rotateSingleByteCharacters**
>
> When true, Roman characters rotate in vertical text. Can return: Boolean or NothingEnum enumerator.
> Mixed **leadingModel**
>
> Measurement point used for line-to-line leading. Can return: LeadingModel enumerator or NothingEnum enumerator.
> Mixed **treatIdeographicSpaceAsSpace**
>
> When true, ideographic spaces avoid text-character style wrapping onto the next line. Can return: Boolean or NothingEnum enumerator.
> Mixed **allowArbitraryHyphenation**
>
> When true, words outside a hyphenation dictionary may break to the next line at any character. Can return: Boolean or NothingEnum enumerator.
> Mixed **bulletsTextAfter**
>
> Text-after string expression used for bullets. Can return: String or NothingEnum enumerator.
> Mixed **appliedNumberingList**
>
> List membership target. Can return: NumberingList, String or NothingEnum enumerator.
> Mixed **numberingLevel**
>
> Paragraph level. Can return: Long Integer or NothingEnum enumerator.
> Mixed **numberingFormat**
>
> Numbering format settings. Can return: NumberingStyle enumerator, String or NothingEnum enumerator.
> Mixed **numberingContinue**
>
> Whether numbering continues at this level. Can return: Boolean or NothingEnum enumerator.
> Mixed **numberingStartAt**
>
> Starting number for a numbered list. Can return: Long Integer or NothingEnum enumerator.
> Mixed **numberingApplyRestartPolicy**
>
> When true, the numbering restart policy is applied. Can return: Boolean or NothingEnum enumerator.
> Mixed **bulletsCharacterStyle**
>
> Character style for bulletsTextAfter content. Can return: CharacterStyle, String or NothingEnum enumerator.
> Mixed **numberingCharacterStyle**
>
> Character style for the numbering string. Can return: CharacterStyle, String or NothingEnum enumerator.
> Mixed **numberingExpression**
>
> Number string expression used for numbering. Can return: String or NothingEnum enumerator.
> Mixed **bulletsAndNumberingListType**
>
> Bullets-and-numbering list type. Can return: ListType enumerator or NothingEnum enumerator.
> Object **properties**
>
> Property object used to set several properties together.
