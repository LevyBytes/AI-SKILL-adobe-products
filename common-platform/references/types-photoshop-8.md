# Photoshop (part 8)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Changes the Document mode.
- @param destinationMode Mode to apply.
- @param options DocumentConversionOptions used for the mode change.
  \*/
  changeMode(destinationMode: ChangeMode, options?: DocumentConversionOptions): void

/\*\*

- Closes the Document.
- @param saving SaveOptions that decide whether edits are saved first.
  \*/
  close(saving?: SaveOptions): void

/\*\*

- Moves the Document from one color profile to another.
- @param destinationProfile Target color profile; provide a profile string, one working color space, or Lab color.
- @param intent Conversion intent.
- @param blackPointCompensation When true, black point compensation applies.
- @param dither When true, dithering applies.
  \*/
  convertProfile(
  destinationProfile: string,
  intent: Intent,
  blackPointCompensation?: boolean,
  dither?: boolean,
  ): void

/\*\*

- Crops the Document.
- @param bounds Crop area.
- @param angle Cropping bounds angle.
- @param width Output Document width.
- @param height Output Document height.
  \*/
  crop(
  bounds: UnitRect,
  angle?: number,
  width?: UnitValue | number,
  height?: UnitValue | number,
  ): void

/\*\*

- Builds a second Document from this one.
- @param name Name for the new Document.
- @param mergeLayersOnly When true, only merged layers are duplicated.
  \*/
  duplicate(name?: string, mergeLayersOnly?: boolean): Document

/\*\*

- Creates another instance.
- @param relativeObject
- @param insertionLocation
  \*/
  duplicate(relativeObject: object, insertionLocation: ElementPlacement): Document

/\*\*

- Exports the Document.
- @param exportIn File destination for export.
- @param exportAs Export type to use.
- @param options ExportOptions for the chosen export type.
  \*/
  exportDocument(exportIn: File, exportAs?: ExportType, options?: ExportOptions): void

/\*\*

- Combines all layers into one.
  \*/
  flatten(): void

/\*\*

- Mirrors the canvas horizontally or vertically.
- @param direction Direction used for the canvas flip.
  \*/
  flipCanvas(direction: Direction): void

/\*\*

- Brings annotations from another document into this Document.
- @param file File document that supplies the annotations.
  \*/
  importAnnotations(file: File): void

/\*\*

- Combines all visible layers in the Document.
  \*/
  mergeVisibleLayers(): void

/\*\*

- Inserts clipboard contents into the Document.
- @param intoSelection When true, paste into the active selection.
  \*/
  paste(intoSelection?: boolean): ArtLayer

/\*\*

- Sends the Document to print.
- @param sourceSpace Source color space.
- @param printSpace Printer color space; use "nothing" for same as source, a working space, Lab color, or a color-space string. Default: nothing.
- @param intent Color conversion intent.
- @param blackPointCompensation When true, black point compensation applies.
  \*/
  print(
  sourceSpace?: SourceSpaceType,
  printSpace?: string,
  intent?: Intent,
  blackPointCompensation?: boolean,
  ): void

/\*\*

- Prints a single Document copy.
  \*/
  printOneCopy(): void

/\*\*

- Rasterizes every layer.
  \*/
  rasterizeAllLayers(): void

/\*\*

- Captures measurement data for the Document.
- @param source MeasurementSource to record from.
- @param dataPoints Identifier array for data points to record; entries unsuitable for the chosen source are skipped.
  \*/
  recordMeasurements(source?: MeasurementSource, dataPoints?: string[]): void

/\*\*

- Resizes the canvas.
- @param width Desired canvas width.
- @param height Desired canvas height.
- @param anchor Anchor point used for the resize.
  \*/
  resizeCanvas(
  width?: UnitValue | number,
  height?: UnitValue | number,
  anchor?: AnchorPosition,
  ): void

/\*\*

- Resizes the image.
- @param width Desired image width.
- @param height Desired image height.
- @param resolution Resolution in pixels per inch.
- @param resampleMethod Downsampling method.
- @param amount Preserve details noise value (range: 0 - 100)
  \*/
  resizeImage(
  width?: UnitValue | number,
  height?: UnitValue | number,
  resolution?: number,
  resampleMethod?: ResampleMethod,
  amount?: number,
  ): void

/\*\*

- Extends the Document view to include clipped areas.
  \*/
  revealAll(): void

/\*\*

- Rotates the canvas.
- @param angle Degrees to rotate; positive turns clockwise and negative turns counter-clockwise.
  \*/
  rotateCanvas(angle: number): void

/\*\*

- Saves the Document.
  \*/
  save(): void

/\*\*

- Saves the Document with supplied save settings.
- @param saveIn File path or alias to save to; when omitted, saving uses the existing Document file.
- @param options Settings for the chosen file type.
- @param asCopy When true, saves a copy and keeps the original open.
- @param extensionType ExtensionType suffix for the saved name.
  \*/
  saveAs(saveIn: File, options?: any, asCopy?: boolean, extensionType?: Extension): void

/\*\*

- Separates the Document channels.
  \*/
  splitChannels(): Document[]

/\*\*

- Creates one history state for the whole script, giving all script actions a single undo point.
- @param historyString Text assigned to the history state.
- @param javaScriptString JavaScript code string executed while history is suspended.
  \*/
  suspendHistory(historyString: string, javaScriptString: string): void

/\*\*

- Runs CMYK trapping; valid only when 'mode' = CMYK.
- @param width Trap width in pixels.
  \*/
  trap(width: number): void

/\*\*

- Removes transparent margins around the image from selected canvas sides.
- @param type Pixel color or type used as the trim basis.
- @param top When true, removes the top side.
- @param left When true, removes the left side.
- @param bottom When true, removes the bottom side.
- @param right When true, removes the right side.
  \*/
  trim(type?: TrimType, top?: boolean, left?: boolean, bottom?: boolean, right?: boolean): void
  }

/\*\*

- DocumentInfo stores metadata for a Document; these values correspond to File > File Info fields in Adobe Photoshop.
  \*/
  declare class DocumentInfo {
  /\*\*
  - Author name.
    \*/
    author: string

/\*\*

- Author position.
  \*/
  authorPosition: string

/\*\*

- Caption text.
  \*/
  caption: string

/\*\*

- Caption writer.
  \*/
  captionWriter: string

/\*\*

- Document category value.
  \*/
  category: string

/\*\*

- City metadata.
  \*/
  city: string

/\*\*

- Copyright notice text.
  \*/
  copyrightNotice: string

/\*\*

- Copyright status value.
  \*/
  copyrighted: CopyrightedType

/\*\*

- Country metadata.
  \*/
  country: string

/\*\*

- Creation date string.
  \*/
  creationDate: string

/\*\*

- Author credit line.
  \*/
  credit: string

/\*\*

- JPEG image details such as camera model, photo date and time, and file size.
  \*/
  readonly exif: any[]

/\*\*

- Headline text.
  \*/
  headline: string

/\*\*

- Image usage or processing instructions.
  \*/
  instructions: string

/\*\*

- Job name.
  \*/
  jobName: string

/\*\*

- Keyword list.
  \*/
  keywords: string[]

/\*\*

- URL for copyright details.
  \*/
  ownerUrl: string

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- State or province metadata.
  \*/
  provinceState: string

/\*\*

- Source metadata.
  \*/
  source: string

/\*\*

- Additional categories.
  \*/
  supplementalCategories: string[]

/\*\*

- Document title text.
  \*/
  title: string

/\*\*

- Transmission reference value.
  \*/
  transmissionReference: string

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Document urgency value.
  \*/
  urgency: Urgency
  }

/\*\*

- Preferences defines options for the application object's preferences property, broadly matching Edit > Preferences (Windows) or Photoshop > Preferences in Adobe Photoshop.
  \*/
  declare class Preferences {
  /\*\*
  - Additional plug-in folder path; only meaningful when 'use additional plugin folder' = true.
    \*/
    additionalPluginFolder: File

/\*\*

- Controls whether Windows saves files with extensions.
  \*/
  appendExtension: SaveBehavior

/\*\*

- When true, asks the user to confirm layer-preservation choices while saving TIFF files.
  \*/
  askBeforeSavingLayeredTIFF: boolean

/\*\*

- When true, open documents update automatically.
  \*/
  autoUpdateOpenDocuments: boolean

/\*\*

- When true, alerts sound after a process completes.
  \*/
  beepWhenDone: boolean

/\*\*

- When true, component channels display in color in the Channels palette.
  \*/
  colorChannelsInColor: boolean

/\*\*

- ColorPicker used by the application.
  \*/
  colorPicker: ColorPicker

/\*\*

- Column gutter, measured in points.
  \*/
  columnGutter: number

/\*\*

- Column width, measured in points.
  \*/
  columnWidth: number

/\*\*

- When true, the first snapshot is created automatically for each new Document.
  \*/
  createFirstSnapshot: boolean

/\*\*

- When true, the Color palette shows dynamic color sliders.
  \*/
  dynamicColorSliders: boolean

/\*\*

- Edit-log item options.
  \*/
  editLogItems: EditLogItemsType

/\*\*

- When true, clipboard contents from Adobe Photoshop remain available after the application exits.
  \*/
  exportClipboard: boolean

/\*\*

- Controls font previews shown in type tool font menus.
  \*/
  fontPreviewSize: FontPreviewType

/\*\*

- When true, the image preview appears at full size.
  \*/
  fullSizePreview: boolean

/\*\*

- Warning-color opacity for out-of-gamut colors, expressed as a percentage. Range: 0 to 100.
  \*/
  gamutWarningOpacity: number

/\*\*

- Grid square size.
  \*/
  gridSize: GridSize

/\*\*

- Style applied to non-printing grid lines.
  \*/
  gridStyle: GridLineStyle

/\*\*

- Grid subdivision value.
  \*/
  gridSubDivisions: number

/\*\*

- Style applied to non-printing guide lines.
  \*/
  guideStyle: GuideLineStyle

/\*\*

- When true, the image preview is shown as a thumbnail.
  \*/
  iconPreview: boolean

/\*\*

- When true, the histogram uses the current image cache preview.
  \*/
  imageCacheForHistograms: boolean

/\*\*

- Image cache capacity. Range: 1 to 8.
  \*/
  imageCacheLevels: number

/\*\*

- SaveBehavior mode for image previews during file saving.
  \*/
  imagePreviews: SaveBehavior

/\*\*

- ResampleMethod used to assign color values to new pixels during image resampling or resizing.
  \*/
  interpolation: ResampleMethod

/\*\*

- When true, keyboard shortcut zooming also resizes the window.
  \*/
  keyboardZoomResizesWindows: boolean

/\*\*

- When true, Mac OS saves include a thumbnail.
  \*/
  macOSThumbnail: boolean

/\*\*

- Highest percentage of available RAM Photoshop may use.
  \*/
  maxRAMuse: number

/\*\*

- QueryStateType behavior for maximize-compatibility checks while opening Adobe Photoshop (PSD) files.
  \*/
  maximizeCompatibility: QueryStateType

/\*\*

- When true, non-linear history is allowed.
  \*/
  nonLinearHistory: boolean

/\*\*

- Preserved history-state count. Range: 1 to 100.
  \*/
  numberOfHistoryStates: number

/\*\*

- Pointer type for non-painting cursors.
  \*/
  otherCursors: OtherPaintingCursors

/\*\*

- Pointer type for painting cursors.
  \*/
  paintingCursors: PaintingCursors

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- When true, previews display faster by halving resolution, which doubles pixel size.
  \*/
  pixelDoubling: boolean

/\*\*

- Point/pica size setting.
  \*/
  pointSize: PointType

/\*\*

- Recent-file list length. Range: 0 to 30.
  \*/
  recentFileListLength: number

/\*\*

- Unit used by the scripting system for incoming and returned values.
  \*/
  rulerUnits: Units

/\*\*

- Save-log item options.
  \*/
  saveLogItems: SaveLogItemsType

/\*\*

- File used for the history log.
  \*/
  saveLogItemsFile: File

/\*\*

- When true, new palette positions become the default.
  \*/
  savePaletteLocations: boolean

/\*\*

- When true, Asian text controls appear in the Paragraph palette.
  \*/
  showAsianTextOptions: boolean

/\*\*

- When true, Asian font names appear in English.
  \*/
  showEnglishFontNames: boolean

/\*\*

- When true, slice numbers show in the document window while the Slice tool is active.
  \*/
  showSliceNumber: boolean

/\*\*

- When true, pop-up definitions appear on mouseover.
  \*/
  showToolTips: boolean

/\*\*

- When true, curly quote marks are enabled.
  \*/
  smartQuotes: boolean

/\*\*

- Small-font size used in panels and dialogs.
  \*/
  textFontSize: FontSize

/\*\*

- Unit assumed for numeric type-size inputs.
  \*/
  typeUnits: TypeUnits

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- When true, Photoshop uses another compatible plug-ins folder stored with a different application.
  \*/
  useAdditionalPluginFolder: boolean

/\*\*

- When true, diffusion dither is used.
  \*/
  useDiffusionDither: boolean

/\*\*

- Enables or disables history logging.
  \*/
  useHistoryLog: boolean

/\*\*

- When true, file extensions are lowercase.
  \*/
  useLowerCaseExtension: boolean

/\*\*

- When true, Shift-key tool cycling through hidden tools is enabled.
  \*/
  useShiftKeyForToolSwitch: boolean

/\*\*

- When true, Adobe Photoshop sends transparency data to the computer's video board. (Requires hardware support.)
  \*/
  useVideoAlpha: boolean

/\*\*

- When true, Windows saves include a thumbnail. (Requires hardware support.)
  \*/
  windowsThumbnail: boolean
  }

/\*\*

- Document print-setting values.
  \*/
  declare class DocumentPrintSettings {
  /\*\*
  - Printer currently selected.
    \*/
    activePrinter: string

/\*\*

- Page background color.
  \*/
  backgroundColor: SolidColor

/\*\*

- Width used for bleed.
  \*/
  bleedWidth: UnitValue | number

/\*\*

- File Info description field.
  \*/
  caption: boolean

/\*\*

- Center crop marks printing toggle.
  \*/
  centerCropMarks: boolean

/\*\*

- Color calibration bar printing toggle.
  \*/
  colorBars: boolean

/\*\*

- PrintColorHandling setting.
  \*/
  colorHandling: PrintColorHandling

/\*\*

- Copy count.
  \*/
  copies: number

/\*\*

- Corner crop marks printing toggle.
  \*/
  cornerCropMarks: boolean

/\*\*

- Image position for printing.
  \*/
  readonly docPosition: DocPositionStyle

/\*\*

- Horizontally flips the image.
  \*/
  flip: boolean

/\*\*

- Hard-proof printing toggle.
  \*/
  hardProof: boolean

/\*\*

- \*/
  interpolate: boolean

/\*\*

- Prints the Document title.
  \*/
  labels: boolean

/\*\*

- Black mapping toggle.
  \*/
  mapBlack: boolean

/\*\*

- Inverts image colors.
  \*/
  negative: boolean

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Image X position on the page.
  \*/
  readonly posX: UnitValue | number

/\*\*

- Image Y position on the page.
  \*/
  readonly posY: UnitValue | number

/\*\*

- Print-border width.
  \*/
  printBorder: UnitValue | number

/\*\*

- Printer color space; use nothing for same as source, or provide a string for a specific color profile.
  \*/
  printSpace: string

/\*\*

- Printer name.
  \*/
  printerName: string

/\*\*

- Available printer list.
  \*/
  readonly printers: string[]

/\*\*

- Registration-mark printing toggle.
  \*/
  registrationMarks: boolean

/\*\*

- Color conversion intent used when print space differs from source space.
  \*/
  renderIntent: Intent

/\*\*

- Image scale on the page.
  \*/
  readonly scale: number

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Includes vector data.
  \*/
  vectorData: boolean

/\*\*

- Positions the image on the page.
- @param docPosition Printed-image position; choices are centered, user defined, or scale to fit.
- @param posX Image X position on the page.
- @param posY Image Y position on the page.
- @param scale Printed-image placement scale; choices are centered, user defined, or scale to fit.
  \*/
  setPagePosition(
  docPosition: DocPositionStyle,
  posX?: UnitValue | number,
  posY?: UnitValue | number,
  scale?: number,
  ): void
  }

/\*\*

- Selection represents the active selected region of a Document or Layer.
  \*/
  declare class Selection {
  /\*\*
  - Bounding rectangle around the full selection.
    \*/
    readonly bounds: UnitRect

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- True indicates the bounding rectangle is solid.
  \*/
  readonly solid: boolean

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Clears the selection without copying it to the clipboard.
  \*/
  clear(): void

/\*\*

- Shrinks the selection.
- @param by Amount used to contract the selection.
  \*/
  contract(by: UnitValue | number): void

/\*\*

- Copies selected pixels to the clipboard.
- @param merge When true, copy all visible layers; when false, copy only from the current layer.
  \*/
  copy(merge?: boolean): void

/\*\*

- Cuts selected pixels to the clipboard.
  \*/
  cut(): void

/\*\*

- Removes the active selection.
  \*/
  deselect(): void

/\*\*

- Enlarges the selection.
- @param by Amount used to expand the selection.
  \*/
  expand(by: UnitValue | number): void

/\*\*

- Softens selection edges.
- @param by Amount used to feather the edge.
  \*/
  feather(by: UnitValue | number): void

/\*\*

- Fills selected pixels.
- @param fillType Color or history state used for the fill.
- @param mode ColorBlendMode applied during fill.
- @param opacity Opacity percentage. Range: 1 to 100.
- @param preserveTransparency When true, transparency is preserved.
  \*/
  fill(fillType: any, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean): void

/\*\*

- Extends the selection to adjacent pixels within the given tolerance.
- @param tolerance Tolerance range. Range: 0 to 255.
- @param antiAlias When true, anti-aliasing applies.
  \*/
  grow(tolerance: number, antiAlias: boolean): void

/\*\*

- Reverses the selected and unselected areas.
  \*/
  invert(): void

/\*\*

- Reads a selection from the given channel.
- @param from Channel used as the selection source.
- @param combination Method for combining channel content with the current selection.
- @param inverting When true, selects the inverse of the channel content.
  \*/
  load(from: Channel, combination?: SelectionType, inverting?: boolean): void

/\*\*

- Converts this selection item into the workpath for the Document.
- @param tolerance Pixel tolerance.
  \*/
  makeWorkPath(tolerance?: number): void

/\*\*

- Resizes the selected region using dimensions and an anchor point.
- @param horizontal Horizontal scale amount, as a percentage.
- @param vertical Vertical scale amount, as a percentage.
- @param anchor Point used as the scale anchor.
  \*/
  resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void

/\*\*

- Scales only the selection boundary.
- @param horizontal Horizontal object scale amount, as a percentage.
- @param vertical Vertical object scale amount, as a percentage.
- @param anchor Point used as the scale anchor.
  \*/
  resizeBoundary(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void

/\*\*

- Applies object rotation.
- @param angle Rotation amount in degrees.
- @param anchor Point used for the rotation.
  \*/
  rotate(angle: number, anchor?: AnchorPosition): void

/\*\*

- Rotates only the selection boundary.
- @param angle Rotation angle in degrees.
- @param anchor Point used for the rotation.
  \*/
  rotateBoundary(angle: number, anchor?: AnchorPosition): void

/\*\*

- Selects a region.
- @param region Array of x and y corner coordinates for the selection, using [[x1, y1], [x2,y2],[x3, y3], [x4,y4]]
- @param type Method for combining the new selection with the existing selection.
- @param feather Feather amount.
- @param antiAlias When true, anti-aliasing applies.
  \*/
  select(region: any[], type?: SelectionType, feather?: number, antiAlias?: boolean): void

/\*\*

- Selects the full layer.
  \*/
  selectAll(): void

/\*\*

- Selects just the border of the selection at the specified width; later operations leave the interior selected area unchanged.
- @param width Border-selection width.
  \*/
  selectBorder(width: UnitValue | number): void

/\*\*

- Expands the selection to matching pixels across the image within tolerance.
- @param tolerance Tolerance range. Range: 0 to 255.
- @param antiAlias When true, anti-aliasing applies.
  \*/
  similar(tolerance: number, antiAlias: boolean): void

/\*\*

- Removes stray pixels inside or outside a color-based selection using a pixel radius.
- @param radius Pixel sample radius. Range: 0 to 100.
  \*/
  smooth(radius: number): void

/\*\*

- Saves the selection into a channel.
- @param into Channel receiving the stored selection.
- @param combination Method for adding the selection to the channel's existing contents.
  \*/
  store(into: Channel, combination?: SelectionType): void

/\*\*

- Applies a stroke to the selection.
- @param strokeColor Color used for the stroke.
- @param width Stroke width.
- @param location StrokeLocation for the stroke.
- @param mode ColorBlendMode applied to the stroke.
- @param opacity Percentage opacity for stroke color. Range: 1 to 100.
- @param preserveTransparency When true, transparency is preserved.
  \*/
  stroke(
  strokeColor: any,
  width: number,
  location?: StrokeLocation,
  mode?: ColorBlendMode,
  opacity?: number,
  preserveTransparency?: boolean,
  ): void

/\*\*

- Moves the object from its current location.
- @param deltaX Horizontal move amount.
- @param deltaY Vertical move amount.
  \*/
  translate(deltaX?: UnitValue | number, deltaY?: UnitValue | number): void

/\*\*

- Moves the selection boundary from its current location.
- @param deltaX Horizontal move amount.
- @param deltaY Vertical move amount.
  \*/
  translateBoundary(deltaX?: UnitValue | number, deltaY?: UnitValue | number): void
  }

/\*\*

- LayerSet groups art layer objects and nested layer set objects; commands can act on all layers in that LayerSet.
  \*/
  declare class LayerSet extends Layer {
  /\*\*
  - ArtLayers held by this LayerSet.
    \*/
    readonly artLayers: ArtLayers

/\*\*

- Enabled channels for the LayerSet; the list must contain component channels.
  \*/
  enabledChannels: Channel[]
