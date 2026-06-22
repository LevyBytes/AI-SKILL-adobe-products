# Indesign (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Collection containing event listeners.
  \*/
  declare class EventListeners {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the EventListener at the requested index.
- @param index Index value.
  \*/
  [index: number]: EventListener

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler callback or file.
- @param captures Obsolete parameter.
- @param withProperties Property seed values for the EventListener being created
  \*/
  add(eventType: string, handler: File | Function, captures?: boolean, withProperties?: object): EventListener

/\*\*

- Retrieves an arbitrary EventListener from this collection.
  \*/
  anyItem(): EventListener

/\*\*

- Reports how many elements the EventListener contains.
  \*/
  count(): number

/\*\*

- Retrieves all EventListener entries from this collection.
  \*/
  everyItem(): EventListener[]

/\*\*

- Retrieves the first EventListener from this collection.
  \*/
  firstItem(): EventListener

/\*\*

- Retrieves the EventListener matching the requested index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): EventListener

/\*\*

- Retrieves the EventListener matching the requested ID.
- @param id ID value.
  \*/
  itemByID(id: number): EventListener

/\*\*

- Retrieves the EventListener matching the requested name.
- @param name Name value.
  \*/
  itemByName(name: string): EventListener

/\*\*

- Retrieves the EventListeners from the requested range.
- @param from Range-start EventListener, index, or name.
- @param to Range-end EventListener, index, or name.
  \*/
  itemByRange(from: EventListener | number | string, to: EventListener | number | string): EventListener[]

/\*\*

- Retrieves the last EventListener from this collection.
  \*/
  lastItem(): EventListener

/\*\*

- Retrieves the middle EventListener from this collection.
  \*/
  middleItem(): EventListener

/\*\*

- Retrieves the EventListener indexed immediately after the supplied EventListener in this collection.
- @param obj EventListener positioned immediately before the desired EventListener.
  \*/
  nextItem(obj: EventListener): EventListener

/\*\*

- Retrieves the EventListener indexed immediately before the supplied index.
- @param obj Index for the EventListener immediately after the desired EventListener.
  \*/
  previousItem(obj: EventListener): EventListener

/\*\*

- Builds executable source text that resolves back to the EventListener.
  \*/
  toSource(): string
  }

/\*\*

- Event object.
  \*/
  declare class Event {
  /\*\*
  - Fires after the Event becomes active. Propagation bubbles. Cancellation is unavailable.
    \*/
    static readonly `AFTER_ACTIVATE`: string

/\*\*

- Fires as a Event closes. The committed close operation can no longer be canceled. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_CLOSE`: string

/\*\*

- Fires after the active context changes. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_CONTEXT_CHANGED`: string

/\*\*

- Fires after a Event is deleted. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_DELETE`: string

/\*\*

- Fires after a Event is embedded. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_EMBED`: string

/\*\*

- Fires after the Event is invoked. No bubbling phase is used. Cancellation is unavailable.
  \*/
  static readonly `AFTER_INVOKE`: string

/\*\*

- Fires after links on the Event are added, removed, or changed. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_LINKS_CHANGED`: string

/\*\*

- Fires after a Event is relocated from one object to another. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_MOVE`: string

/\*\*

- Fires after a Event is created. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_NEW`: string

/\*\*

- Fires after a Event is opened. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_OPEN`: string

/\*\*

- Fires after a Event is placed. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_PLACE`: string

/\*\*

- Fires as the Event quits. The committed quit operation can no longer be canceled. Propagation bubbles. Cancellation is unavailable.
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

- Fires after a Event is unembedded. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_UNEMBED`: string

/\*\*

- Fires after a Event is updated. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `AFTER_UPDATE`: string

/\*\*

- Fires before a Event is closed. Propagation bubbles. Cancellation is available.
  \*/
  static readonly `BEFORE_CLOSE`: string

/\*\*

- Fires before the Event becomes inactive. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `BEFORE_DEACTIVATE`: string

/\*\*

- Fires before a Event is deleted. Propagation bubbles. Cancellation is available.
  \*/
  static readonly `BEFORE_DELETE`: string

/\*\*

- Fires before the Event is displayed. No bubbling phase is used. Cancellation is unavailable.
  \*/
  static readonly `BEFORE_DISPLAY`: string

/\*\*

- Fires before a Event is embedded. Propagation bubbles. Cancellation is available.
  \*/
  static readonly `BEFORE_EMBED`: string

/\*\*

- Fires before the Event is invoked. No bubbling phase is used. Cancellation is available.
  \*/
  static readonly `BEFORE_INVOKE`: string

/\*\*

- Fires before a Event is relocated from one object to another. Propagation bubbles. Cancellation is available.
  \*/
  static readonly `BEFORE_MOVE`: string

/\*\*

- Fires before a Event is placed. Propagation bubbles. Cancellation is available.
  \*/
  static readonly `BEFORE_PLACE`: string

/\*\*

- Fires before the Event is quit. The quit operation may still be canceled. Propagation bubbles. Cancellation is available.
  \*/
  static readonly `BEFORE_QUIT`: string

/\*\*

- Fires before a Event is unembedded. Propagation bubbles. Cancellation is available.
  \*/
  static readonly `BEFORE_UNEMBED`: string

/\*\*

- Fires before a Event is updated. Propagation bubbles. Cancellation is available.
  \*/
  static readonly `BEFORE_UPDATE`: string

/\*\*

- Fires after the Event changes. Propagation bubbles. Cancellation is unavailable.
  \*/
  static readonly `HOME_SCREEN_VISIBILITY_CHANGE`: string

/\*\*

- Fires when the Event is invoked. No bubbling phase is used. Cancellation is unavailable.
  \*/
  static readonly `ON_INVOKE`: string

/\*\*

- True when the event supports the bubbling phase of propagation.
  \*/
  readonly bubbles: boolean

/\*\*

- True when callers may cancel the target event default behavior.
  \*/
  readonly cancelable: boolean

/\*\*

- Current target receiving event propagation.
  \*/
  readonly currentTarget: object

/\*\*

- True once the target event default behavior has already been canceled.
  \*/
  readonly defaultPrevented: boolean

/\*\*

- Current phase of event propagation.
  \*/
  readonly eventPhase: EventPhases

/\*\*

- Name assigned to the event.
  \*/
  readonly eventType: string

/\*\*

- Unique Event ID.
  \*/
  readonly id: number

/\*\*

- Event index inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves into valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Event parent reference (a Object, UIDBasedObject, CellStyleGroup, CellStyle, TableStyleGroup, Article, ConditionSet, HiddenText, Condition, MotionPreset, AssignedStory, Assignment, ObjectStyleGroup, ObjectStyle, NumberingList, Snippet, Dialog, ColorGroup, Swatch, Color, Tint, Gradient, MixedInkGroup, MixedInk, Behavior, SubmitFormBehavior, PrintFormBehavior, ClearFormBehavior, GotoPageBehavior, GotoAnchorBehavior, SoundBehavior, ViewZoomBehavior, GotoStateBehavior, GotoPreviousStateBehavior, GotoNextStateBehavior, OpenFileBehavior, AnimationBehavior, ShowHideFieldsBehavior, MovieBehavior, GotoURLBehavior, GotoPreviousViewBehavior, GotoNextViewBehavior, GotoPreviousPageBehavior, GotoNextPageBehavior, GotoLastPageBehavior, GotoFirstPageBehavior, PreflightProfileRule, PreflightRuleInstance, PreflightProfile, CrossReferenceFormat, HyperlinkURLDestination, HyperlinkExternalPageDestination, HyperlinkPageDestination, HyperlinkTextDestination, ParagraphDestination, HyperlinkTextSource, CrossReferenceSource, HyperlinkPageItemSource, Bookmark, Hyperlink, IndexSection, PageReference, CrossReference, Index, TOCStyle, FlattenerPreset, BookContent, MenuAction, ScriptMenuAction, NamedGrid, CompositeFontEntry, CompositeFont, CharacterStyleGroup, ParagraphStyleGroup, TextVariableInstance, Footnote, XMLRuleProcessor, XMLTag, Note, TableStyle, TextPath, Asset, Link, Section, MojikumiTable, KinsokuTable, Guide, LanguageWithVendors, Language, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, EndnoteRange, Endnote, Reply, PDFComment, MasterSpread, TrapPreset, Ink, DocumentPreset, Page, Spread, Layer, CharacterStyle, ParagraphStyle, Story, XmlStory, IDBasedObject, ArticleChild, ArticleMember, DialogRow, DialogColumn, Widget, BorderPanel, MeasurementEditbox, MeasurementCombobox, RealCombobox, AngleEditbox, PercentEditbox, RealEditbox, PercentCombobox, AngleCombobox, EnablingGroup, IntegerCombobox, IntegerEditbox, RadiobuttonControl, RadiobuttonGroup, CheckboxControl, Dropdown, StaticText, TextEditbox, ColorGroupSwatch, BackgroundTask, State, RuleDataObject, XMLItem, DTD, XMLInstruction, XMLComment, XMLElement, Table, Cell, IdleTask, StrokeStyle, StripedStrokeStyle, DottedStrokeStyle, DashedStrokeStyle, GraphicLayer, NonIDBasedObject, TableStyleMapping, CharStyleMapping, CellStyleMapping, ParaStyleMapping, TimingTarget, TimingGroup, TimingList, OpacityGradientStop, ObjectStyleExportTagMap, DataMergeQrcodePlaceholder, DataMergeField, DataMergeImagePlaceholder, DataMergeTextPlaceholder, Panel, LibraryPanel, PagesPanel, Window, StoryWindow, LayoutWindow, NavigationPoint, PreflightProcess, PreflightRule, BuildingBlock, DisplaySetting, IndexingSortOption, Topic, TOCStyleEntry, MenuElement, MenuSeparator, MenuItem, Submenu, Menu, StyleExportTagMap, TextVariable, XMLRuleMatchData, ValidationError, XMLExportMap, XMLImportMap, XMLAttribute, PrinterPreset, Row, Column, Change, HttpLinkConnectionManagerObject, RootObject, Document, Application, Book, Library, Preference, ContentPlacerObject, LinkedPageItemOption, LinkedStoryOption, PublishExportPreference, HTMLFXLExportPreference, EPubExportPreviewAppPreference, EPubFixedLayoutExportPreference, HTMLExportPreference, EPubExportPreference, ConditionalTextPreference, TimingSetting, AnimationSetting, TransformAttributeOption, AlignDistributePreference, TypeContextualUiPreference, GrabberPreference, ObjectStyleContentEffectsCategorySettings, ObjectStyleFillEffectsCategorySettings, ObjectStyleStrokeEffectsCategorySettings, ObjectStyleObjectEffectsCategorySettings, ChapterNumberPreference, NumberingRestartPolicy, Bullet, DataMerge, DataMergeOption, DataMergePreference, JPEGExportPreference, TrackChangesPreference, NotePreference, TransformPreference, ClipboardPreference, GeneralPreference, WatermarkPreference, ButtonPreference, PNGExportPreference, PreflightBookOption, PreflightOption, XMLViewPreference, GpuPerformancePreference, DisplayPerformancePreference, IndexOptions, LinkMetadata, MetadataPreference, ExcelImportPreference, TaggedTextImportPreference, TaggedTextExportPreference, WordRTFImportPreference, TextExportPreference, TextImportPreference, FindChangeContentTransparencySetting, FindChangeFillTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeTransparencySetting, GradientFeatherSetting, FindChangeGradientFeatherSetting, DirectionalFeatherSetting, FindChangeDirectionalFeatherSetting, ContentTransparencySetting, SatinSetting, FindChangeSatinSetting, BevelAndEmbossSetting, FindChangeBevelAndEmbossSetting, InnerGlowSetting, FindChangeInnerGlowSetting, OuterGlowSetting, FindChangeOuterGlowSetting, InnerShadowSetting, FindChangeInnerShadowSetting, FeatherSetting, FindChangeFeatherSetting, DropShadowSetting, FindChangeDropShadowSetting, BlendingSetting, FindChangeBlendingSetting, FillTransparencySetting, StrokeTransparencySetting, TransparencySetting, TransparencyPreference, FlattenerPreference, GalleyPreference, GridPrintingPreference, CjkGridPreference, StoryGridDataInformation, LayoutGridDataInformation, GridDataInformation, CaptionMetadataVariablePreference, CustomTextVariablePreference, MatchParagraphStylePreference, MatchCharacterStylePreference, FileNameVariablePreference, DateVariablePreference, ChapterNumberVariablePreference, PageNumberVariablePreference, FootnoteOption, BaselineFrameGridOption, AnchoredObjectSetting, AnchoredObjectDefault, ExportForWebPreference, XMLPreference, XMLExportPreference, XMLImportPreference, InCopyExportOption, LinkingPreference, ChangeColorPreference, FindColorPreference, FindChangeColorOption, ChangeTransliteratePreference, ChangeObjectPreference, ChangeGlyphPreference, ChangeGrepPreference, ChangeTextPreference, FindTransliteratePreference, FindObjectPreference, FindGlyphPreference, FindGrepPreference, FindTextPreference, FindChangeTransliterateOption, FindChangeObjectOption, FindChangeGlyphOption, FindChangeGrepOption, FindChangeTextOption, ColorSetting, ScriptArg, ScriptPreference, PlaceGun, AdjustLayoutPreference, StrokeFillProxySetting, ImportedPageAttribute, EPSImportPreference, SmartGuidePreference, AutoCorrectPreference, SpellPreference, PolygonPreference, DictionaryPreference, FontLockingPreference, MojikumiUiPreference, ContourOption, TextWrapPreference, TextEditingPreference, FrameFittingOption, ObjectExportOption, PageItemDefault, FontSyncPreference, EndnoteOption, TaggedPDFPreference, InteractivePDFExportPreference, PDFAttribute, PDFPlacePreference, PDFExportPreference, IMEPreference, GraphicLayerOption, ClippingPathSettings, ImageIOPreference, ImagePreference, ToolBox, EPSExportPreference, PrintBookletPrintPreference, PrintBookletOption, PrintPreference, ViewPreference, PasteboardPreference, MarginPreference, GuidePreference, GridPreference, DocumentPreference, TextDefault, TextPreference, TextFramePreference, StoryPreference, PathPoint, Path, GradientStop, AutoCorrectTable, UserDictionary, HyphenationException, Font, TransformationMatrix, PDFExportPreset, NestedStyle, TabStop, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, NestedGrepStyle or NestedLineStyle).
  \*/
  readonly parent: any

/\*\*

- True once event propagation has been halted past the current target.
  \*/
  readonly propagationStopped: boolean

/\*\*

- Property bag for assigning multiple properties together.
  \*/
  properties: object

/\*\*

- Event target object.
  \*/
  readonly target: object

/\*\*

- Timestamp from event initialization.
  \*/
  readonly timeStamp: Date

/\*\*

- Expands the object specifier into an array of object references.
  \*/
  getElements(): Event[]

/\*\*

- Prevents the target's default event behavior.
  \*/
  preventDefault(): void

/\*\*

- Halts event propagation beyond the current target.
  \*/
  stopPropagation(): void

/\*\*

- Builds executable source text that resolves back to the Event.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing events.
  \*/
  declare class Events {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Event at the requested index.
- @param index Index value.
  \*/
  [index: number]: Event

/\*\*

- Retrieves an arbitrary Event from this collection.
  \*/
  anyItem(): Event

/\*\*

- Reports how many elements the Event contains.
  \*/
  count(): number

/\*\*

- Retrieves all Event entries from this collection.
  \*/
  everyItem(): Event[]

/\*\*

- Retrieves the first Event from this collection.
  \*/
  firstItem(): Event

/\*\*

- Retrieves the Event matching the requested index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Event

/\*\*

- Retrieves the Event matching the requested ID.
- @param id ID value.
  \*/
  itemByID(id: number): Event

/\*\*

- Retrieves the Events from the requested range.
- @param from Range-start Event, index, or name.
- @param to Range-end Event, index, or name.
  \*/
  itemByRange(from: Event | number | string, to: Event | number | string): Event[]

/\*\*

- Retrieves the last Event from this collection.
  \*/
  lastItem(): Event

/\*\*

- Retrieves the middle Event from this collection.
  \*/
  middleItem(): Event

/\*\*

- Retrieves the Event indexed immediately after the supplied Event in this collection.
- @param obj Event positioned immediately before the desired Event.
  \*/
  nextItem(obj: Event): Event

/\*\*

- Retrieves the Event indexed immediately before the supplied index.
- @param obj Index for the Event immediately after the desired Event.
  \*/
  previousItem(obj: Event): Event

/\*\*

- Builds executable source text that resolves back to the Event.
  \*/
  toSource(): string
  }

/\*\*

- Idle event object.
  \*/
  declare class IdleEvent extends Event {
  /\*\*
  - Fires during idle time for this IdleEvent. No bubbling phase is used. Cancellation is unavailable.
    \*/
    static readonly `ON_IDLE`: string

/\*\*

- Time allocation for this task when the event fired.
  \*/
  readonly timeAllocated: number
  }

/\*\*

- Mutation event object for attribute-change notifications.
  \*/
  declare class MutationEvent extends Event {
  /\*\*
  - Fires when this MutationEvent observes a property-value change. Propagation bubbles. Cancellation is unavailable.
    \*/
    static readonly `AFTER_ATTRIBUTE_CHANGED`: string

/\*\*

- Name of the changed property.
  \*/
  readonly attributeName: string

/\*\*

- Current value for the changed property.
  \*/
  readonly attributeValue: any
  }

/\*\*

- Attachable idle task object.
  \*/
  declare class IdleTask {
  /\*\*
  - Fires during idle time for this IdleTask. No bubbling phase is used. Cancellation is unavailable.
    \*/
    static readonly `ON_IDLE`: string

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique IdleTask ID.
  \*/
  readonly id: number

/\*\*

- IdleTask index inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves into valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued property available for arbitrary text.
  \*/
  label: string

/\*\*

- Name assigned to the IdleTask.
  \*/
  name: string

/\*\*

- Parent reference for the IdleTask (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property bag for assigning multiple properties together.
  \*/
  properties: object

/\*\*

- Sleep interval, in milliseconds, before this task is called again; setting it to zero deletes the task.
  \*/
  sleep: number

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler callback or file.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value for the specified key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Expands the object specifier into an array of object references.
  \*/
  getElements(): IdleTask[]

/\*\*

- Stores the label value for the specified key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes this IdleTask.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type value.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the IdleTask.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Every attachable idle task.
  \*/
  declare class IdleTasks {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the IdleTask at the requested index.
- @param index Index value.
  \*/
  [index: number]: IdleTask

/\*\*

- Creates a new IdleTask instance.
- @param withProperties Property seed values for the IdleTask being created
  \*/
  add(withProperties: object): IdleTask
