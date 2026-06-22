# Indesign (part 82)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Corner option for the top-left rectangular corner and all non-rectangular corners. Note: corner options can hold a radius; rounded or beveled end-join appearance is derived from stroke weight.
  \*/
  paragraphShadingTopLeftCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the top-left rectangular corner and all corners on non-rectangular shapes.
  \*/
  paragraphShadingTopLeftCornerRadius: number | string

/\*\*

- Offset distance for the paragraph's top edge.
  \*/
  paragraphShadingTopOffset: number | string

/\*\*

- Cap height, ascent, or baseline basis used for the paragraph shading top origin.
  \*/
  paragraphShadingTopOrigin: ParagraphShadingTopOriginEnum

/\*\*

- Corner shape applied to the top-right corner of rectangular shapes.
  \*/
  paragraphShadingTopRightCornerOption: CornerOptions

/\*\*

- Corner-effect radius, in measurement units, for the top-right rectangular corner.
  \*/
  paragraphShadingTopRightCornerRadius: number | string

/\*\*

- Text width or column width basis for calculating paragraph-shading width.
  \*/
  paragraphShadingWidth: ParagraphShadingWidthEnum

/\*\*

- ParagraphStyle parent object: a Document, Application, or ParagraphStyleGroup.
  \*/
  readonly parent: any

/\*\*

- Text size.
  \*/
  pointSize: number | string

/\*\*

- Text position measured from the baseline.
  \*/
  position: Position

/\*\*

- OpenType positional form.
  \*/
  positionalForm: PositionalForms

/\*\*

- Preferences object collection.
  \*/
  readonly preferences: Preferences

/\*\*

- Preview color, provided as a UI color or three doubles for R, G, and B, each from 0 to 255.
  \*/
  previewColor: [number, number, number] | UIColors | NothingEnum

/\*\*

- Lets one assignment set multiple properties at once.
  \*/
  properties: object

/\*\*

- Hyphenation style selected for the provider.
  \*/
  providerHyphenationStyle: HyphenationStyleEnum

/\*\*

- True blocks line breaks inside numbers; false permits breaks between digits in multi-digit numbers.
  \*/
  rensuuji: boolean

/\*\*

- Right-indent width.
  \*/
  rightIndent: number | string

/\*\*

- True rotates Roman characters in vertical text.
  \*/
  rotateSingleByteCharacters: boolean

/\*\*

- Ruby alignment setting.
  \*/
  rubyAlignment: RubyAlignments

/\*\*

- True enables automatic ruby alignment.
  \*/
  rubyAutoAlign: boolean

/\*\*

- True scales ruby automatically to the specified percent of parent text size. For percent details, see ruby parent scaling percent.
  \*/
  rubyAutoScaling: boolean

/\*\*

- True scales glyphs automatically in ruby auto tcy (tate-chuu-yoko) so they fit one em.
  \*/
  rubyAutoTcyAutoScale: boolean

/\*\*

- Digit count included in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyDigits: number

/\*\*

- True includes Roman characters in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyIncludeRoman: boolean

/\*\*

- Ruby-character fill swatch, including color, gradient, tint, or mixed ink.
  \*/
  rubyFill: Swatch | string

/\*\*

- Font applied to ruby characters.
  \*/
  rubyFont: Font | string

/\*\*

- Ruby character size in points.
  \*/
  rubyFontSize: number

/\*\*

- Ruby character font style.
  \*/
  rubyFontStyle: string | NothingEnum

/\*\*

- True uses OpenType Pro fonts for ruby.
  \*/
  rubyOpenTypePro: boolean

/\*\*

- True limits ruby overhang to the specified amount. For amount details, see ruby parent overhang amount.
  \*/
  rubyOverhang: boolean

/\*\*

- Overprint method for the ruby fill.
  \*/
  rubyOverprintFill: AdornmentOverprint

/\*\*

- Overprint method for the ruby stroke.
  \*/
  rubyOverprintStroke: AdornmentOverprint

/\*\*

- Amount ruby characters may overhang the parent text.
  \*/
  rubyParentOverhangAmount: RubyOverhang

/\*\*

- Parent-text-size percentage used to determine ruby text size.
  \*/
  rubyParentScalingPercent: number

/\*\*

- Ruby spacing in relation to parent text.
  \*/
  rubyParentSpacing: RubyParentSpacing

/\*\*

- Ruby character position relative to the parent text.
  \*/
  rubyPosition: RubyKentenPosition

/\*\*

- Ruby-character stroke swatch, including color, gradient, tint, or mixed ink.
  \*/
  rubyStroke: Swatch | string

/\*\*

- Ruby-character stroke tint percentage.
  \*/
  rubyStrokeTint: number

/\*\*

- Ruby fill-color tint percentage. (Range: 0 to 100)
  \*/
  rubyTint: number

/\*\*

- Ruby type setting.
  \*/
  rubyType: RubyTypes

/\*\*

- Ruby-character stroke weight in points.
  \*/
  rubyWeight: number

/\*\*

- Horizontal spacing between ruby and parent characters.
  \*/
  rubyXOffset: number

/\*\*

- Horizontal ruby-character size as a percentage of the original.
  \*/
  rubyXScale: number

/\*\*

- Vertical spacing between ruby and parent characters.
  \*/
  rubyYOffset: number

/\*\*

- Vertical ruby-character size as a percentage of the original.
  \*/
  rubyYScale: number

/\*\*

- True places a rule above the paragraph.
  \*/
  ruleAbove: boolean

/\*\*

- Paragraph-rule-above swatch, including color, gradient, tint, or mixed ink.
  \*/
  ruleAboveColor: Swatch | string

/\*\*

- Stroke-gap swatch for the paragraph rule above, including color, gradient, tint, or mixed ink. Note: Applies only if rule above uses a non-solid type.
  \*/
  ruleAboveGapColor: Swatch | string

/\*\*

- True overprints the paragraph rule above stroke gap. Note: Applies only if rule above uses a non-solid type.
  \*/
  ruleAboveGapOverprint: boolean

/\*\*

- Stroke-gap tint percentage for rule above. (Range: 0 to 100) Note: Applies only if rule above uses a non-solid type.
  \*/
  ruleAboveGapTint: number

/\*\*

- Left-edge indent for the paragraph rule above, computed from the paragraph's first-line text width or its column width.
  \*/
  ruleAboveLeftIndent: number | string

/\*\*

- Line weight for the rule above.
  \*/
  ruleAboveLineWeight: number | string

/\*\*

- Offset amount between the paragraph rule above and the first line's baseline.
  \*/
  ruleAboveOffset: number | string

/\*\*

- True makes the paragraph rule above overprint.
  \*/
  ruleAboveOverprint: boolean

/\*\*

- Right-edge indent for the paragraph rule above, computed from the paragraph's first-line text width or its column width.
  \*/
  ruleAboveRightIndent: number | string

/\*\*

- Paragraph rule above tint percentage. (Range: 0 to 100)
  \*/
  ruleAboveTint: number

/\*\*

- Stroke type for the rule above the paragraph.
  \*/
  ruleAboveType: StrokeStyle | string

/\*\*

- Text width or column width basis for calculating the paragraph rule above width.
  \*/
  ruleAboveWidth: RuleWidth

/\*\*

- True applies a rule below the paragraph.
  \*/
  ruleBelow: boolean

/\*\*

- Paragraph-rule-below swatch, including color, gradient, tint, or mixed ink.
  \*/
  ruleBelowColor: Swatch | string

/\*\*

- Stroke-gap swatch for the paragraph rule below, including color, gradient, tint, or mixed ink. Note: Applies only if rule below uses a non-solid type.
  \*/
  ruleBelowGapColor: Swatch | string

/\*\*

- True makes the rule-below gap color overprint.
  \*/
  ruleBelowGapOverprint: boolean

/\*\*

- Stroke-gap tint percentage for rule below. (Range: 0 to 100) Note: Applies only if rule below uses a non-solid type.
  \*/
  ruleBelowGapTint: number

/\*\*

- Left-edge indent for the paragraph rule below, computed from the paragraph's last-line text width or its column width.
  \*/
  ruleBelowLeftIndent: number | string

/\*\*

- Line weight for the rule below.
  \*/
  ruleBelowLineWeight: number | string

/\*\*

- Offset amount between the paragraph rule below and the last line's baseline.
  \*/
  ruleBelowOffset: number | string

/\*\*

- True makes the rule below overprint.
  \*/
  ruleBelowOverprint: boolean

/\*\*

- Right-edge indent for the paragraph rule below, computed from the paragraph's last-line text width or its column width.
  \*/
  ruleBelowRightIndent: number | string

/\*\*

- Paragraph rule below tint percentage. (Range: 0 to 100)
  \*/
  ruleBelowTint: number

/\*\*

- StrokeStyle or name used for the paragraph's lower rule stroke.
  \*/
  ruleBelowType: StrokeStyle | string

/\*\*

- Basis for computing lower paragraph rule width: text width or column width.
  \*/
  ruleBelowWidth: RuleWidth

/\*\*

- Spacing inserted between paragraphs that share this style.
  \*/
  sameParaStyleSpacing: number | Spacing

/\*\*

- True makes character scaling change line height.
  \*/
  scaleAffectsLineHeight: boolean

/\*\*

- True enables shatai rotation adjustment.
  \*/
  shataiAdjustRotation: boolean

/\*\*

- True enables shatai tsume adjustment.
  \*/
  shataiAdjustTsume: boolean

/\*\*

- Shatai lens angle, in degrees.
  \*/
  shataiDegreeAngle: number

/\*\*

- Percentage of shatai obliquing to apply.
  \*/
  shataiMagnification: number

/\*\*

- Justification behavior for lines containing one word.
  \*/
  singleWordJustification: SingleWordJustification

/\*\*

- Skew angle for the ParagraphStyle.
  \*/
  skew: number

/\*\*

- Paragraph spacing below.
  \*/
  spaceAfter: number | string

/\*\*

- Paragraph spacing above.
  \*/
  spaceBefore: number | string

/\*\*

- Minimum spacing after a span or split column.
  \*/
  spanColumnMinSpaceAfter: number | string

/\*\*

- Minimum spacing before a span or split column.
  \*/
  spanColumnMinSpaceBefore: number | string

/\*\*

- Chooses single-column, spanning-column, or split-column paragraph layout.
  \*/
  spanColumnType: SpanColumnTypeOptions

/\*\*

- Count of columns spanned by the paragraph, or split-column count.
  \*/
  spanSplitColumnCount: number | SpanColumnCountOptions

/\*\*

- Inside gutter used when the paragraph splits columns.
  \*/
  splitColumnInsideGutter: number | string

/\*\*

- Outside gutter used when the paragraph splits columns.
  \*/
  splitColumnOutsideGutter: number | string

/\*\*

- EPUB-only Split Document setting.
  \*/
  splitDocument: boolean

/\*\*

- Location where the paragraph begins.
  \*/
  startParagraph: StartParagraph

/\*\*

- Swatch for the strikethrough stroke: color, gradient, tint, or mixed ink.
  \*/
  strikeThroughColor: Swatch | string

/\*\*

- Swatch for the strikethrough stroke gap: color, gradient, tint, or mixed ink.
  \*/
  strikeThroughGapColor: Swatch | string

/\*\*

- True overprints the strikethrough stroke gap color. Note: Applies when strike through type is not solid.
  \*/
  strikeThroughGapOverprint: boolean

/\*\*

- Strikethrough stroke gap color tint percentage. (Range: 0 to 100) Note: Applies when strike through type is not solid.
  \*/
  strikeThroughGapTint: number

/\*\*

- Offset distance from the text baseline to the strikethrough stroke.
  \*/
  strikeThroughOffset: number | string

/\*\*

- True overprints the strikethrough stroke.
  \*/
  strikeThroughOverprint: boolean

/\*\*

- Strikethrough stroke tint percentage. (Range: 0 to 100)
  \*/
  strikeThroughTint: number

/\*\*

- Stroke type used for strikethrough.
  \*/
  strikeThroughType: StrokeStyle | string

/\*\*

- Weight assigned to the strikethrough stroke.
  \*/
  strikeThroughWeight: number | string

/\*\*

- True draws a strikethrough line across the text.
  \*/
  strikeThru: boolean

/\*\*

- Alignment applied to the text stroke.
  \*/
  strokeAlignment: TextStrokeAlign

/\*\*

- ParagraphStyle stroke swatch: color, gradient, tint, or mixed ink.
  \*/
  strokeColor: Swatch | string

/\*\*

- ParagraphStyle stroke color tint percentage. Use 0 to 100 for explicit tint; use -1 for inherited or overridden value.
  \*/
  strokeTint: number

/\*\*

- Stroke weight assigned to text characters.
  \*/
  strokeWeight: number | string

/\*\*

- Collection containing style export tag maps.
  \*/
  readonly styleExportTagMaps: StyleExportTagMaps

/\*\*

- Unique style id for distinguishing styles. Internal use only.
  \*/
  styleUniqueId: string

/\*\*

- Paragraph tab-stop list. Can return: Array of Arrays of Property Name/Value Pairs.
  \*/
  tabList: any[]

/\*\*

- Collection containing tab stops.
  \*/
  readonly tabStops: TabStops

/\*\*

- True makes a character horizontal inside vertical text.
  \*/
  tatechuyoko: boolean

/\*\*

- Horizontal offset for horizontal characters within vertical text.
  \*/
  tatechuyokoXOffset: number

/\*\*

- Vertical offset for horizontal characters within vertical text.
  \*/
  tatechuyokoYOffset: number

/\*\*

- Amount, in thousands of an em, used to loosen or tighten a text block.
  \*/
  tracking: number

/\*\*

- Space added after each character.
  \*/
  trailingAki: number

/\*\*

- True prevents ideographic spaces from wrapping like normal text characters.
  \*/
  treatIdeographicSpaceAsSpace: boolean

/\*\*

- Horizontal character compression amount.
  \*/
  tsume: number

/\*\*

- True applies underlining to the text.
  \*/
  underline: boolean

/\*\*

- Underline stroke swatch: color, gradient, tint, or mixed ink.
  \*/
  underlineColor: Swatch | string

/\*\*

- Underline stroke gap swatch: color, gradient, tint, or mixed ink. Note: Applies when underline type is not solid.
  \*/
  underlineGapColor: Swatch | string

/\*\*

- True overprints the underline stroke gap color.
  \*/
  underlineGapOverprint: boolean

/\*\*

- Underline stroke gap color tint percentage. (Range: 0 to 100) Note: Applies when underline type is not solid.
  \*/
  underlineGapTint: number

/\*\*

- Offset distance from the text baseline to the underline.
  \*/
  underlineOffset: number | string

/\*\*

- True overprints the underline stroke color.
  \*/
  underlineOverprint: boolean

/\*\*

- Underline stroke tint percentage. (Range: 0 to 100)
  \*/
  underlineTint: number

/\*\*

- Stroke type used for underline.
  \*/
  underlineType: StrokeStyle | string

/\*\*

- Weight assigned to the underline stroke.
  \*/
  underlineWeight: number | string

/\*\*

- Vertical scaling for the ParagraphStyle.
  \*/
  verticalScale: number

/\*\*

- True enables warichu.
  \*/
  warichu: boolean

/\*\*

- Alignment setting for warichu text.
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

- Spacing between warichu character lines.
  \*/
  warichuLineSpacing: number

/\*\*

- Number of warichu lines inside one normal line.
  \*/
  warichuLines: number

/\*\*

- Percentage used to scale parent text size for warichu size.
  \*/
  warichuSize: number

/\*\*

- Horizontal, x-axis offset for diacritic adjustment.
  \*/
  xOffsetDiacritic: number

/\*\*

- Vertical, y-axis offset for diacritic adjustment.
  \*/
  yOffsetDiacritic: number

/\*\*

- Adds a listener for events.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Changes bullets and numbering into text.
  \*/
  convertBulletsAndNumberingToText(): void

/\*\*

- Builds a thumbnail for selected text using supplied properties.
- @param previewText Sample text.
- @param pointSize Text font size, in points.
- @param space RGB, CMYK, or LAB color space.
- @param colorValue Color component values.
- @param to Export file path.
  \*/
  createThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: File): boolean

/\*\*

- Makes a duplicate ParagraphStyle.
  \*/
  duplicate(): ParagraphStyle

/\*\*

- Gets the label value for the specified key.
- @param key Label key.
  \*/
  extractLabel(key: string): string

/\*\*

- Forcefully deletes the paragraph style. Internal use only.
- @param replacingWith Style applied instead of the deleted style.
  \*/
  forceDelete(replacingWith: ParagraphStyle): void

/\*\*

- Resolves the specifier and returns object references.
  \*/
  getElements(): ParagraphStyle[]

/\*\*

- Associates the specified key with a label value.
- @param key Label key.
- @param value Label value.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- True means the Nth variable-font design axis is hidden.
- @param nthAxisIndex Design-axis index.
  \*/
  isNthDesignAxisHidden(nthAxisIndex: number): boolean

/\*\*

- Moves the style to a requested location.
- @param to Location relative to the reference object or inside the containing object.
- @param reference Reference object; required for adjacent placement requests.
  \*/
  move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): ParagraphStyle

/\*\*

- Deletes the style.
- @param replacingWith Style applied instead of the deleted style.
  \*/
  remove(replacingWith: ParagraphStyle): void

/\*\*

- Removes a listener for events.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Sets the Nth design axis for a variable font.
- @param nthAxisIndex Design-axis index.
- @param nthAxisValue Value for the Nth design axis.
  \*/
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void

/\*\*

- Produces source text that can evaluate back to the ParagraphStyle.
  \*/
  toSource(): string

/\*\*

- Retrieves the object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Paragraph style collection.
  \*/
  declare class ParagraphStyles {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the ParagraphStyle at the specified index.
- @param index Index value.
  \*/
  [index: number]: ParagraphStyle

/\*\*

- Creates a ParagraphStyle.
- @param withProperties Initial property values for the new ParagraphStyle
  \*/
  add(withProperties: object): ParagraphStyle

/\*\*

- Retrieves any ParagraphStyle from the collection.
  \*/
  anyItem(): ParagraphStyle

/\*\*

- Shows how many elements the ParagraphStyle collection contains.
  \*/
  count(): number

/\*\*

- Retrieves all ParagraphStyle objects in the collection.
  \*/
  everyItem(): ParagraphStyle[]

/\*\*

- Retrieves the first ParagraphStyle in the collection.
  \*/
  firstItem(): ParagraphStyle

/\*\*

- Retrieves the ParagraphStyle identified by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): ParagraphStyle

/\*\*

- Retrieves the ParagraphStyle with the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): ParagraphStyle

/\*\*

- Retrieves the ParagraphStyle with the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): ParagraphStyle

/\*\*

- Retrieves ParagraphStyles within the requested range.
- @param from ParagraphStyle, index, or name that starts the range.
- @param to ParagraphStyle, index, or name that ends the range.
  \*/
  itemByRange(from: ParagraphStyle | number | string, to: ParagraphStyle | number | string): ParagraphStyle[]

/\*\*

- Retrieves the final ParagraphStyle in the collection.
  \*/
  lastItem(): ParagraphStyle

/\*\*

- Retrieves the middle ParagraphStyle in the collection.
  \*/
  middleItem(): ParagraphStyle

/\*\*

- Retrieves the ParagraphStyle after the supplied ParagraphStyle.
- @param obj ParagraphStyle whose index precedes the requested ParagraphStyle.
  \*/
  nextItem(obj: ParagraphStyle): ParagraphStyle

/\*\*

- Retrieves the ParagraphStyle before the supplied index.
- @param obj Index of the ParagraphStyle following the requested ParagraphStyle.
  \*/
  previousItem(obj: ParagraphStyle): ParagraphStyle

/\*\*

- Produces source text that can evaluate back to the ParagraphStyle.
  \*/
  toSource(): string
  }

/\*\*

- Character style definition.
  \*/
  declare class CharacterStyle {
  /\*\*
  - Font assigned to the CharacterStyle, as a font object or font-family name.
    \*/
    appliedFont: Font | string | NothingEnum

/\*\*

- Language assigned to the text.
  \*/
  appliedLanguage: LanguageWithVendors | Language | NothingEnum | string

/\*\*

- Style used as this style's base.
  \*/
  basedOn: CharacterStyle | string

/\*\*

- Baseline shift for the text.
  \*/
  baselineShift: number | NothingEnum

/\*\*

- Capitalization behavior.
  \*/
  capitalization: Capitalization | NothingEnum

/\*\*

- Alignment of small characters against the line's largest character.
  \*/
  characterAlignment: CharacterAlignment | NothingEnum

/\*\*

- Direction assigned to the character.
  \*/
  characterDirection: CharacterDirectionOptions | NothingEnum

/\*\*

- Individual character rotation angle, in degrees. Note: Rotation is counterclockwise.
  \*/
  characterRotation: number | NothingEnum

/\*\*

- True uses grid tracking for non-Roman characters in CJK grids.
  \*/
  cjkGridTracking: boolean | NothingEnum

/\*\*

- Design Axes values.
  \*/
  designAxes: number[] | NothingEnum

/\*\*

- Diacritical character position.
  \*/
  diacriticPosition: DiacriticPositionOptions | NothingEnum

/\*\*

- Digit type setting.
  \*/
  digitsType: DigitsTypeOptions | NothingEnum

/\*\*

- CSS emission toggle.
  \*/
  emitCss: boolean | NothingEnum

/\*\*

- Stroke join type for text characters.
  \*/
  endJoin: OutlineJoin | NothingEnum

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- CharacterStyle fill swatch: color, gradient, tint, or mixed ink.
  \*/
  fillColor: Swatch | NothingEnum | string
