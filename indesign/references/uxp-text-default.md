# Text Default (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> Bullet **bulletChar**
>
> Specifies the bullet character.
> _Read Only_
>
> NumberingRestartPolicy **numberingRestartPolicies**
>
> Exposes numbering restart policies.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the TextDefault parent, either a Application or Document.
> _Read Only_
>
> NestedLineStyles **nestedLineStyles**
>
> Provides the nested line styles collection.
> _Read Only_
>
> NestedGrepStyles **nestedGrepStyles**
>
> Provides the nested GREP styles collection.
> _Read Only_
>
> NestedStyles **nestedStyles**
>
> Provides the nested styles collection.
> _Read Only_
>
> TabStops **tabStops**
>
> Provides the tab stops collection.
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
> Measurement Unit (Number or String)=any **paragraphShadingLeftOffset**
>
> Sets how far the paragraph has its left edge offset.
> Measurement Unit (Number or String)=any **paragraphShadingRightOffset**
>
> Sets how far the paragraph has its right edge offset.
> Measurement Unit (Number or String)=any **paragraphShadingTopOffset**
>
> Sets how far the paragraph has its top edge offset.
> Measurement Unit (Number or String)=any **paragraphShadingBottomOffset**
>
> Sets how far the paragraph has its bottom edge offset.
> ParagraphShadingWidthEnum **paragraphShadingWidth**
>
> Calculates the paragraph shading width from the basis choices text width or column width.
> ParagraphShadingTopOriginEnum **paragraphShadingTopOrigin**
>
> Calculates the paragraph shading top origin from the basis choices cap height, ascent or baseline.
> ParagraphShadingBottomOriginEnum **paragraphShadingBottomOrigin**
>
> Calculates the paragraph shading bottom origin from the basis choices descent or baseline.
> Boolean **paragraphShadingClipToFrame**
>
> True clips paragraph shading to the frame shape.
> Boolean **paragraphShadingSuppressPrinting**
>
> True suppress printing of the shading of the paragraph.
> Boolean **paragraphShadingOn**
>
> True makes the paragraph shading is On.
> Boolean **paragraphShadingOverprint**
>
> True makes the paragraph shading will overprint.
> Number **paragraphShadingTint**
>
> Sets the paragraph shading tint (as a percentage); range: 0 to 100.
> Mixed **paragraphShadingColor**
>
> Applies a swatch to the paragraph shading; supported swatch kinds are color, gradient, tint, or mixed ink. Returns Swatch or String.
> Mixed **appliedFont**
>
> Sets the TextDefault font, either with a font object or with the font family name. Returns Font or String.
> String **fontStyle**
>
> Specifies name of the font style.
> Measurement Unit (Number or String)=any **pointSize**
>
> Specifies the text size.
> Mixed **leading**
>
> Sets text leading. Returns Unit or Leading enumerator.
> String **kerningMethod**
>
> Specifies the pair-kerning type.
> Number **tracking**
>
> Controls how much a text block loosens or tightens, measured in thousands of an em.
> Capitalization **capitalization**
>
> Specifies the capitalization scheme.
> Position **position**
>
> Specifies text position relative to the baseline.
> Boolean **underline**
>
> True underlines the text.
> Boolean **strikeThru**
>
> True draws a strikethrough line through the text.
> Boolean **ligatures**
>
> True substitutes specific character combinations (e.g., fl, fi) with ligature characters.
> Boolean **noBreak**
>
> True keeps the text on the same line.
> Number **horizontalScale**
>
> Sets the TextDefault horizontal scaling.
> Number **verticalScale**
>
> Sets the TextDefault vertical scaling.
> Measurement Unit (Number or String)=any **baselineShift**
>
> Sets text baseline shift.
> Number **skew**
>
> Specifies the TextDefault skew angle.
> Number **fillTint**
>
> Fill color tint percentage for TextDefault; use 0 to 100 for an explicit tint, or -1 for an inherited or overridden value.
> Number **strokeTint**
>
> Stroke color tint percentage for TextDefault; use 0 to 100 for an explicit tint, or -1 for an inherited or overridden value.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Sets character stroke weight for the text.
> Boolean **overprintStroke**
>
> True makes the stroke of the characters will overprint.
> Boolean **overprintFill**
>
> True makes the fill color of the characters will overprint.
> OTFFigureStyle **otfFigureStyle**
>
> Specifies figure style in OpenType fonts.
> Boolean **otfOrdinal**
>
> True enables ordinals in OpenType fonts.
> Boolean **otfFraction**
>
> True enables fractions in OpenType fonts.
> Boolean **otfDiscretionaryLigature**
>
> True enables discretionary ligatures in OpenType fonts.
> Boolean **otfTitling**
>
> True enables titling forms in OpenType fonts.
> Boolean **otfContextualAlternate**
>
> True enables contextual alternate forms in OpenType fonts.
> Boolean **otfSwash**
>
> True enables swash forms in OpenType fonts.
> Mixed **underlineColor**
>
> Applies a swatch to the underline stroke.; supported swatch kinds are color, gradient, tint, or mixed ink. Returns Swatch or String.
> Mixed **underlineGapColor**
>
> Applies color, gradient, tint, or mixed ink swatch to the underline-stroke gap. Applies when underline type is not solid. Returns Swatch or String.
> Number **underlineTint**
>
> Sets underline stroke tint as a percentage; range: 0 to 100.
> Number **underlineGapTint**
>
> Sets the gap color of the underline stroke tint (as a percentage); range: 0 to 100. Applies when underline type is not solid.
> Boolean **underlineOverprint**
>
> True makes the underline stroke color will overprint.
> Boolean **underlineGapOverprint**
>
> True makes the gap color of the underline stroke will overprint.
> Mixed **underlineType**
>
> Sets stroke type for the underline stroke. Returns StrokeStyle or String.
> Measurement Unit (Number or String)=any **underlineOffset**
>
> Sets how far the underline is offset from the text baseline.
> Measurement Unit (Number or String)=any **underlineWeight**
>
> Sets stroke weight for the underline stroke.
> Mixed **strikeThroughColor**
>
> Applies a swatch to the strikethrough stroke; supported swatch kinds are color, gradient, tint, or mixed ink. Returns Swatch or String.
> Mixed **strikeThroughGapColor**
>
> Applies a swatch to the gap of the strikethrough stroke; supported swatch kinds are color, gradient, tint, or mixed ink. Returns Swatch or String.
> Number **strikeThroughTint**
>
> Sets the strikethrough stroke tint (as a percentage); range: 0 to 100.
> Number **strikeThroughGapTint**
>
> Sets the strikethrough stroke gap color tint (as a percentage); range: 0 to 100. Applies when strike through type is not solid.
> Boolean **strikeThroughOverprint**
>
> True makes the strikethrough stroke will overprint.
> Boolean **strikeThroughGapOverprint**
>
> True makes the gap color of the strikethrough stroke will overprint. Applies when strike through type is not solid.
> Mixed **strikeThroughType**
>
> Sets stroke type for the strikethrough stroke. Returns StrokeStyle or String.
> Measurement Unit (Number or String)=any **strikeThroughOffset**
>
> Sets how far the strikethrough stroke is offset from the text baseline.
> Measurement Unit (Number or String)=any **strikeThroughWeight**
>
> Sets stroke weight for the strikethrough stroke.
> Swatch **fillColor**
>
> Applies a swatch to the fill of the TextDefault.; supported swatch kinds are color, gradient, tint, or mixed ink. Also accepts String.
> Swatch **strokeColor**
>
> Applies a swatch to the stroke of the TextDefault; supported swatch kinds are color, gradient, tint, or mixed ink. Also accepts String.
> Mixed **appliedLanguage**
>
> Specifies the language for the text. Returns LanguageWithVendors or Language. Also accepts String.
> Boolean **paragraphBorderOn**
>
> True makes the paragraph border is on.
> Boolean **paragraphBorderOverprint**
>
> True makes the paragraph border will overprint.
> Number **paragraphBorderTint**
>
> Sets the paragraph stroke tint (as a percentage); range: 0 to 100.
> Mixed **paragraphBorderColor**
>
> Applies a swatch to the paragraph stroke; supported swatch kinds are color, gradient, tint, or mixed ink. Returns Swatch or String.
> Boolean **paragraphBorderGapOverprint**
>
> True makes the paragraph border gap will overprint. Applies only when border type is not solid.
> Number **paragraphBorderGapTint**
>
> Paragraph border gap tint percentage; range: 0 to 100. Applies only if the border type is not solid.
> Mixed **paragraphBorderGapColor**
>
> Applies color, gradient, tint, or mixed ink swatch to the paragraph border gap. Applies only if the border type is not solid. Returns Swatch or String.
> Mixed **paragraphBorderType**
>
> Specifies the type of the border for the paragraph. Returns StrokeStyle or String.
> Measurement Unit (Number or String)=any **paragraphBorderLeftLineWeight**
>
> Sets paragraph border left-side line weight.
> Measurement Unit (Number or String)=any **paragraphBorderTopLineWeight**
>
> Sets paragraph border top-side line weight.
> Measurement Unit (Number or String)=any **paragraphBorderRightLineWeight**
>
> Sets paragraph border right-side line weight.
> Measurement Unit (Number or String)=any **paragraphBorderBottomLineWeight**
>
> Sets paragraph border bottom-side line weight.
> EndCap **paragraphBorderStrokeEndCap**
>
> Sets end shape for an open path.
> EndJoin **paragraphBorderStrokeEndJoin**
>
> Sets the TextDefault corner join.
> Measurement Unit (Number or String)=any **paragraphShadingTopLeftCornerRadius**
>
> Sets measurement-unit corner-effect radius for rectangular top-left corners and every corner on non-rectangular shapes.
> CornerOptions **paragraphShadingTopLeftCornerOption**
>
> Uses this corner shape for rectangular top-left corners and all non-rectangular shape corners. Unlike end join, a corner option can set radius; rounded or beveled end-join effects depend on stroke weight.
> Measurement Unit (Number or String)=any **paragraphShadingTopRightCornerRadius**
>
> Sets measurement-unit corner-effect radius for the rectangular shape's top-right corner.
> CornerOptions **paragraphShadingTopRightCornerOption**
>
> Uses this corner shape for the rectangular shape's top-right corner.
> Measurement Unit (Number or String)=any **paragraphShadingBottomLeftCornerRadius**
>
> Sets measurement-unit corner-effect radius for the rectangular shape's bottom-left corner.
> CornerOptions **paragraphShadingBottomLeftCornerOption**
>
> Uses this corner shape for the rectangular shape's bottom-left corner.
> Measurement Unit (Number or String)=any **paragraphShadingBottomRightCornerRadius**
>
> Sets measurement-unit corner-effect radius for the rectangular shape's bottom-right corner.
> CornerOptions **paragraphShadingBottomRightCornerOption**
>
> Uses this corner shape for the rectangular shape's bottom-right corner.
> Measurement Unit (Number or String)=any **paragraphBorderTopLeftCornerRadius**
>
> Sets measurement-unit corner-effect radius for rectangular top-left corners and every corner on non-rectangular shapes.
> CornerOptions **paragraphBorderTopLeftCornerOption**
>
> Uses this corner shape for rectangular top-left corners and all non-rectangular shape corners. Unlike end join, a corner option can set radius; rounded or beveled end-join effects depend on stroke weight.
> Measurement Unit (Number or String)=any **paragraphBorderTopRightCornerRadius**
>
> Sets measurement-unit corner-effect radius for the rectangular shape's top-right corner.
> CornerOptions **paragraphBorderTopRightCornerOption**
>
> Uses this corner shape for the rectangular shape's top-right corner.
> Measurement Unit (Number or String)=any **paragraphBorderBottomLeftCornerRadius**
>
> Sets measurement-unit corner-effect radius for the rectangular shape's bottom-left corner.
> CornerOptions **paragraphBorderBottomLeftCornerOption**
>
> Uses this corner shape for the rectangular shape's bottom-left corner.
> Measurement Unit (Number or String)=any **paragraphBorderBottomRightCornerRadius**
>
> Sets measurement-unit corner-effect radius for the rectangular shape's bottom-right corner.
> CornerOptions **paragraphBorderBottomRightCornerOption**
>
> Uses this corner shape for the rectangular shape's bottom-right corner.
> ParagraphBorderEnum **paragraphBorderWidth**
>
> Calculates the paragraph border width from the basis choices text width or column width.
> ParagraphBorderTopOriginEnum **paragraphBorderTopOrigin**
>
> Calculates the paragraph border top origin from the basis choices cap height, ascent or baseline.
> ParagraphBorderBottomOriginEnum **paragraphBorderBottomOrigin**
>
> Calculates the paragraph border bottom origin from the basis choices descent or baseline.
> Measurement Unit (Number or String)=any **paragraphBorderLeftOffset**
>
> Sets how far the paragraph border has its left edge offset.
> Measurement Unit (Number or String)=any **paragraphBorderRightOffset**
>
> Sets how far the paragraph border has its right edge offset.
> Measurement Unit (Number or String)=any **paragraphBorderTopOffset**
>
> Sets how far the paragraph border has its top edge offset.
> Measurement Unit (Number or String)=any **paragraphBorderBottomOffset**
>
> Sets how far the paragraph border has its bottom edge offset.
> Boolean **paragraphBorderDisplayIfSplits**
>
> True also shows the paragraph border where the paragraph splits across frames or columns.
> HyphenationStyleEnum **providerHyphenationStyle**
>
> Selects the provider hyphenation style.
> Boolean **mergeConsecutiveParaBorders**
>
> True merges consecutive para borders that have completely similar properties.
> Mixed **sameParaStyleSpacing**
>
> Specifies space between paragraphs using same style. Returns Unit or Spacing enumerator.
> Number **paragraphKashidaWidth**
>
> Paragraph kashida width values: 0 = none, 1 = short, 2 = medium, 3 = long.
> Number **designAxes**
>
> Stores the value of Design Axes.
> Boolean **alignToBaseline**
>
> True aligns the text baseline to the baseline grid.
> Measurement Unit (Number or String)=any **firstLineIndent**
>
> Sets the indent amount for the first line.
> Measurement Unit (Number or String)=any **leftIndent**
>
> Sets the left indent width.
> Measurement Unit (Number or String)=any **rightIndent**
>
> Sets the right indent width.
> Measurement Unit (Number or String)=any **spaceBefore**
>
> Sets paragraph spacing above.
> Measurement Unit (Number or String)=any **spaceAfter**
>
> Sets paragraph spacing below.
> Mixed **balanceRaggedLines**
>
> balanceRaggedLines setting: If true or set to an enumeration value, balances ragged lines. Not available with a single-line text composer.
> Justification **justification**
>
> Specifies paragraph alignment.
> SingleWordJustification **singleWordJustification**
>
> Specifies alignment to use for lines that contain a single word.
> Number **autoLeading**
>
> Sets the type size to use for auto leading percent; range: 0 to 500.
> Number **dropCapLines**
>
> Sets the number of lines to drop cap.
> Number **dropCapCharacters**
>
> Sets the number of characters to drop cap.
> Boolean **keepLinesTogether**
>
> True keeps a specified line count together when the paragraph breaks across columns or text frames.
> Boolean **keepAllLinesTogether**
>
> True keeps every paragraph line together; false permits paragraph breaks across pages or columns.
> Number **keepWithNext**
>
> Sets the minimum count of lines to keep with the next paragraph.
> Number **keepFirstLines**
>
> Minimum lines that must stay together before a page break is allowed.
> Number **keepLastLines**
>
> Minimum lines that must remain together after a page break occurs.
> StartParagraph **startParagraph**
>
> Specifies where to start the paragraph.
> String **composer**
>
> Selects the text composer used for composition.
> Number **minimumWordSpacing**
>
> Sets minimum word spacing as a percentage of the font word-space value. Valid only when text is justified. (Range: 0 to 1000)
> Number **maximumWordSpacing**
>
> Sets maximum word spacing as a percentage of the font word-space value. Valid only when text is justified. (Range: 0 to 1000)
> Number **desiredWordSpacing**
>
> Sets the font word space value desired word spacing, specified as a percentage; range: 0 to 1000.
> Number **minimumLetterSpacing**
>
> Sets the built-in space between letters in the font minimum letter spacing, specified as a percentge; range: -100 to 500. Applies only to justified text.
> Number **maximumLetterSpacing**
>
> Sets the built-in space between letters in the font maximum letter spacing, specified as a percentge; range: -100 to 500. Applies only to justified text.
> Number **desiredLetterSpacing**
>
> Sets the built-in space between letters in the font desired letter spacing, specified as a percentge; range: -100 to 500.
> Number **minimumGlyphScaling**
>
> Sets individual characters minimum width (as a percentage); range: 50 to 200.
> Number **maximumGlyphScaling**
>
> Sets individual characters maximum width (as a percentage); range: 50 to 200.
> Number **desiredGlyphScaling**
>
> Sets individual characters desired width (as a percentage); range: 50 to 200.
> Boolean **ruleAbove**
>
> True places a rule above the paragraph.
> Boolean **ruleAboveOverprint**
>
> True makes the paragraph rule above overprint.
> Measurement Unit (Number or String)=any **ruleAboveLineWeight**
>
> Sets line weight for the rule above.
> Number **ruleAboveTint**
>
> Sets the paragraph rule above tint (as a percentage); range: 0 to 100.
> Measurement Unit (Number or String)=any **ruleAboveOffset**
>
> Sets the offset from the baseline of the first line the paragraph for the paragraph rule above.
> Measurement Unit (Number or String)=any **ruleAboveLeftIndent**
>
> Indents the left edge of the paragraph rule above using either text width or column width from the paragraph's first line.
> Measurement Unit (Number or String)=any **ruleAboveRightIndent**
>
> Indents the right edge of the paragraph rule above using either text width or column width from the paragraph's first line.
> RuleWidth **ruleAboveWidth**
>
> Calculates the paragraph rule above width from the basis choices text width or column width.
> Mixed **ruleAboveColor**
>
> Applies a swatch to the paragraph rule above; supported swatch kinds are color, gradient, tint, or mixed ink. Returns Swatch or String.
> Mixed **ruleAboveGapColor**
>
> Applies color, gradient, tint, or mixed ink swatch to the paragraph-rule-above stroke gap. Applies only if paragraph rule above type is not solid. Returns Swatch or String.
> Number **ruleAboveGapTint**
>
> Sets the stroke gap color of the paragraph rule tint (as a percentage); range: 0 to 100. Applies only when the rule above type is not solid.
> Boolean **ruleAboveGapOverprint**
>
> True makes the stroke gap of the paragraph rule above will overprint. Applies only when the rule above type is not solid.
> Mixed **ruleAboveType**
>
> Sets stroke type for the rule above the paragraph. Returns StrokeStyle or String.
> Boolean **ruleBelow**
>
> True adds a rule below the paragraph.
> Measurement Unit (Number or String)=any **ruleBelowLineWeight**
>
> Sets line weight for the rule below.
> Number **ruleBelowTint**
>
> Sets the paragraph rule below tint (as a percentage); range: 0 to 100.
> Measurement Unit (Number or String)=any **ruleBelowOffset**
>
> Sets the offset from the baseline of the last line of the paragraph for the the paragraph rule below.
> Measurement Unit (Number or String)=any **ruleBelowLeftIndent**
>
> Indents the left edge of the paragraph rule below using either text width or column width from the paragraph's last line.
> Measurement Unit (Number or String)=any **ruleBelowRightIndent**
>
> Indents the right edge of the paragraph rule below using either text width or column width from the paragraph's last line.
> RuleWidth **ruleBelowWidth**
>
> Calculates the paragraph rule below width from the basis choices text width or column width.
> Mixed **ruleBelowColor**
>
> Applies a swatch to the paragraph rule below; supported swatch kinds are color, gradient, tint, or mixed ink. Returns Swatch or String.
> Mixed **ruleBelowGapColor**
>
> Applies color, gradient, tint, or mixed ink swatch to the paragraph-rule-below stroke gap. Applies only if paragraph rule below type is not solid. Returns Swatch or String.
> Number **ruleBelowGapTint**
>
> Sets the stroke gap color of the paragraph rule below tint (as a percentage); range: 0 to 100. Applies only when the paragraph rule below type is not solid.
> Mixed **ruleBelowType**
>
> Sets stroke type for the rule below the paragraph. Returns StrokeStyle or String.
> Boolean **hyphenateCapitalizedWords**
>
> True permits hyphenation of capitalized words.
> Boolean **hyphenation**
>
> True permits hyphenation.
> Number **hyphenateBeforeLast**
>
> Minimum trailing letters required before a word may break at a hyphen.
> Number **hyphenateAfterFirst**
>
> Minimum leading letters required before a word may break at a hyphen.
> Number **hyphenateWordsLongerThan**
>
> Minimum word length required before hyphenation can apply.
> Number **hyphenateLadderLimit**
>
> Maximum consecutive-line hyphens; use zero to allow unlimited consecutive lines.
> Measurement Unit (Number or String)=any **hyphenationZone**
>
> For non-justified text, sets allowed end-of-line white space before hypenation starts. Applies when composer is single-line composer.
> Number **hyphenWeight**
>
> Weights better spacing against fewer hyphens; lower values increase hyphen use. Range: 0 to 100.
> CharacterStyle **dropCapStyle**
>
> Specifies character style to apply to the drop cap. Also accepts String.
> ParagraphStyle **appliedParagraphStyle**
>
> Applies this paragraph style to the text. Also accepts String.
> CharacterStyle **appliedCharacterStyle**
>
> Applies this character style to the text. Also accepts String.
> Measurement Unit (Number or String)=any **lastLineIndent**
>
> Specifies amount used to indent the last line in the paragraph.
> Boolean **hyphenateLastWord**
>
> True permits hyphenation in the last word in a paragraph. Applies only when hyphenation is true.
> Boolean **otfSlashedZero**
>
> True enables a slashed zeroes in OpenType fonts.
> Boolean **otfHistorical**
>
> True enables historical forms in OpenType fonts.
> Number **otfStylisticSets**
>
> Specifies stylistic sets to use in OpenType fonts.
> Number **gradientFillLength**
>
> Sets fill length (for a linear gradient) or radius (for a radial gradient) for the text.
> Number **gradientFillAngle**
>
> Sets a linear gradient applied to the fill of the text angle; range: -180 to 180.
> Number **gradientStrokeLength**
>
> Sets stroke length (for a linear gradient) or radius (for a radial gradient) for the text.
> Number **gradientStrokeAngle**
>
> Sets a linear gradient applied to the stroke of the text angle; range: -180 to 180.
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Sets the page-coordinate starting point for a gradient on the fill of the text, using [x, y] format.
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Sets the page-coordinate starting point for a gradient on the stroke of the text, using [x, y] format.
> Boolean **keepWithPrevious**
>
> True keeps this paragraph's first line with the previous paragraph's last line.
> Mixed **spanSplitColumnCount**
>
> Number of columns spanned by a paragraph, or number of split columns. Returns Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
> SpanColumnTypeOptions **spanColumnType**
>
> Chooses whether the paragraph is a single column, spans columns, or splits columns.
> Measurement Unit (Number or String)=any **splitColumnInsideGutter**
>
> Sets the inside gutter when the paragraph splits columns.
> Measurement Unit (Number or String)=any **splitColumnOutsideGutter**
>
> Sets the outside gutter when the paragraph splits columns.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceBefore**
>
> Sets minimum space before a span or split column.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceAfter**
>
> Sets minimum space after a span or split column.
> Boolean **ruleBelowOverprint**
>
> True makes the rule below overprint.
> Boolean **ruleBelowGapOverprint**
>
> True makes the gap color of makes the rule below overprint.
