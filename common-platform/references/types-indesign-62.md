# Indesign (part 62)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Satin effect color. Use an array of color values, a hex value, a color library color, or a swatch such as color, gradient, tint, or mixed ink. Interpret array entries by color mode: RGB uses [R,G,B] with 3 entries from 0 to 255; CMYK uses [C,M,Y,K] with 4 percentage entries from 0 to 100; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127; HSB uses [H,S,B], where H is 0 to 360 and S and B are percentages from 0 to 100.
  \*/
  effectColor: Swatch

/\*\*

- When true, the satin effect is inverted.
  \*/
  invertEffect: boolean

/\*\*

- Satin effect opacity, expressed as a percentage. (Range: 0 to 100)
  \*/
  opacity: number

/\*\*

- Satin effect width, in pixels.
  \*/
  size: number | string
  }

/\*\*

- Transparency settings applied to the parent object's content.
  \*/
  declare class ContentTransparencySetting extends Preference {
  /\*\*
  - Settings that control the bevel and emboss effect.
    \*/
    readonly bevelAndEmbossSettings: BevelAndEmbossSetting

/\*\*

- Settings that control blending mode behavior.
  \*/
  readonly blendingSettings: BlendingSetting

/\*\*

- Settings that control the directional feather effect.
  \*/
  readonly directionalFeatherSettings: DirectionalFeatherSetting

/\*\*

- Settings that control the drop shadow effect.
  \*/
  readonly dropShadowSettings: DropShadowSetting

/\*\*

- Settings that control the feather effect.
  \*/
  readonly featherSettings: FeatherSetting

/\*\*

- Settings that control the gradient feather effect.
  \*/
  readonly gradientFeatherSettings: GradientFeatherSetting

/\*\*

- Settings that control the inner glow effect.
  \*/
  readonly innerGlowSettings: InnerGlowSetting

/\*\*

- Settings that control the inner shadow effect.
  \*/
  readonly innerShadowSettings: InnerShadowSetting

/\*\*

- Settings that control the outer glow effect.
  \*/
  readonly outerGlowSettings: OuterGlowSetting

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Settings that control the satin effect
  \*/
  readonly satinSettings: SatinSetting
  }

/\*\*

- Settings for directional feather effects.
  \*/
  declare class DirectionalFeatherSetting extends Preference {
  /\*\*
  - Feather angle. (Range: 180 to -180)
    \*/
    angle: number

/\*\*

- When true, the directional feather effect is active.
  \*/
  applied: boolean

/\*\*

- Bottom-side feather width for the object DirectionalFeatherSetting, in pixels. (Range: .2 to 250)
  \*/
  bottomWidth: number | string

/\*\*

- Amount used to choke the directional feather, as a percentage of feather width. (Range: 0 to 100)
  \*/
  chokeAmount: number

/\*\*

- Shape-following algorithm used by the feather.
  \*/
  followShapeMode: FollowShapeModeOptions

/\*\*

- Left-side feather width for the DirectionalFeatherSetting, in pixels.
  \*/
  leftWidth: number | string

/\*\*

- Noise applied to the feather region, as a percentage. (Range: 0 to 100)
  \*/
  noise: number

/\*\*

- Right-side feather width for the DirectionalFeatherSetting, in pixels. (Range: .2 to 250)
  \*/
  rightWidth: number | string

/\*\*

- Top-side feather width for the object DirectionalFeatherSetting, in pixels. (Range: .2 to 250)
  \*/
  topWidth: number | string
  }

/\*\*

- Settings for gradient feather effects.
  \*/
  declare class GradientFeatherSetting extends Preference {
  /\*\*
  - Gradient feather angle.
    \*/
    angle: number

/\*\*

- When true, the gradient feather effect is active.
  \*/
  applied: boolean

/\*\*

- For the fill, page-coordinate [x, y] location used as the radial-gradient center or the linear-gradient start point.
  \*/
  gradientStart: (number | string)[]

/\*\*

- Hilite angle for the radial gradient feather.
  \*/
  hiliteAngle: number

/\*\*

- Hilite length for the radial gradient feather.
  \*/
  hiliteLength: number | string

/\*\*

- Axial gradient length, or radial gradient radius.
  \*/
  length: number | string

/\*\*

- Collection containing opacity gradient stops.
  \*/
  readonly opacityGradientStops: OpacityGradientStops

/\*\*

- Gradient type.
  \*/
  type: GradientType
  }

/\*\*

- Transparency-related settings.
  \*/
  declare class FindChangeTransparencySetting extends Preference {
  /\*\*
  - Settings that control the bevel and emboss effect.
    \*/
    readonly bevelAndEmbossSettings: FindChangeBevelAndEmbossSetting

/\*\*

- Settings that control blending mode behavior.
  \*/
  readonly blendingSettings: FindChangeBlendingSetting

/\*\*

- Settings that control the directional feather effect.
  \*/
  readonly directionalFeatherSettings: FindChangeDirectionalFeatherSetting

/\*\*

- Settings that control the drop shadow effect.
  \*/
  readonly dropShadowSettings: FindChangeDropShadowSetting

/\*\*

- Settings that control the feather effect.
  \*/
  readonly featherSettings: FindChangeFeatherSetting

/\*\*

- Settings that control the gradient feather effect.
  \*/
  readonly gradientFeatherSettings: FindChangeGradientFeatherSetting

/\*\*

- Settings that control the inner glow effect.
  \*/
  readonly innerGlowSettings: FindChangeInnerGlowSetting

/\*\*

- Settings that control the inner shadow effect.
  \*/
  readonly innerShadowSettings: FindChangeInnerShadowSetting

/\*\*

- Settings that control the outer glow effect.
  \*/
  readonly outerGlowSettings: FindChangeOuterGlowSetting

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Settings that control the satin effect
  \*/
  readonly satinSettings: FindChangeSatinSetting
  }

/\*\*

- Transparency settings applied to the parent object's stroke.
  \*/
  declare class FindChangeStrokeTransparencySetting extends Preference {
  /\*\*
  - Settings that control the bevel and emboss effect.
    \*/
    readonly bevelAndEmbossSettings: FindChangeBevelAndEmbossSetting

/\*\*

- Settings that control blending mode behavior.
  \*/
  readonly blendingSettings: FindChangeBlendingSetting

/\*\*

- Settings that control the directional feather effect.
  \*/
  readonly directionalFeatherSettings: FindChangeDirectionalFeatherSetting

/\*\*

- Settings that control the drop shadow effect.
  \*/
  readonly dropShadowSettings: FindChangeDropShadowSetting

/\*\*

- Settings that control the feather effect.
  \*/
  readonly featherSettings: FindChangeFeatherSetting

/\*\*

- Settings that control the gradient feather effect.
  \*/
  readonly gradientFeatherSettings: FindChangeGradientFeatherSetting

/\*\*

- Settings that control the inner glow effect.
  \*/
  readonly innerGlowSettings: FindChangeInnerGlowSetting

/\*\*

- Settings that control the inner shadow effect.
  \*/
  readonly innerShadowSettings: FindChangeInnerShadowSetting

/\*\*

- Settings that control the outer glow effect.
  \*/
  readonly outerGlowSettings: FindChangeOuterGlowSetting

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Settings that control the satin effect
  \*/
  readonly satinSettings: FindChangeSatinSetting
  }

/\*\*

- Transparency settings applied to the parent object's fill.
  \*/
  declare class FindChangeFillTransparencySetting extends Preference {
  /\*\*
  - Settings that control the bevel and emboss effect.
    \*/
    readonly bevelAndEmbossSettings: FindChangeBevelAndEmbossSetting

/\*\*

- Settings that control blending mode behavior.
  \*/
  readonly blendingSettings: FindChangeBlendingSetting

/\*\*

- Settings that control the directional feather effect.
  \*/
  readonly directionalFeatherSettings: FindChangeDirectionalFeatherSetting

/\*\*

- Settings that control the drop shadow effect.
  \*/
  readonly dropShadowSettings: FindChangeDropShadowSetting

/\*\*

- Settings that control the feather effect.
  \*/
  readonly featherSettings: FindChangeFeatherSetting

/\*\*

- Settings that control the gradient feather effect.
  \*/
  readonly gradientFeatherSettings: FindChangeGradientFeatherSetting

/\*\*

- Settings that control the inner glow effect.
  \*/
  readonly innerGlowSettings: FindChangeInnerGlowSetting

/\*\*

- Settings that control the inner shadow effect.
  \*/
  readonly innerShadowSettings: FindChangeInnerShadowSetting

/\*\*

- Settings that control the outer glow effect.
  \*/
  readonly outerGlowSettings: FindChangeOuterGlowSetting

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Settings that control the satin effect
  \*/
  readonly satinSettings: FindChangeSatinSetting
  }

/\*\*

- Transparency settings applied to the parent object's content.
  \*/
  declare class FindChangeContentTransparencySetting extends Preference {
  /\*\*
  - Settings that control the bevel and emboss effect.
    \*/
    readonly bevelAndEmbossSettings: FindChangeBevelAndEmbossSetting

/\*\*

- Settings that control blending mode behavior.
  \*/
  readonly blendingSettings: FindChangeBlendingSetting

/\*\*

- Settings that control the directional feather effect.
  \*/
  readonly directionalFeatherSettings: FindChangeDirectionalFeatherSetting

/\*\*

- Settings that control the drop shadow effect.
  \*/
  readonly dropShadowSettings: FindChangeDropShadowSetting

/\*\*

- Settings that control the feather effect.
  \*/
  readonly featherSettings: FindChangeFeatherSetting

/\*\*

- Settings that control the gradient feather effect.
  \*/
  readonly gradientFeatherSettings: FindChangeGradientFeatherSetting

/\*\*

- Settings that control the inner glow effect.
  \*/
  readonly innerGlowSettings: FindChangeInnerGlowSetting

/\*\*

- Settings that control the inner shadow effect.
  \*/
  readonly innerShadowSettings: FindChangeInnerShadowSetting

/\*\*

- Settings that control the outer glow effect.
  \*/
  readonly outerGlowSettings: FindChangeOuterGlowSetting

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Settings that control the satin effect
  \*/
  readonly satinSettings: FindChangeSatinSetting
  }

/\*\*

- Core settings for object blending.
  \*/
  declare class FindChangeBlendingSetting extends BlendingSetting {}

/\*\*

- Settings for drop shadow effects.
  \*/
  declare class FindChangeDropShadowSetting extends DropShadowSetting {}

/\*\*

- Settings for feather effects.
  \*/
  declare class FindChangeFeatherSetting extends FeatherSetting {}

/\*\*

- Settings for inner shadow effects.
  \*/
  declare class FindChangeInnerShadowSetting extends InnerShadowSetting {}

/\*\*

- Settings for outer glow effects.
  \*/
  declare class FindChangeOuterGlowSetting extends OuterGlowSetting {}

/\*\*

- Settings for inner glow effects.
  \*/
  declare class FindChangeInnerGlowSetting extends InnerGlowSetting {}

/\*\*

- Settings for bevel and emboss effects.
  \*/
  declare class FindChangeBevelAndEmbossSetting extends BevelAndEmbossSetting {}

/\*\*

- Settings for satin effects.
  \*/
  declare class FindChangeSatinSetting extends SatinSetting {}

/\*\*

- Settings for directional feather effects.
  \*/
  declare class FindChangeDirectionalFeatherSetting extends DirectionalFeatherSetting {}

/\*\*

- Settings for gradient feather effects.
  \*/
  declare class FindChangeGradientFeatherSetting extends GradientFeatherSetting {}

/\*\*

- Preferences controlling text import.
  \*/
  declare class TextImportPreference extends Preference {
  /\*\*
  - Character set for the computer language that produced the text file.
    \*/
    characterSet: TextImportCharacterSet

/\*\*

- When true, replaces the requested count of spaces with a tab. For the count setting, see spaces into tabs count.
  \*/
  convertSpacesIntoTabs: boolean

/\*\*

- Dictionary applied to the incoming text.
  \*/
  dictionary: string

/\*\*

- Platform that generated the text file being imported.
  \*/
  platform: ImportPlatform

/\*\*

- Count of spaces to replace with a tab. Note: Applies only when convert spaces into tabs is true.
  \*/
  spacesIntoTabsCount: number

/\*\*

- When true, the import filter deletes surplus carriage returns from line endings.
  \*/
  stripReturnsBetweenLines: boolean

/\*\*

- When true, the import filter deletes surplus carriage returns separating paragraphs.
  \*/
  stripReturnsBetweenParagraphs: boolean

/\*\*

- When true, imported straight quotes and apostrophes become typographic quotation marks and apostrophes.
  \*/
  useTypographersQuotes: boolean
  }

/\*\*

- Preferences controlling text export.
  \*/
  declare class TextExportPreference extends Preference {
  /\*\*
  - Character set to use.
    \*/
    characterSet: TextExportCharacterSet

/\*\*

- Target platform for the text file.
  \*/
  platform: ImportPlatform
  }

/\*\*

- Preferences for Word RTF imports.
  \*/
  declare class WordRTFImportPreference extends Preference {
  /\*\*
  - When true, import converts bullets and numbers into embedded characters. When false, InDesign renders bullets and numbers.
    \*/
    convertBulletsAndNumbersToText: boolean

/\*\*

- Setting that controls manual page break handling.
  \*/
  convertPageBreaks: ConvertPageBreaks

/\*\*

- Rule for tables after formatting is stripped. Note: Applies only when remove formatting is true.
  \*/
  convertTablesTo: ConvertTablesOptions

/\*\*

- When true, endnotes come in as static text. Otherwise they remain live endnotes
  \*/
  importAsStaticEndnotes: boolean

/\*\*

- When true, endnotes are included during import.
  \*/
  importEndnotes: boolean

/\*\*

- When true, footnotes are included during import.
  \*/
  importFootnotes: boolean

/\*\*

- When true, the index is included during import.
  \*/
  importIndex: boolean

/\*\*

- When true, the table of contents is included during import.
  \*/
  importTOC: boolean

/\*\*

- When true, unused styles are included during import.
  \*/
  importUnusedStyles: boolean

/\*\*

- When true, inline graphics are retained.
  \*/
  preserveGraphics: boolean

/\*\*

- When true, character-level formatting is kept in text after other formatting is removed. Note: Applies only when remove formatting is true.
  \*/
  preserveLocalOverrides: boolean

/\*\*

- When true, comments and edits from the imported file are kept.
  \*/
  preserveTrackChanges: boolean

/\*\*

- When true, text and table formatting are stripped.
  \*/
  removeFormatting: boolean

/\*\*

- Setting used when character style names collide.
  \*/
  resolveCharacterStyleClash: ResolveStyleClash

/\*\*

- Setting used when paragraph styles share matching names.
  \*/
  resolveParagraphStyleClash: ResolveStyleClash

/\*\*

- When true, imported straight quotes and apostrophes become typographic quotation marks and apostrophes.
  \*/
  useTypographersQuotes: boolean
  }

/\*\*

- Preferences controlling tagged text export.
  \*/
  declare class TaggedTextExportPreference extends Preference {
  /\*\*
  - Character set to use.
    \*/
    characterSet: TagTextExportCharacterSet

/\*\*

- Tag form used in the exported text.
  \*/
  tagForm: TagTextForm
  }

/\*\*

- Preferences controlling tagged text import.
  \*/
  declare class TaggedTextImportPreference extends Preference {
  /\*\*
  - When true, text formatting is stripped.
    \*/
    removeTextFormatting: boolean

/\*\*

- Rule for resolving cases where imported tagged text style names match current publication style names.
  \*/
  styleConflict: StyleConflict

/\*\*

- When true, imported straight quotes and apostrophes become typographic quotation marks and apostrophes.
  \*/
  useTypographersQuotes: boolean
  }

/\*\*

- Preferences controlling Excel import.
  \*/
  declare class ExcelImportPreference extends Preference {
  /\*\*
  - Alignment applied to cells in the imported document.
    \*/
    alignmentStyle: AlignmentStyleOptions

/\*\*

- Decimal-place count to include. Note: Applies only when alignment style is decimal.
  \*/
  decimalPlaces: number

/\*\*

- Error code reported by the import. (Key: 0=Success; 1=Empty Sheet; 2=Invalid sheet; 3=Invalid range; 4=Invalid View; 5=Misc. Error)
  \*/
  errorCode: number

/\*\*

- When true, inline graphics are retained.
  \*/
  preserveGraphics: boolean

/\*\*

- Cell range selected for import. Note: Use a colon (:) between the range's start and end cell names.
  \*/
  rangeName: string

/\*\*

- Index for the worksheet. For details, see sheet name.
  \*/
  sheetIndex: number

/\*\*

- Worksheet selected for import.
  \*/
  sheetName: string

/\*\*

- When true, hidden cells are shown.
  \*/
  showHiddenCells: boolean

/\*\*

- Format used for imported spreadsheets.
  \*/
  tableFormatting: TableFormattingOptions

/\*\*

- When true, imported straight quotes and apostrophes become typographic quotation marks and apostrophes.
  \*/
  useTypographersQuotes: boolean

/\*\*

- Stored custom or personal view(s) imported with the file.
  \*/
  viewName: string
  }

/\*\*

- Preferences controlling metadata.
  \*/
  declare class MetadataPreference extends Preference {
  /\*\*
  - Document author.
    \*/
    author: string

/\*\*

- URL for the file containing the linked copyright statement.
  \*/
  copyrightInfoURL: string

/\*\*

- Copyright notice text.
  \*/
  copyrightNotice: string

/\*\*

- Document copyright status.
  \*/
  copyrightStatus: CopyrightStatus

/\*\*

- Document creation date.
  \*/
  readonly creationDate: Date

/\*\*

- Application name that created the document.
  \*/
  readonly creator: string

/\*\*

- Description assigned to the MetadataPreference.
  \*/
  description: string

/\*\*

- Document title.
  \*/
  documentTitle: string

/\*\*

- Document format.
  \*/
  readonly format: string

/\*\*

- Job name value.
  \*/
  jobName: string

/\*\*

- Keywords associated with the document.
  \*/
  keywords: string[]

/\*\*

- Date of the latest document modification.
  \*/
  readonly modificationDate: Date

/\*\*

- Document location on the asset management server.
  \*/
  readonly serverURL: string

/\*\*

- Populates undefined document metadata properties from the named external file.
- @param from Path to the external file that contains metadata.
- @param affectAll When true, data from the external file also replaces existing metadata. When false, current metadata is not replaced. Note: Defaults to false.
  \*/
  append(from: File, affectAll?: boolean): void

/\*\*

- Returns the item count in the container.
- @param namespace Namespace for the container.
- @param path Path to the container.
  \*/
  countContainer(namespace: string, path: string): number

/\*\*

- Builds an empty container.
- @param namespace Namespace for the container.
- @param path Path to the container.
- @param index Item index inside the container. Specified values must be 1 or greater. Use 0 to append the item after the current end and let the next available value be chosen.
- @param container Container type. Note: Supply this for the container's initial item.
  \*/
  createContainerItem(namespace: string, path: string, index?: number, container?: ContainerType): void

/\*\*

- Returns the XMP property value for the requested path.
- @param namespace Namespace for the property.
- @param path Requested path.
  \*/
  getProperty(namespace: string, path: string): string

/\*\*

- Swaps the document's current metadata for metadata loaded from the specified file.
- @param using Full path to the file containing replacement metadata.
- @param affectAll When true, all properties are handled as external. Note: Defaults to false.
  \*/
  replace(using: File, affectAll?: boolean): void

/\*\*

- Writes document metadata into an external file.
- @param to Path to the external file.
  \*/
  save(to: File): void

/\*\*

- Assigns the XMP property for the requested path.
- @param namespace Namespace for the property.
- @param path Requested path(s).
- @param value Value assigned to the property. Note: Pass an empty string to remove the property.
  \*/
  setProperty(namespace: string, path: string, value: string): void
  }

/\*\*

- Application defaults for display performance.
  \*/
  declare class DisplayPerformancePreference extends Preference {
  /\*\*
  - Default object-level display performance settings. Note: These settings are not applied to graphics already placed in the document.
    \*/
    defaultDisplaySettings: ViewDisplaySettings

/\*\*

- When true, application-level defaults override object-level default display performance settings and object-level settings cannot be set.
  \*/
  ignoreLocalSettings: boolean

/\*\*

- When true, application-level preferences retain object-level display settings.
  \*/
  persistLocalSettings: boolean
  }

/\*\*

- Display settings at the object level.
  \*/
  declare class DisplaySetting {
  /\*\*
  - When true, text and bitmap images use anti-aliasing.
    \*/
    antialiasing: boolean

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners
