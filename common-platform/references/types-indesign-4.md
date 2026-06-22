# Indesign (part 4)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Preferences for text import.
  \*/
  readonly textImportPreferences: TextImportPreference

/\*\*

- Settings for text preferences.
  \*/
  readonly textPreferences: TextPreference

/\*\*

- Collection containing text variables.
  \*/
  readonly textVariables: TextVariables

/\*\*

- Properties for the text wrap preferences defining the default formatting for wrapping text around objects.
  \*/
  readonly textWrapPreferences: TextWrapPreference

/\*\*

- Collection containing tints.
  \*/
  readonly tints: Tints

/\*\*

- Current tool box states.
  \*/
  readonly toolBoxTools: ToolBox

/\*\*

- Settings for track changes preferences.
  \*/
  readonly trackChangesPreferences: TrackChangesPreference

/\*\*

- Transform preference properties defining how object transformations behave by default. Note: rotation, scaling, flipping, and shearing count as transforming.
  \*/
  readonly transformPreferences: TransformPreference

/\*\*

- Collection containing transformation matrices.
  \*/
  readonly transformationMatrices: TransformationMatrices

/\*\*

- Settings for transparency preferences.
  \*/
  readonly transparencyPreferences: TransparencyPreference

/\*\*

- Collection containing trap presets.
  \*/
  readonly trapPresets: TrapPresets

/\*\*

- Preferences controlling contextual ui display for alternates.
  \*/
  readonly typeContextualUiPrefs: TypeContextualUiPreference

/\*\*

- Item names in the undo stack.
  \*/
  readonly undoHistory: string[]

/\*\*

- Name assigned to the action on the top of the undo stack.
  \*/
  readonly undoName: string

/\*\*

- Swatches currently unused.
  \*/
  readonly unusedSwatches: Swatch[]

/\*\*

- Current user adobe id.
  \*/
  readonly userAdobeId: string

/\*\*

- Color for tracked changes and notes made by the user, supplied either as three doubles from 0 to 255 for R, G, and B or as an InCopy UI color.
  \*/
  userColor: [number, number, number] | InCopyUIColors

/\*\*

- Collection containing user dictionaries.
  \*/
  readonly userDictionaries: UserDictionaries

/\*\*

- Current user GUID.
  \*/
  readonly userGuid: string

/\*\*

- User linked to tracked changes and notes.
  \*/
  userName: string

/\*\*

- Application version string.
  \*/
  readonly version: string

/\*\*

- Settings for view preferences.
  \*/
  readonly viewPreferences: ViewPreference

/\*\*

- True when the Application is visible.
  \*/
  readonly visible: boolean

/\*\*

- Preferences for watermarks.
  \*/
  readonly watermarkPreferences: WatermarkPreference

/\*\*

- Collection containing windows.
  \*/
  readonly windows: Windows

/\*\*

- Preferences for word and RTF import.
  \*/
  readonly wordRTFImportPreferences: WordRTFImportPreference

/\*\*

- Collection containing XML export maps.
  \*/
  readonly xmlExportMaps: XMLExportMaps

/\*\*

- Settings for xML export preferences.
  \*/
  readonly xmlExportPreferences: XMLExportPreference

/\*\*

- Collection containing XML import maps.
  \*/
  readonly xmlImportMaps: XMLImportMaps

/\*\*

- Settings for xML import preferences.
  \*/
  readonly xmlImportPreferences: XMLImportPreference

/\*\*

- Settings for the XML preferences.
  \*/
  readonly xmlPreferences: XMLPreference

/\*\*

- Collection containing XML rule processors.
  \*/
  readonly xmlRuleProcessors: XMLRuleProcessors

/\*\*

- Collection containing XML tags.
  \*/
  readonly xmlTags: XMLTags

/\*\*

- Settings for xML view preferences.
  \*/
  readonly xmlViewPreferences: XMLViewPreference

/\*\*

- Brings the application to the front or makes it active.
  \*/
  activate(): void

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler callback or file.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Applies a menu customization set; an empty string resets menus and colorization (Show Full Menus), while omitting a string applies the default menu set.
- @param name Menu customization set name.
  \*/
  applyMenuCustomization(name: string): void

/\*\*

- Applies a shortcut set file; omitting the string applies the default shortcut set.
- @param name Shortcut set name.
  \*/
  applyShortcutSet(name: string): void

/\*\*

- Applies the requested workspace.
- @param name Workspace name.
  \*/
  applyWorkspace(name: string): void

/\*\*

- Cancels every background task.
  \*/
  cancelAllTasks(): void

/\*\*

- Arranges all document windows in a cascade.
  \*/
  cascadeWindows(): void

/\*\*

- Locates color entries matching the find what value and swaps in the change to value.
  \*/
  changeColor(): number

/\*\*

- Locates glyphs matching the find what value and swaps in the change to value.
- @param reverseOrder Set true to return the results in reverse order.
  \*/
  changeGlyph(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find what value and swaps in the change to value.
- @param reverseOrder Set true to return the results in reverse order.
  \*/
  changeGrep(reverseOrder: boolean): Text[]

/\*\*

- Locates objects using the current find what value, then changes them to the change to value.
- @param reverseOrder true yields results in reverse sequence.
  \*/
  changeObject(reverseOrder: boolean): PageItem[]

/\*\*

- Locates text using the current find what value and changes it to the change to value.
- @param reverseOrder true yields results in reverse sequence.
  \*/
  changeText(reverseOrder: boolean): Text[]

/\*\*

- Locates text by find character type value, then applies the change character type value.
- @param reverseOrder true yields results in reverse sequence.
  \*/
  changeTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Restores frame fitting options to their starting state.
  \*/
  clearFrameFittingOptions(): void

/\*\*

- Converts color values between color spaces.
- @param colorValue Color value to transform.
- @param sourceColorSpace Color space to transform from.
- @param destinationColorSpace Color space to transform into.
  \*/
  colorTransform(colorValue: number[], sourceColorSpace: ColorSpace, destinationColorSpace: ColorSpace): number[]

/\*\*

- Places the active document-window selection on the clipboard.
  \*/
  copy(): void

/\*\*

- Builds a mini-folio from asset and overlay description data.
- Mini folio descriptions use this schema:
- || Key || Type || Required? || Description ||
- | contentstackid | string | yes | explicit ID assigned to this stack |
- | tocImage | file | no | TOC image used for the mini-folio |
- | narrowdimension | int | no | Targetted export size along the narrow dimension |
- | widedimension | int | no | Targetted export size along the wide dimension |
- | smoothscrolling | @enum(SmoothScrollingOptions) | no | smooth scrolling setting for this stack (default is noSmoothScroll) |
- | locationforgeneratedassets | file | no | existing directory to receive generated assets when this key is supplied |
- | overlays | array | no | refer to the SDK Overlay Builder APIs |
- | assets | array | yes | mini - folio assets, defined below |
- | assetDependencies | array | no | asset-required files included in the package but left out of the manifest |
- | metadata | array | no | mini-folio metadata, defined below |
- | showprogressbar | boolean | no | true or false flag for showing a progress bar (default is false) |
- | targetviewerversion | string | no | when supplied in "major.minor.revision" form, produces a folio for that viewer version; when omitted, produces the latest folio format. | CS5 |
- Fields in the "assets" array:
- || Key || Type || Required? || Description ||
- | file | file | yes | asset file |
- | type | string | yes | asset kind: "web" for HTML content, or "image" for raster content |
- | width | int | yes | asset width |
- | height | int | yes | asset height |
- | orientation | string | yes | asset orientation: either "portrait" or "landscape" |
- | thumbnail | file | no | asset thumbnail used in browse mode |
- | scrubber | file | no | asset thumbnail used in scrubber mode |
- Fields in the "assetDependencies" array:
- || Key || Type || Required? || Description ||
- | file | file | no | dependent file |
- | relativePath | string | no | relative path to the file for package use |
- Fields in the "metadata" array:
- || Key || Type || Required? || Description ||
- | any string | string or boolean | no | arbitrary key/value pair whose key is a string and whose value is a string or boolean, including values described in "export folio meta data" |
- @param miniFolioDescription Dictionary for the custom mini folio being created. Can accept: Ordered array containing key:String, value:Boolean, Long Integer, Long Long Integer, String, File or Array of Any Types.
- @param destination File-writing destination.
  \*/
  createCustomMiniFolio(miniFolioDescription: any[], destination: File): void

/\*\*

- Makes a temporary duplicate of the file.
- @param from File selected for copying.
  \*/
  createTemporaryCopy(from: File): string

/\*\*

- Moves the active document-window selection to the clipboard.
  \*/
  cut(): void

/\*\*

- Removes a cloud document identified by a reference.
- @param assetReference Reference for the asset.
  \*/
  deleteCloudDocument(assetReference: string): boolean

/\*\*

- Removes the named find/change query.
- @param queryName Query selected for deletion.
- @param searchMode Search mode.
  \*/
  deleteFindChangeQuery(queryName: string, searchMode: SearchModes): void

/\*\*

- Removes XML markup tags that are not in use.
  \*/
  deleteUnusedTags(): void

/\*\*

- Runs a script in the chosen language as one transaction.
- @param script Script content or file to run.
- @param language Script language; when omitted, the caller's method language is used.
- @param withArguments Arguments array passed into the script.
- @param undoMode Undo handling for this script.
- @param undoName Name assigned to the undo step when entire script undo mode is used.
  \*/
  doScript(script: File | string | Function, language?: ScriptLanguage, withArguments?: any[], undoMode?: UndoModes, undoName?: string): any

/\*\*

- Reports memory allocations for every mark inside the requested range.
- @param from First mark in the range.
- @param to Last mark in the range.
  \*/
  dumpBetweenMemoryMarks(from: number[], to: number[]): void

/\*\*

- Reports memory allocations starting from the given mark.
- @param from Mark used as the dump starting point.
  \*/
  dumpFromMemoryMark(from: number[]): void

/\*\*

- Exports the requested documents into an article folio.
- Note: Return data is the difference from @method(exportMiniFolio): @method(exportMiniFolio) supplies an array of warning strings, while this method supplies an XML structure.
- @param destination File-writing destination.
- @param portraitDocument InDesign document used for the stack's portrait orientation.
- @param landscapeDocument InDesign document used for the stack's landscape orientation.
- @param folioMetadata Optional mini folio meta data. Can accept: Ordered array containing key:String, value:String.
- @param miniFolioParams Mini folio export options. Can accept: Ordered array containing dataField:String, dataValue:Any Type.
  \*/
  exportArticleFolio(destination: File, portraitDocument: Document, landscapeDocument: Document, folioMetadata: any[], miniFolioParams: any[]): string

/\*\*

- Exports the requested document into a DPS article.
- Note: This call is related to @method(exportMiniFolio), with a different parameter set.
- @param destination File-writing destination.
- @param document Source InDesign document.
- @param dpsArticleParams DPS article export options. Can accept: Ordered array containing dataField:String, dataValue:Any Type.
  \*/
  exportDpsArticle(destination: File, document: Document, dpsArticleParams: any[]): string[]

/\*\*

- Writes the selected documents into a directory.
- @param destination Directory that receives the folio.
- @param miniFolioList Mini folio or folios added to the folio.
- @param folioMetadata Folio meta data. Can accept: Ordered array containing key:String, value:String.
- @param exportFolioParams Extra folio export options. Can accept: Ordered array containing dataField:String, dataValue:Any Type.
  \*/
  exportFolioToDirectory(destination: File, miniFolioList: File | File[], folioMetadata: any[], exportFolioParams: any[]): void

/\*\*

- Writes the selected documents as a compressed folio file containing non-compressed mini folios.
- @param destination Package-writing destination.
- @param miniFolioList Mini folio or folios added to the folio.
- @param folioMetadata Folio meta data. Can accept: Ordered array containing key:String, value:String.
- @param exportFolioParams Extra folio export options. Can accept: Ordered array containing dataField:String, dataValue:Any Type.
  \*/
  exportFolioToDirectoryPackage(destination: File, miniFolioList: File | File[], folioMetadata: any[], exportFolioParams: any[]): void

/\*\*

- Writes the selected documents as a compressed folio file containing compressed mini folios.
- @param destination Package-writing destination.
- @param miniFolioList Mini folio or folios added to the folio.
- @param folioMetadata Folio meta data. Can accept: Ordered array containing key:String, value:String.
- @param exportFolioParams Extra folio export options. Can accept: Ordered array containing dataField:String, dataValue:Any Type.
  \*/
  exportFolioToPackage(destination: File, miniFolioList: File | File[], folioMetadata: any[], exportFolioParams: any[]): void

/\*\*

- Exports the requested documents into a mini-folio.
- @param destination File-writing destination.
- @param portraitDocument InDesign document used for the stack's portrait orientation.
- @param landscapeDocument InDesign document used for the stack's landscape orientation.
- @param folioMetadata Optional mini folio meta data. Can accept: Ordered array containing key:String, value:String.
- @param miniFolioParams Mini folio export options. Can accept: Ordered array containing dataField:String, dataValue:Any Type.
  \*/
  exportMiniFolio(destination: File, portraitDocument: Document, landscapeDocument: Document, folioMetadata: any[], miniFolioParams: any[]): string[]

/\*\*

- Writes presets into a file.
- @param format Preset format.
- @param to Export target file.
- @param versionComments Comments attached to this version.
- @param forceSave Forces version saving.
  \*/
  exportPresets(format: ExportPresetFormat, to: File, versionComments: string, forceSave?: boolean): void

/\*\*

- Exports the selection as assets needed by a cloud library.
- @param to Export file path.
  \*/
  exportSelectionForCloudLibrary(to: File): boolean

/\*\*

- Writes stroke styles or presets out.
- @param to File used for saving.
- @param strokeStyleList Stroke styles selected for saving.
- @param versionComments Comment for this version.
- @param forceSave Forces version saving.
  \*/
  exportStrokeStyles(to: File, strokeStyleList: StrokeStyle[], versionComments: string, forceSave?: boolean): void

/\*\*

- Reads the label value stored under a key.
- @param key Key to query.
  \*/
  extractLabel(key: string): string

/\*\*

- Searches for color matching the find what value.
  \*/
  findColor(): number

/\*\*

- Searches for glyphs matching the find what value.
- @param reverseOrder true yields results in reverse sequence.
  \*/
  findGlyph(reverseOrder: boolean): Text[]

/\*\*

- Searches text for the find what value.
- @param reverseOrder true yields results in reverse sequence.
  \*/
  findGrep(reverseOrder: boolean): Text[]

/\*\*

- Looks up locale-independent string(s) in the internal localization database for the supplied current-locale string.
- @param for* String to look up.
  \*/
  findKeyStrings(for*: string): string[]

/\*\*

- Searches objects for the find what value.
- @param reverseOrder true yields results in reverse sequence.
  \*/
  findObject(reverseOrder: boolean): PageItem[]

/\*\*

- Searches text for the find what value.
- @param reverseOrder true yields results in reverse sequence.
  \*/
  findText(reverseOrder: boolean): Text[]

/\*\*

- Searches text for the find character type value.
- @param reverseOrder true yields results in reverse sequence.
  \*/
  findTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Creates an IDML schema.
- @param to Folder path for the schema.
- @param packageFormat true creates the package-format schema (multiple files); false is the default.
  \*/
  generateIDMLSchema(to: File, packageFormat: boolean): void

/\*\*

- Retrieves all overlays.
- @param portraitDocumentForCheckingOverlays Portrait document used to check overlays.
- @param landscapeDocumentForCheckingOverlays Landscape document used to check overlays.
- @param miniFolioParams Mini folio export options. Can accept: Ordered array containing dataField:String, dataValue:Any Type.
  \*/
  getAllOverlays(portraitDocumentForCheckingOverlays: Document, landscapeDocumentForCheckingOverlays: Document, miniFolioParams: any[]): any[]

/\*\*

- Returns CCX Welcome dialog data as a JSON string.
- @param jsondata Mode descriptor.
  \*/
  getCCXUserJSONData(jsondata: string): string

/\*\*

- Queries current digital publishing article version numbers requested by digpubArticleVersion.
- @param digpubArticleVersion Version selector(s) to retrieve.
  \*/
  getDigpubArticleVersion(digpubArticleVersion: DigpubArticleVersion): string[]

/\*\*

- Queries current digital publishing version numbers requested by digpubVersion.
- @param digpubVersion Version selector(s) to retrieve.
  \*/
  getDigpubVersion(digpubVersion: DigpubVersion): string[]

/\*\*

- Resolves the object specifier into object references.
  \*/
  getElements(): Application[]

/\*\*

- Returns a style-conflict resolution strategy, or false when the user cancels.
- @param charOrParaStyle Style type to inspect.
  \*/
  getStyleConflictResolutionStrategy(charOrParaStyle: StyleType): any

/\*\*

- Lists article viewer versions supported by the digital publishing plugin.
  \*/
  getSupportedArticleViewerVersions(): string[]

/\*\*

- Lists viewer versions supported by the digital publishing plugin.
  \*/
  getSupportedViewerVersions(): string[]

/\*\*

- Returns the count used when naming the next untitled document.
  \*/
  getUntitledCount(): number

/\*\*

- Asks whether cloud-text addition should use text-frame content or the full story for a threaded text frame.
  \*/
  getUserChoiceForCloudTextAddition(): any

/\*\*

- Loads a process color swatch from a preloaded Adobe color book.
- @param name Process color to load.
  \*/
  importAdobeSwatchbookProcessColor(name: string): Color

/\*\*

- Loads a spot color swatch from an Adobe color book.
- @param name Spot color to load.
  \*/
  importAdobeSwatchbookSpotColor(name: string): Color

/\*\*

- Loads presets from the given file.
- @param format Preset type to import.
- @param from File that supplies the presets.
  \*/
  importFile(format: ExportPresetFormat, from: File): void

/\*\*

- Loads the requested styles.
- @param format Style types to import.
- @param from File containing the styles to import.
- @param globalStrategy Strategy for resolving imported-style name clashes with existing styles.
  \*/
  importStyles(format: ImportFormat, from: File, globalStrategy?: GlobalClashResolutionStrategy): void

/\*\*

- Stores a label value under the specified key.
- @param key Key to set.
- @param value Value to associate with the key.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Internal-only black box method reserved for the InDesign Engineering team.
- @param internalParameter1 First internal parameter.
- @param internalParameter2 Second internal parameter.
  \*/
  internalMethod(internalParameter1: string, internalParameter2: string): string

/\*\*

- Displays InDesign's Color Picker.
- @param space RGB, CMYK, or LAB color space.
- @param colorValue Color component values.
  \*/
  invokeColorPicker(space: ColorSpace, colorValue: number[]): string

/\*\*

- Reports whether the app is currently using touch mode.
  \*/
  isAppInTouchMode(): boolean

/\*\*

- Reports whether the user opted in to app usage-data sharing.
  \*/
  isUserSharingAppUsageData(): boolean

/\*\*

- Reads conditions from the given file.
- @param from File path containing the conditions.
- @param loadConditionSets true also loads the condition sets.
  \*/
  loadConditions(from: File, loadConditionSets: boolean): void

/\*\*

- Reads the named find/change query.
- @param queryName Query selected for loading.
- @param searchMode Search mode.
  \*/
  loadFindChangeQuery(queryName: string, searchMode: SearchModes): void

/\*\*

- Reads a motion preset from the given file.
- @param from Flash motion preset file.
  \*/
  loadMotionPreset(from: File): MotionPreset

/\*\*

- Reads a preflight profile from the given file.
- @param from InDesign preflight profile file or InDesign document.
  \*/
  loadPreflightProfile(from: File): PreflightProfile

/\*\*

- Reads swatches from the given file.
- @param from Swatch file or InDesign document.
  \*/
  loadSwatches(from: File): void

/\*\*

- Reads XML markup tags from the given file.
- @param from File path containing the tags.
  \*/
  loadXMLTags(from: File): void

/\*\*

- Retrieves server memory statistics.
  \*/
  memoryStatistics(): any[]

/\*\*

- Mounts a Version Cue project.
- @param serverURL URL for the Version Cue server containing the project.
- @param projectName Version Cue project name to mount.
  \*/
  mountProject(serverURL: string, projectName: string): void

/\*\*

- Opens a document, book, or library from the supplied file path.
- @param from File path(s) to the document, book, or library.
- @param showingWindow true displays the document in a window; false opens it without showing a window.
- @param openOption Document opening behavior.
  \*/
  open(from: File | File[], showingWindow?: boolean, openOption?: OpenOptions): any

/\*\*

- Opens a cloud library asset for editing.
- @param jsondata JSON encoded information for the asset to edit.
  \*/
  openCloudAssetForEdit(jsondata: string): boolean

/\*\*

- Opens a cloud document identified by a reference.
- @param assetReference Reference for the asset.
- @param showingWindow true displays the document in a window; false opens it without showing a window.
  \*/
  openCloudDocument(assetReference: string, showingWindow?: boolean): Document

/\*\*

- Opens the panel tied to the action.
- @param id ID.
  \*/
  openPanel(id: number): void

/\*\*

- Packages a folder into a UCF file.
- @param sourceFolder Folder packaged into an IDML file; structure is not validated against the IDML spec, so the caller must ensure the folder is organized correctly.
- @param ucfFile Destination UCF file, overwritten when it already exists.
- @param mimeMediaType MIME media type; by default the value identifies the package as IDML.
  \*/
  packageUCF(sourceFolder: File, ucfFile: File, mimeMediaType?: string): void

/\*\*

- Inserts clipboard data into the active document window.
  \*/
  paste(): void

/\*\*

- Inserts clipboard data into the active document window at the corresponding original-document position.
  \*/
  pasteInPlace(): void

/\*\*

- Inserts clipboard data into the selected object in the active document window.
  \*/
  pasteInto(): void

/\*\*

- Inserts clipboard data without formatting into the active document window.
  \*/
  pasteWithoutFormatting(): void

/\*\*

- Retrieves the current value for a performance metric.
- @param for* Status requested from InDesign.
  \*/
  performanceMetric(for*: number | PerformanceMetricOptions): any

/\*\*

- Retrieves the long name for a performance metric.
- @param for* Status requested from InDesign.
  \*/
  performanceMetricLongName(for*: number | PerformanceMetricOptions): string
