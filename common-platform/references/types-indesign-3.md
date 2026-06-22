# Indesign (part 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Retrieves an arbitrary IdleTask from this collection.
  \*/
  anyItem(): IdleTask

/\*\*

- Reports how many elements the IdleTask contains.
  \*/
  count(): number

/\*\*

- Retrieves all IdleTask entries from this collection.
  \*/
  everyItem(): IdleTask[]

/\*\*

- Retrieves the first IdleTask from this collection.
  \*/
  firstItem(): IdleTask

/\*\*

- Retrieves the IdleTask matching the requested index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): IdleTask

/\*\*

- Retrieves the IdleTask matching the requested ID.
- @param id ID value.
  \*/
  itemByID(id: number): IdleTask

/\*\*

- Retrieves the IdleTask matching the requested name.
- @param name Name value.
  \*/
  itemByName(name: string): IdleTask

/\*\*

- Retrieves the IdleTasks from the requested range.
- @param from Range-start IdleTask, index, or name.
- @param to Range-end IdleTask, index, or name.
  \*/
  itemByRange(from: IdleTask | number | string, to: IdleTask | number | string): IdleTask[]

/\*\*

- Retrieves the last IdleTask from this collection.
  \*/
  lastItem(): IdleTask

/\*\*

- Retrieves the middle IdleTask from this collection.
  \*/
  middleItem(): IdleTask

/\*\*

- Retrieves the IdleTask indexed immediately after the supplied IdleTask in this collection.
- @param obj IdleTask positioned immediately before the desired IdleTask.
  \*/
  nextItem(obj: IdleTask): IdleTask

/\*\*

- Retrieves the IdleTask indexed immediately before the supplied index.
- @param obj Index for the IdleTask immediately after the desired IdleTask.
  \*/
  previousItem(obj: IdleTask): IdleTask

/\*\*

- Builds executable source text that resolves back to the IdleTask.
  \*/
  toSource(): string
  }

/\*\*

- Arguments supplied to a script.
  \*/
  declare class ScriptArg extends Preference {
  /\*\*
  - Removes every script argument.
    \*/
    clear(): void

/\*\*

- Reads a script argument value.
- @param name Script argument name.
  \*/
  get(name: string): string

/\*\*

- Reads a script argument value.
- @param name Script argument name.
  \*/
  getValue(name: string): string

/\*\*

- Checks whether a script argument has been defined.
- @param name Script argument name.
  \*/
  isDefined(name: string): boolean

/\*\*

- Restores the saved script arguments.
  \*/
  restore(): void

/\*\*

- Stores the current script arguments.
  \*/
  save(): void

/\*\*

- Writes a script argument value.
- @param name Script argument name.
- @param value Value to store.
  \*/
  set(name: string, value: string): void

/\*\*

- Writes a script argument value.
- @param name Script argument name.
- @param value Value to store.
  \*/
  setValue(name: string, value: string): void
  }

/\*\*

- Application object.
  \*/
  declare class Application {
  /\*\*
  - Fires after the Application becomes active. Propagation bubbles. Cancellation is unavailable.
    \*/
    static readonly `AFTER_ACTIVATE`: string

/\*\*

- Fires after a Document is closed. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_CLOSE`: string

/\*\*

- Fires after the active context changes. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_CONTEXT_CHANGED`: string

/\*\*

- Fires as the Application quits. The committed quit operation can no longer be canceled. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_QUIT`: string

/\*\*

- Fires after an attribute on the active selection changes. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_SELECTION_ATTRIBUTE_CHANGED`: string

/\*\*

- Fires after the active selection changes. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_SELECTION_CHANGED`: string

/\*\*

- Fires before the Application becomes inactive. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `BEFORE_DEACTIVATE`: string

/\*\*

- Fires before a Document is created. Propagation bubbles. Cancellation is available.
  \*/
  static readonly `BEFORE_NEW`: string

/\*\*

- Fires before a Document is opened. Propagation bubbles. Cancellation is available.
  \*/
  static readonly `BEFORE_OPEN`: string

/\*\*

- Fires before the Application is quit. The quit operation may still be canceled. Propagation bubbles. Cancellation is available.
  \*/
  static readonly `BEFORE_QUIT`: string

/\*\*

- Fires after the Application changes. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `HOME_SCREEN_VISIBILITY_CHANGE`: string

/\*\*

- Active book reference.
  \*/
  activeBook: Book

/\*\*

- Front-most document reference.
  \*/
  activeDocument: Document

/\*\*

- Currently running Scripts panel script.
  \*/
  readonly activeScript: File

/\*\*

- Undo mode used by the current script execution.
  \*/
  readonly activeScriptUndoMode: UndoModes

/\*\*

- Front-most window reference.
  \*/
  activeWindow: Window | LayoutWindow | StoryWindow

/\*\*

- Alignment and distribution preferences.
  \*/
  readonly alignDistributePreferences: AlignDistributePreference

/\*\*

- Every Cell style.
  \*/
  readonly allCellStyles: CellStyle[]

/\*\*

- Lists every character styles, independent of group.
  \*/
  readonly allCharacterStyles: CharacterStyle[]

/\*\*

- Every object style contained by the Application.
  \*/
  readonly allObjectStyles: ObjectStyle[]

/\*\*

- Lists every paragraph styles, independent of group.
  \*/
  readonly allParagraphStyles: ParagraphStyle[]

/\*\*

- List containing every object types (strings) a preflight rule can operate on.
  \*/
  readonly allPreflightObjectTypes: string[]

/\*\*

- List containing every categories that have been declared by rules.
  \*/
  readonly allPreflightRuleCategories: string[]

/\*\*

- List containing every known (declared) rule IDs.
  \*/
  readonly allPreflightRuleIDs: string[]

/\*\*

- Every Table style.
  \*/
  readonly allTableStyles: TableStyle[]

/\*\*

- Settings for anchored object default.
  \*/
  readonly anchoredObjectDefaults: AnchoredObjectDefault

/\*\*

- Settings for anchored object.
  \*/
  readonly anchoredObjectSettings: AnchoredObjectSetting

/\*\*

- Preferences for auto-correct.
  \*/
  readonly autoCorrectPreferences: AutoCorrectPreference

/\*\*

- Collection containing auto-correct tables.
  \*/
  readonly autoCorrectTables: AutoCorrectTables

/\*\*

- Collection containing background task objects.
  \*/
  readonly backgroundTasks: BackgroundTasks

/\*\*

- Settings for baseline frame grid options.
  \*/
  readonly baselineFrameGridOptions: BaselineFrameGridOption

/\*\*

- Collection containing books.
  \*/
  readonly books: Books

/\*\*

- Settings for button preferences.
  \*/
  readonly buttonPreferences: ButtonPreference

/\*\*

- Collection containing cell style groups.
  \*/
  readonly cellStyleGroups: CellStyleGroups

/\*\*

- Collection containing cell style mappings.
  \*/
  readonly cellStyleMappings: CellStyleMappings

/\*\*

- Collection containing cell styles.
  \*/
  readonly cellStyles: CellStyles

/\*\*

- Preferences for change color.
  \*/
  changeColorPreferences: ChangeColorPreference | NothingEnum

/\*\*

- Preferences for change glyph.
  \*/
  changeGlyphPreferences: ChangeGlyphPreference | NothingEnum

/\*\*

- Preferences for change grep.
  \*/
  changeGrepPreferences: ChangeGrepPreference | NothingEnum

/\*\*

- Preferences for change object.
  \*/
  changeObjectPreferences: ChangeObjectPreference | NothingEnum

/\*\*

- Preferences for change text.
  \*/
  changeTextPreferences: ChangeTextPreference | NothingEnum

/\*\*

- Preferences for change transliterate.
  \*/
  changeTransliteratePreferences: ChangeTransliteratePreference | NothingEnum

/\*\*

- Collection containing char style mappings.
  \*/
  readonly charStyleMappings: CharStyleMappings

/\*\*

- Collection containing character style groups.
  \*/
  readonly characterStyleGroups: CharacterStyleGroups

/\*\*

- Collection containing character styles.
  \*/
  readonly characterStyles: CharacterStyles

/\*\*

- Settings for cJK grid preferences.
  \*/
  readonly cjkGridPreferences: CjkGridPreference

/\*\*

- Clear overrides before applying the object style.
  \*/
  clearOverridesWhenApplyingStyle: boolean

/\*\*

- Clipboard preference properties describing how the application uses the system clipboard.
  \*/
  readonly clipboardPreferences: ClipboardPreference

/\*\*

- Collection containing color groups.
  \*/
  readonly colorGroups: ColorGroups

/\*\*

- Properties for color settings defining color-management defaults.
  \*/
  readonly colorSettings: ColorSetting

/\*\*

- Collection containing colors.
  \*/
  readonly colors: Colors

/\*\*

- Collection containing composite fonts.
  \*/
  readonly compositeFonts: CompositeFonts

/\*\*

- Collection containing condition sets for conditional text.
  \*/
  readonly conditionSets: ConditionSets

/\*\*

- Preferences for conditional text.
  \*/
  readonly conditionalTextPreferences: ConditionalTextPreference

/\*\*

- Collection containing conditions for conditional text.
  \*/
  readonly conditions: Conditions

/\*\*

- Content Placer access point, used for retrieving the content placer object reference.
  \*/
  readonly contentPlacer: ContentPlacerObject

/\*\*

- Collection containing dashed stroke styles.
  \*/
  readonly dashedStrokeStyles: DashedStrokeStyles

/\*\*

- Properties for data merge options defining the data merge.
  \*/
  readonly dataMergeOptions: DataMergeOption

/\*\*

- Collection containing dialogs.
  \*/
  readonly dialogs: Dialogs

/\*\*

- Settings for user dictionary preferences.
  \*/
  readonly dictionaryPreferences: DictionaryPreference

/\*\*

- Settings for display performance.
  \*/
  readonly displayPerformancePreferences: DisplayPerformancePreference

/\*\*

- Properties for display settings.
  \*/
  readonly displaySettings: DisplaySettings

/\*\*

- Settings for document preferences.
  \*/
  readonly documentPreferences: DocumentPreference

/\*\*

- Collection containing document presets.
  \*/
  readonly documentPresets: DocumentPresets

/\*\*

- Collection containing documents.
  \*/
  readonly documents: Documents

/\*\*

- Collection containing dotted stroke styles.
  \*/
  readonly dottedStrokeStyles: DottedStrokeStyles

/\*\*

- Settings for endnote options.
  \*/
  readonly endnoteOptions: EndnoteOption

/\*\*

- Preferences for ePS export.
  \*/
  readonly epsExportPreferences: EPSExportPreference

/\*\*

- Preferences for ePS import.
  \*/
  readonly epsImportPreferences: EPSImportPreference

/\*\*

- Settings for ePub export preview app preferences.
  \*/
  readonly epubViewingAppsPreferences: EPubExportPreviewAppPreference

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Preferences for excel import.
  \*/
  readonly excelImportPreferences: ExcelImportPreference

/\*\*

- Preferences used as the default for export for web.
  \*/
  readonly exportForWebPreferences: ExportForWebPreference

/\*\*

- Feature set value.
  \*/
  readonly featureSet: FeatureSetOptions

/\*\*

- File's full path.
  \*/
  readonly filePath: File

/\*\*

- Options for find/change color.
  \*/
  findChangeColorOptions: FindChangeColorOption | NothingEnum

/\*\*

- Options for find/change glyph.
  \*/
  findChangeGlyphOptions: FindChangeGlyphOption | NothingEnum

/\*\*

- Options for find/change grep.
  \*/
  findChangeGrepOptions: FindChangeGrepOption | NothingEnum

/\*\*

- Options for find/change object.
  \*/
  findChangeObjectOptions: FindChangeObjectOption | NothingEnum

/\*\*

- Options for find/change text.
  \*/
  findChangeTextOptions: FindChangeTextOption | NothingEnum

/\*\*

- Options for find/change transliterate.
  \*/
  findChangeTransliterateOptions: FindChangeTransliterateOption | NothingEnum

/\*\*

- Preferences for find color.
  \*/
  findColorPreferences: FindColorPreference | NothingEnum

/\*\*

- Preferences for find glyph.
  \*/
  findGlyphPreferences: FindGlyphPreference | NothingEnum

/\*\*

- Preferences for find grep.
  \*/
  findGrepPreferences: FindGrepPreference | NothingEnum

/\*\*

- Preferences for find object.
  \*/
  findObjectPreferences: FindObjectPreference | NothingEnum

/\*\*

- Preferences for find text.
  \*/
  findTextPreferences: FindTextPreference | NothingEnum

/\*\*

- Preferences for find transliterate.
  \*/
  findTransliteratePreferences: FindTransliteratePreference | NothingEnum

/\*\*

- Collection containing transparency flattener presets.
  \*/
  readonly flattenerPresets: FlattenerPresets

/\*\*

- Settings for font locking preferences.
  \*/
  readonly fontLockingPreferences: FontLockingPreference

/\*\*

- Properties for the font sync preferences defining preferences for fonts.
  \*/
  readonly fontSyncPreferences: FontSyncPreference

/\*\*

- Collection containing fonts.
  \*/
  readonly fonts: Fonts

/\*\*

- Settings for footnote options.
  \*/
  readonly footnoteOptions: FootnoteOption

/\*\*

- Frame fitting option used for placed or pasted content; applicable to a frame, object style, document, or the application.
  \*/
  readonly frameFittingOptions: FrameFittingOption

/\*\*

- Full Application path, including the Application name.
  \*/
  readonly fullName: File

/\*\*

- Settings for galley preferences.
  \*/
  readonly galleyPreferences: GalleyPreference

/\*\*

- Settings for general preferences.
  \*/
  readonly generalPreferences: GeneralPreference

/\*\*

- Preferences for gPU performance.
  \*/
  readonly gpuPerformancePreferences: GpuPerformancePreference

/\*\*

- Properties for grabber preferences defining display performance quality during scrolling.
  \*/
  readonly grabberPreferences: GrabberPreference

/\*\*

- Collection containing gradients.
  \*/
  readonly gradients: Gradients

/\*\*

- Settings for grid preferences.
  \*/
  readonly gridPreferences: GridPreference

/\*\*

- Settings for grid printing preference and export.
  \*/
  readonly gridPrintingPreferences: GridPrintingPreference

/\*\*

- Settings for guide preferences.
  \*/
  readonly guidePreferences: GuidePreference

/\*\*

- Reports whether the home screen is visible.
  \*/
  readonly homeScreenVisible: boolean

/\*\*

- Experimental connection manager property.
  \*/
  httpLinkConnectionManager: HttpLinkConnectionManagerObject

/\*\*

- Every attachable idle task.
  \*/
  readonly idleTasks: IdleTasks

/\*\*

- Properties for the image I/O preferences defining preferences for importing images.
  \*/
  readonly imageIOPreferences: ImageIOPreference

/\*\*

- Preferences for image.
  \*/
  readonly imagePreferences: ImagePreference

/\*\*

- Settings for iME preferences.
  \*/
  readonly imePreferences: IMEPreference

/\*\*

- Attributes for placed InDesign page.
  \*/
  readonly importedPageAttributes: ImportedPageAttribute

/\*\*

- Options for exporting InCopy INCX document format.
  \*/
  readonly incopyExportOptions: InCopyExportOption

/\*\*

- Properties for index options defining index formatting.
  \*/
  readonly indexGenerationOptions: IndexOptions

/\*\*

- Collection containing indexing sort options.
  \*/
  readonly indexingSortOptions: IndexingSortOptions

/\*\*

- Collection containing inks.
  \*/
  readonly inks: Inks

/\*\*

- Preferences for interactive PDF export.
  \*/
  readonly interactivePDFExportPreferences: InteractivePDFExportPreference

/\*\*

- True when the object specifier resolves into valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Preferences for jPEG export.
  \*/
  readonly jpegExportPreferences: JPEGExportPreference

/\*\*

- Collection containing kinsoku tables.
  \*/
  readonly kinsokuTables: KinsokuTables

/\*\*

- String-valued property available for arbitrary text.
  \*/
  label: string

/\*\*

- Collection containing languages with vendors.
  \*/
  readonly languagesWithVendors: LanguagesWithVendors

/\*\*

- Default properties for layout grids.
  \*/
  readonly layoutGridData: LayoutGridDataInformation

/\*\*

- Collection containing layout windows.
  \*/
  readonly layoutWindows: LayoutWindows

/\*\*

- Collection containing object libraries.
  \*/
  readonly libraries: Libraries

/\*\*

- Options for Linked Page Item.
  \*/
  readonly linkedPageItemOptions: LinkedPageItemOption

/\*\*

- Options for linked stories.
  \*/
  readonly linkedStoryOptions: LinkedStoryOption

/\*\*

- Properties for the links preferences defining preferences for links.
  \*/
  readonly linkingPreferences: LinkingPreference

/\*\*

- Delay before live screen drawing of page items begins after mouse operations.
  \*/
  liveScreenDrawing: LiveDrawingOptions

/\*\*

- Application locale.
  \*/
  readonly locale: Locale

/\*\*

- Settings for margin preferences.
  \*/
  readonly marginPreferences: MarginPreference

/\*\*

- Collection containing menu actions.
  \*/
  readonly menuActions: MenuActions

/\*\*

- Collection containing menus.
  \*/
  readonly menus: Menus

/\*\*

- Collection containing mixed ink groups.
  \*/
  readonly mixedInkGroups: MixedInkGroups

/\*\*

- Collection containing mixed inks.
  \*/
  readonly mixedInks: MixedInks

/\*\*

- True while a modal dialog or alert is active.
  \*/
  readonly modalState: boolean

/\*\*

- Collection containing mojikumi tables.
  \*/
  readonly mojikumiTables: MojikumiTables

/\*\*

- Settings for mojikumi user interface preferences.
  \*/
  readonly mojikumiUIPreferences: MojikumiUiPreference

/\*\*

- Collection containing Motion presets.
  \*/
  readonly motionPresets: MotionPresets

/\*\*

- Name assigned to the Application.
  \*/
  readonly name: string

/\*\*

- Collection containing named grids.
  \*/
  readonly namedGrids: NamedGrids

/\*\*

- Settings for note preferences.
  \*/
  readonly notePreferences: NotePreference

/\*\*

- Collection containing numbered lists.
  \*/
  readonly numberingLists: NumberingLists

/\*\*

- Collection containing object style groups.
  \*/
  readonly objectStyleGroups: ObjectStyleGroups

/\*\*

- Collection containing object styles.
  \*/
  readonly objectStyles: ObjectStyles

/\*\*

- Application's default page item formatting.
  \*/
  readonly pageItemDefaults: PageItemDefault

/\*\*

- Collection containing panels.
  \*/
  readonly panels: Panels

/\*\*

- Collection containing para style mappings.
  \*/
  readonly paraStyleMappings: ParaStyleMappings

/\*\*

- Collection containing paragraph style groups.
  \*/
  readonly paragraphStyleGroups: ParagraphStyleGroups

/\*\*

- Collection containing paragraph styles.
  \*/
  readonly paragraphStyles: ParagraphStyles

/\*\*

- Parent reference for the Application (a Application).
  \*/
  readonly parent: Application

/\*\*

- Settings for pasteboard preferences.
  \*/
  readonly pasteboardPreferences: PasteboardPreference

/\*\*

- Collection containing PDF export preferences.
  \*/
  readonly pdfExportPreferences: PDFExportPreference

/\*\*

- Collection containing PDF export presets.
  \*/
  readonly pdfExportPresets: PDFExportPresets

/\*\*

- Properties for the PDF place preferences defining how PDF files are placed in the current document.
  \*/
  readonly pdfPlacePreferences: PDFPlacePreference

/\*\*

- Available performance metrics.
  \*/
  readonly performanceMetrics: number[]

/\*\*

- Lists placeable extensions of file types.
  \*/
  readonly placeableFileExtensions: string[]

/\*\*

- Lists placeable types of files.
  \*/
  readonly placeableFileTypes: string[]

/\*\*

- Preferences for pNG export.
  \*/
  readonly pngExportPreferences: PNGExportPreference

/\*\*

- Properties for polygon preferences used to define default polygon-creation settings.
  \*/
  readonly polygonPreferences: PolygonPreference

/\*\*

- Collection containing preferences objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Settings for preflight book options.
  \*/
  readonly preflightBookOptions: PreflightBookOption

/\*\*

- Settings for preflight options.
  \*/
  readonly preflightOptions: PreflightOption

/\*\*

- Collection containing preflight processes.
  \*/
  readonly preflightProcesses: PreflightProcesses

/\*\*

- Collection containing preflight profiles.
  \*/
  readonly preflightProfiles: PreflightProfiles

/\*\*

- Collection containing preflight rules.
  \*/
  readonly preflightRules: PreflightRules

/\*\*

- Collection containing printer presets.
  \*/
  readonly printerPresets: PrinterPresets

/\*\*

- Property bag for assigning multiple properties together.
  \*/
  properties: object

/\*\*

- Item names in the redo stack.
  \*/
  readonly redoHistory: string[]

/\*\*

- Top redo-stack action name.
  \*/
  readonly redoName: string

/\*\*

- Arguments supplied to a script.
  \*/
  readonly scriptArgs: ScriptArg

/\*\*

- Collection containing script menu actions.
  \*/
  readonly scriptMenuActions: ScriptMenuActions

/\*\*

- Preferences for script.
  \*/
  readonly scriptPreferences: ScriptPreference

/\*\*

- Currently selected object or objects.
  \*/
  selection: object[] | object | NothingEnum

/\*\*

- Key object within the selection.
  \*/
  selectionKeyObject: PageItem | NothingEnum

/\*\*

- User serial number.
  \*/
  readonly serialNumber: string

/\*\*

- Properties for smart Guide preferences.
  \*/
  readonly smartGuidePreferences: SmartGuidePreference

/\*\*

- Preferences for spell-check.
  \*/
  readonly spellPreferences: SpellPreference

/\*\*

- Default properties for frame grids.
  \*/
  readonly storyGridData: StoryGridDataInformation

/\*\*

- Settings for story preferences.
  \*/
  readonly storyPreferences: StoryPreference

/\*\*

- Collection containing story windows.
  \*/
  readonly storyWindows: StoryWindows

/\*\*

- Collection containing striped stroke styles.
  \*/
  readonly stripedStrokeStyles: StripedStrokeStyles

/\*\*

- Settings for stroke/fill proxy.
  \*/
  readonly strokeFillProxySettings: StrokeFillProxySetting

/\*\*

- Collection containing stroke styles.
  \*/
  readonly strokeStyles: StrokeStyles

/\*\*

- Collection containing swatches.
  \*/
  readonly swatches: Swatches

/\*\*

- Collection containing table style groups.
  \*/
  readonly tableStyleGroups: TableStyleGroups

/\*\*

- Collection containing table style mappings.
  \*/
  readonly tableStyleMappings: TableStyleMappings

/\*\*

- Collection containing table styles.
  \*/
  readonly tableStyles: TableStyles

/\*\*

- Preferences for tagged PDF.
  \*/
  readonly taggedPDFPreferences: TaggedPDFPreference

/\*\*

- Preferences for tagged text export.
  \*/
  readonly taggedTextExportPreferences: TaggedTextExportPreference

/\*\*

- Preferences for tagged text import.
  \*/
  readonly taggedTextImportPreferences: TaggedTextImportPreference

/\*\*

- Settings for text default.
  \*/
  readonly textDefaults: TextDefault

/\*\*

- Settings for text editing preferences.
  \*/
  readonly textEditingPreferences: TextEditingPreference

/\*\*

- Preferences for text export.
  \*/
  readonly textExportPreferences: TextExportPreference

/\*\*

- Settings for text frame preferences.
  \*/
  readonly textFramePreferences: TextFramePreference
