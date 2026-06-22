# Indesign (part 78)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Gets the Paragraph positioned after the supplied Paragraph in the collection.
- @param obj Paragraph that precedes the wanted Paragraph.
  \*/
  nextItem(obj: Paragraph): Paragraph

/\*\*

- Gets the Paragraph positioned immediately before the supplied index.
- @param obj Index for the Paragraph that comes after the wanted Paragraph.
  \*/
  previousItem(obj: Paragraph): Paragraph

/\*\*

- Builds executable source text that resolves back to the Paragraph.
  \*/
  toSource(): string
  }

/\*\*

- Continuous span sharing the same text-formatting attributes.
  \*/
  declare class TextStyleRange extends Text {}

/\*\*

- TextStyleRange collection.
  \*/
  declare class TextStyleRanges {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the TextStyleRange at the supplied index.
- @param index Index value.
  \*/
  [index: number]: TextStyleRange

/\*\*

- Selects an arbitrary TextStyleRange from the collection.
  \*/
  anyItem(): TextStyleRange

/\*\*

- Reports how many elements the TextStyleRange collection contains.
  \*/
  count(): number

/\*\*

- Gets all TextStyleRange entries from the collection.
  \*/
  everyItem(): TextStyleRange[]

/\*\*

- Gets the initial TextStyleRange in the collection.
  \*/
  firstItem(): TextStyleRange

/\*\*

- Gets the TextStyleRange identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): TextStyleRange

/\*\*

- Gets TextStyleRanges over the supplied range.
- @param from Starting TextStyleRange, index, or name for the range.
- @param to Ending TextStyleRange, index, or name for the range.
  \*/
  itemByRange(from: TextStyleRange | number | string, to: TextStyleRange | number | string): TextStyleRange[]

/\*\*

- Gets the final TextStyleRange in the collection.
  \*/
  lastItem(): TextStyleRange

/\*\*

- Gets the central TextStyleRange in the collection.
  \*/
  middleItem(): TextStyleRange

/\*\*

- Gets the TextStyleRange positioned after the supplied TextStyleRange in the collection.
- @param obj TextStyleRange that precedes the wanted TextStyleRange.
  \*/
  nextItem(obj: TextStyleRange): TextStyleRange

/\*\*

- Gets the TextStyleRange positioned immediately before the supplied index.
- @param obj Index for the TextStyleRange that comes after the wanted TextStyleRange.
  \*/
  previousItem(obj: TextStyleRange): TextStyleRange

/\*\*

- Builds executable source text that resolves back to the TextStyleRange.
  \*/
  toSource(): string
  }

/\*\*

- Insertion location between two characters.
  \*/
  declare class InsertionPoint extends Text {
  /\*\*
  - Endnote collection.
    \*/
    readonly endnotes: Endnotes

/\*\*

- Adds an endnote, creating both the endnote reference and its text range.
  \*/
  createEndnote(): Endnote

/\*\*

- Experimental: Fetches a text fragment from url, places it at the insertion point, and makes a link.
- @param linkResourceURI Link Resource URI.
- @param name Tag name for the key.
  \*/
  createTextFragmentLink(linkResourceURI: string, name: string): Link
  }

/\*\*

- InsertionPoint collection.
  \*/
  declare class InsertionPoints {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the InsertionPoint at the supplied index.
- @param index Index value.
  \*/
  [index: number]: InsertionPoint

/\*\*

- Selects an arbitrary InsertionPoint from the collection.
  \*/
  anyItem(): InsertionPoint

/\*\*

- Reports how many elements the InsertionPoint collection contains.
  \*/
  count(): number

/\*\*

- Gets all InsertionPoint entries from the collection.
  \*/
  everyItem(): InsertionPoint[]

/\*\*

- Gets the initial InsertionPoint in the collection.
  \*/
  firstItem(): InsertionPoint

/\*\*

- Gets the InsertionPoint identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): InsertionPoint

/\*\*

- Gets InsertionPoints over the supplied range.
- @param from Starting InsertionPoint, index, or name for the range.
- @param to Ending InsertionPoint, index, or name for the range.
  \*/
  itemByRange(from: InsertionPoint | number | string, to: InsertionPoint | number | string): InsertionPoint[]

/\*\*

- Gets the final InsertionPoint in the collection.
  \*/
  lastItem(): InsertionPoint

/\*\*

- Gets the central InsertionPoint in the collection.
  \*/
  middleItem(): InsertionPoint

/\*\*

- Gets the InsertionPoint positioned after the supplied InsertionPoint in the collection.
- @param obj InsertionPoint that precedes the wanted InsertionPoint.
  \*/
  nextItem(obj: InsertionPoint): InsertionPoint

/\*\*

- Gets the InsertionPoint positioned immediately before the supplied index.
- @param obj Index for the InsertionPoint that comes after the wanted InsertionPoint.
  \*/
  previousItem(obj: InsertionPoint): InsertionPoint

/\*\*

- Builds executable source text that resolves back to the InsertionPoint.
  \*/
  toSource(): string
  }

/\*\*

- Text frame.
  \*/
  declare class TextFrame extends PageItem {
  /\*\*
  - Settings for anchored objects.
    \*/
    readonly anchoredObjectSettings: AnchoredObjectSetting

/\*\*

- Settings for baseline frame grids.
  \*/
  readonly baselineFrameGridOptions: BaselineFrameGridOption

/\*\*

- Button collection.
  \*/
  readonly buttons: Buttons

/\*\*

- Character collection.
  \*/
  readonly characters: Characters

/\*\*

- CheckBox collection.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- ComboBox collection.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- Content kind allowed in the frame.
  \*/
  contentType: ContentType

/\*\*

- Text-frame contents.
  \*/
  contents: string | TextFrameContents | SpecialCharacters

/\*\*

- Final text frame in the thread.
  \*/
  readonly endTextFrame: TextFrame | TextPath

/\*\*

- Endnote text-frame collection.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Footnote collection.
  \*/
  readonly footnotes: Footnotes

/\*\*

- Form-field collection.
  \*/
  readonly formFields: FormFields

/\*\*

- Graphic-line collection.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Default grid settings. Note: Applies to named, layout, and frame (story) grids.
  \*/
  readonly gridData: GridDataInformation

/\*\*

- Group collection.
  \*/
  readonly groups: Groups

/\*\*

- Hidden-text object collection.
  \*/
  readonly hiddenTexts: HiddenTexts

/\*\*

- InsertionPoint collection.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- Line collection.
  \*/
  readonly lines: Lines

/\*\*

- ListBox collection.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- Multi-state object collection.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Following text frame in the thread.
  \*/
  nextTextFrame: TextFrame | TextPath | NothingEnum

/\*\*

- Note collection.
  \*/
  readonly notes: Notes

/\*\*

- Object export settings.
  \*/
  readonly objectExportOptions: ObjectExportOption

/\*\*

- Ellipse collection.
  \*/
  readonly ovals: Ovals

/\*\*

- True when the story contains overset text.
  \*/
  readonly overflows: boolean

/\*\*

- Paragraph collection.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Story containing this text.
  \*/
  readonly parentStory: Story

/\*\*

- Path collection.
  \*/
  readonly paths: Paths

/\*\*

- Polygon collection.
  \*/
  readonly polygons: Polygons

/\*\*

- Prior text frame in the thread.
  \*/
  previousTextFrame: TextFrame | TextPath | NothingEnum

/\*\*

- Radio-button collection.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Rectangle collection.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Signature-field collection.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- Collection of spline items.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Initial text frame in the thread.
  \*/
  readonly startTextFrame: TextFrame | TextPath

/\*\*

- Table collection.
  \*/
  readonly tables: Tables

/\*\*

- TextBox collection.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- TextColumn collection.
  \*/
  readonly textColumns: TextColumns

/\*\*

- Text-frame position inside the story.
  \*/
  readonly textFrameIndex: number

/\*\*

- Text-frame preference settings.
  \*/
  readonly textFramePreferences: TextFramePreference

/\*\*

- TextFrame collection.
  \*/
  readonly textFrames: TextFrames

/\*\*

- TextPath collection.
  \*/
  readonly textPaths: TextPaths

/\*\*

- TextStyleRange collection.
  \*/
  readonly textStyleRanges: TextStyleRanges

/\*\*

- Text variable instance collection.
  \*/
  readonly textVariableInstances: TextVariableInstances

/\*\*

- Text object collection.
  \*/
  readonly texts: Texts

/\*\*

- Word collection.
  \*/
  readonly words: Words

/\*\*

- Combines the TextFrame with other objects to create a page item; nonintersecting objects are removed.
- @param with* Object(s) to add.
  \*/
  addPath(with*: PageItem[]): PageItem

/\*\*

- Moves the TextFrame forward one layer level.
  \*/
  bringForward(): void

/\*\*

- Moves the TextFrame to its layer front, or ahead of a chosen item.
- @param reference Reference object to place this object in front of; parent must match.
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Finds glyphs matching the find what value and swaps them to the change to value.
- @param reverseOrder When true, delivers results in reverse order.
  \*/
  changeGlyph(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value and swaps it to the change to value.
- @param reverseOrder When true, delivers results in reverse order.
  \*/
  changeGrep(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value and swaps it to the change to value.
- @param reverseOrder When true, delivers results in reverse order.
  \*/
  changeText(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find character type value and swaps it to the change character type value.
- @param reverseOrder When true, delivers results in reverse order.
  \*/
  changeTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Converts text-frame contents into raw text.
  \*/
  convertToRawText(): void

/\*\*

- Turns text into outlines. The conversion makes a polygon object for each text line. For a single converted letter with no internal spaces or separate parts, that polygon has just one path. Note: Check allow outlines to see whether the font permits outline creation.
- @param deleteOriginal When true, removes the original text; when false, places separate outline object(s) over the text.
  \*/
  createOutlines(deleteOriginal?: boolean): PageItem[]

/\*\*

- Excludes overlapping regions of the TextFrame and other objects to create a page item.
- @param with* Object(s) to exclude.
  \*/
  excludeOverlapPath(with*: PageItem[]): PageItem

/\*\*

- Finds glyphs matching the find what value.
- @param reverseOrder When true, delivers results in reverse order.
  \*/
  findGlyph(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value.
- @param reverseOrder When true, delivers results in reverse order.
  \*/
  findGrep(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value.
- @param reverseOrder When true, delivers results in reverse order.
  \*/
  findText(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find character type value.
- @param reverseOrder When true, delivers results in reverse order.
  \*/
  findTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Intersects the TextFrame with other objects to create a page item. An error is returned when the objects do not intersect.
- @param with* Object(s) used for the intersection.
  \*/
  intersectPath(with*: PageItem[]): PageItem

/\*\*

- Combines TextFrame path(s) with paths from other objects to create a compound path.
- @param with* Other objects whose paths are included in the new compound path.
  \*/
  makeCompoundPath(with*: PageItem[]): PageItem

/\*\*

- Reverse-subtracts overlapping regions of the TextFrame and other objects to create a page item.
- @param with* Object(s) used for reverse subtraction.
  \*/
  minusBack(with*: PageItem[]): PageItem

/\*\*

- Deprecated: Use contentPlace method. Original Description: Create and place a linked story in the target page item.
- @param parentStory Story to place and link from.
- @param showingOptions Whether the link options dialog appears.
  \*/
  placeAndLink(parentStory: Story, showingOptions?: boolean): Story

/\*\*

- Reflows the text in the TextFrame.
  \*/
  recompose(): void

/\*\*

- Breaks apart a compound path.
  \*/
  releaseCompoundPath(): PageItem[]

/\*\*

- Moves the TextFrame back one layer level.
  \*/
  sendBackward(): void

/\*\*

- Moves the TextFrame to the layer back or behind a specified item; parent must match.
- @param reference Reference object that this object should move behind.
  \*/
  sendToBack(reference: PageItem): void

/\*\*

- Subtracts overlapping regions of the TextFrame and other objects to create a page item.
- @param with* Object(s) to subtract.
  \*/
  subtractPath(with*: PageItem[]): PageItem
  }

/\*\*

- TextFrame collection.
  \*/
  declare class TextFrames {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the TextFrame at the supplied index.
- @param index Index value.
  \*/
  [index: number]: TextFrame

/\*\*

- Creates a TextFrame.
- @param layer Layer where the TextFrame is created.
- @param at Insertion location for the TextFrame, relative to the reference object or inside the container object.
- @param reference Reference object. Note: Required when at is before or after.
- @param withProperties Starting property map for the TextFrame being created.
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): TextFrame

/\*\*

- Selects an arbitrary TextFrame from the collection.
  \*/
  anyItem(): TextFrame

/\*\*

- Reports how many elements the TextFrame collection contains.
  \*/
  count(): number

/\*\*

- Gets all TextFrame entries from the collection.
  \*/
  everyItem(): TextFrame[]

/\*\*

- Gets the initial TextFrame in the collection.
  \*/
  firstItem(): TextFrame

/\*\*

- Gets the TextFrame identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): TextFrame

/\*\*

- Gets the TextFrame identified by ID.
- @param id ID value.
  \*/
  itemByID(id: number): TextFrame

/\*\*

- Gets the TextFrame identified by name.
- @param name Name value.
  \*/
  itemByName(name: string): TextFrame

/\*\*

- Gets TextFrames over the supplied range.
- @param from Starting TextFrame, index, or name for the range.
- @param to Ending TextFrame, index, or name for the range.
  \*/
  itemByRange(from: TextFrame | number | string, to: TextFrame | number | string): TextFrame[]

/\*\*

- Gets the final TextFrame in the collection.
  \*/
  lastItem(): TextFrame

/\*\*

- Gets the central TextFrame in the collection.
  \*/
  middleItem(): TextFrame

/\*\*

- Gets the TextFrame positioned after the supplied TextFrame in the collection.
- @param obj TextFrame that precedes the wanted TextFrame.
  \*/
  nextItem(obj: TextFrame): TextFrame

/\*\*

- Gets the TextFrame positioned immediately before the supplied index.
- @param obj Index for the TextFrame that comes after the wanted TextFrame.
  \*/
  previousItem(obj: TextFrame): TextFrame

/\*\*

- Builds executable source text that resolves back to the TextFrame.
  \*/
  toSource(): string
  }

/\*\*

- Story object.
  \*/
  declare class Story {
  /\*\*
  - Fired after a Story is placed. The event bubbles and cannot be canceled.
    \*/
    static readonly `AFTER_PLACE`: string

/\*\*

- Fired before a Story is placed. The event bubbles and can be canceled.
  \*/
  static readonly `BEFORE_PLACE`: string

/\*\*

- When true, aligns text baselines to the baseline grid.
  \*/
  alignToBaseline: boolean

/\*\*

- Lists every graphic contained by the Story.
  \*/
  readonly allGraphics: Graphic[]

/\*\*

- Lists every page item contained by the Story.
  \*/
  readonly allPageItems: PageItem[]

/\*\*

- When true, words not tied to a hyphenation dictionary may break on any character at the next line.
  \*/
  allowArbitraryHyphenation: boolean

/\*\*

- Character style assigned to the text.
  \*/
  appliedCharacterStyle: CharacterStyle | string

/\*\*

- Font assigned to the Story, either as a font object or a font-family name.
  \*/
  appliedFont: Font | string

/\*\*

- Text language.
  \*/
  appliedLanguage: LanguageWithVendors | Language | string

/\*\*

- Named grid currently in use.
  \*/
  appliedNamedGrid: NamedGrid

/\*\*

- Character styles applied through nested styles.
  \*/
  readonly appliedNestedStyles: CharacterStyle[]

/\*\*

- List membership target.
  \*/
  appliedNumberingList: NumberingList | string

/\*\*

- Paragraph style assigned to the text.
  \*/
  appliedParagraphStyle: ParagraphStyle | string

/\*\*

- XML element linked to the Story.
  \*/
  readonly associatedXMLElement: XMLItem

/\*\*

- Auto-leading percentage of type size. (Range: 0 to 500).
  \*/
  autoLeading: number

/\*\*

- Half-width character count at or below which characters automatically run horizontally in vertical text.
  \*/
  autoTcy: number

/\*\*

- When true, auto tcy also covers Roman characters.
  \*/
  autoTcyIncludeRoman: boolean

/\*\*

- Balances ragged lines when set to true or to an enumeration value. Note: Invalid with a single-line text composer.
  \*/
  balanceRaggedLines: boolean | BalanceLinesStyle

/\*\*

- Baseline shift assigned to the text.
  \*/
  baselineShift: number | string

/\*\*

- Bullet character.
  \*/
  readonly bulletChar: Bullet

/\*\*

- Bullet-character alignment.
  \*/
  bulletsAlignment: ListAlignment

/\*\*

- Bullets and numbering list type.
  \*/
  bulletsAndNumberingListType: ListType

/\*\*

- Character style used for the text after string.
  \*/
  bulletsCharacterStyle: CharacterStyle | string

/\*\*

- Text after string expression for bullets.
  \*/
  bulletsTextAfter: string

/\*\*

- When true, the selected kinsoku set receives the double period (..), ellipse (...), and double hyphen (--). Note: Valid only while a kinsoku set is active.
  \*/
  bunriKinshi: boolean

/\*\*

- Button collection.
  \*/
  readonly buttons: Buttons

/\*\*

- Capitalization scheme.
  \*/
  capitalization: Capitalization

/\*\*

- Cell-style mapping collection.
  \*/
  readonly cellStyleMappings: CellStyleMappings

/\*\*

- Change collection.
  \*/
  readonly changes: Changes

/\*\*

- Character-style mapping collection.
  \*/
  readonly charStyleMappings: CharStyleMappings

/\*\*

- Alignment of small characters against the line's largest character.
  \*/
  characterAlignment: CharacterAlignment

/\*\*

- Character direction.
  \*/
  characterDirection: CharacterDirectionOptions

/\*\*

- Rotation angle for individual characters, in degrees. Note: Rotation is counterclockwise.
  \*/
  characterRotation: number

/\*\*

- Character collection.
  \*/
  readonly characters: Characters

/\*\*

- CheckBox collection.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- When true, grid tracking is used for non-Roman characters in CJK grids.
  \*/
  cjkGridTracking: boolean

/\*\*

- ComboBox collection.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- Text composer used to compose the text.
  \*/
  composer: string

/\*\*

- Text contents.
  \*/
  contents: string | SpecialCharacters

/\*\*

- Design Axes values.
  \*/
  designAxes: number[]

/\*\*

- Desired individual-character width as a percentage. (Range: 50 to 200)
  \*/
  desiredGlyphScaling: number

/\*\*

- Desired letter spacing as a percentage of the font's built-in space between letters. (Range: -100 to 500)
  \*/
  desiredLetterSpacing: number

/\*\*

- Desired word spacing expressed as percent of the font's word-space value. (Range: 0 to 1000)
  \*/
  desiredWordSpacing: number

/\*\*

- Diacritical character position.
  \*/
  diacriticPosition: DiacriticPositionOptions

/\*\*

- Digits type.
  \*/
  digitsType: DigitsTypeOptions

/\*\*

- Character count to use for drop caps.
  \*/
  dropCapCharacters: number

/\*\*

- Line count to use for drop caps.
  \*/
  dropCapLines: number

/\*\*

- Character style applied to the drop cap.
  \*/
  dropCapStyle: CharacterStyle | string

/\*\*

- Drop-cap outline flags. 1 = left side bearing. 2 = descenders. Japanese frame grid uses 0x100,0x200,0x400.
  \*/
  dropcapDetail: number

/\*\*

- Stroke join type applied to text characters.
  \*/
  endJoin: OutlineJoin

/\*\*

- Endnote text-range collection.
  \*/
  readonly endnoteRanges: EndnoteRanges

/\*\*

- Endnote text-frame collection.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- Endnote collection.
  \*/
  readonly endnotes: Endnotes

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Event-listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Swatch applied to the Story fill, such as color, gradient, tint, or mixed ink. .
  \*/
  fillColor: Swatch | string

/\*\*

- Fill-color tint as a percentage of the Story. Use 0 to 100 for tint percentage, or -1 for inherited/overridden value.
  \*/
  fillTint: number

/\*\*

- First-line indent amount.
  \*/
  firstLineIndent: number | string

/\*\*

- Font-style name.
  \*/
  fontStyle: string

/\*\*

- Footnote collection.
  \*/
  readonly footnotes: Footnotes

/\*\*

- Form-field collection.
  \*/
  readonly formFields: FormFields

/\*\*

- Glyph variant used instead of standard glyphs.
  \*/
  glyphForm: AlternateGlyphForms

/\*\*

- Linear-gradient angle applied to the text fill. (Range: -180 to 180)
  \*/
  gradientFillAngle: number

/\*\*

- For the text fill, sets linear-gradient length or radial-gradient radius.
  \*/
  gradientFillLength: number

/\*\*

- Gradient start point applied to the text fill, in page coordinates and formatted as [x, y].
  \*/
  gradientFillStart: (number | string)[]

/\*\*

- Linear-gradient angle applied to the text stroke. (Range: -180 to 180)
  \*/
  gradientStrokeAngle: number
