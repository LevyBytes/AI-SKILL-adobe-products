# Paragraph Style (part 2)

> Boolean **hyphenateAcrossColumns**
>
> When true, permits the last word in a text column to be hyphenated.
> Boolean **keepRuleAboveInFrame**
>
> When true, the rule above the paragraph stays within frame bounds. Note: valid only when rule above is true.
> Boolean **ignoreEdgeAlignment**
>
> When true, ignores optical edge alignment for the paragraph.
> Boolean **otfMark**
>
> When true, uses mark positioning in OpenType fonts.
> Boolean **otfLocale**
>
> When true, uses localized forms in OpenType fonts.
> PositionalForms **positionalForm**
>
> Value for positional form.
> Mixed **previewColor**
>
> Preview color as either three R, G, and B doubles in the range 0 to 255, or as a UI color. Returns may be: UIColors enumerator, NothingEnum enumerator, or Array of 3 Reals (0 - 255).
> ParagraphDirectionOptions **paragraphDirection**
>
> Value for paragraph direction.
> ParagraphJustificationOptions **paragraphJustification**
>
> Value for paragraph justification.
> Number **miterLimit**
>
> Stroke-width to miter-length ratio limit before a miter (pointed) join changes to a bevel (squared-off) join.
> TextStrokeAlign **strokeAlignment**
>
> Stroke alignment used for the text.
> OutlineJoin **endJoin**
>
> Stroke join type used on the characters of the text.
> Boolean **otfOverlapSwash**
>
> When true, use overlapping swash forms in OpenType fonts
> Boolean **otfStylisticAlternate**
>
> When true, use stylistic alternate forms in OpenType fonts
> Boolean **otfJustificationAlternate**
>
> When true, use alternate justification forms in OpenType fonts
> Boolean **otfStretchedAlternate**
>
> When true, use stretched alternate forms in OpenType fonts
> CharacterDirectionOptions **characterDirection**
>
> Direction for the character.
> CharacterDirectionOptions **keyboardDirection**
>
> Keyboard direction for the character.
> DigitsTypeOptions **digitsType**
>
> Value for digits type.
> KashidasOptions **kashidas**
>
> Usage of Kashidas for justification
> DiacriticPositionOptions **diacriticPosition**
>
> Position for diacriticical characters.
> Number **xOffsetDiacritic**
>
> Sets x (horizontal) offset for diacritic adjustment.
> Number **yOffsetDiacritic**
>
> Sets y (vertical) offset for diacritic adjustment.
> Mixed **tabList**
>
> List containing the tab stops in the paragraph. Returns may be: Array of Arrays of Property Name/Value Pairs.
> Boolean **gridAlignFirstLineOnly**
>
> When true, only the first line aligns to the frame grid or baseline grid. When false, every line aligns to the grid.
> GridAlignment **gridAlignment**
>
> Sets alignment to the frame grid or baseline grid.
> Number **gridGyoudori**
>
> Value for grid gyoudori.
> Number **autoTcy**
>
> Half-width character count threshold for automatic horizontal flow in vertical text.
> Boolean **autoTcyIncludeRoman**
>
> When true, auto tcy contains Roman characters.
> Mixed **kinsokuSet**
>
> Kinsoku set used to decide legal line breaks. Returns may be: KinsokuTable, KinsokuSet enumerator or String.
> KinsokuType **kinsokuType**
>
> Kinsoku processing type that blocks kinsoku characters from starting or ending a line. Note: applies only after a kinsoku set is defined.
> KinsokuHangTypes **kinsokuHangType**
>
> Type for hanging punctuation to permit. Note: valid only when a kinsoku set is in effect.
> Boolean **bunriKinshi**
>
> When true, the selected kinsoku set receives the double period (..), ellipse (...), and double hyphen (--). Note: valid only when a kinsoku set is in effect.
> Mixed **mojikumi**
>
> Mojikumi table value. For details, see mojikumi table defaults. Returns may be: MojikumiTable, String or MojikumiTableDefaults enumerator.
> Boolean **rensuuji**
>
> When true, numeric line breaks are blocked. When false, multi-digit numbers may break between digits.
> Boolean **rotateSingleByteCharacters**
>
> When true, rotates Roman characters in vertical text.
> LeadingModel **leadingModel**
>
> Point from which leading is measured from line to line.
> CharacterAlignment **characterAlignment**
>
> Alignment for small characters to the largest character in the line.
> Number **tsume**
>
> Sets amount of horizontal character compression.
> Number **leadingAki**
>
> Sets amount of space before each character.
> Number **trailingAki**
>
> Sets amount of space after each character.
> Number **characterRotation**
>
> Individual-character rotation angle, in degrees. Note: rotation is counterclockwise.
> Number **jidori**
>
> Number of grid squares in which to arrange the text.
> Number **shataiMagnification**
>
> Percentage amount for shatai obliquing to apply.
> Number **shataiDegreeAngle**
>
> Sets shatai lens angle (in degrees).
> Boolean **shataiAdjustRotation**
>
> When true, applies shatai rotation.
> Boolean **shataiAdjustTsume**
>
> When true, adjusts shatai tsume.
> Boolean **tatechuyoko**
>
> When true, makes the character horizontal in vertical text.
> Number **tatechuyokoXOffset**
>
> Sets horizontal offset for horizontal characters in vertical text.
> Number **tatechuyokoYOffset**
>
> Sets vertical offset for horizontal characters in vertical text.
> Mixed **kentenFillColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the fill of kenten characters. Returns may be: Swatch or String.
> Mixed **kentenStrokeColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the stroke of kenten characters. Returns may be: Swatch or String.
> Number **kentenTint**
>
> Fill tint percentage for kenten characters. (Range: 0 to 100)
> Number **kentenStrokeTint**
>
> Stroke tint percentage for kenten characters. (Range: 0 to 100)
> Number **kentenWeight**
>
> Sets stroke weight (in points) of kenten characters.
> AdornmentOverprint **kentenOverprintFill**
>
> Method for overprinting the kenten fill.
> AdornmentOverprint **kentenOverprintStroke**
>
> Method for overprinting the kenten stroke.
> KentenCharacter **kentenKind**
>
> Value for kenten kind.
> Number **kentenPlacement**
>
> Sets distance between kenten characters and their parent characters.
> KentenAlignment **kentenAlignment**
>
> Alignment for kenten characters relative to the parent characters.
> RubyKentenPosition **kentenPosition**
>
> Sets kenten position relative to the parent character.
> Mixed **kentenFont**
>
> Font used for kenten characters. Returns may be: Font or String.
> Mixed **kentenFontStyle**
>
> Font style used for kenten characters. Returns may be: String or NothingEnum enumerator.
> Number **kentenFontSize**
>
> Sets size (in points) of kenten characters.
> Number **kentenXScale**
>
> Horizontal kenten character size as a percent of original size.
> Number **kentenYScale**
>
> Vertical kenten characher size as a percent of original size.
> String **kentenCustomCharacter**
>
> Custom kenten character. Note: valid only for custom kenten kind.
> KentenCharacterSet **kentenCharacterSet**
>
> Character set for the custom kenten character. Note: valid only for custom kenten kind.
> Mixed **rubyFill**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the fill of ruby characters. Returns may be: Swatch or String.
> Mixed **rubyStroke**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the stroke of ruby characters. Returns may be: Swatch or String.
> Number **rubyTint**
>
> Tint percentage for the ruby fill color. (Range: 0 to 100)
> Number **rubyWeight**
>
> Sets stroke weight (in points) of ruby characters.
> AdornmentOverprint **rubyOverprintFill**
>
> Method for overprinting the ruby fill.
> AdornmentOverprint **rubyOverprintStroke**
>
> Method for overprinting the ruby stroke.
> Number **rubyStrokeTint**
>
> Stroke tint percentage for ruby characters.
> Mixed **rubyFont**
>
> Font used by ruby characters. Returns may be: Font or String.
> Mixed **rubyFontStyle**
>
> Font style used for ruby characters. Returns may be: String or NothingEnum enumerator.
> Number **rubyFontSize**
>
> Sets size (in points) of ruby characters.
> Boolean **rubyOpenTypePro**
>
> When true, ruby uses OpenType Pro fonts.
> Number **rubyXScale**
>
> Horizontal ruby character size as a percent of original size.
> Number **rubyYScale**
>
> Vertical ruby character size as a percent of original size.
> RubyTypes **rubyType**
>
> Value for ruby type.
> RubyAlignments **rubyAlignment**
>
> Value for ruby alignment.
> RubyKentenPosition **rubyPosition**
>
> Position for ruby characters relative to the parent text.
> Number **rubyXOffset**
>
> Sets amount of horizontal space between ruby and parent characters.
> Number **rubyYOffset**
>
> Sets amount of vertical space between ruby and parent characters.
> RubyParentSpacing **rubyParentSpacing**
>
> Sets ruby spacing relative to the parent text.
> Boolean **rubyAutoAlign**
>
> When true, auto aligns ruby.
> Boolean **rubyOverhang**
>
> When true, ruby overhang is constrained to the specified amount. For amount details, see ruby parent overhang amount.
> Boolean **rubyAutoScaling**
>
> When true, ruby scales automatically to the specified percent of parent text size. For percent details, see ruby parent scaling percent.
> Number **rubyParentScalingPercent**
>
> Percentage used to derive ruby text size from parent text size.
> RubyOverhang **rubyParentOverhangAmount**
>
> Sets amount by which ruby characters can overhang the parent text.
> Boolean **warichu**
>
> When true, turns on warichu.
> Number **warichuSize**
>
> Percentage used to scale parent text size to determine warichu size.
> Number **warichuLines**
>
> Number of lines of warichu within a single normal line.
> Number **warichuLineSpacing**
>
> Sets gap between lines of warichu characters.
> WarichuAlignment **warichuAlignment**
>
> Value for warichu alignment.
> Number **warichuCharsAfterBreak**
>
> Minimum number of characters allowed after a line break.
> Number **warichuCharsBeforeBreak**
>
> Minimum number of characters allowed before a line break.
> Boolean **otfProportionalMetrics**
>
> When true, kerns according to proportional CJK metrics in OpenType fonts.
> Boolean **otfHVKana**
>
> When true, hiragana fonts switch to glyph sets that differ for horizontal and vertical text.
> Boolean **otfRomanItalics**
>
> When true, applies italics to half-width alphanumerics.
> Boolean **scaleAffectsLineHeight**
>
> When true, the line changes size when characters are scaled.
> Boolean **cjkGridTracking**
>
> When true, grid tracking handles non-Roman characters in CJK grids.
> AlternateGlyphForms **glyphForm**
>
> Glyph variant substituted for standard glyphs.
> Boolean **paragraphGyoudori**
>
> When true, gyoudori mode covers the whole paragraph. When false, it applies separately to each paragraph line.
> Number **rubyAutoTcyDigits**
>
> Digit count included in ruby auto tcy (tate-chuu-yoko).
> Boolean **rubyAutoTcyIncludeRoman**
>
> When true, Roman characters are included in ruby auto tcy (tate-chuu-yoko).
> Boolean **rubyAutoTcyAutoScale**
>
> When true, glyphs in ruby auto tcy (tate-chuu-yoko) scale automatically to fit one em.
> Boolean **treatIdeographicSpaceAsSpace**
>
> When true, ideographic spaces do not wrap to the next line like text characters.
> Boolean **allowArbitraryHyphenation**
>
> When true, words outside a hyphenation dictionary may break at any character on the next line.
> ListType **bulletsAndNumberingListType**
>
> List type used for bullets and numbering.
> Mixed **bulletsCharacterStyle**
>
> Character style used for the text after string. Returns may be: CharacterStyle or String.
> Mixed **numberingCharacterStyle**
>
> Character style used for the number string. Returns may be: CharacterStyle or String.
> String **numberingExpression**
>
> Sets number string expression for numbering.
> String **bulletsTextAfter**
>
> Sets text after string expression for bullets.
> Mixed **appliedNumberingList**
>
> List membership target. Returns may be: NumberingList or String.
> Number **numberingLevel**
>
> Level for the paragraph.
> Mixed **numberingFormat**
>
> Numbering format options. Returns may be: NumberingStyle enumerator or String.
> Boolean **numberingContinue**
>
> Controls continuation of the numbering at this level.
> Number **numberingStartAt**
>
> Sets starting number in a numbered list.
> Boolean **numberingApplyRestartPolicy**
>
> When true, apply the numbering restart policy.
> ListAlignment **bulletsAlignment**
>
> Alignment for the bullet character.
> ListAlignment **numberingAlignment**
>
> Alignment for the number.
> String **label**
>
> Property value accepting any string.
> Object **properties**
>
> A property that permits setting of several properties at the same time.
