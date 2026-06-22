# Photoshop (part 7)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Writes enumeration type and value under key.
  \*/
  putEnumerated(key: number, enumType: number, value: number): void

/\*\*

- Writes an integer value under key.
  \*/
  putInteger(key: number, value: number): void

/\*\*

- Writes a large integer value under key.
  \*/
  putLargeInteger(key: number, value: number): void

/\*\*

- Writes an ActionList value under key.
  \*/
  putList(key: number, value: ActionList): void

/\*\*

- Writes an object value, represented by an ActionDescriptor, under key.
  \*/
  putObject(key: number, classID: number, value: ActionDescriptor): void

/\*\*

- Writes a path value under key.
  \*/
  putPath(key: number, value: File): void

/\*\*

- Writes an object-reference value under key.
  \*/
  putReference(key: number, value: ActionReference): void

/\*\*

- Writes a string value under key.
  \*/
  putString(key: number, value: string): void

/\*\*

- Writes a unit value formatted as a double under key.
  \*/
  putUnitDouble(key: number, unitID: number, value: number): void

/\*\*

- Serializes the whole descriptor as a byte stream for disk writing.
  \*/
  toStream(): string
  }

/\*\*

- Command list making up an Action, such as one created with the Actions palette in the Adobe Photoshop application. ActionList belongs to Action Manager functionality. For Action Manager usage details, see the Photoshop Scripting Guide.
  \*/
  declare class ActionList {
  /\*\*
  - Count of commands included in the action.
    \*/
    static readonly count: number

/\*\*

- Class name for the referenced ActionList object.
  \*/
  static readonly typename: string

/\*\*

- Removes all entries from the list.
  \*/
  clear(): void

/\*\*

- Reads a boolean list element.
  \*/
  getBoolean(index: number): boolean

/\*\*

- Reads a class list element.
  \*/
  getClass(index: number): number

/\*\*

- Reads raw byte data from a list element as a string value.
  \*/
  getData(index: number): string

/\*\*

- Reads a double list element.
  \*/
  getDouble(index: number): number

/\*\*

- Reads the enumeration type for a list element.
  \*/
  getEnumerationType(index: number): number

/\*\*

- Reads the enumeration value for a list element.
  \*/
  getEnumerationValue(index: number): number

/\*\*

- Reads an integer list element.
  \*/
  getInteger(index: number): number

/\*\*

- Reads a large integer list element.
  \*/
  getLargeInteger(index: number): number

/\*\*

- Reads an ActionList list element.
  \*/
  getList(index: number): ActionList

/\*\*

- Reads the class ID of an object list element.
  \*/
  getObjectType(index: number): number

/\*\*

- Reads an object list element as an ActionDescriptor.
  \*/
  getObjectValue(index: number): ActionDescriptor

/\*\*

- Reads a File list element.
  \*/
  getPath(index: number): File

/\*\*

- Reads an ActionReference list element.
  \*/
  getReference(index: number): ActionReference

/\*\*

- Reads a string list element.
  \*/
  getString(index: number): string

/\*\*

- Reads the type of a list element.
  \*/
  getType(index: number): DescValueType

/\*\*

- Reads the unit value type of a double list element.
  \*/
  getUnitDoubleType(index: number): number

/\*\*

- Reads the unit value from a double list element.
  \*/
  getUnitDoubleValue(index: number): number

/\*\*

- Appends a true-or-false value.
  \*/
  putBoolean(value: boolean): void

/\*\*

- Appends a class or data type value.
  \*/
  putClass(value: number): void

/\*\*

- Appends a string that contains raw byte data.
  \*/
  putData(value: string): void

/\*\*

- Appends a double value.
  \*/
  putDouble(value: number): void

/\*\*

- Appends an enumerated constant value.
  \*/
  putEnumerated(enumType: number, value: number): void

/\*\*

- Appends an integer value.
  \*/
  putInteger(value: number): void

/\*\*

- Appends a large integer value.
  \*/
  putLargeInteger(value: number): void

/\*\*

- Appends a nested action list.
  \*/
  putList(value: ActionList): void

/\*\*

- Appends an object value.
  \*/
  putObject(classID: number, value: ActionDescriptor): void

/\*\*

- Appends a path value.
  \*/
  putPath(value: File): void

/\*\*

- Appends an ActionReference value created by the script.
  \*/
  putReference(value: ActionReference): void

/\*\*

- Appends a string value.
  \*/
  putString(value: string): void

/\*\*

- Appends a unit/value pair.
  \*/
  putUnitDouble(classID: number, value: number): void
  }

/\*\*

- Holds data that describes a referenced Action. ActionReference belongs to Action Manager functionality. For Action Manager usage details, see the Photoshop Scripting Guide.
  \*/
  declare class ActionReference {
  /\*\*
  - Class name for the referenced ActionReference object.
    \*/
    static readonly typename: string

/\*\*

- Reads the reference stored inside this reference. Container references add pieces to the reference; the result resembles another reference but remains part of the same reference.
  \*/
  getContainer(): ActionReference

/\*\*

- Reads the number identifying the object's class.
  \*/
  getDesiredClass(): number

/\*\*

- Reads the enumeration type.
  \*/
  getEnumeratedType(): number

/\*\*

- Reads the enumeration value.
  \*/
  getEnumeratedValue(): number

/\*\*

- Reads this action reference form.
  \*/
  getForm(): ReferenceFormType

/\*\*

- Reads the identifier value when the reference form is identifier.
  \*/
  getIdentifier(): number

/\*\*

- Reads the index value for a list or array reference.
  \*/
  getIndex(): number

/\*\*

- Reads the reference name.
  \*/
  getName(): string

/\*\*

- Reads the offset for the object's index value.
  \*/
  getOffset(): number

/\*\*

- Reads the property ID value.
  \*/
  getProperty(): number

/\*\*

- Places a new class form and class type into this reference.
  \*/
  putClass(desiredClass: number): void

/\*\*

- Places an enumeration type and ID into the reference, together with the desired class.
  \*/
  putEnumerated(desiredClass: number, enumType: number, value: number): void

/\*\*

- Places a new identifier and value into this reference.
  \*/
  putIdentifier(desiredClass: number, value: number): void

/\*\*

- Places a new index and value into this reference.
  \*/
  putIndex(desiredClass: number, value: number): void

/\*\*

- Places a new name and value into this reference.
  \*/
  putName(desiredClass: number, value: string): void

/\*\*

- Places a new offset and value into this reference.
  \*/
  putOffset(desiredClass: number, value: number): void

/\*\*

- Places a new property and value into this reference.
  \*/
  putProperty(desiredClass: number, value: number): void
  }

/\*\*

- Adobe Photoshop application object containing all other Adobe Photoshop objects.
- As the object-model root, it exposes access to every other object. Scripts commonly use app to reach its properties and methods. Example code: var currentDoc = app.activeDocument;
  \*/
  declare class Application {
  /\*\*
  - Document at the front.
    \*/
    activeDocument: Document

/\*\*

- Default background color used for painting, filling, and stroking selections.
  \*/
  backgroundColor: SolidColor

/\*\*

- Build number for the Adobe Photoshop application.
  \*/
  readonly build: string

/\*\*

- Name of the selected color settings set.
  \*/
  colorSettings: any

/\*\*

- Current tool name.
  \*/
  currentTool: string

/\*\*

- Dialog mode for the document, controlling whether Photoshop shows dialogs while the script runs.
  \*/
  displayDialogs: DialogModes

/\*\*

- Open document collection.
  \*/
  readonly documents: Documents

/\*\*

- Fonts installed on this system.
  \*/
  readonly fonts: TextFonts

/\*\*

- Default foreground color used for painting, filling, and stroking selections.
  \*/
  foregroundColor: SolidColor

/\*\*

- Amount of unused memory Photoshop can use.
  \*/
  readonly freeMemory: number

/\*\*

- Application language locale.
  \*/
  readonly locale: string

/\*\*

- Image file type list that Photoshop can open on Macintosh.
  \*/
  readonly macintoshFileTypes: string[]

/\*\*

- Log containing recorded measurements.
  \*/
  readonly measurementLog: MeasurementLog

/\*\*

- Application name.
  \*/
  readonly name: string

/\*\*

- Currently configured notifiers from the Scripts Events Manager menu in the application.
  \*/
  readonly notifiers: Notifiers

/\*\*

- When true, notifiers are active.
  \*/
  notifiersEnabled: boolean

/\*\*

- Container object.
  \*/
  readonly parent: object

/\*\*

- Full path to the Adobe Photoshop application location.
  \*/
  readonly path: File

/\*\*

- Playback dialog mode, controlling whether Photoshop shows dialogs during playback.
  \*/
  playbackDisplayDialogs: DialogModes

/\*\*

- Playback options describing the speed used when Photoshop plays actions.
  \*/
  playbackParameters: ActionDescriptor

/\*\*

- Application preferences, corresponding to Edit > Preferences in the Adobe Photoshop application on Windows or Photoshop > Preferences on Mac OS.
  \*/
  readonly preferences: Preferences

/\*\*

- Full path to the preferences folder.
  \*/
  readonly preferencesFolder: File

/\*\*

- Files listed under Recent Files.
  \*/
  readonly recentFiles: File[]

/\*\*

- Build date for the scripting interface.
  \*/
  readonly scriptingBuildDate: string

/\*\*

- Scripting interface version.
  \*/
  readonly scriptingVersion: string

/\*\*

- System information for the host application and machine.
  \*/
  readonly systemInformation: string

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Adobe Photoshop application version currently running.
  \*/
  readonly version: string

/\*\*

- Image file extension list that Photoshop can open on Windows.
  \*/
  readonly windowsFileTypes: string[]

/\*\*

- PRIVATE - sets the current tool brush from a file.
- @param file Brush file that should be applied.
  \*/
  applyToolBrushFromFile(file: File): void

/\*\*

- Runs batch automation, similar to using the Batch command in Photoshop.
- @param inputFiles Files that the routine operates on.
- @param action Action name to play; matching is case-sensitive and must correspond to the Actions palette entry.
- @param from Action set name holding the played action; matching is case-sensitive and must correspond to the Actions palette entry.
- @param options Batch automation settings.
  \*/
  batch(inputFiles: File[], action: string, from: string, options?: BatchOptions): string

/\*\*

- Shows an alert to the user.
  \*/
  beep(): void

/\*\*

- Brings Photoshop to the foreground as the active application.
  \*/
  bringToFront(): void

/\*\*

- Changes the message shown in the progress window.
- @param progressString Text to display in the progress window.
  \*/
  changeProgressText(progressString: string): void

/\*\*

- Converts a four character code into a runtime ID.
- @param charID ID value to convert.
  \*/
  charIDToTypeID(charID: string): number

/\*\*

- Plays the named action from the Actions palette.
- @param action Action name to play. Matching is case-sensitive and must correspond to its Actions palette entry.
- @param from Action set name that contains the action being played. Matching is case-sensitive and must correspond to its Actions palette entry.
  \*/
  doAction(action: string, from: string): void

/\*\*

- Runs work with a progress bar and forces that bar to show, bypassing heuristics that would normally hide it, such as during very short tasks. Other progress APIs must be called periodically to refresh the progress bar and permit cancellation.
- @param progressString Progress-window message text.
- @param javaScriptString JavaScriptString that runs.
  \*/
  doForcedProgress(progressString: string, javaScriptString: string): void

/\*\*

- Runs work with a progress bar. Other progress APIs must be called periodically to refresh the progress bar and permit cancellation.
- @param progressString Progress-window message text.
- @param javaScriptString JavaScriptString that runs.
  \*/
  doProgress(progressString: string, javaScriptString: string): void

/\*\*

- Reserves part of the unused progress bar for a subtask and returns false if cancelled. Use this with task lists whose run times differ.
- @param segmentLength Length of the current task.
- @param done Total length of all completed tasks.
- @param total Combined length for every task.
- @param javaScriptString JavaScriptString that runs.
  \*/
  doProgressSegmentTask(
  segmentLength: number,
  done: number,
  total: number,
  javaScriptString: string,
  ): boolean

/\*\*

- Reserves part of the unused progress bar for a subtask and returns false if cancelled. Use this with a simple task list where run times are equal.
- @param index 0-based index for the current task.
- @param limit Total task count.
- @param javaScriptString JavaScriptString that runs.
  \*/
  doProgressSubTask(index: number, limit: number, javaScriptString: string): boolean

/\*\*

- Reserves part of the unused progress bar for a subtask and returns false if cancelled.
- @param taskLength Fraction of unused progress bar to reserve; valid from 0.0 through 1.0.
- @param javaScriptString JavaScriptString that runs.
  \*/
  doProgressTask(taskLength: number, javaScriptString: string): boolean

/\*\*

- Removes the requested user objects from the Photoshop registry.
- @param key ID string identifying the user object(s) to remove.
  \*/
  eraseCustomOptions(key: string): void

/\*\*

- Runs an ActionManager event.
- @param eventID Action event to execute.
- @param descriptor ActionDescriptor supplied for the execution.
- @param displayDialogs DialogModes setting for showing dialogs and alert messages.
  \*/
  executeAction(
  eventID: number,
  descriptor?: ActionDescriptor,
  displayDialogs?: DialogModes,
  ): ActionDescriptor

/\*\*

- Gets an ActionDescriptor.
- @param reference ActionReference that identifies the requested property.
  \*/
  executeActionGet(reference: ActionReference): ActionDescriptor

/\*\*

- True means the named feature is available.
- @param name Feature name to test.
  \*/
  featureEnabled(name: string): boolean

/\*\*

- Reads user objects from the Photoshop registry using the value key ID.
- @param key Unique string ID for the stored user object.
  \*/
  getCustomOptions(key: string): ActionDescriptor

/\*\*

- Reports whether Quicktime is present.
  \*/
  isQuicktimeAvailable(): boolean

/\*\*

- Opens a support document.
- @param document File document to load.
  \*/
  load(document: File): void

/\*\*

- Builds a contact sheet from several files.
- @param inputFiles Files that should appear in the contact sheet.
- @param options ContactSheetOptions controlling contact-sheet creation.
  \*/
  makeContactSheet(inputFiles: File[], options?: ContactSheetOptions): string

/\*\*

- Generates a PDF presentation file.
- @param inputFiles Source files to place in the presentation.
- @param outputFile Destination File for the generated output.
- @param options PresentationOptions for PDF output.
  \*/
  makePDFPresentation(inputFiles: File[], outputFile: File, options?: PresentationOptions): string

/\*\*

- DEPRECATED. Produces a web photo gallery.
- @param inputFolder Folder or file array to process.
- @param outputFolder Folder where output files are written.
- @param options GalleryOptions for gallery output.
  \*/
  makePhotoGallery(inputFolder: any, outputFolder: File, options?: GalleryOptions): string

/\*\*

- DEPRECATED. Combines multiple files into one and needs user interaction.
- @param inputFiles Input file list to merge.
  \*/
  makePhotomerge(inputFiles: File[]): string

/\*\*

- Produces a picture package from several files.
- @param inputFiles Files to add.
- @param options PicturePackageOptions for building the Picture Package.
  \*/
  makePicturePackage(inputFiles: File[], options?: PicturePackageOptions): string

/\*\*

- Opens the requested document file or files.
- @param document Document File or Files to open.
- @param as Document type; by default Photoshop infers the format.
- @param asSmartObject When true, wraps the document as a smart object.
  \*/
  open(document: File, as?: any, asSmartObject?: boolean): Document

/\*\*

- Opens Photoshop's file-selection dialog.
  \*/
  openDialog(): File[]

/\*\*

- Clears one cache or several caches.
- @param target PurgeTarget identifying which caches to clear.
  \*/
  purge(target: PurgeTarget): void

/\*\*

- Stores user objects in the Photoshop registry.
- @param key Unique string ID for the user object.
- @param customObject User-created custom object to store in the registry.
- @param persistent When true, the object remains after script completion.
  \*/
  putCustomOptions(key: string, customObject: ActionDescriptor, persistent?: boolean): void

/\*\*

- Waits until the application refresh operation completes.
  \*/
  refresh(): void

/\*\*

- Triggers a refresh of the font list.
  \*/
  refreshFonts(): void

/\*\*

- Executes a menu item.
- @param menuID Menu ID to run.
  \*/
  runMenuItem(menuID: number): void

/\*\*

- PRIVATE - writes the active tool brush to a file.
- @param file Destination File for the brush.
  \*/
  saveToolBrushToFile(file: File): void

/\*\*

- Shows the color picker dialog; false means cancelled, true means accepted.
- @param pickForeground When true, chooses foreground color; otherwise chooses background color.
  \*/
  showColorPicker(pickForeground?: boolean): boolean

/\*\*

- Maps a string ID to its runtime ID.
- @param stringID ID value to convert.
  \*/
  stringIDToTypeID(stringID: string): number

/\*\*

- Runs a system call.
- @param callString System call text.
  \*/
  system(callString: string): number

/\*\*

- PRIVATE - generates a thumbnail using a style file.
- @param file Source style File.
- @param dest Thumbnail File to write.
- @param thumbnailSize Thumbnail size to save.
- @param backgroundValue Background gray value.
  \*/
  thumbnailStyleFile(file: File, dest: File, thumbnailSize?: number, backgroundValue?: number): void

/\*\*

- PRIVATE - creates a thumbnail file from text parameters.
- @param dest Thumbnail File to write.
- @param text Text that should be rendered.
- @param font Font PostScript name.
- @param size Type size.
- @param color Type color.
  \*/
  thumbnailText(dest: File, text?: string, font?: string, size?: number, color?: SolidColor): void

/\*\*

- Switches palette visibility.
  \*/
  togglePalettes(): void

/\*\*

- Tests whether the named tool can use brushes.
- @param tool Tool name to inspect.
  \*/
  toolSupportsBrushes(tool: string): boolean

/\*\*

- Maps a runtime ID to a character ID.
- @param typeID Runtime ID to convert.
  \*/
  typeIDToCharID(typeID: number): string

/\*\*

- Maps a runtime ID to a string ID.
- @param typeID Runtime ID to convert.
  \*/
  typeIDToStringID(typeID: number): string

/\*\*

- Advances the progress bar created by doProgress; intended for manual progress updates outside task-based tracking, and returns false if cancelled.
- @param done Count of tasks already completed.
- @param total Total task count.
  \*/
  updateProgress(done: number, total: number): boolean
  }

/\*\*

- Document is the active container for layers and other script-visible objects, serving as the file canvas.
  \*/
  declare class Document {
  /\*\*
  - Channels currently selected.
    \*/
    activeChannels: Channel[]

/\*\*

- HistoryState used as the history brush source.
  \*/
  activeHistoryBrushSource: HistoryState

/\*\*

- Current HistoryState for this Document.
  \*/
  activeHistoryState: HistoryState

/\*\*

- Layer currently selected.
  \*/
  activeLayer: Layer

/\*\*

- ArtLayers collection belonging to the Document.
  \*/
  readonly artLayers: ArtLayers

/\*\*

- Background ArtLayer of the Document.
  \*/
  readonly backgroundLayer: ArtLayer

/\*\*

- Bit depth per channel.
  \*/
  bitsPerChannel: BitsPerChannelType

/\*\*

- Channels collection owned by this Document.
  \*/
  readonly channels: Channels

/\*\*

- Color profile name; meaningful for a custom profile when color profile kind has no value.
  \*/
  colorProfileName: string

/\*\*

- ColorProfileType defining the document working-space model.
  \*/
  colorProfileType: ColorProfileType

/\*\*

- ColorSamplers currently tied to the Document.
  \*/
  readonly colorSamplers: ColorSamplers

/\*\*

- Component Channel list for this Document.
  \*/
  readonly componentChannels: Channel[]

/\*\*

- CountItems currently present in the Document.
  \*/
  readonly countItems: CountItems

/\*\*

- Complete path name for the Document.
  \*/
  readonly fullName: File

/\*\*

- Guides contained in this Document.
  \*/
  readonly guides: Guides

/\*\*

- Document height.
  \*/
  readonly height: UnitValue | number

/\*\*

- Composite-channel histogram listing pixel counts for each color intensity level.
- Applies only when 'mode' is RGB, CMYK, or indexed.
  \*/
  readonly histogram: number[]

/\*\*

- HistoryStates collection for this Document.
  \*/
  readonly historyStates: HistoryStates

/\*\*

- Unique numeric ID assigned to this Document.
  \*/
  readonly id: number

/\*\*

- DocumentInfo metadata for the Document.
  \*/
  readonly info: DocumentInfo

/\*\*

- LayerComps collection for this Document.
  \*/
  readonly layerComps: LayerComps

/\*\*

- LayerSets collection within the Document.
  \*/
  readonly layerSets: LayerSets

/\*\*

- Layers collection within the Document.
  \*/
  readonly layers: Layers

/\*\*

- True indicates a workgroup document.
  \*/
  readonly managed: boolean

/\*\*

- Document measurement scale.
  \*/
  readonly measurementScale: MeasurementScale

/\*\*

- Document color profile mode.
  \*/
  readonly mode: DocumentMode

/\*\*

- Name assigned to the Document.
  \*/
  readonly name: string

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Folder path for the Document.
  \*/
  readonly path: Folder

/\*\*

- PathItems collection for this Document.
  \*/
  readonly pathItems: PathItems

/\*\*

- Custom pixel aspect ratio. Range: 0.100 to 10.000.
  \*/
  pixelAspectRatio: number

/\*\*

- Print settings attached to the Document.
  \*/
  readonly printSettings: DocumentPrintSettings

/\*\*

- True means the Document is in Quick Mask mode.
  \*/
  quickMaskMode: boolean

/\*\*

- Document resolution, measured in pixels per inch.
  \*/
  readonly resolution: number

/\*\*

- True after the Document has been saved since the most recent change.
  \*/
  readonly saved: boolean

/\*\*

- Selection area for the Document.
  \*/
  readonly selection: Selection

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Document width.
  \*/
  readonly width: UnitValue | number

/\*\*

- XMPMetadata stored for the Document, including Camera RAW settings.
  \*/
  readonly xmpMetadata: XMPMetadata

/\*\*

- Counts objects in the Document.
- @param channel Channel used during counting.
- @param threshold Counting threshold. Range: 0 to 255.
  \*/
  autoCount(channel: Channel, threshold: number): void
