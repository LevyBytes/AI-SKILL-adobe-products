# Indesign (part 63)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Point-size threshold below which text is greeked.
  \*/
  greekBelow: number

/\*\*

- Index of the DisplaySetting inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent object for the DisplaySetting (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property used to set multiple properties together.
  \*/
  properties: object

/\*\*

- Raster image display method.
  \*/
  raster: TagRaster

/\*\*

- Transparency display setting.
  \*/
  transparency: TagTransparency

/\*\*

- Vector image display method.
  \*/
  vector: TagVector

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves the object specifier and returns object references as an array.
  \*/
  getElements(): DisplaySetting[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates a string which, when executed, returns the DisplaySetting.
  \*/
  toSource(): string

/\*\*

- Returns the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Properties for display settings.
  \*/
  declare class DisplaySettings {
  /\*\*
  - Count of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Returns the DisplaySetting at the requested index.
- @param index Index value.
  \*/
  [index: number]: DisplaySetting

/\*\*

- Returns any DisplaySetting from the collection.
  \*/
  anyItem(): DisplaySetting

/\*\*

- Shows the element count for the DisplaySetting.
  \*/
  count(): number

/\*\*

- Fetches the collection's full set of DisplaySetting objects.
  \*/
  everyItem(): DisplaySetting[]

/\*\*

- Fetches the collection's first DisplaySetting.
  \*/
  firstItem(): DisplaySetting

/\*\*

- Returns the DisplaySetting identified by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): DisplaySetting

/\*\*

- Returns DisplaySettings inside the requested range.
- @param from DisplaySetting, index, or name at the range start.
- @param to DisplaySetting, index, or name at the range end.
  \*/
  itemByRange(from: DisplaySetting | number | string, to: DisplaySetting | number | string): DisplaySetting[]

/\*\*

- Fetches the collection's final DisplaySetting.
  \*/
  lastItem(): DisplaySetting

/\*\*

- Fetches the collection's middle DisplaySetting.
  \*/
  middleItem(): DisplaySetting

/\*\*

- Fetches the item after the supplied DisplaySetting.
- @param obj DisplaySetting immediately before the one requested.
  \*/
  nextItem(obj: DisplaySetting): DisplaySetting

/\*\*

- Fetches the item immediately before the supplied index.
- @param obj Index after the requested DisplaySetting.
  \*/
  previousItem(obj: DisplaySetting): DisplaySetting

/\*\*

- Creates a string which, when executed, returns the DisplaySetting.
  \*/
  toSource(): string
  }

/\*\*

- Application GPU performance settings.
  \*/
  declare class GpuPerformancePreference extends Preference {
  /\*\*
  - When true, animated zoom is enabled.
    \*/
    enableAnimatedZoom: boolean

/\*\*

- When true, GPU performance is enabled.
  \*/
  enableGpuPerformance: boolean
  }

/\*\*

- Preferences for XML view
  \*/
  declare class XMLViewPreference extends Preference {
  /\*\*
  - When true, the structure view shows attributes along with elements. Note: Applies only when show structure is true.
    \*/
    showAttributes: boolean

/\*\*

- When true, the structure view is displayed.
  \*/
  showStructure: boolean

/\*\*

- When true, XML tags are displayed.
  \*/
  showTagMarkers: boolean

/\*\*

- When true, tagging an item whose parent is not tagged shows the tag options dialog.
  \*/
  readonly showTagOptions: boolean

/\*\*

- When true, tagged frames display XML tags.
  \*/
  showTaggedFrames: boolean

/\*\*

- When true, text snippets from element content appear in the structure view. Note: Applies only when show structure is true.
  \*/
  showTextSnippets: boolean
  }

/\*\*

- Options for preflight.
  \*/
  declare class PreflightOption extends Preference {
  /\*\*
  - When true, the working profile is embedded while creating a new document.
    \*/
    preflightEmbedWorkingProfile: boolean

/\*\*

- When true, preflight includes objects that do not print.
  \*/
  preflightIncludeNonprintingObjects: boolean

/\*\*

- When true, preflight includes objects on pasteboard.
  \*/
  preflightIncludeObjectsOnPasteboard: boolean

/\*\*

- When true, preflight is disabled for every document or for the current document.
  \*/
  preflightOff: boolean

/\*\*

- Rule applied on document or book open that chooses between an embedded profile and another profile when preflight is enabled.
  \*/
  preflightProfilePolicy: PreflightProfileOptions

/\*\*

- Pages or documents selected for preflight, supplied either as an enumeration or a string. Use a hyphen (-) in the string for ranges, and use a comma (,) for separate pages.
  \*/
  preflightScope: PreflightScopeOptions | string

/\*\*

- Layers selected for preflight.
  \*/
  preflightWhichLayers: PreflightLayerOptions

/\*\*

- Active preflight profile.
  \*/
  preflightWorkingProfile: PreflightProfile | string
  }

/\*\*

- Options for preflighting books.
  \*/
  declare class PreflightBookOption extends Preference {
  /\*\*
  - When true, preflight includes objects that do not print.
    \*/
    preflightIncludeNonprintingObjects: boolean

/\*\*

- When true, preflight includes objects on pasteboard.
  \*/
  preflightIncludeObjectsOnPasteboard: boolean

/\*\*

- Rule applied on document or book open that chooses between an embedded profile and another profile when preflight is enabled.
  \*/
  preflightProfilePolicy: PreflightProfileOptions

/\*\*

- Pages or documents selected for preflight, supplied either as an enumeration or a string. Use a hyphen (-) in the string for ranges, and use a comma (,) for separate pages.
  \*/
  preflightScope: PreflightScopeOptions | string

/\*\*

- Layers selected for preflight.
  \*/
  preflightWhichLayers: PreflightLayerOptions

/\*\*

- Active preflight profile.
  \*/
  preflightWorkingProfile: PreflightProfile | string
  }

/\*\*

- Preferences controlling PNG export.
  \*/
  declare class PNGExportPreference extends Preference {
  /\*\*
  - When true, exported text and vectors use anti-aliasing.
    \*/
    antiAlias: boolean

/\*\*

- Export resolution given as a real number rather than an integer. (Range: 1.0 to 2400.0)
  \*/
  exportResolution: number

/\*\*

- When true, each spread exports as one PNG file. When false, facing pages export as separate files and sequential numbers are appended to each file name.
  \*/
  exportingSpread: boolean

/\*\*

- Page or pages selected for export, supplied as one page number or an array of page numbers. Note: Used unless PNG export range is all.
  \*/
  pageString: string

/\*\*

- RGB or Gray
  \*/
  pngColorSpace: PNGColorSpaceEnum

/\*\*

- Page range selected for export.
  \*/
  pngExportRange: PNGExportRangeEnum

/\*\*

- Compression quality setting.
  \*/
  pngQuality: PNGQualityEnum

/\*\*

- When true, spot and process color overprint effects are simulated as they would be during printing.
  \*/
  simulateOverprint: boolean

/\*\*

- When true, the exported PNG uses a transparent background.
  \*/
  transparentBackground: boolean

/\*\*

- When true, exported PNG output uses the document's bleed settings.
  \*/
  useDocumentBleeds: boolean
  }

/\*\*

- Preferences for buttons.
  \*/
  declare class ButtonPreference extends Preference {
  /\*\*
  - Name assigned to the ButtonPreference.
    \*/
    name: string
    }

/\*\*

- Watermark preferences
  \*/
  declare class WatermarkPreference extends Preference {
  /\*\*
  - Document watermark print flag
    \*/
    watermarkDoPrint: boolean

/\*\*

- Document watermark draw-in-back flag
  \*/
  watermarkDrawInBack: boolean

/\*\*

- Document watermark font color.
  \*/
  watermarkFontColor: [number, number, number] | UIColors

/\*\*

- Display name for the watermark font family
  \*/
  watermarkFontFamily: string

/\*\*

- Document watermark font point size
  \*/
  watermarkFontPointSize: number

/\*\*

- Watermark font style name
  \*/
  watermarkFontStyle: string

/\*\*

- Document watermark horizontal offset
  \*/
  watermarkHorizontalOffset: number | string

/\*\*

- Document watermark horizontal position enum
  \*/
  watermarkHorizontalPosition: WatermarkHorizontalPositionEnum

/\*\*

- Watermark opacity percentage. (Range: 0 to 100)
  \*/
  watermarkOpacity: number

/\*\*

- Document watermark rotation
  \*/
  watermarkRotation: number

/\*\*

- Document watermark text
  \*/
  watermarkText: string

/\*\*

- Document watermark vertical offset
  \*/
  watermarkVerticalOffset: number | string

/\*\*

- Document watermark vertical position enum
  \*/
  watermarkVerticalPosition: WatermarkVerticalPositionEnum

/\*\*

- Document watermark visibility flag
  \*/
  watermarkVisibility: boolean
  }

/\*\*

- Preferences for the general application.
  \*/
  declare class GeneralPreference extends Preference {
  /\*\*
  - When true, the application bar is displayed.
    \*/
    readonly applicationBarShown: boolean

/\*\*

- When true, a char style made through the new char style dialog is also exported to CC Libraries
  \*/
  autoAddCharStyleToCCLibraries: boolean

/\*\*

- When true, a para style made through the new para style dialog is also exported to CC Libraries
  \*/
  autoAddParaStyleToCCLibraries: boolean

/\*\*

- When true, a swatch made through the new swatch dialog is also exported to CC Libraries
  \*/
  autoAddSwatchToCCLibraries: boolean

/\*\*

- When true, panel drawers collapse automatically.
  \*/
  autoCollapseIconPanels: boolean

/\*\*

- When true, reveal strips appear vertically when the palette UI is hidden.
  \*/
  autoShowHiddenPanels: boolean

/\*\*

- Glyph-count threshold that triggers font subsetting based on how many glyphs the font contains.
  \*/
  completeFontDownloadGlyphLimit: number

/\*\*

- Enables link creation during content place
  \*/
  createLinksOnContentPlace: boolean

/\*\*

- Value, in pixels per inch, used when custom monitor resolution is active
  \*/
  customMonitorPpi: number

/\*\*

- When true, content-aware fit is enabled by default while placing items
  \*/
  enableContentAwareFit: boolean

/\*\*

- When true, users can dock floating windows as tabs.
  \*/
  enableFloatingWindowDocking: boolean

/\*\*

- Controls whether multi-touch gestures are enabled.
  \*/
  enableMultiTouchGestures: boolean

/\*\*

- Controls whether vector graphics are greeked while dragging at high quality.
  \*/
  greekVectorGraphicsOnDrag: boolean

/\*\*

- Controls whether the selection tool highlights the object underneath it.
  \*/
  highlightObjectUnderSelectionTool: boolean

/\*\*

- When true, saved documents include a preview.
  \*/
  includePreview: boolean

/\*\*

- Main monitor resolution value reported by the system
  \*/
  readonly mainMonitorPpi: number

/\*\*

- Enables style mapping while content is placed
  \*/
  mapStylesOnContentPlace: boolean

/\*\*

- Sets whether page items follow a page that is repositioned from the UI. The option/alt key temporarily flips this setting
  \*/
  objectsMoveWithPage: boolean

/\*\*

- When true, documents open as tabs.
  \*/
  openDocumentsAsTabs: boolean

/\*\*

- Count of items shown in the Open Recent menu list. Range: 0 to 30
  \*/
  openRecentLength: number

/\*\*

- Method used for page numbering.
  \*/
  pageNumbering: PageNumberingOptions

/\*\*

- When true, panels show Large Tabs; otherwise they show Smaller tabs
  \*/
  panelTabHeightPreference: boolean

/\*\*

- Pasteboard color preference value (0 or 1). Use 0 for Default White, and use 1 for Match with Theme Color.
  \*/
  pasteboardColorPreference: number

/\*\*

- Controls whether thumbnails of imported files appear in the Place icon.
  \*/
  placeCursorUsesThumbnails: boolean

/\*\*

- Controls whether locked items can still be selected and interacted with. When this is off, only position is locked.
  \*/
  preventSelectingLockedItems: boolean

/\*\*

- Pages used to create preview images. Note: Applies only when include preview is true.
  \*/
  previewPages: PreviewPagesOptions

/\*\*

- Size used for previews. Note: Applies only when include preview is true.
  \*/
  previewSize: PreviewSizeOptions

/\*\*

- Controls whether the anchor object adornment appears.
  \*/
  showAnchorObjectAdornment: boolean

/\*\*

- Controls whether the content grabber adornment appears.
  \*/
  showContentGrabber: boolean

/\*\*

- Shows the conveyor when the content collector or content placer tool activates
  \*/
  showConveyor: boolean

/\*\*

- When true, pressing Ctrl/Cmd + N shows the legacy new document dialog.
  \*/
  showLegacyNewDocumentDialog: boolean

/\*\*

- Controls whether the live corners grabber adornment appears.
  \*/
  showLiveCorners: boolean

/\*\*

- Controls whether the master page overlay appears when the Page Tool selects a page.
  \*/
  showMasterPageOverlay: boolean

/\*\*

- When true, the start workspace appears when no documents are open
  \*/
  showStartWorkspace: boolean

/\*\*

- When true, unlicensed stock images show the stock cart adornment
  \*/
  showStockPurchaseAdornment: boolean

/\*\*

- Controls whether transformation information is shown dynamically with the cursor while page items are manipulated.
  \*/
  showTransformationValues: boolean

/\*\*

- When true, the What's New dialog appears at startup.
  \*/
  showWhatsNewOnStartup: boolean

/\*\*

- Location used for temporary file storage.
  \*/
  temporaryFolder: File

/\*\*

- Tool tip behavior.
  \*/
  toolTips: ToolTipOptions

/\*\*

- Controls how the Tools panel appears.
  \*/
  toolsPanel: ToolsPanelOptions

/\*\*

- Brightness setting for Application User Interface, from 0.0 to 1.0. Color theme presets use 0.0 for Dark, 0.50 for Medium Dark, 0.51 for Medium Bright, and 1.0 for Bright. Intermediate values map automatically to the nearest preset.
  \*/
  uiBrightnessPreference: number

/\*\*

- When true, ungrouped objects return to their original layers.
  \*/
  ungroupRemembersLayers: boolean

/\*\*

- When true, the application runs inside a frame.
  \*/
  readonly useApplicationFrame: boolean

/\*\*

- Enables a custom monitor resolution in pixels per inch instead of reading system settings
  \*/
  useCustomMonitorResolution: boolean

/\*\*

- When true, incoming spot color definitions are used during conflicts while placing or pasting content
  \*/
  useIncomingSpotUponConflict: boolean
  }

/\*\*

- Preferences for the clipboard.
  \*/
  declare class ClipboardPreference extends Preference {
  /\*\*
  - When true, PDF is copied to the clipboard.
    \*/
    copyPDFToClipboard: boolean

/\*\*

- When true, pasted objects cut or copied from different layers keep their layer assignments.
  \*/
  pasteRemembersLayers: boolean

/\*\*

- When true, PDF is pasted when available.
  \*/
  preferPDFWhenPasting: boolean

/\*\*

- When true, pasted text includes text attributes.
  \*/
  preferStyledTextWhenPasting: boolean

/\*\*

- When true, PDF data remains on the system clipboard after the application exits.
  \*/
  preservePdfClipboardAtQuit: boolean

/\*\*

- When true, paste options are shown during paste.
  \*/
  showPasteOptions: boolean
  }

/\*\*

- Preferences for transforms.
  \*/
  declare class TransformPreference extends Preference {
  /\*\*
  - When true, scaling objects also scales transparency effects.
    \*/
    adjustEffectsWhenScaling: boolean

/\*\*

- When true, scaling objects also scales strokes.
  \*/
  adjustStrokeWeightWhenScaling: boolean

/\*\*

- When true, object dimensions include stroke weight. When false, object measurement starts from the path or frame.
  \*/
  dimensionsIncludeStrokeWeight: boolean

/\*\*

- When true, object x and y values are measured relative to the containing frame. When false, x and y values are measured relative to rulers.
  \*/
  showContentOffset: boolean

/\*\*

- When true, transformation values are relative to the parent object. When false, those values are absolute.
  \*/
  transformationsAreTotals: boolean

/\*\*

- Method for scaling a page item.
  \*/
  whenScaling: WhenScalingOptions
  }

/\*\*

- Preferences for notes.
  \*/
  declare class NotePreference extends Preference {
  /\*\*
  - When true, Find/Change commands include inline notes content (in Galley and Story views only).
    \*/
    findAndReplaceNoteContents: boolean

/\*\*

- Background color used for notes.
  \*/
  noteBackgroundColor: NoteBackgrounds

/\*\*

- Note color, supplied either as three-double array values in the range 0 to 255 for R, G, and B, or as an InCopy UI color.
  \*/
  noteColor: [number, number, number] | InCopyUIColors

/\*\*

- Color choice used for notes.
  \*/
  noteColorChoices: NoteColorChoices

/\*\*

- When true, layout-view note anchors and galley/story-view note bookends show note information plus some content on hover.
  \*/
  showNoteTips: boolean

/\*\*

- When true, Spell Check includes inline notes content (in Galley and Story views only).
  \*/
  spellCheckNotes: boolean
  }

/\*\*

- Preferences for tracked changes.
  \*/
  declare class TrackChangesPreference extends Preference {
  /\*\*
  - Background color choice for added text.
    \*/
    addedBackgroundColorChoice: ChangeBackgroundColorChoices

/\*\*

- Text color choice for added text.
  \*/
  addedTextColorChoice: ChangeTextColorChoices

/\*\*

- Background color for added text, given as an InCopy UI color. Note: Used only if the added background option is change background uses change pref color.
  \*/
  backgroundColorForAddedText: [number, number, number] | InCopyUIColors

/\*\*

- Background color for deleted text, given as an InCopy UI color. Note: Used only if the deleted background option is change background uses change pref color.
  \*/
  backgroundColorForDeletedText: [number, number, number] | InCopyUIColors

/\*\*

- Background color for moved text, given as an InCopy UI color. Note: Used only if the moved background option is change background uses change pref color.
  \*/
  backgroundColorForMovedText: [number, number, number] | InCopyUIColors

/\*\*

- Change bar color, given as an InCopy UI color.
  \*/
  changeBarColor: [number, number, number] | InCopyUIColors

/\*\*

- Background color choice for deleted text.
  \*/
  deletedBackgroundColorChoice: ChangeBackgroundColorChoices

/\*\*

- Text color choice for deleted text.
  \*/
  deletedTextColorChoice: ChangeTextColorChoices

/\*\*

- Change bar location.
  \*/
  locationForChangeBar: ChangebarLocations

/\*\*

- Marking used to identify added text.
  \*/
  markingForAddedText: ChangeMarkings

/\*\*

- Marking used to identify deleted text.
  \*/
  markingForDeletedText: ChangeMarkings

/\*\*

- Marking used to identify moved text.
  \*/
  markingForMovedText: ChangeMarkings

/\*\*

- Background color choice for moved text.
  \*/
  movedBackgroundColorChoice: ChangeBackgroundColorChoices

/\*\*

- Text color choice for moved text.
  \*/
  movedTextColorChoice: ChangeTextColorChoices

/\*\*

- When true, duplicate user colors are prevented for tracked changes background color.
  \*/
  preventDuplicateColor: boolean

/\*\*

- When true, added text is displayed.
  \*/
  showAddedText: boolean

/\*\*

- When true, change bars are displayed,
  \*/
  showChangeBars: boolean

/\*\*

- When true, deleted text is displayed.
  \*/
  showDeletedText: boolean

/\*\*

- When true, moved text is displayed.
  \*/
  showMovedText: boolean

/\*\*

- When true, deleted text is included by the Spell Check command.
  \*/
  spellCheckDeletedText: boolean

/\*\*

- Color for added text, given as an InCopy UI color. Note: Used only if the added text option is change uses change pref color.
  \*/
  textColorForAddedText: [number, number, number] | InCopyUIColors

/\*\*

- Color for deleted text, given as an InCopy UI color. Note: Used only if the deleted text option is change uses change pref color.
  \*/
  textColorForDeletedText: [number, number, number] | InCopyUIColors

/\*\*

- Color for moved text, given as an InCopy UI color. Note: Used only if the moved text option is change uses change pref color.
  \*/
  textColorForMovedText: [number, number, number] | InCopyUIColors
  }

/\*\*

- Preferences controlling JPEG export.
  \*/
  declare class JPEGExportPreference extends Preference {
  /\*\*
  - When true, exported text and vectors use anti-aliasing.
    \*/
    antiAlias: boolean

/\*\*

- True embeds the color profile; false leaves it out.
  \*/
  embedColorProfile: boolean

/\*\*

- Export resolution given as a real number rather than an integer. (Range: 1.0 to 2400.0)
  \*/
  exportResolution: number

/\*\*

- When true, each spread exports as one JPEG file. When false, facing pages export as separate files whose names receive sequential suffixes.
  \*/
  exportingSpread: boolean

/\*\*

- One of RGB, CMYK or Gray
  \*/
  jpegColorSpace: JpegColorSpaceEnum

/\*\*

- Page range selected for export.
  \*/
  jpegExportRange: ExportRangeOrAllPages

/\*\*

- Compression quality setting.
  \*/
  jpegQuality: JPEGOptionsQuality

/\*\*

- Rendering style setting.
  \*/
  jpegRenderingStyle: JPEGOptionsFormat

/\*\*

- Page or pages to export, supplied as a page number or an array of page numbers. Note: Applies when JPEG export range is not all.
  \*/
  pageString: string

/\*\*

- When true, spot and process color overprint effects are simulated as they would be during printing.
  \*/
  simulateOverprint: boolean

/\*\*

- When true, exported JPEG output uses the document's bleed settings.
  \*/
  useDocumentBleeds: boolean
  }

/\*\*

- Preferences controlling data merge.
  \*/
  declare class DataMergePreference extends Preference {
  /\*\*
  - Order for placing multiple records on the target document page.
    \*/
    arrangeBy: ArrangeBy

/\*\*

- Offset value for the bottom margin in the target document.
  \*/
  bottomMargin: number | string

/\*\*

- Space amount between record columns in the target document.
  \*/
  columnSpacing: number | string

/\*\*

- Offset value for the left margin in the target document.
  \*/
  leftMargin: number | string

/\*\*

- Record number selected for merge. Note: Applies only when record selection is one record.
  \*/
  recordNumber: number

/\*\*

- Record range selected for merge. Note: Applies only when record selection is range.
  \*/
  recordRange: string

/\*\*

- Records selected for merge.
  \*/
  recordSelection: RecordSelection

/\*\*

- Number of records placed on each page in the document.
  \*/
  recordsPerPage: RecordsPerPage

/\*\*

- Offset value for the right margin in the target document.
  \*/
  rightMargin: number | string

/\*\*

- Space amount between record rows in the target document.
  \*/
  rowSpacing: number | string

/\*\*

- Offset value for the top margin in the target document.
  \*/
  topMargin: number | string

/\*\*

- When true, missing images are listed in the specified output file.
- @param outputMissingImagesReportFile Path to the output file.
  \*/
  alertMissingImages(outputMissingImagesReportFile: File): boolean
  }
