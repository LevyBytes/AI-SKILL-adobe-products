# Indesign (part 76)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Chooses the bottom-right corner form for rectangular shapes.
  \*/
  paragraphBorderBottomRightCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the bottom-right rectangular corner effect.
  \*/
  paragraphBorderBottomRightCornerRadius: number | string

/\*\*

- Paragraph stroke paint, supplied as a swatch, color, gradient, tint, or mixed ink.
  \*/
  paragraphBorderColor: Swatch | string

/\*\*

- When true, border segments also appear where a paragraph continues across frames or columns.
  \*/
  paragraphBorderDisplayIfSplits: boolean

/\*\*

- Gap paint for a non-solid paragraph border, using a swatch, color, gradient, tint, or mixed ink.
  \*/
  paragraphBorderGapColor: Swatch | string

/\*\*

- Enables overprinting for the paragraph border gap; applies only to non-solid border types.
  \*/
  paragraphBorderGapOverprint: boolean

/\*\*

- Gap tint percentage for paragraph borders, limited to non-solid border types. (Range: 0 to 100)
  \*/
  paragraphBorderGapTint: number

/\*\*

- Line weight used on the left side of the paragraph border.
  \*/
  paragraphBorderLeftLineWeight: number | string

/\*\*

- Offset distance for moving the paragraph border's left edge.
  \*/
  paragraphBorderLeftOffset: number | string

/\*\*

- A true value enables the paragraph border.
  \*/
  paragraphBorderOn: boolean

/\*\*

- A true value makes the paragraph border overprint.
  \*/
  paragraphBorderOverprint: boolean

/\*\*

- Line weight used on the right side of the paragraph border.
  \*/
  paragraphBorderRightLineWeight: number | string

/\*\*

- Offset distance for moving the paragraph border's right edge.
  \*/
  paragraphBorderRightOffset: number | string

/\*\*

- End-cap shape assigned to an open path.
  \*/
  paragraphBorderStrokeEndCap: EndCap

/\*\*

- Corner-join style assigned to the Text.
  \*/
  paragraphBorderStrokeEndJoin: EndJoin

/\*\*

- Paragraph stroke tint percentage. (Range: 0 to 100)
  \*/
  paragraphBorderTint: number

/\*\*

- Corner form used for the top-left corner on rectangles and for every corner on non-rectangular shapes. Note: corner option allows a radius value, unlike end join, where rounded or beveled appearance comes from the stroke weight.
  \*/
  paragraphBorderTopLeftCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the top-left corner effect on rectangles and all corners on non-rectangular shapes.
  \*/
  paragraphBorderTopLeftCornerRadius: number | string

/\*\*

- Line weight used on the top side of the paragraph border.
  \*/
  paragraphBorderTopLineWeight: number | string

/\*\*

- Offset distance for moving the paragraph border's top edge.
  \*/
  paragraphBorderTopOffset: number | string

/\*\*

- Cap height, ascent, or baseline basis used for computing the paragraph border's top origin.
  \*/
  paragraphBorderTopOrigin: ParagraphBorderTopOriginEnum

/\*\*

- Chooses the top-right corner form for rectangular shapes.
  \*/
  paragraphBorderTopRightCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the top-right rectangular corner effect.
  \*/
  paragraphBorderTopRightCornerRadius: number | string

/\*\*

- Stroke style used as the paragraph border type.
  \*/
  paragraphBorderType: StrokeStyle | string

/\*\*

- Text width or column width basis used for computing paragraph border width.
  \*/
  paragraphBorderWidth: ParagraphBorderEnum

/\*\*

- Direction setting for the paragraph.
  \*/
  paragraphDirection: ParagraphDirectionOptions

/\*\*

- When true, gyoudori covers the whole paragraph; when false, it is evaluated per line.
  \*/
  paragraphGyoudori: boolean

/\*\*

- Justification setting for the paragraph.
  \*/
  paragraphJustification: ParagraphJustificationOptions

/\*\*

- Kashida width for the paragraph: 0 means none, 1 short, 2 medium, and 3 long.
  \*/
  paragraphKashidaWidth: number

/\*\*

- Chooses the bottom-left corner form for rectangular paragraph shading.
  \*/
  paragraphShadingBottomLeftCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the bottom-left rectangular paragraph shading corner effect.
  \*/
  paragraphShadingBottomLeftCornerRadius: number | string

/\*\*

- Offset distance for moving the paragraph's bottom edge.
  \*/
  paragraphShadingBottomOffset: number | string

/\*\*

- Descent or baseline basis used for computing the paragraph shading's bottom origin.
  \*/
  paragraphShadingBottomOrigin: ParagraphShadingBottomOriginEnum

/\*\*

- Chooses the bottom-right corner form for rectangular paragraph shading.
  \*/
  paragraphShadingBottomRightCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the bottom-right rectangular paragraph shading corner effect.
  \*/
  paragraphShadingBottomRightCornerRadius: number | string

/\*\*

- When true, paragraph shading is clipped to match the frame shape.
  \*/
  paragraphShadingClipToFrame: boolean

/\*\*

- Paragraph shading paint, supplied as a swatch, color, gradient, tint, or mixed ink.
  \*/
  paragraphShadingColor: Swatch | string

/\*\*

- Offset distance for moving the paragraph's left edge.
  \*/
  paragraphShadingLeftOffset: number | string

/\*\*

- A true value turns paragraph shading On.
  \*/
  paragraphShadingOn: boolean

/\*\*

- A true value makes paragraph shading overprint.
  \*/
  paragraphShadingOverprint: boolean

/\*\*

- Offset distance for moving the paragraph's right edge.
  \*/
  paragraphShadingRightOffset: number | string

/\*\*

- When true, paragraph shading is not printed.
  \*/
  paragraphShadingSuppressPrinting: boolean

/\*\*

- Paragraph shading tint percentage. (Range: 0 to 100)
  \*/
  paragraphShadingTint: number

/\*\*

- Corner form used for the top-left corner on rectangles and for every corner on non-rectangular shapes. Note: corner option accepts a radius, while rounded or beveled end join results depend on stroke weight.
  \*/
  paragraphShadingTopLeftCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the top-left corner effect on rectangular shading and all corners on non-rectangular shading.
  \*/
  paragraphShadingTopLeftCornerRadius: number | string

/\*\*

- Offset distance for moving the paragraph's top edge.
  \*/
  paragraphShadingTopOffset: number | string

/\*\*

- Cap height, ascent, or baseline basis used for computing the paragraph shading's top origin.
  \*/
  paragraphShadingTopOrigin: ParagraphShadingTopOriginEnum

/\*\*

- Chooses the top-right corner form for rectangular paragraph shading.
  \*/
  paragraphShadingTopRightCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the top-right rectangular paragraph shading corner effect.
  \*/
  paragraphShadingTopRightCornerRadius: number | string

/\*\*

- Text width or column width basis used for computing paragraph shading width.
  \*/
  paragraphShadingWidth: ParagraphShadingWidthEnum

/\*\*

- Paragraph objects collected together.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Owning object for this Text, such as XmlStory, TextPath, TextFrame, EndnoteTextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story, Cell, XMLElement, Endnote, Footnote, Note, Change or HiddenText.
  \*/
  readonly parent: any

/\*\*

- Story object that holds this text.
  \*/
  readonly parentStory: Story

/\*\*

- Text frames containing this text, returned as an array or TextPaths.
  \*/
  readonly parentTextFrames: TextFrame[] | TextPaths

/\*\*

- Size setting for the text.
  \*/
  pointSize: number | string

/\*\*

- Polygon objects collected together.
  \*/
  readonly polygons: Polygons

/\*\*

- Baseline-relative placement for the text.
  \*/
  position: Position

/\*\*

- Positional form selected for OpenType.
  \*/
  positionalForm: PositionalForms

/\*\*

- Preferences objects collected together.
  \*/
  readonly preferences: Preferences

/\*\*

- Bulk-assignment object for setting several properties together.
  \*/
  properties: object

/\*\*

- Hyphenation style selected for the provider.
  \*/
  providerHyphenationStyle: HyphenationStyleEnum

/\*\*

- Radio button objects collected together.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Rectangle objects collected together.
  \*/
  readonly rectangles: Rectangles

/\*\*

- When true, line breaks are disallowed inside numbers; when false, multi-digit numbers may break between digits.
  \*/
  rensuuji: boolean

/\*\*

- Width value for the right indent.
  \*/
  rightIndent: number | string

/\*\*

- When true, Roman characters rotate in vertical text.
  \*/
  rotateSingleByteCharacters: boolean

/\*\*

- Alignment setting for ruby.
  \*/
  rubyAlignment: RubyAlignments

/\*\*

- A true value enables automatic ruby alignment.
  \*/
  rubyAutoAlign: boolean

/\*\*

- When true, ruby is scaled automatically to the requested percentage of parent text size. See ruby parent scaling percent for setting that percentage.
  \*/
  rubyAutoScaling: boolean

/\*\*

- When true, glyphs in ruby auto tcy (tate-chuu-yoko) are automatically scaled to fit one em.
  \*/
  rubyAutoTcyAutoScale: boolean

/\*\*

- Digit count included in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyDigits: number

/\*\*

- When true, Roman characters are included in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyIncludeRoman: boolean

/\*\*

- Ruby character fill paint, supplied as a swatch, color, gradient, tint, or mixed ink.
  \*/
  rubyFill: Swatch | string

/\*\*

- A true value enables ruby.
  \*/
  rubyFlag: boolean

/\*\*

- Font assigned to ruby characters.
  \*/
  rubyFont: Font | string

/\*\*

- Ruby character size, expressed in points.
  \*/
  rubyFontSize: number

/\*\*

- Font style used by ruby characters.
  \*/
  rubyFontStyle: string | NothingEnum

/\*\*

- When true, ruby uses OpenType Pro fonts.
  \*/
  rubyOpenTypePro: boolean

/\*\*

- When true, ruby overhang is limited to the requested amount. See ruby parent overhang amount for specifying that value.
  \*/
  rubyOverhang: boolean

/\*\*

- Overprint handling method for the ruby fill.
  \*/
  rubyOverprintFill: AdornmentOverprint

/\*\*

- Overprint handling method for the ruby stroke.
  \*/
  rubyOverprintStroke: AdornmentOverprint

/\*\*

- Maximum amount ruby characters may overhang their parent text.
  \*/
  rubyParentOverhangAmount: RubyOverhang

/\*\*

- Percentage applied to parent text size when deriving ruby text size.
  \*/
  rubyParentScalingPercent: number

/\*\*

- Ruby spacing setting measured relative to parent text.
  \*/
  rubyParentSpacing: RubyParentSpacing

/\*\*

- Ruby character placement relative to the parent text.
  \*/
  rubyPosition: RubyKentenPosition

/\*\*

- Text contents used for the ruby string.
  \*/
  rubyString: string

/\*\*

- Ruby character stroke paint, supplied as a swatch, color, gradient, tint, or mixed ink.
  \*/
  rubyStroke: Swatch | string

/\*\*

- Stroke tint percentage for ruby characters.
  \*/
  rubyStrokeTint: number

/\*\*

- Ruby fill-color tint percentage. (Range: 0 to 100)
  \*/
  rubyTint: number

/\*\*

- Type selection for ruby.
  \*/
  rubyType: RubyTypes

/\*\*

- Stroke weight for ruby characters, expressed in points.
  \*/
  rubyWeight: number

/\*\*

- Horizontal space amount between ruby characters and parent characters.
  \*/
  rubyXOffset: number

/\*\*

- Ruby character horizontal size as a percentage of original size.
  \*/
  rubyXScale: number

/\*\*

- Vertical space amount between ruby characters and parent characters.
  \*/
  rubyYOffset: number

/\*\*

- Ruby character vertical size as a percentage of original size.
  \*/
  rubyYScale: number

/\*\*

- A true value places a rule above the paragraph.
  \*/
  ruleAbove: boolean

/\*\*

- Paragraph rule-above paint, supplied as a swatch, color, gradient, tint, or mixed ink.
  \*/
  ruleAboveColor: Swatch | string

/\*\*

- Stroke-gap paint for the paragraph rule above, using a swatch, color, gradient, tint, or mixed ink. Applies only when that rule type is non-solid.
  \*/
  ruleAboveGapColor: Swatch | string

/\*\*

- When true, the paragraph rule-above stroke gap overprints. Applies only when the rule-above type is non-solid.
  \*/
  ruleAboveGapOverprint: boolean

/\*\*

- Stroke-gap tint percentage for the paragraph rule. (Range: 0 to 100) Applies only when the rule-above type is non-solid.
  \*/
  ruleAboveGapTint: number

/\*\*

- Left-edge indent distance for the paragraph rule above, based on either text width or the first line's column width in the paragraph.
  \*/
  ruleAboveLeftIndent: number | string

/\*\*

- Line weight assigned to the rule above.
  \*/
  ruleAboveLineWeight: number | string

/\*\*

- Baseline offset amount from the paragraph first line to the rule above.
  \*/
  ruleAboveOffset: number | string

/\*\*

- A true value makes the paragraph rule above overprint.
  \*/
  ruleAboveOverprint: boolean

/\*\*

- Right-edge indent distance for the paragraph rule above, based on either text width or the first line's column width in the paragraph.
  \*/
  ruleAboveRightIndent: number | string

/\*\*

- Tint percentage for the paragraph rule above. (Range: 0 to 100)
  \*/
  ruleAboveTint: number

/\*\*

- Stroke style used for the rule above the paragraph.
  \*/
  ruleAboveType: StrokeStyle | string

/\*\*

- Text width or column width basis used for computing the paragraph rule-above width.
  \*/
  ruleAboveWidth: RuleWidth

/\*\*

- A true value applies a paragraph rule below.
  \*/
  ruleBelow: boolean

/\*\*

- Paragraph rule-below paint, supplied as a swatch, color, gradient, tint, or mixed ink.
  \*/
  ruleBelowColor: Swatch | string

/\*\*

- Stroke-gap paint for the paragraph rule below, using a swatch, color, gradient, tint, or mixed ink. Applies only when that rule type is non-solid.
  \*/
  ruleBelowGapColor: Swatch | string

/\*\*

- When true, the rule-below gap color overprints.
  \*/
  ruleBelowGapOverprint: boolean

/\*\*

- Stroke-gap color tint percentage for the paragraph rule below. (Range: 0 to 100) Applies only when the rule-below type is non-solid.
  \*/
  ruleBelowGapTint: number

/\*\*

- Left-edge indent distance for the paragraph rule below, based on either text width or the last line's column width in the paragraph.
  \*/
  ruleBelowLeftIndent: number | string

/\*\*

- Line weight assigned to the rule below.
  \*/
  ruleBelowLineWeight: number | string

/\*\*

- Baseline offset amount from the paragraph last line to the rule below.
  \*/
  ruleBelowOffset: number | string

/\*\*

- A true value makes the rule below overprint.
  \*/
  ruleBelowOverprint: boolean

/\*\*

- Right-edge indent distance for the paragraph rule below, based on either text width or the last line's column width in the paragraph.
  \*/
  ruleBelowRightIndent: number | string

/\*\*

- Tint percentage for the paragraph rule below. (Range: 0 to 100)
  \*/
  ruleBelowTint: number

/\*\*

- Stroke style used for the rule below the paragraph.
  \*/
  ruleBelowType: StrokeStyle | string

/\*\*

- Text width or column width basis used for computing the paragraph rule-below width.
  \*/
  ruleBelowWidth: RuleWidth

/\*\*

- Spacing inserted between paragraphs that share the same style.
  \*/
  sameParaStyleSpacing: number | Spacing

/\*\*

- When true, character scaling changes the line size.
  \*/
  scaleAffectsLineHeight: boolean

/\*\*

- A true value applies shatai rotation.
  \*/
  shataiAdjustRotation: boolean

/\*\*

- A true value adjusts shatai tsume.
  \*/
  shataiAdjustTsume: boolean

/\*\*

- Shatai lens angle, expressed in degrees.
  \*/
  shataiDegreeAngle: number

/\*\*

- Shatai obliquing amount to apply, as a percentage.
  \*/
  shataiMagnification: number

/\*\*

- Signature field objects collected together.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- Alignment used for lines containing a single word.
  \*/
  singleWordJustification: SingleWordJustification

/\*\*

- Skew angle assigned to the Text.
  \*/
  skew: number

/\*\*

- Height value for space below the paragraph.
  \*/
  spaceAfter: number | string

/\*\*

- Height value for space above the paragraph.
  \*/
  spaceBefore: number | string

/\*\*

- Minimum post-paragraph space after a span or split column.
  \*/
  spanColumnMinSpaceAfter: number | string

/\*\*

- Minimum pre-paragraph space before a span or split column.
  \*/
  spanColumnMinSpaceBefore: number | string

/\*\*

- Selects whether the paragraph uses a single column, spans columns, or splits columns.
  \*/
  spanColumnType: SpanColumnTypeOptions

/\*\*

- Count of columns spanned by the paragraph, or count of split columns.
  \*/
  spanSplitColumnCount: number | SpanColumnCountOptions

/\*\*

- Spline item objects collected together.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Inside gutter value used when the paragraph splits into columns.
  \*/
  splitColumnInsideGutter: number | string

/\*\*

- Outside gutter value used when the paragraph splits into columns.
  \*/
  splitColumnOutsideGutter: number | string

/\*\*

- Location where the paragraph should begin.
  \*/
  startParagraph: StartParagraph

/\*\*

- Strikethrough stroke paint, supplied as a swatch, color, gradient, tint, or mixed ink.
  \*/
  strikeThroughColor: Swatch | string

/\*\*

- Gap paint for the strikethrough stroke, supplied as a swatch, color, gradient, tint, or mixed ink.
  \*/
  strikeThroughGapColor: Swatch | string

/\*\*

- When true, the strikethrough stroke gap color overprints. Applies when the strike through type is non-solid.
  \*/
  strikeThroughGapOverprint: boolean

/\*\*

- Tint percentage for the strikethrough stroke gap color. (Range: 0 to 100) Applies when the strike through type is non-solid.
  \*/
  strikeThroughGapTint: number

/\*\*

- Offset amount between the text baseline and the strikethrough stroke.
  \*/
  strikeThroughOffset: number | string

/\*\*

- A true value makes the strikethrough stroke overprint.
  \*/
  strikeThroughOverprint: boolean

/\*\*

- Strikethrough stroke tint percentage. (Range: 0 to 100)
  \*/
  strikeThroughTint: number

/\*\*

- Stroke style used for the strikethrough stroke.
  \*/
  strikeThroughType: StrokeStyle | string

/\*\*

- Stroke weight assigned to the strikethrough stroke.
  \*/
  strikeThroughWeight: number | string

/\*\*

- When true, a strikethrough line is drawn through the text.
  \*/
  strikeThru: boolean

/\*\*

- Stroke alignment assigned to the text.
  \*/
  strokeAlignment: TextStrokeAlign

/\*\*

- Text stroke paint, supplied as a swatch, color, gradient, tint, or mixed ink.
  \*/
  strokeColor: Swatch | string

/\*\*

- Text stroke-color tint percentage. Use a number from 0 to 100 for an explicit tint, or -1 for inherited or overridden behavior.
  \*/
  strokeTint: number

/\*\*

- Stroke weight assigned to the text characters.
  \*/
  strokeWeight: number | string

/\*\*

- When true, additional attributes override the applied style.
  \*/
  readonly styleOverridden: boolean

/\*\*

- Tab stops for the paragraph; may be returned as Array of Arrays of Property Name/Value Pairs.
  \*/
  tabList: any[]

/\*\*

- Tab stop objects collected together.
  \*/
  readonly tabStops: TabStops

/\*\*

- Table objects collected together.
  \*/
  readonly tables: Tables

/\*\*

- When true, the character becomes horizontal within vertical text.
  \*/
  tatechuyoko: boolean

/\*\*

- Horizontal offset for horizontal characters inside vertical text.
  \*/
  tatechuyokoXOffset: number

/\*\*

- Vertical offset for horizontal characters inside vertical text.
  \*/
  tatechuyokoYOffset: number

/\*\*

- Text box objects collected together.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- Text column objects collected together.
  \*/
  readonly textColumns: TextColumns

/\*\*

- Text frame objects collected together.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Text style range objects collected together.
  \*/
  readonly textStyleRanges: TextStyleRanges

/\*\*

- Text variable instance objects collected together.
  \*/
  readonly textVariableInstances: TextVariableInstances

/\*\*

- Text objects collected together.
  \*/
  readonly texts: Texts

/\*\*

- Loosening or tightening amount for a text block, expressed in thousands of an em.
  \*/
  tracking: number

/\*\*

- Space amount after each character.
  \*/
  trailingAki: number

/\*\*

- When true, ideographic spaces stay on the current line instead of wrapping like text characters.
  \*/
  treatIdeographicSpaceAsSpace: boolean

/\*\*

- Horizontal character compression amount.
  \*/
  tsume: number

/\*\*

- A true value underlines the text.
  \*/
  underline: boolean

/\*\*

- Underline stroke paint, supplied as a swatch, color, gradient, tint, or mixed ink. .
  \*/
  underlineColor: Swatch | string

/\*\*

- Gap paint for the underline stroke, supplied as a swatch, color, gradient, tint, or mixed ink. Applies when underline type is non-solid.
  \*/
  underlineGapColor: Swatch | string

/\*\*

- When true, the underline stroke gap color overprints.
  \*/
  underlineGapOverprint: boolean

/\*\*

- Tint percentage for the underline stroke gap color. (Range: 0 to 100) Applies when underline type is non-solid.
  \*/
  underlineGapTint: number

/\*\*

- Offset amount between the text baseline and the underline.
  \*/
  underlineOffset: number | string

/\*\*

- A true value makes the underline stroke color overprint.
  \*/
  underlineOverprint: boolean

/\*\*

- Underline stroke tint percentage. (Range: 0 to 100)
  \*/
  underlineTint: number

/\*\*

- Stroke style used for the underline stroke.
  \*/
  underlineType: StrokeStyle | string

/\*\*

- Stroke weight assigned to the underline stroke.
  \*/
  underlineWeight: number | string

/\*\*

- Vertical scaling assigned to the Text.
  \*/
  verticalScale: number

/\*\*

- A true value enables warichu.
  \*/
  warichu: boolean

/\*\*

- Alignment setting for warichu.
  \*/
  warichuAlignment: WarichuAlignment

/\*\*

- Minimum character count allowed after a line break.
  \*/
  warichuCharsAfterBreak: number

/\*\*

- Minimum character count allowed before a line break.
  \*/
  warichuCharsBeforeBreak: number

/\*\*

- Gap amount between lines of warichu characters.
  \*/
  warichuLineSpacing: number

/\*\*

- Number of warichu lines inside one normal line.
  \*/
  warichuLines: number

/\*\*

- Percentage applied to parent text size when deriving warichu size.
  \*/
  warichuSize: number

/\*\*

- Word objects collected together.
  \*/
  readonly words: Words

/\*\*

- Horizontal offset used for diacritic adjustment.
  \*/
  xOffsetDiacritic: number

/\*\*

- Vertical offset used for diacritic adjustment.
  \*/
  yOffsetDiacritic: number
