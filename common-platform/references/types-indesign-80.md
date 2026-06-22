# Indesign (part 80)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- When true, ruby uses OpenType Pro fonts.
  \*/
  rubyOpenTypePro: boolean

/\*\*

- When true, ruby overhang is constrained to the specified amount. For details on specifying an amount, see ruby parent overhang amount.
  \*/
  rubyOverhang: boolean

/\*\*

- Overprint behavior for the ruby fill.
  \*/
  rubyOverprintFill: AdornmentOverprint

/\*\*

- Overprint behavior for the ruby stroke.
  \*/
  rubyOverprintStroke: AdornmentOverprint

/\*\*

- Maximum amount ruby characters may overhang parent text.
  \*/
  rubyParentOverhangAmount: RubyOverhang

/\*\*

- Percentage used to scale parent text size when deriving ruby text size.
  \*/
  rubyParentScalingPercent: number

/\*\*

- Ruby spacing in relation to parent text.
  \*/
  rubyParentSpacing: RubyParentSpacing

/\*\*

- Ruby character position in relation to parent text.
  \*/
  rubyPosition: RubyKentenPosition

/\*\*

- Contents of the ruby string.
  \*/
  rubyString: string

/\*\*

- Ruby character strokes receive this swatch (color, gradient, tint, or mixed ink).
  \*/
  rubyStroke: Swatch | string

/\*\*

- Ruby character stroke tint, expressed as a percentage.
  \*/
  rubyStrokeTint: number

/\*\*

- Ruby fill color tint, expressed as a percentage. (Range: 0 to 100)
  \*/
  rubyTint: number

/\*\*

- Ruby type setting.
  \*/
  rubyType: RubyTypes

/\*\*

- Ruby character stroke weight, in points.
  \*/
  rubyWeight: number

/\*\*

- Horizontal space amount between ruby and parent characters.
  \*/
  rubyXOffset: number

/\*\*

- Ruby character horizontal scale, expressed as a percent of the original size.
  \*/
  rubyXScale: number

/\*\*

- Vertical space amount between ruby and parent characters.
  \*/
  rubyYOffset: number

/\*\*

- Ruby character vertical scale, expressed as a percent of the original size.
  \*/
  rubyYScale: number

/\*\*

- When true, a rule is placed above the paragraph.
  \*/
  ruleAbove: boolean

/\*\*

- Paragraph rule above uses this swatch (color, gradient, tint, or mixed ink).
  \*/
  ruleAboveColor: Swatch | string

/\*\*

- Stroke gap for the paragraph rule above uses this swatch (color, gradient, tint, or mixed ink). Note: Non-solid paragraph rule above types only.
  \*/
  ruleAboveGapColor: Swatch | string

/\*\*

- When true, the stroke gap for the paragraph rule above overprints. Note: Applies only when the rule above type is not solid.
  \*/
  ruleAboveGapOverprint: boolean

/\*\*

- Stroke gap color tint for the paragraph rule, expressed as a percentage. (Range: 0 to 100) Note: Applies only when the rule above type is not solid.
  \*/
  ruleAboveGapTint: number

/\*\*

- Left-edge indent distance for the paragraph rule above, based on either text width or the first line's column width.
  \*/
  ruleAboveLeftIndent: number | string

/\*\*

- Line weight for the rule above.
  \*/
  ruleAboveLineWeight: number | string

/\*\*

- Offset amount from the first line baseline to the paragraph rule above.
  \*/
  ruleAboveOffset: number | string

/\*\*

- When true, the paragraph rule above overprints.
  \*/
  ruleAboveOverprint: boolean

/\*\*

- Right-edge indent distance for the paragraph rule above, based on either text width or the first line's column width.
  \*/
  ruleAboveRightIndent: number | string

/\*\*

- Paragraph rule above tint, expressed as a percentage. (Range: 0 to 100)
  \*/
  ruleAboveTint: number

/\*\*

- Stroke type used for the rule above the paragraph.
  \*/
  ruleAboveType: StrokeStyle | string

/\*\*

- Basis, either text width or column width, for computing paragraph rule above width.
  \*/
  ruleAboveWidth: RuleWidth

/\*\*

- When true, a paragraph rule below is applied.
  \*/
  ruleBelow: boolean

/\*\*

- Paragraph rule below uses this swatch (color, gradient, tint, or mixed ink).
  \*/
  ruleBelowColor: Swatch | string

/\*\*

- Stroke gap for the paragraph rule below uses this swatch (color, gradient, tint, or mixed ink). Note: Non-solid paragraph rule below types only.
  \*/
  ruleBelowGapColor: Swatch | string

/\*\*

- When true, the rule below gap color overprints.
  \*/
  ruleBelowGapOverprint: boolean

/\*\*

- Stroke gap color tint for the paragraph rule below, expressed as a percentage. (Range: 0 to 100) Note: Applies only when the paragraph rule below type is not solid.
  \*/
  ruleBelowGapTint: number

/\*\*

- Left-edge indent distance for the paragraph rule below, based on either text width or the last line's column width.
  \*/
  ruleBelowLeftIndent: number | string

/\*\*

- Line weight for the rule below.
  \*/
  ruleBelowLineWeight: number | string

/\*\*

- Offset amount from the last line baseline to the paragraph rule below.
  \*/
  ruleBelowOffset: number | string

/\*\*

- When true, the rule below overprints.
  \*/
  ruleBelowOverprint: boolean

/\*\*

- Right-edge indent distance for the paragraph rule below, based on either text width or the last line's column width.
  \*/
  ruleBelowRightIndent: number | string

/\*\*

- Paragraph rule below tint, expressed as a percentage. (Range: 0 to 100)
  \*/
  ruleBelowTint: number

/\*\*

- Stroke type used for the rule below the paragraph.
  \*/
  ruleBelowType: StrokeStyle | string

/\*\*

- Basis, either text width or column width, for computing paragraph rule below width.
  \*/
  ruleBelowWidth: RuleWidth

/\*\*

- Spacing between paragraphs that use the same style.
  \*/
  sameParaStyleSpacing: number | Spacing

/\*\*

- When true, character scaling changes line size.
  \*/
  scaleAffectsLineHeight: boolean

/\*\*

- When true, shatai rotation is applied.
  \*/
  shataiAdjustRotation: boolean

/\*\*

- When true, shatai tsume is adjusted.
  \*/
  shataiAdjustTsume: boolean

/\*\*

- Shatai lens angle, in degrees.
  \*/
  shataiDegreeAngle: number

/\*\*

- Percentage amount of shatai obliquing to apply.
  \*/
  shataiMagnification: number

/\*\*

- Collection containing signature fields.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- Alignment used for lines that contain a single word.
  \*/
  singleWordJustification: SingleWordJustification

/\*\*

- Story skew angle.
  \*/
  skew: number

/\*\*

- Height of the paragraph space below.
  \*/
  spaceAfter: number | string

/\*\*

- Height of the paragraph space above.
  \*/
  spaceBefore: number | string

/\*\*

- Minimum space after a span or split column.
  \*/
  spanColumnMinSpaceAfter: number | string

/\*\*

- Minimum space before a span or split column.
  \*/
  spanColumnMinSpaceBefore: number | string

/\*\*

- Indicates whether a paragraph is a single column, spans columns, or splits columns.
  \*/
  spanColumnType: SpanColumnTypeOptions

/\*\*

- Count of columns a paragraph spans, or count of split columns.
  \*/
  spanSplitColumnCount: number | SpanColumnCountOptions

/\*\*

- Spline items collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Inside gutter value when the paragraph splits columns.
  \*/
  splitColumnInsideGutter: number | string

/\*\*

- Outside gutter value when the paragraph splits columns.
  \*/
  splitColumnOutsideGutter: number | string

/\*\*

- Location where the paragraph begins.
  \*/
  startParagraph: StartParagraph

/\*\*

- Settings for story preferences.
  \*/
  readonly storyPreferences: StoryPreference

/\*\*

- Title assigned to this InCopy story.
  \*/
  storyTitle: string

/\*\*

- Story type.
  \*/
  readonly storyType: StoryTypes

/\*\*

- Strikethrough stroke uses this swatch (color, gradient, tint, or mixed ink).
  \*/
  strikeThroughColor: Swatch | string

/\*\*

- Strikethrough stroke gap uses this swatch (color, gradient, tint, or mixed ink).
  \*/
  strikeThroughGapColor: Swatch | string

/\*\*

- When true, the strikethrough stroke gap color overprints. Note: Applies when strike through type is not solid.
  \*/
  strikeThroughGapOverprint: boolean

/\*\*

- Strikethrough stroke gap color tint, expressed as a percentage. (Range: 0 to 100) Note: Applies when strike through type is not solid.
  \*/
  strikeThroughGapTint: number

/\*\*

- Offset amount from the text baseline to the strikethrough stroke.
  \*/
  strikeThroughOffset: number | string

/\*\*

- When true, the strikethrough stroke overprints.
  \*/
  strikeThroughOverprint: boolean

/\*\*

- Strikethrough stroke tint, expressed as a percentage. (Range: 0 to 100)
  \*/
  strikeThroughTint: number

/\*\*

- Stroke type used for the strikethrough stroke.
  \*/
  strikeThroughType: StrokeStyle | string

/\*\*

- Stroke weight for the strikethrough stroke.
  \*/
  strikeThroughWeight: number | string

/\*\*

- When true, a strikethrough line is drawn through the text.
  \*/
  strikeThru: boolean

/\*\*

- Stroke alignment used for the text.
  \*/
  strokeAlignment: TextStrokeAlign

/\*\*

- Story stroke uses this swatch (color, gradient, tint, or mixed ink).
  \*/
  strokeColor: Swatch | string

/\*\*

- Story stroke color tint, as a percentage. (Use 0 to 100 for an explicit tint percentage; use -1 for the inherited or overridden value.)
  \*/
  strokeTint: number

/\*\*

- Stroke weight applied to the text characters.
  \*/
  strokeWeight: number | string

/\*\*

- When true, extra attributes have overridden the applied style.
  \*/
  readonly styleOverridden: boolean

/\*\*

- List of paragraph tab stops. Can return: Array of Arrays of Property Name/Value Pairs.
  \*/
  tabList: any[]

/\*\*

- Collection containing tab stops.
  \*/
  readonly tabStops: TabStops

/\*\*

- Collection containing table style mappings.
  \*/
  readonly tableStyleMappings: TableStyleMappings

/\*\*

- Collection containing tables.
  \*/
  readonly tables: Tables

/\*\*

- When true, a character becomes horizontal within vertical text.
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

- Collection containing text boxes.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- Collection containing text columns.
  \*/
  readonly textColumns: TextColumns

/\*\*

- Array containing text frames or text paths.
  \*/
  readonly textContainers: TextFrame[] | TextPaths

/\*\*

- Collection containing text frames.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Collection containing text style ranges.
  \*/
  readonly textStyleRanges: TextStyleRanges

/\*\*

- Collection containing text variable instances.
  \*/
  readonly textVariableInstances: TextVariableInstances

/\*\*

- Collection containing text objects.
  \*/
  readonly texts: Texts

/\*\*

- When true, track changes is enabled.
  \*/
  trackChanges: boolean

/\*\*

- Amount used to loosen or tighten a text block, in thousandths of an em.
  \*/
  tracking: number

/\*\*

- Space inserted after each character.
  \*/
  trailingAki: number

/\*\*

- When true, ideographic spaces do not wrap to the next line like text characters.
  \*/
  treatIdeographicSpaceAsSpace: boolean

/\*\*

- Horizontal character compression amount.
  \*/
  tsume: number

/\*\*

- When true, the text is underlined.
  \*/
  underline: boolean

/\*\*

- Underline stroke uses this swatch (color, gradient, tint, or mixed ink).
  \*/
  underlineColor: Swatch | string

/\*\*

- Underline stroke gap uses this swatch (color, gradient, tint, or mixed ink). Note: Applies when underline type is not solid.
  \*/
  underlineGapColor: Swatch | string

/\*\*

- When true, the underline stroke gap color overprints.
  \*/
  underlineGapOverprint: boolean

/\*\*

- Underline stroke gap color tint, expressed as a percentage. (Range: 0 to 100) Note: Applies when underline type is not solid.
  \*/
  underlineGapTint: number

/\*\*

- Offset amount from the text baseline to the underline.
  \*/
  underlineOffset: number | string

/\*\*

- When true, the underline stroke color overprints.
  \*/
  underlineOverprint: boolean

/\*\*

- Underline stroke tint, expressed as a percentage. (Range: 0 to 100)
  \*/
  underlineTint: number

/\*\*

- Stroke type used for the underline stroke.
  \*/
  underlineType: StrokeStyle | string

/\*\*

- Stroke weight for the underline stroke.
  \*/
  underlineWeight: number | string

/\*\*

- Indicates whether text is user text or placeholder text.
  \*/
  userText: boolean

/\*\*

- Vertical scaling applied to the Story.
  \*/
  verticalScale: number

/\*\*

- When true, warichu is enabled.
  \*/
  warichu: boolean

/\*\*

- Warichu alignment setting.
  \*/
  warichuAlignment: WarichuAlignment

/\*\*

- Minimum characters allowed after a line break.
  \*/
  warichuCharsAfterBreak: number

/\*\*

- Minimum characters allowed before a line break.
  \*/
  warichuCharsBeforeBreak: number

/\*\*

- Gap between lines of warichu characters.
  \*/
  warichuLineSpacing: number

/\*\*

- Number of warichu lines inside one normal line.
  \*/
  warichuLines: number

/\*\*

- Percentage used to scale parent text size when deriving warichu size.
  \*/
  warichuSize: number

/\*\*

- Collection containing words.
  \*/
  readonly words: Words

/\*\*

- X (horizontal) offset used for diacritic adjustment.
  \*/
  xOffsetDiacritic: number

/\*\*

- Y (vertical) offset used for diacritic adjustment.
  \*/
  yOffsetDiacritic: number

/\*\*

- Adds an event listener.
- @param eventType Event type to listen for.
- @param handler Event handler callback or file.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Exports the object(s) to a file asynchronously.
- @param format Export format, given either as an enumeration value or as an extension shown by the Export dialog under Save as type or Format.
- @param to Export file path.
- @param showingOptions When true, the export options dialog appears.
- @param using Export style.
- @param versionComments Comment attached to this version.
- @param forceSave When true, a version is saved forcibly.
  \*/
  asynchronousExportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): BackgroundTask

/\*\*

- Applies default tags from XML preference to the object or parent story.
  \*/
  autoTag(): void

/\*\*

- Finds glyphs matching the find what value, then replaces them with the change to value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  changeGlyph(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value, then replaces it with the change to value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  changeGrep(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value, then replaces it with the change to value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  changeText(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find character type value, then replaces it with the change character type value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  changeTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Changes the case of the text.
- @param using Case mode to apply.
  \*/
  changecase(using: ChangecaseMode): void

/\*\*

- Performs check-in for one or more stories.
- @param versionComments Comment attached to this version.
- @param forceSave When true, a version is saved forcibly.
  \*/
  checkIn(versionComments: string, forceSave?: boolean): boolean

/\*\*

- Performs check-out for the story.
  \*/
  checkOut(): boolean

/\*\*

- Clears override types specified by the argument.
- @param overridesToClear Override types to clear.
  \*/
  clearOverrides(overridesToClear?: OverrideType): void

/\*\*

- Converts bullets and numbering into text.
  \*/
  convertBulletsAndNumberingToText(): void

/\*\*

- Converts text into outlines; each text line becomes a polygon object. If the converted text is a single letter without internal spaces or detached parts, the polygon has only one path. Note: To check whether a font permits outline creation, see allow outlines.
- @param deleteOriginal When true, the source text is deleted. When false, the outlines are created as separate object(s) above the text.
  \*/
  createOutlines(deleteOriginal?: boolean): PageItem[]

/\*\*

- Duplicates the text at the specified location.
- @param to Location relative to the reference object or inside the containing object.
- @param reference Reference object. Note: Needed for relative placement values `before` and `after`; this supplies the anchor object.
  \*/
  duplicate(to: LocationOptions, reference: Text | Story | Cell | Row | Column | Table | PageItem): Text

/\*\*

- Writes the object(s) out to a file.
- @param format Export format, given either as an enumeration value or as an extension shown by the Export dialog under Save as type or Format.
- @param to Export file path.
- @param showingOptions When true, the export options dialog appears.
- @param using Export style.
- @param versionComments Comment attached to this version.
- @param forceSave When true, a version is saved forcibly.
  \*/
  exportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): void

/\*\*

- Returns the label value tied to the specified key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Finds glyphs matching the find what value.
- @param reverseOrder When true, results are returned in reverse order.
  \*/
  findGlyph(reverseOrder: boolean): Text[]

/\*\*

- Searches GREP content with the current find what setting.
- @param reverseOrder When true, returns are ordered in reverse.
  \*/
  findGrep(reverseOrder: boolean): Text[]

/\*\*

- Searches text with the current find what setting.
- @param reverseOrder When true, returns are ordered in reverse.
  \*/
  findText(reverseOrder: boolean): Text[]

/\*\*

- Searches text matching the configured character type value.
- @param reverseOrder When true, returns are ordered in reverse.
  \*/
  findTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Resolves this object specifier into object-reference array entries.
  \*/
  getElements(): Story[]

/\*\*

- Stores a label value under the supplied key.
- @param key Label key.
- @param value Label value.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Reports whether the variable-font design axis at nthAxisIndex is hidden.
- @param nthAxisIndex Design-axis index.
  \*/
  isNthDesignAxisHidden(nthAxisIndex: number): boolean

/\*\*

- Links this page item with the supplied XML element without replacing existing content.
- @param using XML element to associate.
  \*/
  markup(using: XMLElement): void

/\*\*

- Moves this text to the requested location.
- @param to Location relative to reference, or within the containing object.
- @param reference Reference object; needed for before or after placement values.
  \*/
  move(to: LocationOptions, reference: Text | Story | Cell | Row | Column | Table | PageItem): Text

/\*\*

- Inserts XML content into this object. Note: Existing content is replaced.
- @param using XML element whose content is placed.
  \*/
  placeXML(using: XMLElement): void

/\*\*

- Reflows the Story text composition.
  \*/
  recompose(): void

/\*\*

- Deletes this Story.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Restores the document to the state from its most recent save.
  \*/
  revert(): boolean

/\*\*

- Assigns a value to the Nth design axis for a variable font.
- @param nthAxisIndex Design-axis index.
- @param nthAxisValue Nth design-axis value.
  \*/
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void

/\*\*

- Opens this story in the story editor.
  \*/
  storyEdit(): StoryWindow

/\*\*

- Creates source text that returns the Story when executed.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for Story objects.
  \*/
  declare class Stories {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Story at the requested index.
- @param index Requested index.
  \*/
  [index: number]: Story

/\*\*

- Gets an arbitrary Story from the collection.
  \*/
  anyItem(): Story

/\*\*

- Displays this Story collection's element count.
  \*/
  count(): number

/\*\*

- Gets every Story in this collection.
  \*/
  everyItem(): Story[]

/\*\*

- Gets the collection's first Story.
  \*/
  firstItem(): Story

/\*\*

- Gets the Story identified by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): Story

/\*\*

- Gets the Story identified by ID.
- @param id Story ID.
  \*/
  itemByID(id: number): Story

/\*\*

- Gets the Story identified by name.
- @param name Story name.
  \*/
  itemByName(name: string): Story

/\*\*

- Gets Stories spanning the requested range.
- @param from Starting Story, index, or name.
- @param to Ending Story, index, or name.
  \*/
  itemByRange(from: Story | number | string, to: Story | number | string): Story[]

/\*\*

- Gets the collection's final Story.
  \*/
  lastItem(): Story

/\*\*

- Gets the collection's middle Story.
  \*/
  middleItem(): Story

/\*\*

- Gets the Story after the supplied Story.
- @param obj Story immediately before the desired Story.
  \*/
  nextItem(obj: Story): Story

/\*\*

- Gets the Story before the supplied index.
- @param obj Index immediately after the desired Story.
  \*/
  previousItem(obj: Story): Story

/\*\*

- Creates source text that returns the Story when executed.
  \*/
  toSource(): string
  }
