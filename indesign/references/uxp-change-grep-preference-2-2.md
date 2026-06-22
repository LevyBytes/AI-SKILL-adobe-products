# Change Grep Preference (part 2)

> Mixed **rubyPosition**
>
> Position of ruby characters relative to parent text. Return type: RubyKentenPosition enumerator or NothingEnum enumerator.
> Mixed **rubyXOffset**
>
> Horizontal spacing amount between ruby and parent characters. Return type: Real or NothingEnum enumerator.
> Mixed **rubyYOffset**
>
> Vertical spacing amount between ruby and parent characters. Return type: Real or NothingEnum enumerator.
> Mixed **rubyParentSpacing**
>
> Ruby spacing relative to parent text. Return type: RubyParentSpacing enumerator or NothingEnum enumerator.
> Mixed **rubyAutoAlign**
>
> When true, ruby alignment is automatic. Return type: Boolean or NothingEnum enumerator.
> Mixed **rubyOverhang**
>
> When true, ruby overhang is limited to the specified amount. For the amount value, see ruby parent overhang amount. Return type: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoScaling**
>
> When true, ruby is scaled automatically to the specified percentage of parent text size. For the percentage value, see ruby parent scaling percent. Return type: Boolean or NothingEnum enumerator.
> Mixed **rubyParentScalingPercent**
>
> Percentage used to scale parent text size when determining ruby text size. Return type: Real or NothingEnum enumerator.
> Mixed **rubyParentOverhangAmount**
>
> Amount by which ruby characters may overhang parent text. Return type: RubyOverhang enumerator or NothingEnum enumerator.
> Mixed **rubyAutoTcyDigits**
>
> Number of digits included in auto tcy (tate-chuu-yoko) for ruby. Return type: Short Integer or NothingEnum enumerator.
> Mixed **rubyAutoTcyIncludeRoman**
>
> When true, Roman characters are included in auto tcy (tate-chuu-yoko) for ruby. Return type: Boolean or NothingEnum enumerator.
> Mixed **rubyAutoTcyAutoScale**
>
> When true, glyphs in ruby auto tcy (tate-chuu-yoko) are automatically scaled to fit one em. Return type: Boolean or NothingEnum enumerator.
> Mixed **warichu**
>
> When true, warichu is enabled. Return type: Boolean or NothingEnum enumerator.
> Mixed **warichuSize**
>
> Percentage used to scale parent text size when determining warichu size. Return type: Real or NothingEnum enumerator.
> Mixed **warichuLines**
>
> Number of warichu lines within one normal line. Return type: Short Integer or NothingEnum enumerator.
> Mixed **warichuLineSpacing**
>
> Gap between lines of warichu characters. Return type: Real or NothingEnum enumerator.
> Mixed **warichuAlignment**
>
> Warichu alignment setting. Return type: WarichuAlignment enumerator or NothingEnum enumerator.
> Mixed **warichuCharsAfterBreak**
>
> Minimum number of characters permitted after a line break. Return type: Short Integer or NothingEnum enumerator.
> Mixed **warichuCharsBeforeBreak**
>
> Minimum number of characters permitted before a line break. Return type: Short Integer or NothingEnum enumerator.
> Mixed **otfProportionalMetrics**
>
> When true, OpenType fonts kern using proportional CJK metrics. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfHVKana**
>
> When true, hiragana fonts switch between glyphs that differ for horizontal and vertical writing. Return type: Boolean or NothingEnum enumerator.
> Mixed **otfRomanItalics**
>
> When true, italics are applied to half-width alphanumerics. Return type: Boolean or NothingEnum enumerator.
> Mixed **scaleAffectsLineHeight**
>
> When true, scaling characters changes the line size. Return type: Boolean or NothingEnum enumerator.
> Mixed **cjkGridTracking**
>
> When true, grid tracking is used for non-Roman characters in CJK grids. Return type: Boolean or NothingEnum enumerator.
> Mixed **glyphForm**
>
> Glyph variant substituted for standard glyphs. Return type: AlternateGlyphForms enumerator or NothingEnum enumerator.
> Mixed **paragraphGyoudori**
>
> When true, gyoudori mode applies to the full paragraph; when false, it applies line by line inside the paragraph. Return type: Boolean or NothingEnum enumerator.
> Mixed **gridAlignment**
>
> Alignment to the frame grid or baseline grid. Return type: GridAlignment enumerator or NothingEnum enumerator.
> Mixed **gridGyoudori**
>
> Manual gyoudori setting. Return type: Short Integer or NothingEnum enumerator.
> Mixed **autoTcy**
>
> Maximum number of half-width characters that automatically run horizontally in vertical text. Return type: Short Integer or NothingEnum enumerator.
> Mixed **autoTcyIncludeRoman**
>
> When true, Roman characters are included in auto tcy. Return type: Boolean or NothingEnum enumerator.
> Mixed **kinsokuSet**
>
> Kinsoku set that defines valid line breaks. Return type: KinsokuTable, KinsokuSet enumerator, String, or NothingEnum enumerator.
> Mixed **kinsokuType**
>
> Kinsoku processing type used to keep kinsoku characters away from line starts and line endings. Note: this is valid only when a kinsoku set is defined. Return type: KinsokuType enumerator or NothingEnum enumerator.
> Mixed **kinsokuHangType**
>
> Hanging-punctuation type to allow. Note: valid only when a kinsoku set is in effect. Return type: KinsokuHangTypes enumerator or NothingEnum enumerator.
> Mixed **bunriKinshi**
>
> When true, the selected kinsoku set adds the double period (..), ellipse (...), and double hyphen (--). Note: valid only when a kinsoku set is in effect. Return type: Boolean or NothingEnum enumerator.
> Mixed **mojikumi**
>
> Mojikumi table setting. For details, see mojikumi table defaults. Return type: MojikumiTable, String, MojikumiTableDefaults enumerator, or NothingEnum enumerator.
> Mixed **rensuuji**
>
> When true, numbers cannot break across lines; when false, multi-digit numbers may break between digits. Return type: Boolean or NothingEnum enumerator.
> Mixed **rotateSingleByteCharacters**
>
> When true, Roman characters rotate in vertical text. Return type: Boolean or NothingEnum enumerator.
> Mixed **leadingModel**
>
> Point used for measuring leading from one line to the next. Return type: LeadingModel enumerator or NothingEnum enumerator.
> Mixed **treatIdeographicSpaceAsSpace**
>
> When true, ideographic spaces do not wrap to the next line like text characters. Return type: Boolean or NothingEnum enumerator.
> Mixed **allowArbitraryHyphenation**
>
> When true, words not associated with a hyphenation dictionary may break to the next line on any character. Return type: Boolean or NothingEnum enumerator.
> Mixed **bulletsTextAfter**
>
> Text-after string expression used for bullets. Return type: String or NothingEnum enumerator.
> Mixed **appliedNumberingList**
>
> List membership target. Return type: NumberingList, String, or NothingEnum enumerator.
> Mixed **numberingLevel**
>
> Paragraph level. Return type: Long Integer or NothingEnum enumerator.
> Mixed **numberingFormat**
>
> Numbering-format choices. Return type: NumberingStyle enumerator, String, or NothingEnum enumerator.
> Mixed **numberingContinue**
>
> Continues numbering at this level. Return type: Boolean or NothingEnum enumerator.
> Mixed **numberingStartAt**
>
> Starting number for a numbered list. Return type: Long Integer or NothingEnum enumerator.
> Mixed **numberingApplyRestartPolicy**
>
> When true, the numbering restart policy is applied. Return type: Boolean or NothingEnum enumerator.
> Mixed **bulletsCharacterStyle**
>
> Character style used for the text-after string. Return type: CharacterStyle, String, or NothingEnum enumerator.
> Mixed **numberingCharacterStyle**
>
> Character style used for the number string. Return type: CharacterStyle, String, or NothingEnum enumerator.
> Mixed **numberingExpression**
>
> Number-string expression for numbering. Return type: String or NothingEnum enumerator.
> Mixed **bulletsAndNumberingListType**
>
> Bullets-and-numbering list type. Return type: ListType enumerator or NothingEnum enumerator.
> Object **properties**
>
> Property bag for setting multiple properties in one operation.
