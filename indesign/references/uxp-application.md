# Application (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `BEFORE_NEW` = beforeNew
>
> Before a Document is created, this cancelable event is dispatched and bubbles.
> _Read Only_
>
> String `BEFORE_OPEN` = beforeOpen
>
> Before a Document is opened, this cancelable event is dispatched and bubbles.
> _Read Only_
>
> String `AFTER_CLOSE` = afterClose
>
> After a Document is closed, this non-cancelable event is dispatched and bubbles.
> _Read Only_
>
> String `AFTER_CONTEXT_CHANGED` = afterContextChanged
>
> After the active context changes, this non-cancelable event is dispatched and bubbles.
> _Read Only_
>
> String `AFTER_SELECTION_CHANGED` = afterSelectionChanged
>
> After the active selection changes, this non-cancelable event is dispatched and bubbles.
> _Read Only_
>
> String `AFTER_SELECTION_ATTRIBUTE_CHANGED` = afterSelectionAttributeChanged
>
> After an attribute on the active selection changes, this non-cancelable event is dispatched and bubbles.
> _Read Only_
>
> String `BEFORE_DEACTIVATE` = beforeDeactivate
>
> Before the Application becomes inactive, this non-cancelable event is dispatched and bubbles.
> _Read Only_
>
> String `AFTER_ACTIVATE` = afterActivate
>
> After the Application becomes active, this non-cancelable event is dispatched and bubbles.
> _Read Only_
>
> String `BEFORE_QUIT` = beforeQuit
>
> Before the Application quits, this cancelable bubbling event allows the quit to be canceled.
> _Read Only_
>
> String `AFTER_QUIT` = afterQuit
>
> When the Application is quitting after commit, this non-cancelable event is dispatched and bubbles.

## Application — Instance

> _Read Only_
>
> XMLViewPreference **xmlViewPreferences**
>
> Settings for XML view preferences.
> _Read Only_
>
> Number **performanceMetrics**
>
> Available performance metrics.
> _Read Only_
>
> ToolBox **toolBoxTools**
>
> Current tool box states.
> _Read Only_
>
> DisplayPerformancePreference **displayPerformancePreferences**
>
> Settings for Display performance.
> _Read Only_
>
> GpuPerformancePreference **gpuPerformancePreferences**
>
> Preferences for GPU performance.
> _Read Only_
>
> GalleyPreference **galleyPreferences**
>
> Settings for Galley preferences.
> _Read Only_
>
> Boolean **homeScreenVisible**
>
> Reports whether the home screen is visible.
> _Read Only_
>
> TextEditingPreference **textEditingPreferences**
>
> Settings for Text editing preferences.
> _Read Only_
>
> PreflightOption **preflightOptions**
>
> Settings for Preflight option.
> _Read Only_
>
> PreflightBookOption **preflightBookOptions**
>
> Settings for Preflight book option.
> _Read Only_
>
> String **allPreflightObjectTypes**
>
> List of every object type string usable by a preflight rule.
> _Read Only_
>
> String **allPreflightRuleCategories**
>
> List of every category declared by rules.
> _Read Only_
>
> String **allPreflightRuleIDs**
>
> List of every known declared rule ID.
> _Read Only_
>
> DataMergeOption **dataMergeOptions**
>
> Data merge option properties defining the data merge.
> _Read Only_
>
> NotePreference **notePreferences**
>
> Settings for Note preferences.
> _Read Only_
>
> JPEGExportPreference **jpegExportPreferences**
>
> Preferences for JPEG export.
> _Read Only_
>
> TextImportPreference **textImportPreferences**
>
> Preferences for Text import.
> _Read Only_
>
> TextExportPreference **textExportPreferences**
>
> Preferences for Text export.
> _Read Only_
>
> TaggedTextExportPreference **taggedTextExportPreferences**
>
> Preferences for Tagged text export.
> _Read Only_
>
> TaggedTextImportPreference **taggedTextImportPreferences**
>
> Preferences for Tagged text import.
> _Read Only_
>
> WordRTFImportPreference **wordRTFImportPreferences**
>
> Preferences for Word and RTF import.
> _Read Only_
>
> ExcelImportPreference **excelImportPreferences**
>
> Preferences for Excel import.
> _Read Only_
>
> EPubExportPreviewAppPreference **epubViewingAppsPreferences**
>
> Settings for EPub export preview app preferences.
> _Read Only_
>
> XMLPreference **xmlPreferences**
>
> Settings for XML preferences.
> _Read Only_
>
> XMLImportPreference **xmlImportPreferences**
>
> Settings for XML import preferences.
> _Read Only_
>
> XMLExportPreference **xmlExportPreferences**
>
> Settings for XML export preferences.
> _Read Only_
>
> ExportForWebPreference **exportForWebPreferences**
>
> Preferences for The default export for web.
> _Read Only_
>
> TransparencyPreference **transparencyPreferences**
>
> Settings for Transparency preferences.
> _Read Only_
>
> TextFramePreference **textFramePreferences**
>
> Settings for Text frame preferences.
> _Read Only_
>
> TextPreference **textPreferences**
>
> Settings for Text preferences.
> _Read Only_
>
> TextDefault **textDefaults**
>
> Settings for Text default.
> _Read Only_
>
> EndnoteOption **endnoteOptions**
>
> Settings for Endnote option.
> _Read Only_
>
> DictionaryPreference **dictionaryPreferences**
>
> Settings for User dictionary preferences.
> _Read Only_
>
> FontSyncPreference **fontSyncPreferences**
>
> Font sync preference properties defining font preferences.
> _Read Only_
>
> StoryPreference **storyPreferences**
>
> Settings for Story preferences.
> _Read Only_
>
> AnchoredObjectDefault **anchoredObjectDefaults**
>
> Settings for Anchored object default.
> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings for Anchored object.
> _Read Only_
>
> BaselineFrameGridOption **baselineFrameGridOptions**
>
> Settings for Baseline frame grid option.
> _Read Only_
>
> FootnoteOption **footnoteOptions**
>
> Settings for Footnote option.
> _Read Only_
>
> ParagraphStyle **allParagraphStyles**
>
> Lists every paragraph style, including styles in any group.
> _Read Only_
>
> CharacterStyle **allCharacterStyles**
>
> Lists every character style, including styles in any group.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Text wrap preference properties defining default formatting for text wrapped around objects.
> _Read Only_
>
> TypeContextualUiPreference **typeContextualUiPrefs**
>
> Preferences controlling contextual UI display for alternates.
> _Read Only_
>
> TableStyle **allTableStyles**
>
> Every Table style.
> _Read Only_
>
> CellStyle **allCellStyles**
>
> Every Cell style.
> _Read Only_
>
> DocumentPreference **documentPreferences**
>
> Settings for Document preferences.
> _Read Only_
>
> GridPreference **gridPreferences**
>
> Settings for Grid preferences.
> _Read Only_
>
> GuidePreference **guidePreferences**
>
> Settings for Guide preferences.
> _Read Only_
>
> MarginPreference **marginPreferences**
>
> Settings for Margin preferences.
> _Read Only_
>
> PasteboardPreference **pasteboardPreferences**
>
> Settings for Pasteboard preferences.
> _Read Only_
>
> ViewPreference **viewPreferences**
>
> Settings for View preferences.
> _Read Only_
>
> SmartGuidePreference **smartGuidePreferences**
>
> Preference properties for Smart Guides.
> _Read Only_
>
> SpellPreference **spellPreferences**
>
> Preferences for spell checking.
> _Read Only_
>
> AutoCorrectPreference **autoCorrectPreferences**
>
> Preferences for auto correction.
> _Read Only_
>
> LinkedStoryOption **linkedStoryOptions**
>
> Options for linked stories.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for linked Page Items.
> _Read Only_
>
> ScriptPreference **scriptPreferences**
>
> Preferences for Script.
> _Read Only_
>
> ScriptArg **scriptArgs**
>
> Arguments supplied to a script.
> _Read Only_
>
> EPSExportPreference **epsExportPreferences**
>
> Preferences for EPS export.
> _Read Only_
>
> PNGExportPreference **pngExportPreferences**
>
> Preferences for PNG export.
> _Read Only_
>
> PDFExportPreference **pdfExportPreferences**
>
> Collection containing PDF export preferences.
> _Read Only_
>
> InteractivePDFExportPreference **interactivePDFExportPreferences**
>
> Preferences for Interactive PDF export.
> _Read Only_
>
> PDFPlacePreference **pdfPlacePreferences**
>
> PDF place preference properties defining PDF placement in the current document.
> _Read Only_
>
> TaggedPDFPreference **taggedPDFPreferences**
>
> Preferences for Tagged PDF.
> _Read Only_
>
> String **placeableFileExtensions**
>
> Lists placeable file-type extensions.
> _Read Only_
>
> String **placeableFileTypes**
>
> Lists placeable file types.
> _Read Only_
>
> LinkingPreference **linkingPreferences**
>
> Links preference properties defining link preferences.
> _Read Only_
>
> GrabberPreference **grabberPreferences**
>
> Grabber preference properties defining scrolling display-performance quality.
> _Read Only_
>
> IndexOptions **indexGenerationOptions**
>
> Index option properties defining index formatting.
> _Read Only_
>
> TrackChangesPreference **trackChangesPreferences**
>
> Settings for Track changes preferences.
> _Read Only_
>
> InCopyExportOption **incopyExportOptions**
>
> Export options for the InCopy INCX document format.
> _Read Only_
>
> IMEPreference **imePreferences**
>
> Settings for IME preferences.
> _Read Only_
>
> ImageIOPreference **imageIOPreferences**
>
> Image I/O preference properties defining image-import preferences.
> _Read Only_
>
> ImagePreference **imagePreferences**
>
> Preferences for Image.
> _Read Only_
>
> StrokeFillProxySetting **strokeFillProxySettings**
>
> Settings for the stroke/fill proxy.
> _Read Only_
>
> PolygonPreference **polygonPreferences**
>
> Polygon preference properties used as defaults when creating polygons.
> _Read Only_
>
> ObjectStyle **allObjectStyles**
>
> Every object style contained by the Application.
> _Read Only_
>
> PageItemDefault **pageItemDefaults**
>
> Default page-item formatting for the Application.
> _Read Only_
>
> AlignDistributePreference **alignDistributePreferences**
>
> Alignment and distribution preferences.
> _Read Only_
>
> FrameFittingOption **frameFittingOptions**
>
> Frame fitting option applied to placed or pasted content. It can apply to a frame, object style, document, or the application.
> _Read Only_
>
> ButtonPreference **buttonPreferences**
>
> Settings for Button preferences.
> _Read Only_
>
> EPSImportPreference **epsImportPreferences**
>
> Preferences for EPS import.
> _Read Only_
>
> ImportedPageAttribute **importedPageAttributes**
>
> Attributes for placed InDesign pages.
> _Read Only_
>
> Swatch **unusedSwatches**
>
> Swatches currently unused.
> _Read Only_
>
> WatermarkPreference **watermarkPreferences**
>
> Preferences for watermarks.
> _Read Only_
>
> ContentPlacerObject **contentPlacer**
>
> Content Placer object, used for obtaining a reference to the content placer object.
> _Read Only_
>
> ConditionalTextPreference **conditionalTextPreferences**
>
> Preferences for Conditional text.
> _Read Only_
>
> ColorSetting **colorSettings**
>
> Color setting properties defining color-management defaults.
> _Read Only_
>
> LayoutGridDataInformation **layoutGridData**
>
> Default properties for layout grids.
> _Read Only_
>
> StoryGridDataInformation **storyGridData**
>
> Default properties for frame grids.
> _Read Only_
>
> CjkGridPreference **cjkGridPreferences**
>
> Settings for CJK grid preferences.
> _Read Only_
>
> GridPrintingPreference **gridPrintingPreferences**
>
> Grid printing and export preference settings.
> _Read Only_
>
> FontLockingPreference **fontLockingPreferences**
>
> Settings for Font locking preferences.
> _Read Only_
>
> MojikumiUiPreference **mojikumiUIPreferences**
>
> Settings for Mojikumi user interface preferences.
> _Read Only_
>
> String **name**
>
> Name assigned to the Application.
> _Read Only_
>
> File **fullName**
>
> Full path to the Application, including its name.
> _Read Only_
>
> File **filePath**
>
> Full path to the file.
> _Read Only_
>
> String **version**
>
> Application version string.
> _Read Only_
>
> Locale **locale**
>
> Application locale.
> _Read Only_
>
> File **activeScript**
>
> Current script being run from the Scripts panel.
> _Read Only_
>
> String **userAdobeId**
>
> Current user's adobe id.
> _Read Only_
>
> String **userGuid**
>
> Current user's GUID.
> _Read Only_
>
> Boolean **visible**
>
> True means the Application is visible.
> _Read Only_
>
> GeneralPreference **generalPreferences**
>
> Settings for General preferences.
> _Read Only_
>
> ClipboardPreference **clipboardPreferences**
>
> Clipboard preference properties for application clipboard behavior.
> _Read Only_
>
> TransformPreference **transformPreferences**
>
> Transform preference properties defining default object-transform behavior. Note: Transforming includes rotation, scaling, flipping, and shearing.
> _Read Only_
>
> Boolean **modalState**
>
> True means a modal dialog or alert is active.
> _Read Only_
>
> FeatureSetOptions **featureSet**
>
> Feature set value.
> _Read Only_
>
> String **undoName**
>
> Action name at the top of the undo stack.
> _Read Only_
>
> String **redoName**
>
> Action name at the top of the redo stack.
> _Read Only_
>
> String **undoHistory**
>
> Item names currently in the undo stack.
> _Read Only_
>
> String **redoHistory**
>
> Item names currently in the redo stack.
> _Read Only_
>
> UndoModes **activeScriptUndoMode**
>
> Undo mode used by the current script execution.
> _Read Only_
>
> String **serialNumber**
>
> User serial number.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the Application, which is an Application.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> _Read Only_
>
> DisplaySettings **displaySettings**
>
> Properties for display settings.
> _Read Only_
>
> PreflightProfiles **preflightProfiles**
>
> Collection containing preflight profiles.
> _Read Only_
>
> PreflightRules **preflightRules**
>
> Collection containing preflight rules.
> _Read Only_
>
> PreflightProcesses **preflightProcesses**
>
> Collection containing preflight processes.
> _Read Only_
>
> Panels **panels**
>
> Collection containing panels.
> _Read Only_
>
> Libraries **libraries**
>
> Collection containing object libraries.
> _Read Only_
>
> PrinterPresets **printerPresets**
>
> Collection containing printer presets.
> _Read Only_
>
> XMLExportMaps **xmlExportMaps**
>
> Collection containing XML export maps.
> _Read Only_
>
> XMLImportMaps **xmlImportMaps**
>
> Collection containing XML import maps.
> _Read Only_
>
> XMLRuleProcessors **xmlRuleProcessors**
>
> Collection containing XML rule processors.
> _Read Only_
>
> XMLTags **xmlTags**
>
> Collection containing XML tags.
> _Read Only_
>
> FlattenerPresets **flattenerPresets**
>
> Collection containing transparency flattener presets.
> _Read Only_
>
> UserDictionaries **userDictionaries**
>
> Collection containing user dictionaries.
> _Read Only_
>
> ParagraphStyleGroups **paragraphStyleGroups**
>
> Collection containing paragraph style groups.
> _Read Only_
>
> CharacterStyleGroups **characterStyleGroups**
>
> Collection containing character style groups.
> _Read Only_
>
> CharacterStyles **characterStyles**
>
> Collection containing character styles.
> _Read Only_
>
> ParagraphStyles **paragraphStyles**
>
> Collection containing paragraph styles.
> _Read Only_
>
> TextVariables **textVariables**
>
> Collection containing text variables.
> _Read Only_
>
> TableStyles **tableStyles**
>
> Collection containing table styles.
> _Read Only_
>
> TableStyleGroups **tableStyleGroups**
>
> Collection containing table style groups.
> _Read Only_
>
> CellStyles **cellStyles**
>
> Collection containing cell styles.
> _Read Only_
>
> CellStyleGroups **cellStyleGroups**
>
> Collection containing cell style groups.
> _Read Only_
>
> StrokeStyles **strokeStyles**
>
> Collection containing stroke styles.
> _Read Only_
>
> DashedStrokeStyles **dashedStrokeStyles**
>
> Collection containing dashed stroke styles.
> _Read Only_
>
> DottedStrokeStyles **dottedStrokeStyles**
>
> Collection containing dotted stroke styles.
> _Read Only_
>
> StripedStrokeStyles **stripedStrokeStyles**
>
> Collection containing striped stroke styles.
> _Read Only_
>
> DocumentPresets **documentPresets**
>
> Collection containing document presets.
> _Read Only_
>
> AutoCorrectTables **autoCorrectTables**
>
> Collection containing auto-correct tables.
> _Read Only_
>
> ParaStyleMappings **paraStyleMappings**
>
> Collection containing para style mappings.
> _Read Only_
>
> CharStyleMappings **charStyleMappings**
>
> Collection containing char style mappings.
> _Read Only_
>
> TableStyleMappings **tableStyleMappings**
>
> Collection containing table style mappings.
> _Read Only_
>
> CellStyleMappings **cellStyleMappings**
>
> Collection containing cell style mappings.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> _Read Only_
>
> IdleTasks **idleTasks**
>
> Every attachable idle task.
> _Read Only_
>
> Inks **inks**
>
> Collection containing inks.
> _Read Only_
>
> TrapPresets **trapPresets**
>
> Collection containing trap presets.
> _Read Only_
>
> PDFExportPresets **pdfExportPresets**
>
> Collection containing PDF export presets.
> _Read Only_
>
> LanguagesWithVendors **languagesWithVendors**
>
> Collection containing languages with vendors.
> _Read Only_
>
> IndexingSortOptions **indexingSortOptions**
>
> Collection containing indexing sort options.
> _Read Only_
>
> ObjectStyleGroups **objectStyleGroups**
>
> Collection containing object style groups.
> _Read Only_
>
> ObjectStyles **objectStyles**
>
> Collection containing object styles.
> _Read Only_
>
> TransformationMatrices **transformationMatrices**
>
> Collection containing transformation matrices.
> _Read Only_
>
> Fonts **fonts**
>
> Collection containing fonts.
> _Read Only_
>
> MotionPresets **motionPresets**
>
> Collection containing Motion presets.
> _Read Only_
>
> Documents **documents**
>
> Collection containing documents.
> _Read Only_
>
> Swatches **swatches**
>
> Collection containing swatches.
> _Read Only_
>
> Colors **colors**
>
> Collection containing colors.
> _Read Only_
>
> Tints **tints**
>
> Collection containing tints.
> _Read Only_
>
> Gradients **gradients**
>
> Collection containing gradients.
> _Read Only_
>
> MixedInks **mixedInks**
>
> Collection containing mixed inks.
> _Read Only_
>
> MixedInkGroups **mixedInkGroups**
>
> Collection containing mixed ink groups.
> _Read Only_
>
> ColorGroups **colorGroups**
>
> Collection containing color groups.
> _Read Only_
>
> Dialogs **dialogs**
>
> Collection containing dialogs.
> _Read Only_
>
> Conditions **conditions**
>
> Collection containing conditions for conditional text.
> _Read Only_
>
> ConditionSets **conditionSets**
>
> Collection containing condition sets for conditional text.
> _Read Only_
>
> CompositeFonts **compositeFonts**
>
> Collection containing composite fonts.
> _Read Only_
>
> NamedGrids **namedGrids**
>
> Collection containing named grids.
> _Read Only_
>
> KinsokuTables **kinsokuTables**
>
> Collection containing kinsoku tables.
> _Read Only_
>
> MojikumiTables **mojikumiTables**
>
> Collection containing mojikumi tables.
> _Read Only_
>
> Books **books**
>
> Collection containing books.
> _Read Only_
>
> NumberingLists **numberingLists**
>
> Collection containing numbered lists.
> _Read Only_
>
> Windows **windows**
>
> Collection containing windows.
> _Read Only_
>
> LayoutWindows **layoutWindows**
>
> Collection containing layout windows.
> _Read Only_
>
> StoryWindows **storyWindows**
>
> Collection containing story windows.
> _Read Only_
>
> BackgroundTasks **backgroundTasks**
>
> Collection containing background task objects.
> _Read Only_
>
> MenuActions **menuActions**
>
> Collection containing menu actions.
> _Read Only_
>
> ScriptMenuActions **scriptMenuActions**
>
> Collection containing script menu actions.
> _Read Only_
>
> Menus **menus**
>
> Collection containing menus.
> FindChangeColorOption **findChangeColorOptions**
>
> Find/change color option settings. Can also accept: NothingEnum enumerator.
> FindColorPreference **findColorPreferences**
>
> Preferences for Find color. Can also accept: NothingEnum enumerator.
> ChangeColorPreference **changeColorPreferences**
>
> Preferences for Change color. Can also accept: NothingEnum enumerator.
> FindChangeTextOption **findChangeTextOptions**
>
> Find/change text option settings. Can also accept: NothingEnum enumerator.
> FindChangeGrepOption **findChangeGrepOptions**
>
> Find/change grep option settings. Can also accept: NothingEnum enumerator.
> FindChangeGlyphOption **findChangeGlyphOptions**
>
> Find/change glyph option settings. Can also accept: NothingEnum enumerator.
> FindChangeObjectOption **findChangeObjectOptions**
>
> Find/change object option settings. Can also accept: NothingEnum enumerator.
> FindTextPreference **findTextPreferences**
>
> Preferences for Find text. Can also accept: NothingEnum enumerator.
> ChangeTextPreference **changeTextPreferences**
>
> Preferences for Change text. Can also accept: NothingEnum enumerator.
> FindGrepPreference **findGrepPreferences**
>
> Preferences for Find grep. Can also accept: NothingEnum enumerator.
> ChangeGrepPreference **changeGrepPreferences**
>
> Preferences for Change grep. Can also accept: NothingEnum enumerator.
> FindGlyphPreference **findGlyphPreferences**
>
> Preferences for Find glyph. Can also accept: NothingEnum enumerator.
> ChangeGlyphPreference **changeGlyphPreferences**
>
> Preferences for Change glyph. Can also accept: NothingEnum enumerator.
> FindObjectPreference **findObjectPreferences**
>
> Preferences for Find object. Can also accept: NothingEnum enumerator.
> ChangeObjectPreference **changeObjectPreferences**
>
> Preferences for Change object. Can also accept: NothingEnum enumerator.
> FindChangeTransliterateOption **findChangeTransliterateOptions**
>
> Find/change transliterate option settings. Can also accept: NothingEnum enumerator.
> FindTransliteratePreference **findTransliteratePreferences**
>
> Preferences for Find transliterate. Can also accept: NothingEnum enumerator.
> ChangeTransliteratePreference **changeTransliteratePreferences**
>
> Preferences for Change transliterate. Can also accept: NothingEnum enumerator.
> HttpLinkConnectionManagerObject **httpLinkConnectionManager**
>
> Experimental connection manager property.
> Mixed **userColor**
>
> Color assigned to tracked changes and notes created by the user, supplied either as three doubles from 0 to 255 for red, green, and blue, or through an InCopy UI color value. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
> String **userName**
>
> User associated with tracked changes and notes.
> Boolean **clearOverridesWhenApplyingStyle**
>
> Clear overrides before applying the object style.
> Book **activeBook**
>
> Currently active book.
> Object **selection**
>
> Currently selected object(s). Can also accept: Object or NothingEnum enumerator.
> Mixed **activeWindow**
>
> Topmost window. Can return: Window, LayoutWindow or StoryWindow.
> LiveDrawingOptions **liveScreenDrawing**
>
> Delay before mouse actions start live screen drawing of page items.
> PageItem **selectionKeyObject**
>
> Key object for the selection. Can also accept: NothingEnum enumerator.
> Document **activeDocument**
>
> Front-most document.
> String **label**
>
> String-valued label property.
> Object **properties**
>
> Object used to set multiple properties in one operation.
