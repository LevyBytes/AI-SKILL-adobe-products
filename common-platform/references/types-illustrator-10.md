# Illustrator (part 10)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Word collection for this text range.
  \*/
  readonly words: Words
  }

/\*\*

- Named style storing character attributes.
  \*/
  declare class CharacterStyle {
  /\*\*
  - Character formatting attributes for this text range.
    \*/
    readonly characterAttributes: CharacterAttributes

/\*\*

- Name assigned to the character style.
  \*/
  name: string

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Object class identifier.
  \*/
  readonly typename: string

/\*\*

- Appends an element.
  \*/
  add(): CharacterStyle

/\*\*

- Applies this character style to text object(s).
- @param textItem Text object(s) that receive the style.
- @param clearingOverrides Whether existing text attributes are cleared before applying the style.
  \*/
  applyTo(textItem: any, clearingOverrides?: boolean): void

/\*\*

- Clears every attribute from this character style.
  \*/
  clear(): void

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Clears every element.
  \*/
  removeAll(): void
  }

/\*\*

- Named style storing paragraph attributes.
  \*/
  declare class ParagraphStyle {
  /\*\*
  - Character formatting attributes for this text range.
    \*/
    readonly characterAttributes: CharacterAttributes

/\*\*

- Name assigned to the paragraph style.
  \*/
  name: string

/\*\*

- Paragraph formatting attributes for this text range.
  \*/
  readonly paragraphAttributes: ParagraphAttributes

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Object class identifier.
  \*/
  readonly typename: string

/\*\*

- Appends an element.
  \*/
  add(): ParagraphStyle

/\*\*

- Applies this paragraph style to text object(s).
- @param textItem Text object(s) that receive the style.
- @param clearingOverrides Whether existing text attributes are cleared before applying the style.
  \*/
  applyTo(textItem: any, clearingOverrides?: boolean): void

/\*\*

- Clears every attribute from this paragraph style.
  \*/
  clear(): void

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Clears every element.
  \*/
  removeAll(): void
  }

/\*\*

- Character-level property set.
  \*/
  declare class CharacterAttributes {
  /\*\*
  - Percentage of reduced spacing around a Japanese character (100 = 100%).
    \*/
    Tsume: number

/\*\*

- Left aki amount, measured in ems.
  \*/
  akiLeft: number

/\*\*

- Right aki amount, measured in ems.
  \*/
  akiRight: number

/\*\*

- Alignment type used by the character.
  \*/
  alignment: StyleRunAlignmentType

/\*\*

- Alternate glyph form setting.
  \*/
  alternateGlyphs: AlternateGlyphsForm

/\*\*

- Enables or disables automatic leading.
  \*/
  autoLeading: boolean

/\*\*

- Baseline direction for Japanese text.
  \*/
  baselineDirection: BaselineDirectionType

/\*\*

- Baseline positioning option for text.
  \*/
  baselinePosition: FontBaselineOption

/\*\*

- Baseline shift amount for text (in points).
  \*/
  baselineShift: number

/\*\*

- Capitalization setting for text.
  \*/
  capitalization: FontCapsOption

/\*\*

- Whether OpenType connection forms are active.
  \*/
  connectionForms: boolean

/\*\*

- Whether contextual ligatures are active.
  \*/
  contextualLigature: boolean

/\*\*

- Whether discretionary ligatures are active.
  \*/
  discretionaryLigature: boolean

/\*\*

- Figure style selected for the OpenType font.
  \*/
  figureStyle: FigureStyleType

/\*\*

- Fill color applied to the text.
  \*/
  fillColor: Color

/\*\*

- Whether OpenType fractions are active.
  \*/
  fractions: boolean

/\*\*

- Horizontal character scale as a percentage (100 = 100%).
  \*/
  horizontalScale: number

/\*\*

- Whether Japanese OpenType italic support is available.
  \*/
  italics: boolean

/\*\*

- Automatic kerning method selection.
  \*/
  kerningMethod: AutoKernType

/\*\*

- Language assigned to the text.
  \*/
  language: LanguageType

/\*\*

- Space between two text lines (in points).
  \*/
  leading: number

/\*\*

- Whether ligatures are active.
  \*/
  ligature: boolean

/\*\*

- Whether line breaks may occur.
  \*/
  noBreak: boolean

/\*\*

- Baseline position from OpenType.
  \*/
  openTypePosition: FontOpenTypePositionOption

/\*\*

- Whether OpenType ordinals are active.
  \*/
  ordinals: boolean

/\*\*

- Whether OpenType ornaments are active.
  \*/
  ornaments: boolean

/\*\*

- Whether the text fill should overprint.
  \*/
  overprintFill: boolean

/\*\*

- Whether the text stroke should overprint.
  \*/
  overprintStroke: boolean

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Whether Japanese OpenType proportional font support is available.
  \*/
  proportionalMetrics: boolean

/\*\*

- Character rotation value (in degrees).
  \*/
  rotation: number

/\*\*

- Font size measured in points.
  \*/
  size: number

/\*\*

- Whether strike-through drawing is applied over the text.
  \*/
  strikeThrough: boolean

/\*\*

- Stroke color applied to the text.
  \*/
  strokeColor: Color

/\*\*

- Stroke line width.
  \*/
  strokeWeight: number

/\*\*

- Whether OpenType stylistic alternates are active.
  \*/
  stylisticAlternates: boolean

/\*\*

- Whether OpenType swash is active.
  \*/
  swash: boolean

/\*\*

- Horizontal Tate-Chu-Yoko adjustment, in points.
  \*/
  tateChuYokoHorizontal: number

/\*\*

- Vertical Tate-Chu-Yoko adjustment, in points.
  \*/
  tateChuYokoVertical: number

/\*\*

- Font used by the text.
  \*/
  textFont: TextFont

/\*\*

- Whether OpenType titling alternates are active.
  \*/
  titling: boolean

/\*\*

- Tracking or range-kerning value, measured in thousandths of an em.
  \*/
  tracking: number

/\*\*

- Object class identifier.
  \*/
  readonly typename: string

/\*\*

- Whether text underlining is enabled.
  \*/
  underline: boolean

/\*\*

- Character vertical scale, where 100 = 100%.
  \*/
  verticalScale: number

/\*\*

- \*/
  wariChuCharactersAfterBreak: number

/\*\*

- \*/
  wariChuCharactersBeforeBreak: number

/\*\*

- Whether WariChu is enabled.
  \*/
  wariChuEnabled: boolean

/\*\*

- \*/
  wariChuJustification: WariChuJustificationType

/\*\*

- Gap between Wari-Chu lines.
  \*/
  wariChuLineGap: number

/\*\*

- Count of Wari-Chu lines (multiple text lines fit into a space meant for one).
  \*/
  wariChuLines: number

/\*\*

- Scale value for Wari-Chu.
  \*/
  wariChuScale: number
  }

/\*\*

- Paragraph-level property set.
  \*/
  declare class ParagraphAttributes {
  /\*\*
  - Automatic leading amount (in percentage).
    \*/
    autoLeadingAmount: number

/\*\*

- Whether BunriKinshi is enabled.
  \*/
  bunriKinshi: boolean

/\*\*

- Burasagari type setting.
  \*/
  burasagariType: BurasagariTypeEnum

/\*\*

- Desired glyph scaling as a percentage.
  \*/
  desiredGlyphScaling: number

/\*\*

- Desired letter spacing as a percentage.
  \*/
  desiredLetterSpacing: number

/\*\*

- Desired word spacing as a percentage.
  \*/
  desiredWordSpacing: number

/\*\*

- Whether every line composer is enabled instead of single line composer.
  \*/
  everyLineComposer: boolean

/\*\*

- First-line left indent measured in points.
  \*/
  firstLineIndent: number

/\*\*

- Whether capitalized words can be hyphenated.
  \*/
  hyphenateCapitalizedWords: boolean

/\*\*

- Whether paragraph hyphenation is enabled.
  \*/
  hyphenation: boolean

/\*\*

- Hyphenation preference scale, from better spacing (0) to fewer hyphens (1).
  \*/
  hyphenationPreference: number

/\*\*

- Hyphenation zone size.
  \*/
  hyphenationZone: number

/\*\*

- Paragraph justification setting.
  \*/
  justification: Justification

/\*\*

- Kinsoku Shori name.
  \*/
  kinsoku: string

/\*\*

- Preferred Kinsoku order setting.
  \*/
  kinsokuOrder: KinsokuOrderEnum

/\*\*

- Whether KurikaeshiMojiShori is enabled.
  \*/
  kurikaeshiMojiShori: boolean

/\*\*

- Automatic leading type.
  \*/
  leadingType: AutoLeadingType

/\*\*

- Left margin indent measured in points.
  \*/
  leftIndent: number

/\*\*

- Maximum count of consecutive hypenated lines.
  \*/
  maximumConsecutiveHyphens: number

/\*\*

- Maximum glyph scaling as a percentage.
  \*/
  maximumGlyphScaling: number

/\*\*

- Maximum letter spacing as a percentage.
  \*/
  maximumLetterSpacing: number

/\*\*

- Maximum word spacing as a percentage.
  \*/
  maximumWordSpacing: number

/\*\*

- Minimum character count after a hyphen.
  \*/
  minimumAfterHyphen: number

/\*\*

- Minimum character count before a hyphen.
  \*/
  minimumBeforeHyphen: number

/\*\*

- Minimum glyph scaling as a percentage.
  \*/
  minimumGlyphScaling: number

/\*\*

- Minimum size for a hyphenated word.
  \*/
  minimumHyphenatedWordSize: number

/\*\*

- Minimum letter spacing as a percentage.
  \*/
  minimumLetterSpacing: number

/\*\*

- Minimum word spacing as a percentage.
  \*/
  minimumWordSpacing: number

/\*\*

- Mojikumi name.
  \*/
  mojikumi: string

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Right margin indent measured in points.
  \*/
  rightIndent: number

/\*\*

- Whether Roman hanging punctuation is enabled.
  \*/
  romanHanging: boolean

/\*\*

- Justification setting for a single word.
  \*/
  singleWordJustification: Justification

/\*\*

- Paragraph spacing after, in points.
  \*/
  spaceAfter: number

/\*\*

- Paragraph spacing before, in points.
  \*/
  spaceBefore: number

/\*\*

- Settings for tab stops.
  \*/
  tabStops: TabStopInfo[]

/\*\*

- Object class identifier.
  \*/
  readonly typename: string
  }

/\*\*

- Options used when a Photoshop file is opened or placed.
  \*/
  declare class OpenOptionsPhotoshop {
  /\*\*
  - Uses the specified LayerComp.
    \*/
    layerComp: string

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Whether hidden layers stay preserved during document conversion (default: false).
  \*/
  preserveHiddenLayers: boolean

/\*\*

- Whether image maps stay preserved during document conversion (default: true).
  \*/
  preserveImageMaps: boolean

/\*\*

- Whether layers stay preserved during document conversion (default: true).
  \*/
  preserveLayers: boolean

/\*\*

- Whether slices stay preserved during document conversion (default: true).
  \*/
  preserveSlices: boolean

/\*\*

- Object class identifier.
  \*/
  readonly typename: string
  }

/\*\*

- Options available when a PDF file is opened.
  \*/
  declare class OpenOptionsPDF {
  /\*\*
  - Box selection for placing a multipage document (default: PDF media box).
    \*/
    pDFCropToBox: PDFBoxType

/\*\*

- Page selected when opening a multipage document (default: 1).
  \*/
  pageToOpen: number

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Object class identifier.
  \*/
  readonly typename: string
  }

/\*\*

- Options available when an AutoCAD file is opened.
  \*/
  declare class OpenOptionsAutoCAD {
  /\*\*
  - Centers the generated artwork on the artboard (default: true).
    \*/
    centerArtwork: boolean

/\*\*

- Scaling behavior for AutoCAD drawing import (default: Fit Artboard).
  \*/
  globalScaleOption: AutoCADGlobalScaleOption

/\*\*

- Global percentage scaling for the AutoCAD drawing (default: 1.0).
  \*/
  globalScalePercent: number

/\*\*

- Merges artwork layers (default: false).
  \*/
  mergeLayers: boolean

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Scales lineweights by the same amount as the rest of the drawing (default: false).
  \*/
  scaleLineweights: boolean

/\*\*

- Layout name from the AutoCAD drawing to import.
  \*/
  selectedLayoutName: string

/\*\*

- Object class identifier.
  \*/
  readonly typename: string

/\*\*

- Units used for mapping (default: Millimeters).
  \*/
  unit: AutoCADUnit

/\*\*

- Scaling ratio used while mapping units (default: 1.0).
  \*/
  unitScaleRatio: number
  }

/\*\*

- Tracing settings that control the tracing process.
  \*/
  declare class TracingOptions {
  /\*\*
  - ColorFidelity value used when TracingColorTypeValue is TracingFullColor.
    \*/
    colorFidelity: number

/\*\*

- Tracing color group; accepts 'All' or a named group present in color Palette (library).
  \*/
  colorGroup: string

/\*\*

- Corner fidelity setting for tracing.
  \*/
  cornerFidelity: number

/\*\*

- Enables tracing with fills; Fills, Strokes or both must be on.
  \*/
  fills: boolean

/\*\*

- Gray-level count for grayscale mode tracing.
  \*/
  grayLevels: number

/\*\*

- Ignores white fills only for Black and white tracing when TracingMethodAbutting is the method value.
  \*/
  ignoreWhite: boolean

/\*\*

- Maximum stroke weight (stroke only).
  \*/
  maxStrokeWeight: number

/\*\*

- Minimum pixel area to vectorize.
  \*/
  noiseFidelity: number

/\*\*

- Tracing palette (Library) name; choose 'Document Library' or another imported library's name.
  \*/
  palette: string

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Path fidelity setting for tracing.
  \*/
  pathFidelity: number

/\*\*

- Active preset name. Read-only.
  \*/
  readonly preset: string

/\*\*

- Controls whether curves snap to lines.
  \*/
  snapCurveToLines: boolean

/\*\*

- Enables tracing with strokes; Fills, Strokes or both must be on.
  \*/
  strokes: boolean

/\*\*

- Threshold for black and white mode tracing.
  \*/
  threshold: number

/\*\*

- Color Type for tracing: TracingLimitedColor or TracingFullColor.
  \*/
  tracingColorTypeValue: TracingColorType

/\*\*

- Maximum allowed color count for tracing when TracingColorTypeValue is TracingLimitedColor.
  \*/
  tracingColors: number

/\*\*

- Tracing method selection, either abutting or adjoining paths.
  \*/
  tracingMethod: TracingMethodType

/\*\*

- Tracing mode selection: color, gray, black and white.
  \*/
  tracingMode: TracingModeType

/\*\*

- Object class identifier.
  \*/
  readonly typename: string

/\*\*

- Visualization mode setting.
  \*/
  viewMode: ViewType

/\*\*

- Loads settings from a preset.
- @param presetName Preset name.
  \*/
  loadFromPreset(presetName: string): boolean

/\*\*

- Saves settings to a kAiVectorizeSuite preset and overwrites an existing unlocked preset with the same name.
- @param presetName Preset name.
  \*/
  storeToPreset(presetName: string): boolean
  }

/\*\*

- Tracing object representation.
  \*/
  declare class TracingObject {
  /\*\*
  - Anchor count in the tracing result.
    \*/
    readonly anchorCount: number

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Path count in the tracing result.
  \*/
  readonly pathCount: number

/\*\*

- Source artwork used to create a new tracing object.
  \*/
  readonly sourceArt: PageItem

/\*\*

- Options used for tracing the artwork.
  \*/
  readonly tracingOptions: TracingOptions

/\*\*

- Object class identifier.
  \*/
  readonly typename: string

/\*\*

- Color count used in the tracing result.
  \*/
  readonly usedColorCount: number

/\*\*

- Expands tracing into paths, then removes this tracing object.
- @param viewed When true, expansion follows the current raster and vector view modes.
  \*/
  expandTracing(viewed?: boolean): GroupItem

/\*\*

- Releases the source artwork for this tracing object and deletes this tracing object.
  \*/
  releaseTracing(): PageItem
  }

/\*\*

- Artboard object representation.
  \*/
  declare class Artboard {
  /\*\*
  - Artboard size and position.
    \*/
    artboardRect: Rect

/\*\*

- Artboard name.
  \*/
  name: string

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Artboard ruler origin, measured from the Artboard's left-bottom corner.
  \*/
  rulerOrigin: Point | [number, number]

/\*\*

- Pixel aspect ratio used by ruler visualization when units are pixels.
  \*/
  rulerPAR: number

/\*\*

- Displays the center mark.
  \*/
  showCenter: boolean

/\*\*

- Displays cross hairs.
  \*/
  showCrossHairs: boolean

/\*\*

- Displays title and action safe areas (for video).
  \*/
  showSafeAreas: boolean

/\*\*

- Object class identifier.
  \*/
  readonly typename: string

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Clears every element.
  \*/
  removeAll(): void
  }

/\*\*

- Rectangle descriptor that also works as a collection with four slots.
-
- Format: left, top, right, bottom.
- Width and height can be computed using `[r[2] - r[0], r[1] - r[3]]`.
-
- **Note:** y axis is flipped. Upper means negative number, lower means positive.
- \*/
  type Rect = [number, number, number, number]
