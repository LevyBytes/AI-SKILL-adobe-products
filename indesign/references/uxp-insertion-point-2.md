# Insertion Point (part 2)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Instance

> _Read Only_
>
> Bullet **bulletChar**
>
> Bullet character value.
> _Read Only_
>
> NumberingRestartPolicy **numberingRestartPolicies**
>
> Numbering restart policy set.
> _Read Only_
>
> XMLItem **associatedXMLElements**
>
> XML elements associated with the InsertionPoint.
> _Read Only_
>
> Number **length**
>
> Number for objects in the collection.
> _Read Only_
>
> Number **index**
>
> Index for the text in the collection or parent object.
> _Read Only_
>
> Story **parentStory**
>
> Story that contains the text.
> _Read Only_
>
> Mixed **parentTextFrames**
>
> Array listing the text frames that contain the text. Possible returns: Array of TextFrames or TextPaths.
> _Read Only_
>
> Measurement Unit (Number or String)=any **ascent**
>
> Highest character ascent in the text.
> _Read Only_
>
> Measurement Unit (Number or String)=any **descent**
>
> Greatest character descent in the text.
> _Read Only_
>
> Measurement Unit (Number or String)=any **baseline**
>
> Text baseline vertical offset.
> _Read Only_
>
> Measurement Unit (Number or String)=any **horizontalOffset**
>
> Horizontal offset of the text.
> _Read Only_
>
> Boolean **styleOverridden**
>
> When true, additional attributes override the applied style.
> _Read Only_
>
> Measurement Unit (Number or String)=any **endBaseline**
>
> Vertical offset at the text end.
> _Read Only_
>
> Measurement Unit (Number or String)=any **endHorizontalOffset**
>
> Horizontal offset at the text end.
> _Read Only_
>
> CharacterStyle **appliedNestedStyles**
>
> Applied character styles dictated by nested styles.
> _Read Only_
>
> PageItem **allPageItems**
>
> Lists every page items inside the InsertionPoint.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphics inside the InsertionPoint.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the InsertionPoint; possible parent types include XmlStory, TextPath, TextFrame, EndnoteTextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story, Cell, XMLElement, Endnote, Footnote, Note, Change or HiddenText.
> _Read Only_
>
> Texts **texts**
>
> Collection containing text objects.
> _Read Only_
>
> Characters **characters**
>
> Collection containing characters.
> _Read Only_
>
> Words **words**
>
> Collection containing words.
> _Read Only_
>
> Lines **lines**
>
> Collection containing lines.
> _Read Only_
>
> TextColumns **textColumns**
>
> Collection containing text columns.
> _Read Only_
>
> Paragraphs **paragraphs**
>
> Collection containing paragraphs.
> _Read Only_
>
> InsertionPoints **insertionPoints**
>
> Collection containing insertion points.
> _Read Only_
>
> TextStyleRanges **textStyleRanges**
>
> Collection containing text style ranges.
> _Read Only_
>
> Endnotes **endnotes**
>
> Collection containing endnotes.
> _Read Only_
>
> EndnoteRanges **endnoteRanges**
>
> Collection containing endnote text ranges.
> _Read Only_
>
> Footnotes **footnotes**
>
> Collection containing footnotes.
> _Read Only_
>
> TextVariableInstances **textVariableInstances**
>
> Collection containing text variable instances.
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
> Tables **tables**
>
> Collection containing tables.
> _Read Only_
>
> Ovals **ovals**
>
> Collection containing ellipses.
> _Read Only_
>
> SplineItems **splineItems**
>
> Spline items collection.
> _Read Only_
>
> PageItems **pageItems**
>
> Page-item collection for handling every page item in a container, such as a document, page, or group, without filtering by type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Collection containing rectangles.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Collection containing graphic lines.
> _Read Only_
>
> TextFrames **textFrames**
>
> Collection containing text frames.
> _Read Only_
>
> Polygons **polygons**
>
> Collection containing polygons.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Collection containing endnote text frames.
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
> Notes **notes**
>
> Collection containing notes.
> _Read Only_
>
> Groups **groups**
>
> Collection containing groups.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts collection.
> _Read Only_
>
> FormFields **formFields**
>
> Collection containing form fields.
> _Read Only_
>
> Buttons **buttons**
>
> Collection containing buttons.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Collection containing multi-state objects.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Collection containing checkboxes.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Collection containing comboboxes.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Collection containing listboxes.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Collection containing radio buttons.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Collection containing text boxes.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Collection containing signature fields.
> _Read Only_
>
> HiddenTexts **hiddenTexts**
>
> Collection containing hidden text objects.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> Number **designAxes**
>
> Design Axes value.
> Mixed **tabList**
>
> List of the tab stops in the paragraph. Possible returns: Array of Arrays of Property Name/Value Pairs.
> Measurement Unit (Number or String)=any **paragraphShadingLeftOffset**
>
> Paragraph left-edge offset distance.
> Measurement Unit (Number or String)=any **paragraphShadingRightOffset**
>
> Paragraph right-edge offset distance.
> Measurement Unit (Number or String)=any **paragraphShadingTopOffset**
>
> Paragraph top-edge offset distance.
> Measurement Unit (Number or String)=any **paragraphShadingBottomOffset**
>
> Paragraph bottom-edge offset distance.
> ParagraphShadingWidthEnum **paragraphShadingWidth**
>
> Basis for calculating the width of the paragraph shading: text width or column width.
> ParagraphShadingTopOriginEnum **paragraphShadingTopOrigin**
>
> Basis for calculating the top origin of the paragraph shading: cap height, ascent or baseline.
> ParagraphShadingBottomOriginEnum **paragraphShadingBottomOrigin**
>
> Basis for calculating the bottom origin of the paragraph shading: descent or baseline.
> Boolean **paragraphShadingClipToFrame**
>
> When true, paragraph shading clips to the frame shape.
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
> Percentage tint for the paragraph shading; range: 0 to 100.
> Mixed **paragraphShadingColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the paragraph shading. Possible returns: Swatch or String.
> Number **kerningValue**
>
> Character spacing adjustment, measured in thousandths of an em.
> Mixed **appliedFont**
>
> Applied font for the InsertionPoint, provided as a Font object or font-family name. Possible returns: Font or String.
> String **fontStyle**
>
> Name for the font style.
> Measurement Unit (Number or String)=any **pointSize**
>
> Text size.
> Mixed **leading**
>
> For the text. Possible returns: Unit or Leading enumerator, applied leading.
> String **kerningMethod**
>
> Type for pair kerning.
> Number **tracking**
>
> Amount for tightening or loosening a text block, in thousandths of an em.
> Capitalization **capitalization**
>
> Capitalization scheme.
> Position **position**
>
> text position relative to the baseline.
> Boolean **underline**
>
> When true, underlines the text.
> Boolean **strikeThru**
>
> When true, draws a strikethrough line through the text.
> Boolean **ligatures**
>
> When true, ligature characters replace combinations such as fl and fi.
> Boolean **noBreak**
>
> When true, keeps the text on the same line.
> Number **horizontalScale**
>
> For the InsertionPoint, applied horizontal scaling.
> Number **verticalScale**
>
> For the InsertionPoint, applied vertical scaling.
> Measurement Unit (Number or String)=any **baselineShift**
>
> For the text, applied baseline shift.
> Number **skew**
>
> Skew angle of the InsertionPoint.
> Number **fillTint**
>
> Fill tint percentage for the InsertionPoint. Use 0 to 100 for an explicit tint; use -1 for the inherited or overridden value.
> Number **strokeTint**
>
> Stroke tint percentage for the InsertionPoint. Use 0 to 100 for an explicit tint; use -1 for the inherited or overridden value.
> Measurement Unit (Number or String)=any **strokeWeight**
>
> For the characters of the text, applied stroke weight.
> Boolean **overprintStroke**
>
> When true, the stroke of the characters overprints.
> Boolean **overprintFill**
>
> When true, the fill color of the characters overprints.
> OTFFigureStyle **otfFigureStyle**
>
> figure style in OpenType fonts.
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
> Swatch (color, gradient, tint, or mixed ink) used for the underline stroke. . Possible returns: Swatch or String.
> Mixed **underlineGapColor**
>
> Swatch (color, gradient, tint, or mixed ink) for the underline stroke gap. Note: valid when underline type is not solid. Possible returns: Swatch or String.
> Number **underlineTint**
>
> Underline stroke tint (as a percentage); range: 0 to 100.
> Number **underlineGapTint**
>
> Underline gap-color tint percentage. Range: 0 to 100. Note: applies when underline type is not solid.
> Boolean **underlineOverprint**
>
> When true, the underline stroke color overprints.
> Boolean **underlineGapOverprint**
>
> When true, the gap color of the underline stroke overprints.
> Mixed **underlineType**
>
> Stroke type of the underline stroke. Possible returns: StrokeStyle or String.
> Measurement Unit (Number or String)=any **underlineOffset**
>
> Offset between underline and text baseline.
> Measurement Unit (Number or String)=any **underlineWeight**
>
> Stroke weight for the underline stroke.
> Mixed **strikeThroughColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the strikethrough stroke. Possible returns: Swatch or String.
> Mixed **strikeThroughGapColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the gap of the strikethrough stroke. Possible returns: Swatch or String.
> Number **strikeThroughTint**
>
> Percentage tint for the strikethrough stroke; range: 0 to 100.
> Number **strikeThroughGapTint**
>
> Strikethrough gap-color tint percentage. Range: 0 to 100. Note: applies when strike through type is not solid.
> Boolean **strikeThroughOverprint**
>
> When true, the strikethrough stroke overprints.
> Boolean **strikeThroughGapOverprint**
>
> When true, the gap color of the strikethrough stroke overprints. Note: valid when strike through type is not solid.
> Mixed **strikeThroughType**
>
> Stroke type of the strikethrough stroke. Possible returns: StrokeStyle or String.
> Measurement Unit (Number or String)=any **strikeThroughOffset**
>
> Offset between strikethrough stroke and text baseline.
> Measurement Unit (Number or String)=any **strikeThroughWeight**
>
> Stroke weight for the strikethrough stroke.
> Swatch **fillColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the fill of the InsertionPoint. . Also accepts: String.
> Swatch **strokeColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the stroke of the InsertionPoint. Also accepts: String.
> Mixed **appliedLanguage**
>
> Language for the text. Possible returns: LanguageWithVendors or Language. Also accepts: String.
> Boolean **paragraphBorderOn**
>
> When true, the paragraph border is on.
> Boolean **paragraphBorderOverprint**
>
> When true, the paragraph border overprints.
> Number **paragraphBorderTint**
>
> Percentage tint for the paragraph stroke; range: 0 to 100.
> Mixed **paragraphBorderColor**
>
> Swatch (color, gradient, tint, or mixed ink) used for the paragraph stroke. Possible returns: Swatch or String.
> Boolean **paragraphBorderGapOverprint**
>
> When true, the paragraph border gap overprints. Note: valid only when border type is not solid.
> Number **paragraphBorderGapTint**
>
> Paragraph border-gap tint percentage. Range: 0 to 100. Note: valid only when the border type is not solid.
> Mixed **paragraphBorderGapColor**
>
> Swatch (color, gradient, tint, or mixed ink) for the paragraph border gap. Note: applies only when the border type is not solid. Possible returns: Swatch or String.
> Mixed **paragraphBorderType**
>
> Type for the border for the paragraph. Possible returns: StrokeStyle or String.
> Measurement Unit (Number or String)=any **paragraphBorderLeftLineWeight**
>
> Left line weight for the paragraph border.
> Measurement Unit (Number or String)=any **paragraphBorderTopLineWeight**
>
> Top line weight for the paragraph border.
> Measurement Unit (Number or String)=any **paragraphBorderRightLineWeight**
>
> Right line weight for the paragraph border.
> Measurement Unit (Number or String)=any **paragraphBorderBottomLineWeight**
>
> Bottom line weight for the paragraph border.
> EndCap **paragraphBorderStrokeEndCap**
>
> End shape of an open path.
> EndJoin **paragraphBorderStrokeEndJoin**
>
> For the InsertionPoint, applied corner join.
> Measurement Unit (Number or String)=any **paragraphShadingTopLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' top left corner and every corner on non-rectangular shapes
> CornerOptions **paragraphShadingTopLeftCornerOption**
>
> Shape assigned to rectangular shapes' top left corner and every corner on non-rectangular shapes. Note: unlike end join, a corner option can set a radius; end join rounding or beveling depends on stroke weight.
> Measurement Unit (Number or String)=any **paragraphShadingTopRightCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' top right corner
> CornerOptions **paragraphShadingTopRightCornerOption**
>
> Shape assigned to rectangular shapes' top right corner
> Measurement Unit (Number or String)=any **paragraphShadingBottomLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' bottom left corner
> CornerOptions **paragraphShadingBottomLeftCornerOption**
>
> Shape assigned to rectangular shapes' bottom left corner.
> Measurement Unit (Number or String)=any **paragraphShadingBottomRightCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' bottom right corner
> CornerOptions **paragraphShadingBottomRightCornerOption**
>
> Shape assigned to rectangular shapes' bottom right corner.
> Measurement Unit (Number or String)=any **paragraphBorderTopLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' top left corner and every corner on non-rectangular shapes
> CornerOptions **paragraphBorderTopLeftCornerOption**
>
> Shape assigned to rectangular shapes' top left corner and every corner on non-rectangular shapes. Note: unlike end join, a corner option can set a radius; end join rounding or beveling depends on stroke weight.
> Measurement Unit (Number or String)=any **paragraphBorderTopRightCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' top right corner
> CornerOptions **paragraphBorderTopRightCornerOption**
>
> Shape assigned to rectangular shapes' top right corner
> Measurement Unit (Number or String)=any **paragraphBorderBottomLeftCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' bottom left corner
> CornerOptions **paragraphBorderBottomLeftCornerOption**
>
> Shape assigned to rectangular shapes' bottom left corner.
> Measurement Unit (Number or String)=any **paragraphBorderBottomRightCornerRadius**
>
> Corner-effect radius, in measurement units, for rectangular shapes' bottom right corner
> CornerOptions **paragraphBorderBottomRightCornerOption**
>
> Shape assigned to rectangular shapes' bottom right corner.
> ParagraphBorderEnum **paragraphBorderWidth**
>
> Basis for calculating the width of the paragraph border: text width or column width.
> ParagraphBorderTopOriginEnum **paragraphBorderTopOrigin**
>
> Basis for calculating the top origin of the paragraph border: cap height, ascent or baseline.
> ParagraphBorderBottomOriginEnum **paragraphBorderBottomOrigin**
>
> Basis for calculating the bottom origin of the paragraph border: descent or baseline.
> Measurement Unit (Number or String)=any **paragraphBorderLeftOffset**
>
> Paragraph border left-edge offset distance.
> Measurement Unit (Number or String)=any **paragraphBorderRightOffset**
>
> Paragraph border right-edge offset distance.
> Measurement Unit (Number or String)=any **paragraphBorderTopOffset**
>
> Paragraph border top-edge offset distance.
> Measurement Unit (Number or String)=any **paragraphBorderBottomOffset**
>
> Paragraph border bottom-edge offset distance.
> Boolean **paragraphBorderDisplayIfSplits**
>
> When true, paragraph borders also appear at frame or column split points.
> HyphenationStyleEnum **providerHyphenationStyle**
>
> Hyphenation style chosen for the provider.
> Boolean **mergeConsecutiveParaBorders**
>
> When true, consecutive para borders with completely similar properties are merged.
> Mixed **sameParaStyleSpacing**
>
> Space between paragraphs using same style. Possible returns: Unit or Spacing enumerator.
> Number **paragraphKashidaWidth**
>
> Paragraph kashida width values: 0 = none; 1 = short; 2 = medium; 3 = long.
> Boolean **alignToBaseline**
>
> When true, the text baseline aligns to the baseline grid.
> Measurement Unit (Number or String)=any **firstLineIndent**
>
> First-line indent amount.
> Measurement Unit (Number or String)=any **leftIndent**
>
> Width of the left indent.
> Measurement Unit (Number or String)=any **rightIndent**
>
> Width of the right indent.
> Measurement Unit (Number or String)=any **spaceBefore**
>
> Paragraph space-above height.
> Measurement Unit (Number or String)=any **spaceAfter**
>
> Paragraph space-below height.
> Mixed **balanceRaggedLines**
>
> Balances ragged lines when set to true or to an enumeration value. Note: incompatible with a single-line text composer. Possible returns: Boolean or BalanceLinesStyle enumerator.
> Justification **justification**
>
> Paragraph alignment.
> SingleWordJustification **singleWordJustification**
>
> Alignment to use for lines that contain a single word.
> Number **autoLeading**
>
> Auto-leading percentage of type size. Range: 0 to 500.
> Number **dropCapLines**
>
> Number for lines to drop cap.
> Number **dropCapCharacters**
>
> Number for characters to drop cap.
> Boolean **keepLinesTogether**
>
> When true, the configured line count stays together across column or text-frame breaks.
> Boolean **keepAllLinesTogether**
>
> When true, keeps all lines of the paragraph together. When false, allows paragraphs to break across pages or columns.
> Number **keepWithNext**
>
> Minimum number of lines to keep with the next paragraph.
> Number **keepFirstLines**
>
> Minimum paragraph lines kept together before a page break is allowed.
> Number **keepLastLines**
>
> Minimum paragraph lines kept together after a page break.
> StartParagraph **startParagraph**
>
> Location at which to start the paragraph.
> String **composer**
>
> Text composer to use to compose the text.
> Number **minimumWordSpacing**
>
> Minimum word spacing percentage based on the font's word-space value. Note: applies only when text is justified. Range: 0 to 1000.
> Number **maximumWordSpacing**
>
> Maximum word spacing percentage based on the font's word-space value. Note: applies only when text is justified. Range: 0 to 1000.
> Number **desiredWordSpacing**
>
> Desired word spacing percentage based on the font's word-space value. Range: 0 to 1000.
> Number **minimumLetterSpacing**
>
> Minimum letter spacing percentage relative to the built-in font letter space. Range: -100 to 500. Note: applies only when text is justified.
> Number **maximumLetterSpacing**
>
> Maximum letter spacing percentage relative to the built-in font letter space. Range: -100 to 500. Note: applies only when text is justified.
> Number **desiredLetterSpacing**
>
> Desired letter spacing percentage relative to the font built-in letter space. Range: -100 to 500.
> Number **minimumGlyphScaling**
>
> Minimum glyph scaling percentage for individual characters. Range: 50 to 200.
> Number **maximumGlyphScaling**
>
> Maximum glyph scaling percentage for individual characters. Range: 50 to 200.
> Number **desiredGlyphScaling**
>
> Desired glyph scaling percentage for individual characters. Range: 50 to 200.
> Boolean **ruleAbove**
>
> When true, places a rule above the paragraph.
> Boolean **ruleAboveOverprint**
>
> When true, the paragraph rule above overprints.
> Measurement Unit (Number or String)=any **ruleAboveLineWeight**
>
> Line weight for the rule above.
> Number **ruleAboveTint**
>
> Paragraph rule-above tint percentage. Range: 0 to 100.
> Measurement Unit (Number or String)=any **ruleAboveOffset**
>
> Offset from the first-line baseline to the paragraph rule above.
> Measurement Unit (Number or String)=any **ruleAboveLeftIndent**
>
> Left-edge indent for the paragraph rule above, based on text width or the first-line column width.
> Measurement Unit (Number or String)=any **ruleAboveRightIndent**
>
> Right-edge indent for the paragraph rule above, based on text width or the first-line column width.

## See also

- [Characters](uxp-characters.md)
