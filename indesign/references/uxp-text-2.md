# Text (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> _Read Only_
>
> XMLItem **associatedXMLElements**
>
> associatedXMLElements: XML elements linked to the Text.
> _Read Only_
>
> Number **length**
>
> length: Count of objects in this collection.
> _Read Only_
>
> Number **index**
>
> index: Index for the text in the collection or parent object.
> _Read Only_
>
> Story **parentStory**
>
> parentStory: Story that contains the text.
> _Read Only_
>
> Mixed **parentTextFrames**
>
> parentTextFrames: Text frame array containing this text. Return type: TextFrames or TextPaths array.
> _Read Only_
>
> Measurement Unit (Number or String)=any **ascent**
>
> ascent: Largest character ascent within the text.
> _Read Only_
>
> Measurement Unit (Number or String)=any **descent**
>
> descent: Largest character descent within the text.
> _Read Only_
>
> Measurement Unit (Number or String)=any **baseline**
>
> baseline: Text vertical-offset position.
> _Read Only_
>
> Measurement Unit (Number or String)=any **horizontalOffset**
>
> horizontalOffset: Text horizontal-offset position.
> _Read Only_
>
> Boolean **styleOverridden**
>
> styleOverridden: True value: additional attributes override the applied style.
> _Read Only_
>
> Measurement Unit (Number or String)=any **endBaseline**
>
> endBaseline: End-of-text vertical offset.
> _Read Only_
>
> Measurement Unit (Number or String)=any **endHorizontalOffset**
>
> endHorizontalOffset: End-of-text horizontal offset.
> _Read Only_
>
> CharacterStyle **appliedNestedStyles**
>
> appliedNestedStyles: Character styles supplied through nested-style rules.
> _Read Only_
>
> PageItem **allPageItems**
>
> allPageItems: Lists every page item inside the Text.
> _Read Only_
>
> Graphic **allGraphics**
>
> allGraphics: Lists every graphic inside the Text.
> _Read Only_
>
> Bullet **bulletChar**
>
> bulletChar: Bullet character.
> _Read Only_
>
> NumberingRestartPolicy **numberingRestartPolicies**
>
> numberingRestartPolicies: Numbering restart policies.
> _Read Only_
>
> Boolean **isValid**
>
> isValid: True value: the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> parent: Parent object for the Text. Possible parent types: a XmlStory, TextPath, TextFrame, EndnoteTextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story, Cell, XMLElement, Endnote, Footnote, Note, Change or HiddenText.
> _Read Only_
>
> Texts **texts**
>
> texts: Collection containing text objects.
> _Read Only_
>
> Characters **characters**
>
> characters: Collection containing characters.
> _Read Only_
>
> Words **words**
>
> words: Collection containing words.
> _Read Only_
>
> Lines **lines**
>
> lines: Collection containing lines.
> _Read Only_
>
> TextColumns **textColumns**
>
> textColumns: Collection containing text columns.
> _Read Only_
>
> Paragraphs **paragraphs**
>
> paragraphs: Collection containing paragraphs.
> _Read Only_
>
> InsertionPoints **insertionPoints**
>
> insertionPoints: Collection containing insertion points.
> _Read Only_
>
> TextStyleRanges **textStyleRanges**
>
> textStyleRanges: Collection containing text style ranges.
> _Read Only_
>
> EndnoteRanges **endnoteRanges**
>
> endnoteRanges: Collection containing endnote text ranges.
> _Read Only_
>
> Footnotes **footnotes**
>
> footnotes: Collection containing footnotes.
> _Read Only_
>
> TextVariableInstances **textVariableInstances**
>
> textVariableInstances: Collection containing text variable instances.
> _Read Only_
>
> NestedLineStyles **nestedLineStyles**
>
> nestedLineStyles: Collection containing nested line styles.
> _Read Only_
>
> NestedGrepStyles **nestedGrepStyles**
>
> nestedGrepStyles: Collection containing nested GREP styles.
> _Read Only_
>
> NestedStyles **nestedStyles**
>
> nestedStyles: Collection containing nested styles.
> _Read Only_
>
> TabStops **tabStops**
>
> tabStops: Collection containing tab stops.
> _Read Only_
>
> Tables **tables**
>
> tables: Collection containing tables.
> _Read Only_
>
> Ovals **ovals**
>
> ovals: Collection containing ellipses.
> _Read Only_
>
> SplineItems **splineItems**
>
> splineItems: Spline items collection.
> _Read Only_
>
> PageItems **pageItems**
>
> pageItems: Page-items collection for processing every page item in a container, such as a document, page, or group, independent of type.
> _Read Only_
>
> Rectangles **rectangles**
>
> rectangles: Collection containing rectangles.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> graphicLines: Collection containing graphic lines.
> _Read Only_
>
> TextFrames **textFrames**
>
> textFrames: Collection containing text frames.
> _Read Only_
>
> Polygons **polygons**
>
> polygons: Collection containing polygons.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> endnoteTextFrames: Collection containing endnote text frames.
> _Read Only_
>
> Events **events**
>
> events: Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> eventListeners: Collection containing event listeners.
> _Read Only_
>
> Notes **notes**
>
> notes: Collection containing notes.
> _Read Only_
>
> Groups **groups**
>
> groups: Collection containing groups.
> _Read Only_
>
> EPSTexts **epstexts**
>
> epstexts: EPSTexts.
> _Read Only_
>
> FormFields **formFields**
>
> formFields: Collection containing form fields.
> _Read Only_
>
> Buttons **buttons**
>
> buttons: Collection containing buttons.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> multiStateObjects: Collection containing multi-state objects.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> checkBoxes: Collection containing checkboxes.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> comboBoxes: Collection containing comboboxes.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> listBoxes: Collection containing listboxes.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> radioButtons: Collection containing radio buttons.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> textBoxes: Collection containing text boxes.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> signatureFields: Collection containing signature fields.
> _Read Only_
>
> HiddenTexts **hiddenTexts**
>
> hiddenTexts: Collection containing hidden text objects.
> _Read Only_
>
> Preferences **preferences**
>
> preferences: Collection containing preferences objects.
> Measurement Unit (Number or String)=any **paragraphShadingLeftOffset**
>
> paragraphShadingLeftOffset: Paragraph left-edge shading offset distance.
> Measurement Unit (Number or String)=any **paragraphShadingRightOffset**
>
> paragraphShadingRightOffset: Paragraph right-edge shading offset distance.
> Measurement Unit (Number or String)=any **paragraphShadingTopOffset**
>
> paragraphShadingTopOffset: Paragraph top-edge shading offset distance.
> Measurement Unit (Number or String)=any **paragraphShadingBottomOffset**
>
> paragraphShadingBottomOffset: Paragraph bottom-edge shading offset distance.
> ParagraphShadingWidthEnum **paragraphShadingWidth**
>
> paragraphShadingWidth: Calculation basis (text width or column width) for the paragraph shading width.
> ParagraphShadingTopOriginEnum **paragraphShadingTopOrigin**
>
> paragraphShadingTopOrigin: Top-origin calculation basis (cap height, ascent or baseline) for the paragraph shading.
> ParagraphShadingBottomOriginEnum **paragraphShadingBottomOrigin**
>
> paragraphShadingBottomOrigin: Bottom-origin calculation basis (descent or baseline) for the paragraph shading.
> Boolean **paragraphShadingClipToFrame**
>
> paragraphShadingClipToFrame: True value: paragraph shading clips to the frame shape.
> Boolean **paragraphShadingSuppressPrinting**
>
> paragraphShadingSuppressPrinting: True value: suppress printing of the shading of the paragraph.
> Boolean **paragraphShadingOn**
>
> paragraphShadingOn: True value: the paragraph shading is On.
> Boolean **paragraphShadingOverprint**
>
> paragraphShadingOverprint: True value: paragraph shading overprints.
> Number **paragraphShadingTint**
>
> paragraphShadingTint: Percentage tint for the paragraph shading. (Range: 0 to 100)
> Mixed **paragraphShadingColor**
>
> paragraphShadingColor: Swatch (color, gradient, tint, or mixed ink) used for the paragraph shading. Return type: Swatch or String.
> Number **kerningValue**
>
> kerningValue: Character spacing adjustment for adding or removing space, in thousandths of an em.
> Mixed **appliedFont**
>
> appliedFont: Font for the Text, given either as a font object or as the font-family name. Return type: Font or String.
> String **fontStyle**
>
> fontStyle: Font-style name.
> Measurement Unit (Number or String)=any **pointSize**
>
> pointSize: Text size.
> Mixed **leading**
>
> leading: Leading for the text. Return type: Unit or Leading enumerator.
> String **kerningMethod**
>
> kerningMethod: Type setting for pair kerning.
> Number **tracking**
>
> tracking: Loosening or tightening amount for a block of text, in thousandths of an em.
> Capitalization **capitalization**
>
> capitalization: Capitalization scheme.
> Position **position**
>
> position: Text position relative to the baseline.
> Boolean **underline**
>
> underline: True value: the text is underlined.
> Boolean **strikeThru**
>
> strikeThru: True value: a strikethrough line is drawn through the text.
> Boolean **ligatures**
>
> ligatures: True value: specific character combinations (e.g., fl, fi) are replaced by ligature characters.
> Boolean **noBreak**
>
> noBreak: True value: the text stays on one line.
> Number **horizontalScale**
>
> horizontalScale: Horizontal scaling for the Text.
> Number **verticalScale**
>
> verticalScale: Vertical scaling for the Text.
> Measurement Unit (Number or String)=any **baselineShift**
>
> baselineShift: Baseline shift for the text.
> Number **skew**
>
> skew: Skew angle for the Text.
> Number **fillTint**
>
> fillTint: Percentage tint for the fill color of the Text.. Use 0 to 100 for a tint percentage; use -1 for the inherited or overridden value.
> Number **strokeTint**
>
> strokeTint: Percentage tint for the stroke color of the Text.. Use 0 to 100 for a tint percentage; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> strokeWeight: Stroke weight applied to the characters for the text.
> Boolean **overprintStroke**
>
> overprintStroke: True value: character strokes overprint.
> Boolean **overprintFill**
>
> overprintFill: True value: character fill color overprints.
> OTFFigureStyle **otfFigureStyle**
>
> otfFigureStyle: Figure style in OpenType fonts.
> Boolean **otfOrdinal**
>
> otfOrdinal: True value: OpenType ordinals are used.
> Boolean **otfFraction**
>
> otfFraction: True value: OpenType fractions are used.
> Boolean **otfDiscretionaryLigature**
>
> otfDiscretionaryLigature: True value: OpenType discretionary ligatures are used.
> Boolean **otfTitling**
>
> otfTitling: True value: OpenType titling forms are used.
> Boolean **otfContextualAlternate**
>
> otfContextualAlternate: True value: OpenType contextual alternate forms are used.
> Boolean **otfSwash**
>
> otfSwash: True value: OpenType swash forms are used.
> Mixed **underlineColor**
>
> underlineColor: Swatch (color, gradient, tint, or mixed ink) used for the underline stroke. Return type: Swatch or String.
> Mixed **underlineGapColor**
>
> underlineGapColor: Swatch (color, gradient, tint, or mixed ink) used for the underline-stroke gap. Note: Applies for non-solid underline types. Return type: Swatch or String.
> Number **underlineTint**
>
> underlineTint: Percentage tint for the underline stroke. (Range: 0 to 100)
> Number **underlineGapTint**
>
> underlineGapTint: Percentage tint for the underline-stroke gap color. Note: Applies for non-solid underline types. (Range: 0 to 100)
> Boolean **underlineOverprint**
>
> underlineOverprint: True value: underline stroke color overprints.
> Boolean **underlineGapOverprint**
>
> underlineGapOverprint: True value: underline stroke gap color overprints.
> Mixed **underlineType**
>
> underlineType: Underline stroke style. Return type: StrokeStyle or String.
> Measurement Unit (Number or String)=any **underlineOffset**
>
> underlineOffset: Distance from the text baseline to the underline.
> Measurement Unit (Number or String)=any **underlineWeight**
>
> underlineWeight: Underline stroke weight.
> Mixed **strikeThroughColor**
>
> strikeThroughColor: Swatch (color, gradient, tint, or mixed ink) used for the strikethrough stroke. Return type: Swatch or String.
> Mixed **strikeThroughGapColor**
>
> strikeThroughGapColor: Swatch (color, gradient, tint, or mixed ink) used for the strikethrough-stroke gap. Return type: Swatch or String.
> Number **strikeThroughTint**
>
> strikeThroughTint: Percentage tint for the strikethrough stroke. (Range: 0 to 100)
> Number **strikeThroughGapTint**
>
> strikeThroughGapTint: Percentage tint for the strikethrough stroke gap color. Note: Applies when strike through type is not solid. (Range: 0 to 100)
> Boolean **strikeThroughOverprint**
>
> strikeThroughOverprint: True value: strikethrough stroke overprints.
> Boolean **strikeThroughGapOverprint**
>
> strikeThroughGapOverprint: True value: gap color of the strikethrough stroke overprints. Note: Applies when strike through type is not solid.
> Mixed **strikeThroughType**
>
> strikeThroughType: Strikethrough stroke style. Return type: StrokeStyle or String.
> Measurement Unit (Number or String)=any **strikeThroughOffset**
>
> strikeThroughOffset: Distance from the text baseline to the strikethrough stroke.
> Measurement Unit (Number or String)=any **strikeThroughWeight**
>
> strikeThroughWeight: Strikethrough stroke weight.
> Swatch **fillColor**
>
> fillColor: Swatch (color, gradient, tint, or mixed ink) used for the fill of the Text. Also accepts: String.
> Swatch **strokeColor**
>
> strokeColor: Swatch (color, gradient, tint, or mixed ink) used for the stroke of the Text. Also accepts: String.
> Mixed **appliedLanguage**
>
> appliedLanguage: Text language. Return type: LanguageWithVendors or Language. Also accepts: String.
> Boolean **paragraphBorderOn**
>
> paragraphBorderOn: True value: paragraph borders are enabled.
> Boolean **paragraphBorderOverprint**
>
> paragraphBorderOverprint: True value: paragraph borders overprint.
> Number **paragraphBorderTint**
>
> paragraphBorderTint: Percentage tint for the paragraph stroke. (Range: 0 to 100)
> Mixed **paragraphBorderColor**
>
> paragraphBorderColor: Swatch (color, gradient, tint, or mixed ink) used for the paragraph stroke. Return type: Swatch or String.
> Boolean **paragraphBorderGapOverprint**
>
> paragraphBorderGapOverprint: True value: paragraph border gaps overprint. Note: Applies only when border type is not solid.
> Number **paragraphBorderGapTint**
>
> paragraphBorderGapTint: Percentage tint for the paragraph border gap. Note: Applies only for non-solid border types. (Range: 0 to 100).
> Mixed **paragraphBorderGapColor**
>
> paragraphBorderGapColor: Swatch (color, gradient, tint, or mixed ink) used for the paragraph border gap. Note: Applies only for non-solid border types. Return type: Swatch or String.
> Mixed **paragraphBorderType**
>
> paragraphBorderType: Paragraph border type. Return type: StrokeStyle or String.
> Measurement Unit (Number or String)=any **paragraphBorderLeftLineWeight**
>
> paragraphBorderLeftLineWeight: Line weight for the paragraph border left side.
> Measurement Unit (Number or String)=any **paragraphBorderTopLineWeight**
>
> paragraphBorderTopLineWeight: Line weight for the paragraph border top side.
> Measurement Unit (Number or String)=any **paragraphBorderRightLineWeight**
>
> paragraphBorderRightLineWeight: Line weight for the paragraph border right side.
> Measurement Unit (Number or String)=any **paragraphBorderBottomLineWeight**
>
> paragraphBorderBottomLineWeight: Line weight for the paragraph border bottom side.
> EndCap **paragraphBorderStrokeEndCap**
>
> paragraphBorderStrokeEndCap: End shape of an open path.
> EndJoin **paragraphBorderStrokeEndJoin**
>
> paragraphBorderStrokeEndJoin: Corner join for the Text.
> Measurement Unit (Number or String)=any **paragraphShadingTopLeftCornerRadius**
>
> paragraphShadingTopLeftCornerRadius: Corner-effect radius, in measurement units, for every non-rectangular corner and the rectangular top left corner.
> CornerOptions **paragraphShadingTopLeftCornerOption**
>
> paragraphShadingTopLeftCornerOption: Corner shape for the top left corner of rectangular shapes and every corner of non-rectangular shapes. Note: Unlike end join, a corner option has its own radius; rounded or beveled end-join effects depend on stroke weight.
> Measurement Unit (Number or String)=any **paragraphShadingTopRightCornerRadius**
>
> paragraphShadingTopRightCornerRadius: Corner-effect radius in measurement units for rectangular-shape top-right corner.
> CornerOptions **paragraphShadingTopRightCornerOption**
>
> paragraphShadingTopRightCornerOption: Corner shape for rectangular-shape top-right corner.
> Measurement Unit (Number or String)=any **paragraphShadingBottomLeftCornerRadius**
>
> paragraphShadingBottomLeftCornerRadius: Corner-effect radius in measurement units for rectangular-shape bottom-left corner.
> CornerOptions **paragraphShadingBottomLeftCornerOption**
>
> paragraphShadingBottomLeftCornerOption: Corner shape for rectangular-shape bottom-left corner.
> Measurement Unit (Number or String)=any **paragraphShadingBottomRightCornerRadius**
>
> paragraphShadingBottomRightCornerRadius: Corner-effect radius in measurement units for rectangular-shape bottom-right corner.
> CornerOptions **paragraphShadingBottomRightCornerOption**
>
> paragraphShadingBottomRightCornerOption: Corner shape for rectangular-shape bottom-right corner.
> Measurement Unit (Number or String)=any **paragraphBorderTopLeftCornerRadius**
>
> paragraphBorderTopLeftCornerRadius: Corner-effect radius, in measurement units, for every non-rectangular corner and the rectangular top left corner.
> CornerOptions **paragraphBorderTopLeftCornerOption**
>
> paragraphBorderTopLeftCornerOption: Corner shape for the top left corner of rectangular shapes and every corner of non-rectangular shapes. Note: Unlike end join, a corner option has its own radius; rounded or beveled end-join effects depend on stroke weight.
> Measurement Unit (Number or String)=any **paragraphBorderTopRightCornerRadius**
>
> paragraphBorderTopRightCornerRadius: Corner-effect radius in measurement units for rectangular-shape top-right corner.
> CornerOptions **paragraphBorderTopRightCornerOption**
>
> paragraphBorderTopRightCornerOption: Corner shape for rectangular-shape top-right corner.
> Measurement Unit (Number or String)=any **paragraphBorderBottomLeftCornerRadius**
>
> paragraphBorderBottomLeftCornerRadius: Corner-effect radius in measurement units for rectangular-shape bottom-left corner.
> CornerOptions **paragraphBorderBottomLeftCornerOption**
>
> paragraphBorderBottomLeftCornerOption: Corner shape for rectangular-shape bottom-left corner.
> Measurement Unit (Number or String)=any **paragraphBorderBottomRightCornerRadius**
>
> paragraphBorderBottomRightCornerRadius: Corner-effect radius in measurement units for rectangular-shape bottom-right corner.
> CornerOptions **paragraphBorderBottomRightCornerOption**
>
> paragraphBorderBottomRightCornerOption: Corner shape for rectangular-shape bottom-right corner.
> ParagraphBorderEnum **paragraphBorderWidth**
>
> paragraphBorderWidth: Calculation basis (text width or column width) for the paragraph border width.
> ParagraphBorderTopOriginEnum **paragraphBorderTopOrigin**
>
> paragraphBorderTopOrigin: Top-origin calculation basis (cap height, ascent or baseline) for the paragraph border.
> ParagraphBorderBottomOriginEnum **paragraphBorderBottomOrigin**
>
> paragraphBorderBottomOrigin: Bottom-origin calculation basis (descent or baseline) for the paragraph border.
> Measurement Unit (Number or String)=any **paragraphBorderLeftOffset**
>
> paragraphBorderLeftOffset: Paragraph-border left-edge offset distance.
> Measurement Unit (Number or String)=any **paragraphBorderRightOffset**
>
> paragraphBorderRightOffset: Paragraph-border right-edge offset distance.
> Measurement Unit (Number or String)=any **paragraphBorderTopOffset**
>
> paragraphBorderTopOffset: Paragraph-border top-edge offset distance.
> Measurement Unit (Number or String)=any **paragraphBorderBottomOffset**
>
> paragraphBorderBottomOffset: Paragraph-border bottom-edge offset distance.
> Boolean **paragraphBorderDisplayIfSplits**
>
> paragraphBorderDisplayIfSplits: True value: paragraph borders also appear where a paragraph splits across frames or columns.
> HyphenationStyleEnum **providerHyphenationStyle**
>
> providerHyphenationStyle: Hyphenation style chosen for the provider.
> Boolean **mergeConsecutiveParaBorders**
>
> mergeConsecutiveParaBorders: True value: consecutive paragraph borders with matching properties merge.
> Mixed **sameParaStyleSpacing**
>
> sameParaStyleSpacing: Spacing between paragraphs that use the same style. Return type: Unit or Spacing enumerator.
> Number **paragraphKashidaWidth**
>
> paragraphKashidaWidth: Paragraph kashida width: 0 means none; 1 means short; 2 means medium; 3 means long.
> Number **designAxes**
>
> designAxes: Design Axes value.
> Boolean **alignToBaseline**
>
> alignToBaseline: True value: the text baseline aligns to the baseline grid.
> Measurement Unit (Number or String)=any **firstLineIndent**
>
> firstLineIndent: First-line indent amount.
> Measurement Unit (Number or String)=any **leftIndent**
>
> leftIndent: Left-indent width.
> Measurement Unit (Number or String)=any **rightIndent**
>
> rightIndent: Right-indent width.
> Measurement Unit (Number or String)=any **spaceBefore**
>
> spaceBefore: Paragraph space-before height.
> Measurement Unit (Number or String)=any **spaceAfter**
>
> spaceAfter: Paragraph space-after height.
> Mixed **balanceRaggedLines**
>
> balanceRaggedLines: True or an enumeration value balances ragged lines. Note: Unavailable for single-line text composers. Return type: Boolean or BalanceLinesStyle enumerator.
> Justification **justification**
>
> justification: Paragraph alignment.
> SingleWordJustification **singleWordJustification**
>
> singleWordJustification: Alignment to use for lines that contain a single word.
> Number **autoLeading**
>
> autoLeading: Auto-leading percentage of type size. (Range: 0 to 500)
> Number **dropCapLines**
>
> dropCapLines: Count of lines to drop cap.

## See also

- [Characters](uxp-characters.md)
