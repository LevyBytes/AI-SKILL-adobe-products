# Indesign (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/// <reference path="../../shared/global.d.ts" />

/\*\*

- Assignment object.
  \*/
  declare class Assignment {
  /\*\*
  - AssignedStories collection.
    \*/
    readonly assignedStories: AssignedStories

/\*\*

- File status for the assignment.
  \*/
  readonly assignmentFileStatus: AssignmentStatus

/\*\*

- Document path targeted by the hyperlink destination.
  \*/
  readonly documentPath: File

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Assignment content selected for export.
  \*/
  exportOptions: AssignmentExportOptions

/\*\*

- File path using colon delimiters on the Mac OS.
  \*/
  readonly filePath: string | File

/\*\*

- Frame color assigned to the assignment.
  \*/
  frameColor: [number, number, number] | UIColors | NothingEnum

/\*\*

- Unique ID assigned to the Assignment.
  \*/
  readonly id: number

/\*\*

- When true, linked files are included while packaging the assignment.
  \*/
  includeLinksWhenPackage: boolean

/\*\*

- Assignment index within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued property available for custom data.
  \*/
  label: string

/\*\*

- Assignment name.
  \*/
  name: string

/\*\*

- True when the assignment package is current.
  \*/
  readonly packageUpToDate: boolean

/\*\*

- True when the assignment is packaged.
  \*/
  readonly packaged: boolean

/\*\*

- Parent Document for the Assignment.
  \*/
  readonly parent: Document

/\*\*

- Property bundle used to set several properties at once.
  \*/
  properties: object

/\*\*

- Name recorded for notes and tracked changes.
  \*/
  userName: string

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Cancels the assignment package operation.
  \*/
  cancelPackage(): void

/\*\*

- Creates a package for the assignment.
- @param filePath Full path name for the assignment package file.
- @param submit If true, assigned stories are submitted before packaging.
- @param withProperties Starting property values for Assignment creation.
  \*/
  createPackage(filePath: File, submit?: boolean, withProperties?: object): File

/\*\*

- Reads the label value for the specified key.
- @param key Key to read.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier into an array of object references.
  \*/
  getElements(): Assignment[]

/\*\*

- Sets the label value for the specified key.
- @param key Key to write.
- @param value Value to associate with the key.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes both the assignment and its file.
  \*/
  remove(): void

/\*\*

- Removes an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Generates executable source that returns the Assignment.
  \*/
  toSource(): string

/\*\*

- Retrieves this object's specifier.
  \*/
  toSpecifier(): string

/\*\*

- Updates the assignment file.
- @param versionComments Comment attached to this version.
- @param forceSave If true, a version is saved forcibly.
  \*/
  update(versionComments: string, forceSave?: boolean): void
  }

/\*\*

- Assignment collection.
  \*/
  declare class Assignments {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Returns an Assignment by index.
- @param index Index value.
  \*/
  [index: number]: Assignment

/\*\*

- Constructs an Assignment entry.
- @param filePath Full path name for the new assignment.
- @param versionComments Comment attached to this version.
- @param forceSave If true, a version is saved forcibly.
- @param withProperties Starting property values for Assignment creation.
  \*/
  add(filePath: File, versionComments: string, forceSave?: boolean, withProperties?: object): Assignment

/\*\*

- Returns any Assignment from the collection.
  \*/
  anyItem(): Assignment

/\*\*

- Gets the Assignment element count.
  \*/
  count(): number

/\*\*

- Gets every Assignment object.
  \*/
  everyItem(): Assignment[]

/\*\*

- Gets the collection's first Assignment.
  \*/
  firstItem(): Assignment

/\*\*

- Returns an Assignment by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Assignment

/\*\*

- Returns the Assignment matching the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): Assignment

/\*\*

- Returns the Assignment matching the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): Assignment

/\*\*

- Returns Assignments inside the specified range.
- @param from Assignment, index, or name at the range start.
- @param to Assignment, index, or name at the range end.
  \*/
  itemByRange(from: Assignment | number | string, to: Assignment | number | string): Assignment[]

/\*\*

- Gets the collection's final Assignment.
  \*/
  lastItem(): Assignment

/\*\*

- Gets the collection's middle Assignment.
  \*/
  middleItem(): Assignment

/\*\*

- Returns the Assignment whose index is after the specified Assignment in the collection.
- @param obj Assignment that immediately precedes the requested one.
  \*/
  nextItem(obj: Assignment): Assignment

/\*\*

- Returns the Assignment with the index before the specified index.
- @param obj Assignment index immediately after the requested one.
  \*/
  previousItem(obj: Assignment): Assignment

/\*\*

- Generates executable source that returns the Assignment.
  \*/
  toSource(): string
  }

/\*\*

- Assigned story object.
  \*/
  declare class AssignedStory {
  /\*\*
  - Event listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- File path using colon delimiters on the Mac OS.
  \*/
  readonly filePath: string | File

/\*\*

- Unique ID assigned to the AssignedStory.
  \*/
  readonly id: number

/\*\*

- AssignedStory index within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued property available for custom data.
  \*/
  label: string

/\*\*

- AssignedStory name.
  \*/
  name: string

/\*\*

- Parent Assignment for the AssignedStory.
  \*/
  readonly parent: Assignment

/\*\*

- Property bundle used to set several properties at once.
  \*/
  properties: object

/\*\*

- Assigned story reference.
  \*/
  readonly storyReference: Story | PageItem | Oval | Rectangle | Polygon

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value for the specified key.
- @param key Key to read.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier into an array of object references.
  \*/
  getElements(): AssignedStory[]

/\*\*

- Sets the label value for the specified key.
- @param key Key to write.
- @param value Value to associate with the key.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Moves the assigned story to a target location.
- @param to Target position, either inside the container or relative to the reference object.
- @param reference Required reference object when `to` specifies before or after.
  \*/
  move(to?: LocationOptions, reference?: Assignment | AssignedStory): AssignedStory

/\*\*

- Removes an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Generates executable source that returns the AssignedStory.
  \*/
  toSource(): string

/\*\*

- Retrieves this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- AssignedStory collection.
  \*/
  declare class AssignedStories {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Returns an AssignedStory by index.
- @param index Index value.
  \*/
  [index: number]: AssignedStory

/\*\*

- Returns any AssignedStory from the collection.
  \*/
  anyItem(): AssignedStory

/\*\*

- Gets the AssignedStory element count.
  \*/
  count(): number

/\*\*

- Gets every AssignedStory object.
  \*/
  everyItem(): AssignedStory[]

/\*\*

- Gets the collection's first AssignedStory.
  \*/
  firstItem(): AssignedStory

/\*\*

- Returns an AssignedStory by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): AssignedStory

/\*\*

- Returns the AssignedStory matching the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): AssignedStory

/\*\*

- Returns the AssignedStory matching the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): AssignedStory

/\*\*

- Returns AssignedStories inside the specified range.
- @param from AssignedStory, index, or name at the range start.
- @param to AssignedStory, index, or name at the range end.
  \*/
  itemByRange(from: AssignedStory | number | string, to: AssignedStory | number | string): AssignedStory[]

/\*\*

- Gets the collection's final AssignedStory.
  \*/
  lastItem(): AssignedStory

/\*\*

- Gets the collection's middle AssignedStory.
  \*/
  middleItem(): AssignedStory

/\*\*

- Returns the AssignedStory whose index is after the specified AssignedStory in the collection.
- @param obj AssignedStory that immediately precedes the requested one.
  \*/
  nextItem(obj: AssignedStory): AssignedStory

/\*\*

- Returns the AssignedStory with the index before the specified index.
- @param obj AssignedStory index immediately after the requested one.
  \*/
  previousItem(obj: AssignedStory): AssignedStory

/\*\*

- Generates executable source that returns the AssignedStory.
  \*/
  toSource(): string
  }

/\*\*

- Print event.
  \*/
  declare class PrintEvent extends Event {
  /\*\*
  - Fires once printing finishes for a PrintEvent; it bubbles and cannot be canceled.
    \*/
    static readonly `AFTER_PRINT`: string

/\*\*

- Fires before printing starts for a PrintEvent; it bubbles and can be canceled.
  \*/
  static readonly `BEFORE_PRINT`: string

/\*\*

- Print document UI options.
  \*/
  documentPrintUiOption: DocumentPrintUiOptions[]
  }

/\*\*

- Place gun representation.
  \*/
  declare class PlaceGun extends Preference {
  /\*\*
  - Button collection.
    \*/
    readonly buttons: Buttons

/\*\*

- Checkbox collection.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- Combobox collection.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- EPS file collection.
  \*/
  readonly epss: EPSs

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Form field collection.
  \*/
  readonly formFields: FormFields

/\*\*

- Graphic line collection.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Imported graphic collection for any graphic file format (vector, metafile, or bitmap).
  \*/
  readonly graphics: Graphics

/\*\*

- Group collection.
  \*/
  readonly groups: Groups

/\*\*

- Bitmap images in formats such as TIFF, JPEG, and GIF.
  \*/
  readonly images: Images

/\*\*

- Imported InDesign pages.
  \*/
  readonly importedPages: ImportedPages

/\*\*

- Listbox collection.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- Whether the place gun currently contains content ready to place.
  \*/
  readonly loaded: boolean

/\*\*

- Multi-state object collection.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Ellipse collection.
  \*/
  readonly ovals: Ovals

/\*\*

- PageItems collection for processing every page item in a container, such as a document, page, or group, without regard to type.
  \*/
  readonly pageItems: PageItems

/\*\*

- PDF file collection.
  \*/
  readonly pdfs: PDFs

/\*\*

- PICT graphic collection.
  \*/
  readonly picts: PICTs

/\*\*

- Polygon collection.
  \*/
  readonly polygons: Polygons

/\*\*

- Radio button collection.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Rectangle collection.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Signature field collection.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- IDML snippet collection.
  \*/
  readonly snippets: Snippets

/\*\*

- Spline item collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- SVG file collection.
  \*/
  readonly svgs: SVGs

/\*\*

- Text box collection.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- Text frame collection.
  \*/
  readonly textFrames: TextFrames

/\*\*

- WMF graphic collection.
  \*/
  readonly wmfs: WMFs

/\*\*

- Removes the place gun contents.
  \*/
  abortPlaceGun(): void

/\*\*

- Loads one or more files into the place gun.
- @param fileName File or files to place.
- @param showingOptions Whether the import options dialog is shown.
- @param withProperties Starting properties for the object(s) being placed.
  \*/
  loadPlaceGun(fileName: File | File[], showingOptions?: boolean, withProperties?: object): void

/\*\*

- Rotates the place gun contents.
- @param direction Direction used for rotating the contents.
  \*/
  rotate(direction?: RotationDirection): void
  }

/\*\*

- Event listener object.
  \*/
  declare class EventListener {
  /\*\*
  - Event name.
    \*/
    readonly eventType: string

/\*\*

- Handler invoked when the event occurs.
  \*/
  readonly handler: File | Function

/\*\*

- Unique ID assigned to the EventListener.
  \*/
  readonly id: number

/\*\*

- EventListener index within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued property available for custom data.
  \*/
  label: string

/\*\*

- EventListener name; this aliases the EventListener's label property.
  \*/
  name: string

/\*\*

- Parent object for EventListener (a Object, UIDBasedObject, CellStyleGroup, CellStyle, TableStyleGroup, Article, ConditionSet, HiddenText, Condition, MotionPreset, AssignedStory, Assignment, ObjectStyleGroup, ObjectStyle, NumberingList, Snippet, Dialog, ColorGroup, Swatch, Color, Tint, Gradient, MixedInkGroup, MixedInk, Behavior, SubmitFormBehavior, PrintFormBehavior, ClearFormBehavior, GotoPageBehavior, GotoAnchorBehavior, SoundBehavior, ViewZoomBehavior, GotoStateBehavior, GotoPreviousStateBehavior, GotoNextStateBehavior, OpenFileBehavior, AnimationBehavior, ShowHideFieldsBehavior, MovieBehavior, GotoURLBehavior, GotoPreviousViewBehavior, GotoNextViewBehavior, GotoPreviousPageBehavior, GotoNextPageBehavior, GotoLastPageBehavior, GotoFirstPageBehavior, PreflightProfileRule, PreflightRuleInstance, PreflightProfile, CrossReferenceFormat, HyperlinkURLDestination, HyperlinkExternalPageDestination, HyperlinkPageDestination, HyperlinkTextDestination, ParagraphDestination, HyperlinkTextSource, CrossReferenceSource, HyperlinkPageItemSource, Bookmark, Hyperlink, IndexSection, PageReference, CrossReference, Index, TOCStyle, FlattenerPreset, BookContent, MenuAction, ScriptMenuAction, NamedGrid, CompositeFontEntry, CompositeFont, CharacterStyleGroup, ParagraphStyleGroup, TextVariableInstance, Footnote, XMLRuleProcessor, XMLTag, Note, TableStyle, TextPath, Asset, Link, Section, MojikumiTable, KinsokuTable, Guide, LanguageWithVendors, Language, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, EndnoteRange, Endnote, Reply, PDFComment, MasterSpread, TrapPreset, Ink, DocumentPreset, Page, Spread, Layer, CharacterStyle, ParagraphStyle, Story, XmlStory, IDBasedObject, ArticleChild, ArticleMember, DialogRow, DialogColumn, Widget, BorderPanel, MeasurementEditbox, MeasurementCombobox, RealCombobox, AngleEditbox, PercentEditbox, RealEditbox, PercentCombobox, AngleCombobox, EnablingGroup, IntegerCombobox, IntegerEditbox, RadiobuttonControl, RadiobuttonGroup, CheckboxControl, Dropdown, StaticText, TextEditbox, ColorGroupSwatch, BackgroundTask, State, RuleDataObject, XMLItem, DTD, XMLInstruction, XMLComment, XMLElement, Table, Cell, IdleTask, StrokeStyle, StripedStrokeStyle, DottedStrokeStyle, DashedStrokeStyle, GraphicLayer, NonIDBasedObject, TableStyleMapping, CharStyleMapping, CellStyleMapping, ParaStyleMapping, TimingTarget, TimingGroup, TimingList, OpacityGradientStop, ObjectStyleExportTagMap, DataMergeQrcodePlaceholder, DataMergeField, DataMergeImagePlaceholder, DataMergeTextPlaceholder, Panel, LibraryPanel, PagesPanel, Window, StoryWindow, LayoutWindow, NavigationPoint, PreflightProcess, PreflightRule, BuildingBlock, DisplaySetting, IndexingSortOption, Topic, TOCStyleEntry, MenuElement, MenuSeparator, MenuItem, Submenu, Menu, StyleExportTagMap, TextVariable, XMLRuleMatchData, ValidationError, XMLExportMap, XMLImportMap, XMLAttribute, PrinterPreset, Row, Column, Change, HttpLinkConnectionManagerObject, RootObject, Document, Application, Book, Library, Preference, ContentPlacerObject, LinkedPageItemOption, LinkedStoryOption, PublishExportPreference, HTMLFXLExportPreference, EPubExportPreviewAppPreference, EPubFixedLayoutExportPreference, HTMLExportPreference, EPubExportPreference, ConditionalTextPreference, TimingSetting, AnimationSetting, TransformAttributeOption, AlignDistributePreference, TypeContextualUiPreference, GrabberPreference, ObjectStyleContentEffectsCategorySettings, ObjectStyleFillEffectsCategorySettings, ObjectStyleStrokeEffectsCategorySettings, ObjectStyleObjectEffectsCategorySettings, ChapterNumberPreference, NumberingRestartPolicy, Bullet, DataMerge, DataMergeOption, DataMergePreference, JPEGExportPreference, TrackChangesPreference, NotePreference, TransformPreference, ClipboardPreference, GeneralPreference, WatermarkPreference, ButtonPreference, PNGExportPreference, PreflightBookOption, PreflightOption, XMLViewPreference, GpuPerformancePreference, DisplayPerformancePreference, IndexOptions, LinkMetadata, MetadataPreference, ExcelImportPreference, TaggedTextImportPreference, TaggedTextExportPreference, WordRTFImportPreference, TextExportPreference, TextImportPreference, FindChangeContentTransparencySetting, FindChangeFillTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeTransparencySetting, GradientFeatherSetting, FindChangeGradientFeatherSetting, DirectionalFeatherSetting, FindChangeDirectionalFeatherSetting, ContentTransparencySetting, SatinSetting, FindChangeSatinSetting, BevelAndEmbossSetting, FindChangeBevelAndEmbossSetting, InnerGlowSetting, FindChangeInnerGlowSetting, FindChangeOuterGlowSetting, InnerShadowSetting, FindChangeInnerShadowSetting, FeatherSetting, FindChangeFeatherSetting, DropShadowSetting, FindChangeDropShadowSetting, BlendingSetting, FindChangeBlendingSetting, FillTransparencySetting, StrokeTransparencySetting, TransparencySetting, TransparencyPreference, FlattenerPreference, GalleyPreference, GridPrintingPreference, CjkGridPreference, StoryGridDataInformation, LayoutGridDataInformation, GridDataInformation, CaptionMetadataVariablePreference, CustomTextVariablePreference, MatchParagraphStylePreference, MatchCharacterStylePreference, FileNameVariablePreference, DateVariablePreference, ChapterNumberVariablePreference, PageNumberVariablePreference, FootnoteOption, BaselineFrameGridOption, AnchoredObjectSetting, AnchoredObjectDefault, ExportForWebPreference, XMLPreference, XMLExportPreference, XMLImportPreference, InCopyExportOption, LinkingPreference, ChangeColorPreference, FindColorPreference, FindChangeColorOption, ChangeTransliteratePreference, ChangeObjectPreference, ChangeGlyphPreference, ChangeGrepPreference, ChangeTextPreference, FindTransliteratePreference, FindObjectPreference, FindGlyphPreference, FindGrepPreference, FindTextPreference, FindChangeTransliterateOption, FindChangeObjectOption, FindChangeGlyphOption, FindChangeGrepOption, FindChangeTextOption, ColorSetting, ScriptArg, ScriptPreference, PlaceGun, AdjustLayoutPreference, StrokeFillProxySetting, ImportedPageAttribute, EPSImportPreference, SmartGuidePreference, AutoCorrectPreference, SpellPreference, PolygonPreference, DictionaryPreference, FontLockingPreference, MojikumiUiPreference, ContourOption, TextWrapPreference, TextEditingPreference, FrameFittingOption, ObjectExportOption, PageItemDefault, FontSyncPreference, EndnoteOption, TaggedPDFPreference, InteractivePDFExportPreference, PDFAttribute, PDFPlacePreference, PDFExportPreference, IMEPreference, GraphicLayerOption, ClippingPathSettings, ImageIOPreference, ImagePreference, ToolBox, EPSExportPreference, PrintBookletPrintPreference, PrintBookletOption, PrintPreference, ViewPreference, PasteboardPreference, MarginPreference, GuidePreference, GridPreference, DocumentPreference, TextDefault, TextPreference, TextFramePreference, StoryPreference, PathPoint, Path, GradientStop, AutoCorrectTable, UserDictionary, HyphenationException, Font, TransformationMatrix, PDFExportPreset, NestedStyle, TabStop, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, NestedGrepStyle or NestedLineStyle).
  \*/
  readonly parent: any

/\*\*

- Property bundle used to set several properties at once.
  \*/
  properties: object

/\*\*

- Reads the label value for the specified key.
- @param key Key to read.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier into an array of object references.
  \*/
  getElements(): EventListener[]

/\*\*

- Sets the label value for the specified key.
- @param key Key to write.
- @param value Value to associate with the key.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes the EventListener.
  \*/
  remove(): void

/\*\*

- Generates executable source that returns the EventListener.
  \*/
  toSource(): string

/\*\*

- Retrieves this object's specifier.
  \*/
  toSpecifier(): string
  }
