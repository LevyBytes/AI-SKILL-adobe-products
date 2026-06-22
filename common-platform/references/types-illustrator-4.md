# Illustrator (part 4)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): ParagraphStyle

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing custom Spot color objects.
  \*/
  declare class Spots extends Array<Spot> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a spot color.
  \*/
  add(): Spot

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): Spot

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing Swatch objects.
  \*/
  declare class Swatches extends Array<Swatch> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a swatch.
  \*/
  add(): Swatch

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): Swatch

/\*\*

- Returns selected swatches from the document.
- @param includeSwatchInGroup Whether selected elements include swatches in a group.
  \*/
  getSelected(includeSwatchInGroup?: boolean): Swatch[]

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing SwatchGroup objects.
  \*/
  declare class SwatchGroups extends Array<SwatchGroup> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a Swatch group.
  \*/
  add(): SwatchGroup

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): SwatchGroup

/\*\*

- Returns selected swatchGroups from the document.
  \*/
  getSelected(): SwatchGroup[]

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing Gradient objects.
  \*/
  declare class Gradients extends Array<Gradient> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a gradient.
  \*/
  add(): Gradient

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): Gradient

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing GradientStop objects.
  \*/
  declare class GradientStops extends Array<GradientStop> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a gradient stop.
  \*/
  add(): GradientStop

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): GradientStop

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing Pattern objects.
  \*/
  declare class Patterns extends Array<Pattern> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a pattern.
  \*/
  add(): Pattern

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): Pattern

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing Symbol objects.
  \*/
  declare class Symbols extends Array<Symbol> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a symbol.
- @param sourceArt Art item used to make this symbol.
- @param registrationPoint Symbol registration point.
  \*/
  add(sourceArt: PageItem, registrationPoint?: SymbolRegistrationPoint): Symbol

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): Symbol

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing SymbolItem objects.
  \*/
  declare class SymbolItems extends Array<SymbolItem> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates an instance of a symbol item.
- @param symbol Symbol used to create the instance.
  \*/
  add(symbol: Symbol): SymbolItem

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): SymbolItem

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing Brush objects.
  \*/
  declare class Brushes extends Array<Brush> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a brush.
- @param brushDefinition Brush definition used to create the brush.
- @param brushName Brush name.
  \*/
  add(brushDefinition: File, brushName?: string): Brush

/\*\*

- Creates a brush, selects the brush tool, and loads the new brush into that tool.
- @param brushDefinition Brush definition used to create the brush.
  \*/
  static addAndLoad(brushDefinition: File): Brush

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): Brush
  }

/\*\*

- Collection containing ArtStyle objects.
  \*/
  declare class ArtStyles extends Array<ArtStyle> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): ArtStyle

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing TextFont objects.
  \*/
  declare class TextFonts extends Array<TextFont> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): TextFont

/\*\*

- Returns the name of the current font.
  \*/
  getCurrentFont(): string

/\*\*

- Returns the Text Font for the font name; if unavailable, creates the substitute font.
- @param fontName Font name to find or use for substitute creation.
  \*/
  getFontByName(fontName: string): TextFont

/\*\*

- Checks whether any original font exists with the given name.
- @param fontName Name of the font to locate.
  \*/
  isFontAvailable(fontName: string): boolean
  }

/\*\*

- Tag collection associated with a page item.
  \*/
  declare class Tags extends Array<Tag> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a tag.
  \*/
  add(): Tag

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): Tag

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing RasterItem objects.
  \*/
  declare class RasterItems extends Array<RasterItem> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): RasterItem

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing PlacedItem objects.
  \*/
  declare class PlacedItems extends Array<PlacedItem> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a placed item.
  \*/
  add(): PlacedItem

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): PlacedItem

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- EmbeddedItems collection.
  \*/
  declare class EmbeddedItems extends Array<EmbedItem> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates an embedded item.
  \*/
  add(): EmbedItem

/\*\*

- Returns the first collection entry matching the supplied name.
- @param name
  \*/
  getByName(name: string): EmbedItem

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection holding MeshItems.
  \*/
  declare class MeshItems extends Array<MeshItem> {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection entry matching the supplied name.
- @param name
  \*/
  getByName(name: string): MeshItem

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection holding GraphItems.
  \*/
  declare class GraphItems extends Array<GraphItem> {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection entry matching the supplied name.
- @param name
  \*/
  getByName(name: string): GraphItem

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection holding PluginItems.
  \*/
  declare class PluginItems extends Array<PluginItem> {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection entry matching the supplied name.
- @param name
  \*/
  getByName(name: string): PluginItem

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection holding NonNativeItems.
  \*/
  declare class NonNativeItems extends Array<NonNativeItem> {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection entry matching the supplied name.
- @param name
  \*/
  getByName(name: string): NonNativeItem
  }

/\*\*

- Collection holding views.
  \*/
  declare class Views extends Array<View> {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection entry matching the supplied name.
- @param name
  \*/
  getByName(name: string): View
  }

/\*\*

- Collection holding variables.
  \*/
  declare class Variables extends Array<Variable> {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a variable.
  \*/
  add(): Variable

/\*\*

- Returns the first collection entry matching the supplied name.
- @param name
  \*/
  getByName(name: string): Variable

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection holding datasets.
  \*/
  declare class DataSets extends Array<DataSet> {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a data set.
  \*/
  add(): DataSet

/\*\*

- Returns the first collection entry matching the supplied name.
- @param name
  \*/
  getByName(name: string): DataSet

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Configuration accepted when opening a file..
  \*/
  declare class OpenOptions {
  /\*\*
  - Adds this file to the list of recently opened files.
    \*/
    static addToRecentFiles: boolean

/\*\*

- When a legacy document (pre-Illustrator CS4) opens in CS4 or later, converts crop areas into Artboard entries; false discards those crop areas.
  \*/
  static convertCropAreaToArtboard: boolean

/\*\*

- When a legacy document (pre-Illustrator CS4) opens in CS4 or later, turns print tiles into Artboard entries.
  \*/
  static convertTilesToArtboard: boolean

/\*\*

- When a legacy document (pre-Illustrator CS4) opens in CS4 or later, creates an Artboard using the artwork bounding-box dimensions.
  \*/
  static createArtboardWithArtworkBoundingBox: boolean

/\*\*

- Opens the file as library.
  \*/
  static openAs: LibraryType

/\*\*

- Keeps the pre-Illustrator CS4 Legacy Artboard during CS4-or-later opening.
  \*/
  static preserveLegacyArtboard: boolean

/\*\*

- For legacy documents (pre-Illustrator CS3), controls preservation of spot colors in gradient mesh objects.
  \*/
  static updateLegacyGradientMesh: boolean

/\*\*

- For documents saved with legacy texts (pre-Illustrator 11), controls whether all text objects are updated.
  \*/
  static updateLegacyText: boolean
  }

/\*\*

- Configuration accepted when saving a document as an FXG file..
  \*/
  declare class FXGSaveOptions {
  /\*\*
  - For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
    \*/
    static artboardRange: string

/\*\*

- Policy used by FXG to expand blends.
  \*/
  static blendsPolicy: BlendsExpandPolicy

/\*\*

- Controls whether to downsample the linked images(72ppi).
  \*/
  static downsampleLinkedImages: boolean

/\*\*

- Policy used by FXG to preserve filters.
  \*/
  static filtersPolicy: FiltersPreservePolicy

/\*\*

- Policy used by FXG to preserve gradients.
  \*/
  static gradientsPolicy: GradientsPreservePolicy

/\*\*

- Controls whether to include metadata (XMP).
  \*/
  static includeMetadata: boolean

/\*\*

- Controls whether to include unused symbols.
  \*/
  static includeUnusedSymbols: boolean

/\*\*

- Controls whether to preserve the editing capabilities of FXG.
  \*/
  static preserveEditingCapabilities: boolean

/\*\*

- Saves either all artboards or the specified artboard range.
  \*/
  static saveMultipleArtboards: boolean

/\*\*

- Policy used by FXG to preserve text.
  \*/
  static textPolicy: TextPreservePolicy

/\*\*

- Version of the FXG file format to create.
  \*/
  static version: FXGVersion
  }

/\*\*

- Configuration accepted when saving a document as an Illustrator EPS file..
  \*/
  declare class EPSSaveOptions {
  /\*\*
  - For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
    \*/
    static artboardRange: string

/\*\*

- Uses CMYK PostScript.
  \*/
  static cmykPostScript: boolean

/\*\*

- Illustrator file format version to create.
  \*/
  static compatibility: Compatibility

/\*\*

- Rasterizes a gradient or gradient mesh so a PostScript Level 2 printer can output it.
  \*/
  static compatibleGradientPrinting: boolean

/\*\*

- Saved file embeds every document font (version 7 or later).
  \*/
  static embedAllFonts: boolean

/\*\*

- Controls linked-image inclusion in the saved document.
  \*/
  static embedLinkedFiles: boolean

/\*\*

- Flattening choice for transparency in older file format versions (pre-version 9).
  \*/
  static flattenOutput: OutputFlattening

/\*\*

- Includes thumbnail image of the EPS artwork.
  \*/
  static includeDocumentThumbnails: boolean

/\*\*

- \*/
  static overprint: PDFOverprint

/\*\*

- Selected PostScript level; level 1 applies to file format version 8 or older.
  \*/
  static postScript: EPSPostScriptLevelEnum

/\*\*

- Reference note: ePS preview format.
  \*/
  static preview: EPSPreview

/\*\*

- Saves either all artboards or the specified artboard range.
  \*/
  static saveMultipleArtboards: boolean
  }

/\*\*

- Configuration accepted when saving a document as a PDF file..
  \*/
  declare class PDFSaveOptions {
  /\*\*
  - Builds Acrobat layers from top-level layers; Acrobat 6 only.
    \*/
    static acrobatLayers: boolean

/\*\*

- For multi-asset extraction, this supplies the artboard range. Empty string means every artboard; Default is empty string.
  \*/
  static artboardRange: string

/\*\*

- Reference note: link 4 bleed values.
  \*/
  static bleedLink: boolean

/\*\*

- Bleed offset rect.
  \*/
  static bleedOffsetRect: Rect

/\*\*

- Draws color bars.
  \*/
  static colorBars: boolean

/\*\*

- Compressed behavior for color bitmap images.
  \*/
  static colorCompression: CompressionQuality

/\*\*

- PDF color-conversion policy; choices are (1)No Color Conversion, (2) Repurpose, and (3) Convert to Destination.
  \*/
  static colorConversionID: ColorConversion

/\*\*

- If Color Conversion uses NoColorConversion, NoColorDestination is assigned.
  \*/
  static colorDestinationID: ColorDestination

/\*\*

- For color bitmap images, zero disables downsampling; any other value is the target resolution.
  \*/
  static colorDownsampling: number

/\*\*

- Downsampling begins when image resolution exceeds this value.
  \*/
  static colorDownsamplingImageThreshold: number

/\*\*

- Resampled behavior for color bitmap images.
  \*/
  static colorDownsamplingMethod: DownsampleMethod

/\*\*

- When CMS is off, Don't Include Profiles is selected.
  \*/
  static colorProfileID: ColorProfile

/\*\*

- Reference note: tile size when compressing with JPEG2000.
  \*/
  static colorTileSize: number
