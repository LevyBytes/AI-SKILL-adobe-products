# Multi State Objects, Mutation Event

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: MultiStateObjects; MutationEvent.

## MultiStateObjects

Represents a set of multi-state objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for the collection.

### Methods

> Number **count**()
>
> Reports how many elements are in the MultiStateObject collection.
> MultiStateObject **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a MultiStateObject.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the MultiStateObject is created. (Optional) |
| LocationOptions | at | Insertion location for the MultiStateObject, relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object used for placement. Note: this is required when at uses before or after. Accepts Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new MultiStateObject. (Optional) |

> MultiStateObject **item**( Mixed **index** )
>
> Gets the MultiStateObject identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector value, either index or name. Accepts Long Integer or String. |

> MultiStateObject **itemByName**( String **name** )
>
> Gets the MultiStateObject with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> MultiStateObject **itemByID**( Number **id** )
>
> Gets the MultiStateObject with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MultiStateObject **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the MultiStateObjects inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | MultiStateObject, index, or name at the start of the range. Can accept: MultiStateObject, Long Integer or String. |
| Mixed | to | Range endpoint as a MultiStateObject, index, or name. Accepts MultiStateObject, Long Integer or String. |

> MultiStateObject **firstItem**()
>
> Gets the first MultiStateObject in the collection.
> MultiStateObject **lastItem**()
>
> Gets the last MultiStateObject in the collection.
> MultiStateObject **middleItem**()
>
> Gets the middle MultiStateObject in the collection.
> MultiStateObject **previousItem**( MultiStateObject **obj** )
>
> Gets the MultiStateObject immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MultiStateObject | obj | Index of the MultiStateObject that comes after the desired MultiStateObject. |

> MultiStateObject **nextItem**( MultiStateObject **obj** )
>
> Gets the MultiStateObject whose index comes after the specified MultiStateObject in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MultiStateObject | obj | MultiStateObject whose index comes before the desired MultiStateObject. |

> MultiStateObject **anyItem**()
>
> Gets any MultiStateObject in the collection.
> MultiStateObject **everyItem**()
>
> Gets every MultiStateObject in the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the MultiStateObject.
> MultiStateObject **[]**( Number **index** )
>
> Gets the MultiStateObject at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## MutationEvent

Reports a mutation event fired by attribute changes.

### Class

> _Read Only_
>
> String `AFTER_ATTRIBUTE_CHANGED` = afterAttributeChanged
>
> Fires after a property value changes on this MutationEvent. It bubbles and cannot be canceled.

### Instance

> _Read Only_
>
> String **attributeName**
>
> Property name that changed.
> _Read Only_
>
> any **attributeValue**
>
> Current value for the changed property.
> _Read Only_
>
> String **eventType**
>
> Event name.
> _Read Only_
>
> Object **target**
>
> Event target object.
> _Read Only_
>
> Object **currentTarget**
>
> Propagation target currently handling the event.
> _Read Only_
>
> EventPhases **eventPhase**
>
> Current event propagation phase.
> _Read Only_
>
> Boolean **bubbles**
>
> True when the event participates in bubbling-phase propagation.
> _Read Only_
>
> Boolean **cancelable**
>
> True when default behavior on the target can be canceled.
> _Read Only_
>
> Date **timeStamp**
>
> Timestamp recorded when the event was initialized.
> _Read Only_
>
> Boolean **propagationStopped**
>
> True when event flow will not continue after the current target.
> _Read Only_
>
> Boolean **defaultPrevented**
>
> True when target default behavior has already been canceled.
> _Read Only_
>
> Number **id**
>
> Unique ID for the MutationEvent.
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the MutationEvent (a Object, UIDBasedObject, CellStyleGroup, CellStyle, TableStyleGroup, Article, ConditionSet, HiddenText, Condition, MotionPreset, AssignedStory, Assignment, ObjectStyleGroup, ObjectStyle, NumberingList, Snippet, Dialog, ColorGroup, Swatch, Color, Tint, Gradient, MixedInkGroup, MixedInk, Behavior, SubmitFormBehavior, PrintFormBehavior, ClearFormBehavior, GotoPageBehavior, GotoAnchorBehavior, SoundBehavior, ViewZoomBehavior, GotoStateBehavior, GotoPreviousStateBehavior, GotoNextStateBehavior, OpenFileBehavior, AnimationBehavior, ShowHideFieldsBehavior, MovieBehavior, GotoURLBehavior, GotoPreviousViewBehavior, GotoNextViewBehavior, GotoPreviousPageBehavior, GotoNextPageBehavior, GotoLastPageBehavior, GotoFirstPageBehavior, PreflightProfileRule, PreflightRuleInstance, PreflightProfile, CrossReferenceFormat, HyperlinkURLDestination, HyperlinkExternalPageDestination, HyperlinkPageDestination, HyperlinkTextDestination, ParagraphDestination, HyperlinkTextSource, CrossReferenceSource, HyperlinkPageItemSource, Bookmark, Hyperlink, IndexSection, PageReference, CrossReference, Index, TOCStyle, FlattenerPreset, BookContent, MenuAction, ScriptMenuAction, NamedGrid, CompositeFontEntry, CompositeFont, CharacterStyleGroup, ParagraphStyleGroup, TextVariableInstance, Footnote, XMLRuleProcessor, XMLTag, Note, TableStyle, TextPath, Asset, Link, Section, MojikumiTable, KinsokuTable, Guide, LanguageWithVendors, Language, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, EndnoteRange, Endnote, Reply, PDFComment, MasterSpread, TrapPreset, Ink, DocumentPreset, Page, Spread, Layer, CharacterStyle, ParagraphStyle, Story, XmlStory, IDBasedObject, ArticleChild, ArticleMember, DialogRow, DialogColumn, Widget, BorderPanel, MeasurementEditbox, MeasurementCombobox, RealCombobox, AngleEditbox, PercentEditbox, RealEditbox, PercentCombobox, AngleCombobox, EnablingGroup, IntegerCombobox, IntegerEditbox, RadiobuttonControl, RadiobuttonGroup, CheckboxControl, Dropdown, StaticText, TextEditbox, ColorGroupSwatch, BackgroundTask, State, RuleDataObject, XMLItem, DTD, XMLInstruction, XMLComment, XMLElement, Table, Cell, IdleTask, Event, ImportExportEvent, DocumentEvent, MutationEvent, IdleEvent, PrintEvent, EventListener, StrokeStyle, StripedStrokeStyle, DottedStrokeStyle, DashedStrokeStyle, GraphicLayer, NonIDBasedObject, TableStyleMapping, CharStyleMapping, CellStyleMapping, ParaStyleMapping, TimingTarget, TimingGroup, TimingList, OpacityGradientStop, ObjectStyleExportTagMap, DataMergeQrcodePlaceholder, DataMergeField, DataMergeImagePlaceholder, DataMergeTextPlaceholder, Panel, LibraryPanel, PagesPanel, Window, StoryWindow, LayoutWindow, NavigationPoint, PreflightProcess, PreflightRule, BuildingBlock, DisplaySetting, IndexingSortOption, Topic, TOCStyleEntry, MenuElement, MenuSeparator, MenuItem, Submenu, Menu, StyleExportTagMap, TextVariable, XMLRuleMatchData, ValidationError, XMLExportMap, XMLImportMap, XMLAttribute, PrinterPreset, Row, Column, Change, HttpLinkConnectionManagerObject, RootObject, Document, Application, Book, Library, Preference, ContentPlacerObject, LinkedPageItemOption, LinkedStoryOption, PublishExportPreference, HTMLFXLExportPreference, EPubExportPreviewAppPreference, EPubFixedLayoutExportPreference, HTMLExportPreference, EPubExportPreference, ConditionalTextPreference, TimingSetting, AnimationSetting, TransformAttributeOption, AlignDistributePreference, TypeContextualUiPreference, GrabberPreference, ObjectStyleContentEffectsCategorySettings, ObjectStyleFillEffectsCategorySettings, ObjectStyleStrokeEffectsCategorySettings, ObjectStyleObjectEffectsCategorySettings, ChapterNumberPreference, NumberingRestartPolicy, Bullet, DataMerge, DataMergeOption, DataMergePreference, JPEGExportPreference, TrackChangesPreference, NotePreference, TransformPreference, ClipboardPreference, GeneralPreference, WatermarkPreference, ButtonPreference, PNGExportPreference, PreflightBookOption, PreflightOption, XMLViewPreference, GpuPerformancePreference, DisplayPerformancePreference, IndexOptions, LinkMetadata, MetadataPreference, ExcelImportPreference, TaggedTextImportPreference, TaggedTextExportPreference, WordRTFImportPreference, TextExportPreference, TextImportPreference, FindChangeContentTransparencySetting, FindChangeFillTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeTransparencySetting, GradientFeatherSetting, FindChangeGradientFeatherSetting, DirectionalFeatherSetting, FindChangeDirectionalFeatherSetting, ContentTransparencySetting, SatinSetting, FindChangeSatinSetting, BevelAndEmbossSetting, FindChangeBevelAndEmbossSetting, InnerGlowSetting, FindChangeInnerGlowSetting, OuterGlowSetting, InnerShadowSetting, FindChangeInnerShadowSetting, FeatherSetting, FindChangeFeatherSetting, DropShadowSetting, FindChangeDropShadowSetting, BlendingSetting, FindChangeBlendingSetting, FillTransparencySetting, StrokeTransparencySetting, TransparencySetting, TransparencyPreference, FlattenerPreference, GalleyPreference, GridPrintingPreference, CjkGridPreference, StoryGridDataInformation, LayoutGridDataInformation, GridDataInformation, CaptionMetadataVariablePreference, CustomTextVariablePreference, MatchParagraphStylePreference, MatchCharacterStylePreference, FileNameVariablePreference, DateVariablePreference, ChapterNumberVariablePreference, PageNumberVariablePreference, FootnoteOption, BaselineFrameGridOption, AnchoredObjectSetting, AnchoredObjectDefault, ExportForWebPreference, XMLPreference, XMLExportPreference, XMLImportPreference, InCopyExportOption, LinkingPreference, ChangeColorPreference, FindColorPreference, FindChangeColorOption, ChangeTransliteratePreference, ChangeObjectPreference, ChangeGlyphPreference, ChangeGrepPreference, ChangeTextPreference, FindTransliteratePreference, FindObjectPreference, FindGlyphPreference, FindGrepPreference, FindTextPreference, FindChangeTransliterateOption, FindChangeObjectOption, FindChangeGlyphOption, FindChangeGrepOption, FindChangeTextOption, ColorSetting, ScriptArg, ScriptPreference, PlaceGun, AdjustLayoutPreference, StrokeFillProxySetting, ImportedPageAttribute, EPSImportPreference, SmartGuidePreference, AutoCorrectPreference, SpellPreference, PolygonPreference, DictionaryPreference, FontLockingPreference, MojikumiUiPreference, ContourOption, TextWrapPreference, TextEditingPreference, FrameFittingOption, ObjectExportOption, PageItemDefault, FontSyncPreference, EndnoteOption, TaggedPDFPreference, InteractivePDFExportPreference, PDFAttribute, PDFPlacePreference, PDFExportPreference, IMEPreference, GraphicLayerOption, ClippingPathSettings, ImageIOPreference, ImagePreference, ToolBox, EPSExportPreference, PrintBookletPrintPreference, PrintBookletOption, PrintPreference, ViewPreference, PasteboardPreference, MarginPreference, GuidePreference, GridPreference, DocumentPreference, TextDefault, TextPreference, TextFramePreference, StoryPreference, PathPoint, Path, GradientStop, AutoCorrectTable, UserDictionary, HyphenationException, Font, TransformationMatrix, PDFExportPreset, NestedStyle, TabStop, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, NestedGrepStyle or NestedLineStyle).
> _Read Only_
>
> Number **index**
>
> Position of the MutationEvent inside its containing object.
> Object **properties**
>
> Lets several properties be set together.

### Methods

> **stopPropagation**()
>
> Prevents the event from continuing past the current target.
> **preventDefault**()
>
> Suppresses default behavior for the event target.
> String **toSource**()
>
> Builds a string that, when executed, returns the MutationEvent.
> MutationEvent **getElements**()
>
> Resolves the object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
