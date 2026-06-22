# Indesign (part 60)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Settings used by an anchored object.
  \*/
  declare class AnchoredObjectSetting extends Preference {
  /\*\*
  - Point on the anchored object used for positioning.
    \*/
    anchorPoint: AnchorPoint

/\*\*

- Space placed above an above-line anchored object.
  \*/
  anchorSpaceAbove: number | string

/\*\*

- Horizontal (x) offset applied to the anchored object.
  \*/
  anchorXoffset: number | string

/\*\*

- Vertical (y) offset applied to the anchored object. For above line positioning, this maps to the space after property.
  \*/
  anchorYoffset: number | string

/\*\*

- Anchored object placement relative to its anchor.
  \*/
  anchoredPosition: AnchorPosition

/\*\*

- With anchored position set to above line, placement is measured relative to the text area. With anchored position set to custom, horizontal reference point controls horizontal alignment. Note: Not valid when anchored position is inline.
  \*/
  horizontalAlignment: HorizontalAlignment

/\*\*

- Horizontal page reference point. Valid only when anchored position is custom.
  \*/
  horizontalReferencePoint: AnchoredRelativeTo

/\*\*

- When true, manual repositioning of the anchored object is prevented.
  \*/
  lockPosition: boolean

/\*\*

- When true, the anchored object is pinned within the text frame top and bottom.
  \*/
  pinPosition: boolean

/\*\*

- When true, anchored object position is measured relative to the page or spread binding spine.
  \*/
  spineRelative: boolean

/\*\*

- Vertical alignment between the anchored object reference point and the page vertical reference point. Notes: Valid only when anchored position is custom.
  \*/
  verticalAlignment: VerticalAlignment

/\*\*

- Vertical page reference point. Use when anchored position is custom.
  \*/
  verticalReferencePoint: VerticallyRelativeTo

/\*\*

- Inserts the anchored object into the specified story.
- @param storyOffset Story location, expressed as an insertion point.
- @param anchoredPosition Anchored object position relative to the anchor.
  \*/
  insertAnchoredObject(storyOffset: InsertionPoint, anchoredPosition: AnchorPosition): void

/\*\*

- Detaches the anchored object from its associated text.
  \*/
  releaseAnchoredObject(): void
  }

/\*\*

- Options for baseline frame grids.
  \*/
  declare class BaselineFrameGridOption extends Preference {
  /\*\*
  - Grid line color, supplied either as an array of three doubles with values from 0 to 255 for R, G, and B, or as a UI color.
    \*/
    baselineFrameGridColor: [number, number, number] | UIColors

/\*\*

- Distance separating grid lines.
  \*/
  baselineFrameGridIncrement: number | string

/\*\*

- Basis location for the custom baseline grid: top of page, top margin, top of frame, or frame inset.
  \*/
  baselineFrameGridRelativeOption: BaselineFrameGridRelativeOption

/\*\*

- Offset amount applied to the baseline grid.
  \*/
  startingOffsetForBaselineFrameGrid: number | string

/\*\*

- When true, a custom baseline frame grid is used.
  \*/
  useCustomBaselineFrameGrid: boolean
  }

/\*\*

- Settings that define default footnote formatting.
  \*/
  declare class FootnoteOption extends Preference {
  /\*\*
  - Swatch (color, gradient, tint, or mixed ink) used for the rule above continued footnote text. Restriction: continuing rule on must be true.
    \*/
    continuingRuleColor: Swatch | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the stroke gap in the rule above continued footnote text. Restriction: continuing rule type must not be solid.
  \*/
  continuingRuleGapColor: Swatch | string

/\*\*

- When true, gap color overprints for the continued-footnote rule. Restriction: continuing rule type must not be solid.
  \*/
  continuingRuleGapOverprint: boolean

/\*\*

- Tint percentage for the continued-footnote rule gap color. Allowed range: 0 to 100. Restriction: continuing rule type must not be solid.
  \*/
  continuingRuleGapTint: number

/\*\*

- Left-indent amount for the continued-footnote rule. Restriction: continuing rule on must be true.
  \*/
  continuingRuleLeftIndent: number | string

/\*\*

- Stroke weight for the continued-footnote rule. Allowed range: 0 to 1000. Restriction: continuing rule on must be true.
  \*/
  continuingRuleLineWeight: number | string

/\*\*

- Vertical offset for the continued-footnote rule. Restriction: continuing rule on must be true.
  \*/
  continuingRuleOffset: number | string

/\*\*

- When true, a rule appears above footnote text continued from a previous column. Restriction: no splitting must be false or undefined.
  \*/
  continuingRuleOn: boolean

/\*\*

- When true, the rule above continued footnote text overprints. Note: Valid when continuing rule on is true.
  \*/
  continuingRuleOverprint: boolean

/\*\*

- Tint percentage for the continued-footnote rule. Allowed range: 0 to 100. Restriction: continuing rule type must not be solid.
  \*/
  continuingRuleTint: number

/\*\*

- Stroke type used by the continued-footnote rule. Restriction: continuing rule on must be true.
  \*/
  continuingRuleType: StrokeStyle | string

/\*\*

- Length of the continued-footnote rule. Restriction: continuing rule on must be true.
  \*/
  continuingRuleWidth: number | string

/\*\*

- When true, the document uses straddling footnotes. When false, straddling footnotes are not used.
  \*/
  enableStraddling: boolean

/\*\*

- When true, story-ending footnotes sit directly below the text. When false, story-ending footnotes sit at the bottom of the column.
  \*/
  eosPlacement: boolean

/\*\*

- Distance from the footnote container top to the footnote text.
  \*/
  footnoteFirstBaselineOffset: FootnoteFirstBaseline

/\*\*

- Character style applied to footnote reference numbers in main text.
  \*/
  footnoteMarkerStyle: CharacterStyle

/\*\*

- Minimum distance between the text baseline and the footnote container top.
  \*/
  footnoteMinimumFirstBaselineOffset: number | string

/\*\*

- Style used for footnote numbering.
  \*/
  footnoteNumberingStyle: FootnoteNumberingStyle | string

/\*\*

- Paragraph style applied to footnotes. Note: Paragraph-style space before and after values are ignored for footnotes. To set space above and between footnotes, see spacer and space between.
  \*/
  footnoteTextStyle: ParagraphStyle

/\*\*

- Position of footnote reference numbers in main text.
  \*/
  markerPositioning: FootnoteMarkerPositioning | string

/\*\*

- When true, footnotes are prevented from splitting across columns. When false, footnotes continue into later columns when the footnote text pushes the footnote area upward until it reaches the footnote reference number in main text.
  \*/
  noSplitting: boolean

/\*\*

- Footnote prefix text. (Limit: 0 to 100 characters)
  \*/
  prefix: string

/\*\*

- Restart point for footnote numbering.
  \*/
  restartNumbering: FootnoteRestarting | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the stroke of the first-footnote rule in the column. Restriction: rule on must be true.
  \*/
  ruleColor: Swatch | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the stroke gap of the first-footnote rule in the column. Restriction: rule type must not be solid.
  \*/
  ruleGapColor: Swatch | string

/\*\*

- When true, gap color overprints for the first-footnote rule in the column. Restriction: rule type must not be solid.
  \*/
  ruleGapOverprint: boolean

/\*\*

- Tint percentage for the first-footnote rule gap color in the column. Allowed range: 0 to 100. Restriction: rule type must not be solid.
  \*/
  ruleGapTint: number

/\*\*

- Left-indent amount for the first-footnote rule in the column. Restriction: rule on must be true.
  \*/
  ruleLeftIndent: number | string

/\*\*

- Stroke weight for the first-footnote rule in the column. Allowed range: 0 to 1000. Restriction: rule on must be true.
  \*/
  ruleLineWeight: number | string

/\*\*

- Vertical offset for the first-footnote rule in the column. Restriction: rule on must be true.
  \*/
  ruleOffset: number | string

/\*\*

- When true, a rule is drawn between the text and the first footnote in the column.
  \*/
  ruleOn: boolean

/\*\*

- When true, the rule above the first footnote in the column overprints. Note: Valid when rule on is true.
  \*/
  ruleOverprint: boolean

/\*\*

- Tint percentage for the first-footnote rule in the column. Allowed range: 0 to 100. Restriction: rule on must be true.
  \*/
  ruleTint: number

/\*\*

- Stroke type used by the first-footnote rule in a column. Restriction: rule on must be true.
  \*/
  ruleType: StrokeStyle | string

/\*\*

- Length of the first-footnote rule in the column. Restriction: rule on must be true.
  \*/
  ruleWidth: number | string

/\*\*

- Text inserted between the footnote marker number and footnote text. (Range: 0 to 100 characters)
  \*/
  separatorText: string

/\*\*

- Placement of the footnote prefix and/or suffix.
  \*/
  showPrefixSuffix: FootnotePrefixSuffix | string

/\*\*

- Vertical spacing amount between footnotes. Paragraph-style space before and space after values assigned to the footnote are ignored.
  \*/
  spaceBetween: number | string

/\*\*

- Minimum vertical spacing between the text-column bottom and the first footnote. Paragraph-style space before assigned to the footnote is ignored for the first footnote.
  \*/
  spacer: number | string

/\*\*

- Number where footnote numbering begins.
  \*/
  startAt: number

/\*\*

- Footnote suffix text. (Limit: 0 to 100 characters)
  \*/
  suffix: string
  }

/\*\*

- Preferences for a page number variable.
  \*/
  declare class PageNumberVariablePreference extends Preference {
  /\*\*
  - Variable format.
    \*/
    format: VariableNumberingStyles

/\*\*

- Scope or page range to include.
  \*/
  scope: VariableScopes

/\*\*

- Text placed after the variable value. (Limit: 128 characters)
  \*/
  textAfter: string

/\*\*

- Text placed before the variable value. (Limit: 128 characters)
  \*/
  textBefore: string
  }

/\*\*

- Preferences for a chapter number variable.
  \*/
  declare class ChapterNumberVariablePreference extends Preference {
  /\*\*
  - Variable format.
    \*/
    format: VariableNumberingStyles

/\*\*

- Text placed after the variable value. (Limit: 128 characters)
  \*/
  textAfter: string

/\*\*

- Text placed before the variable value. (Limit: 128 characters)
  \*/
  textBefore: string
  }

/\*\*

- Preferences for a date variable.
  \*/
  declare class DateVariablePreference extends Preference {
  /\*\*
  - Date format string.
    \*/
    format: string

/\*\*

- Text placed after the variable value. (Limit: 128 characters)
  \*/
  textAfter: string

/\*\*

- Text placed before the variable value. (Limit: 128 characters)
  \*/
  textBefore: string
  }

/\*\*

- Preferences for a file name variable.
  \*/
  declare class FileNameVariablePreference extends Preference {
  /\*\*
  - When true, the file extension is included.
    \*/
    includeExtension: boolean

/\*\*

- When true, the full file path is included.
  \*/
  includePath: boolean

/\*\*

- Text placed after the variable value. (Limit: 128 characters)
  \*/
  textAfter: string

/\*\*

- Text placed before the variable value. (Limit: 128 characters)
  \*/
  textBefore: string
  }

/\*\*

- Preferences for a running header/footer variable that matches character style.
  \*/
  declare class MatchCharacterStylePreference extends Preference {
  /\*\*
  - Character style assigned to the text.
    \*/
    appliedCharacterStyle: CharacterStyle | string

/\*\*

- Case applied to the matched text.
  \*/
  changeCase: ChangeCaseOptions

/\*\*

- When true, end punctuation is removed from the matched text.
  \*/
  deleteEndPunctuation: boolean

/\*\*

- Start point and direction used for the search.
  \*/
  searchStrategy: SearchStrategies

/\*\*

- Text placed after the variable value. (Limit: 128 characters)
  \*/
  textAfter: string

/\*\*

- Text placed before the variable value. (Limit: 128 characters)
  \*/
  textBefore: string
  }

/\*\*

- Preferences for a running header/footer variable that matches paragraph style.
  \*/
  declare class MatchParagraphStylePreference extends Preference {
  /\*\*
  - Paragraph style assigned to the text.
    \*/
    appliedParagraphStyle: ParagraphStyle | string

/\*\*

- Case applied to the matched text.
  \*/
  changeCase: ChangeCaseOptions

/\*\*

- When true, end punctuation is removed from the matched text.
  \*/
  deleteEndPunctuation: boolean

/\*\*

- Start point and direction used for the search.
  \*/
  searchStrategy: SearchStrategies

/\*\*

- Text placed after the variable value. (Limit: 128 characters)
  \*/
  textAfter: string

/\*\*

- Text placed before the variable value. (Limit: 128 characters)
  \*/
  textBefore: string
  }

/\*\*

- Preferences for a custom text variable.
  \*/
  declare class CustomTextVariablePreference extends Preference {
  /\*\*
  - Text contents.
    \*/
    contents: string | SpecialCharacters
    }

/\*\*

- Preferences for a caption metadata variable.
  \*/
  declare class CaptionMetadataVariablePreference extends Preference {
  /\*\*
  - Metadata provider name.
    \*/
    metadataProviderName: string

/\*\*

- Text placed after the variable value. (Limit: 128 characters)
  \*/
  textAfter: string

/\*\*

- Text placed before the variable value. (Limit: 128 characters)
  \*/
  textBefore: string
  }

/\*\*

- Grid default settings. Scope: named, layout, and frame (story) grids.
  \*/
  declare class GridDataInformation extends Preference {
  /\*\*
  - Font assigned to the GridDataInformation, supplied as a font object or font-family name.
    \*/
    appliedFont: Font | string

/\*\*

- White-space amount between characters.
  \*/
  characterAki: number

/\*\*

- Alignment of small characters against the largest character in the line.
  \*/
  characterAlignment: CharacterAlignment

/\*\*

- Character count location. Restriction: show character count must be true.
  \*/
  characterCountLocation: CharacterCountLocation

/\*\*

- Character size used for the character count display.
  \*/
  characterCountSize: number

/\*\*

- Font style name.
  \*/
  fontStyle: string

/\*\*

- Alignment target for the frame grid or baseline grid.
  \*/
  gridAlignment: GridAlignment

/\*\*

- Grid view setting.
  \*/
  gridView: GridViewSettings

/\*\*

- Horizontal scaling assigned to the GridDataInformation.
  \*/
  horizontalScale: number

/\*\*

- White-space amount between lines.
  \*/
  lineAki: number

/\*\*

- Line justification setting.
  \*/
  lineAlignment: LineAlignment

/\*\*

- Text size.
  \*/
  pointSize: number | string

/\*\*

- Vertical scaling assigned to the GridDataInformation.
  \*/
  verticalScale: number
  }

/\*\*

- Default settings specific to layout grids.
  \*/
  declare class LayoutGridDataInformation extends Preference {
  /\*\*
  - Font assigned to the LayoutGridDataInformation, supplied as a font object or font-family name.
    \*/
    appliedFont: Font | string

/\*\*

- White-space amount between characters.
  \*/
  characterAki: number

/\*\*

- Font style name.
  \*/
  fontStyle: string

/\*\*

- Horizontal scaling assigned to the LayoutGridDataInformation.
  \*/
  horizontalScale: number

/\*\*

- White-space amount between lines.
  \*/
  lineAki: number

/\*\*

- Text size.
  \*/
  pointSize: number | string

/\*\*

- Vertical scaling assigned to the LayoutGridDataInformation.
  \*/
  verticalScale: number
  }

/\*\*

- Default settings specific to frame grids.
  \*/
  declare class StoryGridDataInformation extends Preference {
  /\*\*
  - Font assigned to the StoryGridDataInformation, supplied as a font object or font-family name.
    \*/
    appliedFont: Font | string

/\*\*

- White-space amount between characters.
  \*/
  characterAki: number

/\*\*

- Alignment of small characters against the largest character in the line.
  \*/
  characterAlignment: CharacterAlignment

/\*\*

- Character count location. Restriction: show character count must be true.
  \*/
  characterCountLocation: CharacterCountLocation

/\*\*

- Character size used for the character count display.
  \*/
  characterCountSize: number

/\*\*

- Font style name.
  \*/
  fontStyle: string

/\*\*

- Alignment target for the frame grid or baseline grid.
  \*/
  gridAlignment: GridAlignment

/\*\*

- Grid view setting.
  \*/
  gridView: GridViewSettings

/\*\*

- Horizontal scaling assigned to the StoryGridDataInformation.
  \*/
  horizontalScale: number

/\*\*

- White-space amount between lines.
  \*/
  lineAki: number

/\*\*

- Line justification setting.
  \*/
  lineAlignment: LineAlignment

/\*\*

- Text size.
  \*/
  pointSize: number | string

/\*\*

- Vertical scaling assigned to the StoryGridDataInformation.
  \*/
  verticalScale: number
  }

/\*\*

- Preferences for character grids.
  \*/
  declare class CjkGridPreference extends Preference {
  /\*\*
  - Applies grid color to every nth cell, with n provided by this property.
    \*/
    colorEveryNthCell: number

/\*\*

- When true, grid cells use ICF mode. When false, virtual body mode is used.
  \*/
  icfMode: boolean

/\*\*

- Layout grid color, supplied either as an array of three doubles with values from 0 to 255 for R, G, and B, or as a UI color.
  \*/
  layoutGridColorIndex: [number, number, number] | UIColors

/\*\*

- View magnification percentage below which grids are hidden. (Range: 5 to 4000)
  \*/
  minimumScale: number

/\*\*

- When true, frame (story) grids are shown.
  \*/
  showAllFrameGrids: boolean

/\*\*

- When true, layout grids are shown.
  \*/
  showAllLayoutGrids: boolean

/\*\*

- When true, the frame shows its character total.
  \*/
  showCharacterCount: boolean

/\*\*

- True starts grid coloring from the line edge; false starts it from the frame corner.
  \*/
  singleLineColorMode: boolean

/\*\*

- With this enabled, objects align by snapping onto the layout grid.
  \*/
  snapToLayoutGrid: boolean

/\*\*

- True selects circular cells; false uses rectangular cells instead.
  \*/
  useCircularCells: boolean
  }

/\*\*

- Controls used when grids are printed or exported.
  \*/
  declare class GridPrintingPreference extends Preference {
  /\*\*
  - When enabled, printed or exported output includes frame (story) grids.
    \*/
    frameGridPrinting: boolean

/\*\*

- Stroke weight, in points, used for the frame grid.
  \*/
  frameGridStrokeWeight: number

/\*\*

- When enabled, printed or exported output includes layout grids.
  \*/
  layoutGridPrinting: boolean

/\*\*

- Stroke weight, in points, used for the layout grid.
  \*/
  layoutGridStrokeWeight: number

/\*\*

- When enabled, printed or exported output includes page items other than text, frame grids, and layout grids. For text and grid output details, see text printing, frame grid printing, and layout grid printing.
  \*/
  pageItemPrinting: boolean

/\*\*

- When enabled, the printed or exported document includes text.
  \*/
  textPrinting: boolean
  }

/\*\*

- Preference set for galley display.
  \*/
  declare class GalleyPreference extends Preference {
  /\*\*
  - Text anti-aliasing mode used in story and galley views.
    \*/
    antiAliasType: AntiAliasType

/\*\*

- Background color: either an InCopy UI color or an array of three doubles for R, G, and B, each 0 to 255. .
  \*/
  backgroundColor: [number, number, number] | InCopyUIColors

/\*\*

- When true, the cursor uses blinking.
  \*/
  blinkCursor: boolean

/\*\*

- Cursor style used by galley and story views.
  \*/
  cursorType: CursorTypes

/\*\*

- Font family name used when displaying text.
  \*/
  displayFont: string

/\*\*

- Text display size value.
  \*/
  displayFontSize: number | string

/\*\*

- Width of the Info column.
  \*/
  infoColumnWidth: number | string

/\*\*

- Spacing amount used between text lines.
  \*/
  lineSpacingValue: LineSpacingType

/\*\*

- When true, the depth ruler is shown.
  \*/
  showDepthRuler: boolean

/\*\*

- When true, the Info column is visible.
  \*/
  showInfoColumn: boolean

/\*\*

- When true, paragraph break marks are shown.
  \*/
  showParagraphBreakMarks: boolean

/\*\*

- When true, paragraph style names are shown.
  \*/
  showParagraphStyleNames: boolean

/\*\*

- When true, galley text renders with anti-aliasing.
  \*/
  smoothText: boolean

/\*\*

- Text color: either an InCopy UI color or an array of three doubles for R, G, and B, each 0 to 255.
  \*/
  textColor: [number, number, number] | InCopyUIColors
  }

/\*\*

- Preset object holding transparency flattener settings.
  \*/
  declare class FlattenerPreset {
  /\*\*
  - When true, boundaries between vector artwork and rasterized artwork are forced onto object paths.
    \*/
    clipComplexRegions: boolean

/\*\*

- When true, every stroke is converted to an outline, keeping stroke widths unchanged through flattening. Note: thin strokes can look slightly heavier than the original. This applies to all strokes, not just transparency-related strokes.
  \*/
  convertAllStrokesToOutlines: boolean

/\*\*

- When true, text on spreads with transparency becomes outlines and type glyph data is discarded, preserving text stroke width during flattening. Note: small fonts can appear slightly heavier in Acrobat or on low-quality desktop printers, while high-resolution printers or imagesetters keep type quality unaffected.
  \*/
  convertAllTextToOutlines: boolean

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Resolution for gradients rasterized by flattening and for printed or exported drop shadows and feathers. (Range: 0 to 1200) Note: Values above 300 ppi usually add file size and printing time without improving image quality.
  \*/
  gradientAndMeshResolution: number

/\*\*

- Unique ID assigned to the FlattenerPreset.
  \*/
  readonly id: number

/\*\*

- Position of the FlattenerPreset inside its containing object.
  \*/
  readonly index: number

/\*\*

- True indicates that the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean
