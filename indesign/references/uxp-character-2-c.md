# Character (part 2) (cont. 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> RubyTypes **rubyType**
>
> Specifies ruby type..
> RubyAlignments **rubyAlignment**
>
> Specifies ruby alignment..
> RubyKentenPosition **rubyPosition**
>
> Relative to the parent text, specifies position of ruby characters..
> Number **rubyXOffset**
>
> Spacing between ruby and parent characters..
> Number **rubyYOffset**
>
> Spacing between ruby and parent characters..
> RubyParentSpacing **rubyParentSpacing**
>
> Relative to the parent text, specifies ruby spacing..
> Boolean **rubyAutoAlign**
>
> When true, ruby aligns automatically..
> Boolean **rubyOverhang**
>
> When true, ruby overhang is limited to for rubyOverhang, the specified amount. For information on specifying for rubyOverhang, an amount, see ruby parent overhang amount..
> Boolean **rubyAutoScaling**
>
> When true, ruby scales automatically to the for rubyAutoScaling, specified parent-text percentage. For information on specifying for rubyAutoScaling, a percent, see ruby parent scaling percent..
> Number **rubyParentScalingPercent**
>
> Percentage amount used to scale the parent for rubyParentScalingPercent, text size when determining the ruby text for rubyParentScalingPercent, size..
> RubyOverhang **rubyParentOverhangAmount**
>
> Specifies amount by which ruby characters can overhang the parent text..
> Boolean **warichu**
>
> When true, warichu is enabled..
> Number **warichuSize**
>
> Percentage amount used to scale parent text size when determining warichu size..
> Number **warichuLines**
>
> Count of lines of warichu within a single normal line..
> Number **warichuLineSpacing**
>
> Spacing between lines of warichu characters..
> WarichuAlignment **warichuAlignment**
>
> Specifies warichu alignment..
> Number **warichuCharsAfterBreak**
>
> For characters allowed after a line break, specifies minimum number..
> Number **warichuCharsBeforeBreak**
>
> For characters allowed before a line break, specifies minimum number..
> Boolean **otfProportionalMetrics**
>
> When true, kerns according to proportional CJK metrics in OpenType fonts..
> Boolean **otfHVKana**
>
> When true, hiragana fonts switch for horizontal and vertical glyph variants..
> Boolean **otfRomanItalics**
>
> When true, half-width alphanumerics receive italics..
> Boolean **scaleAffectsLineHeight**
>
> When true, line size changes as characters scale..
> Boolean **cjkGridTracking**
>
> When true, CJK grids apply grid tracking to non-Roman characters..
> AlternateGlyphForms **glyphForm**
>
> Specifies glyph variant to substitute for standard glyphs..
> Boolean **rubyFlag**
>
> When true, ruby is enabled..
> String **rubyString**
>
> Specifies ruby string contents..
> Boolean **paragraphGyoudori**
>
> When true, gyoudori mode covers the entire for paragraphGyoudori, paragraph. Condition: false, the gyoudori mode applies for paragraphGyoudori, to each line in the paragraph..
> Number **rubyAutoTcyDigits**
>
> Digit count included in ruby auto tcy (tate-chuu-yoko)..
> Boolean **rubyAutoTcyIncludeRoman**
>
> When true, ruby auto tcy (tate-chuu-yoko) includes Roman characters.
> Boolean **rubyAutoTcyAutoScale**
>
> When true, glyphs in ruby auto tcy for rubyAutoTcyAutoScale, (tate-chuu-yoko) scale automatically to fit one em..
> Boolean **treatIdeographicSpaceAsSpace**
>
> When true, ideographic spaces do not wrap for treatIdeographicSpaceAsSpace, like text characters onto the next line..
> Boolean **allowArbitraryHyphenation**
>
> When true, words with no hyphenation dictionary for allowArbitraryHyphenation, association may break to the next line for allowArbitraryHyphenation, at any character..
> ListType **bulletsAndNumberingListType**
>
> List type used for bullets and numbering..
> Mixed **bulletsCharacterStyle**
>
> For the text after string, specifies character for bulletsCharacterStyle, style. Return forms: CharacterStyle or String..
> Mixed **numberingCharacterStyle**
>
> For the number string, specifies character style. Return forms: CharacterStyle or String..
> String **numberingExpression**
>
> Specifies number string expression for numbering..
> String **bulletsTextAfter**
>
> Specifies text after string expression for bullets..
> Mixed **appliedNumberingList**
>
> Specifies list to be part of. Return forms: NumberingList or String..
> Number **numberingLevel**
>
> For the paragraph, specifies level..
> Mixed **numberingFormat**
>
> Numbering format options. Return forms: NumberingStyle enumerator or String..
> Boolean **numberingContinue**
>
> Keeps numbering continuous at this level..
> Number **numberingStartAt**
>
> Sets the starting number for a numbered list..
> Boolean **numberingApplyRestartPolicy**
>
> When true, the numbering restart policy is applied..
> ListAlignment **bulletsAlignment**
>
> For the bullet character, specifies alignment..
> ListAlignment **numberingAlignment**
>
> For the number, specifies alignment..
> Object **properties**
>
> Property bundle for setting several properties at the same time..
