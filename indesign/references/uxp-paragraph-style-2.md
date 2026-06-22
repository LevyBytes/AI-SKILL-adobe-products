# Paragraph Style (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> _Read Only_
>
> Boolean **imported**
>
> When true, the style was imported from another document.
> _Read Only_
>
> Bullet **bulletChar**
>
> Value for bullet char.
> _Read Only_
>
> NumberingRestartPolicy **numberingRestartPolicies**
>
> Value for numbering restart policies.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the ParagraphStyle.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the ParagraphStyle (a Document, Application or ParagraphStyleGroup).
> _Read Only_
>
> Number **index**
>
> Index for the ParagraphStyle within its containing object.
> _Read Only_
>
> NestedLineStyles **nestedLineStyles**
>
> Collection containing nested line styles.
> _Read Only_
>
> NestedGrepStyles **nestedGrepStyles**
>
> Collection containing nested GREP styles.
> _Read Only_
>
> NestedStyles **nestedStyles**
>
> Collection containing nested styles.
> _Read Only_
>
> TabStops **tabStops**
>
> Collection containing tab stops.
> _Read Only_
>
> StyleExportTagMaps **styleExportTagMaps**
>
> Collection containing style export tag maps.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> String **name**
>
> Name assigned to the ParagraphStyle.
> Mixed **basedOn**
>
> Base style for this style. Returns may be: ParagraphStyle or String.
> ParagraphStyle **nextStyle**
>
> Style used for new paragraphs that follow paragraphs tagged with this style.
> Boolean **splitDocument**
>
> Value for split document.
> Boolean **emitCss**
>
> Value for emit css.
> String **styleUniqueId**
>
> Assignable unique id for distinguishing styles; internal use only.
> Measurement Unit (Number or String)=any **paragraphShadingLeftOffset**
>
> Distance that shifts the paragraph shading left boundary.
> Measurement Unit (Number or String)=any **paragraphShadingRightOffset**
>
> Distance that shifts the paragraph shading right boundary.
> Measurement Unit (Number or String)=any **paragraphShadingTopOffset**
>
> Distance that shifts the paragraph shading upper boundary.
> Measurement Unit (Number or String)=any **paragraphShadingBottomOffset**
>
> Distance that shifts the paragraph shading lower boundary.
> ParagraphShadingWidthEnum **paragraphShadingWidth**
>
> Basis (text width or column width) for computing the width of the paragraph shading.
> ParagraphShadingTopOriginEnum **paragraphShadingTopOrigin**
>
> Basis (cap height, ascent or baseline) for computing the top origin of the paragraph shading.
> ParagraphShadingBottomOriginEnum **paragraphShadingBottomOrigin**
>
> Basis (descent or baseline) for computing the bottom origin of the paragraph shading.
> Boolean **paragraphShadingClipToFrame**
>
> When true, the frame shape clips paragraph shading.
> Boolean **paragraphShadingSuppressPrinting**
>
> When true, suppress printing of the shading of the paragraph.
> Boolean **paragraphShadingOn**
>
> When true, the paragraph shading is On.
> Boolean **paragraphShadingOverprint**
>
> When true, the paragraph shading overprints.
> Number **paragraphShadingTint**
>
> Tint percentage for the paragraph shading. (Range: 0 to 100)
> Mixed **paragraphShadingColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the paragraph shading. Returns may be: Swatch or String.
> Mixed **appliedFont**
>
> Font used by the ParagraphStyle, expressed as either a font object or the name of font family. Returns may be: Font or String.
> String **fontStyle**
>
> Name assigned to the font style.
> Measurement Unit (Number or String)=any **pointSize**
>
> Value for point size.
> Mixed **leading**
>
> Leading value used for the text. Returns may be: Unit or Leading enumerator.
> String **kerningMethod**
>
> Type for pair kerning.
> Number **tracking**
>
> Tracking adjustment for a text block, measured in thousandths of an em.
> Capitalization **capitalization**
>
> Value for capitalization.
> Position **position**
>
> Sets text position relative to the baseline.
> Boolean **underline**
>
> When true, underlines the text.
> Boolean **strikeThru**
>
> When true, draws a strikethrough line through the text.
> Boolean **ligatures**
>
> When true, character combinations (e.g., fl, fi) become ligature characters.
> Boolean **noBreak**
>
> When true, keeps the text on the same line.
> Number **horizontalScale**
>
> Horizontal scaling used by the ParagraphStyle.
> Number **verticalScale**
>
> Vertical scaling used by the ParagraphStyle.
> Measurement Unit (Number or String)=any **baselineShift**
>
> Baseline shift used for the text.
> Number **skew**
>
> Sets skew angle of the ParagraphStyle.
> Number **fillTint**
>
> Fill-color tint percentage for the ParagraphStyle; use 0 to 100 for explicit tint, or -1 for inherited or overridden value.
> Number **strokeTint**
>
> Stroke-color tint percentage for the ParagraphStyle; use 0 to 100 for explicit tint, or -1 for inherited or overridden value.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> Stroke weight used on the characters of the text.
> Boolean **overprintStroke**
>
> When true, the stroke of the characters overprints.
> Boolean **overprintFill**
>
> When true, the fill color of the characters overprints.
> OTFFigureStyle **otfFigureStyle**
>
> Sets figure style in OpenType fonts.
> Boolean **otfOrdinal**
>
> When true, uses ordinals in OpenType fonts.
> Boolean **otfFraction**
>
> When true, uses fractions in OpenType fonts.
> Boolean **otfDiscretionaryLigature**
>
> When true, uses discretionary ligatures in OpenType fonts.
> Boolean **otfTitling**
>
> When true, uses titling forms in OpenType fonts.
> Boolean **otfContextualAlternate**
>
> When true, uses contextual alternate forms in OpenType fonts.
> Boolean **otfSwash**
>
> When true, uses swash forms in OpenType fonts.
> Mixed **underlineColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the underline stroke.. Returns may be: Swatch or String.
> Mixed **underlineGapColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the gap of the underline stroke. Note: applies when underline type is not solid. Returns may be: Swatch or String.
> Number **underlineTint**
>
> Tint percentage for the underline stroke. (Range: 0 to 100)
> Number **underlineGapTint**
>
> Tint percentage for the gap color of the underline stroke. (Range: 0 to 100) Note: applies when underline type is not solid.
> Boolean **underlineOverprint**
>
> When true, the underline stroke color overprints.
> Boolean **underlineGapOverprint**
>
> When true, the gap color of the underline stroke overprints.
> Mixed **underlineType**
>
> The stroke type of the underline stroke. Returns may be: StrokeStyle or String.
> Measurement Unit (Number or String)=any **underlineOffset**
>
> Amount that moves the underline away from the text baseline.
> Measurement Unit (Number or String)=any **underlineWeight**
>
> Sets stroke weight of the underline stroke.
> Mixed **strikeThroughColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the strikethrough stroke. Returns may be: Swatch or String.
> Mixed **strikeThroughGapColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the gap of the strikethrough stroke. Returns may be: Swatch or String.
> Number **strikeThroughTint**
>
> Tint percentage for the strikethrough stroke. (Range: 0 to 100)
> Number **strikeThroughGapTint**
>
> Tint percentage for the strikethrough stroke gap color. (Range: 0 to 100) Note: applies when strike through type is not solid.
> Boolean **strikeThroughOverprint**
>
> When true, the strikethrough stroke overprints.
> Boolean **strikeThroughGapOverprint**
>
> When true, strikethrough gap color overprints; valid only for non-solid strike through type.
> Mixed **strikeThroughType**
>
> StrokeStyle or String value naming the strikethrough stroke type.
> Measurement Unit (Number or String)=any **strikeThroughOffset**
>
> Amount that moves the strikethrough stroke away from the text baseline.
> Measurement Unit (Number or String)=any **strikeThroughWeight**
>
> Sets stroke weight of the strikethrough stroke.
> Swatch **fillColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the fill of the ParagraphStyle.. Also accepts: String.
> Swatch **strokeColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the stroke of the ParagraphStyle. Also accepts: String.
> Mixed **appliedLanguage**
>
> The language of the text. Returns may be: LanguageWithVendors or Language. Also accepts: String.
> Boolean **includeClass**
>
> When true, class attribute will be generated for the style
> Boolean **paragraphBorderOn**
>
> When true, the paragraph border is on.
> Boolean **paragraphBorderOverprint**
>
> When true, the paragraph border overprints.
> Number **paragraphBorderTint**
>
> Tint percentage for the paragraph stroke. (Range: 0 to 100)
> Mixed **paragraphBorderColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the paragraph stroke. Returns may be: Swatch or String.
> Boolean **paragraphBorderGapOverprint**
>
> When true, the paragraph border gap overprints. Note: valid only when border type is not solid.
> Number **paragraphBorderGapTint**
>
> Paragraph border gap tint percentage. Note: valid only with a non-solid border type. (Range: 0 to 100)
> Mixed **paragraphBorderGapColor**
>
> Swatch value (color, gradient, tint, or mixed ink) for the paragraph border gap. Note: valid only with a non-solid border type. Returns may be: Swatch or String.
> Mixed **paragraphBorderType**
>
> Type for the border for the paragraph. Returns may be: StrokeStyle or String.
> Measurement Unit (Number or String)=any **paragraphBorderLeftLineWeight**
>
> Line weight for the paragraph border left side.
> Measurement Unit (Number or String)=any **paragraphBorderTopLineWeight**
>
> Line weight for the paragraph border upper side.
> Measurement Unit (Number or String)=any **paragraphBorderRightLineWeight**
>
> Line weight for the paragraph border right side.
> Measurement Unit (Number or String)=any **paragraphBorderBottomLineWeight**
>
> Line weight for the paragraph border lower side.
> EndCap **paragraphBorderStrokeEndCap**
>
> Sets end shape of an open path.
> EndJoin **paragraphBorderStrokeEndJoin**
>
> The corner join used for the ParagraphStyle.
> Measurement Unit (Number or String)=any **paragraphShadingTopLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular top-left corners and every non-rectangular corner.
> CornerOptions **paragraphShadingTopLeftCornerOption**
>
> Corner shape for rectangular top-left corners and all non-rectangular corners. Note: corner options have explicit radii; rounded or beveled end joins derive from stroke weight.
> Measurement Unit (Number or String)=any **paragraphShadingTopRightCornerRadius**
>
> Corner-effect radius, in measurement units, for the rectangular top-right corner.
> CornerOptions **paragraphShadingTopRightCornerOption**
>
> Corner shape for the rectangular top-right corner.
> Measurement Unit (Number or String)=any **paragraphShadingBottomLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for the rectangular bottom-left corner.
> CornerOptions **paragraphShadingBottomLeftCornerOption**
>
> Corner shape for the rectangular bottom-left corner.
> Measurement Unit (Number or String)=any **paragraphShadingBottomRightCornerRadius**
>
> Corner-effect radius, in measurement units, for the rectangular bottom-right corner.
> CornerOptions **paragraphShadingBottomRightCornerOption**
>
> Corner shape for the rectangular bottom-right corner.
> Measurement Unit (Number or String)=any **paragraphBorderTopLeftCornerRadius**
>
> Border corner-effect radius, in measurement units, for rectangular top-left corners and every non-rectangular corner.
> CornerOptions **paragraphBorderTopLeftCornerOption**
>
> Border corner shape for rectangular top-left corners and all non-rectangular corners. Note: corner options have explicit radii; rounded or beveled end joins derive from stroke weight.
> Measurement Unit (Number or String)=any **paragraphBorderTopRightCornerRadius**
>
> Border corner-effect radius, in measurement units, for the rectangular top-right corner.
> CornerOptions **paragraphBorderTopRightCornerOption**
>
> Border corner shape for the rectangular top-right corner.
> Measurement Unit (Number or String)=any **paragraphBorderBottomLeftCornerRadius**
>
> Border corner-effect radius, in measurement units, for the rectangular bottom-left corner.
> CornerOptions **paragraphBorderBottomLeftCornerOption**
>
> Border corner shape for the rectangular bottom-left corner.
> Measurement Unit (Number or String)=any **paragraphBorderBottomRightCornerRadius**
>
> Border corner-effect radius, in measurement units, for the rectangular bottom-right corner.
> CornerOptions **paragraphBorderBottomRightCornerOption**
>
> Border corner shape for the rectangular bottom-right corner.
> ParagraphBorderEnum **paragraphBorderWidth**
>
> Basis (text width or column width) for computing the width of the paragraph border.
> ParagraphBorderTopOriginEnum **paragraphBorderTopOrigin**
>
> Basis (cap height, ascent or baseline) for computing the top origin of the paragraph border.
> ParagraphBorderBottomOriginEnum **paragraphBorderBottomOrigin**
>
> Descent or baseline basis for the paragraph border lower origin.
> Measurement Unit (Number or String)=any **paragraphBorderLeftOffset**
>
> Distance that shifts the paragraph border left boundary.
> Measurement Unit (Number or String)=any **paragraphBorderRightOffset**
>
> Distance that shifts the paragraph border right boundary.
> Measurement Unit (Number or String)=any **paragraphBorderTopOffset**
>
> Distance that shifts the paragraph border upper boundary.
> Measurement Unit (Number or String)=any **paragraphBorderBottomOffset**
>
> Distance that shifts the paragraph border lower boundary.
> Boolean **paragraphBorderDisplayIfSplits**
>
> When true, paragraph borders also appear where text breaks across frames or columns.
> HyphenationStyleEnum **providerHyphenationStyle**
>
> Sets hyphenation style chosen for the provider.
> Boolean **mergeConsecutiveParaBorders**
>
> When true, successive para borders merge when their properties fully match.
> Mixed **sameParaStyleSpacing**
>
> Spacing between paragraphs that share the same style. Returns may be: Unit or Spacing enumerator.
> Number **paragraphKashidaWidth**
>
> Paragraph kashida width values: none = 0, short = 1, medium = 2, long = 3.
> Number **designAxes**
>
> Design Axes value.
> Boolean **alignToBaseline**
>
> When true, the text baseline aligns with the baseline grid.
> Measurement Unit (Number or String)=any **firstLineIndent**
>
> Amount used to indent the first line.
> Measurement Unit (Number or String)=any **leftIndent**
>
> Width for the left indent.
> Measurement Unit (Number or String)=any **rightIndent**
>
> Width for the right indent.
> Measurement Unit (Number or String)=any **spaceBefore**
>
> Height for the paragraph space above.
> Measurement Unit (Number or String)=any **spaceAfter**
>
> Height of spacing below the paragraph.
> Mixed **balanceRaggedLines**
>
> True, or an enumeration value, evens out ragged lines. Note: not valid with a single-line text composer. Returns may be: Boolean or BalanceLinesStyle enumerator.
> Justification **justification**
>
> Value for justification.
> SingleWordJustification **singleWordJustification**
>
> Alignment used for lines that contain a single word.
> Number **autoLeading**
>
> Auto-leading percentage based on type size. (Range: 0 to 500).
> Number **dropCapLines**
>
> Number of lines to drop cap.
> Number **dropCapCharacters**
>
> Number of characters to drop cap.
> Boolean **keepLinesTogether**
>
> When true, the configured line count stays together across column or text-frame breaks.
> Boolean **keepAllLinesTogether**
>
> When true, keeps all lines of the paragraph together. If false, permits paragraphs to break across pages or columns.
> Number **keepWithNext**
>
> Minimum number of lines to keep with the next paragraph.
> Number **keepFirstLines**
>
> Minimum paragraph lines retained together before a page break is permitted.
> Number **keepLastLines**
>
> Minimum paragraph lines retained together after a page break.
> StartParagraph **startParagraph**
>
> Location used to start the paragraph.
> String **composer**
>
> Sets text composer to use to compose the text.
> Number **minimumWordSpacing**
>
> Minimum word spacing as a percentage of the font word-space value. Note: valid only for justified text. (Range: 0 to 1000)
> Number **maximumWordSpacing**
>
> Maximum word spacing as a percentage of the font word-space value. Note: valid only for justified text. (Range: 0 to 1000)
> Number **desiredWordSpacing**
>
> Desired word spacing, as a percent based on the font word-space value. (Range: 0 to 1000)
> Number **minimumLetterSpacing**
>
> Minimum letter spacing as a percentge of the font built-in letter gap. (Range: -100 to 500) Note: valid only for justified text.
> Number **maximumLetterSpacing**
>
> Maximum letter spacing as a percentge of the font built-in letter gap. (Range: -100 to 500) Note: valid only for justified text.
> Number **desiredLetterSpacing**
>
> Desired letter spacing as a percentge of the font built-in letter gap. (Range: -100 to 500)
> Number **minimumGlyphScaling**
>
> Minimum individual-character width percentage. (Range: 50 to 200)
> Number **maximumGlyphScaling**
>
> Maximum individual-character width percentage. (Range: 50 to 200)
> Number **desiredGlyphScaling**
>
> Desired individual-character width percentage. (Range: 50 to 200)
> Boolean **ruleAbove**
>
> When true, places a rule above the paragraph.
> Boolean **ruleAboveOverprint**
>
> When true, the paragraph rule above overprints.
> Measurement Unit (Number or String)=any **ruleAboveLineWeight**
>
> Sets line weight of the rule above.
> Number **ruleAboveTint**
>
> Tint percentage for the rule above the paragraph. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **ruleAboveOffset**
>
> Offset from the first-line baseline for the paragraph rule above.
> Measurement Unit (Number or String)=any **ruleAboveLeftIndent**
>
> Left indent for the paragraph rule above, based on first-line text width or column width.
> Measurement Unit (Number or String)=any **ruleAboveRightIndent**
>
> Right indent for the paragraph rule above, based on first-line text width or column width.
> RuleWidth **ruleAboveWidth**
>
> Basis (text width or column width) for computing the width of the paragraph rule above.
> Mixed **ruleAboveColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the paragraph rule above. Returns may be: Swatch or String.
> Mixed **ruleAboveGapColor**
>
> Swatch value (color, gradient, tint, or mixed ink) for the paragraph rule above stroke gap. Note: valid only with a non-solid rule-above type. Returns may be: Swatch or String.
> Number **ruleAboveGapTint**
>
> Tint percentage for the paragraph rule stroke-gap color. (Range: 0 to 100) Note: valid only with a non-solid rule-above type.
> Boolean **ruleAboveGapOverprint**
>
> When true, the paragraph rule above stroke gap overprints. Note: valid only with a non-solid rule-above type.
> Mixed **ruleAboveType**
>
> StrokeStyle or String value naming the rule-above stroke type.
> Boolean **ruleBelow**
>
> When true, a rule below the paragraph is applied.
> Measurement Unit (Number or String)=any **ruleBelowLineWeight**
>
> Sets line weight of the rule below.
> Number **ruleBelowTint**
>
> Tint percentage for the rule below the paragraph. (Range: 0 to 100)
> Measurement Unit (Number or String)=any **ruleBelowOffset**
>
> Offset from the last-line baseline for the paragraph rule below.
> Measurement Unit (Number or String)=any **ruleBelowLeftIndent**
>
> Left indent for the paragraph rule below, based on last-line text width or column width.
> Measurement Unit (Number or String)=any **ruleBelowRightIndent**
>
> Right indent for the paragraph rule below, based on last-line text width or column width.
> RuleWidth **ruleBelowWidth**
>
> Basis (text width or column width) for computing the width of the paragraph rule below.
> Mixed **ruleBelowColor**
>
> Swatch value (color, gradient, tint, or mixed ink) used for the paragraph rule below. Returns may be: Swatch or String.
> Mixed **ruleBelowGapColor**
>
> Swatch value (color, gradient, tint, or mixed ink) for the paragraph rule below stroke gap. Note: valid only with a non-solid rule-below type. Returns may be: Swatch or String.
> Number **ruleBelowGapTint**
>
> Tint percentage for the paragraph rule below stroke-gap color. (Range: 0 to 100) Note: valid only with a non-solid rule-below type.
> Mixed **ruleBelowType**
>
> StrokeStyle or String value naming the rule-below stroke type.
> Boolean **hyphenateCapitalizedWords**
>
> When true, permits hyphenation of capitalized words.
> Boolean **hyphenation**
>
> When true, permits hyphenation.
> Number **hyphenateBeforeLast**
>
> Minimum trailing letters in a word that may be split by a hyphen.
> Number **hyphenateAfterFirst**
>
> Minimum leading letters in a word that may be split by a hyphen.
> Number **hyphenateWordsLongerThan**
>
> Minimum number of letters a word must have to qualify for hyphenation.
> Number **hyphenateLadderLimit**
>
> Maximum hyphens on consecutive lines; use zero for unlimited consecutive lines.
> Measurement Unit (Number or String)=any **hyphenationZone**
>
> Allowed white space at the end of a non-justified line before hypenation begins. Note: applies when composer is single-line composer.
> Number **hyphenWeight**
>
> Relative preference for better spacing versus fewer hyphens. Lower values increase hyphen use. (Range: 0 to 100)
> CharacterStyle **dropCapStyle**
>
> Character style used for the drop cap. Also accepts: String.
> Measurement Unit (Number or String)=any **lastLineIndent**
>
> Amount used to indent the last line in the paragraph.
> Boolean **hyphenateLastWord**
>
> When true, the final word in a paragraph may hyphenate. Note: valid only when hyphenation is true.
> Boolean **otfSlashedZero**
>
> When true, use a slashed zeroes in OpenType fonts.
> Boolean **otfHistorical**
>
> When true, use historical forms in OpenType fonts.
> Number **otfStylisticSets**
>
> Stylistic sets used in OpenType fonts.
> Number **gradientFillLength**
>
> Text-fill gradient extent: length for linear gradients or radius for radial gradients.
> Number **gradientFillAngle**
>
> Linear gradient angle for the text fill. (Range: -180 to 180)
> Number **gradientStrokeLength**
>
> Text-stroke gradient extent: length for linear gradients or radius for radial gradients.
> Number **gradientStrokeAngle**
>
> Linear gradient angle for the text stroke. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Gradient start point for the text fill, in page coordinates, formatted as [x, y].
> Measurement Unit (Number or String)=any **gradientStrokeStart**
>
> Gradient start point for the text stroke, in page coordinates, formatted as [x, y].
> Boolean **keepWithPrevious**
>
> Controls whether the paragraph first line stays with the previous paragraph last line.
> Mixed **spanSplitColumnCount**
>
> Number of columns a paragraph spans or the number of split columns. Returns may be: Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
> SpanColumnTypeOptions **spanColumnType**
>
> Controls whether a paragraph uses one column, spans columns, or splits columns.
> Measurement Unit (Number or String)=any **splitColumnInsideGutter**
>
> Inside gutter used when the paragraph splits columns.
> Measurement Unit (Number or String)=any **splitColumnOutsideGutter**
>
> Outside gutter used when the paragraph splits columns.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceBefore**
>
> Minimum space before a span or split column.
> Measurement Unit (Number or String)=any **spanColumnMinSpaceAfter**
>
> Minimum space after a span or split column.
> Boolean **ruleBelowOverprint**
>
> When true, the rule below overprints.
> Boolean **ruleBelowGapOverprint**
>
> When true, the gap color of the rule below overprints.
> Number **dropcapDetail**
>
> Drop-cap details from glyph outlines: left side bearing = 1, descenders = 2; Japanese frame grid uses 0x100,0x200,0x400.
