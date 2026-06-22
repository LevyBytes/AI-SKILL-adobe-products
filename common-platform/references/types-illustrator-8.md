# Illustrator (part 8)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Specifies the class name of the object.
  \*/
  readonly typename: string

/\*\*

- \*/
  readonly useDefaultScreen: boolean

/\*\*

- Specifies the variables defined in this document.
  \*/
  readonly variables: Variables

/\*\*

- Specifies the locked variables.
  \*/
  variablesLocked: boolean

/\*\*

- Specifies the views in this document.
  \*/
  readonly views: Views

/\*\*

- Illustration visible bounds, including stroke width.
  \*/
  readonly visibleBounds: Rect

/\*\*

- \*/
  readonly width: number

/\*\*

- Specifies: Activate the first window associated with the document.
  \*/
  activate(): void

/\*\*

- Closes the specified document(s)
- @param saving Specifies: Specifies whether changes should be saved before closing.
  \*/
  close(saving?: SaveOptions): void

/\*\*

- Changes one point from a source coordinate system to a destination coordinate system.
- @param coordinate Specifies the Coordinate to convert.
- @param source Specifies the source coordinate system.
- @param destination Coordinate system to convert into.
  \*/
  convertCoordinate(
  coordinate: Point | [number, number],
  source: CoordinateSystem,
  destination: CoordinateSystem,
  ): Point | [number, number]

/\*\*

- Exports the specified document(s)
- @param exportFile Specifies the file to export the document to.
- @param exportFormat Output format for the document export.
- @param options Options for the specified file type.
  \*/
  exportFile(exportFile: File, exportFormat: ExportType, options?: any): void

/\*\*

- Writes all PDF presets to a file.
- @param file Destination file for the export.
  \*/
  exportPDFPreset(file: File): void

/\*\*

- Writes all perspective grid presets to a file.
- @param file Destination file for the export.
  \*/
  exportPerspectiveGridPreset(file: File): void

/\*\*

- Exports the current print setting to the preset file.
- @param file Destination file for the export.
  \*/
  exportPrintPreset(file: File): void

/\*\*

- Exports the selection as Ai file.
- @param exportFile Specifies the file to export the selection to.
  \*/
  exportSelectionAsAi(exportFile: File): void

/\*\*

- Exports the selection as PNG file.
- @param exportFile Specifies the file to export the selection to.
- @param options Options used for the PNG24 export.
  \*/
  exportSelectionAsPNG(exportFile: File, options?: any): void

/\*\*

- Writes datasets to an XML library; those datasets hold variables together with their related dynamic data.
- @param file Destination file specification for the export.
  \*/
  exportVariables(file: File): void

/\*\*

- Specifies: Change the artboard to selected art bounds.
- @param index Specifies the index of the artboard to update.
  \*/
  fitArtboardToSelectedArt(index?: number): boolean

/\*\*

- Returns the document's active perspective-grid plane.
  \*/
  getPerspectiveActivePlane(): PerspectiveGridPlaneType

/\*\*

- Hides the document's current active perspective grid when a visible grid exists.
  \*/
  hidePerspectiveGrid(): boolean

/\*\*

- Captures artwork within the clip bound as a raster image and writes that image data to the target image file.
- @param imageFile Specifies the file to which the captured image should be written.
- @param clipBounds Rectangular artwork region to capture; when omitted, the full artwork bound is captured.
- @param options Image capture options.
  \*/
  imageCapture(imageFile: File, clipBounds?: Rect, options?: ImageCaptureOptions): void

/\*\*

- Loads the character styles from the Illustrator file.
- @param fileSpec File specification used as the import source.
  \*/
  importCharacterStyles(fileSpec: File): void

/\*\*

- Imports the file into current Ai document.
- @param importFile Specifies the file to import in the current document.
- @param isLinked Specifies: Is AssetLiveLinked.
- @param libraryName Internal-only parameter.
- @param itemName Internal-only parameter.
- @param elementRef Internal-only parameter.
- @param modifiedTime Internal-only parameter.
- @param creationTime Internal-only parameter.
- @param adobeStockId Internal-only parameter.
- @param adobeStockLicense Internal-only parameter.
  \*/
  importFile(
  importFile: File,
  isLinked: boolean,
  libraryName?: string,
  itemName?: string,
  elementRef?: string,
  modifiedTime?: number,
  creationTime?: number,
  adobeStockId?: string,
  adobeStockLicense?: string,
  ): void

/\*\*

- Loads all PDF presets from a file.
- @param fileSpec File used as the import source.
- @param replacingPreset Indicates whether existing editable presets be replaced.
  \*/
  importPDFPreset(fileSpec: File, replacingPreset?: boolean): void

/\*\*

- Loads the paragraph styles from the Illustrator file.
- @param fileSpec File specification used as the import source.
  \*/
  importParagraphStyles(fileSpec: File): void

/\*\*

- Loads the named perspective grid preset from the specified file, or all presets when no preset name is supplied.
- @param fileSpec File used as the import source.
- @param perspectivePreset Name for perspective grid preset.
  \*/
  importPerspectiveGridPreset(fileSpec: File, perspectivePreset?: string): void

/\*\*

- Use the named print preset from fileSpec for the current print setup.
- @param printPreset Print preset name to bring in.
- @param fileSpec Source file for the import.
  \*/
  importPrintPreset(printPreset: string, fileSpec: File): void

/\*\*

- Bring in a variable library containing datasets, variables, and linked dynamic data; imported entries replace existing variables and datasets.
- @param fileSpec File spec used as the import source.
  \*/
  importVariables(fileSpec: File): void

/\*\*

- Send the document to print.
- @param options Print configuration options.
  \*/
  print(options?: PrintOptions): void

/\*\*

- Interpret point input data as a gesture.
- @param gesturePointsFile File Path with points that make up the gesture.
  \*/
  processGesture(gesturePointsFile: string): void

/\*\*

- Convert source art(s) to raster form inside the supplied clip bounds; rasterization removes the original source art(s).
- @param sourceArt Page item(s) selected for rasterization.
- @param clipBounds Artwork rectangle to rasterize; when omitted, the source art(s) bounds are used.
- @param options Rasterization settings to apply.
  \*/
  rasterize(sourceArt: any, clipBounds?: Rect, options?: RasterizeOptions): RasterItem

/\*\*

- Reorder the document's Artboards.
- @param artboardLayout Artboard layout used for the rearrangement.
- @param artboardRowsOrCols Row count for row layouts OR column count for column layouts; accepted values run from 1 through (docNumArtboards - 1), with 1 used by single-row or single-column layouts.
- @param artboardSpacing Distance between artboards.
- @param artboardMoveArtwork Whether artwork should move together with artboards.
  \*/
  rearrangeArtboards(
  artboardLayout?: DocumentArtboardLayout,
  artboardRowsOrCols?: number,
  artboardSpacing?: number,
  artboardMoveArtwork?: boolean,
  ): boolean

/\*\*

- Write changes for the document.
  \*/
  save(): void

/\*\*

- Write the document using explicit save settings.
- @param saveIn Destination file for the saved document.
- @param options Settings for the selected file type.
  \*/
  saveAs(saveIn: File, options?: any): void

/\*\*

- Select artwork objects on the active artboard.
  \*/
  selectObjectsOnActiveArtboard(): boolean

/\*\*

- Choose a named preset that defines the current document's perspective grid.
- @param perspectivePreset Perspective grid preset name.
  \*/
  selectPerspectivePreset(perspectivePreset: string): boolean

/\*\*

- Choose the active plane for the document's active perspective grid.
- @param perspectiveGridPlane Perspective grid plane type.
  \*/
  setPerspectiveActivePlane(perspectiveGridPlane: PerspectiveGridPlaneType): boolean

/\*\*

- Display the document's active perspective grid, or show the document default when no active grid exists.
  \*/
  showPerspectiveGrid(): boolean

/\*\*

- Save an image capture of the current document window as a target TIFF file.
- @param imageFile TIFF file that receives the captured image.
- @param windowSize Window size to use before capture.
  \*/
  windowCapture(imageFile: File, windowSize: Point | [number, number]): void
  }

/\*\*

- Layer object.
  \*/
  declare class Layer {
  /\*\*
  - Layer position in the absolute drawing stack.
    \*/
    readonly absoluteZOrderPosition: number

/\*\*

- Whether the artwork creates a knockout.
  \*/
  artworkKnockout: KnockoutState

/\*\*

- Compositing mode applied to an object.
  \*/
  blendingMode: BlendModes

/\*\*

- Outline color used for artwork on this layer.
  \*/
  color: RGBColor

/\*\*

- Compound path artwork held by this layer.
  \*/
  readonly compoundPathItems: CompoundPathItems

/\*\*

- Whether placed images appear dimmed in this layer.
  \*/
  dimPlacedImages: boolean

/\*\*

- Graph art items contained in this layer.
  \*/
  readonly graphItems: GraphItems

/\*\*

- Group items contained in this layer.
  \*/
  readonly groupItems: GroupItems

/\*\*

- Whether this layer currently contains selected artwork; setting false clears selections in the layer.
  \*/
  hasSelectedArtwork: boolean

/\*\*

- Whether the artwork is isolated.
  \*/
  isIsolated: boolean

/\*\*

- Child layer collection.
  \*/
  readonly layers: Layers

/\*\*

- Legacy text frame items for this story.
  \*/
  readonly legacyTextItems: LegacyTextItems

/\*\*

- Whether edits are allowed on the layer.
  \*/
  locked: boolean

/\*\*

- Mesh art items contained in this layer.
  \*/
  readonly meshItems: MeshItems

/\*\*

- Name assigned to the layer.
  \*/
  name: string

/\*\*

- Non-native art items contained in this layer.
  \*/
  readonly nonNativeItems: NonNativeItems

/\*\*

- Layer opacity, between 0.0 and 100.0.
  \*/
  opacity: number

/\*\*

- Complete artwork collection for this layer.
  \*/
  readonly pageItems: PageItems

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Path artwork held by this layer.
  \*/
  readonly pathItems: PathItems

/\*\*

- Placed art items contained in this layer.
  \*/
  readonly placedItems: PlacedItems

/\*\*

- Plugin art items contained in this layer.
  \*/
  readonly pluginItems: PluginItems

/\*\*

- Whether this layer renders in preview mode.
  \*/
  preview: boolean

/\*\*

- Whether this layer is available for printing.
  \*/
  printable: boolean

/\*\*

- Raster art items contained in this layer.
  \*/
  readonly rasterItems: RasterItems

/\*\*

- Whether slicing is enabled for the layer (default: false).
  \*/
  sliced: boolean

/\*\*

- Symbol items contained in this layer.
  \*/
  readonly symbolItems: SymbolItems

/\*\*

- Text frame items contained in this layer.
  \*/
  readonly textFrames: TextFrameItems

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Whether the layer is visible.
  \*/
  visible: boolean

/\*\*

- Drawing-order position for the layer.
  \*/
  readonly zOrderPosition: number

/\*\*

- Relocate the object.
- @param relativeObject
- @param insertionLocation
  \*/
  move(relativeObject: object, insertionLocation: any): Layer

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void

/\*\*

- Place the layer in relation to other layers.
- @param zOrderCmd Arrangement command for the layer.
  \*/
  zOrder(zOrderCmd: ZOrderMethod): void
  }

/\*\*

- View object.
  \*/
  declare class View {
  /\*\*
  - Bounding rectangle for this view.
    \*/
    readonly bounds: Rect

/\*\*

- Center point used by this view.
  \*/
  centerPoint: Point | [number, number]

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Display mode for the view.
  \*/
  screenMode: ScreenMode

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Zoom factor used by this view.
  \*/
  zoom: number
  }

/\*\*

- Gradient object.
  \*/
  declare class Gradient {
  /\*\*
  - Stops included in this gradient.
    \*/
    readonly gradientStops: GradientStops

/\*\*

- Name assigned to the gradient.
  \*/
  name: string

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Type assigned to the gradient.
  \*/
  type: GradientType

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void
  }

/\*\*

- Gradient stop object.
  \*/
  declare class GradientStop {
  /\*\*
  - Color associated with this gradient stop.
    \*/
    color: Color

/\*\*

- Midpoint key expressed as a percent value.
  \*/
  midPoint: number

/\*\*

- Gradient stop opacity value, between 0.0 and 100.0.
  \*/
  opacity: number

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Color location within the blend, in percent.
  \*/
  rampPoint: number

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void
  }

/\*\*

- Illustrator preference set.
  \*/
  declare class Preferences {
  /\*\*
  - Settings used when an AutoCAD file is opened or placed.
    \*/
    readonly AutoCADFileOptions: OpenOptionsAutoCAD

/\*\*

- Settings used when a PDF file is opened or placed.
  \*/
  readonly PDFFileOptions: OpenOptionsPDF

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Settings used when a Photoshop file is opened or placed.
  \*/
  readonly photoshopFileOptions: OpenOptionsPhotoshop

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Get an application preference key as a boolean.
- @param key Preference key.
  \*/
  getBooleanPreference(key: string): boolean

/\*\*

- Get an application preference key as an integer.
- @param key Preference key.
  \*/
  getIntegerPreference(key: string): number

/\*\*

- Get an application preference key as a real number.
- @param key Preference key.
  \*/
  getRealPreference(key: string): number

/\*\*

- Get an application preference key as a string.
- @param key Preference key.
  \*/
  getStringPreference(key: string): string

/\*\*

- Remove an application preference key.
- @param key Preference key.
  \*/
  removePreference(key: string): void

/\*\*

- Store a boolean value for an application preference key.
- @param key Preference key.
- @param value Boolean value assigned to the preference key.
  \*/
  setBooleanPreference(key: string, value: boolean): void

/\*\*

- Store an integer value for an application preference key.
- @param key Preference key.
- @param value Boolean value assigned to the preference key.
  \*/
  setIntegerPreference(key: string, value: number): void

/\*\*

- Store a real-number value for an application preference key.
- @param key Preference key.
- @param value Real value assigned to the preference key.
  \*/
  setRealPreference(key: string, value: number): void

/\*\*

- Store a string value for an application preference key.
- @param key Preference key.
- @param value String value assigned to the preference key.
  \*/
  setStringPreference(key: string, value: string): void
  }

/\*\*

- Custom color object.
  \*/
  declare class Spot {
  /\*\*
  - \*/
    color: Color

/\*\*

- Custom color type.
  \*/
  colorType: ColorModel

/\*\*

- Name assigned to the custom color.
  \*/
  name: string

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Spot color kind, i.e. RGB, CMYK or LAB, naming the color-kind category held in the spot.
  \*/
  readonly spotKind: SpotColorKind

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Return the spot's internal color.
  \*/
  getInternalColor(): number[]

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void
  }

/\*\*

- Data-driven graphics use this dynamic object.
  \*/
  declare class Variable {
  /\*\*
  - Type assigned to the variable.
    \*/
    kind: VariableKind

/\*\*

- Name assigned to this variable.
  \*/
  name: string

/\*\*

- Complete artwork collection for this document.
  \*/
  readonly pageItems: PageItems

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void
  }

/\*\*

- Variable set with linked dynamic data used for dynamic publishing.
  \*/
  declare class DataSet {
  /\*\*
  - Name assigned to this dataset.
    \*/
    name: string

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Show the dynamic data captured by the dataset.
  \*/
  display(): void

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void

/\*\*

- Apply the active dataset's dynamic data to the artboard again.
  \*/
  update(): void
  }

/\*\*

- Color swatch object.
  \*/
  declare class Swatch {
  /\*\*
  - Color data stored by the swatch.
    \*/
    color: Color

/\*\*

- Name assigned to the swatch.
  \*/
  name: string

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void
  }

/\*\*

- SwatchGroup object.
  \*/
  declare class SwatchGroup {
  /\*\*
  - Swatch group name.
    \*/
    name: string

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Insert a spot swatch into the group.
- @param spot Spot swatch added to the group.
  \*/
  addSpot(spot: Spot): void

/\*\*

- Insert a swatch into the group.
- @param swatch Swatch added to the group.
  \*/
  addSwatch(swatch: Swatch): void

/\*\*

- Return every swatch from the swatch group.
  \*/
  getAllSwatches(): Swatch[]

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void
  }

/\*\*

- Pattern object.
  \*/
  declare class Pattern {
  /\*\*
  - Name assigned to the pattern.
    \*/
    name: string

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void
  }

/\*\*

- Symbol object.
  \*/
  declare class Symbol {
  /\*\*
  - Name assigned to the symbol.
    \*/
    name: string

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Create a duplicate of this object.
- @param relativeObject
- @param insertionLocation
  \*/
  duplicate(relativeObject: object, insertionLocation: any): Symbol

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void
  }

/\*\*

- Brush object.
  \*/
  declare class Brush {
  /\*\*
  - Name assigned to the brush.
    \*/
    name: string

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Use this brush or art style on object(s).
- @param artItem Page item(s) to receive it.
  \*/
  applyTo(artItem: any): void
  }

/\*\*

- Art style object.
  \*/
  declare class ArtStyle {
  /\*\*
  - Name assigned to the art style.
    \*/
    name: string

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Use this brush or art style on object(s).
- @param artItem Page item(s) to receive it.
  \*/
  applyTo(artItem: any): void

/\*\*

- Merge an art style into the current style(s) for object(s).
- @param artItem Page item(s) receiving the merge.
  \*/
  mergeTo(artItem: any): void

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void
  }

/\*\*

- Installed font object.
  \*/
  declare class TextFont {
  /\*\*
  - Font family name.
    \*/
    readonly family: string

/\*\*

- Font full name.
  \*/
  readonly name: string

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Font style name.
  \*/
  readonly style: string

/\*\*

- Object class name.
  \*/
  readonly typename: string
  }

/\*\*

- Page item object.
  \*/
  declare class PageItem {
  /\*\*
  - Adobe URL tag value assigned to this artwork item.
    \*/
    URL: string

/\*\*

- Layer position in the absolute drawing stack.
  \*/
  readonly absoluteZOrderPosition: number

/\*\*

- Whether the artwork creates a knockout.
  \*/
  artworkKnockout: KnockoutState

/\*\*

- Compositing mode applied to an object.
  \*/
  blendingMode: BlendModes

/\*\*

- Artwork bounds including stroke width and controls.
  \*/
  readonly controlBounds: Rect

/\*\*

- Whether the art item can be changed.
  \*/
  readonly editable: boolean

/\*\*

- Artwork bounds with stroke width excluded.
  \*/
  readonly geometricBounds: Rect

/\*\*

- Art item height.
  \*/
  height: number

/\*\*

- Whether this artwork item is hidden.
  \*/
  hidden: boolean

/\*\*

- Whether the artwork is isolated.
  \*/
  isIsolated: boolean

/\*\*

- Layer that owns this artwork.
  \*/
  readonly layer: Layer

/\*\*

- Left coordinate for the art item.
  \*/
  left: number

/\*\*

- Whether this artwork item is locked.
  \*/
  locked: boolean

/\*\*

- Name assigned to the item.
  \*/
  name: string

/\*\*

- Note attached to this artwork item.
  \*/
  note: string

/\*\*

- Object opacity, between 0.0 and 100.0.
  \*/
  opacity: number

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Whether this artwork item aligns to Pixel Grid.
  \*/
  pixelAligned: boolean

/\*\*

- Top-left corner position for the art item.
  \*/
  position: Point | [number, number]

/\*\*

- Whether this artwork item is selected.
  \*/
  selected: boolean

/\*\*

- Whether slicing is enabled for the art item (default: false).
  \*/
  sliced: boolean

/\*\*

- Tag collection linked with this page item.
  \*/
  readonly tags: Tags

/\*\*

- Top coordinate for the art item.
  \*/
  top: number

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Visibility variable linked to this page item.
  \*/
  visibilityVariable: any

/\*\*

- Visible artwork bounds including stroke width.
  \*/
  readonly visibleBounds: Rect

/\*\*

- Art item width.
  \*/
  width: number

/\*\*

- Whether this object wraps a text frame object inside it.
  \*/
  wrapInside: boolean

/\*\*

- Offset used while wrapping text around this object.
  \*/
  wrapOffset: number

/\*\*

- Whether text frame objects wrap around this object; the text frame must sit above the object.
  \*/
  wrapped: boolean

/\*\*

- Drawing order of the art within its group or layer.
  \*/
  readonly zOrderPosition: number

/\*\*

- Run liveEffectXML as an effect on the current selection.
- @param liveEffectXML
  \*/
  applyEffect(liveEffectXML: string): void

/\*\*

- Move art object(s) into the perspective grid at the specified perspective plane and coordinate.
- @param positionX Position along the X direction of the specified or active perspective grid plane.
- @param positionY Position along the Y direction of the specified or active perspective grid plane.
- @param perspectiveGridPlane Perspective grid plane type.
  \*/
  bringInPerspective(
  positionX: number,
  positionY: number,
  perspectiveGridPlane: PerspectiveGridPlaneType,
  ): void
