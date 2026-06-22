# Event, Events, Excel Import Preference, Export For Web Preference ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Event — Class; Events; ExcelImportPreference; ExportForWebPreference; ExportFormat; ExportLayerOptions; ExportOrder; ExportPresetFormat; ExportRangeOrAllPages.

## Event — Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Fires before placement of a Event; it bubbles and may be canceled.
> _Read Only_
>
> String `AFTER_PLACE` = afterPlace
>
> Fires after placement of a Event; it bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_LINKS_CHANGED` = afterLinksChanged
>
> Fires once one or more links in the Event are added, deleted, or modified; it bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_NEW` = afterNew
>
> Fires after creation of a Event; it bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_DELETE` = beforeDelete
>
> Fires before deletion of a Event; it bubbles and may be canceled.
> _Read Only_
>
> String `AFTER_DELETE` = afterDelete
>
> Fires after deletion of a Event; it bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_UPDATE` = beforeUpdate
>
> Fires before update of a Event; it bubbles and may be canceled.
> _Read Only_
>
> String `AFTER_UPDATE` = afterUpdate
>
> Fires after update of a Event; it bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_EMBED` = beforeEmbed
>
> Fires before embedding of a Event; it bubbles and may be canceled.
> _Read Only_
>
> String `AFTER_EMBED` = afterEmbed
>
> Fires after embedding of a Event; it bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_UNEMBED` = beforeUnembed
>
> Fires before unembedding of a Event; it bubbles and may be canceled.
> _Read Only_
>
> String `AFTER_UNEMBED` = afterUnembed
>
> Fires after unembedding of a Event; it bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_MOVE` = beforeMove
>
> Fires before a Event moves from one object to another; it bubbles and may be canceled.
> _Read Only_
>
> String `AFTER_MOVE` = afterMove
>
> Fires after a Event moves from one object to another; it bubbles and cannot be canceled.
> _Read Only_
>
> String `ON_INVOKE` = onInvoke
>
> Fires on Event invocation; it does not bubble and cannot be canceled.
> _Read Only_
>
> String `BEFORE_INVOKE` = beforeInvoke
>
> Fires before Event invocation; it does not bubble and may be canceled.
> _Read Only_
>
> String `AFTER_INVOKE` = afterInvoke
>
> Fires after Event invocation; it does not bubble and cannot be canceled.
> _Read Only_
>
> String `BEFORE_DISPLAY` = beforeDisplay
>
> Fires before Event display; it does not bubble and cannot be canceled.
> _Read Only_
>
> String `BEFORE_QUIT` = beforeQuit
>
> Fires before a quit action for the Event; the quit may be canceled, and the event bubbles.
> _Read Only_
>
> String `AFTER_QUIT` = afterQuit
>
> Fires during Event quitting after the quit is committed, so cancellation is unavailable. It bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_CONTEXT_CHANGED` = afterContextChanged
>
> Fires once the active context changes; it bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_SELECTION_CHANGED` = afterSelectionChanged
>
> Fires once the active selection changes; it bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_SELECTION_ATTRIBUTE_CHANGED` = afterSelectionAttributeChanged
>
> Fires once an active-selection attribute changes; it bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_DEACTIVATE` = beforeDeactivate
>
> Fires before the Event becomes inactive; it bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_ACTIVATE` = afterActivate
>
> Fires after the Event becomes active; it bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_OPEN` = afterOpen
>
> Fires after opening a Event; it bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_CLOSE` = beforeClose
>
> Fires before closure of a Event; it bubbles and may be canceled.
> _Read Only_
>
> String `AFTER_CLOSE` = afterClose
>
> Fires while a Event is closing after the close is committed, so cancellation is no longer possible. It bubbles and cannot be canceled.

### Event — Instance

> _Read Only_
>
> String **eventType**
>
> Name assigned to the event.
> _Read Only_
>
> Object **target**
>
> Object receiving the event as its target.
> _Read Only_
>
> Object **currentTarget**
>
> Current target while event propagation is underway.
> _Read Only_
>
> EventPhases **eventPhase**
>
> Current phase within the event propagation sequence.
> _Read Only_
>
> Boolean **bubbles**
>
> When true, this event can use the bubbling phase of propagation.
> _Read Only_
>
> Boolean **cancelable**
>
> When true, code can cancel the event's default action on its target.
> _Read Only_
>
> Date **timeStamp**
>
> Time at which the event was initialized.
> _Read Only_
>
> Boolean **propagationStopped**
>
> When true, propagation has been halted past the current target.
> _Read Only_
>
> Boolean **defaultPrevented**
>
> When true, the event's default action on its target has already been canceled.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Event.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent reference for the Event; possible containing types are Object, UIDBasedObject, CellStyleGroup, CellStyle, TableStyleGroup, Article, ConditionSet, HiddenText, Condition, MotionPreset, AssignedStory, Assignment, ObjectStyleGroup, ObjectStyle, NumberingList, Snippet, Dialog, ColorGroup, Swatch, Color, Tint, Gradient, MixedInkGroup, MixedInk, Behavior, SubmitFormBehavior, PrintFormBehavior, ClearFormBehavior, GotoPageBehavior, GotoAnchorBehavior, SoundBehavior, ViewZoomBehavior, GotoStateBehavior, GotoPreviousStateBehavior, GotoNextStateBehavior, OpenFileBehavior, AnimationBehavior, ShowHideFieldsBehavior, MovieBehavior, GotoURLBehavior, GotoPreviousViewBehavior, GotoNextViewBehavior, GotoPreviousPageBehavior, GotoNextPageBehavior, GotoLastPageBehavior, GotoFirstPageBehavior, PreflightProfileRule, PreflightRuleInstance, PreflightProfile, CrossReferenceFormat, HyperlinkURLDestination, HyperlinkExternalPageDestination, HyperlinkPageDestination, HyperlinkTextDestination, ParagraphDestination, HyperlinkTextSource, CrossReferenceSource, HyperlinkPageItemSource, Bookmark, Hyperlink, IndexSection, PageReference, CrossReference, Index, TOCStyle, FlattenerPreset, BookContent, MenuAction, ScriptMenuAction, NamedGrid, CompositeFontEntry, CompositeFont, CharacterStyleGroup, ParagraphStyleGroup, TextVariableInstance, Footnote, XMLRuleProcessor, XMLTag, Note, TableStyle, TextPath, Asset, Link, Section, MojikumiTable, KinsokuTable, Guide, LanguageWithVendors, Language, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, EndnoteRange, Endnote, Reply, PDFComment, MasterSpread, TrapPreset, Ink, DocumentPreset, Page, Spread, Layer, CharacterStyle, ParagraphStyle, Story, XmlStory, IDBasedObject, ArticleChild, ArticleMember, DialogRow, DialogColumn, Widget, BorderPanel, MeasurementEditbox, MeasurementCombobox, RealCombobox, AngleEditbox, PercentEditbox, RealEditbox, PercentCombobox, AngleCombobox, EnablingGroup, IntegerCombobox, IntegerEditbox, RadiobuttonControl, RadiobuttonGroup, CheckboxControl, Dropdown, StaticText, TextEditbox, ColorGroupSwatch, BackgroundTask, State, RuleDataObject, XMLItem, DTD, XMLInstruction, XMLComment, XMLElement, Table, Cell, IdleTask, StrokeStyle, StripedStrokeStyle, DottedStrokeStyle, DashedStrokeStyle, GraphicLayer, NonIDBasedObject, TableStyleMapping, CharStyleMapping, CellStyleMapping, ParaStyleMapping, TimingTarget, TimingGroup, TimingList, OpacityGradientStop, ObjectStyleExportTagMap, DataMergeQrcodePlaceholder, DataMergeField, DataMergeImagePlaceholder, DataMergeTextPlaceholder, Panel, LibraryPanel, PagesPanel, Window, StoryWindow, LayoutWindow, NavigationPoint, PreflightProcess, PreflightRule, BuildingBlock, DisplaySetting, IndexingSortOption, Topic, TOCStyleEntry, MenuElement, MenuSeparator, MenuItem, Submenu, Menu, StyleExportTagMap, TextVariable, XMLRuleMatchData, ValidationError, XMLExportMap, XMLImportMap, XMLAttribute, PrinterPreset, Row, Column, Change, HttpLinkConnectionManagerObject, RootObject, Document, Application, Book, Library, Preference, ContentPlacerObject, LinkedPageItemOption, LinkedStoryOption, PublishExportPreference, HTMLFXLExportPreference, EPubExportPreviewAppPreference, EPubFixedLayoutExportPreference, HTMLExportPreference, EPubExportPreference, ConditionalTextPreference, TimingSetting, AnimationSetting, TransformAttributeOption, AlignDistributePreference, TypeContextualUiPreference, GrabberPreference, ObjectStyleContentEffectsCategorySettings, ObjectStyleFillEffectsCategorySettings, ObjectStyleStrokeEffectsCategorySettings, ObjectStyleObjectEffectsCategorySettings, ChapterNumberPreference, NumberingRestartPolicy, Bullet, DataMerge, DataMergeOption, DataMergePreference, JPEGExportPreference, TrackChangesPreference, NotePreference, TransformPreference, ClipboardPreference, GeneralPreference, WatermarkPreference, ButtonPreference, PNGExportPreference, PreflightBookOption, PreflightOption, XMLViewPreference, GpuPerformancePreference, DisplayPerformancePreference, IndexOptions, LinkMetadata, MetadataPreference, ExcelImportPreference, TaggedTextImportPreference, TaggedTextExportPreference, WordRTFImportPreference, TextExportPreference, TextImportPreference, FindChangeContentTransparencySetting, FindChangeFillTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeTransparencySetting, GradientFeatherSetting, FindChangeGradientFeatherSetting, DirectionalFeatherSetting, FindChangeDirectionalFeatherSetting, ContentTransparencySetting, SatinSetting, FindChangeSatinSetting, BevelAndEmbossSetting, FindChangeBevelAndEmbossSetting, InnerGlowSetting, FindChangeInnerGlowSetting, OuterGlowSetting, FindChangeOuterGlowSetting, InnerShadowSetting, FindChangeInnerShadowSetting, FeatherSetting, FindChangeFeatherSetting, DropShadowSetting, FindChangeDropShadowSetting, BlendingSetting, FindChangeBlendingSetting, FillTransparencySetting, StrokeTransparencySetting, TransparencySetting, TransparencyPreference, FlattenerPreference, GalleyPreference, GridPrintingPreference, CjkGridPreference, StoryGridDataInformation, LayoutGridDataInformation, GridDataInformation, CaptionMetadataVariablePreference, CustomTextVariablePreference, MatchParagraphStylePreference, MatchCharacterStylePreference, FileNameVariablePreference, DateVariablePreference, ChapterNumberVariablePreference, PageNumberVariablePreference, FootnoteOption, BaselineFrameGridOption, AnchoredObjectSetting, AnchoredObjectDefault, ExportForWebPreference, XMLPreference, XMLExportPreference, XMLImportPreference, InCopyExportOption, LinkingPreference, ChangeColorPreference, FindColorPreference, FindChangeColorOption, ChangeTransliteratePreference, ChangeObjectPreference, ChangeGlyphPreference, ChangeGrepPreference, ChangeTextPreference, FindTransliteratePreference, FindObjectPreference, FindGlyphPreference, FindGrepPreference, FindTextPreference, FindChangeTransliterateOption, FindChangeObjectOption, FindChangeGlyphOption, FindChangeGrepOption, FindChangeTextOption, ColorSetting, ScriptArg, ScriptPreference, PlaceGun, AdjustLayoutPreference, StrokeFillProxySetting, ImportedPageAttribute, EPSImportPreference, SmartGuidePreference, AutoCorrectPreference, SpellPreference, PolygonPreference, DictionaryPreference, FontLockingPreference, MojikumiUiPreference, ContourOption, TextWrapPreference, TextEditingPreference, FrameFittingOption, ObjectExportOption, PageItemDefault, FontSyncPreference, EndnoteOption, TaggedPDFPreference, InteractivePDFExportPreference, PDFAttribute, PDFPlacePreference, PDFExportPreference, IMEPreference, GraphicLayerOption, ClippingPathSettings, ImageIOPreference, ImagePreference, ToolBox, EPSExportPreference, PrintBookletPrintPreference, PrintBookletOption, PrintPreference, ViewPreference, PasteboardPreference, MarginPreference, GuidePreference, GridPreference, DocumentPreference, TextDefault, TextPreference, TextFramePreference, StoryPreference, PathPoint, Path, GradientStop, AutoCorrectTable, UserDictionary, HyphenationException, Font, TransformationMatrix, PDFExportPreset, NestedStyle, TabStop, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, NestedGrepStyle or NestedLineStyle.
> _Read Only_
>
> Number **index**
>
> Position of the Event inside its containing object.
> Object **properties**
>
> Property bag used to assign several properties in one operation.

### Methods

> **stopPropagation**()
>
> Halts event propagation past the current target.
> **preventDefault**()
>
> Suppresses the event's default action on its target.
> String **toSource**()
>
> Builds a string that, when executed, returns the Event.
> Event **getElements**()
>
> Resolves the object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.

## Events

Collection object for events.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> Number **count**()
>
> Reports the element count for the Event.
> Event **item**( Mixed **index** )
>
> Gets the Event identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Use a Long Integer or String for the index or name. |

> Event **itemByID**( Number **id** )
>
> Gets the Event that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Event **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Events included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Start boundary for the range, supplied as an Event, Long Integer, or String through an event, index, or name. |
| Mixed | to | End boundary for the range, supplied as an Event, Long Integer, or String through an event, index, or name. |

> Event **firstItem**()
>
> Gets the first Event in the collection.
> Event **lastItem**()
>
> Gets the last Event in the collection.
> Event **middleItem**()
>
> Gets the middle Event in the collection.
> Event **previousItem**( Event **obj** )
>
> Gets the Event positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Event | obj | Index of the Event that comes after the Event being requested. |

> Event **nextItem**( Event **obj** )
>
> Gets the Event whose index follows the supplied Event in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Event | obj | Event positioned before the requested Event. |

> Event **anyItem**()
>
> Gets any Event in the collection.
> Event **everyItem**()
>
> Gets every Event in the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the Event.
> Event **[]**( Number **index** )
>
> Gets the Event at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## ExcelImportPreference

Preferences controlling Excel import.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent for the ExcelImportPreference (a Application).
> _Read Only_
>
> Events **events**
>
> Events collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection associated with this object.
> Boolean **useTypographersQuotes**
>
> When true, imported straight quotes and apostrophes become typographic quotation marks and apostrophes.
> Boolean **preserveGraphics**
>
> When true, inline graphics are preserved.
> String **viewName**
>
> Stored custom or personal view(s) selected for import with the file.
> String **sheetName**
>
> Worksheet selected for import.
> Number **sheetIndex**
>
> Worksheet index. For details, see sheet name.
> String **rangeName**
>
> Cell range selected for import. Note: Use a colon (:) between the starting and ending cell names in the range.
> AlignmentStyleOptions **alignmentStyle**
>
> Cell alignment applied to the imported document.
> Number **decimalPlaces**
>
> Decimal-place count to include. Note: Valid only when alignment style is decimal.
> Boolean **showHiddenCells**
>
> When true, hidden cells are shown.
> Number **errorCode**
>
> Result code from import. (Key values: code 0=Success; code 1=Empty Sheet; code 2=Invalid sheet; code 3=Invalid range; code 4=Invalid View; code 5=Misc. Error)
> TableFormattingOptions **tableFormatting**
>
> Formatting used for imported spreadsheets.
> Object **properties**
>
> Property bag used to assign several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the ExcelImportPreference.
> ExcelImportPreference **getElements**()
>
> Resolves the object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Creates an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | May be omitted; obsolete parameter. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Deletes the registered listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | May be omitted; obsolete parameter. |

## ExportForWebPreference

Preferences for export-for-web output.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent for the ExportForWebPreference (a Application or Document).
> _Read Only_
>
> Events **events**
>
> Events collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection associated with this object.
> Boolean **copyFormattedImages**
>
> When true, formatted images are copied to the images subfolder.
> Boolean **copyOptimizedImages**
>
> When true, optimized images are copied to the images subfolder.
> Boolean **copyOriginalImages**
>
> When true, original images are copied to the images subfolder.
> ImageConversion **imageConversion**
>
> File format used when images are converted. Note: Applies only if copyOptimizedImages and/or copyFormattedImages is true.
> GIFOptionsPalette **gifOptionsPalette**
>
> GIF conversion color palette. Note: Invalid when image conversion is JPEG.
> Boolean **gifOptionsInterlaced**
>
> When true, interlaced GIFs are generated. Note: Invalid when image conversion is JPEG.
> JPEGOptionsQuality **jpegOptionsQuality**
>
> Quality setting for converted JPEG images. Note: Invalid when image conversion is GIF.
> JPEGOptionsFormat **jpegOptionsFormat**
>
> Formatting approach for converted JPEG images. Note: Invalid when image conversion is GIF.
> Object **properties**
>
> Property bag used to assign several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the ExportForWebPreference.
> ExportForWebPreference **getElements**()
>
> Resolves the object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Creates an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | May be omitted; obsolete parameter. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Deletes the registered listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | May be omitted; obsolete parameter. |

## ExportFormat

Available export-format choices.

### Class

> _Read Only_
>
> Number `TAGGED_TEXT` = 1416066168
>
> Creates a tagged text file that uses a TXT extension.
> _Read Only_
>
> Number `PDF_TYPE` = 1952403524
>
> Creates output in PDF format.
> _Read Only_
>
> Number `EPS_TYPE` = 1952400720
>
> Creates output in EPS format.
> _Read Only_
>
> Number **RTF** = 1381254688
>
> Creates output in rich text format (RTF).
> _Read Only_
>
> Number `TEXT_TYPE` = 1952412773
>
> Creates output in text (TXT) format.
> _Read Only_
>
> Number **XML** = 1481460768
>
> Writes the document's tagged content as XML.
> _Read Only_
>
> Number **JPG** = 1246775072
>
> Creates output in JPEG format.
> _Read Only_
>
> Number `INTERACTIVE_PDF` = 1952409936
>
> Creates output in Interactive PDF format.
> _Read Only_
>
> Number `FIXED_LAYOUT_EPUB` = 1701865080
>
> Creates output in fixed layout EPub format.
> _Read Only_
>
> Number **HTMLFXL** = 1213490808
>
> Creates output in XHTML FXL format.
> _Read Only_
>
> Number `INDESIGN_SNIPPET` = 1936617588
>
> Creates an InDesign snippet (IDMS) file.
> _Read Only_
>
> Number `INDESIGN_MARKUP` = 1768189292
>
> Creates an InDesign markup (IDML) file.
> _Read Only_
>
> Number `INCOPY_MARKUP` = 1768123756
>
> Creates an InCopy markup (ICML) file.
> _Read Only_
>
> Number `PNG_FORMAT` = 1699761735
>
> Creates output in PNG format.
> _Read Only_
>
> Number **HTML** = 1213484364
>
> Creates output in XHTML format.
> _Read Only_
>
> Number **EPUB** = 1701868898
>
> Creates output in EPub format.

## ExportLayerOptions

Choices controlling exported layers.

### Class

> _Read Only_
>
> Number `EXPORT_ALL_LAYERS` = 1702388076
>
> Includes all layers in the export.
> _Read Only_
>
> Number `EXPORT_VISIBLE_LAYERS` = 1702393452
>
> Includes visible layers in the export.
> _Read Only_
>
> Number `EXPORT_VISIBLE_PRINTABLE_LAYERS` = 1702260844
>
> Includes layers that are both visible and printable.

## ExportOrder

Choices for ordering epub and html export content.

### Class

> _Read Only_
>
> Number `LAYOUT_ORDER` = 1700949113
>
> Uses document layout as the basis.
> _Read Only_
>
> Number `ARTICLE_PANEL_ORDER` = 1700946288
>
> Uses article definitions from the article panel.
> _Read Only_
>
> Number `XML_STRUCTURE_ORDER` = 1700952179
>
> Uses the XML structure.

## ExportPresetFormat

Preset type used for import or export.

### Class

> _Read Only_
>
> Number `PDF_EXPORT_PRESETS_FORMAT` = 1716745324
>
> PDF export preset format.
> _Read Only_
>
> Number `PRINTER_PRESETS_FORMAT` = 1918071916
>
> Printer preset format.
> _Read Only_
>
> Number `FLATTENER_PRESETS_FORMAT` = 1951626348
>
> Flattener preset format.
> _Read Only_
>
> Number `DOCUMENT_PRESETS_FORMAT` = 1683190892
>
> Document preset format.

## ExportRangeOrAllPages

Options for exporting pages by range or all pages.

### Class

> _Read Only_
>
> Number `EXPORT_RANGE` = 1785742674
>
> Exports the range named in the page string property.
> _Read Only_
>
> Number `EXPORT_ALL` = 1785742657
>
> Exports every page.
