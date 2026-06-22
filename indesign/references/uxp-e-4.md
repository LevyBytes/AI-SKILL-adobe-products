# Epub Cover, Epub Fixed Layout Spread Control, Epub Navigation Style, Epub Version ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: EpubCover; EpubFixedLayoutSpreadControl; EpubNavigationStyle; EpubVersion; EventListener; EventListeners; EventPhases.

## EpubCover

Cover-image option for EPub export.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> No cover image is used.
> _Read Only_
>
> Number `FIRST_PAGE` = 1700947536
>
> The first page is rasterized for the cover image.
> _Read Only_
>
> Number `EXTERNAL_IMAGE` = 1700952169
>
> An external image supplies the cover image.

## EpubFixedLayoutSpreadControl

Spread-control choices for fixed layout EPub.

### Class

> _Read Only_
>
> Number `SPREADS_BASED_ON_DOC` = 1700949860
>
> Spreads follow the document.
> _Read Only_
>
> Number `PHYSICAL_SPREADS` = 1701865593
>
> Physical spreads are used.
> _Read Only_
>
> Number `SYNTHETIC_SPREADS` = 1702066542
>
> Synthetic spreads are used.
> _Read Only_
>
> Number `NO_SPREADS` = 1702063727
>
> Spreads are disabled.

## EpubNavigationStyle

Available choices for epub navigation style.

### Class

> _Read Only_
>
> Number `NO_NAVIGATION` = 1701736054
>
> Navigation is omitted.
> _Read Only_
>
> Number `FILENAME_NAVIGATION` = 1701211766
>
> Navigation is based on file names.
> _Read Only_
>
> Number `TOC_STYLE_NAVIGATION` = 1702129270
>
> Navigation is based on the TOC style.
> _Read Only_
>
> Number `BOOKMARKS_NAVIGATION` = 1700949622
>
> Navigation is based on bookmarks.

## EpubVersion

EPub export option that selects the epub version.

### Class

> _Read Only_
>
> Number **EPUB2** = 1702257970
>
> EPUB 2.0.1.
> _Read Only_
>
> Number **EPUB3** = 1702257971
>
> EPUB 3.0.

## EventListener

Listener object for an event.

### Instance

> _Read Only_
>
> String **eventType**
>
> Event name.
> _Read Only_
>
> Mixed **handler**
>
> Handler called on event dispatch. Can return: File or JavaScript Function.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the EventListener.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the EventListener (a Object, UIDBasedObject, CellStyleGroup, CellStyle, TableStyleGroup, Article, ConditionSet, HiddenText, Condition, MotionPreset, AssignedStory, Assignment, ObjectStyleGroup, ObjectStyle, NumberingList, Snippet, Dialog, ColorGroup, Swatch, Color, Tint, Gradient, MixedInkGroup, MixedInk, Behavior, SubmitFormBehavior, PrintFormBehavior, ClearFormBehavior, GotoPageBehavior, GotoAnchorBehavior, SoundBehavior, ViewZoomBehavior, GotoStateBehavior, GotoPreviousStateBehavior, GotoNextStateBehavior, OpenFileBehavior, AnimationBehavior, ShowHideFieldsBehavior, MovieBehavior, GotoURLBehavior, GotoPreviousViewBehavior, GotoNextViewBehavior, GotoPreviousPageBehavior, GotoNextPageBehavior, GotoLastPageBehavior, GotoFirstPageBehavior, PreflightProfileRule, PreflightRuleInstance, PreflightProfile, CrossReferenceFormat, HyperlinkURLDestination, HyperlinkExternalPageDestination, HyperlinkPageDestination, HyperlinkTextDestination, ParagraphDestination, HyperlinkTextSource, CrossReferenceSource, HyperlinkPageItemSource, Bookmark, Hyperlink, IndexSection, PageReference, CrossReference, Index, TOCStyle, FlattenerPreset, BookContent, MenuAction, ScriptMenuAction, NamedGrid, CompositeFontEntry, CompositeFont, CharacterStyleGroup, ParagraphStyleGroup, TextVariableInstance, Footnote, XMLRuleProcessor, XMLTag, Note, TableStyle, TextPath, Asset, Link, Section, MojikumiTable, KinsokuTable, Guide, LanguageWithVendors, Language, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, EndnoteRange, Endnote, Reply, PDFComment, MasterSpread, TrapPreset, Ink, DocumentPreset, Page, Spread, Layer, CharacterStyle, ParagraphStyle, Story, XmlStory, IDBasedObject, ArticleChild, ArticleMember, DialogRow, DialogColumn, Widget, BorderPanel, MeasurementEditbox, MeasurementCombobox, RealCombobox, AngleEditbox, PercentEditbox, RealEditbox, PercentCombobox, AngleCombobox, EnablingGroup, IntegerCombobox, IntegerEditbox, RadiobuttonControl, RadiobuttonGroup, CheckboxControl, Dropdown, StaticText, TextEditbox, ColorGroupSwatch, BackgroundTask, State, RuleDataObject, XMLItem, DTD, XMLInstruction, XMLComment, XMLElement, Table, Cell, IdleTask, StrokeStyle, StripedStrokeStyle, DottedStrokeStyle, DashedStrokeStyle, GraphicLayer, NonIDBasedObject, TableStyleMapping, CharStyleMapping, CellStyleMapping, ParaStyleMapping, TimingTarget, TimingGroup, TimingList, OpacityGradientStop, ObjectStyleExportTagMap, DataMergeQrcodePlaceholder, DataMergeField, DataMergeImagePlaceholder, DataMergeTextPlaceholder, Panel, LibraryPanel, PagesPanel, Window, StoryWindow, LayoutWindow, NavigationPoint, PreflightProcess, PreflightRule, BuildingBlock, DisplaySetting, IndexingSortOption, Topic, TOCStyleEntry, MenuElement, MenuSeparator, MenuItem, Submenu, Menu, StyleExportTagMap, TextVariable, XMLRuleMatchData, ValidationError, XMLExportMap, XMLImportMap, XMLAttribute, PrinterPreset, Row, Column, Change, HttpLinkConnectionManagerObject, RootObject, Document, Application, Book, Library, Preference, ContentPlacerObject, LinkedPageItemOption, LinkedStoryOption, PublishExportPreference, HTMLFXLExportPreference, EPubExportPreviewAppPreference, EPubFixedLayoutExportPreference, HTMLExportPreference, EPubExportPreference, ConditionalTextPreference, TimingSetting, AnimationSetting, TransformAttributeOption, AlignDistributePreference, TypeContextualUiPreference, GrabberPreference, ObjectStyleContentEffectsCategorySettings, ObjectStyleFillEffectsCategorySettings, ObjectStyleStrokeEffectsCategorySettings, ObjectStyleObjectEffectsCategorySettings, ChapterNumberPreference, NumberingRestartPolicy, Bullet, DataMerge, DataMergeOption, DataMergePreference, JPEGExportPreference, TrackChangesPreference, NotePreference, TransformPreference, ClipboardPreference, GeneralPreference, WatermarkPreference, ButtonPreference, PNGExportPreference, PreflightBookOption, PreflightOption, XMLViewPreference, GpuPerformancePreference, DisplayPerformancePreference, IndexOptions, LinkMetadata, MetadataPreference, ExcelImportPreference, TaggedTextImportPreference, TaggedTextExportPreference, WordRTFImportPreference, TextExportPreference, TextImportPreference, FindChangeContentTransparencySetting, FindChangeFillTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeTransparencySetting, GradientFeatherSetting, FindChangeGradientFeatherSetting, DirectionalFeatherSetting, FindChangeDirectionalFeatherSetting, ContentTransparencySetting, SatinSetting, FindChangeSatinSetting, BevelAndEmbossSetting, FindChangeBevelAndEmbossSetting, InnerGlowSetting, FindChangeInnerGlowSetting, OuterGlowSetting, FindChangeOuterGlowSetting, InnerShadowSetting, FindChangeInnerShadowSetting, FeatherSetting, FindChangeFeatherSetting, DropShadowSetting, FindChangeDropShadowSetting, BlendingSetting, FindChangeBlendingSetting, FillTransparencySetting, StrokeTransparencySetting, TransparencySetting, TransparencyPreference, FlattenerPreference, GalleyPreference, GridPrintingPreference, CjkGridPreference, StoryGridDataInformation, LayoutGridDataInformation, GridDataInformation, CaptionMetadataVariablePreference, CustomTextVariablePreference, MatchParagraphStylePreference, MatchCharacterStylePreference, FileNameVariablePreference, DateVariablePreference, ChapterNumberVariablePreference, PageNumberVariablePreference, FootnoteOption, BaselineFrameGridOption, AnchoredObjectSetting, AnchoredObjectDefault, ExportForWebPreference, XMLPreference, XMLExportPreference, XMLImportPreference, InCopyExportOption, LinkingPreference, ChangeColorPreference, FindColorPreference, FindChangeColorOption, ChangeTransliteratePreference, ChangeObjectPreference, ChangeGlyphPreference, ChangeGrepPreference, ChangeTextPreference, FindTransliteratePreference, FindObjectPreference, FindGlyphPreference, FindGrepPreference, FindTextPreference, FindChangeTransliterateOption, FindChangeObjectOption, FindChangeGlyphOption, FindChangeGrepOption, FindChangeTextOption, ColorSetting, ScriptArg, ScriptPreference, PlaceGun, AdjustLayoutPreference, StrokeFillProxySetting, ImportedPageAttribute, EPSImportPreference, SmartGuidePreference, AutoCorrectPreference, SpellPreference, PolygonPreference, DictionaryPreference, FontLockingPreference, MojikumiUiPreference, ContourOption, TextWrapPreference, TextEditingPreference, FrameFittingOption, ObjectExportOption, PageItemDefault, FontSyncPreference, EndnoteOption, TaggedPDFPreference, InteractivePDFExportPreference, PDFAttribute, PDFPlacePreference, PDFExportPreference, IMEPreference, GraphicLayerOption, ClippingPathSettings, ImageIOPreference, ImagePreference, ToolBox, EPSExportPreference, PrintBookletPrintPreference, PrintBookletOption, PrintPreference, ViewPreference, PasteboardPreference, MarginPreference, GuidePreference, GridPreference, DocumentPreference, TextDefault, TextPreference, TextFramePreference, StoryPreference, PathPoint, Path, GradientStop, AutoCorrectTable, UserDictionary, HyphenationException, Font, TransformationMatrix, PDFExportPreset, NestedStyle, TabStop, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, NestedGrepStyle or NestedLineStyle).
> _Read Only_
>
> Number **index**
>
> Index of the EventListener inside its containing object.
> String **name**
>
> Name of the EventListener; this aliases the EventListener's label property.
> String **label**
>
> Property that accepts any string value.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to store under. |
| String | value | Value to associate with the key. |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to read. |

> **remove**()
>
> Deletes this EventListener.
> String **toSource**()
>
> Produces a string that, when executed, returns the EventListener.
> EventListener **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.

## EventListeners

Collection containing event listeners.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size.

### Methods

> EventListener **add**( String **eventType**, Mixed **handler**, Boolean **captures**, Object **withProperties** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
| Object | withProperties | Starting property values for the new EventListener. (Optional) |

> Number **count**()
>
> Shows the element count for the EventListener collection.
> EventListener **item**( Mixed **index** )
>
> Returns the EventListener identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector by index or name. Can accept: Long Integer or String. |

> EventListener **itemByName**( String **name** )
>
> Returns the EventListener with the requested name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> EventListener **itemByID**( Number **id** )
>
> Returns the EventListener with the requested ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> EventListener **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the EventListeners contained in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start specified by EventListener, index, or name. Can accept: EventListener, Long Integer or String. |
| Mixed | to | Range endpoint specified by EventListener, index, or name. Can accept: EventListener, Long Integer or String. |

> EventListener **firstItem**()
>
> Returns the first EventListener in this collection.
> EventListener **lastItem**()
>
> Returns the final EventListener in this collection.
> EventListener **middleItem**()
>
> Returns the middle EventListener in this collection.
> EventListener **previousItem**( EventListener **obj** )
>
> Returns the EventListener whose index is immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EventListener | obj | Reference EventListener positioned after the one to return. |

> EventListener **nextItem**( EventListener **obj** )
>
> Returns the EventListener whose index immediately follows the specified EventListener in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EventListener | obj | Reference EventListener positioned before the one to return. |

> EventListener **anyItem**()
>
> Returns any EventListener from this collection.
> EventListener **everyItem**()
>
> Returns every EventListener in this collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the EventListener.
> EventListener **[]**( Number **index** )
>
> Returns the EventListener with the requested index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to return. |

## EventPhases

Options that describe the phase of event propagation.

### Class

> _Read Only_
>
> Number `NOT_DISPATCHING` = 1701727812
>
> Propagation has not started.
> _Read Only_
>
> Number `AT_TARGET` = 1701724500
>
> Propagation is at the target.
> _Read Only_
>
> Number `BUBBLING_PHASE` = 1701724789
>
> Propagation is in the bubbling phase.
> _Read Only_
>
> Number **DONE** = 1701725252
>
> Propagation has finished.
