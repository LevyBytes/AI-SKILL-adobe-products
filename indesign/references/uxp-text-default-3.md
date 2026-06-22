# Text Default (part 2)

> Number **dropcapDetail**
>
> Stores drop-cap details from glyph outlines: 1 = left side bearing, 2 = descenders, and 0x100,0x200,0x400 are used for Japanese frame grid.
> Boolean **hyphenateAcrossColumns**
>
> True permits permits hyphenating the final word in a text column.
> Boolean **keepRuleAboveInFrame**
>
> True keeps the paragraph rule above inside the frame bounds. Applies only when rule above is true.
> Boolean **ignoreEdgeAlignment**
>
> True ignores optical edge alignment for the paragraph.
> Boolean **otfMark**
>
> True enables mark positioning in OpenType fonts.
> Boolean **otfLocale**
>
> True enables localized forms in OpenType fonts.
> PositionalForms **positionalForm**
>
> Specifies OpenType positional form.
> ParagraphDirectionOptions **paragraphDirection**
>
> Specifies paragraph direction.
> ParagraphJustificationOptions **paragraphJustification**
>
> Specifies paragraph justification.
> Number **miterLimit**
>
> Sets the stroke-width-to-miter-length limit where a miter (pointed) join changes to a bevel (squared-off) join.
> TextStrokeAlign **strokeAlignment**
>
> Sets text stroke alignment.
> OutlineJoin **endJoin**
>
> Sets character stroke join type for the text.
> Boolean **otfOverlapSwash**
>
> True enables overlapping swash forms in OpenType fonts.
> Boolean **otfStylisticAlternate**
>
> True enables stylistic alternate forms in OpenType fonts.
> Boolean **otfJustificationAlternate**
>
> True enables alternate justification forms in OpenType fonts.
> Boolean **otfStretchedAlternate**
>
> True enables stretched alternate forms in OpenType fonts.
> CharacterDirectionOptions **characterDirection**
>
> Specifies direction for the character.
> CharacterDirectionOptions **keyboardDirection**
>
> Specifies keyboard direction for the character.
> DigitsTypeOptions **digitsType**
>
> Specifies digits type.
> KashidasOptions **kashidas**
>
> Specifies Kashidas use for justification.
> DiacriticPositionOptions **diacriticPosition**
>
> Specifies where diacriticical characters sit.
> Number **xOffsetDiacritic**
>
> Sets the x (horizontal) offset for diacritic adjustment.
> Number **yOffsetDiacritic**
>
> Sets the y (vertical) offset for diacritic adjustment.
> Mixed **tabList**
>
> Lists paragraph tab stops. Returns Array of Arrays of Property Name/Value Pairs.
> NamedGrid **appliedNamedGrid**
>
> Identifies the named grid in use.
> Boolean **gridAlignFirstLineOnly**
>
> True aligns only first line to frame grid or baseline grid; false aligns every line to the grid.
> GridAlignment **gridAlignment**
>
> Specifies alignment to the frame grid or baseline grid.
> Number **gridGyoudori**
>
> Sets the manual gyoudori value.
> Number **autoTcy**
>
> Threshold count of half-width characters that automatically run horizontally in vertical text.
> Boolean **autoTcyIncludeRoman**
>
> True auto tcy includes Roman characters.
> Mixed **kinsokuSet**
>
> Selects the kinsoku set that controls legitimate line breaks. Returns KinsokuTable, KinsokuSet enumerator or String.
> KinsokuType **kinsokuType**
>
> Chooses kinsoku processing type that prevents kinsoku characters from starting or ending a line. Applies only when a kinsoku set is defined.
> KinsokuHangTypes **kinsokuHangType**
>
> Specifies the type of hanging punctuation to allow. Applies only while a kinsoku set is in effect.
> Boolean **bunriKinshi**
>
> True adds double period (.), ellipse (.), and double hyphen (--) to the selected kinsoku set. Applies only while a kinsoku set is in effect.
> Mixed **mojikumi**
>
> Selects the mojikumi table; for details, see mojikumi table defaults. Returns MojikumiTable, String or MojikumiTableDefaults enumerator.
> Boolean **rensuuji**
>
> True prevents breaks inside numbers; false permits line breaks between digits in multi-digit numbers.
> Boolean **rotateSingleByteCharacters**
>
> True rotates Roman characters in vertical text.
> LeadingModel **leadingModel**
>
> Sets the point used to measure leading from one line to the next.
> CharacterAlignment **characterAlignment**
>
> Aligns small characters against the largest character in the line.
> Number **tsume**
>
> Sets horizontal character compression.
> Number **leadingAki**
>
> Sets spacing before each character.
> Number **trailingAki**
>
> Sets spacing after each character.
> Number **characterRotation**
>
> Sets individual-character rotation angle in degrees. Rotation is counterclockwise.
> Number **jidori**
>
> Grid-square count used to arrange the text.
> Number **shataiMagnification**
>
> Specifies the percentage amount of shatai obliquing to apply.
> Number **shataiDegreeAngle**
>
> Sets the shatai lens angle in degrees.
> Boolean **shataiAdjustRotation**
>
> True applies shatai rotation.
> Boolean **shataiAdjustTsume**
>
> True adjusts shatai tsume.
> Boolean **tatechuyoko**
>
> True makes the character horizontal in vertical text.
> Number **tatechuyokoXOffset**
>
> Specifies horizontal offset for horizontal characters in vertical text.
> Number **tatechuyokoYOffset**
>
> Specifies vertical offset for horizontal characters in vertical text.
> Mixed **kentenFillColor**
>
> Applies a swatch to the fill of kenten characters; supported swatch kinds are color, gradient, tint, or mixed ink. Returns Swatch or String.
> Mixed **kentenStrokeColor**
>
> Applies a swatch to the stroke of kenten characters; supported swatch kinds are color, gradient, tint, or mixed ink. Returns Swatch or String.
> Number **kentenTint**
>
> Sets kenten characters fill tint (as a percentage); range: 0 to 100.
> Number **kentenStrokeTint**
>
> Sets kenten characters stroke tint (as a percentage); range: 0 to 100.
> Number **kentenWeight**
>
> Specifies stroke weight (in points) of kenten characters.
> AdornmentOverprint **kentenOverprintFill**
>
> Specifies how the kenten fill overprints.
> AdornmentOverprint **kentenOverprintStroke**
>
> Specifies how the kenten stroke overprints.
> KentenCharacter **kentenKind**
>
> Specifies the style of kenten characters.
> Number **kentenPlacement**
>
> Sets the distance separating kenten characters and their parent characters.
> KentenAlignment **kentenAlignment**
>
> Aligns kenten characters relative to the parent characters.
> RubyKentenPosition **kentenPosition**
>
> Sets kenten position relative to the parent character.
> Mixed **kentenFont**
>
> Selects the font for kenten characters. Returns Font or String.
> Mixed **kentenFontStyle**
>
> Specifies the font style of kenten characters. Returns String or NothingEnum enumerator.
> Number **kentenFontSize**
>
> Sets the point size for kenten characters.
> Number **kentenXScale**
>
> Sets horizontal size for kenten characters as a percent of original size.
> Number **kentenYScale**
>
> Sets vertical size for kenten charachers as a percent of original size.
> String **kentenCustomCharacter**
>
> Specifies the kenten character. Applies only when kenten kind is custom.
> KentenCharacterSet **kentenCharacterSet**
>
> Specifies the character set for a custom kenten character. Applies only when kenten kind is custom.
> Mixed **rubyFill**
>
> Applies a swatch to the fill of ruby characters; supported swatch kinds are color, gradient, tint, or mixed ink. Returns Swatch or String.
> Mixed **rubyStroke**
>
> Applies a swatch to the stroke of ruby characters; supported swatch kinds are color, gradient, tint, or mixed ink. Returns Swatch or String.
> Number **rubyTint**
>
> Sets the ruby fill color tint (as a percentage); range: 0 to 100.
> Number **rubyWeight**
>
> Specifies stroke weight (in points) of ruby characters.
> AdornmentOverprint **rubyOverprintFill**
>
> Specifies how the ruby fill overprints.
> AdornmentOverprint **rubyOverprintStroke**
>
> Specifies how the ruby stroke overprints.
> Number **rubyStrokeTint**
>
> Specifies stroke tint (as a percentage) of ruby characters.
> Mixed **rubyFont**
>
> Specifies the font applied to ruby characters. Returns Font or String.
> Mixed **rubyFontStyle**
>
> Specifies the font style of ruby characters. Returns String or NothingEnum enumerator.
> Number **rubyFontSize**
>
> Sets the point size for ruby characters.
> Boolean **rubyOpenTypePro**
>
> True enables OpenType Pro fonts for ruby.
> Number **rubyXScale**
>
> Sets horizontal size for ruby characters, specified as a percent of original size.
> Number **rubyYScale**
>
> Sets vertical size for ruby characters, specified as a percent of original size.
> RubyTypes **rubyType**
>
> Specifies ruby type.
> RubyAlignments **rubyAlignment**
>
> Specifies ruby alignment.
> RubyKentenPosition **rubyPosition**
>
> Sets position of ruby characters relative to the parent text.
> Number **rubyXOffset**
>
> Sets horizontal spacing between ruby and parent characters.
> Number **rubyYOffset**
>
> Sets vertical spacing between ruby and parent characters.
> RubyParentSpacing **rubyParentSpacing**
>
> Sets ruby spacing relative to the parent text.
> Boolean **rubyAutoAlign**
>
> True auto aligns ruby.
> Boolean **rubyOverhang**
>
> True limits ruby overhang to the chosen amount. For the amount syntax, see ruby parent overhang amount.
> Boolean **rubyAutoScaling**
>
> True scales ruby automatically to the selected percent of parent text size. For percent syntax, see ruby parent scaling percent.
> Number **rubyParentScalingPercent**
>
> Percentage used to derive ruby text size from parent text size.
> RubyOverhang **rubyParentOverhangAmount**
>
> Sets how much ruby characters may overhang the parent text.
> Boolean **warichu**
>
> True turns on warichu.
> Number **warichuSize**
>
> Provides a percentage amount used to scale parent text size to determine warichu size.
> Number **warichuLines**
>
> Sets how many warichu lines fit within one normal line.
> Number **warichuLineSpacing**
>
> Sets the gap between lines of warichu characters.
> WarichuAlignment **warichuAlignment**
>
> Specifies warichu alignment.
> Number **warichuCharsAfterBreak**
>
> Sets the minimum count of characters allowed after a line break.
> Number **warichuCharsBeforeBreak**
>
> Sets the minimum count of characters allowed before a line break.
> Boolean **otfProportionalMetrics**
>
> True kerns according to proportional CJK metrics in OpenType fonts.
> Boolean **otfHVKana**
>
> True switches to hiragana fonts whose horizontal and vertical glyphs differ.
> Boolean **otfRomanItalics**
>
> True applies italics to half-width alphanumerics.
> Boolean **scaleAffectsLineHeight**
>
> True makes the line changes size when characters are scaled.
> Boolean **cjkGridTracking**
>
> True enables grid tracking to track non-Roman characters in CJK grids.
> AlternateGlyphForms **glyphForm**
>
> Chooses the glyph variant substituted for standard glyphs.
> Boolean **paragraphGyoudori**
>
> True applies gyoudori mode to the whole paragraph; false applies it line by line.
> Number **rubyAutoTcyDigits**
>
> Digit count included in ruby auto tcy (tate-chuu-yoko).
> Boolean **rubyAutoTcyIncludeRoman**
>
> True includes Roman characters in ruby auto tcy (tate-chuu-yoko).
> Boolean **rubyAutoTcyAutoScale**
>
> True scales glyphs automatically in ruby auto tcy (tate-chuu-yoko) to fit one em.
> Boolean **treatIdeographicSpaceAsSpace**
>
> True prevents ideographic spaces from wrapping to the next line like text characters.
> Boolean **allowArbitraryHyphenation**
>
> True lets words outside a hyphenation dictionary break to the next line at any character.
> ListType **bulletsAndNumberingListType**
>
> Specifies the list type for bullets and numbering.
> Mixed **bulletsCharacterStyle**
>
> Uses this character style for the text after string. Returns CharacterStyle or String.
> Mixed **numberingCharacterStyle**
>
> Uses this character style for the number string. Returns CharacterStyle or String.
> String **numberingExpression**
>
> Specifies the number-string expression used for numbering.
> String **bulletsTextAfter**
>
> Specifies the text-after-string expression used for bullets.
> Mixed **appliedNumberingList**
>
> Specifies which list this belongs to. Returns NumberingList or String.
> Number **numberingLevel**
>
> Specifies the paragraph level.
> Mixed **numberingFormat**
>
> Specifies numbering format options. Returns NumberingStyle enumerator or String.
> Boolean **numberingContinue**
>
> Continues numbering at this level.
> Number **numberingStartAt**
>
> Sets the starting number for a numbered list.
> Boolean **numberingApplyRestartPolicy**
>
> True apply the numbering restart policy.
> ListAlignment **bulletsAlignment**
>
> Sets alignment for the bullet character.
> ListAlignment **numberingAlignment**
>
> Sets alignment for the number.
> Object **properties**
>
> Allows several properties to be set at the same time.
