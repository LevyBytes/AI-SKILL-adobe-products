# Indesign (part 7)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Finds objects matching the find what value.
- @param reverseOrder True returns results in reverse order.
  \*/
  findObject(reverseOrder: boolean): PageItem[]

/\*\*

- Finds text matching the find what value.
- @param reverseOrder True returns results in reverse order.
  \*/
  findText(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find character type value.
- @param reverseOrder True returns results in reverse order.
  \*/
  findTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Returns structs describing the alternate layouts.
- @param resolveMaster Resolves layout policy when the setting is "use master"; defaults to true.
  \*/
  getAlternateLayoutsForFolio(resolveMaster: boolean): any[]

/\*\*

- Resolves the object specifier into object-reference array entries.
  \*/
  getElements(): Document[]

/\*\*

- Selected text direction.
  \*/
  getSelectedTextDirection(): TextDirection

/\*\*

- Gets the style-conflict resolution strategy, or false when the user cancels.
- @param charOrParaStyle Style type to inspect.
  \*/
  getStyleConflictResolutionStrategy(charOrParaStyle: StyleType): any

/\*\*

- Loads a process color swatch from a preloaded Adobe color book.
- @param name Process color entry name.
  \*/
  importAdobeSwatchbookProcessColor(name: string): Color

/\*\*

- Loads a spot color swatch from an Adobe color book.
- @param name Spot color entry name.
  \*/
  importAdobeSwatchbookSpotColor(name: string): Color

/\*\*

- Imports a DTD for validation.
- @param from Path to the DTD file.
  \*/
  importDtd(from: File): void

/\*\*

- Imports cross reference formats from the specified file.
- @param from File providing the formats to import.
  \*/
  importFormats(from: File): void

/\*\*

- Imports comments from PDF.
- @param from PDF File used as the comment source.
- @param withProperties Starting property object for the new Document.
  \*/
  importPdfComments(from: File, withProperties: object): void

/\*\*

- Brings selected style types into the document.
- @param format Style categories to bring in.
- @param from Source file containing the styles.
- @param globalStrategy Strategy for resolving imported style names that collide with existing ones.
  \*/
  importStyles(format: ImportFormat, from: File, globalStrategy?: GlobalClashResolutionStrategy): void

/\*\*

- Loads XML into an InDesign document from the specified file.
- @param from XML file to import.
  \*/
  importXML(from: File): void

/\*\*

- Assigns the specified key's stored value to the label.
- @param key Key to set.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Internal-use black box method reserved for the InDesign Engineering team.
- @param internalParameter1 First internal parameter.
- @param internalParameter2 Second internal parameter.
  \*/
  internalMethod(internalParameter1: string, internalParameter2: string): string

/\*\*

- Loads conditions from the specified file.
- @param from Path to the file containing the conditions.
- @param loadConditionSets True also loads the condition sets.
  \*/
  loadConditions(from: File, loadConditionSets: boolean): void

/\*\*

- Loads masterpages from an InDesign file.
- @param from InDesign file used as the masters source.
- @param globalStrategyForMasterPage Global clash resolution strategy for loading master pages.
  \*/
  loadMasters(from: File, globalStrategyForMasterPage?: GlobalClashResolutionStrategyForMasterPage): void

/\*\*

- Loads swatches from the specified file.
- @param from Swatch file or InDesign document.
  \*/
  loadSwatches(from: File): void

/\*\*

- Loads XML markup tags from the specified file.
- @param from Path to the file containing the tags.
  \*/
  loadXMLTags(from: File): void

/\*\*

- Auto-tags the document using style-to-tag mappings.
  \*/
  mapStylesToXMLTags(): void

/\*\*

- Auto-styles the document using tag-to-style mappings.
  \*/
  mapXMLTagsToStyles(): void

/\*\*

- Packages the document.
- @param to Folder, alias, or path that receives the packaged files.
- @param copyingFonts True copies document fonts into the package folder.
- @param copyingLinkedGraphics True copies linked graphics files into the package folder.
- @param copyingProfiles True copies color profiles into the package folder.
- @param updatingGraphics True updates graphics links so they point into the package folder.
- @param includingHiddenLayers True includes fonts and links from hidden layers in the package.
- @param ignorePreflightErrors True skips preflight errors and continues packaging; false cancels packaging when errors are present.
- @param creatingReport True creates a package report with printing instructions, print settings, font lists, link lists, required inks, and related details.
- @param includeIdml True generates IDML and includes it in the package folder.
- @param includePdf True generates PDF and includes it in the package folder.
- @param pdfStyle When PDF inclusion is requested, a valid value here selects the PDF export style; otherwise the last used PDF preset is used.
- @param useDocumentHyphenationExceptionsOnly When selected, InDesign flags this document so opening or editing it on another computer with different hyphenation and dictionary settings will not reflow it.
- @param versionComments Comments saved with the version.
- @param forceSave True forces a version save.
  \*/
  packageForPrint(to: File, copyingFonts: boolean, copyingLinkedGraphics: boolean, copyingProfiles: boolean, updatingGraphics: boolean, includingHiddenLayers: boolean, ignorePreflightErrors: boolean, creatingReport: boolean, includeIdml: boolean, includePdf: boolean, pdfStyle: string, useDocumentHyphenationExceptionsOnly: boolean, versionComments: string, forceSave?: boolean): boolean

/\*\*

- Places one or more files with the place menu item's behavior. Depending on current preferences, the action can load the place gun or replace the selected object.
- @param fileName File or files to place.
- @param showingOptions Whether the import options dialog appears.
- @param withProperties Initial property values for placed object or objects.
  \*/
  place(fileName: File | File[], showingOptions?: boolean, withProperties?: object): void

/\*\*

- Deprecated: call ContentPlacerObject load method instead. Original Description: uses place and link story menu item behavior, then loads the place gun.
- @param parentStory Story used as the place-and-link source.
- @param showingOptions Whether the link options dialog appears.
  \*/
  placeAndLink(parentStory: Story, showingOptions?: boolean): void

/\*\*

- Places a cloud asset on the document.
- @param jsondata JSON data containing cloud asset metadata.
  \*/
  placeCloudAsset(jsondata: string): void

/\*\*

- Prints the Document or Documents.
- @param printDialog True opens the print dialog.
- @param using Printer preset selection.
  \*/
  print(printDialog: boolean, using: PrinterPresetTypes | PrinterPreset): void

/\*\*

- Prints the Booklet using the current document plus its Booklet and Print settings.
- @param printBookletDialog True opens the print booklet dialog.
- @param using Printer preset selection.
  \*/
  printBooklet(printBookletDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): void

/\*\*

- Recomposes Document text.
  \*/
  recompose(): void

/\*\*

- Repeats the most recently undone action.
  \*/
  redo(): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Returns every button to its Normal state.
  \*/
  resetAllButtons(): void

/\*\*

- Returns every multi-state object to its first state.
  \*/
  resetAllMultiStateObjects(): void

/\*\*

- Restores the document to the state from the most recent save.
  \*/
  revert(): boolean

/\*\*

- Restores the Version Cue project version of the document.
- @param forceRevert Force the project-version revert.
  \*/
  revertToProject(forceRevert?: boolean): void

/\*\*

- Saves the document.
- @param to Destination for saving the document. If it has already been saved, a copy is written to this path, the original closes, and the new copy opens.
- @param stationery Whether to save the file as stationery.
- @param versionComments Comment saved with this version.
- @param forceSave Force a version save.
  \*/
  save(to: File, stationery?: boolean, versionComments?: string, forceSave?: boolean): Document

/\*\*

- Saves a copy of the document.
- @param to File path for the copy. Note: the original document remains open and the copy is not opened.
- @param stationery True writes a stationery file on Mac OS or a template file on Windows. Note: those formats use extensions that differ from regular files.
  \*/
  saveACopy(to: File, stationery?: boolean): void

/\*\*

- Saves a copy as a cloud document.
- @param cloudPath Cloud path used when this is a cloud document.
  \*/
  saveACopyCloud(cloudPath: string): Document

/\*\*

- Saves as a cloud document.
- @param cloudPath Cloud path used when this is a cloud document.
  \*/
  saveAsCloud(cloudPath: string): Document

/\*\*

- Saves the specified swatches to a swatchbook file.
- @param to Swatchbook file destination.
- @param swatchList Swatches to save.
- @param versionComments Comment saved with this version.
- @param forceSave True forces a version save.
  \*/
  saveSwatches(to: File, swatchList: Swatch[], versionComments: string, forceSave?: boolean): void

/\*\*

- Saves a tag set to an external file.
- @param to Full path to the file where tags are saved.
- @param versionComments Comment saved with this version.
- @param forceSave True forces a version save.
  \*/
  saveXMLTags(to: File, versionComments: string, forceSave?: boolean): void

/\*\*

- Selects the specified object or objects.
- @param selectableItems Objects to select.
- @param existingSelection Selection status of the Document relative to objects already selected.
  \*/
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): void

/\*\*

- Synchronizes the file with the Version Cue project.
- @param syncConflictResolution Conflict resolution method used during synchronization.
- @param versionComments Comments describing the version.
  \*/
  synchronizeWithVersionCue(syncConflictResolution?: SyncConflictResolution, versionComments?: string): VersionCueSyncStatus

/\*\*

- Generates executable source text that returns the Document.
  \*/
  toSource(): string

/\*\*

- Retrieves the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Reverses the last action.
  \*/
  undo(): void

/\*\*

- Updates cross-reference text source content in the document.
  \*/
  updateCrossReferences(): void
  }

/\*\*

- Document collection.
  \*/
  declare class Documents {
  /\*\*
  - Count of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Document at the specified index.
- @param index Index.
  \*/
  [index: number]: Document

/\*\*

- Creates a document.
- @param showingWindow True displays the document.
- @param documentPreset Document preset to use.
- @param withProperties Initial property values for the new Document.
  \*/
  add(showingWindow?: boolean, documentPreset?: DocumentPreset, withProperties?: object): Document

/\*\*

- Retrieves any Document from the collection.
  \*/
  anyItem(): Document

/\*\*

- Displays the element count for the Document.
  \*/
  count(): number

/\*\*

- Retrieves every Document in the collection.
  \*/
  everyItem(): Document[]

/\*\*

- Retrieves the first Document in the collection.
  \*/
  firstItem(): Document

/\*\*

- Retrieves the Document matching the specified index or name.
- @param index Index or name.
  \*/
  item(index: number | string): Document

/\*\*

- Retrieves the Document with the specified ID.
- @param id ID.
  \*/
  itemByID(id: number): Document

/\*\*

- Retrieves the Document with the specified name.
- @param name Name.
  \*/
  itemByName(name: string): Document

/\*\*

- Retrieves Documents in the specified range.
- @param from Range start, as Document, index, or name.
- @param to Range end, as Document, index, or name.
  \*/
  itemByRange(from: Document | number | string, to: Document | number | string): Document[]

/\*\*

- Retrieves the last Document in the collection.
  \*/
  lastItem(): Document

/\*\*

- Retrieves the middle Document in the collection.
  \*/
  middleItem(): Document

/\*\*

- Retrieves the Document whose index comes after the specified Document in the collection.
- @param obj Document immediately before the desired Document.
  \*/
  nextItem(obj: Document): Document

/\*\*

- Retrieves the Document whose index comes before the specified index.
- @param obj Index of the Document immediately after the desired Document.
  \*/
  previousItem(obj: Document): Document

/\*\*

- Generates executable source text that returns the Document.
  \*/
  toSource(): string
  }

/\*\*

- Window class.
  \*/
  declare class Window {
  /\*\*
  - Fires after the Window becomes active. The event bubbles and cannot be canceled.
    \*/
    static readonly `AFTER_ACTIVATE`: string

/\*\*

- Fires when a property value changes on this Window. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_ATTRIBUTE_CHANGED`: string

/\*\*

- Fires while a Window is closing after the close has already been committed, so cancellation is no longer possible. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_CLOSE`: string

/\*\*

- Fires after a Window opens. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_OPEN`: string

/\*\*

- Fires after an attribute changes on the active selection. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_SELECTION_ATTRIBUTE_CHANGED`: string

/\*\*

- Fires after the active selection changes. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_SELECTION_CHANGED`: string

/\*\*

- Fires before a Window closes. The event bubbles and can be canceled.
  \*/
  static readonly `BEFORE_CLOSE`: string

/\*\*

- Fires before the Window becomes inactive. The event bubbles and cannot be canceled.
  \*/
  static readonly `BEFORE_DEACTIVATE`: string

/\*\*

- Window bounds in pixels, formatted as [top, left, bottom, right].
  \*/
  bounds: number[]

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Position of this Window inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier can resolve to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Window name.
  \*/
  readonly name: string

/\*\*

- Document parent for this Window.
  \*/
  readonly parent: Document

/\*\*

- Object for assigning multiple properties in a single operation.
  \*/
  properties: object

/\*\*

- Current selected object or objects.
  \*/
  selection: object[] | object | NothingEnum

/\*\*

- Key object for the current selection.
  \*/
  selectionKeyObject: PageItem | NothingEnum

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Moves this object to the foremost position.
  \*/
  bringToFront(): void

/\*\*

- Closes this Window instance.
  \*/
  close(): void

/\*\*

- Returns object-reference array entries resolved from the specifier.
  \*/
  getElements(): Window[]

/\*\*

- Maximizes the window.
  \*/
  maximize(): void

/\*\*

- Minimizes the window.
  \*/
  minimize(): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Restores the window.
  \*/
  restore(): void

/\*\*

- Selects the specified object or objects.
- @param selectableItems Objects to select.
- @param existingSelection Selection status of the Window relative to objects already selected.
  \*/
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): void

/\*\*

- Generates executable source text that returns the Window.
  \*/
  toSource(): string

/\*\*

- Returns this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Window collection.
  \*/
  declare class Windows {
  /\*\*
  - Count of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Window at the specified index.
- @param index Index.
  \*/
  [index: number]: Window

/\*\*

- Creates a Window.
- @param withProperties Initial property values for the new Window.
  \*/
  add(withProperties: object): Window

/\*\*

- Retrieves any Window from the collection.
  \*/
  anyItem(): Window

/\*\*

- Displays the element count for the Window.
  \*/
  count(): number

/\*\*

- Retrieves every Window in the collection.
  \*/
  everyItem(): Window[]

/\*\*

- Retrieves the first Window in the collection.
  \*/
  firstItem(): Window

/\*\*

- Retrieves the Window matching the specified index or name.
- @param index Index or name.
  \*/
  item(index: number | string): Window

/\*\*

- Retrieves the Window with the specified name.
- @param name Name.
  \*/
  itemByName(name: string): Window

/\*\*

- Gets Windows that fall inside the supplied range.
- @param from Window, index, or name that starts the range.
- @param to Window, index, or name that ends the range.
  \*/
  itemByRange(from: Window | number | string, to: Window | number | string): Window[]

/\*\*

- Gets the final Window held by this collection.
  \*/
  lastItem(): Window

/\*\*

- Gets the central Window from this collection.
  \*/
  middleItem(): Window

/\*\*

- Gets the Window positioned after the supplied Window in this collection.
- @param obj Window located just before the target Window.
  \*/
  nextItem(obj: Window): Window

/\*\*

- Gets the Window positioned immediately before the supplied index.
- @param obj Index for the Window that comes after the target Window.
  \*/
  previousItem(obj: Window): Window

/\*\*

- Builds source text that evaluates back to this Window.
  \*/
  toSource(): string
  }

/\*\*

- Layout-oriented window.
  \*/
  declare class LayoutWindow extends Window {
  /\*\*
  - Currently selected layer.
    \*/
    activeLayer: Layer | string

/\*\*

- Page currently displayed in front.
  \*/
  activePage: Page

/\*\*

- Spread currently displayed in front.
  \*/
  activeSpread: Spread | MasterSpread

/\*\*

- When true, the view previews overprinting.
  \*/
  overprintPreview: boolean

/\*\*

- When true, color numbers stay unchanged for CMYK content lacking embedded profiles and for native artwork, including line art or type. Note: images with profiles unlike the simulated device profile are converted. Valid only when proofing type is custom.
  \*/
  preserveColorNumbers: boolean

/\*\*

- Profile used when proofing colors.
  \*/
  proofingProfile: string

/\*\*

- Proofing-color method.
  \*/
  proofingType: ProofingType

/\*\*

- Layout-view screen mode.
  \*/
  screenMode: ScreenModeOptions

/\*\*

- When true, the proofing profile is used to mimic the dark gray many printers output instead of solid black. Note: Valid only when proofing type is custom.
  \*/
  simulateInkBlack: boolean

/\*\*

- When true, the proofing profile is used to mimic real paper's dull white. Note: Valid only when proofing type is custom.
  \*/
  simulatePaperWhite: boolean

/\*\*

- Default anchor point used as the pivot for object transformations.
  \*/
  transformReferencePoint: AnchorPoint | [number | string, number | string]

/\*\*

- View-specific override for display performance preferences.
  \*/
  viewDisplaySetting: ViewDisplaySettings

/\*\*

- Document-view scaling percentage for enlarging or reducing what is shown. (Range: 5 to 4000)
  \*/
  zoomPercentage: number

/\*\*

- Changes the window magnification to the requested display size.
- @param given Requested display size.
  \*/
  zoom(given: ZoomOptions): void
  }

/\*\*

- Collection containing layout windows.
  \*/
  declare class LayoutWindows {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the LayoutWindow at the specified index.
- @param index Requested index.
  \*/
  [index: number]: LayoutWindow

/\*\*

- Gets an arbitrary LayoutWindow from the collection.
  \*/
  anyItem(): LayoutWindow

/\*\*

- Shows how many elements the LayoutWindow collection contains.
  \*/
  count(): number

/\*\*

- Gets all LayoutWindow objects in this collection.
  \*/
  everyItem(): LayoutWindow[]

/\*\*

- Gets the initial LayoutWindow in the collection.
  \*/
  firstItem(): LayoutWindow

/\*\*

- Gets the LayoutWindow matching the provided index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): LayoutWindow

/\*\*

- Gets the LayoutWindow whose name matches the argument.
- @param name Name to resolve.
  \*/
  itemByName(name: string): LayoutWindow

/\*\*

- Gets LayoutWindows contained in the supplied range.
- @param from LayoutWindow, index, or name that starts the range.
- @param to LayoutWindow, index, or name that ends the range.
  \*/
  itemByRange(from: LayoutWindow | number | string, to: LayoutWindow | number | string): LayoutWindow[]

/\*\*

- Gets the final LayoutWindow in the collection.
  \*/
  lastItem(): LayoutWindow

/\*\*

- Gets the central LayoutWindow from this collection.
  \*/
  middleItem(): LayoutWindow

/\*\*

- Gets the LayoutWindow positioned after the supplied LayoutWindow in the collection.
- @param obj LayoutWindow located just before the target LayoutWindow.
  \*/
  nextItem(obj: LayoutWindow): LayoutWindow

/\*\*

- Gets the LayoutWindow immediately before the supplied index.
- @param obj Index for the LayoutWindow that comes after the target LayoutWindow.
  \*/
  previousItem(obj: LayoutWindow): LayoutWindow
