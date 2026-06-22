# Indesign (part 8)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Builds source text that evaluates back to this LayoutWindow.
  \*/
  toSource(): string
  }

/\*\*

- Story-oriented window.
  \*/
  declare class StoryWindow extends Window {}

/\*\*

- Collection containing story windows.
  \*/
  declare class StoryWindows {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the StoryWindow at the specified index.
- @param index Requested index.
  \*/
  [index: number]: StoryWindow

/\*\*

- Gets an arbitrary StoryWindow from the collection.
  \*/
  anyItem(): StoryWindow

/\*\*

- Shows how many elements the StoryWindow collection contains.
  \*/
  count(): number

/\*\*

- Gets all StoryWindow objects in this collection.
  \*/
  everyItem(): StoryWindow[]

/\*\*

- Gets the initial StoryWindow in the collection.
  \*/
  firstItem(): StoryWindow

/\*\*

- Gets the StoryWindow matching the provided index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): StoryWindow

/\*\*

- Gets the StoryWindow whose name matches the argument.
- @param name Name to resolve.
  \*/
  itemByName(name: string): StoryWindow

/\*\*

- Gets StoryWindows contained in the supplied range.
- @param from StoryWindow, index, or name that starts the range.
- @param to StoryWindow, index, or name that ends the range.
  \*/
  itemByRange(from: StoryWindow | number | string, to: StoryWindow | number | string): StoryWindow[]

/\*\*

- Gets the final StoryWindow in the collection.
  \*/
  lastItem(): StoryWindow

/\*\*

- Gets the central StoryWindow from this collection.
  \*/
  middleItem(): StoryWindow

/\*\*

- Gets the StoryWindow positioned after the supplied StoryWindow in this collection.
- @param obj StoryWindow located just before the target StoryWindow.
  \*/
  nextItem(obj: StoryWindow): StoryWindow

/\*\*

- Gets the StoryWindow immediately before the supplied index.
- @param obj Index for the StoryWindow that comes after the target StoryWindow.
  \*/
  previousItem(obj: StoryWindow): StoryWindow

/\*\*

- Builds source text that evaluates back to this StoryWindow.
  \*/
  toSource(): string
  }

/\*\*

- Event object for document activity.
  \*/
  declare class DocumentEvent extends Event {
  /\*\*
  - Fires after a Document revert completes. The event bubbles and cannot be canceled.
    \*/
    static readonly `AFTER_REVERT`: string

/\*\*

- Fires after a Document save completes. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_SAVE`: string

/\*\*

- Fires after a save-as operation completes for a Document. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_SAVE_AS`: string

/\*\*

- Fires after saving a copy of a Document. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_SAVE_A_COPY`: string

/\*\*

- Fires before a Document is created. The event bubbles and may be canceled.
  \*/
  static readonly `BEFORE_NEW`: string

/\*\*

- Fires before a Document is opened. The event bubbles and may be canceled.
  \*/
  static readonly `BEFORE_OPEN`: string

/\*\*

- Fires before a Document revert happens. The event bubbles and may be canceled.
  \*/
  static readonly `BEFORE_REVERT`: string

/\*\*

- Fires before a Document save happens. The event bubbles and may be canceled.
  \*/
  static readonly `BEFORE_SAVE`: string

/\*\*

- Fires before a save-as operation happens for a Document. The event bubbles and may be canceled.
  \*/
  static readonly `BEFORE_SAVE_AS`: string

/\*\*

- Fires before saving a copy of a Document. The event bubbles and may be canceled.
  \*/
  static readonly `BEFORE_SAVE_A_COPY`: string

/\*\*

- Full path for the DocumentEvent, including the DocumentEvent name.
  \*/
  readonly fullName: File

/\*\*

- Sets whether dialogs and alerts appear while scripts run.
  \*/
  userInteractionLevel: UserInteractionLevels
  }

/\*\*

- Event object for import or export activity.
  \*/
  declare class ImportExportEvent extends Event {
  /\*\*
  - Fires after a ImportExportEvent export completes. The event bubbles and cannot be canceled.
    \*/
    static readonly `AFTER_EXPORT`: string

/\*\*

- Fires after a file is imported into a ImportExportEvent. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_IMPORT`: string

/\*\*

- Fires before a ImportExportEvent export starts. The event bubbles and may be canceled.
  \*/
  static readonly `BEFORE_EXPORT`: string

/\*\*

- Fires before a file is imported into a ImportExportEvent. The event bubbles and may be canceled.
  \*/
  static readonly `BEFORE_IMPORT`: string

/\*\*

- Fires after a ImportExportEvent export is canceled or fails. The event bubbles and cannot be canceled.
  \*/
  static readonly `FAILED_EXPORT`: string

/\*\*

- File format used for import/export.
  \*/
  readonly format: string

/\*\*

- Full path for the ImportExportEvent, including the ImportExportEvent name.
  \*/
  readonly fullName: File

/\*\*

- Sets whether dialogs and alerts appear while scripts run.
  \*/
  userInteractionLevel: UserInteractionLevels
  }

/\*\*

- Content placer object representation.
  \*/
  declare class ContentPlacerObject extends Preference {
  /\*\*
  - Indicates whether the Content Placer currently holds content ready for placement.
    \*/
    readonly loaded: boolean

/\*\*

- Loads one or more objects into the Content Placer.
- @param pageItems Page items to load or place.
- @param linkPageItems Whether the content placer should link pageItems; true overrides the link stories value.
- @param linkStories Whether stories are linked in the content placer; applies only to a single story, and pageItem links are also made when more than one item is present.
- @param mapStyles Whether styles should be mapped in the content placer.
- @param showingOptions Whether the link options dialog should appear.
  \*/
  load(pageItems: PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, showingOptions?: boolean): void
  }

/\*\*

- Book object.
  \*/
  declare class Book {
  /\*\*
  - When true, book content objects are converted automatically during repagination and synchronization.
    \*/
    automaticDocumentConversion: boolean

/\*\*

- When true, page numbers update automatically after pages in book content files are added, deleted, or rearranged.
  \*/
  automaticPagination: boolean

/\*\*

- Collection containing book content objects.
  \*/
  readonly bookContents: BookContents

/\*\*

- Preference settings for EPub export.
  \*/
  readonly epubExportPreferences: EPubExportPreference

/\*\*

- Preference settings for EPub fixed layout export.
  \*/
  readonly epubFixedLayoutExportPreferences: EPubFixedLayoutExportPreference

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Complete path to the file.
  \*/
  readonly filePath: File

/\*\*

- Full path for the Book, including the Book name.
  \*/
  readonly fullName: File

/\*\*

- Position of the Book inside its containing object.
  \*/
  readonly index: number

/\*\*

- When true, blank pages are inserted as needed to cover page-number gaps caused by odd or even settings in the repagination option.
  \*/
  insertBlankPage: boolean

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label storage.
  \*/
  label: string

/\*\*

- When true, layers with identical names are merged during PDF export.
  \*/
  mergeIdenticalLayers: boolean

/\*\*

- When true, the Book has changed since the last save.
  \*/
  readonly modified: boolean

/\*\*

- Book name.
  \*/
  readonly name: string

/\*\*

- Parent object for the Book (a Application).
  \*/
  readonly parent: Application

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Settings for preflight book options.
  \*/
  readonly preflightBookOptions: PreflightBookOption

/\*\*

- Settings for print preferences.
  \*/
  readonly printPreferences: PrintPreference

/\*\*

- Object used to assign several properties in one operation.
  \*/
  properties: object

/\*\*

- Page-numbering options for the book content objects in this book.
  \*/
  repaginationOption: RepaginateOption

/\*\*

- When true, the Book has already been saved after creation.
  \*/
  readonly saved: boolean

/\*\*

- Controls style matching for same-named styles while a book is synchronized.
  \*/
  smartMatchStyleGroups: SmartMatchOptions

/\*\*

- Current document used as the style source.
  \*/
  styleSourceDocument: Document | BookContent

/\*\*

- When true, bullets and numbering are synchronized.
  \*/
  synchronizeBulletNumberingList: boolean

/\*\*

- When true, cell styles are synchronized.
  \*/
  synchronizeCellStyle: boolean

/\*\*

- When true, character styles are synchronized.
  \*/
  synchronizeCharacterStyle: boolean

/\*\*

- When true, conditional text is synchronized.
  \*/
  synchronizeConditionalText: boolean

/\*\*

- When true, cross reference formats are synchronized.
  \*/
  synchronizeCrossReferenceFormat: boolean

/\*\*

- When true, master pages are synchronized.
  \*/
  synchronizeMasterPage: boolean

/\*\*

- When true, object styles are synchronized.
  \*/
  synchronizeObjectStyle: boolean

/\*\*

- When true, paragraph styles are synchronized.
  \*/
  synchronizeParagraphStyle: boolean

/\*\*

- When true, swatches are synchronized.
  \*/
  synchronizeSwatch: boolean

/\*\*

- When true, table of content styles are synchronized.
  \*/
  synchronizeTableOfContentStyle: boolean

/\*\*

- When true, table styles are synchronized.
  \*/
  synchronizeTableStyle: boolean

/\*\*

- When true, text variables are synchronized.
  \*/
  synchronizeTextVariable: boolean

/\*\*

- When true, trap styles are synchronized.
  \*/
  synchronizeTrapStyle: boolean

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Event handler to invoke.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Closes the Book.
- @param saving Whether Book changes should be saved before closing.
- @param savingIn File used to save the Book.
- @param versionComments Comment attached to this version.
- @param forceSave Whether to force saving a version.
  \*/
  close(saving?: SaveOptions, savingIn?: File, versionComments?: string, forceSave?: boolean): void

/\*\*

- Writes the book out to a file.
- @param format Export format, supplied either as an enumeration value or as an extension shown in the Save as type or Format menu of the Export dialog.
- @param to Destination file for the exported book.
- @param showingOptions Specifies whether the PDF Export Options Dialog should be shown.
- @param using Specifies export presets; this may be a preset-type object, an enumeration for existing or user-defined presets, or a string naming the preset. When Showing Options is true, the preset chosen in the Export Dialog overrides this parameter.
- @param whichDocuments Specifies book content references from the current book; the list may include duplicates, and omitting it exports the entire book contents.
- @param versionComments Comment attached to this version.
- @param forceSave When true, saves a version forcibly.
  \*/
  exportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, whichDocuments?: BookContent[], versionComments?: string, forceSave?: boolean): void

/\*\*

- Reads the label value stored for the specified key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this object specifier into an array of object references.
  \*/
  getElements(): Book[]

/\*\*

- Stores a label value under the specified key.
- @param key Key to set.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Builds a print package for the document.
- @param to Folder, alias, or path where packaged files are placed.
- @param copyingFonts When true, fonts used in the document are copied into the package folder.
- @param copyingLinkedGraphics When true, linked graphics files are copied into the package folder.
- @param copyingProfiles When true, color profiles are copied into the package folder.
- @param updatingGraphics When true, graphics links are updated to point to the package folder.
- @param includingHiddenLayers When true, fonts and links from hidden layers are copied into the package.
- @param ignorePreflightErrors When true, preflight errors are ignored and packaging continues. When false, packaging is canceled if errors are present.
- @param creatingReport When true, a package report is created with printing instructions, print settings, font lists, links, required inks, and other information.
- @param includeIdml When true, IDML is generated and included in the package folder.
- @param includePdf When true, PDF is generated and included in the package folder.
- @param pdfStyle When specified and PDF inclusion is enabled, this style is used for PDF export if valid; otherwise the last used PDF preset is used.
- @param useDocumentHyphenationExceptionsOnly When selected, InDesign marks the document so it will not reflow when opened or edited on another computer with different hyphenation and dictionary settings.
- @param versionComments Comments attached to the version.
- @param forceSave When true, saves a version forcibly.
  \*/
  packageForPrint(to: File, copyingFonts: boolean, copyingLinkedGraphics: boolean, copyingProfiles: boolean, updatingGraphics: boolean, includingHiddenLayers: boolean, ignorePreflightErrors: boolean, creatingReport: boolean, includeIdml: boolean, includePdf: boolean, pdfStyle: string, useDocumentHyphenationExceptionsOnly: boolean, versionComments: string, forceSave?: boolean): boolean

/\*\*

- Preflights a book and can save the resulting report.
- @param to Preflight report destination.
- @param autoOpen When true, the report opens automatically after it is created.
  \*/
  preflight(to: File, autoOpen?: boolean): void

/\*\*

- Sends one or more Book objects to print.
- @param printDialog Controls whether the print dialog opens.
- @param using Printer preset selection.
  \*/
  print(printDialog: boolean, using: PrinterPresetTypes | PrinterPreset): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Performs book repagination.
  \*/
  repaginate(): void

/\*\*

- Saves the book.
- @param to File path. Note: required only when the book has not already been saved. If it has already been saved, supplying a path saves a copy and closes the original book.
- @param versionComments Comment attached to this version.
- @param forceSave When true, forces saving a version.
  \*/
  save(to: File, versionComments: string, forceSave?: boolean): void

/\*\*

- Synchronizes the whole book with the style source document.
  \*/
  synchronize(): void

/\*\*

- Builds source text that evaluates back to this Book.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string

/\*\*

- Refreshes all cross references across the book.
  \*/
  updateAllCrossReferences(): void

/\*\*

- Refreshes every number throughout the book, including Page numbers, chapter numbers and paragraph numbers.
  \*/
  updateAllNumbers(): void

/\*\*

- Refreshes chapter numbers and paragraph numbers throughout the book.
  \*/
  updateChapterAndParagraphNumbers(): void
  }

/\*\*

- Collection containing books.
  \*/
  declare class Books {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the Book at the specified index.
- @param index Requested index.
  \*/
  [index: number]: Book

/\*\*

- Creates a Book.
- @param fullName Complete path name for the Book to create, with the book file extension '.indb'.
- @param withProperties Initial property values for the new Book.
  \*/
  add(fullName: File, withProperties: object): Book

/\*\*

- Gets an arbitrary Book from the collection.
  \*/
  anyItem(): Book

/\*\*

- Shows how many elements the Book collection contains.
  \*/
  count(): number

/\*\*

- Gets all Book objects in this collection.
  \*/
  everyItem(): Book[]

/\*\*

- Gets the initial Book in the collection.
  \*/
  firstItem(): Book

/\*\*

- Gets the Book matching the provided index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): Book

/\*\*

- Gets the Book whose name matches the argument.
- @param name Name to resolve.
  \*/
  itemByName(name: string): Book

/\*\*

- Gets Books contained in the supplied range.
- @param from Book, index, or name that starts the range.
- @param to Book, index, or name that ends the range.
  \*/
  itemByRange(from: Book | number | string, to: Book | number | string): Book[]

/\*\*

- Gets the final Book in the collection.
  \*/
  lastItem(): Book

/\*\*

- Gets the central Book from this collection.
  \*/
  middleItem(): Book

/\*\*

- Gets the Book positioned after the supplied Book in this collection.
- @param obj Book located just before the target Book.
  \*/
  nextItem(obj: Book): Book

/\*\*

- Gets the Book immediately before the supplied index.
- @param obj Index for the Book that comes after the target Book.
  \*/
  previousItem(obj: Book): Book

/\*\*

- Builds source text that evaluates back to this Book.
  \*/
  toSource(): string
  }

/\*\*

- Document entry included in a book.
  \*/
  declare class BookContent {
  /\*\*
  - Creation date and time for the BookContent.
    \*/
    readonly date: Date

/\*\*

- Page range occupied by the book content object inside the book.
  \*/
  readonly documentPageRange: string

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Complete path to the file.
  \*/
  readonly filePath: File

/\*\*

- Full path for the BookContent, including the BookContent name.
  \*/
  readonly fullName: File

/\*\*

- Unique ID assigned to the BookContent.
  \*/
  readonly id: number

/\*\*

- Position of the BookContent inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label storage.
  \*/
  label: string

/\*\*

- BookContent name.
  \*/
  readonly name: string

/\*\*

- Parent object for the BookContent (a Book).
  \*/
  readonly parent: Book

/\*\*

- Object used to assign several properties in one operation.
  \*/
  properties: object

/\*\*

- Size of the BookContent file.
  \*/
  readonly size: number

/\*\*

- Status for the book content object file.
  \*/
  readonly status: BookContentStatus

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Event handler to invoke.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for the specified key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this object specifier into an array of object references.
  \*/
  getElements(): BookContent[]

/\*\*

- Stores a label value under the specified key.
- @param key Key to set.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Relocates this book content object.
- @param to Location relative to the reference object or inside the book.
- @param reference Reference object; required when to indicates before or after.
  \*/
  move(to?: LocationOptions, reference?: BookContent): BookContent

/\*\*

- Preflights a book content object and can save the resulting report.
- @param to Preflight report destination.
- @param autoOpen When true, the report opens automatically after it is created.
  \*/
  preflight(to: File, autoOpen?: boolean): void

/\*\*

- Deletes this BookContent.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Replaces one book content object with another file. Note: if the new file replaces the current style source document, it becomes the style source document.
- @param using Full path name for the replacement book content object.
  \*/
  replace(using: File): BookContent

/\*\*

- Synchronizes the book content object's formatting with the style source document.
  \*/
  synchronize(): void

/\*\*

- Builds source text that evaluates back to this BookContent.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing book content objects.
  \*/
  declare class BookContents {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the BookContent at the specified index.
- @param index Requested index.
  \*/
  [index: number]: BookContent

/\*\*

- Creates a BookContent object.
- @param fullName Full path name for the new book content object.
- @param at Location of the book content object inside the book.
- @param withProperties Initial property values for the new BookContent.
  \*/
  add(fullName: File, at?: number, withProperties?: object): BookContent

/\*\*

- Gets an arbitrary BookContent from the collection.
  \*/
  anyItem(): BookContent

/\*\*

- Shows how many elements the BookContent collection contains.
  \*/
  count(): number

/\*\*

- Gets all BookContent objects in this collection.
  \*/
  everyItem(): BookContent[]

/\*\*

- Gets the initial BookContent in the collection.
  \*/
  firstItem(): BookContent

/\*\*

- Gets the BookContent matching the provided index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): BookContent

/\*\*

- Gets the BookContent matching the provided ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): BookContent

/\*\*

- Gets the BookContent whose name matches the argument.
- @param name Name to resolve.
  \*/
  itemByName(name: string): BookContent

/\*\*

- Gets BookContents contained in the supplied range.
- @param from BookContent, index, or name that starts the range.
- @param to BookContent, index, or name that ends the range.
  \*/
  itemByRange(from: BookContent | number | string, to: BookContent | number | string): BookContent[]

/\*\*

- Gets the final BookContent in the collection.
  \*/
  lastItem(): BookContent

/\*\*

- Gets the central BookContent from this collection.
  \*/
  middleItem(): BookContent

/\*\*

- Gets the BookContent positioned after the supplied BookContent in this collection.
- @param obj BookContent located just before the target BookContent.
  \*/
  nextItem(obj: BookContent): BookContent

/\*\*

- Gets the BookContent immediately before the supplied index.
- @param obj Index for the BookContent that comes after the target BookContent.
  \*/
  previousItem(obj: BookContent): BookContent
