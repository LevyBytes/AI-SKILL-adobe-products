# Document (part 1)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> String `BEFORE_PRINT` = beforePrint
>
> Fires before printing a Document; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_PRINT` = afterPrint
>
> Fires after printing a Document; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `AFTER_LINKS_CHANGED` = afterLinksChanged
>
> Fires after adding, deleting, or modifying one or more links in the Document; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `AFTER_NEW` = afterNew
>
> Fires after Document creation; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `AFTER_OPEN` = afterOpen
>
> Fires after a Document opens; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_SAVE` = beforeSave
>
> Fires before saving a Document; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_SAVE` = afterSave
>
> Fires after a Document save completes; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_SAVE_AS` = beforeSaveAs
>
> Fires before Save As writes a Document under a new name; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_SAVE_AS` = afterSaveAs
>
> Fires after Save As writes a Document under a new name; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_SAVE_A_COPY` = beforeSaveACopy
>
> Fires before saving a Document copy; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_SAVE_A_COPY` = afterSaveACopy
>
> Fires after a Document copy is saved; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_REVERT` = beforeRevert
>
> Fires before reverting a Document; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_REVERT` = afterRevert
>
> Fires after a Document revert; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_CLOSE` = beforeClose
>
> Fires before closing a Document; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_EXPORT` = beforeExport
>
> Fires before exporting a Document; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_EXPORT` = afterExport
>
> Fires after a Document export; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `FAILED_EXPORT` = failedExport
>
> Fires when a Document export is canceled or fails; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_IMPORT` = beforeImport
>
> Fires before file import into a Document; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_IMPORT` = afterImport
>
> Fires after file import into a Document; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_DEACTIVATE` = beforeDeactivate
>
> Fires before the Document becomes inactive; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `AFTER_ACTIVATE` = afterActivate
>
> Fires after the Document becomes active; it bubbles, but cancellation is not allowed.

## Document — Instance

> _Read Only_
>
> XMLViewPreference **xmlViewPreferences**
>
> Settings for XML view preferences.
> _Read Only_
>
> GalleyPreference **galleyPreferences**
>
> Settings for galley preferences.
> _Read Only_
>
> PreflightOption **preflightOptions**
>
> Settings for preflight options.
> _Read Only_
>
> PreflightProcess **activeProcess**
>
> Preflight process currently active for this document.
> _Read Only_
>
> DataMerge **dataMergeProperties**
>
> Properties that hold data merge fields plus related preferences.
> _Read Only_
>
> DataMergeOption **dataMergeOptions**
>
> Properties controlling how the data merge is defined.
> _Read Only_
>
> AdjustLayoutPreference **adjustLayoutPreferences**
>
> Settings for adjust layout preferences.
> _Read Only_
>
> EPubFixedLayoutExportPreference **epubFixedLayoutExportPreferences**
>
> Settings for EPub fixed layout export preferences.
> _Read Only_
>
> HTMLFXLExportPreference **htmlFXLExportPreferences**
>
> Settings for HTML FXL export preferences.
> _Read Only_
>
> PublishExportPreference **publishExportPreferences**
>
> Settings for publish export preferences.
> _Read Only_
>
> EPubExportPreference **epubExportPreferences**
>
> Settings for EPub export preferences.
> _Read Only_
>
> HTMLExportPreference **htmlExportPreferences**
>
> Settings for HTML export preferences.
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
> XMLItem **associatedXMLElement**
>
> XML element linked to the Document.
> _Read Only_
>
> ExportForWebPreference **exportForWebPreferences**
>
> Default preferences used for export for web.
> _Read Only_
>
> VersionState **versionState**
>
> Version Cue state recorded for the file.
> _Read Only_
>
> EditingState **editingState**
>
> Version Cue editing state recorded for the file.
> _Read Only_
>
> TransparencyPreference **transparencyPreferences**
>
> Settings for transparency preferences.
> _Read Only_
>
> TextFramePreference **textFramePreferences**
>
> Settings for text frame preferences.
> _Read Only_
>
> TextPreference **textPreferences**
>
> Settings for text preferences.
> _Read Only_
>
> TextDefault **textDefaults**
>
> Settings for text defaults.
> _Read Only_
>
> EndnoteOption **endnoteOptions**
>
> Settings for endnote options.
> _Read Only_
>
> DictionaryPreference **dictionaryPreferences**
>
> Settings for user dictionary preferences.
> _Read Only_
>
> StoryPreference **storyPreferences**
>
> Settings for story preferences.
> _Read Only_
>
> AnchoredObjectDefault **anchoredObjectDefaults**
>
> Settings for anchored object defaults.
> _Read Only_
>
> AnchoredObjectSetting **anchoredObjectSettings**
>
> Settings for anchored objects.
> _Read Only_
>
> BaselineFrameGridOption **baselineFrameGridOptions**
>
> Settings for baseline frame grid options.
> _Read Only_
>
> FootnoteOption **footnoteOptions**
>
> Settings for footnote options.
> _Read Only_
>
> ParagraphStyle **allParagraphStyles**
>
> All paragraph styles, including styles inside groups.
> _Read Only_
>
> CharacterStyle **allCharacterStyles**
>
> All character styles, including styles inside groups.
> _Read Only_
>
> TextWrapPreference **textWrapPreferences**
>
> Default properties used when text wraps around objects.
> _Read Only_
>
> TableStyle **allTableStyles**
>
> Complete set of Table styles.
> _Read Only_
>
> CellStyle **allCellStyles**
>
> Complete set of Cell styles.
> _Read Only_
>
> DocumentPreference **documentPreferences**
>
> Settings for document preferences.
> _Read Only_
>
> GridPreference **gridPreferences**
>
> Settings for grid preferences.
> _Read Only_
>
> GuidePreference **guidePreferences**
>
> Settings for guide preferences.
> _Read Only_
>
> MarginPreference **marginPreferences**
>
> Settings for margin preferences.
> _Read Only_
>
> PasteboardPreference **pasteboardPreferences**
>
> Settings for pasteboard preferences.
> _Read Only_
>
> ViewPreference **viewPreferences**
>
> Settings for view preferences.
> _Read Only_
>
> LinkedStoryOption **linkedStoryOptions**
>
> Options for linked stories.
> _Read Only_
>
> LinkedPageItemOption **linkedPageItemOptions**
>
> Options for Linked Page Item links.
> _Read Only_
>
> PrintPreference **printPreferences**
>
> Settings for print preferences.
> _Read Only_
>
> PrintBookletOption **printBookletOptions**
>
> Options for booklet printing.
> _Read Only_
>
> PrintBookletPrintPreference **printBookletPrintPreferences**
>
> Preferences for print booklet output.
> _Read Only_
>
> TaggedPDFPreference **taggedPDFPreferences**
>
> Preferences for Tagged PDF output.
> _Read Only_
>
> PlaceGun **placeGuns**
>
> Place gun object.
> _Read Only_
>
> MetadataPreference **metadataPreferences**
>
> Settings for metadata preferences.
> _Read Only_
>
> IndexOptions **indexGenerationOptions**
>
> Properties defining how index formatting is generated.
> _Read Only_
>
> PageItem **allPageItems**
>
> Every PageItem held by the Document.
> _Read Only_
>
> Graphic **allGraphics**
>
> Every Graphic held by the Document.
> _Read Only_
>
> ObjectStyle **allObjectStyles**
>
> Every object style held by the Document.
> _Read Only_
>
> PageItemDefault **pageItemDefaults**
>
> Default formatting for page items in the Document.
> _Read Only_
>
> FrameFittingOption **frameFittingOptions**
>
> Frame fitting option applied to placed or pasted content; it can target a frame, object style, document, or the application.
> _Read Only_
>
> ButtonPreference **buttonPreferences**
>
> Settings for button preferences.
> _Read Only_
>
> File **fullName**
>
> Full path for the Document, including its Document name.
> _Read Only_
>
> Boolean **visible**
>
> True means the Document is visible.
> _Read Only_
>
> File **filePath**
>
> File's full path.
> _Read Only_
>
> Boolean **modified**
>
> True when the Document has changed since the most recent save.
> _Read Only_
>
> Boolean **saved**
>
> True when the Document has been saved after creation.
> _Read Only_
>
> Boolean **isCloudDocument**
>
> True indicates a cloud document.
> _Read Only_
>
> String **cloudPath**
>
> Cloud path for a cloud document; otherwise an error is thrown.
> _Read Only_
>
> Swatch **unusedSwatches**
>
> Swatches currently not in use.
> _Read Only_
>
> WatermarkPreference **watermarkPreferences**
>
> Preferences for watermarks.
> _Read Only_
>
> Boolean **converted**
>
> True indicates that the Document was converted.
> _Read Only_
>
> Boolean **recovered**
>
> True indicates that the Document was recovered.
> _Read Only_
>
> Boolean **readOnly**
>
> True indicates that the Document is read-only.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Document.
> _Read Only_
>
> ConditionalTextPreference **conditionalTextPreferences**
>
> Preferences for conditional text.
> _Read Only_
>
> String **cmykProfileList**
>
> Valid CMYK profiles list.
> _Read Only_
>
> String **rgbProfileList**
>
> Valid RGB profiles list.
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
> MojikumiUiPreference **mojikumiUIPreferences**
>
> Settings for Mojikumi user interface preferences.
> _Read Only_
>
> ChapterNumberPreference **chapterNumberPreferences**
>
> Preferences for chapter numbering.
> _Read Only_
>
> Object **selectedPageItems**
>
> Selected page item(s); accepted alternatives are Object or NothingEnum enumerator.
> _Read Only_
>
> String **undoName**
>
> Name of the action at the top of the undo stack.
> _Read Only_
>
> String **redoName**
>
> Name of the action at the top of the redo stack.
> _Read Only_
>
> String **undoHistory**
>
> Items listed in the undo stack.
> _Read Only_
>
> String **redoHistory**
>
> Items listed in the redo stack.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the Document (a Application).
> _Read Only_
>
> Number **index**
>
> Document position within the containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection containing preferences objects.
> _Read Only_
>
> PreflightProfiles **preflightProfiles**
>
> Collection containing preflight profiles.
> _Read Only_
>
> DataMergeTextPlaceholders **dataMergeTextPlaceholders**
>
> Collection containing data merge text placeholders.
> _Read Only_
>
> DataMergeImagePlaceholders **dataMergeImagePlaceholders**
>
> Collection containing data merge image placeholders.
> _Read Only_
>
> DataMergeQrcodePlaceholders **dataMergeQrcodePlaceholders**
>
> Collection containing data merge QR code placeholders.
> _Read Only_
>
> XMLElements **xmlElements**
>
> Collection containing XML elements.
> _Read Only_
>
> XMLItems **xmlItems**
>
> Collection containing XML items.
> _Read Only_
>
> XMLComments **xmlComments**
>
> Collection containing XML comments.
> _Read Only_
>
> XMLInstructions **xmlInstructions**
>
> Collection containing XML instructions.
> _Read Only_
>
> DTDs **dtds**
>
> Collection containing DTDs.
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
> XmlStories **xmlStories**
>
> Collection containing xml stories.
> _Read Only_
>
> Stories **stories**
>
> Collection containing stories.
> _Read Only_
>
> XMLTags **xmlTags**
>
> Collection containing XML tags.
> _Read Only_
>
> ValidationErrors **validationErrors**
>
> Collection containing XML validation errors.
> _Read Only_
>
> TOCStyles **tocStyles**
>
> Collection containing TOC styles.
> _Read Only_
>
> HyphenationExceptions **hyphenationExceptions**
>
> Collection containing hyphenation exceptions lists.
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
> Pages **pages**
>
> Collection containing pages.
> _Read Only_
>
> Spreads **spreads**
>
> Collection containing spreads.
> _Read Only_
>
> Ovals **ovals**
>
> Collection containing ellipses.
> _Read Only_
>
> SplineItems **splineItems**
>
> Collection for spline items.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection for page items; it can process every page item within a document, page, group, or other container, no matter its type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Collection containing rectangles.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Collection containing graphic lines.
> _Read Only_
>
> TextFrames **textFrames**
>
> Collection containing text frames.
> _Read Only_
>
> Polygons **polygons**
>
> Collection containing polygons.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Collection containing endnote text frames.
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
> Sections **sections**
>
> Collection containing sections.
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
> PDFComments **pdfComments**
>
> Collection containing PDF comment objects.
> _Read Only_
>
> MasterSpreads **masterSpreads**
>
> Collection containing master spreads.
> _Read Only_
>
> Links **links**
>
> Collection containing links.
> _Read Only_
>
> Languages **languages**
>
> Collection containing languages.
> _Read Only_
>
> Layers **layers**
>
> Collection containing layers.
> _Read Only_
>
> Indexes **indexes**
>
> Collection containing indexes.
> _Read Only_
>
> IndexingSortOptions **indexingSortOptions**
>
> Collection containing indexing sort options.
> _Read Only_
>
> Hyperlinks **hyperlinks**
>
> Collection containing hyperlinks.
> _Read Only_
>
> Bookmarks **bookmarks**
>
> Collection containing bookmarks.
> _Read Only_
>
> HyperlinkPageItemSources **hyperlinkPageItemSources**
>
> Collection containing hyperlink page item sources.
> _Read Only_
>
> HyperlinkTextSources **hyperlinkTextSources**
>
> Collection containing hyperlink text sources.
> _Read Only_
>
> HyperlinkTextDestinations **hyperlinkTextDestinations**
>
> Collection containing hyperlink text destinations.
> _Read Only_
>
> HyperlinkPageDestinations **hyperlinkPageDestinations**
>
> Collection containing hyperlink page destinations.
> _Read Only_
>
> CrossReferenceFormats **crossReferenceFormats**
>
> Collection containing cross reference formats.
> _Read Only_
>
> CrossReferenceSources **crossReferenceSources**
>
> Collection containing cross reference text sources.
> _Read Only_
>
> ParagraphDestinations **paragraphDestinations**
>
> Collection containing paragraph destinations.
> _Read Only_
>
> HyperlinkExternalPageDestinations **hyperlinkExternalPageDestinations**
>
> Collection containing hyperlink external page destinations.
> _Read Only_
>
> HyperlinkURLDestinations **hyperlinkURLDestinations**
>
> Collection containing hyperlink URL destinations.
> _Read Only_
>
> Guides **guides**
>
> Collection containing guides.
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
> Groups **groups**
>
> Collection containing groups.
> _Read Only_
>
> EPSTexts **epstexts**
>
> Collection for EPSTexts.
> _Read Only_
>
> FormFields **formFields**
>
> Collection containing form fields.
> _Read Only_
>
> Buttons **buttons**
>
> Collection containing buttons.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Collection containing multi-state objects.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Collection containing checkboxes.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Collection containing comboboxes.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Collection containing listboxes.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Collection containing radio buttons.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Collection containing text boxes.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Collection containing signature fields.
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
> Conditions **conditions**
>
> Collection containing conditions used for conditional text.
> _Read Only_
>
> ConditionSets **conditionSets**
>
> Collection containing condition sets used for conditional text.
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
> NumberingLists **numberingLists**
>
> Collection containing numbered lists.
> _Read Only_
>
> Assignments **assignments**
>
> Collection containing assignments.
> _Read Only_
>
> Articles **articles**
>
> Collection containing articles.
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
> String **name**
>
> Document name.
> Measurement Unit (Number or String)=any **zeroPoint**
>
> Ruler origin as page coordinates in the format [x, y].
> String **label**
>
> Settable property that accepts any string.
> Layer **activeLayer**
>
> Active layer; String is also accepted.
> String **cmykProfile**
>
> Current CMYK profile.
> String **rgbProfile**
>
> Current RGB profile.
> RenderingIntent **solidColorIntent**
>
> Rendering intent applied to vector art in native objects, including areas of solid color.
> RenderingIntent **afterBlendingIntent**
>
> Rendering intent for page colors produced after transparency blending interactions.
> RenderingIntent **defaultImageIntent**
>
> Rendering intent assigned to bitmap images.
> ColorSettingsPolicy **rgbPolicy**
>
> Policy governing RGB color handling, including profile reading and embedding, embedded-profile mismatches against the working space, and color transfer between documents.
> ColorSettingsPolicy **cmykPolicy**
>
> Policy governing CMYK color handling, including profile reading and embedding, mismatches between embedded profiles and the working space, and color transfer between documents.
> Boolean **accurateLABSpots**
>
> True uses LAB alternates for spot colors when those alternates exist.
> Object **selection**
>
> Selected object(s); accepted alternatives are Object or NothingEnum enumerator.
> PageItem **selectionKeyObject**
>
> Selection key object; NothingEnum enumerator is also accepted.
> Object **properties**
>
> Allows several properties to be set in one operation.
