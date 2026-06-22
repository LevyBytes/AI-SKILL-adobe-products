# Indesign (part 50)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Underline color for misspelled words, given as a UI color or as a three-double R, G, and B array whose values run from 0 to 255. Note: Requires dynamic spell check and check misspelled words to both be true.
  \*/
  misspelledWordColor: [number, number, number] | UIColors

/\*\*

- Underline color for repeated words, supplied as a UI color or as a three-double R, G, and B array whose values run from 0 to 255. Note: Requires dynamic spell check and check repeated words to both be true.
  \*/
  repeatedWordColor: [number, number, number] | UIColors

/\*\*

- Underline color for sentence-opening words that do not start with a capital letter, supplied as a UI color or as a three-double R, G, and B array whose values run from 0 to 255. Note: Requires dynamic spell check and check capitalized sentences to both be true.
  \*/
  uncapitalizedSentenceColor: [number, number, number] | UIColors

/\*\*

- Underline color for uncapitalized proper nouns, supplied as a UI color or as a three-double R, G, and B array whose values run from 0 to 255. Note: Requires dynamic spell check and check capitalized words to both be true.
  \*/
  uncapitalizedWordColor: [number, number, number] | UIColors
  }

/\*\*

- Auto-correct configuration.
  \*/
  declare class AutoCorrectPreference extends Preference {
  /\*\*
  - When true, misspelled words found in the auto-correct table are corrected automatically.
    \*/
    autoCorrect: boolean

/\*\*

- When true, capitalization errors found in the auto-correct table are corrected automatically.
  \*/
  autoCorrectCapitalizationErrors: boolean
  }

/\*\*

- Smart Guide configuration.
  \*/
  declare class SmartGuidePreference extends Preference {
  /\*\*
  - When true, smart alignment can snap to object centers.
    \*/
    alignToObjectCenter: boolean

/\*\*

- When true, smart alignment can snap to object edges.
  \*/
  alignToObjectEdges: boolean

/\*\*

- When true, smart guides are turned on.
  \*/
  enabled: boolean

/\*\*

- Guide color, provided as a UI color or as a three-double R, G, and B array with values from 0 to 255.
  \*/
  guideColor: [number, number, number] | UIColors

/\*\*

- When true, smart dimensions guides are active.
  \*/
  smartDimensions: boolean

/\*\*

- When true, smart spacing guides are active.
  \*/
  smartSpacing: boolean
  }

/\*\*

- Preferences for EPS import.
  \*/
  declare class EPSImportPreference extends Preference {
  /\*\*
  - When true, clipping paths stored in the EPS file are applied.
    \*/
    epsFrames: boolean

/\*\*

- Specifies when preview images are created.
  \*/
  epsProxy: CreateProxy

/\*\*

- When true, OPI image links in the imported EPS file are read. When false, OPI links remain preserved but are not read.
  \*/
  opiComments: boolean
  }

/\*\*

- Attribute for a placed InDesign page.
  \*/
  declare class ImportedPageAttribute extends Preference {
  /\*\*
  - Cropping option for the imported InDesign page. Read only for page items.
    \*/
    importedPageCrop: ImportedPageCropOptions

/\*\*

- Page of the InDesign document to import. Read only for page items.
  \*/
  pageNumber: number
  }

/\*\*

- Stroke/fill proxy configuration.
  \*/
  declare class StrokeFillProxySetting extends Preference {
  /\*\*
  - Currently active part of the stroke/fill proxy.
    \*/
    active: StrokeFillProxyOptions

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the StrokeFillProxySetting fill.
  \*/
  fillColor: Swatch | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the StrokeFillProxySetting stroke.
  \*/
  strokeColor: Swatch | string

/\*\*

- Target affected by stroke/fill proxy changes.
  \*/
  target: StrokeFillTargetOptions
  }

/\*\*

- Adjust layout configuration.
  \*/
  declare class AdjustLayoutPreference extends Preference {
  /\*\*
  - When true, font sizes and leading may adjust.
    \*/
    allowFontSizeAndLeadingAdjustment: boolean

/\*\*

- When true, locked objects or items on locked layers may be adjusted.
  \*/
  allowLockedObjectsToAdjust: boolean

/\*\*

- When true, adjust layout is turned on.
  \*/
  enableAdjustLayout: boolean

/\*\*

- When true, margins adjust automatically after page size changes.
  \*/
  enableAutoAdjustMargins: boolean

/\*\*

- When true, the font size restriction is imposed during adjustment.
  \*/
  imposeFontSizeRestriction: boolean

/\*\*

- Maximum font size, in points, after adjustment.
  \*/
  maximumFontSize: number

/\*\*

- Minimum font size, in points, after adjustment.
  \*/
  minimumFontSize: number
  }

/\*\*

- Preference object.
  \*/
  declare class Preference {
  /\*\*
  - Event listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Preference parent; possible parent classes include Application, Document, Book, DataMerge, XmlStory, Spread, FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting, FindChangeContentTransparencySetting, HtmlItem, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, FormField, Sound, Movie, MediaItem, EPSText, Polygon, GraphicLine, Rectangle, Oval, SplineItem, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Graphic, Group, EndnoteTextFrame, TextFrame, PageItem, PageItemDefault, TransparencySetting, StrokeTransparencySetting, FillTransparencySetting, ContentTransparencySetting, FindObjectPreference, ChangeObjectPreference, Story, TextVariable, TextWrapPreference, Page, Link, ObjectStyle, MasterSpread, NamedGrid, TextDefault, ParagraphStyle, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Text, FindTextPreference, ChangeTextPreference, FindGrepPreference, ChangeGrepPreference, FindTransliteratePreference or ChangeTransliteratePreference.
  \*/
  readonly parent: any

/\*\*

- Property used to set multiple properties together.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): Preference[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds a string that returns the Preference if executed.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection of Preference objects.
  \*/
  declare class Preferences {
  /\*\*
  - Number of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Preference at the specified index.
- @param index Index.
  \*/
  [index: number]: Preference

/\*\*

- Gets any Preference from the collection.
  \*/
  anyItem(): Preference

/\*\*

- Shows the element count in the Preference.
  \*/
  count(): number

/\*\*

- Gets every Preference from the collection.
  \*/
  everyItem(): Preference[]

/\*\*

- Gets the first Preference in the collection.
  \*/
  firstItem(): Preference

/\*\*

- Gets the Preference at the specified index or name.
- @param index Index or name.
  \*/
  item(index: number | string): Preference

/\*\*

- Gets Preferences within the specified range.
- @param from Preference, index, or name at the start of the range.
- @param to Ending Preference, index, or name for the range.
  \*/
  itemByRange(from: Preference | number | string, to: Preference | number | string): Preference[]

/\*\*

- Gets the last Preference in the collection.
  \*/
  lastItem(): Preference

/\*\*

- Gets the middle Preference in the collection.
  \*/
  middleItem(): Preference

/\*\*

- Gets the collection Preference positioned after the specified Preference.
- @param obj Preference whose index comes before the requested Preference.
  \*/
  nextItem(obj: Preference): Preference

/\*\*

- Gets the Preference with the index before the specified index.
- @param obj Index of the Preference that follows the requested Preference.
  \*/
  previousItem(obj: Preference): Preference

/\*\*

- Builds a string that returns the Preference if executed.
  \*/
  toSource(): string
  }

/\*\*

- Preferences for the scripting environment.
  \*/
  declare class ScriptPreference extends Preference {
  /\*\*
  - When true, redraw is enabled while a script runs.
    \*/
    enableRedraw: boolean

/\*\*

- Measurement unit used during script processing.
  \*/
  measurementUnit: AutoEnum | MeasurementUnits

/\*\*

- Path to the application's Scripts folder.
  \*/
  readonly scriptsFolder: File

/\*\*

- Entries from the Scripts folder. Return form can be Array of Array of 2 Strings or Files.
  \*/
  readonly scriptsList: any[]

/\*\*

- Controls whether dialogs and alerts appear during script processing.
  \*/
  userInteractionLevel: UserInteractionLevels

/\*\*

- Version of the scripting environment.
  \*/
  version: string | number
  }

/\*\*

- Color management configuration.
  \*/
  declare class ColorSetting extends Preference {
  /\*\*
  - When true, LAB alternates are used for spot colors where available.
    \*/
    accurateLABSpots: boolean

/\*\*

- Current color management system settings configuration. Note: For details about possible values, see CMS settings list.
  \*/
  cmsSettings: string

/\*\*

- Valid color management system settings configurations.
  \*/
  readonly cmsSettingsList: string[]

/\*\*

- CSF file path to use.
  \*/
  cmsSettingsPath: File

/\*\*

- Policy for CMYK color handling, including color profile reading and embedding, mismatch resolution between embedded profiles and the working space, and document-to-document color movement.
  \*/
  cmykPolicy: ColorSettingsPolicy

/\*\*

- When true, color management is enabled.
  \*/
  enableColorManagement: boolean

/\*\*

- Color management module (CMM) used to map color space gamuts between documents.
  \*/
  engine: string

/\*\*

- Available color engines.
  \*/
  readonly engineList: string[]

/\*\*

- When true, idealized black is used for CMYK-to-RGB or CMYK-to-Gray conversions during print or export.
  \*/
  idealizedBlackToExport: boolean

/\*\*

- When true, idealized black is used for CMYK-to-RGB or CMYK-to-Gray screen conversions.
  \*/
  idealizedBlackToScreen: boolean

/\*\*

- Default rendering intent.
  \*/
  intent: DefaultRenderingIntent

/\*\*

- When true, opening a file with an embedded color profile different from the current working space prompts the user. The prompt offers a way to override the default mismatch behavior.
  \*/
  mismatchAskWhenOpening: boolean

/\*\*

- When true, the user is prompted if an imported object (via pasting, drag-and-drop, or other similar methods) has colors outside the current working space. The prompt offers a way to override the default mismatch behavior.
  \*/
  mismatchAskWhenPasting: boolean

/\*\*

- When true, opening a file without an embedded color profile prompts the user. The prompt offers a way to assign a color profile.
  \*/
  missingAskWhenOpening: boolean

/\*\*

- Policy for RGB color handling, including color profile reading and embedding, embedded-profile mismatches against the working space, and color movement from one document to another.
  \*/
  rgbPolicy: ColorSettingsPolicy

/\*\*

- When true, black point compensation preserves shadow detail by simulating the output device's full dynamic range.
  \*/
  useBPC: boolean

/\*\*

- Current CMYK profile.
  \*/
  workingSpaceCMYK: string

/\*\*

- Valid CMYK color profiles.
  \*/
  readonly workingSpaceCMYKList: string[]

/\*\*

- Current RGB profile.
  \*/
  workingSpaceRGB: string

/\*\*

- Valid RGB color profiles.
  \*/
  readonly workingSpaceRGBList: string[]
  }

/\*\*

- Options for find/change text.
  \*/
  declare class FindChangeTextOption extends Preference {
  /\*\*
  - When true, matching requires the same case usage as the find text string. When false, strings match the find text string without regard to case.
    \*/
    caseSensitive: boolean

/\*\*

- When true, diacs are ignored in the find/change query.
  \*/
  ignoreDiacritics: boolean

/\*\*

- When true, kashidas are ignored in the find/change query.
  \*/
  ignoreKashidas: boolean

/\*\*

- When true, footnotes participate in the find/change query.
  \*/
  includeFootnotes: boolean

/\*\*

- When true, hidden layers participate in the find/change query.
  \*/
  includeHiddenLayers: boolean

/\*\*

- When true, locked layers participate in the find query.
  \*/
  includeLockedLayersForFind: boolean

/\*\*

- When true, locked stories participate in the find query.
  \*/
  includeLockedStoriesForFind: boolean

/\*\*

- When true, master pages participate in the find/change query.
  \*/
  includeMasterPages: boolean

/\*\*

- When true, only text with the specified kana type is found.
  \*/
  kanaSensitive: boolean

/\*\*

- When true, searching proceeds backward.
  \*/
  searchBackwards: boolean

/\*\*

- When true, only the complete find text string is found. When false, strings containing that find text string are found too.
  \*/
  wholeWord: boolean

/\*\*

- When true, only text matching the specified character width is found.
  \*/
  widthSensitive: boolean
  }

/\*\*

- Options for find/change grep.
  \*/
  declare class FindChangeGrepOption extends Preference {
  /\*\*
  - When true, footnotes participate in the find/change query.
    \*/
    includeFootnotes: boolean

/\*\*

- When true, hidden layers participate in the find/change query.
  \*/
  includeHiddenLayers: boolean

/\*\*

- When true, locked layers participate in the find query.
  \*/
  includeLockedLayersForFind: boolean

/\*\*

- When true, locked stories participate in the find query.
  \*/
  includeLockedStoriesForFind: boolean

/\*\*

- When true, master pages participate in the find/change query.
  \*/
  includeMasterPages: boolean

/\*\*

- When true, only text with the specified kana type is found.
  \*/
  kanaSensitive: boolean

/\*\*

- When true, searching proceeds backward.
  \*/
  searchBackwards: boolean

/\*\*

- When true, only text matching the specified character width is found.
  \*/
  widthSensitive: boolean
  }

/\*\*

- Options for find/change glyph.
  \*/
  declare class FindChangeGlyphOption extends Preference {
  /\*\*
  - When true, footnotes participate in the find/change query.
    \*/
    includeFootnotes: boolean

/\*\*

- When true, hidden layers participate in the find/change query.
  \*/
  includeHiddenLayers: boolean

/\*\*

- When true, locked layers participate in the find query.
  \*/
  includeLockedLayersForFind: boolean

/\*\*

- When true, locked stories participate in the find query.
  \*/
  includeLockedStoriesForFind: boolean

/\*\*

- When true, master pages participate in the find/change query.
  \*/
  includeMasterPages: boolean

/\*\*

- When true, searching proceeds backward.
  \*/
  searchBackwards: boolean
  }

/\*\*

- Options for find/change object.
  \*/
  declare class FindChangeObjectOption extends Preference {
  /\*\*
  - When true, footnotes participate in the find/change query.
    \*/
    includeFootnotes: boolean

/\*\*

- When true, hidden layers participate in the find/change query.
  \*/
  includeHiddenLayers: boolean

/\*\*

- When true, locked layers participate in the find query.
  \*/
  includeLockedLayersForFind: boolean

/\*\*

- When true, locked stories participate in the find query.
  \*/
  includeLockedStoriesForFind: boolean

/\*\*

- When true, master pages participate in the find/change query.
  \*/
  includeMasterPages: boolean

/\*\*

- Object type.
  \*/
  objectType: ObjectTypes
  }

/\*\*

- Options for find/change transliterate.
  \*/
  declare class FindChangeTransliterateOption extends Preference {
  /\*\*
  - When true, matching requires the same case usage as the find text string. When false, strings match the find text string without regard to case.
    \*/
    caseSensitive: boolean

/\*\*

- When true, footnotes participate in the find/change query.
  \*/
  includeFootnotes: boolean

/\*\*

- When true, hidden layers participate in the find/change query.
  \*/
  includeHiddenLayers: boolean

/\*\*

- When true, locked layers participate in the find query.
  \*/
  includeLockedLayersForFind: boolean

/\*\*

- When true, locked stories participate in the find query.
  \*/
  includeLockedStoriesForFind: boolean

/\*\*

- When true, master pages participate in the find/change query.
  \*/
  includeMasterPages: boolean

/\*\*

- When true, only text with the specified kana type is found.
  \*/
  kanaSensitive: boolean

/\*\*

- When true, searching proceeds backward.
  \*/
  searchBackwards: boolean

/\*\*

- When true, only the complete find text string is found. When false, strings containing that find text string are found too.
  \*/
  wholeWord: boolean

/\*\*

- When true, only text matching the specified character width is found.
  \*/
  widthSensitive: boolean
  }

/\*\*

- Preferences for finding text.
  \*/
  declare class FindTextPreference extends Preference {
  /\*\*
  - When true, words not tied to a hyphenation dictionary may break to the next line at any character.
    \*/
    allowArbitraryHyphenation: boolean | NothingEnum

/\*\*

- Character style to find or replace with.
  \*/
  appliedCharacterStyle: string | NothingEnum | CharacterStyle

/\*\*

- Conditions to find or replace with. For "Any", use the "nothing" enum; for "[Unconditional]", use an empty list.
  \*/
  appliedConditions: string[] | NothingEnum | Condition[]

/\*\*

- Font on the FindTextPreference, given as either a font object or the font family name.
  \*/
  appliedFont: Font | string | NothingEnum

/\*\*

- Language to find or replace with.
  \*/
  appliedLanguage: string | NothingEnum | Language | LanguageWithVendors

/\*\*

- List that this should belong to.
  \*/
  appliedNumberingList: NumberingList | string | NothingEnum

/\*\*

- Paragraph style to find or replace with.
  \*/
  appliedParagraphStyle: string | NothingEnum | ParagraphStyle

/\*\*

- Type-size percentage used for auto leading. (Range: 0 to 500).
  \*/
  autoLeading: number | NothingEnum

/\*\*

- Half-width character count at or below which characters automatically run horizontally in vertical text.
  \*/
  autoTcy: number | NothingEnum

/\*\*

- When true, auto tcy includes Roman characters.
  \*/
  autoTcyIncludeRoman: boolean | NothingEnum

/\*\*

- When true or set to an enumeration value, ragged lines are balanced. Note: A single-line text composer does not support this.
  \*/
  balanceRaggedLines: boolean | BalanceLinesStyle | NothingEnum

/\*\*

- Baseline offset amount.
  \*/
  baselineShift: number | NothingEnum

/\*\*

- Bullet glyph.
  \*/
  readonly bulletChar: Bullet | NothingEnum

/\*\*

- Bullets and numbering list category.
  \*/
  bulletsAndNumberingListType: ListType | NothingEnum

/\*\*

- Character style used for the text after string.
  \*/
  bulletsCharacterStyle: CharacterStyle | string | NothingEnum

/\*\*

- Text after string expression used for bullets.
  \*/
  bulletsTextAfter: string | NothingEnum

/\*\*

- When true, the selected kinsoku set receives the double period (..), ellipse (...), and double hyphen (--). Note: Requires an active kinsoku set.
  \*/
  bunriKinshi: boolean | NothingEnum

/\*\*

- Capitalization scheme.
  \*/
  capitalization: Capitalization | NothingEnum

/\*\*

- Alignment of small characters against the largest character in the line.
  \*/
  characterAlignment: CharacterAlignment | NothingEnum

/\*\*

- Character direction.
  \*/
  characterDirection: CharacterDirectionOptions | NothingEnum

/\*\*

- Rotation angle for individual characters, in degrees. Note: The rotation is counterclockwise.
  \*/
  characterRotation: number | NothingEnum

/\*\*

- When true, grid tracking tracks non-Roman characters in CJK grids.
  \*/
  cjkGridTracking: boolean | NothingEnum

/\*\*

- Text composer used to compose the text.
  \*/
  composer: string | NothingEnum

/\*\*

- Design Axes value.
  \*/
  designAxes: number[] | NothingEnum

/\*\*

- Diacriticical character position.
  \*/
  diacriticPosition: DiacriticPositionOptions | NothingEnum

/\*\*

- Digits type.
  \*/
  digitsType: DigitsTypeOptions | NothingEnum

/\*\*

- Number of characters included in the drop cap.
  \*/
  dropCapCharacters: number | NothingEnum

/\*\*

- Number of lines included in the drop cap.
  \*/
  dropCapLines: number | NothingEnum

/\*\*

- Glyph-outline drop cap details: 1 = left side bearing. 2 = descenders. Japanese frame grid flags are 0x100,0x200,0x400.
  \*/
  dropcapDetail: number | NothingEnum

/\*\*

- Stroke join type used on the text characters.
  \*/
  endJoin: OutlineJoin | NothingEnum

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used as the fill color to find or replace with.
  \*/
  fillColor: string | NothingEnum | Swatch

/\*\*

- Tint percentage for the FindTextPreference fill color. (Use a number from 0 to 100 for an explicit tint percentage; use -1 for the inherited or overridden value.).
  \*/
  fillTint: number | NothingEnum

/\*\*

- FindTextPreference target to find.
  \*/
  findWhat: string | NothingEnum

/\*\*

- First-line indent amount.
  \*/
  firstLineIndent: number | NothingEnum

/\*\*

- Font style name.
  \*/
  fontStyle: string | NothingEnum

/\*\*

- Glyph variant used in place of standard glyphs.
  \*/
  glyphForm: AlternateGlyphForms | NothingEnum

/\*\*

- Angle for a linear gradient applied to the text fill. (Range: -180 to 180).
  \*/
  gradientFillAngle: number | NothingEnum

/\*\*

- Text fill gradient measure: length for linear gradients, radius for radial gradients.
  \*/
  gradientFillLength: number | NothingEnum

/\*\*

- Starting point in page coordinates for a gradient applied to the text fill, using format [x, y].
  \*/
  gradientFillStart: [number | string, number | string] | NothingEnum

/\*\*

- Angle for a linear gradient applied to the text stroke. (Range: -180 to 180).
  \*/
  gradientStrokeAngle: number | NothingEnum

/\*\*

- Text stroke gradient measure: length for linear gradients, radius for radial gradients.
  \*/
  gradientStrokeLength: number | NothingEnum

/\*\*

- Starting point in page coordinates for a gradient applied to the text stroke, using format [x, y].
  \*/
  gradientStrokeStart: [number | string, number | string] | NothingEnum

/\*\*

- Alignment to the frame grid or baseline grid.
  \*/
  gridAlignment: GridAlignment | NothingEnum

/\*\*

- Manual gyoudori setting.
  \*/
  gridGyoudori: number | NothingEnum

/\*\*

- Horizontal scaling applied to the FindTextPreference.
  \*/
  horizontalScale: number | NothingEnum

/\*\*

- When true, the final word in a text column may be hyphenated.
  \*/
  hyphenateAcrossColumns: boolean | NothingEnum

/\*\*

- When true, hyphenation is allowed in the final word of a paragraph. Note: Valid only when hyphenation is true.
  \*/
  hyphenateLastWord: boolean | NothingEnum

/\*\*

- When true, the paragraph ignores optical edge alignment.
  \*/
  ignoreEdgeAlignment: boolean | NothingEnum

/\*\*

- Number of grid squares used to arrange the text.
  \*/
  jidori: number | NothingEnum

/\*\*

- Paragraph alignment.
  \*/
  justification: Justification | NothingEnum
