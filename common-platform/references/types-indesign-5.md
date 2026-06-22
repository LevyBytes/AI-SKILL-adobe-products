# Indesign (part 5)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Retrieves the short name for a performance metric.
- @param for* Status requested from InDesign.
  \*/
  performanceMetricShortName(for*: number | PerformanceMetricOptions): string

/\*\*

- Places one or more files using place menu item behavior; current preferences decide whether to load the place gun or replace the selected object.
- @param fileName File or files to place.
- @param showingOptions Whether to show the import options dialog.
- @param withProperties Defaults applied to objects being placed.
  \*/
  place(fileName: File | File[], showingOptions?: boolean, withProperties?: object): void

/\*\*

- Prints the requested file or files.
- @param from File path or paths.
- @param printDialog Whether to display the print dialog.
- @param using Printer preset used for printing.
  \*/
  print(from: File | File[], printDialog: boolean, using: PrinterPresetTypes | PrinterPreset): void

/\*\*

- Exits the application.
- @param saving Save option applied to open-document changes before quitting.
  \*/
  quit(saving?: SaveOptions): void

/\*\*

- Reapplies the last undone action.
  \*/
  redo(): void

/\*\*

- Detaches the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Removes the file from the most recently used files list.
- @param to File selected for removal.
  \*/
  removeFileFromRecentFiles(to: File): boolean

/\*\*

- Stores the named find/change query.
- @param queryName Query selected for saving.
- @param searchMode Search mode.
  \*/
  saveFindChangeQuery(queryName: string, searchMode: SearchModes): void

/\*\*

- Writes the selected swatch or swatches to a swatchbook file.
- @param to Swatchbook file used for saving.
- @param swatchList Swatch or swatches selected for saving.
- @param versionComments Comment for this version.
- @param forceSave true forces version saving.
  \*/
  saveSwatches(to: File, swatchList: Swatch[], versionComments: string, forceSave?: boolean): void

/\*\*

- Writes a tag set into an external file.
- @param to Full file path used to save the tags.
- @param versionComments Comment for this version.
- @param forceSave true forces version saving.
  \*/
  saveXMLTags(to: File, versionComments: string, forceSave?: boolean): void

/\*\*

- Selects the requested object or objects.
- @param selectableItems Objects to select.
- @param existingSelection Selection status of the Application relative to objects already selected.
  \*/
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): void

/\*\*

- Applies application preferences.
- @param applicationPreferences IDML defaults file or enumeration.
  \*/
  setApplicationPreferences(applicationPreferences: File | LanguageAndRegion): void

/\*\*

- Sets cloud libraries information.
- @param librariesCollectionInfo JSON encoded details for the cloud libraries collection.
  \*/
  setCloudLibraryCollection(librariesCollectionInfo: string): void

/\*\*

- Defines export options for cloud asset generation.
- @param maxwidth Maximum generated thumbnail width in pixels.
- @param maxheight Maximum generated thumbnail height in pixels.
  \*/
  setCloudLibraryOptions(maxwidth: number, maxheight: number): void

/\*\*

- Sets the count used when naming the next untitled document.
- @param untitledCount Count used for the next untitled document name. Only positive values are expected.
  \*/
  setUntitledCount(untitledCount: number): void

/\*\*

- Tiles every document window.
  \*/
  tileWindows(): void

/\*\*

- Generates executable source text that resolves to the Application.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Shows or hides the full panel system.
  \*/
  togglePanelSystemVisibility(): void

/\*\*

- Localizes a key string according to the current application locale.
- @param for* Key string to localize.
  \*/
  translateKeyString(for*: string): string

/\*\*

- Reverses the last action.
  \*/
  undo(): void

/\*\*

- Expands a UCF file into a folder structure.
- @param ucfFile UCF file to unpackage.
- @param destinationFolder Destination folder for the unpackaged UCF file; created when missing.
  \*/
  unpackageUCF(ucfFile: File, destinationFolder: File): void

/\*\*

- Checks the various Fonts folders for new fonts.
  \*/
  updateFonts(): void

/\*\*

- Blocks until every background task finishes.
  \*/
  waitForAllTasks(): TaskState[]
  }

/\*\*

- Background task object.
  \*/
  declare class BackgroundTask {
  /\*\*
  - Alerts collected while this task object runs. Can return: Array of Array of 2 TaskAlertType enumerators or Strings.
    \*/
    readonly alerts: any[]

/\*\*

- Document name handled by this task.
  \*/
  readonly documentName: string

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Unique ID for the BackgroundTask.
  \*/
  readonly id: number

/\*\*

- Position of the BackgroundTask inside its containing object.
  \*/
  readonly index: number

/\*\*

- true when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- BackgroundTask name.
  \*/
  readonly name: string

/\*\*

- Parent object for the BackgroundTask (a Application).
  \*/
  readonly parent: Application

/\*\*

- Progress details for this task.
  \*/
  readonly percentDone: number

/\*\*

- Property bag for setting several properties together.
  \*/
  properties: object

/\*\*

- Current status for this task object.
  \*/
  readonly status: TaskState

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Stops the requested background task.
  \*/
  cancelTask(): void

/\*\*

- Resolves the object specifier into object references.
  \*/
  getElements(): BackgroundTask[]

/\*\*

- Looks up one property in task metadata.
- @param name Task property being queried.
  \*/
  queryProperty(name: string): any

/\*\*

- Detaches the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Generates executable source text that resolves to the BackgroundTask.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Blocks until the task finishes.
  \*/
  waitForTask(): TaskState
  }

/\*\*

- Collection of background task objects.
  \*/
  declare class BackgroundTasks {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the BackgroundTask at the specified index.
- @param index Index.
  \*/
  [index: number]: BackgroundTask

/\*\*

- Retrieves any BackgroundTask from the collection.
  \*/
  anyItem(): BackgroundTask

/\*\*

- Displays the element count for the BackgroundTask.
  \*/
  count(): number

/\*\*

- Retrieves all BackgroundTask objects in the collection.
  \*/
  everyItem(): BackgroundTask[]

/\*\*

- Retrieves the first BackgroundTask in the collection.
  \*/
  firstItem(): BackgroundTask

/\*\*

- Retrieves the BackgroundTask matching the specified index or name.
- @param index Index or name.
  \*/
  item(index: number | string): BackgroundTask

/\*\*

- Retrieves the BackgroundTask with the specified ID.
- @param id ID.
  \*/
  itemByID(id: number): BackgroundTask

/\*\*

- Retrieves the BackgroundTask with the specified name.
- @param name Name.
  \*/
  itemByName(name: string): BackgroundTask

/\*\*

- Retrieves BackgroundTasks inside the requested range.
- @param from BackgroundTask, index, or name at the range start.
- @param to BackgroundTask, index, or name at the range end.
  \*/
  itemByRange(from: BackgroundTask | number | string, to: BackgroundTask | number | string): BackgroundTask[]

/\*\*

- Retrieves the last BackgroundTask in the collection.
  \*/
  lastItem(): BackgroundTask

/\*\*

- Retrieves the middle BackgroundTask in the collection.
  \*/
  middleItem(): BackgroundTask

/\*\*

- Retrieves the BackgroundTask whose index comes after the specified BackgroundTask.
- @param obj BackgroundTask before the desired BackgroundTask.
  \*/
  nextItem(obj: BackgroundTask): BackgroundTask

/\*\*

- Retrieves the BackgroundTask whose index comes before the specified index.
- @param obj Index of the BackgroundTask after the desired BackgroundTask.
  \*/
  previousItem(obj: BackgroundTask): BackgroundTask

/\*\*

- Generates executable source text that resolves to the BackgroundTask.
  \*/
  toSource(): string
  }

/\*\*

- Document object.
  \*/
  declare class Document {
  /\*\*
  - Fires after the Document becomes active; bubbles and cannot be canceled.
    \*/
    static readonly `AFTER_ACTIVATE`: string

/\*\*

- Fires after a Document export; bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_EXPORT`: string

/\*\*

- Fires after a file is imported into a Document; bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_IMPORT`: string

/\*\*

- Fires after Document links are added, deleted, or modified; bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_LINKS_CHANGED`: string

/\*\*

- Fires after a Document is created; bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_NEW`: string

/\*\*

- Fires after a Document is opened; bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_OPEN`: string

/\*\*

- Fires after a Document is printed; bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_PRINT`: string

/\*\*

- Fires after a Document is reverted; bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_REVERT`: string

/\*\*

- Fires after a Document is saved; bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_SAVE`: string

/\*\*

- Fires after a Document is saved under a new name; bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_SAVE_AS`: string

/\*\*

- Fires after a copy of a Document is saved; bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_SAVE_A_COPY`: string

/\*\*

- Fires before a Document is closed; bubbles and cannot be canceled.
  \*/
  static readonly `BEFORE_CLOSE`: string

/\*\*

- Fires before the Document becomes inactive; bubbles and cannot be canceled.
  \*/
  static readonly `BEFORE_DEACTIVATE`: string

/\*\*

- Fires before a Document is exported; bubbles and can be canceled.
  \*/
  static readonly `BEFORE_EXPORT`: string

/\*\*

- Fires before a file is imported into a Document; bubbles and can be canceled.
  \*/
  static readonly `BEFORE_IMPORT`: string

/\*\*

- Fires before a Document is printed; bubbles and can be canceled.
  \*/
  static readonly `BEFORE_PRINT`: string

/\*\*

- Fires before a Document is reverted; bubbles and can be canceled.
  \*/
  static readonly `BEFORE_REVERT`: string

/\*\*

- Fires before a Document is saved; bubbles and can be canceled.
  \*/
  static readonly `BEFORE_SAVE`: string

/\*\*

- Fires before a Document is saved under a new name; bubbles and can be canceled.
  \*/
  static readonly `BEFORE_SAVE_AS`: string

/\*\*

- Fires before a copy of a Document is saved; bubbles and can be canceled.
  \*/
  static readonly `BEFORE_SAVE_A_COPY`: string

/\*\*

- Fires after a Document export is canceled or fails; bubbles and cannot be canceled.
  \*/
  static readonly `FAILED_EXPORT`: string

/\*\*

- true uses LAB alternates for spot colors when available.
  \*/
  accurateLABSpots: boolean

/\*\*

- Currently active layer.
  \*/
  activeLayer: Layer | string

/\*\*

- Current preflight process tied to this document.
  \*/
  readonly activeProcess: PreflightProcess

/\*\*

- Settings for adjust layout preferences.
  \*/
  readonly adjustLayoutPreferences: AdjustLayoutPreference

/\*\*

- Rendering intent for colors produced by transparency interactions after page blending.
  \*/
  afterBlendingIntent: RenderingIntent

/\*\*

- Every Cell style.
  \*/
  readonly allCellStyles: CellStyle[]

/\*\*

- All character styles, regardless of group.
  \*/
  readonly allCharacterStyles: CharacterStyle[]

/\*\*

- All graphics contained by the Document.
  \*/
  readonly allGraphics: Graphic[]

/\*\*

- Every object style contained by the Document.
  \*/
  readonly allObjectStyles: ObjectStyle[]

/\*\*

- All page items contained by the Document.
  \*/
  readonly allPageItems: PageItem[]

/\*\*

- All paragraph styles, regardless of group.
  \*/
  readonly allParagraphStyles: ParagraphStyle[]

/\*\*

- Every Table style.
  \*/
  readonly allTableStyles: TableStyle[]

/\*\*

- Default settings for anchored objects.
  \*/
  readonly anchoredObjectDefaults: AnchoredObjectDefault

/\*\*

- Settings for anchored objects.
  \*/
  readonly anchoredObjectSettings: AnchoredObjectSetting

/\*\*

- Article collection.
  \*/
  readonly articles: Articles

/\*\*

- Assignment collection.
  \*/
  readonly assignments: Assignments

/\*\*

- Document-linked XML element.
  \*/
  readonly associatedXMLElement: XMLItem

/\*\*

- Settings for baseline frame grid options.
  \*/
  readonly baselineFrameGridOptions: BaselineFrameGridOption

/\*\*

- Bookmark collection.
  \*/
  readonly bookmarks: Bookmarks

/\*\*

- Button preference settings.
  \*/
  readonly buttonPreferences: ButtonPreference

/\*\*

- Button collection.
  \*/
  readonly buttons: Buttons

/\*\*

- Cell style group collection.
  \*/
  readonly cellStyleGroups: CellStyleGroups

/\*\*

- Cell style mapping collection.
  \*/
  readonly cellStyleMappings: CellStyleMappings

/\*\*

- Cell style collection.
  \*/
  readonly cellStyles: CellStyles

/\*\*

- Chapter numbering preference settings.
  \*/
  readonly chapterNumberPreferences: ChapterNumberPreference

/\*\*

- Char style mapping collection.
  \*/
  readonly charStyleMappings: CharStyleMappings

/\*\*

- Character style group collection.
  \*/
  readonly characterStyleGroups: CharacterStyleGroups

/\*\*

- Character style collection.
  \*/
  readonly characterStyles: CharacterStyles

/\*\*

- Checkbox collection.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- CJK grid preference settings.
  \*/
  readonly cjkGridPreferences: CjkGridPreference

/\*\*

- Cloud path for a cloud document; otherwise this raises an error.
  \*/
  readonly cloudPath: string

/\*\*

- Policy controlling CMYK color handling: profile reading and embedding, embedded-profile versus working-space mismatches, and color transfer between documents.
  \*/
  cmykPolicy: ColorSettingsPolicy

/\*\*

- Active CMYK profile.
  \*/
  cmykProfile: string

/\*\*

- Valid CMYK profile list.
  \*/
  readonly cmykProfileList: string[]

/\*\*

- Color group collection.
  \*/
  readonly colorGroups: ColorGroups

/\*\*

- Color collection.
  \*/
  readonly colors: Colors

/\*\*

- Combobox collection.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- Composite font collection.
  \*/
  readonly compositeFonts: CompositeFonts

/\*\*

- Conditional-text condition set collection.
  \*/
  readonly conditionSets: ConditionSets

/\*\*

- Conditional text preference settings.
  \*/
  readonly conditionalTextPreferences: ConditionalTextPreference

/\*\*

- Conditional-text condition collection.
  \*/
  readonly conditions: Conditions

/\*\*

- true when the Document was converted.
  \*/
  readonly converted: boolean

/\*\*

- Cross reference format collection.
  \*/
  readonly crossReferenceFormats: CrossReferenceFormats

/\*\*

- Cross reference text source collection.
  \*/
  readonly crossReferenceSources: CrossReferenceSources

/\*\*

- Dashed stroke style collection.
  \*/
  readonly dashedStrokeStyles: DashedStrokeStyles

/\*\*

- Data merge image placeholder collection.
  \*/
  readonly dataMergeImagePlaceholders: DataMergeImagePlaceholders

/\*\*

- Data merge option properties defining the data merge.
  \*/
  readonly dataMergeOptions: DataMergeOption

/\*\*

- Data merge properties defining fields and preferences.
  \*/
  readonly dataMergeProperties: DataMerge

/\*\*

- Data merge QR code placeholder collection.
  \*/
  readonly dataMergeQrcodePlaceholders: DataMergeQrcodePlaceholders

/\*\*

- Data merge text placeholder collection.
  \*/
  readonly dataMergeTextPlaceholders: DataMergeTextPlaceholders

/\*\*

- Bitmap image rendering intent.
  \*/
  defaultImageIntent: RenderingIntent

/\*\*

- Settings for user dictionary preferences.
  \*/
  readonly dictionaryPreferences: DictionaryPreference

/\*\*

- Document preference settings.
  \*/
  readonly documentPreferences: DocumentPreference

/\*\*

- Dotted stroke style collection.
  \*/
  readonly dottedStrokeStyles: DottedStrokeStyles

/\*\*

- DTD collection.
  \*/
  readonly dtds: DTDs

/\*\*

- Version Cue editing state for the file.
  \*/
  readonly editingState: EditingState

/\*\*

- Endnote option settings.
  \*/
  readonly endnoteOptions: EndnoteOption

/\*\*

- Endnote text frame collection.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Settings for EPub export preferences.
  \*/
  readonly epubExportPreferences: EPubExportPreference

/\*\*

- Settings for EPub fixed layout export preferences.
  \*/
  readonly epubFixedLayoutExportPreferences: EPubFixedLayoutExportPreference

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Default export for web preferences.
  \*/
  readonly exportForWebPreferences: ExportForWebPreference

/\*\*

- Full path to the file.
  \*/
  readonly filePath: File

/\*\*

- Font collection.
  \*/
  readonly fonts: Fonts

/\*\*

- Footnote option settings.
  \*/
  readonly footnoteOptions: FootnoteOption

/\*\*

- Form field collection.
  \*/
  readonly formFields: FormFields

/\*\*

- Frame fitting option applied to placed or pasted content; usable on a frame, object style, document, or the application.
  \*/
  readonly frameFittingOptions: FrameFittingOption

/\*\*

- Full path to the Document, including the Document name.
  \*/
  readonly fullName: File

/\*\*

- Galley preference settings.
  \*/
  readonly galleyPreferences: GalleyPreference

/\*\*

- Gradient collection.
  \*/
  readonly gradients: Gradients

/\*\*

- Graphic line collection.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Grid preference settings.
  \*/
  readonly gridPreferences: GridPreference

/\*\*

- Group collection.
  \*/
  readonly groups: Groups

/\*\*

- Guide preference settings.
  \*/
  readonly guidePreferences: GuidePreference

/\*\*

- Guide collection.
  \*/
  readonly guides: Guides

/\*\*

- Settings for HTML export preferences.
  \*/
  readonly htmlExportPreferences: HTMLExportPreference

/\*\*

- Settings for HTML FXL export preferences.
  \*/
  readonly htmlFXLExportPreferences: HTMLFXLExportPreference

/\*\*

- Hyperlink external page destination collection.
  \*/
  readonly hyperlinkExternalPageDestinations: HyperlinkExternalPageDestinations
