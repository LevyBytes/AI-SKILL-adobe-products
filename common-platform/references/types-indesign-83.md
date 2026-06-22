# Indesign (part 83)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- CharacterStyle fill color tint percentage. Use 0 to 100 for explicit tint; use -1 for inherited or overridden value.
  \*/
  fillTint: number | NothingEnum

/\*\*

- Font style name.
  \*/
  fontStyle: string | NothingEnum

/\*\*

- Glyph variant substituted for standard glyphs.
  \*/
  glyphForm: AlternateGlyphForms | NothingEnum

/\*\*

- Linear-gradient angle for the text fill. (Range: -180 to 180).
  \*/
  gradientFillAngle: number | NothingEnum

/\*\*

- Linear-gradient length or radial-gradient radius for the text fill.
  \*/
  gradientFillLength: number | NothingEnum

/\*\*

- Gradient start point for text fill, in page coordinates and [x, y] format.
  \*/
  gradientFillStart: [number | string, number | string] | NothingEnum

/\*\*

- Linear-gradient angle for the text stroke. (Range: -180 to 180).
  \*/
  gradientStrokeAngle: number | NothingEnum

/\*\*

- Linear-gradient length or radial-gradient radius for the text stroke.
  \*/
  gradientStrokeLength: number | NothingEnum

/\*\*

- Gradient start point for text stroke, in page coordinates and [x, y] format.
  \*/
  gradientStrokeStart: [number | string, number | string] | NothingEnum

/\*\*

- Horizontal scaling for the CharacterStyle.
  \*/
  horizontalScale: number | NothingEnum

/\*\*

- Unique ID for the CharacterStyle.
  \*/
  readonly id: number

/\*\*

- True indicates the style came from another document.
  \*/
  readonly imported: boolean | NothingEnum

/\*\*

- True generates a class attribute for the style.
  \*/
  includeClass: boolean | NothingEnum

/\*\*

- CharacterStyle index within its containing object.
  \*/
  readonly index: number

/\*\*

- Returns true when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Number of grid squares used to arrange the text.
  \*/
  jidori: number | NothingEnum

/\*\*

- Kashidas usage for justification.
  \*/
  kashidas: KashidasOptions | NothingEnum

/\*\*

- Alignment of kenten characters relative to parent characters.
  \*/
  kentenAlignment: KentenAlignment | NothingEnum

/\*\*

- Character set for the custom kenten character. Note: Applies only when kenten kind is custom.
  \*/
  kentenCharacterSet: KentenCharacterSet | NothingEnum

/\*\*

- Character used for kenten. Note: Applies only when kenten kind is custom.
  \*/
  kentenCustomCharacter: string | NothingEnum

/\*\*

- Kenten character fill swatch: color, gradient, tint, or mixed ink.
  \*/
  kentenFillColor: Swatch | string | NothingEnum

/\*\*

- Font used for kenten characters.
  \*/
  kentenFont: Font | string | NothingEnum

/\*\*

- Kenten character size, in points.
  \*/
  kentenFontSize: number | NothingEnum

/\*\*

- Font style used for kenten characters.
  \*/
  kentenFontStyle: string | NothingEnum

/\*\*

- Kenten character style.
  \*/
  kentenKind: KentenCharacter | NothingEnum

/\*\*

- Overprinting method for the kenten fill.
  \*/
  kentenOverprintFill: AdornmentOverprint | NothingEnum

/\*\*

- Overprinting method for the kenten stroke.
  \*/
  kentenOverprintStroke: AdornmentOverprint | NothingEnum

/\*\*

- Distance separating kenten characters from parent characters.
  \*/
  kentenPlacement: number | NothingEnum

/\*\*

- Kenten position relative to the parent character.
  \*/
  kentenPosition: RubyKentenPosition | NothingEnum

/\*\*

- Kenten character stroke swatch: color, gradient, tint, or mixed ink.
  \*/
  kentenStrokeColor: Swatch | string | NothingEnum

/\*\*

- Kenten character stroke tint percentage. (Range: 0 to 100).
  \*/
  kentenStrokeTint: number | NothingEnum

/\*\*

- Kenten character fill tint percentage. (Range: 0 to 100).
  \*/
  kentenTint: number | NothingEnum

/\*\*

- Stroke weight for kenten characters, in points.
  \*/
  kentenWeight: number | NothingEnum

/\*\*

- Horizontal size of kenten characters, as a percent of original size.
  \*/
  kentenXScale: number | NothingEnum

/\*\*

- Vertical size of kenten characters, as a percent of original size.
  \*/
  kentenYScale: number | NothingEnum

/\*\*

- Pair-kerning type.
  \*/
  kerningMethod: string | NothingEnum

/\*\*

- Keyboard direction assigned to the character.
  \*/
  keyboardDirection: CharacterDirectionOptions | NothingEnum

/\*\*

- String-valued custom property.
  \*/
  label: string

/\*\*

- Leading assigned to the text.
  \*/
  leading: number | Leading | NothingEnum

/\*\*

- Space added before each character.
  \*/
  leadingAki: number | NothingEnum

/\*\*

- True replaces combinations such as fl and fi with ligature characters.
  \*/
  ligatures: boolean | NothingEnum

/\*\*

- Ratio limit between stroke width and miter length before a pointed miter join becomes a squared-off bevel join.
  \*/
  miterLimit: number | NothingEnum

/\*\*

- Style name.
  \*/
  name: string

/\*\*

- True keeps the text on one line.
  \*/
  noBreak: boolean | NothingEnum

/\*\*

- True uses contextual alternate forms in OpenType fonts.
  \*/
  otfContextualAlternate: boolean | NothingEnum

/\*\*

- True uses discretionary ligatures in OpenType fonts.
  \*/
  otfDiscretionaryLigature: boolean | NothingEnum

/\*\*

- Figure style for OpenType fonts.
  \*/
  otfFigureStyle: OTFFigureStyle | NothingEnum

/\*\*

- True uses fractions in OpenType fonts.
  \*/
  otfFraction: boolean | NothingEnum

/\*\*

- True switches hiragana fonts for horizontal or vertical glyph variants.
  \*/
  otfHVKana: boolean | NothingEnum

/\*\*

- True uses historical forms in OpenType fonts.
  \*/
  otfHistorical: boolean | NothingEnum

/\*\*

- True uses alternate justification forms in OpenType fonts.
  \*/
  otfJustificationAlternate: boolean | NothingEnum

/\*\*

- True uses localized forms in OpenType fonts.
  \*/
  otfLocale: boolean | NothingEnum

/\*\*

- True uses mark positioning in OpenType fonts.
  \*/
  otfMark: boolean | NothingEnum

/\*\*

- True uses ordinals in OpenType fonts.
  \*/
  otfOrdinal: boolean | NothingEnum

/\*\*

- True uses overlapping swash forms in OpenType fonts.
  \*/
  otfOverlapSwash: boolean | NothingEnum

/\*\*

- True applies kerning from proportional CJK metrics in OpenType fonts.
  \*/
  otfProportionalMetrics: boolean | NothingEnum

/\*\*

- True italicizes half-width alphanumerics.
  \*/
  otfRomanItalics: boolean | NothingEnum

/\*\*

- True uses slashed zeroes in OpenType fonts.
  \*/
  otfSlashedZero: boolean | NothingEnum

/\*\*

- True uses stretched alternate forms in OpenType fonts.
  \*/
  otfStretchedAlternate: boolean | NothingEnum

/\*\*

- True uses stylistic alternate forms in OpenType fonts.
  \*/
  otfStylisticAlternate: boolean | NothingEnum

/\*\*

- Stylistic sets selected for OpenType fonts.
  \*/
  otfStylisticSets: number | NothingEnum

/\*\*

- True uses swash forms in OpenType fonts.
  \*/
  otfSwash: boolean | NothingEnum

/\*\*

- True uses titling forms in OpenType fonts.
  \*/
  otfTitling: boolean | NothingEnum

/\*\*

- True overprints the characters' fill color.
  \*/
  overprintFill: boolean | NothingEnum

/\*\*

- True overprints the characters' stroke.
  \*/
  overprintStroke: boolean | NothingEnum

/\*\*

- Parent of the CharacterStyle: Document, Application, or CharacterStyleGroup.
  \*/
  readonly parent: any

/\*\*

- Text size.
  \*/
  pointSize: number | NothingEnum

/\*\*

- Text position relative to the baseline.
  \*/
  position: Position | NothingEnum

/\*\*

- Positional form used by OpenType.
  \*/
  positionalForm: PositionalForms | NothingEnum

/\*\*

- Preview color, either an array of three doubles from 0 to 255 for R, G, and B, or a UI color.
  \*/
  previewColor: [number, number, number] | UIColors | NothingEnum

/\*\*

- Property object for assigning several properties together.
  \*/
  properties: object

/\*\*

- Ruby alignment setting.
  \*/
  rubyAlignment: RubyAlignments | NothingEnum

/\*\*

- True auto-aligns ruby.
  \*/
  rubyAutoAlign: boolean | NothingEnum

/\*\*

- True scales ruby automatically to the selected percent of parent text size. For percent details, see ruby parent scaling percent.
  \*/
  rubyAutoScaling: boolean | NothingEnum

/\*\*

- True scales glyphs in ruby auto tcy (tate-chuu-yoko) to fit one em.
  \*/
  rubyAutoTcyAutoScale: boolean | NothingEnum

/\*\*

- Number of digits included in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyDigits: number | NothingEnum

/\*\*

- True includes Roman characters in ruby auto tcy (tate-chuu-yoko).
  \*/
  rubyAutoTcyIncludeRoman: boolean | NothingEnum

/\*\*

- Ruby character fill swatch: color, gradient, tint, or mixed ink.
  \*/
  rubyFill: Swatch | string | NothingEnum

/\*\*

- Font assigned to ruby characters.
  \*/
  rubyFont: Font | string | NothingEnum

/\*\*

- Ruby character size, in points.
  \*/
  rubyFontSize: number | NothingEnum

/\*\*

- Font style assigned to ruby characters.
  \*/
  rubyFontStyle: string | NothingEnum

/\*\*

- True uses OpenType Pro fonts for ruby.
  \*/
  rubyOpenTypePro: boolean | NothingEnum

/\*\*

- True limits ruby overhang to the specified amount. For amount details, see ruby parent overhang amount.
  \*/
  rubyOverhang: boolean | NothingEnum

/\*\*

- Overprinting method for ruby fill.
  \*/
  rubyOverprintFill: AdornmentOverprint | NothingEnum

/\*\*

- Overprinting method for ruby stroke.
  \*/
  rubyOverprintStroke: AdornmentOverprint | NothingEnum

/\*\*

- Amount ruby characters may overhang parent text.
  \*/
  rubyParentOverhangAmount: RubyOverhang | NothingEnum

/\*\*

- Percentage used to scale parent text size for ruby text size.
  \*/
  rubyParentScalingPercent: number | NothingEnum

/\*\*

- Ruby spacing measured relative to parent text.
  \*/
  rubyParentSpacing: RubyParentSpacing | NothingEnum

/\*\*

- Ruby character position relative to parent text.
  \*/
  rubyPosition: RubyKentenPosition | NothingEnum

/\*\*

- Ruby character stroke swatch: color, gradient, tint, or mixed ink.
  \*/
  rubyStroke: Swatch | string | NothingEnum

/\*\*

- Ruby character stroke tint percentage.
  \*/
  rubyStrokeTint: number | NothingEnum

/\*\*

- Ruby fill color tint percentage. (Range: 0 to 100).
  \*/
  rubyTint: number | NothingEnum

/\*\*

- Ruby type setting.
  \*/
  rubyType: RubyTypes | NothingEnum

/\*\*

- Ruby character stroke weight, in points.
  \*/
  rubyWeight: number | NothingEnum

/\*\*

- Horizontal spacing between ruby and parent characters.
  \*/
  rubyXOffset: number | NothingEnum

/\*\*

- Ruby character horizontal size, as a percent of original size.
  \*/
  rubyXScale: number | NothingEnum

/\*\*

- Vertical spacing between ruby and parent characters.
  \*/
  rubyYOffset: number | NothingEnum

/\*\*

- Ruby character vertical size, as a percent of original size.
  \*/
  rubyYScale: number | NothingEnum

/\*\*

- True makes character scaling affect line size.
  \*/
  scaleAffectsLineHeight: boolean | NothingEnum

/\*\*

- True enables shatai rotation adjustment.
  \*/
  shataiAdjustRotation: boolean | NothingEnum

/\*\*

- True enables shatai tsume adjustment.
  \*/
  shataiAdjustTsume: boolean | NothingEnum

/\*\*

- Shatai lens angle, in degrees.
  \*/
  shataiDegreeAngle: number | NothingEnum

/\*\*

- Percentage of shatai obliquing to apply.
  \*/
  shataiMagnification: number | NothingEnum

/\*\*

- Skew angle for the CharacterStyle.
  \*/
  skew: number | NothingEnum

/\*\*

- EPUB-only Split Document setting.
  \*/
  splitDocument: boolean | NothingEnum

/\*\*

- Strikethrough stroke swatch: color, gradient, tint, or mixed ink.
  \*/
  strikeThroughColor: Swatch | string | NothingEnum

/\*\*

- Strikethrough stroke gap swatch: color, gradient, tint, or mixed ink.
  \*/
  strikeThroughGapColor: Swatch | string | NothingEnum

/\*\*

- True overprints the strikethrough stroke gap color. Note: Applies when strike through type is not solid.
  \*/
  strikeThroughGapOverprint: boolean | NothingEnum

/\*\*

- Strikethrough stroke gap color tint percentage. (Range: 0 to 100) Note: Applies when strike through type is not solid.
  \*/
  strikeThroughGapTint: number | NothingEnum

/\*\*

- Offset distance from the text baseline to the strikethrough stroke.
  \*/
  strikeThroughOffset: number | NothingEnum

/\*\*

- True overprints the strikethrough stroke.
  \*/
  strikeThroughOverprint: boolean | NothingEnum

/\*\*

- Strikethrough stroke tint percentage. (Range: 0 to 100).
  \*/
  strikeThroughTint: number | NothingEnum

/\*\*

- Stroke type used for strikethrough.
  \*/
  strikeThroughType: StrokeStyle | string | NothingEnum

/\*\*

- Weight assigned to the strikethrough stroke.
  \*/
  strikeThroughWeight: number | NothingEnum

/\*\*

- True draws a strikethrough line across the text.
  \*/
  strikeThru: boolean | NothingEnum

/\*\*

- Alignment applied to the text stroke.
  \*/
  strokeAlignment: TextStrokeAlign | NothingEnum

/\*\*

- CharacterStyle stroke swatch: color, gradient, tint, or mixed ink.
  \*/
  strokeColor: Swatch | NothingEnum | string

/\*\*

- CharacterStyle stroke color tint percentage. Use 0 to 100 for explicit tint; use -1 for inherited or overridden value.
  \*/
  strokeTint: number | NothingEnum

/\*\*

- Stroke weight assigned to text characters.
  \*/
  strokeWeight: number | NothingEnum

/\*\*

- Collection containing style export tag maps.
  \*/
  readonly styleExportTagMaps: StyleExportTagMaps

/\*\*

- Unique style id for distinguishing styles. Internal use only.
  \*/
  styleUniqueId: string | NothingEnum

/\*\*

- True makes a character horizontal inside vertical text.
  \*/
  tatechuyoko: boolean | NothingEnum

/\*\*

- Horizontal offset for horizontal characters within vertical text.
  \*/
  tatechuyokoXOffset: number | NothingEnum

/\*\*

- Vertical offset for horizontal characters within vertical text.
  \*/
  tatechuyokoYOffset: number | NothingEnum

/\*\*

- Amount, in thousands of an em, used to loosen or tighten a text block.
  \*/
  tracking: number | NothingEnum

/\*\*

- Space added after each character.
  \*/
  trailingAki: number | NothingEnum

/\*\*

- Horizontal character compression amount.
  \*/
  tsume: number | NothingEnum

/\*\*

- True applies underlining to the text.
  \*/
  underline: boolean | NothingEnum

/\*\*

- Underline stroke swatch: color, gradient, tint, or mixed ink.
  \*/
  underlineColor: Swatch | string | NothingEnum

/\*\*

- Underline stroke gap swatch: color, gradient, tint, or mixed ink. Note: Applies when underline type is not solid.
  \*/
  underlineGapColor: Swatch | string | NothingEnum

/\*\*

- True overprints the underline stroke gap color.
  \*/
  underlineGapOverprint: boolean | NothingEnum

/\*\*

- Underline stroke gap color tint percentage. (Range: 0 to 100) Note: Applies when underline type is not solid.
  \*/
  underlineGapTint: number | NothingEnum

/\*\*

- Offset distance from the text baseline to the underline.
  \*/
  underlineOffset: number | NothingEnum

/\*\*

- True overprints the underline stroke color.
  \*/
  underlineOverprint: boolean | NothingEnum

/\*\*

- Underline stroke tint percentage. (Range: 0 to 100).
  \*/
  underlineTint: number | NothingEnum

/\*\*

- Stroke type used for underline.
  \*/
  underlineType: StrokeStyle | string | NothingEnum

/\*\*

- Weight assigned to the underline stroke.
  \*/
  underlineWeight: number | NothingEnum

/\*\*

- Vertical scaling for the CharacterStyle.
  \*/
  verticalScale: number | NothingEnum

/\*\*

- True enables warichu.
  \*/
  warichu: boolean | NothingEnum

/\*\*

- Alignment setting for warichu text.
  \*/
  warichuAlignment: WarichuAlignment | NothingEnum

/\*\*

- Minimum characters allowed after a line break.
  \*/
  warichuCharsAfterBreak: number | NothingEnum

/\*\*

- Minimum characters allowed before a line break.
  \*/
  warichuCharsBeforeBreak: number | NothingEnum

/\*\*

- Spacing between warichu character lines.
  \*/
  warichuLineSpacing: number | NothingEnum

/\*\*

- Number of warichu lines inside one normal line.
  \*/
  warichuLines: number | NothingEnum

/\*\*

- Percentage used to scale parent text size for warichu size.
  \*/
  warichuSize: number | NothingEnum

/\*\*

- Horizontal, x-axis offset for diacritic adjustment.
  \*/
  xOffsetDiacritic: number | NothingEnum

/\*\*

- Vertical, y-axis offset for diacritic adjustment.
  \*/
  yOffsetDiacritic: number | NothingEnum

/\*\*

- Adds a listener for events.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

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

- Makes a duplicate CharacterStyle.
  \*/
  duplicate(): CharacterStyle

/\*\*

- Gets the label value for the specified key.
- @param key Label key.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the specifier and returns object references.
  \*/
  getElements(): CharacterStyle[]

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
  move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): CharacterStyle

/\*\*

- Deletes the style.
- @param replacingWith Style applied instead of the deleted style.
  \*/
  remove(replacingWith: CharacterStyle): void

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

- Produces source text that can evaluate back to the CharacterStyle.
  \*/
  toSource(): string

/\*\*

- Retrieves the object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Character style collection.
  \*/
  declare class CharacterStyles {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number | NothingEnum

/\*\*

- Retrieves the CharacterStyle at the specified index.
- @param index Index value.
  \*/
  [index: number]: CharacterStyle

/\*\*

- Creates a CharacterStyle.
- @param withProperties Initial property values for the new CharacterStyle
  \*/
  add(withProperties: object): CharacterStyle

/\*\*

- Retrieves any CharacterStyle from the collection.
  \*/
  anyItem(): CharacterStyle

/\*\*

- Shows how many elements the CharacterStyle collection contains.
  \*/
  count(): number

/\*\*

- Retrieves all CharacterStyle objects in the collection.
  \*/
  everyItem(): CharacterStyle[]

/\*\*

- Retrieves the first CharacterStyle in the collection.
  \*/
  firstItem(): CharacterStyle

/\*\*

- Retrieves the CharacterStyle identified by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): CharacterStyle

/\*\*

- Retrieves the CharacterStyle with the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): CharacterStyle

/\*\*

- Retrieves the CharacterStyle with the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): CharacterStyle

/\*\*

- Retrieves CharacterStyles within the requested range.
- @param from CharacterStyle, index, or name that starts the range.
- @param to CharacterStyle, index, or name that ends the range.
  \*/
  itemByRange(from: CharacterStyle | number | string, to: CharacterStyle | number | string): CharacterStyle[]

/\*\*

- Retrieves the final CharacterStyle in the collection.
  \*/
  lastItem(): CharacterStyle

/\*\*

- Retrieves the middle CharacterStyle in the collection.
  \*/
  middleItem(): CharacterStyle

/\*\*

- Retrieves the CharacterStyle after the supplied CharacterStyle.
- @param obj CharacterStyle whose index precedes the requested CharacterStyle.
  \*/
  nextItem(obj: CharacterStyle): CharacterStyle

/\*\*

- Retrieves the CharacterStyle before the supplied index.
- @param obj Index of the CharacterStyle following the requested CharacterStyle.
  \*/
  previousItem(obj: CharacterStyle): CharacterStyle

/\*\*

- Produces source text that can evaluate back to the CharacterStyle.
  \*/
  toSource(): string
  }

/\*\*

- Tab stop definition.
  \*/
  declare class TabStop {
  /\*\*
  - Tab stop alignment setting.
    \*/
    alignment: TabStopAlignment

/\*\*

- Tab stop alignment character. Note: Applies when alignment is character align.
  \*/
  alignmentCharacter: string

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- TabStop index within its containing object.
  \*/
  readonly index: number

/\*\*

- Returns true when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Tab stop leader string.
  \*/
  leader: string
