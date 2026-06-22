# Illustrator (part 7)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Changes a file's relative token and path.
- @param path Specifies the path relative to the folder specified by Relative.
- @param relative Specifies the current relative path token.
- @param newRelative Replacement relative path token.
  \*/
  aATFileRelativeChanged(path: string, relative: string, newRelative: string): string

/\*\*

- Shows a save, file-choice, or directory-choice dialog, then returns the selected file as a relative path string.
- @param path Specifies the path relative to the folder specified by Relative.
- @param relative Specifies the current relative path token.
- @param type Dialog type expressed as a string.
  \*/
  aATFileSaveDialog(path: string, relative: string, type: string): string

/\*\*

- Fetches a file path to the AAT editor swf.
  \*/
  aATGetEditorDialogFile(): File

/\*\*

- Fetches a file path to the AAT error dialog swf.
  \*/
  aATGetErrorDialogFile(): File

/\*\*

- Returns XML containing relative paths and their display UI strings.
  \*/
  aATGetListOfRelativePaths(): string

/\*\*

- Fetches the active session for the sequncer.
  \*/
  aATGetSession(): string

/\*\*

- Reads a session file as an extension to the editor.
  \*/
  aATLoadLibExtension(): string

/\*\*

- Reads the aat model to the editor.
  \*/
  aATLoadModel(): string

/\*\*

- Reads a session into the sequencer.
  \*/
  aATLoadSessionFile(): string

/\*\*

- Loads a UI-extension description into the editor.
  \*/
  aATLoadUIExtension(): string

/\*\*

- Moves the specified sequencer item.
- @param sessionIndex Session index for the top-most sequence containing the item being moved.
- @param moveThisID UID of the item to replace.
- @param newSessionIndex Session index for the destination top-most sequence.
- @param destinationSequenceID UID of the owning sequence.
- @param destinationIndex Insertion index.
  \*/
  aATMoveItem(
  sessionIndex: number,
  moveThisID: string,
  newSessionIndex: number,
  destinationSequenceID: string,
  destinationIndex: number,
  ): string

/\*\*

- Deletes the specified item from the sequencer.
- @param sessionIndex Session index for the top-most sequence that owns the item being added.
- @param item Specifies the item UID.
  \*/
  aATRemoveItem(sessionIndex: number, item: string): string

/\*\*

- Replaces the specified sequencer item.
- @param sessionIndex Session index for the top-most sequence that owns the item being added.
- @param replaceThisID UID of the item to replace.
- @param srcItemIDData Item ID used to construct the item.
- @param type Source used to construct the item.
  \*/
  aATReplaceItem(
  sessionIndex: number,
  replaceThisID: number,
  srcItemIDData: string,
  type: string,
  ): string

/\*\*

- Writes the active session in the sequencer to a new file.
  \*/
  aATSaveAsSession(): string

/\*\*

- Writes the active session in the sequencer to a file.
  \*/
  aATSaveSession(): string

/\*\*

- Writes the item-editor data back onto the item.
- @param sessionIndex Session index for the top-most sequence containing the item being edited.
- @param item Specifies the item UID.
- @param data XML data to apply.
  \*/
  applyDataToItem(sessionIndex: number, item: string, data: string): string

/\*\*

- Applies data to the sequencer item addressed in the item editor.
- @param sessionIndex Session index for the top-most sequence that owns the item being added.
- @param item Specifies the item UID.
- @param dataID XML data to apply.
- @param data XML data to apply.
  \*/
  applySingleDataPointToItem(
  sessionIndex: number,
  item: string,
  dataID: string,
  data: string,
  ): boolean

/\*\*

- \*/
  beep(): void

/\*\*

- Begins automation tests for the Sync Settings feature.
  \*/
  beginSyncSettingsAutomationTest(): boolean

/\*\*

- Begins automation tests for the Typekit Font feature.
  \*/
  beginTypekitFontAutomationTest(): boolean

/\*\*

- Concatenates two transformation matrices.
- @param matrix Specifies the matrix that is to be added to.
- @param secondMatrix Specifies: Second transformation matrix.
  \*/
  concatenateMatrix(matrix: Matrix, secondMatrix: Matrix): Matrix

/\*\*

- Concatenates a rotation matrix to a transformation matrix.
- @param matrix Specifies the matrix that is to be added to.
- @param angle Rotation angle, in degrees.
  \*/
  concatenateRotationMatrix(matrix: Matrix, angle: number): Matrix

/\*\*

- Concatenates a scale matrix to a transformation matrix.
- @param matrix Specifies the matrix that is to be added to.
- @param scaleX Horizontal scale percentage, where 100 = 100%.
- @param scaleY Vertical scale percentage, where 100 = 100%.
  \*/
  concatenateScaleMatrix(matrix: Matrix, scaleX?: number, scaleY?: number): Matrix

/\*\*

- Concatenates a translation to a transformation matrix.
- @param matrix Specifies the matrix that is to be added to.
- @param deltaX Horizontal translation amount.
- @param deltaY Vertical translation amount.
  \*/
  concatenateTranslationMatrix(matrix: Matrix, deltaX?: number, deltaY?: number): Matrix

/\*\*

- Converts sample-component color values between color spaces.
- @param sourceColorSpace Specifies the source color space.
- @param sourceColor Color being converted, supplied as an array of color components; when source-has-alpha is true, the first array position contains alpha.
- @param destColorSpace Specifies the destination color space.
- @param colorConvertPurpose Specifies the parameter which passes the purpose of conversion.
- @param sourceHasAlpha True when the source color includes an alpha channel.
- @param destHasAlpha True when the destination color includes an alpha channel.
  \*/
  convertSampleColor(
  sourceColorSpace: ImageColorSpace,
  sourceColor: number[],
  destColorSpace: ImageColorSpace,
  colorConvertPurpose: ColorConvertPurpose,
  sourceHasAlpha?: boolean,
  destHasAlpha?: boolean,
  ): number[]

/\*\*

- Copies current selection to the clipboard.
  \*/
  copy(): void

/\*\*

- Cuts current selection to the clipboard.
  \*/
  cut(): void

/\*\*

- Removes an existing workspace.
- @param workspaceName Workspace name to use.
  \*/
  deleteWorkspace(workspaceName: string): boolean

/\*\*

- Plays an action from the Actions Palette.
- @param action Name of the action to play; Action name letter case matters and must match the Actions palette.
- @param from Name of the action set that contains the action; Action Set name letter case must match the Actions palette.
- @param dialogs Whether action-related dialog boxes should be shown.
  \*/
  doScript(action: string, from: string, dialogs?: boolean): void

/\*\*

- Dumps the PGF portion of ai file to txt file.
- @param file Specifies the AI file to be opened.
- @param documentColorSpace Color-space override for pre-Illustrator 9 documents with multiple color models.
- @param pGFFile Destination folder for the output PGF file.
  \*/
  dumpPGFFile(file: File, documentColorSpace?: DocumentColorSpace, pGFFile?: File): boolean

/\*\*

- Runs a menu command using the menu shortcut string.
- @param menuCommandString Shortcut string for the menu command.
  \*/
  executeMenuCommand(menuCommandString: string): void

/\*\*

- Produces the JSON Data required by CCX Welcome.
- @param mode Mode that determines which data is provided.
  \*/
  getCCXUserJSONData(mode?: string): string

/\*\*

- Returns output from the last executed script.
  \*/
  getExecutionOutput(): string

/\*\*

- Produces the JSON Data required by Hello.
  \*/
  getHelloJSONData(): string

/\*\*

- Produces an identity matrix.
  \*/
  getIdentityMatrix(): Matrix

/\*\*

- Fetches detailed info from the specified PPD file.
- @param name Specifies the model name of the PPD file.
  \*/
  getPPDFileInfo(name: string): PPDFileInfo

/\*\*

- Returns the default document profile path for the supplied preset type.
- @param presetType Specifies the preset type.
  \*/
  getPresetFileOfType(presetType: DocumentPresetType): File

/\*\*

- For a preset name, attempts to fetch the settings from the preset template.
- @param preset Specifies the name of the preset.
  \*/
  getPresetSettings(preset: string): DocumentPreset

/\*\*

- Produces a rotation transformation matrix.
- @param angle Rotation angle, in degrees.
  \*/
  getRotationMatrix(angle?: number): Matrix

/\*\*

- Produces a scale transformation matrix.
- @param scaleX Horizontal scale percentage, where 100 = 100%.
- @param scaleY Vertical scale percentage, where 100 = 100%.
  \*/
  getScaleMatrix(scaleX?: number, scaleY?: number): Matrix

/\*\*

- Returns the scriptable help group for the app-bar search widget.
  \*/
  getScriptableHelpGroup(): any

/\*\*

- Produces a translation matrix.
- @param deltaX Horizontal translation amount.
- @param deltaY Vertical translation amount.
  \*/
  getTranslationMatrix(deltaX?: number, deltaY?: number): Matrix

/\*\*

- Fetches a string representing the AAT version.
  \*/
  getVersionString(): string

/\*\*

- Inverts a matrix.
- @param matrix Specifies the matrix to invert.
  \*/
  invertMatrix(matrix: Matrix): Matrix

/\*\*

- Checks equality between two matrices.
- @param matrix Specifies: First transformation matrix to compare.
- @param secondMatrix Specifies: Second transformation matrix.
  \*/
  isEqualMatrix(matrix: Matrix, secondMatrix: Matrix): boolean

/\*\*

- Specifies: Checks if fill is active or not.
  \*/
  isFillActive(): boolean

/\*\*

- Checks whether a matrix is singular (cannot be inverted)
- @param matrix Specifies the matrix to check.
  \*/
  isSingularMatrix(matrix: Matrix): boolean

/\*\*

- Specifies: Checks if stroke is active or not.
  \*/
  isStrokeActive(): boolean

/\*\*

- Indicates whether In Touch Workspace is active.
  \*/
  isTouchWorkspace(): boolean

/\*\*

- Indicates whether the user is sharing application usage data.
  \*/
  isUserSharingAppUsageData(): boolean

/\*\*

- Launches cep Extension given its ID.
- @param extensionID Launching Extension argument: the extension ID from the corresponding extension manifest.xml.
  \*/
  launchExtension(extensionID: string): number

/\*\*

- Loads an action into action palette.
- @param actionFilePath System path of the action file to load.
  \*/
  loadAction(actionFilePath: File): void

/\*\*

- Loads color settings from the file; an empty file spec turns color management off.
- @param fileSpec File specification for the color settings.
  \*/
  loadColorSettings(fileSpec: File): void

/\*\*

- Opens the specified document file.
- @param file Specifies the file to be opened.
- @param documentColorSpace Color-space override for pre-Illustrator 9 documents with multiple color models.
- @param options Open options for that file type.
  \*/
  open(file: File, documentColorSpace?: DocumentColorSpace, options?: any): Document

/\*\*

- Internal-only API.
- @param assetURL Internal-only parameter.
- @param thumbnailURL Internal-only parameter.
- @param options Internal-only parameter.
  \*/
  openCloudLibraryAssetForEditing(assetURL: File, thumbnailURL: File, options?: any): Document

/\*\*

- Pastes clipboard into the current document.
  \*/
  paste(): void

/\*\*

- Quits the application.
  \*/
  quit(): void

/\*\*

- Redoes the last transaction.
  \*/
  redo(): void

/\*\*

- Forces Illustrator to redraw its window(s)
  \*/
  redraw(): void

/\*\*

- Generates Creative Suite ActionScript Wrappers in specified directory.
- @param outputFolder Output file location.
  \*/
  reflectCSAW(outputFolder: File): void

/\*\*

- Restores the current workspace.
  \*/
  resetWorkspace(): boolean

/\*\*

- Executes API Tests from the TestAPI Plug-in.
- @param testName Running Tests argument, such as the test or suite name.
  \*/
  runAPITest(testName: string): void

/\*\*

- Writes a new workspace.
- @param workspaceName Workspace name to use.
  \*/
  saveWorkspace(workspaceName: string): boolean

/\*\*

- Sends a script message to the required plugin.
- @param pluginName Specifies: Plugin to which message needs to be sent.
- @param messageSelector Functionality to execute.
- @param inputString String-encoded data to pass.
  \*/
  sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string

/\*\*

- Internal-only API.
- @param options Options used for the PNG24 export.
  \*/
  setThumbnailOptionsForCloudLibrary(options: any): void

/\*\*

- Opens the application's color picker.
- @param color Initial color loaded into the color picker.
  \*/
  showColorPicker(color: Color): Color

/\*\*

- Fetches presets from the file.
- @param fileSpec File specification used as the import source.
  \*/
  showPresets(fileSpec: File): string[]

/\*\*

- Changes between workspaces.
- @param workspaceName Workspace name to use.
  \*/
  switchWorkspace(workspaceName: string): boolean

/\*\*

- Translates placeholder text into regular text, enabling Unicode points to be entered as hexadecimal values.
- @param text Specifies the placeholder text to be translated.
  \*/
  translatePlaceholderText(text: string): string

/\*\*

- Returns translated text for the supplied key and source data.
- @param key Specifies the string to translate.
- @param source Plugin name associated with the key source.
  \*/
  translateString(key: string, source: string): string

/\*\*

- Undoes the last transaction.
  \*/
  undo(): void

/\*\*

- Removes an action from action palette.
- @param setName Name for the set to be unloaded.
- @param actionName Name for the action to be unloaded.
  \*/
  unloadAction(setName: string, actionName: string): void
  }

/\*\*

- Represents a document.
  \*/
  declare class Document {
  /\*\*
  - Specifies the XMP packet string associated with the document.
    \*/
    XMPString: string

/\*\*

- Specifies the active data set.
  \*/
  activeDataSet: DataSet

/\*\*

- Specifies the active layer.
  \*/
  activeLayer: Layer

/\*\*

- Specifies the document's current view.
  \*/
  readonly activeView: View

/\*\*

- Contains all artboards in the document.
  \*/
  readonly artboards: Artboards

/\*\*

- Specifies the brushes defined in this document.
  \*/
  readonly brushes: Brushes

/\*\*

- Specifies the list of character styles in this document.
  \*/
  readonly characterStyles: CharacterStyles

/\*\*

- Specifies the name of the color profile of the document.
  \*/
  readonly colorProfileName: string

/\*\*

- Artwork collection for compound paths.
  \*/
  readonly compoundPathItems: CompoundPathItems

/\*\*

- \*/
  cropBox: Rect

/\*\*

- \*/
  cropStyle: CropOptions

/\*\*

- Specifies the data sets defined in this document.
  \*/
  readonly dataSets: DataSets

/\*\*

- Default color used for fills.
  \*/
  defaultFillColor: Color

/\*\*

- Controls whether artwork beneath a filled object overprints by default.
  \*/
  defaultFillOverprint: boolean

/\*\*

- Controls whether a new path should be filled.
  \*/
  defaultFilled: boolean

/\*\*

- Default line-cap type.
  \*/
  defaultStrokeCap: StrokeCap

/\*\*

- Default color used for strokes.
  \*/
  defaultStrokeColor: Color

/\*\*

- Starting offset into the dash pattern.
  \*/
  defaultStrokeDashOffset: number

/\*\*

- Default dash lengths; use {} for a solid line.
  \*/
  defaultStrokeDashes: number[]

/\*\*

- Default joint type.
  \*/
  defaultStrokeJoin: StrokeJoin

/\*\*

- Default choice between mitered (pointed) and beveled (squared-off) joins.
  \*/
  defaultStrokeMiterLimit: number

/\*\*

- Controls whether artwork beneath a stroked object overprints by default.
  \*/
  defaultStrokeOverprint: boolean

/\*\*

- Default stroke width.
  \*/
  defaultStrokeWidth: number

/\*\*

- Controls whether a new path should be stroked.
  \*/
  defaultStroked: boolean

/\*\*

- Specifies the color space used for the document.
  \*/
  readonly documentColorSpace: DocumentColorSpace

/\*\*

- Specifies the embedded art items in this layer.
  \*/
  readonly embeddedItems: EmbeddedItems

/\*\*

- Specifies the file associated with the document.
  \*/
  readonly fullName: File

/\*\*

- Specifies the bounds of the illustration excluding stroke width.
  \*/
  readonly geometricBounds: Rect

/\*\*

- Specifies the gradients available in this document.
  \*/
  readonly gradients: Gradients

/\*\*

- Specifies the graph art items in this document.
  \*/
  readonly graphItems: GraphItems

/\*\*

- Specifies the graphic styles defined in this document.
  \*/
  readonly graphicStyles: ArtStyles

/\*\*

- Specifies the group items in this document.
  \*/
  readonly groupItems: GroupItems

/\*\*

- \*/
  readonly height: number

/\*\*

- Specifies the list of inks in this document.
  \*/
  readonly inkList: Ink[]

/\*\*

- Specifies the Kinsoku set.
  \*/
  readonly kinsokuSet: string[]

/\*\*

- Specifies the layers in this document.
  \*/
  readonly layers: Layers

/\*\*

- Specifies the text frame items in this story.
  \*/
  readonly legacyTextItems: LegacyTextItems

/\*\*

- Specifies the mesh art items in this document.
  \*/
  readonly meshItems: MeshItems

/\*\*

- Specifies the Mojikumi set.
  \*/
  readonly mojikumiSet: string[]

/\*\*

- Specifies the document's name.
  \*/
  readonly name: string

/\*\*

- Document collection of non-native art items.
  \*/
  readonly nonNativeItems: NonNativeItems

/\*\*

- \*/
  readonly outputResolution: number

/\*\*

- Complete document artwork collection.
  \*/
  readonly pageItems: PageItems

/\*\*

- \*/
  pageOrigin: Point | [number, number]

/\*\*

- Specifies the list of paragraph styles in this document.
  \*/
  readonly paragraphStyles: ParagraphStyles

/\*\*

- Specifies the object's container.
  \*/
  readonly parent: object

/\*\*

- Document path specification.
  \*/
  readonly path: File

/\*\*

- Specifies the path artwork in this document.
  \*/
  readonly pathItems: PathItems

/\*\*

- Specifies the patterns available in this document.
  \*/
  readonly patterns: Patterns

/\*\*

- Specifies the placed art items in this document.
  \*/
  readonly placedItems: PlacedItems

/\*\*

- Plugin art items in this document.
  \*/
  readonly pluginItems: PluginItems

/\*\*

- \*/
  readonly printTiles: boolean

/\*\*

- Specifies the document raster effects settings.
  \*/
  rasterEffectSettings: RasterEffectOptions

/\*\*

- Document collection of raster art items.
  \*/
  readonly rasterItems: RasterItems

/\*\*

- \*/
  rulerOrigin: Point | [number, number]

/\*\*

- \*/
  readonly rulerUnits: RulerUnits

/\*\*

- Indicates whether the document has been saved.
  \*/
  saved: boolean

/\*\*

- Current document selection.
  \*/
  selection: any

/\*\*

- \*/
  readonly showPlacedImages: boolean

/\*\*

- \*/
  readonly splitLongPaths: boolean

/\*\*

- Specifies the custom spot colors available in this document.
  \*/
  readonly spots: Spots

/\*\*

- Indicates whether the file is a stationery file.
  \*/
  readonly stationery: boolean

/\*\*

- Specifies the story items in this document.
  \*/
  readonly stories: Stories

/\*\*

- Specifies the Swatch Groups in this document.
  \*/
  readonly swatchGroups: SwatchGroups

/\*\*

- Specifies the swatches in this document.
  \*/
  readonly swatches: Swatches

/\*\*

- Specifies the symbol items in this document.
  \*/
  readonly symbolItems: SymbolItems

/\*\*

- Specifies the symbols defined in this document.
  \*/
  readonly symbols: Symbols

/\*\*

- Specifies the tags in this document.
  \*/
  readonly tags: Tags

/\*\*

- Text frame items in this document.
  \*/
  readonly textFrames: TextFrameItems

/\*\*

- \*/
  readonly tileFullPages: boolean
